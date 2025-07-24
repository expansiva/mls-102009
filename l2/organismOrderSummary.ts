/// <mls shortName="organismOrderSummary" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-order-summary-102009')
export class _102009_organismOrderSummary extends IcaOrganismBase {
    render(){
        return html`
      <div class="order-summary-container">
        <h2>Resumo do Pedido</h2>
        <div class="order-items">
          <div class="order-item">
            <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMHBldCUyMG51dHJpdGlvbnxlbnwwfHx8fDE3NTMyOTIxNzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ração Premium" class="item-image">
            <div class="item-details">
              <h4>Ração Premium para Cães Adultos</h4>
              <p>Quantidade: 2</p>
              <span class="item-price">R$ 89,90</span>
            </div>
          </div>
          
          <div class="order-item">
            <img src="https://images.unsplash.com/photo-1681597088032-2366641716e3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBjaGV3JTIwdG95JTIwY29sb3JmdWwlMjBwZXQlMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzUzMzY1NzU5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Brinquedo" class="item-image">
            <div class="item-details">
              <h4>Brinquedo Mordedor</h4>
              <p>Quantidade: 1</p>
              <span class="item-price">R$ 24,90</span>
            </div>
          </div>
        </div>
        
        <div class="order-totals">
          <div class="total-line">
            <span>Subtotal:</span>
            <span>R$ 114,80</span>
          </div>
          <div class="total-line">
            <span>Frete:</span>
            <span>R$ 15,00</span>
          </div>
          <div class="total-line discount">
            <span>Desconto:</span>
            <span>-R$ 5,00</span>
          </div>
          <div class="total-line final">
            <span>Total:</span>
            <span>R$ 124,80</span>
          </div>
        </div>
        
        <div class="delivery-info">
          <h3>Informações de Entrega</h3>
          <p><strong>Prazo:</strong> 3-5 dias úteis</p>
          <p><strong>Endereço:</strong> Rua das Flores, 123 - Centro</p>
        </div>
      </div>
    `
    }
}