/// <mls shortName="organismAdminProducts" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-products-102009')
export class organismAdminProducts extends IcaOrganismBase {
    render(){
        return html`<section class="admin-products" id="products">
        <h2 class="admin-products__title" id="petshop--admin-products-102009-1">Gestão de Produtos</h2>
        <div class="admin-products__actions" id="petshop--admin-products-102009-2">
          <button class="admin-products__add" id="petshop--admin-products-102009-3">Adicionar Produto</button>
        </div>
        <table class="admin-products__table" id="petshop--admin-products-102009-4">
          <thead id="petshop--admin-products-102009-5">
            <tr id="petshop--admin-products-102009-6">
              <th id="petshop--admin-products-102009-7">Imagem</th>
              <th id="petshop--admin-products-102009-8">Nome</th>
              <th id="petshop--admin-products-102009-9">Categoria</th>
              <th id="petshop--admin-products-102009-10">Preço</th>
              <th id="petshop--admin-products-102009-11">Status</th>
              <th id="petshop--admin-products-102009-12">Ações</th>
            </tr>
          </thead>
          <tbody id="petshop--admin-products-102009-13">
            <tr id="petshop--admin-products-102009-14">
              <td id="petshop--admin-products-102009-15"><img src="https://images.unsplash.com/photo-1621951825147-bcf82eed6249?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxyYSVDMyVBNyVDMyVBM28lMjBwcmVtaXVtJTIwYyVDMyVBM2VzfGVufDB8fHx8MTc1NDQxMTUzMXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Ração Premium" class="admin-products__img" id="petshop--admin-products-102009-16"></td>
              <td id="petshop--admin-products-102009-17">Ração Premium Cães 10kg</td>
              <td id="petshop--admin-products-102009-18">Alimentação</td>
              <td id="petshop--admin-products-102009-19">R$ 120,00</td>
              <td id="petshop--admin-products-102009-20"><span class="admin-products__status admin-products__status--active" id="petshop--admin-products-102009-21">Ativo</span></td>
              <td id="petshop--admin-products-102009-22">
                <button class="admin-products__action admin-products__action--edit" id="petshop--admin-products-102009-23">Editar</button>
                <button class="admin-products__action admin-products__action--remove" id="petshop--admin-products-102009-24">Remover</button>
              </td>
            </tr>
            <tr id="petshop--admin-products-102009-25">
              <td id="petshop--admin-products-102009-26"><img src="https://images.unsplash.com/photo-1691351943492-cfee023e9cbf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxicmlucXVlZG8lMjBib2xhJTIwZ2F0b3xlbnwwfHx8fDE3NTQ0MTE1MzJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Brinquedo Bola" class="admin-products__img" id="petshop--admin-products-102009-27"></td>
              <td id="petshop--admin-products-102009-28">Brinquedo Bola para Gatos</td>
              <td id="petshop--admin-products-102009-29">Brinquedos</td>
              <td id="petshop--admin-products-102009-30">R$ 25,00</td>
              <td id="petshop--admin-products-102009-31"><span class="admin-products__status admin-products__status--active" id="petshop--admin-products-102009-32">Ativo</span></td>
              <td id="petshop--admin-products-102009-33">
                <button class="admin-products__action admin-products__action--edit" id="petshop--admin-products-102009-34">Editar</button>
                <button class="admin-products__action admin-products__action--remove" id="petshop--admin-products-102009-35">Remover</button>
              </td>
            </tr>
            <tr id="petshop--admin-products-102009-36">
              <td id="petshop--admin-products-102009-37"><img src="https://images.unsplash.com/photo-1621483942317-baa33317d58f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzaGFtcG9vJTIwcGV0JTIwbmV1dHJvfGVufDB8fHx8MTc1NDQxMTUzMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Shampoo Pet" class="admin-products__img" id="petshop--admin-products-102009-38"></td>
              <td id="petshop--admin-products-102009-39">Shampoo Pet Neutro 500ml</td>
              <td id="petshop--admin-products-102009-40">Higiene</td>
              <td id="petshop--admin-products-102009-41">R$ 18,00</td>
              <td id="petshop--admin-products-102009-42"><span class="admin-products__status admin-products__status--inactive" id="petshop--admin-products-102009-43">Inativo</span></td>
              <td id="petshop--admin-products-102009-44">
                <button class="admin-products__action admin-products__action--edit" id="petshop--admin-products-102009-45">Editar</button>
                <button class="admin-products__action admin-products__action--remove" id="petshop--admin-products-102009-46">Remover</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    `
    }
}