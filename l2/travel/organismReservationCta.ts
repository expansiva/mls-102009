/// <mls shortName="organismReservationCta" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-reservation-cta-102009')
export class organismReservationCta extends IcaOrganismBase {
    render(){
        return html`<section class="reservation-cta__container" aria-label="Reservar pacote" id="travel--reservation-cta-102009-1">
        <div class="reservation-cta__content" id="travel--reservation-cta-102009-2">
          <span class="reservation-cta__price" id="travel--reservation-cta-102009-3">R$ 4.200,00</span>
          <a href="#reserva" class="reservation-cta__button" role="button" aria-label="Reservar agora" id="travel--reservation-cta-102009-4">Reservar agora</a>
        </div>
      </section>
    `
    }
}