/// <mls shortName="reservation" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "reservation",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "travel",
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
        "tag": "organism-payment-status",
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
    "goal": "Permitir ao usuário reservar um pacote e realizar pagamento.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"reservation\" para permitir ao usuário reservar um pacote e realizar pagamento.",
        "derivedRequirements": [
          {
            "description": "Formulário de reserva."
          },
          {
            "description": "Integração com Mercado Pago."
          },
          {
            "description": "Confirmação de reserva."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250812203704.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4468 outputTokens:2698 inputCost:2.00/1M outputCost:8.00/1M total:$0.0305 llmTime: 40490ms
finished at 2025-08-12T20:46:09.889Z
Organism used in page: [
  "organism-nav",
  "organism-reservation-form",
  "organism-payment-status",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "{{mercado_pago_logo}}",
    "searchText": "Mercado Pago logo",
    "type": "regular",
    "height": 24,
    "width": 24,
    "toolTip": "Logo do Mercado Pago"
  },
  {
    "key": "{{success_icon}}",
    "searchText": "ícone de sucesso, check verde",
    "type": "regular",
    "height": 36,
    "width": 36,
    "toolTip": "Ícone de sucesso"
  },
  {
    "key": "{{error_icon}}",
    "searchText": "ícone de erro, X vermelho",
    "type": "regular",
    "height": 36,
    "width": 36,
    "toolTip": "Ícone de erro"
  }
]
 

*/
