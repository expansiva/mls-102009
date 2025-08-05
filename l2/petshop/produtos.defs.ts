/// <mls shortName="produtos" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "produtos",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "petshop",
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
        "tag": "organism-product-filters",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-product-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-cart-summary",
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
    "goal": "Exibir catálogo de produtos e permitir compra online.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"produtos\" para exibir catálogo de produtos e permitir compra online.",
        "derivedRequirements": [
          {
            "description": "Listagem de produtos com filtros por categoria."
          },
          {
            "description": "Detalhes do produto."
          },
          {
            "description": "Carrinho de compras."
          },
          {
            "description": "Checkout com pagamento via cartão de crédito e Pix."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250805162346.1001

Step Trace: provider: openai user:'Guilherme' model:gpt-4.1 inputTokens:4487 outputTokens:4785 inputCost:2.00/1M outputCost:8.00/1M total:$0.0473 llmTime: 59382ms
finished at 2025-08-05T16:30:14.558Z
Organism used in page: [
  "organism-nav",
  "organism-product-filters",
  "organism-product-list",
  "organism-cart-summary",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "img_racao_cao",
    "searchText": "dog food bag premium",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Ração Premium para Cães"
  },
  {
    "key": "img_brinq_gato",
    "searchText": "cat interactive toy colorful",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Brinquedo Interativo para Gatos"
  },
  {
    "key": "img_shampoo",
    "searchText": "pet shampoo bottle",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Shampoo Suave para Pets"
  },
  {
    "key": "img_caminha",
    "searchText": "pet bed cozy modern",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Caminha Aconchegante"
  },
  {
    "key": "img_semente_ave",
    "searchText": "bird food seeds mix",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Sementes Selecionadas para Aves"
  },
  {
    "key": "img_bebedouro",
    "searchText": "automatic pet water dispenser",
    "type": "regular",
    "height": 400,
    "width": 400,
    "toolTip": "Bebedouro Automático"
  }
]
 

*/
