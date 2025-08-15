/// <mls shortName="adminDashboard" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "adminDashboard",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "travelagency",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      {
        "tag": "organism-nav",
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
        "tag": "organism-admin-package-management",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-reservation-management",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-review-management",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-user-management",
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
    "goal": "Painel administrativo para gerenciar pacotes, reservas e avaliações.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"adminDashboard\" para painel administrativo para gerenciar pacotes, reservas e avaliações.",
        "derivedRequirements": [
          {
            "description": "Listar, criar, editar e excluir pacotes de viagem."
          },
          {
            "description": "Listar, editar e excluir reservas."
          },
          {
            "description": "Listar, editar e excluir avaliações."
          },
          {
            "description": "Cadastro manual de administradores."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250813173620.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4939 outputTokens:5413 inputCost:2.00/1M outputCost:8.00/1M total:$0.0532 llmTime: 132911ms
finished at 2025-08-13T17:57:18.340Z
Organism used in page: [
  "organism-nav",
  "organism-admin-sidebar",
  "organism-admin-package-management",
  "organism-admin-reservation-management",
  "organism-admin-review-management",
  "organism-admin-user-management",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "admin_sidebar_logo",
    "searchText": "logo agência de viagens travel agency",
    "type": "regular",
    "height": 90,
    "width": 90,
    "toolTip": "Logo institucional Travel Agency"
  },
  {
    "key": "package1_img",
    "searchText": "praia rio de janeiro viagem pacote",
    "type": "thumb",
    "height": 48,
    "width": 48,
    "toolTip": "Foto do pacote Rio de Janeiro"
  },
  {
    "key": "package2_img",
    "searchText": "praia salvador viagem pacote",
    "type": "thumb",
    "height": 48,
    "width": 48,
    "toolTip": "Foto do pacote Salvador"
  }
]
 

*/
