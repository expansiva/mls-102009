/// <mls shortName="organismFiltroCategorias" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismFiltroCategorias",
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
      "tableCategoria"
    ]
  },
  "planning": {
    "generalDescription": "Filtro lateral no catálogo.",
    "goal": "Permitir filtrar produtos por categoria.",
    "userStories": [
      {
        "story": "Como cliente, quero filtrar produtos por categoria para encontrar mais rápido o que procuro.",
        "derivedRequirements": [
          {
            "description": "Listar categorias e aplicar filtro ao catálogo."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
