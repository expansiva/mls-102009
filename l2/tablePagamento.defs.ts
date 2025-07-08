/// <mls shortName="tablePagamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tablePagamento",
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
    "generalDescription": "Tabela de dados representando a entidade tablepagamento.",
    "goal": "Armazenar informações da entidade tablepagamento de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tablepagamento para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Pagamento {
  id: number;
  pedidoId: number;
  metodo: string;
  dados: any;
  status?: string;
  details: PagamentoDetails;
}
export interface PagamentoDetails {
  comprovanteUrl?: string;
  gatewayRetorno?: any;
}
// </interfaces>

