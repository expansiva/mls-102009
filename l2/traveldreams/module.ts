/// <mls shortName="module" project="102009" folder="traveldreams" enhancement="_blank" />

export const moduleConfig = {
  theme: "traveldreams",
  initialPage: "home"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brasil (pt-BR), América Latina",
    "userPrompt": "Crie um sistema web chamado Travel Dreams, que será uma plataforma para uma agência de viagens. O layout deve ser baseado no exemplo apresentado no link abaixo https://chamados.expansiva.com.br/novosite/full.png\nRequisitos\n1- Na primeira página deve ter os links Destinations, Hotels, Flights, Bookings, Login e Sign UP\n2- Utilize o logo disponível em https://chamados.expansiva.com.br/novosite/logo.svg\n3- Na área HERO, adicione a imagem https://chamados.expansiva.com.br/novosite/turista.png\n4- A área HERO deve ficar como nesta imagem https://chamados.expansiva.com.br/novosite/hero.png\n5- A primeira página deve ter ainda mais 6 sessões\na. Propaganda (Book your next trip in 3 easy steps)\nb. Area de testemunhos (What People say about us)\nc. Logos dos parceiros\nd. Area de subscribe, onde devemos coletar o e-mail do usuário\nFooter (https://chamados.expansiva.com.br/novosite/footer.png)",
    "moduleGoal": "Desenvolver a página inicial do sistema Travel Dreams, com navegação one page, áreas de destaque para propaganda, testemunhos, parceiros, formulário de inscrição por e-mail e rodapé personalizado, seguindo o layout de referência.",
    "moduleName": "traveldreams",
    "requirements": [
      "Página inicial com navegação one page: Destinations, Hotels, Flights, Bookings, Login, Sign UP.",
      "Logo oficial da agência (https://chamados.expansiva.com.br/novosite/logo.svg) no header.",
      "Área HERO com imagem do turista (https://chamados.expansiva.com.br/novosite/turista.png) e layout igual ao exemplo (https://chamados.expansiva.com.br/novosite/hero.png).",
      "Seções adicionais: Propaganda (Book your next trip in 3 easy steps), Testemunhos (What People say about us, 3 depoimentos), Logos dos parceiros (4 logos), Área de subscribe (coleta de e-mail), Footer conforme imagem de referência.",
      "Links do menu rolam para seções na mesma página (one page).",
      "Mensagem de confirmação após envio do e-mail na subscribe.",
      "Textos inspiradores e objetivos para todas as seções.",
      "Site responsivo e acessível.",
      "Coleta apenas do e-mail do usuário na área de subscribe.",
      "Site apenas em português.",
      "Sem área administrativa neste momento.",
      "Foco principal em turistas, mas também visando confiabilidade para parceiros."
    ],
    "userRequestsEnhancements": [
      {
        "description": "Permitir cadastro de nome e outros dados além do e-mail na área de subscribe.",
        "priority": "could"
      },
      {
        "description": "Adicionar suporte a outros idiomas além do português.",
        "priority": "could"
      },
      {
        "description": "Incluir uma área administrativa para gerenciar conteúdos e cadastros.",
        "priority": "could"
      },
      {
        "description": "Integrar o formulário de subscribe com ferramenta de e-mail marketing.",
        "priority": "could"
      },
      {
        "description": "Adicionar funcionalidades de busca ou filtros nas seções de destinos, hotéis e voos.",
        "priority": "could"
      }
    ]
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageGoal": "Apresentar a plataforma Travel Dreams, com navegação one page, áreas de destaque, testemunhos, parceiros, formulário de inscrição e rodapé.",
      "pageRequirements": [
        "Header com logo e navegação one page.",
        "Área HERO com imagem e chamada principal.",
        "Seção de propaganda (Book your next trip in 3 easy steps).",
        "Seção de testemunhos (3 depoimentos).",
        "Seção de parceiros (4 logos).",
        "Área de subscribe (coleta de e-mail, mensagem de confirmação).",
        "Footer personalizado.",
        "Responsividade e acessibilidade."
      ]
    }
  ],
  "plugins": [
    {
      "pluginSequential": 0,
      "pluginName": "pluginScrollToSection",
      "pluginType": "ui",
      "pluginGoal": "Permitir navegação suave entre as seções da página ao clicar nos links do menu.",
      "pluginRequirements": [
        "Scroll suave para âncoras internas.",
        "Foco acessível após scroll.",
        "Compatibilidade mobile e desktop."
      ]
    },
    {
      "pluginSequential": 1,
      "pluginName": "pluginToast",
      "pluginType": "ui",
      "pluginGoal": "Exibir mensagem de confirmação após envio do e-mail na subscribe.",
      "pluginRequirements": [
        "Mensagem de agradecimento visível e acessível.",
        "Desaparecimento automático após alguns segundos.",
        "Compatível com leitores de tela."
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
        "<organism-hero></organism-hero>",
        "<organism-promo-steps></organism-promo-steps>",
        "<organism-testimonials></organism-testimonials>",
        "<organism-partners></organism-partners>",
        "<organism-subscribe></organism-subscribe>",
        "</main>",
        "<footer>",
        "<organism-footer></organism-footer>",
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
        "context": "Topo da página, navegação principal, visível em todas as resoluções.",
        "goal": "Exibir o logo da agência e links de navegação one page: Destinations, Hotels, Flights, Bookings, Login, Sign UP.",
        "userStories": [
          {
            "story": "Como visitante, quero ver o logo e acessar rapidamente qualquer seção da página clicando nos links do menu.",
            "derivedRequirements": [
              {
                "description": "Logo visível e clicável."
              },
              {
                "description": "Links de navegação com scroll suave para as seções correspondentes."
              },
              {
                "description": "Menu acessível por teclado e leitores de tela."
              }
            ]
          },
          {
            "story": "Como usuário mobile, quero acessar o menu facilmente em telas pequenas.",
            "derivedRequirements": [
              {
                "description": "Menu responsivo com botão de abertura em mobile."
              }
            ]
          }
        ],
        "constraints": [
          "Deve seguir o layout de referência.",
          "Links não devem recarregar a página."
        ]
      }
    },
    {
      "organismSequential": 1,
      "organismTag": "organism-hero",
      "planning": {
        "context": "Primeira área de destaque, logo abaixo do menu.",
        "goal": "Exibir imagem do turista, chamada principal e botão de ação, conforme layout de referência.",
        "userStories": [
          {
            "story": "Como visitante, quero ver uma imagem inspiradora e uma chamada clara para entender o propósito do site.",
            "derivedRequirements": [
              {
                "description": "Imagem do turista à direita, texto à esquerda."
              },
              {
                "description": "Chamada inspiradora e botão de ação."
              }
            ]
          }
        ],
        "constraints": [
          "Imagem e textos devem ser responsivos.",
          "Deve seguir o layout do exemplo fornecido."
        ]
      }
    },
    {
      "organismSequential": 2,
      "organismTag": "organism-promo-steps",
      "planning": {
        "context": "Seção de propaganda logo após o HERO.",
        "goal": "Exibir os 3 passos para reservar uma viagem, de forma clara e motivadora.",
        "userStories": [
          {
            "story": "Como visitante, quero entender rapidamente como reservar minha viagem em 3 passos simples.",
            "derivedRequirements": [
              {
                "description": "Exibir 3 etapas com ícones e textos curtos."
              }
            ]
          }
        ],
        "constraints": [
          "Textos devem ser objetivos e inspiradores.",
          "Deve ser acessível e responsivo."
        ]
      }
    },
    {
      "organismSequential": 3,
      "organismTag": "organism-testimonials",
      "planning": {
        "context": "Seção de depoimentos de clientes.",
        "goal": "Exibir 3 testemunhos de clientes satisfeitos, com nome e foto.",
        "userStories": [
          {
            "story": "Como visitante, quero ler depoimentos reais para confiar na agência.",
            "derivedRequirements": [
              {
                "description": "Exibir 3 depoimentos com nome, foto e texto curto."
              }
            ]
          }
        ],
        "constraints": [
          "Fotos devem ter texto alternativo.",
          "Textos devem ser breves e inspiradores."
        ]
      }
    },
    {
      "organismSequential": 4,
      "organismTag": "organism-partners",
      "planning": {
        "context": "Seção de parceiros estratégicos.",
        "goal": "Exibir logos de 4 parceiros para reforçar credibilidade.",
        "userStories": [
          {
            "story": "Como visitante, quero ver com quais empresas a agência trabalha para sentir confiança.",
            "derivedRequirements": [
              {
                "description": "Exibir 4 logos de parceiros com links opcionais."
              }
            ]
          }
        ],
        "constraints": [
          "Logos devem ser acessíveis e responsivos."
        ]
      }
    },
    {
      "organismSequential": 5,
      "organismTag": "organism-subscribe",
      "planning": {
        "context": "Área de inscrição para novidades.",
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
        "constraints": [
          "Coletar apenas o e-mail.",
          "Mensagem de confirmação deve ser acessível."
        ]
      }
    },
    {
      "organismSequential": 6,
      "organismTag": "organism-footer",
      "planning": {
        "context": "Rodapé da página, conforme layout de referência.",
        "goal": "Exibir informações institucionais, links úteis e redes sociais.",
        "userStories": [
          {
            "story": "Como visitante, quero acessar informações institucionais e redes sociais no rodapé.",
            "derivedRequirements": [
              {
                "description": "Exibir informações institucionais e links de redes sociais."
              }
            ]
          }
        ],
        "constraints": [
          "Deve seguir o layout do exemplo fornecido.",
          "Deve ser responsivo e acessível."
        ]
      }
    }
  ],
  "visualIdentity": {
    "logoDescription": "SVG logo with a stylized airplane and a globe, using blue and orange gradients, modern and friendly, matching the travel theme.",
    "fontFamily": "'Charlie Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    "iconStyle": "duotone",
    "illustrationStyle": "flat, colorful, with soft shadows and rounded shapes, evoking a sense of adventure and comfort",
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
    "description": "Design tokens personalizados para o módulo Travel Dreams, com foco em acessibilidade, contraste e identidade visual inspiradora.",
    "themeName": "traveldreams",
    "color": {
      "text-primary-color-lighter": "#4a4a4a",
      "text-primary-color-lighter-hover": "#5f5f5f",
      "text-primary-color-lighter-focus": "#3a3a3a",
      "text-primary-color-lighter-disabled": "#b0b8c4",
      "text-primary-color": "#1C91CD",
      "text-primary-color-hover": "#1786b7",
      "text-primary-color-focus": "#0F6FA9",
      "text-primary-color-disabled": "#55b4e1",
      "text-primary-color-darker": "#0F6FA9",
      "text-primary-color-darker-hover": "#1b7bb5",
      "text-primary-color-darker-focus": "#0c6495",
      "text-primary-color-darker-disabled": "#3a9ec1",
      "text-secondary-color-lighter": "#FAAD14",
      "text-secondary-color-lighter-hover": "#fbbd34",
      "text-secondary-color-lighter-focus": "#e09a0e",
      "text-secondary-color-lighter-disabled": "#fdd55e",
      "text-secondary-color": "#FAAD14",
      "text-secondary-color-hover": "#fbbd34",
      "text-secondary-color-focus": "#e09a0e",
      "text-secondary-color-disabled": "#fdd55e",
      "text-secondary-color-darker": "#b98a0c",
      "text-secondary-color-darker-hover": "#d6a20e",
      "text-secondary-color-darker-focus": "#a37c0c",
      "text-secondary-color-darker-disabled": "#e6c96a",
      "bg-primary-color-lighter": "#f5fbff",
      "bg-primary-color-lighter-hover": "#e6f4fa",
      "bg-primary-color-lighter-focus": "#d9eefa",
      "bg-primary-color-lighter-disabled": "#e0e0e0",
      "bg-primary-color": "#ffffff",
      "bg-primary-color-hover": "#f2f8fc",
      "bg-primary-color-focus": "#e6f4fa",
      "bg-primary-color-disabled": "#d9d9d9",
      "bg-primary-color-darker": "#e6f4fa",
      "bg-primary-color-darker-hover": "#d9eefa",
      "bg-primary-color-darker-focus": "#c0e0f0",
      "bg-primary-color-darker-disabled": "#b3d8e8",
      "bg-secondary-color-lighter": "#fffbe6",
      "bg-secondary-color-lighter-hover": "#fff7cc",
      "bg-secondary-color-lighter-focus": "#fff2b3",
      "bg-secondary-color-lighter-disabled": "#fdf5d6",
      "bg-secondary-color": "#FAAD14",
      "bg-secondary-color-hover": "#fbbd34",
      "bg-secondary-color-focus": "#e09a0e",
      "bg-secondary-color-disabled": "#fdd55e",
      "bg-secondary-color-darker": "#b98a0c",
      "bg-secondary-color-darker-hover": "#d6a20e",
      "bg-secondary-color-darker-focus": "#a37c0c",
      "bg-secondary-color-darker-disabled": "#e6c96a",
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
      "link-color-hover": "#1786b7",
      "link-color-focus": "#0F6FA9",
      "link-color-disabled": "#55b4e1",
      "_dark-text-primary-color-lighter": "#e6edf3",
      "_dark-text-primary-color-lighter-hover": "#d1d9e4",
      "_dark-text-primary-color-lighter-focus": "#c3cfd8",
      "_dark-text-primary-color-lighter-disabled": "#b0b8c4",
      "_dark-text-primary-color": "#ffffff",
      "_dark-text-primary-color-hover": "#f2f2f2",
      "_dark-text-primary-color-focus": "#e6e6e6",
      "_dark-text-primary-color-disabled": "#d9d9d9",
      "_dark-text-primary-color-darker": "#8d96a0",
      "_dark-text-primary-color-darker-hover": "#a1aab0",
      "_dark-text-primary-color-darker-focus": "#7a828a",
      "_dark-text-primary-color-darker-disabled": "#b1b7bd",
      "_dark-text-secondary-color-lighter": "#ffe08a",
      "_dark-text-secondary-color-lighter-hover": "#ffe8a3",
      "_dark-text-secondary-color-lighter-focus": "#ffd966",
      "_dark-text-secondary-color-lighter-disabled": "#fff2b3",
      "_dark-text-secondary-color": "#FAAD14",
      "_dark-text-secondary-color-hover": "#fbbd34",
      "_dark-text-secondary-color-focus": "#e09a0e",
      "_dark-text-secondary-color-disabled": "#fdd55e",
      "_dark-text-secondary-color-darker": "#b98a0c",
      "_dark-text-secondary-color-darker-hover": "#d6a20e",
      "_dark-text-secondary-color-darker-focus": "#a37c0c",
      "_dark-text-secondary-color-darker-disabled": "#e6c96a",
      "_dark-bg-primary-color-lighter": "#23272e",
      "_dark-bg-primary-color-lighter-hover": "#2c313a",
      "_dark-bg-primary-color-lighter-focus": "#1a1f24",
      "_dark-bg-primary-color-lighter-disabled": "#404040",
      "_dark-bg-primary-color": "#0d1117",
      "_dark-bg-primary-color-hover": "#1a1f24",
      "_dark-bg-primary-color-focus": "#0a0e13",
      "_dark-bg-primary-color-disabled": "#2b3036",
      "_dark-bg-primary-color-darker": "#161b22",
      "_dark-bg-primary-color-darker-hover": "#1f2329",
      "_dark-bg-primary-color-darker-focus": "#0f1418",
      "_dark-bg-primary-color-darker-disabled": "#2c3238",
      "_dark-bg-secondary-color-lighter": "#3a2e0c",
      "_dark-bg-secondary-color-lighter-hover": "#4b3f1a",
      "_dark-bg-secondary-color-lighter-focus": "#2e230a",
      "_dark-bg-secondary-color-lighter-disabled": "#6a5c5c",
      "_dark-bg-secondary-color": "#b98a0c",
      "_dark-bg-secondary-color-hover": "#d6a20e",
      "_dark-bg-secondary-color-focus": "#a37c0c",
      "_dark-bg-secondary-color-disabled": "#e6c96a",
      "_dark-bg-secondary-color-darker": "#7a5c0c",
      "_dark-bg-secondary-color-darker-hover": "#a37c0c",
      "_dark-bg-secondary-color-darker-focus": "#6a5c0c",
      "_dark-bg-secondary-color-darker-disabled": "#b98a0c",
      "_dark-grey-color-lighter": "#23272e",
      "_dark-grey-color-light": "#2c313a",
      "_dark-grey-color": "#404040",
      "_dark-grey-color-dark": "#575757",
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