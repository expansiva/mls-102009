/// <mls shortName="organismAdminAppointments" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-appointments-102009')
export class _102009_organismAdminAppointments extends IcaOrganismBase {
    render(){
        return html`
    <section class="admin-section" id="admin-appointments-1">
  <div class="section-header" id="admin-appointments-2">
    <h2 id="admin-appointments-3">Agendamentos</h2>
    <div class="filter-controls" id="admin-appointments-4">
      <select class="filter-select" id="admin-appointments-5">
        <option id="admin-appointments-6">Todos os status</option>
        <option id="admin-appointments-7">Confirmado</option>
        <option id="admin-appointments-8">Pendente</option>
        <option id="admin-appointments-9">Cancelado</option>
      </select>
      <input type="date" class="date-filter" id="admin-appointments-10" />
    </div>
  </div>

  <div class="appointments-list" id="admin-appointments-11">
    <div class="appointment-card confirmed" id="admin-appointments-12">
      <div class="appointment-time" id="admin-appointments-13">
        <span class="date" id="admin-appointments-14">24/07/2025</span>
        <span class="time" id="admin-appointments-15">09:00</span>
      </div>
      <div class="appointment-details" id="admin-appointments-16">
        <h4 id="admin-appointments-17">Maria Silva</h4>
        <p class="pet-info" id="admin-appointments-18">Rex (Golden Retriever) - Banho e Tosa</p>
        <p class="contact" id="admin-appointments-19">📞 (11) 99999-9999</p>
      </div>
      <div class="appointment-status" id="admin-appointments-20">
        <span class="status confirmed" id="admin-appointments-21">Confirmado</span>
      </div>
      <div class="appointment-actions" id="admin-appointments-22">
        <button class="btn-edit" id="admin-appointments-23">Editar</button>
        <button class="btn-cancel" id="admin-appointments-24">Cancelar</button>
      </div>
    </div>

    <div class="appointment-card pending" id="admin-appointments-25">
      <div class="appointment-time" id="admin-appointments-26">
        <span class="date" id="admin-appointments-27">24/07/2025</span>
        <span class="time" id="admin-appointments-28">14:30</span>
      </div>
      <div class="appointment-details" id="admin-appointments-29">
        <h4 id="admin-appointments-30">João Santos</h4>
        <p class="pet-info" id="admin-appointments-31">Mimi (Gato Persa) - Consulta Veterinária</p>
        <p class="contact" id="admin-appointments-32">📞 (11) 88888-8888</p>
      </div>
      <div class="appointment-status" id="admin-appointments-33">
        <span class="status pending" id="admin-appointments-34">Pendente</span>
      </div>
      <div class="appointment-actions" id="admin-appointments-35">
        <button class="btn-confirm" id="admin-appointments-36">Confirmar</button>
        <button class="btn-cancel" id="admin-appointments-37">Cancelar</button>
      </div>
    </div>
  </div>
</section>

    `
    }
}