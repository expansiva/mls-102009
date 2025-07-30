/// <mls shortName="organismPetSelector" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-pet-selector-102009')
export class _102009_organismPetSelector extends IcaOrganismBase {
    render(){
        return html`
<div class="pet-selector-container" id="pet-selector-1">
  <div class="section-header" id="pet-selector-2">
    <h3 id="pet-selector-3">Selecione seu Pet</h3>
    <p id="pet-selector-4">Escolha qual pet receberá o serviço ou cadastre um novo</p>
  </div>
  
  <div class="pets-list" id="pet-selector-5">
    <div class="pet-card" id="pet-selector-6">
      <img src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdCUyMGhhcHB5fGVufDB8fHx8MTc1MzM2NTQzMXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto do pet" id="pet-selector-7">
      <div class="pet-info" id="pet-selector-8">
        <h4 id="pet-selector-9">Rex</h4>
        <p id="pet-selector-10">Golden Retriever • 3 anos</p>
        <span class="pet-status" id="pet-selector-11">Ativo</span>
      </div>
      <input type="radio" name="selected-pet" value="rex" id="pet-selector-12">
    </div>
    
    <div class="pet-card" id="pet-selector-13">
      <img src="https://images.unsplash.com/photo-1675191855383-4b80d79a0628?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwcG9ydHJhaXQlMjBmbHVmZnklMjB3aGl0ZXxlbnwwfHx8fDE3NTMzNjU0MzF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Foto do pet" id="pet-selector-14">
      <div class="pet-info" id="pet-selector-15">
        <h4 id="pet-selector-16">Mimi</h4>
        <p id="pet-selector-17">Persa • 2 anos</p>
        <span class="pet-status" id="pet-selector-18">Ativo</span>
      </div>
      <input type="radio" name="selected-pet" value="mimi" id="pet-selector-19">
    </div>
    
    <div class="add-pet-card" id="pet-selector-20">
      <div class="add-pet-icon" id="pet-selector-21">+</div>
      <div class="add-pet-text" id="pet-selector-22">
        <h4 id="pet-selector-23">Adicionar Novo Pet</h4>
        <p id="pet-selector-24">Cadastre um novo pet</p>
      </div>
    </div>
  </div>
  
  <div class="new-pet-form" style="display: none;" id="pet-selector-25">
    <h4 id="pet-selector-26">Cadastrar Novo Pet</h4>
    <div class="form-row" id="pet-selector-27">
      <div class="form-group" id="pet-selector-28">
        <label for="pet-name" id="pet-selector-29">Nome do Pet</label>
        <input type="text" id="pet-name" name="pet-name" placeholder="Digite o nome" id="pet-selector-30">
      </div>
      <div class="form-group" id="pet-selector-31">
        <label for="pet-species" id="pet-selector-32">Espécie</label>
        <select id="pet-species" name="pet-species" id="pet-selector-33">
          <option value="" id="pet-selector-34">Selecione</option>
          <option value="cao" id="pet-selector-35">Cão</option>
          <option value="gato" id="pet-selector-36">Gato</option>
          <option value="outro" id="pet-selector-37">Outro</option>
        </select>
      </div>
    </div>
    <div class="form-row" id="pet-selector-38">
      <div class="form-group" id="pet-selector-39">
        <label for="pet-breed" id="pet-selector-40">Raça</label>
        <input type="text" id="pet-breed" name="pet-breed" placeholder="Digite a raça" id="pet-selector-41">
      </div>
      <div class="form-group" id="pet-selector-42">
        <label for="pet-age" id="pet-selector-43">Idade</label>
        <input type="number" id="pet-age" name="pet-age" placeholder="Anos" id="pet-selector-44">
      </div>
    </div>
    <div class="form-actions" id="pet-selector-45">
      <button type="button" class="btn-secondary cancel-pet" id="pet-selector-46">Cancelar</button>
      <button type="button" class="btn-primary save-pet" id="pet-selector-47">Salvar Pet</button>
    </div>
  </div>
  
  <div class="form-actions" id="pet-selector-48">
    <button type="submit" class="btn-primary schedule-btn" id="pet-selector-49">Agendar Serviço</button>
  </div>
</div>

    `
    }
}