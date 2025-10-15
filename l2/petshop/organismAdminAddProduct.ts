/// <mls shortName="organismAdminAddProduct" project="102009" enhancement="_100554_enhancementLit" folder="petshop" />

import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { exec } from "./_102019_layer1Exec";
import { MdmData, RequestMDMAdd, MdmType, RegistrationDataProduct } from "./_102019_layer4Mdm";

@customElement('petshop--organism-admin-add-product-102009')
export class organismAddProduct extends IcaOrganismBase {

    @state() loading: boolean = false;
    @propertyDataSource() nameProduct?: string;
    @propertyDataSource() descriptionShort?: string;

    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;

    @query('#link-back') link?: HTMLAnchorElement;

    connectedCallback() {
        super.connectedCallback();
        subscribe([
            'ui.petshop.admin.organismAdminAddProduct.action',
        ], this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        unsubscribe([
            'ui.petshop.admin.organismAdminAddProduct.action',
        ], this);
    }

    handleIcaStateChange(_key: string, _value: any) {
        if (_key === 'ui.petshop.admin.organismAdminAddProduct.action' && _value === 'save') this.handleClickSave();
    }


    render() {
        return html`<div>
            <h2>Adicionar Novo Produto</h2>
            <div class="form-group">
                <label for="product-name">Nome do Produto</label>
                <input 
                    type="text" 
                    id="product-name" 
                    name="product-name" 
                    required
                    ?disabled=${this.loading}
                    @input=${(e: KeyboardEvent) => { this.nameProduct = (e.target as HTMLInputElement).value }}
                    >
            </div>
            <div class="form-group">
                <label for="product-description">Descrição do Produto</label>
                <textarea 
                    id="product-description" 
                    name="product-description"
                    ?disabled=${this.loading}
                    @input=${(e: KeyboardEvent) => { this.descriptionShort = (e.target as HTMLInputElement).value }}    
                ></textarea>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-back" @click=${this.handleClickBack} ?disabled=${this.loading}>Voltar</button>
                <button type="submit" class="btn btn-save" @click=${this.handleClickSave} ?disabled=${this.loading}>
                    Salvar
                    ${this.loading ? html`<span class="loading"></span>` : html``}
                </button>
                <a id="link-back" style="display:none" href="/pageAdminProduct"></a>
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
        if (!this.nameProduct) {
            this.labelError = 'Nome do produto é obrigatório.';
            hasErrors = true;
        }
        else if (!this.descriptionShort) {
            this.labelError = 'Descrição do produto é obrigatório.';
            hasErrors = true;
        }

        if (!hasErrors) {
            this.loading = true;
            await this.delay(1000);
            const params: MdmData = {
                data: {
                    registrationData: {
                        name: this.nameProduct,
                        descriptionShort: this.descriptionShort,
                    } as RegistrationDataProduct,
                    type: MdmType.Produto,
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