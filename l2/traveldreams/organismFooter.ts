/// <mls shortName="organismFooter" project="102009" folder="traveldreams" enhancement="_100554_enhancementLit" groupName="traveldreams" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('traveldreams--organism-footer-102009')
export class organismFooter extends IcaOrganismBase {
  // Helper to render social icon with tooltip
  renderSocialIcon(href: string, aria: string, icon: string, hint: string, idA: string, idSpan: string, idTooltip: string) {
    return html`
      <a href="${href}" title="${hint}" aria-label="${aria}" id="${idA}" class="footer-social-link">
        <span aria-hidden="true" id="${idSpan}">${icon}</span>
        <span class="footer-social-tooltip" id="${idTooltip}">${hint}</span>
      </a>
    `;
  }

  render() {
    return html`<div class="footer-container" id="traveldreams--footer-102009-1">
      <div class="footer-logo" id="traveldreams--footer-102009-2">
        <img src="https://chamados.expansiva.com.br/novosite/logo.svg" alt="Travel Dreams - Logo rodapé" id="traveldreams--footer-102009-3">
        <div id="traveldreams--footer-102009-4">Travel Dreams Agência de Viagens</div>
      </div>
      <div class="footer-links" id="traveldreams--footer-102009-5">
        <a href="#destinations" id="traveldreams--footer-102009-6">Destinos</a>
        <a href="#hotels" id="traveldreams--footer-102009-7">Hotéis</a>
        <a href="#flights" id="traveldreams--footer-102009-8">Voos</a>
        <a href="#bookings" id="traveldreams--footer-102009-9">Reservas</a>
        <a href="#subscribe" id="traveldreams--footer-102009-10">Newsletter</a>
      </div>
      <div class="footer-social" id="traveldreams--footer-102009-11">
        ${this.renderSocialIcon('#', 'Instagram', '📷', 'Instagram', 'traveldreams--footer-102009-12', 'traveldreams--footer-102009-13', 'traveldreams--footer-102009-tooltip-1')}
        ${this.renderSocialIcon('#', 'Facebook', '🐦', 'Facebook', 'traveldreams--footer-102009-14', 'traveldreams--footer-102009-15', 'traveldreams--footer-102009-tooltip-2')}
        ${this.renderSocialIcon('#', 'WhatsApp', '📱', 'WhatsApp', 'traveldreams--footer-102009-16', 'traveldreams--footer-102009-17', 'traveldreams--footer-102009-tooltip-3')}
      </div>
      <div class="footer-copy" id="traveldreams--footer-102009-18">
        © 2025 Travel Dreams. Todos os direitos reservados.
      </div>
    </div>
    `
  }
}
