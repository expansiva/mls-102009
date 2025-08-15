/// <mls shortName="organismReviewForm" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-review-form-102009')
export class organismReviewForm extends IcaOrganismBase {
    render(){
        return html`<section class="review-form__container" aria-label="Enviar avaliação" id="travel--review-form-102009-1">
        <form class="review-form__form" autocomplete="off" id="travel--review-form-102009-2">
          <fieldset class="review-form__fieldset" id="travel--review-form-102009-3">
            <legend class="review-form__legend" id="travel--review-form-102009-4">Deixe sua avaliação</legend>
            <div class="review-form__rating-group" id="travel--review-form-102009-5">
              <label for="review-rating" class="review-form__label" id="travel--review-form-102009-6">Nota:</label>
              <select id="review-rating" name="rating" class="review-form__select" required="">
                <option value="" id="travel--review-form-102009-7">Selecione</option>
                <option value="5" id="travel--review-form-102009-8">5 - Excelente</option>
                <option value="4" id="travel--review-form-102009-9">4 - Muito bom</option>
                <option value="3" id="travel--review-form-102009-10">3 - Bom</option>
                <option value="2" id="travel--review-form-102009-11">2 - Regular</option>
                <option value="1" id="travel--review-form-102009-12">1 - Ruim</option>
              </select>
            </div>
            <div class="review-form__comment-group" id="travel--review-form-102009-13">
              <label for="review-comment" class="review-form__label" id="travel--review-form-102009-14">Comentário:</label>
              <textarea id="review-comment" name="comment" class="review-form__textarea" rows="4" maxlength="500" required="" placeholder="Compartilhe sua experiência..."></textarea>
            </div>
            <button type="submit" class="review-form__submit" id="travel--review-form-102009-15">Enviar avaliação</button>
          </fieldset>
        </form>
        <div class="review-form__login-message" aria-live="polite" style="display:none;" id="travel--review-form-102009-16">
          <p id="travel--review-form-102009-17">Para enviar uma avaliação, faça <a href="#login" class="review-form__login-link" id="travel--review-form-102009-18">login</a> na sua conta.</p>
        </div>
      </section>
    `
    }
}