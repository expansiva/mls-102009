/// <mls shortName="organismQuickAccess" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-quick-access-102009')
export class _102009_organismQuickAccess extends IcaOrganismBase {
    render(){
        return html`
      <section class="quick-access-section">
        <div class="container">
          <div class="quick-access-content">
            <h2 class="section-title">Acesso Rápido</h2>
            <p class="section-subtitle">Facilite sua vida com nossos serviços online</p>
            <div class="quick-actions">
              <div class="quick-action-card">
                <div class="action-icon">
                  <img src="https://images.unsplash.com/photo-1642360912445-61d71dd98400?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMGFwcG9pbnRtZW50JTIwaWNvbnxlbnwwfHx8fDE3NTMzNjUwNjF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone agendamento">
                </div>
                <h3 class="action-title">Agendar Serviço</h3>
                <p class="action-description">Agende banho, tosa ou consulta veterinária</p>
                <button class="btn btn-primary">Agendar Agora</button>
              </div>
              <div class="quick-action-card">
                <div class="action-icon">
                  <img src="https://images.unsplash.com/photo-1594549208400-128687ad97ef?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBpY29ufGVufDB8fHx8MTc1MzM2NTA2Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Ícone loja">
                </div>
                <h3 class="action-title">Loja Online</h3>
                <p class="action-description">Compre produtos para seu pet com entrega</p>
                <button class="btn btn-secondary">Ir para Loja</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
    }
}