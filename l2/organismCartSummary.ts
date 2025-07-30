/// <mls shortName="organismCartSummary" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-summary-102009')
export class _102009_organismCartSummary extends IcaOrganismBase {
    render(){
        return html`
  <div class="summary-container" id="cart-summary-1">
  <h2 class="summary-title" id="cart-summary-2">Resumo do Pedido</h2>
  <div class="summary-details" id="cart-summary-3">
    <div class="summary-line" id="cart-summary-4">
      <span id="cart-summary-5">Subtotal (4 itens)</span>
      <span id="cart-summary-6">R$ 237,20</span>
    </div>
    <div class="summary-line" id="cart-summary-7">
      <span id="cart-summary-8">Frete</span>
      <span class="free-shipping" id="cart-summary-9">Grátis</span>
    </div>
    <div class="summary-line discount" id="cart-summary-10">
      <span id="cart-summary-11">Desconto Cliente Fiel</span>
      <span id="cart-summary-12">-R$ 12,00</span>
    </div>
    <hr class="summary-divider" id="cart-summary-13">
    <div class="summary-line total" id="cart-summary-14">
      <span id="cart-summary-15">Total</span>
      <span id="cart-summary-16">R$ 225,20</span>
    </div>
  </div>

  <div class="coupon-section" id="cart-summary-17">
    <h3 id="cart-summary-18">Cupom de Desconto</h3>
    <div class="coupon-input-group" id="cart-summary-19">
      <input type="text" placeholder="Digite seu cupom" class="coupon-input" id="cart-summary-20">
      <button class="apply-coupon-btn" id="cart-summary-21">Aplicar</button>
    </div>
  </div>

  <div class="shipping-info" id="cart-summary-22">
    <h3 id="cart-summary-23">Entrega</h3>
    <div class="shipping-option selected" id="cart-summary-24">
      <input type="radio" name="shipping" id="cart-summary-25" checked="">
      <label for="cart-summary-25" id="cart-summary-26">
        <strong id="cart-summary-27">Entrega Grátis</strong>
        <span id="cart-summary-28">Receba em 3-5 dias úteis</span>
      </label>
    </div>
    <div class="shipping-option" id="cart-summary-29">
      <input type="radio" name="shipping" id="cart-summary-30">
      <label for="cart-summary-30" id="cart-summary-31">
        <strong id="cart-summary-32">Entrega Expressa - R$ 15,00</strong>
        <span id="cart-summary-33">Receba em 1-2 dias úteis</span>
      </label>
    </div>
  </div>
</div>

    `
    }
}