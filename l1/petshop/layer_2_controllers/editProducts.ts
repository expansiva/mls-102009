/// <mls fileReference="_102009_/l1/petshop/layer_2_controllers/editProducts.ts" enhancement="_blank" />
import type {
  PetshopCatalogProduct,
  PetshopUpdateProductParams,
} from '/_102009_/l1/petshop/module.js';
import { AuditLogService, StatusHistoryService } from '/_102034_/l1/mdm/layer_3_usecases/core/DataRecordService.js';
import { AppError, ok, type BffHandler, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { getPetshopProductRepository } from '/_102009_/l1/petshop/layer_2_controllers/catalogo.js';

export async function updatePetshopProduct(
  ctx: RequestContext,
  input: PetshopUpdateProductParams,
): Promise<PetshopCatalogProduct> {
  const productId = input.productId?.trim();
  if (!productId) {
    throw new AppError('VALIDATION_ERROR', 'productId is required', 400, { field: 'productId' });
  }

  const repository = await getPetshopProductRepository(ctx);
  const current = await repository.findOne({
    where: {
      productId,
    },
  });

  if (!current) {
    throw new AppError('NOT_FOUND', 'Petshop product not found', 404, { productId });
  }

  const next: PetshopCatalogProduct = {
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
    entityType: 'PetshopProduct',
    entityId: next.productId,
    action: 'update',
    module: 'petshop',
    routine: 'petshop.updateProduct',
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
      entityType: 'PetshopProduct',
      entityId: next.productId,
      fromStatus: current.stockStatus,
      toStatus: next.stockStatus,
      reason: 'Petshop catalog stock status changed',
      reasonCode: 'PETSHOP_STOCK_STATUS_UPDATED',
      module: 'petshop',
      routine: 'petshop.updateProduct',
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

export const petshopUpdateProductHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await updatePetshopProduct(ctx, {
    productId: typeof params.productId === 'string' ? params.productId : '',
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
  } satisfies PetshopUpdateProductParams));
};
