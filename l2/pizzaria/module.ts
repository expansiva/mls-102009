/// <mls fileReference="_102009_/l2/pizzaria/module.ts" enhancement="_blank" />
import type { AuraModuleFrontendDefinition, IPaths, IGenomeConfig } from '/_102029_/l2/contracts/bootstrap.js';

export const moduleGenome: Record<string, IGenomeConfig> = {
  'web/desktop/page11': {
    designSystem: 'default',
    device: 'desktop',
    layout: 'standard',
  }
}

export const skills: IPaths = {
  web: {
    sharedPath: '/_102029_/l2/petshop/web/shared',  
    sharedSkill: '/_102029_/l2/skills/shared.js',
  }
}

export const moduleStates = {
  currentSection: 'ui.pizzaria.currentSection',
  selectedCategory: 'ui.pizzaria.selectedCategory',
  searchQuery: 'ui.pizzaria.searchQuery',
  editorAuthor: 'ui.pizzaria.editorAuthor',
} as const;

export const moduleShellPreferences = {
  layout: {
    asideMode: {
      desktop: 'inline',
      mobile: 'fullscreen',
    },
  },
} as const;

export const moduleFrontendDefinition: AuraModuleFrontendDefinition = {
  pageTitle: 'pizzaria',
  device: 'desktop',
  navigation: [
    {
      id: 'catalog',
      label: 'Cardapio',
      href: '/pizzaria',
      description: 'Storefront menu view',
    },
    {
      id: 'editItems',
      label: 'Edit items',
      href: '/pizzaria/editItems',
      description: 'Simulate menu item changes with author',
    }, 
    {
      id: 'areaPublicaCheckout',
      label: 'areaPublicaCheckout',
      href: '/pizzaria/areaPublicaCheckout',
      description: 'areaPublicaCheckout',
    },
  ],
  routes: [
    {
      path: '/pizzaria',
      aliases: ['/pizzaria/index.html', '/pizzaria/cardapio'],
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/page11/cardapio.js',
      tag: 'pizzaria-web-desktop-cardapio-page',
      title: 'Cardapio',
    },
    {
      path: '/pizzaria/editItems',
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/page11/editItems.js',
      tag: 'pizzaria-web-desktop-edit-items-page',
      title: 'Edit items',
    },
    {
      path: '/pizzaria/areaPublicaCheckout',
      aliases: [],
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/page11/areaPublicaCheckout.js',
      tag: 'pizzaria--web--desktop--page11--area-publica-checkout-102009',
      title: 'areaPublicaCheckout',
    },
  ],
};
