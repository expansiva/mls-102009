/// <mls shortName="adminPanel" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "adminPanel",
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
        "tag": "organism-admin-dashboard",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-admin-bookings",
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
        "tag": "organism-admin-content",
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
    "goal": "Permitir que administradores gerenciem agendamentos, produtos e conteúdo do site.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"adminPanel\" para permitir que administradores gerenciem agendamentos, produtos e conteúdo do site.",
        "derivedRequirements": [
          {
            "description": "Login restrito para administradores."
          },
          {
            "description": "Gestão de agendamentos (visualizar, aprovar, cancelar)."
          },
          {
            "description": "Gestão de produtos (adicionar, editar, remover)."
          },
          {
            "description": "Gestão de conteúdo do site."
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

Step Trace: provider: openai user:'Guilherme' model:gpt-4.1 inputTokens:4724 outputTokens:7364 inputCost:2.00/1M outputCost:8.00/1M total:$0.0684 llmTime: 75567ms
finished at 2025-08-05T16:32:09.066Z
Organism used in page: [
  "organism-admin-nav",
  "organism-admin-sidebar",
  "organism-admin-dashboard",
  "organism-admin-bookings",
  "organism-admin-products",
  "organism-admin-content",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "admin_nav_logo",
    "searchText": "petshop admin logo",
    "type": "regular",
    "height": 40,
    "width": 120,
    "toolTip": "Logo do painel administrativo do petshop"
  },
  {
    "key": "admin_nav_logout",
    "searchText": "logout icon",
    "type": "thumb",
    "height": 24,
    "width": 24,
    "toolTip": "Ícone de sair/logout"
  },
  {
    "key": "admin_dashboard_chart_bookings",
    "searchText": "gráfico de agendamentos pets",
    "type": "regular",
    "height": 120,
    "width": 260,
    "toolTip": "Gráfico de agendamentos dos últimos 7 dias"
  },
  {
    "key": "admin_dashboard_chart_sales",
    "searchText": "gráfico de vendas petshop",
    "type": "regular",
    "height": 120,
    "width": 260,
    "toolTip": "Gráfico de vendas dos últimos 7 dias"
  },
  {
    "key": "admin_products_img_racao",
    "searchText": "ração premium cães",
    "type": "thumb",
    "height": 48,
    "width": 48,
    "toolTip": "Imagem de ração premium para cães"
  },
  {
    "key": "admin_products_img_brinquedo",
    "searchText": "brinquedo bola gato",
    "type": "thumb",
    "height": 48,
    "width": 48,
    "toolTip": "Imagem de brinquedo bola para gatos"
  },
  {
    "key": "admin_products_img_shampoo",
    "searchText": "shampoo pet neutro",
    "type": "thumb",
    "height": 48,
    "width": 48,
    "toolTip": "Imagem de shampoo pet neutro"
  },
  {
    "key": "admin_content_banner",
    "searchText": "banner petshop alegre",
    "type": "regular",
    "height": 180,
    "width": 320,
    "toolTip": "Banner institucional da home do petshop"
  }
]
 

*/
