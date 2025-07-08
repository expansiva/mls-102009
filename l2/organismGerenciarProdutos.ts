/// <mls shortName="organismGerenciarProdutos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-gerenciar-produtos-102009')
export class _102009_organismGerenciarProdutos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Gestão de produtos no painel admin.';
    goal: string | undefined = 'Permitir CRUD de produtos.';

}