/// <mls shortName="produto" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "produto",
    "type": "page",
    "group": "petshop",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      {
        "tag": "organism-nav",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-details",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-add-to-cart",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-footer-info",
        "bindings": [],
        "purpose": "",
        "used": true
      }
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Exibir detalhes de um produto selecionado e permitir compra.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"produto\" para exibir detalhes de um produto selecionado e permitir compra.",
        "derivedRequirements": [
          {
            "description": "Exibir imagens, descrição, preço e estoque"
          },
          {
            "description": "Permitir seleção de quantidade"
          },
          {
            "description": "Adicionar ao carrinho"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
