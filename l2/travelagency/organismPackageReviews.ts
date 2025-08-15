/// <mls shortName="organismPackageReviews" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-reviews-102009')
export class organismPackageReviews extends IcaOrganismBase {
    render(){
        return html`<div class="package-reviews__container" id="travelagency--package-reviews-102009-1">
        <h2 class="package-reviews__title" id="travelagency--package-reviews-102009-2">Avaliações dos Clientes</h2>
        <div class="package-reviews__list" id="travelagency--package-reviews-102009-3">
          <div class="package-reviews__item" id="travelagency--package-reviews-102009-4">
            <div class="package-reviews__rating" id="travelagency--package-reviews-102009-5">
              <span class="package-reviews__stars" id="travelagency--package-reviews-102009-6">★★★★★</span>
              <span class="package-reviews__score" id="travelagency--package-reviews-102009-7">5.0</span>
            </div>
            <div class="package-reviews__comment" id="travelagency--package-reviews-102009-8">
              <span class="package-reviews__author" id="travelagency--package-reviews-102009-9">Ana Paula</span>
              <p class="package-reviews__text" id="travelagency--package-reviews-102009-10">Viagem maravilhosa! Tudo muito organizado e o hotel era excelente. Recomendo muito!</p>
            </div>
          </div>
          <div class="package-reviews__item" id="travelagency--package-reviews-102009-11">
            <div class="package-reviews__rating" id="travelagency--package-reviews-102009-12">
              <span class="package-reviews__stars" id="travelagency--package-reviews-102009-13">★★★★☆</span>
              <span class="package-reviews__score" id="travelagency--package-reviews-102009-14">4.0</span>
            </div>
            <div class="package-reviews__comment" id="travelagency--package-reviews-102009-15">
              <span class="package-reviews__author" id="travelagency--package-reviews-102009-16">Carlos Silva</span>
              <p class="package-reviews__text" id="travelagency--package-reviews-102009-17">Gostei bastante, só achei o traslado um pouco demorado. No geral, experiência ótima!</p>
            </div>
          </div>
        </div>
        <div class="package-reviews__form-block" id="travelagency--package-reviews-102009-18">
          <h3 class="package-reviews__form-title" id="travelagency--package-reviews-102009-19">Adicionar Avaliação</h3>
          <form class="package-reviews__form" id="travelagency--package-reviews-102009-20">
            <label class="package-reviews__form-label" for="review-rating" id="travelagency--package-reviews-102009-21">Nota:</label>
            <select id="review-rating" class="package-reviews__form-select" name="rating">
              <option value="5" id="travelagency--package-reviews-102009-22">5 - Excelente</option>
              <option value="4" id="travelagency--package-reviews-102009-23">4 - Muito bom</option>
              <option value="3" id="travelagency--package-reviews-102009-24">3 - Bom</option>
              <option value="2" id="travelagency--package-reviews-102009-25">2 - Regular</option>
              <option value="1" id="travelagency--package-reviews-102009-26">1 - Ruim</option>
            </select>
            <label class="package-reviews__form-label" for="review-comment" id="travelagency--package-reviews-102009-27">Comentário:</label>
            <textarea id="review-comment" class="package-reviews__form-textarea" name="comment" rows="3" placeholder="Conte como foi sua experiência..."></textarea>
            <button type="submit" class="package-reviews__form-btn" id="travelagency--package-reviews-102009-28">Enviar Avaliação</button>
          </form>
        </div>
      </div>
    `
    }
}