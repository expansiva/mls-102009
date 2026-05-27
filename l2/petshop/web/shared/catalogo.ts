/// <mls fileReference="_102009_/l2/petshop/web/shared/catalogo.ts" enhancement="_blank" />
import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import type { AuraNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';

import type { PetshopCatalogProduct } from '/_102009_/l1/petshop/module.js';

/// **collab_i18n_start**
const message_en: Record<string, string> = {
  brand: 'Petshop',
  pageTitle: 'Catalog',
  pageSubtitle: 'Browse products and featured highlights.',
  preparingCatalog: 'Preparing catalog...',
  loadingCatalog: 'Loading catalog...',
  filteringBy: 'Filtering by',
  filteringCatalog: 'Filtering catalog...',
  updatingCatalog: 'Updating catalog...',
  couldNotLoad: 'Could not load petshop data.',
  couldNotUpdate: 'Could not update catalog',
  productsAvailable: 'products available',
  reload: 'Reload',
  catBanho: 'Banho',
  catAlimentacao: 'Alimentacao',
  catHigiene: 'Higiene',
  topProducts: 'Top products',
  sectionTitle: 'Catalog',
  score: 'score',
}

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en };
/// **collab_i18n_end**


export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}

export class PetshopCatalogoBase extends CollabLitElement {
  static properties = {
    items: { state: true },
    topItems: { state: true },
    status: { state: true },
  };

  declare items: PetshopCatalogProduct[];
  declare topItems: PetshopCatalogProduct[];
  declare status: string;

  protected msg: MessageType = messages['en'];

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

    const lang: string = this.getMessageKey(messages);
    this.msg = messages[lang] || messages['en'];
  }

  protected async loadHome(category?: string, options?: BffClientOptions): Promise<void> {
    this.status = category ? `${this.msg.filteringBy} ${category}...` : this.msg.loadingCatalog;
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
          message: this.msg.couldNotLoad,
        }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      this.items = [];
      this.topItems = [];
      return;
    }

    this.items = response.data.catalog ?? [];
    this.topItems = response.data.topProducts ?? [];
    this.status = `${this.items.length} ${this.msg.productsAvailable}`;
  }

  protected reloadCatalog(category?: string) {
    const label = category ? this.msg.filteringCatalog : this.msg.updatingCatalog;
    void runBlockingUiAction(
      (signal) => this.loadHome(category, { mode: 'blocking', signal }),
      {
        busyLabel: label,
        errorTitle: this.msg.couldNotUpdate,
        retry: () => this.loadHome(category, { mode: 'blocking' }),
      },
    );
  }
}
