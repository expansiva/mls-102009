/// <mls shortName="organismRedesSociais" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-redes-sociais-102009')
export class _102009_organismRedesSociais extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Links e botões para redes sociais.';
    goal: string | undefined = 'Permitir acesso e compartilhamento nas redes sociais.';

}