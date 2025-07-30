/// <mls shortName="organismAppointmentForm" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointment-form-102009')
export class _102009_organismAppointmentForm extends IcaOrganismBase {
    render(){
        return html`
    <div class="appointment-form-container" id="appointment-form-1">
  <div class="form-header" id="appointment-form-2">
    <h1 id="appointment-form-3">Agendar Serviço</h1>
    <p id="appointment-form-4">Escolha o serviço, data e horário para seu pet</p>
  </div>
  
  <form class="appointment-form" id="appointment-form-5">
    <div class="form-section" id="appointment-form-6">
      <h3 id="appointment-form-7">Selecione o Serviço</h3>
      <div class="service-options" id="appointment-form-8">
        
        <label class="service-option" id="appointment-form-9">
          <input type="radio" name="service" value="banho" id="appointment-form-10">
          <div class="service-card" id="appointment-form-11">
            <img src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBiYXRoJTIwZ3Jvb21pbmclMjBzZXJ2aWNlJTIwcGV0JTIwY2FyZXxlbnwwfHx8fDE3NTMzNjU0Mjl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de banho" id="appointment-form-12">
            <div class="service-info" id="appointment-form-13">
              <h4 id="appointment-form-14">Banho</h4>
              <p id="appointment-form-15">Banho completo com produtos especializados</p>
              <span class="price" id="appointment-form-16">R$ 35,00</span>
            </div>
          </div>
        </label>
        
        <label class="service-option" id="appointment-form-17">
          <input type="radio" name="service" value="tosa" id="appointment-form-18">
          <div class="service-card" id="appointment-form-19">
            <img src="https://images.unsplash.com/photo-1725419876939-f8f9987cf0d2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHNjaXNzb3JzJTIwZG9nJTIwaGFpcmN1dHxlbnwwfHx8fDE3NTMzNjU0MzB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de tosa" id="appointment-form-20">
            <div class="service-info" id="appointment-form-21">
              <h4 id="appointment-form-22">Tosa</h4>
              <p id="appointment-form-23">Tosa higiênica e estética</p>
              <span class="price" id="appointment-form-24">R$ 45,00</span>
            </div>
          </div>
        </label>
        
        <label class="service-option" id="appointment-form-25">
          <input type="radio" name="service" value="consulta" id="appointment-form-26">
          <div class="service-card" id="appointment-form-27">
            <img src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2clMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzUzMjkxOTc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Consulta veterinária" id="appointment-form-28">
            <div class="service-info" id="appointment-form-29">
              <h4 id="appointment-form-30">Consulta Veterinária</h4>
              <p id="appointment-form-31">Consulta com veterinário especializado</p>
              <span class="price" id="appointment-form-32">R$ 80,00</span>
            </div>
          </div>
        </label>
        
        <label class="service-option" id="appointment-form-33">
          <input type="radio" name="service" value="vacinacao" id="appointment-form-34">
          <div class="service-card" id="appointment-form-35">
            <img src="https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB2YWNjaW5hdGlvbiUyMHN5cmluZ2UlMjB2ZXRlcmluYXJ5JTIwY2FyZXxlbnwwfHx8fDE3NTMzNjU0MzB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de vacinação" id="appointment-form-36">
            <div class="service-info" id="appointment-form-37">
              <h4 id="appointment-form-38">Vacinação</h4>
              <p id="appointment-form-39">Aplicação de vacinas preventivas</p>
              <span class="price" id="appointment-form-40">R$ 60,00</span>
            </div>
          </div>
        </label>
      </div>
    </div>
    
    <div class="form-section" id="appointment-form-41">
      <h3 id="appointment-form-42">Data e Horário</h3>
      <div class="datetime-selection" id="appointment-form-43">
        <div class="date-picker" id="appointment-form-44">
          <label for="appointment-date" id="appointment-form-45">Data</label>
          <input type="date" id="appointment-date" name="date" required="" id="appointment-form-46">
        </div>
        
        <div class="time-slots" id="appointment-form-47">
          <label id="appointment-form-48">Horários Disponíveis</label>
          <div class="time-grid" id="appointment-form-49">
            <button type="button" class="time-slot" data-time="08:00" id="appointment-form-50">08:00</button>
            <button type="button" class="time-slot" data-time="09:00" id="appointment-form-51">09:00</button>
            <button type="button" class="time-slot" data-time="10:00" id="appointment-form-52">10:00</button>
            <button type="button" class="time-slot" data-time="11:00" id="appointment-form-53">11:00</button>
            <button type="button" class="time-slot" data-time="14:00" id="appointment-form-54">14:00</button>
            <button type="button" class="time-slot" data-time="15:00" id="appointment-form-55">15:00</button>
            <button type="button" class="time-slot" data-time="16:00" id="appointment-form-56">16:00</button>
            <button type="button" class="time-slot" data-time="17:00" id="appointment-form-57">17:00</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    `
    }
}