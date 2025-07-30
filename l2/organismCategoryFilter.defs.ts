/// <mls shortName="organismCategoryFilter" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismCategoryFilter",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Navegação principal do site, visível em todas as páginas para facilitar o acesso às principais áreas.",
    "goal": "Exibir menu de navegação com links para Home, Serviços, Loja, Agendamento, Perfil e Login/Logout.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar facilmente todas as áreas do site para encontrar o que preciso.",
        "derivedRequirements": [
          {
            "description": "Menu responsivo com links para todas as páginas principais."
          }
        ]
      },
      {
        "story": "Como usuário logado, quero ver meu nome e acessar rapidamente meu perfil.",
        "derivedRequirements": [
          {
            "description": "Exibir nome do usuário e link para perfil quando autenticado."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser responsivo",
      "Deve suportar dois papéis de usuário"
    ]
  }
}
