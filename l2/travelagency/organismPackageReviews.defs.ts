/// <mls shortName="organismPackageReviews" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "organismPackageReviews",
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
    "generalDescription": "Avaliações de clientes sobre o pacote.",
    "goal": "Exibir avaliações (nota e comentário) e permitir adicionar nova avaliação.",
    "userStories": [
      {
        "story": "Como cliente, quero ver avaliações de outros clientes.",
        "derivedRequirements": [
          {
            "description": "Listar avaliações com nota e comentário."
          }
        ]
      },
      {
        "story": "Como cliente autenticado, quero avaliar o pacote.",
        "derivedRequirements": [
          {
            "description": "Formulário para adicionar avaliação (nota e comentário)."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
