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
      {
        "tag": "organism-admin-nav",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-sidebar",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-services",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-products",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-appointments",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-customers",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-footer-info",
        "bindings": [],
        "purpose": "",
        "used": true
      }
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Painel administrativo para gerenciar serviços, produtos, agendamentos, estoque e clientes.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"admin\" para painel administrativo para gerenciar serviços, produtos, agendamentos, estoque e clientes.",
        "derivedRequirements": [
          {
            "description": "Gerenciar serviços e horários"
          },
          {
            "description": "Gerenciar produtos e estoque"
          },
          {
            "description": "Visualizar e editar agendamentos"
          },
          {
            "description": "Gerenciar clientes e pets"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
