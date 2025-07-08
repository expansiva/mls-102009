/// <mls shortName="organismBuscaProdutos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-busca-produtos-102009')
export class _102009_organismBuscaProdutos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Barra de busca no catálogo.';
    goal: string | undefined = 'Permitir busca rápida de produtos.';

}