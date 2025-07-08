/// <mls shortName="login" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "login",
    "type": "page",
    "group": "petshop",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      "organism-form-login",
      "organism-login-social",
      "organism-recuperar-senha"
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Permitir login de administradores e clientes, incluindo login social.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"login\" para permitir login de administradores e clientes, incluindo login social.",
        "derivedRequirements": [
          {
            "description": "Login tradicional (e-mail/senha)."
          },
          {
            "description": "Login social via Facebook e Instagram."
          },
          {
            "description": "Recuperação de senha."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
