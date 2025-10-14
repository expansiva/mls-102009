/// <mls shortName="organismAdminServicesList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-admin-services-list-102009')
export class organismAdminServicesList extends IcaOrganismBase {
  render() {
    return html`<div class="organism-admin-services-list section-card" id="petshop--organism-admin-services-list-102009-1">
      <h2 id="petshop--organism-admin-services-list-102009-2">Lista de Serviços</h2>
      <div class="filters" id="petshop--organism-admin-services-list-102009-3">
        <div class="form-group" id="petshop--organism-admin-services-list-102009-4">
          <label for="filter-name" id="petshop--organism-admin-services-list-102009-5">Filtrar por Nome</label>
          <input type="text" id="filter-name" placeholder="Digite o nome do serviço" id="petshop--organism-admin-services-list-102009-6">
        </div>
        <div class="form-group" id="petshop--organism-admin-services-list-102009-7">
          <label for="filter-code" id="petshop--organism-admin-services-list-102009-8">Filtrar por Código</label>
          <input type="text" id="filter-code" placeholder="Digite o código do serviço" id="petshop--organism-admin-services-list-102009-9">
        </div>
      </div>
      <table id="petshop--organism-admin-services-list-102009-10">
        <thead id="petshop--organism-admin-services-list-102009-11">
          <tr id="petshop--organism-admin-services-list-102009-12">
            <th id="petshop--organism-admin-services-list-102009-13">Nome</th>
            <th id="petshop--organism-admin-services-list-102009-14">Descrição</th>
            <th id="petshop--organism-admin-services-list-102009-15">Código do Serviço</th>
            <th id="petshop--organism-admin-services-list-102009-16">Ações</th>
          </tr>
        </thead>
        <tbody id="petshop--organism-admin-services-list-102009-17">
          <tr id="petshop--organism-admin-services-list-102009-18">
            <td id="petshop--organism-admin-services-list-102009-19">Banho e Tosa</td>
            <td id="petshop--organism-admin-services-list-102009-20">Serviço completo de banho e tosa para cães e gatos.</td>
            <td id="petshop--organism-admin-services-list-102009-21">SRV001</td>
            <td id="petshop--organism-admin-services-list-102009-22"><a href="#edit" class="edit-link" id="petshop--organism-admin-services-list-102009-23">Editar</a></td>
          </tr>
          <tr id="petshop--organism-admin-services-list-102009-24">
            <td id="petshop--organism-admin-services-list-102009-25">Consulta Veterinária</td>
            <td id="petshop--organism-admin-services-list-102009-26">Consulta geral com veterinário para check-up.</td>
            <td id="petshop--organism-admin-services-list-102009-27">SRV002</td>
            <td id="petshop--organism-admin-services-list-102009-28"><a href="#edit" class="edit-link" id="petshop--organism-admin-services-list-102009-29">Editar</a></td>
          </tr>
          <tr id="petshop--organism-admin-services-list-102009-30">
            <td id="petshop--organism-admin-services-list-102009-31">Hospedagem</td>
            <td id="petshop--organism-admin-services-list-102009-32">Hospedagem diária para pets com supervisão.</td>
            <td id="petshop--organism-admin-services-list-102009-33">SRV003</td>
            <td id="petshop--organism-admin-services-list-102009-34"><a href="#edit" class="edit-link" id="petshop--organism-admin-services-list-102009-35">Editar</a></td>
          </tr>
          
        </tbody>
      </table>
      <div class="pagination" id="petshop--organism-admin-services-list-102009-36">
        <button id="petshop--organism-admin-services-list-102009-37">Anterior</button>
        <span id="petshop--organism-admin-services-list-102009-38">Página 1 de 5</span>
        <button id="petshop--organism-admin-services-list-102009-39">Próxima</button>
      </div>
    </div>`;
  }
}