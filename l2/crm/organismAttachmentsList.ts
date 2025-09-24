/// <mls shortName="organismAttachmentsList" project="102009" folder="crm" enhancement="_100554_enhancementLit" groupName="crm" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IcaOrganismBase } from './_100554_icaOrganismBase';

@customElement('crm--organism-attachments-list-102009')
export class organismAttachmentsList extends IcaOrganismBase {
  // Define a property for dynamic attachments data
  attachments = [
    { details: 'Detalhes', file: 'arquivo1.pdf', extranet: true },
    { details: 'Detalhes', file: 'arquivo2.docx', extranet: false },
    { details: 'Detalhes', file: 'arquivo3.xlsx', extranet: true },
    { details: 'Detalhes', file: 'arquivo4.txt', extranet: false },
  ];

  render() {
    return html`<div class="attachments-list">
      <button class="attachments-list__new-btn">Novo</button>
      <table class="attachments-list__table">
        <thead>
          <tr>
            <th>Detalhes</th>
            <th>Arquivo</th>
            <th>(EXTRANET)</th>
          </tr>
        </thead>
        <tbody>
          ${this.attachments.map(attachment => html`
            <tr>
              <td><a href="#" class="attachments-list__details-link"> Detalhes </a></td>
              <td>${attachment.file}</td>
              <td><input type="checkbox" ?checked="${attachment.extranet}" disabled></td>
            </tr>
          `)}
        </tbody>
      </table>
    </div>`;
  }
}