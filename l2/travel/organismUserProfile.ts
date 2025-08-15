/// <mls shortName="organismUserProfile" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-user-profile-102009')
export class organismUserProfile extends IcaOrganismBase {
    render(){
        return html`<section class="profile-card" aria-labelledby="profile-title" id="travel--user-profile-102009-1">
        <div class="profile-avatar" id="travel--user-profile-102009-2">
          <img src="https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NTAzMTY5N3ww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Avatar do usuário" id="travel--user-profile-102009-3">
        </div>
        <div class="profile-info" id="travel--user-profile-102009-4">
          <h2 id="profile-title">Meu Perfil</h2>
          <form class="profile-form" autocomplete="off" id="travel--user-profile-102009-5">
            <div class="form-group" id="travel--user-profile-102009-6">
              <label for="profile-name" id="travel--user-profile-102009-7">Nome</label>
              <input type="text" id="profile-name" name="name" value="Lucas Silva" autocomplete="name">
            </div>
            <div class="form-group" id="travel--user-profile-102009-8">
              <label for="profile-email" id="travel--user-profile-102009-9">E-mail</label>
              <input type="email" id="profile-email" name="email" value="lucas@email.com" autocomplete="email">
            </div>
            <div class="form-group" id="travel--user-profile-102009-10">
              <label for="profile-password" id="travel--user-profile-102009-11">Senha</label>
              <input type="password" id="profile-password" name="password" value="" placeholder="••••••••" autocomplete="new-password">
            </div>
            <div class="form-actions" id="travel--user-profile-102009-12">
              <button type="submit" class="btn-primary" id="travel--user-profile-102009-13">Salvar alterações</button>
            </div>
          </form>
        </div>
      </section>
    `
    }
}