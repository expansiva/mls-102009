/// <mls shortName="organismFeaturedServices" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-featured-services-102009')
export class organismFeaturedServices extends IcaOrganismBase {
    render(){
        return html`<div class="services-container" id="petshop--featured-services-102009-1">
          <h2 id="petshop--featured-services-102009-2">Nossos principais serviços</h2>
          <div class="services-list" id="petshop--featured-services-102009-3">
            <div class="service-card" id="petshop--featured-services-102009-4">
              <div class="icon" id="petshop--featured-services-102009-5">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--featured-services-102009-6"><circle cx="12" cy="12" r="10" id="petshop--featured-services-102009-7"></circle><path d="M12 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 6c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" fill="#52C41A" id="petshop--featured-services-102009-8"></path></svg>
              </div>
              <div class="service-title" id="petshop--featured-services-102009-9">Banho &amp; Tosa</div>
              <div class="service-desc" id="petshop--featured-services-102009-10">Higiene, beleza e bem-estar para seu pet, com todo carinho.</div>
            </div>
            <div class="service-card" id="petshop--featured-services-102009-11">
              <div class="icon" id="petshop--featured-services-102009-12">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--featured-services-102009-13"><rect x="4" y="4" width="16" height="16" rx="8" id="petshop--featured-services-102009-14"></rect><path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8z" fill="#1C91CD" id="petshop--featured-services-102009-15"></path></svg>
              </div>
              <div class="service-title" id="petshop--featured-services-102009-16">Consultas Veterinárias</div>
              <div class="service-desc" id="petshop--featured-services-102009-17">Profissionais experientes para cuidar da saúde do seu pet.</div>
            </div>
            <div class="service-card" id="petshop--featured-services-102009-18">
              <div class="icon" id="petshop--featured-services-102009-19">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--featured-services-102009-20"><rect x="2" y="10" width="20" height="4" rx="2" id="petshop--featured-services-102009-21"></rect><circle cx="6" cy="12" r="2" fill="#52C41A" id="petshop--featured-services-102009-22"></circle><circle cx="18" cy="12" r="2" fill="#1C91CD" id="petshop--featured-services-102009-23"></circle></svg>
              </div>
              <div class="service-title" id="petshop--featured-services-102009-24">Vacinação</div>
              <div class="service-desc" id="petshop--featured-services-102009-25">Vacinas essenciais para cães, gatos e outros pets.</div>
            </div>
            <div class="service-card" id="petshop--featured-services-102009-26">
              <div class="icon" id="petshop--featured-services-102009-27">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--featured-services-102009-28"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 14.2c-2.5 0-4.71-1.28-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" fill="#1C91CD" id="petshop--featured-services-102009-29"></path></svg>
              </div>
              <div class="service-title" id="petshop--featured-services-102009-30">Hotel &amp; Day Care</div>
              <div class="service-desc" id="petshop--featured-services-102009-31">Hospedagem e recreação para seu pet com segurança e diversão.</div>
            </div>
          </div>
        </div>
      `
    }
}