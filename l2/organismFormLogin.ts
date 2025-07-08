/// <mls shortName="organismFormLogin" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-form-login-102009')
export class _102009_organismFormLogin extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Formulário de login tradicional.';
    goal: string | undefined = 'Permitir login de administradores e clientes.';

}