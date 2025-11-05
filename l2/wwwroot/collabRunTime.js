// virtual:/_102009_collabRunTime
window.originalDefine = customElements.define.bind(customElements);
customElements.define = (name, constructor, options) => {
  if (!customElements.get(name)) {
    return window.originalDefine(name, constructor, options);
  }
};
