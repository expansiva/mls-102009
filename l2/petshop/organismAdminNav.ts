/// <mls shortName="organismAdminNav" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from './_100554_collabState';
import { collab_user } from './_100554_collabIcons';
import { MdmRecord, RegistrationDataPJ, AttachmentType, RegistrationDataPF, MdmType } from "./_102019_commonGlobal";

@customElement('petshop--organism-admin-nav-102009')
export class OrganismAdminNav extends IcaOrganismBase {

  @property() selected: IMenuItens = 'dashboard';
  @state() avatarUrl?: string;
  @state() userName?: string;

  firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(_changedProperties);
    const mode: IMenuItens = getState('ui.petshop.admin.menu.selected');
    this.selected = mode || 'dashboard';
    const logged: MdmRecord = getState('ui.petshop.login');
    this.avatarUrl = logged.details.attachments?.find((item) => item.type === AttachmentType.MEDIA_PROFILE_PIC)?.url || '';
    this.userName = logged.details.type === MdmType.PessoaFisica ? (logged.details.registrationData as RegistrationDataPF).name : (logged.details.registrationData as RegistrationDataPJ).fantasyName;

  }

  render() {

    return html`
      <nav class="admin-sidebar" id="petshop--admin-nav-102009">
        <div class="sidebar__profile">
          ${this.avatarUrl ? html`
              <img
                src="${this.avatarUrl}"
                alt="Foto de perfil"
                class="sidebar__avatar"
              />

          `: html`
              ${collab_user}
          `}
        
          <span class="sidebar__username">Olá, ${this.userName}</span>
        </div>

        <ul class="sidebar__menu">
          <li>
            <a 
              href="/pageAdminDashboard" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === 'dashboard'}
              @click=${() => this.onMenuClick('dashboard')}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminScheduling" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === 'scheduling'}
              @click=${() => this.onMenuClick('scheduling')}
            >
              Agendamento
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminProduct" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === 'product'}
              @click=${() => this.onMenuClick('product')}
            >
              Produto
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminService" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === 'service'}
              @click=${() => this.onMenuClick('service')}
            >
              Serviço
            </a>
          </li>
  
        </ul>

        <div class="sidebar__footer">
          <a href="/pageLogin" class="sidebar__logout">Sair</a>
        </div>
      </nav>
    `;
  }

  private onMenuClick(mode: IMenuItens) {
    setState('ui.mdm.menu.selected', mode);
    this.selected = mode;
  }
}
type IMenuItens = 'dashboard' | 'scheduling' | 'product' | 'service'

