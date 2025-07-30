/// <mls shortName="organismNav" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-nav-102009')
export class _102009_organismNav extends IcaOrganismBase {
  render() {
    return html`
<nav class="navbar" id="nav-1">
  <div class="nav-container" id="nav-2">
    <div class="nav-brand" id="nav-3">
      <img src="https://images.unsplash.com/photo-1704657198645-6dd792478814?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBzaG9wJTIwbG9nbyUyMHBhdyUyMHByaW50fGVufDB8fHx8MTc1MzM2NTA1OHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="PetShop Logo" class="logo" id="nav-4">
      <span class="brand-name" id="nav-5">PetShop</span>
    </div>
    <ul class="nav-menu" id="nav-6">
      <li class="nav-item" id="nav-7"><a href="#" class="nav-link active" id="nav-8">Home</a></li>
      <li class="nav-item" id="nav-9"><a href="#" class="nav-link" id="nav-10">Serviços</a></li>
      <li class="nav-item" id="nav-11"><a href="#" class="nav-link" id="nav-12">Loja</a></li>
      <li class="nav-item" id="nav-13"><a href="#" class="nav-link" id="nav-14">Agendamento</a></li>
      <li class="nav-item" id="nav-15"><a href="#" class="nav-link" id="nav-16">Perfil</a></li>
      <li class="nav-item" id="nav-17"><a href="#" class="nav-link login-btn" id="nav-18">Login</a></li>
    </ul>
    <div class="nav-toggle" id="nav-19">
      <span class="bar" id="nav-20"></span>
      <span class="bar" id="nav-21"></span>
      <span class="bar" id="nav-22"></span>
    </div>
  </div>
</nav>

    `
  }
}