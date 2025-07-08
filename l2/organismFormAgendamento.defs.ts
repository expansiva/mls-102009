/// <mls shortName="organismFormAgendamento" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismFormAgendamento",
    "type": "widget",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": [
      "tableAgendamento",
      "tableDisponibilidade"
    ]
  },
  "planning": {
    "generalDescription": "Formulário de agendamento de banho e tosa.",
    "goal": "Permitir ao cliente escolher data/hora e agendar serviço.",
    "userStories": [
      {
        "story": "Como cliente, quero agendar banho e tosa escolhendo data e horário disponíveis.",
        "derivedRequirements": [
          {
            "description": "Exibir calendário e horários disponíveis, validar antecedência mínima de 24h."
          }
        ]
      },
      {
        "story": "Como cliente, quero receber confirmação por e-mail após agendar.",
        "derivedRequirements": [
          {
            "description": "Enviar e-mail de confirmação após agendamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
