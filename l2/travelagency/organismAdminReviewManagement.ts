/// <mls shortName="organismAdminReviewManagement" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-admin-review-management-102009')
export class organismAdminReviewManagement extends IcaOrganismBase {
    render(){
        return html`<section class="admin-section" id="travelagency--admin-review-management-102009-1">
        <div class="section-header" id="travelagency--admin-review-management-102009-2">
          <h2 id="travelagency--admin-review-management-102009-3">Gestão de Avaliações</h2>
        </div>
        <table class="admin-table" id="travelagency--admin-review-management-102009-4">
          <thead id="travelagency--admin-review-management-102009-5">
            <tr id="travelagency--admin-review-management-102009-6">
              <th id="travelagency--admin-review-management-102009-7">Cliente</th>
              <th id="travelagency--admin-review-management-102009-8">Pacote</th>
              <th id="travelagency--admin-review-management-102009-9">Nota</th>
              <th id="travelagency--admin-review-management-102009-10">Comentário</th>
              <th id="travelagency--admin-review-management-102009-11">Ações</th>
            </tr>
          </thead>
          <tbody id="travelagency--admin-review-management-102009-12">
            <tr id="travelagency--admin-review-management-102009-13">
              <td id="travelagency--admin-review-management-102009-14">Lucas Silva</td>
              <td id="travelagency--admin-review-management-102009-15">Rio de Janeiro</td>
              <td id="travelagency--admin-review-management-102009-16">5 ⭐</td>
              <td id="travelagency--admin-review-management-102009-17">Viagem incrível, recomendo!</td>
              <td id="travelagency--admin-review-management-102009-18">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-review-management-102009-19">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-review-management-102009-20">Excluir</button>
              </td>
            </tr>
            <tr id="travelagency--admin-review-management-102009-21">
              <td id="travelagency--admin-review-management-102009-22">Maria Souza</td>
              <td id="travelagency--admin-review-management-102009-23">Salvador</td>
              <td id="travelagency--admin-review-management-102009-24">4 ⭐</td>
              <td id="travelagency--admin-review-management-102009-25">Ótimo atendimento.</td>
              <td id="travelagency--admin-review-management-102009-26">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-review-management-102009-27">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-review-management-102009-28">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}