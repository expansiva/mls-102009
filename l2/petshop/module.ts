/// <mls shortName="module" project="102009" folder="petshop" enhancement="_blank" />

export const moduleConfig = {
  theme: "petshop",
  initialPage:"home"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brasil",
    "userPrompt": "criar site petshop",
    "moduleGoal": "Desenvolver um site moderno e amigável para um petshop, permitindo agendamento de serviços, venda online de produtos e gestão administrativa.",
    "moduleName": "petshop",
    "requirements": [
      "O site deve ser voltado para todos os tipos de pets (cães, gatos, aves, etc).",
      "Deve haver pelo menos dois tipos de usuários: clientes (público geral) e administradores (gestão de conteúdo).",
      "O tom do site deve ser amigável e acolhedor.",
      "O idioma principal do site será português.",
      "Funcionalidades essenciais: agendamento de banho e tosa, catálogo de produtos com e-commerce, página de contato.",
      "O cliente pode escolher data e horário para agendamento de banho e tosa e recebe confirmação por e-mail.",
      "O catálogo de produtos deve permitir vendas online (e-commerce simples).",
      "Aceitar pagamentos online via cartão de crédito e Pix.",
      "Painel administrativo para gerenciar agendamentos, produtos e conteúdo, acessível apenas para administradores.",
      "Integração com redes sociais.",
      "Necessidade de criação de identidade visual (logo, cores, imagens) com cores alegres (azul e verde) e estilo moderno e limpo."
    ],
    "userRequestsEnhancements": [
      {
        "description": "Adicionar blog ou área de dicas para clientes.",
        "priority": "could"
      },
      {
        "description": "Oferecer programas de fidelidade ou cupons de desconto.",
        "priority": "could"
      },
      {
        "description": "Incluir sistema de avaliação e comentários para serviços e produtos.",
        "priority": "could"
      },
      {
        "description": "Suporte para outros idiomas além do português.",
        "priority": "could"
      },
      {
        "description": "Integração futura com sistemas de gestão de estoque ou ERP.",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageGoal": "Apresentar o petshop, principais serviços, produtos em destaque e facilitar navegação.",
      "pageRequirements": [
        "Exibir logo, menu de navegação e chamada para ação.",
        "Destaque para agendamento de banho e tosa.",
        "Exibir produtos em destaque do e-commerce.",
        "Links para redes sociais.",
        "Apresentação breve do petshop."
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "agendamento",
      "pageGoal": "Permitir que clientes agendem banho e tosa escolhendo data e horário.",
      "pageRequirements": [
        "Formulário para seleção de serviço, data e horário.",
        "Campos para dados do pet e do tutor.",
        "Envio de confirmação por e-mail ao cliente.",
        "Validação de horários disponíveis."
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "produtos",
      "pageGoal": "Exibir catálogo de produtos e permitir compra online.",
      "pageRequirements": [
        "Listagem de produtos com filtros por categoria.",
        "Detalhes do produto.",
        "Carrinho de compras.",
        "Checkout com pagamento via cartão de crédito e Pix."
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "contato",
      "pageGoal": "Facilitar contato do cliente com o petshop.",
      "pageRequirements": [
        "Formulário de contato.",
        "Exibir telefone, e-mail e endereço.",
        "Links para redes sociais."
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "adminPanel",
      "pageGoal": "Permitir que administradores gerenciem agendamentos, produtos e conteúdo do site.",
      "pageRequirements": [
        "Login restrito para administradores.",
        "Gestão de agendamentos (visualizar, aprovar, cancelar).",
        "Gestão de produtos (adicionar, editar, remover).",
        "Gestão de conteúdo do site."
      ]
    }
  ],
  "plugins": [
    {
      "pluginSequential": 0,
      "pluginName": "pluginStripe",
      "pluginType": "third-party",
      "pluginGoal": "Processar pagamentos online via cartão de crédito.",
      "pluginRequirements": [
        "Integração segura com Stripe.",
        "Suporte a pagamentos em reais.",
        "Envio de confirmação de pagamento ao cliente."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "pluginPix",
      "pluginType": "third-party",
      "pluginGoal": "Permitir pagamentos via Pix no checkout.",
      "pluginRequirements": [
        "Geração de QR Code Pix.",
        "Confirmação automática de pagamento.",
        "Compatibilidade com bancos brasileiros."
      ]
    },
    {
      "pluginSequential": 2,
      "pluginName": "pluginEmailSender",
      "pluginType": "third-party",
      "pluginGoal": "Enviar confirmações de agendamento e pedidos por e-mail.",
      "pluginRequirements": [
        "Envio de e-mails transacionais.",
        "Personalização de templates.",
        "Suporte a idioma português."
      ]
    },
    {
      "pluginSequential": 3,
      "pluginName": "pluginScrollToTop",
      "pluginType": "ui",
      "pluginGoal": "Facilitar navegação em páginas longas.",
      "pluginRequirements": [
        "Botão flutuante para voltar ao topo.",
        "Compatível com dispositivos móveis."
      ]
    }
  ],
  "pagesWireframe": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageHtml": [
        "<body>",
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-hero-banner></organism-hero-banner>",
        "<organism-featured-services></organism-featured-services>",
        "<organism-featured-products></organism-featured-products>",
        "<organism-about-petshop></organism-about-petshop>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>",
        "</body>"
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "agendamento",
      "pageHtml": [
        "<body>",
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-booking-form></organism-booking-form>",
        "<organism-booking-info></organism-booking-info>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>",
        "</body>"
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "produtos",
      "pageHtml": [
        "<body>",
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-product-filters></organism-product-filters>",
        "</aside>",
        "<main>",
        "<organism-product-list></organism-product-list>",
        "<organism-cart-summary></organism-cart-summary>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>",
        "</body>"
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "contato",
      "pageHtml": [
        "<body>",
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-contact-form></organism-contact-form>",
        "<organism-contact-details></organism-contact-details>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>",
        "</body>"
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "adminPanel",
      "pageHtml": [
        "<body>",
        "<header>",
        "<organism-admin-nav></organism-admin-nav>",
        "</header>",
        "<aside>",
        "<organism-admin-sidebar></organism-admin-sidebar>",
        "</aside>",
        "<main>",
        "<organism-admin-dashboard></organism-admin-dashboard>",
        "<organism-admin-bookings></organism-admin-bookings>",
        "<organism-admin-products></organism-admin-products>",
        "<organism-admin-content></organism-admin-content>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>",
        "</body>"
      ]
    }
  ],
  "organism": [
    {
      "organismSequential": 0,
      "organismTag": "organism-nav",
      "planning": {
        "context": "Navegação principal do site, visível em todas as páginas públicas.",
        "goal": "Exibir logo, menu de navegação e links para redes sociais.",
        "userStories": [
          {
            "story": "Como visitante, quero acessar facilmente todas as áreas do site pelo menu.",
            "derivedRequirements": [
              {
                "description": "Menu responsivo com links para Home, Agendamento, Produtos e Contato."
              }
            ]
          },
          {
            "story": "Como visitante, quero ver o logo do petshop no topo do site.",
            "derivedRequirements": [
              {
                "description": "Exibir logo em destaque na barra de navegação."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser responsivo.",
          "Links para redes sociais devem ser acessíveis."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-hero-banner",
      "planning": {
        "context": "Destaque visual na home para apresentar o petshop e chamada para ação.",
        "goal": "Apresentar mensagem de boas-vindas e botão para agendamento.",
        "userStories": [
          {
            "story": "Como visitante, quero entender rapidamente o propósito do site e ser incentivado a agendar um serviço.",
            "derivedRequirements": [
              {
                "description": "Exibir mensagem de boas-vindas e botão de agendamento."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser visualmente atraente.",
          "Botão de ação deve ser destacado."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-featured-services",
      "planning": {
        "context": "Apresentar os principais serviços do petshop na home.",
        "goal": "Exibir serviços como banho, tosa, consultas, etc.",
        "userStories": [
          {
            "story": "Como visitante, quero ver rapidamente quais serviços o petshop oferece.",
            "derivedRequirements": [
              {
                "description": "Listar serviços com ícones e descrições."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-featured-products",
      "planning": {
        "context": "Exibir produtos em destaque do e-commerce na home.",
        "goal": "Mostrar produtos populares ou em promoção.",
        "userStories": [
          {
            "story": "Como visitante, quero ver produtos em destaque para facilitar minha compra.",
            "derivedRequirements": [
              {
                "description": "Exibir produtos selecionados com imagem, nome e preço."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-about-petshop",
      "planning": {
        "context": "Apresentação institucional do petshop.",
        "goal": "Exibir breve descrição sobre o petshop e sua missão.",
        "userStories": [
          {
            "story": "Como visitante, quero conhecer um pouco sobre o petshop.",
            "derivedRequirements": [
              {
                "description": "Exibir texto institucional e valores do petshop."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 5,
      "organismTag": "organism-footer-info",
      "planning": {
        "context": "Rodapé do site, presente em todas as páginas.",
        "goal": "Exibir informações de contato, links úteis e redes sociais.",
        "userStories": [
          {
            "story": "Como visitante, quero encontrar facilmente informações de contato e redes sociais no rodapé.",
            "derivedRequirements": [
              {
                "description": "Exibir telefone, e-mail, endereço e ícones de redes sociais."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-booking-form",
      "planning": {
        "context": "Formulário de agendamento de banho e tosa.",
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
        "constraints": [
          "Validação de horários disponíveis.",
          "Campos obrigatórios para dados do pet e tutor."
        ]
      }
    },
    {
      "organismSequential": 7,
      "organismTag": "organism-booking-info",
      "planning": {
        "context": "Informações úteis sobre o processo de agendamento.",
        "goal": "Orientar o cliente sobre regras, horários e políticas de agendamento.",
        "userStories": [
          {
            "story": "Como cliente, quero entender as regras e horários disponíveis antes de agendar.",
            "derivedRequirements": [
              {
                "description": "Exibir informações claras sobre o serviço e políticas."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 8,
      "organismTag": "organism-product-filters",
      "planning": {
        "context": "Barra lateral de filtros para o catálogo de produtos.",
        "goal": "Permitir filtrar produtos por categoria, preço, tipo de pet, etc.",
        "userStories": [
          {
            "story": "Como cliente, quero filtrar produtos para encontrar o que preciso rapidamente.",
            "derivedRequirements": [
              {
                "description": "Filtros por categoria, preço e tipo de pet."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 9,
      "organismTag": "organism-product-list",
      "planning": {
        "context": "Listagem principal dos produtos do e-commerce.",
        "goal": "Exibir produtos com imagem, nome, preço e botão de compra.",
        "userStories": [
          {
            "story": "Como cliente, quero ver todos os produtos disponíveis para compra.",
            "derivedRequirements": [
              {
                "description": "Listar produtos com detalhes e botão de adicionar ao carrinho."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 10,
      "organismTag": "organism-cart-summary",
      "planning": {
        "context": "Resumo do carrinho de compras.",
        "goal": "Exibir produtos adicionados ao carrinho e permitir finalizar compra.",
        "userStories": [
          {
            "story": "Como cliente, quero ver o que está no meu carrinho e finalizar a compra.",
            "derivedRequirements": [
              {
                "description": "Resumo do carrinho, botão de checkout e integração com plugins de pagamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 11,
      "organismTag": "organism-contact-form",
      "planning": {
        "context": "Formulário de contato para clientes.",
        "goal": "Permitir que clientes enviem mensagens ao petshop.",
        "userStories": [
          {
            "story": "Como cliente, quero enviar dúvidas ou solicitações pelo site.",
            "derivedRequirements": [
              {
                "description": "Formulário com campos de nome, e-mail, mensagem e envio para e-mail do petshop."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 12,
      "organismTag": "organism-contact-details",
      "planning": {
        "context": "Exibição de informações de contato do petshop.",
        "goal": "Mostrar telefone, e-mail, endereço e redes sociais.",
        "userStories": [
          {
            "story": "Como cliente, quero encontrar facilmente as formas de contato do petshop.",
            "derivedRequirements": [
              {
                "description": "Exibir informações de contato e links para redes sociais."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 13,
      "organismTag": "organism-admin-nav",
      "planning": {
        "context": "Navegação principal do painel administrativo.",
        "goal": "Permitir acesso rápido às áreas de gestão do site.",
        "userStories": [
          {
            "story": "Como administrador, quero navegar facilmente entre as áreas do painel.",
            "derivedRequirements": [
              {
                "description": "Menu com links para agendamentos, produtos e conteúdo."
              }
            ]
          }
        ],
        "constraints": [
          "Acesso restrito a usuários autenticados."
        ]
      }
    },
    {
      "organismSequential": 14,
      "organismTag": "organism-admin-sidebar",
      "planning": {
        "context": "Barra lateral do painel administrativo.",
        "goal": "Exibir atalhos e status rápidos para o administrador.",
        "userStories": [
          {
            "story": "Como administrador, quero ver atalhos e status de pedidos e agendamentos.",
            "derivedRequirements": [
              {
                "description": "Exibir atalhos para áreas principais e indicadores de status."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 15,
      "organismTag": "organism-admin-dashboard",
      "planning": {
        "context": "Visão geral do painel administrativo.",
        "goal": "Exibir métricas e informações resumidas para o administrador.",
        "userStories": [
          {
            "story": "Como administrador, quero ver um resumo dos agendamentos e vendas.",
            "derivedRequirements": [
              {
                "description": "Exibir gráficos e números principais do negócio."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 16,
      "organismTag": "organism-admin-bookings",
      "planning": {
        "context": "Gestão de agendamentos no painel administrativo.",
        "goal": "Permitir visualizar, aprovar ou cancelar agendamentos.",
        "userStories": [
          {
            "story": "Como administrador, quero gerenciar todos os agendamentos feitos pelos clientes.",
            "derivedRequirements": [
              {
                "description": "Listar agendamentos, aprovar ou cancelar e enviar notificações."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 17,
      "organismTag": "organism-admin-products",
      "planning": {
        "context": "Gestão de produtos no painel administrativo.",
        "goal": "Permitir adicionar, editar e remover produtos do catálogo.",
        "userStories": [
          {
            "story": "Como administrador, quero gerenciar o catálogo de produtos do e-commerce.",
            "derivedRequirements": [
              {
                "description": "Adicionar, editar e remover produtos."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 18,
      "organismTag": "organism-admin-content",
      "planning": {
        "context": "Gestão de conteúdo institucional do site.",
        "goal": "Permitir editar textos institucionais e banners.",
        "userStories": [
          {
            "story": "Como administrador, quero atualizar textos e imagens do site.",
            "derivedRequirements": [
              {
                "description": "Editar textos institucionais e banners da home."
              }
            ]
          }
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "A modern, friendly logo featuring a stylized blue and green paw print with a subtle heart shape in the center, conveying care and joy for all pets.",
    "fontFamily": "'Charlie Display', 'Segoe UI', Arial, sans-serif",
    "iconStyle": "outline",
    "illustrationStyle": "flat, colorful, with playful pet elements and clean lines",
    "colorPalette": {
      "primary": "#1C91CD",
      "secondary": "#52C41A",
      "text": "#403f3f",
      "background": "#ffffff",
      "border": "#E6E6E6",
      "error": "#FF4D4F",
      "warning": "#FAAD14",
      "success": "#52C41A"
    }
  },
  "tokens": {
    "description": "Sistema de design tokens para o site do petshop, com cores alegres (azul e verde), alto contraste e suporte a dark mode.",
    "themeName": "petshop",
    "color": {
      "text-primary-color-lighter": "#4a6fa5",
      "text-primary-color-lighter-hover": "#5b8fd6",
      "text-primary-color-lighter-focus": "#3a5c8a",
      "text-primary-color-lighter-disabled": "#a3b9d2",
      "text-primary-color": "#1C91CD",
      "text-primary-color-hover": "#1786b7",
      "text-primary-color-focus": "#0F6FA9",
      "text-primary-color-disabled": "#55b4e1",
      "text-primary-color-darker": "#0F6FA9",
      "text-primary-color-darker-hover": "#1b7bb5",
      "text-primary-color-darker-focus": "#0c6495",
      "text-primary-color-darker-disabled": "#3a9ec1",
      "text-secondary-color-lighter": "#7be495",
      "text-secondary-color-lighter-hover": "#a0f2b7",
      "text-secondary-color-lighter-focus": "#5fd47a",
      "text-secondary-color-lighter-disabled": "#c2f7d2",
      "text-secondary-color": "#52C41A",
      "text-secondary-color-hover": "#66d93f",
      "text-secondary-color-focus": "#4ca610",
      "text-secondary-color-disabled": "#8cd78e",
      "text-secondary-color-darker": "#388e3c",
      "text-secondary-color-darker-hover": "#43a047",
      "text-secondary-color-darker-focus": "#2e7031",
      "text-secondary-color-darker-disabled": "#6abf69",
      "bg-primary-color-lighter": "#f6fcff",
      "bg-primary-color-lighter-hover": "#e6f7ff",
      "bg-primary-color-lighter-focus": "#d0eaff",
      "bg-primary-color-lighter-disabled": "#b3e5fc",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f2f2",
      "bg-primary-color-focus": "#e6e6e6",
      "bg-primary-color-disabled": "#d9d9d9",
      "bg-primary-color-darker": "#e6f7ff",
      "bg-primary-color-darker-hover": "#d0eaff",
      "bg-primary-color-darker-focus": "#b3e5fc",
      "bg-primary-color-darker-disabled": "#81d4fa",
      "bg-secondary-color-lighter": "#eafbe7",
      "bg-secondary-color-lighter-hover": "#d2f5d0",
      "bg-secondary-color-lighter-focus": "#b8eeb7",
      "bg-secondary-color-lighter-disabled": "#a0e6a0",
      "bg-secondary-color": "#f6fcff",
      "bg-secondary-color-hover": "#e6f7ff",
      "bg-secondary-color-focus": "#d0eaff",
      "bg-secondary-color-disabled": "#b3e5fc",
      "bg-secondary-color-darker": "#eafbe7",
      "bg-secondary-color-darker-hover": "#d2f5d0",
      "bg-secondary-color-darker-focus": "#b8eeb7",
      "bg-secondary-color-darker-disabled": "#a0e6a0",
      "grey-color-lighter": "#F9FAFB",
      "grey-color-light": "#F2F2F2",
      "grey-color": "#E6E6E6",
      "grey-color-dark": "#D3D3D3",
      "grey-color-darker": "#C0C0C0",
      "error-color": "#FF4D4F",
      "error-color-hover": "#ff6666",
      "error-color-focus": "#e63e3e",
      "error-color-disabled": "#ff9999",
      "success-color": "#52C41A",
      "success-color-hover": "#66d93f",
      "success-color-focus": "#4ca610",
      "success-color-disabled": "#8cd78e",
      "warning-color": "#FAAD14",
      "warning-color-hover": "#fbbd34",
      "warning-color-focus": "#e09a0e",
      "warning-color-disabled": "#fdd55e",
      "info-color": "#1C91CD",
      "info-color-hover": "#1786b7",
      "info-color-focus": "#0F6FA9",
      "info-color-disabled": "#55b4e1",
      "active-color": "#1C91CD",
      "active-color-hover": "#1786b7",
      "active-color-focus": "#0F6FA9",
      "active-color-disabled": "#55b4e1",
      "link-color": "#1C91CD",
      "link-color-hover": "#1786b7",
      "link-color-focus": "#0F6FA9",
      "link-color-disabled": "#55b4e1",
      "_dark-text-primary-color-lighter": "#e6edf3",
      "_dark-text-primary-color-lighter-hover": "#d1d9e4",
      "_dark-text-primary-color-lighter-focus": "#c3cfd8",
      "_dark-text-primary-color-lighter-disabled": "#b0b8c4",
      "_dark-text-primary-color": "#b3e5fc",
      "_dark-text-primary-color-hover": "#81d4fa",
      "_dark-text-primary-color-focus": "#4fc3f7",
      "_dark-text-primary-color-disabled": "#0288d1",
      "_dark-text-primary-color-darker": "#81d4fa",
      "_dark-text-primary-color-darker-hover": "#4fc3f7",
      "_dark-text-primary-color-darker-focus": "#0288d1",
      "_dark-text-primary-color-darker-disabled": "#01579b",
      "_dark-text-secondary-color-lighter": "#a0f2b7",
      "_dark-text-secondary-color-lighter-hover": "#c2f7d2",
      "_dark-text-secondary-color-lighter-focus": "#7be495",
      "_dark-text-secondary-color-lighter-disabled": "#388e3c",
      "_dark-text-secondary-color": "#8cd78e",
      "_dark-text-secondary-color-hover": "#66d93f",
      "_dark-text-secondary-color-focus": "#4ca610",
      "_dark-text-secondary-color-disabled": "#388e3c",
      "_dark-text-secondary-color-darker": "#43a047",
      "_dark-text-secondary-color-darker-hover": "#388e3c",
      "_dark-text-secondary-color-darker-focus": "#2e7031",
      "_dark-text-secondary-color-darker-disabled": "#6abf69",
      "_dark-bg-primary-color-lighter": "#222b36",
      "_dark-bg-primary-color-lighter-hover": "#293544",
      "_dark-bg-primary-color-lighter-focus": "#1a222b",
      "_dark-bg-primary-color-lighter-disabled": "#2c3e50",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#1a222b",
      "_dark-bg-primary-color-darker-hover": "#222b36",
      "_dark-bg-primary-color-darker-focus": "#293544",
      "_dark-bg-primary-color-darker-disabled": "#2c3e50",
      "_dark-bg-secondary-color-lighter": "#1a222b",
      "_dark-bg-secondary-color-lighter-hover": "#222b36",
      "_dark-bg-secondary-color-lighter-focus": "#293544",
      "_dark-bg-secondary-color-lighter-disabled": "#2c3e50",
      "_dark-bg-secondary-color": "#222b36",
      "_dark-bg-secondary-color-hover": "#293544",
      "_dark-bg-secondary-color-focus": "#1a222b",
      "_dark-bg-secondary-color-disabled": "#2c3e50",
      "_dark-bg-secondary-color-darker": "#293544",
      "_dark-bg-secondary-color-darker-hover": "#222b36",
      "_dark-bg-secondary-color-darker-focus": "#1a222b",
      "_dark-bg-secondary-color-darker-disabled": "#2c3e50",
      "_dark-grey-color-lighter": "#2B2B2B",
      "_dark-grey-color-light": "#414141",
      "_dark-grey-color": "#575757",
      "_dark-grey-color-dark": "#6D6D6D",
      "_dark-grey-color-darker": "#969494",
      "_dark-error-color": "#f9676a",
      "_dark-error-color-hover": "#ff7b7f",
      "_dark-error-color-focus": "#e5565e",
      "_dark-error-color-disabled": "#ff9b9e",
      "_dark-success-color": "#63d42b",
      "_dark-success-color-hover": "#75d93d",
      "_dark-success-color-focus": "#55b825",
      "_dark-success-color-disabled": "#8ade5f",
      "_dark-warning-color": "#eead2b",
      "_dark-warning-color-hover": "#f2b73d",
      "_dark-warning-color-focus": "#d69c1f",
      "_dark-warning-color-disabled": "#f5cd5c",
      "_dark-info-color": "#1C91CD",
      "_dark-info-color-hover": "#1786b7",
      "_dark-info-color-focus": "#0F6FA9",
      "_dark-info-color-disabled": "#55b4e1",
      "_dark-active-color": "#1C91CD",
      "_dark-active-color-hover": "#1786b7",
      "_dark-active-color-focus": "#0F6FA9",
      "_dark-active-color-disabled": "#55b4e1",
      "_dark-link-color": "#1C91CD",
      "_dark-link-color-hover": "#1786b7",
      "_dark-link-color-focus": "#0F6FA9",
      "_dark-link-color-disabled": "#55b4e1"
    },
    "global": {
      "breakpoint-small": "544px",
      "breakpoint-medium": "768px",
      "breakpoint-large": "1012px",
      "transition-slow": "0.2s",
      "transition-normal": "0.3s",
      "transition-fast": "0.5s",
      "space-base-unit": "0.25rem",
      "space-8": "calc(@space-base-unit * 2)",
      "space-16": "calc(@space-base-unit * 4)",
      "space-24": "calc(@space-base-unit * 6)",
      "space-32": "calc(@space-base-unit * 8)",
      "space-40": "calc(@space-base-unit * 10)",
      "space-48": "calc(@space-base-unit * 12)",
      "space-64": "calc(@space-base-unit * 16)"
    },
    "typography": {
      "font-base-unit": ".25rem",
      "font-family-primary": "'Charlie Display', 'Segoe UI', Arial, sans-serif",
      "font-family-secondary": "serif",
      "font-size-12": "calc(@font-base-unit * 3)",
      "font-size-16": "calc(@font-base-unit * 4)",
      "font-size-20": "calc(@font-base-unit * 5)",
      "font-size-24": "calc(@font-base-unit * 6)",
      "font-size-40": "calc(@font-base-unit * 10)",
      "font-size-48": "calc(@font-base-unit * 12)",
      "font-size-64": "calc(@font-base-unit * 16)",
      "line-height-base-unit": "1",
      "line-height-small": "calc(@line-height-base-unit * 1.1)",
      "line-height-medium": "calc(@line-height-base-unit * 1.3)",
      "line-height-large": "calc(@line-height-base-unit * 1.5)",
      "font-weight-lighter": "100",
      "font-weight-light": "200",
      "font-weight-normal": "400",
      "font-weight-bold": "700",
      "font-weight-bolder": "900"
    }
  }
}