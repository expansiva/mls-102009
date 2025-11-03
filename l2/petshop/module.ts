/// <mls shortName="module" project="102009" folder="petshop" enhancement="_blank" />

export const moduleConfig = {
  theme: "petshop",
  initialPage: "pageLogin",
  menu: [
    {
      pageName: 'pageLogin',
      title: 'Login Simulate',
      auth: 'admin',
      icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M409 337C418.4 327.6 418.4 312.4 409 303.1L265 159C258.1 152.1 247.8 150.1 238.8 153.8C229.8 157.5 224 166.3 224 176L224 256L112 256C85.5 256 64 277.5 64 304L64 336C64 362.5 85.5 384 112 384L224 384L224 464C224 473.7 229.8 482.5 238.8 486.2C247.8 489.9 258.1 487.9 265 481L409 337zM416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L480 544C533 544 576 501 576 448L576 192C576 139 533 96 480 96L416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160C497.7 160 512 174.3 512 192L512 448C512 465.7 497.7 480 480 480L416 480z"/></svg>`
    },
    {
      pageName: 'pageAdminDashboard',
      title: 'Dashboard',
      auth: 'admin',
      icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM384 416C384 389.1 367.5 366.1 344 356.7L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184L296 356.7C272.5 366.2 256 389.2 256 416C256 451.3 284.7 480 320 480C355.3 480 384 451.3 384 416zM208 240C225.7 240 240 225.7 240 208C240 190.3 225.7 176 208 176C190.3 176 176 190.3 176 208C176 225.7 190.3 240 208 240zM192 320C192 302.3 177.7 288 160 288C142.3 288 128 302.3 128 320C128 337.7 142.3 352 160 352C177.7 352 192 337.7 192 320zM480 352C497.7 352 512 337.7 512 320C512 302.3 497.7 288 480 288C462.3 288 448 302.3 448 320C448 337.7 462.3 352 480 352zM464 208C464 190.3 449.7 176 432 176C414.3 176 400 190.3 400 208C400 225.7 414.3 240 432 240C449.7 240 464 225.7 464 208z"/></svg>`
    },
    {
      pageName: 'pageAdminScheduling',
      title: 'Agendamento',
      auth: 'admin',
      icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"/></svg>`
    },
    {
      pageName: 'pageAdminProduct',
      title: 'Produto',
      auth: 'admin',
      icon: `<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M390.3 282.8C390.3 303.3 373.6 320 353.1 320L282.8 320L282.8 245.6L353.1 245.6C373.6 245.6 390.3 262.3 390.3 282.8zM72 320C72 183 183 72 320 72C457 72 568 183 568 320C568 457 457 568 320 568C183 568 72 457 72 320zM439.9 282.8C439.9 234.9 401 196 353.1 196L233.2 196L233.2 444L282.8 444L282.8 369.6L353.1 369.6C401 369.6 439.9 330.7 439.9 282.8z"/></svg>`
    },
    {
      pageName: 'pageAdminService',
      title: 'Serviço',
      auth: 'admin',
      icon: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z"/></svg>',
    }
  ]
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