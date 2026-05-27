/// <mls fileReference="_102009_/l2/project.ts"  enhancement="_blank" />

export const projectConfig = {
  modules: [
    { name: "petshop", path: "petshop", auth: "admin" },
    { name: "pizzaria", path: "pizzaria", auth: "admin" }
  ],

  layouts: {
    1: { name: 'standard', skill: '/_102029_/l2/skills/layout/standard.js' },
    2: { name: 'compact', skill: '/_102029_/l2/skills/layout/compact.js' },
    3: { name: 'tabs', skill: '/_102029_/l2/skills/layout/tabs.js' },
    4: { name: 'sidebar', skill: '/_102029_/l2/skills/layout/sidebar.js' },
    5: { name: 'bento', skill: '/_102029_/l2/skills/layout/bento.js' },
  },

  designSystems: {
    1: { name: 'default', skill: '/_102029_/l2/skills/ds/default.js' },
  }
}