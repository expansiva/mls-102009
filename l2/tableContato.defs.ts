/// <mls shortName="tableContato" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableContato",
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
    "generalDescription": "Tabela de dados representando a entidade tablecontato.",
    "goal": "Armazenar informações da entidade tablecontato de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tablecontato para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Contato {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  dataEnvio: string;
  details: ContatoDetails;
}
export interface ContatoDetails {
  respondido?: boolean;
  resposta?: string;
}
// </interfaces>

