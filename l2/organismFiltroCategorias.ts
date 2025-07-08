/// <mls shortName="organismFiltroCategorias" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-filtro-categorias-102009')
export class _102009_organismFiltroCategorias extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Filtro lateral no catálogo.';
    goal: string | undefined = 'Permitir filtrar produtos por categoria.';

}