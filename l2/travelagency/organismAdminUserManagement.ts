/// <mls shortName="organismAdminUserManagement" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-admin-user-management-102009')
export class organismAdminUserManagement extends IcaOrganismBase {
    render(){
        return html`<section class="admin-section" id="travelagency--admin-user-management-102009-1">
        <div class="section-header" id="travelagency--admin-user-management-102009-2">
          <h2 id="travelagency--admin-user-management-102009-3">Administradores</h2>
          <button class="btn btn-primary" id="travelagency--admin-user-management-102009-4">Novo Administrador</button>
        </div>
        <form class="admin-form" id="travelagency--admin-user-management-102009-5">
          <div class="form-row" id="travelagency--admin-user-management-102009-6">
            <label for="admin-name" id="travelagency--admin-user-management-102009-7">Nome</label>
            <input type="text" id="admin-name" name="admin-name" placeholder="Nome completo">
          </div>
          <div class="form-row" id="travelagency--admin-user-management-102009-8">
            <label for="admin-email" id="travelagency--admin-user-management-102009-9">E-mail</label>
            <input type="email" id="admin-email" name="admin-email" placeholder="email@exemplo.com">
          </div>
          <div class="form-row" id="travelagency--admin-user-management-102009-10">
            <label for="admin-password" id="travelagency--admin-user-management-102009-11">Senha</label>
            <input type="password" id="admin-password" name="admin-password" placeholder="Senha">
          </div>
          <div class="form-actions" id="travelagency--admin-user-management-102009-12">
            <button class="btn btn-primary" type="submit" id="travelagency--admin-user-management-102009-13">Cadastrar</button>
          </div>
        </form>
        <table class="admin-table" id="travelagency--admin-user-management-102009-14">
          <thead id="travelagency--admin-user-management-102009-15">
            <tr id="travelagency--admin-user-management-102009-16">
              <th id="travelagency--admin-user-management-102009-17">Nome</th>
              <th id="travelagency--admin-user-management-102009-18">E-mail</th>
              <th id="travelagency--admin-user-management-102009-19">Ações</th>
            </tr>
          </thead>
          <tbody id="travelagency--admin-user-management-102009-20">
            <tr id="travelagency--admin-user-management-102009-21">
              <td id="travelagency--admin-user-management-102009-22">Lucas Admin</td>
              <td id="travelagency--admin-user-management-102009-23">lucas@travelagency.com</td>
              <td id="travelagency--admin-user-management-102009-24">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-user-management-102009-25">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-user-management-102009-26">Excluir</button>
              </td>
            </tr>
            <tr id="travelagency--admin-user-management-102009-27">
              <td id="travelagency--admin-user-management-102009-28">Maria Admin</td>
              <td id="travelagency--admin-user-management-102009-29">maria@travelagency.com</td>
              <td id="travelagency--admin-user-management-102009-30">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-user-management-102009-31">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-user-management-102009-32">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}