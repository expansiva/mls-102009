/// <mls shortName="organismFormPagamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismFormPagamento",
    "type": "widget",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [
      "pluginpagamento"
    ],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": [
      "tablePagamento",
      "tablePedido"
    ]
  },
  "planning": {
    "generalDescription": "Formulário de pagamento online.",
    "goal": "Permitir pagamento via cartão, boleto ou Pix.",
    "userStories": [
      {
        "story": "Como cliente, quero pagar meu pedido de forma segura e prática.",
        "derivedRequirements": [
          {
            "description": "Formulário com opções de pagamento e integração com gateway seguro."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
