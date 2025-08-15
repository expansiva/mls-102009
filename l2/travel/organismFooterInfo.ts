/// <mls shortName="organismFooterInfo" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-footer-info-102009')
export class organismFooterInfo extends IcaOrganismBase {
    render(){
        return html`<footer class="footer-info" aria-label="Informações do rodapé" id="travel--footer-info-102009-1">
        <div class="footer-info__main" id="travel--footer-info-102009-2">
          <div class="footer-info__brand" id="travel--footer-info-102009-3">
            <img src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2dvJTIwYWclQzMlQUFuY2lhJTIwZGUlMjB2aWFnZW5zJTIwdHJhdmVsfGVufDB8fHx8MTc1NTAyODI3MHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Travel" class="footer-info__logo" id="travel--footer-info-102009-4">
            <span class="footer-info__slogan" id="travel--footer-info-102009-5">Sua viagem, nosso compromisso.</span>
          </div>
          <div class="footer-info__contacts" id="travel--footer-info-102009-6">
            <span class="footer-info__contact" id="travel--footer-info-102009-7"><strong id="travel--footer-info-102009-8">Telefone:</strong> (11) 99999-9999</span>
            <span class="footer-info__contact" id="travel--footer-info-102009-9"><strong id="travel--footer-info-102009-10">E-mail:</strong> contato@travel.com.br</span>
          </div>
          <div class="footer-info__social" id="travel--footer-info-102009-11">
            <a href="#" class="footer-info__social-link" aria-label="Instagram Travel" id="travel--footer-info-102009-12">
              <img src="https://images.unsplash.com/photo-1496076977604-c07450d07690?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwaW5zdGFncmFtfGVufDB8fHx8MTc1NTAyNTE0N3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Instagram" id="travel--footer-info-102009-13">
            </a>
            <a href="#" class="footer-info__social-link" aria-label="Facebook Travel" id="travel--footer-info-102009-14">
              <img src="https://images.unsplash.com/photo-1553379027-34913cb52c1a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwZmFjZWJvb2t8ZW58MHx8fHwxNzU1MDI1MTQ3fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Facebook" id="travel--footer-info-102009-15">
            </a>
            <a href="#" class="footer-info__social-link" aria-label="WhatsApp Travel" id="travel--footer-info-102009-16">
              <img src="https://images.unsplash.com/photo-1604228852344-461c83473c89?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHwlQzMlQURjb25lJTIwd2hhdHNhcHB8ZW58MHx8fHwxNzU1MDI4Mjc5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="WhatsApp" id="travel--footer-info-102009-17">
            </a>
          </div>
        </div>
        <div class="footer-info__links" id="travel--footer-info-102009-18">
          <a href="/politica-privacidade" class="footer-info__link" id="travel--footer-info-102009-19">Política de Privacidade</a>
          <a href="/termos-uso" class="footer-info__link" id="travel--footer-info-102009-20">Termos de Uso</a>
        </div>
        <div class="footer-info__copyright" id="travel--footer-info-102009-21">
          © 2025 Travel Agência de Viagens. Todos os direitos reservados.
        </div>
      </footer>
    `
    }
}