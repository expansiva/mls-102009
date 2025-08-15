/// <mls shortName="home" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "home",
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
        "tag": "organism-hero-banner",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-package-search",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-featured-packages",
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
    "goal": "Apresentar a plataforma, permitir busca e navegação inicial dos pacotes de viagem.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"home\" para apresentar a plataforma, permitir busca e navegação inicial dos pacotes de viagem.",
        "derivedRequirements": [
          {
            "description": "Exibir destaque institucional e chamada para ação."
          },
          {
            "description": "Mostrar busca de pacotes com filtros por destino, data e preço."
          },
          {
            "description": "Listar pacotes em destaque."
          },
          {
            "description": "Acesso ao login/cadastro."
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

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4428 outputTokens:4483 inputCost:2.00/1M outputCost:8.00/1M total:$0.0447 llmTime: 122968ms
finished at 2025-08-13T17:46:47.925Z
Organism used in page: [
  "organism-nav",
  "organism-hero-banner",
  "organism-package-search",
  "organism-featured-packages",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "{{logo_travel_agency}}",
    "searchText": "travel agency logo",
    "type": "regular",
    "height": 40,
    "width": 160,
    "toolTip": "Logo da Travel Agency"
  },
  {
    "key": "{{hero_banner_travel}}",
    "searchText": "travel landscape banner",
    "type": "full",
    "height": 320,
    "width": 480,
    "toolTip": "Paisagem de viagem inspiradora"
  },
  {
    "key": "{{package_rio}}",
    "searchText": "Rio de Janeiro travel",
    "type": "regular",
    "height": 160,
    "width": 320,
    "toolTip": "Imagem de pacote para o Rio de Janeiro"
  },
  {
    "key": "{{package_paris}}",
    "searchText": "Paris travel",
    "type": "regular",
    "height": 160,
    "width": 320,
    "toolTip": "Imagem de pacote para Paris"
  },
  {
    "key": "{{package_gramado}}",
    "searchText": "Gramado travel",
    "type": "regular",
    "height": 160,
    "width": 320,
    "toolTip": "Imagem de pacote para Gramado"
  }
]
 

*/
