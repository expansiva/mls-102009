/// <mls shortName="organismQuickAccess" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-quick-access-102009')
export class _102009_organismQuickAccess extends IcaOrganismBase {
    render(){
        return html`
<section class="quick-access-section" id="quick-access-1">
  <div class="container" id="quick-access-2">
    <div class="quick-access-content" id="quick-access-3">
      <h2 class="section-title" id="quick-access-4">Acesso Rápido</h2>
      <p class="section-subtitle" id="quick-access-5">Facilite sua vida com nossos serviços online</p>
      <div class="quick-actions" id="quick-access-6">
        <div class="quick-action-card" id="quick-access-7">
          <div class="action-icon" id="quick-access-8">
            <img src="https://images.unsplash.com/photo-1642360912445-61d71dd98400?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGFwcG9pbnRtZW50JTIwaWNvbnxlbnwwfHx8fDE3NTMzNjUwNjF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone agendamento" id="quick-access-9">
          </div>
          <h3 class="action-title" id="quick-access-10">Agendar Serviço</h3>
          <p class="action-description" id="quick-access-11">Agende banho, tosa ou consulta veterinária</p>
          <button class="btn btn-primary" id="quick-access-12">Agendar Agora</button>
        </div>
        <div class="quick-action-card" id="quick-access-13">
          <div class="action-icon" id="quick-access-14">
            <img src="https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBpY29ufGVufDB8fHx8MTc1MzM2NTA2Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone loja" id="quick-access-15">
          </div>
          <h3 class="action-title" id="quick-access-16">Loja Online</h3>
          <p class="action-description" id="quick-access-17">Compre produtos para seu pet com entrega</p>
          <button class="btn btn-secondary" id="quick-access-18">Ir para Loja</button>
        </div>
      </div>
    </div>
  </div>
</section>

    `
    }
}