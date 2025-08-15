/// <mls shortName="organismPackageDetail" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-detail-102009')
export class organismPackageDetail extends IcaOrganismBase {
    render(){
        return html`<div class="package-detail__container" id="travelagency--package-detail-102009-1">
        <div class="package-detail__header" id="travelagency--package-detail-102009-2">
          <h1 class="package-detail__title" id="travelagency--package-detail-102009-3">Pacote: Rio de Janeiro Inesquecível</h1>
          <span class="package-detail__destination" id="travelagency--package-detail-102009-4">Destino: Rio de Janeiro, RJ</span>
        </div>
        <div class="package-detail__info" id="travelagency--package-detail-102009-5">
          <div class="package-detail__dates" id="travelagency--package-detail-102009-6">
            <span class="package-detail__date-label" id="travelagency--package-detail-102009-7">Ida:</span>
            <span class="package-detail__date-value" id="travelagency--package-detail-102009-8">15/09/2025</span>
            <span class="package-detail__date-label" id="travelagency--package-detail-102009-9">Volta:</span>
            <span class="package-detail__date-value" id="travelagency--package-detail-102009-10">20/09/2025</span>
          </div>
          <div class="package-detail__price" id="travelagency--package-detail-102009-11">
            <span class="package-detail__price-label" id="travelagency--package-detail-102009-12">Preço:</span>
            <span class="package-detail__price-value" id="travelagency--package-detail-102009-13">R$ 2.499,00</span>
          </div>
        </div>
        <div class="package-detail__description" id="travelagency--package-detail-102009-14">
          <h2 class="package-detail__subtitle" id="travelagency--package-detail-102009-15">Descrição</h2>
          <p class="package-detail__text" id="travelagency--package-detail-102009-16">
            Viva dias incríveis no Rio de Janeiro! Inclui passagens aéreas, hospedagem em hotel 4 estrelas com café da manhã, city tour pelos principais pontos turísticos (Cristo Redentor, Pão de Açúcar, Praia de Copacabana) e traslado aeroporto/hotel/aeroporto. Aproveite o melhor da Cidade Maravilhosa com conforto e segurança.
          </p>
        </div>
      </div>
    `
    }
}