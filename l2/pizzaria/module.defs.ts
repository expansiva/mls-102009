/// <mls fileReference="_102009_/l2/pizzaria/module.defs.ts" enhancement="_blank"/>


export const ontology = {
  "meta": {
    "userLanguage": "pt",
    "moduleName": "pizzaria",
    "userPromptOriginal": "Crie um módulo para controle de pedidos de pizzaria.",
    "userPromptFinal": "Crie um módulo chamado 'pizzaria' para controle de pedidos de pizzaria, focado em cadastro e listagem de pedidos. O público-alvo são clientes que fazem pedidos e funcionários (atendente e pizzaiolo) que gerenciam esses pedidos. O sistema deve ser profissional, amigável e direto, disponível apenas em português. No cadastro de pedido, registrar: tipo de pizza (sabor), tamanho, quantidade, borda recheada, adicionais (como refrigerante), nome e telefone do cliente, endereço de entrega e forma de pagamento. Na listagem, exibir número do pedido, nome do cliente, status (pendente, em preparo, a caminho, entregue), valor total e data/hora do pedido, com filtros por status e data. Gerenciamento de estoque e cardápio não são prioridade agora."
  },
  "ontology": {
    "entities": {
      "Pedido": {
        "description": "Representa um pedido realizado na pizzaria.",
        "fields": {
          "numeroPedido": {
            "type": "string"
          },
          "clienteNome": {
            "type": "string"
          },
          "clienteTelefone": {
            "type": "string"
          },
          "enderecoEntrega": {
            "type": "string"
          },
          "dataHora": {
            "type": "string",
            "constraints": "Formato data/hora ISO 8601."
          },
          "status": {
            "type": "string",
            "values": [
              "pendente",
              "em preparo",
              "a caminho",
              "entregue"
            ],
            "constraints": "Apenas estes valores são permitidos."
          },
          "valorTotal": {
            "type": "number"
          },
          "formaPagamento": {
            "type": "string"
          },
          "itens": {
            "type": "array",
            "constraints": "Lista de pizzas e adicionais do pedido."
          }
        },
        "rules": [
          "ruleCadastroPedido",
          "ruleListagemPedido"
        ]
      },
      "Pizza": {
        "description": "Pizza solicitada em um pedido.",
        "fields": {
          "sabores": {
            "type": "array",
            "constraints": "Lista de sabores da pizza. Permite múltiplos sabores (ex: meio a meio)."
          },
          "tamanho": {
            "type": "string"
          },
          "quantidade": {
            "type": "number"
          },
          "bordaRecheada": {
            "type": "boolean"
          },
          "adicionais": {
            "type": "array",
            "constraints": "Adicionais como refrigerante ou outros itens."
          }
        }
      },
      "Usuario": {
        "description": "Usuário do sistema, podendo ser cliente ou funcionário.",
        "fields": {
          "papel": {
            "type": "string",
            "values": [
              "cliente",
              "atendente",
              "pizzaiolo"
            ]
          }
        }
      },
      "Cliente": {
        "description": "Cadastro de clientes para armazenar dados e histórico de pedidos.",
        "fields": {
          "nome": {
            "type": "string"
          },
          "telefone": {
            "type": "string"
          },
          "enderecos": {
            "type": "array",
            "constraints": "Lista de endereços cadastrados pelo cliente."
          },
          "historicoPedidos": {
            "type": "array",
            "constraints": "Lista de pedidos realizados pelo cliente."
          }
        }
      },
      "CupomDesconto": {
        "description": "Representa um cupom de desconto para promoções.",
        "fields": {
          "codigo": {
            "type": "string"
          },
          "descricao": {
            "type": "string"
          },
          "valorDesconto": {
            "type": "number",
            "constraints": "Valor do desconto em reais ou percentual."
          },
          "tipoDesconto": {
            "type": "string",
            "values": [
              "percentual",
              "valor"
            ]
          },
          "validoAte": {
            "type": "string",
            "constraints": "Data de validade do cupom."
          }
        }
      },
      "ComboPromocional": {
        "description": "Combos promocionais que combinam pizzas, bebidas e sobremesas.",
        "fields": {
          "nome": {
            "type": "string"
          },
          "descricao": {
            "type": "string"
          },
          "itensCombo": {
            "type": "array",
            "constraints": "Lista de itens que compõem o combo."
          },
          "precoCombo": {
            "type": "number"
          }
        }
      }
    }
  },
  "rules": {
    "ruleCadastroPedido": {
      "kind": "domain",
      "description": "O cadastro de pedido deve registrar sabor, tamanho, quantidade, borda recheada, adicionais, nome e telefone do cliente, endereço de entrega e forma de pagamento.",
      "scope": [
        "Pedido"
      ],
      "acceptanceCriteria": [
        "Todos os campos obrigatórios devem ser preenchidos no cadastro do pedido.",
        "Adicionais podem incluir refrigerante ou outros itens."
      ]
    },
    "ruleListagemPedido": {
      "kind": "domain",
      "description": "A listagem de pedidos deve exibir número do pedido, nome do cliente, status, valor total e data/hora do pedido, com filtros por status e data.",
      "scope": [
        "Pedido"
      ],
      "acceptanceCriteria": [
        "A listagem deve permitir filtrar pedidos por status e por data.",
        "Os status permitidos são: pendente, em preparo, a caminho, entregue."
      ]
    },
    "rulePublicoAlvo": {
      "kind": "policy",
      "description": "O sistema deve ser fácil de usar tanto para clientes quanto para funcionários (atendente e pizzaiolo).",
      "scope": [
        "Usuario"
      ],
      "acceptanceCriteria": [
        "A interface deve ser direta e amigável para ambos os públicos."
      ]
    },
    "ruleIdioma": {
      "kind": "platform",
      "description": "O sistema deve estar disponível apenas em português.",
      "acceptanceCriteria": [
        "Todos os textos e mensagens do sistema devem estar em português."
      ]
    },
    "rulePrioridadeFuncionalidades": {
      "kind": "policy",
      "description": "O foco inicial é cadastro e listagem de pedidos. Gerenciamento de estoque e cardápio não são prioridade.",
      "acceptanceCriteria": [
        "Funcionalidades de estoque e cardápio não devem ser implementadas nesta fase."
      ]
    },
    "rulePizzaMultiSabor": {
      "kind": "domain",
      "description": "Permitir que uma pizza tenha múltiplos sabores (ex: meio a meio).",
      "scope": [
        "Pizza"
      ],
      "acceptanceCriteria": [
        "O campo 'sabores' deve aceitar uma lista de sabores.",
        "O usuário pode escolher dois ou mais sabores para uma mesma pizza."
      ]
    },
    "ruleCadastroCliente": {
      "kind": "domain",
      "description": "Permitir cadastro de clientes para armazenar endereços e histórico de pedidos.",
      "scope": [
        "Cliente"
      ],
      "acceptanceCriteria": [
        "O cliente pode cadastrar múltiplos endereços.",
        "O histórico de pedidos do cliente deve ser acessível."
      ]
    },
    "ruleCupomDesconto": {
      "kind": "domain",
      "description": "Permitir uso de cupons de desconto em pedidos.",
      "scope": [
        "CupomDesconto",
        "Pedido"
      ],
      "acceptanceCriteria": [
        "O cliente pode informar um cupom válido ao fazer o pedido.",
        "O desconto deve ser aplicado ao valor total do pedido."
      ]
    },
    "ruleComboPromocional": {
      "kind": "domain",
      "description": "Permitir a criação e seleção de combos promocionais que combinem pizzas, bebidas e sobremesas.",
      "scope": [
        "ComboPromocional",
        "Pedido"
      ],
      "acceptanceCriteria": [
        "O cliente pode escolher combos promocionais ao fazer o pedido.",
        "O valor do combo deve ser considerado no valor total do pedido."
      ]
    },
    "ruleRastreamentoPedido": {
      "kind": "domain",
      "description": "Permitir que o cliente acompanhe o status do pedido em tempo real.",
      "scope": [
        "Pedido"
      ],
      "acceptanceCriteria": [
        "O cliente pode visualizar o status atualizado do pedido a qualquer momento."
      ]
    },
    "ruleRelatorioVendas": {
      "kind": "domain",
      "description": "Gerar relatórios básicos de vendas por período e por item.",
      "scope": [
        "Pedido"
      ],
      "acceptanceCriteria": [
        "O sistema deve permitir a geração de relatórios de vendas por período.",
        "O sistema deve permitir a geração de relatórios de vendas por item."
      ]
    },
    "ruleAtualizacaoRapidaStatusPedido": {
      "kind": "domain",
      "description": "Permitir atualização rápida do status do pedido diretamente na listagem.",
      "scope": [
        "Pedido"
      ],
      "acceptanceCriteria": [
        "O atendente pode alterar o status do pedido na própria tela de listagem.",
        "A alteração deve ser refletida imediatamente para todos os usuários."
      ]
    }
  },
  "capabilities": {
    "cadastroPedido": {
      "description": "Permite registrar um novo pedido de pizzaria.",
      "usesRules": [
        "ruleCadastroPedido",
        "rulePublicoAlvo",
        "ruleIdioma",
        "rulePrioridadeFuncionalidades",
        "rulePizzaMultiSabor",
        "ruleCupomDesconto",
        "ruleComboPromocional"
      ],
      "actions": [
        {
          "actionId": "criarPedido",
          "description": "Registrar um novo pedido com todos os campos obrigatórios."
        }
      ]
    },
    "listagemPedido": {
      "description": "Permite visualizar e filtrar a lista de pedidos.",
      "usesRules": [
        "ruleListagemPedido",
        "rulePublicoAlvo",
        "ruleIdioma",
        "rulePrioridadeFuncionalidades",
        "ruleRastreamentoPedido",
        "ruleAtualizacaoRapidaStatusPedido"
      ],
      "actions": [
        {
          "actionId": "listarPedidos",
          "description": "Exibir todos os pedidos com filtros por status e data."
        },
        {
          "actionId": "atualizarStatusPedidoNaListagem",
          "description": "Atualizar rapidamente o status do pedido diretamente na tela de listagem."
        }
      ]
    },
    "cadastroCliente": {
      "description": "Permite cadastrar clientes, armazenar endereços e histórico de pedidos.",
      "usesRules": [
        "ruleCadastroCliente"
      ],
      "actions": [
        {
          "actionId": "criarCliente",
          "description": "Cadastrar um novo cliente com dados e endereços."
        },
        {
          "actionId": "consultarHistoricoPedidos",
          "description": "Consultar histórico de pedidos do cliente."
        }
      ]
    },
    "aplicarCupomDesconto": {
      "description": "Permite aplicar cupons de desconto em pedidos.",
      "usesRules": [
        "ruleCupomDesconto"
      ],
      "isOptional": true,
      "actions": [
        {
          "actionId": "aplicarCupom",
          "description": "Aplicar um cupom de desconto válido ao pedido."
        }
      ]
    },
    "selecionarComboPromocional": {
      "description": "Permite selecionar combos promocionais ao fazer um pedido.",
      "usesRules": [
        "ruleComboPromocional"
      ],
      "isOptional": true,
      "actions": [
        {
          "actionId": "selecionarCombo",
          "description": "Selecionar um combo promocional para o pedido."
        }
      ]
    },
    "rastreamentoPedido": {
      "description": "Permite ao cliente acompanhar o status do pedido em tempo real.",
      "usesRules": [
        "ruleRastreamentoPedido"
      ],
      "actions": [
        {
          "actionId": "visualizarStatusPedido",
          "description": "Visualizar o status atualizado do pedido."
        }
      ]
    },
    "relatorioVendas": {
      "description": "Permite gerar relatórios básicos de vendas por período e por item.",
      "usesRules": [
        "ruleRelatorioVendas"
      ],
      "actions": [
        {
          "actionId": "gerarRelatorioPeriodo",
          "description": "Gerar relatório de vendas por período."
        },
        {
          "actionId": "gerarRelatorioItem",
          "description": "Gerar relatório de vendas por item."
        }
      ]
    }
  }
}
