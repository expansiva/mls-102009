/// <mls fileReference="_102009_/l2/pizzaria/module.ts" enhancement="_blank" />
import type { AuraModuleFrontendDefinition } from '/_102029_/l2/contracts/bootstrap.js';

export const moduleGenome = {
  page11: {
    device: 'desktop',
    layout: 'standard',
  },
  page21: {
    device: 'mobile',
    layout: 'standard',
  },
} as const;

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
      id: 'edit-items',
      label: 'Edit items',
      href: '/pizzaria/edit-items',
      description: 'Simulate menu item changes with author',
    },
  ],
  routes: [
    {
      path: '/pizzaria',
      aliases: ['/pizzaria/index.html', '/pizzaria/cardapio'],
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/page11/home.js',
      tag: 'pizzaria-web-desktop-catalog-page',
      title: 'Cardapio',
    },
    {
      path: '/pizzaria/edit-items',
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/page11/edit-items.js',
      tag: 'pizzaria-web-desktop-edit-items-page',
      title: 'Edit items',
    },
  ],
};
