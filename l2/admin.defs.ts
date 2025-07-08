/// <mls shortName="admin" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "admin",
    "type": "page",
    "group": "petshop",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      "organism-nav-admin",
      "organism-menu-admin",
      "organism-gerenciar-produtos",
      "organism-gerenciar-agendamentos",
      "organism-gerenciar-usuarios"
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Painel administrativo para gerenciar produtos, agendamentos e usuários.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"admin\" para painel administrativo para gerenciar produtos, agendamentos e usuários.",
        "derivedRequirements": [
          {
            "description": "Gerenciar catálogo de produtos (CRUD)."
          },
          {
            "description": "Gerenciar agendamentos."
          },
          {
            "description": "Gerenciar usuários (clientes)."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
