/// <mls fileReference="_102009_/l2/pizzaria/web/shared/dashboardFuncionario.ts" enhancement="_102020_/l2/enhancementAura" />

import { CollabLitElement } from '/_102027_/l2/collabLitElement.js';
import { property, state } from 'lit/decorators.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import type { staff, pedido, itemPedido, dashboardResumo } from '_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.js';
import {
  TempStateAction,
  NavigationFieldsAction,
  EmitsAction,
  Loading,
  Mock_staff,
  Mock_pedido,
  Mock_dashboardResumo,
} from '_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.js';

export class DashboardFuncionarioShared extends CollabLitElement {
  // --- @property() fields (none: no route/input params) ---

  // --- @state() fields ---
  @state() action: TempStateAction | NavigationFieldsAction | EmitsAction | null = null;
  @state() loading: boolean = false;
  @state() error: string | null = null;

  // staff fields (header)
  @state() staff_name: string = '';
  @state() staff_role: string = '';
  @state() staff_avatarUrl: string = '';

  // pedidos (main - pedidos abertos)
  @state() pedidos: pedido[] = [];

  // dashboardResumo (main - resumo produção)
  @state() dashboardResumo_totalPedidosHoje: number = 0;
  @state() dashboardResumo_emProducao: number = 0;
  @state() dashboardResumo_prontos: number = 0;
  @state() dashboardResumo_atrasados: number = 0;

  // --- Computed fields ---
  @state() pedidosAtrasadosCount: number = 0;

  // --- Temp states ---
  @state() autoRefresh: boolean = true;
  @state() filtroStatus: string = 'todos';

  // --- Action states ---
  @state() pedidosAbertosLoading: Loading = Loading.IDLE;
  @state() resumoProducaoLoading: Loading = Loading.IDLE;

  firstUpdated() {
    this.loadCurrentUser();
    this.loadPedidosAbertos();
    this.loadResumoProducao();
  }

  // --- updated() covers every Action value ---
  updated(changed: Map<string, unknown>) {
    if (changed.has('action')) {
      // EmitsAction
      if (this.action === EmitsAction.LOGOUT) this._emitLogout();
      if (this.action === EmitsAction.PEDIDO_SELECIONADO) this._emitPedidoSelecionado();
      // NavigationFieldsAction
      if (this.action === NavigationFieldsAction.LOGOUT) this.navigateToLogout();
      if (this.action === NavigationFieldsAction.VER_DETALHES_PEDIDO) this.navigateToVerDetalhesPedido();
      // TempStateAction
      if (this.action === TempStateAction.FILTRO_STATUS) this._toggleFiltroStatus();
      if (this.action === TempStateAction.AUTO_REFRESH) this._toggleAutoRefresh();
    }
  }

  // --- EmitsAction handlers ---
  private async _emitLogout() {
    this.action = null;
    this.loading = true;
    this.error = null;
    try {
      /*
      const result = await execBff<staff>(
        'auth.logout',
        {},
      );
      if (result.error) {
        this.error = result.error.message;
        this.loading = false;
        return;
      }
      */
      // No payload to distribute for logout
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = (e as Error).message;
    }
  }

  private async _emitPedidoSelecionado() {
    this.action = null;
    // This would be handled by the extending component, which knows the selected pedidoId
  }

  // --- NavigationFieldsAction handlers ---
  public navigateToLogout() {
    this.action = null;
    // e.g. router push to logout or update state
  }

  public navigateToVerDetalhesPedido() {
    this.action = null;
    // e.g. router push to pedidoDetalhe with id
  }

  // --- TempStateAction handlers ---
  private _toggleFiltroStatus() {
    this.action = null;
    // Example: toggle between status filters (the actual logic may depend on UI)
    this.filtroStatus = this.filtroStatus === 'todos' ? 'em_producao' : 'todos';
  }

  private _toggleAutoRefresh() {
    this.action = null;
    this.autoRefresh = !this.autoRefresh;
  }

  // --- Public emit methods (for extending component) ---
  public emitLogout() {
    this.action = null;
  }

  public emitPedidoSelecionado() {
    this.action = null;
  }

  // --- BFF action methods for data loading ---
  public async loadCurrentUser() {
    this.loading = true;
    this.error = null;
    try {
      /*
      const result = await execBff<staff>(
        'auth.getCurrentUser',
        {},
      );
      if (result.error) {
        this.error = result.error.message;
        this.loading = false;
        return;
      }
      const res = result.data;
      if (!res) {
        this.loading = false;
        return;
      }
      */
      const res: staff = Mock_staff[0];
      this.staff_name = res.name;
      this.staff_role = res.role;
      this.staff_avatarUrl = res.avatarUrl || '';
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = (e as Error).message;
    }
  }

  public async loadPedidosAbertos() {
    this.pedidosAbertosLoading = Loading.LOADING;
    this.loading = true;
    this.error = null;
    try {
      /*
      const result = await execBff<pedido[]>(
        'pedidos.listAbertos',
        {},
      );
      if (result.error) {
        this.error = result.error.message;
        this.pedidosAbertosLoading = Loading.error;
        this.loading = false;
        return;
      }
      const res = result.data;
      if (!res) {
        this.pedidosAbertosLoading = Loading.error;
        this.loading = false;
        return;
      }
      */
      const res: pedido[] = Mock_pedido;
      this.pedidos = res;
      this._computePedidosAtrasadosCount();
      this.pedidosAbertosLoading = Loading.SUCCESS;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.pedidosAbertosLoading = Loading.ERROR;
      this.error = (e as Error).message;
    }
  }

  public async loadResumoProducao() {
    this.resumoProducaoLoading = Loading.LOADING;
    this.loading = true;
    this.error = null;
    try {
      /*
      const result = await execBff<dashboardResumo>(
        'dashboard.getResumoProducao',
        {},
      );
      if (result.error) {
        this.error = result.error.message;
        this.resumoProducaoLoading = Loading.error;
        this.loading = false;
        return;
      }
      const res = result.data;
      if (!res) {
        this.resumoProducaoLoading = Loading.error;
        this.loading = false;
        return;
      }
      */
      const res: dashboardResumo = Mock_dashboardResumo[0];
      this.dashboardResumo_totalPedidosHoje = +res.totalPedidosHoje || 0;
      this.dashboardResumo_emProducao = +res.emProducao || 0;
      this.dashboardResumo_prontos = +res.prontos;
      this.dashboardResumo_atrasados = +res.atrasados;
      this.resumoProducaoLoading = Loading.SUCCESS;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.resumoProducaoLoading = Loading.ERROR;
      this.error = (e as Error).message;
    }
  }

  // --- Computed field methods ---
  private _computePedidosAtrasadosCount() {
    this.pedidosAtrasadosCount = this.pedidos.filter(p => p.status === 'atrasado').length;
  }
}
