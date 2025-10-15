/// <mls shortName="organismViewMyPets" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { propertyDataSource } from './_100554_collabDecorators';
import { setState, getState } from '_100554_/l2/collabState';
import { exec } from "./_102019_layer1Exec";
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RequestMDMAdd, MdmType, RegistrationDataPet, RequestMDMAddRelationship, RequestMDMGetById, RequestMDMGetLitstByIds, RequestMDMUpd } from "./_102019_layer4Mdm";

@customElement('petshop--organism-view-my-pets-102009')
export class organismViewMyPets extends IcaOrganismBase {

  private editIndex = -1;

  @state() mdmData: MdmData | undefined;
  @state() scenary = 'list';
  @state() error = '';
  @state() loading: boolean = false;
  @state() myPets: MdmData[] = [];

  @state() filterTp: string = '';
  @state() filterTxt: string = '';

  @propertyDataSource() namePet?: string;
  @propertyDataSource() species?: string;
  @propertyDataSource() breed?: string;


  private specie:Record<string, string> = {
    'dog': "Cachorro",
    'cat': "Gato",
    'bird': "Pássaro",
    'other': "Outro"
  }

  //---------------------------------------------

  firstUpdated() {
    this.init();
  }

  render() {

    if (this.scenary === 'list') return this.renderList();
    return this.renderEdit();
  }

  renderList() {
    return html`
      <div class="organism-view-my-pets section-card"> 
        <section class="pets-list-section">
          <h2>Meus Pets</h2>
          <div class="filters">
            <div class="form-group" style="width:25%">
              <label for="filter-type">Tipo de Pet</label>
              <select id="filter-type" @change=${(e: KeyboardEvent) => { this.filterTp = (e.target as HTMLInputElement).value }}>
                <option value="">Selecione uma espécie</option>
                <option value="dog">Cachorro</option>
                <option value="cat">Gato</option>
                <option value="bird">Pássaro</option>
                <option value="other">Outro</option>
              </select>
            </div>
            <div class="form-group" style="width:25%">
              <label for="filter-name">Nome</label>
              <input type="text" id="filter-name" placeholder="Buscar por nome" @input=${(e: KeyboardEvent) => { this.filterTxt = (e.target as HTMLInputElement).value }}>
            </div>
            <div class="form-group" style="width:50%">
              <button style="margin-top:30px; margin-left:auto" class="btn btn-save" @click=${() => {this.editIndex = -1; this.changeScneray('add')}}>Adicionar Novo Pet</button>
            </div>
          </div>
          
          <table class="pets-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              ${this.myPets.map((pet, index) => this.renderItem(pet,index))}  
            </tbody>
          </table>
        </section>
      </div>`;
  }

  renderItem(pet: MdmData, idx: number) {

    const reg = (pet.data.registrationData as RegistrationDataPet);
    const filter = reg.species + reg.name.toLocaleLowerCase(); 

    return html`
      <tr style="display:${filter.indexOf(this.filterTp+this.filterTxt.toLocaleLowerCase()) >= 0 ? '' : 'none'} ">
        <td>${reg.name}</td>
        <td>${this.specie[reg.species || 'other'] || ''}</td>
        <td><span @click=${() => this.edit(idx)}>Editar</span></td>
      </tr>
    `;
  }

  renderEdit() {
    return html`
        <div class="organism-view-my-pets section-card"> 
          <section class="pet-form-section">
            <div>
              <h2>Cadastrar/Editar Pet</h2>
      
                <div class="form-group">
                  <label for="pet-name">Nome</label>
                  <input type="text" id="pet-name" .value=${this.namePet} @input=${(e: KeyboardEvent) => { this.namePet = (e.target as HTMLInputElement).value }}>
                </div>
                <div class="form-group">
                  <label for="pet-type">Espécie</label>
                  <select ?disabled=${this.loading} .value=${this.species}  @change=${(e: KeyboardEvent) => { this.species = (e.target as HTMLInputElement).value }} >
                    <option value="">Selecione uma espécie</option>
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                    <option value="bird">Pássaro</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="pet-breed">Raça</label>
                  <input  type="text" .value=${this.breed}  placeholder="Digite a raça ou SRD - Sem Raça Definida" ?disabled=${this.loading} @input=${(e: KeyboardEvent) => { this.breed = (e.target as HTMLInputElement).value }} >
                </div>
                <div class="form-actions" >
                  <button class="btn btn-back" @click=${() => this.changeScneray('list')}>Cancelar</button>
                  <button class="btn btn-save" @click=${this.handleClickSave}>Salvar   ${this.loading ? html`<span class="loading"></span>` : html``}</button>
                </div>
                ${this.error ? html`<div style="text-align:center">${this.error}</div>` : ''}
          
            </div>
          </section>
        </div>`;
  }

  //------------------------------------

  private async init() {
    this.mdmData = getState('ui.petshop.login');
    this.myPets = getState('ui.petshop.client.myPets') || [];
    this.getMyPets();
  }

  private changeScneray(scenary: string) {
    this.namePet = '';
    this.species = '';
    this.breed = '';
    this.editIndex = -1;
    this.scenary = scenary;
  }

  private edit(index: number) {

    if ( !this.myPets[index]) {
      return
    }
    
    this.changeScneray('add');
    const mdmUpd = { ...this.myPets[index] };
    this.namePet = (mdmUpd.data.registrationData as RegistrationDataPet).name;
    this.species = (mdmUpd.data.registrationData as RegistrationDataPet).species;
    this.breed = (mdmUpd.data.registrationData as RegistrationDataPet).breed;
    this.editIndex = index;
  }

  private async handleClickSave() {

    if (this.editIndex > -1) {
      await this.updateReg();
      return;
    }

    if (!this.mdmData) {
      this.error = 'Nenhum cliente selecionado!';
      return
    }

    if (!this.namePet) {
      this.error = 'Nome é obrigatório.';
      return
    }
    if (!this.species) {
      this.error = 'Espécie é obrigatório.';
      return
    }
    if (!this.breed) {
      this.error = 'Raça é obrigatório.';
      return
    }

    this.loading = true;

    const params: MdmData = {
      data: {
        registrationData: {
          name: this.namePet,
          species: this.species,
          breed: this.breed
        } as RegistrationDataPet,
        type: MdmType.PET,
        status: 'A'
      }
    }
    const req: RequestMDMAdd = {
      action: 'MDMAdd',
      inDeveloped: true,
      version: '1',
      params,
    };

    const response = await exec(req);

    if (!response.ok) {
      this.error = response.error || 'Error';
      this.loading = false;
      return;
    }
    this.loading = false;
    this.error = 'Cadastro realizado com sucesso';

    await this.addRelationship(response.data);

    this.changeScneray('list');
  }

  private async updateReg() {

    if (this.editIndex < 0 || !this.myPets[this.editIndex]) {
      this.error = 'Nenhum pet selecionado!';
      return
    }

    if (!this.mdmData) {
      this.error = 'Nenhum cliente selecionado!';
      return
    }
    if (!this.namePet) {
      this.error = 'Nome é obrigatório.';
      return
    }
    if (!this.species) {
      this.error = 'Espécie é obrigatório.';
      return
    }
    if (!this.breed) {
      this.error = 'Raça é obrigatório.';
      return
    }

    this.loading = true;

    const mdmUpd = { ...this.myPets[this.editIndex] };

    (mdmUpd.data.registrationData as RegistrationDataPet).name = this.namePet;
    (mdmUpd.data.registrationData as RegistrationDataPet).species = this.species;
    (mdmUpd.data.registrationData as RegistrationDataPet).breed = this.breed;

    
    const req: RequestMDMUpd = {
      action: 'MDMUpd',
      inDeveloped: true,
      version: '1',
      params:mdmUpd,
    };

    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error || 'Error';
      this.loading = false;
      this.changeScneray('list');
      this.editIndex = -1;
      return;
    }
    this.loading = false;
    this.error = 'Cadastro atualizado com sucesso';
    this.editIndex = -1;
    await this.getMyPets();
    this.changeScneray('list');

  }

  private async addRelationship(pet: MdmData) {

    if (!pet || !this.mdmData) {
      this.error = 'Falata parametros para fazer o relacionamento';
      return;
    }

    const param = {
      mdmOri: this.mdmData.id,
      tpOri: 'R_PF_OWNER_OF_PET',
      mdmDest: pet.id,
      tpDest: 'R_PET_OWNED_BY'
    } as any;

    const req: RequestMDMAddRelationship = {
      action: 'MDMAddRelationship',
      inDeveloped: true,
      version: '1',
      params: param
    };

    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error as string;
      this.loading = false;
      return;
    }

    await this.updateMyStates();
    return;

  }

  private async updateMyStates() {

    if (!this.mdmData) {
      this.error = 'Falata parametros para atualizar';
      return;
    }

    const req: RequestMDMGetById = {
      action: 'MDMGetById',
      inDeveloped: true,
      version: '1',
      params: { id: this.mdmData.id || '' }
    };

    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error as string;
      this.loading = false;
      return;
    }

    this.mdmData = response.data;

    setState('ui.petshop.login', this.mdmData);

    await this.getMyPets();

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


}
