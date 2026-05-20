/// <mls fileReference="_102009_/l2/petshop/index.ts" enhancement="_blank" />
import { bootstrapCollabApp } from '/_102033_/l2/core/bootstrap.js';

void bootstrapCollabApp({
  projectId: '102009',
  appId: 'petshop',
  title: 'Collab Test · Petshop',
  shellMode: 'spa',
  navigation: [
    { label: 'Catalogo', href: '/petshop/catalogo' },
    { label: 'Edit products', href: '/petshop/edit-products' },
    { label: 'Monitor', href: '/monitor' },
  ],
  pages: [
    {
      path: '/petshop/index.html',
      title: 'Catalog',
      tagName: 'petshop-web-desktop-catalogo-page',
      loader: () => import('/_102009_/l2/petshop/web/desktop/page11/catalogo.js'),
    },
    {
      path: '/petshop/catalogo',
      title: 'Catalog',
      tagName: 'petshop-web-desktop-catalogo-page',
      loader: () => import('/_102009_/l2/petshop/web/desktop/page11/catalogo.js'),
    },
    {
      path: '/petshop/edit-products',
      title: 'Edit products',
      tagName: 'petshop-web-desktop-edit-products-page',
      loader: () => import('/_102009_/l2/petshop/web/desktop/page11/editProducts.js'),
    },
  ],
});
