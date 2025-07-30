/// <mls shortName="organismAdminAppointments" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-appointments-102009')
export class _102009_organismAdminAppointments extends IcaOrganismBase {
    render(){
        return html`
      <section class="admin-section">
        <div class="section-header">
          <h2>Agendamentos</h2>
          <div class="filter-controls">
            <select class="filter-select">
              <option>Todos os status</option>
              <option>Confirmado</option>
              <option>Pendente</option>
              <option>Cancelado</option>
            </select>
            <input type="date" class="date-filter">
          </div>
        </div>
        
        <div class="appointments-list">
          <div class="appointment-card confirmed">
            <div class="appointment-time">
              <span class="date">24/07/2025</span>
              <span class="time">09:00</span>
            </div>
            <div class="appointment-details">
              <h4>Maria Silva</h4>
              <p class="pet-info">Rex (Golden Retriever) - Banho e Tosa</p>
              <p class="contact">📞 (11) 99999-9999</p>
            </div>
            <div class="appointment-status">
              <span class="status confirmed">Confirmado</span>
            </div>
            <div class="appointment-actions">
              <button class="btn-edit">Editar</button>
              <button class="btn-cancel">Cancelar</button>
            </div>
          </div>
          
          <div class="appointment-card pending">
            <div class="appointment-time">
              <span class="date">24/07/2025</span>
              <span class="time">14:30</span>
            </div>
            <div class="appointment-details">
              <h4>João Santos</h4>
              <p class="pet-info">Mimi (Gato Persa) - Consulta Veterinária</p>
              <p class="contact">📞 (11) 88888-8888</p>
            </div>
            <div class="appointment-status">
              <span class="status pending">Pendente</span>
            </div>
            <div class="appointment-actions">
              <button class="btn-confirm">Confirmar</button>
              <button class="btn-cancel">Cancelar</button>
            </div>
          </div>
        </div>
      </section>
    `
    }
}