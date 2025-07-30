/// <mls shortName="servicos" project="102009" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "",
    "shortName": "servicos",
    "type": "page",
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
        "tag": "organism-services-list",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-service-details",
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
    "goal": "Listar e detalhar os serviços oferecidos pelo petshop, com opção de agendamento.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"servicos\" para listar e detalhar os serviços oferecidos pelo petshop, com opção de agendamento.",
        "derivedRequirements": [
          {
            "description": "Listar serviços: banho, tosa, consulta veterinária, vacinação"
          },
          {
            "description": "Exibir detalhes e preços"
          },
          {
            "description": "Permitir agendamento online"
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
