/// <mls shortName="home" project="102009" folder="traveldreams" groupName="traveldreams" enhancement="_blank" />

// Do not change – automatically generated code.

export const defs: mls.l4.BaseDefs = {
  "meta": {
    "projectId": 102009,
    "folder": "traveldreams",
    "shortName": "home",
    "type": "page",
    "devFidelity": "scaffold",
    "group": "traveldreams",
    "tags": [
      "lit",
      "page"
    ]
  },
  "references": {
    "widgets": [
      {
        "tag": "organism-nav",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-hero",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-promo-steps",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-testimonials",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-partners",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-subscribe",
        "bindings": [],
        "purpose": "",
        "used": true
      },
      {
        "tag": "organism-footer",
        "bindings": [],
        "purpose": "",
        "used": true
      }
    ],
    "plugins": [],
    "statesRO": [],
    "statesRW": [],
    "statesWO": [],
    "imports": []
  },
  "planning": {
    "generalDescription": "",
    "goal": "Apresentar a plataforma Travel Dreams, com navegação one page, áreas de destaque, testemunhos, parceiros, formulário de inscrição e rodapé.",
    "userStories": [
      {
        "story": "Como visitante, quero acessar a página \"home\" para apresentar a plataforma travel dreams, com navegação one page, áreas de destaque, testemunhos, parceiros, formulário de inscrição e rodapé.",
        "derivedRequirements": [
          {
            "description": "Header com logo e navegação one page."
          },
          {
            "description": "Área HERO com imagem e chamada principal."
          },
          {
            "description": "Seção de propaganda (Book your next trip in 3 easy steps)."
          },
          {
            "description": "Seção de testemunhos (3 depoimentos)."
          },
          {
            "description": "Seção de parceiros (4 logos)."
          },
          {
            "description": "Área de subscribe (coleta de e-mail, mensagem de confirmação)."
          },
          {
            "description": "Footer personalizado."
          },
          {
            "description": "Responsividade e acessibilidade."
          }
        ]
      }
    ],
    "userRequestsEnhancements": [],
    "constraints": []
  }
}


/*

Task Id: 20250815180036.1001

Step Trace: provider: openai user:'Lucas' model:gpt-4.1 inputTokens:5209 outputTokens:6226 inputCost:2.00/1M outputCost:8.00/1M total:$0.0602 llmTime: 127819ms
finished at 2025-08-15T18:15:36.175Z
Organism used in page: [
  "organism-nav",
  "organism-hero",
  "organism-promo-steps",
  "organism-testimonials",
  "organism-partners",
  "organism-subscribe",
  "organism-footer"
] 

Images:
 [
  {
    "key": "logo",
    "searchText": "logo agência Travel Dreams",
    "type": "full",
    "height": 48,
    "width": 160,
    "toolTip": "Logo Travel Dreams"
  },
  {
    "key": "hero_turista",
    "searchText": "turista feliz explorando o mundo",
    "type": "full",
    "height": 380,
    "width": 380,
    "toolTip": "Turista feliz explorando o mundo"
  },
  {
    "key": "testimonial1",
    "searchText": "mulher jovem sorrindo depoimento viagem",
    "type": "thumb",
    "height": 72,
    "width": 72,
    "toolTip": "Foto de Ana Souza, cliente satisfeita"
  },
  {
    "key": "testimonial2",
    "searchText": "homem jovem sorrindo depoimento viagem",
    "type": "thumb",
    "height": 72,
    "width": 72,
    "toolTip": "Foto de Carlos Lima, cliente satisfeito"
  },
  {
    "key": "testimonial3",
    "searchText": "mulher adulta sorrindo depoimento viagem",
    "type": "thumb",
    "height": 72,
    "width": 72,
    "toolTip": "Foto de Juliana Alves, cliente satisfeita"
  },
  {
    "key": "partner1",
    "searchText": "logo empresa parceira viagens 1",
    "type": "regular",
    "height": 40,
    "width": 100,
    "toolTip": "Logo do parceiro 1"
  },
  {
    "key": "partner2",
    "searchText": "logo empresa parceira viagens 2",
    "type": "regular",
    "height": 40,
    "width": 100,
    "toolTip": "Logo do parceiro 2"
  },
  {
    "key": "partner3",
    "searchText": "logo empresa parceira viagens 3",
    "type": "regular",
    "height": 40,
    "width": 100,
    "toolTip": "Logo do parceiro 3"
  },
  {
    "key": "partner4",
    "searchText": "logo empresa parceira viagens 4",
    "type": "regular",
    "height": 40,
    "width": 100,
    "toolTip": "Logo do parceiro 4"
  }
]
 

*/
