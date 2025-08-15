/// <mls shortName="organismNav" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismNav",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travel",
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
    "generalDescription": "Navegação principal do site, presente em todas as páginas.",
    "goal": "Exibir logo, links principais (Home, Pacotes, Login/Perfil) e acesso à autenticação.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar facilmente as principais áreas do site.",
        "derivedRequirements": [
          {
            "description": "Links para Home, Busca de Pacotes, Login/Perfil."
          }
        ]
      },
      {
        "story": "Como usuário autenticado, quero acessar meu perfil rapidamente.",
        "derivedRequirements": [
          {
            "description": "Exibir avatar/nome e link para perfil quando autenticado."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve ser responsivo e acessível por teclado.",
      "Deve usar ARIA para navegação."
    ]
  }
}
