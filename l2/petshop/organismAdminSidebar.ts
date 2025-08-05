/// <mls shortName="organismAdminSidebar" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-sidebar-102009')
export class organismAdminSidebar extends IcaOrganismBase {
    render(){
        return html`<aside class="admin-sidebar" id="petshop--admin-sidebar-102009-1">
        <div class="admin-sidebar__quick" id="petshop--admin-sidebar-102009-2">
          <h3 class="admin-sidebar__title" id="petshop--admin-sidebar-102009-3">Atalhos</h3>
          <ul class="admin-sidebar__shortcuts" id="petshop--admin-sidebar-102009-4">
            <li id="petshop--admin-sidebar-102009-5"><a href="#bookings" class="admin-sidebar__shortcut" id="petshop--admin-sidebar-102009-6">Agendamentos <span class="admin-sidebar__badge admin-sidebar__badge--info" id="petshop--admin-sidebar-102009-7">3 novos</span></a></li>
            <li id="petshop--admin-sidebar-102009-8"><a href="#products" class="admin-sidebar__shortcut" id="petshop--admin-sidebar-102009-9">Produtos <span class="admin-sidebar__badge admin-sidebar__badge--success" id="petshop--admin-sidebar-102009-10">12 ativos</span></a></li>
            <li id="petshop--admin-sidebar-102009-11"><a href="#content" class="admin-sidebar__shortcut" id="petshop--admin-sidebar-102009-12">Conteúdo</a></li>
          </ul>
        </div>
        <div class="admin-sidebar__status" id="petshop--admin-sidebar-102009-13">
          <h3 class="admin-sidebar__title" id="petshop--admin-sidebar-102009-14">Status</h3>
          <ul class="admin-sidebar__status-list" id="petshop--admin-sidebar-102009-15">
            <li id="petshop--admin-sidebar-102009-16">
              <span class="admin-sidebar__status-label" id="petshop--admin-sidebar-102009-17">Agendamentos pendentes</span>
              <span class="admin-sidebar__status-value admin-sidebar__badge admin-sidebar__badge--warning" id="petshop--admin-sidebar-102009-18">2</span>
            </li>
            <li id="petshop--admin-sidebar-102009-19">
              <span class="admin-sidebar__status-label" id="petshop--admin-sidebar-102009-20">Pedidos em andamento</span>
              <span class="admin-sidebar__status-value admin-sidebar__badge admin-sidebar__badge--info" id="petshop--admin-sidebar-102009-21">1</span>
            </li>
          </ul>
        </div>
      </aside>
    `
    }
}