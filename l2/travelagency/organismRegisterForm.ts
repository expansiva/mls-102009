/// <mls shortName="organismRegisterForm" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-register-form-102009')
export class organismRegisterForm extends IcaOrganismBase {
    render(){
        return html`<div class="register-form__container" id="travelagency--register-form-102009-1">
        <h1 class="register-form__title" id="travelagency--register-form-102009-2">Crie sua conta</h1>
        <form class="register-form__form" autocomplete="off" novalidate="" id="travelagency--register-form-102009-3">
          <div class="register-form__field" id="travelagency--register-form-102009-4">
            <label for="register-nome" class="register-form__label" id="travelagency--register-form-102009-5">Nome completo <span class="register-form__required" id="travelagency--register-form-102009-6">*</span></label>
            <input type="text" id="register-nome" name="nome" class="register-form__input" placeholder="Seu nome completo" required="">
            <span class="register-form__error" data-error-for="nome" id="travelagency--register-form-102009-7"></span>
          </div>
          <div class="register-form__field" id="travelagency--register-form-102009-8">
            <label for="register-email" class="register-form__label" id="travelagency--register-form-102009-9">E-mail <span class="register-form__required" id="travelagency--register-form-102009-10">*</span></label>
            <input type="email" id="register-email" name="email" class="register-form__input" placeholder="seu@email.com" required="">
            <span class="register-form__error" data-error-for="email" id="travelagency--register-form-102009-11"></span>
          </div>
          <div class="register-form__field" id="travelagency--register-form-102009-12">
            <label for="register-cpf" class="register-form__label" id="travelagency--register-form-102009-13">CPF <span class="register-form__required" id="travelagency--register-form-102009-14">*</span></label>
            <input type="text" id="register-cpf" name="cpf" class="register-form__input" placeholder="000.000.000-00" maxlength="14" required="">
            <span class="register-form__error" data-error-for="cpf" id="travelagency--register-form-102009-15"></span>
          </div>
          <div class="register-form__field" id="travelagency--register-form-102009-16">
            <label for="register-telefone" class="register-form__label" id="travelagency--register-form-102009-17">Telefone</label>
            <input type="tel" id="register-telefone" name="telefone" class="register-form__input" placeholder="(00) 00000-0000" maxlength="15">
            <span class="register-form__error" data-error-for="telefone" id="travelagency--register-form-102009-18"></span>
          </div>
          <div class="register-form__field" id="travelagency--register-form-102009-19">
            <label for="register-senha" class="register-form__label" id="travelagency--register-form-102009-20">Senha <span class="register-form__required" id="travelagency--register-form-102009-21">*</span></label>
            <input type="password" id="register-senha" name="senha" class="register-form__input" placeholder="Crie uma senha" minlength="6" required="">
            <span class="register-form__error" data-error-for="senha" id="travelagency--register-form-102009-22"></span>
          </div>
          <div class="register-form__field" id="travelagency--register-form-102009-23">
            <label for="register-senha-confirm" class="register-form__label" id="travelagency--register-form-102009-24">Confirme a senha <span class="register-form__required" id="travelagency--register-form-102009-25">*</span></label>
            <input type="password" id="register-senha-confirm" name="senha_confirm" class="register-form__input" placeholder="Repita a senha" minlength="6" required="">
            <span class="register-form__error" data-error-for="senha_confirm" id="travelagency--register-form-102009-26"></span>
          </div>
          <div class="register-form__actions" id="travelagency--register-form-102009-27">
            <button type="submit" class="register-form__submit" id="travelagency--register-form-102009-28">Cadastrar</button>
          </div>
          <div class="register-form__login-link" id="travelagency--register-form-102009-29">
            Já tem uma conta? <a href="/login" class="register-form__link" id="travelagency--register-form-102009-30">Entrar</a>
          </div>
        </form>
      </div>
    `
    }
}