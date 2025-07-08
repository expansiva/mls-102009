/// <mls shortName="organismHistoricoAgendamentos" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-historico-agendamentos-102009')
export class _102009_organismHistoricoAgendamentos extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Histórico de agendamentos do cliente.';
    goal: string | undefined = 'Permitir visualizar, cancelar ou reagendar agendamentos.';

}