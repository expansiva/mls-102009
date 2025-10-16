/// <mls shortName="organismProductList" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { exec } from "./_102019_layer1Exec";
import { setState, getState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { RequestMDMGetListByType  } from "./_102019_layer4ResReq";
import { MdmData, RegistrationDataProduct, MdmType } from "./_102019_layer4Mdm";


@customElement('petshop--organism-product-list-102009')
export class organismProductList extends IcaOrganismBase {

  @state() mdmProducts: MdmData[] = [];
  @state() carProducts: MdmData[] = [];


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

  renderItem(prod: MdmData, index: number) {

    const reg = (prod.data.registrationData as RegistrationDataProduct);
    return html`
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1544198841-10f34f31f8dd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aWMlMjBwZXQlMjB3YXRlciUyMGRpc3BlbnNlcnxlbnwwfHx8fDE3NTQ0MTE0MTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Bebedouro Automático">
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
      this.mdmProducts = response.data.map((item: MdmData) => {
        const item2: MdmData = item;
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