/// <mls shortName="organismReviewForm" project="102009" folder="travel" groupName="travel" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "travel",
    "shortName": "organismReviewForm",
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
    "generalDescription": "Formulário para envio de avaliação (apenas autenticado).",
    "goal": "Permitir que usuários autenticados enviem avaliações.",
    "userStories": [
      {
        "story": "Como usuário autenticado, quero avaliar um pacote que utilizei.",
        "derivedRequirements": [
          {
            "description": "Formulário com nota, comentário e botão de envio (apenas autenticado)."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Exibir mensagem para não autenticados solicitando login."
    ]
  }
}
