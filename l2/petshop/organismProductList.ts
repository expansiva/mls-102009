/// <mls shortName="organismProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { exec } from "./_102019_layer1Exec";
import { setState, getState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

import { MdmRecord, MdmType, RegistrationDataProduct,  AttachmentType, RequestMDMGetListByType } from "./_102019_commonGlobal";

@customElement('petshop--organism-product-list-102009')
export class organismProductList extends IcaOrganismBase {

  @state() mdmProducts: MdmRecord[] = [];
  @state() carProducts: MdmRecord[] = [];

  //--------------------------------------

  connectedCallback() {
    super.connectedCallback();
    subscribe([
      'ui.petshop.client.pageProduct.action',
    ], this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unsubscribe([
      'ui.petshop.client.pageProduct.action',
    ], this);
  }

  handleIcaStateChange(_key: string, _value: any) {
    if (_key === 'ui.petshop.client.pageProduct.action' && _value === 'del') {
      this.carProducts = getState('ui.petshop.client.pageProduct.productCar');
      setState('ui.petshop.client.pageProduct.action', '');
    }
  }

  async firstUpdated() {
    this.loadProd();
  }

  render() {
    return html`
      <h1 id="petshop--product-list-102009-1">Catálogo de Produtos</h1>
      <div class="product-grid" id="petshop--product-list-102009-2">
        ${this.mdmProducts.map((prod, index) => this.renderItem(prod, index))}
      </div>
    `
  }

  renderItem(prod: MdmRecord, index: number) {

    const reg = (prod.details.registrationData as RegistrationDataProduct);

    let img = 'https://images.unsplash.com/photo-1583860332956-0cd934c28cec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBiZWQlMjBjb21mb3J0YWJsZSUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080';

    if (prod.details.attachments && prod.details.attachments.length > 0) {
      prod.details.attachments.forEach((i) => {
        if (i.type === AttachmentType.MEDIA_PROFILE_PIC) img = i.url;
      });
    }

    return html`
    <div class="product-card">
      <img src="${img}" alt="Bebedouro Automático">
      <div class="product-name">${reg.name}</div>
      <div class="product-type">${reg.descriptionShort}</div>
      <div class="product-price">R$ 50,00</div>
      <div class="product-actions">
        <button @click=${() => this.handleClickAdd(index)}>Adicionar ao Carrinho</button>
      </div>
    </div>
    `
  };

  //--------------------------------------


  private async loadProd() {
    const req: RequestMDMGetListByType = {
      action: 'MDMGetListByType',
      inDeveloped: true,
      version: '1',
      params: { type: MdmType.Produto },
    };

    const response = await exec(req);
    if (response.ok) {
      this.mdmProducts = response.data.map((item: MdmRecord) => {
        const item2: MdmRecord = item;
        return item2;
      });
    }
  }

  private handleClickAdd(idx: number) {
    if (!this.mdmProducts || !this.mdmProducts[idx]) return;

    this.carProducts.push(this.mdmProducts[idx]);
    setState('ui.petshop.client.pageProduct.productCar', this.carProducts);    
    setState('ui.petshop.client.pageProduct.action', 'add');
  }
}