/// <mls shortName="organismAddRelationship" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-add-relationship-102009')
export class organismAddRelationship extends IcaOrganismBase {
  render() {
    return html`<div class="organism-add-relationship">
      <header class="organism-add-relationship__header">
        <h1 class="organism-add-relationship__title">Selecione o tipo de relacionamento com: 174289 - Empresa ABC - Empresa</h1>
      </header>
      <section class="organism-add-relationship__options">
        <div class="organism-add-relationship__option">
          <input type="radio" id="empregado" name="relacionamento" value="empregado" checked>
          <label for="empregado">Empregado</label>
          <p class="organism-add-relationship__description">Descrição do relacionamento como empregado.</p>
        </div>
        <div class="organism-add-relationship__option">
          <input type="radio" id="cliente" name="relacionamento" value="cliente">
          <label for="cliente">Cliente</label>
          <p class="organism-add-relationship__description">Descrição do relacionamento como cliente.</p>
        </div>
        <div class="organism-add-relationship__option">
          <input type="radio" id="parceiro" name="relacionamento" value="parceiro">
          <label for="parceiro">Parceiro</label>
          <p class="organism-add-relationship__description">Descrição do relacionamento como parceiro.</p>
        </div>
        <div class="organism-add-relationship__option">
          <input type="radio" id="prestador" name="relacionamento" value="prestador">
          <label for="prestador">Prestador Serviços</label>
          <p class="organism-add-relationship__description">Descrição do relacionamento como prestador de serviços.</p>
        </div>
        <div class="organism-add-relationship__option">
          <input type="radio" id="carteira" name="relacionamento" value="carteira">
          <label for="carteira">Carteira Clientes</label>
          <p class="organism-add-relationship__description">Descrição do relacionamento como carteira de clientes.</p>
        </div>
      </section>
      <section class="organism-add-relationship__confirmation">
        <p class="organism-add-relationship__confirm-text">Deseja Confirmar a Inclusão deste Relacionamento?</p>
      </section>
      <section class="organism-add-relationship__visual">
        <div class="organism-add-relationship__entity organism-add-relationship__entity--left">
          <svg class="organism-add-relationship__icon" viewBox="0 0 24 24"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/></svg>
          <div class="organism-add-relationship__entity-info">
            <p class="organism-add-relationship__entity-name">João Silva - Pessoa</p>
            <p class="organism-add-relationship__entity-type">Empregado</p>
          </div>
        </div>
        <div class="organism-add-relationship__entity organism-add-relationship__entity--versius">X</div>
        <div class="organism-add-relationship__entity organism-add-relationship__entity--right">
          <svg class="organism-add-relationship__icon" viewBox="0 0 24 24"><path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V10L12 15L2 10V17Z"/></svg>
          <div class="organism-add-relationship__entity-info">
            <p class="organism-add-relationship__entity-name">Empresa ABC - Empresa</p>
            <p class="organism-add-relationship__entity-type">Empregador</p>
          </div>
        </div>
      </section>
      <footer class="organism-add-relationship__actions">
        <button class="organism-add-relationship__button organism-add-relationship__button--save">Salvar</button>
        <button class="organism-add-relationship__button organism-add-relationship__button--cancel">Cancelar</button>
      </footer>
    </div>`;
  }
}