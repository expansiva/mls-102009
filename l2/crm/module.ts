/// <mls shortName="module" project="102009" enhancement="_blank" folder="crm" />

export const moduleConfig = {
  theme: "crm",
  initialPage:"home"
}

export const payload3 = {
  "finalModuleDetails": {
    "userLanguage": "pt",
    "executionRegions": "Brasil",
    "userPrompt": "CRM",
    "moduleGoal": "Criar modulo crm",
    "moduleName": "crm",
    "requirements": [],
    "userRequestsEnhancements": []
  },
  "pages": [
    {
      "pageSequential": 0,
      "pageName": "home",
      "pageGoal": "Apresentar página inicial do crm.",
      "pageRequirements": [
        "Exibir logo, menu de navegação e chamada para ação.",
      ]
    },
    
  ],
  "plugins": [ ],
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
    }
  ],
  "organism": [],
  "visualIdentity": {},
  "tokens": {}
}