/// <mls shortName="organismSubscribe" project="102009" folder="traveldreams" enhancement="_100554_enhancementLit" groupName="traveldreams" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('traveldreams--organism-subscribe-102009')
export class organismSubscribe extends IcaOrganismBase {
    render(){
        return html`<div class="subscribe-container" id="subscribe">
          <h2 id="traveldreams--subscribe-102009-1">Receba novidades e ofertas exclusivas</h2>
          <form autocomplete="off" novalidate="" id="traveldreams--subscribe-102009-2">
            <input type="email" name="email" placeholder="Seu e-mail" aria-label="Seu e-mail" required="" id="traveldreams--subscribe-102009-3">
            <button type="submit" id="traveldreams--subscribe-102009-4">Inscrever-se</button>
          </form>
          <div class="subscribe-success" style="display:none;" id="traveldreams--subscribe-102009-5">Obrigado por se inscrever! Em breve você receberá novidades.</div>
          <div class="subscribe-error" style="display:none;" id="traveldreams--subscribe-102009-6">Por favor, insira um e-mail válido.</div>
        </div>
      `
    }
}