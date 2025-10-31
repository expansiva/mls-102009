/// <mls shortName="collabRunTime" project="102009" enhancement="_blank" />

const originalDefine2 = customElements.define.bind(customElements);
customElements.define = (name, constructor, options) => {
  if (!customElements.get(name)) {
    console.log(`Registrando elemento: ${name}`);
    return originalDefine2(name, constructor, options);
  } else {
    console.warn(`Elemento já registrado: ${name}`);
  }
};
