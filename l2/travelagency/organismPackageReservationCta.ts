/// <mls shortName="organismPackageReservationCta" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-reservation-cta-102009')
export class organismPackageReservationCta extends IcaOrganismBase {
    render(){
        return html`<div class="package-reservation-cta__container" id="travelagency--package-reservation-cta-102009-1">
        <button class="package-reservation-cta__btn" id="travelagency--package-reservation-cta-102009-2">Reservar Agora</button>
        <span class="package-reservation-cta__note" id="travelagency--package-reservation-cta-102009-3">* Disponível apenas para clientes autenticados</span>
      </div>
    `
    }
}