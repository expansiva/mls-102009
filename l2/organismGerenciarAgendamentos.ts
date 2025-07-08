/// <mls shortName="organismGerenciarAgendamentos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-gerenciar-agendamentos-102009')
export class _102009_organismGerenciarAgendamentos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Gestão de agendamentos no painel admin.';
    goal: string | undefined = 'Permitir visualizar, confirmar e cancelar agendamentos.';

}