/// <mls shortName="organismNav" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-nav-102009')
export class organismNav extends IcaOrganismBase {
    render(){
        return html`<div class="nav-container" id="petshop--nav-102009-1">
          <a href="/" class="logo" aria-label="Página inicial" id="petshop--nav-102009-2">
            <img src="https://images.unsplash.com/photo-1701500096456-28186c4a306d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXRzaG9wJTIwbG9nbyUyMGFuaW1hbCUyMHBhdyUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Petshop" id="petshop--nav-102009-3">
            <span class="brand" id="petshop--nav-102009-4">Petshop Amigo</span>
          </a>
          <nav aria-label="Menu principal" id="petshop--nav-102009-5">
            <ul id="petshop--nav-102009-6">
              <li id="petshop--nav-102009-7">
                <a href="/" id="petshop--nav-102009-8">Home</a>
              </li>
              <li id="petshop--nav-102009-9">
                <a href="/agendamento" id="petshop--nav-102009-10">Agendamento</a>
              </li>
              <li id="petshop--nav-102009-11">
                <a href="/produtos" id="petshop--nav-102009-12">Produtos</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/contato" id="petshop--nav-102009-14">Contato</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/pageLogin" id="petshop--nav-102009-30">Sair</a>
              </li>
            </ul>
            
          </nav>
          <div class="social">
              <span>Olá, Guilherme</span>
              <button class="social-perfil">
                <img src="https://images.unsplash.com/photo-1625670413987-0ae649494c61?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2dvdXQlMjBpY29ufGVufDB8fHx8MTc1NDQxMTUzMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Sair" id="petshop--admin-nav-102009-16">
              </button>
            </div>
        </div>
      `
    }
}