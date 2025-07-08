/// <mls shortName="pagamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "pagamento",
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
      "organism-resumo-pedido",
      "organism-form-pagamento",
      "organism-confirmacao-pagamento",
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
    "goal": "Processar pagamentos online de serviços e produtos.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"pagamento\" para processar pagamentos online de serviços e produtos.",
        "derivedRequirements": [
          {
            "description": "Aceitar cartão de crédito, boleto e Pix."
          },
          {
            "description": "Integração segura com gateway de pagamento."
          },
          {
            "description": "Exibir resumo do pedido e confirmação de pagamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
