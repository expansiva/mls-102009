/// <mls shortName="organismContactDetails" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-contact-details-102009')
export class organismContactDetails extends IcaOrganismBase {
    render(){
        return html`<h2 id="petshop--contact-details-102009-1">Contato</h2>
        <div class="contact-info" id="petshop--contact-details-102009-2">
          <div class="contact-item" id="petshop--contact-details-102009-3">
            <span class="contact-icon" aria-hidden="true" id="petshop--contact-details-102009-4">
              <!-- telefone ícone -->
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-5"><path d="M3.5 2.5A1.5 1.5 0 0 1 5 1h2A1.5 1.5 0 0 1 8.5 2.5v1A1.5 1.5 0 0 1 7 5H6a9 9 0 0 0 9 9v-1a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 19 13v2a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 2.5 3.5 1.5 1.5 0 0 1 3.5 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="petshop--contact-details-102009-6"></path></svg>
            </span>
            <span class="contact-label" id="petshop--contact-details-102009-7">Telefone:</span>
            <a href="tel:+5511999999999" style="color:inherit;text-decoration:underline;" id="petshop--contact-details-102009-8">(11) 99999-9999</a>
          </div>
          <div class="contact-item" id="petshop--contact-details-102009-9">
            <span class="contact-icon" aria-hidden="true" id="petshop--contact-details-102009-10">
              <!-- email ícone -->
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-11"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-12"></rect><path d="M4 6l6 5 6-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" id="petshop--contact-details-102009-13"></path></svg>
            </span>
            <span class="contact-label" id="petshop--contact-details-102009-14">E-mail:</span>
            <a href="mailto:contato@petshop.com" style="color:inherit;text-decoration:underline;" id="petshop--contact-details-102009-15">contato@petshop.com</a>
          </div>
          <div class="contact-item" id="petshop--contact-details-102009-16">
            <span class="contact-icon" aria-hidden="true" id="petshop--contact-details-102009-17">
              <!-- endereço ícone -->
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-18"><path d="M10 18s6-5.686 6-10A6 6 0 1 0 4 8c0 4.314 6 10 6 10Z" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-19"></path><circle cx="10" cy="8" r="2" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-20"></circle></svg>
            </span>
            <span class="contact-label" id="petshop--contact-details-102009-21">Endereço:</span>
            <span id="petshop--contact-details-102009-22">Rua dos Pets, 123 - Centro, São Paulo/SP</span>
          </div>
        </div>
        <div class="social-links" aria-label="Redes sociais" id="petshop--contact-details-102009-23">
          <a class="social-link" href="https://facebook.com/petshop" target="_blank" rel="noopener" title="Facebook" id="petshop--contact-details-102009-24">
            <!-- Facebook ícone -->
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-25"><path d="M13 2.5h2A1.5 1.5 0 0 1 16.5 4v2A1.5 1.5 0 0 1 15 7.5h-2v2h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 15 14.5h-2v2A1.5 1.5 0 0 1 11.5 18h-2A1.5 1.5 0 0 1 8 16.5v-2H6A1.5 1.5 0 0 1 4.5 13v-2A1.5 1.5 0 0 1 6 9.5h2v-2A1.5 1.5 0 0 1 9.5 6h2A1.5 1.5 0 0 1 13 7.5v2h2A1.5 1.5 0 0 1 16.5 11v2A1.5 1.5 0 0 1 15 14.5h-2v2A1.5 1.5 0 0 1 11.5 18h-2A1.5 1.5 0 0 1 8 16.5v-2H6A1.5 1.5 0 0 1 4.5 13v-2A1.5 1.5 0 0 1 6 9.5h2v-2A1.5 1.5 0 0 1 9.5 6h2A1.5 1.5 0 0 1 13 7.5v2Z" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-26"></path></svg>
          </a>
          <a class="social-link" href="https://instagram.com/petshop" target="_blank" rel="noopener" title="Instagram" id="petshop--contact-details-102009-27">
            <!-- Instagram ícone -->
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-28"><rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-29"></rect><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-30"></circle><circle cx="15" cy="5" r="1" fill="currentColor" id="petshop--contact-details-102009-31"></circle></svg>
          </a>
          <a class="social-link" href="https://wa.me/5511999999999" target="_blank" rel="noopener" title="WhatsApp" id="petshop--contact-details-102009-32">
            <!-- WhatsApp ícone -->
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" id="petshop--contact-details-102009-33"><path d="M16.472 13.766A7.5 7.5 0 1 0 5.5 16.5l-1.5 3 3-1.5a7.5 7.5 0 0 0 9.472-4.234Z" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-34"></path><path d="M7.5 9.5c.5 1.5 2 3 3.5 3.5l1-1c.25-.25.5-.25.75 0l1 1c.25.25.25.5 0 .75l-1 1c-.5.5-2.5.5-4.5-1.5s-2-4 0-4.5l1-1c.25-.25.5-.25.75 0l1 1c.25.25.25.5 0 .75l-1 1Z" stroke="currentColor" stroke-width="1.5" id="petshop--contact-details-102009-35"></path></svg>
          </a>
        </div>
      `
    }
}