/// <mls fileReference="_102009_/l2/pizzaria/web/desktop/shared/base.ts" enhancement="_blank" />
import { LitElement } from 'lit';
import type { AuraNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';
import type { PizzariaMenuItem } from '/_102009_/l1/pizzaria/module.js';

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}

export class PizzariaDesktopBase extends LitElement {
  static properties = {
    items: { state: true },
    topItems: { state: true },
    status: { state: true },
    editorAuthor: { state: true },
  };

  declare items: PizzariaMenuItem[];
  declare topItems: PizzariaMenuItem[];
  declare status: string;
  editorAuthor = 'joao.pizzaria';

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    const pendingLoad = consumeExpectedNavigationLoad();
    const task = this.loadHome(undefined, {
      mode: pendingLoad ? 'blocking' : 'silent',
      signal: pendingLoad?.signal,
    });
    bindExpectedNavigationLoad(pendingLoad, task);
    void task.catch(() => undefined);
  }

  protected async loadHome(category?: string, options?: BffClientOptions): Promise<void> {
    this.status = category ? `Filtering by ${category}...` : 'Loading menu...';
    const response = await execBff<{
      menu: PizzariaMenuItem[];
      topItems: PizzariaMenuItem[];
    }>('pizzaria.home.load', {
      category,
      topLimit: 3,
      forceSeed: false,
    }, options);

    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? {
          code: 'UNEXPECTED_ERROR',
          message: 'Could not load pizzaria data.',
        }) satisfies AuraNormalizedError;
      }
      this.status = 'Could not load pizzaria data.';
      this.items = [];
      this.topItems = [];
      return;
    }

    this.items = response.data.menu ?? [];
    this.topItems = response.data.topItems ?? [];
    this.status = `${this.items.length} items available`;
  }

  protected reloadMenu(category?: string) {
    const label = category ? 'Filtrando cardapio...' : 'Atualizando cardapio...';
    void runBlockingUiAction(
      (signal) => this.loadHome(category, { mode: 'blocking', signal }),
      {
        busyLabel: label,
        errorTitle: 'Nao foi possivel atualizar o cardapio',
        retry: () => this.loadHome(category, { mode: 'blocking' }),
      },
    );
  }

  protected async saveItem(params: {
    menuItemId: string;
    author: string;
    name: string;
    category: string;
    priceInCents: number;
    highlightScore: number;
    stockStatus: PizzariaMenuItem['stockStatus'];
    description: string;
  }, signal?: AbortSignal): Promise<void> {
    this.status = `Saving ${params.menuItemId}...`;
    const response = await execBff<PizzariaMenuItem>('pizzaria.updateItem', params, {
      mode: 'blocking',
      signal,
    });

    if (!response.ok || !response.data) {
      throw (response.error ?? {
        code: 'UNEXPECTED_ERROR',
        message: 'Could not update item.',
      }) satisfies AuraNormalizedError;
    }

    this.status = `Updated ${response.data.name} by ${this.editorAuthor.trim() || 'system'}.`;
    await this.loadHome(undefined, { mode: 'blocking', signal });
  }

  protected handleEditorSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const menuItemId = String(formData.get('menuItemId') ?? '');
    const payload = {
      menuItemId,
      author: this.editorAuthor.trim(),
      name: String(formData.get('name') ?? ''),
      category: String(formData.get('category') ?? ''),
      priceInCents: Number(formData.get('priceInCents') ?? 0),
      highlightScore: Number(formData.get('highlightScore') ?? 0),
      stockStatus: String(formData.get('stockStatus') ?? 'in_stock') as PizzariaMenuItem['stockStatus'],
      description: String(formData.get('description') ?? ''),
    };
    void runBlockingUiAction(
      async (signal) => { await this.saveItem(payload, signal); },
      {
        busyLabel: `Salvando ${menuItemId}...`,
        errorTitle: 'Nao foi possivel salvar o item',
        retry: () => this.saveItem(payload),
      },
    );
  }
}
