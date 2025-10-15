/// <mls shortName="organismAdminNav" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from './_100554_collabState';

@customElement('petshop--organism-admin-nav-102009')
export class OrganismAdminNav extends IcaOrganismBase {

  @property() selected: IMenuItens = 'dashboard';

  firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
    super.firstUpdated(_changedProperties);
    const mode: IMenuItens = getState('ui.petshop.admin.menu.selected');
    this.selected = mode || 'dashboard';
  }

  render() {
    return html`
      <nav class="admin-sidebar" id="petshop--admin-nav-102009">
        <div class="sidebar__profile">
          <img
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=200&q=80"
            alt="Foto de perfil"
            class="sidebar__avatar"
          />
          <span class="sidebar__username">Olá, Guilherme</span>
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

