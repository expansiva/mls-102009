/// <mls fileReference="_102009_/l2/petshop/web/desktop/page11/edit-products.ts" enhancement="_blank" />
import { html } from 'lit';
import { PetshopDesktopBase } from '/_102009_/l2/petshop/web/desktop/shared/base.js';

export class PetshopWebDesktopEditProductsPage extends PetshopDesktopBase {
  render() {
    return html`
      <section class="block">
        <header class="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Petshop</p>
            <h1 class="mt-2 text-3xl font-semibold text-aura-ink">Edit products</h1>
            <p class="mt-2 text-sm text-slate-600">Simulate product changes and send an explicit author to the audit trail.</p>
          </div>
        </header>
        <div class="mb-4 text-sm text-slate-600">${this.status ?? 'Preparing products...'}</div>

        <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-slate-700">Author</span>
              <input
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                .value=${this.editorAuthor}
                @input=${(event: Event) => {
                  this.editorAuthor = (event.currentTarget as HTMLInputElement).value;
                }}
                placeholder="maria.petshop"
              />
            </label>
            <p class="text-sm text-slate-500">This value is sent to the audit trail as the simulated user.</p>
          </div>
        </section>

        <section class="mt-6">
          <h2 class="mb-4 text-xl font-semibold text-aura-ink">Edit products</h2>
          <div class="grid gap-5 xl:grid-cols-2">
            ${(this.items ?? []).map((item) => html`
              <form class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" @submit=${this.handleEditorSubmit}>
                <input type="hidden" name="productId" .value=${item.productId} />
                <div class="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-lg font-semibold text-aura-ink">${item.name}</h3>
                    <p class="text-sm text-slate-500">${item.productId}</p>
                  </div>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${item.stockStatus}</span>
                </div>

                <div class="grid gap-3 md:grid-cols-2">
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">Name</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="name" .value=${item.name} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">Category</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="category" .value=${item.category} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">Price in cents</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="priceInCents" type="number" .value=${String(item.priceInCents)} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">Highlight score</span>
                    <input class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="highlightScore" type="number" .value=${String(item.highlightScore)} />
                  </label>
                  <label class="block">
                    <span class="mb-1 block text-sm text-slate-600">Stock status</span>
                    <select class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="stockStatus">
                      <option value="in_stock" ?selected=${item.stockStatus === 'in_stock'}>in_stock</option>
                      <option value="low_stock" ?selected=${item.stockStatus === 'low_stock'}>low_stock</option>
                      <option value="out_of_stock" ?selected=${item.stockStatus === 'out_of_stock'}>out_of_stock</option>
                    </select>
                  </label>
                </div>

                <label class="mt-3 block">
                  <span class="mb-1 block text-sm text-slate-600">Description</span>
                  <textarea class="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm" name="description">${item.description}</textarea>
                </label>

                <div class="mt-4 flex items-center justify-between gap-4">
                  <div class="text-sm text-slate-500">Last update: ${item.updatedAt}</div>
                  <button class="rounded-full bg-aura-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-aura-blue" type="submit">Save</button>
                </div>
              </form>
            `)}
          </div>
        </section>
      </section>
    `;
  }
}

customElements.define('petshop-web-desktop-edit-products-page', PetshopWebDesktopEditProductsPage);
