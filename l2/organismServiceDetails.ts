/// <mls shortName="organismServiceDetails" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-service-details-102009')
export class _102009_organismServiceDetails extends IcaOrganismBase {
    render(){
        return html`
      <section class="service-details-container" id="service-details" style="display: none;">
        <div class="details-header">
          <button class="btn-back" onclick="hideServiceDetails()">← Voltar</button>
          <h2 id="service-title">Detalhes do Serviço</h2>
        </div>
        
        <div class="details-content">
          <div class="details-image">
            <img id="service-detail-image" src="" alt="">
          </div>
          
          <div class="details-info">
            <div class="service-description">
              <h3>Descrição</h3>
              <p id="service-description">Descrição detalhada do serviço...</p>
            </div>
            
            <div class="service-includes">
              <h3>O que está incluído</h3>
              <ul id="service-includes-list">
                <!-- Items will be populated by JavaScript -->
              </ul>
            </div>
            
            <div class="service-pricing">
              <h3>Preços</h3>
              <div class="pricing-table" id="pricing-table">
                <!-- Pricing will be populated by JavaScript -->
              </div>
            </div>
            
            <div class="service-duration">
              <h3>Duração</h3>
              <p id="service-duration">Tempo estimado do serviço</p>
            </div>
            
            <div class="booking-section">
              <button class="btn-schedule" onclick="scheduleService()">Agendar Agora</button>
              <p class="booking-note">Horário de funcionamento: Segunda a Sábado, das 8h às 18h</p>
            </div>
          </div>
        </div>
      </section>
    `
    }
}