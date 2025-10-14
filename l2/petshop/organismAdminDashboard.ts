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
      </section>
    `
    }
}