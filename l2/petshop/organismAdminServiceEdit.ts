/// <mls shortName="organismAdminServiceEdit" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { setState, getState } from '_100554_/l2/collabState';
import { propertyDataSource } from './_100554_collabDecorators';
import { exec } from "./_102019_layer1Exec";
import { MdmData, MdmType, RegistrationDataService, ServiceData, ServiceRecord } from "./_102019_layer4Mdm";
import { RequestMDMUpd } from "./_102019_layer4ResReq";

@customElement('petshop--organism-admin-service-edit-102009')
export class organismAdminServiceEdit extends IcaOrganismBase {

    @state() loading: boolean = false;
    @state() mdmData?: MdmData;

    @propertyDataSource() nameService?: string;
    @propertyDataSource() descriptionShort?: string;
    @propertyDataSource() serviceCode?: string;
    @propertyDataSource() category?: string;
    @propertyDataSource() priceRegular?: string;
    @propertyDataSource() priceSubscription?: string;
    @propertyDataSource() durationMinutes?: string;
    @propertyDataSource() speciesSuitability?: string[];
    @propertyDataSource() sizeSuitability?: string[];
    @propertyDataSource() requiredResources?: string[];
    @propertyDataSource() employeeCommission?: string;
    @propertyDataSource() labelError?: string;
    @propertyDataSource() labelOk?: string;
    @propertyDataSource() action?: string;
    @query('#link-back') link?: HTMLAnchorElement;

    firstUpdated(_changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(_changedProperties);
        const data: MdmData = getState('ui.petshop.admin.service.selected');
        this.mdmData = data;
    }

    render() {
        return html`<div class="form-container" id="petshop--organism-admin-service-edit-102009-1"
>
<h2 id="petshop--organism-admin-service-edit-102009-2">Editar Serviço</h2>
<section id="petshop--organism-admin-service-edit-102009-3">
<div class="form-group" id="petshop--organism-admin-service-edit-102009-5">
<label for="name" id="petshop--organism-admin-service-edit-102009-6">Nome</label>
<input
  type="text"
  id="name"
  name="name"
  required
  id="petshop--organism-admin-service-edit-102009-7"
  ?disabled=${this.loading}
  .value=${this.nameService || ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-8">
<label for="descriptionShort" id="petshop--organism-admin-service-edit-102009-9">Descrição Curta</label>
<textarea id="descriptionShort" name="descriptionShort" required id="petshop--organism-admin-service-edit-102009-10"
  .value=${this.descriptionShort || ''}
  @input=${this.handleInputChange}
></textarea>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-11">
<label for="serviceCode" id="petshop--organism-admin-service-edit-102009-12">Código do Serviço</label>
<input type="text" id="serviceCode" name="serviceCode" required id="petshop--organism-admin-service-edit-102009-13"
  .value=${this.serviceCode || ''}
  @input=${this.handleInputChange}
>
</div>
</section>
<section id="petshop--organism-admin-service-edit-102009-14">
<div class="form-group" id="petshop--organism-admin-service-edit-102009-16">
<label for="category" id="petshop--organism-admin-service-edit-102009-17">Categoria</label>
<select id="category" name="category" id="petshop--organism-admin-service-edit-102009-18"
  .value=${this.category || ''}
  @change=${this.handleInputChange}
>
<option value="banho-tosa" id="petshop--organism-admin-service-edit-102009-19">Banho & Tosa</option>
<option value="consulta" id="petshop--organism-admin-service-edit-102009-20">Consulta</option>
</select>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-21">
<label for="priceRegular" id="petshop--organism-admin-service-edit-102009-22">Preço Regular</label>
<input type="number" id="priceRegular" name="priceRegular" step="0.01" required id="petshop--organism-admin-service-edit-102009-23"
  .value=${this.priceRegular || ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-24">
<label for="priceSubscription" id="petshop--organism-admin-service-edit-102009-25">Preço Assinatura</label>
<input type="number" id="priceSubscription" name="priceSubscription" step="0.01" id="petshop--organism-admin-service-edit-102009-26"
  .value=${this.priceSubscription || ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-27">
<label for="durationMinutes" id="petshop--organism-admin-service-edit-102009-28">Duração (minutos)</label>
<input type="number" id="durationMinutes" name="durationMinutes" required id="petshop--organism-admin-service-edit-102009-29"
  .value=${this.durationMinutes || ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-30">
<label for="speciesSuitability" id="petshop--organism-admin-service-edit-102009-31">Adequação a Espécies</label>
<input type="text" id="speciesSuitability" name="speciesSuitability" id="petshop--organism-admin-service-edit-102009-32"
  .value=${this.speciesSuitability ? this.speciesSuitability.join(', ') : ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-35">
<label for="sizeSuitability" id="petshop--organism-admin-service-edit-102009-36">Adequação a Tamanhos</label>
<input type="text" id="sizeSuitability" name="sizeSuitability" id="petshop--organism-admin-service-edit-102009-37"
  .value=${this.sizeSuitability ? this.sizeSuitability.join(', ') : ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-41">
<label for="requiredResources" id="petshop--organism-admin-service-edit-102009-42">Recursos Necessários</label>
<input type="text" id="requiredResources" name="requiredResources" id="petshop--organism-admin-service-edit-102009-43"
  .value=${this.requiredResources ? this.requiredResources.join(', ') : ''}
  @input=${this.handleInputChange}
>
</div>
<div class="form-group" id="petshop--organism-admin-service-edit-102009-46">
<label for="employeeCommission" id="petshop--organism-admin-service-edit-102009-47">Comissão do Funcionário</label>
<input type="number" id="employeeCommission" name="employeeCommission" step="0.01" min="0" max="1" id="petshop--organism-admin-service-edit-102009-48"
  .value=${this.employeeCommission || ''}
  @input=${this.handleInputChange}
>
</div>
</section>
    <div class="form-actions">
            <a id="link-back" href="/pageAdminService" class="btn btn-back" ?disabled=${this.loading}>Voltar</a>
            <button class="btn-save" @click=${this.handleClickSave} ?disabled=${this.loading}>
                Salvar
                ${this.loading ? html`<span class="loading"></span>` : html``}
            </button>
    </div>
    ${this.labelError ? html`<span class="error-message">${this.labelError}</span>` : ''}
    ${this.labelOk ? html`<span class="ok-message">${this.labelOk}</span>` : ''}

`
    }
    private handleInputChange(event: Event) {
        const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const { id, value } = target;
        switch (id) {
            case 'name':
                this.nameService = value;
                break;
            case 'descriptionShort':
                this.descriptionShort = value;
                break;
            case 'serviceCode':
                this.serviceCode = value;
                break;
            case 'category':
                this.category = value;
                break;
            case 'priceRegular':
                this.priceRegular = value;
                break;
            case 'priceSubscription':
                this.priceSubscription = value;
                break;
            case 'durationMinutes':
                this.durationMinutes = value;
                break;
            case 'speciesSuitability':
                // Parse comma-separated values into array
                this.speciesSuitability = value.split(',').map(s => s.trim()).filter(s => s);
                break;
            case 'sizeSuitability':
                // Parse comma-separated values into array
                this.sizeSuitability = value.split(',').map(s => s.trim()).filter(s => s);
                break;
            case 'requiredResources':
                // Parse comma-separated values into array
                this.requiredResources = value.split(',').map(s => s.trim()).filter(s => s);
                break;
            case 'employeeCommission':
                this.employeeCommission = value;
                break;
            default:
                break;
        }
    }
    // New handler for multiple selects
    private handleSelectMultipleChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        const { id } = target;
        const selectedOptions = Array.from(target.selectedOptions).map(option => option.value);
        switch (id) {
            case 'speciesSuitability':
                this.speciesSuitability = selectedOptions;
                break;
            case 'sizeSuitability':
                this.sizeSuitability = selectedOptions;
                break;
            case 'requiredResources':
                this.requiredResources = selectedOptions;
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
            const dataToUpd: MdmData | undefined = { ... this.mdmData } as MdmData;
            const rgData = dataToUpd.data?.registrationData as RegistrationDataService;
            rgData.name = this.nameService || '';
            rgData.descriptionShort = this.descriptionShort || '';
            rgData.serviceCode = this.serviceCode || '';
            if (!(dataToUpd.data as ServiceRecord).serviceData) {
                (dataToUpd.data as ServiceRecord).serviceData = {
                    category: '',
                    durationMinutes: 0,
                    priceRegular: 0,
                    employeeCommission: 0,
                    priceSubscription: 0,
                    requiredResources: [],
                    sizeSuitability: [],
                    speciesSuitability: []
                }
            }
            const serviceData: ServiceData = (dataToUpd.data as ServiceRecord).serviceData as ServiceData;

            serviceData.category = this.category || '';
            serviceData.durationMinutes = +(this.durationMinutes || 0);
            serviceData.priceRegular = +(this.priceRegular || 0)
            serviceData.employeeCommission = +(this.employeeCommission || 0)
            serviceData.priceSubscription = +(this.priceSubscription || 0)
            serviceData.requiredResources = this.requiredResources || [];
            serviceData.sizeSuitability = this.sizeSuitability || [];
            serviceData.speciesSuitability = this.speciesSuitability || [];
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