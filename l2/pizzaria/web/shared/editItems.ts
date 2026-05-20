/// <mls fileReference="_102009_/l2/pizzaria/web/shared/editItems.ts" enhancement="_blank" />
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
  pageTitle: 'Editar itens',
  pageSubtitle: 'Simule alteracoes de itens e envie um autor explicito para o registro de auditoria.',
  preparingItems: 'Preparando itens...',
  loadingItems: 'Carregando itens...',
  couldNotLoadItems: 'Nao foi possivel carregar os itens.',
  itemsLoaded: 'itens carregados',
  authorLabel: 'Autor',
  authorHint: 'Este valor e enviado para o registro de auditoria como usuario simulado.',
  sectionTitle: 'Editar itens',
  fieldName: 'Nome',
  fieldCategory: 'Categoria',
  fieldPriceInCents: 'Preco em centavos',
  fieldHighlightScore: 'Score de destaque',
  fieldStockStatus: 'Status de estoque',
  fieldDescription: 'Descricao',
  lastUpdate: 'Ultima atualizacao:',
  save: 'Salvar',
  saving: 'Salvando',
  updated: 'Atualizado',
  by: 'por',
  couldNotUpdate: 'Nao foi possivel atualizar o item.',
  couldNotSave: 'Nao foi possivel salvar o item',
};

const message_en = {
  brand: 'Pizzaria',
  pageTitle: 'Edit items',
  pageSubtitle: 'Simulate item changes and send an explicit author to the audit trail.',
  preparingItems: 'Preparing items...',
  loadingItems: 'Loading items...',
  couldNotLoadItems: 'Could not load items.',
  itemsLoaded: 'items loaded',
  authorLabel: 'Author',
  authorHint: 'This value is sent to the audit trail as the simulated user.',
  sectionTitle: 'Edit items',
  fieldName: 'Name',
  fieldCategory: 'Category',
  fieldPriceInCents: 'Price in cents',
  fieldHighlightScore: 'Highlight score',
  fieldStockStatus: 'Stock status',
  fieldDescription: 'Description',
  lastUpdate: 'Last update:',
  save: 'Save',
  saving: 'Saving',
  updated: 'Updated',
  by: 'by',
  couldNotUpdate: 'Could not update item.',
  couldNotSave: 'Could not save item',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  en: message_en,
  pt: message_pt,
};
/// **collab_i18n_end**

export class PizzariaEditItemsBase extends CollabLitElement {
  static properties = {
    items: { state: true },
    status: { state: true },
    editorAuthor: { state: true },
  };

  declare items: PizzariaMenuItem[];
  declare status: string;
  editorAuthor = 'joao.pizzaria';

  protected msg: MessageType = messages['en'];

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    const pendingLoad = consumeExpectedNavigationLoad();
    const task = this.loadItems(undefined, {
      mode: pendingLoad ? 'blocking' : 'silent',
      signal: pendingLoad?.signal,
    });
    bindExpectedNavigationLoad(pendingLoad, task);
    void task.catch(() => undefined);

    const lang: string = this.getMessageKey(messages);
    this.msg = messages[lang] || messages['en'];
  }

  protected async loadItems(category?: string, options?: BffClientOptions): Promise<void> {
    this.status = this.msg.loadingItems;
    const response = await execBff<PizzariaMenuItem[]>('pizzaria.listMenu', {
      category,
    }, options);

    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? {
          code: 'UNEXPECTED_ERROR',
          message: this.msg.couldNotLoadItems,
        }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoadItems;
      this.items = [];
      return;
    }

    this.items = response.data ?? [];
    this.status = `${this.items.length} ${this.msg.itemsLoaded}`;
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
    this.status = `${this.msg.saving} ${params.menuItemId}...`;
    const response = await execBff<PizzariaMenuItem>('pizzaria.updateItem', params, {
      mode: 'blocking',
      signal,
    });

    if (!response.ok || !response.data) {
      throw (response.error ?? {
        code: 'UNEXPECTED_ERROR',
        message: this.msg.couldNotUpdate,
      }) satisfies AuraNormalizedError;
    }

    this.status = `${this.msg.updated} ${response.data.name} ${this.msg.by} ${this.editorAuthor.trim() || 'system'}.`;
    await this.loadItems(undefined, { mode: 'blocking', signal });
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
        busyLabel: `${this.msg.saving} ${menuItemId}...`,
        errorTitle: this.msg.couldNotSave,
        retry: () => this.saveItem(payload),
      },
    );
  }
}
