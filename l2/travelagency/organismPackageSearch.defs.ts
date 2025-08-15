/// <mls shortName="organismPackageSearch" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "organismPackageSearch",
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
    "generalDescription": "Busca de pacotes na home.",
    "goal": "Permitir busca rápida de pacotes por destino, data e preço.",
    "userStories": [
      {
        "story": "Como visitante, quero buscar pacotes facilmente usando filtros.",
        "derivedRequirements": [
          {
            "description": "Campos de filtro por destino, data e preço."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser rápido e responsivo."
    ]
  }
}
