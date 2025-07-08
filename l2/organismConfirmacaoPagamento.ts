/// <mls shortName="organismConfirmacaoPagamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-confirmacao-pagamento-102009')
export class _102009_organismConfirmacaoPagamento extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Confirmação de pagamento.';
    goal: string | undefined = 'Exibir status do pagamento e instruções após a compra.';

}