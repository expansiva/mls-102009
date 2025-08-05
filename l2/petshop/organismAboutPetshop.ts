/// <mls shortName="organismAboutPetshop" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-about-petshop-102009')
export class organismAboutPetshop extends IcaOrganismBase {
    render(){
        return html`<div class="about-container" id="petshop--about-petshop-102009-1">
          <h2 id="petshop--about-petshop-102009-2">Sobre o Petshop Amigo</h2>
          <div class="about-text" id="petshop--about-petshop-102009-3">
            O Petshop Amigo nasceu do amor pelos animais e da vontade de oferecer o melhor em serviços e produtos para pets de todas as espécies. Nossa missão é cuidar com carinho, respeito e profissionalismo, proporcionando bem-estar e felicidade para seu melhor amigo.
          </div>
          <div class="about-values" id="petshop--about-petshop-102009-4">
            <div class="value" id="petshop--about-petshop-102009-5">Carinho &amp; Respeito</div>
            <div class="value" id="petshop--about-petshop-102009-6">Profissionalismo</div>
            <div class="value" id="petshop--about-petshop-102009-7">Bem-estar animal</div>
            <div class="value" id="petshop--about-petshop-102009-8">Atendimento personalizado</div>
          </div>
        </div>
      `
    }
}