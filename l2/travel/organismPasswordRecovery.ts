/// <mls shortName="organismPasswordRecovery" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-password-recovery-102009')
export class organismPasswordRecovery extends IcaOrganismBase {
    render(){
        return html`<form class="password-recovery-form" id="password-recovery-form" aria-label="Recuperação de Senha" autocomplete="off">
          <h2 class="form-title" id="travel--password-recovery-102009-1">Recuperar senha</h2>
          <div class="form-group" id="travel--password-recovery-102009-2">
            <label for="recovery-email" id="travel--password-recovery-102009-3">E-mail cadastrado</label>
            <input type="email" id="recovery-email" name="email" placeholder="seu@email.com" required="" autocomplete="username">
          </div>
          <div class="form-actions" id="travel--password-recovery-102009-4">
            <button type="submit" class="btn-recovery" id="travel--password-recovery-102009-5">Enviar instruções</button>
          </div>
        </form>
      `
    }
}