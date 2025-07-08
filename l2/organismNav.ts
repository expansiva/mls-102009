/// <mls shortName="organismNav" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-nav-102009')
export class _102009_organismNav extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Barra de navegação principal do site, visível para todos os usuários.';
    goal: string | undefined = 'Exibir logo, links principais e opções de login/logout.';

}