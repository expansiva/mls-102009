/// <mls shortName="organismHeroBanner" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-hero-banner-102009')
export class organismHeroBanner extends IcaOrganismBase {
    render(){
        return html`<div class="banner-content" id="petshop--hero-banner-102009-1">
          <div class="banner-text" id="petshop--hero-banner-102009-2">
            <h1 id="petshop--hero-banner-102009-3">Bem-vindo ao Petshop Amigo!</h1>
            <p id="petshop--hero-banner-102009-4">Cuidado, carinho e tudo para o seu pet em um só lugar. Agende banho, tosa ou encontre os melhores produtos para seu melhor amigo!</p>
            <a href="/agendamento" class="cta-btn" id="petshop--hero-banner-102009-5">Agende um banho &amp; tosa</a>
          </div>
          <div class="banner-image" id="petshop--hero-banner-102009-6">
            <img src="https://images.unsplash.com/photo-1711185891190-0f66509c0b9c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMGFmdGVyJTIwYmF0aCUyMHBldHNob3AlMjBiYW5uZXJ8ZW58MHx8fHwxNzU0NDExMzE1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cachorro feliz após banho" id="petshop--hero-banner-102009-7">
          </div>
        </div>
      `
    }
}