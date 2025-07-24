/// <mls shortName="organismServicesList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-services-list-102009')
export class _102009_organismServicesList extends IcaOrganismBase {
    render(){
        return html`
      <section class="services-list-container">
        <div class="services-header">
          <h1>Nossos Serviços</h1>
          <p>Cuidamos do seu pet com carinho e profissionalismo</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" data-service="banho">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjB0YWtpbmclMjBiYXRoJTIwZ3Jvb21pbmclMjBzYWxvbnxlbnwwfHx8fDE3NTMyOTE5NzZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cachorro tomando banho">
            </div>
            <div class="service-content">
              <h3>Banho</h3>
              <p>Banho completo com produtos de qualidade, secagem e perfume.</p>
              <div class="service-price">A partir de R$ 25,00</div>
              <button class="btn-details" onclick="showServiceDetails('banho')">Ver Detalhes</button>
            </div>
          </div>
          
          <div class="service-card" data-service="tosa">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGhhaXJjdXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUzMzY1MTQ5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cachorro sendo tosado">
            </div>
            <div class="service-content">
              <h3>Tosa</h3>
              <p>Tosa higiênica e estética para deixar seu pet ainda mais bonito.</p>
              <div class="service-price">A partir de R$ 35,00</div>
              <button class="btn-details" onclick="showServiceDetails('tosa')">Ver Detalhes</button>
            </div>
          </div>
          
          <div class="service-card" data-service="consulta">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBwZXQlMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzUzMzY1MTUwfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Veterinário examinando pet">
            </div>
            <div class="service-content">
              <h3>Consulta Veterinária</h3>
              <p>Consultas com veterinários experientes para cuidar da saúde do seu pet.</p>
              <div class="service-price">A partir de R$ 80,00</div>
              <button class="btn-details" onclick="showServiceDetails('consulta')">Ver Detalhes</button>
            </div>
          </div>
          
          <div class="service-card" data-service="vacinacao">
            <div class="service-image">
              <img src="https://images.unsplash.com/photo-1719464454959-9cf304ef4774?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB2YWNjaW5hdGlvbiUyMHZldGVyaW5hcnklMjBpbmplY3Rpb258ZW58MHx8fHwxNzUzMjkxOTc4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Pet sendo vacinado">
            </div>
            <div class="service-content">
              <h3>Vacinação</h3>
              <p>Vacinas essenciais para manter seu pet protegido e saudável.</p>
              <div class="service-price">A partir de R$ 45,00</div>
              <button class="btn-details" onclick="showServiceDetails('vacinacao')">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </section>
    `
    }
}