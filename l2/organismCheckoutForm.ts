/// <mls shortName="organismCheckoutForm" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-checkout-form-102009')
export class _102009_organismCheckoutForm extends IcaOrganismBase {
    render(){
        return html`
      <div class="checkout-form-container">
        <h2>Dados para Entrega</h2>
        <form class="checkout-form">
          <div class="form-section">
            <h3>Informações Pessoais</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="fullName">Nome Completo *</label>
                <input type="text" id="fullName" name="fullName" required="">
              </div>
              <div class="form-group">
                <label for="email">E-mail *</label>
                <input type="email" id="email" name="email" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="phone">Telefone *</label>
                <input type="tel" id="phone" name="phone" required="">
              </div>
              <div class="form-group">
                <label for="cpf">CPF *</label>
                <input type="text" id="cpf" name="cpf" required="">
              </div>
            </div>
          </div>
          
          <div class="form-section">
            <h3>Endereço de Entrega</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="cep">CEP *</label>
                <input type="text" id="cep" name="cep" required="">
              </div>
              <div class="form-group">
                <label for="street">Rua *</label>
                <input type="text" id="street" name="street" required="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="number">Número *</label>
                <input type="text" id="number" name="number" required="">
              </div>
              <div class="form-group">
                <label for="complement">Complemento</label>
                <input type="text" id="complement" name="complement">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="neighborhood">Bairro *</label>
                <input type="text" id="neighborhood" name="neighborhood" required="">
              </div>
              <div class="form-group">
                <label for="city">Cidade *</label>
                <input type="text" id="city" name="city" required="">
              </div>
            </div>
          </div>
        </form>
      </div>
    `
    }
}