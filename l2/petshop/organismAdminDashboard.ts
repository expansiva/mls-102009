/// <mls shortName="organismAdminDashboard" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-dashboard-102009')
export class organismAdminDashboard extends IcaOrganismBase {
    render(){
        return html`<section class="admin-dashboard" id="dashboard">
        <h1 class="admin-dashboard__title" id="petshop--admin-dashboard-102009-1">Visão Geral</h1>
        <div class="admin-dashboard__metrics" id="petshop--admin-dashboard-102009-2">
          <div class="admin-dashboard__metric" id="petshop--admin-dashboard-102009-3">
            <span class="admin-dashboard__metric-label" id="petshop--admin-dashboard-102009-4">Agendamentos Hoje</span>
            <span class="admin-dashboard__metric-value" id="petshop--admin-dashboard-102009-5">5</span>
          </div>
          <div class="admin-dashboard__metric" id="petshop--admin-dashboard-102009-6">
            <span class="admin-dashboard__metric-label" id="petshop--admin-dashboard-102009-7">Vendas do Mês</span>
            <span class="admin-dashboard__metric-value" id="petshop--admin-dashboard-102009-8">R$ 2.350,00</span>
          </div>
          <div class="admin-dashboard__metric" id="petshop--admin-dashboard-102009-9">
            <span class="admin-dashboard__metric-label" id="petshop--admin-dashboard-102009-10">Novos Clientes</span>
            <span class="admin-dashboard__metric-value" id="petshop--admin-dashboard-102009-11">8</span>
          </div>
        </div>
        <div class="admin-dashboard__charts" id="petshop--admin-dashboard-102009-12">
          <div class="admin-dashboard__chart" id="petshop--admin-dashboard-102009-13">
            <img src="https://images.unsplash.com/photo-1703170815991-4737f0d0c8fd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnciVDMyVBMWZpY28lMjBkZSUyMGFnZW5kYW1lbnRvcyUyMHBldHN8ZW58MHx8fHwxNzU0NDExNTMwfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Gráfico de Agendamentos" id="petshop--admin-dashboard-102009-14">
            <span class="admin-dashboard__chart-label" id="petshop--admin-dashboard-102009-15">Agendamentos (últimos 7 dias)</span>
          </div>
          <div class="admin-dashboard__chart" id="petshop--admin-dashboard-102009-16">
            <img src="https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnciVDMyVBMWZpY28lMjBkZSUyMHZlbmRhcyUyMHBldHNob3B8ZW58MHx8fHwxNzU0NDExNTMxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Gráfico de Vendas" id="petshop--admin-dashboard-102009-17">
            <span class="admin-dashboard__chart-label" id="petshop--admin-dashboard-102009-18">Vendas (últimos 7 dias)</span>
          </div>
        </div>
      </section>
    `
    }
}