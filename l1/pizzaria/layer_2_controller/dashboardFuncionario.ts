/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.ts" enhancement="_blank" />
/**
* @screen dashboardFuncionario
* @page dashboardFuncionario
* @actor staff
* @purpose Painel principal para funcionários acompanharem pedidos, status de produção, e métricas rápidas da pizzaria.
*/
// ── entity interfaces ─────────────────────────────────────────────
export interface staff {
name      : string;
role      : string;
avatarUrl?: string;
}

export interface pedido {
id           : string;
clienteNome? : string;
status       : string;
horaPedido   : string;
itens        : itemPedido[];
}

export interface itemPedido {
produtoNome : string;
quantidade  : string;
}

export interface dashboardResumo {
totalPedidosHoje : string;
emProducao       : string;
prontos          : string;
atrasados        : string;
}

// ── TempStateAction ───────────────────────────────────────────────
export enum TempStateAction {
AUTO_REFRESH = 'autoRefresh',
FILTRO_STATUS = 'filtroStatus',
}

// ── NavigationFieldsAction ────────────────────────────────────────
export enum NavigationFieldsAction {
LOGOUT             = 'logout',
VER_DETALHES_PEDIDO = 'verDetalhesPedido',
}

// ── EmitsAction ───────────────────────────────────────────────────
export enum EmitsAction {
LOGOUT            = 'logout',
PEDIDO_SELECIONADO = 'pedidoSelecionado',
}

// ── action state enums ────────────────────────────────────────────
export enum Loading {
IDLE    = 'idle',
LOADING = 'loading',
SUCCESS = 'success',
ERROR   = 'error',
}

// ── mocks ─────────────────────────────────────────────────────────
export const Mock_staff: staff[] = [
{
name      : 'Alice Oliveira',
role      : 'Atendente',
avatarUrl : 'https://example.com/avatar/alice.png',
},
{
name      : 'Bruno Silva',
role      : 'Pizzaiolo',
// avatarUrl omitted
},
{
name      : 'Carla Souza',
role      : 'Gerente',
avatarUrl : 'https://example.com/avatar/carla.png',
},
];

export const Mock_pedido: pedido[] = [
{
id         : 'pedido_001',
clienteNome: 'João Lima',
status     : 'em produção',
horaPedido : '2024-03-15T18:30:00Z',
itens      : [
  { produtoNome: 'Pizza Calabresa', quantidade: '2' },
  { produtoNome: 'Refrigerante', quantidade: '1' },
],
},
{
id         : 'pedido_002',
// clienteNome omitted
status     : 'pronto',
horaPedido : '2024-03-15T18:45:00Z',
itens      : [
  { produtoNome: 'Pizza Marguerita', quantidade: '1' },
],
},
{
id         : 'pedido_003',
clienteNome: 'Maria Fernanda',
status     : 'atrasado',
horaPedido : '2024-03-15T19:00:00Z',
itens      : [
  { produtoNome: 'Pizza Portuguesa', quantidade: '3' },
],
},
];

export const Mock_itemPedido: itemPedido[] = [
{
produtoNome : 'Pizza Calabresa',
quantidade  : '2',
},
{
produtoNome : 'Pizza Marguerita',
quantidade  : '1',
},
{
produtoNome : 'Pizza Portuguesa',
quantidade  : '3',
},
];

export const Mock_dashboardResumo: dashboardResumo[] = [
{
totalPedidosHoje : '25',
emProducao       : '8',
prontos          : '12',
atrasados        : '5',
},
{
totalPedidosHoje : '30',
emProducao       : '10',
prontos          : '15',
atrasados        : '5',
},
{
totalPedidosHoje : '18',
emProducao       : '5',
prontos          : '10',
atrasados        : '3',
},
];
