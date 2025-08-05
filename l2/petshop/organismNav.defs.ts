/// <mls shortName="organismNav" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismNav",
    "type": "widget",
    "devFidelity": "scaffold",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "Navegação principal do site, visível em todas as páginas públicas.",
    "goal": "Exibir logo, menu de navegação e links para redes sociais.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar facilmente todas as áreas do site pelo menu.",
        "derivedRequirements": [
          {
            "description": "Menu responsivo com links para Home, Agendamento, Produtos e Contato."
          }
        ]
      },
      {
        "story": "Como visitante, quero ver o logo do petshop no topo do site.",
        "derivedRequirements": [
          {
            "description": "Exibir logo em destaque na barra de navegação."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser responsivo.",
      "Links para redes sociais devem ser acessíveis."
    ]
  }
}
