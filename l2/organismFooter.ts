/// <mls shortName="organismFooter" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-footer-102009')
export class _102009_organismFooter extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Rodapé do site, visível em todas as páginas.';
    goal: string | undefined = 'Exibir informações de contato e links úteis.';

}