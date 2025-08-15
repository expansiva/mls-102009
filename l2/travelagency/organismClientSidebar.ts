/// <mls shortName="organismClientSidebar" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-client-sidebar-102009')
export class organismClientSidebar extends IcaOrganismBase {
    render(){
        return html`<nav class="sidebar-nav" id="travelagency--client-sidebar-102009-1">
          <ul id="travelagency--client-sidebar-102009-2">
            <li class="active" id="travelagency--client-sidebar-102009-3"><a href="#reservas" id="travelagency--client-sidebar-102009-4"><span class="icon" id="travelagency--client-sidebar-102009-5">📅</span> Minhas Reservas</a></li>
            <li id="travelagency--client-sidebar-102009-6"><a href="#avaliacoes" id="travelagency--client-sidebar-102009-7"><span class="icon" id="travelagency--client-sidebar-102009-8">⭐</span> Minhas Avaliações</a></li>
          </ul>
        </nav>
      `
    }
}