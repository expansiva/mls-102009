/// <mls shortName="organismResumoPedido" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-resumo-pedido-102009')
export class _102009_organismResumoPedido extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Resumo do pedido antes do pagamento.';
    goal: string | undefined = 'Exibir detalhes do pedido para conferência.';

}