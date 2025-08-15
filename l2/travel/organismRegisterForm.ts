/// <mls shortName="organismRegisterForm" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-register-form-102009')
export class organismRegisterForm extends IcaOrganismBase {
    render(){
        return html`<form class="register-form" aria-label="Formulário de Registro" autocomplete="off" id="travel--register-form-102009-1">
          <h2 class="form-title" id="travel--register-form-102009-2">Criar nova conta</h2>
          <div class="form-group" id="travel--register-form-102009-3">
            <label for="register-name" id="travel--register-form-102009-4">Nome completo</label>
            <input type="text" id="register-name" name="name" placeholder="Seu nome" required="" autocomplete="name">
          </div>
          <div class="form-group" id="travel--register-form-102009-5">
            <label for="register-email" id="travel--register-form-102009-6">E-mail</label>
            <input type="email" id="register-email" name="email" placeholder="seu@email.com" required="" autocomplete="username">
          </div>
          <div class="form-group" id="travel--register-form-102009-7">
            <label for="register-password" id="travel--register-form-102009-8">Senha</label>
            <input type="password" id="register-password" name="password" placeholder="Crie uma senha" required="" autocomplete="new-password">
          </div>
          <div class="form-actions" id="travel--register-form-102009-9">
            <button type="submit" class="btn-register" id="travel--register-form-102009-10">Cadastrar</button>
          </div>
        </form>
      `
    }
}