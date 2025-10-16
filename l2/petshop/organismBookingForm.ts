/// <mls shortName="organismBookingForm" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { petshopExec } from "./_102009_layer1Exec";
import { SchedulingData, SchedulingStatus } from './_102009_layer4Scheduling'
import { RequestSchedulingAdd } from './_102009_layer4SchedulingBase'
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { RequestMDMGetListByIds, RequestMDMGetListByType  } from "./_102019_layer4ResReq";
import { MdmData, RegistrationDataService, RegistrationDataPF, RegistrationDataPet,  MdmType } from "./_102019_layer4Mdm";


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
      <h2>Agende Banho &amp; Tosa</h2>
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
        <div class="form-group" style="width:100%; display: flex; align-items: center; justify-content: center;">
          <a href="/pagePerfilAppointments" id="meusagendamentos">meus agendamento</a>
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

    this.loading = true;

    const pet = this.myPets[this.petIndex];
    const serv  = this.services[this.serviceIndex];

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

    const params: SchedulingData = {
      data: {
        clientMdmId: this.mdmData.id || '',
        petMdmId: this.myPets[this.petIndex].id || '',
        serviceMdmId: this.services[this.serviceIndex].id || '',
        startDateTime: utcString,
        status: SchedulingStatus.PENDING,
        serviceOrderId: null,
        jsonBin: {
          tutor: {
            name: (this.mdmData.data.registrationData as RegistrationDataPF).name,
            phone: phoneClient ,
          },
          pet: {
            name: (pet.data.registrationData as RegistrationDataPet).name,
            species: (pet.data.registrationData as RegistrationDataPet).species,
            breed: (pet.data.registrationData as RegistrationDataPet).breed,
            allergies: [],
          },
          service: {
            name: (serv.data.registrationData as RegistrationDataService).name,
            serviceCode: (serv.data.registrationData as RegistrationDataService).serviceCode,
          },
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