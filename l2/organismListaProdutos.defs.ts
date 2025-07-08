/// <mls shortName="organismListaProdutos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismListaProdutos",
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
    "generalDescription": "Lista principal de produtos no catálogo.",
    "goal": "Exibir produtos filtrados e permitir adicionar ao carrinho.",
    "userStories": [
      {
        "story": "Como cliente, quero ver todos os produtos disponíveis e adicionar ao carrinho.",
        "derivedRequirements": [
          {
            "description": "Exibir produtos com imagem, preço, estoque e botão de adicionar ao carrinho."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
