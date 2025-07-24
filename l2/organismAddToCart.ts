/// <mls shortName="organismAddToCart" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-add-to-cart-102009')
export class _102009_organismAddToCart extends IcaOrganismBase {
    render(){
        return html`
      <div class="add-to-cart-container">
        <div class="quantity-selector">
          <label for="quantity">Quantidade:</label>
          <div class="quantity-controls">
            <button type="button" class="quantity-btn decrease" onclick="decreaseQuantity()">-</button>
            <input type="number" id="quantity" name="quantity" value="1" min="1" max="12" class="quantity-input">
            <button type="button" class="quantity-btn increase" onclick="increaseQuantity()">+</button>
          </div>
        </div>
        <div class="cart-actions">
          <button type="button" class="btn-add-cart primary">
            <span class="cart-icon">🛒</span>
            Adicionar ao Carrinho
          </button>
          <button type="button" class="btn-buy-now secondary">
            Comprar Agora
          </button>
        </div>
        <div class="shipping-info">
          <div class="shipping-calculator">
            <label for="cep">Calcular frete:</label>
            <div class="cep-input-group">
              <input type="text" id="cep" name="cep" placeholder="00000-000" class="cep-input">
              <button type="button" class="btn-calculate-shipping">Calcular</button>
            </div>
          </div>
          <div class="shipping-options" style="display: none;">
            <div class="shipping-option">
              <span class="shipping-type">Entrega Padrão</span>
              <span class="shipping-time">5-7 dias úteis</span>
              <span class="shipping-price">R$ 15,90</span>
            </div>
            <div class="shipping-option">
              <span class="shipping-type">Entrega Expressa</span>
              <span class="shipping-time">2-3 dias úteis</span>
              <span class="shipping-price">R$ 25,90</span>
            </div>
          </div>
        </div>
        <div class="product-guarantees">
          <div class="guarantee-item">
            <span class="guarantee-icon">🔒</span>
            <span class="guarantee-text">Compra 100% segura</span>
          </div>
          <div class="guarantee-item">
            <span class="guarantee-icon">↩️</span>
            <span class="guarantee-text">7 dias para troca</span>
          </div>
          <div class="guarantee-item">
            <span class="guarantee-icon">🚚</span>
            <span class="guarantee-text">Frete grátis acima de R$ 99</span>
          </div>
        </div>
      </div>
      <script>
        function increaseQuantity() {
          const input = document.getElementById('quantity');
          const currentValue = parseInt(input.value);
          const maxValue = parseInt(input.max);
          if (currentValue < maxValue) {
            input.value = currentValue + 1;
          }
        }
        
        function decreaseQuantity() {
          const input = document.getElementById('quantity');
          const currentValue = parseInt(input.value);
          const minValue = parseInt(input.min);
          if (currentValue > minValue) {
            input.value = currentValue - 1;
          }
        }
      </script>
    `
    }
}