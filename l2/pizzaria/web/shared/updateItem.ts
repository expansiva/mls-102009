/// <mls fileReference="_102009_/l2/pizzaria/web/shared/updateItem.ts" enhancement="_blank" />
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import type { PizzariaMenuItem, PizzariaUpdateItemParams } from '/_102009_/l2/pizzaria/shared/contracts/update-item.js';
import { execBff } from '/_102029_/l2/bffClient.js';

export async function updatePizzariaItem(params: PizzariaUpdateItemParams, options?: BffClientOptions) {
  return execBff<PizzariaMenuItem>('pizzaria.updateItem', params, options);
}
