/// <mls shortName="organismNavAdmin" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismNavAdmin",
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
      "tableAdmin",
      "tableLinks"
    ]
  },
  "planning": {
    "generalDescription": "Barra de navegação do painel administrativo.",
    "goal": "Facilitar navegação entre áreas administrativas.",
    "userStories": [
      {
        "story": "Como administrador, quero acessar rapidamente as áreas de gestão.",
        "derivedRequirements": [
          {
            "description": "Exibir links para dashboard, produtos, agendamentos e usuários."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
