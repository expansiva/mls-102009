/// <mls shortName="organismHero" project="102009" folder="traveldreams" enhancement="_100554_enhancementLit" groupName="traveldreams" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('traveldreams--organism-hero-102009')
export class organismHero extends IcaOrganismBase {
    render(){
        return html`<div class="hero-container" id="hero">
          <div class="hero-text" id="traveldreams--hero-102009-1">
            <h1 id="traveldreams--hero-102009-2">Descubra o mundo com a Travel Dreams</h1>
            <p id="traveldreams--hero-102009-3">Planeje sua próxima viagem de forma simples, rápida e segura. Destinos incríveis, hotéis selecionados e experiências inesquecíveis esperam por você!</p>
            <a href="#destinations" class="hero-cta" id="traveldreams--hero-102009-4">Comece agora</a>
          </div>
          <div class="hero-image" id="traveldreams--hero-102009-5">
            <img src="https://chamados.expansiva.com.br/novosite/turista.png" alt="Turista feliz explorando o mundo" id="traveldreams--hero-102009-6">
          </div>
        </div>
      `
    }
}