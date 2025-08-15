/// <mls shortName="organismReservationForm" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-reservation-form-102009')
export class organismReservationForm extends IcaOrganismBase {
    render(){
        return html`<section class="reservation-form-section" aria-labelledby="reservation-form-title" id="travel--reservation-form-102009-1">
        <h1 id="reservation-form-title" class="form-title">Reserve seu pacote</h1>
        <form class="reservation-form" autocomplete="off" id="travel--reservation-form-102009-2">
          <fieldset class="personal-info" id="travel--reservation-form-102009-3">
            <legend class="section-legend" id="travel--reservation-form-102009-4">Dados pessoais</legend>
            <div class="form-group" id="travel--reservation-form-102009-5">
              <label for="reservation-name" id="travel--reservation-form-102009-6">Nome completo</label>
              <input type="text" id="reservation-name" name="name" required="" placeholder="Seu nome" autocomplete="name">
            </div>
            <div class="form-group" id="travel--reservation-form-102009-7">
              <label for="reservation-email" id="travel--reservation-form-102009-8">E-mail</label>
              <input type="email" id="reservation-email" name="email" required="" placeholder="seu@email.com" autocomplete="email">
            </div>
            <div class="form-group" id="travel--reservation-form-102009-9">
              <label for="reservation-phone" id="travel--reservation-form-102009-10">Telefone</label>
              <input type="tel" id="reservation-phone" name="phone" required="" placeholder="(99) 99999-9999" autocomplete="tel">
            </div>
          </fieldset>
          <fieldset class="package-info" id="travel--reservation-form-102009-11">
            <legend class="section-legend" id="travel--reservation-form-102009-12">Detalhes da reserva</legend>
            <div class="form-group" id="travel--reservation-form-102009-13">
              <label for="reservation-package" id="travel--reservation-form-102009-14">Pacote</label>
              <select id="reservation-package" name="package" required="">
                <option value="" id="travel--reservation-form-102009-15">Selecione um pacote</option>
                <option value="1" id="travel--reservation-form-102009-16">Praias do Nordeste</option>
                <option value="2" id="travel--reservation-form-102009-17">Aventura na Amazônia</option>
                <option value="3" id="travel--reservation-form-102009-18">Cultura em Minas Gerais</option>
              </select>
            </div>
            <div class="form-group" id="travel--reservation-form-102009-19">
              <label for="reservation-date" id="travel--reservation-form-102009-20">Data de início</label>
              <input type="date" id="reservation-date" name="start_date" required="">
            </div>
            <div class="form-group" id="travel--reservation-form-102009-21">
              <label for="reservation-people" id="travel--reservation-form-102009-22">Quantidade de pessoas</label>
              <input type="number" id="reservation-people" name="people" min="1" max="20" value="1" required="">
            </div>
          </fieldset>
          <div class="form-actions" id="travel--reservation-form-102009-23">
            <button type="submit" class="pay-btn" aria-label="Pagar com Mercado Pago" id="travel--reservation-form-102009-24">
              <img src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxNZXJjYWRvJTIwUGFnbyUyMGxvZ298ZW58MHx8fHwxNzU1MDMxNTcwfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Mercado Pago" class="mp-logo" id="travel--reservation-form-102009-25">
              Pagar com Mercado Pago
            </button>
          </div>
        </form>
      </section>
    `
    }
}