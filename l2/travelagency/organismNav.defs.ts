/// <mls shortName="organismNav" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "organismNav",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travelagency",
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
    "generalDescription": "Barra de navegação principal, presente em todas as páginas.",
    "goal": "Exibir logo, links principais (Home, Pacotes, Login/Cadastro ou Painel), e acesso rápido ao painel do usuário.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar facilmente as principais áreas do site.",
        "derivedRequirements": [
          {
            "description": "Links para Home, Pacotes, Login/Cadastro."
          }
        ]
      },
      {
        "story": "Como usuário autenticado, quero acessar meu painel rapidamente.",
        "derivedRequirements": [
          {
            "description": "Exibir botão/painel do usuário autenticado."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser responsivo.",
      "Deve exibir logo institucional."
    ]
  }
}
