/// <mls shortName="organismAdminProductEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { exec } from "./_102019_layer1Exec";
import { MdmData, MdmType, RegistrationDataProduct, ProductData, ProductRecord } from "./_102019_layer4Mdm";
import { RequestMDMUpd } from "./_102019_layer4ResReq";

@customElement('petshop--organism-admin-product-edit-102009')
export class organismAdminProductEdit extends IcaOrganismBase {

    @state() loading: boolean = false;
    @state() mdmData?: MdmData;
    @propertyDataSource() nameProduct?: string;
    @propertyDataSource() descriptionShort?: string;
    @propertyDataSource() sku?: string;
    @propertyDataSource() barcode?: string;
    @propertyDataSource() category?: string;
    @propertyDataSource() subcategory?: string;
    @propertyDataSource() unitOfMeasure?: string;
    @propertyDataSource() petSuitability?: string[];
    @propertyDataSource() productDetails?: string;
    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;
    @query('#link-back') link?: HTMLAnchorElement;

    firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        const data: MdmData = getState('ui.petshop.admin.product.selected');
        this.mdmData = data;
    }

    render() {
        return html`<div class="form-container" id="petshop--organism-admin-product-edit-102009-1">
        <h2 id="petshop--organism-admin-product-edit-102009-2">Editar Produto</h2>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-3">
            <label for="name" id="petshop--organism-admin-product-edit-102009-4">Nome</label>
            <input
                type="text"
                id="name"
                id="petshop--organism-admin-product-edit-102009-5"
                ?disabled=${this.loading}
                .value=${this.nameProduct || ''}
                @input=${this.handleInputChange}
            >
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-6">
            <label for="descriptionShort" id="petshop--organism-admin-product-edit-102009-7">Descrição Curta</label>
            <textarea id="descriptionShort" id="petshop--organism-admin-product-edit-102009-8"
                ?disabled=${this.loading}
                .value=${this.descriptionShort || ''}
                @input=${this.handleInputChange}
            ></textarea>
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-9">
            <label for="sku" id="petshop--organism-admin-product-edit-102009-10">SKU</label>
            <input type="text" id="sku" id="petshop--organism-admin-product-edit-102009-11"
                ?disabled=${this.loading}
                .value=${this.sku || ''}
                @input=${this.handleInputChange}
            >
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-12">
            <label for="barcode" id="petshop--organism-admin-product-edit-102009-13">Código de Barras</label>
            <input type="text" id="barcode" id="petshop--organism-admin-product-edit-102009-14"
                ?disabled=${this.loading}
                .value=${this.barcode || ''}
                @input=${this.handleInputChange}
            >
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-15">
            <label for="category" id="petshop--organism-admin-product-edit-102009-16">Categoria</label>
            <input type="text" id="category" id="petshop--organism-admin-product-edit-102009-17"
                ?disabled=${this.loading}
                .value=${this.category || ''}
                @input=${this.handleInputChange}
            >
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-18">
            <label for="subcategory" id="petshop--organism-admin-product-edit-102009-19">Subcategoria</label>
            <input type="text" id="subcategory" id="petshop--organism-admin-product-edit-102009-20"
                ?disabled=${this.loading}
                .value=${this.subcategory || ''}
                @change=${this.handleInputChange}
            >
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-21">
            <label for="unitOfMeasure" id="petshop--organism-admin-product-edit-102009-22">Unidade de Medida</label>
            <select id="unitOfMeasure" id="petshop--organism-admin-product-edit-102009-23"
                ?disabled=${this.loading}
                .value=${this.unitOfMeasure || ''}
                @change=${this.handleInputChange}
            >
                <option value="kg">kg</option>
                <option value="un">un</option>
            </select>
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-24">
            <label for="petSuitability" id="petshop--organism-admin-product-edit-102009-25">Adequação para Pet</label>
            <select id="petSuitability" id="petshop--organism-admin-product-edit-102009-26"
                ?disabled=${this.loading}
                .value=${this.petSuitability?.join(',') || ''}
                @change=${this.handleInputChange}
            >
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
            </select>
        </div>
        <div class="form-group" id="petshop--organism-admin-product-edit-102009-27">
            <label for="productDetails" id="petshop--organism-admin-product-edit-102009-28">Detalhes do Produto</label>
            <textarea id="productDetails" id="petshop--organism-admin-product-edit-102009-29"
                ?disabled=${this.loading}
                .value=${this.productDetails || ''}
                @input=${this.handleInputChange}
            ></textarea>
    </div>
    <div class="form-actions" id="petshop--organism-admin-product-edit-102009-30">
            <a id="link-back" href="/pageAdminProduct" class="btn btn-back" ?disabled=${this.loading}>Voltar</a>
            <button class="btn-save" @click=${this.handleClickSave} ?disabled=${this.loading}>
            Salvar
                ${this.loading ? html`<span class="loading"></span>` : html``}
            </button>
    </div>
    ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}
    ${this.labelOk ? html`<span class="ok-message">${this.labelOk}</span>` : ''}

</div>`
    }

    private handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const { id, value } = target;
        switch (id) {
            case 'name':
                this.nameProduct = value;
                break;
            case 'descriptionShort':
                this.descriptionShort = value;
                break;
            case 'sku':
                this.sku = value;
                break;
            case 'barcode':
                this.barcode = value;
                break;
            case 'category':
                this.category = value;
                break;
            case 'subcategory':
                this.subcategory = value;
                break;
            case 'unitOfMeasure':
                this.unitOfMeasure = value;
                break;
            case 'petSuitability':
                this.petSuitability = value ? value.split(',') : [];
                break;
            case 'productDetails':
                this.productDetails = value;
                break;
            default:
                break;
        }
    }

    private clearErrors() {
        this.labelError = '';
        this.labelOk = '';
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
            const dataToUpd: MdmData | undefined = { ... this.mdmData } as MdmData;
            const rgData = dataToUpd.data?.registrationData as RegistrationDataProduct;
            rgData.name = this.nameProduct || '';
            rgData.descriptionShort = this.descriptionShort || '';
            if (!(dataToUpd.data as ProductRecord).productData) {
                (dataToUpd.data as ProductRecord).productData = {
                    category: '',
                    barcode: '',
                    petSuitability: [],
                    productDetails: '',
                    sku: '',
                    subcategory: '',
                    unitOfMeasure: '',
                }
            }

            const productData: ProductData = (dataToUpd.data as ProductRecord).productData as ProductData;
            productData.category = this.category || '';
            productData.barcode = this.barcode || '';
            productData.petSuitability = this.petSuitability || [];
            productData.productDetails = this.productDetails || '';
            productData.sku = this.sku || '';
            productData.subcategory = this.subcategory || '';
            productData.unitOfMeasure = this.unitOfMeasure || '';
            const params: MdmData = dataToUpd;
            const req: RequestMDMUpd = {
                action: 'MDMUpd',
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
            this.labelOk = 'Cadastro atualizado com sucesso';
        }
    }
}