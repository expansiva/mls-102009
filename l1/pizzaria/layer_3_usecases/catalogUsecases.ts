/// <mls fileReference="_102009_/l1/pizzaria/layer_3_usecases/catalogUsecases.ts" enhancement="_blank" />
import type {
  PizzariaHomeLoadParams,
  PizzariaHomeLoadResult,
  PizzariaMenuItem,
  PizzariaSeedResult,
  PizzariaUpdateItemParams,
} from '/_102009_/l1/pizzaria/module.js';
import { getPizzariaMockItems } from '/_102009_/l1/pizzaria/mock/adminMock.js';
import { AuditLogService, StatusHistoryService } from '/_102034_/l1/mdm/layer_3_usecases/core/DataRecordService.js';
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

async function getPizzariaMenuItemRepository(ctx: RequestContext) {
  return ctx.data.moduleData.getTable<PizzariaMenuItem>('pizzariaMenuItem');
}

export function resetPizzariaMenuForTests() {}

export async function seedPizzariaMockData(
  ctx: RequestContext,
  force = false,
): Promise<PizzariaSeedResult> {
  const repository = await getPizzariaMenuItemRepository(ctx);
  const mockItems = getPizzariaMockItems();
  const nowIso = ctx.clock.nowIso();
  const existingRows = await repository.findMany();

  if (existingRows.length > 0 && !force) {
    return {
      insertedCount: 0,
      totalCount: existingRows.length,
      seededAt: nowIso,
    };
  }

  if (force) {
    for (const row of existingRows) {
      await repository.delete({
        where: { menuItemId: row.menuItemId },
      });
    }
  }

  for (const item of mockItems) {
    await repository.upsert({
      record: {
        ...item,
        updatedAt: nowIso,
      },
    });
  }

  return {
    insertedCount: mockItems.length,
    totalCount: mockItems.length,
    seededAt: nowIso,
  };
}

export async function listPizzariaMenu(
  ctx: RequestContext,
  input?: {
  category?: string;
  query?: string;
}) {
  const repository = await getPizzariaMenuItemRepository(ctx);
  const rows = await repository.findMany({
    orderBy: {
      field: 'name',
      direction: 'asc',
    },
  });
  const category = input?.category?.trim().toLowerCase();
  const query = input?.query?.trim().toLowerCase();

  return rows.filter((item) => {
    if (category && item.category.toLowerCase() !== category) {
      return false;
    }
    if (!query) {
      return true;
    }
    return [
      item.name,
      item.category,
      item.description,
    ].some((value) => value.toLowerCase().includes(query));
  });
}

export async function getPizzariaTopItems(
  ctx: RequestContext,
  limit = 3,
) {
  const repository = await getPizzariaMenuItemRepository(ctx);
  const rows = await repository.findMany();
  return [...rows]
    .sort((left, right) => right.highlightScore - left.highlightScore)
    .slice(0, Math.max(1, Math.min(limit, 12)));
}

export async function loadPizzariaHome(
  ctx: RequestContext,
  input?: PizzariaHomeLoadParams,
): Promise<PizzariaHomeLoadResult> {
  const seed = await seedPizzariaMockData(ctx, input?.forceSeed === true);
  const [menu, topItems] = await Promise.all([
    listPizzariaMenu(ctx, {
      category: input?.category,
      query: input?.query,
    }),
    getPizzariaTopItems(ctx, input?.topLimit ?? 3),
  ]);

  return {
    seed,
    menu,
    topItems,
  };
}

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
