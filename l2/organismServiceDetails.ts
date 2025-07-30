/// <mls shortName="organismServiceDetails" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-service-details-102009')
export class _102009_organismServiceDetails extends IcaOrganismBase {
  render() {
    return html`
  <section class="service-details-container" id="service-details-1" style="display: none;">
  <div class="details-header" id="service-details-2">
    <button class="btn-back" id="service-details-3" onclick="hideServiceDetails()">← Voltar</button>
    <h2 id="service-details-4">Detalhes do Serviço</h2>
  </div>
  
  <div class="details-content" id="service-details-5">
    <div class="details-image" id="service-details-6">
      <img id="service-details-7" src="" alt="">
    </div>
    
    <div class="details-info" id="service-details-8">
      <div class="service-description" id="service-details-9">
        <h3 id="service-details-10">Descrição</h3>
        <p id="service-details-11">Descrição detalhada do serviço...</p>
      </div>
      
      <div class="service-includes" id="service-details-12">
        <h3 id="service-details-13">O que está incluído</h3>
        <ul id="service-details-14">
          <!-- Items will be populated by JavaScript -->
        </ul>
      </div>
      
      <div class="service-pricing" id="service-details-15">
        <h3 id="service-details-16">Preços</h3>
        <div class="pricing-table" id="service-details-17">
          <!-- Pricing will be populated by JavaScript -->
        </div>
      </div>
      
      <div class="service-duration" id="service-details-18">
        <h3 id="service-details-19">Duração</h3>
        <p id="service-details-20">Tempo estimado do serviço</p>
      </div>
      
      <div class="booking-section" id="service-details-21">
        <button class="btn-schedule" id="service-details-22" onclick="scheduleService()">Agendar Agora</button>
        <p class="booking-note" id="service-details-23">Horário de funcionamento: Segunda a Sábado, das 8h às 18h</p>
      </div>
    </div>
  </div>
</section>

    `
  }
}