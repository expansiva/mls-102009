/// <mls shortName="organismAdminSidebar" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-sidebar-102009')
export class _102009_organismAdminSidebar extends IcaOrganismBase {
    render(){
        return html`
      <div class="sidebar">
        <ul class="sidebar-menu">
          <li class="menu-item active">
            <a href="#services" class="menu-link">
              <span class="icon">🛁</span>
              <span class="text">Serviços</span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#products" class="menu-link">
              <span class="icon">🛍️</span>
              <span class="text">Produtos</span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#appointments" class="menu-link">
              <span class="icon">📅</span>
              <span class="text">Agendamentos</span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#customers" class="menu-link">
              <span class="icon">👥</span>
              <span class="text">Clientes</span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#reports" class="menu-link">
              <span class="icon">📊</span>
              <span class="text">Relatórios</span>
            </a>
          </li>
          <li class="menu-item">
            <a href="#settings" class="menu-link">
              <span class="icon">⚙️</span>
              <span class="text">Configurações</span>
            </a>
          </li>
        </ul>
      </div>
    `
    }
}