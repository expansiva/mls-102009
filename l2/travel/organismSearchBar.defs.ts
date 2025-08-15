/// <mls shortName="organismSearchBar" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismSearchBar",
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
    "generalDescription": "Barra de busca de pacotes, presente na home.",
    "goal": "Permitir busca rápida por destino, data ou tipo de pacote.",
    "userStories": [
      {
        "story": "Como usuário, quero buscar pacotes por destino e data.",
        "derivedRequirements": [
          {
            "description": "Campos de destino, data e botão de busca."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser acessível por teclado e leitores de tela."
    ]
  }
}
