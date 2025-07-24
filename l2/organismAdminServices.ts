/// <mls shortName="organismAdminServices" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-services-102009')
export class _102009_organismAdminServices extends IcaOrganismBase {
    render(){
        return html`
      <section class="admin-section">
        <div class="section-header">
          <h2>Gerenciar Serviços</h2>
          <button class="btn-primary add-service-btn">+ Adicionar Serviço</button>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <img src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBiYXRoJTIwZ3Jvb21pbmclMjBzZXJ2aWNlJTIwcGV0c2hvcHxlbnwwfHx8fDE3NTMzNjU5OTF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Banho" class="service-image">
            <div class="service-info">
              <h3>Banho</h3>
              <p class="service-price">R$ 35,00</p>
              <p class="service-duration">45 min</p>
              <div class="service-actions">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
              </div>
            </div>
          </div>
          
          <div class="service-card">
            <img src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGhhaXJjdXQlMjBzZXJ2aWNlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc1MzM2NTk5Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Tosa" class="service-image">
            <div class="service-info">
              <h3>Tosa</h3>
              <p class="service-price">R$ 50,00</p>
              <p class="service-duration">60 min</p>
              <div class="service-actions">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
              </div>
            </div>
          </div>
          
          <div class="service-card">
            <img src="https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBjb25zdWx0YXRpb24lMjBkb2clMjBjYXQlMjBleGFtaW5hdGlvbnxlbnwwfHx8fDE3NTMzNjU5OTJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Consulta Veterinária" class="service-image">
            <div class="service-info">
              <h3>Consulta Veterinária</h3>
              <p class="service-price">R$ 80,00</p>
              <p class="service-duration">30 min</p>
              <div class="service-actions">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
    }
}