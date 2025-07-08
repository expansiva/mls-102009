/// <mls shortName="organismInfoContato" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-info-contato-102009')
export class _102009_organismInfoContato extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Informações institucionais de contato.';
    goal: string | undefined = 'Exibir endereço, telefone e horário de funcionamento.';

}