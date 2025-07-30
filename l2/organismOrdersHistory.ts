/// <mls shortName="organismOrdersHistory" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-orders-history-102009')
export class _102009_organismOrdersHistory extends IcaOrganismBase {
    render(){
        return html`
    <div class="orders-history-container" id="orders-history-1">
  <div class="section-header" id="orders-history-2">
    <h2 id="orders-history-3">Histórico de Compras</h2>
    <div class="filter-options" id="orders-history-4">
      <select class="filter-select" id="orders-history-5">
        <option value="todos" id="orders-history-6">Todos os pedidos</option>
        <option value="entregue" id="orders-history-7">Entregues</option>
        <option value="transporte" id="orders-history-8">Em transporte</option>
        <option value="preparando" id="orders-history-9">Preparando</option>
      </select>
    </div>
  </div>

  <div class="orders-list" id="orders-history-10">
    <div class="order-card" id="orders-history-11">
      <div class="order-header" id="orders-history-12">
        <div class="order-number" id="orders-history-13">
          <span class="label" id="orders-history-14">Pedido</span>
          <span class="number" id="orders-history-15">#12345</span>
        </div>
        <div class="order-date" id="orders-history-16">20/07/2024</div>
        <div class="order-status" id="orders-history-17">
          <span class="status-badge entregue" id="orders-history-18">Entregue</span>
        </div>
      </div>
      <div class="order-items" id="orders-history-19">
        <div class="order-item" id="orders-history-20">
          <img src="https://images.unsplash.com/photo-1611443522715-3220344f1a37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMyOTE4ODh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ração Premium" class="item-image" id="orders-history-21">
          <div class="item-info" id="orders-history-22">
            <h4 id="orders-history-23">Ração Premium Golden para Cães Adultos 15kg</h4>
            <p class="item-details" id="orders-history-24">Quantidade: 1 | R$ 89,90</p>
          </div>
        </div>
        <div class="order-item" id="orders-history-25">
          <img src="https://images.unsplash.com/photo-1666374806301-babd33b758e5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxyb3BlJTIwZG9nJTIwdG95fGVufDB8fHx8MTc1MzM2NTg3M3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Brinquedo" class="item-image" id="orders-history-26">
          <div class="item-info" id="orders-history-27">
            <h4 id="orders-history-28">Brinquedo Mordedor Corda</h4>
            <p class="item-details" id="orders-history-29">Quantidade: 2 | R$ 24,90</p>
          </div>
        </div>
      </div>
      <div class="order-footer" id="orders-history-30">
        <div class="order-total" id="orders-history-31">
          <span class="total-label" id="orders-history-32">Total:</span>
          <span class="total-value" id="orders-history-33">R$ 139,70</span>
        </div>
        <div class="order-actions" id="orders-history-34">
          <button class="btn-secondary" id="orders-history-35">Ver detalhes</button>
          <button class="btn-primary" id="orders-history-36">Comprar novamente</button>
        </div>
      </div>
    </div>

    <div class="order-card" id="orders-history-37">
      <div class="order-header" id="orders-history-38">
        <div class="order-number" id="orders-history-39">
          <span class="label" id="orders-history-40">Pedido</span>
          <span class="number" id="orders-history-41">#12344</span>
        </div>
        <div class="order-date" id="orders-history-42">18/07/2024</div>
        <div class="order-status" id="orders-history-43">
          <span class="status-badge transporte" id="orders-history-44">Em transporte</span>
        </div>
      </div>
      <div class="order-items" id="orders-history-45">
        <div class="order-item" id="orders-history-46">
          <img src="https://images.unsplash.com/photo-1694709300885-6d902dbef98d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYXQlMjBsaXR0ZXIlMjBiYWd8ZW58MHx8fHwxNzUzMzY1ODczfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Areia sanitária" class="item-image" id="orders-history-47">
          <div class="item-info" id="orders-history-48">
            <h4 id="orders-history-49">Areia Sanitária Aglomerante 4kg</h4>
            <p class="item-details" id="orders-history-50">Quantidade: 3 | R$ 45,90</p>
          </div>
        </div>
      </div>
      <div class="order-footer" id="orders-history-51">
        <div class="order-total" id="orders-history-52">
          <span class="total-label" id="orders-history-53">Total:</span>
          <span class="total-value" id="orders-history-54">R$ 137,70</span>
        </div>
        <div class="order-actions" id="orders-history-55">
          <button class="btn-secondary" id="orders-history-56">Rastrear pedido</button>
          <button class="btn-primary" id="orders-history-57">Ver detalhes</button>
        </div>
      </div>
    </div>
  </div>
</div>

    `
    }
}