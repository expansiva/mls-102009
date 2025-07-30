/// <mls shortName="organismOrderSummary" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-order-summary-102009')
export class _102009_organismOrderSummary extends IcaOrganismBase {
    render(){
        return html`
<div class="order-summary-container" id="orders-summary-1">
  <h2 id="orders-summary-2">Resumo do Pedido</h2>
  <div class="order-items" id="orders-summary-3">
    <div class="order-item" id="orders-summary-4">
      <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMHBldCUyMG51dHJpdGlvbnxlbnwwfHx8fDE3NTMyOTIxNzl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ração Premium" class="item-image" id="orders-summary-5">
      <div class="item-details" id="orders-summary-6">
        <h4 id="orders-summary-7">Ração Premium para Cães Adultos</h4>
        <p id="orders-summary-8">Quantidade: 2</p>
        <span class="item-price" id="orders-summary-9">R$ 89,90</span>
      </div>
    </div>

    <div class="order-item" id="orders-summary-10">
      <img src="https://images.unsplash.com/photo-1681597088032-2366641716e3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBjaGV3JTIwdG95JTIwY29sb3JmdWwlMjBwZXQlMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzUzMzY1NzU5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Brinquedo" class="item-image" id="orders-summary-11">
      <div class="item-details" id="orders-summary-12">
        <h4 id="orders-summary-13">Brinquedo Mordedor</h4>
        <p id="orders-summary-14">Quantidade: 1</p>
        <span class="item-price" id="orders-summary-15">R$ 24,90</span>
      </div>
    </div>
  </div>

  <div class="order-totals" id="orders-summary-16">
    <div class="total-line" id="orders-summary-17">
      <span id="orders-summary-18">Subtotal:</span>
      <span id="orders-summary-19">R$ 114,80</span>
    </div>
    <div class="total-line" id="orders-summary-20">
      <span id="orders-summary-21">Frete:</span>
      <span id="orders-summary-22">R$ 15,00</span>
    </div>
    <div class="total-line discount" id="orders-summary-23">
      <span id="orders-summary-24">Desconto:</span>
      <span id="orders-summary-25">-R$ 5,00</span>
    </div>
    <div class="total-line final" id="orders-summary-26">
      <span id="orders-summary-27">Total:</span>
      <span id="orders-summary-28">R$ 124,80</span>
    </div>
  </div>

  <div class="delivery-info" id="orders-summary-29">
    <h3 id="orders-summary-30">Informações de Entrega</h3>
    <p id="orders-summary-31"><strong>Prazo:</strong> 3-5 dias úteis</p>
    <p id="orders-summary-32"><strong>Endereço:</strong> Rua das Flores, 123 - Centro</p>
  </div>
</div>

    `
    }
}