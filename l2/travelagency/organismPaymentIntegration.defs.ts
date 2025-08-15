/// <mls shortName="organismPaymentIntegration" project="102009" folder="travelagency" groupName="travelagency" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travelagency",
    "shortName": "organismPaymentIntegration",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "travelagency",
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
    "generalDescription": "Integração com meio de pagamento.",
    "goal": "Permitir pagamento online via cartão de crédito.",
    "userStories": [
      {
        "story": "Como cliente, quero pagar minha reserva com cartão de crédito.",
        "derivedRequirements": [
          {
            "description": "Integração com Stripe para processar pagamentos."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}
