/// <mls shortName="organismAdminAddService" project="102009" enhancement="_100554_enhancementLit" folder="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { exec } from "./_102019_layer1Exec";
import { MdmData, MdmType, RegistrationDataService, ServiceRecord } from "./_102019_layer4Mdm";
import { RequestMDMAdd } from "./_102019_layer4ResReq";

@customElement('petshop--organism-admin-add-service-102009')
export class organismAddService extends IcaOrganismBase {

    @state() loading: boolean = false;
    @propertyDataSource() nameService?: string;
    @propertyDataSource() descriptionShort?: string;
    @propertyDataSource() serviceCode?: string;

    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;

    @query('#link-back') link?: HTMLAnchorElement;

    connectedCallback() {
        super.connectedCallback();
        subscribe([
            'ui.petshop.admin.organismAdminAddService.action',
        ], this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        unsubscribe([
            'ui.petshop.admin.organismAdminAddService.action',
        ], this);
    }

    handleIcaStateChange(_key: string, _value: any) {
        if (_key === 'ui.petshop.admin.organismAdminAddService.action' && _value === 'save') this.handleClickSave();
    }

    render() {
        return html`<div id="petshop--organism-add-service-102009-1">
            <h2 id="petshop--organism-add-service-102009-2">Adicionar Novo Serviço</h2>
            <div class="form-group" id="petshop--organism-add-service-102009-3">
                <label for="nome-servico" id="petshop--organism-add-service-102009-4">Nome do Serviço</label>
                <input 
                    type="text" 
                    id="nome-servico" 
                    placeholder="Digite o nome do serviço" 
                    id="petshop--organism-add-service-102009-5"
                    required
                    ?disabled=${this.loading}
                    @input=${(e: KeyboardEvent) => { this.nameService = (e.target as HTMLInputElement).value }}
                >
            </div>
            <div class="form-group" id="petshop--organism-add-service-102009-6">
                <label for="descricao-servico" id="petshop--organism-add-service-102009-7">Descrição</label>
                <textarea 
                    id="descricao-servico" 
                    placeholder="Digite a descrição do serviço" 
                    id="petshop--organism-add-service-102009-8"
                    required
                    ?disabled=${this.loading}
                    @input=${(e: KeyboardEvent) => { this.descriptionShort = (e.target as HTMLInputElement).value }}
                ></textarea>
            </div>
            <div class="form-group" id="petshop--organism-add-service-102009-9">
                <label for="codigo-servico" id="petshop--organism-add-service-102009-10">Código do Serviço</label>
                <input 
                    type="text" 
                    id="codigo-servico" 
                    placeholder="Digite o código único do serviço" 
                    id="petshop--organism-add-service-102009-11"
                    ?disabled=${this.loading}
                    @input=${(e: KeyboardEvent) => { this.serviceCode = (e.target as HTMLInputElement).value }}
                >
            </div>

            <div class="form-actions" id="petshop--organism-add-service-102009-12">
                <button class="btn btn-back" id="petshop--organism-add-service-102009-13" @click=${this.handleClickBack} ?disabled=${this.loading}>Voltar</button>
                <button class="btn btn-save" id="petshop--organism-add-service-102009-14" @click=${this.handleClickSave} ?disabled=${this.loading}>
                    Salvar
                    ${this.loading ? html`<span class="loading"></span>` : html``}
                </button>
                <a id="link-back" style="display:none" href="/pageAdminService"></a>

            </div>
            ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}

</div>`
    }

    private handleClickBack(e: MouseEvent) {
        e.preventDefault();
        if (this.link) {
            this.link.click();
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private clearErrors() {
        this.labelError = '';
    }

    private async handleClickSave() {

        this.clearErrors();

        let hasErrors = false;
        if (!this.nameService) {
            this.labelError = 'Nome do serviço é obrigatório.';
            hasErrors = true;
        }
        else if (!this.descriptionShort) {
            this.labelError = 'Descrição do serviço é obrigatório.';
            hasErrors = true;
        }
        if (!hasErrors) {
            this.loading = true;

            await this.delay(1000);
            const params: MdmData = {
                data: {
                    registrationData: {
                        name: this.nameService,
                        descriptionShort: this.descriptionShort,
                        serviceCode: this.serviceCode
                    } as RegistrationDataService,
                    type: MdmType.Servico,
                    status: 'A'
                } as ServiceRecord
            }
            const req: RequestMDMAdd = {
                action: 'MDMAdd',
                inDeveloped: true,
                version: '1',
                params,
            };

            const response = await exec(req);
            if (!response.ok) {
                this.labelError = response.error;
                this.loading = false;
                return;
            }
            this.loading = false;
            this.labelOk = 'Cadastro realizado com sucesso';

            if (this.link) {
                this.link.click();
            }
        }
    }

}