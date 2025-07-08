/// <mls shortName="organismGerenciarProdutos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismGerenciarProdutos",
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
    "generalDescription": "Gestão de produtos no painel admin.",
    "goal": "Permitir CRUD de produtos.",
    "userStories": [
      {
        "story": "Como administrador, quero cadastrar, editar e remover produtos do catálogo.",
        "derivedRequirements": [
          {
            "description": "Formulário e lista de produtos com ações de CRUD."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
