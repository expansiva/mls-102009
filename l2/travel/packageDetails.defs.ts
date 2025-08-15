/// <mls shortName="packageDetails" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "packageDetails",
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
        "tag": "organism-package-details",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-reviews-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-review-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-reservation-cta",
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
    "goal": "Exibir detalhes completos de um pacote e permitir reserva.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"packageDetails\" para exibir detalhes completos de um pacote e permitir reserva.",
        "derivedRequirements": [
          {
            "description": "Mostrar informações detalhadas do pacote."
          },
          {
            "description": "Exibir avaliações públicas."
          },
          {
            "description": "Permitir reserva online."
          },
          {
            "description": "Permitir envio de avaliação (apenas autenticado)."
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

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4656 outputTokens:4433 inputCost:2.00/1M outputCost:8.00/1M total:$0.0448 llmTime: 51512ms
finished at 2025-08-12T20:45:22.349Z
Organism used in page: [
  "organism-nav",
  "organism-package-details",
  "organism-reviews-list",
  "organism-review-form",
  "organism-reservation-cta",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "img_package_main",
    "searchText": "Fernando de Noronha praia paisagem",
    "type": "regular",
    "height": 480,
    "width": 640,
    "toolTip": "Foto principal do pacote - Fernando de Noronha"
  },
  {
    "key": "img_package_thumb1",
    "searchText": "Praia do Sancho Noronha",
    "type": "thumb",
    "height": 54,
    "width": 72,
    "toolTip": "Miniatura da Praia do Sancho"
  },
  {
    "key": "img_package_thumb2",
    "searchText": "Trilha ecológica Noronha",
    "type": "thumb",
    "height": 54,
    "width": 72,
    "toolTip": "Miniatura de trilha ecológica"
  },
  {
    "key": "img_package_thumb3",
    "searchText": "Mergulho Fernando de Noronha",
    "type": "thumb",
    "height": 54,
    "width": 72,
    "toolTip": "Miniatura de mergulho"
  }
]
 

*/
