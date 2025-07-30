/// <mls shortName="organismCartList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-cart-list-102009')
export class _102009_organismCartList extends IcaOrganismBase {
    render(){
        return html`
      <div class="cart-container">
        <h1 class="cart-title">Meu Carrinho</h1>
        <div class="cart-items">
          <div class="cart-item">
            <img src="https://images.unsplash.com/photo-1708746333832-9a8cde4a0cfa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMGtpYmJsZXxlbnwwfHx8fDE3NTMyOTIxMjB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães" class="item-image">
            <div class="item-details">
              <h3 class="item-name">Ração Premium para Cães Adultos 15kg</h3>
              <p class="item-description">Ração completa e balanceada para cães adultos</p>
              <div class="item-price">R$ 89,90</div>
            </div>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" value="2" min="1" class="qty-input">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="remove-btn">Remover</button>
            </div>
            <div class="item-total">R$ 179,80</div>
          </div>
          
          <div class="cart-item">
            <img src="https://images.unsplash.com/photo-1652524791225-ea5e6de0ea71?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGNhdCUyMHRveSUyMGZlYXRoZXJzfGVufDB8fHx8MTc1MzI5MjIzNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo para Gatos" class="item-image">
            <div class="item-details">
              <h3 class="item-name">Brinquedo Interativo para Gatos</h3>
              <p class="item-description">Brinquedo estimulante com penas e guizo</p>
              <div class="item-price">R$ 24,90</div>
            </div>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" value="1" min="1" class="qty-input">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="remove-btn">Remover</button>
            </div>
            <div class="item-total">R$ 24,90</div>
          </div>
          
          <div class="cart-item">
            <img src="https://images.unsplash.com/photo-1587291086390-69a3af40cf0b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlJTIwbmV1dHJhbHxlbnwwfHx8fDE3NTMzNjU2NjF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo para Pets" class="item-image">
            <div class="item-details">
              <h3 class="item-name">Shampoo Neutro para Pets 500ml</h3>
              <p class="item-description">Shampoo suave para todos os tipos de pelo</p>
              <div class="item-price">R$ 32,50</div>
            </div>
            <div class="item-controls">
              <div class="quantity-control">
                <button class="qty-btn minus">-</button>
                <input type="number" value="1" min="1" class="qty-input">
                <button class="qty-btn plus">+</button>
              </div>
              <button class="remove-btn">Remover</button>
            </div>
            <div class="item-total">R$ 32,50</div>
          </div>
        </div>
        
        <div class="empty-cart" style="display: none;">
          <img src="https://images.unsplash.com/photo-1634406688363-02ff7644d950?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHNob3BwaW5nJTIwY2FydCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3NTMzNjU2NjJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Carrinho vazio" class="empty-cart-image">
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione produtos incríveis para seu pet!</p>
          <a href="/loja" class="continue-shopping-btn">Continuar Comprando</a>
        </div>
      </div>
    `
    }
}