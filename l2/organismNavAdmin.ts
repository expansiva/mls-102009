/// <mls shortName="organismNavAdmin" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-nav-admin-102009')
export class _102009_organismNavAdmin extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Barra de navegação do painel administrativo.';
    goal: string | undefined = 'Facilitar navegação entre áreas administrativas.';

}