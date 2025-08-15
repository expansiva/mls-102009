/// <mls shortName="organismReservationForm" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-reservation-form-102009')
export class organismReservationForm extends IcaOrganismBase {
    render(){
        return html`<section class="reservation-form__container" id="travelagency--reservation-form-102009-1">
        <h2 class="reservation-form__title" id="travelagency--reservation-form-102009-2">Reserve seu pacote</h2>
        <form class="reservation-form__form" autocomplete="off" id="travelagency--reservation-form-102009-3">
          <div class="reservation-form__group" id="travelagency--reservation-form-102009-4">
            <label for="reservation-name" id="travelagency--reservation-form-102009-5">Nome completo *</label>
            <input type="text" id="reservation-name" name="name" required="" placeholder="Seu nome completo">
          </div>
          <div class="reservation-form__group" id="travelagency--reservation-form-102009-6">
            <label for="reservation-email" id="travelagency--reservation-form-102009-7">E-mail *</label>
            <input type="email" id="reservation-email" name="email" required="" placeholder="seu@email.com">
          </div>
          <div class="reservation-form__group" id="travelagency--reservation-form-102009-8">
            <label for="reservation-phone" id="travelagency--reservation-form-102009-9">Telefone *</label>
            <input type="tel" id="reservation-phone" name="phone" required="" placeholder="(99) 99999-9999">
          </div>
          <div class="reservation-form__group" id="travelagency--reservation-form-102009-10">
            <label for="reservation-package" id="travelagency--reservation-form-102009-11">Pacote *</label>
            <select id="reservation-package" name="package" required="">
              <option value="" id="travelagency--reservation-form-102009-12">Selecione o pacote</option>
              <option value="rio" id="travelagency--reservation-form-102009-13">Rio de Janeiro - 5 dias</option>
              <option value="gramado" id="travelagency--reservation-form-102009-14">Gramado - 7 dias</option>
              <option value="salvador" id="travelagency--reservation-form-102009-15">Salvador - 4 dias</option>
            </select>
          </div>
          <div class="reservation-form__group reservation-form__group--dates" id="travelagency--reservation-form-102009-16">
            <div id="travelagency--reservation-form-102009-17">
              <label for="reservation-date-in" id="travelagency--reservation-form-102009-18">Data de ida *</label>
              <input type="date" id="reservation-date-in" name="date_in" required="">
            </div>
            <div id="travelagency--reservation-form-102009-19">
              <label for="reservation-date-out" id="travelagency--reservation-form-102009-20">Data de volta *</label>
              <input type="date" id="reservation-date-out" name="date_out" required="">
            </div>
          </div>
          <div class="reservation-form__group" id="travelagency--reservation-form-102009-21">
            <label for="reservation-notes" id="travelagency--reservation-form-102009-22">Observações</label>
            <textarea id="reservation-notes" name="notes" rows="3" placeholder="Alguma observação especial?"></textarea>
          </div>
          <button type="submit" class="reservation-form__submit" id="travelagency--reservation-form-102009-23">Avançar para pagamento</button>
        </form>
      </section>
    `
    }
}