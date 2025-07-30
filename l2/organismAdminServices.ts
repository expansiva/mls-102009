/// <mls shortName="organismAdminServices" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-services-102009')
export class _102009_organismAdminServices extends IcaOrganismBase {
    render(){
        return html`
    <section class="admin-section" id="admin-services-1">
  <div class="section-header" id="admin-services-2">
    <h2 id="admin-services-3">Gerenciar Serviços</h2>
    <button class="btn-primary add-service-btn" id="admin-services-4">+ Adicionar Serviço</button>
  </div>
  
  <div class="services-grid" id="admin-services-5">
    <div class="service-card" id="admin-services-6">
      <img id="admin-services-7" src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBiYXRoJTIwZ3Jvb21pbmclMjBzZXJ2aWNlJTIwcGV0c2hvcHxlbnwwfHx8fDE3NTMzNjU5OTF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Banho" class="service-image">
      <div class="service-info" id="admin-services-8">
        <h3 id="admin-services-9">Banho</h3>
        <p class="service-price" id="admin-services-10">R$ 35,00</p>
        <p class="service-duration" id="admin-services-11">45 min</p>
        <div class="service-actions" id="admin-services-12">
          <button class="btn-edit" id="admin-services-13">Editar</button>
          <button class="btn-delete" id="admin-services-14">Excluir</button>
        </div>
      </div>
    </div>

    <div class="service-card" id="admin-services-15">
      <img id="admin-services-16" src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGhhaXJjdXQlMjBzZXJ2aWNlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc1MzM2NTk5Mnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Tosa" class="service-image">
      <div class="service-info" id="admin-services-17">
        <h3 id="admin-services-18">Tosa</h3>
        <p class="service-price" id="admin-services-19">R$ 50,00</p>
        <p class="service-duration" id="admin-services-20">60 min</p>
        <div class="service-actions" id="admin-services-21">
          <button class="btn-edit" id="admin-services-22">Editar</button>
          <button class="btn-delete" id="admin-services-23">Excluir</button>
        </div>
      </div>
    </div>

    <div class="service-card" id="admin-services-24">
      <img id="admin-services-25" src="https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBjb25zdWx0YXRpb24lMjBkb2clMjBjYXQlMjBleGFtaW5hdGlvbnxlbnwwfHx8fDE3NTMzNjU5OTJ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Consulta Veterinária" class="service-image">
      <div class="service-info" id="admin-services-26">
        <h3 id="admin-services-27">Consulta Veterinária</h3>
        <p class="service-price" id="admin-services-28">R$ 80,00</p>
        <p class="service-duration" id="admin-services-29">30 min</p>
        <div class="service-actions" id="admin-services-30">
          <button class="btn-edit" id="admin-services-31">Editar</button>
          <button class="btn-delete" id="admin-services-32">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</section>

    `
    }
}