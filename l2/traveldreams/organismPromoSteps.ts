/// <mls shortName="organismPromoSteps" project="102009" folder="traveldreams" enhancement="_100554_enhancementLit" groupName="traveldreams" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('traveldreams--organism-promo-steps-102009')
export class organismPromoSteps extends IcaOrganismBase {
    render(){
        return html`<div class="steps-container" id="promo">
          <h2 id="traveldreams--promo-steps-102009-1">Reserve sua próxima viagem em 3 passos fáceis</h2>
          <div class="steps-list" id="traveldreams--promo-steps-102009-2">
            <div class="step" id="traveldreams--promo-steps-102009-3">
              <div class="step-icon" aria-hidden="true" id="traveldreams--promo-steps-102009-4">📍</div>
              <div class="step-title" id="traveldreams--promo-steps-102009-5">Escolha o destino</div>
              <div class="step-desc" id="traveldreams--promo-steps-102009-6">Explore nossos destinos e encontre o lugar perfeito para sua próxima aventura.</div>
            </div>
            <div class="step" id="traveldreams--promo-steps-102009-7">
              <div class="step-icon" aria-hidden="true" id="traveldreams--promo-steps-102009-8">💼</div>
              <div class="step-title" id="traveldreams--promo-steps-102009-9">Reserve com facilidade</div>
              <div class="step-desc" id="traveldreams--promo-steps-102009-10">Selecione hotéis, voos e experiências em poucos cliques, com total segurança.</div>
            </div>
            <div class="step" id="traveldreams--promo-steps-102009-11">
              <div class="step-icon" aria-hidden="true" id="traveldreams--promo-steps-102009-12">✈️</div>
              <div class="step-title" id="traveldreams--promo-steps-102009-13">Aproveite a viagem</div>
              <div class="step-desc" id="traveldreams--promo-steps-102009-14">Viaje tranquilo e viva momentos inesquecíveis com a Travel Dreams.</div>
            </div>
          </div>
        </div>
      `
    }
}