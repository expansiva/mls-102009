/// <mls fileReference="_102009_/l2/pizzaria/index.ts" enhancement="_blank" />
import { bootstrapCollabApp } from '/_102033_/l2/core/bootstrap.js';

void bootstrapCollabApp({
  projectId: '102009',
  appId: 'pizzaria',
  title: 'Collab Test · Pizzaria',
  shellMode: 'spa',
  navigation: [
    { label: 'Cardapio', href: '/pizzaria/cardapio' },
    { label: 'Monitor', href: '/monitor' },
  ],
  pages: [
    {
      path: '/pizzaria/index.html',
      title: 'Home',
      tagName: 'pizzaria-web-desktop-home-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/home.js'),
    },
    {
      path: '/pizzaria/cardapio',
      title: 'Home',
      tagName: 'pizzaria-web-desktop-home-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/home.js'),
    },
  ],
});
