/// <mls shortName="organismCheckoutForm" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-checkout-form-102009')
export class _102009_organismCheckoutForm extends IcaOrganismBase {
  render() {
    return html`
  <div class="checkout-form-container" id="checkout-form-1">
  <h2 id="checkout-form-2">Dados para Entrega</h2>
  <form class="checkout-form" id="checkout-form-3">
    <div class="form-section" id="checkout-form-4">
      <h3 id="checkout-form-5">Informações Pessoais</h3>
      <div class="form-row" id="checkout-form-6">
        <div class="form-group" id="checkout-form-7">
          <label for="fullName" id="checkout-form-8">Nome Completo *</label>
          <input type="text" id="fullName" name="fullName" required="" />
        </div>
        <div class="form-group" id="checkout-form-9">
          <label for="email" id="checkout-form-10">E-mail *</label>
          <input type="email" id="email" name="email" required="" />
        </div>
      </div>
      <div class="form-row" id="checkout-form-11">
        <div class="form-group" id="checkout-form-12">
          <label for="phone" id="checkout-form-13">Telefone *</label>
          <input type="tel" id="phone" name="phone" required="" />
        </div>
        <div class="form-group" id="checkout-form-14">
          <label for="cpf" id="checkout-form-15">CPF *</label>
          <input type="text" id="cpf" name="cpf" required="" />
        </div>
      </div>
    </div>

    <div class="form-section" id="checkout-form-16">
      <h3 id="checkout-form-17">Endereço de Entrega</h3>
      <div class="form-row" id="checkout-form-18">
        <div class="form-group" id="checkout-form-19">
          <label for="cep" id="checkout-form-20">CEP *</label>
          <input type="text" id="cep" name="cep" required="" />
        </div>
        <div class="form-group" id="checkout-form-21">
          <label for="street" id="checkout-form-22">Rua *</label>
          <input type="text" id="street" name="street" required="" />
        </div>
      </div>
      <div class="form-row" id="checkout-form-23">
        <div class="form-group" id="checkout-form-24">
          <label for="number" id="checkout-form-25">Número *</label>
          <input type="text" id="number" name="number" required="" />
        </div>
        <div class="form-group" id="checkout-form-26">
          <label for="complement" id="checkout-form-27">Complemento</label>
          <input type="text" id="complement" name="complement" />
        </div>
      </div>
      <div class="form-row" id="checkout-form-28">
        <div class="form-group" id="checkout-form-29">
          <label for="neighborhood" id="checkout-form-30">Bairro *</label>
          <input type="text" id="neighborhood" name="neighborhood" required="" />
        </div>
        <div class="form-group" id="checkout-form-31">
          <label for="city" id="checkout-form-32">Cidade *</label>
          <input type="text" id="city" name="city" required="" />
        </div>
      </div>
    </div>
  </form>
</div>

    `
  }
}