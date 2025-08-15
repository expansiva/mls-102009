/// <mls shortName="organismSearchBar" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-search-bar-102009')
export class organismSearchBar extends IcaOrganismBase {
    render(){
        return html`<section class="search-bar" id="busca" aria-label="Busca de pacotes">
        <form class="search-bar__form" role="search" aria-label="Buscar pacotes" id="travel--search-bar-102009-1">
          <label for="destino" class="search-bar__label" id="travel--search-bar-102009-2">Destino</label>
          <input type="text" id="destino" name="destino" class="search-bar__input" placeholder="Para onde você quer ir?" autocomplete="off">
          <label for="data" class="search-bar__label" id="travel--search-bar-102009-3">Data</label>
          <input type="date" id="data" name="data" class="search-bar__input">
          <button type="submit" class="search-bar__button" id="travel--search-bar-102009-4">Buscar</button>
        </form>
      </section>
    `
    }
}