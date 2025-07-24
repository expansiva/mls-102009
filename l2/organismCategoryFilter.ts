/// <mls shortName="organismCategoryFilter" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-category-filter-102009')
export class _102009_organismCategoryFilter extends IcaOrganismBase {
    render(){
        return html`
        <div class="category-filter">
          <h3>Categorias</h3>
          <div class="filter-group">
            <label class="filter-item">
              <input type="checkbox" name="category" value="racao" checked="">
              <span class="checkmark"></span>
              Ração
            </label>
            <label class="filter-item">
              <input type="checkbox" name="category" value="brinquedos">
              <span class="checkmark"></span>
              Brinquedos
            </label>
            <label class="filter-item">
              <input type="checkbox" name="category" value="acessorios">
              <span class="checkmark"></span>
              Acessórios
            </label>
            <label class="filter-item">
              <input type="checkbox" name="category" value="higiene">
              <span class="checkmark"></span>
              Produtos de Higiene
            </label>
          </div>
          <button class="clear-filters">Limpar Filtros</button>
        </div>
      `
    }
}