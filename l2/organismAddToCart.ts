/// <mls shortName="organismAddToCart" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-add-to-cart-102009')
export class _102009_organismAddToCart extends IcaOrganismBase {
  render() {
    return html`
    <div class="add-to-cart-container" id="add-to-cart-1">
  <div class="quantity-selector" id="add-to-cart-2">
    <label for="quantity" id="add-to-cart-3">Quantidade:</label>
    <div class="quantity-controls" id="add-to-cart-4">
      <button type="button" class="quantity-btn decrease" onclick="decreaseQuantity()" id="add-to-cart-5">-</button>
      <input type="number" id="quantity" name="quantity" value="1" min="1" max="12" class="quantity-input" />
      <button type="button" class="quantity-btn increase" onclick="increaseQuantity()" id="add-to-cart-6">+</button>
    </div>
  </div>
  <div class="cart-actions" id="add-to-cart-7">
    <button type="button" class="btn-add-cart primary" id="add-to-cart-8">
      <span class="cart-icon" id="add-to-cart-9">🛒</span>
      Adicionar ao Carrinho
    </button>
    <button type="button" class="btn-buy-now secondary" id="add-to-cart-10">
      Comprar Agora
    </button>
  </div>
  <div class="shipping-info" id="add-to-cart-11">
    <div class="shipping-calculator" id="add-to-cart-12">
      <label for="cep" id="add-to-cart-13">Calcular frete:</label>
      <div class="cep-input-group" id="add-to-cart-14">
        <input type="text" id="cep" name="cep" placeholder="00000-000" class="cep-input" />
        <button type="button" class="btn-calculate-shipping" id="add-to-cart-15">Calcular</button>
      </div>
    </div>
    <div class="shipping-options" style="display: none;" id="add-to-cart-16">
      <div class="shipping-option" id="add-to-cart-17">
        <span class="shipping-type" id="add-to-cart-18">Entrega Padrão</span>
        <span class="shipping-time" id="add-to-cart-19">5-7 dias úteis</span>
        <span class="shipping-price" id="add-to-cart-20">R$ 15,90</span>
      </div>
      <div class="shipping-option" id="add-to-cart-21">
        <span class="shipping-type" id="add-to-cart-22">Entrega Expressa</span>
        <span class="shipping-time" id="add-to-cart-23">2-3 dias úteis</span>
        <span class="shipping-price" id="add-to-cart-24">R$ 25,90</span>
      </div>
    </div>
  </div>
  <div class="product-guarantees" id="add-to-cart-25">
    <div class="guarantee-item" id="add-to-cart-26">
      <span class="guarantee-icon" id="add-to-cart-27">🔒</span>
      <span class="guarantee-text" id="add-to-cart-28">Compra 100% segura</span>
    </div>
    <div class="guarantee-item" id="add-to-cart-29">
      <span class="guarantee-icon" id="add-to-cart-30">↩️</span>
      <span class="guarantee-text" id="add-to-cart-31">7 dias para troca</span>
    </div>
    <div class="guarantee-item" id="add-to-cart-32">
      <span class="guarantee-icon" id="add-to-cart-33">🚚</span>
      <span class="guarantee-text" id="add-to-cart-34">Frete grátis acima de R$ 99</span>
    </div>
  </div>
</div>

    `
  }
}