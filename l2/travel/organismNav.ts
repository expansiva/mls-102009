/// <mls shortName="organismNav" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-nav-102009')
export class organismNav extends IcaOrganismBase {
    render(){
        return html`<nav class="nav" aria-label="Navegação principal" id="travel--nav-102009-1">
        <div class="nav__logo-area" id="travel--nav-102009-2">
          <a href="/" class="nav__logo-link" aria-label="Página inicial" id="travel--nav-102009-3">
            <img src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2dvJTIwYWclQzMlQUFuY2lhJTIwZGUlMjB2aWFnZW5zJTIwdHJhdmVsfGVufDB8fHx8MTc1NTAyODI3MHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Travel" class="nav__logo-img" id="travel--nav-102009-4">
          </a>
        </div>
        <button class="nav__toggle" aria-label="Abrir menu" aria-controls="nav__links" aria-expanded="false" id="travel--nav-102009-5">
          <span class="nav__toggle-bar" id="travel--nav-102009-6"></span>
          <span class="nav__toggle-bar" id="travel--nav-102009-7"></span>
          <span class="nav__toggle-bar" id="travel--nav-102009-8"></span>
        </button>
        <ul class="nav__links" id="nav__links">
          <li id="travel--nav-102009-9"><a href="/" class="nav__link nav__link--active" id="travel--nav-102009-10">Home</a></li>
          <li id="travel--nav-102009-11"><a href="/pacotes" class="nav__link" id="travel--nav-102009-12">Pacotes</a></li>
          <li id="travel--nav-102009-13"><a href="/login" class="nav__link nav__link--auth" id="travel--nav-102009-14">Login</a></li>
        </ul>
      </nav>
    `
    }
}