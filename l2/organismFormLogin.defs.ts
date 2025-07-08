/// <mls shortName="organismFormLogin" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismFormLogin",
    "type": "widget",
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
    "imports": [
      "tableUsuario"
    ]
  },
  "planning": {
    "generalDescription": "Formulário de login tradicional.",
    "goal": "Permitir login de administradores e clientes.",
    "userStories": [
      {
        "story": "Como cliente, quero acessar minha conta usando e-mail e senha.",
        "derivedRequirements": [
          {
            "description": "Formulário de login com validação."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
