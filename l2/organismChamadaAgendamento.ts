/// <mls shortName="organismChamadaAgendamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-chamada-agendamento-102009')
export class _102009_organismChamadaAgendamento extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Chamada para ação na home.';
    goal: string | undefined = 'Incentivar o usuário a agendar banho e tosa.';

}