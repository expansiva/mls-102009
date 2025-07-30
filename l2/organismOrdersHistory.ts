/// <mls shortName="organismOrdersHistory" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-orders-history-102009')
export class _102009_organismOrdersHistory extends IcaOrganismBase {
    render(){
        return html`
      <div class="orders-history-container">
        <div class="section-header">
          <h2>Histórico de Compras</h2>
          <div class="filter-options">
            <select class="filter-select">
              <option value="todos">Todos os pedidos</option>
              <option value="entregue">Entregues</option>
              <option value="transporte">Em transporte</option>
              <option value="preparando">Preparando</option>
            </select>
          </div>
        </div>
        
        <div class="orders-list">
          <div class="order-card">
            <div class="order-header">
              <div class="order-number">
                <span class="label">Pedido</span>
                <span class="number">#12345</span>
              </div>
              <div class="order-date">20/07/2024</div>
              <div class="order-status">
                <span class="status-badge entregue">Entregue</span>
              </div>
            </div>
            <div class="order-items">
              <div class="order-item">
                <img src="https://images.unsplash.com/photo-1611443522715-3220344f1a37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMyOTE4ODh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ração Premium" class="item-image">
                <div class="item-info">
                  <h4>Ração Premium Golden para Cães Adultos 15kg</h4>
                  <p class="item-details">Quantidade: 1 | R$ 89,90</p>
                </div>
              </div>
              <div class="order-item">
                <img src="https://images.unsplash.com/photo-1666374806301-babd33b758e5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxyb3BlJTIwZG9nJTIwdG95fGVufDB8fHx8MTc1MzM2NTg3M3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Brinquedo" class="item-image">
                <div class="item-info">
                  <h4>Brinquedo Mordedor Corda</h4>
                  <p class="item-details">Quantidade: 2 | R$ 24,90</p>
                </div>
              </div>
            </div>
            <div class="order-footer">
              <div class="order-total">
                <span class="total-label">Total:</span>
                <span class="total-value">R$ 139,70</span>
              </div>
              <div class="order-actions">
                <button class="btn-secondary">Ver detalhes</button>
                <button class="btn-primary">Comprar novamente</button>
              </div>
            </div>
          </div>
          
          <div class="order-card">
            <div class="order-header">
              <div class="order-number">
                <span class="label">Pedido</span>
                <span class="number">#12344</span>
              </div>
              <div class="order-date">18/07/2024</div>
              <div class="order-status">
                <span class="status-badge transporte">Em transporte</span>
              </div>
            </div>
            <div class="order-items">
              <div class="order-item">
                <img src="https://images.unsplash.com/photo-1694709300885-6d902dbef98d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYXQlMjBsaXR0ZXIlMjBiYWd8ZW58MHx8fHwxNzUzMzY1ODczfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Areia sanitária" class="item-image">
                <div class="item-info">
                  <h4>Areia Sanitária Aglomerante 4kg</h4>
                  <p class="item-details">Quantidade: 3 | R$ 45,90</p>
                </div>
              </div>
            </div>
            <div class="order-footer">
              <div class="order-total">
                <span class="total-label">Total:</span>
                <span class="total-value">R$ 137,70</span>
              </div>
              <div class="order-actions">
                <button class="btn-secondary">Rastrear pedido</button>
                <button class="btn-primary">Ver detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    }
}