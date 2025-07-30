/// <mls shortName="organismProductDetails" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-product-details-102009')
export class _102009_organismProductDetails extends IcaOrganismBase {
    render(){
        return html`
      <div class="product-container">
        <div class="product-images">
          <div class="main-image">
            <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMGtpYmJsZSUyMG51dHJpdGlvbnxlbnwwfHx8fDE3NTMzNjU1NzZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem principal do produto" class="main-product-image">
          </div>
          <div class="thumbnail-images">
            <img src="https://images.unsplash.com/photo-1647699926980-b7d360761521?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwa2liYmxlJTIwY2xvc2UlMjB1cCUyMHRleHR1cmV8ZW58MHx8fHwxNzUzMzY1NTc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 1" class="thumbnail">
            <img src="https://images.unsplash.com/photo-1672323471046-21e40fab1ccd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBlYXRpbmclMjBwcmVtaXVtJTIwZm9vZCUyMGJvd2x8ZW58MHx8fHwxNzUzMjkyMTc5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 2" class="thumbnail">
            <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwaW5ncmVkaWVudHMlMjBuYXR1cmFsJTIwY2hpY2tlbnxlbnwwfHx8fDE3NTMzNjU1Nzh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 3" class="thumbnail">
          </div>
        </div>
        <div class="product-info">
          <div class="product-header">
            <h1 class="product-title">Ração Premium para Cães Adultos</h1>
            <div class="product-rating">
              <div class="stars">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star">★</span>
              </div>
              <span class="rating-text">(4.2) 127 avaliações</span>
            </div>
          </div>
          <div class="product-pricing">
            <span class="current-price">R$ 89,90</span>
            <span class="original-price">R$ 109,90</span>
            <span class="discount-badge">18% OFF</span>
          </div>
          <div class="product-availability">
            <span class="stock-status available">✓ Em estoque</span>
            <span class="stock-quantity">12 unidades disponíveis</span>
          </div>
          <div class="product-description">
            <h3>Descrição do Produto</h3>
            <p>Ração super premium desenvolvida especialmente para cães adultos de todas as raças. Formulada com ingredientes naturais e proteínas de alta qualidade para garantir uma nutrição completa e balanceada.</p>
            <ul class="product-features">
              <li>Rico em proteínas de frango e cordeiro</li>
              <li>Sem corantes artificiais</li>
              <li>Fortalece o sistema imunológico</li>
              <li>Melhora a digestão</li>
              <li>Pelagem mais brilhante</li>
            </ul>
          </div>
          <div class="product-specifications">
            <h3>Especificações</h3>
            <div class="spec-grid">
              <div class="spec-item">
                <span class="spec-label">Peso:</span>
                <span class="spec-value">15kg</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Idade:</span>
                <span class="spec-value">Cães adultos (1-7 anos)</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Porte:</span>
                <span class="spec-value">Todos os portes</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Sabor:</span>
                <span class="spec-value">Frango e Cordeiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    }
}