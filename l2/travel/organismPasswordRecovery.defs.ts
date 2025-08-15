/// <mls shortName="organismPasswordRecovery" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismPasswordRecovery",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travel",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Formulário para recuperação de senha.",
    "goal": "Permitir que usuários recuperem o acesso à conta.",
    "userStories": [
      {
        "story": "Como usuário, quero recuperar minha senha caso esqueça.",
        "derivedRequirements": [
          {
            "description": "Campo de e-mail e botão para envio de instruções."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
