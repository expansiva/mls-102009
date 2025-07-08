/// <mls shortName="organismHistoricoAgendamentos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismHistoricoAgendamentos",
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
      "tableAgendamento"
    ]
  },
  "planning": {
    "generalDescription": "Histórico de agendamentos do cliente.",
    "goal": "Permitir visualizar, cancelar ou reagendar agendamentos.",
    "userStories": [
      {
        "story": "Como cliente, quero ver meus agendamentos passados e futuros.",
        "derivedRequirements": [
          {
            "description": "Listar agendamentos do cliente, com opção de cancelar/reagendar se permitido."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
