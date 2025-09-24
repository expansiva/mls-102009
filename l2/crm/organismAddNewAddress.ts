/// <mls shortName="organismAddNewAddress" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-add-new-address-102009')
export class organismAddNewAddress extends IcaOrganismBase {
    // New property to control visibility of custom type input
    @state() showCustomType: boolean = false;
    // Handler for type select change
    private handleTypeChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        this.showCustomType = target.value === 'Outros';
    }
    render() {
        return html`<div class="organism-add-new-address" id="crm--organism-add-new-address-102009-1">
<h2 id="crm--organism-add-new-address-102009-2">Editar Endereço</h2>
<form class="address-form" id="crm--organism-add-new-address-102009-3">
<label for="tipo-endereco" id="crm--organism-add-new-address-102009-14">Tipo de Endereço:</label>
<select id="tipo-endereco" id="crm--organism-add-new-address-102009-15" @change=${this.handleTypeChange}>
<option value="Comercial">Comercial</option>
<option value="Residencial">Residencial</option>
<option value="Entrega">Entrega</option>
<option value="Cobrança">Cobrança</option>
<option value="Outros">Outros</option>
</select>
${this.showCustomType ? html`<label for="custom-tipo" id="crm--organism-add-new-address-102009-22">Tipo Personalizado:</label>
<input type="text" id="custom-tipo" placeholder="Digite o tipo personalizado" id="crm--organism-add-new-address-102009-23">` : ''}
<label for="rua" id="crm--organism-add-new-address-102009-4">Rua:</label>
<input type="text" id="rua" value="Rua Exemplo" id="crm--organism-add-new-address-102009-5">
<label for="bairro" id="crm--organism-add-new-address-102009-6">Bairro:</label>
<input type="text" id="bairro" value="Bairro Exemplo" id="crm--organism-add-new-address-102009-7">
<label for="cep" id="crm--organism-add-new-address-102009-8">CEP:</label>
<input type="text" id="cep" value="12345-678" id="crm--organism-add-new-address-102009-9">
<label for="cidade" id="crm--organism-add-new-address-102009-10">Cidade:</label>
<input type="text" id="cidade" value="Cidade Exemplo" id="crm--organism-add-new-address-102009-11">
<label for="uf" id="crm--organism-add-new-address-102009-12">UF:</label>
<select id="uf" id="crm--organism-add-new-address-102009-13">
<option value="AC">AC</option>
<option value="AL">AL</option>
<option value="AP">AP</option>
<option value="AM">AM</option>
<option value="BA">BA</option>
<option value="CE">CE</option>
<option value="DF">DF</option>
<option value="ES">ES</option>
<option value="GO">GO</option>
<option value="MA">MA</option>
<option value="MT">MT</option>
<option value="MS">MS</option>
<option value="MG">MG</option>
<option value="PA">PA</option>
<option value="PB">PB</option>
<option value="PR">PR</option>
<option value="PE">PE</option>
<option value="PI">PI</option>
<option value="RJ">RJ</option>
<option value="RN">RN</option>
<option value="RS">RS</option>
<option value="RO">RO</option>
<option value="RR">RR</option>
<option value="SC">SC</option>
<option value="SP">SP</option>
<option value="SE">SE</option>
<option value="TO">TO</option>
</select>
<span id="crm--organism-add-new-address-102009-16">Geo_RegiaoID: 123</span>
<span id="crm--organism-add-new-address-102009-17">Geo_CidadeID: 456</span>
</form>
<div class="map-container" id="crm--organism-add-new-address-102009-18">
<div class="map-placeholder" id="crm--organism-add-new-address-102009-19">Mapa - Localização Atual</div>
</div>
<button class="update-geo-btn" id="crm--organism-add-new-address-102009-20">Atualizar Geolocalização</button>
<button class="save-btn" id="crm--organism-add-new-address-102009-21">Salvar</button>
</div>
`
    }
}