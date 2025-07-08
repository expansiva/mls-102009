/// <mls shortName="catalogo" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "catalogo",
    "type": "page",
    "group": "petshop",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      "organism-nav",
      "organism-filtro-categorias",
      "organism-busca-produtos",
      "organism-lista-produtos",
      "organism-footer"
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Exibir o catálogo de produtos com busca, filtros e detalhes.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"catalogo\" para exibir o catálogo de produtos com busca, filtros e detalhes.",
        "derivedRequirements": [
          {
            "description": "Listar produtos por categoria."
          },
          {
            "description": "Permitir busca e filtro."
          },
          {
            "description": "Exibir fotos, descrições, preços e estoque."
          },
          {
            "description": "Permitir adicionar ao carrinho (para clientes)."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
