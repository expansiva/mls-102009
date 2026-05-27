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
    { label: 'areaPublicaCheckout', href: '/pizzaria/areaPublicaCheckout' },
    { label: 'Monitor', href: '/monitor' },
  ],
  pages: [
    {
      path: '/pizzaria/index.html',
      title: 'Cardapio',
      tagName: 'pizzaria-web-desktop-cardapio-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/cardapio.js'),
    },
    {
      path: '/pizzaria/cardapio',
      title: 'Cardapio',
      tagName: 'pizzaria-web-desktop-cardapio-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/cardapio.js'),
    },
    {
      path: '/pizzaria/edit-items',
      title: 'Edit items',
      tagName: 'pizzaria-web-desktop-edit-items-page',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/editItems.js'),
    },
    {
      path: '/pizzaria/areaPublicaCheckout',
      title: 'areaPublicaCheckout',
      tagName: 'pizzaria--web--desktop--page11--area-publica-checkout-102009',
      loader: () => import('/_102009_/l2/pizzaria/web/desktop/page11/areaPublicaCheckout.js'),
    },
  ],
});
