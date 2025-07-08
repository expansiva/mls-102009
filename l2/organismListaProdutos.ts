/// <mls shortName="organismListaProdutos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-lista-produtos-102009')
export class _102009_organismListaProdutos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Lista principal de produtos no catálogo.';
    goal: string | undefined = 'Exibir produtos filtrados e permitir adicionar ao carrinho.';

}