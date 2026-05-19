/// <mls fileReference="_102009_/l2/pizzaria/module.defs.ts" enhancement="_blank" />
export const skill = {
  moduleId: 'pizzaria',
  purpose: 'Pizzaria client module with desktop and mobile page variations.',
  pages: ['home', 'edit-items'],
  genome: {
    page11: 'desktop-standard',
    page21: 'mobile-standard',
  },
  states: [
    'ui.pizzaria.currentSection',
    'ui.pizzaria.selectedCategory',
    'ui.pizzaria.searchQuery',
    'ui.pizzaria.editorAuthor',
  ],
} as const;
