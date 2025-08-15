/// <mls shortName="organismClientReservations" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-client-reservations-102009')
export class organismClientReservations extends IcaOrganismBase {
    render(){
        return html`<section class="reservations-section" id="travelagency--client-reservations-102009-1">
          <h2 id="travelagency--client-reservations-102009-2">Minhas Reservas</h2>
          <ul class="reservations-list" id="travelagency--client-reservations-102009-3">
            <li class="reservation-card" id="travelagency--client-reservations-102009-4">
              <div class="reservation-image" id="travelagency--client-reservations-102009-5">
                <img src="https://images.unsplash.com/photo-1583161443050-262d4f5e8b35?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxSaW8lMjBkZSUyMEphbmVpcm8lMjBwcmFpYSUyMHZpYWdlbXxlbnwwfHx8fDE3NTUwMjgzNDN8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Rio de Janeiro" id="travelagency--client-reservations-102009-6">
              </div>
              <div class="reservation-info" id="travelagency--client-reservations-102009-7">
                <h3 id="travelagency--client-reservations-102009-8">Rio de Janeiro - Férias de Verão</h3>
                <p id="travelagency--client-reservations-102009-9"><strong id="travelagency--client-reservations-102009-10">Data:</strong> 10/01/2026 - 17/01/2026</p>
                <p id="travelagency--client-reservations-102009-11"><strong id="travelagency--client-reservations-102009-12">Status:</strong> Confirmada</p>
                <button class="cancel-btn" disabled="" id="travelagency--client-reservations-102009-13">Cancelar</button>
              </div>
            </li>
            <li class="reservation-card" id="travelagency--client-reservations-102009-14">
              <div class="reservation-image" id="travelagency--client-reservations-102009-15">
                <img src="https://images.unsplash.com/photo-1595424377378-a253ca4a7486?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxHcmFtYWRvJTIwTmF0YWwlMjBMdXolMjB2aWFnZW18ZW58MHx8fHwxNzU1MTA3Njk4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Gramado" id="travelagency--client-reservations-102009-16">
              </div>
              <div class="reservation-info" id="travelagency--client-reservations-102009-17">
                <h3 id="travelagency--client-reservations-102009-18">Gramado - Natal Luz</h3>
                <p id="travelagency--client-reservations-102009-19"><strong id="travelagency--client-reservations-102009-20">Data:</strong> 15/12/2025 - 20/12/2025</p>
                <p id="travelagency--client-reservations-102009-21"><strong id="travelagency--client-reservations-102009-22">Status:</strong> Pendente</p>
                <button class="cancel-btn" id="travelagency--client-reservations-102009-23">Cancelar</button>
              </div>
            </li>
            <li class="reservation-card" id="travelagency--client-reservations-102009-24">
              <div class="reservation-image" id="travelagency--client-reservations-102009-25">
                <img src="https://images.unsplash.com/photo-1712443715993-0b1c2163f82f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxCYWhpYSUyMHByYWlhJTIwdmlhZ2VtfGVufDB8fHx8MTc1NTEwNzcwMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Bahia" id="travelagency--client-reservations-102009-26">
              </div>
              <div class="reservation-info" id="travelagency--client-reservations-102009-27">
                <h3 id="travelagency--client-reservations-102009-28">Bahia - Praia e Sol</h3>
                <p id="travelagency--client-reservations-102009-29"><strong id="travelagency--client-reservations-102009-30">Data:</strong> 05/03/2026 - 12/03/2026</p>
                <p id="travelagency--client-reservations-102009-31"><strong id="travelagency--client-reservations-102009-32">Status:</strong> Cancelada</p>
                <button class="cancel-btn" disabled="" id="travelagency--client-reservations-102009-33">Cancelada</button>
              </div>
            </li>
          </ul>
        </section>
      `
    }
}