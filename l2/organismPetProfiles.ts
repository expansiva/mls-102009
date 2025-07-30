/// <mls shortName="organismPetProfiles" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-pet-profiles-102009')
export class _102009_organismPetProfiles extends IcaOrganismBase {
    render(){
        return html`
  <div class="pet-profiles-container" id="pet-profiles-1">
  <div class="section-header" id="pet-profiles-2">
    <h2 id="pet-profiles-3">Meus Pets</h2>
    <button class="btn-primary add-pet-btn" id="pet-profiles-4">+ Adicionar Pet</button>
  </div>

  <div class="pets-grid" id="pet-profiles-5">
    <div class="pet-card" id="pet-profiles-6">
      <div class="pet-image" id="pet-profiles-7">
        <img src="https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTMyOTI0MTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do pet" id="pet-profiles-8">
      </div>
      <div class="pet-info" id="pet-profiles-9">
        <h3 id="pet-profiles-10">Rex</h3>
        <p class="pet-breed" id="pet-profiles-11">Golden Retriever</p>
        <p class="pet-age" id="pet-profiles-12">3 anos</p>
        <div class="pet-details" id="pet-profiles-13">
          <span class="detail-item" id="pet-profiles-14">Macho</span>
          <span class="detail-item" id="pet-profiles-15">25kg</span>
        </div>
      </div>
      <div class="pet-actions" id="pet-profiles-16">
        <button class="btn-icon edit-btn" title="Editar" id="pet-profiles-17">✏️</button>
        <button class="btn-icon history-btn" title="Histórico médico" id="pet-profiles-18">📋</button>
      </div>
    </div>

    <div class="pet-card" id="pet-profiles-19">
      <div class="pet-image" id="pet-profiles-20">
        <img src="https://images.unsplash.com/photo-1735618603118-89e26b0dcf6e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzMjkyNDE2fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do pet" id="pet-profiles-21">
      </div>
      <div class="pet-info" id="pet-profiles-22">
        <h3 id="pet-profiles-23">Luna</h3>
        <p class="pet-breed" id="pet-profiles-24">Persa</p>
        <p class="pet-age" id="pet-profiles-25">2 anos</p>
        <div class="pet-details" id="pet-profiles-26">
          <span class="detail-item" id="pet-profiles-27">Fêmea</span>
          <span class="detail-item" id="pet-profiles-28">4kg</span>
        </div>
      </div>
      <div class="pet-actions" id="pet-profiles-29">
        <button class="btn-icon edit-btn" title="Editar" id="pet-profiles-30">✏️</button>
        <button class="btn-icon history-btn" title="Histórico médico" id="pet-profiles-31">📋</button>
      </div>
    </div>
  </div>
</div>

    `
    }
}