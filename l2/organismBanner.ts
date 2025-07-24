/// <mls shortName="organismBanner" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-banner-102009')
export class _102009_organismBanner extends IcaOrganismBase {
    render(){
        return html`
      <section class="hero-banner">
        <div class="banner-container">
          <div class="banner-content">
            <h1 class="banner-title">Cuidado completo para seu melhor amigo</h1>
            <p class="banner-subtitle">Serviços veterinários, banho e tosa, produtos de qualidade e muito amor para seu pet</p>
            <div class="banner-actions">
              <button class="btn btn-primary">Agendar Serviço</button>
              <button class="btn btn-secondary">Ver Produtos</button>
            </div>
          </div>
          <div class="banner-image">
            <img src="https://images.unsplash.com/photo-1606098216818-40939b7c98ad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3MlMjBhbmQlMjBjYXRzJTIwYXQlMjBwZXQlMjBncm9vbWluZyUyMHNhbG9ufGVufDB8fHx8MTc1MzI5MTg4Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Pets felizes no petshop">
          </div>
        </div>
      </section>
    `
    }
}