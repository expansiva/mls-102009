/// <mls shortName="organismRedesSociais" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismRedesSociais",
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
      "tableLinks"
    ]
  },
  "planning": {
    "generalDescription": "Links e botões para redes sociais.",
    "goal": "Permitir acesso e compartilhamento nas redes sociais.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar as redes sociais do petshop.",
        "derivedRequirements": [
          {
            "description": "Exibir botões para Facebook e Instagram."
          }
        ]
      },
      {
        "story": "Como visitante, quero compartilhar produtos e serviços nas redes sociais.",
        "derivedRequirements": [
          {
            "description": "Permitir compartilhamento de links para Facebook e Instagram."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
