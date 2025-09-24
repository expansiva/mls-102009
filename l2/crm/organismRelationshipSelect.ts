/// <mls shortName="organismRelationshipSelect" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
@customElement('crm--organism-relationship-select-102009')
export class organismRelationshipSelect extends IcaOrganismBase {
    // Property to track the selected relationship type
    @property() selectedRelationship: string = 'new-relationship';
    // Handler for radio button change events
    handleRelationshipChange(e: Event) {
        const target = e.target as HTMLInputElement;
        this.selectedRelationship = target.value;
    }
    render() {
        return html`
<div class="organism-relationship-select">
<p class="organism-relationship-select__description">Neste programa, é possível escolher o tipo de relacionamento a ser inserido:</p>
<div class="organism-relationship-select__options">
<div class="organism-relationship-select__option">
<input type="radio" id="new-contact" name="relationship-type" value="new-contact" @change=${this.handleRelationshipChange}>
<label for="new-contact">Incluir Novo Contato</label>
</div>
<div class="organism-relationship-select__option">
<input type="radio" id="new-relationship" name="relationship-type" value="new-relationship" checked @change=${this.handleRelationshipChange}>
<label for="new-relationship">Incluir Novo Relacionamento</label>
</div>
</div>
${this.selectedRelationship === 'new-relationship' ? html`
<div class="organism-relationship-select-field">
<span class="organism-relationship-select__field-label">Informe o código do Relacionamento:</span>
<input type="text" value="174289" class="organism-relationship-select__input">
<span class="organism-relationship-select__icon">🔍</span>
</div>
` : ''}
<button class="organism-relationship-select__continue">Continuar</button>
</div>
`
    }
}