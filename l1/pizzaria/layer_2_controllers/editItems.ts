/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controllers/editItems.ts" enhancement="_blank" />
import type {
  PizzariaMenuItem,
  PizzariaUpdateItemParams,
} from '/_102009_/l1/pizzaria/module.js';
import { AuditLogService, StatusHistoryService } from '/_102034_/l1/mdm/layer_3_usecases/core/DataRecordService.js';
import { AppError, ok, type BffHandler, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { getPizzariaMenuItemRepository } from '/_102009_/l1/pizzaria/layer_2_controllers/cardapio.js';

export async function updatePizzariaItem(
  ctx: RequestContext,
  input: PizzariaUpdateItemParams,
): Promise<PizzariaMenuItem> {
  const menuItemId = input.menuItemId?.trim();
  if (!menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }

  const repository = await getPizzariaMenuItemRepository(ctx);
  const current = await repository.findOne({
    where: {
      menuItemId,
    },
  });

  if (!current) {
    throw new AppError('NOT_FOUND', 'Pizzaria menu item not found', 404, { menuItemId });
  }

  const next: PizzariaMenuItem = {
    ...current,
    name: input.name ?? current.name,
    category: input.category ?? current.category,
    priceInCents: input.priceInCents ?? current.priceInCents,
    highlightScore: input.highlightScore ?? current.highlightScore,
    stockStatus: input.stockStatus ?? current.stockStatus,
    description: input.description ?? current.description,
    updatedAt: ctx.clock.nowIso(),
  };

  await repository.upsert({
    record: next,
  });

  await AuditLogService.record(ctx, ctx.data, {
    entityType: 'PizzariaMenuItem',
    entityId: next.menuItemId,
    action: 'update',
    module: 'pizzaria',
    routine: 'pizzaria.updateItem',
    before: current as unknown as Record<string, unknown>,
    after: next as unknown as Record<string, unknown>,
    actor: input.author?.trim()
      ? {
          actorId: input.author.trim(),
          actorType: 'user',
        }
      : undefined,
  });

  if (current.stockStatus !== next.stockStatus) {
    await StatusHistoryService.record(ctx, ctx.data, {
      entityType: 'PizzariaMenuItem',
      entityId: next.menuItemId,
      fromStatus: current.stockStatus,
      toStatus: next.stockStatus,
      reason: 'Pizzaria menu item stock status changed',
      reasonCode: 'PIZZARIA_STOCK_STATUS_UPDATED',
      module: 'pizzaria',
      routine: 'pizzaria.updateItem',
      metadata: {
        name: next.name,
        category: next.category,
      },
      actor: input.author?.trim()
        ? {
            actorId: input.author.trim(),
            actorType: 'user',
          }
        : undefined,
    });
  }

  return next;
}

export const pizzariaUpdateItemHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await updatePizzariaItem(ctx, {
    menuItemId: typeof params.menuItemId === 'string' ? params.menuItemId : '',
    author: typeof params.author === 'string' ? params.author : undefined,
    name: typeof params.name === 'string' ? params.name : undefined,
    category: typeof params.category === 'string' ? params.category : undefined,
    priceInCents:
      params.priceInCents === undefined
        ? undefined
        : Number.isInteger(Number(params.priceInCents))
          ? Number(params.priceInCents)
          : undefined,
    highlightScore:
      params.highlightScore === undefined
        ? undefined
        : Number.isInteger(Number(params.highlightScore))
          ? Number(params.highlightScore)
          : undefined,
    stockStatus:
      params.stockStatus === 'in_stock' || params.stockStatus === 'low_stock' || params.stockStatus === 'out_of_stock'
        ? params.stockStatus
        : undefined,
    description: typeof params.description === 'string' ? params.description : undefined,
  } satisfies PizzariaUpdateItemParams));
};
