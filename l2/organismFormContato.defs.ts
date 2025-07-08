/// <mls shortName="organismFormContato" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "organismFormContato",
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
      "tableContato"
    ]
  },
  "planning": {
    "generalDescription": "Formulário de contato.",
    "goal": "Permitir envio de mensagem ao petshop.",
    "userStories": [
      {
        "story": "Como visitante, quero enviar dúvidas ou solicitações ao petshop.",
        "derivedRequirements": [
          {
            "description": "Formulário com campos obrigatórios e envio de mensagem."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
