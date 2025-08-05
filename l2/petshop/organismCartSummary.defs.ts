/// <mls shortName="organismCartSummary" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismCartSummary",
    "type": "widget",
    "devFidelity": "scaffold",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Resumo do carrinho de compras.",
    "goal": "Exibir produtos adicionados ao carrinho e permitir finalizar compra.",
    "userStories": [
      {
        "story": "Como cliente, quero ver o que está no meu carrinho e finalizar a compra.",
        "derivedRequirements": [
          {
            "description": "Resumo do carrinho, botão de checkout e integração com plugins de pagamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
