/// <mls shortName="tablePedido" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "tablePedido",
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
    "generalDescription": "Tabela de dados representando a entidade tablepedido.",
    "goal": "Armazenar informações da entidade tablepedido de forma estruturada.",
    "userStories": [
      {
        "story": "Como sistema, quero gerenciar dados da entidade tablepedido para uso no frontend e backend.",
        "derivedRequirements": []
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


// <interfaces>
export interface Pedido {
  id: number;
  usuarioId: number;
  valorTotal: number;
  status?: string;
  dataCriacao: string;
  details: PedidoDetails;
}
export interface PedidoDetails {
  itensPedidoIds?: number[];
  pagamentoId?: number;
}
// </interfaces>

