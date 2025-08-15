/// <mls shortName="organismAboutSection" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-about-section-102009')
export class organismAboutSection extends IcaOrganismBase {
    render(){
        return html`<section class="about-section" aria-label="Sobre a agência" id="travel--about-section-102009-1">
        <div class="about-section__content" id="travel--about-section-102009-2">
          <h2 class="about-section__title" id="travel--about-section-102009-3">Sobre a Travel</h2>
          <p class="about-section__text" id="travel--about-section-102009-4">
            Somos apaixonados por viagens e experiências únicas. Há mais de 10 anos, conectamos pessoas aos melhores destinos do Brasil e do mundo, com atendimento personalizado e condições exclusivas.
          </p>
          <ul class="about-section__differentials" id="travel--about-section-102009-5">
            <li id="travel--about-section-102009-6">Atendimento 100% personalizado</li>
            <li id="travel--about-section-102009-7">Parcelamento facilitado e seguro</li>
            <li id="travel--about-section-102009-8">Equipe especializada em roteiros exclusivos</li>
            <li id="travel--about-section-102009-9">Suporte 24h durante sua viagem</li>
          </ul>
        </div>
        <div class="about-section__image" id="travel--about-section-102009-10">
          <img src="https://images.unsplash.com/photo-1572504743618-6fd46e2724f7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxlcXVpcGUlMjBhZyVDMyVBQW5jaWElMjBkZSUyMHZpYWdlbnMlMjBzb3JyaW5kb3xlbnwwfHx8fDE3NTUwMzE0MDJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Equipe da agência Travel sorrindo" id="travel--about-section-102009-11">
        </div>
      </section>
    `
    }
}