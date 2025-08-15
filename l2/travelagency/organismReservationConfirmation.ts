/// <mls shortName="organismReservationConfirmation" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-reservation-confirmation-102009')
export class organismReservationConfirmation extends IcaOrganismBase {
    render(){
        return html`<section class="reservation-confirmation__container" id="travelagency--reservation-confirmation-102009-1">
        <div class="reservation-confirmation__icon" id="travelagency--reservation-confirmation-102009-2">
          <img src="https://images.unsplash.com/photo-1527957557037-d079c24f24be?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZGUlMjBzdWNlc3NvJTIwY2hlY2ttYXJrJTIwdmVyZGV8ZW58MHx8fHwxNzU1MTA3NTIyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Reserva confirmada" id="travelagency--reservation-confirmation-102009-3">
        </div>
        <h2 class="reservation-confirmation__title" id="travelagency--reservation-confirmation-102009-4">Reserva confirmada!</h2>
        <p class="reservation-confirmation__message" id="travelagency--reservation-confirmation-102009-5">
          Sua reserva foi efetuada com sucesso.<br id="travelagency--reservation-confirmation-102009-6">
          Enviamos os detalhes para seu e-mail.
        </p>
        <div class="reservation-confirmation__details" id="travelagency--reservation-confirmation-102009-7">
          <ul id="travelagency--reservation-confirmation-102009-8">
            <li id="travelagency--reservation-confirmation-102009-9"><strong id="travelagency--reservation-confirmation-102009-10">Nome:</strong> Lucas</li>
            <li id="travelagency--reservation-confirmation-102009-11"><strong id="travelagency--reservation-confirmation-102009-12">Pacote:</strong> Rio de Janeiro - 5 dias</li>
            <li id="travelagency--reservation-confirmation-102009-13"><strong id="travelagency--reservation-confirmation-102009-14">Data de ida:</strong> 20/09/2025</li>
            <li id="travelagency--reservation-confirmation-102009-15"><strong id="travelagency--reservation-confirmation-102009-16">Data de volta:</strong> 25/09/2025</li>
            <li id="travelagency--reservation-confirmation-102009-17"><strong id="travelagency--reservation-confirmation-102009-18">Status do pagamento:</strong> Aprovado</li>
          </ul>
        </div>
        <a href="/" class="reservation-confirmation__back" id="travelagency--reservation-confirmation-102009-19">Voltar para página inicial</a>
      </section>
    `
    }
}