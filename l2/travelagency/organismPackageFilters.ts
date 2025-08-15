/// <mls shortName="organismPackageFilters" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-filters-102009')
export class organismPackageFilters extends IcaOrganismBase {
    render(){
        return html`<form class="filters-form" id="travelagency--package-filters-102009-1">
          <div class="filter-group" id="travelagency--package-filters-102009-2">
            <label for="filter-destino" id="travelagency--package-filters-102009-3">Destino</label>
            <input type="text" id="filter-destino" name="destino" placeholder="Ex: Rio de Janeiro">
          </div>
          <div class="filter-group" id="travelagency--package-filters-102009-4">
            <label for="filter-data" id="travelagency--package-filters-102009-5">Data</label>
            <input type="date" id="filter-data" name="data">
          </div>
          <div class="filter-group" id="travelagency--package-filters-102009-6">
            <label for="filter-preco" id="travelagency--package-filters-102009-7">Preço máximo (R$)</label>
            <input type="number" id="filter-preco" name="preco" min="0" step="100" placeholder="Ex: 2000">
          </div>
          <button type="submit" class="btn-filtrar" id="travelagency--package-filters-102009-8">Filtrar</button>
        </form>
      `
    }
}