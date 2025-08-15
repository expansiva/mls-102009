/// <mls shortName="organismTestimonials" project="102009" folder="traveldreams" groupName="traveldreams" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "traveldreams",
    "shortName": "organismTestimonials",
    "type": "organism",
    "devFidelity": "scaffold",
    "group": "traveldreams",
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
    "generalDescription": "Seção de depoimentos de clientes.",
    "goal": "Exibir 3 testemunhos de clientes satisfeitos, com nome e foto.",
    "userStories": [
      {
        "story": "Como visitante, quero ler depoimentos reais para confiar na agência.",
        "derivedRequirements": [
          {
            "description": "Exibir 3 depoimentos com nome, foto e texto curto."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Fotos devem ter texto alternativo.",
      "Textos devem ser breves e inspiradores."
    ]
  }
}
