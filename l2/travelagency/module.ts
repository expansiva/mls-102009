/// <mls shortName="module" project="102009" folder="travelagency" enhancement="_blank" />

export const moduleConfig = {
  theme: "travelagency",
  initialPage: "home"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brasil (prioritário), América Latina (futuramente, com suporte a múltiplos idiomas)",
    "userPrompt": "Crie um sistema web chamado Travel Agency, que será uma plataforma para uma agência de viagens. O layout deve ser baseado no exemplo apresentado no link abaixo https://chamados.expansiva.com.br/figma.png",
    "moduleGoal": "Desenvolver uma plataforma web para uma agência de viagens, permitindo que usuários pesquisem, reservem e avaliem pacotes de viagem, com interface baseada no layout fornecido.",
    "moduleName": "travelagency",
    "requirements": [
      "Sistema web chamado Travel Agency.",
      "Layout inspirado no exemplo fornecido (https://chamados.expansiva.com.br/figma.png).",
      "Dois tipos de usuários: administradores e clientes.",
      "Usuários não autenticados podem pesquisar pacotes de viagem.",
      "Apenas clientes cadastrados podem fazer reservas.",
      "Funcionalidades principais: busca de pacotes, visualização de detalhes, reservas online, avaliações de clientes.",
      "Integração com meio de pagamento online (cartão de crédito).",
      "Comunicação com tom amigável, acessível e profissional.",
      "Idioma inicial: português.",
      "Cadastro de pacote de viagem exige destino, datas de ida e volta, preço, descrição e pelo menos uma foto.",
      "Clientes podem se cadastrar pelo site; administradores são cadastrados manualmente.",
      "Avaliações dos clientes devem conter nota (1 a 5 estrelas) e comentário.",
      "Administrador pode editar ou excluir avaliações e reservas.",
      "Busca de pacotes deve ter filtros por preço, data e destino."
    ],
    "userRequestsEnhancements": [
      {
        "description": "Adicionar suporte a múltiplos idiomas.",
        "priority": "could"
      },
      {
        "description": "Implementar integração com redes sociais para login ou compartilhamento.",
        "priority": "could"
      },
      {
        "description": "Permitir que clientes salvem pacotes favoritos.",
        "priority": "could"
      },
      {
        "description": "Relatórios administrativos (ex: vendas, avaliações, reservas).",
        "priority": "could"
      },
      {
        "description": "Notificações por e-mail ou push para reservas e promoções.",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageGoal": "Apresentar a plataforma, permitir busca e navegação inicial dos pacotes de viagem.",
      "pageRequirements": [
        "Exibir destaque institucional e chamada para ação.",
        "Mostrar busca de pacotes com filtros por destino, data e preço.",
        "Listar pacotes em destaque.",
        "Acesso ao login/cadastro."
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "packageList",
      "pageGoal": "Exibir lista de pacotes de viagem com filtros avançados.",
      "pageRequirements": [
        "Listar pacotes disponíveis.",
        "Permitir filtros por destino, data e preço.",
        "Permitir navegação para detalhes do pacote."
      ]
    },
    {
      "pageSequential": 2,
      "pageName": "packageDetail",
      "pageGoal": "Exibir detalhes completos de um pacote de viagem, avaliações e opção de reserva.",
      "pageRequirements": [
        "Mostrar informações detalhadas do pacote (destino, datas, preço, descrição, fotos).",
        "Exibir avaliações de clientes (nota e comentário).",
        "Permitir reserva (para clientes autenticados).",
        "Permitir adicionar avaliação (para clientes autenticados)."
      ]
    },
    {
      "pageSequential": 3,
      "pageName": "reservation",
      "pageGoal": "Permitir ao cliente reservar um pacote de viagem e efetuar pagamento.",
      "pageRequirements": [
        "Formulário de reserva com dados do cliente e do pacote.",
        "Integração com meio de pagamento online (cartão de crédito).",
        "Confirmação da reserva."
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "login",
      "pageGoal": "Permitir login de clientes e administradores.",
      "pageRequirements": [
        "Formulário de login.",
        "Redirecionamento conforme tipo de usuário."
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "register",
      "pageGoal": "Permitir cadastro de novos clientes.",
      "pageRequirements": [
        "Formulário de cadastro de cliente.",
        "Validação de dados obrigatórios."
      ]
    },
    {
      "pageSequential": 6,
      "pageName": "clientDashboard",
      "pageGoal": "Painel do cliente para gerenciar reservas e avaliações.",
      "pageRequirements": [
        "Listar reservas do cliente.",
        "Permitir cancelar reservas.",
        "Listar avaliações feitas e permitir edição/exclusão."
      ]
    },
    {
      "pageSequential": 7,
      "pageName": "adminDashboard",
      "pageGoal": "Painel administrativo para gerenciar pacotes, reservas e avaliações.",
      "pageRequirements": [
        "Listar, criar, editar e excluir pacotes de viagem.",
        "Listar, editar e excluir reservas.",
        "Listar, editar e excluir avaliações.",
        "Cadastro manual de administradores."
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
        "Suporte a pagamentos em reais (BRL).",
        "Confirmação automática de pagamento."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "pluginScrollToTop",
      "pluginType": "ui",
      "pluginGoal": "Facilitar navegação em páginas longas.",
      "pluginRequirements": [
        "Exibir botão flutuante para voltar ao topo.",
        "Acessível em todas as páginas com rolagem."
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
        "</header>",
        "<main>",
        "<organism-hero-banner></organism-hero-banner>",
        "<organism-package-search></organism-package-search>",
        "<organism-featured-packages></organism-featured-packages>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 1,
      "pageName": "packageList",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-package-filters></organism-package-filters>",
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
      "pageName": "packageDetail",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-package-detail></organism-package-detail>",
        "<organism-package-gallery></organism-package-gallery>",
        "<organism-package-reviews></organism-package-reviews>",
        "<organism-package-reservation-cta></organism-package-reservation-cta>",
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
        "<organism-payment-integration></organism-payment-integration>",
        "<organism-reservation-confirmation></organism-reservation-confirmation>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 4,
      "pageName": "login",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-login-form></organism-login-form>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 5,
      "pageName": "register",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<main>",
        "<organism-register-form></organism-register-form>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 6,
      "pageName": "clientDashboard",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-client-sidebar></organism-client-sidebar>",
        "</aside>",
        "<main>",
        "<organism-client-reservations></organism-client-reservations>",
        "<organism-client-reviews></organism-client-reviews>",
        "</main>",
        "<footer>",
        "<organism-footer-info></organism-footer-info>",
        "</footer>"
      ]
    },
    {
      "pageSequential": 7,
      "pageName": "adminDashboard",
      "pageHtml": [
        "<header>",
        "<organism-nav></organism-nav>",
        "</header>",
        "<aside>",
        "<organism-admin-sidebar></organism-admin-sidebar>",
        "</aside>",
        "<main>",
        "<organism-admin-package-management></organism-admin-package-management>",
        "<organism-admin-reservation-management></organism-admin-reservation-management>",
        "<organism-admin-review-management></organism-admin-review-management>",
        "<organism-admin-user-management></organism-admin-user-management>",
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
        "context": "Barra de navegação principal, presente em todas as páginas.",
        "goal": "Exibir logo, links principais (Home, Pacotes, Login/Cadastro ou Painel), e acesso rápido ao painel do usuário.",
        "userStories": [
          {
            "story": "Como visitante, quero acessar facilmente as principais áreas do site.",
            "derivedRequirements": [
              {
                "description": "Links para Home, Pacotes, Login/Cadastro."
              }
            ]
          },
          {
            "story": "Como usuário autenticado, quero acessar meu painel rapidamente.",
            "derivedRequirements": [
              {
                "description": "Exibir botão/painel do usuário autenticado."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser responsivo.",
          "Deve exibir logo institucional."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-hero-banner",
      "planning": {
        "context": "Banner de destaque na home.",
        "goal": "Apresentar mensagem institucional e chamada para ação.",
        "userStories": [
          {
            "story": "Como visitante, quero entender rapidamente o propósito do site.",
            "derivedRequirements": [
              {
                "description": "Exibir mensagem clara e visual atrativo."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser visualmente atraente.",
          "Deve ser acessível."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-package-search",
      "planning": {
        "context": "Busca de pacotes na home.",
        "goal": "Permitir busca rápida de pacotes por destino, data e preço.",
        "userStories": [
          {
            "story": "Como visitante, quero buscar pacotes facilmente usando filtros.",
            "derivedRequirements": [
              {
                "description": "Campos de filtro por destino, data e preço."
              }
            ]
          }
        ],
        "constraints": [
          "Deve ser rápido e responsivo."
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-featured-packages",
      "planning": {
        "context": "Pacotes em destaque na home.",
        "goal": "Exibir pacotes de viagem em destaque para atrair usuários.",
        "userStories": [
          {
            "story": "Como visitante, quero ver sugestões de pacotes populares.",
            "derivedRequirements": [
              {
                "description": "Listar pacotes em destaque com imagem, destino e preço."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-footer-info",
      "planning": {
        "context": "Rodapé institucional.",
        "goal": "Exibir informações institucionais, contatos e links úteis.",
        "userStories": [
          {
            "story": "Como visitante, quero encontrar informações de contato e políticas facilmente.",
            "derivedRequirements": [
              {
                "description": "Exibir contatos, links de política de privacidade e termos."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 5,
      "organismTag": "organism-package-filters",
      "planning": {
        "context": "Filtros laterais na listagem de pacotes.",
        "goal": "Permitir ao usuário refinar a busca de pacotes.",
        "userStories": [
          {
            "story": "Como usuário, quero filtrar pacotes por destino, data e preço.",
            "derivedRequirements": [
              {
                "description": "Campos de filtro lateral por destino, data e preço."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-package-list",
      "planning": {
        "context": "Listagem de pacotes de viagem.",
        "goal": "Exibir pacotes disponíveis com informações resumidas.",
        "userStories": [
          {
            "story": "Como usuário, quero ver uma lista de pacotes para escolher o que me interessa.",
            "derivedRequirements": [
              {
                "description": "Listar pacotes com imagem, destino, datas e preço."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 7,
      "organismTag": "organism-package-detail",
      "planning": {
        "context": "Detalhamento de um pacote.",
        "goal": "Exibir todas as informações do pacote selecionado.",
        "userStories": [
          {
            "story": "Como usuário, quero ver detalhes completos do pacote antes de reservar.",
            "derivedRequirements": [
              {
                "description": "Exibir destino, datas, preço, descrição, fotos."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 8,
      "organismTag": "organism-package-gallery",
      "planning": {
        "context": "Galeria de fotos do pacote.",
        "goal": "Permitir visualizar fotos do destino/pacote.",
        "userStories": [
          {
            "story": "Como usuário, quero ver fotos do pacote para decidir melhor.",
            "derivedRequirements": [
              {
                "description": "Exibir galeria de imagens do pacote."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 9,
      "organismTag": "organism-package-reviews",
      "planning": {
        "context": "Avaliações de clientes sobre o pacote.",
        "goal": "Exibir avaliações (nota e comentário) e permitir adicionar nova avaliação.",
        "userStories": [
          {
            "story": "Como cliente, quero ver avaliações de outros clientes.",
            "derivedRequirements": [
              {
                "description": "Listar avaliações com nota e comentário."
              }
            ]
          },
          {
            "story": "Como cliente autenticado, quero avaliar o pacote.",
            "derivedRequirements": [
              {
                "description": "Formulário para adicionar avaliação (nota e comentário)."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 10,
      "organismTag": "organism-package-reservation-cta",
      "planning": {
        "context": "Chamada para ação de reserva.",
        "goal": "Permitir ao usuário iniciar o processo de reserva do pacote.",
        "userStories": [
          {
            "story": "Como cliente autenticado, quero reservar o pacote facilmente.",
            "derivedRequirements": [
              {
                "description": "Botão de reserva visível e acessível."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 11,
      "organismTag": "organism-reservation-form",
      "planning": {
        "context": "Formulário de reserva de pacote.",
        "goal": "Coletar dados do cliente e do pacote para efetuar reserva.",
        "userStories": [
          {
            "story": "Como cliente, quero preencher meus dados para reservar um pacote.",
            "derivedRequirements": [
              {
                "description": "Formulário com campos obrigatórios e validação."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 12,
      "organismTag": "organism-payment-integration",
      "planning": {
        "context": "Integração com meio de pagamento.",
        "goal": "Permitir pagamento online via cartão de crédito.",
        "userStories": [
          {
            "story": "Como cliente, quero pagar minha reserva com cartão de crédito.",
            "derivedRequirements": [
              {
                "description": "Integração com Stripe para processar pagamentos."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 13,
      "organismTag": "organism-reservation-confirmation",
      "planning": {
        "context": "Confirmação de reserva.",
        "goal": "Exibir confirmação e detalhes da reserva efetuada.",
        "userStories": [
          {
            "story": "Como cliente, quero ver a confirmação da minha reserva.",
            "derivedRequirements": [
              {
                "description": "Exibir mensagem de sucesso e detalhes da reserva."
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
        "context": "Formulário de login.",
        "goal": "Permitir autenticação de clientes e administradores.",
        "userStories": [
          {
            "story": "Como usuário, quero acessar minha conta com login e senha.",
            "derivedRequirements": [
              {
                "description": "Formulário de login com validação."
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
        "context": "Formulário de cadastro de cliente.",
        "goal": "Permitir que novos clientes se cadastrem.",
        "userStories": [
          {
            "story": "Como visitante, quero criar uma conta para reservar pacotes.",
            "derivedRequirements": [
              {
                "description": "Formulário de cadastro com validação de campos obrigatórios."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 16,
      "organismTag": "organism-client-sidebar",
      "planning": {
        "context": "Menu lateral do painel do cliente.",
        "goal": "Facilitar navegação entre reservas e avaliações do cliente.",
        "userStories": [
          {
            "story": "Como cliente, quero acessar facilmente minhas reservas e avaliações.",
            "derivedRequirements": [
              {
                "description": "Links para reservas e avaliações."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 17,
      "organismTag": "organism-client-reservations",
      "planning": {
        "context": "Listagem de reservas do cliente.",
        "goal": "Exibir todas as reservas feitas pelo cliente e permitir cancelamento.",
        "userStories": [
          {
            "story": "Como cliente, quero ver minhas reservas e poder cancelar se necessário.",
            "derivedRequirements": [
              {
                "description": "Listar reservas e permitir cancelamento."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 18,
      "organismTag": "organism-client-reviews",
      "planning": {
        "context": "Listagem de avaliações feitas pelo cliente.",
        "goal": "Exibir avaliações do cliente e permitir edição/exclusão.",
        "userStories": [
          {
            "story": "Como cliente, quero gerenciar minhas avaliações.",
            "derivedRequirements": [
              {
                "description": "Listar avaliações e permitir editar/excluir."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 19,
      "organismTag": "organism-admin-sidebar",
      "planning": {
        "context": "Menu lateral do painel administrativo.",
        "goal": "Facilitar navegação entre as áreas de administração.",
        "userStories": [
          {
            "story": "Como administrador, quero acessar rapidamente as áreas de gestão.",
            "derivedRequirements": [
              {
                "description": "Links para pacotes, reservas, avaliações e usuários."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 20,
      "organismTag": "organism-admin-package-management",
      "planning": {
        "context": "Gestão de pacotes de viagem pelo administrador.",
        "goal": "Permitir criar, editar e excluir pacotes de viagem.",
        "userStories": [
          {
            "story": "Como administrador, quero gerenciar pacotes de viagem.",
            "derivedRequirements": [
              {
                "description": "Listar, criar, editar e excluir pacotes."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 21,
      "organismTag": "organism-admin-reservation-management",
      "planning": {
        "context": "Gestão de reservas pelo administrador.",
        "goal": "Permitir visualizar, editar e excluir reservas.",
        "userStories": [
          {
            "story": "Como administrador, quero gerenciar reservas dos clientes.",
            "derivedRequirements": [
              {
                "description": "Listar, editar e excluir reservas."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 22,
      "organismTag": "organism-admin-review-management",
      "planning": {
        "context": "Gestão de avaliações pelo administrador.",
        "goal": "Permitir visualizar, editar e excluir avaliações.",
        "userStories": [
          {
            "story": "Como administrador, quero gerenciar avaliações dos clientes.",
            "derivedRequirements": [
              {
                "description": "Listar, editar e excluir avaliações."
              }
            ]
          }
        ]
      }
    },
    {
      "organismSequential": 23,
      "organismTag": "organism-admin-user-management",
      "planning": {
        "context": "Gestão de usuários administradores.",
        "goal": "Permitir cadastro manual de administradores.",
        "userStories": [
          {
            "story": "Como administrador master, quero cadastrar novos administradores.",
            "derivedRequirements": [
              {
                "description": "Formulário para cadastro manual de administradores."
              }
            ]
          }
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "A modern, friendly logo with a stylized airplane and a globe, using blue and orange tones to convey trust and adventure. The font is rounded and approachable, matching the travel theme.",
    "fontFamily": "'Charlie Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    "iconStyle": "outline",
    "illustrationStyle": "flat, colorful, with simple shapes and friendly characters",
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
    "description": "Design tokens personalizados para o módulo Travel Agency, com suporte a modo claro e escuro, seguindo a identidade visual definida.",
    "themeName": "travelagency",
    "color": {
      "text-primary-color-lighter": "#535353",
      "text-primary-color-lighter-hover": "#5f5f5f",
      "text-primary-color-lighter-focus": "#4a4a4a",
      "text-primary-color-lighter-disabled": "#696969",
      "text-primary-color": "#403f3f",
      "text-primary-color-hover": "#4b4a4a",
      "text-primary-color-focus": "#353434",
      "text-primary-color-disabled": "#525151",
      "text-primary-color-darker": "#000000",
      "text-primary-color-darker-hover": "#1a1a1a",
      "text-primary-color-darker-focus": "#0d0d0d",
      "text-primary-color-darker-disabled": "#262626",
      "text-secondary-color-lighter": "#408EC8",
      "text-secondary-color-lighter-hover": "#4a9adb",
      "text-secondary-color-lighter-focus": "#377bb0",
      "text-secondary-color-lighter-disabled": "#629fd2",
      "text-secondary-color": "#1C91CD",
      "text-secondary-color-hover": "#2a9edb",
      "text-secondary-color-focus": "#1786b7",
      "text-secondary-color-disabled": "#55b4e1",
      "text-secondary-color-darker": "#0F6FA9",
      "text-secondary-color-darker-hover": "#1b7bb5",
      "text-secondary-color-darker-focus": "#0c6495",
      "text-secondary-color-darker-disabled": "#3a9ec1",
      "bg-primary-color-lighter": "#ffffff",
      "bg-primary-color-lighter-hover": "#f2f2f2",
      "bg-primary-color-lighter-focus": "#e6e6e6",
      "bg-primary-color-lighter-disabled": "#d9d9d9",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f2f2",
      "bg-primary-color-focus": "#e6e6e6",
      "bg-primary-color-disabled": "#d9d9d9",
      "bg-primary-color-darker": "#fafafa",
      "bg-primary-color-darker-hover": "#f5f5f5",
      "bg-primary-color-darker-focus": "#eeeeee",
      "bg-primary-color-darker-disabled": "#e0e0e0",
      "bg-secondary-color-lighter": "#F9F9F9",
      "bg-secondary-color-lighter-hover": "#f4f4f4",
      "bg-secondary-color-lighter-focus": "#efefef",
      "bg-secondary-color-lighter-disabled": "#eaeaea",
      "bg-secondary-color": "#E6E6E6",
      "bg-secondary-color-hover": "#d9d9d9",
      "bg-secondary-color-focus": "#cccccc",
      "bg-secondary-color-disabled": "#bfbfbf",
      "bg-secondary-color-darker": "#C0C0C0",
      "bg-secondary-color-darker-hover": "#b3b3b3",
      "bg-secondary-color-darker-focus": "#a6a6a6",
      "bg-secondary-color-darker-disabled": "#999999",
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
      "info-color-hover": "#2a9edb",
      "info-color-focus": "#1786b7",
      "info-color-disabled": "#55b4e1",
      "active-color": "#1890FF",
      "active-color-hover": "#1a99ff",
      "active-color-focus": "#0e80cc",
      "active-color-disabled": "#66b3ff",
      "link-color": "#1C91CD",
      "link-color-hover": "#2a9edb",
      "link-color-focus": "#1786b7",
      "link-color-disabled": "#55b4e1",
      "_dark-text-primary-color-lighter": "#FFFFFF",
      "_dark-text-primary-color-lighter-hover": "#f2f2f2",
      "_dark-text-primary-color-lighter-focus": "#e6e6e6",
      "_dark-text-primary-color-lighter-disabled": "#d9d9d9",
      "_dark-text-primary-color": "#e6edf3",
      "_dark-text-primary-color-hover": "#d1d9e4",
      "_dark-text-primary-color-focus": "#c3cfd8",
      "_dark-text-primary-color-disabled": "#b0b8c4",
      "_dark-text-primary-color-darker": "#8d96a0",
      "_dark-text-primary-color-darker-hover": "#a1aab0",
      "_dark-text-primary-color-darker-focus": "#7a828a",
      "_dark-text-primary-color-darker-disabled": "#b1b7bd",
      "_dark-text-secondary-color-lighter": "#5294c7",
      "_dark-text-secondary-color-lighter-hover": "#63a2d8",
      "_dark-text-secondary-color-lighter-focus": "#4787b2",
      "_dark-text-secondary-color-lighter-disabled": "#78b0e0",
      "_dark-text-secondary-color": "#56a8d1",
      "_dark-text-secondary-color-hover": "#68b8e0",
      "_dark-text-secondary-color-focus": "#4b9cc4",
      "_dark-text-secondary-color-disabled": "#80c4e5",
      "_dark-text-secondary-color-darker": "#bddef3",
      "_dark-text-secondary-color-darker-hover": "#c7e3f5",
      "_dark-text-secondary-color-darker-focus": "#a3c8e5",
      "_dark-text-secondary-color-darker-disabled": "#d3e9f7",
      "_dark-bg-primary-color-lighter": "#666666",
      "_dark-bg-primary-color-lighter-hover": "#7a7a7a",
      "_dark-bg-primary-color-lighter-focus": "#5c5c5c",
      "_dark-bg-primary-color-lighter-disabled": "#808080",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#262626",
      "_dark-bg-primary-color-darker-hover": "#333333",
      "_dark-bg-primary-color-darker-focus": "#1f1f1f",
      "_dark-bg-primary-color-darker-disabled": "#404040",
      "_dark-bg-secondary-color-lighter": "#636363",
      "_dark-bg-secondary-color-lighter-hover": "#757575",
      "_dark-bg-secondary-color-lighter-focus": "#4e4e4e",
      "_dark-bg-secondary-color-lighter-disabled": "#808080",
      "_dark-bg-secondary-color": "#161b22",
      "_dark-bg-secondary-color-hover": "#1f2329",
      "_dark-bg-secondary-color-focus": "#0f1418",
      "_dark-bg-secondary-color-disabled": "#2c3238",
      "_dark-bg-secondary-color-darker": "#4b3f3f",
      "_dark-bg-secondary-color-darker-hover": "#5b4f4f",
      "_dark-bg-secondary-color-darker-focus": "#3f2f2f",
      "_dark-bg-secondary-color-darker-disabled": "#6a5c5c",
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
      "_dark-info-color-hover": "#2a9edb",
      "_dark-info-color-focus": "#1786b7",
      "_dark-info-color-disabled": "#55b4e1",
      "_dark-active-color": "#1C91CD",
      "_dark-active-color-hover": "#2a9edb",
      "_dark-active-color-focus": "#1786b7",
      "_dark-active-color-disabled": "#55b4e1",
      "_dark-link-color": "#1C91CD",
      "_dark-link-color-hover": "#2a9edb",
      "_dark-link-color-focus": "#1786b7",
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