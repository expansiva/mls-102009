/// <mls shortName="organismAdminBookings" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-bookings-102009')
export class organismAdminBookings extends IcaOrganismBase {
    render(){
        return html`<section class="admin-bookings" id="bookings">
        <h2 class="admin-bookings__title" id="petshop--admin-bookings-102009-1">Gestão de Agendamentos</h2>
        <table class="admin-bookings__table" id="petshop--admin-bookings-102009-2">
          <thead id="petshop--admin-bookings-102009-3">
            <tr id="petshop--admin-bookings-102009-4">
              <th id="petshop--admin-bookings-102009-5">Cliente</th>
              <th id="petshop--admin-bookings-102009-6">Pet</th>
              <th id="petshop--admin-bookings-102009-7">Serviço</th>
              <th id="petshop--admin-bookings-102009-8">Data</th>
              <th id="petshop--admin-bookings-102009-9">Status</th>
              <th id="petshop--admin-bookings-102009-10">Ações</th>
            </tr>
          </thead>
          <tbody id="petshop--admin-bookings-102009-11">
            <tr id="petshop--admin-bookings-102009-12">
              <td id="petshop--admin-bookings-102009-13">Maria Silva</td>
              <td id="petshop--admin-bookings-102009-14">Rex (Cão)</td>
              <td id="petshop--admin-bookings-102009-15">Banho</td>
              <td id="petshop--admin-bookings-102009-16">05/08/2025 10:00</td>
              <td id="petshop--admin-bookings-102009-17"><span class="admin-bookings__status admin-bookings__status--pending" id="petshop--admin-bookings-102009-18">Pendente</span></td>
              <td id="petshop--admin-bookings-102009-19">
                <button class="admin-bookings__action admin-bookings__action--approve" id="petshop--admin-bookings-102009-20">Aprovar</button>
                <button class="admin-bookings__action admin-bookings__action--cancel" id="petshop--admin-bookings-102009-21">Cancelar</button>
              </td>
            </tr>
            <tr id="petshop--admin-bookings-102009-22">
              <td id="petshop--admin-bookings-102009-23">João Souza</td>
              <td id="petshop--admin-bookings-102009-24">Mimi (Gato)</td>
              <td id="petshop--admin-bookings-102009-25">Tosa</td>
              <td id="petshop--admin-bookings-102009-26">05/08/2025 11:30</td>
              <td id="petshop--admin-bookings-102009-27"><span class="admin-bookings__status admin-bookings__status--approved" id="petshop--admin-bookings-102009-28">Aprovado</span></td>
              <td id="petshop--admin-bookings-102009-29">
                <button class="admin-bookings__action admin-bookings__action--cancel" id="petshop--admin-bookings-102009-30">Cancelar</button>
              </td>
            </tr>
            <tr id="petshop--admin-bookings-102009-31">
              <td id="petshop--admin-bookings-102009-32">Ana Lima</td>
              <td id="petshop--admin-bookings-102009-33">Pipoca (Ave)</td>
              <td id="petshop--admin-bookings-102009-34">Consulta</td>
              <td id="petshop--admin-bookings-102009-35">05/08/2025 14:00</td>
              <td id="petshop--admin-bookings-102009-36"><span class="admin-bookings__status admin-bookings__status--pending" id="petshop--admin-bookings-102009-37">Pendente</span></td>
              <td id="petshop--admin-bookings-102009-38">
                <button class="admin-bookings__action admin-bookings__action--approve" id="petshop--admin-bookings-102009-39">Aprovar</button>
                <button class="admin-bookings__action admin-bookings__action--cancel" id="petshop--admin-bookings-102009-40">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}