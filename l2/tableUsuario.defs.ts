/// <mls shortName="tableUsuario" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableUsuario",
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
    "generalDescription": "Tabela de dados representando a entidade tableusuario.",
    "goal": "Armazenar informações da entidade tableusuario de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tableusuario para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  tipo: string; // 'admin' | 'cliente'
  status?: string;
  facebookId?: string;
  instagramId?: string;
  details: UsuarioDetails;
}
export interface UsuarioDetails {
  historicoAgendamentos?: number[]; // agendamentoIds
  historicoPedidos?: number[]; // pedidoIds
  endereco?: string;
  telefone?: string;
}
// </interfaces>

