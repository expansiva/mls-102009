/// <mls shortName="organismRecuperarSenha" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-recuperar-senha-102009')
export class _102009_organismRecuperarSenha extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Recuperação de senha.';
    goal: string | undefined = 'Permitir redefinir senha via e-mail.';

}