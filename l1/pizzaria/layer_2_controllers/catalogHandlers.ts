/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controllers/catalogHandlers.ts" enhancement="_blank" />
import { AppError, ok, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  getPizzariaTopItems,
  listPizzariaMenu,
  loadPizzariaHome,
  seedPizzariaMockData,
  updatePizzariaItem,
} from '/_102009_/l1/pizzaria/layer_3_usecases/catalogUsecases.js';
import type { PizzariaUpdateItemParams } from '/_102009_/l1/pizzaria/module.js';

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
