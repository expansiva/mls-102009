/// <mls shortName="organismUserReservations" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-user-reservations-102009')
export class organismUserReservations extends IcaOrganismBase {
    render(){
        return html`<section class="reservations-list" aria-labelledby="reservations-title" id="travel--user-reservations-102009-1">
        <h2 id="reservations-title">Minhas Reservas</h2>
        <ul class="reservations" id="travel--user-reservations-102009-2">
          <li class="reservation-card reservation-upcoming" id="travel--user-reservations-102009-3">
            <div class="reservation-image" id="travel--user-reservations-102009-4">
              <img src="https://images.unsplash.com/photo-1591468069148-5cc79ed1caaa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxSaW8lMjBkZSUyMEphbmVpcm8lMjB0cmF2ZWwlMjBiZWFjaHxlbnwwfHx8fDE3NTUwMzE2OTd8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Rio de Janeiro" id="travel--user-reservations-102009-5">
            </div>
            <div class="reservation-details" id="travel--user-reservations-102009-6">
              <h3 id="travel--user-reservations-102009-7">Rio de Janeiro - Férias de Verão</h3>
              <div class="reservation-meta" id="travel--user-reservations-102009-8">
                <span class="reservation-status status-upcoming" aria-label="Reserva confirmada" id="travel--user-reservations-102009-9">Confirmada</span>
                <span class="reservation-dates" id="travel--user-reservations-102009-10">12/09/2025 - 19/09/2025</span>
              </div>
              <div class="reservation-package-info" id="travel--user-reservations-102009-11">
                <span id="travel--user-reservations-102009-12">Pacote: 7 noites, Hotel 4★, Café da manhã incluso</span>
              </div>
            </div>
          </li>
          <li class="reservation-card reservation-past" id="travel--user-reservations-102009-13">
            <div class="reservation-image" id="travel--user-reservations-102009-14">
              <img src="https://images.unsplash.com/photo-1654270138411-fc09e34697ea?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxTYWx2YWRvciUyMGNhcm5hdmFsJTIwdHJhdmVsfGVufDB8fHx8MTc1NTAzMTY5OHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Salvador" id="travel--user-reservations-102009-15">
            </div>
            <div class="reservation-details" id="travel--user-reservations-102009-16">
              <h3 id="travel--user-reservations-102009-17">Salvador - Carnaval</h3>
              <div class="reservation-meta" id="travel--user-reservations-102009-18">
                <span class="reservation-status status-past" aria-label="Reserva concluída" id="travel--user-reservations-102009-19">Concluída</span>
                <span class="reservation-dates" id="travel--user-reservations-102009-20">10/02/2025 - 17/02/2025</span>
              </div>
              <div class="reservation-package-info" id="travel--user-reservations-102009-21">
                <span id="travel--user-reservations-102009-22">Pacote: 7 noites, Hotel 3★, Café da manhã incluso</span>
              </div>
            </div>
          </li>
          <li class="reservation-card reservation-canceled" id="travel--user-reservations-102009-23">
            <div class="reservation-image" id="travel--user-reservations-102009-24">
              <img src="https://images.unsplash.com/photo-1575323980522-ddf6eec5ebba?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxGb3olMjBkbyUyMElndWElQzMlQTd1JTIwbmF0dXJlJTIwdHJhdmVsfGVufDB8fHx8MTc1NTAzMTY5OHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Imagem do pacote Foz do Iguaçu" id="travel--user-reservations-102009-25">
            </div>
            <div class="reservation-details" id="travel--user-reservations-102009-26">
              <h3 id="travel--user-reservations-102009-27">Foz do Iguaçu - Natureza</h3>
              <div class="reservation-meta" id="travel--user-reservations-102009-28">
                <span class="reservation-status status-canceled" aria-label="Reserva cancelada" id="travel--user-reservations-102009-29">Cancelada</span>
                <span class="reservation-dates" id="travel--user-reservations-102009-30">05/05/2025 - 10/05/2025</span>
              </div>
              <div class="reservation-package-info" id="travel--user-reservations-102009-31">
                <span id="travel--user-reservations-102009-32">Pacote: 5 noites, Hotel 5★, Café da manhã incluso</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    `
    }
}