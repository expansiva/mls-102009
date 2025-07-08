/// <mls shortName="organismBuscaProdutos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismBuscaProdutos",
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
      "tableProduto"
    ]
  },
  "planning": {
    "generalDescription": "Barra de busca no catálogo.",
    "goal": "Permitir busca rápida de produtos.",
    "userStories": [
      {
        "story": "Como cliente, quero buscar produtos pelo nome.",
        "derivedRequirements": [
          {
            "description": "Campo de busca que filtra produtos em tempo real."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
