/// <mls shortName="organismSubscribe" project="102009" folder="traveldreams" groupName="traveldreams" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "traveldreams",
    "shortName": "organismSubscribe",
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
    "generalDescription": "Área de inscrição para novidades.",
    "goal": "Permitir que o usuário insira seu e-mail para receber novidades, exibindo mensagem de confirmação após envio.",
    "userStories": [
      {
        "story": "Como visitante, quero cadastrar meu e-mail para receber novidades e ver uma mensagem de confirmação após o envio.",
        "derivedRequirements": [
          {
            "description": "Campo de e-mail com validação."
          },
          {
            "description": "Mensagem de agradecimento após envio."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Coletar apenas o e-mail.",
      "Mensagem de confirmação deve ser acessível."
    ]
  }
}
