/// <mls shortName="organismAdminCustomers" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-customers-102009')
export class _102009_organismAdminCustomers extends IcaOrganismBase {
  render() {
    return html`
  <section class="admin-section" id="admin-customers-1">
  <div class="section-header" id="admin-customers-2">
    <h2 id="admin-customers-3">Clientes e Pets</h2>
    <div class="search-controls" id="admin-customers-4">
      <input type="text" placeholder="Buscar cliente..." class="search-input" id="admin-customers-5">
      <button class="btn-search" id="admin-customers-6">🔍</button>
    </div>
  </div>
  
  <div class="customers-grid" id="admin-customers-7">
    <div class="customer-card" id="admin-customers-8">
      <div class="customer-info" id="admin-customers-9">
        <img src="https://images.unsplash.com/photo-1675186914580-94356f7c012c?..." alt="Maria Silva" class="customer-avatar" id="admin-customers-10">
        <div class="customer-details" id="admin-customers-11">
          <h4 id="admin-customers-12">Maria Silva</h4>
          <p class="customer-email" id="admin-customers-13">maria@email.com</p>
          <p class="customer-phone" id="admin-customers-14">(11) 99999-9999</p>
          <p class="customer-since" id="admin-customers-15">Cliente desde: Jan 2024</p>
        </div>
      </div>
      <div class="pets-info" id="admin-customers-16">
        <h5 id="admin-customers-17">Pets:</h5>
        <div class="pet-list" id="admin-customers-18">
          <div class="pet-item" id="admin-customers-19">
            <img src="https://images.unsplash.com/photo-1609348490161-a879e4327ae9?..." alt="Rex" class="pet-photo" id="admin-customers-20">
            <div class="pet-details" id="admin-customers-21">
              <span class="pet-name" id="admin-customers-22">Rex</span>
              <span class="pet-breed" id="admin-customers-23">Golden Retriever</span>
            </div>
          </div>
        </div>
      </div>
      <div class="customer-actions" id="admin-customers-24">
        <button class="btn-view" id="admin-customers-25">Ver Perfil</button>
        <button class="btn-edit" id="admin-customers-26">Editar</button>
      </div>
    </div>

    <div class="customer-card" id="admin-customers-27">
      <div class="customer-info" id="admin-customers-28">
        <img src="https://images.unsplash.com/photo-1664101606938-e664f5852fac?..." alt="João Santos" class="customer-avatar" id="admin-customers-29">
        <div class="customer-details" id="admin-customers-30">
          <h4 id="admin-customers-31">João Santos</h4>
          <p class="customer-email" id="admin-customers-32">joao@email.com</p>
          <p class="customer-phone" id="admin-customers-33">(11) 88888-8888</p>
          <p class="customer-since" id="admin-customers-34">Cliente desde: Mar 2024</p>
        </div>
      </div>
      <div class="pets-info" id="admin-customers-35">
        <h5 id="admin-customers-36">Pets:</h5>
        <div class="pet-list" id="admin-customers-37">
          <div class="pet-item" id="admin-customers-38">
            <img src="https://images.unsplash.com/photo-1675191855383-4b80d79a0628?..." alt="Mimi" class="pet-photo" id="admin-customers-39">
            <div class="pet-details" id="admin-customers-40">
              <span class="pet-name" id="admin-customers-41">Mimi</span>
              <span class="pet-breed" id="admin-customers-42">Gato Persa</span>
            </div>
          </div>
        </div>
      </div>
      <div class="customer-actions" id="admin-customers-43">
        <button class="btn-view" id="admin-customers-44">Ver Perfil</button>
        <button class="btn-edit" id="admin-customers-45">Editar</button>
      </div>
    </div>
  </div>
</section>

    `
  }
}