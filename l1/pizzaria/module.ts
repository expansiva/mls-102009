/// <mls fileReference="_102009_/l1/pizzaria/module.ts" enhancement="_blank" />
export interface PizzariaMenuItem {
  menuItemId: string;
  name: string;
  category: string;
  priceInCents: number;
  currency: 'BRL';
  highlightScore: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  description: string;
  updatedAt: string;
}

export interface PizzariaSeedResult {
  insertedCount: number;
  totalCount: number;
  seededAt: string;
}

export interface PizzariaHomeLoadParams {
  category?: string;
  query?: string;
  topLimit?: number;
  forceSeed?: boolean;
}

export interface PizzariaHomeLoadResult {
  seed: PizzariaSeedResult;
  menu: PizzariaMenuItem[];
  topItems: PizzariaMenuItem[];
}

export interface PizzariaUpdateItemParams {
  menuItemId: string;
  author?: string;
  name?: string;
  category?: string;
  priceInCents?: number;
  highlightScore?: number;
  stockStatus?: PizzariaMenuItem['stockStatus'];
  description?: string;
}
