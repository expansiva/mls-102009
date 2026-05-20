/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controllers/cardapio.ts" enhancement="_blank" />
import type {
  PizzariaHomeLoadParams,
  PizzariaHomeLoadResult,
  PizzariaMenuItem,
  PizzariaSeedResult,
} from '/_102009_/l1/pizzaria/module.js';
import { getPizzariaMockItems } from '/_102009_/l1/pizzaria/mock/adminMock.js';
import { AppError, ok, type BffHandler, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export async function getPizzariaMenuItemRepository(ctx: RequestContext) {
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

export const pizzariaListMenuHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await listPizzariaMenu(ctx, {
    category: typeof params.category === 'string' ? params.category : undefined,
    query: typeof params.query === 'string' ? params.query : undefined,
  }));
};

export const pizzariaGetTopItemsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await getPizzariaTopItems(ctx, parseLimit(params.limit)));
};

export const pizzariaSeedMockDataHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await seedPizzariaMockData(ctx, params.force === true));
};

export const pizzariaHomeLoadHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;
  return ok(await loadPizzariaHome(ctx, {
    category: typeof params.category === 'string' ? params.category : undefined,
    query: typeof params.query === 'string' ? params.query : undefined,
    topLimit: params.topLimit === undefined ? undefined : parseLimit(params.topLimit),
    forceSeed: params.forceSeed === true,
  }));
};
