/// <mls shortName="pageContact" project="102009" enhancement="_blank" folder="petshop" />

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "pageContact",
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
        "tag": "organism-contact-form",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-contact-details",
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
    "goal": "Facilitar contato do cliente com o petshop.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"contato\" para facilitar contato do cliente com o petshop.",
        "derivedRequirements": [
          {
            "description": "Formulário de contato."
          },
          {
            "description": "Exibir telefone, e-mail e endereço."
          },
          {
            "description": "Links para redes sociais."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}