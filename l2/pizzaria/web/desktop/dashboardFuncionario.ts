/// <mls fileReference="_102009_/l2/pizzaria/web/desktop/dashboardFuncionario.ts" enhancement="_102020_/l2/enhancementAura" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Loading } from '_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.js';
import { DashboardFuncionarioShared } from '/_102009_/l2/pizzaria/web/shared/dashboardFuncionario.js';

/// **collab_i18n_start**
const message_en: Record<string, string> = {
  name: 'Name',
  role: 'Role',
  logout: 'Logout',
  pedidosAbertos: 'Open Orders',
  filtroStatus: 'Filter by Status',
  todos: 'All',
  emProducao: 'In Production',
  prontos: 'Ready',
  atrasados: 'Delayed',
  autoRefresh: 'Auto-refresh',
  id: 'ID',
  status: 'Status',
  horaPedido: 'Order Time',
  clienteNome: 'Customer Name',
  produtoNome: 'Product Name',
  quantidade: 'Qty',
  verDetalhesPedido: 'View Order Details',
  pedidosAtrasadosCount: 'Delayed Orders: {count}',
  resumoProducao: 'Production Summary',
  totalPedidosHoje: 'Total Orders Today',
  loading: 'Loading...', 
  error: 'An error occurred.',
  retry: 'Retry',
};
const message_pt: Record<string, string> = {
  name: 'Nome',
  role: 'Cargo',
  logout: 'Sair',
  pedidosAbertos: 'Pedidos Abertos',
  filtroStatus: 'Filtrar por Status',
  todos: 'Todos',
  emProducao: 'Em Produção',
  prontos: 'Prontos',
  atrasados: 'Atrasados',
  autoRefresh: 'Atualização automática',
  id: 'ID',
  status: 'Status',
  horaPedido: 'Hora do Pedido',
  clienteNome: 'Nome do Cliente',
  produtoNome: 'Nome do Produto',
  quantidade: 'Qtd',
  verDetalhesPedido: 'Ver Detalhes do Pedido',
  pedidosAtrasadosCount: 'Pedidos Atrasados: {count}',
  resumoProducao: 'Resumo da Produção',
  totalPedidosHoje: 'Total de Pedidos Hoje',
  loading: 'Carregando...', 
  error: 'Ocorreu um erro.',
  retry: 'Tentar novamente',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

@customElement('pizzaria--web--desktop--dashboard-funcionario-102009')
export class DashboardFuncionarioPage extends DashboardFuncionarioShared {
  private msg = messages['en'];

  render() {
    const lang = document.documentElement.lang || 'en';
    this.msg = messages[lang] || messages['en'];

    // Conditional early returns
    if (this.loading) {
      return html`<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <span class="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></span>
        <span class="text-lg text-gray-700 mt-3">${this.msg.loading}</span>
      </div>`;
    }

    if (this.error) {
      return html`<div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
        <span class="text-red-600 text-lg font-semibold">${this.msg.error}</span>
        <button class="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                @click=${() => { this.loadCurrentUser(); this.loadPedidosAbertos(); this.loadResumoProducao(); }}>
          ${this.msg.retry}
        </button>
      </div>`;
    }

    // Default block
    return html`
      <div class="flex flex-col min-h-screen bg-gray-100 p-6 gap-6">
        <section class="bg-white rounded-2xl shadow-md p-6">
          <div class="flex items-center justify-between">
            ${this.staff_avatarUrl ? html`
              <img class="h-12 w-12 rounded-full object-cover mr-4" src=${this.staff_avatarUrl} alt="User Avatar" />
            ` : ''}
            <div class="flex-grow">
              <h3 class="text-xl font-semibold text-gray-800">${this.staff_name}</h3>
              <span class="text-sm text-gray-600">${this.staff_role}</span>
            </div>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    @click=${() => { this.navigateToLogout(); }}>
              ${this.msg.logout}
            </button>
          </div>
        </section>

        <section class="bg-white rounded-2xl shadow-md p-6 flex-grow">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-gray-800">${this.msg.pedidosAbertos}</h2>
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium text-gray-700 flex items-center gap-2">
                ${this.msg.filtroStatus}
                <select class="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        .value=${this.filtroStatus}
                        @input=${(e: Event) => { this.filtroStatus = (e.target as HTMLSelectElement).value; }}>
                  <option value="todos">${this.msg.todos}</option>
                  <option value="emProducao">${this.msg.emProducao}</option>
                  <option value="prontos">${this.msg.prontos}</option>
                  <option value="atrasados">${this.msg.atrasados}</option>
                </select>
              </label>
              <div class="flex items-center gap-2">
                <label class="text-sm font-medium text-gray-700 flex items-center gap-2">
                  ${this.msg.autoRefresh}
                  <input class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                         type="checkbox"
                         ?checked=${this.autoRefresh}
                         @input=${(e: Event) => { this.autoRefresh = (e.target as HTMLInputElement).checked; }} />
                </label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${this.pedidos.map((pedido) => html`
              <div class="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
                <div class="flex justify-between items-center mb-2 text-sm font-medium text-gray-700">
                  <span>${this.msg.id}: ${pedido.id}</span>
                  <span class="${pedido.status === 'atrasado' ? 'text-red-600' : 'text-green-600'}">${this.msg.status}: ${pedido.status}</span>
                  <span>${this.msg.horaPedido}: ${pedido.horaPedido}</span>
                </div>
                <div class="text-md font-semibold text-gray-800 mb-2">${this.msg.clienteNome}: ${pedido.clienteNome}</div>
                <div class="mb-3">
                  <ul class="list-disc list-inside text-sm text-gray-600">
                    ${pedido.itens.map((item) => html`
                      <li class="flex justify-between">
                        <span>${item.produtoNome}</span>
                        <span>${this.msg.quantidade}: ${item.quantidade}</span>
                      </li>
                    `)}
                  </ul>
                </div>
                <button class="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        @click=${() => { this.navigateToVerDetalhesPedido(); }}>
                  ${this.msg.verDetalhesPedido}
                </button>
              </div>
            `)}
          </div>

          <div class="mt-6 text-right text-sm font-medium text-gray-700">
            ${this.msg.pedidosAtrasadosCount.replace('{count}', String(this.pedidosAtrasadosCount))}
          </div>
        </section>

        <section class="bg-white rounded-2xl shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">${this.msg.resumoProducao}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-blue-50 rounded-lg p-4 text-center">
              <span class="block text-sm font-medium text-blue-700 mb-1">${this.msg.totalPedidosHoje}</span>
              <span class="block text-2xl font-bold text-blue-800">${this.dashboardResumo_totalPedidosHoje}</span>
            </div>
            <div class="bg-yellow-50 rounded-lg p-4 text-center">
              <span class="block text-sm font-medium text-yellow-700 mb-1">${this.msg.emProducao}</span>
              <span class="block text-2xl font-bold text-yellow-800">${this.dashboardResumo_emProducao}</span>
            </div>
            <div class="bg-green-50 rounded-lg p-4 text-center">
              <span class="block text-sm font-medium text-green-700 mb-1">${this.msg.prontos}</span>
              <span class="block text-2xl font-bold text-green-800">${this.dashboardResumo_prontos}</span>
            </div>
            <div class="bg-red-50 rounded-lg p-4 text-center">
              <span class="block text-sm font-medium text-red-700 mb-1">${this.msg.atrasados}</span>
              <span class="block text-2xl font-bold text-red-800">${this.dashboardResumo_atrasados}</span>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
