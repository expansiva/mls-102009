/// <mls shortName="organismAdminReservationManagement" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-admin-reservation-management-102009')
export class organismAdminReservationManagement extends IcaOrganismBase {
    render(){
        return html`<section class="admin-section" id="travelagency--admin-reservation-management-102009-1">
        <div class="section-header" id="travelagency--admin-reservation-management-102009-2">
          <h2 id="travelagency--admin-reservation-management-102009-3">Gestão de Reservas</h2>
        </div>
        <table class="admin-table" id="travelagency--admin-reservation-management-102009-4">
          <thead id="travelagency--admin-reservation-management-102009-5">
            <tr id="travelagency--admin-reservation-management-102009-6">
              <th id="travelagency--admin-reservation-management-102009-7">Cliente</th>
              <th id="travelagency--admin-reservation-management-102009-8">Pacote</th>
              <th id="travelagency--admin-reservation-management-102009-9">Data da Reserva</th>
              <th id="travelagency--admin-reservation-management-102009-10">Status</th>
              <th id="travelagency--admin-reservation-management-102009-11">Ações</th>
            </tr>
          </thead>
          <tbody id="travelagency--admin-reservation-management-102009-12">
            <tr id="travelagency--admin-reservation-management-102009-13">
              <td id="travelagency--admin-reservation-management-102009-14">Lucas Silva</td>
              <td id="travelagency--admin-reservation-management-102009-15">Rio de Janeiro</td>
              <td id="travelagency--admin-reservation-management-102009-16">01/08/2025</td>
              <td id="travelagency--admin-reservation-management-102009-17"><span class="status-badge status-confirmed" id="travelagency--admin-reservation-management-102009-18">Confirmada</span></td>
              <td id="travelagency--admin-reservation-management-102009-19">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-reservation-management-102009-20">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-reservation-management-102009-21">Excluir</button>
              </td>
            </tr>
            <tr id="travelagency--admin-reservation-management-102009-22">
              <td id="travelagency--admin-reservation-management-102009-23">Maria Souza</td>
              <td id="travelagency--admin-reservation-management-102009-24">Salvador</td>
              <td id="travelagency--admin-reservation-management-102009-25">05/08/2025</td>
              <td id="travelagency--admin-reservation-management-102009-26"><span class="status-badge status-pending" id="travelagency--admin-reservation-management-102009-27">Pendente</span></td>
              <td id="travelagency--admin-reservation-management-102009-28">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-reservation-management-102009-29">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-reservation-management-102009-30">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}