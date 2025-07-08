/// <mls shortName="tableItempedido" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tableItempedido",
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
    "generalDescription": "Tabela de dados representando a entidade tableitempedido.",
    "goal": "Armazenar informações da entidade tableitempedido de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tableitempedido para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface ItemPedido {
  id: number;
  pedidoId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  details: ItemPedidoDetails;
}
export interface ItemPedidoDetails {
  observacoes?: string;
}
// </interfaces>

