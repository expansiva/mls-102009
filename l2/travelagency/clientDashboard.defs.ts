/// <mls shortName="clientDashboard" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "clientDashboard",
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
        "tag": "organism-client-sidebar",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-client-reservations",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-client-reviews",
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
    "goal": "Painel do cliente para gerenciar reservas e avaliações.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"clientDashboard\" para painel do cliente para gerenciar reservas e avaliações.",
        "derivedRequirements": [
          {
            "description": "Listar reservas do cliente."
          },
          {
            "description": "Permitir cancelar reservas."
          },
          {
            "description": "Listar avaliações feitas e permitir edição/exclusão."
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

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4659 outputTokens:3160 inputCost:2.00/1M outputCost:8.00/1M total:$0.0346 llmTime: 76040ms
finished at 2025-08-13T17:54:58.524Z
Organism used in page: [
  "organism-nav",
  "organism-client-sidebar",
  "organism-client-reservations",
  "organism-client-reviews",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "img_reserva_rio",
    "searchText": "Rio de Janeiro praia viagem",
    "type": "regular",
    "height": 100,
    "width": 100,
    "toolTip": "Imagem do pacote Rio de Janeiro"
  },
  {
    "key": "img_reserva_gramado",
    "searchText": "Gramado Natal Luz viagem",
    "type": "regular",
    "height": 100,
    "width": 100,
    "toolTip": "Imagem do pacote Gramado"
  },
  {
    "key": "img_reserva_bahia",
    "searchText": "Bahia praia viagem",
    "type": "regular",
    "height": 100,
    "width": 100,
    "toolTip": "Imagem do pacote Bahia"
  }
]
 

*/
