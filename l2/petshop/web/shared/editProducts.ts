/// <mls fileReference="_102009_/l2/petshop/web/shared/editProducts.ts" enhancement="_blank" />
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
const message_pt = {
  brand: 'Petshop',
  pageTitle: 'Editar produtos',
  pageSubtitle: 'Simule alteracoes de produtos e envie um autor explicito para o registro de auditoria.',
  preparingProducts: 'Preparando produtos...',
  loadingProducts: 'Carregando produtos...',
  couldNotLoadProducts: 'Nao foi possivel carregar os produtos.',
  productsLoaded: 'produtos carregados',
  authorLabel: 'Autor',
  authorHint: 'Este valor e enviado para o registro de auditoria como usuario simulado.',
  sectionTitle: 'Editar produtos',
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
  couldNotUpdate: 'Nao foi possivel atualizar o produto.',
  couldNotSave: 'Nao foi possivel salvar o produto',
};

const message_en = {
  brand: 'Petshop',
  pageTitle: 'Edit products',
  pageSubtitle: 'Simulate product changes and send an explicit author to the audit trail.',
  preparingProducts: 'Preparing products...',
  loadingProducts: 'Loading products...',
  couldNotLoadProducts: 'Could not load products.',
  productsLoaded: 'products loaded',
  authorLabel: 'Author',
  authorHint: 'This value is sent to the audit trail as the simulated user.',
  sectionTitle: 'Edit products',
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
  couldNotUpdate: 'Could not update product.',
  couldNotSave: 'Could not save product',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = {
  en: message_en,
  pt: message_pt,
};
/// **collab_i18n_end**


export class PetshopEditProductsBase extends CollabLitElement {
  static properties = {
    items: { state: true },
    status: { state: true },
    editorAuthor: { state: true },
  };

  declare items: PetshopCatalogProduct[];
  declare status: string;
  editorAuthor = 'maria.petshop';

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
    this.status = this.msg.loadingProducts;
    const response = await execBff<PetshopCatalogProduct[]>('petshop.listCatalog', {
      category,
    }, options);

    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? {
          code: 'UNEXPECTED_ERROR',
          message: this.msg.couldNotLoadProducts,
        }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoadProducts;
      this.items = [];
      return;
    }

    this.items = response.data ?? [];
    this.status = `${this.items.length} ${this.msg.productsLoaded}`;
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
    this.status = `${this.msg.saving} ${params.productId}...`;
    const response = await execBff<PetshopCatalogProduct>('petshop.updateProduct', params, {
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
        busyLabel: `${this.msg.saving} ${productId}...`,
        errorTitle: this.msg.couldNotSave,
        retry: () => this.saveProduct(payload),
      },
    );
  }
}
