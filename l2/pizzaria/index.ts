/// <mls fileReference="_102009_/l2/pizzaria/index.ts" enhancement="_blank" />
import { bootstrapCollabApp } from '/_102033_/l2/core/bootstrap.js';

void bootstrapCollabApp({
  projectId: '102009',
  appId: 'pizzaria',
  title: 'Collab Test · Pizzaria',
  shellMode: 'spa',
  navigation: [
    { label: 'Cardapio', href: '/pizzaria/cardapio' },
    { label: 'Edit items', href: '/pizzaria/edit-items' },
    { label: 'Monitor', href: '/monitor' },
  ],
  pages: [
    {
      path: '/pizzaria/index.html',
      title: 'Cardapio',
      tagName: 'pizzaria-web-desktop-catalog-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/home.js'),
    },
    {
      path: '/pizzaria/cardapio',
      title: 'Cardapio',
      tagName: 'pizzaria-web-desktop-catalog-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/home.js'),
    },
    {
      path: '/pizzaria/edit-items',
      title: 'Edit items',
      tagName: 'pizzaria-web-desktop-edit-items-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/edit-items.js'),
    },
  ],
});
