/// <mls shortName="carrinho" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "carrinho",
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
        "tag": "organism-cart-list",
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
        "tag": "organism-cart-actions",
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
    "goal": "Exibir produtos selecionados para compra, permitir alteração e finalizar pedido.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"carrinho\" para exibir produtos selecionados para compra, permitir alteração e finalizar pedido.",
        "derivedRequirements": [
          {
            "description": "Listar itens do carrinho"
          },
          {
            "description": "Alterar quantidade ou remover itens"
          },
          {
            "description": "Calcular total"
          },
          {
            "description": "Avançar para checkout"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
