/// <mls shortName="organismAdminCustomers" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-customers-102009')
export class _102009_organismAdminCustomers extends IcaOrganismBase {
    render(){
        return html`
      <section class="admin-section">
        <div class="section-header">
          <h2>Clientes e Pets</h2>
          <div class="search-controls">
            <input type="text" placeholder="Buscar cliente..." class="search-input">
            <button class="btn-search">🔍</button>
          </div>
        </div>
        
        <div class="customers-grid">
          <div class="customer-card">
            <div class="customer-info">
              <img src="https://images.unsplash.com/photo-1675186914580-94356f7c012c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGF2YXRhcnxlbnwwfHx8fDE3NTMzNjU5OTR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Maria Silva" class="customer-avatar">
              <div class="customer-details">
                <h4>Maria Silva</h4>
                <p class="customer-email">maria@email.com</p>
                <p class="customer-phone">(11) 99999-9999</p>
                <p class="customer-since">Cliente desde: Jan 2024</p>
              </div>
            </div>
            <div class="pets-info">
              <h5>Pets:</h5>
              <div class="pet-list">
                <div class="pet-item">
                  <img src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2clMjBwb3J0cmFpdCUyMGhhcHB5fGVufDB8fHx8MTc1MzM2NTQzMXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Rex" class="pet-photo">
                  <div class="pet-details">
                    <span class="pet-name">Rex</span>
                    <span class="pet-breed">Golden Retriever</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="customer-actions">
              <button class="btn-view">Ver Perfil</button>
              <button class="btn-edit">Editar</button>
            </div>
          </div>
          
          <div class="customer-card">
            <div class="customer-info">
              <img src="https://images.unsplash.com/photo-1664101606938-e664f5852fac?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBhdmF0YXJ8ZW58MHx8fHwxNzUzMzY1OTk0fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="João Santos" class="customer-avatar">
              <div class="customer-details">
                <h4>João Santos</h4>
                <p class="customer-email">joao@email.com</p>
                <p class="customer-phone">(11) 88888-8888</p>
                <p class="customer-since">Cliente desde: Mar 2024</p>
              </div>
            </div>
            <div class="pets-info">
              <h5>Pets:</h5>
              <div class="pet-list">
                <div class="pet-item">
                  <img src="https://images.unsplash.com/photo-1675191855383-4b80d79a0628?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwcG9ydHJhaXQlMjBmbHVmZnklMjB3aGl0ZXxlbnwwfHx8fDE3NTMzNjU0MzF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="Mimi" class="pet-photo">
                  <div class="pet-details">
                    <span class="pet-name">Mimi</span>
                    <span class="pet-breed">Gato Persa</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="customer-actions">
              <button class="btn-view">Ver Perfil</button>
              <button class="btn-edit">Editar</button>
            </div>
          </div>
        </div>
      </section>
    `
    }
}