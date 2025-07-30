/// <mls shortName="organismAppointmentConfirmation" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointment-confirmation-102009')
export class _102009_organismAppointmentConfirmation extends IcaOrganismBase {
  render() {
    return html`
      <div class="confirmation-container" style="display: none;" id="appointment-confirmation-1">
  <div class="confirmation-success" id="appointment-confirmation-2">
    <div class="success-icon" id="appointment-confirmation-3">✓</div>
    <h2 id="appointment-confirmation-4">Agendamento Confirmado!</h2>
    <p id="appointment-confirmation-5">Seu agendamento foi realizado com sucesso</p>
  </div>
  
  <div class="appointment-details" id="appointment-confirmation-6">
    <h3 id="appointment-confirmation-7">Detalhes do Agendamento</h3>
    <div class="detail-card" id="appointment-confirmation-8">
      <div class="detail-row" id="appointment-confirmation-9">
        <span class="label" id="appointment-confirmation-10">Serviço:</span>
        <span class="value" id="confirmed-service">Banho</span>
      </div>
      <div class="detail-row" id="appointment-confirmation-11">
        <span class="label" id="appointment-confirmation-12">Pet:</span>
        <span class="value" id="confirmed-pet">Rex</span>
      </div>
      <div class="detail-row" id="appointment-confirmation-13">
        <span class="label" id="appointment-confirmation-14">Data:</span>
        <span class="value" id="confirmed-date">25/07/2025</span>
      </div>
      <div class="detail-row" id="appointment-confirmation-15">
        <span class="label" id="appointment-confirmation-16">Horário:</span>
        <span class="value" id="confirmed-time">10:00</span>
      </div>
      <div class="detail-row" id="appointment-confirmation-17">
        <span class="label" id="appointment-confirmation-18">Valor:</span>
        <span class="value price" id="confirmed-price">R$ 35,00</span>
      </div>
    </div>
  </div>
  
  <div class="email-notification" id="appointment-confirmation-19">
    <div class="notification-icon" id="appointment-confirmation-20">📧</div>
    <div class="notification-text" id="appointment-confirmation-21">
      <h4 id="appointment-confirmation-22">Lembrete por Email</h4>
      <p id="appointment-confirmation-23">Você receberá um lembrete por email 24 horas antes do agendamento</p>
    </div>
  </div>
  
  <div class="confirmation-actions" id="appointment-confirmation-24">
    <button type="button" class="btn-secondary" id="appointment-confirmation-25">Voltar ao Início</button>
    <button type="button" class="btn-primary" id="appointment-confirmation-26">Agendar Outro Serviço</button>
  </div>
</div>

    `
  }
}