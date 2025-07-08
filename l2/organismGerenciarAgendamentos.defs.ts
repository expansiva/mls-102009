/// <mls shortName="organismGerenciarAgendamentos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismGerenciarAgendamentos",
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
    "generalDescription": "Gestão de agendamentos no painel admin.",
    "goal": "Permitir visualizar, confirmar e cancelar agendamentos.",
    "userStories": [
      {
        "story": "Como administrador, quero gerenciar todos os agendamentos do petshop.",
        "derivedRequirements": [
          {
            "description": "Listar, confirmar e cancelar agendamentos."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
