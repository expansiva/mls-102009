/// <mls shortName="tableAgendamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableAgendamento",
    "type": "table",
    "group": "petshop",
    "tags": [
      "data",
      "table"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "Tabela de dados representando a entidade tableagendamento.",
    "goal": "Armazenar informações da entidade tableagendamento de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tableagendamento para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Agendamento {
  id: number;
  data: string;
  hora: string;
  servico: string;
  clienteId: number;
  status: string;
  details: AgendamentoDetails;
}
export interface AgendamentoDetails {
  observacoes?: string;
  canceladoPor?: string;
  reagendadoParaId?: number;
}
// </interfaces>

