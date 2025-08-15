/// <mls shortName="organismUserReservations" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismUserReservations",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travel",
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
    "generalDescription": "Lista de reservas do usuário.",
    "goal": "Permitir ao usuário visualizar suas reservas passadas e futuras.",
    "userStories": [
      {
        "story": "Como usuário autenticado, quero ver todas as minhas reservas.",
        "derivedRequirements": [
          {
            "description": "Listar reservas com status, datas e detalhes do pacote."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
