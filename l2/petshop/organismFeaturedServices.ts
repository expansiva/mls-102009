/// <mls shortName="organismFeaturedServices" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { exec } from "./_102019_layer1Exec";
import { setState, getState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RegistrationDataService, RequestMDMGetListByType, MdmType } from "./_102019_layer4Mdm";

@customElement('petshop--organism-featured-services-102009')
export class organismFeaturedServices extends IcaOrganismBase {

  @state() mdmServices: MdmData[] = [];

  //--------------------------------

  async firstUpdated() {
    this.init();
  }
  render() {
    return html`
    <div class="services-container">
      <h2>Nossos principais serviços</h2>
      <div class="services-list">
        ${this.mdmServices.map((serv, index) => this.renderItem(serv, index))}
      </div>
    </div>
      `
  }

  renderItem(serv: MdmData, index: number) {

    if (index > 4) return html``;
    const reg = (serv.data.registrationData as RegistrationDataService);
    return html`
    <div class="service-card">
      <div class="icon">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4zm0 14.2c-2.5 0-4.71-1.28-6-3.22c.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z" fill="#1C91CD"></path></svg>
      </div>
      <div class="service-title">${reg.name}</div>
      <div class="service-desc">${reg.descriptionShort}</div>
    </div>

    `;
  }

  //-------------------------

  private init() {
    this.loadServ();
  }

  private async loadServ() {
    const req: RequestMDMGetListByType = {
      action: 'MDMGetListByType',
      inDeveloped: true,
      version: '1',
      params: { type: MdmType.Servico },
    };

    const response = await exec(req);
    if (response.ok) {
      this.mdmServices = response.data.map((item: MdmData) => {
        const item2: MdmData = item;
        return item2;
      });
    }
  }

}