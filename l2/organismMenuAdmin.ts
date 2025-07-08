/// <mls shortName="organismMenuAdmin" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-menu-admin-102009')
export class _102009_organismMenuAdmin extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Menu lateral do painel admin.';
    goal: string | undefined = 'Facilitar acesso rápido às funções administrativas.';

}