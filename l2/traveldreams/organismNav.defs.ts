/// <mls shortName="organismNav" project="102009" folder="traveldreams" groupName="traveldreams" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "traveldreams",
    "shortName": "organismNav",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "traveldreams",
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
    "generalDescription": "Topo da página, navegação principal, visível em todas as resoluções.",
    "goal": "Exibir o logo da agência e links de navegação one page: Destinations, Hotels, Flights, Bookings, Login, Sign UP.",
    "userStories": [
      {
        "story": "Como visitante, quero ver o logo e acessar rapidamente qualquer seção da página clicando nos links do menu.",
        "derivedRequirements": [
          {
            "description": "Logo visível e clicável."
          },
          {
            "description": "Links de navegação com scroll suave para as seções correspondentes."
          },
          {
            "description": "Menu acessível por teclado e leitores de tela."
          }
        ]
      },
      {
        "story": "Como usuário mobile, quero acessar o menu facilmente em telas pequenas.",
        "derivedRequirements": [
          {
            "description": "Menu responsivo com botão de abertura em mobile."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Deve seguir o layout de referência.",
      "Links não devem recarregar a página."
    ]
  }
}
