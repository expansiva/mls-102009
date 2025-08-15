/// <mls shortName="organismPackageList" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-package-list-102009')
export class organismPackageList extends IcaOrganismBase {
    render(){
        return html`<ul class="package-list" id="travelagency--package-list-102009-1">
          <li class="package-card" id="travelagency--package-list-102009-2">
            <div class="package-image" id="travelagency--package-list-102009-3">
              <img src="https://images.unsplash.com/photo-1698320856830-246e897b8e9b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxQcmFpYSUyMGRlJTIwQ29wYWNhYmFuYSUyMFJpbyUyMGRlJTIwSmFuZWlyb3xlbnwwfHx8fDE3NTUwMzE0NjZ8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Praia de Copacabana, Rio de Janeiro" id="travelagency--package-list-102009-4">
            </div>
            <div class="package-info" id="travelagency--package-list-102009-5">
              <h3 class="package-destino" id="travelagency--package-list-102009-6">Rio de Janeiro</h3>
              <div class="package-datas" id="travelagency--package-list-102009-7">20/09/2025 - 27/09/2025</div>
              <div class="package-preco" id="travelagency--package-list-102009-8">R$ 2.500</div>
              <a href="#" class="package-detalhes" id="travelagency--package-list-102009-9">Ver detalhes</a>
            </div>
          </li>
          <li class="package-card" id="travelagency--package-list-102009-10">
            <div class="package-image" id="travelagency--package-list-102009-11">
              <img src="https://images.unsplash.com/photo-1600908239415-f118642d5646?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxDZW50cm8lMjBkZSUyMEdyYW1hZG8lMjBSU3xlbnwwfHx8fDE3NTUxMDczMDB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Centro de Gramado, RS" id="travelagency--package-list-102009-12">
            </div>
            <div class="package-info" id="travelagency--package-list-102009-13">
              <h3 class="package-destino" id="travelagency--package-list-102009-14">Gramado</h3>
              <div class="package-datas" id="travelagency--package-list-102009-15">15/10/2025 - 20/10/2025</div>
              <div class="package-preco" id="travelagency--package-list-102009-16">R$ 3.200</div>
              <a href="#" class="package-detalhes" id="travelagency--package-list-102009-17">Ver detalhes</a>
            </div>
          </li>
          <li class="package-card" id="travelagency--package-list-102009-18">
            <div class="package-image" id="travelagency--package-list-102009-19">
              <img src="https://images.unsplash.com/photo-1689555204783-d84595f0be50?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxGYXJvbCUyMGRhJTIwQmFycmElMjBTYWx2YWRvcnxlbnwwfHx8fDE3NTUxMDczMDB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Farol da Barra, Salvador" id="travelagency--package-list-102009-20">
            </div>
            <div class="package-info" id="travelagency--package-list-102009-21">
              <h3 class="package-destino" id="travelagency--package-list-102009-22">Salvador</h3>
              <div class="package-datas" id="travelagency--package-list-102009-23">05/11/2025 - 12/11/2025</div>
              <div class="package-preco" id="travelagency--package-list-102009-24">R$ 2.800</div>
              <a href="#" class="package-detalhes" id="travelagency--package-list-102009-25">Ver detalhes</a>
            </div>
          </li>
        </ul>
      `
    }
}