/// <mls shortName="organismFeaturedProducts" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-featured-products-102009')
export class organismFeaturedProducts extends IcaOrganismBase {
    render(){
        return html`<div class="products-container" id="petshop--featured-products-102009-1">
          <h2 id="petshop--featured-products-102009-2">Produtos em destaque</h2>
          <div class="products-list" id="petshop--featured-products-102009-3">
            <div class="product-card" id="petshop--featured-products-102009-4">
              <div class="product-image" id="petshop--featured-products-102009-5">
                <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwcHJlbWl1bSUyMHBhY2t8ZW58MHx8fHwxNzU0NDExMzE1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para cães" id="petshop--featured-products-102009-6">
              </div>
              <div class="product-title" id="petshop--featured-products-102009-7">Ração Premium Cães</div>
              <div class="product-price" id="petshop--featured-products-102009-8">R$ 89,90</div>
              <div class="product-action" id="petshop--featured-products-102009-9">
                <a href="/produtos/1" id="petshop--featured-products-102009-10">Comprar</a>
              </div>
            </div>
            <div class="product-card" id="petshop--featured-products-102009-11">
              <div class="product-image" id="petshop--featured-products-102009-12">
                <img src="https://images.unsplash.com/photo-1708979346021-e7dad8f83096?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYXQlMjB0b3klMjBpbnRlcmFjdGl2ZSUyMGNvbG9yZnVsfGVufDB8fHx8MTc1NDQxMTMxNnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo interativo para gatos" id="petshop--featured-products-102009-13">
              </div>
              <div class="product-title" id="petshop--featured-products-102009-14">Brinquedo Interativo Gatos</div>
              <div class="product-price" id="petshop--featured-products-102009-15">R$ 29,90</div>
              <div class="product-action" id="petshop--featured-products-102009-16">
                <a href="/produtos/2" id="petshop--featured-products-102009-17">Comprar</a>
              </div>
            </div>
            <div class="product-card" id="petshop--featured-products-102009-18">
              <div class="product-image" id="petshop--featured-products-102009-19">
                <img src="https://images.unsplash.com/photo-1587291086390-69a3af40cf0b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlJTIwbmV1dHJhbHxlbnwwfHx8fDE3NTQ0MTEzMTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo neutro para pets" id="petshop--featured-products-102009-20">
              </div>
              <div class="product-title" id="petshop--featured-products-102009-21">Shampoo Neutro</div>
              <div class="product-price" id="petshop--featured-products-102009-22">R$ 19,90</div>
              <div class="product-action" id="petshop--featured-products-102009-23">
                <a href="/produtos/3" id="petshop--featured-products-102009-24">Comprar</a>
              </div>
            </div>
            <div class="product-card" id="petshop--featured-products-102009-25">
              <div class="product-image" id="petshop--featured-products-102009-26">
                <img src="https://images.unsplash.com/photo-1583860332956-0cd934c28cec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBiZWQlMjBjb21mb3J0YWJsZSUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Caminha confortável para pets" id="petshop--featured-products-102009-27">
              </div>
              <div class="product-title" id="petshop--featured-products-102009-28">Caminha Confortável</div>
              <div class="product-price" id="petshop--featured-products-102009-29">R$ 119,90</div>
              <div class="product-action" id="petshop--featured-products-102009-30">
                <a href="/produtos/4" id="petshop--featured-products-102009-31">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      `
    }
}