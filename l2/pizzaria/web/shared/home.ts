/// <mls fileReference="_102009_/l2/pizzaria/web/shared/home.ts" enhancement="_blank" />
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import type { PizzariaHomeRequest, PizzariaHomeResponse } from '/_102009_/l2/pizzaria/shared/contracts/home.js';
import { execBff } from '/_102029_/l2/bffClient.js';

export async function loadPizzariaHome(params: PizzariaHomeRequest = {}, options?: BffClientOptions) {
  return execBff<PizzariaHomeResponse>('pizzaria.home.load', params, options);
}
