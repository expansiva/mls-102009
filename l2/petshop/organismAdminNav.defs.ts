/// <mls shortName="organismAdminNav" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismAdminNav",
    "type": "organism",
    "devFidelity": "scaffold",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Navegação principal do painel administrativo.",
    "goal": "Permitir acesso rápido às áreas de gestão do site.",
    "userStories": [
      {
        "story": "Como administrador, quero navegar facilmente entre as áreas do painel.",
        "derivedRequirements": [
          {
            "description": "Menu com links para agendamentos, produtos e conteúdo."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Acesso restrito a usuários autenticados."
    ]
  }
}
