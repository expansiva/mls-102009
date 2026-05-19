/// <mls fileReference="_102009_/l2/pizzaria/web/shared/homeFormatters.ts" enhancement="_blank" />
export function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100);
}
