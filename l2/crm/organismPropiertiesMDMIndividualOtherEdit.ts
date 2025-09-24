/// <mls shortName="organismPropiertiesMDMIndividualOtherEdit" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-propierties-m-d-m-individual-other-edit-102009')
export class organismPropiertiesMDMIndividualOtherEdit extends IcaOrganismBase {
render(){
return html`<div class="organism-container" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-1">
<div class="panel" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-3">
<h2 class="subtitle" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-4">Outras Informações</h2>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-5">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-6">Status</label>
<select class="select" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-7">
<option value="ativo">Ativo</option>
<option value="desativado">Desativado</option>
</select>
<span class="warning" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-8">Atenção: Alterações para <strong>Desativado</strong> são <strong>irreversíveis</strong>.</span>
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-9">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-10">Motivo da Alteração do Status</label>
<input type="text" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-11" placeholder="Digite o motivo" required>
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-12">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-13">Sexo</label>
<div class="radio-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-14">
<label class="radio-label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-15"><input type="radio" name="sexo" value="masculino" class="radio"> Masculino</label>
<label class="radio-label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-16"><input type="radio" name="sexo" value="feminino" class="radio"> Feminino</label>
</div>
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-17">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-18">Telefone</label>
<input type="text" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-19" placeholder="Formato: (11) 99999-9999">
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-20">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-21">Fax</label>
<input type="text" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-22" placeholder="Formato: (11) 99999-9999">
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-23">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-24">Web</label>
<input type="url" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-25" placeholder="Ex: https://www.exemplo.com">
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-26">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-27">Email</label>
<input type="email" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-28" placeholder="Ex: usuario@exemplo.com">
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-29">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-30">RG</label>
<input type="text" class="input" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-31" placeholder="Formato: 99.999.999-9">
</div>
<div class="field-group" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-32">
<label class="label" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-33">Descrição</label>
<textarea class="textarea" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-34" placeholder="Digite uma descrição"></textarea>
</div>
<div class="buttons" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-35">
<button class="button" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-36">Voltar</button>
<button class="button" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-37">Cancelar</button>
<button class="button primary" id="crm--organism-propierties-m-d-m-individual-other-edit-102009-38">Salvar</button>
</div>
</div>
</div>
`
}
}
