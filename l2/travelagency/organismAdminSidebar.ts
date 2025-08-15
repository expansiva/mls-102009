/// <mls shortName="organismAdminSidebar" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-admin-sidebar-102009')
export class organismAdminSidebar extends IcaOrganismBase {
    render(){
        return html`<nav class="sidebar-nav" id="travelagency--admin-sidebar-102009-1">
        <div class="sidebar-header" id="travelagency--admin-sidebar-102009-2">
          <img src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2dvJTIwYWclQzMlQUFuY2lhJTIwZGUlMjB2aWFnZW5zJTIwdHJhdmVsJTIwYWdlbmN5fGVufDB8fHx8MTc1NTEwNzgzOHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Travel Agency" class="sidebar-logo" id="travelagency--admin-sidebar-102009-3">
        </div>
        <ul class="sidebar-menu" id="travelagency--admin-sidebar-102009-4">
          <li class="sidebar-menu-item active" id="travelagency--admin-sidebar-102009-5">
            <span class="sidebar-menu-icon" id="travelagency--admin-sidebar-102009-6">🏝️</span>
            <span class="sidebar-menu-label" id="travelagency--admin-sidebar-102009-7">Pacotes</span>
          </li>
          <li class="sidebar-menu-item" id="travelagency--admin-sidebar-102009-8">
            <span class="sidebar-menu-icon" id="travelagency--admin-sidebar-102009-9">📅</span>
            <span class="sidebar-menu-label" id="travelagency--admin-sidebar-102009-10">Reservas</span>
          </li>
          <li class="sidebar-menu-item" id="travelagency--admin-sidebar-102009-11">
            <span class="sidebar-menu-icon" id="travelagency--admin-sidebar-102009-12">⭐</span>
            <span class="sidebar-menu-label" id="travelagency--admin-sidebar-102009-13">Avaliações</span>
          </li>
          <li class="sidebar-menu-item" id="travelagency--admin-sidebar-102009-14">
            <span class="sidebar-menu-icon" id="travelagency--admin-sidebar-102009-15">👤</span>
            <span class="sidebar-menu-label" id="travelagency--admin-sidebar-102009-16">Administradores</span>
          </li>
        </ul>
      </nav>
    `
    }
}