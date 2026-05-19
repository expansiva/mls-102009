/// <mls fileReference="_102009_/l1/pizzaria/layer_2_controllers/router.test.ts" enhancement="_blank" />
import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequestContext, execBff } from '/_102034_/l1/server/layer_2_controllers/execBff.js';
import { resetPizzariaMenuForTests } from '/_102009_/l1/pizzaria/layer_3_usecases/catalogUsecases.js';

test.beforeEach(() => {
  resetPizzariaMenuForTests();
});

test('pizzaria router serves menu and top items through execBff', async () => {
  const ctx = createRequestContext();

  const seeded = await execBff({
    routine: 'pizzaria.seedMockData',
    params: {},
    meta: { source: 'test' },
  }, ctx);
  assert.equal(seeded.statusCode, 200);

  const listed = await execBff({
    routine: 'pizzaria.listMenu',
    params: { category: 'Pizzas' },
    meta: { source: 'test' },
  }, ctx);
  assert.equal(listed.statusCode, 200);
  assert.equal(listed.response.ok, true);
  if (!listed.response.ok || !listed.response.data) {
    throw new Error('Expected menu response');
  }
  const menu = listed.response.data as Array<{ category: string }>;
  assert.equal(menu.every((item) => item.category === 'Pizzas'), true);

  const top = await execBff({
    routine: 'pizzaria.getTopItems',
    params: { limit: 2 },
    meta: { source: 'test' },
  }, ctx);
  assert.equal(top.statusCode, 200);
  assert.equal(top.response.ok, true);
  if (!top.response.ok || !top.response.data) {
    throw new Error('Expected top items response');
  }
  const topItems = top.response.data as Array<{ highlightScore: number }>;
  assert.equal(topItems.length, 2);
  assert.equal(topItems[0].highlightScore >= topItems[1].highlightScore, true);
});

test('pizzaria home load aggregates seed, menu and top items in one BFF call', async () => {
  const ctx = createRequestContext();

  const home = await execBff({
    routine: 'pizzaria.home.load',
    params: {
      category: 'Pizzas',
      topLimit: 2,
    },
    meta: { source: 'test' },
  }, ctx);

  assert.equal(home.statusCode, 200);
  assert.equal(home.response.ok, true);
  if (!home.response.ok || !home.response.data) {
    throw new Error('Expected home response');
  }

  const data = home.response.data as {
    seed: { totalCount: number };
    menu: Array<{ category: string }>;
    topItems: Array<{ highlightScore: number }>;
  };

  assert.equal(data.seed.totalCount > 0, true);
  assert.equal(data.menu.every((item) => item.category === 'Pizzas'), true);
  assert.equal(data.topItems.length, 2);
});

test('pizzaria updateItem records audit log and status history when stock status changes', async () => {
  const ctx = createRequestContext();

  const seeded = await execBff({
    routine: 'pizzaria.seedMockData',
    params: {},
    meta: { source: 'test', userId: 'user-pizzaria-admin' },
  }, ctx);
  assert.equal(seeded.statusCode, 200);

  const menu = await execBff({
    routine: 'pizzaria.listMenu',
    params: {},
    meta: { source: 'test', userId: 'user-pizzaria-admin' },
  }, ctx);
  assert.equal(menu.statusCode, 200);
  assert.equal(menu.response.ok, true);
  if (!menu.response.ok || !menu.response.data) {
    throw new Error('Expected menu response');
  }

  const firstItem = (menu.response.data as Array<{ menuItemId: string; stockStatus: string; priceInCents: number }>)[0];
  assert.ok(firstItem);

  const nextStockStatus = firstItem.stockStatus === 'in_stock' ? 'low_stock' : 'in_stock';
  const updated = await execBff({
    routine: 'pizzaria.updateItem',
    params: {
      menuItemId: firstItem.menuItemId,
      author: 'joao.pizzaria',
      stockStatus: nextStockStatus,
      priceInCents: firstItem.priceInCents + 500,
      description: 'Atualizado para teste de auditoria',
    },
    meta: { source: 'test', userId: 'user-pizzaria-admin' },
  }, ctx);

  assert.equal(updated.statusCode, 200);
  assert.equal(updated.response.ok, true);

  const auditRows = await ctx.data.mdmAuditLog.findMany({
    where: {
      entityType: 'PizzariaMenuItem',
      entityId: firstItem.menuItemId,
      module: 'pizzaria',
    },
  });
  assert.equal(auditRows.length, 1);
  assert.equal(auditRows[0]?.action, 'update');
  assert.equal(auditRows[0]?.routine, 'pizzaria.updateItem');
  assert.equal(auditRows[0]?.actorId, 'joao.pizzaria');

  const statusRows = await ctx.data.mdmStatusHistory.findMany({
    where: {
      entityType: 'PizzariaMenuItem',
      entityId: firstItem.menuItemId,
      module: 'pizzaria',
    },
  });
  assert.equal(statusRows.length, 1);
  assert.equal(statusRows[0]?.fromStatus, firstItem.stockStatus);
  assert.equal(statusRows[0]?.toStatus, nextStockStatus);
  assert.equal(statusRows[0]?.reasonCode, 'PIZZARIA_STOCK_STATUS_UPDATED');
  assert.equal(statusRows[0]?.actorId, 'joao.pizzaria');
});
