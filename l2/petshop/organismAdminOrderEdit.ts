/// <mls shortName="organismAdminOrderEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { petshopExec } from "./_102009_layer1Exec";
import { exec } from "./_102019_layer1Exec";

import { ServiceOrderRecord as ServiceOrderData, ServiceOrderStatus, RequestServiceOrderUpd} from "./_102009_commonGlobal";
import { MdmRecord, RegistrationDataService, RegistrationDataPF, RegistrationDataPJ, MdmType, ServiceData, ServiceRecord, RequestMDMGetListByIds, RequestMDMGetById } from "./_102019_commonGlobal";

@customElement('petshop--organism-admin-order-edit-102009')
export class organismAdminOrderEdit extends IcaOrganismBase {
    @state() loading: boolean = false;
    @state() orderData?: ServiceOrderData;
    @state() employees: MdmRecord[] = [];
    @state() service?: MdmRecord;
    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;
    async firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        const data: ServiceOrderData = getState('ui.petshop.admin.order.selected');
        this.orderData = data;
        const serviceId = data.details.serviceProvided.serviceMdmId;
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
<input type="text" id="service" .value=${(this.service?.details.registrationData as RegistrationDataService)?.name} readonly >
</div>
<div class="form-group">
<label for="pet">Pet</label>
<input type="text" id="pet" .value="${this.orderData?.details.pet.name}" readonly>
</div>
<div class="form-group">
<label for="client">Cliente</label>
<input type="text" id="client" .value="${this.orderData?.details.client.name}" readonly>
</div>
<div class="form-group">
<label for="employee">Funcionário</label>
<select id="employees"
?disabled=${this.loading}
.value=${this.employees.findIndex((item) => item.id === this.orderData?.details.employee.employeeMdmId)}
@change=${this.onChangeEmployer}
>
${this.employees.map((item, index) => {
            const name = item.details.type === MdmType.PessoaFisica ? (item.details.registrationData as RegistrationDataPF).name : (item.details.registrationData as RegistrationDataPJ).fantasyName;
            return html`<option value=${index}> ${name}</option>`
        })}
</select>
</div>
<div class="form-group">
<label for="value">Valor</label>
<input
type="number"
id="value"
.value=${this.orderData?.details.totalAmount}
@change=${this.onChangeBilling}
>
</div>
<div class="form-actions">
<a id="link-back" href="/pageAdminEditScheduling" class="btn btn-back" ?disabled=${this.loading}>Voltar</a>
<button class="btn btn-save" @click=${this.handleSave} ?disabled=${this.loading}>
Salvar
${this.loading ? html`<span class="loading"></span>` : html``}
</button>
</div>
${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}
${this.labelOk ? html`<span class="ok-message">${this.labelOk}</span>` : ''}
</div>`
    }
    private onChangeStatus(e: Event) {
        const value = (e.target as HTMLSelectElement).value;
        if (!this.orderData) return;
        this.orderData.details.status = value as ServiceOrderStatus;
    }
    private onChangeBilling(e: Event) {
        const value = (e.target as HTMLInputElement).value;
        if (!this.orderData) return;
        this.orderData.details.totalAmount = Number.parseFloat(value)
    }
    private onChangeEmployer(e: Event) {
        const value = (e.target as HTMLSelectElement).value;
        if (!this.orderData) return;
        const selected = this.employees[+value];
        if (!selected || !selected.id) return;
        this.orderData.details.employee.employeeMdmId = selected.id;
        const name = selected.details.type === MdmType.PessoaFisica ? (selected.details.registrationData as RegistrationDataPF).name : (selected.details.registrationData as RegistrationDataPJ).fantasyName;
        this.orderData.details.employee.name = name;
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
        if (this.service.details.relationships) {
            this.service.details.relationships.forEach((r) => {
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