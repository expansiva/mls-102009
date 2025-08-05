/// <mls shortName="organismAdminNav" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-nav-102009')
export class organismAdminNav extends IcaOrganismBase {
    render(){
        return html`<nav class="admin-nav" id="petshop--admin-nav-102009-1">
        <div class="admin-nav__logo" id="petshop--admin-nav-102009-2">
          <img src="https://images.unsplash.com/photo-1579623828015-bd63cc261a09?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXRzaG9wJTIwYWRtaW4lMjBsb2dvfGVufDB8fHx8MTc1NDQxMTUyOXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Petshop Admin" id="petshop--admin-nav-102009-3">
        </div>
        <ul class="admin-nav__menu" id="petshop--admin-nav-102009-4">
          <li id="petshop--admin-nav-102009-5"><a href="#dashboard" class="admin-nav__link admin-nav__link--active" id="petshop--admin-nav-102009-6">Dashboard</a></li>
          <li id="petshop--admin-nav-102009-7"><a href="#bookings" class="admin-nav__link" id="petshop--admin-nav-102009-8">Agendamentos</a></li>
          <li id="petshop--admin-nav-102009-9"><a href="#products" class="admin-nav__link" id="petshop--admin-nav-102009-10">Produtos</a></li>
          <li id="petshop--admin-nav-102009-11"><a href="#content" class="admin-nav__link" id="petshop--admin-nav-102009-12">Conteúdo</a></li>
        </ul>
        <div class="admin-nav__user" id="petshop--admin-nav-102009-13">
          <span class="admin-nav__user-name" id="petshop--admin-nav-102009-14">Olá, Guilherme</span>
          <button class="admin-nav__logout" title="Sair" aria-label="Sair" id="petshop--admin-nav-102009-15">
            <img src="https://images.unsplash.com/photo-1625670413987-0ae649494c61?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxsb2dvdXQlMjBpY29ufGVufDB8fHx8MTc1NDQxMTUzMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Sair" id="petshop--admin-nav-102009-16">
          </button>
        </div>
      </nav>
    `
    }
}