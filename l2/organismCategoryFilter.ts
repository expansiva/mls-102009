/// <mls shortName="organismCategoryFilter" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-category-filter-102009')
export class _102009_organismCategoryFilter extends IcaOrganismBase {
  render() {
    return html`
<div class="category-filter" id="category-filter-1">
  <h3 id="category-filter-2">Categorias</h3>
  <div class="filter-group" id="category-filter-3">
    <label class="filter-item" id="category-filter-4">
      <input type="checkbox" name="category" value="racao" checked="" id="category-filter-5">
      <span class="checkmark" id="category-filter-6"></span>
      Ração
    </label>
    <label class="filter-item" id="category-filter-7">
      <input type="checkbox" name="category" value="brinquedos" id="category-filter-8">
      <span class="checkmark" id="category-filter-9"></span>
      Brinquedos
    </label>
    <label class="filter-item" id="category-filter-10">
      <input type="checkbox" name="category" value="acessorios" id="category-filter-11">
      <span class="checkmark" id="category-filter-12"></span>
      Acessórios
    </label>
    <label class="filter-item" id="category-filter-13">
      <input type="checkbox" name="category" value="higiene" id="category-filter-14">
      <span class="checkmark" id="category-filter-15"></span>
      Produtos de Higiene
    </label>
  </div>
  <button class="clear-filters" id="category-filter-16">Limpar Filtros</button>
</div>

      `
  }
}