/// <mls shortName="organismNav" project="102009" folder="traveldreams" enhancement="_100554_enhancementLit" groupName="traveldreams" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('traveldreams--organism-nav-102009')
export class organismNav extends IcaOrganismBase {
    render(){
        return html`<div class="nav-container" id="traveldreams--nav-102009-1">
          <a href="#hero" class="logo" tabindex="0" id="traveldreams--nav-102009-2">
            <img src="https://chamados.expansiva.com.br/novosite/logo.svg" alt="Travel Dreams - Página inicial" id="traveldreams--nav-102009-3">
          </a>
          <button class="menu-toggle" aria-label="Abrir menu" aria-controls="main-menu" aria-expanded="false" id="traveldreams--nav-102009-4">
            <span aria-hidden="true" id="traveldreams--nav-102009-5">☰</span>
          </button>
          <nav id="main-menu" class="closed" aria-label="Menu principal">
            <ul id="traveldreams--nav-102009-6">
              <li id="traveldreams--nav-102009-7"><a href="#destinations" id="traveldreams--nav-102009-8">Destinos</a></li>
              <li id="traveldreams--nav-102009-9"><a href="#hotels" id="traveldreams--nav-102009-10">Hotéis</a></li>
              <li id="traveldreams--nav-102009-11"><a href="#flights" id="traveldreams--nav-102009-12">Voos</a></li>
              <li id="traveldreams--nav-102009-13"><a href="#bookings" id="traveldreams--nav-102009-14">Reservas</a></li>
              <li id="traveldreams--nav-102009-15"><a href="#login" id="traveldreams--nav-102009-16">Acessar</a></li>
              <li id="traveldreams--nav-102009-17"><a href="#signup" id="traveldreams--nav-102009-18">Criar Conta</a></li>
            </ul>
          </nav>
        </div>
      `
    }
}