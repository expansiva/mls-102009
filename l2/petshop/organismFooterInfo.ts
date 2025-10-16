/// <mls shortName="organismFooterInfo" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-footer-info-102009')
export class organismFooterInfo extends IcaOrganismBase {
  
    render(){
        return html`<div class="footer-container" id="petshop--footer-info-102009-1">
          <div class="footer-section" id="petshop--footer-info-102009-2">
            <h4 id="petshop--footer-info-102009-3">Contato</h4>
            <div class="contact-info" id="petshop--footer-info-102009-4">Telefone: <a href="tel:+5599999999999" id="petshop--footer-info-102009-5">(99) 99999-9999</a></div>
            <div class="contact-info" id="petshop--footer-info-102009-6">E-mail: <a href="mailto:contato@petshopamigo.com" id="petshop--footer-info-102009-7">contato@petshopamigo.com</a></div>
            <div class="contact-info" id="petshop--footer-info-102009-8">Endereço: Av. dos Pets, 123 - Centro, Cidade/UF</div>
          </div>
          <div class="footer-section" id="petshop--footer-info-102009-9">
            <h4 id="petshop--footer-info-102009-10">Links úteis</h4>
            <ul id="petshop--footer-info-102009-11">
              <li id="petshop--footer-info-102009-12"><a href="/pageHome" id="petshop--footer-info-102009-13">Home</a></li>
              <li id="petshop--footer-info-102009-14"><a href="/pageAppointments" id="petshop--footer-info-102009-15">Agendamento</a></li>
              <li id="petshop--footer-info-102009-16"><a href="/pageProduct" id="petshop--footer-info-102009-17">Produtos</a></li>
              <li id="petshop--footer-info-102009-18"><a href="/pageContact" id="petshop--footer-info-102009-19">Contato</a></li>
            </ul>
          </div>
          <div class="footer-section" id="petshop--footer-info-102009-20">
            <h4 id="petshop--footer-info-102009-21">Redes sociais</h4>
            <div class="footer-social" id="petshop--footer-info-102009-22">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" id="petshop--footer-info-102009-23">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--footer-info-102009-24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z" id="petshop--footer-info-102009-25"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" id="petshop--footer-info-102009-26">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--footer-info-102009-27"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" id="petshop--footer-info-102009-28"></path></svg>
              </a>
              <a href="https://wa.me/5599999999999" target="_blank" rel="noopener" aria-label="WhatsApp" id="petshop--footer-info-102009-29">
                <svg viewBox="0 0 24 24" fill="currentColor" id="petshop--footer-info-102009-30"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12c0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.45l-.37-.22l-3.67.97l.98-3.58l-.24-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10s-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9c-.25-.09-.43-.14-.61.14c-.18.28-.7.9-.86 1.08c-.16.18-.32.2-.6.07c-.28-.14-1.18-.44-2.25-1.41c-.83-.74-1.39-1.65-1.55-1.93c-.16-.28-.02-.43.12-.57c.13-.13.28-.34.42-.51c.14-.17.18-.29.27-.48c.09-.19.05-.36-.02-.5c-.07-.14-.61-1.47-.84-2.01c-.22-.54-.45-.47-.61-.48c-.16-.01-.35-.01-.54-.01c-.19 0-.5.07-.76.34c-.26.27-1 1-.98 2.44c.02 1.44 1.03 2.84 1.18 3.04c.15.2 2.03 3.1 4.93 4.22c.69.28 1.23.45 1.65.58c.69.22 1.32.19 1.82.12c.56-.08 1.65-.67 1.88-1.32c.23-.65.23-1.2.16-1.32c-.07-.12-.25-.19-.53-.33z" id="petshop--footer-info-102009-31"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom" id="petshop--footer-info-102009-32">
          © 2025 Petshop Amigo. Todos os direitos reservados.
        </div>
      `
    }
}