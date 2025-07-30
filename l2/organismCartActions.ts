/// <mls shortName="organismCartActions" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-actions-102009')
export class _102009_organismCartActions extends IcaOrganismBase {
    render(){
        return html`
      <div class="actions-container">
        <div class="action-buttons">
          <button class="clear-cart-btn secondary-btn">
            <span class="btn-icon">🗑️</span>
            Limpar Carrinho
          </button>
          <button class="continue-shopping-btn secondary-btn">
            <span class="btn-icon">🛍️</span>
            Continuar Comprando
          </button>
        </div>
        
        <div class="checkout-section">
          <div class="security-badges">
            <img src="https://images.unsplash.com/photo-1550420818-740e287f237c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBzaG9wcGluZyUyMGJhZGdlJTIwc3NsfGVufDB8fHx8MTc1MzM2NTY2Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Compra Segura" class="security-badge">
            <img src="https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzc2wlMjBjZXJ0aWZpY2F0ZSUyMGJhZGdlJTIwc2VjdXJpdHl8ZW58MHx8fHwxNzUzMzY1NjYzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="SSL Certificado" class="security-badge">
            <span class="security-text">Compra 100% segura</span>
          </div>
          
          <button class="checkout-btn primary-btn">
            <span class="btn-icon">🔒</span>
            Finalizar Compra
            <span class="btn-total">R$ 225,20</span>
          </button>
          
          <div class="payment-methods">
            <span>Aceitamos:</span>
            <div class="payment-icons">
              <img src="https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudCUyMGljb258ZW58MHx8fHwxNzUzMjkyMzAzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Cartão de Crédito" class="payment-icon">
              <img src="https://images.unsplash.com/photo-1643455464171-aaaaa1042fc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaXglMjBwYXltZW50JTIwYnJhemlsJTIwaWNvbnxlbnwwfHx8fDE3NTMyOTIzMDR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="PIX" class="payment-icon">
              <img src="https://images.unsplash.com/photo-1560294662-ecab97f90f92?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxib2xldG8lMjBwYXltZW50JTIwYnJhemlsJTIwaWNvbnxlbnwwfHx8fDE3NTMzNjU2NjR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Boleto" class="payment-icon">
            </div>
          </div>
        </div>
      </div>
    `
    }
}