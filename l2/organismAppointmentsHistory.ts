/// <mls shortName="organismAppointmentsHistory" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointments-history-102009')
export class _102009_organismAppointmentsHistory extends IcaOrganismBase {
  render() {
    return html`
  <div class="appointments-history-container" id="appointment-history-1">
  <div class="section-header" id="appointment-history-2">
    <h2 id="appointment-history-3">Histórico de Agendamentos</h2>
    <div class="filter-options" id="appointment-history-4">
      <select class="filter-select" id="appointment-history-5">
        <option value="todos" id="appointment-history-6">Todos os status</option>
        <option value="agendado" id="appointment-history-7">Agendados</option>
        <option value="concluido" id="appointment-history-8">Concluídos</option>
        <option value="cancelado" id="appointment-history-9">Cancelados</option>
      </select>
    </div>
  </div>
  
  <div class="appointments-list" id="appointment-history-10">
    <div class="appointment-card status-concluido" id="appointment-history-11">
      <div class="appointment-date" id="appointment-history-12">
        <span class="day" id="appointment-history-13">15</span>
        <span class="month" id="appointment-history-14">JUL</span>
      </div>
      <div class="appointment-info" id="appointment-history-15">
        <h3 id="appointment-history-16">Banho e Tosa - Rex</h3>
        <p class="appointment-time" id="appointment-history-17">14:00 - 15:30</p>
        <p class="appointment-professional" id="appointment-history-18">Profissional: Maria Silva</p>
      </div>
      <div class="appointment-status" id="appointment-history-19">
        <span class="status-badge concluido" id="appointment-history-20">Concluído</span>
        <span class="appointment-price" id="appointment-history-21">R$ 45,00</span>
      </div>
    </div>
    
    <div class="appointment-card status-agendado" id="appointment-history-22">
      <div class="appointment-date" id="appointment-history-23">
        <span class="day" id="appointment-history-24">28</span>
        <span class="month" id="appointment-history-25">JUL</span>
      </div>
      <div class="appointment-info" id="appointment-history-26">
        <h3 id="appointment-history-27">Consulta Veterinária - Luna</h3>
        <p class="appointment-time" id="appointment-history-28">10:00 - 10:30</p>
        <p class="appointment-professional" id="appointment-history-29">Dr. João Santos</p>
      </div>
      <div class="appointment-status" id="appointment-history-30">
        <span class="status-badge agendado" id="appointment-history-31">Agendado</span>
        <span class="appointment-price" id="appointment-history-32">R$ 80,00</span>
      </div>
    </div>
    
    <div class="appointment-card status-concluido" id="appointment-history-33">
      <div class="appointment-date" id="appointment-history-34">
        <span class="day" id="appointment-history-35">08</span>
        <span class="month" id="appointment-history-36">JUL</span>
      </div>
      <div class="appointment-info" id="appointment-history-37">
        <h3 id="appointment-history-38">Vacinação - Rex</h3>
        <p class="appointment-time" id="appointment-history-39">16:00 - 16:15</p>
        <p class="appointment-professional" id="appointment-history-40">Dr. Ana Costa</p>
      </div>
      <div class="appointment-status" id="appointment-history-41">
        <span class="status-badge concluido" id="appointment-history-42">Concluído</span>
        <span class="appointment-price" id="appointment-history-43">R$ 120,00</span>
      </div>
    </div>
  </div>
</div>

    `
  }
}