/// <mls shortName="organismAdminServiceEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-admin-service-edit-102009')
export class organismAdminServiceEdit extends IcaOrganismBase {
    render() {
    
return html`<div class="form-container" id="petshop--organism-admin-service-edit-102009-1"
>
<h2 id="petshop--organism-admin-service-edit-102009-2">Editar Serviço</h2>
<section class="section-card" id="petshop--organism-admin-service-edit-102009-3">
<h3 id="petshop--organism-admin-service-edit-102009-4">Dados de Registro</h3>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-5">
<label for="name" id="petshop--organism-admin-service-edit-102009-6">Nome</label>
<input type="text" id="name" name="name" required id="petshop--organism-admin-service-edit-102009-7">
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-8">
<label for="descriptionShort" id="petshop--organism-admin-service-edit-102009-9">Descrição Curta</label>
<textarea id="descriptionShort" name="descriptionShort" required id="petshop--organism-admin-service-edit-102009-10"></textarea>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-11">
<label for="serviceCode" id="petshop--organism-admin-service-edit-102009-12">Código do Serviço</label>
<input type="text" id="serviceCode" name="serviceCode" required id="petshop--organism-admin-service-edit-102009-13">
</div>
</section>
<section class="section-card" id="petshop--organism-admin-service-edit-102009-14">
<h3 id="petshop--organism-admin-service-edit-102009-15">Dados do Serviço</h3>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-16">
<label for="category" id="petshop--organism-admin-service-edit-102009-17">Categoria</label>
<select id="category" name="category" id="petshop--organism-admin-service-edit-102009-18">
<option value="banho-tosa" id="petshop--organism-admin-service-edit-102009-19">Banho & Tosa</option>
<option value="consulta" id="petshop--organism-admin-service-edit-102009-20">Consulta</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-21">
<label for="priceRegular" id="petshop--organism-admin-service-edit-102009-22">Preço Regular</label>
<input type="number" id="priceRegular" name="priceRegular" step="0.01" required id="petshop--organism-admin-service-edit-102009-23">
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-24">
<label for="priceSubscription" id="petshop--organism-admin-service-edit-102009-25">Preço Assinatura</label>
<input type="number" id="priceSubscription" name="priceSubscription" step="0.01" id="petshop--organism-admin-service-edit-102009-26">
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-27">
<label for="durationMinutes" id="petshop--organism-admin-service-edit-102009-28">Duração (minutos)</label>
<input type="number" id="durationMinutes" name="durationMinutes" required id="petshop--organism-admin-service-edit-102009-29">
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-30">
<label id="petshop--organism-admin-service-edit-102009-31">Adequação a Espécies</label>
<select multiple id="speciesSuitability" name="speciesSuitability" id="petshop--organism-admin-service-edit-102009-32">
<option value="canina" id="petshop--organism-admin-service-edit-102009-33">Canina</option>
<option value="felina" id="petshop--organism-admin-service-edit-102009-34">Felina</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-35">
<label id="petshop--organism-admin-service-edit-102009-36">Adequação a Tamanhos</label>
<select multiple id="sizeSuitability" name="sizeSuitability" id="petshop--organism-admin-service-edit-102009-37">
<option value="pequeno" id="petshop--organism-admin-service-edit-102009-38">Pequeno</option>
<option value="medio" id="petshop--organism-admin-service-edit-102009-39">Médio</option>
<option value="grande" id="petshop--organism-admin-service-edit-102009-40">Grande</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-41">
<label id="petshop--organism-admin-service-edit-102009-42">Recursos Necessários</label>
<select multiple id="requiredResources" name="requiredResources" id="petshop--organism-admin-service-edit-102009-43">
<option value="shampoo" id="petshop--organism-admin-service-edit-102009-44">Shampoo</option>
<option value="tesoura" id="petshop--organism-admin-service-edit-102009-45">Tesoura</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-46">
<label for="employeeCommission" id="petshop--organism-admin-service-edit-102009-47">Comissão do Funcionário</label>
<input type="number" id="employeeCommission" name="employeeCommission" step="0.01" min="0" max="1" id="petshop--organism-admin-service-edit-102009-48">
</div>
</section>
<div class="form-actions" id="petshop--organism-admin-service-edit-102009-49">
<button class="btn btn-back" id="petshop--organism-admin-service-edit-102009-50">Voltar</button>
<button class="btn btn-save" id="petshop--organism-admin-service-edit-102009-51">Salvar</button>
</div>
`
}
}