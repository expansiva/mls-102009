/// <mls shortName="organismNav" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getState } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RegistrationDataPF, AttachmentType, RegistrationDataPJ } from "./_102019_layer4Mdm";

@customElement('petshop--organism-nav-102009')
export class organismNav extends IcaOrganismBase {

  @state() mdmData: MdmData | undefined;
  @state() mdmCompany: MdmData | undefined;
  @state() name: string = '';
  @state() img?: string; 
  @state() nameCompany: string = '';
  @state() imgCompany: string = '' ;

  //--------------------------------------

  firstUpdated() {
    this.init();
  }

  render() {
    return html`<div class="nav-container" id="petshop--nav-102009-1">
          <a href="/" class="logo" aria-label="Página inicial" id="petshop--nav-102009-2">
            <img src="${this.imgCompany}" alt="Logo Petshop" id="petshop--nav-102009-3">
            <span class="brand" id="petshop--nav-102009-4">${this.nameCompany}</span>
          </a>
          <nav aria-label="Menu principal" id="petshop--nav-102009-5">
            <ul id="petshop--nav-102009-6">
              <li id="petshop--nav-102009-7">
                <a href="/pageHome" id="petshop--nav-102009-8">Home</a>
              </li>
              <li id="petshop--nav-102009-9">
                <a href="/pageAppointments" id="petshop--nav-102009-10">Agendamento</a>
              </li>
              <li id="petshop--nav-102009-11">
                <a href="/pageProduct" id="petshop--nav-102009-12">Produtos</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/pageContact" id="petshop--nav-102009-14">Contato</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/pageLogin" id="petshop--nav-102009-30">Sair</a>
              </li>
            </ul> 
            
          </nav>
          <div class="social">
            <span>Olá, ${this.name}</span>
            <a href="/pagePerfil" class="social-perfil">
                <img src="${this.img}" alt="Sair" id="petshop--admin-nav-102009-16">
              </a>
            </div>
        </div>
      `
  }

  //----------------

  private init() {
    this.mdmData = getState('ui.petshop.login');
    this.mdmCompany = getState('ui.petshop.enterprise');

    if (this.mdmData) {
      this.name = (this.mdmData.data.registrationData as RegistrationDataPF).name;

      if (this.mdmData.data.attachments && this.mdmData.data.attachments.length > 0) {
        this.mdmData.data.attachments.forEach((i) => {
          if (i.type === AttachmentType.MEDIA_PROFILE_PIC) {
            this.img = i.url;
          }

        });
      }

      if (this.img === '') this.img = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NDQxMTUzMXww&ixlib=rb-4.1.0&q=80&w=200';
    }

    if (this.mdmCompany) {
      this.nameCompany = (this.mdmCompany.data.registrationData as RegistrationDataPJ).fantasyName;

      if (this.mdmCompany.data.attachments && this.mdmCompany.data.attachments.length > 0) {
        this.mdmCompany.data.attachments.forEach((i) => {
          if (i.type === AttachmentType.MEDIA_PROFILE_PIC) {
            this.imgCompany = i.url;
          }

        });
      }

      if (this.imgCompany === '') this.imgCompany = 'https://images.unsplash.com/photo-1701500096456-28186c4a306d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXRzaG9wJTIwbG9nbyUyMGFuaW1hbCUyMHBhdyUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080';
    }
  }

}