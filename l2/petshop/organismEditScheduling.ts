/// <mls shortName="organismEditScheduling" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { petshopExec } from "./_102009_layer1Exec";
import { RequestSchedulingUpd, RequestServiceOrderAdd, RequestServiceOrderGetById, SchedulingRecord, SchedulingStatus, ServiceOrderRecord, ServiceOrderStatus } from './_102009_commonGlobal'
import { exec } from "./_102019_layer1Exec";
import { MdmRecord, MdmType, RegistrationDataPF, RegistrationDataPJ, RegistrationDataService, ServiceRecord, RequestMDMGetListByIds, RequestMDMGetById } from "./_102019_commonGlobal";

@customElement('petshop--organism-edit-scheduling-102009')
export class organismEditScheduling extends IcaOrganismBase {

    @state() loadingCancel: boolean = false;
    @state() loadingConfirm: boolean = false;
    @state() schedulingData?: SchedulingRecord;
    @state() employees: MdmRecord[] = [];
    @state() employerSelected?: MdmRecord;
    @state() service?: MdmRecord;
    @state() orderData?: ServiceOrderRecord;

    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;

    async firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        const data: SchedulingRecord = getState('ui.petshop.admin.scheduling.selected');
        this.schedulingData = data;
        await this.getService(data.details.service.serviceMdmId);
        await this.getEmployers();
        if (this.schedulingData.details.serviceOrderId) {
            this.getOrderData(this.schedulingData.details.serviceOrderId);
        }
    }

    render() {
        const statusText = this.schedulingData?.details.status === SchedulingStatus.CONFIRMED ? 'Confirmado' : this.schedulingData?.details.status === SchedulingStatus.CANCELED ? 'Cancelado' : 'Pendente';
        const isPending = this.schedulingData?.details.status === SchedulingStatus.PENDING;
        return html`
        <div class="section-card">
        <h3>Detalhes do Agendamento</h3>
        <ul class="scheduling-summary">
            <li>Nome do Cliente: <span>${this.schedulingData?.details.tutor.name || ''}</span></li>
            <li>Nome do Serviço: <span>${this.schedulingData?.details.service.name || ''}</span></li>
            <li>Pet: <span>${this.schedulingData?.details.pet.name || ''}</span></li>
            <li>Data: <span>${new Date(this.schedulingData?.details.startDateTime || '').toLocaleString() || ''}</span></li>
            <li>Status: <span>${statusText}</span></li>

            ${this.schedulingData?.details.status === SchedulingStatus.PENDING ? html`
                    <li class="li-edit">

                        <div class="form-group">
                            <select id="employees"
                                ?disabled=${this.loadingCancel || this.loadingConfirm}
                                @change=${(e: MouseEvent) => { this.employerSelected = this.employees[+((e.target as HTMLInputElement).value)] }}
                                
                            >
                                <option value="">Selecione o funcionário</option>
                                ${this.employees.map((item, index) => {
            const name = item.details.type === MdmType.PessoaFisica ? (item.details.registrationData as RegistrationDataPF).name : (item.details.registrationData as RegistrationDataPJ).fantasyName;
            return html`<option value=${index}> ${name}</option>`
        })}
                            </select>
                        </div>
                    </li>
                ` : ''
            }
        </ul>
        <div class="form-actions">
            ${this.schedulingData?.details.status === SchedulingStatus.PENDING ?
                html`
                    <button class="btn btn-delete" @click=${this.handleClickCancel} ?disabled=${this.loadingCancel || this.loadingConfirm} ?hidden=${!isPending}>
                        Recusar Serviço
                        ${this.loadingCancel ? html`<span class="loading"></span>` : html``}
                </button>`: ''


            }
            ${this.schedulingData?.details.status === SchedulingStatus.PENDING ?
                html`<button class="btn btn-save" @click=${this.handleClickGenerateOS} ?disabled=${this.loadingConfirm || this.loadingCancel} ?hidden=${!isPending}>
                    Aprovar Serviço
                    ${this.loadingConfirm ? html`<span class="loading"></span>` : html``}
                </button>` : ''}
        </div>

        </div>
        ${this.renderOrderService()}

        ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}

        `
    }

    private renderOrderService() {
        const status: Record<string, string> = {
            WAITING: 'Aguardando serviço',
            IN_PROGRESS: 'Em andamento',
            BILLED: 'Faturado',
            CANCELED: 'Cancelado',
            READY_FOR_COLLECTION: 'Pronto para retirada',
        };
        const statusText = status[this.orderData?.details?.status || ''];

        return html`
        
            ${this.schedulingData?.details.serviceOrderId ? html`
                <div class="section-card">
                    <h3>Detalhes Ordem de serviço </h3>

                    <ul class="scheduling-summary">
                        <li>Nome do Funcionario: <span>${this.orderData?.details.employee.name || ''}</span></li>
                        <li>
                            Valor:
                            <span>
                                ${this.orderData?.details.totalAmount != null
                    ? this.orderData.details.totalAmount.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })
                    : ''}
                            </span>
                        </li>

                        <li>Status: <span>${statusText}</span></li>
                        <li><a href="/pageAdminOrderEdit" @click=${() => { setState('ui.petshop.admin.order.selected', this.orderData) }}>Ver detalhes</a></li>

                    </ul>
                </div>
            
            ` : ''}
        `
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

    private async getOrderData(id: number) {

        const req: RequestServiceOrderGetById = {
            action: 'ServiceOrderGetById',
            inDeveloped: true,
            version: '1',
            params: { id }
        };

        const response = await petshopExec(req);
        if (!response.ok) {
            this.labelError = response.error || 'Não encontrado informações da ordem de serviço';
            return;
        }
        this.orderData = response.data;

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

    private async handleClickCancel() {
        this.labelError = '';

        if (!this.schedulingData) {
            this.labelError = 'Nenhum agendamento selecionado!';
            return;
        }
        if (this.schedulingData.details.status !== SchedulingStatus.PENDING) {
            this.labelError = 'Ação permitida apenas para agendamentos pendentes';
            return;
        }
        this.loadingCancel = true;
        this.schedulingData.details.status = SchedulingStatus.CANCELED;
        const req: RequestSchedulingUpd = {
            action: 'SchedulingUpd',
            inDeveloped: true,
            version: '1',
            params: this.schedulingData
        };
        const response = await petshopExec(req);
        this.loadingCancel = false;
        if (!response.ok) {
            this.labelError = response.error as string;
            return;
        }

    }

    private async handleClickGenerateOS() {
        this.labelError = '';
        if (!this.schedulingData || !this.schedulingData.id) {
            this.labelError = 'Nenhum agendamento selecionado!';
            return;
        }

        if (this.schedulingData.details.status !== SchedulingStatus.PENDING) {
            this.labelError = 'Ação permitida apenas para agendamentos pendentes';
            return;
        }

        const agendamentoDate = new Date(this.schedulingData.details.startDateTime);
        const agora = new Date();

        if (agendamentoDate < agora) {
            this.labelError = 'Não é permitido gerar OS para agendamentos com data/hora passada!';
            return;
        }

        if (!this.employerSelected || !this.employerSelected.id) {
            this.labelError = 'Selecionar funcionário';
            return;
        }

        this.loadingConfirm = true;

        const nameEmployer = this.employerSelected.details.type === MdmType.PessoaFisica ? (this.employerSelected.details.registrationData as RegistrationDataPF).name : (this.employerSelected.details.registrationData as RegistrationDataPJ).fantasyName;

        const data: ServiceOrderRecord = {
            details: {
                schedulingId: this.schedulingData.id,
                status: ServiceOrderStatus.WAITING,
                totalAmount: (this.service?.details as ServiceRecord).serviceData?.priceRegular || 0,
                executionDateTime: new Date(Date.now()).toISOString(),
                client:this.schedulingData.details.tutor
                ,
                pet: this.schedulingData.details.pet
                ,
                serviceProvided:
                {   
                    serviceMdmId:this.service?.id || 0,
                    priceCharged: (this.service?.details as ServiceRecord).serviceData?.priceRegular || 0,
                    name: (this.service?.details.registrationData as RegistrationDataService).name || '',
                },
                employee: {
                    employeeMdmId: this.employerSelected.id || 0,
                    name: nameEmployer
                },
                history: [],
                isExternalAuthorization: false,
                notes: ''

            }
        }

        const req: RequestServiceOrderAdd = {
            action: 'ServiceOrderAdd',
            inDeveloped: true,
            version: '1',
            params: data
        };

        const response = await petshopExec(req);
        if (!response.ok) {
            this.labelError = response.error as string;
            return;
        }

        this.orderData = response.data;

        const ok = await this.updateScheduling((response.data as ServiceOrderRecord).id);
        if (ok) {
            this.loadingConfirm = false;
        }

    }

    private async updateScheduling(id: number | undefined) {
        if (!this.schedulingData || !this.schedulingData.id) {
            this.labelError = 'Nenhum agendamento selecionado!';
            return false;
        }

        if (!id) {
            this.labelError = 'Nenhum ordem de serviço encontrada!';
            return false;
        }

        this.schedulingData.details.status = SchedulingStatus.CONFIRMED;
        this.schedulingData.details.serviceOrderId = id;

        const req: RequestSchedulingUpd = {
            action: 'SchedulingUpd',
            inDeveloped: true,
            version: '1',
            params: this.schedulingData
        };

        const response = await petshopExec(req);
        if (!response.ok) {
            this.labelError = response.error as string;
            return false;
        }

        return true;

    }

}