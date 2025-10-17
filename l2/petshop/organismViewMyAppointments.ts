/// <mls shortName="organismViewMyAppointments" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { setState, getState } from '_100554_/l2/collabState';
import { petshopExec } from "./_102009_layer1Exec";
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { SchedulingData, SchedulingStatus } from './_102009_layer4Scheduling'
import { RequestSchedulingGetByClient, RequestSchedulingUpd } from './_102009_layer4SchedulingBase'
import { MdmData } from "./_102019_layer4Mdm";  

@customElement('petshop--organism-view-my-appointments-102009')
export class organismViewMyAppointments extends IcaOrganismBase {

    @state() scenary = 'list';
    @state() mdmData: MdmData | undefined;
    @state() scheduling: SchedulingData[] = [];
    @state() error = '';
    @state() indexDetail = -1;

    @state() filterData: string = ''; 

    //-------------------------------

    firstUpdated() {
        this.init();
    }

    render() {

        if (this.scenary === 'list') return this.renderList();
        return this.renderEdit();
    }

    renderList() {
        return html`
        <div class="form-container">
            <h2>Meus Agendamentos</h2>
            <div style="display:flex">
                <div class="form-group" style="width:70%">
                    <label for="date-filter">Filtrar por Data</label>
                    <input type="date" id="date-filter" name="date-filter" @change=${(e:any)=> this.filterData = e.target.value}>
                </div>
                <div class="form-group" style="width:30%; display: flex; align-items: end; justify-content: end;">
                    <a href="/pageAppointments" class="btn btn-save">Novo agendamento</a>
                    
                </div>
            </div>
            <div class="section-card">
                <table>
                    <thead>
                        <tr>
                            <th>Pet</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Serviço</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.scheduling.map((sch, index) => this.renderItem(sch, index))}
                    </tbody>
                </table>
            </div>
        </div>`
    }

    renderItem(sch: SchedulingData, index: number) {

        const data = this.getDataHorario(sch.data.startDateTime);

        const stateCLS = {
            'PENDING': 'status--pending',
            'CONFIRMED': 'status--approved',
            'CANCELED': 'status--cancelled',
            'COMPLETED': 'status--approved',
        }

        const stateLabel = {
            'PENDING': 'Pendente',
            'CONFIRMED': 'Aprovado',
            'CANCELED': 'Cancelado',
            'COMPLETED': 'Completo',
        } 

        let display = '';
        if (this.filterData !== '') {
            display = this.filterData === data.vl ? '' : 'none';
        }

        return html`
        <tr style="display:${display}">
            <td>${sch.data.jsonBin.pet.name}</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>${sch.data.jsonBin.service.name}</td>
            <td><span class="status ${stateCLS[sch.data.status]}">${stateLabel[sch.data.status]}</span></td>
            <td><span class="det" @click=${() => { this.indexDetail = index; this.changeScneray('add')}}>Detalhes</span></td>
        </tr>`;
    }

    renderEdit() {

        const sch = this.scheduling[this.indexDetail];

        if (!sch) return html`<div>
            <div class="section-card">
                <h2>Detalhes do Agendamento</h2>
                <div class="form-group">
                    Nenhum agendamento selecionado
                </div>
                <div class="form-actions">
                    <button class="btn btn-back" @click=${() => this.changeScneray('list')}>Voltar à Lista</button>
                </div>
            </div>
        </div>`;

        const data = this.getDataHorario(sch.data.startDateTime);

        const stateLabel = {
            'PENDING': 'Pendente',
            'CONFIRMED': 'Aprovado',
            'CANCELED': 'Cancelado',
            'COMPLETED': 'Completo',
        }

        return html`
        <div>
            <div class="section-card">
                <h2>Detalhes do Agendamento</h2>
                <div class="form-group">
                    <label>Data:</label>
                    <span class="field-value">${data.date}</span>
                </div>
                <div class="form-group">
                    <label>Horário:</label>
                    <span class="field-value">${data.time}</span>
                </div>
                <div class="form-group">
                    <label>Serviço:</label>
                    <span class="field-value">${sch.data.jsonBin.service.name}</span>
                </div>
                <div class="form-group">
                    <label>Pet:</label>
                    <span class="field-value">${sch.data.jsonBin.pet.name}</span>
                </div>
                <div class="form-group">
                    <label>Status:</label>
                    <span class="field-value">${stateLabel[sch.data.status]}</span>
                </div>
                <div class="form-actions">
                    <button class="btn btn-delete" @click=${()=> this.handleClickCancel()} >Cancelar Agendamento</button>
                    <button class="btn btn-back" @click=${() => this.changeScneray('list')}>Voltar à Lista</button>
                </div>
                ${this.error ? html`<div style="text-align:center">${this.error}</div>` : ''}
            </div>
        </div>`
    }

    //---------------------------

    private async init() {
        this.mdmData = getState('ui.petshop.login');
        this.scheduling = getState('ui.petshop.client.scheduling') || [];
        this.loadInfos();
    }

    private async loadInfos() {
        await this.getScheduling();
    }

    private async getScheduling() {

        if (!this.mdmData) {
            this.error = 'Falta parametros para pegar os pets';
            return;
        }


        const req: RequestSchedulingGetByClient = {
            action: 'SchedulingGetByClient',
            inDeveloped: true,
            version: '1',
            params: { clientId: this.mdmData.id || 0 }
        };

        const response = await petshopExec(req);
        if (!response.ok) {
            this.error = response.error as string;
            return;
        }

        this.scheduling = response.data.filter((item: any) => item != null);

        setState('ui.petshop.client.scheduling', this.scheduling);

    }

    private changeScneray(scenary: string) {
        this.error = '';
        this.scenary = scenary;
    }

    private getDataHorario(data: string): { date: string, time: string, vl:string } {

        const dateObj = new Date(data);
        const year = dateObj.getUTCFullYear();
        const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
        const day = String(dateObj.getUTCDate()).padStart(2, "0");
        const hours = String(dateObj.getUTCHours()).padStart(2, "0");
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
        const date = `${day}/${month}/${year}`;
        const time = `${hours}:${minutes}`;
        const vl = `${year}-${month}-${day}`;

        return { date, time, vl };
    }

    private async handleClickCancel() {

        const sch = this.scheduling[this.indexDetail];
        if (!sch) {
            this.error = 'Nenhum agendamento selecionado!';
            return;
        } 

        if (sch.data.status === SchedulingStatus.CANCELED) {
            this.error = 'Não pode alterar o status de um agendamento cancelado!';
            return;
        }

        sch.data.status = SchedulingStatus.CANCELED;

        const req: RequestSchedulingUpd = {
            action: 'SchedulingUpd',
            inDeveloped: true,
            version: '1',
            params: sch
        };

        const response = await petshopExec(req);
        if (!response.ok) {
            this.error = response.error as string;
            return;
        }

        this.changeScneray('list');
        
    }
}