/// <mls shortName="organismProductSearch" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-product-search-102009')
export class _102009_organismProductSearch extends IcaOrganismBase {
  render() {
    return html`
  <div class="search-container" id="product-search-1">
  <div class="search-bar" id="product-search-2">
    <input type="text" placeholder="Buscar produtos..." class="search-input" id="product-search-3">
    <button class="search-button" id="product-search-4">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" id="product-search-5">
        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="product-search-6"></path>
      </svg>
    </button>
  </div>
  <div class="search-suggestions" style="display: none;" id="product-search-7">
    <div class="suggestion-item" id="product-search-8">Ração Premium</div>
    <div class="suggestion-item" id="product-search-9">Brinquedo Corda</div>
    <div class="suggestion-item" id="product-search-10">Coleira</div>
  </div>
</div>

      `
  }
}