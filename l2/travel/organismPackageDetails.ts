/// <mls shortName="organismPackageDetails" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-package-details-102009')
export class organismPackageDetails extends IcaOrganismBase {
    render(){
        return html`<div class="package-details__container" id="travel--package-details-102009-1">
        <div class="package-details__gallery" id="travel--package-details-102009-2">
          <img src="https://images.unsplash.com/photo-1614723268053-f32f936f13f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxGZXJuYW5kbyUyMGRlJTIwTm9yb25oYSUyMHByYWlhJTIwcGFpc2FnZW18ZW58MHx8fHwxNzU1MDMxNTIyfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Foto principal do pacote" class="package-details__main-img" id="travel--package-details-102009-3">
          <div class="package-details__thumbnails" id="travel--package-details-102009-4">
            <img src="https://images.unsplash.com/photo-1593193391560-76ce8e2b313c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxQcmFpYSUyMGRvJTIwU2FuY2hvJTIwTm9yb25oYXxlbnwwfHx8fDE3NTUwMzE1MjN8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Foto do destino 1" class="package-details__thumb" id="travel--package-details-102009-5">
            <img src="https://images.unsplash.com/photo-1456440532435-1c8f42495a53?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxUcmlsaGElMjBlY29sJUMzJUIzZ2ljYSUyME5vcm9uaGF8ZW58MHx8fHwxNzU1MDMxNTIzfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Foto do destino 2" class="package-details__thumb" id="travel--package-details-102009-6">
            <img src="https://images.unsplash.com/photo-1586731023793-871d4799d0ed?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxNZXJndWxobyUyMEZlcm5hbmRvJTIwZGUlMjBOb3JvbmhhfGVufDB8fHx8MTc1NTAzMTUyNHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=200" alt="Foto do destino 3" class="package-details__thumb" id="travel--package-details-102009-7">
          </div>
        </div>
        <div class="package-details__info" id="travel--package-details-102009-8">
          <h1 class="package-details__title" id="travel--package-details-102009-9">Pacote: Roteiro dos Sonhos - Fernando de Noronha</h1>
          <div class="package-details__meta" id="travel--package-details-102009-10">
            <span class="package-details__date" id="travel--package-details-102009-11"><strong id="travel--package-details-102009-12">Datas:</strong> 10/09/2025 a 17/09/2025</span>
            <span class="package-details__price" id="travel--package-details-102009-13"><strong id="travel--package-details-102009-14">Preço:</strong> R$ 4.200,00</span>
          </div>
          <p class="package-details__description" id="travel--package-details-102009-15">
            Viva uma experiência inesquecível em Fernando de Noronha! Pacote completo com hospedagem, passeios guiados, traslados e café da manhã incluso. Aproveite praias paradisíacas, trilhas ecológicas e mergulhos incríveis.
          </p>
          <div class="package-details__itinerary" id="travel--package-details-102009-16">
            <h2 id="travel--package-details-102009-17">Itinerário</h2>
            <ul id="travel--package-details-102009-18">
              <li id="travel--package-details-102009-19">Dia 1: Chegada e traslado ao hotel</li>
              <li id="travel--package-details-102009-20">Dia 2: Passeio de barco pelas praias</li>
              <li id="travel--package-details-102009-21">Dia 3: Trilha ecológica e visita ao Projeto Tamar</li>
              <li id="travel--package-details-102009-22">Dia 4: Mergulho com cilindro (opcional)</li>
              <li id="travel--package-details-102009-23">Dia 5: Dia livre para explorar</li>
              <li id="travel--package-details-102009-24">Dia 6: City tour histórico</li>
              <li id="travel--package-details-102009-25">Dia 7: Retorno</li>
            </ul>
          </div>
        </div>
      </div>
    `
    }
}