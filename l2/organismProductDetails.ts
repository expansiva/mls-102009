/// <mls shortName="organismProductDetails" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-product-details-102009')
export class _102009_organismProductDetails extends IcaOrganismBase {
  render() {
    return html`
  <div class="product-container" id="product-details-1">
  <div class="product-images" id="product-details-2">
    <div class="main-image" id="product-details-3">
      <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZyUyMGtpYmJsZSUyMG51dHJpdGlvbnxlbnwwfHx8fDE3NTMzNjU1NzZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem principal do produto" class="main-product-image" id="product-details-4">
    </div>
    <div class="thumbnail-images" id="product-details-5">
      <img src="https://images.unsplash.com/photo-1647699926980-b7d360761521?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwa2liYmxlJTIwY2xvc2UlMjB1cCUyMHRleHR1cmV8ZW58MHx8fHwxNzUzMzY1NTc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 1" class="thumbnail" id="product-details-6">
      <img src="https://images.unsplash.com/photo-1672323471046-21e40fab1ccd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBlYXRpbmclMjBwcmVtaXVtJTIwZm9vZCUyMGJvd2x8ZW58MHx8fHwxNzUzMjkyMTc5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 2" class="thumbnail" id="product-details-7">
      <img src="https://images.unsplash.com/photo-1684882726821-2999db517441?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwaW5ncmVkaWVudHMlMjBuYXR1cmFsJTIwY2hpY2tlbnxlbnwwfHx8fDE3NTMzNjU1Nzh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Miniatura do produto 3" class="thumbnail" id="product-details-8">
    </div>
  </div>
  <div class="product-info" id="product-details-9">
    <div class="product-header" id="product-details-10">
      <h1 class="product-title" id="product-details-11">Ração Premium para Cães Adultos</h1>
      <div class="product-rating" id="product-details-12">
        <div class="stars" id="product-details-13">
          <span class="star filled" id="product-details-14">★</span>
          <span class="star filled" id="product-details-15">★</span>
          <span class="star filled" id="product-details-16">★</span>
          <span class="star filled" id="product-details-17">★</span>
          <span class="star" id="product-details-18">★</span>
        </div>
        <span class="rating-text" id="product-details-19">(4.2) 127 avaliações</span>
      </div>
    </div>
    <div class="product-pricing" id="product-details-20">
      <span class="current-price" id="product-details-21">R$ 89,90</span>
      <span class="original-price" id="product-details-22">R$ 109,90</span>
      <span class="discount-badge" id="product-details-23">18% OFF</span>
    </div>
    <div class="product-availability" id="product-details-24">
      <span class="stock-status available" id="product-details-25">✓ Em estoque</span>
      <span class="stock-quantity" id="product-details-26">12 unidades disponíveis</span>
    </div>
    <div class="product-description" id="product-details-27">
      <h3 id="product-details-28">Descrição do Produto</h3>
      <p id="product-details-29">Ração super premium desenvolvida especialmente para cães adultos de todas as raças. Formulada com ingredientes naturais e proteínas de alta qualidade para garantir uma nutrição completa e balanceada.</p>
      <ul class="product-features" id="product-details-30">
        <li id="product-details-31">Rico em proteínas de frango e cordeiro</li>
        <li id="product-details-32">Sem corantes artificiais</li>
        <li id="product-details-33">Fortalece o sistema imunológico</li>
        <li id="product-details-34">Melhora a digestão</li>
        <li id="product-details-35">Pelagem mais brilhante</li>
      </ul>
    </div>
    <div class="product-specifications" id="product-details-36">
      <h3 id="product-details-37">Especificações</h3>
      <div class="spec-grid" id="product-details-38">
        <div class="spec-item" id="product-details-39">
          <span class="spec-label" id="product-details-40">Peso:</span>
          <span class="spec-value" id="product-details-41">15kg</span>
        </div>
        <div class="spec-item" id="product-details-42">
          <span class="spec-label" id="product-details-43">Idade:</span>
          <span class="spec-value" id="product-details-44">Cães adultos (1-7 anos)</span>
        </div>
        <div class="spec-item" id="product-details-45">
          <span class="spec-label" id="product-details-46">Porte:</span>
          <span class="spec-value" id="product-details-47">Todos os portes</span>
        </div>
        <div class="spec-item" id="product-details-48">
          <span class="spec-label" id="product-details-49">Sabor:</span>
          <span class="spec-value" id="product-details-50">Frango e Cordeiro</span>
        </div>
      </div>
    </div>
  </div>
</div>

    `
  }
}