/// <mls shortName="organismProductList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-product-list-102009')
export class _102009_organismProductList extends IcaOrganismBase {
    render(){
        return html`
        <div class="products-header">
          <h2>Nossos Produtos</h2>
          <div class="products-count">24 produtos encontrados</div>
        </div>
        
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1611443522715-3220344f1a37?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZG9nJTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMyOTE4ODh8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração Premium para Cães">
              <div class="product-badge">Mais Vendido</div>
            </div>
            <div class="product-info">
              <h3 class="product-name">Ração Premium Cães Adultos</h3>
              <p class="product-description">Ração super premium para cães adultos de todas as raças</p>
              <div class="product-price">
                <span class="price-current">R$ 89,90</span>
                <span class="price-original">R$ 99,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
          
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1594064142712-e84e63f95a55?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjByb3BlJTIwdG95fGVufDB8fHx8MTc1MzM2NTQ5NXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Brinquedo de Corda">
            </div>
            <div class="product-info">
              <h3 class="product-name">Brinquedo de Corda</h3>
              <p class="product-description">Brinquedo resistente para cães de todos os tamanhos</p>
              <div class="product-price">
                <span class="price-current">R$ 24,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
          
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1592028604480-6e7938872f57?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZG9nJTIwY29sbGFyfGVufDB8fHx8MTc1MzM2NTQ5Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Coleira de Couro">
            </div>
            <div class="product-info">
              <h3 class="product-name">Coleira de Couro Premium</h3>
              <p class="product-description">Coleira resistente e confortável em couro legítimo</p>
              <div class="product-price">
                <span class="price-current">R$ 45,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
          
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaGFtcG9vJTIwYm90dGxlfGVufDB8fHx8MTc1MzMwMDk1MXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Shampoo para Pets">
            </div>
            <div class="product-info">
              <h3 class="product-name">Shampoo Hipoalergênico</h3>
              <p class="product-description">Shampoo suave para peles sensíveis</p>
              <div class="product-price">
                <span class="price-current">R$ 32,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
          
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1661844956374-0df9ad6423b2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2F0JTIwZm9vZCUyMGJhZ3xlbnwwfHx8fDE3NTMzNjU0OTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Ração para Gatos">
            </div>
            <div class="product-info">
              <h3 class="product-name">Ração Premium Gatos</h3>
              <p class="product-description">Ração balanceada para gatos adultos</p>
              <div class="product-price">
                <span class="price-current">R$ 75,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
          
          <div class="product-card">
            <div class="product-image">
              <img src="https://images.unsplash.com/photo-1637942641210-6b035968584d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxydWJiZXIlMjBiYWxsJTIwZG9nJTIwdG95fGVufDB8fHx8MTc1MzM2NTQ5N3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Bola de Borracha">
            </div>
            <div class="product-info">
              <h3 class="product-name">Bola de Borracha</h3>
              <p class="product-description">Bola resistente para brincadeiras</p>
              <div class="product-price">
                <span class="price-current">R$ 18,90</span>
              </div>
              <button class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        
        <div class="pagination">
          <button class="pagination-btn" disabled="">Anterior</button>
          <span class="pagination-info">Página 1 de 4</span>
          <button class="pagination-btn">Próxima</button>
        </div>
      `
    }
}