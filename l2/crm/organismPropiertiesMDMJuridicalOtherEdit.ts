/// <mls shortName="organismPropiertiesMDMJuridicalOtherEdit" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-propierties-m-d-m-juridical-other-edit-102009')
export class organismPropiertiesMDMJuridicalOtherEdit extends IcaOrganismBase {
    render() {
        return html`<div class="organism-container" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-1">
<div class="organism-panel" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-4">
<h2 class="organism-subtitle" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-5">Outras Informações</h2>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-6">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-7">Status</label>
<select class="organism-select" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-8">
<option value="ativo">Ativo</option>
</select>
<span class="organism-warning" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-9">Atenção: Alterar para <u>Desativado</u> não poderá mais retornar a qualquer outro status.</span>
</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-10">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-11">Motivo da Alteração do Status</label>
<input type="text" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-12">
</div>
<div class="organism-field organism-field--phone" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-13">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-14">Telefone</label>
<div class="organism-input-with-hint">
    <input type="text" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-15">
    <span class="organism-hint" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-16">Número e telefones ex: 1134321795 ou + 55 11 9999-9999 ou (11)9999-9999</span>
</div>
</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-17">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-18">Fax</label>
<div class="organism-input-with-hint">
    <input type="text" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-19">
    <span class="organism-hint" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-20">Somente números ex: 1134321795</span>
</div>

</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-21">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-22">Web</label>
<input type="text" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-23">
</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-24">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-25">Email</label>
<input type="email" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-26">
</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-27">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-28">IE/RG</label>
<input type="text" class="organism-input" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-29">
</div>
<div class="organism-field" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-30">
<label class="organism-label" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-31">Descrição</label>
<textarea class="organism-textarea" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-32"></textarea>
</div>
<div class="organism-actions" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-33">
<button class="organism-button organism-button--secondary" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-34">Voltar</button>
<button class="organism-button organism-button--secondary" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-35">Cancelar</button>
<button class="organism-button organism-button--primary" id="crm--organism-propierties-m-d-m-juridical-other-edit-102009-36">Salvar</button>
</div>
</div>
</div>
`
    }
}
