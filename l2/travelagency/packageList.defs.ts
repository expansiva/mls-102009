/// <mls shortName="packageList" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "packageList",
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
        "tag": "organism-package-filters",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-package-list",
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
    "goal": "Exibir lista de pacotes de viagem com filtros avançados.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"packageList\" para exibir lista de pacotes de viagem com filtros avançados.",
        "derivedRequirements": [
          {
            "description": "Listar pacotes disponíveis."
          },
          {
            "description": "Permitir filtros por destino, data e preço."
          },
          {
            "description": "Permitir navegação para detalhes do pacote."
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

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4381 outputTokens:2696 inputCost:2.00/1M outputCost:8.00/1M total:$0.0303 llmTime: 82450ms
finished at 2025-08-13T17:48:19.804Z
Organism used in page: [
  "organism-nav",
  "organism-package-filters",
  "organism-package-list",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "img_rio",
    "searchText": "Praia de Copacabana Rio de Janeiro",
    "type": "regular",
    "height": 140,
    "width": 180,
    "toolTip": "Praia de Copacabana, Rio de Janeiro"
  },
  {
    "key": "img_gramado",
    "searchText": "Centro de Gramado RS",
    "type": "regular",
    "height": 140,
    "width": 180,
    "toolTip": "Centro de Gramado, RS"
  },
  {
    "key": "img_salvador",
    "searchText": "Farol da Barra Salvador",
    "type": "regular",
    "height": 140,
    "width": 180,
    "toolTip": "Farol da Barra, Salvador"
  }
]
 

*/
