/// <mls shortName="organismHeroBanner" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-hero-banner-102009')
export class organismHeroBanner extends IcaOrganismBase {
    render(){
        return html`<div class="hero-banner" id="travelagency--hero-banner-102009-1">
        <div class="hero-content" id="travelagency--hero-banner-102009-2">
          <h1 class="hero-title" id="travelagency--hero-banner-102009-3">Descubra o mundo com a <span class="highlight" id="travelagency--hero-banner-102009-4">Travel Agency</span></h1>
          <p class="hero-subtitle" id="travelagency--hero-banner-102009-5">Encontre os melhores pacotes de viagem, reserve online e viva experiências inesquecíveis.</p>
          <a href="#pacotes" class="hero-cta" id="travelagency--hero-banner-102009-6">Explorar Pacotes</a>
        </div>
        <div class="hero-image" id="travelagency--hero-banner-102009-7">
          <img src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsYW5kc2NhcGUlMjBiYW5uZXJ8ZW58MHx8fHwxNzU1MTA3MjA4fDA&amp;ixlib=rb-4.1.0&amp;q=85" alt="Paisagem de viagem inspiradora" id="travelagency--hero-banner-102009-8">
        </div>
      </div>
    `
    }
}