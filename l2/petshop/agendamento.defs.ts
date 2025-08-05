/// <mls shortName="agendamento" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "agendamento",
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
        "tag": "organism-booking-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-booking-info",
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
    "goal": "Permitir que clientes agendem banho e tosa escolhendo data e horário.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"agendamento\" para permitir que clientes agendem banho e tosa escolhendo data e horário.",
        "derivedRequirements": [
          {
            "description": "Formulário para seleção de serviço, data e horário."
          },
          {
            "description": "Campos para dados do pet e do tutor."
          },
          {
            "description": "Envio de confirmação por e-mail ao cliente."
          },
          {
            "description": "Validação de horários disponíveis."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250805162346.1001

Step Trace: provider: openai user:'Guilherme' model:gpt-4.1 inputTokens:4422 outputTokens:2761 inputCost:2.00/1M outputCost:8.00/1M total:$0.0309 llmTime: 28838ms
finished at 2025-08-05T16:29:12.573Z
Organism used in page: [
  "organism-nav",
  "organism-booking-form",
  "organism-booking-info",
  "organism-footer-info"
] 

Images:
 []
 

*/
