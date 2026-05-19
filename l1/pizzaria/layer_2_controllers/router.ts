/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controllers/router.ts" enhancement="_blank" />
import type { BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  pizzariaGetTopItemsHandler,
  pizzariaHomeLoadHandler,
  pizzariaListMenuHandler,
  pizzariaSeedMockDataHandler,
  pizzariaUpdateItemHandler,
} from '/_102009_/l1/pizzaria/layer_2_controllers/catalogHandlers.js';

export function createPizzariaRouter(): Map<string, BffHandler> {
  return new Map<string, BffHandler>([
    ['pizzaria.home.load', pizzariaHomeLoadHandler],
    ['pizzaria.listMenu', pizzariaListMenuHandler],
    ['pizzaria.getTopItems', pizzariaGetTopItemsHandler],
    ['pizzaria.seedMockData', pizzariaSeedMockDataHandler],
    ['pizzaria.updateItem', pizzariaUpdateItemHandler],
  ]);
}
