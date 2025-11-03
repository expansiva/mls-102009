/// <mls shortName="pageAdminProduct" project="102009" enhancement="_blank" folder="wwwroot/petshop" />
// virtual:lit
var t = globalThis;
var s = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var i = Symbol();
var e = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t6, s4, e6) {
    if (this._$cssResult$ = true, e6 !== i)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = s4;
  }
  get styleSheet() {
    let t6 = this.i;
    const i4 = this.t;
    if (s && void 0 === t6) {
      const s4 = void 0 !== i4 && 1 === i4.length;
      s4 && (t6 = e.get(i4)), void 0 === t6 && ((this.i = t6 = new CSSStyleSheet()).replaceSync(this.cssText), s4 && e.set(i4, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, i);
var h = (i4, e6) => {
  if (s)
    i4.adoptedStyleSheets = e6.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
  else
    for (const s4 of e6) {
      const e7 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && e7.setAttribute("nonce", n4), e7.textContent = s4.cssText, i4.appendChild(e7);
    }
};
var c = s ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let s4 = "";
  for (const i4 of t7.cssRules)
    s4 += i4.cssText;
  return r(s4);
})(t6) : t6;
var { is: l, defineProperty: a, getOwnPropertyDescriptor: u, getOwnPropertyNames: d, getOwnPropertySymbols: f, getPrototypeOf: p } = Object;
var v = globalThis;
var y = v.trustedTypes;
var m = y ? y.emptyScript : "";
var b = v.reactiveElementPolyfillSupport;
var g = (t6, s4) => t6;
var w = { toAttribute(t6, s4) {
  switch (s4) {
    case Boolean:
      t6 = t6 ? m : null;
      break;
    case Object:
    case Array:
      t6 = null == t6 ? t6 : JSON.stringify(t6);
  }
  return t6;
}, fromAttribute(t6, s4) {
  let i4 = t6;
  switch (s4) {
    case Boolean:
      i4 = null !== t6;
      break;
    case Number:
      i4 = null === t6 ? null : Number(t6);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t6);
      } catch (t7) {
        i4 = null;
      }
  }
  return i4;
} };
var _ = (t6, s4) => !l(t6, s4);
var S = { attribute: true, type: String, converter: w, reflect: false, useDefault: false, hasChanged: _ };
Symbol.metadata ??= Symbol("metadata"), v.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var $ = class extends HTMLElement {
  static addInitializer(t6) {
    this.o(), (this.l ??= []).push(t6);
  }
  static get observedAttributes() {
    return this.finalize(), this.u && [...this.u.keys()];
  }
  static createProperty(t6, s4 = S) {
    if (s4.state && (s4.attribute = false), this.o(), this.prototype.hasOwnProperty(t6) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t6, s4), !s4.noAccessor) {
      const i4 = Symbol(), e6 = this.getPropertyDescriptor(t6, i4, s4);
      void 0 !== e6 && a(this.prototype, t6, e6);
    }
  }
  static getPropertyDescriptor(t6, s4, i4) {
    const { get: e6, set: n4 } = u(this.prototype, t6) ?? { get() {
      return this[s4];
    }, set(t7) {
      this[s4] = t7;
    } };
    return { get: e6, set(s5) {
      const r4 = e6?.call(this);
      n4?.call(this, s5), this.requestUpdate(t6, r4, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) ?? S;
  }
  static o() {
    if (this.hasOwnProperty(g("elementProperties")))
      return;
    const t6 = p(this);
    t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(g("finalized")))
      return;
    if (this.finalized = true, this.o(), this.hasOwnProperty(g("properties"))) {
      const t7 = this.properties, s4 = [...d(t7), ...f(t7)];
      for (const i4 of s4)
        this.createProperty(i4, t7[i4]);
    }
    const t6 = this[Symbol.metadata];
    if (null !== t6) {
      const s4 = litPropertyMetadata.get(t6);
      if (void 0 !== s4)
        for (const [t7, i4] of s4)
          this.elementProperties.set(t7, i4);
    }
    this.u = /* @__PURE__ */ new Map();
    for (const [t7, s4] of this.elementProperties) {
      const i4 = this.p(t7, s4);
      void 0 !== i4 && this.u.set(i4, t7);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t6) {
    const s4 = [];
    if (Array.isArray(t6)) {
      const i4 = new Set(t6.flat(1 / 0).reverse());
      for (const t7 of i4)
        s4.unshift(c(t7));
    } else
      void 0 !== t6 && s4.push(c(t6));
    return s4;
  }
  static p(t6, s4) {
    const i4 = s4.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  constructor() {
    super(), this.v = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.m = null, this._();
  }
  _() {
    this.S = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this.$(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
  }
  addController(t6) {
    (this.P ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
  }
  removeController(t6) {
    this.P?.delete(t6);
  }
  $() {
    const t6 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i4 of s4.keys())
      this.hasOwnProperty(i4) && (t6.set(i4, this[i4]), delete this[i4]);
    t6.size > 0 && (this.v = t6);
  }
  createRenderRoot() {
    const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return h(t6, this.constructor.elementStyles), t6;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this.P?.forEach((t6) => t6.hostConnected?.());
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    this.P?.forEach((t6) => t6.hostDisconnected?.());
  }
  attributeChangedCallback(t6, s4, i4) {
    this._$AK(t6, i4);
  }
  C(t6, s4) {
    const i4 = this.constructor.elementProperties.get(t6), e6 = this.constructor.p(t6, i4);
    if (void 0 !== e6 && true === i4.reflect) {
      const n4 = (void 0 !== i4.converter?.toAttribute ? i4.converter : w).toAttribute(s4, i4.type);
      this.m = t6, null == n4 ? this.removeAttribute(e6) : this.setAttribute(e6, n4), this.m = null;
    }
  }
  _$AK(t6, s4) {
    const i4 = this.constructor, e6 = i4.u.get(t6);
    if (void 0 !== e6 && this.m !== e6) {
      const t7 = i4.getPropertyOptions(e6), n4 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : w;
      this.m = e6;
      const r4 = n4.fromAttribute(s4, t7.type);
      this[e6] = r4 ?? this.T?.get(e6) ?? r4, this.m = null;
    }
  }
  requestUpdate(t6, s4, i4) {
    if (void 0 !== t6) {
      const e6 = this.constructor, n4 = this[t6];
      if (i4 ??= e6.getPropertyOptions(t6), !((i4.hasChanged ?? _)(n4, s4) || i4.useDefault && i4.reflect && n4 === this.T?.get(t6) && !this.hasAttribute(e6.p(t6, i4))))
        return;
      this.M(t6, s4, i4);
    }
    false === this.isUpdatePending && (this.S = this.k());
  }
  M(t6, s4, { useDefault: i4, reflect: e6, wrapped: n4 }, r4) {
    i4 && !(this.T ??= /* @__PURE__ */ new Map()).has(t6) && (this.T.set(t6, r4 ?? s4 ?? this[t6]), true !== n4 || void 0 !== r4) || (this._$AL.has(t6) || (this.hasUpdated || i4 || (s4 = void 0), this._$AL.set(t6, s4)), true === e6 && this.m !== t6 && (this.A ??= /* @__PURE__ */ new Set()).add(t6));
  }
  async k() {
    this.isUpdatePending = true;
    try {
      await this.S;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this.v) {
        for (const [t8, s5] of this.v)
          this[t8] = s5;
        this.v = void 0;
      }
      const t7 = this.constructor.elementProperties;
      if (t7.size > 0)
        for (const [s5, i4] of t7) {
          const { wrapped: t8 } = i4, e6 = this[s5];
          true !== t8 || this._$AL.has(s5) || void 0 === e6 || this.M(s5, void 0, i4, e6);
        }
    }
    let t6 = false;
    const s4 = this._$AL;
    try {
      t6 = this.shouldUpdate(s4), t6 ? (this.willUpdate(s4), this.P?.forEach((t7) => t7.hostUpdate?.()), this.update(s4)) : this.U();
    } catch (s5) {
      throw t6 = false, this.U(), s5;
    }
    t6 && this._$AE(s4);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    this.P?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
  }
  U() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.S;
  }
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    this.A &&= this.A.forEach((t7) => this.C(t7, this[t7])), this.U();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[g("elementProperties")] = /* @__PURE__ */ new Map(), $[g("finalized")] = /* @__PURE__ */ new Map(), b?.({ ReactiveElement: $ }), (v.reactiveElementVersions ??= []).push("2.1.1");
var T = globalThis;
var x = T.trustedTypes;
var E = x ? x.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
var C = "$lit$";
var P = `lit$${Math.random().toFixed(9).slice(2)}$`;
var M = "?" + P;
var A = `<${M}>`;
var k = document;
var O = () => k.createComment("");
var U = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
var V = Array.isArray;
var R = (t6) => V(t6) || "function" == typeof t6?.[Symbol.iterator];
var N = "[ 	\n\f\r]";
var L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var z = /-->/g;
var j = />/g;
var D = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var H = /'/g;
var I = /"/g;
var B = /^(?:script|style|textarea|title)$/i;
var W = (t6) => (s4, ...i4) => ({ _$litType$: t6, strings: s4, values: i4 });
var Z = W(1);
var q = W(2);
var F = W(3);
var G = Symbol.for("lit-noChange");
var J = Symbol.for("lit-nothing");
var K = /* @__PURE__ */ new WeakMap();
var Y = k.createTreeWalker(k, 129);
function Q(t6, s4) {
  if (!V(t6) || !t6.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== E ? E.createHTML(s4) : s4;
}
var X = (t6, s4) => {
  const i4 = t6.length - 1, e6 = [];
  let n4, r4 = 2 === s4 ? "<svg>" : 3 === s4 ? "<math>" : "", o3 = L;
  for (let s5 = 0; s5 < i4; s5++) {
    const i5 = t6[s5];
    let h4, c4, l4 = -1, a4 = 0;
    for (; a4 < i5.length && (o3.lastIndex = a4, c4 = o3.exec(i5), null !== c4); )
      a4 = o3.lastIndex, o3 === L ? "!--" === c4[1] ? o3 = z : void 0 !== c4[1] ? o3 = j : void 0 !== c4[2] ? (B.test(c4[2]) && (n4 = RegExp("</" + c4[2], "g")), o3 = D) : void 0 !== c4[3] && (o3 = D) : o3 === D ? ">" === c4[0] ? (o3 = n4 ?? L, l4 = -1) : void 0 === c4[1] ? l4 = -2 : (l4 = o3.lastIndex - c4[2].length, h4 = c4[1], o3 = void 0 === c4[3] ? D : '"' === c4[3] ? I : H) : o3 === I || o3 === H ? o3 = D : o3 === z || o3 === j ? o3 = L : (o3 = D, n4 = void 0);
    const u4 = o3 === D && t6[s5 + 1].startsWith("/>") ? " " : "";
    r4 += o3 === L ? i5 + A : l4 >= 0 ? (e6.push(h4), i5.slice(0, l4) + C + i5.slice(l4) + P + u4) : i5 + P + (-2 === l4 ? s5 : u4);
  }
  return [Q(t6, r4 + (t6[i4] || "<?>") + (2 === s4 ? "</svg>" : 3 === s4 ? "</math>" : "")), e6];
};
var tt = class {
  constructor({ strings: t6, _$litType$: s4 }, i4) {
    let e6;
    this.parts = [];
    let n4 = 0, r4 = 0;
    const o3 = t6.length - 1, h4 = this.parts, [c4, l4] = X(t6, s4);
    if (this.el = tt.createElement(c4, i4), Y.currentNode = this.el.content, 2 === s4 || 3 === s4) {
      const t7 = this.el.content.firstChild;
      t7.replaceWith(...t7.childNodes);
    }
    for (; null !== (e6 = Y.nextNode()) && h4.length < o3; ) {
      if (1 === e6.nodeType) {
        if (e6.hasAttributes())
          for (const t7 of e6.getAttributeNames())
            if (t7.endsWith(C)) {
              const s5 = l4[r4++], i5 = e6.getAttribute(t7).split(P), o4 = /([.?@])?(.*)/.exec(s5);
              h4.push({ type: 1, index: n4, name: o4[2], strings: i5, ctor: "." === o4[1] ? rt : "?" === o4[1] ? ot : "@" === o4[1] ? ht : nt }), e6.removeAttribute(t7);
            } else
              t7.startsWith(P) && (h4.push({ type: 6, index: n4 }), e6.removeAttribute(t7));
        if (B.test(e6.tagName)) {
          const t7 = e6.textContent.split(P), s5 = t7.length - 1;
          if (s5 > 0) {
            e6.textContent = x ? x.emptyScript : "";
            for (let i5 = 0; i5 < s5; i5++)
              e6.append(t7[i5], O()), Y.nextNode(), h4.push({ type: 2, index: ++n4 });
            e6.append(t7[s5], O());
          }
        }
      } else if (8 === e6.nodeType)
        if (e6.data === M)
          h4.push({ type: 2, index: n4 });
        else {
          let t7 = -1;
          for (; -1 !== (t7 = e6.data.indexOf(P, t7 + 1)); )
            h4.push({ type: 7, index: n4 }), t7 += P.length - 1;
        }
      n4++;
    }
  }
  static createElement(t6, s4) {
    const i4 = k.createElement("template");
    return i4.innerHTML = t6, i4;
  }
};
function st(t6, s4, i4 = t6, e6) {
  if (s4 === G)
    return s4;
  let n4 = void 0 !== e6 ? i4.N?.[e6] : i4.O;
  const r4 = U(s4) ? void 0 : s4._$litDirective$;
  return n4?.constructor !== r4 && (n4?._$AO?.(false), void 0 === r4 ? n4 = void 0 : (n4 = new r4(t6), n4._$AT(t6, i4, e6)), void 0 !== e6 ? (i4.N ??= [])[e6] = n4 : i4.O = n4), void 0 !== n4 && (s4 = st(t6, n4._$AS(t6, s4.values), n4, e6)), s4;
}
var it = class {
  constructor(t6, s4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = s4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  R(t6) {
    const { el: { content: s4 }, parts: i4 } = this._$AD, e6 = (t6?.creationScope ?? k).importNode(s4, true);
    Y.currentNode = e6;
    let n4 = Y.nextNode(), r4 = 0, o3 = 0, h4 = i4[0];
    for (; void 0 !== h4; ) {
      if (r4 === h4.index) {
        let s5;
        2 === h4.type ? s5 = new et(n4, n4.nextSibling, this, t6) : 1 === h4.type ? s5 = new h4.ctor(n4, h4.name, h4.strings, this, t6) : 6 === h4.type && (s5 = new ct(n4, this, t6)), this._$AV.push(s5), h4 = i4[++o3];
      }
      r4 !== h4?.index && (n4 = Y.nextNode(), r4++);
    }
    return Y.currentNode = k, e6;
  }
  V(t6) {
    let s4 = 0;
    for (const i4 of this._$AV)
      void 0 !== i4 && (void 0 !== i4.strings ? (i4._$AI(t6, i4, s4), s4 += i4.strings.length - 2) : i4._$AI(t6[s4])), s4++;
  }
};
var et = class t2 {
  get _$AU() {
    return this._$AM?._$AU ?? this.D;
  }
  constructor(t6, s4, i4, e6) {
    this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = t6, this._$AB = s4, this._$AM = i4, this.options = e6, this.D = e6?.isConnected ?? true;
  }
  get parentNode() {
    let t6 = this._$AA.parentNode;
    const s4 = this._$AM;
    return void 0 !== s4 && 11 === t6?.nodeType && (t6 = s4.parentNode), t6;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t6, s4 = this) {
    t6 = st(this, t6, s4), U(t6) ? t6 === J || null == t6 || "" === t6 ? (this._$AH !== J && this._$AR(), this._$AH = J) : t6 !== this._$AH && t6 !== G && this.L(t6) : void 0 !== t6._$litType$ ? this.j(t6) : void 0 !== t6.nodeType ? this.I(t6) : R(t6) ? this.H(t6) : this.L(t6);
  }
  B(t6) {
    return this._$AA.parentNode.insertBefore(t6, this._$AB);
  }
  I(t6) {
    this._$AH !== t6 && (this._$AR(), this._$AH = this.B(t6));
  }
  L(t6) {
    this._$AH !== J && U(this._$AH) ? this._$AA.nextSibling.data = t6 : this.I(k.createTextNode(t6)), this._$AH = t6;
  }
  j(t6) {
    const { values: s4, _$litType$: i4 } = t6, e6 = "number" == typeof i4 ? this._$AC(t6) : (void 0 === i4.el && (i4.el = tt.createElement(Q(i4.h, i4.h[0]), this.options)), i4);
    if (this._$AH?._$AD === e6)
      this._$AH.V(s4);
    else {
      const t7 = new it(e6, this), i5 = t7.R(this.options);
      t7.V(s4), this.I(i5), this._$AH = t7;
    }
  }
  _$AC(t6) {
    let s4 = K.get(t6.strings);
    return void 0 === s4 && K.set(t6.strings, s4 = new tt(t6)), s4;
  }
  H(s4) {
    V(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let e6, n4 = 0;
    for (const r4 of s4)
      n4 === i4.length ? i4.push(e6 = new t2(this.B(O()), this.B(O()), this, this.options)) : e6 = i4[n4], e6._$AI(r4), n4++;
    n4 < i4.length && (this._$AR(e6 && e6._$AB.nextSibling, n4), i4.length = n4);
  }
  _$AR(t6 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t6 !== this._$AB; ) {
      const s5 = t6.nextSibling;
      t6.remove(), t6 = s5;
    }
  }
  setConnected(t6) {
    void 0 === this._$AM && (this.D = t6, this._$AP?.(t6));
  }
};
var nt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t6, s4, i4, e6, n4) {
    this.type = 1, this._$AH = J, this._$AN = void 0, this.element = t6, this.name = s4, this._$AM = e6, this.options = n4, i4.length > 2 || "" !== i4[0] || "" !== i4[1] ? (this._$AH = Array(i4.length - 1).fill(new String()), this.strings = i4) : this._$AH = J;
  }
  _$AI(t6, s4 = this, i4, e6) {
    const n4 = this.strings;
    let r4 = false;
    if (void 0 === n4)
      t6 = st(this, t6, s4, 0), r4 = !U(t6) || t6 !== this._$AH && t6 !== G, r4 && (this._$AH = t6);
    else {
      const e7 = t6;
      let o3, h4;
      for (t6 = n4[0], o3 = 0; o3 < n4.length - 1; o3++)
        h4 = st(this, e7[i4 + o3], s4, o3), h4 === G && (h4 = this._$AH[o3]), r4 ||= !U(h4) || h4 !== this._$AH[o3], h4 === J ? t6 = J : t6 !== J && (t6 += (h4 ?? "") + n4[o3 + 1]), this._$AH[o3] = h4;
    }
    r4 && !e6 && this.W(t6);
  }
  W(t6) {
    t6 === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
  }
};
var rt = class extends nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  W(t6) {
    this.element[this.name] = t6 === J ? void 0 : t6;
  }
};
var ot = class extends nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  W(t6) {
    this.element.toggleAttribute(this.name, !!t6 && t6 !== J);
  }
};
var ht = class extends nt {
  constructor(t6, s4, i4, e6, n4) {
    super(t6, s4, i4, e6, n4), this.type = 5;
  }
  _$AI(t6, s4 = this) {
    if ((t6 = st(this, t6, s4, 0) ?? J) === G)
      return;
    const i4 = this._$AH, e6 = t6 === J && i4 !== J || t6.capture !== i4.capture || t6.once !== i4.once || t6.passive !== i4.passive, n4 = t6 !== J && (i4 === J || e6);
    e6 && this.element.removeEventListener(this.name, this, i4), n4 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
  }
  handleEvent(t6) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
  }
};
var ct = class {
  constructor(t6, s4, i4) {
    this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = s4, this.options = i4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t6) {
    st(this, t6);
  }
};
var lt = { q: C, J: P, Z: M, F: 1, G: X, K: it, X: R, Y: st, tt: et, st: nt, it: ot, et: ht, ht: rt, ot: ct };
var at = T.litHtmlPolyfillSupport;
at?.(tt, et), (T.litHtmlVersions ??= []).push("3.3.1");
var ut = (t6, s4, i4) => {
  const e6 = i4?.renderBefore ?? s4;
  let n4 = e6._$litPart$;
  if (void 0 === n4) {
    const t7 = i4?.renderBefore ?? null;
    e6._$litPart$ = n4 = new et(s4.insertBefore(O(), t7), t7, void 0, i4 ?? {});
  }
  return n4._$AI(t6), n4;
};
var dt = globalThis;
var ft = class extends $ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.rt = void 0;
  }
  createRenderRoot() {
    const t6 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t6.firstChild, t6;
  }
  update(t6) {
    const s4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this.rt = ut(s4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.rt?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.rt?.setConnected(false);
  }
  render() {
    return G;
  }
};
ft._$litElement$ = true, ft["finalized"] = true, dt.litElementHydrateSupport?.({ LitElement: ft });
var pt = dt.litElementPolyfillSupport;
pt?.({ LitElement: ft });
(dt.litElementVersions ??= []).push("4.2.1");
var { tt: mt } = lt;
var bt = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
var wt = (t6, s4) => void 0 === s4 ? void 0 !== t6?._$litType$ : t6?._$litType$ === s4;
var _t = (t6) => null != t6?._$litType$?.h;
var Tt = (t6) => void 0 === t6.strings;
var xt = () => document.createComment("");
var Et = (t6, s4, i4) => {
  const e6 = t6._$AA.parentNode, n4 = void 0 === s4 ? t6._$AB : s4._$AA;
  if (void 0 === i4) {
    const s5 = e6.insertBefore(xt(), n4), r4 = e6.insertBefore(xt(), n4);
    i4 = new mt(s5, r4, t6, t6.options);
  } else {
    const s5 = i4._$AB.nextSibling, r4 = i4._$AM, o3 = r4 !== t6;
    if (o3) {
      let s6;
      i4._$AQ?.(t6), i4._$AM = t6, void 0 !== i4._$AP && (s6 = t6._$AU) !== r4._$AU && i4._$AP(s6);
    }
    if (s5 !== n4 || o3) {
      let t7 = i4._$AA;
      for (; t7 !== s5; ) {
        const s6 = t7.nextSibling;
        e6.insertBefore(t7, n4), t7 = s6;
      }
    }
  }
  return i4;
};
var Ct = (t6, s4, i4 = t6) => (t6._$AI(s4, i4), t6);
var Pt = {};
var Mt = (t6, s4 = Pt) => t6._$AH = s4;
var At = (t6) => t6._$AH;
var kt = (t6) => {
  t6._$AR(), t6._$AA.remove();
};
var Ot = (t6) => {
  t6._$AR();
};
var Vt = (t6) => (...s4) => ({ _$litDirective$: t6, values: s4 });
var Rt = class {
  constructor(t6) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t6, s4, i4) {
    this.nt = t6, this._$AM = s4, this.ct = i4;
  }
  _$AS(t6, s4) {
    return this.update(t6, s4);
  }
  update(t6, s4) {
    return this.render(...s4);
  }
};
var Nt = (t6, s4) => {
  const i4 = t6._$AN;
  if (void 0 === i4)
    return false;
  for (const t7 of i4)
    t7._$AO?.(s4, false), Nt(t7, s4);
  return true;
};
var Lt = (t6) => {
  let s4, i4;
  do {
    if (void 0 === (s4 = t6._$AM))
      break;
    i4 = s4._$AN, i4.delete(t6), t6 = s4;
  } while (0 === i4?.size);
};
var zt = (t6) => {
  for (let s4; s4 = t6._$AM; t6 = s4) {
    let i4 = s4._$AN;
    if (void 0 === i4)
      s4._$AN = i4 = /* @__PURE__ */ new Set();
    else if (i4.has(t6))
      break;
    i4.add(t6), Ht(s4);
  }
};
function jt(t6) {
  void 0 !== this._$AN ? (Lt(this), this._$AM = t6, zt(this)) : this._$AM = t6;
}
function Dt(t6, s4 = false, i4 = 0) {
  const e6 = this._$AH, n4 = this._$AN;
  if (void 0 !== n4 && 0 !== n4.size)
    if (s4)
      if (Array.isArray(e6))
        for (let t7 = i4; t7 < e6.length; t7++)
          Nt(e6[t7], false), Lt(e6[t7]);
      else
        null != e6 && (Nt(e6, false), Lt(e6));
    else
      Nt(this, t6);
}
var Ht = (t6) => {
  2 == t6.type && (t6._$AP ??= Dt, t6._$AQ ??= jt);
};
var It = class extends Rt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t6, s4, i4) {
    super._$AT(t6, s4, i4), zt(this), this.isConnected = t6._$AU;
  }
  _$AO(t6, s4 = true) {
    t6 !== this.isConnected && (this.isConnected = t6, t6 ? this.reconnected?.() : this.disconnected?.()), s4 && (Nt(this, t6), Lt(this));
  }
  setValue(t6) {
    if (Tt(this.nt))
      this.nt._$AI(t6, this);
    else {
      const s4 = [...this.nt._$AH];
      s4[this.ct] = t6, this.nt._$AI(s4, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
var Bt = class {
  constructor(t6) {
    this.lt = t6;
  }
  disconnect() {
    this.lt = void 0;
  }
  reconnect(t6) {
    this.lt = t6;
  }
  deref() {
    return this.lt;
  }
};
var Wt = class {
  constructor() {
    this.ut = void 0, this.dt = void 0;
  }
  get() {
    return this.ut;
  }
  pause() {
    this.ut ??= new Promise((t6) => this.dt = t6);
  }
  resume() {
    this.dt?.(), this.ut = this.dt = void 0;
  }
};
var Zt = class extends It {
  constructor() {
    super(...arguments), this.ft = new Bt(this), this.vt = new Wt();
  }
  render(t6, s4) {
    return G;
  }
  update(t6, [s4, i4]) {
    if (this.isConnected || this.disconnected(), s4 === this.yt)
      return G;
    this.yt = s4;
    let e6 = 0;
    const { ft: n4, vt: r4 } = this;
    return (async (t7, s5) => {
      for await (const i5 of t7)
        if (false === await s5(i5))
          return;
    })(s4, async (t7) => {
      for (; r4.get(); )
        await r4.get();
      const o3 = n4.deref();
      if (void 0 !== o3) {
        if (o3.yt !== s4)
          return false;
        void 0 !== i4 && (t7 = i4(t7, e6)), o3.commitValue(t7, e6), e6++;
      }
      return true;
    }), G;
  }
  commitValue(t6, s4) {
    this.setValue(t6);
  }
  disconnected() {
    this.ft.disconnect(), this.vt.pause();
  }
  reconnected() {
    this.ft.reconnect(this), this.vt.resume();
  }
};
var qt = Vt(Zt);
var Ft = Vt(
  class extends Zt {
    constructor(t6) {
      if (super(t6), 2 !== t6.type)
        throw Error("asyncAppend can only be used in child expressions");
    }
    update(t6, s4) {
      return this.rt = t6, super.update(t6, s4);
    }
    commitValue(t6, s4) {
      0 === s4 && Ot(this.rt);
      const i4 = Et(this.rt);
      Ct(i4, t6);
    }
  }
);
var Gt = (t6) => _t(t6) ? t6._$litType$.h : t6.strings;
var Jt = Vt(class extends Rt {
  constructor(t6) {
    super(t6), this.bt = /* @__PURE__ */ new WeakMap();
  }
  render(t6) {
    return [t6];
  }
  update(t6, [s4]) {
    const i4 = wt(this.gt) ? Gt(this.gt) : null, e6 = wt(s4) ? Gt(s4) : null;
    if (null !== i4 && (null === e6 || i4 !== e6)) {
      const s5 = At(t6).pop();
      let e7 = this.bt.get(i4);
      if (void 0 === e7) {
        const t7 = document.createDocumentFragment();
        e7 = ut(J, t7), e7.setConnected(false), this.bt.set(i4, e7);
      }
      Mt(e7, [s5]), Et(e7, void 0, s5);
    }
    if (null !== e6) {
      if (null === i4 || i4 !== e6) {
        const s5 = this.bt.get(e6);
        if (void 0 !== s5) {
          const i5 = At(s5).pop();
          Ot(t6), Et(t6, void 0, i5), Mt(t6, [i5]);
        }
      }
      this.gt = s4;
    } else
      this.gt = void 0;
    return this.render(s4);
  }
});
var Yt = Vt(
  class extends Rt {
    constructor(t6) {
      if (super(t6), 1 !== t6.type || "class" !== t6.name || t6.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t6) {
      return " " + Object.keys(t6).filter((s4) => t6[s4]).join(" ") + " ";
    }
    update(t6, [s4]) {
      if (void 0 === this.wt) {
        this.wt = /* @__PURE__ */ new Set(), void 0 !== t6.strings && (this._t = new Set(t6.strings.join(" ").split(/\s/).filter((t7) => "" !== t7)));
        for (const t7 in s4)
          s4[t7] && !this._t?.has(t7) && this.wt.add(t7);
        return this.render(s4);
      }
      const i4 = t6.element.classList;
      for (const t7 of this.wt)
        t7 in s4 || (i4.remove(t7), this.wt.delete(t7));
      for (const t7 in s4) {
        const e6 = !!s4[t7];
        e6 === this.wt.has(t7) || this._t?.has(t7) || (e6 ? (i4.add(t7), this.wt.add(t7)) : (i4.remove(t7), this.wt.delete(t7)));
      }
      return G;
    }
  }
);
var Qt = {};
var Xt = Vt(class extends Rt {
  constructor() {
    super(...arguments), this.St = Qt;
  }
  render(t6, s4) {
    return s4();
  }
  update(t6, [s4, i4]) {
    if (Array.isArray(s4)) {
      if (Array.isArray(this.St) && this.St.length === s4.length && s4.every((t7, s5) => t7 === this.St[s5]))
        return G;
    } else if (this.St === s4)
      return G;
    return this.St = Array.isArray(s4) ? Array.from(s4) : s4, this.render(s4, i4);
  }
});
var is = Vt(class extends Rt {
  constructor() {
    super(...arguments), this.key = J;
  }
  render(t6, s4) {
    return this.key = t6, s4;
  }
  update(t6, [s4, i4]) {
    return s4 !== this.key && (Mt(t6), this.key = s4), i4;
  }
});
var es = Vt(
  class extends Rt {
    constructor(t6) {
      if (super(t6), 3 !== t6.type && 1 !== t6.type && 4 !== t6.type)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!Tt(t6))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(t6) {
      return t6;
    }
    update(t6, [s4]) {
      if (s4 === G || s4 === J)
        return s4;
      const i4 = t6.element, e6 = t6.name;
      if (3 === t6.type) {
        if (s4 === i4[e6])
          return G;
      } else if (4 === t6.type) {
        if (!!s4 === i4.hasAttribute(e6))
          return G;
      } else if (1 === t6.type && i4.getAttribute(e6) === s4 + "")
        return G;
      return Mt(t6), s4;
    }
  }
);
var cs = /* @__PURE__ */ new WeakMap();
var ls = Vt(class extends It {
  render(t6) {
    return J;
  }
  update(t6, [s4]) {
    const i4 = s4 !== this.lt;
    return i4 && void 0 !== this.lt && this.$t(void 0), (i4 || this.Tt !== this.xt) && (this.lt = s4, this.Et = t6.options?.host, this.$t(this.xt = t6.element)), J;
  }
  $t(t6) {
    if (this.isConnected || (t6 = void 0), "function" == typeof this.lt) {
      const s4 = this.Et ?? globalThis;
      let i4 = cs.get(s4);
      void 0 === i4 && (i4 = /* @__PURE__ */ new WeakMap(), cs.set(s4, i4)), void 0 !== i4.get(this.lt) && this.lt.call(this.Et, void 0), i4.set(this.lt, t6), void 0 !== t6 && this.lt.call(this.Et, t6);
    } else
      this.lt.value = t6;
  }
  get Tt() {
    return "function" == typeof this.lt ? cs.get(this.Et ?? globalThis)?.get(this.lt) : this.lt?.value;
  }
  disconnected() {
    this.Tt === this.xt && this.$t(void 0);
  }
  reconnected() {
    this.$t(this.xt);
  }
});
var as = (t6, s4, i4) => {
  const e6 = /* @__PURE__ */ new Map();
  for (let n4 = s4; n4 <= i4; n4++)
    e6.set(t6[n4], n4);
  return e6;
};
var us = Vt(class extends Rt {
  constructor(t6) {
    if (super(t6), 2 !== t6.type)
      throw Error("repeat() can only be used in text expressions");
  }
  Ct(t6, s4, i4) {
    let e6;
    void 0 === i4 ? i4 = s4 : void 0 !== s4 && (e6 = s4);
    const n4 = [], r4 = [];
    let o3 = 0;
    for (const s5 of t6)
      n4[o3] = e6 ? e6(s5, o3) : o3, r4[o3] = i4(s5, o3), o3++;
    return { values: r4, keys: n4 };
  }
  render(t6, s4, i4) {
    return this.Ct(t6, s4, i4).values;
  }
  update(t6, [s4, i4, e6]) {
    const n4 = At(t6), { values: r4, keys: o3 } = this.Ct(s4, i4, e6);
    if (!Array.isArray(n4))
      return this.Pt = o3, r4;
    const h4 = this.Pt ??= [], c4 = [];
    let l4, a4, u4 = 0, d4 = n4.length - 1, f4 = 0, p4 = r4.length - 1;
    for (; u4 <= d4 && f4 <= p4; )
      if (null === n4[u4])
        u4++;
      else if (null === n4[d4])
        d4--;
      else if (h4[u4] === o3[f4])
        c4[f4] = Ct(n4[u4], r4[f4]), u4++, f4++;
      else if (h4[d4] === o3[p4])
        c4[p4] = Ct(n4[d4], r4[p4]), d4--, p4--;
      else if (h4[u4] === o3[p4])
        c4[p4] = Ct(n4[u4], r4[p4]), Et(t6, c4[p4 + 1], n4[u4]), u4++, p4--;
      else if (h4[d4] === o3[f4])
        c4[f4] = Ct(n4[d4], r4[f4]), Et(t6, n4[u4], n4[d4]), d4--, f4++;
      else if (void 0 === l4 && (l4 = as(o3, f4, p4), a4 = as(h4, u4, d4)), l4.has(h4[u4]))
        if (l4.has(h4[d4])) {
          const s5 = a4.get(o3[f4]), i5 = void 0 !== s5 ? n4[s5] : null;
          if (null === i5) {
            const s6 = Et(t6, n4[u4]);
            Ct(s6, r4[f4]), c4[f4] = s6;
          } else
            c4[f4] = Ct(i5, r4[f4]), Et(t6, n4[u4], i5), n4[s5] = null;
          f4++;
        } else
          kt(n4[d4]), d4--;
      else
        kt(n4[u4]), u4++;
    for (; f4 <= p4; ) {
      const s5 = Et(t6, c4[p4 + 1]);
      Ct(s5, r4[f4]), c4[f4++] = s5;
    }
    for (; u4 <= d4; ) {
      const t7 = n4[u4++];
      null !== t7 && kt(t7);
    }
    return this.Pt = o3, Mt(t6, c4), G;
  }
});
var ds = "important";
var fs = " !" + ds;
var ps = Vt(class extends Rt {
  constructor(t6) {
    if (super(t6), 1 !== t6.type || "style" !== t6.name || t6.strings?.length > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t6) {
    return Object.keys(t6).reduce((s4, i4) => {
      const e6 = t6[i4];
      return null == e6 ? s4 : s4 + `${i4 = i4.includes("-") ? i4 : i4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${e6};`;
    }, "");
  }
  update(t6, [s4]) {
    const { style: i4 } = t6.element;
    if (void 0 === this.Mt)
      return this.Mt = new Set(Object.keys(s4)), this.render(s4);
    for (const t7 of this.Mt)
      null == s4[t7] && (this.Mt.delete(t7), t7.includes("-") ? i4.removeProperty(t7) : i4[t7] = null);
    for (const t7 in s4) {
      const e6 = s4[t7];
      if (null != e6) {
        this.Mt.add(t7);
        const s5 = "string" == typeof e6 && e6.endsWith(fs);
        t7.includes("-") || s5 ? i4.setProperty(t7, s5 ? e6.slice(0, -11) : e6, s5 ? ds : "") : i4[t7] = e6;
      }
    }
    return G;
  }
});
var vs = Vt(
  class extends Rt {
    constructor(t6) {
      if (super(t6), 2 !== t6.type)
        throw Error("templateContent can only be used in child bindings");
    }
    render(t6) {
      return this.At === t6 ? G : (this.At = t6, document.importNode(t6.content, true));
    }
  }
);
var ys = class extends Rt {
  constructor(t6) {
    if (super(t6), this.gt = J, 2 !== t6.type)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t6) {
    if (t6 === J || null == t6)
      return this.kt = void 0, this.gt = t6;
    if (t6 === G)
      return t6;
    if ("string" != typeof t6)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t6 === this.gt)
      return this.kt;
    this.gt = t6;
    const s4 = [t6];
    return s4.raw = s4, this.kt = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
  }
};
ys.directiveName = "unsafeHTML", ys.resultType = 1;
var ms = Vt(ys);
var bs = class extends ys {
};
bs.directiveName = "unsafeSVG", bs.resultType = 2;
var gs = Vt(bs);
var ws = (t6) => !bt(t6) && "function" == typeof t6.then;
var _s = 1073741823;
var Ss = class extends It {
  constructor() {
    super(...arguments), this.Ot = _s, this.Ut = [], this.ft = new Bt(this), this.vt = new Wt();
  }
  render(...t6) {
    return t6.find((t7) => !ws(t7)) ?? G;
  }
  update(t6, s4) {
    const i4 = this.Ut;
    let e6 = i4.length;
    this.Ut = s4;
    const n4 = this.ft, r4 = this.vt;
    this.isConnected || this.disconnected();
    for (let t7 = 0; t7 < s4.length && !(t7 > this.Ot); t7++) {
      const o3 = s4[t7];
      if (!ws(o3))
        return this.Ot = t7, o3;
      t7 < e6 && o3 === i4[t7] || (this.Ot = _s, e6 = 0, Promise.resolve(o3).then(async (t8) => {
        for (; r4.get(); )
          await r4.get();
        const s5 = n4.deref();
        if (void 0 !== s5) {
          const i5 = s5.Ut.indexOf(o3);
          i5 > -1 && i5 < s5.Ot && (s5.Ot = i5, s5.setValue(t8));
        }
      }));
    }
    return G;
  }
  disconnected() {
    this.ft.disconnect(), this.vt.pause();
  }
  reconnected() {
    this.ft.reconnect(this), this.vt.resume();
  }
};
var $s = Vt(Ss);
var xs = Symbol.for("");
var Es = (t6) => {
  if (t6?.r === xs)
    return t6?._$litStatic$;
};
var Ms = /* @__PURE__ */ new Map();
var As = (t6) => (s4, ...i4) => {
  const e6 = i4.length;
  let n4, r4;
  const o3 = [], h4 = [];
  let c4, l4 = 0, a4 = false;
  for (; l4 < e6; ) {
    for (c4 = s4[l4]; l4 < e6 && void 0 !== (r4 = i4[l4], n4 = Es(r4)); )
      c4 += n4 + s4[++l4], a4 = true;
    l4 !== e6 && h4.push(r4), o3.push(c4), l4++;
  }
  if (l4 === e6 && o3.push(s4[e6]), a4) {
    const t7 = o3.join("$$lit$$");
    void 0 === (s4 = Ms.get(t7)) && (o3.raw = o3, Ms.set(t7, s4 = o3)), i4 = h4;
  }
  return t6(s4, ...i4);
};
var ks = As(Z);
var Os = As(q);
window.litDisableBundleWarning || console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/custom-element.js/+esm
var e2 = (e6) => (t6, n4) => {
  void 0 !== n4 ? n4.addInitializer(() => {
    customElements.define(e6, t6);
  }) : customElements.define(e6, t6);
};

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/property.js/+esm
var t3 = globalThis;
var e3 = t3.ShadowRoot && (void 0 === t3.ShadyCSS || t3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s2 = Symbol();
var i2 = /* @__PURE__ */ new WeakMap();
var r2 = class {
  constructor(t6, e6, i4) {
    if (this._$cssResult$ = true, i4 !== s2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = e6;
  }
  get styleSheet() {
    let t6 = this.o;
    const s4 = this.t;
    if (e3 && void 0 === t6) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t6 = i2.get(s4)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && i2.set(s4, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t6) => new r2("string" == typeof t6 ? t6 : t6 + "", void 0, s2);
var n2 = (s4, i4) => {
  if (e3)
    s4.adoptedStyleSheets = i4.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
  else
    for (const e6 of i4) {
      const i5 = document.createElement("style"), r4 = t3.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e6.cssText, s4.appendChild(i5);
    }
};
var a2 = e3 ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let e6 = "";
  for (const s4 of t7.cssRules)
    e6 += s4.cssText;
  return o(e6);
})(t6) : t6;
var { is: h2, defineProperty: c2, getOwnPropertyDescriptor: l2, getOwnPropertyNames: p2, getOwnPropertySymbols: d2, getPrototypeOf: u2 } = Object;
var f2 = globalThis;
var y2 = f2.trustedTypes;
var E2 = y2 ? y2.emptyScript : "";
var _2 = f2.reactiveElementPolyfillSupport;
var m2 = (t6, e6) => t6;
var S2 = { toAttribute(t6, e6) {
  switch (e6) {
    case Boolean:
      t6 = t6 ? E2 : null;
      break;
    case Object:
    case Array:
      t6 = null == t6 ? t6 : JSON.stringify(t6);
  }
  return t6;
}, fromAttribute(t6, e6) {
  let s4 = t6;
  switch (e6) {
    case Boolean:
      s4 = null !== t6;
      break;
    case Number:
      s4 = null === t6 ? null : Number(t6);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t6);
      } catch (t7) {
        s4 = null;
      }
  }
  return s4;
} };
var $2 = (t6, e6) => !h2(t6, e6);
var g2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
Symbol.metadata ??= Symbol("metadata"), f2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var P2 = class extends HTMLElement {
  static addInitializer(t6) {
    this._$Ei(), (this.l ??= []).push(t6);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t6, e6 = g2) {
    if (e6.state && (e6.attribute = false), this._$Ei(), this.elementProperties.set(t6, e6), !e6.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t6, s4, e6);
      void 0 !== i4 && c2(this.prototype, t6, i4);
    }
  }
  static getPropertyDescriptor(t6, e6, s4) {
    const { get: i4, set: r4 } = l2(this.prototype, t6) ?? { get() {
      return this[e6];
    }, set(t7) {
      this[e6] = t7;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e7) {
      const o3 = i4?.call(this);
      r4.call(this, e7), this.requestUpdate(t6, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) ?? g2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m2("elementProperties")))
      return;
    const t6 = u2(this);
    t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m2("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m2("properties"))) {
      const t7 = this.properties, e6 = [...p2(t7), ...d2(t7)];
      for (const s4 of e6)
        this.createProperty(s4, t7[s4]);
    }
    const t6 = this[Symbol.metadata];
    if (null !== t6) {
      const e6 = litPropertyMetadata.get(t6);
      if (void 0 !== e6)
        for (const [t7, s4] of e6)
          this.elementProperties.set(t7, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t7, e6] of this.elementProperties) {
      const s4 = this._$Eu(t7, e6);
      void 0 !== s4 && this._$Eh.set(s4, t7);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t6) {
    const e6 = [];
    if (Array.isArray(t6)) {
      const s4 = new Set(t6.flat(1 / 0).reverse());
      for (const t7 of s4)
        e6.unshift(a2(t7));
    } else
      void 0 !== t6 && e6.push(a2(t6));
    return e6;
  }
  static _$Eu(t6, e6) {
    const s4 = e6.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
  }
  addController(t6) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
  }
  removeController(t6) {
    this._$EO?.delete(t6);
  }
  _$E_() {
    const t6 = /* @__PURE__ */ new Map(), e6 = this.constructor.elementProperties;
    for (const s4 of e6.keys())
      this.hasOwnProperty(s4) && (t6.set(s4, this[s4]), delete this[s4]);
    t6.size > 0 && (this._$Ep = t6);
  }
  createRenderRoot() {
    const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n2(t6, this.constructor.elementStyles), t6;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t6) => t6.hostDisconnected?.());
  }
  attributeChangedCallback(t6, e6, s4) {
    this._$AK(t6, s4);
  }
  _$EC(t6, e6) {
    const s4 = this.constructor.elementProperties.get(t6), i4 = this.constructor._$Eu(t6, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S2).toAttribute(e6, s4.type);
      this._$Em = t6, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t6, e6) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t6);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t7 = s4.getPropertyOptions(i4), r4 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : S2;
      this._$Em = i4, this[i4] = r4.fromAttribute(e6, t7.type), this._$Em = null;
    }
  }
  requestUpdate(t6, e6, s4) {
    if (void 0 !== t6) {
      if (s4 ??= this.constructor.getPropertyOptions(t6), !(s4.hasChanged ?? $2)(this[t6], e6))
        return;
      this.P(t6, e6, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t6, e6, s4) {
    this._$AL.has(t6) || this._$AL.set(t6, e6), true === s4.reflect && this._$Em !== t6 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t6);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t8, e7] of this._$Ep)
          this[t8] = e7;
        this._$Ep = void 0;
      }
      const t7 = this.constructor.elementProperties;
      if (t7.size > 0)
        for (const [e7, s4] of t7)
          true !== s4.wrapped || this._$AL.has(e7) || void 0 === this[e7] || this.P(e7, this[e7], s4);
    }
    let t6 = false;
    const e6 = this._$AL;
    try {
      t6 = this.shouldUpdate(e6), t6 ? (this.willUpdate(e6), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(e6)) : this._$EU();
    } catch (e7) {
      throw t6 = false, this._$EU(), e7;
    }
    t6 && this._$AE(e6);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    this._$Ej &&= this._$Ej.forEach((t7) => this._$EC(t7, this[t7])), this._$EU();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
P2.elementStyles = [], P2.shadowRootOptions = { mode: "open" }, P2[m2("elementProperties")] = /* @__PURE__ */ new Map(), P2[m2("finalized")] = /* @__PURE__ */ new Map(), _2?.({ ReactiveElement: P2 }), (f2.reactiveElementVersions ??= []).push("2.0.4");
var b2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
var v2 = (t6 = b2, e6, s4) => {
  const { kind: i4, metadata: r4 } = s4;
  let o3 = globalThis.litPropertyMetadata.get(r4);
  if (void 0 === o3 && globalThis.litPropertyMetadata.set(r4, o3 = /* @__PURE__ */ new Map()), o3.set(s4.name, t6), "accessor" === i4) {
    const { name: i5 } = s4;
    return { set(s5) {
      const r5 = e6.get.call(this);
      e6.set.call(this, s5), this.requestUpdate(i5, r5, t6);
    }, init(e7) {
      return void 0 !== e7 && this.P(i5, void 0, t6), e7;
    } };
  }
  if ("setter" === i4) {
    const { name: i5 } = s4;
    return function(s5) {
      const r5 = this[i5];
      e6.call(this, s5), this.requestUpdate(i5, r5, t6);
    };
  }
  throw Error("Unsupported decorator location: " + i4);
};
function w2(t6) {
  return (e6, s4) => "object" == typeof s4 ? v2(t6, e6, s4) : ((t7, e7, s5) => {
    const i4 = e7.hasOwnProperty(s5);
    return e7.constructor.createProperty(s5, i4 ? { ...t7, wrapped: true } : t7), i4 ? Object.getOwnPropertyDescriptor(e7, s5) : void 0;
  })(t6, e6, s4);
}

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/state.js/+esm
var t4 = globalThis;
var e4 = t4.ShadowRoot && (void 0 === t4.ShadyCSS || t4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s3 = Symbol();
var i3 = /* @__PURE__ */ new WeakMap();
var r3 = class {
  constructor(t6, e6, i4) {
    if (this._$cssResult$ = true, i4 !== s3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = e6;
  }
  get styleSheet() {
    let t6 = this.o;
    const s4 = this.t;
    if (e4 && void 0 === t6) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t6 = i3.get(s4)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && i3.set(s4, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var o2 = (t6) => new r3("string" == typeof t6 ? t6 : t6 + "", void 0, s3);
var n3 = (s4, i4) => {
  if (e4)
    s4.adoptedStyleSheets = i4.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
  else
    for (const e6 of i4) {
      const i5 = document.createElement("style"), r4 = t4.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e6.cssText, s4.appendChild(i5);
    }
};
var a3 = e4 ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let e6 = "";
  for (const s4 of t7.cssRules)
    e6 += s4.cssText;
  return o2(e6);
})(t6) : t6;
var { is: h3, defineProperty: c3, getOwnPropertyDescriptor: l3, getOwnPropertyNames: d3, getOwnPropertySymbols: p3, getPrototypeOf: u3 } = Object;
var f3 = globalThis;
var y3 = f3.trustedTypes;
var E3 = y3 ? y3.emptyScript : "";
var _3 = f3.reactiveElementPolyfillSupport;
var m3 = (t6, e6) => t6;
var S3 = { toAttribute(t6, e6) {
  switch (e6) {
    case Boolean:
      t6 = t6 ? E3 : null;
      break;
    case Object:
    case Array:
      t6 = null == t6 ? t6 : JSON.stringify(t6);
  }
  return t6;
}, fromAttribute(t6, e6) {
  let s4 = t6;
  switch (e6) {
    case Boolean:
      s4 = null !== t6;
      break;
    case Number:
      s4 = null === t6 ? null : Number(t6);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t6);
      } catch (t7) {
        s4 = null;
      }
  }
  return s4;
} };
var $3 = (t6, e6) => !h3(t6, e6);
var g3 = { attribute: true, type: String, converter: S3, reflect: false, hasChanged: $3 };
Symbol.metadata ??= Symbol("metadata"), f3.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b3 = class extends HTMLElement {
  static addInitializer(t6) {
    this._$Ei(), (this.l ??= []).push(t6);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t6, e6 = g3) {
    if (e6.state && (e6.attribute = false), this._$Ei(), this.elementProperties.set(t6, e6), !e6.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t6, s4, e6);
      void 0 !== i4 && c3(this.prototype, t6, i4);
    }
  }
  static getPropertyDescriptor(t6, e6, s4) {
    const { get: i4, set: r4 } = l3(this.prototype, t6) ?? { get() {
      return this[e6];
    }, set(t7) {
      this[e6] = t7;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e7) {
      const o3 = i4?.call(this);
      r4.call(this, e7), this.requestUpdate(t6, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) ?? g3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m3("elementProperties")))
      return;
    const t6 = u3(this);
    t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m3("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m3("properties"))) {
      const t7 = this.properties, e6 = [...d3(t7), ...p3(t7)];
      for (const s4 of e6)
        this.createProperty(s4, t7[s4]);
    }
    const t6 = this[Symbol.metadata];
    if (null !== t6) {
      const e6 = litPropertyMetadata.get(t6);
      if (void 0 !== e6)
        for (const [t7, s4] of e6)
          this.elementProperties.set(t7, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t7, e6] of this.elementProperties) {
      const s4 = this._$Eu(t7, e6);
      void 0 !== s4 && this._$Eh.set(s4, t7);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t6) {
    const e6 = [];
    if (Array.isArray(t6)) {
      const s4 = new Set(t6.flat(1 / 0).reverse());
      for (const t7 of s4)
        e6.unshift(a3(t7));
    } else
      void 0 !== t6 && e6.push(a3(t6));
    return e6;
  }
  static _$Eu(t6, e6) {
    const s4 = e6.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
  }
  addController(t6) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
  }
  removeController(t6) {
    this._$EO?.delete(t6);
  }
  _$E_() {
    const t6 = /* @__PURE__ */ new Map(), e6 = this.constructor.elementProperties;
    for (const s4 of e6.keys())
      this.hasOwnProperty(s4) && (t6.set(s4, this[s4]), delete this[s4]);
    t6.size > 0 && (this._$Ep = t6);
  }
  createRenderRoot() {
    const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n3(t6, this.constructor.elementStyles), t6;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t6) => t6.hostDisconnected?.());
  }
  attributeChangedCallback(t6, e6, s4) {
    this._$AK(t6, s4);
  }
  _$EC(t6, e6) {
    const s4 = this.constructor.elementProperties.get(t6), i4 = this.constructor._$Eu(t6, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S3).toAttribute(e6, s4.type);
      this._$Em = t6, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t6, e6) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t6);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t7 = s4.getPropertyOptions(i4), r4 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : S3;
      this._$Em = i4, this[i4] = r4.fromAttribute(e6, t7.type), this._$Em = null;
    }
  }
  requestUpdate(t6, e6, s4) {
    if (void 0 !== t6) {
      if (s4 ??= this.constructor.getPropertyOptions(t6), !(s4.hasChanged ?? $3)(this[t6], e6))
        return;
      this.P(t6, e6, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t6, e6, s4) {
    this._$AL.has(t6) || this._$AL.set(t6, e6), true === s4.reflect && this._$Em !== t6 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t6);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t8, e7] of this._$Ep)
          this[t8] = e7;
        this._$Ep = void 0;
      }
      const t7 = this.constructor.elementProperties;
      if (t7.size > 0)
        for (const [e7, s4] of t7)
          true !== s4.wrapped || this._$AL.has(e7) || void 0 === this[e7] || this.P(e7, this[e7], s4);
    }
    let t6 = false;
    const e6 = this._$AL;
    try {
      t6 = this.shouldUpdate(e6), t6 ? (this.willUpdate(e6), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(e6)) : this._$EU();
    } catch (e7) {
      throw t6 = false, this._$EU(), e7;
    }
    t6 && this._$AE(e6);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    this._$Ej &&= this._$Ej.forEach((t7) => this._$EC(t7, this[t7])), this._$EU();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
b3.elementStyles = [], b3.shadowRootOptions = { mode: "open" }, b3[m3("elementProperties")] = /* @__PURE__ */ new Map(), b3[m3("finalized")] = /* @__PURE__ */ new Map(), _3?.({ ReactiveElement: b3 }), (f3.reactiveElementVersions ??= []).push("2.0.4");
var P3 = { attribute: true, type: String, converter: S3, reflect: false, hasChanged: $3 };
var v3 = (t6 = P3, e6, s4) => {
  const { kind: i4, metadata: r4 } = s4;
  let o3 = globalThis.litPropertyMetadata.get(r4);
  if (void 0 === o3 && globalThis.litPropertyMetadata.set(r4, o3 = /* @__PURE__ */ new Map()), o3.set(s4.name, t6), "accessor" === i4) {
    const { name: i5 } = s4;
    return { set(s5) {
      const r5 = e6.get.call(this);
      e6.set.call(this, s5), this.requestUpdate(i5, r5, t6);
    }, init(e7) {
      return void 0 !== e7 && this.P(i5, void 0, t6), e7;
    } };
  }
  if ("setter" === i4) {
    const { name: i5 } = s4;
    return function(s5) {
      const r5 = this[i5];
      e6.call(this, s5), this.requestUpdate(i5, r5, t6);
    };
  }
  throw Error("Unsupported decorator location: " + i4);
};
function w3(t6) {
  return (e6, s4) => "object" == typeof s4 ? v3(t6, e6, s4) : ((t7, e7, s5) => {
    const i4 = e7.hasOwnProperty(s5);
    return e7.constructor.createProperty(s5, i4 ? { ...t7, wrapped: true } : t7), i4 ? Object.getOwnPropertyDescriptor(e7, s5) : void 0;
  })(t6, e6, s4);
}
function U2(t6) {
  return w3({ ...t6, state: true, attribute: false });
}

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/query.js/+esm
var e5 = (e6, t6, r4) => (r4.configurable = true, r4.enumerable = true, Reflect.decorate && "object" != typeof t6 && Object.defineProperty(e6, t6, r4), r4);
function t5(t6, r4) {
  return (n4, o3, l4) => {
    const u4 = (e6) => e6.renderRoot?.querySelector(t6) ?? null;
    if (r4) {
      const { get: t7, set: r5 } = "object" == typeof o3 ? n4 : l4 ?? (() => {
        const e6 = Symbol();
        return { get() {
          return this[e6];
        }, set(t8) {
          this[e6] = t8;
        } };
      })();
      return e5(n4, o3, { get() {
        let e6 = t7.call(this);
        return void 0 === e6 && (e6 = u4(this), (null !== e6 || this.hasUpdated) && r5.call(this, e6)), e6;
      } });
    }
    return e5(n4, o3, { get() {
      return u4(this);
    } });
  };
}

// virtual:/_100554_collabState
function getState(key) {
  return globalState.globalStateManagment.getState(key);
}
function setState(key, value, systemChange) {
  globalState.globalStateManagment.setState(key, value, systemChange);
}
function subscribe(keyOrKeys, component) {
  return globalState.globalStateManagment.subscribe(keyOrKeys, component);
}
function unsubscribe(keyOrKeys, component) {
  return globalState.globalStateManagment.unsubscribe(keyOrKeys, component);
}
function notify(key) {
  return globalState.globalStateManagment.notify(key);
}
function initState(path, value) {
  const keys = path.split(".");
  if (!globalState._ica) {
    globalState._ica = {};
  }
  let current = globalState._ica;
  keys.forEach((key, index) => {
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    } else if (index === keys.length - 1 && typeof current[key] === "object" && typeof value === "object") {
      if (Array.isArray(current[key]) && Array.isArray(value)) {
        current[key] = [...value];
      } else {
        current[key] = { ...value };
      }
    }
    current = current[key];
  });
}
var isTrace = false;
var globalState = {};
function getCollabWindow() {
  if (window.parent && window.parent !== window && window.parent.globalStateManagment) {
    return window.parent;
  }
  return window;
}
window.getCollabWindow = getCollabWindow;
Object.defineProperty(globalState, "_ica", {
  get: function() {
    return getCollabWindow()._ica;
  },
  set: function(v4) {
    getCollabWindow()._ica = v4;
  }
});
Object.defineProperty(globalState, "globalStateManagment", {
  get: function() {
    return getCollabWindow().globalStateManagment;
  },
  set: function(v4) {
    getCollabWindow().globalStateManagment = v4;
  }
});
Object.defineProperty(globalState, "globalVariation", {
  get: function() {
    return getCollabWindow().globalVariation;
  },
  set: function(v4) {
    getCollabWindow().globalVariation = v4;
  }
});
function getPathValue(obj, path) {
  return (path || "").split(".").reduce((acc, part) => {
    if (acc == null)
      return void 0;
    const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      const prop = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);
      return acc[prop]?.[index];
    }
    return acc[part];
  }, obj);
}
function setPathValue(obj, path, value) {
  const parts = (path || "").split(".");
  const last = parts.pop();
  if (!last)
    return;
  let lastObj;
  try {
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  } catch (e6) {
    const isArray = parts.some((p4) => /^\w+\[\d+\]$/.test(p4));
    initState(parts.join("."), isArray ? [] : {});
    obj = globalState._ica;
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  }
  const lastIsArray = /^\w+\[\d+\]$/.test(last);
  if (lastIsArray && !Array.isArray(lastObj[last]))
    lastObj[last] = [];
  if (!lastIsArray && typeof lastObj[last] !== "object")
    lastObj[last] = {};
  lastObj[last] = value;
}
var CollabStateSingleton = class {
  constructor() {
    this.componentMap = /* @__PURE__ */ new Map();
    this.history = [];
    this.notifyQueue = [];
    this.isNotifying = false;
  }
  getState(key) {
    const value = getPathValue(globalState._ica, key);
    if (isTrace)
      console.info("getState key: " + key + " value=", value);
    return value;
  }
  setState(key, value, systemChange) {
    systemChange = systemChange ?? false;
    const oldValue = getPathValue(globalState._ica, key);
    ;
    if (isTrace)
      console.info("setState key: " + key + " value=", value, ", oldValue=", oldValue);
    if (oldValue === value)
      return;
    const notifies = [key];
    if (typeof value === "object" && value !== null) {
      const n4 = this.getNotifies(key, value);
      for (const path of n4) {
        const oldValue2 = getPathValue(globalState._ica, path);
        const newValue = getPathValue(value, path.replace(key + ".", ""));
        if (oldValue2 !== newValue)
          notifies.push(path);
      }
    }
    setPathValue(globalState._ica, key, value);
    this.logHistory(key, value, systemChange);
    this.notify(notifies);
  }
  getNotifies(path, newObj) {
    const ret = [];
    const visit = (currentPath, value) => {
      if (value && typeof value === "object") {
        Object.keys(value).forEach((k2) => {
          const nextPath = /^\d+$/.test(k2) ? `${currentPath}[${k2}]` : `${currentPath}.${k2}`;
          if (this.componentMap.has(nextPath)) {
            ret.push(nextPath);
          }
          visit(nextPath, value[k2]);
        });
      }
    };
    visit(path, newObj);
    return ret;
  }
  logHistory(key, value, system) {
    const entry = {
      timestamp: Date.now(),
      system,
      key,
      value
    };
    this.history.push(entry);
    if (this.history.length > 1e4) {
      this.history.shift();
    }
  }
  getHistory() {
    return this.history;
  }
  clearHistory() {
    this.history = [];
  }
  subscribe(keyOrKeys, component, id) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (isTrace)
        console.log("subscribe key(s)", keyOrKeys);
      const isExclusive = key.startsWith("*");
      if (isExclusive) {
        this.componentMap.delete(key);
      }
      if (!this.componentMap.has(key)) {
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      }
      this.componentMap.get(key).add(component);
    });
  }
  unsubscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (component === "*") {
        if (isTrace)
          console.log("unsubscribe key", key, " all components");
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      } else {
        if (isTrace)
          console.log("unsubscribe key", key, this.componentMap.get(key)?.has(component));
        this.componentMap.get(key)?.delete(component);
      }
    });
  }
  notify(keys) {
    if (typeof keys === "string")
      keys = [keys];
    for (const key of keys) {
      if (!this.notifyQueue.includes(key)) {
        this.notifyQueue.push(key);
      }
    }
    if (this.isNotifying)
      return;
    this.isNotifying = true;
    let nextKey = "";
    try {
      while (this.notifyQueue.length > 0) {
        nextKey = this.notifyQueue.shift();
        if (isTrace)
          console.log(`notify key=${nextKey}`, this.componentMap);
        Array.from(this.componentMap).find((map) => {
          const [stateKey, arr] = map;
          const path = stateKey.split(";")[1];
          if (path !== nextKey)
            return;
          arr.forEach((component) => {
            if ("handleIcaStateChange" in component) {
              component["handleIcaStateChange"](nextKey, this.getState(nextKey));
            } else if (typeof component === "function") {
              component(nextKey, this.getState(nextKey));
            } else {
              console.error("invalid notify on key: " + nextKey);
            }
          });
        });
      }
    } catch (e6) {
      console.error("error on notify, key: " + nextKey, e6);
    } finally {
      this.isNotifying = false;
    }
  }
  getStateStatistics() {
    const statistics = /* @__PURE__ */ new Map();
    this.componentMap.forEach((value, key) => {
      statistics.set(key, value.size);
    });
    return statistics;
  }
};
function getCollabStateInstance() {
  const win = getCollabWindow();
  if (!win.collabState) {
    win.collabState = new CollabStateSingleton();
  }
  return win.collabState;
}
if (!globalState.globalStateManagment)
  globalState.globalStateManagment = getCollabStateInstance();
if (!globalState._ica)
  globalState._ica = {};

// virtual:/_100554_collabLitElement
var __decorate = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var CollabLitElement = class extends ft {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(``);
    this.globalVariation = globalState.globalVariation || 0;
  }
  createRenderRoot() {
    return this;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("globalVariation") && changedProperties.get("globalVariation") !== void 0) {
      this.requestUpdate();
    }
  }
  getMessageKey(messages) {
    return getMessageKey(messages);
  }
  loadStyle(css) {
    if (!css)
      return;
    const tagName = this.tagName.toLowerCase();
    const alreadyAdded = document.head.querySelector(`style#${tagName}`);
    if (alreadyAdded) {
      alreadyAdded.textContent = css;
      return;
    }
    const style = document.createElement("style");
    style.id = tagName;
    style.textContent = css;
    document.head.appendChild(style);
  }
};
__decorate([
  w2({ type: Number })
], CollabLitElement.prototype, "globalVariation", void 0);
function getMessageKey(messages) {
  const keys = Object.keys(messages);
  if (!keys || keys.length < 1)
    throw new Error("Error Message not valid for international");
  const firstKey = keys[0];
  const lang = (document.documentElement.lang || "").toLowerCase();
  if (!lang)
    return firstKey;
  if (messages.hasOwnProperty(lang))
    return lang;
  const similarLang = keys.find((key) => lang.substring(0, 2) === key);
  if (similarLang)
    return similarLang;
  return firstKey;
}

// virtual:/_100554_stateLitElement
var isTrace2 = false;
var StateLitElement = class extends CollabLitElement {
  constructor() {
    super(...arguments);
    this.stateKeys = /* @__PURE__ */ new Map();
  }
  updateStateKeys(attributeName, paths) {
    if (!attributeName || !paths || paths.length === 0) {
      console.warn("Invalid state key update attempt", { attributeName, paths });
      return;
    }
    for (const key of this.stateKeys.keys()) {
      if (key.startsWith(`${attributeName}/`)) {
        this.stateKeys.delete(key);
        unsubscribe([key], this);
      }
    }
    paths.forEach((path, index) => {
      const newItem = `${attributeName}/${index};${path}`;
      if (!this.stateKeys.has(newItem)) {
        this.stateKeys.set(newItem, false);
        this.subscribeToState(newItem);
      }
    });
  }
  subscribeToState(stateKey) {
    if (!this.stateKeys.get(stateKey)) {
      subscribe([stateKey], this);
      this.stateKeys.set(stateKey, true);
    }
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    this._loadStartTime = performance.now();
    super.connectedCallback();
    if (isTrace2) {
      console.info(`connectedCallback, subscribe fields: ${Array.from(this.stateKeys.keys())}`);
    }
    this.stateKeys.forEach((isSubscribed, stateKey) => {
      if (!isSubscribed) {
        this.subscribeToState(stateKey);
      }
    });
    if (!window.collabPluginMonitor) {
      this.connectMonitoring();
    }
    const tagName = this.tagName.toLowerCase();
    window.collabPluginMonitor.reportStart(tagName, this._loadStartTime);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stateKeys.forEach((isSubscribed, stateKey) => {
      if (isSubscribed)
        unsubscribe([stateKey], this);
      this.stateKeys.set(stateKey, false);
    });
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.stateKeys.forEach((_isSubscribed, stateKey) => {
      const [, path] = stateKey.split(";");
      notify(path);
    });
    if (!window.collabPluginMonitor) {
      this.connectMonitoring();
    }
    const duration = performance.now() - (this._loadStartTime ?? 0);
    const tagName = this.tagName.toLowerCase();
    window.collabPluginMonitor.reportDone(tagName, duration);
  }
  updated(_changedProps) {
    super.updated(_changedProps);
    const start = performance.now();
    requestAnimationFrame(() => {
      const tagName = this.tagName.toLowerCase();
      const renderTime = performance.now() - start;
      window.collabPluginMonitor?.reportUpdate?.(tagName, renderTime);
    });
  }
  handleIcaStateChange(key, value) {
    const isEqual = (a4, b4) => a4 === b4 || typeof a4 === "object" && JSON.stringify(a4) === JSON.stringify(b4);
    const ob1 = this;
    this.stateKeys.forEach((_isSubscribed, stateKey) => {
      let [propName, path] = stateKey.split(";");
      propName = propName.split("/")[0];
      if (path !== key || !ob1.hasAttribute(propName))
        return;
      const propValue = ob1[`_${propName}`];
      if (!isEqual(value, propValue)) {
        ob1[`_${propName}`] = value;
        this.requestUpdate();
      }
    });
  }
  connectMonitoring() {
    if (window.collabPluginMonitor)
      return;
    const monitor = {
      records: {},
      reportStart(name, _startTime) {
      },
      reportDone(name, duration) {
        const rec = this.getRec(name);
        rec.count++;
        rec.totalTime += duration;
        monitor.records[name] = rec;
      },
      reportUpdate(name, duration) {
        const rec = this.getRec(name);
        rec.updateCount++;
        rec.updateTime += duration;
        this.records[name] = rec;
      },
      getRec(name) {
        return this.records[name] || {
          name,
          count: 0,
          totalTime: 0,
          updateCount: 0,
          updateTime: 0
        };
      },
      sts() {
        return Object.values(this.records).map((r4) => ({
          name: r4.name,
          count: r4.count,
          totalTime: parseFloat(r4.totalTime.toFixed(2)),
          avgTime: parseFloat((r4.totalTime / r4.count).toFixed(2)),
          updateCount: r4.updateCount ?? 0,
          updateTime: parseFloat((r4.updateTime ?? 0).toFixed(2)),
          avgUpdateTime: r4.updateCount ? parseFloat((r4.updateTime / r4.updateCount).toFixed(2)) : 0
        }));
      }
    };
    window.collabPluginMonitor = monitor;
  }
};

// virtual:/_100554_utilsLit
function convertTagToFileName(tag) {
  const parts = tag.split("--");
  const namePart = parts.pop() || "";
  const folder = parts.join("/").replace(/-(.)/g, (_4, letter) => letter.toUpperCase());
  const regex = /(.+)-(\d+)$/;
  const match = namePart.match(regex);
  if (!match)
    return;
  const [, rest, number] = match;
  const shortName = rest.replace(/-(.)/g, (_4, letter) => letter.toUpperCase());
  return {
    shortName,
    project: +number,
    folder
  };
}

// virtual:/l2/_100554_collabPageElement
var __decorate2 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var PREFIX_ICA_ID = "ica_";
var CollabPageElement = class extends StateLitElement {
  recreateOverlay() {
    this.overlay?.remove();
    this.overlay = void 0;
    this.createOverlay();
  }
  refreshOverlay() {
    this.checkToAddOverlay();
  }
  constructor() {
    super();
    this.modeoverlay = "";
    this.initPageComplete = false;
    this.level = window.mls && mls.actualLevel ? mls.actualLevel.toString() : "7";
    this.isPage = true;
    this.hasImport = [];
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    setTimeout(() => {
      this.checkToAddOverlay();
    }, 500);
    await this.initPage();
    this.initPageComplete = true;
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("level") && changedProperties.get("level") !== void 0) {
      this.checkToAddOverlay();
    }
  }
  render() {
    this.style.position = "relative";
    return Z``;
  }
  setupIds() {
    const icas = this.findAllElementsIca(this);
    icas.forEach((item) => {
      const oldId = item.element.id;
      const icaId = `${PREFIX_ICA_ID}${item.element.id}`;
      item.element.setAttribute("id", icaId);
      item.element.setAttribute("idel", oldId);
    });
  }
  checkToAddOverlay() {
    if (this.level === "7") {
      this.overlay?.remove();
      this.overlay = void 0;
      return;
    }
    if (this.overlay) {
      this.overlay.setAttribute("level", this.level);
      this.overlay.changeOverlayItemsLevel();
      return;
    }
    this.createOverlay();
  }
  async createOverlay() {
    if (!this.modeoverlay)
      return;
    const ok = await this.importWCDOverlay(this.modeoverlay);
    if (!ok)
      return;
    this.overlay = document.createElement(this.modeoverlay);
    this.overlay.myItens = this.findAllElementsIca(this);
    this.overlay.createOverlayItems();
    this.appendChild(this.overlay);
    mls.events.fire(3, "WCDEventChange", JSON.stringify({ op: "recreateOverlay" }));
  }
  async importWCDOverlay(imports) {
    try {
      if (this.hasImport.includes(imports))
        return true;
      const info = convertTagToFileName(imports);
      if (!info)
        return;
      imports = `_${info.project}_${info.shortName}`;
      if (!imports.startsWith("./")) {
        imports = "./" + imports;
      }
      await import(imports);
      this.hasImport.push(imports);
      return true;
    } catch (e6) {
      console.info(e6);
      return false;
    }
  }
  findAllElementsIca(el) {
    let elements = [];
    let elToSearch = el;
    const arrayEls = [];
    function traverseShadowRoot(element, depth) {
      if (element.getAttribute("mls_origin") && !arrayEls.includes(element)) {
        const { x: x2, y: y4, height, width } = element.getBoundingClientRect();
        elements.push({ element, depth, x: x2, y: y4, height, width, opacity: element.style.opacity });
        arrayEls.push(element);
        return;
      }
      if (element.shadowRoot) {
        element.shadowRoot.querySelectorAll("*").forEach((item) => {
          traverseShadowRoot(item, depth + 1);
        });
      } else {
        const children = Array.from(element.children);
        if (children.length > 0) {
          children.forEach((child) => traverseShadowRoot(child, depth + 1));
        }
      }
    }
    if (el.shadowRoot)
      elToSearch = el.shadowRoot;
    elToSearch.querySelectorAll("*").forEach((item) => {
      traverseShadowRoot(item, 0);
    });
    return elements;
  }
};
__decorate2([
  w2({ type: String, reflect: true })
], CollabPageElement.prototype, "modeoverlay", void 0);
__decorate2([
  w2()
], CollabPageElement.prototype, "initPageComplete", void 0);
__decorate2([
  w2({ type: String, reflect: true })
], CollabPageElement.prototype, "level", void 0);

// virtual:/l2/_100554_collabState
function setState2(key, value, systemChange) {
  globalState2.globalStateManagment.setState(key, value, systemChange);
}
function initState2(path, value) {
  const keys = path.split(".");
  if (!globalState2._ica) {
    globalState2._ica = {};
  }
  let current = globalState2._ica;
  keys.forEach((key, index) => {
    if (!current[key]) {
      current[key] = index === keys.length - 1 ? value : {};
    } else if (index === keys.length - 1 && typeof current[key] === "object" && typeof value === "object") {
      if (Array.isArray(current[key]) && Array.isArray(value)) {
        current[key] = [...value];
      } else {
        current[key] = { ...value };
      }
    }
    current = current[key];
  });
}
var isTrace3 = false;
var globalState2 = {};
function getCollabWindow2() {
  if (window.parent && window.parent !== window && window.parent.globalStateManagment) {
    return window.parent;
  }
  return window;
}
window.getCollabWindow = getCollabWindow2;
Object.defineProperty(globalState2, "_ica", {
  get: function() {
    return getCollabWindow2()._ica;
  },
  set: function(v4) {
    getCollabWindow2()._ica = v4;
  }
});
Object.defineProperty(globalState2, "globalStateManagment", {
  get: function() {
    return getCollabWindow2().globalStateManagment;
  },
  set: function(v4) {
    getCollabWindow2().globalStateManagment = v4;
  }
});
Object.defineProperty(globalState2, "globalVariation", {
  get: function() {
    return getCollabWindow2().globalVariation;
  },
  set: function(v4) {
    getCollabWindow2().globalVariation = v4;
  }
});
function getPathValue2(obj, path) {
  return (path || "").split(".").reduce((acc, part) => {
    if (acc == null)
      return void 0;
    const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
    if (arrayMatch) {
      const prop = arrayMatch[1];
      const index = parseInt(arrayMatch[2], 10);
      return acc[prop]?.[index];
    }
    return acc[part];
  }, obj);
}
function setPathValue2(obj, path, value) {
  const parts = (path || "").split(".");
  const last = parts.pop();
  if (!last)
    return;
  let lastObj;
  try {
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  } catch (e6) {
    const isArray = parts.some((p4) => /^\w+\[\d+\]$/.test(p4));
    initState2(parts.join("."), isArray ? [] : {});
    obj = globalState2._ica;
    lastObj = parts.reduce((acc, part) => {
      const match = part.match(/^(\w+)\[(\d+)\]$/);
      if (match) {
        const prop = match[1];
        const index = parseInt(match[2], 10);
        acc[prop] = acc[prop] || [];
        acc[prop][index] = acc[prop][index] || {};
        return acc[prop][index];
      } else {
        acc[part] = acc[part] || {};
        return acc[part];
      }
    }, obj);
  }
  const lastIsArray = /^\w+\[\d+\]$/.test(last);
  if (lastIsArray && !Array.isArray(lastObj[last]))
    lastObj[last] = [];
  if (!lastIsArray && typeof lastObj[last] !== "object")
    lastObj[last] = {};
  lastObj[last] = value;
}
var CollabStateSingleton2 = class {
  constructor() {
    this.componentMap = /* @__PURE__ */ new Map();
    this.history = [];
    this.notifyQueue = [];
    this.isNotifying = false;
  }
  getState(key) {
    const value = getPathValue2(globalState2._ica, key);
    if (isTrace3)
      console.info("getState key: " + key + " value=", value);
    return value;
  }
  setState(key, value, systemChange) {
    systemChange = systemChange ?? false;
    const oldValue = getPathValue2(globalState2._ica, key);
    ;
    if (isTrace3)
      console.info("setState key: " + key + " value=", value, ", oldValue=", oldValue);
    if (oldValue === value)
      return;
    const notifies = [key];
    if (typeof value === "object" && value !== null) {
      const n4 = this.getNotifies(key, value);
      for (const path of n4) {
        const oldValue2 = getPathValue2(globalState2._ica, path);
        const newValue = getPathValue2(value, path.replace(key + ".", ""));
        if (oldValue2 !== newValue)
          notifies.push(path);
      }
    }
    setPathValue2(globalState2._ica, key, value);
    this.logHistory(key, value, systemChange);
    this.notify(notifies);
  }
  getNotifies(path, newObj) {
    const ret = [];
    const visit = (currentPath, value) => {
      if (value && typeof value === "object") {
        Object.keys(value).forEach((k2) => {
          const nextPath = /^\d+$/.test(k2) ? `${currentPath}[${k2}]` : `${currentPath}.${k2}`;
          if (this.componentMap.has(nextPath)) {
            ret.push(nextPath);
          }
          visit(nextPath, value[k2]);
        });
      }
    };
    visit(path, newObj);
    return ret;
  }
  logHistory(key, value, system) {
    const entry = {
      timestamp: Date.now(),
      system,
      key,
      value
    };
    this.history.push(entry);
    if (this.history.length > 1e4) {
      this.history.shift();
    }
  }
  getHistory() {
    return this.history;
  }
  clearHistory() {
    this.history = [];
  }
  subscribe(keyOrKeys, component, id) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (isTrace3)
        console.log("subscribe key(s)", keyOrKeys);
      const isExclusive = key.startsWith("*");
      if (isExclusive) {
        this.componentMap.delete(key);
      }
      if (!this.componentMap.has(key)) {
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      }
      this.componentMap.get(key).add(component);
    });
  }
  unsubscribe(keyOrKeys, component) {
    const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
    keys.forEach((key) => {
      if (!key.includes(";"))
        key = `;${key}`;
      if (component === "*") {
        if (isTrace3)
          console.log("unsubscribe key", key, " all components");
        this.componentMap.set(key, /* @__PURE__ */ new Set());
      } else {
        if (isTrace3)
          console.log("unsubscribe key", key, this.componentMap.get(key)?.has(component));
        this.componentMap.get(key)?.delete(component);
      }
    });
  }
  notify(keys) {
    if (typeof keys === "string")
      keys = [keys];
    for (const key of keys) {
      if (!this.notifyQueue.includes(key)) {
        this.notifyQueue.push(key);
      }
    }
    if (this.isNotifying)
      return;
    this.isNotifying = true;
    let nextKey = "";
    try {
      while (this.notifyQueue.length > 0) {
        nextKey = this.notifyQueue.shift();
        if (isTrace3)
          console.log(`notify key=${nextKey}`, this.componentMap);
        Array.from(this.componentMap).find((map) => {
          const [stateKey, arr] = map;
          const path = stateKey.split(";")[1];
          if (path !== nextKey)
            return;
          arr.forEach((component) => {
            if ("handleIcaStateChange" in component) {
              component["handleIcaStateChange"](nextKey, this.getState(nextKey));
            } else if (typeof component === "function") {
              component(nextKey, this.getState(nextKey));
            } else {
              console.error("invalid notify on key: " + nextKey);
            }
          });
        });
      }
    } catch (e6) {
      console.error("error on notify, key: " + nextKey, e6);
    } finally {
      this.isNotifying = false;
    }
  }
  getStateStatistics() {
    const statistics = /* @__PURE__ */ new Map();
    this.componentMap.forEach((value, key) => {
      statistics.set(key, value.size);
    });
    return statistics;
  }
};
function getCollabStateInstance2() {
  const win = getCollabWindow2();
  if (!win.collabState) {
    win.collabState = new CollabStateSingleton2();
  }
  return win.collabState;
}
if (!globalState2.globalStateManagment)
  globalState2.globalStateManagment = getCollabStateInstance2();
if (!globalState2._ica)
  globalState2._ica = {};

// virtual:/_102009_petshop/pageAdminProduct
var __decorate3 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var PageAdminProduct102009 = class PageAdminProduct1020092 extends CollabPageElement {
  constructor() {
    super();
    if (this.loadStyle)
      this.loadStyle(`petshop--page-admin-product-102009 {
  display: flex;
}
petshop--page-admin-product-102009 main {
  height: 100vh;
  overflow: auto;
  width: 100%;
}
@media (max-width: 768px) {
  petshop--page-admin-product-102009 {
    flex-direction: column;
  }
  petshop--page-admin-product-102009 main {
    height: calc(100vh - 180px);
  }
}
`);
  }
  initPage() {
    setState2("ui.petshop.admin.menu.selected", "product");
  }
};
PageAdminProduct102009 = __decorate3([
  e2("petshop--page-admin-product-102009")
], PageAdminProduct102009);

// virtual:/_100554_icaLitElementBase
var __decorate4 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var IcaLitElementBase = class extends StateLitElement {
  constructor() {
    super(...arguments);
    this.mySymbol = "fa-column";
    this.originalAttrs = [];
    this.excludesProps = ["rendertype", "level", "style", "id"];
  }
  connectedCallback() {
    super.connectedCallback();
    const attrs = this.getAttributes();
    attrs.forEach((atr) => {
      if (atr.name.startsWith("."))
        return;
      this.setAttribute(atr.name, atr.value);
    });
  }
  createRenderRoot() {
    return this;
  }
  getAttributes() {
    const language = this.closest("html")?.lang || "en";
    const attributes = [];
    const attributeNames = this.getAttributeNames();
    for (let attrName of attributeNames) {
      if (this.excludesProps.includes(attrName))
        continue;
      let attrValue = this.getAttribute(attrName);
      if (attrName === "idel")
        attrName = "id";
      if (attrName === "classel")
        attrName = "class";
      if (attrValue !== null) {
        attributes.push({
          name: attrName,
          value: attrValue
        });
        this.originalAttrs.push({
          name: attrName,
          value: attrValue
        });
      }
    }
    const attrsByVariation = this.filterAttributes(attributes, language);
    return attrsByVariation;
  }
  filterAttributes(attributes, variation) {
    const variationSuffix = `-${variation.toLowerCase()}`;
    const variationAttributes = attributes.filter((attr) => attr.name.endsWith(variationSuffix));
    const nonVariationAttributes = attributes.filter((attr) => {
      if (attr.name.includes("-") && attr.name.endsWith(variationSuffix))
        return false;
      const split = attr.name.split("-");
      if (split.length > 1)
        split.pop();
      const attrBase = split.join("-");
      return !attributes.some((a4) => a4.name.startsWith(attrBase) && a4 !== attr && variationAttributes.includes(a4));
    });
    let aux = [...nonVariationAttributes, ...variationAttributes];
    aux.forEach((attr) => {
      const split = attr.name.split("-");
      if (split.length > 0) {
        const language = split.pop();
        if (language === variation)
          attr.name = split.join("-");
      }
    });
    return aux;
  }
};
__decorate4([
  w2({ type: String })
], IcaLitElementBase.prototype, "level", void 0);

// virtual:/_100554_icaOrganismBase
var IcaOrganismBase = class extends IcaLitElementBase {
  constructor() {
    super(...arguments);
    this.baseName = "IcaOrganismBase";
  }
  getActionsTags() {
    return [
      { name: "margin" },
      { name: "padding" },
      { name: "menu" },
      { name: "size" },
      { name: "title" }
    ];
  }
};

// virtual:/_100554_collabIcons
var collab_home = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>`;
var collab_bars = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>`;
var collab_magnifying_glass = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>`;
var collab_file_half_dashed = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox = "0 0 384 512" > <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 320l384 0 0-160-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM0 416l64 0 0-64L0 352l0 64zm288 32l-80 0 0 64 80 0 0-64zm-112 0l-80 0 0 64 80 0 0-64zM64 448L0 448c0 35.3 28.7 64 64 64l0-64zm256 0l0 64c35.3 0 64-28.7 64-64l-64 0zm64-32l0-64-64 0 0 64 64 0z"/></svg>`;
var collab_book_skull = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM320 112c0-35.3-35.8-64-80-64s-80 28.7-80 64c0 20.9 12.6 39.5 32 51.2l0 12.8c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-12.8c19.4-11.7 32-30.3 32-51.2zM208 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM134.3 209.3c-8.1-3.5-17.5 .3-21 8.4s.3 17.5 8.4 21L199.4 272l-77.7 33.3c-8.1 3.5-11.9 12.9-8.4 21s12.9 11.9 21 8.4L240 289.4l105.7 45.3c8.1 3.5 17.5-.3 21-8.4s-.3-17.5-8.4-21L280.6 272l77.7-33.3c8.1-3.5 11.9-12.9 8.4-21s-12.9-11.9-21-8.4L240 254.6 134.3 209.3z"/></svg>`;
var collab_rectangle_list = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24l224 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-224 0c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;
var collab_lightbulb = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>`;
var collab_translate = q`<svg  width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>`;
var collab_file_fragment = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-128 0 0-128c0-35.3-28.7-64-64-64L0 320 0 64zm384 64l-128 0L256 0 384 128zM32 352l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z"/></svg>`;
var collab_file_code = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"/></svg>`;
var collab_dot = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>`;
var collab_minus = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>`;
var collab_user_plus = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
var collab_bell = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/> </svg>`;
var collab_bell_slash = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L513.4 479.7C530.6 477.3 543.9 462.4 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 99.2C249.4 107 215.8 128.8 192.8 158.9L73 39.1zM160 277.6C160 325.7 143.6 372.4 113.6 410L103.8 422.2C98.8 428.5 96 436.3 96 444.4C96 464 111.9 479.9 131.5 479.9L366.8 479.9L159.9 273L159.9 277.5zM320 576C349.8 576 374.9 555.6 382 528L258 528C265.1 555.6 290.2 576 320 576z"/></svg>`;
var collab_message = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>`;
var collab_money = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg>`;
var collab_clock = q`<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_d9Sa{transform-origin:center}.spinner_qQQY{animation:spinner_ZpfF 9s linear infinite}.spinner_pote{animation:spinner_ZpfF .75s linear infinite}@keyframes spinner_ZpfF{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect class="spinner_d9Sa spinner_qQQY" x="11" y="6" rx="1" width="2" height="7"/><rect class="spinner_d9Sa spinner_pote" x="11" y="11" rx="1" width="2" height="9"/></svg>`;
var collab_clock_static = q`<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`;
var collab_test = q`<svg width="50" height="50" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="currentColor"><rect x="8.33" y="10.82" width="47.34" height="34.38" rx="2.02"/><line x1="8.33" y1="38.66" x2="55.67" y2="38.66"/><path d="M23.05,53.18a6.67,6.67,0,0,0,3.55-8"/><path d="M41.84,53.18a6.66,6.66,0,0,1-3.55-8"/><line x1="17.5" y1="53.18" x2="46.5" y2="53.18" stroke-linecap="round"/><polyline points="16.8 19.18 19.7 21.21 23.29 16.16"/><polyline points="16.38 28.98 19.27 31 22.86 25.95"/><line x1="28.6" y1="19.48" x2="49.42" y2="19.48"/><line x1="28.6" y1="29.66" x2="49.42" y2="29.66"/></svg>`;
var collab_html = q` 
            <svg width="20" height="20" viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
            </svg>`;
var collab_typescript = q` 
            <svg width="20" height="20" viewBox="0 0 128 128">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
            </svg>`;
var collab_less = q` 
            <svg width="20" height="20" viewBox="0 0 128 128">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
            </svg>`;
var collab_fileTest = q` 
            <svg width="20" height="20" viewBox="0 0 512 512" xml:space="preserve"><polygon style="fill:#E09B2D;" points="356.648,9.866 432.636,85.867 356.648,85.867 "/><g>
                <rect x="127.073" y="111.93" style="fill:#F95428;" width="56.57" height="50.084"/>
                <rect x="127.073" y="203.548" style="fill:#F95428;" width="56.57" height="50.084"/>
            </g>
            <path style="fill:#F7B239;" d="M432.636,85.867v416.265H79.361V9.866h277.286v76.001H432.636z M183.648,436.879v-50.084h-56.57
                v50.084H183.648z M183.648,345.261v-50.084h-56.57v50.084H183.648z M183.648,253.631v-50.084h-56.57v50.084H183.648z
                M183.648,162.013v-50.084h-56.57v50.084H183.648z"/>
            <g>
                <rect x="127.073" y="386.796" style="fill:#F95428;" width="56.57" height="50.084"/>
                <rect x="127.073" y="295.178" style="fill:#F95428;" width="56.57" height="50.084"/>
            </g>
            <g>
                <path style="fill:#FFFFFF;" d="M400.72,475.399c-5.45,0-9.867-4.418-9.867-9.867v-313.11c0-5.449,4.416-9.867,9.867-9.867
                    c5.451,0,9.867,4.418,9.867,9.867v313.11C410.587,470.981,406.169,475.399,400.72,475.399z"/>
                <circle style="fill:#FFFFFF;" cx="400.715" cy="119.534" r="9.867"/>
            </g>
            <g>
                <path style="fill:#333333;" d="M439.615,78.892L363.627,2.89c-1.85-1.85-4.36-2.89-6.978-2.89H79.363
                    c-5.45,0-9.867,4.418-9.867,9.867v492.266c0,5.449,4.416,9.867,9.867,9.867h353.275c5.45,0,9.867-4.418,9.867-9.867V85.868
                    C442.504,83.252,441.465,80.743,439.615,78.892z M366.516,33.691l42.304,42.311h-42.304V33.691z M89.23,492.266V19.734h257.554
                    v66.135c0,5.449,4.416,9.867,9.867,9.867h66.121v396.531H89.23z"/>
                <path style="fill:#333333;" d="M183.645,102.063h-56.57c-5.45,0-9.867,4.418-9.867,9.867v50.082c0,5.449,4.416,9.867,9.867,9.867
                    h56.57c5.45,0,9.867-4.418,9.867-9.867V111.93C193.512,106.481,189.095,102.063,183.645,102.063z M173.778,152.145h-36.836v-30.348
                    h36.836V152.145z"/>
                <path style="fill:#333333;" d="M352.557,125.357H232.321c-5.45,0-9.867,4.418-9.867,9.867s4.416,9.867,9.867,9.867h120.237
                    c5.45,0,9.867-4.418,9.867-9.867S358.008,125.357,352.557,125.357z"/>
                <path style="fill:#333333;" d="M183.645,193.686h-56.57c-5.45,0-9.867,4.418-9.867,9.867v50.082c0,5.449,4.416,9.867,9.867,9.867
                    h56.57c5.45,0,9.867-4.418,9.867-9.867v-50.082C193.512,198.104,189.095,193.686,183.645,193.686z M173.778,243.768h-36.836V213.42
                    h36.836V243.768z"/>
                <path style="fill:#333333;" d="M352.557,216.98H232.321c-5.45,0-9.867,4.418-9.867,9.867s4.416,9.867,9.867,9.867h120.237
                    c5.45,0,9.867-4.418,9.867-9.867S358.008,216.98,352.557,216.98z"/>
                <path style="fill:#333333;" d="M183.645,285.309h-56.57c-5.45,0-9.867,4.418-9.867,9.867v50.082c0,5.449,4.416,9.867,9.867,9.867
                    h56.57c5.45,0,9.867-4.418,9.867-9.867v-50.082C193.512,289.726,189.095,285.309,183.645,285.309z M173.778,335.39h-36.836v-30.348
                    h36.836V335.39z"/>
                <path style="fill:#333333;" d="M352.557,308.602H232.321c-5.45,0-9.867,4.418-9.867,9.867s4.416,9.867,9.867,9.867h120.237
                    c5.45,0,9.867-4.418,9.867-9.867S358.008,308.602,352.557,308.602z"/>
                <path style="fill:#333333;" d="M183.645,376.931h-56.57c-5.45,0-9.867,4.418-9.867,9.867v50.082c0,5.449,4.416,9.867,9.867,9.867
                    h56.57c5.45,0,9.867-4.418,9.867-9.867v-50.082C193.512,381.349,189.095,376.931,183.645,376.931z M173.778,427.013h-36.836
                    v-30.348h36.836V427.013z"/>
                <path style="fill:#333333;" d="M352.557,400.225H232.321c-5.45,0-9.867,4.418-9.867,9.867s4.416,9.867,9.867,9.867h120.237
                    c5.45,0,9.867-4.418,9.867-9.867S358.008,400.225,352.557,400.225z"/>
            </g>
            </svg>`;
var collab_record = q`<svg width="20" height="20"viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
var collab_stop = q`<svg width="20" height="20"viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>`;
var collab_copy = q`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z"></path>
        < /svg>`;
var collab_check = q`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0633 5.67375C18.5196 5.98487 18.6374 6.607 18.3262 7.06331L10.8262 18.0633C10.6585 18.3093 10.3898 18.4678 10.0934 18.4956C9.79688 18.5234 9.50345 18.4176 9.29289 18.2071L4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929C5.18342 11.9023 5.81658 11.9023 6.20711 12.2929L9.85368 15.9394L16.6738 5.93664C16.9849 5.48033 17.607 5.36263 18.0633 5.67375Z" ></path>
    </svg>
`;
var collab_double_check = q`
    <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.62 3.596L7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.234 8.774l4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403l.548.78-.547-.78zm-1.617 1.91l.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z"/>
    </svg>
`;
var collab_file = q`
    <svg width="16" height="16" xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 384 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z' fill='currentColor'/></svg>
`;
var collab_location_dot = q`
    <svg width="10" height="17" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' fill='rgb(135,206,250,1)'/></svg>
`;
var collab_rotate_left = q`
    <svg width="16" height="16" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z'/></svg>
`;
var collab_bug = q`
    <svg width="16" height="16" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z' fill='rgb(169,3,3,1)'/></svg>
`;
var collab_bug_x12 = q`
    <svg width="12" height="12" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z' fill='rgb(169,3,3,1)'/></svg>
`;
var collab_unbalanced = q`
    <svg width="16" height="16" xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z' fill='rgb(249 139 5)'/></svg>
`;
var collab_info = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"/></svg>
`;
var collab_info_circle = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
`;
var collab_question = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
`;
var collab_heart = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
`;
var collab_heart_o = q`
    <svg width="12" height="12"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
`;
var collab_angles_right = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
`;
var collab_chevron_right = q`
    <svg width="12" height="12" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/></svg>
`;
var collab_chevron_left = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
`;
var collab_chevron_down = q`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
`;
var collab_undo = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z' fill='currentColor'/></svg>
`;
var collab_clone = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z' fill='currentColor'/></svg>
`;
var collab_file_pen = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z' fill='currentColor'/></svg>
`;
var collab_trash = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' fill='currentColor'/></svg>
`;
var collab_ellipsis_vertical = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z' fill='currentColor'/></svg>
`;
var collab_ban = q`
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z " fill="currentColor"/></svg>
`;
var collab_file_signature = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V428.7c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2H240c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h8.2c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8h8.9c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z'/></svg>
`;
var collab_calendar_days = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z'/></svg>
`;
var collab_user = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'/></svg>
`;
var collab_users = q`
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
`;
var collab_book = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z'/></svg>
`;
var collab_list_check = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'/></svg>
`;
var collab_folder_tree = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z'/></svg>
`;
var collab_cube = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z'/></svg>
`;
var collab_pen_nib = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z'/></svg>
`;
var collab_plus = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'/></svg>
`;
var collab_bolt = q`
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/></svg>
`;
var collab_pencil = q`
    <svg width="15" height="15" <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z'/></svg>
`;
var collab_cubes = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z'/></svg>
`;
var collab_floppy_disk = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'/></svg>
`;
var collab_xmark = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/></svg>
`;
var collab_arrow_up_long = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z'/></svg>
`;
var collab_arrow_down_long = q`
    <svg width="15" height="15" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z'/></svg>
`;
var collab_arrows_up_down_left_right = q`
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L233.3 137.4C220.8 149.9 220.8 170.2 233.3 182.7C245.8 195.2 266.1 195.2 278.6 182.7L288 173.3L288 288L173.3 288L182.7 278.6C195.2 266.1 195.2 245.8 182.7 233.3C170.2 220.8 149.9 220.8 137.4 233.3L73.4 297.3C60.9 309.8 60.9 330.1 73.4 342.6L137.4 406.6C149.9 419.1 170.2 419.1 182.7 406.6C195.2 394.1 195.2 373.8 182.7 361.3L173.3 351.9L288 351.9L288 466.6L278.6 457.2C266.1 444.7 245.8 444.7 233.3 457.2C220.8 469.7 220.8 490 233.3 502.5L297.3 566.5C309.8 579 330.1 579 342.6 566.5L406.6 502.5C419.1 490 419.1 469.7 406.6 457.2C394.1 444.7 373.8 444.7 361.3 457.2L351.9 466.6L351.9 351.9L466.6 351.9L457.2 361.3C444.7 373.8 444.7 394.1 457.2 406.6C469.7 419.1 490 419.1 502.5 406.6L566.5 342.6C579 330.1 579 309.8 566.5 297.3L502.5 233.3C490 220.8 469.7 220.8 457.2 233.3C444.7 245.8 444.7 266.1 457.2 278.6L466.6 288L351.9 288L351.9 173.3L361.3 182.7C373.8 195.2 394.1 195.2 406.6 182.7C419.1 170.2 419.1 149.9 406.6 137.4L342.6 73.4z"/></svg>
`;
var collab_caret_righttv = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 256 512'><path d='M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z'/><path d='M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z'/></svg>
`;
var collab_repeat = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>
`;
var collab_thumbs_down_solid = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>
`;
var collab_thumbs_down = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M323.8 477.2c-38.2 10.9-78.1-11.2-89-49.4l-5.7-20c-3.7-13-10.4-25-19.5-35l-51.3-56.4c-8.9-9.8-8.2-25 1.6-33.9s25-8.2 33.9 1.6l51.3 56.4c14.1 15.5 24.4 34 30.1 54.1l5.7 20c3.6 12.7 16.9 20.1 29.7 16.5s20.1-16.9 16.5-29.7l-5.7-20c-5.7-19.9-14.7-38.7-26.6-55.5c-5.2-7.3-5.8-16.9-1.7-24.9s12.3-13 21.3-13L448 288c8.8 0 16-7.2 16-16c0-6.8-4.3-12.7-10.4-15c-7.4-2.8-13-9-14.9-16.7s.1-15.8 5.3-21.7c2.5-2.8 4-6.5 4-10.6c0-7.8-5.6-14.3-13-15.7c-8.2-1.6-15.1-7.3-18-15.2s-1.6-16.7 3.6-23.3c2.1-2.7 3.4-6.1 3.4-9.9c0-6.7-4.2-12.6-10.2-14.9c-11.5-4.5-17.7-16.9-14.4-28.8c.4-1.3 .6-2.8 .6-4.3c0-8.8-7.2-16-16-16H286.5c-12.6 0-25 3.7-35.5 10.7l-61.7 41.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l61.7-41.1c18.4-12.3 40-18.8 62.1-18.8H384c34.7 0 62.9 27.6 64 62c14.6 11.7 24 29.7 24 50c0 4.5-.5 8.8-1.3 13c15.4 11.7 25.3 30.2 25.3 51c0 6.5-1 12.8-2.8 18.7C504.8 238.3 512 254.3 512 272c0 35.3-28.6 64-64 64l-92.3 0c4.7 10.4 8.7 21.2 11.8 32.2l5.7 20c10.9 38.2-11.2 78.1-49.4 89zM32 384c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32z"/></svg>
`;
var collab_thumbs_up_solid = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
`;
var collab_thumbs_up = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
`;
var collab_edit_style = q`
    <svg width="14" height="14" xmlns='http://www.w3.org/2000/svg' fill="currentColor" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 32C0 14.3 14.3 0 32 0H160c17.7 0 32 14.3 32 32V416c0 53-43 96-96 96s-96-43-96-96V32zM223.6 425.9c.3-3.3 .4-6.6 .4-9.9V154l75.4-75.4c12.5-12.5 32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3L223.6 425.9zM182.8 512l192-192H480c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H182.8zM128 64H64v64h64V64zM64 192v64h64V192H64zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
`;
var collab_play = q`
    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
`;
var collab_pause = q`
    <svg width="14" height="14" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
`;
var collab_eye = q`
    <svg width="16" height="16" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>`;
var collab_eye_slash = q`
    <svg width="16" height="16" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`;
var collab_commit = q`
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H163.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z"/></svg>
`;
var collab_branch = q`
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>
`;
var collab_pull_request = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
`;
var collab_arrows_rotate = q`
        <svg width="16" height="16" viewBox="0 0 512 512" version="1.1" width="16" height="16"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
`;
var collab_circle_notch = q`
        <svg width="16" height="16" viewBox="0 0 512 512" version="1.1" width="16" height="16"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>`;
var collab_triangle_exclamation = q`
        <svg width="16" height="16" viewBox="0 0 512 512" version="1.1" width="16" height="16"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`;
var collab_circle_exclamation = q`
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;
var collab_gear = q`
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`;
var collab_spinner_clock = q`<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_d9Sa{transform-origin:center}.spinner_qQQY{animation:spinner_ZpfF 9s linear infinite}.spinner_pote{animation:spinner_ZpfF .75s linear infinite}@keyframes spinner_ZpfF{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect class="spinner_d9Sa spinner_qQQY" x="11" y="6" rx="1" width="2" height="7"/><rect class="spinner_d9Sa spinner_pote" x="11" y="11" rx="1" width="2" height="9"/></svg>`;
var collab_lock = q`<svg width="16" height="16" viewBox="0 0 512 512" version="1.1" width="16" height="16"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>`;
var collab_lock_open = q`<svg width="16" height="16" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-48z"/></svg>`;
var collab_image = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
var collab_unsplash = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 230.2V480H0V230.2H141.1V355.1H306.9V230.2zM306.9 32H141.1V156.9H306.9z"/></svg>`;
var collab_video = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>`;
var collab_code = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`;
var collab_ellipsis = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>`;
var collab_link = q`
        <svg width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>`;
var collab_border_top = q`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 12H16.01M12 8H12.01M12 12H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 12H8.01M4 8H4.01M4 12H4.01M4 16H4.01M4 20H4.01M8 20H8.01M20 8H20.01M20 12H20.01M20 16H20.01M20 20H20.01M20 4H4" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
var collab_border_left = q`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4H16.01M16 12H16.01M12 4H12.01M12 8H12.01M12 12H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 4H8.01M8 12H8.01M8 20H8.01M20 4H20.01M20 8H20.01M20 12H20.01M20 16H20.01M20 20H20.01M4 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
var collab_border_bottom = q`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20H4M16 4H16.01M16 12H16.01M12 4H12.01M12 8H12.01M12 12H12.01M12 16H12.01M8 4H8.01M8 12H8.01M4 4H4.01M4 8H4.01M4 12H4.01M4 16H4.01M20 4H20.01M20 8H20.01M20 12H20.01M20 16H20.01" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
var collab_border_right = q`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01195 4H8.00195M8.01195 12H8.00195M12.012 4H12.002M12.012 8H12.002M12.012 12H12.002M12.012 16H12.002M12.012 20H12.002M8.01195 20H8.00195M16.012 4H16.002M16.012 12H16.002M16.012 20H16.002M4.01195 4H4.00195M4.01195 8H4.00195M4.01195 12H4.00195M4.01195 16H4.00195M4.01195 20H4.00195M20.012 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
var collab_border_topLeft = q`
        <svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-border-top-left"><path d="M18 10H20V12H18V10M10 18H12V20H10V18M6 18H8V20H6V18M18 6H20V8H18V6M14 18H16V20H14V18M18 18H20V20H18V18M18 14H20V16H18V14M2 2H20V4H4V20H2V2Z" /></svg>`;
var collab_border_bottomLeft = q`
        <svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" ><path d="M10 4V2H12V4H10M18 12V10H20V12H18M18 16V14H20V16H18M6 4V2H8V4H6M18 8V6H20V8H18M18 4V2H20V4H18M14 4V2H16V4H14M2 20V2H4V18H20V20H2Z" /></svg>`;
var collab_border_bottomRight = q`
        <svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" ><path d="M4 12H2V10H4V12M12 4H10V2H12V4M16 4H14V2H16V4M4 16H2V14H4V16M8 4H6V2H8V4M4 4H2V2H4V4M4 8H2V6H4V8M20 20H2V18H18V2H20V20Z" /></svg>`;
var collab_border_topRight = q`
        <svg width="16" height="16" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" ><path d="M12 18V20H10V18H12M4 10V12H2V10H4M4 6V8H2V6H4M16 18V20H14V18H16M4 14V16H2V14H4M4 18V20H2V18H4M8 18V20H6V18H8M20 2V20H18V4H2V2H20Z" /></svg>`;
var collab_margin_top = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path>
<path fill="#444" d="M15 0h1v1h-1v-1z"></path>
<path fill="#444" d="M14 1h1v1h-1v-1z"></path>
<path fill="#444" d="M13 0h1v1h-1v-1z"></path>
<path fill="#444" d="M12 1h1v1h-1v-1z"></path>
<path fill="#444" d="M11 0h1v1h-1v-1z"></path>
<path fill="#444" d="M10 1h1v1h-1v-1z"></path>
<path fill="#444" d="M9 0h1v1h-1v-1z"></path>
<path fill="#444" d="M8 1h1v1h-1v-1z"></path>
<path fill="#444" d="M7 0h1v1h-1v-1z"></path>
<path fill="#444" d="M6 1h1v1h-1v-1z"></path>
<path fill="#444" d="M5 0h1v1h-1v-1z"></path>
<path fill="#444" d="M4 1h1v1h-1v-1z"></path>
<path fill="#444" d="M3 0h1v1h-1v-1z"></path>
<path fill="#444" d="M2 1h1v1h-1v-1z"></path>
<path fill="#444" d="M1 0h1v1h-1v-1z"></path>
<path fill="#444" d="M0 1h1v1h-1v-1z"></path>
</svg>`;
var collab_margin_left = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path>
<path fill="#444" d="M0 0h1v1h-1v-1z"></path>
<path fill="#444" d="M1 1h1v1h-1v-1z"></path>
<path fill="#444" d="M0 2h1v1h-1v-1z"></path>
<path fill="#444" d="M1 3h1v1h-1v-1z"></path>
<path fill="#444" d="M0 4h1v1h-1v-1z"></path>
<path fill="#444" d="M1 5h1v1h-1v-1z"></path>
<path fill="#444" d="M0 6h1v1h-1v-1z"></path>
<path fill="#444" d="M1 7h1v1h-1v-1z"></path>
<path fill="#444" d="M0 8h1v1h-1v-1z"></path>
<path fill="#444" d="M1 9h1v1h-1v-1z"></path>
<path fill="#444" d="M0 10h1v1h-1v-1z"></path>
<path fill="#444" d="M1 11h1v1h-1v-1z"></path>
<path fill="#444" d="M0 12h1v1h-1v-1z"></path>
<path fill="#444" d="M1 13h1v1h-1v-1z"></path>
<path fill="#444" d="M0 14h1v1h-1v-1z"></path>
<path fill="#444" d="M1 15h1v1h-1v-1z"></path>
</svg>`;
var collab_margin_bottom = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path>
<path fill="#444" d="M0 15h1v1h-1v-1z"></path>
<path fill="#444" d="M1 14h1v1h-1v-1z"></path>
<path fill="#444" d="M2 15h1v1h-1v-1z"></path>
<path fill="#444" d="M3 14h1v1h-1v-1z"></path>
<path fill="#444" d="M4 15h1v1h-1v-1z"></path>
<path fill="#444" d="M5 14h1v1h-1v-1z"></path>
<path fill="#444" d="M6 15h1v1h-1v-1z"></path>
<path fill="#444" d="M7 14h1v1h-1v-1z"></path>
<path fill="#444" d="M8 15h1v1h-1v-1z"></path>
<path fill="#444" d="M9 14h1v1h-1v-1z"></path>
<path fill="#444" d="M10 15h1v1h-1v-1z"></path>
<path fill="#444" d="M11 14h1v1h-1v-1z"></path>
<path fill="#444" d="M12 15h1v1h-1v-1z"></path>
<path fill="#444" d="M13 14h1v1h-1v-1z"></path>
<path fill="#444" d="M14 15h1v1h-1v-1z"></path>
<path fill="#444" d="M15 14h1v1h-1v-1z"></path>
</svg>`;
var collab_margin_right = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path>
<path fill="#444" d="M15 15h1v1h-1v-1z"></path>
<path fill="#444" d="M14 14h1v1h-1v-1z"></path>
<path fill="#444" d="M15 13h1v1h-1v-1z"></path>
<path fill="#444" d="M14 12h1v1h-1v-1z"></path>
<path fill="#444" d="M15 11h1v1h-1v-1z"></path>
<path fill="#444" d="M14 10h1v1h-1v-1z"></path>
<path fill="#444" d="M15 9h1v1h-1v-1z"></path>
<path fill="#444" d="M14 8h1v1h-1v-1z"></path>
<path fill="#444" d="M15 7h1v1h-1v-1z"></path>
<path fill="#444" d="M14 6h1v1h-1v-1z"></path>
<path fill="#444" d="M15 5h1v1h-1v-1z"></path>
<path fill="#444" d="M14 4h1v1h-1v-1z"></path>
<path fill="#444" d="M15 3h1v1h-1v-1z"></path>
<path fill="#444" d="M14 2h1v1h-1v-1z"></path>
<path fill="#444" d="M15 1h1v1h-1v-1z"></path>
<path fill="#444" d="M14 0h1v1h-1v-1z"></path>
</svg>`;
var collab_padding_top = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path>
<path fill="#444" d="M3 2h1v1h-1v-1z"></path>
<path fill="#444" d="M2 3h1v1h-1v-1z"></path>
<path fill="#444" d="M4 3h1v1h-1v-1z"></path>
<path fill="#444" d="M6 3h1v1h-1v-1z"></path>
<path fill="#444" d="M5 2h1v1h-1v-1z"></path>
<path fill="#444" d="M7 2h1v1h-1v-1z"></path>
<path fill="#444" d="M9 2h1v1h-1v-1z"></path>
<path fill="#444" d="M8 3h1v1h-1v-1z"></path>
<path fill="#444" d="M10 3h1v1h-1v-1z"></path>
<path fill="#444" d="M12 3h1v1h-1v-1z"></path>
<path fill="#444" d="M11 2h1v1h-1v-1z"></path>
<path fill="#444" d="M13 2h1v1h-1v-1z"></path>
</svg>`;
var collab_padding_left = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path>
<path fill="#444" d="M2 12h1v1h-1v-1z"></path>
<path fill="#444" d="M3 13h1v1h-1v-1z"></path>
<path fill="#444" d="M3 11h1v1h-1v-1z"></path>
<path fill="#444" d="M3 9h1v1h-1v-1z"></path>
<path fill="#444" d="M2 10h1v1h-1v-1z"></path>
<path fill="#444" d="M2 8h1v1h-1v-1z"></path>
<path fill="#444" d="M2 6h1v1h-1v-1z"></path>
<path fill="#444" d="M3 7h1v1h-1v-1z"></path>
<path fill="#444" d="M3 5h1v1h-1v-1z"></path>
<path fill="#444" d="M3 3h1v1h-1v-1z"></path>
<path fill="#444" d="M2 4h1v1h-1v-1z"></path>
<path fill="#444" d="M2 2h1v1h-1v-1z"></path>
</svg>`;
var collab_padding_bottom = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path>
<path fill="#444" d="M12 13h1v1h-1v-1z"></path>
<path fill="#444" d="M13 12h1v1h-1v-1z"></path>
<path fill="#444" d="M11 12h1v1h-1v-1z"></path>
<path fill="#444" d="M9 12h1v1h-1v-1z"></path>
<path fill="#444" d="M10 13h1v1h-1v-1z"></path>
<path fill="#444" d="M8 13h1v1h-1v-1z"></path>
<path fill="#444" d="M6 13h1v1h-1v-1z"></path>
<path fill="#444" d="M7 12h1v1h-1v-1z"></path>
<path fill="#444" d="M5 12h1v1h-1v-1z"></path>
<path fill="#444" d="M3 12h1v1h-1v-1z"></path>
<path fill="#444" d="M4 13h1v1h-1v-1z"></path>
<path fill="#444" d="M2 13h1v1h-1v-1z"></path>
</svg>`;
var collab_padding_right = q`
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path fill="#444" d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path>
<path fill="#444" d="M13 3h1v1h-1v-1z"></path>
<path fill="#444" d="M12 2h1v1h-1v-1z"></path>
<path fill="#444" d="M12 4h1v1h-1v-1z"></path>
<path fill="#444" d="M12 6h1v1h-1v-1z"></path>
<path fill="#444" d="M13 5h1v1h-1v-1z"></path>
<path fill="#444" d="M13 7h1v1h-1v-1z"></path>
<path fill="#444" d="M13 9h1v1h-1v-1z"></path>
<path fill="#444" d="M12 8h1v1h-1v-1z"></path>
<path fill="#444" d="M12 10h1v1h-1v-1z"></path>
<path fill="#444" d="M12 12h1v1h-1v-1z"></path>
<path fill="#444" d="M13 11h1v1h-1v-1z"></path>
<path fill="#444" d="M13 13h1v1h-1v-1z"></path>
</svg>`;

// virtual:/_102019_layer4Mdm
var AttachmentType;
(function(AttachmentType2) {
  AttachmentType2[AttachmentType2["MEDIA_PROFILE_PIC"] = 1] = "MEDIA_PROFILE_PIC";
  AttachmentType2[AttachmentType2["MEDIA_EVIDENCE"] = 2] = "MEDIA_EVIDENCE";
  AttachmentType2[AttachmentType2["MEDIA_GENERIC"] = 3] = "MEDIA_GENERIC";
  AttachmentType2[AttachmentType2["DOC_LEGAL_CONTRACT"] = 4] = "DOC_LEGAL_CONTRACT";
  AttachmentType2[AttachmentType2["DOC_HEALTH_REPORT"] = 5] = "DOC_HEALTH_REPORT";
  AttachmentType2[AttachmentType2["DOC_GENERIC"] = 6] = "DOC_GENERIC";
})(AttachmentType || (AttachmentType = {}));
var CompanyType;
(function(CompanyType2) {
  CompanyType2[CompanyType2["Empresa"] = 1] = "Empresa";
  CompanyType2[CompanyType2["Fornecedor"] = 2] = "Fornecedor";
  CompanyType2[CompanyType2["Empresa P\xFAblica"] = 3] = "Empresa P\xFAblica";
})(CompanyType || (CompanyType = {}));
var MdmType;
(function(MdmType2) {
  MdmType2[MdmType2["PessoaFisica"] = 10] = "PessoaFisica";
  MdmType2[MdmType2["PessoaJuridica"] = 11] = "PessoaJuridica";
  MdmType2[MdmType2["PET"] = 12] = "PET";
  MdmType2[MdmType2["Veiculo"] = 13] = "Veiculo";
  MdmType2[MdmType2["Imovel"] = 14] = "Imovel";
  MdmType2[MdmType2["Equipamento"] = 15] = "Equipamento";
  MdmType2[MdmType2["Conta"] = 16] = "Conta";
  MdmType2[MdmType2["Produto"] = 17] = "Produto";
  MdmType2[MdmType2["Servico"] = 18] = "Servico";
})(MdmType || (MdmType = {}));
var MdmAddresType;
(function(MdmAddresType2) {
  MdmAddresType2[MdmAddresType2["Comercial"] = 1] = "Comercial";
  MdmAddresType2[MdmAddresType2["Residencial"] = 2] = "Residencial";
  MdmAddresType2[MdmAddresType2["Cobranca"] = 3] = "Cobranca";
  MdmAddresType2[MdmAddresType2["Outro"] = 4] = "Outro";
})(MdmAddresType || (MdmAddresType = {}));

// virtual:/_102019_layer4MDMRelationship
var RelationshipTypes = {
  PF_OWNER: "R_PF_OWNER",
  PF_EMPLOYEE: "R_PF_EMPLOYEE",
  PF_FREELANCER: "R_PF_FREELANCER",
  PF_PARTNER: "R_PF_PARTNER",
  PF_CONTACT: "R_PF_CONTACT",
  PF_SUPPLIER: "R_PF_SUPPLIER",
  PF_CLIENT: "R_PF_CLIENT",
  PJ_MANAGED: "R_PJ_MANAGED",
  PJ_EMPLOYER: "R_PJ_EMPLOYER",
  PJ_CONTRACTOR: "R_PJ_CONTRACTOR",
  PJ_STRAT_PARTNER: "R_PJ_STRAT_PARTNER",
  PJ_CONTACT: "R_PJ_CONTACT",
  PJ_CLIENT: "R_PJ_CLIENT",
  PJ_SUPPLIER: "R_PJ_SUPPLIER",
  PF_FATHER_OF: "R_PF_FATHER_OF",
  PF_MOTHER_OF: "R_PF_MOTHER_OF",
  PF_PARENT_OF: "R_PF_PARENT_OF",
  PF_SPOUSE_OF: "R_PF_SPOUSE_OF",
  PF_RELATIVE_OF: "R_PF_RELATIVE_OF",
  PF_FRIEND_OF: "R_PF_FRIEND_OF",
  PF_CONTACT_FOR: "R_PF_CONTACT_FOR",
  PF_PROF_SERVED: "R_PF_PROF_SERVED",
  PJ_SERVICE_CONTRACTOR: "R_PJ_SERVICE_CONTRACTOR",
  PJ_LOGISTICS_CONTRACTOR: "R_PJ_LOGISTICS_CONTRACTOR",
  PJ_IS_PARENT_OF: "R_PJ_IS_PARENT_OF",
  PF_OWNER_OF_PET: "R_PF_OWNER_OF_PET",
  PF_SEC_RESPONSIBLE_FOR_PET: "R_PF_SEC_RESPONSIBLE_FOR_PET",
  PF_JOINT_CUSTODIAN: "R_PF_JOINT_CUSTODIAN",
  PF_PREVIOUS_OWNER: "R_PF_PREVIOUS_OWNER",
  PJ_PROVIDES_CUSTODY: "R_PJ_PROVIDES_CUSTODY",
  PJ_PROVIDES_TREATMENT: "R_PJ_PROVIDES_TREATMENT",
  PJ_SPONSOR_OF_PET: "R_PJ_SPONSOR_OF_PET",
  PJ_OWNER_OF_PET: "R_PJ_OWNER_OF_PET",
  PET_OWNED_BY: "R_PET_OWNED_BY",
  PET_SEC_RESPONSIBLE_IS: "R_PET_SEC_RESPONSIBLE_IS",
  PET_JOINT_CUSTODY_WITH: "R_PET_JOINT_CUSTODY_WITH",
  PET_PREVIOUSLY_OWNED_BY: "R_PET_PREVIOUSLY_OWNED_BY",
  PET_IN_CUSTODY_OF: "R_PET_IN_CUSTODY_OF",
  PET_TREATED_BY: "R_PET_TREATED_BY",
  PET_SPONSORED_BY: "R_PET_SPONSORED_BY",
  PET_OWNED_BY_PJ: "R_PET_OWNED_BY_PJ",
  PF_SELLS_PRODUCT: "R_PF_SELLS_PRODUCT",
  PJ_SELLS_PRODUCT: "R_PJ_SELLS_PRODUCT",
  PROD_PF_SOLD_BY: "R_PROD_PF_SOLD_BY",
  PROD_PJ_SOLD_BY: "R_PROD_PJ_SOLD_BY",
  PF_PROVIDES_SERVICE: "R_PF_PROVIDES_SERVICE",
  PJ_PROVIDES_SERVICE: "R_PJ_PROVIDES_SERVICE",
  SERV_PF_PROVIDED_BY: "R_SERV_PF_PROVIDED_BY",
  SERV_PJ_PROVIDED_BY: "R_SERV_PJ_PROVIDED_BY"
};
var inverseRelationshipMap = {
  [RelationshipTypes.PF_OWNER]: RelationshipTypes.PJ_MANAGED,
  [RelationshipTypes.PF_EMPLOYEE]: RelationshipTypes.PJ_EMPLOYER,
  [RelationshipTypes.PF_FREELANCER]: RelationshipTypes.PJ_CONTRACTOR,
  [RelationshipTypes.PF_PARTNER]: RelationshipTypes.PJ_STRAT_PARTNER,
  [RelationshipTypes.PF_CONTACT]: RelationshipTypes.PJ_CONTACT,
  [RelationshipTypes.PF_SUPPLIER]: RelationshipTypes.PJ_CLIENT,
  [RelationshipTypes.PF_CLIENT]: RelationshipTypes.PJ_SUPPLIER,
  [RelationshipTypes.PJ_MANAGED]: RelationshipTypes.PF_OWNER,
  [RelationshipTypes.PJ_EMPLOYER]: RelationshipTypes.PF_EMPLOYEE,
  [RelationshipTypes.PJ_CONTRACTOR]: RelationshipTypes.PF_FREELANCER,
  [RelationshipTypes.PJ_STRAT_PARTNER]: RelationshipTypes.PF_PARTNER,
  [RelationshipTypes.PJ_CONTACT]: RelationshipTypes.PF_CONTACT,
  [RelationshipTypes.PJ_SUPPLIER]: RelationshipTypes.PF_CLIENT,
  [RelationshipTypes.PJ_CLIENT]: RelationshipTypes.PF_SUPPLIER,
  [RelationshipTypes.PF_FATHER_OF]: RelationshipTypes.PF_PARENT_OF,
  [RelationshipTypes.PF_MOTHER_OF]: RelationshipTypes.PF_PARENT_OF,
  [RelationshipTypes.PF_PARENT_OF]: RelationshipTypes.PF_PARENT_OF,
  [RelationshipTypes.PF_SPOUSE_OF]: RelationshipTypes.PF_SPOUSE_OF,
  [RelationshipTypes.PF_RELATIVE_OF]: RelationshipTypes.PF_RELATIVE_OF,
  [RelationshipTypes.PF_FRIEND_OF]: RelationshipTypes.PF_FRIEND_OF,
  [RelationshipTypes.PF_CONTACT_FOR]: RelationshipTypes.PF_CONTACT_FOR,
  [RelationshipTypes.PF_PROF_SERVED]: RelationshipTypes.PF_PROF_SERVED,
  [RelationshipTypes.PJ_SERVICE_CONTRACTOR]: RelationshipTypes.PJ_SERVICE_CONTRACTOR,
  [RelationshipTypes.PJ_LOGISTICS_CONTRACTOR]: RelationshipTypes.PJ_LOGISTICS_CONTRACTOR,
  [RelationshipTypes.PJ_IS_PARENT_OF]: RelationshipTypes.PJ_IS_PARENT_OF,
  [RelationshipTypes.PF_OWNER_OF_PET]: RelationshipTypes.PET_OWNED_BY,
  [RelationshipTypes.PF_SEC_RESPONSIBLE_FOR_PET]: RelationshipTypes.PET_SEC_RESPONSIBLE_IS,
  [RelationshipTypes.PF_JOINT_CUSTODIAN]: RelationshipTypes.PET_JOINT_CUSTODY_WITH,
  [RelationshipTypes.PF_PREVIOUS_OWNER]: RelationshipTypes.PET_PREVIOUSLY_OWNED_BY,
  [RelationshipTypes.PET_OWNED_BY]: RelationshipTypes.PF_OWNER_OF_PET,
  [RelationshipTypes.PET_SEC_RESPONSIBLE_IS]: RelationshipTypes.PF_SEC_RESPONSIBLE_FOR_PET,
  [RelationshipTypes.PET_JOINT_CUSTODY_WITH]: RelationshipTypes.PF_JOINT_CUSTODIAN,
  [RelationshipTypes.PET_PREVIOUSLY_OWNED_BY]: RelationshipTypes.PF_PREVIOUS_OWNER,
  [RelationshipTypes.PJ_PROVIDES_CUSTODY]: RelationshipTypes.PET_IN_CUSTODY_OF,
  [RelationshipTypes.PJ_PROVIDES_TREATMENT]: RelationshipTypes.PET_TREATED_BY,
  [RelationshipTypes.PJ_SPONSOR_OF_PET]: RelationshipTypes.PET_SPONSORED_BY,
  [RelationshipTypes.PJ_OWNER_OF_PET]: RelationshipTypes.PET_OWNED_BY_PJ,
  [RelationshipTypes.PET_IN_CUSTODY_OF]: RelationshipTypes.PJ_PROVIDES_CUSTODY,
  [RelationshipTypes.PET_TREATED_BY]: RelationshipTypes.PJ_PROVIDES_TREATMENT,
  [RelationshipTypes.PET_SPONSORED_BY]: RelationshipTypes.PJ_SPONSOR_OF_PET,
  [RelationshipTypes.PET_OWNED_BY_PJ]: RelationshipTypes.PJ_OWNER_OF_PET,
  [RelationshipTypes.PROD_PF_SOLD_BY]: RelationshipTypes.PF_SELLS_PRODUCT,
  [RelationshipTypes.PF_SELLS_PRODUCT]: RelationshipTypes.PROD_PF_SOLD_BY,
  [RelationshipTypes.PROD_PJ_SOLD_BY]: RelationshipTypes.PJ_SELLS_PRODUCT,
  [RelationshipTypes.PJ_SELLS_PRODUCT]: RelationshipTypes.PROD_PJ_SOLD_BY,
  [RelationshipTypes.SERV_PF_PROVIDED_BY]: RelationshipTypes.PF_PROVIDES_SERVICE,
  [RelationshipTypes.PF_PROVIDES_SERVICE]: RelationshipTypes.SERV_PF_PROVIDED_BY,
  [RelationshipTypes.SERV_PJ_PROVIDED_BY]: RelationshipTypes.PJ_PROVIDES_SERVICE,
  [RelationshipTypes.PJ_PROVIDES_SERVICE]: RelationshipTypes.SERV_PJ_PROVIDED_BY
};
var ValidRelationships = {
  [MdmType.PessoaFisica]: {
    [MdmType.PessoaJuridica]: [
      RelationshipTypes.PF_OWNER,
      RelationshipTypes.PF_EMPLOYEE,
      RelationshipTypes.PF_FREELANCER,
      RelationshipTypes.PF_PARTNER,
      RelationshipTypes.PF_CONTACT,
      RelationshipTypes.PF_CLIENT,
      RelationshipTypes.PF_SUPPLIER
    ],
    [MdmType.PessoaFisica]: [
      RelationshipTypes.PF_FATHER_OF,
      RelationshipTypes.PF_MOTHER_OF,
      RelationshipTypes.PF_PARENT_OF,
      RelationshipTypes.PF_SPOUSE_OF,
      RelationshipTypes.PF_RELATIVE_OF,
      RelationshipTypes.PF_FRIEND_OF,
      RelationshipTypes.PF_CONTACT_FOR,
      RelationshipTypes.PF_PROF_SERVED
    ],
    [MdmType.PET]: [
      RelationshipTypes.PF_OWNER_OF_PET,
      RelationshipTypes.PF_SEC_RESPONSIBLE_FOR_PET,
      RelationshipTypes.PF_JOINT_CUSTODIAN,
      RelationshipTypes.PF_PREVIOUS_OWNER
    ],
    [MdmType.Produto]: [
      RelationshipTypes.PF_SELLS_PRODUCT
    ],
    [MdmType.Servico]: [
      RelationshipTypes.PF_PROVIDES_SERVICE
    ]
  },
  [MdmType.PessoaJuridica]: {
    [MdmType.PessoaFisica]: [
      RelationshipTypes.PJ_MANAGED,
      RelationshipTypes.PJ_EMPLOYER,
      RelationshipTypes.PJ_CONTRACTOR,
      RelationshipTypes.PJ_STRAT_PARTNER,
      RelationshipTypes.PJ_CONTACT,
      RelationshipTypes.PJ_CLIENT,
      RelationshipTypes.PJ_SUPPLIER
    ],
    [MdmType.PessoaJuridica]: [
      RelationshipTypes.PJ_SERVICE_CONTRACTOR,
      RelationshipTypes.PJ_LOGISTICS_CONTRACTOR,
      RelationshipTypes.PJ_IS_PARENT_OF
    ],
    [MdmType.PET]: [
      RelationshipTypes.PJ_PROVIDES_CUSTODY,
      RelationshipTypes.PJ_PROVIDES_TREATMENT,
      RelationshipTypes.PJ_SPONSOR_OF_PET,
      RelationshipTypes.PJ_OWNER_OF_PET
    ],
    [MdmType.Produto]: [
      RelationshipTypes.PJ_SELLS_PRODUCT
    ],
    [MdmType.Servico]: [
      RelationshipTypes.PJ_PROVIDES_SERVICE
    ]
  },
  [MdmType.PET]: {
    [MdmType.PessoaFisica]: [
      RelationshipTypes.PET_OWNED_BY,
      RelationshipTypes.PET_SEC_RESPONSIBLE_IS,
      RelationshipTypes.PET_JOINT_CUSTODY_WITH,
      RelationshipTypes.PET_PREVIOUSLY_OWNED_BY
    ],
    [MdmType.PessoaJuridica]: [
      RelationshipTypes.PET_IN_CUSTODY_OF,
      RelationshipTypes.PET_TREATED_BY,
      RelationshipTypes.PET_SPONSORED_BY,
      RelationshipTypes.PET_OWNED_BY_PJ
    ]
  },
  [MdmType.Produto]: {
    [MdmType.PessoaFisica]: [
      RelationshipTypes.PROD_PF_SOLD_BY
    ],
    [MdmType.PessoaJuridica]: [
      RelationshipTypes.PROD_PJ_SOLD_BY
    ]
  },
  [MdmType.Servico]: {
    [MdmType.PessoaFisica]: [
      RelationshipTypes.SERV_PF_PROVIDED_BY
    ],
    [MdmType.PessoaJuridica]: [
      RelationshipTypes.SERV_PJ_PROVIDED_BY
    ]
  },
  [MdmType.Veiculo]: {},
  [MdmType.Imovel]: {},
  [MdmType.Equipamento]: {},
  [MdmType.Conta]: {}
};
var RelationshipLabels;
(function(RelationshipLabels2) {
  RelationshipLabels2["PF_OWNER"] = "Propriet\xE1rio";
  RelationshipLabels2["PF_EMPLOYEE"] = "Funcion\xE1rio";
  RelationshipLabels2["PF_FREELANCER"] = "Prestador de Servi\xE7o";
  RelationshipLabels2["PF_PARTNER"] = "Parceiro Comercial";
  RelationshipLabels2["PF_CONTACT"] = "Contato";
  RelationshipLabels2["PF_SUPPLIER"] = "Fornecedor (Pessoa F\xEDsica)";
  RelationshipLabels2["PF_CLIENT"] = "Cliente (Pessoa F\xEDsica)";
  RelationshipLabels2["PJ_MANAGED"] = "Empresa Gerida";
  RelationshipLabels2["PJ_EMPLOYER"] = "Empregadora";
  RelationshipLabels2["PJ_CONTRACTOR"] = "Contratante de Freelancer";
  RelationshipLabels2["PJ_STRAT_PARTNER"] = "Parceira Estrat\xE9gica";
  RelationshipLabels2["PJ_CONTACT"] = "Contato (Empresa)";
  RelationshipLabels2["PJ_CLIENT"] = "Cliente (Empresa)";
  RelationshipLabels2["PJ_SUPPLIER"] = "Fornecedor (Empresa)";
  RelationshipLabels2["PF_FATHER_OF"] = "Pai";
  RelationshipLabels2["PF_MOTHER_OF"] = "M\xE3e";
  RelationshipLabels2["PF_PARENT_OF"] = "Respons\xE1vel / Parente";
  RelationshipLabels2["PF_SPOUSE_OF"] = "C\xF4njuge";
  RelationshipLabels2["PF_RELATIVE_OF"] = "Parente";
  RelationshipLabels2["PF_FRIEND_OF"] = "Amigo";
  RelationshipLabels2["PF_CONTACT_FOR"] = "Contato Pessoal";
  RelationshipLabels2["PF_PROF_SERVED"] = "Profissional Atendente";
  RelationshipLabels2["PJ_SERVICE_CONTRACTOR"] = "Contratante de Servi\xE7os";
  RelationshipLabels2["PJ_LOGISTICS_CONTRACTOR"] = "Contratante Log\xEDstica";
  RelationshipLabels2["PJ_IS_PARENT_OF"] = "Empresa Controladora";
  RelationshipLabels2["PF_OWNER_OF_PET"] = "Tutor / Dono";
  RelationshipLabels2["PF_SEC_RESPONSIBLE_FOR_PET"] = "Respons\xE1vel Secund\xE1rio";
  RelationshipLabels2["PF_JOINT_CUSTODIAN"] = "Cuidado Compartilhado";
  RelationshipLabels2["PF_PREVIOUS_OWNER"] = "Antigo Tutor";
  RelationshipLabels2["PJ_PROVIDES_CUSTODY"] = "Prestador de Hospedagem / Guarda";
  RelationshipLabels2["PJ_PROVIDES_TREATMENT"] = "Prestador de Tratamento / Atendimento";
  RelationshipLabels2["PJ_SPONSOR_OF_PET"] = "Patrocinador";
  RelationshipLabels2["PJ_OWNER_OF_PET"] = "Propriet\xE1rio (Empresa)";
  RelationshipLabels2["PET_OWNED_BY"] = "Animal de Estima\xE7\xE3o";
  RelationshipLabels2["PET_SEC_RESPONSIBLE_IS"] = "Animal com Respons\xE1vel Secund\xE1rio";
  RelationshipLabels2["PET_JOINT_CUSTODY_WITH"] = "Animal em Guarda Compartilhada";
  RelationshipLabels2["PET_PREVIOUSLY_OWNED_BY"] = "Animal com Antigo Tutor";
  RelationshipLabels2["PET_IN_CUSTODY_OF"] = "Animal em Hospedagem / Guarda";
  RelationshipLabels2["PET_TREATED_BY"] = "Animal em Tratamento / Atendimento";
  RelationshipLabels2["PET_SPONSORED_BY"] = "Animal Patrocinado";
  RelationshipLabels2["PET_OWNED_BY_PJ"] = "Animal da Empresa";
  RelationshipLabels2["PF_BUYS_PRODUCT"] = "Consumidor de Produto";
  RelationshipLabels2["PF_SELLS_PRODUCT"] = "Fornecedor de Produto";
  RelationshipLabels2["PF_CONSUMES_SERVICE"] = "Consumidor de Servi\xE7o";
  RelationshipLabels2["PF_PROVIDES_SERVICE"] = "Prestador de Servi\xE7o";
  RelationshipLabels2["PROD_PF_SOLD_BY"] = "Fornecedor de Produto";
  RelationshipLabels2["SERV_PF_PROVIDED_BY"] = "Prestador de Servi\xE7o";
  RelationshipLabels2["PJ_BUYS_PRODUCT"] = "Empresa Consumidora de Produto";
  RelationshipLabels2["PJ_SELLS_PRODUCT"] = "Empresa Fornecedora de Produto";
  RelationshipLabels2["PJ_CONSUMES_SERVICE"] = "Empresa Consumidora de Servi\xE7o";
  RelationshipLabels2["PJ_PROVIDES_SERVICE"] = "Empresa Prestadora de Servi\xE7o";
  RelationshipLabels2["PROD_PJ_SOLD_BY"] = "Empresa Fornecedora de Produto";
  RelationshipLabels2["SERV_PJ_PROVIDED_BY"] = "Empresa Prestadora de Servi\xE7o";
})(RelationshipLabels || (RelationshipLabels = {}));

// virtual:/_102009_petshop/organismAdminNav
var __decorate5 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var OrganismAdminNav = class OrganismAdminNav2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-admin-nav-102009{display:block}petshop--organism-admin-nav-102009 .admin-sidebar{height:100vh;width:220px;background:var(--bg-secondary-color-lighter);border-right:1px solid var(--grey-color);display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:var(--space-32) var(--space-16);font-family:var(--font-family-primary)}petshop--organism-admin-nav-102009 .sidebar__profile{display:flex;flex-direction:column;align-items:center;gap:var(--space-8);text-align:center;padding-bottom:var(--space-24);border-bottom:1px solid var(--grey-color);width:100%}petshop--organism-admin-nav-102009 .sidebar__profile .sidebar__avatar,petshop--organism-admin-nav-102009 .sidebar__profile svg{width:72px;height:72px;border-radius:50%;object-fit:cover;border:2px solid var(--grey-color)}petshop--organism-admin-nav-102009 .sidebar__profile .sidebar__username{color:var(--text-primary-color-darker);font-size:var(--font-size-16);font-weight:var(--font-weight-bold)}petshop--organism-admin-nav-102009 .sidebar__menu{flex:1;display:flex;flex-direction:column;width:100%;list-style:none;margin:var(--space-24) 0;padding:0;gap:var(--space-8)}petshop--organism-admin-nav-102009 .sidebar__menu .sidebar__link{display:block;padding:var(--space-8) var(--space-16);color:var(--text-primary-color);text-decoration:none;font-size:var(--font-size-16);border-radius:4px;transition:background var(--transition-normal)}petshop--organism-admin-nav-102009 .sidebar__menu .sidebar__link:hover,petshop--organism-admin-nav-102009 .sidebar__menu .sidebar__link:focus{background:var(--bg-primary-color-hover);color:var(--text-secondary-color-darker)}petshop--organism-admin-nav-102009 .sidebar__menu .sidebar__link[selected]{background:var(--bg-primary-color-focus);color:var(--text-secondary-color-darker);font-weight:var(--font-weight-bold)}petshop--organism-admin-nav-102009 .sidebar__footer{border-top:1px solid var(--grey-color);width:100%;padding-top:var(--space-16);text-align:center}petshop--organism-admin-nav-102009 .sidebar__footer .sidebar__logout{color:var(--error-color);text-decoration:none;font-weight:var(--font-weight-bold);transition:color var(--transition-normal)}petshop--organism-admin-nav-102009 .sidebar__footer .sidebar__logout:hover{color:var(--error-color-hover)}@media (max-width:768px){petshop--organism-admin-nav-102009 .sidebar__profile{display:none}petshop--organism-admin-nav-102009 .admin-sidebar{position:relative;width:100%;height:auto;flex-direction:row;justify-content:space-around;padding:var(--space-16)}petshop--organism-admin-nav-102009 .sidebar__menu{flex-direction:row;justify-content:center}petshop--organism-admin-nav-102009 .sidebar__footer{display:none}}`);
    this.selected = "dashboard";
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const mode = getState("ui.petshop.admin.menu.selected");
    this.selected = mode || "dashboard";
    const logged = getState("ui.petshop.login");
    this.avatarUrl = logged.details.attachments?.find((item) => item.type === AttachmentType.MEDIA_PROFILE_PIC)?.url || "";
    this.userName = logged.details.type === MdmType.PessoaFisica ? logged.details.registrationData.name : logged.details.registrationData.fantasyName;
  }
  render() {
    return Z`
      <nav class="admin-sidebar" id="petshop--admin-nav-102009">
        <div class="sidebar__profile">
          ${this.avatarUrl ? Z`
              <img
                src="${this.avatarUrl}"
                alt="Foto de perfil"
                class="sidebar__avatar"
              />

          ` : Z`
              ${collab_user}
          `}
        
          <span class="sidebar__username">Olá, ${this.userName}</span>
        </div>

        <ul class="sidebar__menu">
          <li>
            <a 
              href="/pageAdminDashboard" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === "dashboard"}
              @click=${() => this.onMenuClick("dashboard")}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminScheduling" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === "scheduling"}
              @click=${() => this.onMenuClick("scheduling")}
            >
              Agendamento
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminProduct" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === "product"}
              @click=${() => this.onMenuClick("product")}
            >
              Produto
            </a>
          </li>
          <li>
            <a 
              href="/pageAdminService" 
              class="sidebar__link sidebar__link"
              ?selected=${this.selected === "service"}
              @click=${() => this.onMenuClick("service")}
            >
              Serviço
            </a>
          </li>
  
        </ul>

        <div class="sidebar__footer">
          <a href="/pageLogin" class="sidebar__logout">Sair</a>
        </div>
      </nav>
    `;
  }
  onMenuClick(mode) {
    setState("ui.mdm.menu.selected", mode);
    this.selected = mode;
  }
};
__decorate5([
  w2()
], OrganismAdminNav.prototype, "selected", void 0);
__decorate5([
  U2()
], OrganismAdminNav.prototype, "avatarUrl", void 0);
__decorate5([
  U2()
], OrganismAdminNav.prototype, "userName", void 0);
OrganismAdminNav = __decorate5([
  e2("petshop--organism-admin-nav-102009")
], OrganismAdminNav);

// virtual:/_102019_layer1MDMIndexedDB
var MDM = class {
  constructor() {
    this.DB_NAME = "MdmDatabase";
    this.VERSION = 4;
    this.STORE_NAME = "mdm_data";
  }
  async upd(param) {
    return await this.saveMdmRecord(param);
  }
  async add(param) {
    return await this.saveMdmRecord(param);
  }
  async del(id) {
    return await this.deleteMdmRecord(id);
  }
  async list() {
    return await this.getAllMdmRecord();
  }
  async getById(id) {
    return await this.getMdmRecord(id);
  }
  async recordCount() {
    return await this.getRecordCount();
  }
  async listByIds(ids) {
    return await this.getRecordsByIds(ids);
  }
  async listByType(type) {
    return await this.getRecordsByType(type);
  }
  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.VERSION);
      request.onupgradeneeded = (event) => {
        const oldVersion = event.oldVersion;
        const newVersion = event.newVersion;
        const db = request.result;
        let store;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          store = db.createObjectStore(this.STORE_NAME, { keyPath: "id", autoIncrement: true });
        } else {
          store = request.transaction.objectStore(this.STORE_NAME);
        }
        if (!store.indexNames.contains("mdmType")) {
          store.createIndex("mdmType", "details.type", { unique: false });
        }
        if (oldVersion != newVersion) {
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  async saveMdmRecord(data) {
    const db = await this.openDB();
    const tx = db.transaction(this.STORE_NAME, "readwrite");
    const store = tx.objectStore(this.STORE_NAME);
    data.version = Date.now().toString();
    return new Promise((resolve, reject) => {
      let request;
      if (!data.id) {
        request = store.add(data);
      } else {
        request = store.put(data);
      }
      request.onsuccess = (event) => {
        const newId = event.target.result;
        if (!data.id) {
          data.id = newId;
        }
      };
      tx.oncomplete = () => resolve(data);
      tx.onerror = () => reject(tx.error);
    });
  }
  async getRecordCount() {
    const db = await this.openDB();
    const transaction = db.transaction(this.STORE_NAME, "readonly");
    const store = transaction.objectStore(this.STORE_NAME);
    const request = store.count();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || 0);
      request.onerror = () => reject(request.error);
    });
  }
  async getMdmRecord(id) {
    const db = await this.openDB();
    const tx = db.transaction(this.STORE_NAME, "readonly");
    const request = tx.objectStore(this.STORE_NAME).get(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }
  async getAllMdmRecord() {
    const db = await this.openDB();
    const tx = db.transaction(this.STORE_NAME, "readonly");
    const request = tx.objectStore(this.STORE_NAME).getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  async deleteMdmRecord(id) {
    const db = await this.openDB();
    const tx = db.transaction(this.STORE_NAME, "readwrite");
    tx.objectStore(this.STORE_NAME).delete(id);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }
  async getRecordsByIds(ids) {
    return new Promise((resolve, reject) => {
      const openRequest = indexedDB.open(this.DB_NAME, this.VERSION);
      openRequest.onerror = () => reject(openRequest.error);
      openRequest.onsuccess = () => {
        const db = openRequest.result;
        const tx = db.transaction(this.STORE_NAME, "readonly");
        const store = tx.objectStore(this.STORE_NAME);
        const results = [];
        if (ids.length === 0) {
          resolve([]);
          return;
        }
        let pending = ids.length;
        ids.forEach((id) => {
          const getReq = store.get(id);
          getReq.onsuccess = () => {
            results.push(getReq.result ?? null);
            if (--pending === 0)
              resolve(results);
          };
          getReq.onerror = () => {
            results.push(null);
            if (--pending === 0)
              resolve(results);
          };
        });
        tx.oncomplete = () => db.close();
      };
    });
  }
  async getRecordsByType(type) {
    const db = await this.openDB();
    const tx = db.transaction(this.STORE_NAME, "readonly");
    const index = tx.objectStore(this.STORE_NAME).index("mdmType");
    const request = index.getAll(type);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }
};
var mdmIndexedDB = new MDM();

// virtual:/_102019_layer1Context
function createContext(param) {
  if (!param.inDeveloped)
    throw new Error("Not implement api production");
  const ctx = {
    io: {
      mdm: mdmIndexedDB
    }
  };
  return ctx;
}

// virtual:/_102019_layer3AddMdm
async function addMdm(ctx, data) {
  return await ctx.io.mdm.add(data);
}

// virtual:/_102019_layer2AddMdm
async function addMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2AddMdm]:Into the data");
    ret.data = await addMdm(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3UpdateMdm
async function updateMdm(ctx, data) {
  return await ctx.io.mdm.upd(data);
}

// virtual:/_102019_layer2UpdateMdm
async function updateMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2UpdateMdm]:Into the data");
    ret.data = await updateMdm(ctx, data);
    return ret;
  } catch (e6) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3GetMdmId
async function getMdm(ctx, id) {
  return await ctx.io.mdm.getById(id);
}

// virtual:/_102019_layer2GetMdmId
async function getMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2GetMdmId]:Into in id");
    ret.data = await getMdm(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3DeleteMdm
async function deleteMdm(ctx, id) {
  return await ctx.io.mdm.del(id);
}

// virtual:/_102019_layer2DeleteMdm
async function delMdm(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2DeleteMdm]:Into in id");
    ret.data = await deleteMdm(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3GetListMdm
async function getListMdm(ctx) {
  return await ctx.io.mdm.list();
}

// virtual:/_102019_layer2GetListMdm
async function getListMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    const array = await getListMdm(ctx);
    let arrayRet = [];
    if (!data || !data.filter)
      arrayRet = array;
    else {
      const filter = data.filter.toLocaleLowerCase();
      array.forEach((mdm) => {
        let isAdd = false;
        if (mdm.id == data.filter)
          isAdd = true;
        if (mdm.details.type === 10 && comparePf(mdm, filter))
          isAdd = true;
        if (mdm.details.type === 11 && comparePJ(mdm, filter))
          isAdd = true;
        if (mdm.details.type === 12 && comparePet(mdm, filter))
          isAdd = true;
        if (mdm.details.type === 17 && compareProd(mdm, filter))
          isAdd = true;
        if (mdm.details.type === 18 && compareServ(mdm, filter))
          isAdd = true;
        if (isAdd)
          arrayRet.push(mdm);
      });
    }
    ret.data = arrayRet;
    return ret;
  } catch (e6) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e6.message;
    return ret;
  }
}
function comparePf(mdm, filter) {
  const item = mdm.details.registrationData;
  let compare = item.name.toLocaleLowerCase();
  return compare.indexOf(filter) >= 0;
}
function comparePJ(mdm, filter) {
  const item = mdm.details.registrationData;
  let compare = item.corporateName.toLocaleLowerCase();
  return compare.indexOf(filter) >= 0;
}
function comparePet(mdm, filter) {
  const item = mdm.details.registrationData;
  let compare = item.name.toLocaleLowerCase();
  return compare.indexOf(filter) >= 0;
}
function compareProd(mdm, filter) {
  const item = mdm.details.registrationData;
  let compare = item.name.toLocaleLowerCase();
  return compare.indexOf(filter) >= 0;
}
function compareServ(mdm, filter) {
  const item = mdm.details.registrationData;
  let compare = item.name.toLocaleLowerCase();
  return compare.indexOf(filter) >= 0;
}

// virtual:/_102019_layer3AddRelationshipMdm
async function addRelationship(ctx, data) {
  const mdmOri = await ctx.io.mdm.getById(data.mdmOri);
  const mdmDest = await ctx.io.mdm.getById(data.mdmDest);
  if (!mdmDest || !mdmOri)
    throw new Error(`[layer3AddRelationshipMdm] Error not found mdm (${data.mdmOri}, ${data.mdmDest}).`);
  const ori = {
    type: data.tpOri,
    relatedMdmId: data.mdmDest,
    details: "",
    additionalRelationshipData: ""
  };
  const dest = {
    type: data.tpDest,
    relatedMdmId: data.mdmOri,
    details: "",
    additionalRelationshipData: ""
  };
  let isFree = true;
  if (mdmOri.details.relationships) {
    mdmOri.details.relationships.forEach((r4) => {
      if (r4.relatedMdmId == ori.relatedMdmId && r4.type === ori.type)
        isFree = false;
    });
    if (isFree)
      mdmOri.details.relationships.push(ori);
  } else {
    mdmOri.details.relationships = [ori];
  }
  if (mdmDest.details.relationships) {
    mdmDest.details.relationships.forEach((r4) => {
      if (r4.relatedMdmId == ori.relatedMdmId && r4.type === ori.type)
        isFree = false;
    });
    if (isFree)
      mdmDest.details.relationships.push(dest);
  } else {
    mdmDest.details.relationships = [dest];
  }
  if (!isFree)
    throw new Error(`This relationship already exists (${data.mdmOri}, ${data.mdmDest} : ${ori.type} , ${dest.type})`);
  await ctx.io.mdm.upd(mdmOri);
  await ctx.io.mdm.upd(mdmDest);
  return true;
}

// virtual:/_102019_layer2AddRelationshipMdm
async function addRelationshipMdm(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2AddRelationshipMdm]:Into the data");
    ret.data = await addRelationship(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3DelRelationshipMdm
async function delRelationship(ctx, data) {
  const mdmOri = await ctx.io.mdm.getById(data.mdmOri);
  if (!mdmOri)
    throw new Error(`[layer3DelRelationshipMdm] Error not found mdm (${data.mdmOri}).`);
  if (!mdmOri.details.relationships || !mdmOri.details.relationships[data.indexRelationship])
    throw new Error(`[layer3DelRelationshipMdm] Error not found relationship mdm (${data.mdmOri} , idx:${data.indexRelationship}).`);
  const relation = mdmOri.details.relationships[data.indexRelationship];
  const mdmDest = await ctx.io.mdm.getById(relation.relatedMdmId);
  if (!mdmDest || !mdmOri)
    throw new Error(`[layer3DelRelationshipMdm] Error not found mdm dest ( ${relation.relatedMdmId}).`);
  const tpDest = inverseRelationshipMap[relation.type];
  if (!tpDest)
    throw new Error(`[layer3DelRelationshipMdm] Error not found relation dest ( ${relation.type}).`);
  if (!mdmDest.details.relationships)
    throw new Error(`[layer3DelRelationshipMdm] Error not found dest relationship mdm (${mdmDest.id}).`);
  let indexDest = -1;
  mdmDest.details.relationships.forEach((i4, idx) => {
    if (i4.relatedMdmId === mdmOri.id && i4.type === tpDest)
      indexDest = idx;
  });
  if (indexDest === -1 || !mdmDest.details.relationships[indexDest])
    throw new Error(`[layer3DelRelationshipMdm] Error not found dest relationship mdm (${mdmDest.id}, idx:${indexDest}).`);
  mdmOri.details.relationships.splice(data.indexRelationship, 1);
  mdmDest.details.relationships.splice(indexDest, 1);
  await ctx.io.mdm.upd(mdmOri);
  await ctx.io.mdm.upd(mdmDest);
  return true;
}

// virtual:/_102019_layer2DelRelationshipMdm
async function delRelationshipMdm(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2DelRelationshipMdm]:Into the data");
    ret.data = await delRelationship(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3GetLitstByIdsMdm
async function getListByIdsMdm(ctx, ids) {
  return await ctx.io.mdm.listByIds(ids);
}

// virtual:/_102019_layer2GetLitstByIdsMdm
async function getListByIdsMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.ids)
      throw new Error("[layer2GetLitstByIdsMdm]:Into in ids");
    ret.data = await getListByIdsMdm(ctx, data.ids);
    return ret;
  } catch (e6) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer3GetLitstByTypeMdm
async function getListByTypeMdm(ctx, type) {
  return await ctx.io.mdm.listByType(type);
}

// virtual:/_102019_layer2GetLitstByTypeMdm
async function getListByTypeMdm2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.type)
      throw new Error("[layer2GetLitstByTypeMdm]:Into in type");
    ret.data = await getListByTypeMdm(ctx, data.type);
    return ret;
  } catch (e6) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102019_layer1Exec
async function exec(param) {
  if (!param || !param.action) {
    return {
      statusCode: 400,
      ok: false,
      error: "Uninformed action"
    };
  }
  const ctx = createContext(param);
  const args = param.params || void 0;
  switch (param.action) {
    case "MDMAdd":
      return await addMdm2(ctx, args);
    case "MDMUpd":
      return await updateMdm2(ctx, args);
    case "MDMGetById":
      return await getMdm2(ctx, args);
    case "MDMDelById":
      return await delMdm(ctx, args);
    case "MDMGetList":
      return await getListMdm2(ctx, args);
    case "MDMAddRelationship":
      return await addRelationshipMdm(ctx, args);
    case "MDMDelRelationship":
      return await delRelationshipMdm(ctx, args);
    case "MDMGetListByIds":
      return await getListByIdsMdm2(ctx, args);
    case "MDMGetListByType":
      return await getListByTypeMdm2(ctx, args);
    default:
      return {
        statusCode: 400,
        ok: false,
        error: "Uninformed action"
      };
  }
}

// virtual:/_102009_petshop/organismAdminProductList
var __decorate6 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var organismAdminProductList = class organismAdminProductList2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-admin-product-list-102009 .organism-admin-product-list{padding:var(--space-24);background-color:var(--bg-primary-color)}petshop--organism-admin-product-list-102009 .filter-controls{display:flex;gap:var(--space-8);align-items:center;justify-content:space-between}petshop--organism-admin-product-list-102009 .filter-controls input{width:300px}petshop--organism-admin-product-list-102009 .filter-controls a{color:#ffffff}petshop--organism-admin-product-list-102009 th{cursor:pointer}petshop--organism-admin-product-list-102009 th:hover{background-color:var(--bg-secondary-color-hover)}@media (max-width:768px){petshop--organism-admin-product-list-102009 .organism-admin-product-list{padding:var(--space-16)}petshop--organism-admin-product-list-102009 .filter-controls{flex-direction:column;align-items:stretch}petshop--organism-admin-product-list-102009 .filter-controls input{width:100%}}`);
    this.filterText = "";
    this.sortColumn = "name";
    this.sortDirection = "asc";
    this.currentPage = 1;
    this.itemsPerPage = 5;
  }
  async firstUpdated() {
    const req = {
      action: "MDMGetListByType",
      inDeveloped: true,
      version: "1",
      params: { type: MdmType.Produto }
    };
    const response = await exec(req);
    if (response.ok) {
      this.mdmProducts = response.data.map((item) => {
        const item2 = item;
        return item2;
      });
    }
  }
  get filteredProducts() {
    if (!this.mdmProducts)
      return [];
    return this.mdmProducts.filter((mdmProducts) => mdmProducts.details.registrationData?.name.toLowerCase().includes(this.filterText.toLowerCase()) || mdmProducts.details.registrationData.descriptionShort.toLowerCase().includes(this.filterText.toLowerCase()));
  }
  get sortedProducts() {
    const sorted = [...this.filteredProducts];
    sorted.sort((a4, b4) => {
      let aVal = (a4.details?.registrationData)[this.sortColumn];
      let bVal = (b4.details?.registrationData)[this.sortColumn];
      if (typeof aVal === "string")
        aVal = aVal.toLowerCase();
      if (typeof bVal === "string")
        bVal = bVal.toLowerCase();
      if (aVal < bVal)
        return this.sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal)
        return this.sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }
  get totalPages() {
    return Math.ceil(this.sortedProducts.length / this.itemsPerPage);
  }
  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.sortedProducts.slice(start, end);
  }
  get visiblePages() {
    const pages = [];
    const start = Math.max(1, this.currentPage - 1);
    const end = Math.min(this.totalPages, this.currentPage + 1);
    for (let i4 = start; i4 <= end; i4++) {
      pages.push(i4);
    }
    return pages;
  }
  handleSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }
  handleEdit(e6, product) {
    e6.preventDefault();
    setState2("ui.petshop.admin.product.selected", product);
    if (this.linkToEdit)
      this.linkToEdit.click();
  }
  handlePrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  handleNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  handlePageClick(page) {
    this.currentPage = page;
  }
  render() {
    return Z`<div class="organism-admin-product-list" id="petshop--organism-admin-product-list-102009-1">
<h2 id="petshop--organism-admin-product-list-102009-2">Lista de Produtos</h2>
<div class="form-group" id="petshop--organism-admin-product-list-102009-3">
<label for="filter-name" id="petshop--organism-admin-product-list-102009-4">Filtrar por Nome ou Categoria:</label>
<div class="filter-controls" id="petshop--organism-admin-product-list-102009-29">
<input type="text" id="filter-name" placeholder="Digite o nome ou categoria" @input="${(e6) => this.filterText = e6.target.value}" id="petshop--organism-admin-product-list-102009-5">
<button class="btn btn-save" id="petshop--organism-admin-product-list-102009-30"><a href="/pageAdminAddProduct">Adicionar novo</a></button>
</div>
</div>
<table id="petshop--organism-admin-product-list-102009-6">
<thead id="petshop--organism-admin-product-list-102009-7">
<tr id="petshop--organism-admin-product-list-102009-8">
<th @click="${() => this.handleSort("name")}" id="petshop--organism-admin-product-list-102009-9">Nome ${this.sortColumn === "name" ? this.sortDirection === "asc" ? "\u2191" : "\u2193" : ""}</th>
<th @click="${() => this.handleSort("descriptionShort")}" id="petshop--organism-admin-product-list-102009-12">Descrição ${this.sortColumn === "descriptionShort" ? this.sortDirection === "asc" ? "\u2191" : "\u2193" : ""}</th>
<th id="petshop--organism-admin-product-list-102009-13">Ações</th>
</tr>
</thead>
<tbody id="petshop--organism-admin-product-list-102009-14">
${this.paginatedProducts.map((product) => Z`
<tr>
<td>${product.details.registrationData?.name}</td>
<td>${product.details.registrationData?.descriptionShort}</td>

<td>
<a href="#" @click="${(e6) => this.handleEdit(e6, product)}">Editar</button>
</td>
</tr>
`)}
</tbody>
</table>
<div class="pagination" id="petshop--organism-admin-product-list-102009-25">
<button @click="${this.handlePrevPage}" ?disabled="${this.currentPage === 1}" id="petshop--organism-admin-product-list-102009-26">Anterior</button>
${this.visiblePages.map((page) => Z`<button @click="${() => this.handlePageClick(page)}" class="${page === this.currentPage ? "active" : ""}">${page}</button>`)}
<button @click="${this.handleNextPage}" ?disabled="${this.currentPage === this.totalPages}" id="petshop--organism-admin-product-list-102009-28">Próxima</button>
    <a id="link-to-edit" style="display:none" href="/pageAdminEditProduct"></a>

</div>
</div>`;
  }
};
__decorate6([
  U2()
], organismAdminProductList.prototype, "mdmProducts", void 0);
__decorate6([
  U2()
], organismAdminProductList.prototype, "filterText", void 0);
__decorate6([
  U2()
], organismAdminProductList.prototype, "sortColumn", void 0);
__decorate6([
  U2()
], organismAdminProductList.prototype, "sortDirection", void 0);
__decorate6([
  U2()
], organismAdminProductList.prototype, "currentPage", void 0);
__decorate6([
  U2()
], organismAdminProductList.prototype, "itemsPerPage", void 0);
__decorate6([
  t5("#link-to-edit")
], organismAdminProductList.prototype, "linkToEdit", void 0);
organismAdminProductList = __decorate6([
  e2("petshop--organism-admin-product-list-102009")
], organismAdminProductList);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
