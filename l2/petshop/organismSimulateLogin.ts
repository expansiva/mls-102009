/// <mls shortName="organismSimulateLogin" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { MdmData, RequestMDMGetLitstByType, MdmType } from "./_102019_layer4Mdm";

@customElement('petshop--organism-simulate-login-102009')
export class organismSimulateLogin extends IcaOrganismBase {

    @state() users: MdmData[] = [];
    @state() enterprise: MdmData[] = [];

    firstUpdated() {
        this.init(); 
    }

    render() {
        return html`
<div class="form-container" id="petshop--organism-simulate-login-102009-1">
<h2 id="petshop--organism-simulate-login-102009-2">Simular Login</h2>
<div class="form-group" id="petshop--organism-simulate-login-102009-3">
<label for="user-select" id="petshop--organism-simulate-login-102009-4">Selecionar Usuário</label>
<select id="user-select" id="petshop--organism-simulate-login-102009-5">
${this.users.map((user, index) => html`<option value="${index}">${(user.data.registrationData as any).name}</option>`)}
</select>
</div>
<div class="form-group" id="petshop--organism-simulate-login-102009-9">
<label for="company-select" id="petshop--organism-simulate-login-102009-10">Selecionar Empresa</label>
<select id="company-select" id="petshop--organism-simulate-login-102009-11">
${this.enterprise.map((ent, index) => html`<option value="${index}" id="petshop--organism-simulate-login-102009-enterprise-${index}">${(ent.data.registrationData as any).corporateName}</option>`)}
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
    private async init() {
        const req: RequestMDMGetLitstByType = {
            action: 'MDMGetLitstByType',
            inDeveloped: true,
            version: '1',
            params: { type: MdmType.PessoaFisica },
        };
        const responseUser = await exec(req);
        req.params.type = MdmType.PessoaJuridica;
        const responseEnterprise = await exec(req);
        if (responseUser.ok) this.users = responseUser.data;
        if (responseEnterprise.ok) this.enterprise = responseEnterprise.data;
    }

    private handleSimulateClick() {
        const userSelect = this.querySelector('#user-select') as HTMLSelectElement;
        const companySelect = this.querySelector('#company-select') as HTMLSelectElement;
        const profileRadios = this.querySelectorAll('input[name="profile"]:checked') as NodeListOf<HTMLInputElement>;
        const selectedProfile = profileRadios.length > 0 ? profileRadios[0].value : null;
        const hiddenLink = this.querySelector('#hidden-link') as HTMLAnchorElement;

        if (this.users[+userSelect.value]) setState('ui.petshop.login', this.users[+userSelect.value]);

        if (this.enterprise[+companySelect.value]) setState('ui.petshop.enterprise', this.enterprise[+companySelect.value]);


        if (selectedProfile === 'client') {
            hiddenLink.href = '/pageHome';
            hiddenLink.click();
        } else if (selectedProfile === 'admin') {
            hiddenLink.href = '/pageAdminDashboard';
            hiddenLink.click();
        }

    }
}