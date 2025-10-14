/// <mls shortName="organismAdminServiceEdit" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />
export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismAdminServiceEdit",
    "type": "organism",
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
    "generalDescription": "Criar um formulário de edição para os dados de um serviço no site do petshop, permitindo que administradores modifiquem informações de registro e serviço, com botões para salvar alterações ou voltar.",
    "goal": "Facilitar a gestão administrativa de serviços, permitindo edição de detalhes como nome, descrição, preços, duração e adequação a espécies e tamanhos, integrando-se ao painel administrativo do petshop.",
    "userStories": [
      {
        "story": "Como administrador, quero editar os dados de registro do serviço (nome, descrição curta e código) para manter as informações atualizadas.",
        "derivedRequirements": [
          {
            "description": "Campo de entrada para 'name' (texto obrigatório).",
            "done": false
          },
          {
            "description": "Campo de entrada para 'descriptionShort' (texto obrigatório).",
            "done": false
          },
          {
            "description": "Campo de entrada para 'serviceCode' (texto obrigatório, único).",
            "done": false
          }
        ]
      },
      {
        "story": "Como administrador, quero editar os dados do serviço (categoria, preços, duração, adequação a espécies e tamanhos, recursos necessários e comissão do funcionário) para ajustar ofertas e operações.",
        "derivedRequirements": [
          {
            "description": "Campo de seleção para 'category' (lista pré-definida, ex.: Banho & Tosa).",
            "done": false
          },
          {
            "description": "Campo numérico para 'priceRegular' (valor monetário obrigatório).",
            "done": false
          },
          {
            "description": "Campo numérico para 'priceSubscription' (valor monetário opcional).",
            "done": false
          },
          {
            "description": "Campo numérico para 'durationMinutes' (inteiro obrigatório).",
            "done": false
          },
          {
            "description": "Campo de múltipla seleção para 'speciesSuitability' (opções: Canina, Felina, etc.).",
            "done": false
          },
          {
            "description": "Campo de múltipla seleção para 'sizeSuitability' (opções: Pequeno, Médio, Grande).",
            "done": false
          },
          {
            "description": "Campo de múltipla seleção para 'requiredResources' (lista de produtos disponíveis).",
            "done": false
          },
          {
            "description": "Campo numérico para 'employeeCommission' (percentual entre 0 e 1).",
            "done": false
          }
        ]
      },
      {
        "story": "Como administrador, quero salvar as alterações feitas no formulário para persistir no sistema.",
        "derivedRequirements": [
          {
            "description": "Botão 'Salvar' que valida os campos obrigatórios e envia os dados para atualização no backend.",
            "done": false
          },
          {
            "description": "Feedback visual de sucesso ou erro após salvar.",
            "done": false
          }
        ]
      },
      {
        "story": "Como administrador, quero voltar à tela anterior sem salvar alterações, caso mude de ideia.",
        "derivedRequirements": [
          {
            "description": "Botão 'Voltar' que navega para a página anterior sem confirmar mudanças.",
            "done": false
          }
        ]
      }
    ],
    "userRequestsFeatures": [],
    "userRequestsBugs": [],
    "userRequestsEnhancements": [
      {
        "description": "Adicionar blog ou área de dicas para clientes."
      },
      {
        "description": "Oferecer programas de fidelidade ou cupons de desconto."
      },
      {
        "description": "Incluir sistema de avaliação e comentários para serviços e produtos."
      },
      {
        "description": "Suporte para outros idiomas além do português."
      },
      {
        "description": "Integração futura com sistemas de gestão de estoque ou ERP."
      }
    ]
  }
}
    