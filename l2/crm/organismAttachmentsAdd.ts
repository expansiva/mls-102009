/// <mls shortName="organismAttachmentsAdd" project="102009" enhancement="_100554_enhancementLit" folder="crm" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-attachments-add-102009')
export class organismAttachmentsEdit extends IcaOrganismBase {
render() {
return html`<form class="organism-attachments-add" id="crm--organism-attachments-add-102009-1">
<h1 id="crm--organism-attachments-add-102009-2">Adicionar Anexo</h1>
<div class="form-group" id="crm--organism-attachments-add-102009-3">

<div class="form-group" id="crm--organism-attachments-add-102009-6">
<label for="file-upload" id="crm--organism-attachments-add-102009-7">Escolher arquivo</label>
<input type="file" id="file-upload" id="crm--organism-attachments-add-102009-8">

<div class="form-group" id="crm--organism-attachments-add-102009-11">
<label for="team-select" id="crm--organism-attachments-add-102009-12">Editando Equipe</label>
<select id="team-select" id="crm--organism-attachments-add-102009-13">
<option value="financeiro" id="crm--organism-attachments-add-102009-14">Financeiro</option>
<option value="ti" id="crm--organism-attachments-add-102009-15">TI</option>
<option value="operacoes" id="crm--organism-attachments-add-102009-16">Operações</option>
</select>
</div>
<div class="form-group" id="crm--organism-attachments-add-102009-17">
<label for="description" id="crm--organism-attachments-add-102009-18">Editando Descrição</label>
<textarea id="description" placeholder="Descrição do anexo" id="crm--organism-attachments-add-102009-19"></textarea>
</div>
<div class="form-group checkbox-inline" id="crm--organism-attachments-add-102009-20">
<label for="release-checkbox" id="crm--organism-attachments-add-102009-21">Liberar para ÁREA DE DOWNLOADS DO CLIENTE (EXTRANET)</label>
<input type="checkbox" id="release-checkbox" id="crm--organism-attachments-add-102009-22">
</div>
<div class="form-actions" id="crm--organism-attachments-add-102009-23">
<button type="button" id="crm--organism-attachments-add-102009-24">Cancelar</button>
<button type="submit" id="crm--organism-attachments-add-102009-25">Salvar</button>
</div>
</form>
`
}
}