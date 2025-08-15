/// <mls shortName="organismAdminPackageManagement" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-admin-package-management-102009')
export class organismAdminPackageManagement extends IcaOrganismBase {
    render(){
        return html`<section class="admin-section" id="travelagency--admin-package-management-102009-1">
        <div class="section-header" id="travelagency--admin-package-management-102009-2">
          <h2 id="travelagency--admin-package-management-102009-3">Gestão de Pacotes</h2>
          <button class="btn btn-primary" id="travelagency--admin-package-management-102009-4">Novo Pacote</button>
        </div>
        <table class="admin-table" id="travelagency--admin-package-management-102009-5">
          <thead id="travelagency--admin-package-management-102009-6">
            <tr id="travelagency--admin-package-management-102009-7">
              <th id="travelagency--admin-package-management-102009-8">Foto</th>
              <th id="travelagency--admin-package-management-102009-9">Destino</th>
              <th id="travelagency--admin-package-management-102009-10">Datas</th>
              <th id="travelagency--admin-package-management-102009-11">Preço</th>
              <th id="travelagency--admin-package-management-102009-12">Ações</th>
            </tr>
          </thead>
          <tbody id="travelagency--admin-package-management-102009-13">
            <tr id="travelagency--admin-package-management-102009-14">
              <td id="travelagency--admin-package-management-102009-15"><img src="https://images.unsplash.com/photo-1594749794764-717b02dbb530?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmFpYSUyMHJpbyUyMGRlJTIwamFuZWlybyUyMHZpYWdlbSUyMHBhY290ZXxlbnwwfHx8fDE3NTUxMDc4Mzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Pacote Rio de Janeiro" class="package-thumb" id="travelagency--admin-package-management-102009-16"></td>
              <td id="travelagency--admin-package-management-102009-17">Rio de Janeiro</td>
              <td id="travelagency--admin-package-management-102009-18">10/09/2025 - 17/09/2025</td>
              <td id="travelagency--admin-package-management-102009-19">R$ 2.500,00</td>
              <td id="travelagency--admin-package-management-102009-20">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-package-management-102009-21">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-package-management-102009-22">Excluir</button>
              </td>
            </tr>
            <tr id="travelagency--admin-package-management-102009-23">
              <td id="travelagency--admin-package-management-102009-24"><img src="https://images.unsplash.com/photo-1517374424-425469083abc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmFpYSUyMHNhbHZhZG9yJTIwdmlhZ2VtJTIwcGFjb3RlfGVufDB8fHx8MTc1NTEwNzgzOXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Pacote Salvador" class="package-thumb" id="travelagency--admin-package-management-102009-25"></td>
              <td id="travelagency--admin-package-management-102009-26">Salvador</td>
              <td id="travelagency--admin-package-management-102009-27">15/10/2025 - 22/10/2025</td>
              <td id="travelagency--admin-package-management-102009-28">R$ 2.100,00</td>
              <td id="travelagency--admin-package-management-102009-29">
                <button class="btn btn-small btn-secondary" id="travelagency--admin-package-management-102009-30">Editar</button>
                <button class="btn btn-small btn-danger" id="travelagency--admin-package-management-102009-31">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}