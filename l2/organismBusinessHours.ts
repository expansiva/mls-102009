/// <mls shortName="organismBusinessHours" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-business-hours-102009')
export class _102009_organismBusinessHours extends IcaOrganismBase {
  render() {
    return html`
  <section class="business-hours-section" id="business-hours-1">
  <div class="container" id="business-hours-2">
    <div class="hours-content" id="business-hours-3">
      <div class="hours-info" id="business-hours-4">
        <h2 class="section-title" id="business-hours-5">Horário de Funcionamento</h2>
        <div class="hours-list" id="business-hours-6">
          <div class="hours-item" id="business-hours-7">
            <span class="day" id="business-hours-8">Segunda a Sexta</span>
            <span class="time" id="business-hours-9">8h às 18h</span>
          </div>
          <div class="hours-item" id="business-hours-10">
            <span class="day" id="business-hours-11">Sábado</span>
            <span class="time" id="business-hours-12">8h às 18h</span>
          </div>
          <div class="hours-item closed" id="business-hours-13">
            <span class="day" id="business-hours-14">Domingo</span>
            <span class="time" id="business-hours-15">Fechado</span>
          </div>
        </div>
        <div class="contact-info" id="business-hours-16">
          <p class="contact-item" id="business-hours-17">
            <img src="https://images.unsplash.com/photo-1596550190504-8cd94a80b3bb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNvbnRhY3QlMjBpY29ufGVufDB8fHx8MTc1MzM2NTA2NHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Telefone" class="contact-icon" id="business-hours-18">
            <span id="business-hours-19">(11) 9999-9999</span>
          </p>
          <p class="contact-item" id="business-hours-20">
            <img src="https://images.unsplash.com/photo-1702478001496-e08620d8ad58?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2NhdGlvbiUyMHBpbiUyMGljb258ZW58MHx8fHwxNzUzMzY1MDY1fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Endereço" class="contact-icon" id="business-hours-21">
            <span id="business-hours-22">Rua dos Pets, 123 - São Paulo, SP</span>
          </p>
        </div>
      </div>
      <div class="hours-image" id="business-hours-23">
        <img src="https://images.unsplash.com/photo-1676486251824-56d440d27fbb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZXQlMjBzaG9wJTIwc3RvcmVmcm9udCUyMGV4dGVyaW9yfGVufDB8fHx8MTc1MzM2NTA2Nnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Fachada do petshop" id="business-hours-24">
      </div>
    </div>
  </div>
</section>

    `
  }
}