/// <mls shortName="organismBookingForm" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { petshopExec } from "./_102009_layer1Exec";
import { ServiceOrderData} from './_102009_layer4ServiceOrder'
import { RequestSchedulingAdd} from './_102009_layer4SchedulingBase'
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RequestMDMGetLitstByIds, RequestMDMGetLitstByType, MdmType } from "./_102019_layer4Mdm";


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
    return html`<h2 id="petshop--booking-form-102009-1">Agende Banho &amp; Tosa</h2>
      <form autocomplete="off" id="petshop--booking-form-102009-2">
        <div class="form-row" id="petshop--booking-form-102009-3">
          <div style="flex:1;" id="petshop--booking-form-102009-4">
            <label for="service" id="petshop--booking-form-102009-5">Serviço *</label>
            <select id="service" name="service" required="">
              <option value="" id="petshop--booking-form-102009-6">Selecione</option>
              <option value="banho" id="petshop--booking-form-102009-7">Banho</option>
              <option value="tosa" id="petshop--booking-form-102009-8">Tosa</option>
              <option value="banho_tosa" id="petshop--booking-form-102009-9">Banho + Tosa</option>
            </select>
          </div>
          <div style="flex:1;" id="petshop--booking-form-102009-10">
            <label for="date" id="petshop--booking-form-102009-11">Data *</label>
            <input type="date" id="date" name="date" required="" min="2025-08-06">
          </div>
        </div>
        <div class="form-row" id="petshop--booking-form-102009-12">
          <div style="flex:1;" id="petshop--booking-form-102009-13">
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
        <hr style="margin:@space-16 0; border:0; border-top:1px solid @grey-color-light;" id="petshop--booking-form-102009-23">
        <div class="form-row" id="petshop--booking-form-102009-24">
          <div style="flex:1;" id="petshop--booking-form-102009-25">
            <label for="pet-name" id="petshop--booking-form-102009-26">Nome do Pet *</label>
            <input type="text" id="pet-name" name="pet-name" required="" placeholder="Ex: Thor">
          </div>
          <div style="flex:1;" id="petshop--booking-form-102009-27">
            <label for="pet-type" id="petshop--booking-form-102009-28">Tipo do Pet *</label>
            <select id="pet-type" name="pet-type" required="">
              <option value="" id="petshop--booking-form-102009-29">Selecione</option>
              <option value="cachorro" id="petshop--booking-form-102009-30">Cachorro</option>
              <option value="gato" id="petshop--booking-form-102009-31">Gato</option>
              <option value="ave" id="petshop--booking-form-102009-32">Ave</option>
              <option value="outro" id="petshop--booking-form-102009-33">Outro</option>
            </select>
          </div>
        </div>
        <div class="form-row" id="petshop--booking-form-102009-34">
          <div style="flex:1;" id="petshop--booking-form-102009-35">
            <label for="pet-size" id="petshop--booking-form-102009-36">Porte *</label>
            <select id="pet-size" name="pet-size" required="">
              <option value="" id="petshop--booking-form-102009-37">Selecione</option>
              <option value="pequeno" id="petshop--booking-form-102009-38">Pequeno</option>
              <option value="medio" id="petshop--booking-form-102009-39">Médio</option>
              <option value="grande" id="petshop--booking-form-102009-40">Grande</option>
            </select>
          </div>
        </div>
        <hr style="margin:@space-16 0; border:0; border-top:1px solid @grey-color-light;" id="petshop--booking-form-102009-41">
        <div class="form-row" id="petshop--booking-form-102009-42">
          <div style="flex:1;" id="petshop--booking-form-102009-43">
            <label for="tutor-name" id="petshop--booking-form-102009-44">Nome do Tutor *</label>
            <input type="text" id="tutor-name" name="tutor-name" required="" placeholder="Seu nome">
          </div>
        </div>
        <div class="form-row" id="petshop--booking-form-102009-45">
          <div style="flex:1;" id="petshop--booking-form-102009-46">
            <label for="tutor-email" id="petshop--booking-form-102009-47">E-mail *</label>
            <input type="email" id="tutor-email" name="tutor-email" required="" placeholder="seu@email.com">
          </div>
          <div style="flex:1;" id="petshop--booking-form-102009-48">
            <label for="tutor-phone" id="petshop--booking-form-102009-49">Telefone *</label>
            <input type="tel" id="tutor-phone" name="tutor-phone" required="" placeholder="(99) 99999-9999" pattern="\(\d{2}\) \d{5}-\d{4}">
          </div>
        </div>
        <div class="form-actions" id="petshop--booking-form-102009-50">
          <button type="submit" id="petshop--booking-form-102009-51">Agendar</button>
          <div class="form-error" style="display:none;" id="petshop--booking-form-102009-52">Por favor, preencha todos os campos obrigatórios e escolha um horário disponível.</div>
          <div class="confirmation-message" style="display:none;" id="petshop--booking-form-102009-53">Agendamento realizado com sucesso! Você receberá um e-mail de confirmação.</div>
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

    const req: RequestMDMGetLitstByIds = {
      action: 'MDMGetLitstByIds',
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

    const req: RequestMDMGetLitstByType = {
      action: 'MDMGetLitstByType',
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