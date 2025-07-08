/// <mls shortName="organismFormContato" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-form-contato-102009')
export class _102009_organismFormContato extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Formulário de contato.';
    goal: string | undefined = 'Permitir envio de mensagem ao petshop.';

}