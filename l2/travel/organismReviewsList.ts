/// <mls shortName="organismReviewsList" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-reviews-list-102009')
export class organismReviewsList extends IcaOrganismBase {
    render(){
        return html`<section class="reviews-list__container" aria-label="Avaliações de clientes" id="travel--reviews-list-102009-1">
        <h2 class="reviews-list__title" id="travel--reviews-list-102009-2">Avaliações de clientes</h2>
        <ul class="reviews-list__list" id="travel--reviews-list-102009-3">
          <li class="reviews-list__item" id="travel--reviews-list-102009-4">
            <div class="reviews-list__header" id="travel--reviews-list-102009-5">
              <span class="reviews-list__author" id="travel--reviews-list-102009-6">Ana Paula</span>
              <span class="reviews-list__rating" aria-label="Nota 5 de 5" id="travel--reviews-list-102009-7">★★★★★</span>
            </div>
            <p class="reviews-list__comment" id="travel--reviews-list-102009-8">Viagem perfeita! Organização impecável e paisagens de tirar o fôlego. Recomendo muito!</p>
          </li>
          <li class="reviews-list__item" id="travel--reviews-list-102009-9">
            <div class="reviews-list__header" id="travel--reviews-list-102009-10">
              <span class="reviews-list__author" id="travel--reviews-list-102009-11">Carlos Eduardo</span>
              <span class="reviews-list__rating" aria-label="Nota 4 de 5" id="travel--reviews-list-102009-12">★★★★☆</span>
            </div>
            <p class="reviews-list__comment" id="travel--reviews-list-102009-13">Gostei bastante, só senti falta de mais opções de passeios noturnos. No geral, excelente!</p>
          </li>
          <li class="reviews-list__item" id="travel--reviews-list-102009-14">
            <div class="reviews-list__header" id="travel--reviews-list-102009-15">
              <span class="reviews-list__author" id="travel--reviews-list-102009-16">Juliana M.</span>
              <span class="reviews-list__rating" aria-label="Nota 5 de 5" id="travel--reviews-list-102009-17">★★★★★</span>
            </div>
            <p class="reviews-list__comment" id="travel--reviews-list-102009-18">Equipe atenciosa e roteiro bem planejado. Voltaria com certeza!</p>
          </li>
        </ul>
      </section>
    `
    }
}