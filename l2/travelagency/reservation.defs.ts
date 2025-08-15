/// <mls shortName="reservation" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "reservation",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "travelagency",
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
        "tag": "organism-reservation-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-payment-integration",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-reservation-confirmation",
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
    "goal": "Permitir ao cliente reservar um pacote de viagem e efetuar pagamento.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"reservation\" para permitir ao cliente reservar um pacote de viagem e efetuar pagamento.",
        "derivedRequirements": [
          {
            "description": "Formulário de reserva com dados do cliente e do pacote."
          },
          {
            "description": "Integração com meio de pagamento online (cartão de crédito)."
          },
          {
            "description": "Confirmação da reserva."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250813173620.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4585 outputTokens:3736 inputCost:2.00/1M outputCost:8.00/1M total:$0.0391 llmTime: 92849ms
finished at 2025-08-13T17:52:01.735Z
Organism used in page: [
  "organism-nav",
  "organism-reservation-form",
  "organism-payment-integration",
  "organism-reservation-confirmation",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "payment_secure_icon",
    "searchText": "ícone de cadeado seguro pagamento",
    "type": "regular",
    "height": 24,
    "width": 24,
    "toolTip": "Pagamento seguro"
  },
  {
    "key": "success_icon",
    "searchText": "ícone de sucesso checkmark verde",
    "type": "regular",
    "height": 56,
    "width": 56,
    "toolTip": "Reserva confirmada"
  }
]
 

*/
