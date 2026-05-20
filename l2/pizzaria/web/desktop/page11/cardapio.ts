/// <mls fileReference="_102009_/l2/pizzaria/web/desktop/page11/cardapio.ts" enhancement="_blank" />
import { html } from 'lit';
import { PizzariaCardapioBase, formatPrice } from '/_102009_/l2/pizzaria/web/shared/cardapio.js';

export class PizzariaWebDesktopCardapioPage extends PizzariaCardapioBase {
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
        <div class="mb-4 text-sm text-slate-600">${this.status ?? this.msg.preparingMenu}</div>

        <div class="mb-6 grid gap-4 md:grid-cols-5">
          <button class="rounded-full bg-aura-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-aura-blue" @click="${() => this.reloadMenu()}">${this.msg.reload}</button>
          <button class="rounded-full bg-aura-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-aura-blue" @click="${() => this.reloadMenu('Pizzas')}">${this.msg.catPizzas}</button>
          <button class="rounded-full bg-aura-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-aura-blue" @click="${() => this.reloadMenu('Bebidas')}">${this.msg.catBebidas}</button>
          <button class="rounded-full bg-aura-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-aura-blue" @click="${() => this.reloadMenu('Sobremesas')}">${this.msg.catSobremesas}</button>
          <button class="rounded-full bg-aura-navy px-4 py-3 text-sm font-medium text-white transition hover:bg-aura-blue" @click="${() => this.reloadMenu('Bordas')}">${this.msg.catBordas}</button>
        </div>

        <div class="mb-10">
          <h2 class="mb-4 text-xl font-semibold text-aura-ink">${this.msg.topItems}</h2>
          <div class="grid gap-4 md:grid-cols-3">
            ${(this.topItems ?? []).map((item) => html`
              <article class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <strong class="block text-base font-semibold text-aura-ink">${item.name}</strong>
                <div class="mt-1 text-sm text-slate-500">${item.category} · ${this.msg.score} ${item.highlightScore}</div>
                <div class="mt-3 text-lg font-semibold text-aura-blue">${formatPrice(item.priceInCents)}</div>
              </article>
            `)}
          </div>
        </div>

        <div>
          <h2 class="mb-4 text-xl font-semibold text-aura-ink">${this.msg.sectionTitle}</h2>
          <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            ${(this.items ?? []).map((item) => html`
              <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <strong class="block text-base font-semibold text-aura-ink">${item.name}</strong>
                <div class="mt-1 text-sm text-slate-500">${item.category} · ${item.stockStatus}</div>
                <p class="mt-3 text-sm leading-6 text-slate-700">${item.description}</p>
                <div class="mt-4 text-lg font-semibold text-aura-blue">${formatPrice(item.priceInCents)}</div>
              </article>
            `)}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('pizzaria-web-desktop-cardapio-page', PizzariaWebDesktopCardapioPage);
