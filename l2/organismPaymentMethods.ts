/// <mls shortName="organismPaymentMethods" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-payment-methods-102009')
export class _102009_organismPaymentMethods extends IcaOrganismBase {
    render(){
        return html`
      <div class="payment-methods-container" id="payment-methods-1">
  <h2 id="payment-methods-2">Forma de Pagamento</h2>
  <div class="payment-options" id="payment-methods-3">
    <div class="payment-option" id="payment-methods-4">
      <input type="radio" id="payment-methods-5" name="payment" value="credit-card" checked="">
      <label for="payment-methods-5" class="payment-label" id="payment-methods-6">
        <div class="payment-icon" id="payment-methods-7">
          <img src="https://images.unsplash.com/photo-1600693616179-fa8eb243ce48?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwaWNvbiUyMHBheW1lbnQlMjBtZXRob2R8ZW58MHx8fHwxNzUzMzY1NzU3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Cartão de Crédito" id="payment-methods-8">
        </div>
        <div class="payment-info" id="payment-methods-9">
          <h3 id="payment-methods-10">Cartão de Crédito</h3>
          <p id="payment-methods-11">Visa, Mastercard, Elo</p>
        </div>
      </label>
    </div>

    <div class="payment-option" id="payment-methods-12">
      <input type="radio" id="payment-methods-13" name="payment" value="pix">
      <label for="payment-methods-13" class="payment-label" id="payment-methods-14">
        <div class="payment-icon" id="payment-methods-15">
          <img src="https://images.unsplash.com/photo-1643455464171-aaaaa1042fc8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaXglMjBwYXltZW50JTIwaWNvbiUyMGJyYXppbHxlbnwwfHx8fDE3NTMzMDEyNTh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="PIX" id="payment-methods-16">
        </div>
        <div class="payment-info" id="payment-methods-17">
          <h3 id="payment-methods-18">PIX</h3>
          <p id="payment-methods-19">Pagamento instantâneo</p>
        </div>
      </label>
    </div>

    <div class="payment-option" id="payment-methods-20">
      <input type="radio" id="payment-methods-21" name="payment" value="boleto">
      <label for="payment-methods-21" class="payment-label" id="payment-methods-22">
        <div class="payment-icon" id="payment-methods-23">
          <img src="https://images.unsplash.com/photo-1689673476137-048bb19d7c20?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxiYW5rJTIwc2xpcCUyMGJvbGV0byUyMGljb24lMjBicmF6aWx8ZW58MHx8fHwxNzUzMzY1NzU4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Boleto" id="payment-methods-24">
        </div>
        <div class="payment-info" id="payment-methods-25">
          <h3 id="payment-methods-26">Boleto Bancário</h3>
          <p id="payment-methods-27">Vencimento em 3 dias úteis</p>
        </div>
      </label>
    </div>
  </div>

  <div class="payment-details" id="payment-methods-28">
    <h3 id="payment-methods-29">Dados do Cartão</h3>
    <div class="form-row" id="payment-methods-30">
      <div class="form-group" id="payment-methods-31">
        <label for="card-number" id="payment-methods-32">Número do Cartão *</label>
        <input type="text" id="payment-methods-33" name="card-number" placeholder="0000 0000 0000 0000">
      </div>
    </div>
    <div class="form-row" id="payment-methods-34">
      <div class="form-group" id="payment-methods-35">
        <label for="card-name" id="payment-methods-36">Nome no Cartão *</label>
        <input type="text" id="payment-methods-37" name="card-name">
      </div>
    </div>
    <div class="form-row" id="payment-methods-38">
      <div class="form-group" id="payment-methods-39">
        <label for="card-expiry" id="payment-methods-40">Validade *</label>
        <input type="text" id="payment-methods-41" name="card-expiry" placeholder="MM/AA">
      </div>
      <div class="form-group" id="payment-methods-42">
        <label for="card-cvv" id="payment-methods-43">CVV *</label>
        <input type="text" id="payment-methods-44" name="card-cvv" placeholder="123">
      </div>
    </div>
  </div>
</div>

    `
    }
}