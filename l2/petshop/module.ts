/// <mls fileReference="_102009_/l2/petshop/module.ts" enhancement="_blank" />
import type { AuraModuleFrontendDefinition, IPaths, IGenomeConfig } from '/_102029_/l2/contracts/bootstrap.js';

export const moduleGenome: Record<string, IGenomeConfig> = {
  'web/desktop/page11': {
    designSystem: 'default',
    designSystemSkill: '/_102029_/l2/skills/designsystem/default.js',
    device: 'desktop',
    layout: 'standart',
    layoutSkill: '/_102029_/l2/skills/layout/stardart.js',
  }
}

export const skills: IPaths = {
  web: {
    sharedPath: 'web/shared',
    sharedSkill: '/_102029_/l2/skills/shared.js',
  }
}

export const moduleStates = {
  currentSection: 'ui.petshop.currentSection',
  selectedCategory: 'ui.petshop.selectedCategory',
  searchQuery: 'ui.petshop.searchQuery',
  editorAuthor: 'ui.petshop.editorAuthor',
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
  pageTitle: 'petshop',
  device: 'desktop',
  navigation: [
    {
      id: 'catalog',
      label: 'Catalog',
      href: '/petshop',
      description: 'Storefront catalog view',
    },
    {
      id: 'editProducts',
      label: 'Edit products',
      href: '/petshop/editProducts',
      description: 'Simulate product changes with author',
    },
  ],
  routes: [
    {
      path: '/petshop',
      aliases: ['/petshop/index.html', '/petshop/catalogo'],
      entrypoint: '/_102009_/l2/petshop/web/desktop/page11/catalogo.js',
      tag: 'petshop-web-desktop-catalogo-page',
      title: 'Catalog',
    },
    {
      path: '/petshop/editProducts',
      entrypoint: '/_102009_/l2/petshop/web/desktop/page11/editProducts.js',
      tag: 'petshop-web-desktop-edit-products-page',
      title: 'Edit products',
    },
  ],
};