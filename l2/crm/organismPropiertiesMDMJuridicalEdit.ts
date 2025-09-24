/// <mls shortName="organismPropiertiesMDMJuridicalEdit" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-propierties-m-d-m-juridical-edit-102009')
export class organismPropiertiesMDMJuridicalEdit extends IcaOrganismBase {
    render() {
        return html`<div class="organism-propierties-m-d-m-juridical-edit">
<h1 class="title">Edição do Nome da Empresa e CPF/CNPJ</h1>
<p class="warning">[Não utilize esta ferramenta para renomear identidades. Pois poderão causar falhas em relatórios futuros.]</p>
<div class="panel">
<div class="field">
<label>Nome Fantasia:</label>
<input type="text" value="Empresa ABC Teste">
</div>
<div class="field">
<label>Nome:</label>
<input type="text" value="Minha empresa ABC LTDA">
</div>
<div class="field">
<label>CPF/CNPJ:</label>
<input type="text" value="61.297.630/0001-64">
</div>
<div class="field">
<label>Código Alternativo:</label>
<input type="text" value="174291">
</div>
<div class="field">
<label>Tipo Alternativo:</label>
<select readonly>
<option>Pessoa Jurídica</option>
</select>
<span class="attention">*Atenção, este campo não é para ser alterado.</span>
</div>
<button class="save-button">Salvar</button>
</div>
</div>`
    }
}
