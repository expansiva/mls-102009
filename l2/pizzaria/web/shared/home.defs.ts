/// <mls fileReference="_102009_/l2/pizzaria/web/shared/home.defs.ts" enhancement="_blank" />
export const skill = `
# Pizzaria Home Page

## Purpose

Render the desktop home page for the pizzaria module using a single aggregated
BFF request.

## Target Genome

- Device: desktop
- Layout: standard
- Folder: \`web/desktop/page11/\`

## Main Routine

- Use \`pizzaria.home.load\`
- The routine must return only the data the page needs:
  - \`seed\`
  - \`menu\`
  - \`topItems\`

## Page Behavior

- Load the page with one BFF call on connect
- Render a compact toolbar with category filters
- Show a status line with the current page state
- Render a "Top items" section
- Render a "Menu" section
- Reload the page when the user clicks reload
- Re-run the page load with a category filter when the user clicks a category

## Important Data

- Menu item fields:
  - \`name\`
  - \`category\`
  - \`priceInCents\`
  - \`stockStatus\`
  - \`description\`
- Top item fields:
  - \`name\`
  - \`category\`
  - \`highlightScore\`
  - \`priceInCents\`

## Shared Files

- \`web/shared/home.ts\` owns the page BFF call
- \`web/shared/homeFormatters.ts\` owns display formatting helpers such as
  \`formatPrice\`

## Layout Intent

- Dense but readable business UI
- Fast visual scan for category, stock state, and price
- Keep the page compatible with the master shell aside/header
- Use light DOM compatible styling
`;
