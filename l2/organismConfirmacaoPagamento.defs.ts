/// <mls shortName="organismConfirmacaoPagamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismConfirmacaoPagamento",
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
      "tablePagamento"
    ]
  },
  "planning": {
    "generalDescription": "Confirmação de pagamento.",
    "goal": "Exibir status do pagamento e instruções após a compra.",
    "userStories": [
      {
        "story": "Como cliente, quero saber se meu pagamento foi aprovado e o que acontece a seguir.",
        "derivedRequirements": [
          {
            "description": "Exibir mensagem de sucesso ou erro e instruções pós-pagamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
