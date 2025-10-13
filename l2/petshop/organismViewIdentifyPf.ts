/// <mls shortName="organismViewIdentifyPf" project="102009" folder="petshop" enhancement="_100554_enhancementLit" groupName="petshop" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('petshop--organism-view-identify-pf-102009')
export class organismViewIdentifyPf extends IcaOrganismBase {
  render() {
    return html`<div class="profile-container" id="petshop--organism-view-identify-pf-102009-1">
      <div class="profile-photo" id="petshop--organism-view-identify-pf-102009-2">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NDQxMTUzMXww&ixlib=rb-4.1.0&q=80&w=200" alt="Foto de Perfil" id="petshop--organism-view-identify-pf-102009-3">
      </div>
      <div class="profile-info" id="petshop--organism-view-identify-pf-102009-4">
        <div class="form-group" id="petshop--organism-view-identify-pf-102009-5">
          <label id="petshop--organism-view-identify-pf-102009-6">Nome</label>
          <span class="field-value" id="petshop--organism-view-identify-pf-102009-7">Santiago</span>
        </div>
        <div class="form-group" id="petshop--organism-view-identify-pf-102009-8">
          <label id="petshop--organism-view-identify-pf-102009-9">Email</label>
          <span class="field-value" id="petshop--organism-view-identify-pf-102009-10">santiago@example.com</span>
        </div>
        <div class="form-group" id="petshop--organism-view-identify-pf-102009-11">
          <label id="petshop--organism-view-identify-pf-102009-12">Telefone</label>
          <span class="field-value" id="petshop--organism-view-identify-pf-102009-13">(11) 99999-9999</span>
        </div>
      </div>
    </div>`;
  }
}