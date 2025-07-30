/// <mls shortName="organismAdminSidebar" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-sidebar-102009')
export class _102009_organismAdminSidebar extends IcaOrganismBase {
  render() {
    return html`
      <div class="sidebar" id="admin-sidebar-1">
  <ul class="sidebar-menu" id="admin-sidebar-2">
    <li class="menu-item active" id="admin-sidebar-3">
      <a href="#services" class="menu-link" id="admin-sidebar-4">
        <span class="icon" id="admin-sidebar-5">🛁</span>
        <span class="text" id="admin-sidebar-6">Serviços</span>
      </a>
    </li>
    <li class="menu-item" id="admin-sidebar-7">
      <a href="#products" class="menu-link" id="admin-sidebar-8">
        <span class="icon" id="admin-sidebar-9">🛍️</span>
        <span class="text" id="admin-sidebar-10">Produtos</span>
      </a>
    </li>
    <li class="menu-item" id="admin-sidebar-11">
      <a href="#appointments" class="menu-link" id="admin-sidebar-12">
        <span class="icon" id="admin-sidebar-13">📅</span>
        <span class="text" id="admin-sidebar-14">Agendamentos</span>
      </a>
    </li>
    <li class="menu-item" id="admin-sidebar-15">
      <a href="#customers" class="menu-link" id="admin-sidebar-16">
        <span class="icon" id="admin-sidebar-17">👥</span>
        <span class="text" id="admin-sidebar-18">Clientes</span>
      </a>
    </li>
    <li class="menu-item" id="admin-sidebar-19">
      <a href="#reports" class="menu-link" id="admin-sidebar-20">
        <span class="icon" id="admin-sidebar-21">📊</span>
        <span class="text" id="admin-sidebar-22">Relatórios</span>
      </a>
    </li>
    <li class="menu-item" id="admin-sidebar-23">
      <a href="#settings" class="menu-link" id="admin-sidebar-24">
        <span class="icon" id="admin-sidebar-25">⚙️</span>
        <span class="text" id="admin-sidebar-26">Configurações</span>
      </a>
    </li>
  </ul>
</div>

    `
  }
}