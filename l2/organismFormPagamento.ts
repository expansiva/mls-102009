/// <mls shortName="organismFormPagamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-form-pagamento-102009')
export class _102009_organismFormPagamento extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Formulário de pagamento online.';
    goal: string | undefined = 'Permitir pagamento via cartão, boleto ou Pix.';

}