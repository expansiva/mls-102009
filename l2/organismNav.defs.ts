/// <mls shortName="organismNav" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismNav",
    "type": "widget",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [
      "pluginthemeswitcher"
    ],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": [
      "tableUser",
      "tableLinks"
    ]
  },
  "planning": {
    "generalDescription": "Barra de navegação principal do site, visível para todos os usuários.",
    "goal": "Exibir logo, links principais e opções de login/logout.",
    "userStories": [
      {
        "story": "Como visitante, quero navegar facilmente entre as páginas principais do site.",
        "derivedRequirements": [
          {
            "description": "Exibir links para home, catálogo, agendamento, contato e login."
          }
        ]
      },
      {
        "story": "Como usuário logado, quero ver meu nome e opção de logout.",
        "derivedRequirements": [
          {
            "description": "Exibir nome do usuário e botão de logout quando autenticado."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
