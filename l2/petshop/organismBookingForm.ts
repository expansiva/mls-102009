/// <mls shortName="organismBookingForm" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { petshopExec } from "./_102009_layer1Exec";
import { SchedulingRecord, SchedulingStatus, RequestSchedulingAdd } from './_102009_commonGlobal'
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { RequestMDMGetListByIds, RequestMDMGetListByType } from "./_102019_layer4ResReq";
import { MdmData, RegistrationDataService, RegistrationDataPF, RegistrationDataPet, MdmType } from "./_102019_layer4Mdm";


@customElement('petshop--organism-booking-form-102009')
export class organismBookingForm extends IcaOrganismBase {

  @query('#meusagendamentos') meusagendamentos: HTMLElement | undefined;

  @state() mdmData: MdmData | undefined;
  @state() myPets: MdmData[] = [];
  @state() services: MdmData[] = [];
  @state() error = '';
  @state() loading: boolean = false;

  @propertyDataSource() petIndex: number = -1;
  @propertyDataSource() serviceIndex: number = -1;
  @propertyDataSource() data: string = '';
  @propertyDataSource() horario: string = '';

  //-------------------------------

  firstUpdated() {
    this.init();
  }

  render() {
    return html`
      <h2>Agende um serviço</h2>
      <div autocomplete="off">
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Serviço *</label>
            <select id="service" .value=${this.serviceIndex} name="service" required="" @change=${(e: KeyboardEvent) => { this.serviceIndex = +(e.target as HTMLInputElement).value }}>
              <option value="-1">Selecione</option>
              ${this.services.map((serv: MdmData, index) => html`
                  <option value="${index}">${(serv.data.registrationData as RegistrationDataService).name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Pet *</label>
            <select id="service" .value=${this.petIndex} name="service" required="" @change=${(e: KeyboardEvent) => { this.petIndex = +(e.target as HTMLInputElement).value }}>
              <option value="-1">Selecione</option>
              ${this.myPets.map((serv: MdmData, index) => html`
                  <option value="${index}">${(serv.data.registrationData as RegistrationDataService).name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row" >
          <div style="flex:1;">
            <label for="date">Data *</label>
            <input type="date" id="date" .value=${this.data} name="date" required="" min="2025-08-06" @change=${(e: KeyboardEvent) => { this.data = (e.target as HTMLInputElement).value }}>
          </div>
          <div style="flex:1;">
            <label for="time">Horário *</label>
            <select id="time" .value=${this.horario} name="time" required="" @change=${(e: KeyboardEvent) => { this.horario = (e.target as HTMLInputElement).value }}>
              <option value="">Selecione</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" @click=${this.handleClickSave}>Agendar ${this.loading ? html`<span class="loading"></span>` : html``}</button>
        </div>
        <div class="form-group" style="width:100%; display: flex; align-items: center; justify-content: center; padding:1rem">
          <a href="/pagePerfilAppointments" id="meusagendamentos" style="font-size:17px;text-decoration: underline; dipslay:flex">Meus Agendamentos 
            <svg xmlns="http://www.w3.org/2000/svg" style="width:15px; fill:var(--active-color)" viewBox="0 0 448 512"><!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
          </a>
        </div>
        ${this.error ? html`<div style="text-align:center">${this.error}</div>` : ''}
      </div>
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
      this.error = 'Falta parametros para pegar os pets';
      return;
    }

    const ids: number[] = [];

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
      params: { type: MdmType.Servico }
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

  private async handleClickSave() {

    if (!this.mdmData) {
      this.error = 'Nenhum cliente selecionado!';
      return
    }

    if (this.petIndex < 0 || !this.myPets[this.petIndex]) {
      this.error = 'Pet obrigatório.';
      return
    }

    if (this.serviceIndex < 0 || !this.services[this.serviceIndex]) {
      this.error = 'Selecione um serviço';
      return
    }

    if (!this.data) {
      this.error = 'Informe uma data';
      return
    }

    if (!this.horario) {
      this.error = 'Informe um horario';
      return
    }


    const dataHoraInformada = new Date(`${this.data}T${this.horario}`);
    const agora = new Date();


    if (dataHoraInformada < agora) {
      this.error = 'A data e horário não podem ser anteriores ao momento atual';
      return;
    }

    this.loading = true;

    const pet = this.myPets[this.petIndex];
    const serv = this.services[this.serviceIndex];

    const localDateTimeString = `${this.data}T${this.horario}:00`;
    const localDate = new Date(localDateTimeString);
    const utcString = new Date(Date.UTC(
      localDate.getFullYear(),
      localDate.getMonth(),
      localDate.getDate(),
      localDate.getHours(),
      localDate.getMinutes(),
      localDate.getSeconds()
    )).toISOString();


    let phoneClient = '';
    if (this.mdmData.data.contactData && this.mdmData.data.contactData.phone) {
      phoneClient = this.mdmData.data.contactData.phone[0].number;
    }

    const params: SchedulingRecord = {
      details: {

        startDateTime: utcString,
        status: SchedulingStatus.PENDING,
        serviceOrderId: null,

        tutor: {
          clientMdmId: this.mdmData.id || 0,
          name: (this.mdmData.data.registrationData as RegistrationDataPF).name,
          phone: phoneClient,
        },
        pet: {
          petMdmId: this.myPets[this.petIndex].id || 0,
          name: (pet.data.registrationData as RegistrationDataPet).name,
          species: (pet.data.registrationData as RegistrationDataPet).species,
          breed: (pet.data.registrationData as RegistrationDataPet).breed,
          allergies: [],
        },
        service: {
          serviceMdmId: this.services[this.serviceIndex].id || 0,
          name: (serv.data.registrationData as RegistrationDataService).name,
          serviceCode: (serv.data.registrationData as RegistrationDataService).serviceCode,
        },

      }
    }
    const req: RequestSchedulingAdd = {
      action: 'SchedulingAdd',
      inDeveloped: true,
      version: '1',
      params,
    };

    const response = await petshopExec(req);

    if (!response.ok) {
      this.error = response.error || 'Error';
      this.loading = false;
      return;
    }
    this.loading = false;
    this.petIndex = -1;
    this.serviceIndex = -1;
    this.horario = '';
    this.data = '';
    this.error = 'Agendamento realizado com sucesso';

    if (this.meusagendamentos) this.meusagendamentos.click();

  }

}