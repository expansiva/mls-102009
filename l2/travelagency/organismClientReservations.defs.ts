/// <mls shortName="organismClientReservations" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "organismClientReservations",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travelagency",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Listagem de reservas do cliente.",
    "goal": "Exibir todas as reservas feitas pelo cliente e permitir cancelamento.",
    "userStories": [
      {
        "story": "Como cliente, quero ver minhas reservas e poder cancelar se necessário.",
        "derivedRequirements": [
          {
            "description": "Listar reservas e permitir cancelamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
