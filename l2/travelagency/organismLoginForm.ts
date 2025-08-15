/// <mls shortName="organismLoginForm" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-login-form-102009')
export class organismLoginForm extends IcaOrganismBase {
    render(){
        return html`<div class="login-form__container" id="travelagency--login-form-102009-1">
        <div class="login-form__header" id="travelagency--login-form-102009-2">
          <img class="login-form__logo" src="https://images.unsplash.com/photo-1626417359455-2377907b1141?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBsb2dvJTIwaWNvbnxlbnwwfHx8fDE3NTUxMDc1Njd8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Logo Travel Agency" id="travelagency--login-form-102009-3">
          <h1 class="login-form__title" id="travelagency--login-form-102009-4">Entrar na sua conta</h1>
          <p class="login-form__subtitle" id="travelagency--login-form-102009-5">Acesse sua conta de cliente ou administrador</p>
        </div>
        <form class="login-form__form" autocomplete="off" id="travelagency--login-form-102009-6">
          <div class="login-form__field" id="travelagency--login-form-102009-7">
            <label for="login-email" id="travelagency--login-form-102009-8">E-mail</label>
            <input type="email" id="login-email" name="email" placeholder="seu@email.com" required="" autocomplete="username">
          </div>
          <div class="login-form__field" id="travelagency--login-form-102009-9">
            <label for="login-password" id="travelagency--login-form-102009-10">Senha</label>
            <input type="password" id="login-password" name="password" placeholder="Sua senha" required="" autocomplete="current-password">
          </div>
          <div class="login-form__actions" id="travelagency--login-form-102009-11">
            <button type="submit" class="login-form__submit" id="travelagency--login-form-102009-12">Entrar</button>
          </div>
          <div class="login-form__links" id="travelagency--login-form-102009-13">
            <a href="#" class="login-form__forgot" id="travelagency--login-form-102009-14">Esqueci minha senha</a>
            <span class="login-form__divider" id="travelagency--login-form-102009-15">|</span>
            <a href="#" class="login-form__register" id="travelagency--login-form-102009-16">Criar conta</a>
          </div>
        </form>
        <div class="login-form__footer" id="travelagency--login-form-102009-17">
          <p class="login-form__info" id="travelagency--login-form-102009-18">Acesso restrito a clientes e administradores cadastrados.</p>
        </div>
      </div>
    `
    }
}