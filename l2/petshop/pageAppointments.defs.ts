/// <mls shortName="pageAppointments" project="102009" enhancement="_blank" folder="petshop" />

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "pageAppointments",
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
