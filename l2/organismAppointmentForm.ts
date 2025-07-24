/// <mls shortName="organismAppointmentForm" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-appointment-form-102009')
export class _102009_organismAppointmentForm extends IcaOrganismBase {
    render(){
        return html`
      <div class="appointment-form-container">
        <div class="form-header">
          <h1>Agendar Serviço</h1>
          <p>Escolha o serviço, data e horário para seu pet</p>
        </div>
        
        <form class="appointment-form">
          <div class="form-section">
            <h3>Selecione o Serviço</h3>
            <div class="service-options">
              <label class="service-option">
                <input type="radio" name="service" value="banho">
                <div class="service-card">
                  <img src="https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxkb2clMjBiYXRoJTIwZ3Jvb21pbmclMjBzZXJ2aWNlJTIwcGV0JTIwY2FyZXxlbnwwfHx8fDE3NTMzNjU0Mjl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de banho">
                  <div class="service-info">
                    <h4>Banho</h4>
                    <p>Banho completo com produtos especializados</p>
                    <span class="price">R$ 35,00</span>
                  </div>
                </div>
              </label>
              
              <label class="service-option">
                <input type="radio" name="service" value="tosa">
                <div class="service-card">
                  <img src="https://images.unsplash.com/photo-1725419876939-f8f9987cf0d2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHNjaXNzb3JzJTIwZG9nJTIwaGFpcmN1dHxlbnwwfHx8fDE3NTMzNjU0MzB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de tosa">
                  <div class="service-info">
                    <h4>Tosa</h4>
                    <p>Tosa higiênica e estética</p>
                    <span class="price">R$ 45,00</span>
                  </div>
                </div>
              </label>
              
              <label class="service-option">
                <input type="radio" name="service" value="consulta">
                <div class="service-card">
                  <img src="https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2clMjBjb25zdWx0YXRpb258ZW58MHx8fHwxNzUzMjkxOTc3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Consulta veterinária">
                  <div class="service-info">
                    <h4>Consulta Veterinária</h4>
                    <p>Consulta com veterinário especializado</p>
                    <span class="price">R$ 80,00</span>
                  </div>
                </div>
              </label>
              
              <label class="service-option">
                <input type="radio" name="service" value="vacinacao">
                <div class="service-card">
                  <img src="https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjB2YWNjaW5hdGlvbiUyMHN5cmluZ2UlMjB2ZXRlcmluYXJ5JTIwY2FyZXxlbnwwfHx8fDE3NTMzNjU0MzB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Serviço de vacinação">
                  <div class="service-info">
                    <h4>Vacinação</h4>
                    <p>Aplicação de vacinas preventivas</p>
                    <span class="price">R$ 60,00</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
          
          <div class="form-section">
            <h3>Data e Horário</h3>
            <div class="datetime-selection">
              <div class="date-picker">
                <label for="appointment-date">Data</label>
                <input type="date" id="appointment-date" name="date" required="">
              </div>
              
              <div class="time-slots">
                <label>Horários Disponíveis</label>
                <div class="time-grid">
                  <button type="button" class="time-slot" data-time="08:00">08:00</button>
                  <button type="button" class="time-slot" data-time="09:00">09:00</button>
                  <button type="button" class="time-slot" data-time="10:00">10:00</button>
                  <button type="button" class="time-slot" data-time="11:00">11:00</button>
                  <button type="button" class="time-slot" data-time="14:00">14:00</button>
                  <button type="button" class="time-slot" data-time="15:00">15:00</button>
                  <button type="button" class="time-slot" data-time="16:00">16:00</button>
                  <button type="button" class="time-slot" data-time="17:00">17:00</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    `
    }
}