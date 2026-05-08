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
      id: 'login',
      label: 'Login',
      href: '/pizzaria',
      description: 'Login page for employees and customers',
    },
    {
      id: 'dashboardFuncionario',
      label: 'Dashboard Funcionario',
      href: '/pizzaria/dashboardFuncionario',
      description: 'Dashboard for employees to manage orders and view statistics',
    },
  ],
  routes: [
    {
      path: '/pizzaria',
      aliases: ['/pizzaria/index.html', '/pizzaria/login'],
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/login.js',
      tag: 'pizzaria--web--desktop--login-102009',
      title: 'Login',
    },
    {
      path: '/pizzaria/dashboardFuncionario',
      entrypoint: '/_102009_/l2/pizzaria/web/desktop/dashboardFuncionario.js',
      tag: 'pizzaria--web--desktop--dashboard-funcionario-102009',
      title: 'Dashboard Funcionario',
    },
  ],
};
