/// <mls shortName="organismMenuPerfil" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase'; 
@customElement('petshop--organism-menu-perfil-102009')
export class organismMenuPerfil extends IcaOrganismBase {

  @property() active: string = '0';
  render(){
    return html`
    
    <nav class="nav" role="navigation" aria-label="Navegação principal">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="/pagePerfil" class="nav__link" aria-current="${this.active === '0' ? 'page' : ''}">
          <span class="nav__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="nav__label">Perfil</span>
        </a>
      </li>

      <li class="nav__item">
        <a href="/pagePerfilPets" class="nav__link" aria-current="${this.active === '1' ? 'page' : ''}">
          <span class="nav__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 6c0 .55-.45 1-1 1S6 6.55 6 6s.45-1 1-1 1 .45 1 1zM5 11c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 13c-3.5 0-6.5 2.5-6.5 5v1h13v-1c0-2.5-3-5-6.5-5z" fill="currentColor"/>
            </svg>
          </span>
          <span class="nav__label">Pets</span>
        </a>
      </li>

      <li class="nav__item">
        <a href="/pagePerfilAppointments" class="nav__link" aria-current="${this.active === '2' ? 'page' : ''}">
          <span class="nav__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.2"/>
              <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="nav__label">Agendamentos</span>
        </a>
      </li>
    </ul>
  </nav>

    `
  }
}