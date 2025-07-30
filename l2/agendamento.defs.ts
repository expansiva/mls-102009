/// <mls shortName="agendamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "agendamento",
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
        "tag": "organism-appointment-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-pet-selector",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-appointment-confirmation",
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
    "goal": "Permitir ao cliente agendar serviços, visualizar horários disponíveis e receber confirmação automática.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"agendamento\" para permitir ao cliente agendar serviços, visualizar horários disponíveis e receber confirmação automática.",
        "derivedRequirements": [
          {
            "description": "Formulário de agendamento"
          },
          {
            "description": "Seleção de serviço, data e horário"
          },
          {
            "description": "Cadastro ou seleção de pet"
          },
          {
            "description": "Confirmação automática e lembrete por email"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
