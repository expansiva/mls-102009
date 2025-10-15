/// <mls shortName="organismAdminScheduling" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { exec } from "./_102019_layer1Exec";
import { MdmData, MdmType, RequestMDMGetList, RegistrationDataPF, RegistrationDataPet, RegistrationDataService, RequestMDMGetListByIds, RequestMDMGetListByType } from "./_102019_layer4Mdm";

import { petshopExec } from "./_102009_layer1Exec";
import { RequestSchedulingAdd } from './_102009_layer4SchedulingBase'
import { SchedulingData, SchedulingStatus } from './_102009_layer4Scheduling'

@customElement('petshop--organism-admin-scheduling-102009')
export class organismAdminScheduling extends IcaOrganismBase {

    @state() loading: boolean = false;

    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;

    @propertyDataSource() searchText?: string;
    @propertyDataSource() userSelected?: MdmData;
    @propertyDataSource() petSelected?: MdmData;
    @propertyDataSource() serviceSelected?: MdmData;
    @propertyDataSource() date?: string;

    @propertyDataSource() action?: string;

    @state() users: MdmData[] = [];
    @state() pets: MdmData[] = [];
    @state() services: MdmData[] = [];

    @state() currentStep: 'user-selection' | 'scheduling' = 'user-selection';

    @query('#link-back') link?: HTMLAnchorElement;

    async firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        await this.getServices();
    }

    connectedCallback() {
        super.connectedCallback();
        subscribe([
            'ui.petshop.admin.organismAdminScheduling.action',
        ], this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        unsubscribe([
            'ui.petshop.admin.organismAdminScheduling.action',
        ], this);
    }

    handleIcaStateChange(_key: string, _value: any) {
        if (_key === 'ui.petshop.admin.organismAdminScheduling.action' && _value === 'save') this.handleSave();
        if (_key === 'ui.petshop.admin.organismAdminScheduling.action' && _value === 'search') this.handleSearch();
    }

    render() {
        return html`<div class="scheduling-container">
        ${this.currentStep === 'user-selection' ? this.renderSelectUser() : this.renderAddScheduling()}`
    }

    private renderSelectUser() {
        return html`
        <section>
        <h2>Pesquisar Usuário</h2>
        <div class="form-group">
            <label for="user-search">Buscar por nome, e-mail ou ID</label>
            <input type="text" id="user-search" placeholder="Digite para pesquisar" @input=${(e: KeyboardEvent) => this.searchText = (e.target as HTMLInputElement).value}>
        </div>
        <div class="form-actions"">
            <button class="btn btn-save"  @click="${this.handleSearch}">Pesquisar</button>
        </div>
        <ul class="user-list">
            ${this.users.map((user) => {
            return html`<li class="user-item" @click=${() => this.handleContinue(user)}>${(user.data.registrationData as RegistrationDataPF).name}</li>`
        })}
        </ul>
        ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}

        </section>
`
    }

    private renderAddScheduling() {
        return html`
            <section>
            <h2>Agendamento</h2>
            <div class="form-group">
                <label for="date-select">Cliente</label>
                <input readonly type="text" value="${(this.userSelected?.data.registrationData as RegistrationDataPF).name}"}
            </div>
            <div class="form-group">
                <label for="pet-select">Selecionar Pet</label>
                <select id="pet-select" @change=${(e: MouseEvent) => { this.petSelected = this.pets[+((e.target as HTMLInputElement).value)] }}>
                    <option value="">Escolha um pet</option>
                    ${this.pets.map((pet, index) => html`<option value="${index}">${(pet.data.registrationData as RegistrationDataPet).name}</option>`)}
                </select>
            </div>
            <div class="form-group">
                <label for="date-select">Data</label>
                <input type="datetime-local" id="date-select" value="2025-10-15" @input=${(e: MouseEvent) => { this.date = (e.target as HTMLInputElement).value}}
            </div>
            <div class="form-group">
                <label for="service-select">Serviço</label>
                <select id="service-select" @change=${(e: MouseEvent) => { this.serviceSelected = this.services[+((e.target as HTMLInputElement).value)] }}>
                    <option value="">Escolha um serviço</option>
                    ${this.services.map((pet, index) => html`<option value="${index}">${(pet.data.registrationData as RegistrationDataService).name}</option>`)}
                </select>
            </div>
            <div class="form-actions">
                <button class="btn btn-back" @click="${this.handleBack}">Voltar</button>
                <button class="btn btn-save" @click=${this.handleSave} ?disabled=${this.loading}>
                    Agendar
                    ${this.loading ? html`<span class="loading"></span>` : html``}
                </button>
                <a id="link-back" style="display:none" href="/pageAdminDashboard"></a>
                
            </div>
            ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}

            </section>
`}

    private async handleContinue(user: MdmData) {
        await this.getMyPets(user);
        this.userSelected = user;
        this.currentStep = 'scheduling';
    }

    private handleBack() {
        this.currentStep = 'user-selection';
    }

    private async getMyPets(user: MdmData) {

        if (!user) {
            this.labelError = 'Falta parametros para pegar os pets';
            return;
        }

        const ids: string[] = [];

        if (user.data.relationships) {
            user.data.relationships.forEach((r) => {
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
            this.labelError = response.error as string;
            this.loading = false;
            return;
        }
        this.pets = response.data.filter((item: any) => item != null);

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
            this.labelError = response.error as string;
            this.loading = false;
            return;
        }

        this.services = response.data.filter((item: any) => item != null);

    }

    private async handleSave() {
        this.labelError = '';

        if (!this.userSelected) {
            this.labelError = 'Nenhum cliente selecionado!';
            return;
        }

        if (!this.petSelected) {
            this.labelError = 'Pet obrigatório.';
            return
        }

        if (!this.serviceSelected) {
            this.labelError = 'Selecione um serviço';
            return
        }

        if (!this.date) {
            this.labelError = 'Informe uma data';
            return
        }


        this.loading = true;

        let phoneClient = '';
        if (this.userSelected.data.contactData && this.userSelected.data.contactData.phone) {
            phoneClient = this.userSelected.data.contactData.phone[0].number;
        }

        const params: SchedulingData = {
            data: {
                clientMdmId: this.userSelected.id || '',
                petMdmId: this.petSelected.id || '',
                serviceMdmId: this.serviceSelected.id || '',
                startDateTime: new Date(this.date || '').toISOString(),
                status: SchedulingStatus.PENDING,
                serviceOrderId: null,
                jsonBin: {
                    tutor: {
                        name: (this.userSelected.data.registrationData as RegistrationDataPF).name,
                        phone: phoneClient,
                    },
                    pet: {
                        name: (this.petSelected.data.registrationData as RegistrationDataPet).name,
                        species: (this.petSelected.data.registrationData as RegistrationDataPet).species,
                        breed: (this.petSelected.data.registrationData as RegistrationDataPet).breed,
                        allergies: [],
                    },
                    service: {
                        name: (this.serviceSelected.data.registrationData as RegistrationDataService).name,
                        serviceCode: (this.serviceSelected.data.registrationData as RegistrationDataService).serviceCode,
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
            this.labelError = response.error || 'Error';
            this.loading = false;
            return;
        }
        this.loading = false;
        if (this.link) this.link.click();

    }

    private async handleSearch() {
        this.labelError = '';
        this.loading = true;

        const req: RequestMDMGetList = {
            action: 'MDMGetList',
            inDeveloped: true,
            version: '1',
            params: { filter: this.searchText || '' }
        };

        const mdm = await exec(req);

        if (!mdm.ok) {
            this.labelError = mdm.error || 'Erro';
            this.loading = false;
            return;
        }

        if (!mdm.data) {
            this.labelError = 'Mdm nao encontrado';
            this.loading = false;
            return;
        }
        this.users = (mdm.data as MdmData[]).filter((item) => item.data.type === MdmType.PessoaFisica);
        this.loading = false;

    }
}