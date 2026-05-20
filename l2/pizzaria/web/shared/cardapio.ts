/// <mls fileReference="_102009_/l2/pizzaria/web/shared/cardapio.ts" enhancement="_blank" />
import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import type { AuraNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';
import type { PizzariaMenuItem } from '/_102009_/l1/pizzaria/module.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Pizzaria',
  pageTitle: 'Cardapio',
  pageSubtitle: 'Navegue pelos itens do menu e destaques.',
  preparingMenu: 'Preparando cardapio...',
  loadingMenu: 'Carregando cardapio...',
  filteringBy: 'Filtrando por',
  filteringMenu: 'Filtrando cardapio...',
  updatingMenu: 'Atualizando cardapio...',
  couldNotLoad: 'Nao foi possivel carregar os dados da pizzaria.',
  couldNotUpdate: 'Nao foi possivel atualizar o cardapio',
  itemsAvailable: 'itens disponiveis',
  reload: 'Recarregar',
  catPizzas: 'Pizzas',
  catBebidas: 'Bebidas',
  catSobremesas: 'Sobremesas',
  catBordas: 'Bordas',
  topItems: 'Itens em destaque',
  sectionTitle: 'Cardapio',
  score: 'score',
};

const message_en = {
  brand: 'Pizzaria',
  pageTitle: 'Menu',
  pageSubtitle: 'Browse menu items and featured highlights.',
  preparingMenu: 'Preparing menu...',
  loadingMenu: 'Loading menu...',
  filteringBy: 'Filtering by',
  filteringMenu: 'Filtering menu...',
  updatingMenu: 'Updating menu...',
  couldNotLoad: 'Could not load pizzaria data.',
  couldNotUpdate: 'Could not update menu',
  itemsAvailable: 'items available',
  reload: 'Reload',
  catPizzas: 'Pizzas',
  catBebidas: 'Bebidas',
  catSobremesas: 'Sobremesas',
  catBordas: 'Bordas',
  topItems: 'Top items',
  sectionTitle: 'Menu',
  score: 'score',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  en: message_en,
  pt: message_pt,
};
/// **collab_i18n_end**


export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}

export class PizzariaCardapioBase extends CollabLitElement {
  static properties = {
    items: { state: true },
    topItems: { state: true },
    status: { state: true },
  };

  declare items: PizzariaMenuItem[];
  declare topItems: PizzariaMenuItem[];
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
    this.status = category ? `${this.msg.filteringBy} ${category}...` : this.msg.loadingMenu;
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
          message: this.msg.couldNotLoad,
        }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      this.items = [];
      this.topItems = [];
      return;
    }

    this.items = response.data.menu ?? [];
    this.topItems = response.data.topItems ?? [];
    this.status = `${this.items.length} ${this.msg.itemsAvailable}`;
  }

  protected reloadMenu(category?: string) {
    const label = category ? this.msg.filteringMenu : this.msg.updatingMenu;
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
