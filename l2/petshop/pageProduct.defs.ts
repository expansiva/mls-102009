/// <mls shortName="pageProduct" project="102009" enhancement="_blank" folder="petshop" />

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "pageProduct",
    "type": "page",
    "devFidelity": "scaffold",
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
        "tag": "organism-product-filters",
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
        "tag": "organism-cart-summary",
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
    "goal": "Exibir catálogo de produtos e permitir compra online.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"produtos\" para exibir catálogo de produtos e permitir compra online.",
        "derivedRequirements": [
          {
            "description": "Listagem de produtos com filtros por categoria."
          },
          {
            "description": "Detalhes do produto."
          },
          {
            "description": "Carrinho de compras."
          },
          {
            "description": "Checkout com pagamento via cartão de crédito e Pix."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}