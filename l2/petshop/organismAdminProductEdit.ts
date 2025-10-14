/// <mls shortName="organismAdminProductEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-admin-product-edit-102009')
export class organismAdminProductEdit extends IcaOrganismBase {
render(){
return html`<div class="form-container" id="petshop--organism-admin-product-edit-102009-1">
<h2 id="petshop--organism-admin-product-edit-102009-2">Editar Produto</h2>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-3">
<label for="name" id="petshop--organism-admin-product-edit-102009-4">Nome</label>
<input type="text" id="name" value="Nome do Produto" id="petshop--organism-admin-product-edit-102009-5">
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-6">
<label for="descriptionShort" id="petshop--organism-admin-product-edit-102009-7">Descrição Curta</label>
<textarea id="descriptionShort" id="petshop--organism-admin-product-edit-102009-8">Descrição curta do produto.</textarea>
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-9">
<label for="sku" id="petshop--organism-admin-product-edit-102009-10">SKU</label>
<input type="text" id="sku" value="SKU123" id="petshop--organism-admin-product-edit-102009-11">
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-12">
<label for="barcode" id="petshop--organism-admin-product-edit-102009-13">Código de Barras</label>
<input type="text" id="barcode" value="123456789" id="petshop--organism-admin-product-edit-102009-14">
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-15">
<label for="category" id="petshop--organism-admin-product-edit-102009-16">Categoria</label>
<select id="category" id="petshop--organism-admin-product-edit-102009-17">
<option value="alimento">Alimento</option>
<option value="acessorio">Acessório</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-18">
<label for="subcategory" id="petshop--organism-admin-product-edit-102009-19">Subcategoria</label>
<select id="subcategory" id="petshop--organism-admin-product-edit-102009-20">
<option value="seca">Seca</option>
<option value="umida">Úmida</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-21">
<label for="unitOfMeasure" id="petshop--organism-admin-product-edit-102009-22">Unidade de Medida</label>
<select id="unitOfMeasure" id="petshop--organism-admin-product-edit-102009-23">
<option value="kg">kg</option>
<option value="un">un</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-24">
<label for="petSuitability" id="petshop--organism-admin-product-edit-102009-25">Adequação para Pet</label>
<select id="petSuitability" id="petshop--organism-admin-product-edit-102009-26">
<option value="cachorro">Cachorro</option>
<option value="gato">Gato</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-product-edit-102009-27">
<label for="productDetails" id="petshop--organism-admin-product-edit-102009-28">Detalhes do Produto</label>
<textarea id="productDetails" id="petshop--organism-admin-product-edit-102009-29">Detalhes adicionais do produto.</textarea>
</div>
<div class="form-actions" id="petshop--organism-admin-product-edit-102009-30">
<button class="btn btn-back" id="petshop--organism-admin-product-edit-102009-31"><a href="/pageAdminProduct">Voltar</a></button>
<button class="btn btn-save" id="petshop--organism-admin-product-edit-102009-32">Salvar</button>
</div>
</div>`
}
}