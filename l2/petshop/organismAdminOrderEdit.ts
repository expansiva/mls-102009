/// <mls shortName="organismAdminOrderEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { petshopExec } from "./_102009_layer1Exec";
import { exec } from "./_102019_layer1Exec";

import { RequestServiceOrderUpd } from './_102009_layer4ServiceOrderBase'
import { ServiceOrderData, ServiceOrderStatus } from './_102009_layer4ServiceOrder'
import { MdmData, RegistrationDataService, RegistrationDataPF, RegistrationDataPJ, MdmType, ServiceData, ServiceRecord } from "./_102019_layer4Mdm";
import { RequestMDMGetListByIds, RequestMDMGetById } from "./_102019_layer4ResReq";

@customElement('petshop--organism-admin-order-edit-102009')
export class organismAdminOrderEdit extends IcaOrganismBase {

    @state() loading: boolean = false;
    @state() orderData?: ServiceOrderData;
    @state() employees: MdmData[] = [];
    @state() service?: MdmData;

    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;

    async firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        const data: ServiceOrderData = getState('ui.petshop.admin.order.selected');
        this.orderData = data;
        const serviceId = data.data.serviceMdmId;
        await this.getService(serviceId);
        await this.getEmployers();
    }

    render() {
        return html`
        <div class="form-container">
            <h2>Editar Ordem de Serviço</h2>
            <div class="form-group">
                <label for="status">Status</label>
                <select id="status" @change=${this.onChangeStatus}>
                    <option value="WAITING">Aguardando serviço</option>
                    <option value="IN_PROGRESS">Em Andamento</option>
                    <option value="READY_FOR_COLLECTION">Pronto para Retirada</option>
                    <option value="BILLED">Faturado</option>
                    <option value="CANCELED">Cancelado</option>
                </select>
            </div>
            <div class="form-group">
                <label for="service">Serviço</label>
                <input type="text" id="service" value=${(this.service?.data.registrationData as RegistrationDataService)?.name} readonly >
            </div>
            <div class="form-group">
                <label for="pet">Pet</label>
                <input type="text" id="pet" value="${this.orderData?.data.jsonBin.pet.name}" readonly>
            </div>
            <div class="form-group">
                <label for="client">Cliente</label>
                <input type="text" id="client" value="${this.orderData?.data.jsonBin.client.name}" readonly>
            </div>
            <div class="form-group">
                <label for="employee">Funcionário</label>
                <select id="employees"
                    ?disabled=${this.loading}
                    value=${this.employees.findIndex((item) => item.id === this.orderData?.data.employeeMdmId)}
                    @change=${(e: MouseEvent) => this.onChangeEmployer}
                >
                    ${this.employees.map((item, index) => {
            const name = item.data.type === MdmType.PessoaFisica ? (item.data.registrationData as RegistrationDataPF).name : (item.data.registrationData as RegistrationDataPJ).fantasyName;
            return html`<option value=${index}> ${name}</option>`
        })}
                </select>
            </div>
            <div class="form-group">
                <label for="value">Valor</label>
                <input
                    type="number"
                    id="value"
                    value=${this.orderData?.data.totalAmount}
                    @change=${this.onChangeBilling}
                >
            </div>
            <div class="form-actions">
                <button class="btn btn-back">Voltar</button>
                <button class="btn btn-save" @click=${this.handleSave} ?disabled=${this.loading}>
                    Salvar
                    ${this.loading ? html`<span class="loading"></span>` : html``}
                </button>
            </div>
            ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}
            ${this.labelOk ? html`<span class="ok-message">${this.labelOk}</span>` : ''}

        </div>`
    }

    private onChangeStatus(e: MouseEvent) {
        const value = (e.target as HTMLSelectElement).value;
        if (!this.orderData) return;
        this.orderData.data.status = value as ServiceOrderStatus;
    }

    private onChangeBilling(e: MouseEvent) {
        const value = (e.target as HTMLSelectElement).value;
        if (!this.orderData) return;
        this.orderData.data.totalAmount = Number.parseFloat(value)
    }

    private onChangeEmployer(e: MouseEvent) {
        const value = (e.target as HTMLSelectElement).value;
        if (!this.orderData) return;
        const selected = this.employees[+value];
        if (!selected || !selected.id) return;
        this.orderData.data.employeeMdmId = selected.id;
        const name = selected.data.type === MdmType.PessoaFisica ? (selected.data.registrationData as RegistrationDataPF).name : (selected.data.registrationData as RegistrationDataPJ).fantasyName;
        this.orderData.data.jsonBin.employee.name = name;
    }

    private async getService(id: number) {

        const req: RequestMDMGetById = {
            action: 'MDMGetById',
            inDeveloped: true,
            version: '1',
            params: { id }
        };

        const response = await exec(req);
        if (!response.ok) {
            this.labelError = response.error || 'Não encontrado informações do serviço';
            return;
        }
        this.service = response.data;

    }

    private async getEmployers() {

        const ids: number[] = [];

        if (!this.service) {
            this.labelError = 'Não encontrado informações do serviço';
            return;
        }

        if (this.service.data.relationships) {
            this.service.data.relationships.forEach((r) => {
                ids.push(r.relatedMdmId);
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
            return;
        }
        this.employees = response.data.filter((item: any) => item != null);

    }

    private async handleSave() {

        if (!this.orderData) {
            this.labelError = 'Não encontrado informações da ordem de serviço';
            return;
        }

        this.labelError = '';
        this.loading = true;
        const req: RequestServiceOrderUpd = {
            action: 'ServiceOrderUpd',
            inDeveloped: true,
            version: '1',
            params: this.orderData
        };
        const response = await petshopExec(req);
        this.loading = false;

        if (!response.ok) {
            this.labelError = response.error as string;
            return;
        }

        this.labelOk = 'Ordem de serviço atualizada com sucesso';

    }
}