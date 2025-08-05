/// <mls shortName="organismAdminContent" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('petshop--organism-admin-content-102009')
export class organismAdminContent extends IcaOrganismBase {
    render(){
        return html`<section class="admin-content" id="content">
        <h2 class="admin-content__title" id="petshop--admin-content-102009-1">Gestão de Conteúdo</h2>
        <form class="admin-content__form" id="petshop--admin-content-102009-2">
          <div class="admin-content__field" id="petshop--admin-content-102009-3">
            <label for="home-banner" class="admin-content__label" id="petshop--admin-content-102009-4">Banner da Home</label>
            <div class="admin-content__banner-preview" id="petshop--admin-content-102009-5">
              <img src="https://images.unsplash.com/photo-1698926636530-bbe3d8be1f82?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBwZXRzaG9wJTIwYWxlZ3JlfGVufDB8fHx8MTc1NDQxMTUzMnww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" alt="Banner atual da Home" id="petshop--admin-content-102009-6">
            </div>
            <input type="file" id="home-banner" name="home-banner" class="admin-content__input">
          </div>
          <div class="admin-content__field" id="petshop--admin-content-102009-7">
            <label for="about-text" class="admin-content__label" id="petshop--admin-content-102009-8">Texto Institucional</label>
            <textarea id="about-text" name="about-text" class="admin-content__textarea" rows="5">Somos um petshop dedicado ao bem-estar do seu pet. Atualize este texto para refletir a missão do seu negócio.</textarea>
          </div>
          <div class="admin-content__actions" id="petshop--admin-content-102009-9">
            <button type="submit" class="admin-content__save" id="petshop--admin-content-102009-10">Salvar Alterações</button>
          </div>
        </form>
      </section>
    `
    }
}