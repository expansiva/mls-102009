/// <mls shortName="organismProductsHighlight" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-products-highlight-102009')
export class _102009_organismProductsHighlight extends IcaOrganismBase {
    render(){
        return html`
      <section class="products-section">
        <div class="container">
          <h2 class="section-title">Produtos em Destaque</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-image">
                <img src="https://images.unsplash.com/photo-1611443522715-3220344f1a37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMyOTE4ODh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium">
                <span class="product-badge">Promoção</span>
              </div>
              <div class="product-info">
                <h3 class="product-name">Ração Premium</h3>
                <p class="product-price">R$ 89,90</p>
                <button class="btn btn-primary btn-small">Comprar</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="https://images.unsplash.com/photo-1709768669165-e213f726aa9e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGludGVyYWN0aXZlJTIwcGV0JTIwdG95fGVufDB8fHx8MTc1MzM2NTA1OXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo Interativo">
              </div>
              <div class="product-info">
                <h3 class="product-name">Brinquedo Interativo</h3>
                <p class="product-price">R$ 24,90</p>
                <button class="btn btn-primary btn-small">Comprar</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="https://images.unsplash.com/photo-1626653136079-13c09cfb2a4a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzb25hbGl6ZWQlMjBwZXQlMjBjb2xsYXIlMjB3aXRoJTIwbmFtZSUyMHRhZ3xlbnwwfHx8fDE3NTMzNjUwNjB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Coleira Personalizada">
              </div>
              <div class="product-info">
                <h3 class="product-name">Coleira Personalizada</h3>
                <p class="product-price">R$ 39,90</p>
                <button class="btn btn-primary btn-small">Comprar</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="https://images.unsplash.com/photo-1689893265427-d7da200eff05?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBoeWdpZW5lJTIwa2l0JTIwc2hhbXBvbyUyMGJydXNofGVufDB8fHx8MTc1MzM2NTA2MHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Kit Higiene">
                <span class="product-badge">Mais Vendido</span>
              </div>
              <div class="product-info">
                <h3 class="product-name">Kit Higiene</h3>
                <p class="product-price">R$ 54,90</p>
                <button class="btn btn-primary btn-small">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
    }
}