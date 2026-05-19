/// <mls fileReference="_102009_/l1/pizzaria/persistence.ts" enhancement="_blank" />
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const tableDefinitions: TableDefinition[] = [
  {
    moduleId: 'pizzaria',
    repositoryName: 'pizzariaMenuItem',
    tableName: 'pizzaria_menu_item',
    purpose: 'cadastro',
    description: 'Pizzaria menu item catalog used by the storefront BFF and replicated as hot backup.',
    backupHot: true,
    storageProfile: 'postgresHotBackup',
    writeMode: 'writeBehind',
    columns: [
      { name: 'menuItemId', postgresType: 'TEXT' },
      { name: 'name', postgresType: 'TEXT' },
      { name: 'category', postgresType: 'TEXT' },
      { name: 'priceInCents', postgresType: 'INTEGER' },
      { name: 'currency', postgresType: 'TEXT' },
      { name: 'highlightScore', postgresType: 'INTEGER' },
      { name: 'stockStatus', postgresType: 'TEXT' },
      { name: 'description', postgresType: 'TEXT' },
      { name: 'updatedAt', postgresType: 'TIMESTAMPTZ' },
    ],
    primaryKey: ['menuItemId'],
    indexes: [
      { name: 'idx_pizzaria_menu_item_category', columns: ['category'] },
      { name: 'idx_pizzaria_menu_item_highlight', columns: [{ name: 'highlightScore', direction: 'desc' }] },
      { name: 'idx_pizzaria_menu_item_updated', columns: [{ name: 'updatedAt', direction: 'desc' }] },
    ],
    dynamo: {
      tableNameByEnv: {
        development: 'pizzaria_menu_item_documents',
        staging: 'pizzaria_menu_item_documents_test',
        production: 'pizzaria_menu_item_documents',
      },
      partitionKey: 'menuItemId',
    },
    version: 1,
  },
];
