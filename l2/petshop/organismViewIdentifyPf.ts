/// <mls shortName="organismViewIdentifyPf" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

import { exec as execMdm } from "./_102019_layer1Exec";
import { MdmRecord, MdmType, RegistrationDataPF, Address, MdmAddresType, AttachmentType, RequestMDMUpd } from "./_102019_commonGlobal";

@customElement('petshop--organism-view-identify-pf-102009')
export class organismViewIdentifyPf extends IcaOrganismBase {

  @state() mdm: MdmRecord | undefined;
  @state() loading: boolean = false;
  @state() error?: string = '';

  @propertyDataSource() img?: string ;
  @propertyDataSource() name?: string;
  @propertyDataSource() cpf?: string;
  @propertyDataSource() email?: string;
  @propertyDataSource() telefone?: string;
  @propertyDataSource() rua?: string;
  @propertyDataSource() bairro?: string;
  @propertyDataSource() estado?: string;
  @propertyDataSource() cidade?: string;
  @propertyDataSource() numero?: string;

  firstUpdated() {
    this.init();
  }

  render() {
    return html`
    <div class="profile-container" >
      <div class="profile-photo">
        <img src="${this.img}" alt="Foto de Perfil">
      </div>
      <div class="profile-info" >
        <div class="form-group">
          <label>Nome</label>
          <input class="field-value" .value=${this.name} @input=${(e: any) => this.name = e.target.value}/>
        </div>
        <div class="form-group">
          <label>CPF</label>
          <input class="field-value" .value=${this.cpf} @input=${(e: any) => this.cpf = e.target.value}/>
        </div>
        <div class="form-group" >
          <label>Email</label>
          <input class="field-value" .value=${this.email} @input=${(e: any) => this.email = e.target.value}/>
        </div>
        <div class="form-group" >
          <label >Telefone</label>
          <input class="field-value" .value=${this.telefone} @input=${(e: any) => this.telefone = e.target.value}/>
        </div>
        <div class="form-group" >
          <label >Rua</label>
          <input type="text" placeholder="Digite a rua" .value=${this.rua} @input=${(e: any) => this.rua = e.target.value}>
        </div>
        <div class="form-group" >
          <label >Bairro</label>
          <input type="text" placeholder="Digite o bairro" .value=${this.bairro} @input=${(e: any) => this.bairro = e.target.value}>
        </div>
        <div class="form-group" >
          <label >Estado</label>
          <input type="text" placeholder="Digite o estado" .value=${this.estado} @input=${(e: any) => this.estado = e.target.value}>
        </div>
        <div class="form-group" >
          <label >Cidade</label>
          <input type="text" placeholder="Digite a cidade" .value=${this.cidade} @input=${(e: any) => this.cidade = e.target.value}>
        </div>
        <div class="form-group" >
          <label >Número</label>
          <input type="text" placeholder="Digite o número" .value=${this.numero} @input=${(e: any) => this.numero = e.target.value}>
        </div>
        <div class="form-actions" >
          <button class="btn btn-save" @click=${this.handleClickSave}>Salvar ${this.loading ? html`<span class="loading"></span>` : html``}</button>
          <button class="btn btn-cancel" @click=${this.setInitialValues} >Cancelar</button>
        </div>
        <div style="text-align:center">${this.error}<div>
      </div>
    </div>`;
  }

  private init() {

    if (!this.mdm) this.mdm = getState('ui.petshop.login');
    console.info(this.mdm);
    if (!this.mdm) return;

    this.setInitialValues();


  }

  private setInitialValues() {

    if (!this.mdm) return;
    this.name = (this.mdm.details.registrationData as RegistrationDataPF).name;
    this.cpf = (this.mdm.details.registrationData as RegistrationDataPF).cpf;
    this.email = this.mdm.details.contactData?.email || '';
    this.telefone = this.mdm.details.contactData?.phone ? this.mdm.details.contactData?.phone[0].number : '';

    if (this.mdm.details.addresses && this.mdm.details.addresses.length > 0) {
      this.rua = this.mdm.details.addresses[0].street;
      this.bairro = this.mdm.details.addresses[0].neighborhood;
      this.cidade = this.mdm.details.addresses[0].city;
      this.estado = this.mdm.details.addresses[0].stateProvince;
      this.numero = this.mdm.details.addresses[0].number;
    }

    if (this.mdm.details.attachments && this.mdm.details.attachments.length > 0) {
      this.mdm.details.attachments.forEach((i) => {
        if (i.type === AttachmentType.MEDIA_PROFILE_PIC) {
          this.img = i.url;
        }

      });
    }

    if (this.img === '') this.img = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NDQxMTUzMXww&ixlib=rb-4.1.0&q=80&w=200';

  }

  private async handleClickSave() {

    if (!this.name) {
      this.error = 'Nome é obrigatório.';
      return;
    }
    if (!this.cpf) {
      this.error = 'CPF é obrigatório.';
      return
    }


    this.loading = true;

    const dataToUpd: MdmRecord | undefined = { ... this.mdm } as MdmRecord;
    const rgData = dataToUpd.details?.registrationData as RegistrationDataPF;
    rgData.cpf = this.cpf as string;
    rgData.name = this.name as string;

    if (dataToUpd.details.addresses && dataToUpd.details.addresses.length > 0) {
      dataToUpd.details.addresses[0].street = this.rua || '';
      dataToUpd.details.addresses[0].neighborhood = this.bairro || '';
      dataToUpd.details.addresses[0].city = this.cidade || '';
      dataToUpd.details.addresses[0].stateProvince = this.estado || '';
      dataToUpd.details.addresses[0].number = this.numero || '';
    } else {

      dataToUpd.details.addresses = [
        {

          type: MdmAddresType.Residencial,
          description: '',
          street: this.rua || '',
          number: this.numero || '',
          neighborhood: this.bairro || '',
          complement: '',
          city: this.cidade || '',
          stateProvince: this.estado,
          zipCode: '',
          country: '',
          latitude: '',
          longitude: '',

        } as Address
      ]
    }

    if (dataToUpd.details.contactData && dataToUpd.details.contactData.phone && dataToUpd.details.contactData.phone.length > 0) {
      dataToUpd.details.contactData.phone[0].number = this.telefone || '';
      dataToUpd.details.contactData.email = this.email;

    } else {

      if (!dataToUpd.details.contactData) dataToUpd.details.contactData = { phone: [] };
      dataToUpd.details.contactData.phone = [
        { type: 'Residencial', number: this.telefone || '' }
      ];
      dataToUpd.details.contactData.email = this.email;
    }

    const params: MdmRecord = dataToUpd;
    const req: RequestMDMUpd = {
      action: 'MDMUpd',
      inDeveloped: true,
      version: '1',
      params,
    };

    const response = await execMdm(req);
    if (response.error) {
      this.error = response.error;
      this.loading = false;
      return;
    }
    this.loading = false;
    this.error = 'Cadastro atualizado com sucesso';
    setState('ui.petshop.login', response.data);

  }

}