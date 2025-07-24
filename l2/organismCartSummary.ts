/// <mls shortName="organismCartSummary" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-summary-102009')
export class _102009_organismCartSummary extends IcaOrganismBase {
    render(){
        return html`
      <div class="summary-container">
        <h2 class="summary-title">Resumo do Pedido</h2>
        <div class="summary-details">
          <div class="summary-line">
            <span>Subtotal (4 itens)</span>
            <span>R$ 237,20</span>
          </div>
          <div class="summary-line">
            <span>Frete</span>
            <span class="free-shipping">Grátis</span>
          </div>
          <div class="summary-line discount">
            <span>Desconto Cliente Fiel</span>
            <span>-R$ 12,00</span>
          </div>
          <hr class="summary-divider">
          <div class="summary-line total">
            <span>Total</span>
            <span>R$ 225,20</span>
          </div>
        </div>
        
        <div class="coupon-section">
          <h3>Cupom de Desconto</h3>
          <div class="coupon-input-group">
            <input type="text" placeholder="Digite seu cupom" class="coupon-input">
            <button class="apply-coupon-btn">Aplicar</button>
          </div>
        </div>
        
        <div class="shipping-info">
          <h3>Entrega</h3>
          <div class="shipping-option selected">
            <input type="radio" name="shipping" id="free-shipping" checked="">
            <label for="free-shipping">
              <strong>Entrega Grátis</strong>
              <span>Receba em 3-5 dias úteis</span>
            </label>
          </div>
          <div class="shipping-option">
            <input type="radio" name="shipping" id="express-shipping">
            <label for="express-shipping">
              <strong>Entrega Expressa - R$ 15,00</strong>
              <span>Receba em 1-2 dias úteis</span>
            </label>
          </div>
        </div>
      </div>
    `
    }
}