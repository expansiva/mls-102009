/// <mls shortName="organismBusinessHours" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-business-hours-102009')
export class _102009_organismBusinessHours extends IcaOrganismBase {
    render(){
        return html`
      <section class="business-hours-section">
        <div class="container">
          <div class="hours-content">
            <div class="hours-info">
              <h2 class="section-title">Horário de Funcionamento</h2>
              <div class="hours-list">
                <div class="hours-item">
                  <span class="day">Segunda a Sexta</span>
                  <span class="time">8h às 18h</span>
                </div>
                <div class="hours-item">
                  <span class="day">Sábado</span>
                  <span class="time">8h às 18h</span>
                </div>
                <div class="hours-item closed">
                  <span class="day">Domingo</span>
                  <span class="time">Fechado</span>
                </div>
              </div>
              <div class="contact-info">
                <p class="contact-item">
                  <img src="https://images.unsplash.com/photo-1596550190504-8cd94a80b3bb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNvbnRhY3QlMjBpY29ufGVufDB8fHx8MTc1MzM2NTA2NHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Telefone" class="contact-icon">
                  <span>(11) 9999-9999</span>
                </p>
                <p class="contact-item">
                  <img src="https://images.unsplash.com/photo-1702478001496-e08620d8ad58?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2NhdGlvbiUyMHBpbiUyMGljb258ZW58MHx8fHwxNzUzMzY1MDY1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Endereço" class="contact-icon">
                  <span>Rua dos Pets, 123 - São Paulo, SP</span>
                </p>
              </div>
            </div>
            <div class="hours-image">
              <img src="https://images.unsplash.com/photo-1676486251824-56d440d27fbb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZXQlMjBzaG9wJTIwc3RvcmVmcm9udCUyMGV4dGVyaW9yfGVufDB8fHx8MTc1MzM2NTA2Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Fachada do petshop">
            </div>
          </div>
        </div>
      </section>
    `
    }
}