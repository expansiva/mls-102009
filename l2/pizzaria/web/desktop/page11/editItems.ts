/// <mls fileReference="_102009_/l2/pizzaria/web/desktop/page11/editItems.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { PizzariaEditItemsBase } from '/_102009_/l2/pizzaria/web/shared/editItems.js';

export class PizzariaWebDesktopEditItemsPage extends PizzariaEditItemsBase {
  render() {
    return html`
      <section class="block">
        <header class="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">${this.msg.brand}</p>
            <h1 class="mt-2 text-3xl font-semibold text-aura-ink">${this.msg.pageTitle}</h1>
            <p class="mt-2 text-sm text-slate-600">${this.msg.pageSubtitle}</p>
          </div>
        </header>
        <div class="mb-4 text-sm text-slate-600">${this.status ?? this.msg.preparingItems}</div>

        <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700">${this.msg.authorLabel}</span>
              <input
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                .value=${this.editorAuthor}
                @input=${(event: Event) => {
                  this.editorAuthor = (event.currentTarget as HTMLInputElement).value;
                }}
                placeholder="joao.pizzaria"
              />
            </label>
            <p class="text-sm text-slate-500">${this.msg.authorHint}</p>
          </div>
        </section>

        <section class="mt-6">
          <h2 class="mb-4 text-xl font-semibold text-aura-ink">${this.msg.sectionTitle}</h2>
          <div class="grid gap-5 xl:grid-cols-2">
            ${(this.items ?? []).map((item) => html`
              <form class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" @submit=${this.handleEditorSubmit}>
                <input type="hidden" name="menuItemId" .value=${item.menuItemId} />
                <div class="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-semibold text-aura-ink">${item.name}</h3>
                    <p class="text-sm text-slate-500">${item.menuItemId}</p>
                  </div>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${item.stockStatus}</span>
                </div>

                <div class="grid gap-3 md:grid-cols-2">
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldName}</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="name" .value=${item.name} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldCategory}</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="category" .value=${item.category} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldPriceInCents}</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="priceInCents" type="number" .value=${String(item.priceInCents)} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldHighlightScore}</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="highlightScore" type="number" .value=${String(item.highlightScore)} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldStockStatus}</span>
                    <select class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="stockStatus">
                      <option value="in_stock" ?selected=${item.stockStatus === 'in_stock'}>in_stock</option>
                      <option value="low_stock" ?selected=${item.stockStatus === 'low_stock'}>low_stock</option>
                      <option value="out_of_stock" ?selected=${item.stockStatus === 'out_of_stock'}>out_of_stock</option>
                    </select>
                  </label>
                </div>

                <label class="mt-3 block">
                  <span class="mb-1 block text-sm text-slate-600">${this.msg.fieldDescription}</span>
                  <textarea class="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="description">${item.description}</textarea>
                </label>

                <div class="mt-4 flex items-center justify-between gap-4">
                  <div class="text-sm text-slate-500">${this.msg.lastUpdate} ${item.updatedAt}</div>
                  <button class="rounded-full bg-aura-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-aura-blue" type="submit">${this.msg.save}</button>
                </div>
              </form>
            `)}
          </div>
        </section>
      </section>
    `;
  }
}

customElements.define('pizzaria-web-desktop-edit-items-page', PizzariaWebDesktopEditItemsPage);
