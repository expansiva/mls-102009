/// <mls shortName="organismLoginForm" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-login-form-102009')
export class organismLoginForm extends IcaOrganismBase {
    render(){
        return html`<form class="login-form" aria-label="Formulário de Login" autocomplete="off" id="travel--login-form-102009-1">
          <h2 class="form-title" id="travel--login-form-102009-2">Entrar na sua conta</h2>
          <div class="form-group" id="travel--login-form-102009-3">
            <label for="login-email" id="travel--login-form-102009-4">E-mail</label>
            <input type="email" id="login-email" name="email" placeholder="seu@email.com" required="" autocomplete="username">
          </div>
          <div class="form-group" id="travel--login-form-102009-5">
            <label for="login-password" id="travel--login-form-102009-6">Senha</label>
            <input type="password" id="login-password" name="password" placeholder="Sua senha" required="" autocomplete="current-password">
          </div>
          <div class="form-actions" id="travel--login-form-102009-7">
            <button type="submit" class="btn-login" id="travel--login-form-102009-8">Entrar</button>
            <a href="#recuperar" class="link-password-recovery" aria-controls="password-recovery-form" id="travel--login-form-102009-9">Esqueceu a senha?</a>
          </div>
        </form>
      `
    }
}