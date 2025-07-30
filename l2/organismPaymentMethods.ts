/// <mls shortName="organismPaymentMethods" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-payment-methods-102009')
export class _102009_organismPaymentMethods extends IcaOrganismBase {
    render(){
        return html`
      <div class="payment-methods-container">
        <h2>Forma de Pagamento</h2>
        <div class="payment-options">
          <div class="payment-option">
            <input type="radio" id="credit-card" name="payment" value="credit-card" checked="">
            <label for="credit-card" class="payment-label">
              <div class="payment-icon">
                <img src="https://images.unsplash.com/photo-1600693616179-fa8eb243ce48?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwaWNvbiUyMHBheW1lbnQlMjBtZXRob2R8ZW58MHx8fHwxNzUzMzY1NzU3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Cartão de Crédito">
              </div>
              <div class="payment-info">
                <h3>Cartão de Crédito</h3>
                <p>Visa, Mastercard, Elo</p>
              </div>
            </label>
          </div>
          
          <div class="payment-option">
            <input type="radio" id="pix" name="payment" value="pix">
            <label for="pix" class="payment-label">
              <div class="payment-icon">
                <img src="https://images.unsplash.com/photo-1643455464171-aaaaa1042fc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaXglMjBwYXltZW50JTIwaWNvbiUyMGJyYXppbHxlbnwwfHx8fDE3NTMzMDEyNTh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="PIX">
              </div>
              <div class="payment-info">
                <h3>PIX</h3>
                <p>Pagamento instantâneo</p>
              </div>
            </label>
          </div>
          
          <div class="payment-option">
            <input type="radio" id="boleto" name="payment" value="boleto">
            <label for="boleto" class="payment-label">
              <div class="payment-icon">
                <img src="https://images.unsplash.com/photo-1689673476137-048bb19d7c20?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxiYW5rJTIwc2xpcCUyMGJvbGV0byUyMGljb24lMjBicmF6aWx8ZW58MHx8fHwxNzUzMzY1NzU4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Boleto">
              </div>
              <div class="payment-info">
                <h3>Boleto Bancário</h3>
                <p>Vencimento em 3 dias úteis</p>
              </div>
            </label>
          </div>
        </div>
        
        <div class="payment-details" id="credit-card-details">
          <h3>Dados do Cartão</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="card-number">Número do Cartão *</label>
              <input type="text" id="card-number" name="card-number" placeholder="0000 0000 0000 0000">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="card-name">Nome no Cartão *</label>
              <input type="text" id="card-name" name="card-name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="card-expiry">Validade *</label>
              <input type="text" id="card-expiry" name="card-expiry" placeholder="MM/AA">
            </div>
            <div class="form-group">
              <label for="card-cvv">CVV *</label>
              <input type="text" id="card-cvv" name="card-cvv" placeholder="123">
            </div>
          </div>
        </div>
      </div>
    `
    }
}