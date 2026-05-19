/// <mls fileReference="_102009_/l2/petshop/web/desktop/shared/base.ts" enhancement="_blank" />
import { LitElement } from 'lit';
import type { AuraNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';
import type { PetshopCatalogProduct } from '/_102009_/l1/petshop/module.js';

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}

export class PetshopDesktopBase extends LitElement {
  static properties = {
    items: { state: true },
    topItems: { state: true },
    status: { state: true },
    editorAuthor: { state: true },
  };

  declare items: PetshopCatalogProduct[];
  declare topItems: PetshopCatalogProduct[];
  declare status: string;
  editorAuthor = 'maria.petshop';

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
    this.status = category ? `Filtering by ${category}...` : 'Loading catalog...';
    const response = await execBff<{
      catalog: PetshopCatalogProduct[];
      topProducts: PetshopCatalogProduct[];
    }>('petshop.home.load', {
      category,
      topLimit: 3,
      forceSeed: false,
    }, options);

    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? {
          code: 'UNEXPECTED_ERROR',
          message: 'Could not load petshop data.',
        }) satisfies AuraNormalizedError;
      }
      this.status = 'Could not load petshop data.';
      this.items = [];
      this.topItems = [];
      return;
    }

    this.items = response.data.catalog ?? [];
    this.topItems = response.data.topProducts ?? [];
    this.status = `${this.items.length} products available`;
  }

  protected reloadCatalog(category?: string) {
    const label = category ? 'Filtrando catalogo...' : 'Atualizando catalogo...';
    void runBlockingUiAction(
      (signal) => this.loadHome(category, { mode: 'blocking', signal }),
      {
        busyLabel: label,
        errorTitle: 'Nao foi possivel atualizar o catalogo',
        retry: () => this.loadHome(category, { mode: 'blocking' }),
      },
    );
  }

  protected async saveProduct(params: {
    productId: string;
    author: string;
    name: string;
    category: string;
    priceInCents: number;
    highlightScore: number;
    stockStatus: PetshopCatalogProduct['stockStatus'];
    description: string;
  }, signal?: AbortSignal): Promise<void> {
    this.status = `Saving ${params.productId}...`;
    const response = await execBff<PetshopCatalogProduct>('petshop.updateProduct', params, {
      mode: 'blocking',
      signal,
    });

    if (!response.ok || !response.data) {
      throw (response.error ?? {
        code: 'UNEXPECTED_ERROR',
        message: 'Could not update product.',
      }) satisfies AuraNormalizedError;
    }

    this.status = `Updated ${response.data.name} by ${this.editorAuthor.trim() || 'system'}.`;
    await this.loadHome(undefined, { mode: 'blocking', signal });
  }

  protected handleEditorSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const productId = String(formData.get('productId') ?? '');
    const payload = {
      productId,
      author: this.editorAuthor.trim(),
      name: String(formData.get('name') ?? ''),
      category: String(formData.get('category') ?? ''),
      priceInCents: Number(formData.get('priceInCents') ?? 0),
      highlightScore: Number(formData.get('highlightScore') ?? 0),
      stockStatus: String(formData.get('stockStatus') ?? 'in_stock') as PetshopCatalogProduct['stockStatus'],
      description: String(formData.get('description') ?? ''),
    };
    void runBlockingUiAction(
      async (signal) => { await this.saveProduct(payload, signal); },
      {
        busyLabel: `Salvando ${productId}...`,
        errorTitle: 'Nao foi possivel salvar o produto',
        retry: () => this.saveProduct(payload),
      },
    );
  }
}
