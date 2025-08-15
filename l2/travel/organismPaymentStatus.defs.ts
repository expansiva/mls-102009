/// <mls shortName="organismPaymentStatus" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismPaymentStatus",
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
    "generalDescription": "Exibição do status do pagamento após reserva.",
    "goal": "Informar usuário sobre sucesso ou falha no pagamento.",
    "userStories": [
      {
        "story": "Como usuário, quero saber se meu pagamento foi aprovado.",
        "derivedRequirements": [
          {
            "description": "Exibir mensagem de sucesso ou erro após tentativa de pagamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
