/// <mls shortName="organismCartSummary" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-cart-summary-102009')
export class organismCartSummary extends IcaOrganismBase {
    render(){
        return html`<h2 id="petshop--cart-summary-102009-1">Seu Carrinho</h2>
        <div class="cart-items" id="petshop--cart-summary-102009-2">
          <div class="cart-item" id="petshop--cart-summary-102009-3">
            <img src="https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwYmFnJTIwcHJlbWl1bXxlbnwwfHx8fDE3NTQzNDE5OTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães" id="petshop--cart-summary-102009-4">
            <div class="item-info" id="petshop--cart-summary-102009-5">
              <div class="item-name" id="petshop--cart-summary-102009-6">Ração Premium para Cães</div>
              <div class="item-qty" id="petshop--cart-summary-102009-7">Qtd: 1</div>
            </div>
            <div class="item-price" id="petshop--cart-summary-102009-8">R$ 89,90</div>
            <button class="remove-btn" title="Remover" id="petshop--cart-summary-102009-9">×</button>
          </div>
          <div class="cart-item" id="petshop--cart-summary-102009-10">
            <img src="https://images.unsplash.com/photo-1665582894071-eb5b7c4d4656?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYXQlMjBpbnRlcmFjdGl2ZSUyMHRveSUyMGNvbG9yZnVsfGVufDB8fHx8MTc1NDQxMTQxNHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo Interativo para Gatos" id="petshop--cart-summary-102009-11">
            <div class="item-info" id="petshop--cart-summary-102009-12">
              <div class="item-name" id="petshop--cart-summary-102009-13">Brinquedo Interativo para Gatos</div>
              <div class="item-qty" id="petshop--cart-summary-102009-14">Qtd: 2</div>
            </div>
            <div class="item-price" id="petshop--cart-summary-102009-15">R$ 59,80</div>
            <button class="remove-btn" title="Remover" id="petshop--cart-summary-102009-16">×</button>
          </div>
        </div>
        <div class="cart-total" id="petshop--cart-summary-102009-17">
          <span id="petshop--cart-summary-102009-18">Total</span>
          <span id="petshop--cart-summary-102009-19">R$ 149,70</span>
        </div>
        <div class="checkout-actions" id="petshop--cart-summary-102009-20">
          <button id="petshop--cart-summary-102009-21">Finalizar Compra (Cartão)</button>
          <button class="pix" id="petshop--cart-summary-102009-22">Pagar com Pix</button>
        </div>
      `
    }
}