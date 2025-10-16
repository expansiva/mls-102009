/// <mls shortName="organismFeaturedProducts" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { exec } from "./_102019_layer1Exec";
import { setState, getState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { MdmData, RegistrationDataProduct, RequestMDMGetListByType, MdmType } from "./_102019_layer4Mdm";

@customElement('petshop--organism-featured-products-102009')
export class organismFeaturedProducts extends IcaOrganismBase {

  @state() mdmProducts: MdmData[] = [];

  //---------------------------

  async firstUpdated() {
    this.init();
  }

  render() {
    return html`
    <div class="products-container">
      <h2>Produtos em destaque</h2>
      <div class="products-list" id="petshop--featured-products-102009-3">
        ${this.mdmProducts.map((prod, index) => this.renderItem(prod, index))}
      </div>
    </div>
      `
  }

  renderItem(prod: MdmData, index: number) {
    if (index > 4) return html``;
    const reg = (prod.data.registrationData as RegistrationDataProduct);
    return html`
      <div class="product-card">
        <div class="product-image">
          <img src="https://images.unsplash.com/photo-1583860332956-0cd934c28cec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXQlMjBiZWQlMjBjb21mb3J0YWJsZSUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Caminha confortável para pets">
        </div>
        <div class="product-title">${reg.name}</div>
        <div class="product-price">R$ 50,00</div>
        <div class="product-action">
          <a href="/pageProduct">Comprar</a>
        </div>
      </div>
    `;
  }

  //--------------------------

  private init() {
    this.loadProd();
  }

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

}