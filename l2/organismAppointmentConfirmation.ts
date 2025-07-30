/// <mls shortName="organismAppointmentConfirmation" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointment-confirmation-102009')
export class _102009_organismAppointmentConfirmation extends IcaOrganismBase {
    render(){
        return html`
      <div class="confirmation-container" style="display: none;">
        <div class="confirmation-success">
          <div class="success-icon">✓</div>
          <h2>Agendamento Confirmado!</h2>
          <p>Seu agendamento foi realizado com sucesso</p>
        </div>
        
        <div class="appointment-details">
          <h3>Detalhes do Agendamento</h3>
          <div class="detail-card">
            <div class="detail-row">
              <span class="label">Serviço:</span>
              <span class="value" id="confirmed-service">Banho</span>
            </div>
            <div class="detail-row">
              <span class="label">Pet:</span>
              <span class="value" id="confirmed-pet">Rex</span>
            </div>
            <div class="detail-row">
              <span class="label">Data:</span>
              <span class="value" id="confirmed-date">25/07/2025</span>
            </div>
            <div class="detail-row">
              <span class="label">Horário:</span>
              <span class="value" id="confirmed-time">10:00</span>
            </div>
            <div class="detail-row">
              <span class="label">Valor:</span>
              <span class="value price" id="confirmed-price">R$ 35,00</span>
            </div>
          </div>
        </div>
        
        <div class="email-notification">
          <div class="notification-icon">📧</div>
          <div class="notification-text">
            <h4>Lembrete por Email</h4>
            <p>Você receberá um lembrete por email 24 horas antes do agendamento</p>
          </div>
        </div>
        
        <div class="confirmation-actions">
          <button type="button" class="btn-secondary">Voltar ao Início</button>
          <button type="button" class="btn-primary">Agendar Outro Serviço</button>
        </div>
      </div>
    `
    }
}