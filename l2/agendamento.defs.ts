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
      "organism-nav",
      "organism-form-agendamento",
      "organism-historico-agendamentos",
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
    "goal": "Permitir que clientes agendem banho e tosa, visualizem e gerenciem seus agendamentos.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"agendamento\" para permitir que clientes agendem banho e tosa, visualizem e gerenciem seus agendamentos.",
        "derivedRequirements": [
          {
            "description": "Escolher data e horário disponíveis."
          },
          {
            "description": "Receber confirmação por e-mail."
          },
          {
            "description": "Permitir cancelamento/reagendamento com antecedência mínima de 24h."
          },
          {
            "description": "Visualizar histórico de agendamentos."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
