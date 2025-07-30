/// <mls shortName="organismProductList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-product-list-102009')
export class _102009_organismProductList extends IcaOrganismBase {
  render() {
    return html`
<div class="products-header" id="product-list-1">
  <h2 id="product-list-2">Nossos Produtos</h2>
  <div class="products-count" id="product-list-3">24 produtos encontrados</div>
</div>

<div class="products-grid" id="product-list-4">
  <div class="product-card" id="product-list-5">
    <div class="product-image" id="product-list-6">
      <img src="https://images.unsplash.com/photo-1611443522715-3220344f1a37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMyOTE4ODh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães" id="product-list-7">
      <div class="product-badge" id="product-list-8">Mais Vendido</div>
    </div>
    <div class="product-info" id="product-list-9">
      <h3 class="product-name" id="product-list-10">Ração Premium Cães Adultos</h3>
      <p class="product-description" id="product-list-11">Ração super premium para cães adultos de todas as raças</p>
      <div class="product-price" id="product-list-12">
        <span class="price-current" id="product-list-13">R$ 89,90</span>
        <span class="price-original" id="product-list-14">R$ 99,90</span>
      </div>
      <button class="add-to-cart" id="product-list-15">Adicionar ao Carrinho</button>
    </div>
  </div>

  <div class="product-card" id="product-list-16">
    <div class="product-image" id="product-list-17">
      <img src="https://images.unsplash.com/photo-1594064142712-e84e63f95a55?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjByb3BlJTIwdG95fGVufDB8fHx8MTc1MzM2NTQ5NXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo de Corda" id="product-list-18">
    </div>
    <div class="product-info" id="product-list-19">
      <h3 class="product-name" id="product-list-20">Brinquedo de Corda</h3>
      <p class="product-description" id="product-list-21">Brinquedo resistente para cães de todos os tamanhos</p>
      <div class="product-price" id="product-list-22">
        <span class="price-current" id="product-list-23">R$ 24,90</span>
      </div>
      <button class="add-to-cart" id="product-list-24">Adicionar ao Carrinho</button>
    </div>
  </div>

  <div class="product-card" id="product-list-25">
    <div class="product-image" id="product-list-26">
      <img src="https://images.unsplash.com/photo-1592028604480-6e7938872f57?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZG9nJTIwY29sbGFyfGVufDB8fHx8MTc1MzM2NTQ5Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Coleira de Couro" id="product-list-27">
    </div>
    <div class="product-info" id="product-list-28">
      <h3 class="product-name" id="product-list-29">Coleira de Couro Premium</h3>
      <p class="product-description" id="product-list-30">Coleira resistente e confortável em couro legítimo</p>
      <div class="product-price" id="product-list-31">
        <span class="price-current" id="product-list-32">R$ 45,90</span>
      </div>
      <button class="add-to-cart" id="product-list-33">Adicionar ao Carrinho</button>
    </div>
  </div>

  <div class="product-card" id="product-list-34">
    <div class="product-image" id="product-list-35">
      <img src="https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlfGVufDB8fHx8MTc1MzMwMDk1MXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo para Pets" id="product-list-36">
    </div>
    <div class="product-info" id="product-list-37">
      <h3 class="product-name" id="product-list-38">Shampoo Hipoalergênico</h3>
      <p class="product-description" id="product-list-39">Shampoo suave para peles sensíveis</p>
      <div class="product-price" id="product-list-40">
        <span class="price-current" id="product-list-41">R$ 32,90</span>
      </div>
      <button class="add-to-cart" id="product-list-42">Adicionar ao Carrinho</button>
    </div>
  </div>

  <div class="product-card" id="product-list-43">
    <div class="product-image" id="product-list-44">
      <img src="https://images.unsplash.com/photo-1661844956374-0df9ad6423b2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2F0JTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMzNjU0OTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração para Gatos" id="product-list-45">
    </div>
    <div class="product-info" id="product-list-46">
      <h3 class="product-name" id="product-list-47">Ração Premium Gatos</h3>
      <p class="product-description" id="product-list-48">Ração balanceada para gatos adultos</p>
      <div class="product-price" id="product-list-49">
        <span class="price-current" id="product-list-50">R$ 75,90</span>
      </div>
      <button class="add-to-cart" id="product-list-51">Adicionar ao Carrinho</button>
    </div>
  </div>

  <div class="product-card" id="product-list-52">
    <div class="product-image" id="product-list-53">
      <img src="https://images.unsplash.com/photo-1637942641210-6b035968584d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjBiYWxsJTIwZG9nJTIwdG95fGVufDB8fHx8MTc1MzM2NTQ5N3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Bola de Borracha" id="product-list-54">
    </div>
    <div class="product-info" id="product-list-55">
      <h3 class="product-name" id="product-list-56">Bola de Borracha</h3>
      <p class="product-description" id="product-list-57">Bola resistente para brincadeiras</p>
      <div class="product-price" id="product-list-58">
        <span class="price-current" id="product-list-59">R$ 18,90</span>
      </div>
      <button class="add-to-cart" id="product-list-60">Adicionar ao Carrinho</button>
    </div>
  </div>
</div>

<div class="pagination" id="product-list-61">
  <button class="pagination-btn" disabled="" id="product-list-62">Anterior</button>
  <span class="pagination-info" id="product-list-63">Página 1 de 4</span>
  <button class="pagination-btn" id="product-list-64">Próxima</button>
</div>

      `
  }
}