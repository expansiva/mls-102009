/// <mls fileReference="_102009_/l1/petshop/layer_2_controllers/catalogo.ts" enhancement="_blank" />
import type {
  PetshopCatalogProduct,
  PetshopHomeLoadParams,
  PetshopHomeLoadResult,
  PetshopSeedResult,
} from '/_102009_/l1/petshop/module.js';
import { getPetshopMockProducts } from '/_102009_/l1/petshop/mock/adminMock.js';
import { AppError, ok, type BffHandler, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export async function getPetshopProductRepository(ctx: RequestContext) {
  return ctx.data.moduleData.getTable<PetshopCatalogProduct>('petshopProduct');
}

export function resetPetshopCatalogForTests() {}

export async function seedPetshopMockData(
  ctx: RequestContext,
  force = false,
): Promise<PetshopSeedResult> {
  const repository = await getPetshopProductRepository(ctx);
  const mockProducts = getPetshopMockProducts();
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
        where: { productId: row.productId },
      });
    }
  }

  for (const product of mockProducts) {
    await repository.upsert({
      record: {
        ...product,
        updatedAt: nowIso,
      },
    });
  }

  return {
    insertedCount: mockProducts.length,
    totalCount: mockProducts.length,
    seededAt: nowIso,
  };
}

export async function listPetshopCatalog(
  ctx: RequestContext,
  input?: {
  category?: string;
  query?: string;
}) {
  const repository = await getPetshopProductRepository(ctx);
  const rows = await repository.findMany({
    orderBy: {
      field: 'name',
      direction: 'asc',
    },
  });
  const category = input?.category?.trim().toLowerCase();
  const query = input?.query?.trim().toLowerCase();

  return rows.filter((product) => {
    if (category && product.category.toLowerCase() !== category) {
      return false;
    }
    if (!query) {
      return true;
    }
    return [
      product.name,
      product.category,
      product.description,
    ].some((value) => value.toLowerCase().includes(query));
  });
}

export async function getPetshopTopProducts(
  ctx: RequestContext,
  limit = 3,
) {
  const repository = await getPetshopProductRepository(ctx);
  const rows = await repository.findMany();
  return [...rows]
    .sort((left, right) => right.highlightScore - left.highlightScore)
    .slice(0, Math.max(1, Math.min(limit, 12)));
}

export async function loadPetshopHome(
  ctx: RequestContext,
  input?: PetshopHomeLoadParams,
): Promise<PetshopHomeLoadResult> {
  const seed = await seedPetshopMockData(ctx, input?.forceSeed === true);
  const [catalog, topProducts] = await Promise.all([
    listPetshopCatalog(ctx, {
      category: input?.category,
      query: input?.query,
    }),
    getPetshopTopProducts(ctx, input?.topLimit ?? 3),
  ]);

  return {
    seed,
    catalog,
    topProducts,
  };
}

function parseLimit(value: unknown) {
  if (value === undefined) {
    return 3;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new AppError('VALIDATION_ERROR', 'limit must be a positive integer', 400);
  }

  return parsed;
}

export const petshopListCatalogHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await listPetshopCatalog(ctx, {
    category: typeof params.category === 'string' ? params.category : undefined,
    query: typeof params.query === 'string' ? params.query : undefined,
  }));
};

export const petshopGetTopProductsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await getPetshopTopProducts(ctx, parseLimit(params.limit)));
};

export const petshopSeedMockDataHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await seedPetshopMockData(ctx, params.force === true));
};

export const petshopHomeLoadHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await loadPetshopHome(ctx, {
    category: typeof params.category === 'string' ? params.category : undefined,
    query: typeof params.query === 'string' ? params.query : undefined,
    topLimit: params.topLimit === undefined ? undefined : parseLimit(params.topLimit),
    forceSeed: params.forceSeed === true,
  }));
};
