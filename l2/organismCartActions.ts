/// <mls shortName="organismCartActions" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-actions-102009')
export class _102009_organismCartActions extends IcaOrganismBase {
  render() {
    return html`
    <div class="actions-container" id="cart-actions-1">
  <div class="action-buttons" id="cart-actions-2">
    <button class="clear-cart-btn secondary-btn" id="cart-actions-3">
      <span class="btn-icon" id="cart-actions-4">🗑️</span>
      Limpar Carrinho
    </button>
    <button class="continue-shopping-btn secondary-btn" id="cart-actions-5">
      <span class="btn-icon" id="cart-actions-6">🛍️</span>
      Continuar Comprando
    </button>
  </div>

  <div class="checkout-section" id="cart-actions-7">
    <div class="security-badges" id="cart-actions-8">
      <img src="https://images.unsplash.com/photo-1550420818-740e287f237c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBzaG9wcGluZyUyMGJhZGdlJTIwc3NsfGVufDB8fHx8MTc1MzM2NTY2Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Compra Segura" class="security-badge" id="cart-actions-9">
      <img src="https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzc2wlMjBjZXJ0aWZpY2F0ZSUyMGJhZGdlJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzUzMzY1NjYzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="SSL Certificado" class="security-badge" id="cart-actions-10">
      <span class="security-text" id="cart-actions-11">Compra 100% segura</span>
    </div>

    <button class="checkout-btn primary-btn" id="cart-actions-12">
      <span class="btn-icon" id="cart-actions-13">🔒</span>
      Finalizar Compra
      <span class="btn-total" id="cart-actions-14">R$ 225,20</span>
    </button>

    <div class="payment-methods" id="cart-actions-15">
      <span id="cart-actions-16">Aceitamos:</span>
      <div class="payment-icons" id="cart-actions-17">
        <img src="https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudCUyMGljb258ZW58MHx8fHwxNzUzMjkyMzAzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Cartão de Crédito" class="payment-icon" id="cart-actions-18">
        <img src="https://images.unsplash.com/photo-1643455464171-aaaaa1042fc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaXglMjBwYXltZW50JTIwYnJhemlsJTIwaWNvbnxlbnwwfHx8fDE3NTMyOTIzMDR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="PIX" class="payment-icon" id="cart-actions-19">
        <img src="https://images.unsplash.com/photo-1560294662-ecab97f90f92?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxib2xldG8lMjBwYXltZW50JTIwYnJhemlsJTIwaWNvbnxlbnwwfHx8fDE3NTMzNjU2NjR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Boleto" class="payment-icon" id="cart-actions-20">
      </div>
    </div>
  </div>
</div>

    `
  }
}