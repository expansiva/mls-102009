/// <mls shortName="organismAdminScheduling" project="102009" folder="petshop" groupName="petshop" enhancement="_blank" />
export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "petshop",
    "shortName": "organismAdminScheduling",
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
    "generalDescription": "Criar um componente de agendamento para o site do petshop, com dois cenários: um para pesquisar e selecionar o usuário, e outro para realizar o agendamento com seleção de pet, data, horário, serviço, e botões de voltar e agendar.",
    "goal": "Facilitar o processo de agendamento de serviços para pets, permitindo pesquisa de usuários e seleção intuitiva de detalhes do agendamento.",
    "userStories": [
      {
        "story": "Como cliente do petshop, quero pesquisar meu perfil de usuário, selecioná-lo e continuar para o agendamento, para garantir que estou acessando minhas informações corretas.",
        "derivedRequirements": [
          {
            "description": "Implementar campo de pesquisa para buscar usuários por nome, e-mail ou ID.",
            "done": false
          },
          {
            "description": "Exibir lista de resultados da pesquisa com opção de seleção.",
            "done": false
          },
          {
            "description": "Botão 'Continuar' para prosseguir ao cenário de agendamento após seleção.",
            "done": false
          }
        ]
      },
      {
        "story": "Como cliente do petshop, quero selecionar meu pet, escolher data e horário disponíveis, selecionar o serviço desejado, e confirmar o agendamento com botões de voltar ou agendar, para agendar banho e tosa de forma simples.",
        "derivedRequirements": [
          {
            "description": "Select dropdown para escolher o pet associado ao usuário selecionado.",
            "done": false
          },
          {
            "description": "Campo de seleção de data com validação de disponibilidade.",
            "done": false
          },
          {
            "description": "Campo de seleção de horário com opções baseadas na data escolhida.",
            "done": false
          },
          {
            "description": "Select dropdown para escolher o serviço (ex.: banho, tosa).",
            "done": false
          },
          {
            "description": "Botão 'Voltar' para retornar ao cenário anterior.",
            "done": false
          },
          {
            "description": "Botão 'Agendar' para confirmar e salvar o agendamento, enviando confirmação por e-mail.",
            "done": false
          }
        ]
      }
    ],
    "userRequestsFeatures": [],
    "userRequestsBugs": [],
    "userRequestsEnhancements": []
  }
}
    