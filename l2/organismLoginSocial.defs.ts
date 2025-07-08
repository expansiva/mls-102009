/// <mls shortName="organismLoginSocial" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismLoginSocial",
    "type": "widget",
    "group": "petshop",
    "tags": [
      "lit",
      "organism"
    ]
  },
  "references": {
    "widgets": [],
    "plugins": [
      "pluginfacebook",
      "plugininstagram"
    ],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": [
      "tableUsuario"
    ]
  },
  "planning": {
    "generalDescription": "Login social via Facebook e Instagram.",
    "goal": "Facilitar cadastro e login usando redes sociais.",
    "userStories": [
      {
        "story": "Como cliente, quero fazer login rapidamente usando minha conta do Facebook ou Instagram.",
        "derivedRequirements": [
          {
            "description": "Botões de login social integrados."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
