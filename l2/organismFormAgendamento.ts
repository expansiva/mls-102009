/// <mls shortName="organismFormAgendamento" project="102009" enhancement="_100554_enhancementLit" groupName="petshop" />

import { customElement } from 'lit/decorators.js';
import { IcaOrganismWireframeBase } from './_100554_icaOrganismWireframeBase';

@customElement('organism-form-agendamento-102009')
export class _102009_organismFormAgendamento extends IcaOrganismWireframeBase {
    
    generalDescription: string | undefined = 'Formulário de agendamento de banho e tosa.';
    goal: string | undefined = 'Permitir ao cliente escolher data/hora e agendar serviço.';

}