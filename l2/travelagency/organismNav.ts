/// <mls shortName="organismNav" project="102009" enhancement="_100554_enhancementLit" groupName="travelagency" />
import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-nav-102009')
export class organismNav extends IcaOrganismBase {
  @state()
  private menuOpen: boolean = false;

  private toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <div class="nav-container" id="travelagency--nav-102009-1">
        <a href="/" class="nav-logo" aria-label="Travel Agency Home" id="travelagency--nav-102009-2">
          <img src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBsb2dvfGVufDB8fHx8MTc1NTEwNzIwOHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Travel Agency Logo" id="travelagency--nav-102009-3">
        </a>
        <button class="nav-hamburger" id="travelagency--nav-102009-10" @click="${this.toggleMenu}" aria-label="Abrir menu de navegação" aria-expanded="${this.menuOpen ? 'true' : 'false'}" aria-controls="travelagency--nav-102009-menu">
          ===
        </button>
        <nav class="nav-links${this.menuOpen ? ' nav-links-open' : ''}" aria-label="Navegação principal" id="travelagency--nav-102009-4" ?hidden="${!this.menuOpen && this.isMobile()}"  >
          <a href="/" class="nav-link nav-link-active" id="travelagency--nav-102009-5">Home</a>
          <a href="/pacotes" class="nav-link" id="travelagency--nav-102009-6">Pacotes</a>
        </nav>
        <div class="nav-actions" id="travelagency--nav-102009-7">
          <a href="/login" class="nav-btn nav-btn-login" id="travelagency--nav-102009-8">Login</a>
          <a href="/cadastro" class="nav-btn nav-btn-signup" id="travelagency--nav-102009-9">Cadastro</a>
        </div>
      </div>
    `;
  }

  // Helper para detectar mobile (pode ser melhorado)
  private isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  static styles = css`
    .nav-hamburger {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 11;
    }
    .nav-hamburger span {
      display: block;
      width: 28px;
      height: 3px;
      margin: 4px 0;
      background: #222;
      border-radius: 2px;
      transition: all 0.3s;
    }
    @media (max-width: 768px) {
      .nav-hamburger {
        display: flex;
      }
      .nav-links {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background: #fff;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        z-index: 10;
      }
      .nav-links.nav-links-open {
        display: flex;
      }
      .nav-actions {
        display: none;
      }
    }
  `;
}
