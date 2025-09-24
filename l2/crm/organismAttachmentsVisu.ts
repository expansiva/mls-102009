/// <mls shortName="organismAttachmentsVisu" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';
import { collab_chevron_left, collab_file_pen, collab_xmark } from './_100554_collabIcons';

@customElement('crm--organism-attachments-visu-102009')
export class organismAttachmentsVisu extends IcaOrganismBase {
    render() {
        return html`<div class="attachment-detail">
<div class="attachment-actions">
<button class="action-button back-button" @click="${this.handleBack}">
${collab_chevron_left}
Voltar
</button>
<button class="action-button edit-button" @click="${this.handleEdit}">
${collab_file_pen}
Editar
</button>
<button class="action-button delete-button" @click="${this.handleDelete}">
${collab_xmark}
Deletar
</button>
</div>
<h2>Detalhe do Anexo</h2>
<a href="#" class="file-link">numeros_da_discadora_alarme.txt</a>
<p>Última alteração em 26/07/2016 10:31:49 por cleyton@expansiva.com.br</p>
<p>Descrição: números configurados na discadora do alarme.</p>
</div>`
    }

    // New methods for button handlers
    private handleBack() {
        // Handle back action
    }

    private handleEdit() {
        // Handle edit action
    }

    private handleDelete() {
        // Handle delete action
    }
}