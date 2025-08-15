/// <mls shortName="organismClientReviews" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-client-reviews-102009')
export class organismClientReviews extends IcaOrganismBase {
    render(){
        return html`<section class="reviews-section" id="travelagency--client-reviews-102009-1">
          <h2 id="travelagency--client-reviews-102009-2">Minhas Avaliações</h2>
          <ul class="reviews-list" id="travelagency--client-reviews-102009-3">
            <li class="review-card" id="travelagency--client-reviews-102009-4">
              <div class="review-header" id="travelagency--client-reviews-102009-5">
                <span class="review-destination" id="travelagency--client-reviews-102009-6">Rio de Janeiro - Férias de Verão</span>
                <span class="review-rating" id="travelagency--client-reviews-102009-7">⭐⭐⭐⭐⭐</span>
              </div>
              <p class="review-comment" id="travelagency--client-reviews-102009-8">Viagem incrível! Hotel confortável e passeios bem organizados.</p>
              <div class="review-actions" id="travelagency--client-reviews-102009-9">
                <button class="edit-btn" id="travelagency--client-reviews-102009-10">Editar</button>
                <button class="delete-btn" id="travelagency--client-reviews-102009-11">Excluir</button>
              </div>
            </li>
            <li class="review-card" id="travelagency--client-reviews-102009-12">
              <div class="review-header" id="travelagency--client-reviews-102009-13">
                <span class="review-destination" id="travelagency--client-reviews-102009-14">Gramado - Natal Luz</span>
                <span class="review-rating" id="travelagency--client-reviews-102009-15">⭐⭐⭐⭐</span>
              </div>
              <p class="review-comment" id="travelagency--client-reviews-102009-16">Cidade linda, mas o hotel poderia ser melhor.</p>
              <div class="review-actions" id="travelagency--client-reviews-102009-17">
                <button class="edit-btn" id="travelagency--client-reviews-102009-18">Editar</button>
                <button class="delete-btn" id="travelagency--client-reviews-102009-19">Excluir</button>
              </div>
            </li>
            <li class="review-card" id="travelagency--client-reviews-102009-20">
              <div class="review-header" id="travelagency--client-reviews-102009-21">
                <span class="review-destination" id="travelagency--client-reviews-102009-22">Bahia - Praia e Sol</span>
                <span class="review-rating" id="travelagency--client-reviews-102009-23">⭐⭐⭐⭐⭐</span>
              </div>
              <p class="review-comment" id="travelagency--client-reviews-102009-24">Tudo perfeito! Recomendo muito.</p>
              <div class="review-actions" id="travelagency--client-reviews-102009-25">
                <button class="edit-btn" id="travelagency--client-reviews-102009-26">Editar</button>
                <button class="delete-btn" id="travelagency--client-reviews-102009-27">Excluir</button>
              </div>
            </li>
          </ul>
        </section>
      `
    }
}