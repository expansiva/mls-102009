/// <mls shortName="organismPropiertiesMDMPhotoEdit" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-propierties-m-d-m-photo-edit-102009')
export class organismPropiertiesMDMPhotoEdit extends IcaOrganismBase {
    render() {
        return html`<div class="container" id="crm--organism-propierties-m-d-m-photo-edit-102009-1">
<h1 id="crm--organism-propierties-m-d-m-photo-edit-102009-2">Adicionar nova Foto:</h1>
<div class="field" id="crm--organism-propierties-m-d-m-photo-edit-102009-3">
<label id="crm--organism-propierties-m-d-m-photo-edit-102009-4">Foto:</label>
<button id="crm--organism-propierties-m-d-m-photo-edit-102009-5">Escolher arquivo</button>
<span id="crm--organism-propierties-m-d-m-photo-edit-102009-6">Nenhum arquivo escolhido</span>
</div>
<div class="field" id="crm--organism-propierties-m-d-m-photo-edit-102009-7">
<label id="crm--organism-propierties-m-d-m-photo-edit-102009-8">Descrição:</label>
<input type="text" id="crm--organism-propierties-m-d-m-photo-edit-102009-9">
</div>

<div class="organism-actions" id="crm--organism-propierties-m-d-m-photo-edit-102009-11">
<button class="organism-button organism-button--secondary" id="crm--organism-propierties-m-d-m-photo-edit-102009-12">Voltar</button>
<button class="organism-button organism-button--secondary" id="crm--organism-propierties-m-d-m-photo-edit-102009-13">Cancelar</button>
<button class="organism-button organism-button--primary" id="id="crm--organism-propierties-m-d-m-photo-edit-102009-14">Salvar</button>
</div>
</div>`
    }
}