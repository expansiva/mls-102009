/// <mls shortName="organismGerenciarUsuarios" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismGerenciarUsuarios",
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
    "generalDescription": "Gestão de usuários no painel admin.",
    "goal": "Permitir visualizar e gerenciar clientes.",
    "userStories": [
      {
        "story": "Como administrador, quero ver e gerenciar os dados dos clientes.",
        "derivedRequirements": [
          {
            "description": "Listar usuários, editar dados e alterar status."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
