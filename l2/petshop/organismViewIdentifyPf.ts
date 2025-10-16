/// <mls shortName="organismViewIdentifyPf" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { RequestMDMUpd  } from "./_102019_layer4ResReq";
import { MdmData, RegistrationDataPF, Address, MdmAddresType } from "./_102019_layer4Mdm";


@customElement('petshop--organism-view-identify-pf-102009')
export class organismViewIdentifyPf extends IcaOrganismBase {

  @state() mdm: MdmData | undefined;
  @state() loading: boolean = false;
  @state() error?: string = '';

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
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NDQxMTUzMXww&ixlib=rb-4.1.0&q=80&w=200" alt="Foto de Perfil">
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
    this.name = (this.mdm.data.registrationData as RegistrationDataPF).name;
    this.cpf = (this.mdm.data.registrationData as RegistrationDataPF).cpf;
    this.email = this.mdm.data.contactData?.email || '';
    this.telefone = this.mdm.data.contactData?.phone ? this.mdm.data.contactData?.phone[0].number : '';

    if (this.mdm.data.addresses && this.mdm.data.addresses.length > 0) {
      this.rua = this.mdm.data.addresses[0].street;
      this.bairro = this.mdm.data.addresses[0].neighborhood;
      this.cidade = this.mdm.data.addresses[0].city;
      this.estado = this.mdm.data.addresses[0].stateProvince;
      this.numero = this.mdm.data.addresses[0].number;
    }

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

    const dataToUpd: MdmData | undefined = { ... this.mdm } as MdmData;
    const rgData = dataToUpd.data?.registrationData as RegistrationDataPF;
    rgData.cpf = this.cpf as string;
    rgData.name = this.name as string;

    if (dataToUpd.data.addresses && dataToUpd.data.addresses.length > 0) {
      dataToUpd.data.addresses[0].street = this.rua || '';
      dataToUpd.data.addresses[0].neighborhood = this.bairro || '';
      dataToUpd.data.addresses[0].city = this.cidade || '';
      dataToUpd.data.addresses[0].stateProvince = this.estado || '';
      dataToUpd.data.addresses[0].number = this.numero || '';
    } else {

      dataToUpd.data.addresses = [
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

    if (dataToUpd.data.contactData && dataToUpd.data.contactData.phone && dataToUpd.data.contactData.phone.length > 0) {
      dataToUpd.data.contactData.phone[0].number = this.telefone || '';
      dataToUpd.data.contactData.email = this.email;

    } else {

      if (!dataToUpd.data.contactData) dataToUpd.data.contactData = { phone: [] };
      dataToUpd.data.contactData.phone = [
        { type: 'Residencial', number: this.telefone || '' }
      ];
      dataToUpd.data.contactData.email = this.email;
    }

    const params: MdmData = dataToUpd;
    const req: RequestMDMUpd = {
      action: 'MDMUpd',
      inDeveloped: true,
      version: '1',
      params,
    };

    const response = await exec(req);
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