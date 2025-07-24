/// <mls shortName="organismNav" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-nav-102009')
export class _102009_organismNav extends IcaOrganismBase {
    render(){
        return html`
      <nav class="navbar">
        <div class="nav-container">
          <div class="nav-brand">
            <img src="https://images.unsplash.com/photo-1704657198645-6dd792478814?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaG9wJTIwbG9nbyUyMHBhdyUyMHByaW50fGVufDB8fHx8MTc1MzM2NTA1OHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="PetShop Logo" class="logo">
            <span class="brand-name">PetShop</span>
          </div>
          <ul class="nav-menu">
            <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Serviços</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Loja</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Agendamento</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Perfil</a></li>
            <li class="nav-item"><a href="#" class="nav-link login-btn">Login</a></li>
          </ul>
          <div class="nav-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>
    `
    }
}