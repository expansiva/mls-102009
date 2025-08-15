/// <mls shortName="module" project="102009" folder="travel" enhancement="_blank" />

export const moduleConfig = {
  theme: "travel",
  initialPage: "home"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brasil (prioritário), América Latina (futuro)",
    "userPrompt": "Crie um sistema web chamado Travel, que será uma plataforma para uma agência de viagens.",
    "moduleGoal": "Desenvolver uma plataforma web responsiva para uma agência de viagens, chamada Travel, permitindo busca e reserva de pacotes, avaliações públicas de clientes, autenticação básica e integração com Mercado Pago.",
    "moduleName": "travel",
    "requirements": [
      "Utilizar semântica HTML adequada (header, nav, main, section, footer, etc.).",
      "Layout responsivo para desktop, tablet e mobile, utilizando media queries.",
      "Seguir o estilo visual do layout fornecido no Figma (cores, tipografia e espaçamento).",
      "Não copiar exatamente o exemplo HTML/CSS fornecido, apenas usar como referência de estilo.",
      "Otimizar o uso de classes CSS e evitar estilos inline.",
      "Garantir contraste adequado e boa legibilidade.",
      "Foco inicial em clientes finais, com possibilidade futura de painel administrativo.",
      "Funcionalidades principais: busca de pacotes, reservas online, área para avaliações de clientes.",
      "Integração com sistemas de pagamento online (Mercado Pago).",
      "Preparar para futura internacionalização (i18n), mas inicialmente apenas em português.",
      "Tom de comunicação intermediário: profissional e acolhedor.",
      "Layout já disponível no Figma para referência.",
      "Avaliações públicas, mas apenas usuários autenticados podem enviar avaliações.",
      "Autenticação/registro de usuários já na primeira versão.",
      "Garantir navegação por teclado e uso de ARIA para leitores de tela.",
      "Sugestão de integração futura com APIs de destinos turísticos."
    ],
    "userRequestsEnhancements": [
      {
        "description": "Adicionar painel administrativo para gerenciar pacotes e reservas.",
        "priority": "could"
      },
      {
        "description": "Adicionar suporte multilíngue (i18n).",
        "priority": "could"
      },
      {
        "description": "Permitir login social (Google, Facebook).",
        "priority": "could"
      },
      {
        "description": "Integrar um blog de viagens ou dicas.",
        "priority": "could"
      },
      {
        "description": "Implementar notificações por e-mail para confirmações de reserva.",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageGoal": "Apresentar a agência, destaques de pacotes e permitir busca rápida.",
      "pageRequirements": [
        "Exibir banner institucional e chamada para ação.",
        "Mostrar pacotes em destaque.",
        "Permitir busca de pacotes.",
        "Acesso à área de login/registro.",
        "Acesso à navegação principal."
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "searchResults",
      "pageGoal": "Exibir resultados de busca de pacotes de viagem.",
      "pageRequirements": [
        "Listar pacotes filtrados conforme busca.",
        "Permitir refinar filtros.",
        "Acesso rápido à reserva de cada pacote."
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "packageDetails",
      "pageGoal": "Exibir detalhes completos de um pacote e permitir reserva.",
      "pageRequirements": [
        "Mostrar informações detalhadas do pacote.",
        "Exibir avaliações públicas.",
        "Permitir reserva online.",
        "Permitir envio de avaliação (apenas autenticado)."
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "reservation",
      "pageGoal": "Permitir ao usuário reservar um pacote e realizar pagamento.",
      "pageRequirements": [
        "Formulário de reserva.",
        "Integração com Mercado Pago.",
        "Confirmação de reserva."
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "loginRegister",
      "pageGoal": "Permitir autenticação e registro de usuários.",
      "pageRequirements": [
        "Formulário de login.",
        "Formulário de registro.",
        "Recuperação de senha."
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "userProfile",
      "pageGoal": "Permitir ao usuário visualizar e editar seus dados e reservas.",
      "pageRequirements": [
        "Visualizar dados pessoais.",
        "Editar perfil.",
        "Listar reservas realizadas."
      ]
    }
  ],
  "plugins": [
    {
      "pluginSequential": 0,
      "pluginName": "pluginMercadoPago",
      "pluginType": "third-party",
      "pluginGoal": "Integrar pagamentos online via Mercado Pago.",
      "pluginRequirements": [
        "Permitir pagamentos de reservas.",
        "Exibir status de pagamento.",
        "Garantir segurança e conformidade com PCI DSS."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "pluginScrollToTop",
      "pluginType": "ui",
      "pluginGoal": "Facilitar navegação em páginas longas.",
      "pluginRequirements": [
        "Exibir botão flutuante para voltar ao topo.",
        "Acessível por teclado."
      ]
    }
  ],
  "pagesWireframe": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "<organism-hero-banner></organism-hero-banner>",
        "</header>",
        "<main>",
        "<organism-search-bar></organism-search-bar>",
        "<organism-featured-packages></organism-featured-packages>",
        "<organism-about-section></organism-about-section>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "searchResults",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-filter-panel></organism-filter-panel>",
        "</aside>",
        "<main>",
        "<organism-package-list></organism-package-list>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "packageDetails",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-package-details></organism-package-details>",
        "<organism-reviews-list></organism-reviews-list>",
        "<organism-review-form></organism-review-form>",
        "<organism-reservation-cta></organism-reservation-cta>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "reservation",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-reservation-form></organism-reservation-form>",
        "<organism-payment-status></organism-payment-status>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "loginRegister",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-login-form></organism-login-form>",
        "<organism-register-form></organism-register-form>",
        "<organism-password-recovery></organism-password-recovery>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "userProfile",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-user-profile></organism-user-profile>",
        "<organism-user-reservations></organism-user-reservations>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    }
  ],
  "organism": [
    {
      "organismSequential": 0,
      "organismTag": "organism-nav",
      "planning": {
        "context": "Navegação principal do site, presente em todas as páginas.",
        "goal": "Exibir logo, links principais (Home, Pacotes, Login/Perfil) e acesso à autenticação.",
        "userStories": [
          {
            "story": "Como visitante, quero acessar facilmente as principais áreas do site.",
            "derivedRequirements": [
              {
                "description": "Links para Home, Busca de Pacotes, Login/Perfil."
              }
            ]
          },
          {
            "story": "Como usuário autenticado, quero acessar meu perfil rapidamente.",
            "derivedRequirements": [
              {
                "description": "Exibir avatar/nome e link para perfil quando autenticado."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser responsivo e acessível por teclado.",
          "Deve usar ARIA para navegação."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-hero-banner",
      "planning": {
        "context": "Banner institucional de destaque na home.",
        "goal": "Apresentar chamada para ação e imagem inspiradora.",
        "userStories": [
          {
            "story": "Como visitante, quero ver uma mensagem de boas-vindas e incentivo para buscar pacotes.",
            "derivedRequirements": [
              {
                "description": "Exibir texto de boas-vindas e botão para busca de pacotes."
              }
            ]
          }
        ],
        "constraints": [
          "Imagem otimizada para diferentes tamanhos de tela."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-search-bar",
      "planning": {
        "context": "Barra de busca de pacotes, presente na home.",
        "goal": "Permitir busca rápida por destino, data ou tipo de pacote.",
        "userStories": [
          {
            "story": "Como usuário, quero buscar pacotes por destino e data.",
            "derivedRequirements": [
              {
                "description": "Campos de destino, data e botão de busca."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser acessível por teclado e leitores de tela."
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-featured-packages",
      "planning": {
        "context": "Exibição de pacotes em destaque na home.",
        "goal": "Mostrar pacotes selecionados para atrair o usuário.",
        "userStories": [
          {
            "story": "Como visitante, quero ver pacotes populares ou promocionais.",
            "derivedRequirements": [
              {
                "description": "Listar pacotes com imagem, preço e botão de detalhes."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-about-section",
      "planning": {
        "context": "Seção institucional sobre a agência.",
        "goal": "Apresentar informações sobre a agência e diferenciais.",
        "userStories": [
          {
            "story": "Como visitante, quero saber mais sobre a agência antes de reservar.",
            "derivedRequirements": [
              {
                "description": "Exibir texto institucional e diferenciais."
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
        "context": "Rodapé do site.",
        "goal": "Exibir informações de contato, redes sociais e links úteis.",
        "userStories": [
          {
            "story": "Como usuário, quero encontrar facilmente informações de contato e redes sociais.",
            "derivedRequirements": [
              {
                "description": "Exibir telefone, e-mail, links de redes sociais e políticas."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-filter-panel",
      "planning": {
        "context": "Painel lateral de filtros na busca de pacotes.",
        "goal": "Permitir refinar busca por preço, destino, duração, etc.",
        "userStories": [
          {
            "story": "Como usuário, quero filtrar pacotes por critérios relevantes.",
            "derivedRequirements": [
              {
                "description": "Filtros de preço, destino, duração, tipo de pacote."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 7,
      "organismTag": "organism-package-list",
      "planning": {
        "context": "Lista de pacotes na página de resultados.",
        "goal": "Exibir pacotes encontrados conforme filtros e busca.",
        "userStories": [
          {
            "story": "Como usuário, quero ver uma lista clara dos pacotes disponíveis.",
            "derivedRequirements": [
              {
                "description": "Listar pacotes com imagem, resumo, preço e botão de detalhes."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 8,
      "organismTag": "organism-package-details",
      "planning": {
        "context": "Detalhamento completo de um pacote.",
        "goal": "Exibir todas as informações do pacote selecionado.",
        "userStories": [
          {
            "story": "Como usuário, quero ver detalhes completos antes de reservar.",
            "derivedRequirements": [
              {
                "description": "Exibir descrição, fotos, datas, preço, itinerário."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 9,
      "organismTag": "organism-reviews-list",
      "planning": {
        "context": "Lista de avaliações públicas de clientes.",
        "goal": "Exibir avaliações e notas de outros clientes.",
        "userStories": [
          {
            "story": "Como visitante, quero ler avaliações de outros clientes.",
            "derivedRequirements": [
              {
                "description": "Listar avaliações públicas com nota, comentário e nome do cliente."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 10,
      "organismTag": "organism-review-form",
      "planning": {
        "context": "Formulário para envio de avaliação (apenas autenticado).",
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
        "constraints": [
          "Exibir mensagem para não autenticados solicitando login."
        ]
      }
    },
    {
      "organismSequential": 11,
      "organismTag": "organism-reservation-cta",
      "planning": {
        "context": "Chamada para ação de reserva no detalhe do pacote.",
        "goal": "Destacar botão para reservar o pacote.",
        "userStories": [
          {
            "story": "Como usuário, quero reservar facilmente o pacote exibido.",
            "derivedRequirements": [
              {
                "description": "Botão de reserva destacado, levando ao formulário de reserva."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 12,
      "organismTag": "organism-reservation-form",
      "planning": {
        "context": "Formulário de reserva de pacote.",
        "goal": "Permitir ao usuário inserir dados e reservar o pacote.",
        "userStories": [
          {
            "story": "Como usuário, quero preencher meus dados e reservar um pacote.",
            "derivedRequirements": [
              {
                "description": "Campos de dados pessoais, datas, quantidade de pessoas, botão de pagamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 13,
      "organismTag": "organism-payment-status",
      "planning": {
        "context": "Exibição do status do pagamento após reserva.",
        "goal": "Informar usuário sobre sucesso ou falha no pagamento.",
        "userStories": [
          {
            "story": "Como usuário, quero saber se meu pagamento foi aprovado.",
            "derivedRequirements": [
              {
                "description": "Exibir mensagem de sucesso ou erro após tentativa de pagamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 14,
      "organismTag": "organism-login-form",
      "planning": {
        "context": "Formulário de login de usuário.",
        "goal": "Permitir autenticação de usuários existentes.",
        "userStories": [
          {
            "story": "Como usuário cadastrado, quero acessar minha conta.",
            "derivedRequirements": [
              {
                "description": "Campos de e-mail, senha e botão de login."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 15,
      "organismTag": "organism-register-form",
      "planning": {
        "context": "Formulário de registro de novo usuário.",
        "goal": "Permitir cadastro de novos clientes.",
        "userStories": [
          {
            "story": "Como novo usuário, quero criar uma conta facilmente.",
            "derivedRequirements": [
              {
                "description": "Campos de nome, e-mail, senha e botão de registro."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 16,
      "organismTag": "organism-password-recovery",
      "planning": {
        "context": "Formulário para recuperação de senha.",
        "goal": "Permitir que usuários recuperem o acesso à conta.",
        "userStories": [
          {
            "story": "Como usuário, quero recuperar minha senha caso esqueça.",
            "derivedRequirements": [
              {
                "description": "Campo de e-mail e botão para envio de instruções."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 17,
      "organismTag": "organism-user-profile",
      "planning": {
        "context": "Exibição e edição de dados do usuário.",
        "goal": "Permitir ao usuário visualizar e editar seus dados pessoais.",
        "userStories": [
          {
            "story": "Como usuário autenticado, quero ver e editar meus dados.",
            "derivedRequirements": [
              {
                "description": "Exibir e permitir edição de nome, e-mail, senha."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 18,
      "organismTag": "organism-user-reservations",
      "planning": {
        "context": "Lista de reservas do usuário.",
        "goal": "Permitir ao usuário visualizar suas reservas passadas e futuras.",
        "userStories": [
          {
            "story": "Como usuário autenticado, quero ver todas as minhas reservas.",
            "derivedRequirements": [
              {
                "description": "Listar reservas com status, datas e detalhes do pacote."
              }
            ]
          }
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "A modern, minimalist logo featuring a stylized airplane and a curved path forming the letter 'T' for Travel, using blue and orange gradients to evoke adventure and trust.",
    "fontFamily": "'Charlie Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    "iconStyle": "outline",
    "illustrationStyle": "flat, colorful, with soft gradients and rounded shapes, evoking travel and adventure",
    "colorPalette": {
      "primary": "#1C91CD",
      "secondary": "#FAAD14",
      "text": "#403f3f",
      "background": "#ffffff",
      "border": "#E6E6E6",
      "error": "#FF4D4F",
      "warning": "#FAAD14",
      "success": "#52C41A"
    }
  },
  "tokens": {
    "description": "Design tokens personalizados para o módulo Travel, com foco em acessibilidade, contraste e identidade visual inspirada em viagens.",
    "themeName": "travel",
    "color": {
      "text-primary-color-lighter": "#4a6fa5",
      "text-primary-color-lighter-hover": "#5b7fb5",
      "text-primary-color-lighter-focus": "#3a5f95",
      "text-primary-color-lighter-disabled": "#7a9fc5",
      "text-primary-color": "#1C91CD",
      "text-primary-color-hover": "#2a9edb",
      "text-primary-color-focus": "#1786b7",
      "text-primary-color-disabled": "#55b4e1",
      "text-primary-color-darker": "#0F6FA9",
      "text-primary-color-darker-hover": "#1b7bb5",
      "text-primary-color-darker-focus": "#0c6495",
      "text-primary-color-darker-disabled": "#3a9ec1",
      "text-secondary-color-lighter": "#FFD580",
      "text-secondary-color-lighter-hover": "#ffe099",
      "text-secondary-color-lighter-focus": "#ffcb66",
      "text-secondary-color-lighter-disabled": "#ffeab3",
      "text-secondary-color": "#FAAD14",
      "text-secondary-color-hover": "#fbbd34",
      "text-secondary-color-focus": "#e09a0e",
      "text-secondary-color-disabled": "#fdd55e",
      "text-secondary-color-darker": "#b38600",
      "text-secondary-color-darker-hover": "#c49a1a",
      "text-secondary-color-darker-focus": "#997300",
      "text-secondary-color-darker-disabled": "#d9b366",
      "bg-primary-color-lighter": "#f5faff",
      "bg-primary-color-lighter-hover": "#e6f4ff",
      "bg-primary-color-lighter-focus": "#d9ecff",
      "bg-primary-color-lighter-disabled": "#cce4ff",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f6fa",
      "bg-primary-color-focus": "#e6eef5",
      "bg-primary-color-disabled": "#d9e6f0",
      "bg-primary-color-darker": "#e6f4ff",
      "bg-primary-color-darker-hover": "#d9ecff",
      "bg-primary-color-darker-focus": "#cce4ff",
      "bg-primary-color-darker-disabled": "#b3d8f7",
      "bg-secondary-color-lighter": "#fffbe6",
      "bg-secondary-color-lighter-hover": "#fff7cc",
      "bg-secondary-color-lighter-focus": "#fff2b3",
      "bg-secondary-color-lighter-disabled": "#ffec99",
      "bg-secondary-color": "#FAAD14",
      "bg-secondary-color-hover": "#fbbd34",
      "bg-secondary-color-focus": "#e09a0e",
      "bg-secondary-color-disabled": "#fdd55e",
      "bg-secondary-color-darker": "#b38600",
      "bg-secondary-color-darker-hover": "#c49a1a",
      "bg-secondary-color-darker-focus": "#997300",
      "bg-secondary-color-darker-disabled": "#d9b366",
      "grey-color-lighter": "#F9FAFB",
      "grey-color-light": "#F2F6FA",
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
      "info-color-hover": "#2a9edb",
      "info-color-focus": "#1786b7",
      "info-color-disabled": "#55b4e1",
      "active-color": "#1C91CD",
      "active-color-hover": "#2a9edb",
      "active-color-focus": "#1786b7",
      "active-color-disabled": "#55b4e1",
      "link-color": "#1C91CD",
      "link-color-hover": "#2a9edb",
      "link-color-focus": "#1786b7",
      "link-color-disabled": "#55b4e1",
      "_dark-text-primary-color-lighter": "#e6edf3",
      "_dark-text-primary-color-lighter-hover": "#d1d9e4",
      "_dark-text-primary-color-lighter-focus": "#c3cfd8",
      "_dark-text-primary-color-lighter-disabled": "#b0b8c4",
      "_dark-text-primary-color": "#b3d8f7",
      "_dark-text-primary-color-hover": "#c7e3f5",
      "_dark-text-primary-color-focus": "#a3c8e5",
      "_dark-text-primary-color-disabled": "#d3e9f7",
      "_dark-text-primary-color-darker": "#5294c7",
      "_dark-text-primary-color-darker-hover": "#63a2d8",
      "_dark-text-primary-color-darker-focus": "#4787b2",
      "_dark-text-primary-color-darker-disabled": "#78b0e0",
      "_dark-text-secondary-color-lighter": "#ffeab3",
      "_dark-text-secondary-color-lighter-hover": "#fffbe6",
      "_dark-text-secondary-color-lighter-focus": "#fff2b3",
      "_dark-text-secondary-color-lighter-disabled": "#fff7cc",
      "_dark-text-secondary-color": "#fdd55e",
      "_dark-text-secondary-color-hover": "#fbbd34",
      "_dark-text-secondary-color-focus": "#e09a0e",
      "_dark-text-secondary-color-disabled": "#fbbd34",
      "_dark-text-secondary-color-darker": "#b38600",
      "_dark-text-secondary-color-darker-hover": "#c49a1a",
      "_dark-text-secondary-color-darker-focus": "#997300",
      "_dark-text-secondary-color-darker-disabled": "#d9b366",
      "_dark-bg-primary-color-lighter": "#1a1f24",
      "_dark-bg-primary-color-lighter-hover": "#232a31",
      "_dark-bg-primary-color-lighter-focus": "#2b3036",
      "_dark-bg-primary-color-lighter-disabled": "#333a41",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#232a31",
      "_dark-bg-primary-color-darker-hover": "#2b3036",
      "_dark-bg-primary-color-darker-focus": "#333a41",
      "_dark-bg-primary-color-darker-disabled": "#40464d",
      "_dark-bg-secondary-color-lighter": "#232a31",
      "_dark-bg-secondary-color-lighter-hover": "#2b3036",
      "_dark-bg-secondary-color-lighter-focus": "#333a41",
      "_dark-bg-secondary-color-lighter-disabled": "#40464d",
      "_dark-bg-secondary-color": "#b38600",
      "_dark-bg-secondary-color-hover": "#c49a1a",
      "_dark-bg-secondary-color-focus": "#997300",
      "_dark-bg-secondary-color-disabled": "#d9b366",
      "_dark-bg-secondary-color-darker": "#fdd55e",
      "_dark-bg-secondary-color-darker-hover": "#fbbd34",
      "_dark-bg-secondary-color-darker-focus": "#e09a0e",
      "_dark-bg-secondary-color-darker-disabled": "#fbbd34",
      "_dark-grey-color-lighter": "#232a31",
      "_dark-grey-color-light": "#2b3036",
      "_dark-grey-color": "#333a41",
      "_dark-grey-color-dark": "#40464d",
      "_dark-grey-color-darker": "#575757",
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
      "_dark-info-color": "#b3d8f7",
      "_dark-info-color-hover": "#c7e3f5",
      "_dark-info-color-focus": "#a3c8e5",
      "_dark-info-color-disabled": "#d3e9f7",
      "_dark-active-color": "#b3d8f7",
      "_dark-active-color-hover": "#c7e3f5",
      "_dark-active-color-focus": "#a3c8e5",
      "_dark-active-color-disabled": "#d3e9f7",
      "_dark-link-color": "#b3d8f7",
      "_dark-link-color-hover": "#c7e3f5",
      "_dark-link-color-focus": "#a3c8e5",
      "_dark-link-color-disabled": "#d3e9f7"
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
      "font-family-primary": "'Charlie Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
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