/// <mls shortName="organismServicesList" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-services-list-102009')
export class _102009_organismServicesList extends IcaOrganismBase {
    render(){
        return html`
<section class="services-list-container" id="services-list-1">
  <div class="services-header" id="services-list-2">
    <h1 id="services-list-3">Nossos Serviços</h1>
    <p id="services-list-4">Cuidamos do seu pet com carinho e profissionalismo</p>
  </div>
  
  <div class="services-grid" id="services-list-5">
    <div class="service-card" data-service="banho" id="services-list-6">
      <div class="service-image" id="services-list-7">
        <img src="https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjB0YWtpbmclMjBiYXRoJTIwZ3Jvb21pbmclMjBzYWxvbnxlbnwwfHx8fDE3NTMyOTE5NzZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cachorro tomando banho" id="services-list-8">
      </div>
      <div class="service-content" id="services-list-9">
        <h3 id="services-list-10">Banho</h3>
        <p id="services-list-11">Banho completo com produtos de qualidade, secagem e perfume.</p>
        <div class="service-price" id="services-list-12">A partir de R$ 25,00</div>
        <button class="btn-details" id="services-list-13" onclick="showServiceDetails('banho')">Ver Detalhes</button>
      </div>
    </div>
    
    <div class="service-card" data-service="tosa" id="services-list-14">
      <div class="service-image" id="services-list-15">
        <img src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGhhaXJjdXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUzMzY1MTQ5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cachorro sendo tosado" id="services-list-16">
      </div>
      <div class="service-content" id="services-list-17">
        <h3 id="services-list-18">Tosa</h3>
        <p id="services-list-19">Tosa higiênica e estética para deixar seu pet ainda mais bonito.</p>
        <div class="service-price" id="services-list-20">A partir de R$ 35,00</div>
        <button class="btn-details" id="services-list-21" onclick="showServiceDetails('tosa')">Ver Detalhes</button>
      </div>
    </div>
    
    <div class="service-card" data-service="consulta" id="services-list-22">
      <div class="service-image" id="services-list-23">
        <img src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBwZXQlMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzUzMzY1MTUwfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Veterinário examinando pet" id="services-list-24">
      </div>
      <div class="service-content" id="services-list-25">
        <h3 id="services-list-26">Consulta Veterinária</h3>
        <p id="services-list-27">Consultas com veterinários experientes para cuidar da saúde do seu pet.</p>
        <div class="service-price" id="services-list-28">A partir de R$ 80,00</div>
        <button class="btn-details" id="services-list-29" onclick="showServiceDetails('consulta')">Ver Detalhes</button>
      </div>
    </div>
    
    <div class="service-card" data-service="vacinacao" id="services-list-30">
      <div class="service-image" id="services-list-31">
        <img src="https://images.unsplash.com/photo-1719464454959-9cf304ef4774?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB2YWNjaW5hdGlvbiUyMHZldGVyaW5hcnklMjBpbmplY3Rpb258ZW58MHx8fHwxNzUzMjkxOTc4fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Pet sendo vacinado" id="services-list-32">
      </div>
      <div class="service-content" id="services-list-33">
        <h3 id="services-list-34">Vacinação</h3>
        <p id="services-list-35">Vacinas essenciais para manter seu pet protegido e saudável.</p>
        <div class="service-price" id="services-list-36">A partir de R$ 45,00</div>
        <button class="btn-details" id="services-list-37" onclick="showServiceDetails('vacinacao')">Ver Detalhes</button>
      </div>
    </div>
  </div>
</section>

    `
    }
}