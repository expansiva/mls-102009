/// <mls shortName="organismAppointmentsHistory" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointments-history-102009')
export class _102009_organismAppointmentsHistory extends IcaOrganismBase {
    render(){
        return html`
      <div class="appointments-history-container">
        <div class="section-header">
          <h2>Histórico de Agendamentos</h2>
          <div class="filter-options">
            <select class="filter-select">
              <option value="todos">Todos os status</option>
              <option value="agendado">Agendados</option>
              <option value="concluido">Concluídos</option>
              <option value="cancelado">Cancelados</option>
            </select>
          </div>
        </div>
        
        <div class="appointments-list">
          <div class="appointment-card status-concluido">
            <div class="appointment-date">
              <span class="day">15</span>
              <span class="month">JUL</span>
            </div>
            <div class="appointment-info">
              <h3>Banho e Tosa - Rex</h3>
              <p class="appointment-time">14:00 - 15:30</p>
              <p class="appointment-professional">Profissional: Maria Silva</p>
            </div>
            <div class="appointment-status">
              <span class="status-badge concluido">Concluído</span>
              <span class="appointment-price">R$ 45,00</span>
            </div>
          </div>
          
          <div class="appointment-card status-agendado">
            <div class="appointment-date">
              <span class="day">28</span>
              <span class="month">JUL</span>
            </div>
            <div class="appointment-info">
              <h3>Consulta Veterinária - Luna</h3>
              <p class="appointment-time">10:00 - 10:30</p>
              <p class="appointment-professional">Dr. João Santos</p>
            </div>
            <div class="appointment-status">
              <span class="status-badge agendado">Agendado</span>
              <span class="appointment-price">R$ 80,00</span>
            </div>
          </div>
          
          <div class="appointment-card status-concluido">
            <div class="appointment-date">
              <span class="day">08</span>
              <span class="month">JUL</span>
            </div>
            <div class="appointment-info">
              <h3>Vacinação - Rex</h3>
              <p class="appointment-time">16:00 - 16:15</p>
              <p class="appointment-professional">Dr. Ana Costa</p>
            </div>
            <div class="appointment-status">
              <span class="status-badge concluido">Concluído</span>
              <span class="appointment-price">R$ 120,00</span>
            </div>
          </div>
        </div>
      </div>
    `
    }
}