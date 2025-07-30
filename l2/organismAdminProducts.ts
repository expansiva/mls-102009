/// <mls shortName="organismAdminProducts" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-products-102009')
export class _102009_organismAdminProducts extends IcaOrganismBase {
    render(){
        return html`
      <section class="admin-section">
        <div class="section-header">
          <h2>Gerenciar Produtos</h2>
          <button class="btn-primary add-product-btn">+ Adicionar Produto</button>
        </div>
        
        <div class="products-table">
          <table>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Estoque</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="https://images.unsplash.com/photo-1708746333832-9a8cde4a0cfa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMGtpYmJsZXxlbnwwfHx8fDE3NTMyOTIxMjB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Ração Premium" class="product-thumb"></td>
                <td>Ração Premium Cães Adultos</td>
                <td>Ração</td>
                <td>R$ 89,90</td>
                <td class="stock-low">5</td>
                <td><span class="status-active">Ativo</span></td>
                <td>
                  <button class="btn-edit">Editar</button>
                  <button class="btn-delete">Excluir</button>
                </td>
              </tr>
              <tr>
                <td><img src="https://images.unsplash.com/photo-1659692679040-5356d677d897?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjByb3BlJTIwdG95JTIwY29sb3JmdWwlMjBwbGF5fGVufDB8fHx8MTc1MzM2NTk5M3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Brinquedo" class="product-thumb"></td>
                <td>Brinquedo Corda</td>
                <td>Brinquedos</td>
                <td>R$ 24,90</td>
                <td class="stock-ok">25</td>
                <td><span class="status-active">Ativo</span></td>
                <td>
                  <button class="btn-edit">Editar</button>
                  <button class="btn-delete">Excluir</button>
                </td>
              </tr>
              <tr>
                <td><img src="https://images.unsplash.com/photo-1587291086390-69a3af40cf0b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlJTIwbmV1dHJhbCUyMGh5Z2llbmV8ZW58MHx8fHwxNzUzMzY1OTkzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Shampoo" class="product-thumb"></td>
                <td>Shampoo Neutro</td>
                <td>Higiene</td>
                <td>R$ 32,50</td>
                <td class="stock-out">0</td>
                <td><span class="status-inactive">Inativo</span></td>
                <td>
                  <button class="btn-edit">Editar</button>
                  <button class="btn-delete">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `
    }
}