/// <mls shortName="organismServicesHighlight" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-services-highlight-102009')
export class _102009_organismServicesHighlight extends IcaOrganismBase {
  render() {
    return html`
    <section class="services-section" id="services-highlight-1">
  <div class="container" id="services-highlight-2">
    <h2 class="section-title" id="services-highlight-3">Nossos Serviços</h2>
    <div class="services-grid" id="services-highlight-4">
      <div class="service-card" id="services-highlight-5">
        <div class="service-icon" id="services-highlight-6">
          <img src="https://images.unsplash.com/photo-1595248712807-2bb09673bfe0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBiYXRoJTIwaWNvbiUyMHNvYXAlMjBidWJibGVzfGVufDB8fHx8MTc1MzM2NTA1OHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone banho" id="services-highlight-7">
        </div>
        <h3 class="service-title" id="services-highlight-8">Banho</h3>
        <p class="service-description" id="services-highlight-9">Banho completo com produtos de qualidade</p>
        <button class="btn btn-outline" id="services-highlight-10">Agendar</button>
      </div>
      <div class="service-card" id="services-highlight-11">
        <div class="service-icon" id="services-highlight-12">
          <img src="https://images.unsplash.com/photo-1586363052121-5ef0f5b1fdb1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHNjaXNzb3JzJTIwaWNvbnxlbnwwfHx8fDE3NTMzNjUwNTl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone tosa" id="services-highlight-13">
        </div>
        <h3 class="service-title" id="services-highlight-14">Tosa</h3>
        <p class="service-description" id="services-highlight-15">Tosa higiênica e estética profissional</p>
        <button class="btn btn-outline" id="services-highlight-16">Agendar</button>
      </div>
      <div class="service-card" id="services-highlight-17">
        <div class="service-icon" id="services-highlight-18">
          <img src="https://images.unsplash.com/photo-1633621641966-23836fcafd7a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBzdGV0aG9zY29wZSUyMGljb258ZW58MHx8fHwxNzUzMjkxODg3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone consulta" id="services-highlight-19">
        </div>
        <h3 class="service-title" id="services-highlight-20">Consulta Veterinária</h3>
        <p class="service-description" id="services-highlight-21">Atendimento veterinário especializado</p>
        <button class="btn btn-outline" id="services-highlight-22">Agendar</button>
      </div>
      <div class="service-card" id="services-highlight-23">
        <div class="service-icon" id="services-highlight-24">
          <img src="https://images.unsplash.com/photo-1610744536737-b33cc5596254?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB2YWNjaW5hdGlvbiUyMHN5cmluZ2UlMjBpY29ufGVufDB8fHx8MTc1MzI5MTg4N3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone vacinação" id="services-highlight-25">
        </div>
        <h3 class="service-title" id="services-highlight-26">Vacinação</h3>
        <p class="service-description" id="services-highlight-27">Vacinas e imunização completa</p>
        <button class="btn btn-outline" id="services-highlight-28">Agendar</button>
      </div>
    </div>
  </div>
</section>

    `
  }
}