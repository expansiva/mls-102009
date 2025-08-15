/// <mls shortName="organismHeroBanner" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-hero-banner-102009')
export class organismHeroBanner extends IcaOrganismBase {
    render(){
        return html`<section class="hero-banner" id="travel--hero-banner-102009-1">
        <div class="hero-banner__content" id="travel--hero-banner-102009-2">
          <h1 class="hero-banner__title" id="travel--hero-banner-102009-3">Descubra o mundo com a Travel</h1>
          <p class="hero-banner__subtitle" id="travel--hero-banner-102009-4">Pacotes exclusivos, experiências inesquecíveis. Sua próxima viagem começa aqui!</p>
          <a href="#busca" class="hero-banner__cta" id="travel--hero-banner-102009-5">Buscar Pacotes</a>
        </div>
        <div class="hero-banner__image" id="travel--hero-banner-102009-6">
          <img src="https://images.unsplash.com/photo-1565429559511-3bfbb436d148?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwYWlzYWdlbSUyMGluc3BpcmFkb3JhJTIwdmlhZ2VtJTIwcHJhaWElMjBtb250YW5oYXxlbnwwfHx8fDE3NTUwMzE0MDB8MA&amp;ixlib=rb-4.1.0&amp;q=85" alt="Paisagem inspiradora de viagem" id="travel--hero-banner-102009-7">
        </div>
      </section>
    `
    }
}