/// <mls shortName="organismAdminScheduling" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-admin-scheduling-102009')
export class organismAdminScheduling extends IcaOrganismBase {
// Property to manage the current step in the scheduling process
private currentStep: 'user-selection' | 'scheduling' = 'user-selection';
// Handler for the continue button to switch to scheduling step
private handleContinue() {
this.currentStep = 'scheduling';
this.requestUpdate();
}
// Handler for the back button to switch to user-selection step
private handleBack() {
this.currentStep = 'user-selection';
this.requestUpdate();
}
render() {
return html`<div class="scheduling-container" id="petshop--organism-admin-scheduling-102009-1">
${this.currentStep === 'user-selection' ? html`
<section id="petshop--organism-admin-scheduling-102009-2">
<h2 id="petshop--organism-admin-scheduling-102009-3">Pesquisar Usuário</h2>
<div class="form-group" id="petshop--organism-admin-scheduling-102009-4">
<label for="user-search" id="petshop--organism-admin-scheduling-102009-5">Buscar por nome, e-mail ou ID</label>
<input type="text" id="user-search" placeholder="Digite para pesquisar" id="petshop--organism-admin-scheduling-102009-6">
</div>
<ul class="user-list" id="petshop--organism-admin-scheduling-102009-7">
<li class="user-item" id="petshop--organism-admin-scheduling-102009-8">João Silva - joao@email.com</li>
<li class="user-item" id="petshop--organism-admin-scheduling-102009-9">Maria Oliveira - maria@email.com</li>
</ul>
<div class="form-actions" id="petshop--organism-admin-scheduling-102009-10">
<button class="btn btn-save" id="petshop--organism-admin-scheduling-102009-11" @click="${this.handleContinue}">Continuar</button>
</div>
</section>
` : html`
<section id="petshop--organism-admin-scheduling-102009-12">
<h2 id="petshop--organism-admin-scheduling-102009-13">Agendamento</h2>
<div class="form-group" id="petshop--organism-admin-scheduling-102009-14">
<label for="pet-select" id="petshop--organism-admin-scheduling-102009-15">Selecionar Pet</label>
<select id="pet-select" id="petshop--organism-admin-scheduling-102009-16">
<option value="">Escolha um pet</option>
<option value="dog1">Rex</option>
<option value="cat1">Whiskers</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-scheduling-102009-17">
<label for="date-select" id="petshop--organism-admin-scheduling-102009-18">Data</label>
<input type="date" id="date-select" value="2025-10-15" id="petshop--organism-admin-scheduling-102009-19">
</div>
<div class="form-group" id="petshop--organism-admin-scheduling-102009-20">
<label for="time-select" id="petshop--organism-admin-scheduling-102009-21">Horário</label>
<select id="time-select" id="petshop--organism-admin-scheduling-102009-22">
<option value="">Escolha um horário</option>
<option value="09:00">09:00</option>
<option value="10:00">10:00</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-scheduling-102009-23">
<label for="service-select" id="petshop--organism-admin-scheduling-102009-24">Serviço</label>
<select id="service-select" id="petshop--organism-admin-scheduling-102009-25">
<option value="">Escolha um serviço</option>
<option value="banho">Banho</option>
<option value="tosa">Tosa</option>
</select>
</div>
<div class="form-actions" id="petshop--organism-admin-scheduling-102009-26">
<button class="btn btn-back" id="petshop--organism-admin-scheduling-102009-27" @click="${this.handleBack}">Voltar</button>
<button class="btn btn-save" id="petshop--organism-admin-scheduling-102009-28">Agendar</button>
</div>
</section>
`}
</div>`
}
}