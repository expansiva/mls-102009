/// <mls shortName="organismFeaturedPackages" project="102009" folder="travelagency" enhancement="_100554_enhancementLit" groupName="travelagency" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('travelagency--organism-featured-packages-102009')
export class organismFeaturedPackages extends IcaOrganismBase {
    render(){
        return html`<section class="featured-packages" id="pacotes">
        <h2 class="featured-title" id="travelagency--featured-packages-102009-1">Pacotes em Destaque</h2>
        <div class="packages-list" id="travelagency--featured-packages-102009-2">
          <div class="package-card" id="travelagency--featured-packages-102009-3">
            <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxSaW8lMjBkZSUyMEphbmVpcm8lMjB0cmF2ZWx8ZW58MHx8fHwxNzU1MTA3MjA5fDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Rio de Janeiro" class="package-image" id="travelagency--featured-packages-102009-4">
            <div class="package-info" id="travelagency--featured-packages-102009-5">
              <h3 class="package-destination" id="travelagency--featured-packages-102009-6">Rio de Janeiro</h3>
              <p class="package-price" id="travelagency--featured-packages-102009-7">A partir de <strong id="travelagency--featured-packages-102009-8">R$ 1.200</strong></p>
              <a href="/pacotes/rio-de-janeiro" class="package-details-link" id="travelagency--featured-packages-102009-9">Ver detalhes</a>
            </div>
          </div>
          <div class="package-card" id="travelagency--featured-packages-102009-10">
            <img src="https://images.unsplash.com/photo-1566555374250-e99b902bcdbc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMHRyYXZlbHxlbnwwfHx8fDE3NTUxMDcyMDl8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Paris" class="package-image" id="travelagency--featured-packages-102009-11">
            <div class="package-info" id="travelagency--featured-packages-102009-12">
              <h3 class="package-destination" id="travelagency--featured-packages-102009-13">Paris</h3>
              <p class="package-price" id="travelagency--featured-packages-102009-14">A partir de <strong id="travelagency--featured-packages-102009-15">R$ 4.500</strong></p>
              <a href="/pacotes/paris" class="package-details-link" id="travelagency--featured-packages-102009-16">Ver detalhes</a>
            </div>
          </div>
          <div class="package-card" id="travelagency--featured-packages-102009-17">
            <img src="https://images.unsplash.com/photo-1668717341897-5a395d6b5b49?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxHcmFtYWRvJTIwdHJhdmVsfGVufDB8fHx8MTc1NTEwNzIwOXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Gramado" class="package-image" id="travelagency--featured-packages-102009-18">
            <div class="package-info" id="travelagency--featured-packages-102009-19">
              <h3 class="package-destination" id="travelagency--featured-packages-102009-20">Gramado</h3>
              <p class="package-price" id="travelagency--featured-packages-102009-21">A partir de <strong id="travelagency--featured-packages-102009-22">R$ 1.800</strong></p>
              <a href="/pacotes/gramado" class="package-details-link" id="travelagency--featured-packages-102009-23">Ver detalhes</a>
            </div>
          </div>
        </div>
      </section>
    `
    }
}