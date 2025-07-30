/// <mls shortName="organismUserProfile" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-user-profile-102009')
export class _102009_organismUserProfile extends IcaOrganismBase {
    render(){
        return html`
<div class="user-profile-container" id="user-profile-1">
  <div class="profile-header" id="user-profile-2">
    <div class="profile-avatar" id="user-profile-3">
      <img src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhdmF0YXIlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3NTMyOTI0MTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do perfil" class="avatar-image" id="user-profile-4">
      <button class="change-avatar-btn" id="user-profile-5">Alterar foto</button>
    </div>
    <div class="profile-info" id="user-profile-6">
      <h1 id="user-profile-7">Meu Perfil</h1>
      <p class="profile-subtitle" id="user-profile-8">Gerencie suas informações pessoais</p>
    </div>
  </div>
  
  <div class="profile-form" id="user-profile-9">
    <form class="user-data-form" id="user-profile-10">
      <div class="form-section" id="user-profile-11">
        <h2 id="user-profile-12">Dados Pessoais</h2>
        <div class="form-row" id="user-profile-13">
          <div class="form-group" id="user-profile-14">
            <label for="nome" id="user-profile-15">Nome completo</label>
            <input type="text" id="nome" name="nome" value="Guilherme Pereira" required="" >
          </div>
          <div class="form-group" id="user-profile-16">
            <label for="email" id="user-profile-17">E-mail</label>
            <input type="email" id="email" name="email" value="guilherme@email.com" required="" >
          </div>
        </div>
        <div class="form-row" id="user-profile-18">
          <div class="form-group" id="user-profile-19">
            <label for="telefone" id="user-profile-20">Telefone</label>
            <input type="tel" id="telefone" name="telefone" value="(11) 99999-9999" required="" >
          </div>
          <div class="form-group" id="user-profile-21">
            <label for="cpf" id="user-profile-22">CPF</label>
            <input type="text" id="cpf" name="cpf" value="123.456.789-00" required="" >
          </div>
        </div>
        <div class="form-row" id="user-profile-23">
          <div class="form-group full-width" id="user-profile-24">
            <label for="endereco" id="user-profile-25">Endereço completo</label>
            <input type="text" id="endereco" name="endereco" value="Rua das Flores, 123 - Centro - São Paulo/SP" >
          </div>
        </div>
      </div>
      
      <div class="form-section" id="user-profile-26">
        <h2 id="user-profile-27">Alterar Senha</h2>
        <div class="form-row" id="user-profile-28">
          <div class="form-group" id="user-profile-29">
            <label for="senha-atual" id="user-profile-30">Senha atual</label>
            <input type="password" id="senha-atual" name="senha-atual" >
          </div>
          <div class="form-group" id="user-profile-31">
            <label for="nova-senha" id="user-profile-32">Nova senha</label>
            <input type="password" id="nova-senha" name="nova-senha" >
          </div>
        </div>
        <div class="form-row" id="user-profile-33">
          <div class="form-group" id="user-profile-34">
            <label for="confirmar-senha" id="user-profile-35">Confirmar nova senha</label>
            <input type="password" id="confirmar-senha" name="confirmar-senha" >
          </div>
        </div>
      </div>
      
      <div class="form-actions" id="user-profile-36">
        <button type="button" class="btn-secondary" id="user-profile-37">Cancelar</button>
        <button type="submit" class="btn-primary" id="user-profile-38">Salvar alterações</button>
      </div>
    </form>
  </div>
</div>

    `
    }
}