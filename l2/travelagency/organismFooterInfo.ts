/// <mls shortName="organismFooterInfo" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-footer-info-102009')
export class organismFooterInfo extends IcaOrganismBase {
    render(){
        return html`<div class="footer-info" id="travelagency--footer-info-102009-1">
        <div class="footer-brand" id="travelagency--footer-info-102009-2">
          <img src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBsb2dvfGVufDB8fHx8MTc1NTEwNzIwOHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Travel Agency Logo" class="footer-logo" id="travelagency--footer-info-102009-3">
          <p class="footer-description" id="travelagency--footer-info-102009-4">Sua próxima viagem começa aqui. © 2025 Travel Agency.</p>
        </div>
        <div class="footer-links" id="travelagency--footer-info-102009-5">
          <a href="/contato" class="footer-link" id="travelagency--footer-info-102009-6">Contato</a>
          <a href="/privacidade" class="footer-link" id="travelagency--footer-info-102009-7">Política de Privacidade</a>
          <a href="/termos" class="footer-link" id="travelagency--footer-info-102009-8">Termos de Uso</a>
        </div>
        <div class="footer-contact" id="travelagency--footer-info-102009-9">
          <p id="travelagency--footer-info-102009-10">Email: <a href="mailto:contato@travelagency.com.br" id="travelagency--footer-info-102009-11">contato@travelagency.com.br</a></p>
          <p id="travelagency--footer-info-102009-12">Telefone: <a href="tel:+5511999999999" id="travelagency--footer-info-102009-13">(11) 99999-9999</a></p>
        </div>
      </div>
    `
    }
}