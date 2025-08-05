/// <mls shortName="organismBookingForm" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismBookingForm",
    "type": "widget",
    "devFidelity": "scaffold",
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
    "imports": []
  },
  "planning": {
    "generalDescription": "Formulário de agendamento de banho e tosa.",
    "goal": "Permitir que o cliente selecione serviço, data, horário e informe dados do pet.",
    "userStories": [
      {
        "story": "Como cliente, quero agendar banho e tosa escolhendo data e horário disponíveis.",
        "derivedRequirements": [
          {
            "description": "Formulário com seleção de serviço, data, horário, dados do pet e tutor."
          }
        ]
      },
      {
        "story": "Como cliente, quero receber confirmação do agendamento por e-mail.",
        "derivedRequirements": [
          {
            "description": "Integração com plugin de envio de e-mail após agendamento."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": [
      "Validação de horários disponíveis.",
      "Campos obrigatórios para dados do pet e tutor."
    ]
  }
}
