/// <mls shortName="organismBookingForm" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { petshopExec } from "./_102009_layer1Exec";
import { SchedulingData} from './_102009_layer4Scheduling'
import { RequestSchedulingAdd} from './_102009_layer4SchedulingBase'
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RegistrationDataService,RequestMDMGetListByIds, RequestMDMGetListByType, MdmType } from "./_102019_layer4Mdm";


@customElement('petshop--organism-booking-form-102009')
export class organismBookingForm extends IcaOrganismBase {

  @state() mdmData: MdmData | undefined;
  @state() myPets: MdmData[] = [];
  @state() services: MdmData[] = [];
  @state() error = '';
  @state() loading: boolean = false;

  //-------------------------------

  firstUpdated() {
    this.init();
  }

  render() {
    return html`<h2>Agende Banho &amp; Tosa</h2>
      <form autocomplete="off">
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Serviço *</label>
            <select id="service" name="service" required="">
              <option value="">Selecione</option>
              ${this.services.map((serv: MdmData, index) => html`
                  <option value="${index}">${(serv.data.registrationData as RegistrationDataService).name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Pet *</label>
            <select id="service" name="service" required="">
              <option value="">Selecione</option>
              ${this.services.map((serv: MdmData, index) => html`
                  <option value="${index}">${(serv.data.registrationData as RegistrationDataService).name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row" >
          <div style="flex:1;">
            <label for="date" id="petshop--booking-form-102009-11">Data *</label>
            <input type="date" id="date" name="date" required="" min="2025-08-06">
          </div>
          <div style="flex:1;" id="petshop--booking-form-102009-10">
            <label for="time" id="petshop--booking-form-102009-14">Horário *</label>
            <select id="time" name="time" required="">
              <option value="" id="petshop--booking-form-102009-15">Selecione</option>
              <option value="09:00" id="petshop--booking-form-102009-16">09:00</option>
              <option value="10:00" id="petshop--booking-form-102009-17">10:00</option>
              <option value="11:00" id="petshop--booking-form-102009-18">11:00</option>
              <option value="13:00" id="petshop--booking-form-102009-19">13:00</option>
              <option value="14:00" id="petshop--booking-form-102009-20">14:00</option>
              <option value="15:00" id="petshop--booking-form-102009-21">15:00</option>
              <option value="16:00" id="petshop--booking-form-102009-22">16:00</option>
            </select>
          </div>
        </div>
        
        <div class="form-actions" id="petshop--booking-form-102009-50">
          <button type="submit" id="petshop--booking-form-102009-51">Agendar</button>
        </div>
      </form>
    `
  }

  //---------------------------

  private async init() {
    this.mdmData = getState('ui.petshop.login');
    this.myPets = getState('ui.petshop.client.myPets') || [];
    this.services = getState('ui.petshop.client.services') || [];

    this.loadInfos();
  }

  private async loadInfos() {
    await this.getMyPets();
    await this.getServices();
  }


  private async getMyPets() {

    if (!this.mdmData) {
      this.error = 'Falata parametros para pegar os pets';
      return;
    }

    const ids: string[] = [];

    if (this.mdmData.data.relationships) {
      this.mdmData.data.relationships.forEach((r) => {

        if (r.type === 'R_PF_OWNER_OF_PET') ids.push(r.relatedMdmId);

      })
    }

    const req: RequestMDMGetListByIds = {
      action: 'MDMGetListByIds',
      inDeveloped: true,
      version: '1',
      params: { ids }
    };

    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error as string;
      this.loading = false;
      return;
    }

    this.myPets = response.data.filter((item: any) => item != null);

    setState('ui.petshop.client.myPets', this.myPets);

  }

  private async getServices() {

    const req: RequestMDMGetListByType = {
      action: 'MDMGetListByType',
      inDeveloped: true,
      version: '1',
      params: { type:MdmType.Servico }
    };

    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error as string;
      this.loading = false;
      return;
    }

    this.services = response.data.filter((item: any) => item != null);

    setState('ui.petshop.client.services', this.services);

  }

}