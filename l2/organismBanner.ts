/// <mls shortName="organismBanner" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-banner-102009')
export class _102009_organismBanner extends IcaOrganismBase {
  render() {
    return html`
  <section class="hero-banner" id="banner-1">
  <div class="banner-container" id="banner-2">
    <div class="banner-content" id="banner-3">
      <h1 class="banner-title" id="banner-4">Cuidado completo para seu melhor amigo</h1>
      <p class="banner-subtitle" id="banner-5">Serviços veterinários, banho e tosa, produtos de qualidade e muito amor para seu pet</p>
      <div class="banner-actions" id="banner-6">
        <button class="btn btn-primary" id="banner-7">Agendar Serviço</button>
        <button class="btn btn-secondary" id="banner-8">Ver Produtos</button>
      </div>
    </div>
    <div class="banner-image" id="banner-9">
      <img src="https://images.unsplash.com/photo-1606098216818-40939b7c98ad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZ3MlMjBhbmQlMjBjYXRzJTIwYXQlMjBwZXQlMjBncm9vbWluZyUyMHNhbG9ufGVufDB8fHx8MTc1MzI5MTg4Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Pets felizes no petshop" id="banner-10">
    </div>
  </div>
</section>
    `
  }
}