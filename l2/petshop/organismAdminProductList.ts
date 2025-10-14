/// <mls shortName="organismAdminProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-admin-product-list-102009')
export class organismAdminProductList extends IcaOrganismBase {
render() {
return html`<div class="organism-admin-product-list" id="petshop--organism-admin-product-list-102009-1">
<h2 id="petshop--organism-admin-product-list-102009-2">Lista de Produtos</h2>
<div class="form-group" id="petshop--organism-admin-product-list-102009-3">
<label for="filter-name" id="petshop--organism-admin-product-list-102009-4">Filtrar por Nome:</label>
<div class="filter-controls" id="petshop--organism-admin-product-list-102009-29">
<input type="text" id="filter-name" placeholder="Digite o nome do produto" id="petshop--organism-admin-product-list-102009-5">
<button class="btn btn-save" id="petshop--organism-admin-product-list-102009-30">Adicionar</button>
</div>
</div>
<table id="petshop--organism-admin-product-list-102009-6">
<thead id="petshop--organism-admin-product-list-102009-7">
<tr id="petshop--organism-admin-product-list-102009-8">
<th id="petshop--organism-admin-product-list-102009-9">Nome</th>
<th id="petshop--organism-admin-product-list-102009-10">Descrição</th>
<th id="petshop--organism-admin-product-list-102009-11">Ações</th>
</tr>
</thead>
<tbody id="petshop--organism-admin-product-list-102009-12">
<tr id="petshop--organism-admin-product-list-102009-13">
<td id="petshop--organism-admin-product-list-102009-14">Ração para Cães</td>
<td id="petshop--organism-admin-product-list-102009-15">Ração premium para cães adultos.</td>
<td id="petshop--organism-admin-product-list-102009-16"><a href="#edit-1">Editar</a></td>
</tr>
<tr id="petshop--organism-admin-product-list-102009-17">
<td id="petshop--organism-admin-product-list-102009-18">Brinquedo para Gatos</td>
<td id="petshop--organism-admin-product-list-102009-19">Brinquedo interativo para gatos.</td>
<td id="petshop--organism-admin-product-list-102009-20"><a href="#edit-2">Editar</a></td>
</tr>
<tr id="petshop--organism-admin-product-list-102009-21">
<td id="petshop--organism-admin-product-list-102009-22">Coleira para Cães</td>
<td id="petshop--organism-admin-product-list-102009-23">Coleira resistente e confortável.</td>
<td id="petshop--organism-admin-product-list-102009-24"><a href="#edit-3">Editar</a></td>
</tr>
</tbody>
</table>
<div class="pagination" id="petshop--organism-admin-product-list-102009-25">
<button id="petshop--organism-admin-product-list-102009-26">Anterior</button>
<span id="petshop--organism-admin-product-list-102009-27">Página 1 de 5</span>
<button id="petshop--organism-admin-product-list-102009-28">Próxima</button>
</div>
</div>`;
}
}