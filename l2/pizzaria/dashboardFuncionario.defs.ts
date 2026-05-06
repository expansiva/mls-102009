/// <mls fileReference="_102009_/l2/pizzaria/dashboardFuncionario.defs.ts"  enhancement="_blank"/>

export const definition = {
  "pages": [
    {
      "screenId": "dashboardFuncionario",
      "pageName": "dashboardFuncionario",
      "actor": "staff",
      "purpose": "Painel principal para funcionários acompanharem pedidos, status de produção, e métricas rápidas da pizzaria.",
      "sections": [
        {
          "sectionName": "header",
          "mode": "exclusive",
          "organisms": [
            {
              "organismName": "dashboardFuncionarioHeaderUserInfo",
              "purpose": "Exibe informações resumidas do funcionário logado e permite logout.",
              "rulesApplied": [
                "Mostrar nome, cargo e foto do usuário logado.",
                "Botão de logout visível sempre.",
                "Acessível para todos os funcionários."
              ],
              "dataShape": {
                "shape": "object",
                "stateKey": "db.staff.currentUser",
                "sourceRoutine": "auth.getCurrentUser",
                "fields": [
                  {
                    "entityField": "name",
                    "entity": "staff",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "role",
                    "entity": "staff",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "avatarUrl",
                    "entity": "staff",
                    "priority": "optional",
                    "usage": "display"
                  }
                ],
                "params": []
              },
              "tempStates": [],
              "computedFields": [],
              "navigationFields": [
                {
                  "fieldId": "logout",
                  "target": "auth.logout",
                  "params": [],
                  "priority": "required",
                  "navigationType": "internal"
                }
              ],
              "emits": [
                {
                  "event": "logout",
                  "payload": "{}"
                }
              ]
            }
          ]
        },
        {
          "sectionName": "main",
          "mode": "stack",
          "organisms": [
            {
              "organismName": "dashboardFuncionarioPedidosAbertos",
              "purpose": "Lista pedidos em aberto (em produção, aguardando entrega) para acompanhamento rápido.",
              "rulesApplied": [
                "Mostrar pedidos ordenados por prioridade/tempo.",
                "Permitir atualização automática a cada 30s.",
                "Destaque para pedidos atrasados."
              ],
              "dataShape": {
                "shape": "collection",
                "stateKey": "db.pedidos[]",
                "sourceRoutine": "pedidos.listAbertos",
                "itemFields": [
                  {
                    "entityField": "id",
                    "entity": "pedido",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "clienteNome",
                    "entity": "pedido",
                    "priority": "recommended",
                    "usage": "display"
                  },
                  {
                    "entityField": "status",
                    "entity": "pedido",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "horaPedido",
                    "entity": "pedido",
                    "priority": "required",
                    "usage": "sort"
                  },
                  {
                    "entityField": "itens",
                    "entity": "pedido",
                    "priority": "required",
                    "usage": "display",
                    "isNested": true,
                    "nestedCollection": {
                      "stateKeySuffix": ".itens[]",
                      "itemFields": [
                        {
                          "entityField": "produtoNome",
                          "entity": "itemPedido",
                          "priority": "required",
                          "usage": "display"
                        },
                        {
                          "entityField": "quantidade",
                          "entity": "itemPedido",
                          "priority": "required",
                          "usage": "display"
                        }
                      ]
                    }
                  }
                ],
                "params": [],
                "editable": false
              },
              "tempStates": [
                {
                  "stateKey": "ui.dashboardFuncionario.pedidosAbertos.autoRefresh",
                  "type": "boolean",
                  "description": "Se a lista de pedidos deve atualizar automaticamente.",
                  "priority": "recommended",
                  "initialValue": "true"
                }
              ],
              "computedFields": [
                {
                  "fieldId": "pedidosAtrasadosCount",
                  "derivedFrom": [
                    "db.pedidos[].status",
                    "db.pedidos[].horaPedido"
                  ],
                  "description": "Quantidade de pedidos atrasados.",
                  "priority": "recommended"
                }
              ],
              "navigationFields": [
                {
                  "fieldId": "verDetalhesPedido",
                  "target": "pedidoDetalhe",
                  "params": [
                    "id"
                  ],
                  "priority": "required",
                  "navigationType": "internal"
                }
              ],
              "emits": [
                {
                  "event": "pedidoSelecionado",
                  "payload": "{pedidoId}"
                }
              ]
            },
            {
              "organismName": "dashboardFuncionarioResumoProducao",
              "purpose": "Exibe métricas rápidas: total de pedidos do dia, em produção, prontos, atrasados.",
              "rulesApplied": [
                "Atualização em tempo real.",
                "Destaque visual para atrasos.",
                "Acessível para todos os funcionários."
              ],
              "dataShape": {
                "shape": "object",
                "stateKey": "db.dashboardFuncionario.resumoProducao",
                "sourceRoutine": "dashboard.getResumoProducao",
                "fields": [
                  {
                    "entityField": "totalPedidosHoje",
                    "entity": "dashboardResumo",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "emProducao",
                    "entity": "dashboardResumo",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "prontos",
                    "entity": "dashboardResumo",
                    "priority": "required",
                    "usage": "display"
                  },
                  {
                    "entityField": "atrasados",
                    "entity": "dashboardResumo",
                    "priority": "required",
                    "usage": "display"
                  }
                ],
                "params": []
              },
              "tempStates": [],
              "computedFields": [],
              "navigationFields": [],
              "emits": []
            }
          ]
        }
      ],
      "actionStates": [
        {
          "stateKey": "ui.dashboardFuncionario.pedidosAbertos.loading",
          "description": "Carregando lista de pedidos em aberto.",
          "values": [
            "idle",
            "loading",
            "success",
            "error"
          ]
        },
        {
          "stateKey": "ui.dashboardFuncionario.resumoProducao.loading",
          "description": "Carregando resumo de produção.",
          "values": [
            "idle",
            "loading",
            "success",
            "error"
          ]
        }
      ],
      "tempStates": [
        {
          "stateKey": "ui.dashboardFuncionario.filtroStatus",
          "type": "string",
          "description": "Filtro de status de pedidos (todos, em produção, prontos, atrasados).",
          "priority": "recommended",
          "initialValue": "todos"
        }
      ]
    }
  ]
}

export const contractSpec = `
##Pages spec
\`\`\`JSON
    [[(_102009_/l2/pizzaria/dashboardFuncionario.defs.ts).definition]]
\`\`\`
`

export const sharedSpec = `
##Pages spec
\`\`\`JSON
{
  "interfacePath":"_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.js",
  "definition": [[(_102009_/l2/pizzaria/dashboardFuncionario.defs.ts).definition]]
}    
\`\`\`

##Base Interfaces, Enuns ...
\`\`\`
    [[(_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.ts)]]
\`\`\`
`

export const desktopLayout = {
  "className": "DashboardFuncionarioPage",
  "tagName": "pizzaria--web--desktop--dashboard-funcionario-102009",
  "extends": "DashboardFuncionarioShared",
  "sharedPath": "/_102009_/l2/pizzaria/web/shared/dashboardFuncionario.js",
  "styling": "",
  "imports": [
    {
      "type": "value",
      "import": "{ anyInterfaces }",
      "path": "{interfacePath}"
    },
    {
      "type": "value",
      "import": "{ DashboardFuncionarioShared }",
      "path": "/_102009_/l2/pizzaria/web/shared/dashboardFuncionario.js"
    }
  ],
  "render": {
    "conditions": [
      {
        "if": "this.loading",
        "return": "loading"
      },
      {
        "if": "this.error",
        "return": "error"
      }
    ],
    "blocks": {
      "default": {
        "element": "div",
        "class": "dashboard-funcionario",
        "children": [
          {
            "element": "section",
            "class": "dashboard-funcionario-header-user-info",
            "children": [
              {
                "element": "div",
                "class": "header-user-info__container",
                "children": [
                  {
                    "element": "img",
                    "class": "header-user-info__avatar",
                    "bind": "this.currentUser_avatarUrl",
                    "condition": "this.currentUser_avatarUrl"
                  },
                  {
                    "element": "div",
                    "class": "header-user-info__details",
                    "children": [
                      {
                        "element": "h3",
                        "class": "header-user-info__name",
                        "bind": "this.currentUser_name",
                        "i18n": "name"
                      },
                      {
                        "element": "span",
                        "class": "header-user-info__role",
                        "bind": "this.currentUser_role",
                        "i18n": "role"
                      }
                    ]
                  },
                  {
                    "element": "button",
                    "class": "btn btn--logout",
                    "i18n": "logout",
                    "event": {
                      "on": "click",
                      "type": "method",
                      "method": "logout"
                    }
                  }
                ]
              }
            ]
          },
          {
            "element": "section",
            "class": "dashboard-funcionario-pedidos-abertos",
            "children": [
              {
                "element": "div",
                "class": "pedidos-abertos__header",
                "children": [
                  {
                    "element": "h2",
                    "class": "pedidos-abertos__title",
                    "i18n": "pedidosAbertos"
                  },
                  {
                    "element": "label",
                    "class": "pedidos-abertos__filtro-label",
                    "i18n": "filtroStatus",
                    "children": [
                      {
                        "element": "select",
                        "class": "pedidos-abertos__filtro-select",
                        "bind": "this.filtroStatus",
                        "event": {
                          "on": "input",
                          "type": "set",
                          "state": "filtroStatus",
                          "cast": "string"
                        },
                        "children": [
                          {
                            "element": "option",
                            "i18n": "todos",
                            "bind": "",
                            "children": [],
                            "value": "todos"
                          },
                          {
                            "element": "option",
                            "i18n": "emProducao",
                            "bind": "",
                            "children": [],
                            "value": "emProducao"
                          },
                          {
                            "element": "option",
                            "i18n": "prontos",
                            "bind": "",
                            "children": [],
                            "value": "prontos"
                          },
                          {
                            "element": "option",
                            "i18n": "atrasados",
                            "bind": "",
                            "children": [],
                            "value": "atrasados"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "pedidos-abertos__autorefresh",
                    "children": [
                      {
                        "element": "label",
                        "class": "autorefresh__label",
                        "i18n": "autoRefresh",
                        "children": [
                          {
                            "element": "input",
                            "class": "autorefresh__checkbox",
                            "type": "checkbox",
                            "bind": "this.pedidosAbertos_autoRefresh",
                            "event": {
                              "on": "input",
                              "type": "set",
                              "state": "pedidosAbertos_autoRefresh",
                              "cast": "boolean"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "element": "div",
                "class": "pedidos-abertos__list grid",
                "repeat": {
                  "source": "this.pedidos",
                  "item": "pedido",
                  "key": "pedido.id"
                },
                "children": [
                  {
                    "element": "div",
                    "class": "pedido-card",
                    "condition": "",
                    "children": [
                      {
                        "element": "div",
                        "class": "pedido-card__header",
                        "children": [
                          {
                            "element": "span",
                            "class": "pedido-card__id",
                            "bind": "pedido.id",
                            "i18n": "id"
                          },
                          {
                            "element": "span",
                            "class": "pedido-card__status",
                            "bind": "pedido.status",
                            "i18n": "status"
                          },
                          {
                            "element": "span",
                            "class": "pedido-card__hora",
                            "bind": "pedido.horaPedido",
                            "i18n": "horaPedido"
                          }
                        ]
                      },
                      {
                        "element": "div",
                        "class": "pedido-card__cliente",
                        "bind": "pedido.clienteNome",
                        "i18n": "clienteNome"
                      },
                      {
                        "element": "div",
                        "class": "pedido-card__itens",
                        "children": [
                          {
                            "element": "ul",
                            "class": "pedido-card__itens-list",
                            "repeat": {
                              "source": "pedido.itens",
                              "item": "item",
                              "key": "item.produtoNome"
                            },
                            "children": [
                              {
                                "element": "li",
                                "class": "pedido-card__item",
                                "children": [
                                  {
                                    "element": "span",
                                    "class": "pedido-card__item-nome",
                                    "bind": "item.produtoNome",
                                    "i18n": "produtoNome"
                                  },
                                  {
                                    "element": "span",
                                    "class": "pedido-card__item-quantidade",
                                    "bind": "item.quantidade",
                                    "i18n": "quantidade"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "element": "button",
                        "class": "btn btn--secondary pedido-card__detalhes",
                        "i18n": "verDetalhesPedido",
                        "event": {
                          "on": "click",
                          "type": "method",
                          "method": "verDetalhesPedido"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "element": "div",
                "class": "pedidos-abertos__footer",
                "children": [
                  {
                    "element": "span",
                    "class": "pedidos-abertos__atrasados-count",
                    "bind": "this.pedidosAtrasadosCount",
                    "i18n": "pedidosAtrasadosCount"
                  }
                ]
              }
            ]
          },
          {
            "element": "section",
            "class": "dashboard-funcionario-resumo-producao",
            "children": [
              {
                "element": "h2",
                "class": "resumo-producao__title",
                "i18n": "resumoProducao"
              },
              {
                "element": "div",
                "class": "resumo-producao__metrics grid",
                "children": [
                  {
                    "element": "div",
                    "class": "resumo-producao__metric",
                    "children": [
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-label",
                        "i18n": "totalPedidosHoje"
                      },
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-value",
                        "bind": "this.resumoProducao_totalPedidosHoje"
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "resumo-producao__metric",
                    "children": [
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-label",
                        "i18n": "emProducao"
                      },
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-value",
                        "bind": "this.resumoProducao_emProducao"
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "resumo-producao__metric",
                    "children": [
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-label",
                        "i18n": "prontos"
                      },
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-value",
                        "bind": "this.resumoProducao_prontos"
                      }
                    ]
                  },
                  {
                    "element": "div",
                    "class": "resumo-producao__metric",
                    "children": [
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-label",
                        "i18n": "atrasados"
                      },
                      {
                        "element": "span",
                        "class": "resumo-producao__metric-value",
                        "bind": "this.resumoProducao_atrasados"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "loading": {
        "element": "div",
        "class": "dashboard-funcionario__loading",
        "children": [
          {
            "element": "span",
            "class": "loading__text",
            "i18n": "loading"
          }
        ]
      },
      "error": {
        "element": "div",
        "class": "dashboard-funcionario__error",
        "children": [
          {
            "element": "span",
            "class": "error__text",
            "i18n": "error"
          },
          {
            "element": "button",
            "class": "btn btn--retry",
            "i18n": "retry",
            "event": {
              "on": "click",
              "type": "action",
              "state": "action",
              "value": "DashboardFuncionarioAction.LOAD_DASHBOARD_FUNCIONARIO"
            }
          }
        ]
      }
    }
  },
  "i18n": {
    "default": "pt",
    "languages": [
      "pt"
    ],
    "keys": [
      "name",
      "role",
      "logout",
      "pedidosAbertos",
      "filtroStatus",
      "todos",
      "emProducao",
      "prontos",
      "atrasados",
      "autoRefresh",
      "id",
      "status",
      "horaPedido",
      "clienteNome",
      "produtoNome",
      "quantidade",
      "verDetalhesPedido",
      "pedidosAtrasadosCount",
      "resumoProducao",
      "totalPedidosHoje",
      "loading",
      "error",
      "retry"
    ]
  }
}

export const desktopLayoutSpec = `
## Page layout
\`\`\`JSON
{ 
  "interfacePath":"_102009_/l1/pizzaria/layer_2_controller/dashboardFuncionario.js",
  "definition": [[(_102009_/l2/pizzaria/dashboardFuncionario.defs.ts).desktopLayout]]  
}
\`\`\`

##Base class
\`\`\`
  [[(_102009_/l2/pizzaria/web/shared/dashboardFuncionario.ts)]]
\`\`\`
`

export const materializeIndex = [
  {
    "id": "contract",
    "specVar": "contractSpec",
    "outputPath": "/l1/pizzaria/layer_2_controller/dashboardFuncionario.ts",
    "skillPath": "_102027_/l2/agents/skills/genContract.ts",
    "agent": "agentMaterializeContract",
    "dependsOn": [],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  },
  {
    "id": "shared",
    "specVar": "sharedSpec",
    "outputPath": "/l2/pizzaria/web/shared/dashboardFuncionario.ts",
    "skillPath": "_102027_/l2/agents/skills/genPageShared.ts",
    "agent": "agentMaterializeSharedPage",
    "dependsOn": [
      "contract"
    ],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  },
  {
    "id": "desktop",
    "specVar": "desktopLayoutSpec",
    "outputPath": "/l2/pizzaria/web/desktop/dashboardFuncionario.ts",
    "skillPath": "_102027_/l2/agents/skills/genPageRender.ts",
    "agent": "agentMaterializePageLit",
    "dependsOn": [
      "contract",
      "shared"
    ],
    "specUpdatedAt": "2026-05-06T18:34:55Z"
  }
]
