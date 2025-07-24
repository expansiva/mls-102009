/// <mls shortName="checkout" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "checkout",
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
        "tag": "organism-checkout-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-payment-methods",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-order-summary",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-checkout-confirmation",
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
    "goal": "Finalizar compra com seleção de pagamento e confirmação.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"checkout\" para finalizar compra com seleção de pagamento e confirmação.",
        "derivedRequirements": [
          {
            "description": "Formulário de dados do cliente"
          },
          {
            "description": "Seleção de método de pagamento: cartão, PIX, boleto"
          },
          {
            "description": "Resumo do pedido"
          },
          {
            "description": "Confirmação de compra"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
