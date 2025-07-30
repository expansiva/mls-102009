/// <mls shortName="loja" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "loja",
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
        "tag": "organism-category-filter",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-search",
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
    "goal": "Exibir produtos para venda online, com categorias e busca.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"loja\" para exibir produtos para venda online, com categorias e busca.",
        "derivedRequirements": [
          {
            "description": "Listar produtos: ração, brinquedos, acessórios, produtos de higiene"
          },
          {
            "description": "Filtrar por categoria"
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
