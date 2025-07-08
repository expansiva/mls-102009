/// <mls shortName="organismDestaquesProdutos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismDestaquesProdutos",
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
    "generalDescription": "Seção de produtos em destaque na home.",
    "goal": "Mostrar produtos mais populares ou promocionais.",
    "userStories": [
      {
        "story": "Como visitante, quero ver rapidamente os produtos mais interessantes do petshop.",
        "derivedRequirements": [
          {
            "description": "Listar produtos marcados como destaque."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
