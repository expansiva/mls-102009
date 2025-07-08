/// <mls shortName="organismDestaquesProdutos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-destaques-produtos-102009')
export class _102009_organismDestaquesProdutos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Seção de produtos em destaque na home.';
    goal: string | undefined = 'Mostrar produtos mais populares ou promocionais.';

}