/// <mls shortName="organismProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-product-list-102009')
export class organismProductList extends IcaOrganismBase {
    render(){
        return html`<h1 id="petshop--product-list-102009-1">Catálogo de Produtos</h1>
        <div class="product-grid" id="petshop--product-list-102009-2">
          <div class="product-card" id="petshop--product-list-102009-3">
            <img src="https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwYmFnJTIwcHJlbWl1bXxlbnwwfHx8fDE3NTQzNDE5OTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães" id="petshop--product-list-102009-4">
            <div class="product-name" id="petshop--product-list-102009-5">Ração Premium para Cães</div>
            <div class="product-type" id="petshop--product-list-102009-6">Alimento • Cão</div>
            <div class="product-price" id="petshop--product-list-102009-7">R$ 89,90</div>
            <div class="product-actions" id="petshop--product-list-102009-8">
              <button id="petshop--product-list-102009-9">Adicionar ao Carrinho</button>
            </div>
          </div>
          <div class="product-card" id="petshop--product-list-102009-10">
            <img src="https://images.unsplash.com/photo-1665582894071-eb5b7c4d4656?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYXQlMjBpbnRlcmFjdGl2ZSUyMHRveSUyMGNvbG9yZnVsfGVufDB8fHx8MTc1NDQxMTQxNHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo Interativo para Gatos" id="petshop--product-list-102009-11">
            <div class="product-name" id="petshop--product-list-102009-12">Brinquedo Interativo para Gatos</div>
            <div class="product-type" id="petshop--product-list-102009-13">Brinquedo • Gato</div>
            <div class="product-price" id="petshop--product-list-102009-14">R$ 29,90</div>
            <div class="product-actions" id="petshop--product-list-102009-15">
              <button id="petshop--product-list-102009-16">Adicionar ao Carrinho</button>
            </div>
          </div>
          <div class="product-card" id="petshop--product-list-102009-17">
            <img src="https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlfGVufDB8fHx8MTc1NDQwNjUzMXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo Suave para Pets" id="petshop--product-list-102009-18">
            <div class="product-name" id="petshop--product-list-102009-19">Shampoo Suave para Pets</div>
            <div class="product-type" id="petshop--product-list-102009-20">Higiene • Todos</div>
            <div class="product-price" id="petshop--product-list-102009-21">R$ 19,90</div>
            <div class="product-actions" id="petshop--product-list-102009-22">
              <button id="petshop--product-list-102009-23">Adicionar ao Carrinho</button>
            </div>
          </div>
          <div class="product-card" id="petshop--product-list-102009-24">
            <img src="https://images.unsplash.com/photo-1655450075012-c0393e3cc1ce?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBiZWQlMjBjb3p5JTIwbW9kZXJufGVufDB8fHx8MTc1NDQxMTQxNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Caminha Aconchegante" id="petshop--product-list-102009-25">
            <div class="product-name" id="petshop--product-list-102009-26">Caminha Aconchegante</div>
            <div class="product-type" id="petshop--product-list-102009-27">Acessório • Cão/Gato</div>
            <div class="product-price" id="petshop--product-list-102009-28">R$ 119,90</div>
            <div class="product-actions" id="petshop--product-list-102009-29">
              <button id="petshop--product-list-102009-30">Adicionar ao Carrinho</button>
            </div>
          </div>
          <div class="product-card" id="petshop--product-list-102009-31">
            <img src="https://images.unsplash.com/photo-1614242040107-f3b76c4475f0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxiaXJkJTIwZm9vZCUyMHNlZWRzJTIwbWl4fGVufDB8fHx8MTc1NDQxMTQxNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Sementes Selecionadas para Aves" id="petshop--product-list-102009-32">
            <div class="product-name" id="petshop--product-list-102009-33">Sementes Selecionadas para Aves</div>
            <div class="product-type" id="petshop--product-list-102009-34">Alimento • Ave</div>
            <div class="product-price" id="petshop--product-list-102009-35">R$ 14,90</div>
            <div class="product-actions" id="petshop--product-list-102009-36">
              <button id="petshop--product-list-102009-37">Adicionar ao Carrinho</button>
            </div>
          </div>
          <div class="product-card" id="petshop--product-list-102009-38">
            <img src="https://images.unsplash.com/photo-1544198841-10f34f31f8dd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aWMlMjBwZXQlMjB3YXRlciUyMGRpc3BlbnNlcnxlbnwwfHx8fDE3NTQ0MTE0MTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Bebedouro Automático" id="petshop--product-list-102009-39">
            <div class="product-name" id="petshop--product-list-102009-40">Bebedouro Automático</div>
            <div class="product-type" id="petshop--product-list-102009-41">Acessório • Todos</div>
            <div class="product-price" id="petshop--product-list-102009-42">R$ 49,90</div>
            <div class="product-actions" id="petshop--product-list-102009-43">
              <button id="petshop--product-list-102009-44">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      `
    }
}