/// <mls fileReference="_102030_/l2/petshop/index.ts" enhancement="_blank" />
import { bootstrapCollabApp } from '/_102033_/l2/core/bootstrap.js';

void bootstrapCollabApp({
  projectId: '102009',
  appId: 'pizzaria',
  title: 'Collab Test · Pizzaria',
  shellMode: 'spa',
  navigation: [
    { label: 'Login', href: '/pizzaria/login' },
    { label: 'Monitor', href: '/monitor' },
  ],
  pages: [
    {
      path: '/pizzaria/login',
      title: 'Home',
      tagName: 'pizzaria--web--desktop--login-102009',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/login.js'),
    },
    {
      path: '/pizzaria/dashboardFuncionario',
      title: 'Dashboard Funcionario',
      tagName: 'pizzaria--web--desktop--dashboard-funcionario-102009',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/dashboardFuncionario.js'),
    },
  ],
});
