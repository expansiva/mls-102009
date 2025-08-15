/// <mls shortName="userProfile" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "userProfile",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "travel",
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
        "tag": "organism-user-profile",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-user-reservations",
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
    "goal": "Permitir ao usuário visualizar e editar seus dados e reservas.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"userProfile\" para permitir ao usuário visualizar e editar seus dados e reservas.",
        "derivedRequirements": [
          {
            "description": "Visualizar dados pessoais."
          },
          {
            "description": "Editar perfil."
          },
          {
            "description": "Listar reservas realizadas."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250812203704.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:4548 outputTokens:3171 inputCost:2.00/1M outputCost:8.00/1M total:$0.0345 llmTime: 84497ms
finished at 2025-08-12T20:48:16.758Z
Organism used in page: [
  "organism-nav",
  "organism-user-profile",
  "organism-user-reservations",
  "organism-footer-info"
] 

Images:
 [
  {
    "key": "{{user_avatar}}",
    "searchText": "user avatar profile photo",
    "type": "regular",
    "height": 96,
    "width": 96,
    "toolTip": "Foto de perfil do usuário"
  },
  {
    "key": "{{package_1}}",
    "searchText": "Rio de Janeiro travel beach",
    "type": "regular",
    "height": 96,
    "width": 96,
    "toolTip": "Imagem do pacote Rio de Janeiro"
  },
  {
    "key": "{{package_2}}",
    "searchText": "Salvador carnaval travel",
    "type": "regular",
    "height": 96,
    "width": 96,
    "toolTip": "Imagem do pacote Salvador"
  },
  {
    "key": "{{package_3}}",
    "searchText": "Foz do Iguaçu nature travel",
    "type": "regular",
    "height": 96,
    "width": 96,
    "toolTip": "Imagem do pacote Foz do Iguaçu"
  }
]
 

*/
