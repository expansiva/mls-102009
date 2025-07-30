/// <mls shortName="organismCartList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-list-102009')
export class _102009_organismCartList extends IcaOrganismBase {
    render(){
        return html`
<div class="cart-container" id="cart-list-1">
  <h1 class="cart-title" id="cart-list-2">Meu Carrinho</h1>
  <div class="cart-items" id="cart-list-3">
    <div class="cart-item" id="cart-list-4">
      <img src="https://images.unsplash.com/photo-1708746333832-9a8cde4a0cfa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMGtpYmJsZXxlbnwwfHx8fDE3NTMyOTIxMjB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães" class="item-image" id="cart-list-5">
      <div class="item-details" id="cart-list-6">
        <h3 class="item-name" id="cart-list-7">Ração Premium para Cães Adultos 15kg</h3>
        <p class="item-description" id="cart-list-8">Ração completa e balanceada para cães adultos</p>
        <div class="item-price" id="cart-list-9">R$ 89,90</div>
      </div>
      <div class="item-controls" id="cart-list-10">
        <div class="quantity-control" id="cart-list-11">
          <button class="qty-btn minus" id="cart-list-12">-</button>
          <input type="number" value="2" min="1" class="qty-input" id="cart-list-13">
          <button class="qty-btn plus" id="cart-list-14">+</button>
        </div>
        <button class="remove-btn" id="cart-list-15">Remover</button>
      </div>
      <div class="item-total" id="cart-list-16">R$ 179,80</div>
    </div>

    <div class="cart-item" id="cart-list-17">
      <img src="https://images.unsplash.com/photo-1652524791225-ea5e6de0ea71?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGNhdCUyMHRveSUyMGZlYXRoZXJzfGVufDB8fHx8MTc1MzI5MjIzNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo para Gatos" class="item-image" id="cart-list-18">
      <div class="item-details" id="cart-list-19">
        <h3 class="item-name" id="cart-list-20">Brinquedo Interativo para Gatos</h3>
        <p class="item-description" id="cart-list-21">Brinquedo estimulante com penas e guizo</p>
        <div class="item-price" id="cart-list-22">R$ 24,90</div>
      </div>
      <div class="item-controls" id="cart-list-23">
        <div class="quantity-control" id="cart-list-24">
          <button class="qty-btn minus" id="cart-list-25">-</button>
          <input type="number" value="1" min="1" class="qty-input" id="cart-list-26">
          <button class="qty-btn plus" id="cart-list-27">+</button>
        </div>
        <button class="remove-btn" id="cart-list-28">Remover</button>
      </div>
      <div class="item-total" id="cart-list-29">R$ 24,90</div>
    </div>

    <div class="cart-item" id="cart-list-30">
      <img src="https://images.unsplash.com/photo-1587291086390-69a3af40cf0b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlJTIwbmV1dHJhbHxlbnwwfHx8fDE3NTMzNjU2NjF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo para Pets" class="item-image" id="cart-list-31">
      <div class="item-details" id="cart-list-32">
        <h3 class="item-name" id="cart-list-33">Shampoo Neutro para Pets 500ml</h3>
        <p class="item-description" id="cart-list-34">Shampoo suave para todos os tipos de pelo</p>
        <div class="item-price" id="cart-list-35">R$ 32,50</div>
      </div>
      <div class="item-controls" id="cart-list-36">
        <div class="quantity-control" id="cart-list-37">
          <button class="qty-btn minus" id="cart-list-38">-</button>
          <input type="number" value="1" min="1" class="qty-input" id="cart-list-39">
          <button class="qty-btn plus" id="cart-list-40">+</button>
        </div>
        <button class="remove-btn" id="cart-list-41">Remover</button>
      </div>
      <div class="item-total" id="cart-list-42">R$ 32,50</div>
    </div>
  </div>

  <div class="empty-cart" style="display: none;" id="cart-list-43">
    <img src="https://images.unsplash.com/photo-1634406688363-02ff7644d950?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHNob3BwaW5nJTIwY2FydCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3NTMzNjU2NjJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Carrinho vazio" class="empty-cart-image" id="cart-list-44">
    <h2 id="cart-list-45">Seu carrinho está vazio</h2>
    <p id="cart-list-46">Adicione produtos incríveis para seu pet!</p>
    <a href="/loja" class="continue-shopping-btn" id="cart-list-47">Continuar Comprando</a>
  </div>
</div>

    `
    }
}