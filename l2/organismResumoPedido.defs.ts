/// <mls shortName="organismResumoPedido" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismResumoPedido",
    "type": "widget",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": [
      "tablePedido"
    ]
  },
  "planning": {
    "generalDescription": "Resumo do pedido antes do pagamento.",
    "goal": "Exibir detalhes do pedido para conferência.",
    "userStories": [
      {
        "story": "Como cliente, quero revisar meu pedido antes de pagar.",
        "derivedRequirements": [
          {
            "description": "Exibir lista de itens, serviços e valor total."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
