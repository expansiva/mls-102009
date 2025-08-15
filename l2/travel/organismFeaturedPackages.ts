/// <mls shortName="organismFeaturedPackages" project="102009" folder="travel" enhancement="_100554_enhancementLit" groupName="travel" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travel--organism-featured-packages-102009')
export class organismFeaturedPackages extends IcaOrganismBase {
    render(){
        return html`<section class="featured-packages" aria-label="Pacotes em destaque" id="travel--featured-packages-102009-1">
        <h2 class="featured-packages__title" id="travel--featured-packages-102009-2">Pacotes em Destaque</h2>
        <div class="featured-packages__list" id="travel--featured-packages-102009-3">
          <div class="featured-packages__item" id="travel--featured-packages-102009-4">
            <img src="https://images.unsplash.com/photo-1517053083425-2f61fe08a342?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwcmFpYSUyMHBhcmFkaXMlQzMlQURhY2ElMjBGZXJuYW5kbyUyMGRlJTIwTm9yb25oYXxlbnwwfHx8fDE3NTUwMzE0MDF8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Praia paradisíaca em Fernando de Noronha" class="featured-packages__img" id="travel--featured-packages-102009-5">
            <div class="featured-packages__info" id="travel--featured-packages-102009-6">
              <h3 class="featured-packages__name" id="travel--featured-packages-102009-7">Fernando de Noronha</h3>
              <p class="featured-packages__price" id="travel--featured-packages-102009-8">A partir de <strong id="travel--featured-packages-102009-9">R$ 2.500</strong></p>
              <a href="/pacotes/fernando-de-noronha" class="featured-packages__details" id="travel--featured-packages-102009-10">Ver detalhes</a>
            </div>
          </div>
          <div class="featured-packages__item" id="travel--featured-packages-102009-11">
            <img src="https://images.unsplash.com/photo-1500413702358-48b1daad8ddc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxHcmFtYWRvJTIwaW52ZXJubyUyMG5ldmV8ZW58MHx8fHwxNzU1MDMxNDAxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Vista aérea de Gramado no inverno" class="featured-packages__img" id="travel--featured-packages-102009-12">
            <div class="featured-packages__info" id="travel--featured-packages-102009-13">
              <h3 class="featured-packages__name" id="travel--featured-packages-102009-14">Gramado Inverno</h3>
              <p class="featured-packages__price" id="travel--featured-packages-102009-15">A partir de <strong id="travel--featured-packages-102009-16">R$ 1.800</strong></p>
              <a href="/pacotes/gramado-inverno" class="featured-packages__details" id="travel--featured-packages-102009-17">Ver detalhes</a>
            </div>
          </div>
          <div class="featured-packages__item" id="travel--featured-packages-102009-18">
            <img src="https://images.unsplash.com/photo-1482951486181-13a752dbbd52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxDYXRhcmF0YXMlMjBkbyUyMElndWElQzMlQTd1fGVufDB8fHx8MTc1NTAzMTQwMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Cataratas do Iguaçu" class="featured-packages__img" id="travel--featured-packages-102009-19">
            <div class="featured-packages__info" id="travel--featured-packages-102009-20">
              <h3 class="featured-packages__name" id="travel--featured-packages-102009-21">Cataratas do Iguaçu</h3>
              <p class="featured-packages__price" id="travel--featured-packages-102009-22">A partir de <strong id="travel--featured-packages-102009-23">R$ 1.200</strong></p>
              <a href="/pacotes/cataratas-iguacu" class="featured-packages__details" id="travel--featured-packages-102009-24">Ver detalhes</a>
            </div>
          </div>
        </div>
      </section>
    `
    }
}