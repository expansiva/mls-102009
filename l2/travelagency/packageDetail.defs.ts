/// <mls shortName="packageDetail" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "packageDetail",
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
        "tag": "organism-package-detail",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-package-gallery",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-package-reviews",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-package-reservation-cta",
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
    "goal": "Exibir detalhes completos de um pacote de viagem, avaliações e opção de reserva.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"packageDetail\" para exibir detalhes completos de um pacote de viagem, avaliações e opção de reserva.",
        "derivedRequirements": [
          {
            "description": "Mostrar informações detalhadas do pacote (destino, datas, preço, descrição, fotos)."
          },
          {
            "description": "Exibir avaliações de clientes (nota e comentário)."
          },
          {
            "description": "Permitir reserva (para clientes autenticados)."
          },
          {
            "description": "Permitir adicionar avaliação (para clientes autenticados)."
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

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4678 outputTokens:4514 inputCost:2.00/1M outputCost:8.00/1M total:$0.0455 llmTime: 118147ms
finished at 2025-08-13T17:50:21.881Z
Organism used in page: [
  "organism-nav",
  "organism-package-detail",
  "organism-package-gallery",
  "organism-package-reviews",
  "organism-package-reservation-cta",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "img_rio_main",
    "searchText": "Vista aérea do Rio de Janeiro com o Cristo Redentor",
    "type": "regular",
    "height": 320,
    "width": 520,
    "toolTip": "Vista aérea do Rio de Janeiro com o Cristo Redentor"
  },
  {
    "key": "img_rio_thumb1",
    "searchText": "Cristo Redentor Rio de Janeiro",
    "type": "thumb",
    "height": 48,
    "width": 72,
    "toolTip": "Cristo Redentor"
  },
  {
    "key": "img_rio_thumb2",
    "searchText": "Praia de Copacabana Rio de Janeiro",
    "type": "thumb",
    "height": 48,
    "width": 72,
    "toolTip": "Praia de Copacabana"
  },
  {
    "key": "img_rio_thumb3",
    "searchText": "Pão de Açúcar Rio de Janeiro",
    "type": "thumb",
    "height": 48,
    "width": 72,
    "toolTip": "Pão de Açúcar"
  },
  {
    "key": "img_rio_thumb4",
    "searchText": "Hotel com piscina Rio de Janeiro",
    "type": "thumb",
    "height": 48,
    "width": 72,
    "toolTip": "Hotel com piscina"
  }
]
 

*/
