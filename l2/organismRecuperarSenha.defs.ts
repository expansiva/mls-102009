/// <mls shortName="organismRecuperarSenha" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismRecuperarSenha",
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
    "generalDescription": "Recuperação de senha.",
    "goal": "Permitir redefinir senha via e-mail.",
    "userStories": [
      {
        "story": "Como cliente, quero recuperar minha senha caso esqueça.",
        "derivedRequirements": [
          {
            "description": "Formulário para solicitar redefinição de senha."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
