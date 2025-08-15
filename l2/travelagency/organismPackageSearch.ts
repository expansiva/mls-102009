/// <mls shortName="organismPackageSearch" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-search-102009')
export class organismPackageSearch extends IcaOrganismBase {
    render(){
        return html`<form class="package-search-form" aria-label="Buscar pacotes de viagem" id="travelagency--package-search-102009-1">
        <div class="search-fields" id="travelagency--package-search-102009-2">
          <div class="search-field" id="travelagency--package-search-102009-3">
            <label for="destino" id="travelagency--package-search-102009-4">Destino</label>
            <input type="text" id="destino" name="destino" placeholder="Ex: Paris, Rio de Janeiro...">
          </div>
          <div class="search-field" id="travelagency--package-search-102009-5">
            <label for="data" id="travelagency--package-search-102009-6">Data</label>
            <input type="date" id="data" name="data">
          </div>
          <div class="search-field" id="travelagency--package-search-102009-7">
            <label for="preco" id="travelagency--package-search-102009-8">Preço até</label>
            <input type="number" id="preco" name="preco" placeholder="R$" min="0">
          </div>
        </div>
        <button type="submit" class="search-btn" id="travelagency--package-search-102009-9">Buscar Pacotes</button>
      </form>
    `
    }
}