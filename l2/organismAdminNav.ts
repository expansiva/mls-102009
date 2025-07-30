/// <mls shortName="organismAdminNav" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-admin-nav-102009')
export class _102009_organismAdminNav extends IcaOrganismBase {
  render() {
    return html`
<nav class="admin-nav" id="admin-nav-1">
  <div class="nav-brand" id="admin-nav-2">
    <img src="https://images.unsplash.com/photo-1628760584600-6c31148991e9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXRzaG9wJTIwbG9nbyUyMG1vZGVybiUyMGNsZWFuJTIwZGVzaWdufGVufDB8fHx8MTc1MzM2NTk5MXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=400" alt="PetShop Admin" class="logo" id="admin-nav-3">
    <h1 id="admin-nav-4">Painel Administrativo</h1>
  </div>
  <div class="nav-user" id="admin-nav-5">
    <span class="welcome-text" id="admin-nav-6">Bem-vindo, Admin</span>
    <button class="logout-btn" id="admin-nav-7">Sair</button>
  </div>
</nav>

    `
  }
}