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





export interface PizzariaPedido {
  id: string;
  tipo: 'mesa' | 'balcao' | 'delivery';
  status:
    | 'recebido'
    | 'em preparo'
    | 'pronto'
    | 'saiu para entrega'
    | 'concluido'
    | 'cancelado'
    | 'reembolsado';
  itens: any;
  total: number;
  origem: 'interno' | 'publico';
  cliente?: string;
  enderecoEntrega?: string;
  zonaEntregaId?: string;
  taxaEntrega?: number;
}

export interface PizzariaUpdatePedidoParams {
  id: string;
  tipo?: PizzariaPedido['tipo'];
  status?: PizzariaPedido['status'];
  itens?: any;
  total?: number;
  origem?: PizzariaPedido['origem'];
  cliente?: string;
  enderecoEntrega?: string;
  zonaEntregaId?: string;
  taxaEntrega?: number;
  author?: string;
}

export interface PizzariaItemPedido {
  id: string;
  pedidoId: string;
  produtoId: string;
  quantidade: number;
  precoUnitario: number;
  observacoes?: string;
}

export interface PizzariaCombo {
  id: string;
  nome: string;
  descricao?: string;
  itens: any;
  preco: number;
  ativo: boolean;
}
export interface PizzariaPoliticaCancelamentoReembolso {
  id: string;
  condicoes: string;
  prazoMaximoMin?: number;
  permiteReembolso: boolean;
  ativo: boolean;
}
export interface PizzariaPagamento {
  id: string;
  pedidoId: string;
  metodo: 'online';
  status: string;
  valor: number;
}
export interface PizzariaUpdatePagamentoParams {
  id: string;
  pedidoId?: string;
  metodo?: PizzariaPagamento['metodo'];
  status?: string;
  valor?: number;
  author?: string;
}