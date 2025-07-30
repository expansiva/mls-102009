/// <mls shortName="organismPetProfiles" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-pet-profiles-102009')
export class _102009_organismPetProfiles extends IcaOrganismBase {
    render(){
        return html`
      <div class="pet-profiles-container">
        <div class="section-header">
          <h2>Meus Pets</h2>
          <button class="btn-primary add-pet-btn">+ Adicionar Pet</button>
        </div>
        
        <div class="pets-grid">
          <div class="pet-card">
            <div class="pet-image">
              <img src="https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTMyOTI0MTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do pet">
            </div>
            <div class="pet-info">
              <h3>Rex</h3>
              <p class="pet-breed">Golden Retriever</p>
              <p class="pet-age">3 anos</p>
              <div class="pet-details">
                <span class="detail-item">Macho</span>
                <span class="detail-item">25kg</span>
              </div>
            </div>
            <div class="pet-actions">
              <button class="btn-icon edit-btn" title="Editar">✏️</button>
              <button class="btn-icon history-btn" title="Histórico médico">📋</button>
            </div>
          </div>
          
          <div class="pet-card">
            <div class="pet-image">
              <img src="https://images.unsplash.com/photo-1735618603118-89e26b0dcf6e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzMjkyNDE2fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do pet">
            </div>
            <div class="pet-info">
              <h3>Luna</h3>
              <p class="pet-breed">Persa</p>
              <p class="pet-age">2 anos</p>
              <div class="pet-details">
                <span class="detail-item">Fêmea</span>
                <span class="detail-item">4kg</span>
              </div>
            </div>
            <div class="pet-actions">
              <button class="btn-icon edit-btn" title="Editar">✏️</button>
              <button class="btn-icon history-btn" title="Histórico médico">📋</button>
            </div>
          </div>
        </div>
      </div>
    `
    }
}