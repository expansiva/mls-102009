/// <mls shortName="organismContactForm" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase'; 

@customElement('petshop--organism-contact-form-102009')
export class organismContactForm extends IcaOrganismBase {
    render(){
        return html`<h2 id="petshop--contact-form-102009-1">Fale Conosco</h2>
        <form autocomplete="off" id="petshop--contact-form-102009-2">
          <div id="petshop--contact-form-102009-3">
            <label for="contact-nome" id="petshop--contact-form-102009-4">Nome</label>
            <input type="text" id="contact-nome" name="nome" placeholder="Seu nome" required="">
          </div>
          <div id="petshop--contact-form-102009-5">
            <label for="contact-email" id="petshop--contact-form-102009-6">E-mail</label>
            <input type="email" id="contact-email" name="email" placeholder="seu@email.com" required="">
          </div>
          <div id="petshop--contact-form-102009-7">
            <label for="contact-mensagem" id="petshop--contact-form-102009-8">Mensagem</label>
            <textarea id="contact-mensagem" name="mensagem" placeholder="Como podemos ajudar?" required=""></textarea>
          </div>
          <button type="submit" id="petshop--contact-form-102009-9">Enviar mensagem</button>
        </form>
      `
    }
}