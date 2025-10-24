/// <mls shortName="organismCartSummary" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { setState, getState, subscribe, unsubscribe } from '_100554_/l2/collabState';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

import { MdmRecord, RequestMDMGetListByIds, RegistrationDataProduct } from "./_102019_commonGlobal";


@customElement('petshop--organism-cart-summary-102009')
export class organismCartSummary extends IcaOrganismBase {

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
    if (_key === 'ui.petshop.client.pageProduct.action' && _value === 'add') {
      this.carProducts = [...getState('ui.petshop.client.pageProduct.productCar')];
      setState('ui.petshop.client.pageProduct.action', '');
    }
  }

  render() {
    const tot = this.carProducts.length * 50;
    const vl = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(tot);

    return html`
      <h2 >Seu Carrinho</h2>
      <div class="cart-items" >
        ${this.carProducts.map((prod, index) => this.renderItem(prod, index))}
      </div>
      <div class="cart-total">
        <span>Total</span>
        <span>${vl}</span>
      </div>
      <div class="checkout-actions">
        <button>Finalizar Compra (Cartão)</button>
        <button class="pix">Pagar com Pix</button>
      </div>
      `
  }

  renderItem(prod: MdmRecord, index: number) {

    const reg = (prod.details.registrationData as RegistrationDataProduct);
    return html`
    <div class="cart-item">
      <img src="https://images.unsplash.com/photo-1544198841-10f34f31f8dd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aWMlMjBwZXQlMjB3YXRlciUyMGRpc3BlbnNlcnxlbnwwfHx8fDE3NTQ0MTE0MTZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Bebedouro Automático">
      <div class="item-info">
        <div class="item-name">${reg.name}</div>
        <div class="item-qty">Qtd: 1</div>
      </div>
      <div class="item-price">R$ 50,00</div>
      <button class="remove-btn" title="Remover" @click=${() => this.handleClickDel(index)}>×</button>
    </div>
    `
  }

  //--------------------------
  private handleClickDel(idx: number) {
    if (!this.carProducts || !this.carProducts[idx]) return;

    this.carProducts.splice(idx, 1);
    this.carProducts = [...this.carProducts];
    setState('ui.petshop.client.pageProduct.productCar', this.carProducts);
    setState('ui.petshop.client.pageProduct.action', 'del');
  }
}