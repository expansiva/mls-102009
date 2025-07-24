/// <mls shortName="organismUserProfile" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('organism-user-profile-102009')
export class _102009_organismUserProfile extends IcaOrganismBase {
    render(){
        return html`
      <div class="user-profile-container">
        <div class="profile-header">
          <div class="profile-avatar">
            <img src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhdmF0YXIlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3NTMyOTI0MTV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto do perfil" class="avatar-image">
            <button class="change-avatar-btn">Alterar foto</button>
          </div>
          <div class="profile-info">
            <h1>Meu Perfil</h1>
            <p class="profile-subtitle">Gerencie suas informações pessoais</p>
          </div>
        </div>
        
        <div class="profile-form">
          <form class="user-data-form">
            <div class="form-section">
              <h2>Dados Pessoais</h2>
              <div class="form-row">
                <div class="form-group">
                  <label for="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" value="Guilherme Pereira" required="">
                </div>
                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="email" id="email" name="email" value="guilherme@email.com" required="">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" value="(11) 99999-9999" required="">
                </div>
                <div class="form-group">
                  <label for="cpf">CPF</label>
                  <input type="text" id="cpf" name="cpf" value="123.456.789-00" required="">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group full-width">
                  <label for="endereco">Endereço completo</label>
                  <input type="text" id="endereco" name="endereco" value="Rua das Flores, 123 - Centro - São Paulo/SP">
                </div>
              </div>
            </div>
            
            <div class="form-section">
              <h2>Alterar Senha</h2>
              <div class="form-row">
                <div class="form-group">
                  <label for="senha-atual">Senha atual</label>
                  <input type="password" id="senha-atual" name="senha-atual">
                </div>
                <div class="form-group">
                  <label for="nova-senha">Nova senha</label>
                  <input type="password" id="nova-senha" name="nova-senha">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="confirmar-senha">Confirmar nova senha</label>
                  <input type="password" id="confirmar-senha" name="confirmar-senha">
                </div>
              </div>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn-secondary">Cancelar</button>
              <button type="submit" class="btn-primary">Salvar alterações</button>
            </div>
          </form>
        </div>
      </div>
    `
    }
}