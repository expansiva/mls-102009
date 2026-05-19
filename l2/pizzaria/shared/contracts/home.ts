/// <mls fileReference="_102009_/l2/pizzaria/shared/contracts/home.ts" enhancement="_blank" />
import type {
  PizzariaMenuItem,
  PizzariaHomeLoadParams,
  PizzariaHomeLoadResult,
} from '/_102009_/l1/pizzaria/module.js';

export type PizzariaHomeRequest = PizzariaHomeLoadParams;

export interface PizzariaHomeResponse extends PizzariaHomeLoadResult {
  menu: PizzariaMenuItem[];
  topItems: PizzariaMenuItem[];
}
