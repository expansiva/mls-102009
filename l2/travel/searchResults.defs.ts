/// <mls shortName="searchResults" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "searchResults",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "travel",
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
        "tag": "organism-filter-panel",
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
    "goal": "Exibir resultados de busca de pacotes de viagem.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"searchResults\" para exibir resultados de busca de pacotes de viagem.",
        "derivedRequirements": [
          {
            "description": "Listar pacotes filtrados conforme busca."
          },
          {
            "description": "Permitir refinar filtros."
          },
          {
            "description": "Acesso rápido à reserva de cada pacote."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250812203704.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4390 outputTokens:4411 inputCost:2.00/1M outputCost:8.00/1M total:$0.0441 llmTime: 56065ms
finished at 2025-08-12T20:44:26.094Z
Organism used in page: [
  "organism-nav",
  "organism-filter-panel",
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
    "width": 220,
    "toolTip": "Praia de Copacabana, Rio de Janeiro"
  },
  {
    "key": "img_salvador",
    "searchText": "Pelourinho Salvador Bahia",
    "type": "regular",
    "height": 140,
    "width": 220,
    "toolTip": "Pelourinho, Salvador"
  },
  {
    "key": "img_gramado",
    "searchText": "Centro de Gramado Rio Grande do Sul",
    "type": "regular",
    "height": 140,
    "width": 220,
    "toolTip": "Centro de Gramado"
  },
  {
    "key": "img_floripa",
    "searchText": "Praia Florianópolis Santa Catarina",
    "type": "regular",
    "height": 140,
    "width": 220,
    "toolTip": "Praia em Florianópolis"
  }
]
 

*/
