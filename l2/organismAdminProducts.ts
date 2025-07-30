/// <mls shortName="organismAdminProducts" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-products-102009')
export class _102009_organismAdminProducts extends IcaOrganismBase {
    render(){
        return html`
    <section class="admin-section" id="admin-products-1">
  <div class="section-header" id="admin-products-2">
    <h2 id="admin-products-3">Gerenciar Produtos</h2>
    <button class="btn-primary add-product-btn" id="admin-products-4">+ Adicionar Produto</button>
  </div>
  
  <div class="products-table" id="admin-products-5">
    <table id="admin-products-6">
      <thead id="admin-products-7">
        <tr id="admin-products-8">
          <th id="admin-products-9">Imagem</th>
          <th id="admin-products-10">Nome</th>
          <th id="admin-products-11">Categoria</th>
          <th id="admin-products-12">Preço</th>
          <th id="admin-products-13">Estoque</th>
          <th id="admin-products-14">Status</th>
          <th id="admin-products-15">Ações</th>
        </tr>
      </thead>
      <tbody id="admin-products-16">
        <tr id="admin-products-17">
          <td id="admin-products-18">
            <img src="https://images.unsplash.com/photo-1708746333832-9a8cde4a0cfa?..." alt="Ração Premium" class="product-thumb" id="admin-products-19">
          </td>
          <td id="admin-products-20">Ração Premium Cães Adultos</td>
          <td id="admin-products-21">Ração</td>
          <td id="admin-products-22">R$ 89,90</td>
          <td class="stock-low" id="admin-products-23">5</td>
          <td id="admin-products-24">
            <span class="status-active" id="admin-products-25">Ativo</span>
          </td>
          <td id="admin-products-26">
            <button class="btn-edit" id="admin-products-27">Editar</button>
            <button class="btn-delete" id="admin-products-28">Excluir</button>
          </td>
        </tr>

        <tr id="admin-products-29">
          <td id="admin-products-30">
            <img src="https://images.unsplash.com/photo-1659692679040-5356d677d897?..." alt="Brinquedo" class="product-thumb" id="admin-products-31">
          </td>
          <td id="admin-products-32">Brinquedo Corda</td>
          <td id="admin-products-33">Brinquedos</td>
          <td id="admin-products-34">R$ 24,90</td>
          <td class="stock-ok" id="admin-products-35">25</td>
          <td id="admin-products-36">
            <span class="status-active" id="admin-products-37">Ativo</span>
          </td>
          <td id="admin-products-38">
            <button class="btn-edit" id="admin-products-39">Editar</button>
            <button class="btn-delete" id="admin-products-40">Excluir</button>
          </td>
        </tr>

        <tr id="admin-products-41">
          <td id="admin-products-42">
            <img src="https://images.unsplash.com/photo-1587291086390-69a3af40cf0b?..." alt="Shampoo" class="product-thumb" id="admin-products-43">
          </td>
          <td id="admin-products-44">Shampoo Neutro</td>
          <td id="admin-products-45">Higiene</td>
          <td id="admin-products-46">R$ 32,50</td>
          <td class="stock-out" id="admin-products-47">0</td>
          <td id="admin-products-48">
            <span class="status-inactive" id="admin-products-49">Inativo</span>
          </td>
          <td id="admin-products-50">
            <button class="btn-edit" id="admin-products-51">Editar</button>
            <button class="btn-delete" id="admin-products-52">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

    `
    }
}