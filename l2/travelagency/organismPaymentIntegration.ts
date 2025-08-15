/// <mls shortName="organismPaymentIntegration" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-payment-integration-102009')
export class organismPaymentIntegration extends IcaOrganismBase {
    render(){
        return html`<section class="payment-integration__container" id="travelagency--payment-integration-102009-1">
        <h2 class="payment-integration__title" id="travelagency--payment-integration-102009-2">Pagamento</h2>
        <form class="payment-integration__form" autocomplete="off" id="travelagency--payment-integration-102009-3">
          <div class="payment-integration__group" id="travelagency--payment-integration-102009-4">
            <label for="card-number" id="travelagency--payment-integration-102009-5">Número do cartão *</label>
            <input type="text" id="card-number" name="card_number" maxlength="19" required="" placeholder="0000 0000 0000 0000">
          </div>
          <div class="payment-integration__group payment-integration__group--row" id="travelagency--payment-integration-102009-6">
            <div id="travelagency--payment-integration-102009-7">
              <label for="card-expiry" id="travelagency--payment-integration-102009-8">Validade *</label>
              <input type="text" id="card-expiry" name="card_expiry" maxlength="5" required="" placeholder="MM/AA">
            </div>
            <div id="travelagency--payment-integration-102009-9">
              <label for="card-cvc" id="travelagency--payment-integration-102009-10">CVC *</label>
              <input type="text" id="card-cvc" name="card_cvc" maxlength="4" required="" placeholder="123">
            </div>
          </div>
          <div class="payment-integration__group" id="travelagency--payment-integration-102009-11">
            <label for="card-holder" id="travelagency--payment-integration-102009-12">Nome impresso no cartão *</label>
            <input type="text" id="card-holder" name="card_holder" required="" placeholder="Nome do titular">
          </div>
          <button type="submit" class="payment-integration__submit" id="travelagency--payment-integration-102009-13">Pagar e finalizar reserva</button>
        </form>
        <div class="payment-integration__secure" id="travelagency--payment-integration-102009-14">
          <img src="https://images.unsplash.com/photo-1588942458058-55beb017132c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBjYWRlYWRvJTIwc2VndXJvJTIwcGFnYW1lbnRvfGVufDB8fHx8MTc1NTEwNzUyMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Pagamento seguro" id="travelagency--payment-integration-102009-15">
          <span id="travelagency--payment-integration-102009-16">Pagamento 100% seguro via Stripe</span>
        </div>
      </section>
    `
    }
}