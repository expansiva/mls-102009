/// <mls shortName="organismProductFilters" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-product-filters-102009')
export class organismProductFilters extends IcaOrganismBase {
    render(){
        return html`<h2 id="petshop--product-filters-102009-1">Filtrar Produtos</h2>
        <form id="petshop--product-filters-102009-2">
          <div class="filter-group" id="petshop--product-filters-102009-3">
            <label for="categoria" id="petshop--product-filters-102009-4">Categoria</label>
            <select id="categoria" name="categoria">
              <option value="" id="petshop--product-filters-102009-5">Todas</option>
              <option value="alimentos" id="petshop--product-filters-102009-6">Alimentos</option>
              <option value="brinquedos" id="petshop--product-filters-102009-7">Brinquedos</option>
              <option value="higiene" id="petshop--product-filters-102009-8">Higiene</option>
              <option value="acessorios" id="petshop--product-filters-102009-9">Acessórios</option>
            </select>
          </div>
          <div class="filter-group" id="petshop--product-filters-102009-10">
            <label for="tipo-pet" id="petshop--product-filters-102009-11">Tipo de Pet</label>
            <select id="tipo-pet" name="tipo-pet">
              <option value="" id="petshop--product-filters-102009-12">Todos</option>
              <option value="cao" id="petshop--product-filters-102009-13">Cão</option>
              <option value="gato" id="petshop--product-filters-102009-14">Gato</option>
              <option value="ave" id="petshop--product-filters-102009-15">Ave</option>
              <option value="outros" id="petshop--product-filters-102009-16">Outros</option>
            </select>
          </div>
          <div class="filter-group" id="petshop--product-filters-102009-17">
            <label for="preco" id="petshop--product-filters-102009-18">Preço</label>
            <input type="range" id="preco" name="preco" min="10" max="500" step="10" value="250">
            <div class="range-values" id="petshop--product-filters-102009-19">
              <span id="petshop--product-filters-102009-20">R$10</span>
              <span id="petshop--product-filters-102009-21">R$500</span>
            </div>
          </div>
          <div class="filter-actions" id="petshop--product-filters-102009-22">
            <button type="submit" class="apply" id="petshop--product-filters-102009-23">Aplicar</button>
            <button type="reset" class="reset" id="petshop--product-filters-102009-24">Limpar</button>
          </div>
        </form>
      `
    }
}