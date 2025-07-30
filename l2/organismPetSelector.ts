/// <mls shortName="organismPetSelector" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-pet-selector-102009')
export class _102009_organismPetSelector extends IcaOrganismBase {
    render(){
        return html`
      <div class="pet-selector-container">
        <div class="section-header">
          <h3>Selecione seu Pet</h3>
          <p>Escolha qual pet receberá o serviço ou cadastre um novo</p>
        </div>
        
        <div class="pets-list">
          <div class="pet-card">
            <img src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdCUyMGhhcHB5fGVufDB8fHx8MTc1MzM2NTQzMXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto do pet">
            <div class="pet-info">
              <h4>Rex</h4>
              <p>Golden Retriever • 3 anos</p>
              <span class="pet-status">Ativo</span>
            </div>
            <input type="radio" name="selected-pet" value="rex">
          </div>
          
          <div class="pet-card">
            <img src="https://images.unsplash.com/photo-1675191855383-4b80d79a0628?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwcG9ydHJhaXQlMjBmbHVmZnklMjB3aGl0ZXxlbnwwfHx8fDE3NTMzNjU0MzF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto do pet">
            <div class="pet-info">
              <h4>Mimi</h4>
              <p>Persa • 2 anos</p>
              <span class="pet-status">Ativo</span>
            </div>
            <input type="radio" name="selected-pet" value="mimi">
          </div>
          
          <div class="add-pet-card">
            <div class="add-pet-icon">+</div>
            <div class="add-pet-text">
              <h4>Adicionar Novo Pet</h4>
              <p>Cadastre um novo pet</p>
            </div>
          </div>
        </div>
        
        <div class="new-pet-form" style="display: none;">
          <h4>Cadastrar Novo Pet</h4>
          <div class="form-row">
            <div class="form-group">
              <label for="pet-name">Nome do Pet</label>
              <input type="text" id="pet-name" name="pet-name" placeholder="Digite o nome">
            </div>
            <div class="form-group">
              <label for="pet-species">Espécie</label>
              <select id="pet-species" name="pet-species">
                <option value="">Selecione</option>
                <option value="cao">Cão</option>
                <option value="gato">Gato</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="pet-breed">Raça</label>
              <input type="text" id="pet-breed" name="pet-breed" placeholder="Digite a raça">
            </div>
            <div class="form-group">
              <label for="pet-age">Idade</label>
              <input type="number" id="pet-age" name="pet-age" placeholder="Anos">
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn-secondary cancel-pet">Cancelar</button>
            <button type="button" class="btn-primary save-pet">Salvar Pet</button>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="btn-primary schedule-btn">Agendar Serviço</button>
        </div>
      </div>
    `
    }
}