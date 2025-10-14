/// <mls shortName="organismSimulateLogin" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-simulate-login-102009')
export class organismSimulateLogin extends IcaOrganismBase {

    // Handle simulate button click for navigation based on selections
    private handleSimulateClick() {
        const userSelect = this.querySelector('#user-select') as HTMLSelectElement;
        const companySelect = this.querySelector('#company-select') as HTMLSelectElement;
        const profileRadios = this.querySelectorAll('input[name="profile"]:checked') as NodeListOf<HTMLInputElement>;
        const selectedProfile = profileRadios.length > 0 ? profileRadios[0].value : null;
        const hiddenLink = this.querySelector('#hidden-link') as HTMLAnchorElement;
        if (selectedProfile === 'client') {
            hiddenLink.href = '/pageHome';
            hiddenLink.click();
        } else if (selectedProfile === 'admin') {
            hiddenLink.href = '/pageAdminDashboard';
            hiddenLink.click();
        }
    }
    render() {
        return html`<div class="form-container" id="petshop--organism-simulate-login-102009-1">
<h2 id="petshop--organism-simulate-login-102009-2">Simular Login</h2>
<div class="form-group" id="petshop--organism-simulate-login-102009-3">
<label for="user-select" id="petshop--organism-simulate-login-102009-4">Selecionar Usuário</label>
<select id="user-select" id="petshop--organism-simulate-login-102009-5">
<option value="user1" id="petshop--organism-simulate-login-102009-6">João Silva</option>
<option value="user2" id="petshop--organism-simulate-login-102009-7">Maria Oliveira</option>
<option value="user3" id="petshop--organism-simulate-login-102009-8">Carlos Santos</option>
</select>
</div>
<div class="form-group" id="petshop--organism-simulate-login-102009-9">
<label for="company-select" id="petshop--organism-simulate-login-102009-10">Selecionar Empresa</label>
<select id="company-select" id="petshop--organism-simulate-login-102009-11">
<option value="company1" id="petshop--organism-simulate-login-102009-12">Petshop Central</option>
<option value="company2" id="petshop--organism-simulate-login-102009-13">Petshop Norte</option>
<option value="company3" id="petshop--organism-simulate-login-102009-14">Petshop Sul</option>
</select>
</div>
<div class="form-group radio" id="petshop--organism-simulate-login-102009-15">
<label id="petshop--organism-simulate-login-102009-16">Tipo de Perfil</label>
<div id="petshop--organism-simulate-login-102009-17">
<input type="radio" id="admin-radio" name="profile" value="admin" id="petshop--organism-simulate-login-102009-18">
<label for="admin-radio" id="petshop--organism-simulate-login-102009-19">Admin</label>
<input type="radio" id="client-radio" name="profile" value="client" id="petshop--organism-simulate-login-102009-20">
<label for="client-radio" id="petshop--organism-simulate-login-102009-21">Cliente</label>
</div>
</div>
<button id="petshop--organism-simulate-login-102009-22" @click="${this.handleSimulateClick}">Simular</button>
<a id="hidden-link" style="display: none;"></a>
</div>
`
    }
}