/// <mls shortName="pageLogin" project="102009" enhancement="_blank" folder="wwwroot/petshop" />
// virtual:lit
var t = globalThis;
var s = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var i = Symbol();
var e = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t5, s4, e5) {
    if (this._$cssResult$ = true, e5 !== i)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = s4;
  }
  get styleSheet() {
    let t5 = this.i;
    const i4 = this.t;
    if (s && void 0 === t5) {
      const s4 = void 0 !== i4 && 1 === i4.length;
      s4 && (t5 = e.get(i4)), void 0 === t5 && ((this.i = t5 = new CSSStyleSheet()).replaceSync(this.cssText), s4 && e.set(i4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, i);
var h = (i4, e5) => {
  if (s)
    i4.adoptedStyleSheets = e5.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const s4 of e5) {
      const e6 = document.createElement("style"), n4 = t.litNonce;
      void 0 !== n4 && e6.setAttribute("nonce", n4), e6.textContent = s4.cssText, i4.appendChild(e6);
    }
};
var c = s ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let s4 = "";
  for (const i4 of t6.cssRules)
    s4 += i4.cssText;
  return r(s4);
})(t5) : t5;
var { is: l, defineProperty: a, getOwnPropertyDescriptor: u, getOwnPropertyNames: d, getOwnPropertySymbols: f, getPrototypeOf: p } = Object;
var v = globalThis;
var y = v.trustedTypes;
var m = y ? y.emptyScript : "";
var b = v.reactiveElementPolyfillSupport;
var g = (t5, s4) => t5;
var w = { toAttribute(t5, s4) {
  switch (s4) {
    case Boolean:
      t5 = t5 ? m : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, s4) {
  let i4 = t5;
  switch (s4) {
    case Boolean:
      i4 = null !== t5;
      break;
    case Number:
      i4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t5);
      } catch (t6) {
        i4 = null;
      }
  }
  return i4;
} };
var _ = (t5, s4) => !l(t5, s4);
var S = { attribute: true, type: String, converter: w, reflect: false, useDefault: false, hasChanged: _ };
Symbol.metadata ??= Symbol("metadata"), v.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var $ = class extends HTMLElement {
  static addInitializer(t5) {
    this.o(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this.u && [...this.u.keys()];
  }
  static createProperty(t5, s4 = S) {
    if (s4.state && (s4.attribute = false), this.o(), this.prototype.hasOwnProperty(t5) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t5, s4), !s4.noAccessor) {
      const i4 = Symbol(), e5 = this.getPropertyDescriptor(t5, i4, s4);
      void 0 !== e5 && a(this.prototype, t5, e5);
    }
  }
  static getPropertyDescriptor(t5, s4, i4) {
    const { get: e5, set: n4 } = u(this.prototype, t5) ?? { get() {
      return this[s4];
    }, set(t6) {
      this[s4] = t6;
    } };
    return { get: e5, set(s5) {
      const r4 = e5?.call(this);
      n4?.call(this, s5), this.requestUpdate(t5, r4, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? S;
  }
  static o() {
    if (this.hasOwnProperty(g("elementProperties")))
      return;
    const t5 = p(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(g("finalized")))
      return;
    if (this.finalized = true, this.o(), this.hasOwnProperty(g("properties"))) {
      const t6 = this.properties, s4 = [...d(t6), ...f(t6)];
      for (const i4 of s4)
        this.createProperty(i4, t6[i4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const s4 = litPropertyMetadata.get(t5);
      if (void 0 !== s4)
        for (const [t6, i4] of s4)
          this.elementProperties.set(t6, i4);
    }
    this.u = /* @__PURE__ */ new Map();
    for (const [t6, s4] of this.elementProperties) {
      const i4 = this.p(t6, s4);
      void 0 !== i4 && this.u.set(i4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const s4 = [];
    if (Array.isArray(t5)) {
      const i4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of i4)
        s4.unshift(c(t6));
    } else
      void 0 !== t5 && s4.push(c(t5));
    return s4;
  }
  static p(t5, s4) {
    const i4 = s4.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this.v = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.m = null, this._();
  }
  _() {
    this.S = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this.$(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this.P ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this.P?.delete(t5);
  }
  $() {
    const t5 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i4 of s4.keys())
      this.hasOwnProperty(i4) && (t5.set(i4, this[i4]), delete this[i4]);
    t5.size > 0 && (this.v = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return h(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this.P?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this.P?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, s4, i4) {
    this._$AK(t5, i4);
  }
  C(t5, s4) {
    const i4 = this.constructor.elementProperties.get(t5), e5 = this.constructor.p(t5, i4);
    if (void 0 !== e5 && true === i4.reflect) {
      const n4 = (void 0 !== i4.converter?.toAttribute ? i4.converter : w).toAttribute(s4, i4.type);
      this.m = t5, null == n4 ? this.removeAttribute(e5) : this.setAttribute(e5, n4), this.m = null;
    }
  }
  _$AK(t5, s4) {
    const i4 = this.constructor, e5 = i4.u.get(t5);
    if (void 0 !== e5 && this.m !== e5) {
      const t6 = i4.getPropertyOptions(e5), n4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : w;
      this.m = e5;
      const r4 = n4.fromAttribute(s4, t6.type);
      this[e5] = r4 ?? this.T?.get(e5) ?? r4, this.m = null;
    }
  }
  requestUpdate(t5, s4, i4) {
    if (void 0 !== t5) {
      const e5 = this.constructor, n4 = this[t5];
      if (i4 ??= e5.getPropertyOptions(t5), !((i4.hasChanged ?? _)(n4, s4) || i4.useDefault && i4.reflect && n4 === this.T?.get(t5) && !this.hasAttribute(e5.p(t5, i4))))
        return;
      this.M(t5, s4, i4);
    }
    false === this.isUpdatePending && (this.S = this.k());
  }
  M(t5, s4, { useDefault: i4, reflect: e5, wrapped: n4 }, r4) {
    i4 && !(this.T ??= /* @__PURE__ */ new Map()).has(t5) && (this.T.set(t5, r4 ?? s4 ?? this[t5]), true !== n4 || void 0 !== r4) || (this._$AL.has(t5) || (this.hasUpdated || i4 || (s4 = void 0), this._$AL.set(t5, s4)), true === e5 && this.m !== t5 && (this.A ??= /* @__PURE__ */ new Set()).add(t5));
  }
  async k() {
    this.isUpdatePending = true;
    try {
      await this.S;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this.v) {
        for (const [t7, s5] of this.v)
          this[t7] = s5;
        this.v = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [s5, i4] of t6) {
          const { wrapped: t7 } = i4, e5 = this[s5];
          true !== t7 || this._$AL.has(s5) || void 0 === e5 || this.M(s5, void 0, i4, e5);
        }
    }
    let t5 = false;
    const s4 = this._$AL;
    try {
      t5 = this.shouldUpdate(s4), t5 ? (this.willUpdate(s4), this.P?.forEach((t6) => t6.hostUpdate?.()), this.update(s4)) : this.U();
    } catch (s5) {
      throw t5 = false, this.U(), s5;
    }
    t5 && this._$AE(s4);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this.P?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
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
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this.A &&= this.A.forEach((t6) => this.C(t6, this[t6])), this.U();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[g("elementProperties")] = /* @__PURE__ */ new Map(), $[g("finalized")] = /* @__PURE__ */ new Map(), b?.({ ReactiveElement: $ }), (v.reactiveElementVersions ??= []).push("2.1.1");
var T = globalThis;
var x = T.trustedTypes;
var E = x ? x.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
var C = "$lit$";
var P = `lit$${Math.random().toFixed(9).slice(2)}$`;
var M = "?" + P;
var A = `<${M}>`;
var k = document;
var O = () => k.createComment("");
var U = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var V = Array.isArray;
var R = (t5) => V(t5) || "function" == typeof t5?.[Symbol.iterator];
var N = "[ 	\n\f\r]";
var L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var z = /-->/g;
var j = />/g;
var D = RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var H = /'/g;
var I = /"/g;
var B = /^(?:script|style|textarea|title)$/i;
var W = (t5) => (s4, ...i4) => ({ _$litType$: t5, strings: s4, values: i4 });
var Z = W(1);
var q = W(2);
var F = W(3);
var G = Symbol.for("lit-noChange");
var J = Symbol.for("lit-nothing");
var K = /* @__PURE__ */ new WeakMap();
var Y = k.createTreeWalker(k, 129);
function Q(t5, s4) {
  if (!V(t5) || !t5.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== E ? E.createHTML(s4) : s4;
}
var X = (t5, s4) => {
  const i4 = t5.length - 1, e5 = [];
  let n4, r4 = 2 === s4 ? "<svg>" : 3 === s4 ? "<math>" : "", o3 = L;
  for (let s5 = 0; s5 < i4; s5++) {
    const i5 = t5[s5];
    let h4, c4, l4 = -1, a4 = 0;
    for (; a4 < i5.length && (o3.lastIndex = a4, c4 = o3.exec(i5), null !== c4); )
      a4 = o3.lastIndex, o3 === L ? "!--" === c4[1] ? o3 = z : void 0 !== c4[1] ? o3 = j : void 0 !== c4[2] ? (B.test(c4[2]) && (n4 = RegExp("</" + c4[2], "g")), o3 = D) : void 0 !== c4[3] && (o3 = D) : o3 === D ? ">" === c4[0] ? (o3 = n4 ?? L, l4 = -1) : void 0 === c4[1] ? l4 = -2 : (l4 = o3.lastIndex - c4[2].length, h4 = c4[1], o3 = void 0 === c4[3] ? D : '"' === c4[3] ? I : H) : o3 === I || o3 === H ? o3 = D : o3 === z || o3 === j ? o3 = L : (o3 = D, n4 = void 0);
    const u4 = o3 === D && t5[s5 + 1].startsWith("/>") ? " " : "";
    r4 += o3 === L ? i5 + A : l4 >= 0 ? (e5.push(h4), i5.slice(0, l4) + C + i5.slice(l4) + P + u4) : i5 + P + (-2 === l4 ? s5 : u4);
  }
  return [Q(t5, r4 + (t5[i4] || "<?>") + (2 === s4 ? "</svg>" : 3 === s4 ? "</math>" : "")), e5];
};
var tt = class {
  constructor({ strings: t5, _$litType$: s4 }, i4) {
    let e5;
    this.parts = [];
    let n4 = 0, r4 = 0;
    const o3 = t5.length - 1, h4 = this.parts, [c4, l4] = X(t5, s4);
    if (this.el = tt.createElement(c4, i4), Y.currentNode = this.el.content, 2 === s4 || 3 === s4) {
      const t6 = this.el.content.firstChild;
      t6.replaceWith(...t6.childNodes);
    }
    for (; null !== (e5 = Y.nextNode()) && h4.length < o3; ) {
      if (1 === e5.nodeType) {
        if (e5.hasAttributes())
          for (const t6 of e5.getAttributeNames())
            if (t6.endsWith(C)) {
              const s5 = l4[r4++], i5 = e5.getAttribute(t6).split(P), o4 = /([.?@])?(.*)/.exec(s5);
              h4.push({ type: 1, index: n4, name: o4[2], strings: i5, ctor: "." === o4[1] ? rt : "?" === o4[1] ? ot : "@" === o4[1] ? ht : nt }), e5.removeAttribute(t6);
            } else
              t6.startsWith(P) && (h4.push({ type: 6, index: n4 }), e5.removeAttribute(t6));
        if (B.test(e5.tagName)) {
          const t6 = e5.textContent.split(P), s5 = t6.length - 1;
          if (s5 > 0) {
            e5.textContent = x ? x.emptyScript : "";
            for (let i5 = 0; i5 < s5; i5++)
              e5.append(t6[i5], O()), Y.nextNode(), h4.push({ type: 2, index: ++n4 });
            e5.append(t6[s5], O());
          }
        }
      } else if (8 === e5.nodeType)
        if (e5.data === M)
          h4.push({ type: 2, index: n4 });
        else {
          let t6 = -1;
          for (; -1 !== (t6 = e5.data.indexOf(P, t6 + 1)); )
            h4.push({ type: 7, index: n4 }), t6 += P.length - 1;
        }
      n4++;
    }
  }
  static createElement(t5, s4) {
    const i4 = k.createElement("template");
    return i4.innerHTML = t5, i4;
  }
};
function st(t5, s4, i4 = t5, e5) {
  if (s4 === G)
    return s4;
  let n4 = void 0 !== e5 ? i4.N?.[e5] : i4.O;
  const r4 = U(s4) ? void 0 : s4._$litDirective$;
  return n4?.constructor !== r4 && (n4?._$AO?.(false), void 0 === r4 ? n4 = void 0 : (n4 = new r4(t5), n4._$AT(t5, i4, e5)), void 0 !== e5 ? (i4.N ??= [])[e5] = n4 : i4.O = n4), void 0 !== n4 && (s4 = st(t5, n4._$AS(t5, s4.values), n4, e5)), s4;
}
var it = class {
  constructor(t5, s4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = s4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  R(t5) {
    const { el: { content: s4 }, parts: i4 } = this._$AD, e5 = (t5?.creationScope ?? k).importNode(s4, true);
    Y.currentNode = e5;
    let n4 = Y.nextNode(), r4 = 0, o3 = 0, h4 = i4[0];
    for (; void 0 !== h4; ) {
      if (r4 === h4.index) {
        let s5;
        2 === h4.type ? s5 = new et(n4, n4.nextSibling, this, t5) : 1 === h4.type ? s5 = new h4.ctor(n4, h4.name, h4.strings, this, t5) : 6 === h4.type && (s5 = new ct(n4, this, t5)), this._$AV.push(s5), h4 = i4[++o3];
      }
      r4 !== h4?.index && (n4 = Y.nextNode(), r4++);
    }
    return Y.currentNode = k, e5;
  }
  V(t5) {
    let s4 = 0;
    for (const i4 of this._$AV)
      void 0 !== i4 && (void 0 !== i4.strings ? (i4._$AI(t5, i4, s4), s4 += i4.strings.length - 2) : i4._$AI(t5[s4])), s4++;
  }
};
var et = class t2 {
  get _$AU() {
    return this._$AM?._$AU ?? this.D;
  }
  constructor(t5, s4, i4, e5) {
    this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = t5, this._$AB = s4, this._$AM = i4, this.options = e5, this.D = e5?.isConnected ?? true;
  }
  get parentNode() {
    let t5 = this._$AA.parentNode;
    const s4 = this._$AM;
    return void 0 !== s4 && 11 === t5?.nodeType && (t5 = s4.parentNode), t5;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t5, s4 = this) {
    t5 = st(this, t5, s4), U(t5) ? t5 === J || null == t5 || "" === t5 ? (this._$AH !== J && this._$AR(), this._$AH = J) : t5 !== this._$AH && t5 !== G && this.L(t5) : void 0 !== t5._$litType$ ? this.j(t5) : void 0 !== t5.nodeType ? this.I(t5) : R(t5) ? this.H(t5) : this.L(t5);
  }
  B(t5) {
    return this._$AA.parentNode.insertBefore(t5, this._$AB);
  }
  I(t5) {
    this._$AH !== t5 && (this._$AR(), this._$AH = this.B(t5));
  }
  L(t5) {
    this._$AH !== J && U(this._$AH) ? this._$AA.nextSibling.data = t5 : this.I(k.createTextNode(t5)), this._$AH = t5;
  }
  j(t5) {
    const { values: s4, _$litType$: i4 } = t5, e5 = "number" == typeof i4 ? this._$AC(t5) : (void 0 === i4.el && (i4.el = tt.createElement(Q(i4.h, i4.h[0]), this.options)), i4);
    if (this._$AH?._$AD === e5)
      this._$AH.V(s4);
    else {
      const t6 = new it(e5, this), i5 = t6.R(this.options);
      t6.V(s4), this.I(i5), this._$AH = t6;
    }
  }
  _$AC(t5) {
    let s4 = K.get(t5.strings);
    return void 0 === s4 && K.set(t5.strings, s4 = new tt(t5)), s4;
  }
  H(s4) {
    V(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let e5, n4 = 0;
    for (const r4 of s4)
      n4 === i4.length ? i4.push(e5 = new t2(this.B(O()), this.B(O()), this, this.options)) : e5 = i4[n4], e5._$AI(r4), n4++;
    n4 < i4.length && (this._$AR(e5 && e5._$AB.nextSibling, n4), i4.length = n4);
  }
  _$AR(t5 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t5 !== this._$AB; ) {
      const s5 = t5.nextSibling;
      t5.remove(), t5 = s5;
    }
  }
  setConnected(t5) {
    void 0 === this._$AM && (this.D = t5, this._$AP?.(t5));
  }
};
var nt = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t5, s4, i4, e5, n4) {
    this.type = 1, this._$AH = J, this._$AN = void 0, this.element = t5, this.name = s4, this._$AM = e5, this.options = n4, i4.length > 2 || "" !== i4[0] || "" !== i4[1] ? (this._$AH = Array(i4.length - 1).fill(new String()), this.strings = i4) : this._$AH = J;
  }
  _$AI(t5, s4 = this, i4, e5) {
    const n4 = this.strings;
    let r4 = false;
    if (void 0 === n4)
      t5 = st(this, t5, s4, 0), r4 = !U(t5) || t5 !== this._$AH && t5 !== G, r4 && (this._$AH = t5);
    else {
      const e6 = t5;
      let o3, h4;
      for (t5 = n4[0], o3 = 0; o3 < n4.length - 1; o3++)
        h4 = st(this, e6[i4 + o3], s4, o3), h4 === G && (h4 = this._$AH[o3]), r4 ||= !U(h4) || h4 !== this._$AH[o3], h4 === J ? t5 = J : t5 !== J && (t5 += (h4 ?? "") + n4[o3 + 1]), this._$AH[o3] = h4;
    }
    r4 && !e5 && this.W(t5);
  }
  W(t5) {
    t5 === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
  }
};
var rt = class extends nt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  W(t5) {
    this.element[this.name] = t5 === J ? void 0 : t5;
  }
};
var ot = class extends nt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  W(t5) {
    this.element.toggleAttribute(this.name, !!t5 && t5 !== J);
  }
};
var ht = class extends nt {
  constructor(t5, s4, i4, e5, n4) {
    super(t5, s4, i4, e5, n4), this.type = 5;
  }
  _$AI(t5, s4 = this) {
    if ((t5 = st(this, t5, s4, 0) ?? J) === G)
      return;
    const i4 = this._$AH, e5 = t5 === J && i4 !== J || t5.capture !== i4.capture || t5.once !== i4.once || t5.passive !== i4.passive, n4 = t5 !== J && (i4 === J || e5);
    e5 && this.element.removeEventListener(this.name, this, i4), n4 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
  }
  handleEvent(t5) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
  }
};
var ct = class {
  constructor(t5, s4, i4) {
    this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = s4, this.options = i4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t5) {
    st(this, t5);
  }
};
var lt = { q: C, J: P, Z: M, F: 1, G: X, K: it, X: R, Y: st, tt: et, st: nt, it: ot, et: ht, ht: rt, ot: ct };
var at = T.litHtmlPolyfillSupport;
at?.(tt, et), (T.litHtmlVersions ??= []).push("3.3.1");
var ut = (t5, s4, i4) => {
  const e5 = i4?.renderBefore ?? s4;
  let n4 = e5._$litPart$;
  if (void 0 === n4) {
    const t6 = i4?.renderBefore ?? null;
    e5._$litPart$ = n4 = new et(s4.insertBefore(O(), t6), t6, void 0, i4 ?? {});
  }
  return n4._$AI(t5), n4;
};
var dt = globalThis;
var ft = class extends $ {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.rt = void 0;
  }
  createRenderRoot() {
    const t5 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t5.firstChild, t5;
  }
  update(t5) {
    const s4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this.rt = ut(s4, this.renderRoot, this.renderOptions);
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
var bt = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
var wt = (t5, s4) => void 0 === s4 ? void 0 !== t5?._$litType$ : t5?._$litType$ === s4;
var _t = (t5) => null != t5?._$litType$?.h;
var Tt = (t5) => void 0 === t5.strings;
var xt = () => document.createComment("");
var Et = (t5, s4, i4) => {
  const e5 = t5._$AA.parentNode, n4 = void 0 === s4 ? t5._$AB : s4._$AA;
  if (void 0 === i4) {
    const s5 = e5.insertBefore(xt(), n4), r4 = e5.insertBefore(xt(), n4);
    i4 = new mt(s5, r4, t5, t5.options);
  } else {
    const s5 = i4._$AB.nextSibling, r4 = i4._$AM, o3 = r4 !== t5;
    if (o3) {
      let s6;
      i4._$AQ?.(t5), i4._$AM = t5, void 0 !== i4._$AP && (s6 = t5._$AU) !== r4._$AU && i4._$AP(s6);
    }
    if (s5 !== n4 || o3) {
      let t6 = i4._$AA;
      for (; t6 !== s5; ) {
        const s6 = t6.nextSibling;
        e5.insertBefore(t6, n4), t6 = s6;
      }
    }
  }
  return i4;
};
var Ct = (t5, s4, i4 = t5) => (t5._$AI(s4, i4), t5);
var Pt = {};
var Mt = (t5, s4 = Pt) => t5._$AH = s4;
var At = (t5) => t5._$AH;
var kt = (t5) => {
  t5._$AR(), t5._$AA.remove();
};
var Ot = (t5) => {
  t5._$AR();
};
var Vt = (t5) => (...s4) => ({ _$litDirective$: t5, values: s4 });
var Rt = class {
  constructor(t5) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t5, s4, i4) {
    this.nt = t5, this._$AM = s4, this.ct = i4;
  }
  _$AS(t5, s4) {
    return this.update(t5, s4);
  }
  update(t5, s4) {
    return this.render(...s4);
  }
};
var Nt = (t5, s4) => {
  const i4 = t5._$AN;
  if (void 0 === i4)
    return false;
  for (const t6 of i4)
    t6._$AO?.(s4, false), Nt(t6, s4);
  return true;
};
var Lt = (t5) => {
  let s4, i4;
  do {
    if (void 0 === (s4 = t5._$AM))
      break;
    i4 = s4._$AN, i4.delete(t5), t5 = s4;
  } while (0 === i4?.size);
};
var zt = (t5) => {
  for (let s4; s4 = t5._$AM; t5 = s4) {
    let i4 = s4._$AN;
    if (void 0 === i4)
      s4._$AN = i4 = /* @__PURE__ */ new Set();
    else if (i4.has(t5))
      break;
    i4.add(t5), Ht(s4);
  }
};
function jt(t5) {
  void 0 !== this._$AN ? (Lt(this), this._$AM = t5, zt(this)) : this._$AM = t5;
}
function Dt(t5, s4 = false, i4 = 0) {
  const e5 = this._$AH, n4 = this._$AN;
  if (void 0 !== n4 && 0 !== n4.size)
    if (s4)
      if (Array.isArray(e5))
        for (let t6 = i4; t6 < e5.length; t6++)
          Nt(e5[t6], false), Lt(e5[t6]);
      else
        null != e5 && (Nt(e5, false), Lt(e5));
    else
      Nt(this, t5);
}
var Ht = (t5) => {
  2 == t5.type && (t5._$AP ??= Dt, t5._$AQ ??= jt);
};
var It = class extends Rt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t5, s4, i4) {
    super._$AT(t5, s4, i4), zt(this), this.isConnected = t5._$AU;
  }
  _$AO(t5, s4 = true) {
    t5 !== this.isConnected && (this.isConnected = t5, t5 ? this.reconnected?.() : this.disconnected?.()), s4 && (Nt(this, t5), Lt(this));
  }
  setValue(t5) {
    if (Tt(this.nt))
      this.nt._$AI(t5, this);
    else {
      const s4 = [...this.nt._$AH];
      s4[this.ct] = t5, this.nt._$AI(s4, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};
var Bt = class {
  constructor(t5) {
    this.lt = t5;
  }
  disconnect() {
    this.lt = void 0;
  }
  reconnect(t5) {
    this.lt = t5;
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
    this.ut ??= new Promise((t5) => this.dt = t5);
  }
  resume() {
    this.dt?.(), this.ut = this.dt = void 0;
  }
};
var Zt = class extends It {
  constructor() {
    super(...arguments), this.ft = new Bt(this), this.vt = new Wt();
  }
  render(t5, s4) {
    return G;
  }
  update(t5, [s4, i4]) {
    if (this.isConnected || this.disconnected(), s4 === this.yt)
      return G;
    this.yt = s4;
    let e5 = 0;
    const { ft: n4, vt: r4 } = this;
    return (async (t6, s5) => {
      for await (const i5 of t6)
        if (false === await s5(i5))
          return;
    })(s4, async (t6) => {
      for (; r4.get(); )
        await r4.get();
      const o3 = n4.deref();
      if (void 0 !== o3) {
        if (o3.yt !== s4)
          return false;
        void 0 !== i4 && (t6 = i4(t6, e5)), o3.commitValue(t6, e5), e5++;
      }
      return true;
    }), G;
  }
  commitValue(t5, s4) {
    this.setValue(t5);
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
    constructor(t5) {
      if (super(t5), 2 !== t5.type)
        throw Error("asyncAppend can only be used in child expressions");
    }
    update(t5, s4) {
      return this.rt = t5, super.update(t5, s4);
    }
    commitValue(t5, s4) {
      0 === s4 && Ot(this.rt);
      const i4 = Et(this.rt);
      Ct(i4, t5);
    }
  }
);
var Gt = (t5) => _t(t5) ? t5._$litType$.h : t5.strings;
var Jt = Vt(class extends Rt {
  constructor(t5) {
    super(t5), this.bt = /* @__PURE__ */ new WeakMap();
  }
  render(t5) {
    return [t5];
  }
  update(t5, [s4]) {
    const i4 = wt(this.gt) ? Gt(this.gt) : null, e5 = wt(s4) ? Gt(s4) : null;
    if (null !== i4 && (null === e5 || i4 !== e5)) {
      const s5 = At(t5).pop();
      let e6 = this.bt.get(i4);
      if (void 0 === e6) {
        const t6 = document.createDocumentFragment();
        e6 = ut(J, t6), e6.setConnected(false), this.bt.set(i4, e6);
      }
      Mt(e6, [s5]), Et(e6, void 0, s5);
    }
    if (null !== e5) {
      if (null === i4 || i4 !== e5) {
        const s5 = this.bt.get(e5);
        if (void 0 !== s5) {
          const i5 = At(s5).pop();
          Ot(t5), Et(t5, void 0, i5), Mt(t5, [i5]);
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
    constructor(t5) {
      if (super(t5), 1 !== t5.type || "class" !== t5.name || t5.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
    }
    update(t5, [s4]) {
      if (void 0 === this.wt) {
        this.wt = /* @__PURE__ */ new Set(), void 0 !== t5.strings && (this._t = new Set(t5.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
        for (const t6 in s4)
          s4[t6] && !this._t?.has(t6) && this.wt.add(t6);
        return this.render(s4);
      }
      const i4 = t5.element.classList;
      for (const t6 of this.wt)
        t6 in s4 || (i4.remove(t6), this.wt.delete(t6));
      for (const t6 in s4) {
        const e5 = !!s4[t6];
        e5 === this.wt.has(t6) || this._t?.has(t6) || (e5 ? (i4.add(t6), this.wt.add(t6)) : (i4.remove(t6), this.wt.delete(t6)));
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
  render(t5, s4) {
    return s4();
  }
  update(t5, [s4, i4]) {
    if (Array.isArray(s4)) {
      if (Array.isArray(this.St) && this.St.length === s4.length && s4.every((t6, s5) => t6 === this.St[s5]))
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
  render(t5, s4) {
    return this.key = t5, s4;
  }
  update(t5, [s4, i4]) {
    return s4 !== this.key && (Mt(t5), this.key = s4), i4;
  }
});
var es = Vt(
  class extends Rt {
    constructor(t5) {
      if (super(t5), 3 !== t5.type && 1 !== t5.type && 4 !== t5.type)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!Tt(t5))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(t5) {
      return t5;
    }
    update(t5, [s4]) {
      if (s4 === G || s4 === J)
        return s4;
      const i4 = t5.element, e5 = t5.name;
      if (3 === t5.type) {
        if (s4 === i4[e5])
          return G;
      } else if (4 === t5.type) {
        if (!!s4 === i4.hasAttribute(e5))
          return G;
      } else if (1 === t5.type && i4.getAttribute(e5) === s4 + "")
        return G;
      return Mt(t5), s4;
    }
  }
);
var cs = /* @__PURE__ */ new WeakMap();
var ls = Vt(class extends It {
  render(t5) {
    return J;
  }
  update(t5, [s4]) {
    const i4 = s4 !== this.lt;
    return i4 && void 0 !== this.lt && this.$t(void 0), (i4 || this.Tt !== this.xt) && (this.lt = s4, this.Et = t5.options?.host, this.$t(this.xt = t5.element)), J;
  }
  $t(t5) {
    if (this.isConnected || (t5 = void 0), "function" == typeof this.lt) {
      const s4 = this.Et ?? globalThis;
      let i4 = cs.get(s4);
      void 0 === i4 && (i4 = /* @__PURE__ */ new WeakMap(), cs.set(s4, i4)), void 0 !== i4.get(this.lt) && this.lt.call(this.Et, void 0), i4.set(this.lt, t5), void 0 !== t5 && this.lt.call(this.Et, t5);
    } else
      this.lt.value = t5;
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
var as = (t5, s4, i4) => {
  const e5 = /* @__PURE__ */ new Map();
  for (let n4 = s4; n4 <= i4; n4++)
    e5.set(t5[n4], n4);
  return e5;
};
var us = Vt(class extends Rt {
  constructor(t5) {
    if (super(t5), 2 !== t5.type)
      throw Error("repeat() can only be used in text expressions");
  }
  Ct(t5, s4, i4) {
    let e5;
    void 0 === i4 ? i4 = s4 : void 0 !== s4 && (e5 = s4);
    const n4 = [], r4 = [];
    let o3 = 0;
    for (const s5 of t5)
      n4[o3] = e5 ? e5(s5, o3) : o3, r4[o3] = i4(s5, o3), o3++;
    return { values: r4, keys: n4 };
  }
  render(t5, s4, i4) {
    return this.Ct(t5, s4, i4).values;
  }
  update(t5, [s4, i4, e5]) {
    const n4 = At(t5), { values: r4, keys: o3 } = this.Ct(s4, i4, e5);
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
        c4[p4] = Ct(n4[u4], r4[p4]), Et(t5, c4[p4 + 1], n4[u4]), u4++, p4--;
      else if (h4[d4] === o3[f4])
        c4[f4] = Ct(n4[d4], r4[f4]), Et(t5, n4[u4], n4[d4]), d4--, f4++;
      else if (void 0 === l4 && (l4 = as(o3, f4, p4), a4 = as(h4, u4, d4)), l4.has(h4[u4]))
        if (l4.has(h4[d4])) {
          const s5 = a4.get(o3[f4]), i5 = void 0 !== s5 ? n4[s5] : null;
          if (null === i5) {
            const s6 = Et(t5, n4[u4]);
            Ct(s6, r4[f4]), c4[f4] = s6;
          } else
            c4[f4] = Ct(i5, r4[f4]), Et(t5, n4[u4], i5), n4[s5] = null;
          f4++;
        } else
          kt(n4[d4]), d4--;
      else
        kt(n4[u4]), u4++;
    for (; f4 <= p4; ) {
      const s5 = Et(t5, c4[p4 + 1]);
      Ct(s5, r4[f4]), c4[f4++] = s5;
    }
    for (; u4 <= d4; ) {
      const t6 = n4[u4++];
      null !== t6 && kt(t6);
    }
    return this.Pt = o3, Mt(t5, c4), G;
  }
});
var ds = "important";
var fs = " !" + ds;
var ps = Vt(class extends Rt {
  constructor(t5) {
    if (super(t5), 1 !== t5.type || "style" !== t5.name || t5.strings?.length > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t5) {
    return Object.keys(t5).reduce((s4, i4) => {
      const e5 = t5[i4];
      return null == e5 ? s4 : s4 + `${i4 = i4.includes("-") ? i4 : i4.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${e5};`;
    }, "");
  }
  update(t5, [s4]) {
    const { style: i4 } = t5.element;
    if (void 0 === this.Mt)
      return this.Mt = new Set(Object.keys(s4)), this.render(s4);
    for (const t6 of this.Mt)
      null == s4[t6] && (this.Mt.delete(t6), t6.includes("-") ? i4.removeProperty(t6) : i4[t6] = null);
    for (const t6 in s4) {
      const e5 = s4[t6];
      if (null != e5) {
        this.Mt.add(t6);
        const s5 = "string" == typeof e5 && e5.endsWith(fs);
        t6.includes("-") || s5 ? i4.setProperty(t6, s5 ? e5.slice(0, -11) : e5, s5 ? ds : "") : i4[t6] = e5;
      }
    }
    return G;
  }
});
var vs = Vt(
  class extends Rt {
    constructor(t5) {
      if (super(t5), 2 !== t5.type)
        throw Error("templateContent can only be used in child bindings");
    }
    render(t5) {
      return this.At === t5 ? G : (this.At = t5, document.importNode(t5.content, true));
    }
  }
);
var ys = class extends Rt {
  constructor(t5) {
    if (super(t5), this.gt = J, 2 !== t5.type)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t5) {
    if (t5 === J || null == t5)
      return this.kt = void 0, this.gt = t5;
    if (t5 === G)
      return t5;
    if ("string" != typeof t5)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t5 === this.gt)
      return this.kt;
    this.gt = t5;
    const s4 = [t5];
    return s4.raw = s4, this.kt = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
  }
};
ys.directiveName = "unsafeHTML", ys.resultType = 1;
var ms = Vt(ys);
var bs = class extends ys {
};
bs.directiveName = "unsafeSVG", bs.resultType = 2;
var gs = Vt(bs);
var ws = (t5) => !bt(t5) && "function" == typeof t5.then;
var _s = 1073741823;
var Ss = class extends It {
  constructor() {
    super(...arguments), this.Ot = _s, this.Ut = [], this.ft = new Bt(this), this.vt = new Wt();
  }
  render(...t5) {
    return t5.find((t6) => !ws(t6)) ?? G;
  }
  update(t5, s4) {
    const i4 = this.Ut;
    let e5 = i4.length;
    this.Ut = s4;
    const n4 = this.ft, r4 = this.vt;
    this.isConnected || this.disconnected();
    for (let t6 = 0; t6 < s4.length && !(t6 > this.Ot); t6++) {
      const o3 = s4[t6];
      if (!ws(o3))
        return this.Ot = t6, o3;
      t6 < e5 && o3 === i4[t6] || (this.Ot = _s, e5 = 0, Promise.resolve(o3).then(async (t7) => {
        for (; r4.get(); )
          await r4.get();
        const s5 = n4.deref();
        if (void 0 !== s5) {
          const i5 = s5.Ut.indexOf(o3);
          i5 > -1 && i5 < s5.Ot && (s5.Ot = i5, s5.setValue(t7));
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
var Es = (t5) => {
  if (t5?.r === xs)
    return t5?._$litStatic$;
};
var Ms = /* @__PURE__ */ new Map();
var As = (t5) => (s4, ...i4) => {
  const e5 = i4.length;
  let n4, r4;
  const o3 = [], h4 = [];
  let c4, l4 = 0, a4 = false;
  for (; l4 < e5; ) {
    for (c4 = s4[l4]; l4 < e5 && void 0 !== (r4 = i4[l4], n4 = Es(r4)); )
      c4 += n4 + s4[++l4], a4 = true;
    l4 !== e5 && h4.push(r4), o3.push(c4), l4++;
  }
  if (l4 === e5 && o3.push(s4[e5]), a4) {
    const t6 = o3.join("$$lit$$");
    void 0 === (s4 = Ms.get(t6)) && (o3.raw = o3, Ms.set(t6, s4 = o3)), i4 = h4;
  }
  return t5(s4, ...i4);
};
var ks = As(Z);
var Os = As(q);
window.litDisableBundleWarning || console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/custom-element.js/+esm
var e2 = (e5) => (t5, n4) => {
  void 0 !== n4 ? n4.addInitializer(() => {
    customElements.define(e5, t5);
  }) : customElements.define(e5, t5);
};

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/property.js/+esm
var t3 = globalThis;
var e3 = t3.ShadowRoot && (void 0 === t3.ShadyCSS || t3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s2 = Symbol();
var i2 = /* @__PURE__ */ new WeakMap();
var r2 = class {
  constructor(t5, e5, i4) {
    if (this._$cssResult$ = true, i4 !== s2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e5;
  }
  get styleSheet() {
    let t5 = this.o;
    const s4 = this.t;
    if (e3 && void 0 === t5) {
      const e5 = void 0 !== s4 && 1 === s4.length;
      e5 && (t5 = i2.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && i2.set(s4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t5) => new r2("string" == typeof t5 ? t5 : t5 + "", void 0, s2);
var n2 = (s4, i4) => {
  if (e3)
    s4.adoptedStyleSheets = i4.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const e5 of i4) {
      const i5 = document.createElement("style"), r4 = t3.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e5.cssText, s4.appendChild(i5);
    }
};
var a2 = e3 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e5 = "";
  for (const s4 of t6.cssRules)
    e5 += s4.cssText;
  return o(e5);
})(t5) : t5;
var { is: h2, defineProperty: c2, getOwnPropertyDescriptor: l2, getOwnPropertyNames: p2, getOwnPropertySymbols: d2, getPrototypeOf: u2 } = Object;
var f2 = globalThis;
var y2 = f2.trustedTypes;
var E2 = y2 ? y2.emptyScript : "";
var _2 = f2.reactiveElementPolyfillSupport;
var m2 = (t5, e5) => t5;
var S2 = { toAttribute(t5, e5) {
  switch (e5) {
    case Boolean:
      t5 = t5 ? E2 : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, e5) {
  let s4 = t5;
  switch (e5) {
    case Boolean:
      s4 = null !== t5;
      break;
    case Number:
      s4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t5);
      } catch (t6) {
        s4 = null;
      }
  }
  return s4;
} };
var $2 = (t5, e5) => !h2(t5, e5);
var g2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
Symbol.metadata ??= Symbol("metadata"), f2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var P2 = class extends HTMLElement {
  static addInitializer(t5) {
    this._$Ei(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t5, e5 = g2) {
    if (e5.state && (e5.attribute = false), this._$Ei(), this.elementProperties.set(t5, e5), !e5.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t5, s4, e5);
      void 0 !== i4 && c2(this.prototype, t5, i4);
    }
  }
  static getPropertyDescriptor(t5, e5, s4) {
    const { get: i4, set: r4 } = l2(this.prototype, t5) ?? { get() {
      return this[e5];
    }, set(t6) {
      this[e5] = t6;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e6) {
      const o3 = i4?.call(this);
      r4.call(this, e6), this.requestUpdate(t5, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? g2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m2("elementProperties")))
      return;
    const t5 = u2(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m2("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m2("properties"))) {
      const t6 = this.properties, e5 = [...p2(t6), ...d2(t6)];
      for (const s4 of e5)
        this.createProperty(s4, t6[s4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const e5 = litPropertyMetadata.get(t5);
      if (void 0 !== e5)
        for (const [t6, s4] of e5)
          this.elementProperties.set(t6, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t6, e5] of this.elementProperties) {
      const s4 = this._$Eu(t6, e5);
      void 0 !== s4 && this._$Eh.set(s4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const e5 = [];
    if (Array.isArray(t5)) {
      const s4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of s4)
        e5.unshift(a2(t6));
    } else
      void 0 !== t5 && e5.push(a2(t5));
    return e5;
  }
  static _$Eu(t5, e5) {
    const s4 = e5.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this._$EO?.delete(t5);
  }
  _$E_() {
    const t5 = /* @__PURE__ */ new Map(), e5 = this.constructor.elementProperties;
    for (const s4 of e5.keys())
      this.hasOwnProperty(s4) && (t5.set(s4, this[s4]), delete this[s4]);
    t5.size > 0 && (this._$Ep = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n2(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, e5, s4) {
    this._$AK(t5, s4);
  }
  _$EC(t5, e5) {
    const s4 = this.constructor.elementProperties.get(t5), i4 = this.constructor._$Eu(t5, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S2).toAttribute(e5, s4.type);
      this._$Em = t5, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t5, e5) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t5);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t6 = s4.getPropertyOptions(i4), r4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : S2;
      this._$Em = i4, this[i4] = r4.fromAttribute(e5, t6.type), this._$Em = null;
    }
  }
  requestUpdate(t5, e5, s4) {
    if (void 0 !== t5) {
      if (s4 ??= this.constructor.getPropertyOptions(t5), !(s4.hasChanged ?? $2)(this[t5], e5))
        return;
      this.P(t5, e5, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t5, e5, s4) {
    this._$AL.has(t5) || this._$AL.set(t5, e5), true === s4.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t7, e6] of this._$Ep)
          this[t7] = e6;
        this._$Ep = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [e6, s4] of t6)
          true !== s4.wrapped || this._$AL.has(e6) || void 0 === this[e6] || this.P(e6, this[e6], s4);
    }
    let t5 = false;
    const e5 = this._$AL;
    try {
      t5 = this.shouldUpdate(e5), t5 ? (this.willUpdate(e5), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(e5)) : this._$EU();
    } catch (e6) {
      throw t5 = false, this._$EU(), e6;
    }
    t5 && this._$AE(e5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
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
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
P2.elementStyles = [], P2.shadowRootOptions = { mode: "open" }, P2[m2("elementProperties")] = /* @__PURE__ */ new Map(), P2[m2("finalized")] = /* @__PURE__ */ new Map(), _2?.({ ReactiveElement: P2 }), (f2.reactiveElementVersions ??= []).push("2.0.4");
var b2 = { attribute: true, type: String, converter: S2, reflect: false, hasChanged: $2 };
var v2 = (t5 = b2, e5, s4) => {
  const { kind: i4, metadata: r4 } = s4;
  let o3 = globalThis.litPropertyMetadata.get(r4);
  if (void 0 === o3 && globalThis.litPropertyMetadata.set(r4, o3 = /* @__PURE__ */ new Map()), o3.set(s4.name, t5), "accessor" === i4) {
    const { name: i5 } = s4;
    return { set(s5) {
      const r5 = e5.get.call(this);
      e5.set.call(this, s5), this.requestUpdate(i5, r5, t5);
    }, init(e6) {
      return void 0 !== e6 && this.P(i5, void 0, t5), e6;
    } };
  }
  if ("setter" === i4) {
    const { name: i5 } = s4;
    return function(s5) {
      const r5 = this[i5];
      e5.call(this, s5), this.requestUpdate(i5, r5, t5);
    };
  }
  throw Error("Unsupported decorator location: " + i4);
};
function w2(t5) {
  return (e5, s4) => "object" == typeof s4 ? v2(t5, e5, s4) : ((t6, e6, s5) => {
    const i4 = e6.hasOwnProperty(s5);
    return e6.constructor.createProperty(s5, i4 ? { ...t6, wrapped: true } : t6), i4 ? Object.getOwnPropertyDescriptor(e6, s5) : void 0;
  })(t5, e5, s4);
}

// virtual:https://cdn.jsdelivr.net/npm/@lit/reactive-element@2.0.4/decorators/state.js/+esm
var t4 = globalThis;
var e4 = t4.ShadowRoot && (void 0 === t4.ShadyCSS || t4.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s3 = Symbol();
var i3 = /* @__PURE__ */ new WeakMap();
var r3 = class {
  constructor(t5, e5, i4) {
    if (this._$cssResult$ = true, i4 !== s3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e5;
  }
  get styleSheet() {
    let t5 = this.o;
    const s4 = this.t;
    if (e4 && void 0 === t5) {
      const e5 = void 0 !== s4 && 1 === s4.length;
      e5 && (t5 = i3.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && i3.set(s4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
};
var o2 = (t5) => new r3("string" == typeof t5 ? t5 : t5 + "", void 0, s3);
var n3 = (s4, i4) => {
  if (e4)
    s4.adoptedStyleSheets = i4.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
  else
    for (const e5 of i4) {
      const i5 = document.createElement("style"), r4 = t4.litNonce;
      void 0 !== r4 && i5.setAttribute("nonce", r4), i5.textContent = e5.cssText, s4.appendChild(i5);
    }
};
var a3 = e4 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e5 = "";
  for (const s4 of t6.cssRules)
    e5 += s4.cssText;
  return o2(e5);
})(t5) : t5;
var { is: h3, defineProperty: c3, getOwnPropertyDescriptor: l3, getOwnPropertyNames: d3, getOwnPropertySymbols: p3, getPrototypeOf: u3 } = Object;
var f3 = globalThis;
var y3 = f3.trustedTypes;
var E3 = y3 ? y3.emptyScript : "";
var _3 = f3.reactiveElementPolyfillSupport;
var m3 = (t5, e5) => t5;
var S3 = { toAttribute(t5, e5) {
  switch (e5) {
    case Boolean:
      t5 = t5 ? E3 : null;
      break;
    case Object:
    case Array:
      t5 = null == t5 ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, e5) {
  let s4 = t5;
  switch (e5) {
    case Boolean:
      s4 = null !== t5;
      break;
    case Number:
      s4 = null === t5 ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s4 = JSON.parse(t5);
      } catch (t6) {
        s4 = null;
      }
  }
  return s4;
} };
var $3 = (t5, e5) => !h3(t5, e5);
var g3 = { attribute: true, type: String, converter: S3, reflect: false, hasChanged: $3 };
Symbol.metadata ??= Symbol("metadata"), f3.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b3 = class extends HTMLElement {
  static addInitializer(t5) {
    this._$Ei(), (this.l ??= []).push(t5);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t5, e5 = g3) {
    if (e5.state && (e5.attribute = false), this._$Ei(), this.elementProperties.set(t5, e5), !e5.noAccessor) {
      const s4 = Symbol(), i4 = this.getPropertyDescriptor(t5, s4, e5);
      void 0 !== i4 && c3(this.prototype, t5, i4);
    }
  }
  static getPropertyDescriptor(t5, e5, s4) {
    const { get: i4, set: r4 } = l3(this.prototype, t5) ?? { get() {
      return this[e5];
    }, set(t6) {
      this[e5] = t6;
    } };
    return { get() {
      return i4?.call(this);
    }, set(e6) {
      const o3 = i4?.call(this);
      r4.call(this, e6), this.requestUpdate(t5, o3, s4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) ?? g3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m3("elementProperties")))
      return;
    const t5 = u3(this);
    t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m3("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(m3("properties"))) {
      const t6 = this.properties, e5 = [...d3(t6), ...p3(t6)];
      for (const s4 of e5)
        this.createProperty(s4, t6[s4]);
    }
    const t5 = this[Symbol.metadata];
    if (null !== t5) {
      const e5 = litPropertyMetadata.get(t5);
      if (void 0 !== e5)
        for (const [t6, s4] of e5)
          this.elementProperties.set(t6, s4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t6, e5] of this.elementProperties) {
      const s4 = this._$Eu(t6, e5);
      void 0 !== s4 && this._$Eh.set(s4, t6);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t5) {
    const e5 = [];
    if (Array.isArray(t5)) {
      const s4 = new Set(t5.flat(1 / 0).reverse());
      for (const t6 of s4)
        e5.unshift(a3(t6));
    } else
      void 0 !== t5 && e5.push(a3(t5));
    return e5;
  }
  static _$Eu(t5, e5) {
    const s4 = e5.attribute;
    return false === s4 ? void 0 : "string" == typeof s4 ? s4 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
  }
  addController(t5) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
  }
  removeController(t5) {
    this._$EO?.delete(t5);
  }
  _$E_() {
    const t5 = /* @__PURE__ */ new Map(), e5 = this.constructor.elementProperties;
    for (const s4 of e5.keys())
      this.hasOwnProperty(s4) && (t5.set(s4, this[s4]), delete this[s4]);
    t5.size > 0 && (this._$Ep = t5);
  }
  createRenderRoot() {
    const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return n3(t5, this.constructor.elementStyles), t5;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t5) => t5.hostDisconnected?.());
  }
  attributeChangedCallback(t5, e5, s4) {
    this._$AK(t5, s4);
  }
  _$EC(t5, e5) {
    const s4 = this.constructor.elementProperties.get(t5), i4 = this.constructor._$Eu(t5, s4);
    if (void 0 !== i4 && true === s4.reflect) {
      const r4 = (void 0 !== s4.converter?.toAttribute ? s4.converter : S3).toAttribute(e5, s4.type);
      this._$Em = t5, null == r4 ? this.removeAttribute(i4) : this.setAttribute(i4, r4), this._$Em = null;
    }
  }
  _$AK(t5, e5) {
    const s4 = this.constructor, i4 = s4._$Eh.get(t5);
    if (void 0 !== i4 && this._$Em !== i4) {
      const t6 = s4.getPropertyOptions(i4), r4 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : S3;
      this._$Em = i4, this[i4] = r4.fromAttribute(e5, t6.type), this._$Em = null;
    }
  }
  requestUpdate(t5, e5, s4) {
    if (void 0 !== t5) {
      if (s4 ??= this.constructor.getPropertyOptions(t5), !(s4.hasChanged ?? $3)(this[t5], e5))
        return;
      this.P(t5, e5, s4);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t5, e5, s4) {
    this._$AL.has(t5) || this._$AL.set(t5, e5), true === s4.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return null != t5 && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t7, e6] of this._$Ep)
          this[t7] = e6;
        this._$Ep = void 0;
      }
      const t6 = this.constructor.elementProperties;
      if (t6.size > 0)
        for (const [e6, s4] of t6)
          true !== s4.wrapped || this._$AL.has(e6) || void 0 === this[e6] || this.P(e6, this[e6], s4);
    }
    let t5 = false;
    const e5 = this._$AL;
    try {
      t5 = this.shouldUpdate(e5), t5 ? (this.willUpdate(e5), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(e5)) : this._$EU();
    } catch (e6) {
      throw t5 = false, this._$EU(), e6;
    }
    t5 && this._$AE(e5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
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
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
};
b3.elementStyles = [], b3.shadowRootOptions = { mode: "open" }, b3[m3("elementProperties")] = /* @__PURE__ */ new Map(), b3[m3("finalized")] = /* @__PURE__ */ new Map(), _3?.({ ReactiveElement: b3 }), (f3.reactiveElementVersions ??= []).push("2.0.4");
var P3 = { attribute: true, type: String, converter: S3, reflect: false, hasChanged: $3 };
var v3 = (t5 = P3, e5, s4) => {
  const { kind: i4, metadata: r4 } = s4;
  let o3 = globalThis.litPropertyMetadata.get(r4);
  if (void 0 === o3 && globalThis.litPropertyMetadata.set(r4, o3 = /* @__PURE__ */ new Map()), o3.set(s4.name, t5), "accessor" === i4) {
    const { name: i5 } = s4;
    return { set(s5) {
      const r5 = e5.get.call(this);
      e5.set.call(this, s5), this.requestUpdate(i5, r5, t5);
    }, init(e6) {
      return void 0 !== e6 && this.P(i5, void 0, t5), e6;
    } };
  }
  if ("setter" === i4) {
    const { name: i5 } = s4;
    return function(s5) {
      const r5 = this[i5];
      e5.call(this, s5), this.requestUpdate(i5, r5, t5);
    };
  }
  throw Error("Unsupported decorator location: " + i4);
};
function w3(t5) {
  return (e5, s4) => "object" == typeof s4 ? v3(t5, e5, s4) : ((t6, e6, s5) => {
    const i4 = e6.hasOwnProperty(s5);
    return e6.constructor.createProperty(s5, i4 ? { ...t6, wrapped: true } : t6), i4 ? Object.getOwnPropertyDescriptor(e6, s5) : void 0;
  })(t5, e5, s4);
}
function U2(t5) {
  return w3({ ...t5, state: true, attribute: false });
}

// virtual:/_100554_collabState
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
  } catch (e5) {
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
    } catch (e5) {
      console.error("error on notify, key: " + nextKey, e5);
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
    } catch (e5) {
      console.info(e5);
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

// virtual:/_102009_petshop/pageLogin
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
var PageLogin102009 = class PageLogin1020092 extends CollabPageElement {
  initPage() {
  }
};
PageLogin102009 = __decorate3([
  e2("petshop--page-login-102009")
], PageLogin102009);

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

// virtual:/l2/_100554_collabState
function setState(key, value, systemChange) {
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
  } catch (e5) {
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
    } catch (e5) {
      console.error("error on notify, key: " + nextKey, e5);
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
  } catch (e5) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.ok = false;
    ret.statusCode = 500;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e5.message;
    return ret;
  }
}

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
  } catch (e5) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e5.message;
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
  } catch (e5) {
    ret.statusCode = 500;
    ret.ok = false;
    ret.error = e5.message;
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

// virtual:/_102009_petshop/organismSimulateLogin
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
var organismSimulateLogin = class organismSimulateLogin2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-simulate-login-102009 input[type="radio"]{margin-right:var(--space-8)}petshop--organism-simulate-login-102009 #hidden-link{display:none}petshop--organism-simulate-login-102009 .form-group-check{display:inline-flex;align-items:center;gap:.5rem}petshop--organism-simulate-login-102009 .form-group-check label{cursor:pointer}petshop--organism-simulate-login-102009 .form-group-check input{width:auto}petshop--organism-simulate-login-102009 .form-group.radio>div{display:flex;justify-content:flex-start;align-content:center}petshop--organism-simulate-login-102009 .form-group.radio>div input[type="radio"]{width:auto}petshop--organism-simulate-login-102009 .form-group.radio>div label{display:inline-block;margin-right:1rem;margin-bottom:0;cursor:pointer}`);
    this.users = [];
    this.enterprise = [];
    this.exists = false;
  }
  firstUpdated() {
    this.init();
  }
  render() {
    return Z`
        <div class="form-container">
            <h2>Simular Login</h2>
            <div class="form-group">
                <label for="user-select">Selecionar Usuário</label>
                <select id="user-select">
                    ${this.users.map((user, index) => Z`<option value="${index}">${user.details.registrationData.name}</option>`)}
                </select>
            </div>
            <div class="form-group">
                <label for="company-select"">Selecionar Empresa</label>
                <select id="company-select"">
                ${this.enterprise.map((ent, index) => Z`<option value="${index}" id="petshop--organism-simulate-login-102009-enterprise-${index}">${ent.details.registrationData.corporateName}</option>`)}
                </select>
            </div>
    
            <div class="form-group radio">
                <label>Tipo de Perfil</label>
                <div>
                    <input type="radio" id="admin-radio" name="profile" value="admin">
                    <label for="admin-radio">Admin</label>
                    <input type="radio" id="client-radio" name="profile" value="client">
                    <label for="client-radio">Cliente</label>
                </div>
            </div>
            <div class="form-actions">
                <button id="petshop--organism-simulate-login-102009-22" @click="${this.handleGenerateDatabase}">Gerar banco MDM</button>
                ${this.exists ? Z`<button class="btn btn-save"  @click="${this.handleSimulateClick}">Simular</button>` : ""}
            </div>
            <a id="hidden-link" style="display: none;"></a>
        </div>
`;
  }
  async init() {
    const databases = await indexedDB.databases();
    this.exists = databases.some((db) => db.name === "MdmDatabase");
    if (!this.exists) {
      return;
    }
    const req = {
      action: "MDMGetListByType",
      inDeveloped: true,
      version: "1",
      params: { type: MdmType.PessoaFisica }
    };
    const responseUser = await exec(req);
    req.params.type = MdmType.PessoaJuridica;
    const responseEnterprise = await exec(req);
    if (responseUser.ok)
      this.users = responseUser.data;
    if (responseEnterprise.ok)
      this.enterprise = responseEnterprise.data;
  }
  async handleGenerateDatabase() {
    await this.importIndexedDB("MdmDatabase");
    this.init();
  }
  async handleSimulateClick() {
    const userSelect = this.querySelector("#user-select");
    const companySelect = this.querySelector("#company-select");
    const profileRadios = this.querySelectorAll('input[name="profile"]:checked');
    const selectedProfile = profileRadios.length > 0 ? profileRadios[0].value : null;
    const hiddenLink = this.querySelector("#hidden-link");
    if (this.users[+userSelect.value])
      setState("ui.petshop.login", this.users[+userSelect.value]);
    if (this.enterprise[+companySelect.value])
      setState("ui.petshop.enterprise", this.enterprise[+companySelect.value]);
    if (selectedProfile === "client") {
      hiddenLink.href = "/pageHome";
      hiddenLink.click();
    } else if (selectedProfile === "admin") {
      hiddenLink.href = "/pageAdminDashboard";
      hiddenLink.click();
    }
  }
  async importIndexedDB(dbName) {
    try {
      await this.clearIndexedDB(dbName);
      await mdmIndexedDB.openDB();
      const importData = database;
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      const storeNames = Object.keys(importData);
      for (const storeName of storeNames) {
        if (!db.objectStoreNames.contains(storeName)) {
          console.warn(`Store "${storeName}" n\xE3o existe neste banco. Pulei a importa\xE7\xE3o.`);
          continue;
        }
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        for (const item of importData[storeName]) {
          store.put(item);
        }
        await new Promise((resolve, reject) => {
          tx.oncomplete = resolve;
          tx.onerror = reject;
        });
      }
      db.close();
    } catch (err) {
      console.info(err);
    }
  }
  async clearIndexedDB(databaseName) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(databaseName);
      let db;
      request.onsuccess = (event) => {
        db = event.target.result;
        if (!db || !db.objectStoreNames?.length) {
          resolve();
          return;
        }
        const tx = db.transaction(db.objectStoreNames, "readwrite");
        let cleared = 0;
        const totalStores = db.objectStoreNames.length;
        if (totalStores === 0) {
          db.close();
          resolve();
          return;
        }
        for (const storeName of db.objectStoreNames) {
          const store = tx.objectStore(storeName);
          const clearRequest = store.clear();
          clearRequest.onsuccess = () => {
            cleared++;
            if (cleared === totalStores) {
              db.close();
              resolve();
            }
          };
          clearRequest.onerror = (err) => {
            console.error(`Erro ao limpar store ${storeName}`, err);
            reject(err);
          };
        }
      };
      request.onerror = () => {
        console.warn(`Banco ${databaseName} n\xE3o existe ou n\xE3o p\xF4de ser aberto.`);
        reject(request.error);
      };
      request.onupgradeneeded = () => {
        console.warn(`Banco ${databaseName} n\xE3o existia.`);
        request.transaction?.abort();
        resolve();
      };
    });
  }
};
__decorate5([
  U2()
], organismSimulateLogin.prototype, "users", void 0);
__decorate5([
  U2()
], organismSimulateLogin.prototype, "enterprise", void 0);
__decorate5([
  U2()
], organismSimulateLogin.prototype, "exists", void 0);
organismSimulateLogin = __decorate5([
  e2("petshop--organism-simulate-login-102009")
], organismSimulateLogin);
var database = {
  "mdm_data": [
    {
      "details": {
        "registrationData": {
          "cpf": "43265194876",
          "name": "Guilherme Pereira",
          "rg": "45.663.683",
          "birthDate": "1995-05-09",
          "gender": "M"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 9,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 10,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:42:11.364Z",
            "url": "https://lh3.googleusercontent.com/a-/AOh14GjhEPN7UazL97l6qFIRIYUoLY-PNNPC93Zw4EVT=s96-c",
            "description": ""
          }
        ],
        "contactData": {
          "phone": [
            {
              "number": "16994532339",
              "type": "Celular"
            }
          ],
          "email": "guipereiraa0905@gmail.com"
        },
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Avenida Geralda Rocha Silva",
            "number": "2600",
            "neighborhood": "Parque Vicente Leporace I",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14407-032",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760643775068",
      "id": 1
    },
    {
      "details": {
        "registrationData": {
          "cpf": "58208533009",
          "name": "Guilherme Santiago",
          "birthDate": "1994-01-09",
          "gender": "M"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 11,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 12,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:43:18.467Z",
            "url": "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            "description": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Couto Magalh\xE3es",
            "number": "234",
            "neighborhood": "Centro",
            "complement": "at\xE9 2749/2750",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-020",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760644675644",
      "id": 2
    },
    {
      "details": {
        "registrationData": {
          "cpf": "42214306056",
          "name": "Lucas Mafra",
          "birthDate": "1989-12-23",
          "gender": "M"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 13,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 14,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:43:32.131Z",
            "url": "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
            "description": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Paraguai",
            "number": "2345",
            "neighborhood": "Jardim Consola\xE7\xE3o",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-030",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760644709107",
      "id": 3
    },
    {
      "details": {
        "registrationData": {
          "cpf": "80196597064",
          "name": "Gilberto Pereira",
          "birthDate": "1998-09-12",
          "gender": "M"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 15,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 16,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:43:46.669Z",
            "url": "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            "description": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Chile",
            "number": "135",
            "neighborhood": "Jardim Consola\xE7\xE3o",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-110",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760644745470",
      "id": 4
    },
    {
      "details": {
        "registrationData": {
          "cpf": "89375309029",
          "name": "Roberius",
          "birthDate": "1967-09-11",
          "gender": "M"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 17,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_EMPLOYEE",
            "relatedMdmId": 7,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 29,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 30,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 31,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 32,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 33,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:44:08.355Z",
            "url": "https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1248",
            "description": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Vila Peixe",
            "number": "143",
            "neighborhood": "Centro",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-029",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760644781384",
      "id": 5
    },
    {
      "details": {
        "registrationData": {
          "cpf": "14116399019",
          "name": "Maria Beatriz",
          "birthDate": "1999-06-09",
          "gender": "F"
        },
        "type": 10,
        "status": "A",
        "relationships": [
          {
            "type": "R_PF_OWNER_OF_PET",
            "relatedMdmId": 18,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_EMPLOYEE",
            "relatedMdmId": 7,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 34,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 35,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 36,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 37,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PF_PROVIDES_SERVICE",
            "relatedMdmId": 38,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:44:28.345Z",
            "url": "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            "description": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Franklin Martins",
            "number": "1223",
            "neighborhood": "Vila Champagnat",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-210",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ]
      },
      "version": "1760644821816",
      "id": 6
    },
    {
      "details": {
        "registrationData": {
          "cnpj": "31649763000191",
          "corporateName": "PetLove Com\xE9rcio de Produtos para Animais LTDA",
          "fantasyName": "PetLove LTDA"
        },
        "type": 11,
        "status": "A",
        "relationships": [
          {
            "type": "R_PJ_EMPLOYER",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          },
          {
            "type": "R_PJ_EMPLOYER",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Canad\xE1",
            "number": "",
            "neighborhood": "Jardim S\xE3o Vicente",
            "complement": "at\xE9 1358/1359",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-265",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ],
        "socialMedia": {
          "instagram": "instagram.com/petlove",
          "site": "www.petlove.com.br"
        },
        "contactData": {
          "phone": [
            {
              "number": "16997653423",
              "type": "Comercial"
            }
          ],
          "email": "petlove@gmail.com"
        },
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T20:03:26.877Z",
            "url": "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/514623/regular_12079039-1009545759108616-5272982253262459455-n.png",
            "description": ""
          }
        ]
      },
      "version": "1760645006887",
      "id": 7
    },
    {
      "details": {
        "registrationData": {
          "cnpj": "75095916000171",
          "corporateName": "Bicho Feliz Com\xE9rcio de Animais e Acess\xF3rios LTDA",
          "fantasyName": "Bicho Feliz Pet Shop"
        },
        "type": 11,
        "status": "A",
        "addresses": [
          {
            "type": 2,
            "description": "",
            "street": "Rua Franklin Martins",
            "number": "23",
            "neighborhood": "Vila Champagnat",
            "complement": "",
            "city": "Franca",
            "stateProvince": "SP",
            "zipCode": "14400-210",
            "country": "BR",
            "latitude": "",
            "longitude": ""
          }
        ],
        "socialMedia": {
          "site": "www.bichofeliz.com"
        },
        "contactData": {
          "phone": [
            {
              "number": "16998764532",
              "type": "Comercial"
            }
          ],
          "email": "bichofeliz@gmail.com"
        },
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T20:02:57.580Z",
            "url": "https://crasc.org.br/wp-content/uploads/2021/06/PET-STYLEPETSHOP.JPG.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644977593",
      "id": 8
    },
    {
      "details": {
        "registrationData": {
          "name": "Rex",
          "species": "dog",
          "breed": "Labrador Retriever"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 1,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:45:12.321Z",
            "url": "https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            "description": ""
          }
        ]
      },
      "version": "1760643912338",
      "id": 9
    },
    {
      "details": {
        "registrationData": {
          "name": "Mimi",
          "species": "cat",
          "breed": "Persa"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 1,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:45:34.005Z",
            "url": "https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686",
            "description": ""
          }
        ]
      },
      "version": "1760643934013",
      "id": 10
    },
    {
      "details": {
        "registrationData": {
          "name": "Thor",
          "species": "dog",
          "breed": "Husky Siberiano"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 2,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:45:52.880Z",
            "url": "https://plus.unsplash.com/premium_photo-1668208363137-7ebc4ce6b7b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            "description": ""
          }
        ]
      },
      "version": "1760643952887",
      "id": 11
    },
    {
      "details": {
        "registrationData": {
          "name": "Luna",
          "species": "cat",
          "breed": "Siam\xEAs"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 2,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:46:11.588Z",
            "url": "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
            "description": ""
          }
        ]
      },
      "version": "1760643971594",
      "id": 12
    },
    {
      "details": {
        "registrationData": {
          "name": "Nina",
          "species": "dog",
          "breed": "Shih Tzu"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 3,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:46:30.127Z",
            "url": "https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            "description": ""
          }
        ]
      },
      "version": "1760643990134",
      "id": 13
    },
    {
      "details": {
        "registrationData": {
          "name": "Toby",
          "species": "dog",
          "breed": "Golden Retriever"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 3,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:46:53.893Z",
            "url": "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=714",
            "description": ""
          }
        ]
      },
      "version": "1760644013897",
      "id": 14
    },
    {
      "details": {
        "registrationData": {
          "name": "Mel",
          "species": "cat",
          "breed": "SRD"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 4,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:47:14.773Z",
            "url": "https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            "description": ""
          }
        ]
      },
      "version": "1760644034785",
      "id": 15
    },
    {
      "details": {
        "registrationData": {
          "name": "Zeca",
          "species": "bird",
          "breed": "Calopsita"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 4,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:47:33.217Z",
            "url": "https://images.unsplash.com/photo-1517101724602-c257fe568157?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
            "description": ""
          }
        ]
      },
      "version": "1760644053225",
      "id": 16
    },
    {
      "details": {
        "registrationData": {
          "name": "Bob",
          "species": "dog",
          "breed": "Bulldog Franc\xEAs"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:47:52.235Z",
            "url": "https://plus.unsplash.com/premium_photo-1661962699932-1948aa1dde16?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            "description": ""
          }
        ]
      },
      "version": "1760644072249",
      "id": 17
    },
    {
      "details": {
        "registrationData": {
          "name": "Pipoca",
          "species": "others",
          "breed": "Hamster S\xEDrio"
        },
        "type": 12,
        "status": "A",
        "relationships": [
          {
            "type": "R_PET_OWNED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:48:29.463Z",
            "url": "https://plus.unsplash.com/premium_photo-1723541849364-fd6ce91ff283?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112",
            "description": ""
          }
        ]
      },
      "version": "1760644109480",
      "id": 18
    },
    {
      "details": {
        "registrationData": {
          "name": "Ra\xE7\xE3o Premium C\xE3es Adultos 15kg",
          "descriptionShort": "Ra\xE7\xE3o balanceada para c\xE3es adultos de m\xE9dio e grande porte."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:49:02.323Z",
            "url": "https://m.media-amazon.com/images/I/81Hwul2dlTL._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644142326",
      "id": 19
    },
    {
      "details": {
        "registrationData": {
          "name": "Areia Sanit\xE1ria Granulada 4kg",
          "descriptionShort": "Areia higi\xEAnica com alta absor\xE7\xE3o e controle de odor para gatos."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:49:33.088Z",
            "url": "https://m.media-amazon.com/images/I/81YZeTZ0iyS._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644173104",
      "id": 20
    },
    {
      "details": {
        "registrationData": {
          "name": "Coleira Antipulgas e Carrapatos",
          "descriptionShort": "Prote\xE7\xE3o de at\xE9 8 meses contra pulgas e carrapatos."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:49:55.767Z",
            "url": "https://m.media-amazon.com/images/I/61MjDg-SK1L._AC_SX300_SY300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644195779",
      "id": 21
    },
    {
      "details": {
        "registrationData": {
          "name": "Brinquedo Mordedor de Borracha",
          "descriptionShort": "Mordedor resistente e at\xF3xico para c\xE3es de todos os portes."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:50:14.597Z",
            "url": "https://m.media-amazon.com/images/I/41eieSCU53L._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644214603",
      "id": 22
    },
    {
      "details": {
        "registrationData": {
          "name": "Shampoo Neutro para C\xE3es e Gatos 500ml",
          "descriptionShort": "Limpeza suave e fragr\xE2ncia agrad\xE1vel para pelagens sens\xEDveis."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:50:36.540Z",
            "url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSLSoR00cXmT-3fSfTZyUShb3N5XlvH90dPvUhus9uEZQ9KEGLfzNWqm5eKW86r7fJy0Cg5kuvnAP1bvUPn7S5YFDsBzcXEFW8-6P433Pr4YoeehM4a8OnE96s",
            "description": ""
          }
        ]
      },
      "version": "1760644236544",
      "id": 23
    },
    {
      "details": {
        "registrationData": {
          "name": "Caminha Acolchoada Pet M\xE9dia",
          "descriptionShort": "Cama macia e lav\xE1vel, ideal para c\xE3es e gatos de porte m\xE9dio."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:50:57.293Z",
            "url": "https://m.media-amazon.com/images/I/61-N38IRFYL._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644257303",
      "id": 24
    },
    {
      "details": {
        "registrationData": {
          "name": "Coleira com Guia Refletiva",
          "descriptionShort": "Coleira ajust\xE1vel com guia resistente e fita refletiva para passeios noturnos."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:51:23.918Z",
            "url": "https://cdn.dooca.store/2372/products/ray-2025-101_620x620+fill_ffffff.jpg?v=1746555621",
            "description": ""
          }
        ]
      },
      "version": "1760644283929",
      "id": 25
    },
    {
      "details": {
        "registrationData": {
          "name": "Comedouro e Bebedouro Duplo Inox",
          "descriptionShort": "Tigela dupla em a\xE7o inoxid\xE1vel com suporte antiderrapante."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:51:46.812Z",
            "url": "https://m.media-amazon.com/images/I/51PZo+WN+SL._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644306821",
      "id": 26
    },
    {
      "details": {
        "registrationData": {
          "name": "Petisco Natural de Frango 80g",
          "descriptionShort": "Snack saud\xE1vel e sem corantes artificiais, feito com frango desidratado."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:52:06.701Z",
            "url": "https://m.media-amazon.com/images/I/71vl+YF63pL._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644326712",
      "id": 27
    },
    {
      "details": {
        "registrationData": {
          "name": "Casa Pl\xE1stica Pet Pequena",
          "descriptionShort": "Abrigo leve, ventilado e f\xE1cil de limpar para c\xE3es e gatos de pequeno porte."
        },
        "type": 17,
        "status": "A",
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:52:37.511Z",
            "url": "https://m.media-amazon.com/images/I/51D8pWresaL._AC_SY300_SX300_QL70_ML2_.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644357524",
      "id": 28
    },
    {
      "details": {
        "registrationData": {
          "name": "Banho Completo",
          "descriptionShort": "Banho com shampoo neutro, secagem e perfume suave.",
          "serviceCode": "SRV001"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:53:10.137Z",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9-OE8vh7feOVDRE1g9YqzLIZqmXV1jejiA&s",
            "description": ""
          }
        ]
      },
      "version": "1760644390153",
      "id": 29
    },
    {
      "details": {
        "registrationData": {
          "name": "Tosa Higi\xEAnica",
          "descriptionShort": "Tosa leve em regi\xF5es \xEDntimas e patas, mantendo o conforto do pet.",
          "serviceCode": "SRV002"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:53:33.277Z",
            "url": "https://jpimg.com.br/uploads/2024/01/veja-a-importancia-da-tosa-higienica-para-cachorros.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644413280",
      "id": 30
    },
    {
      "details": {
        "registrationData": {
          "name": "Tosa Completa",
          "descriptionShort": "Tosa completa conforme o padr\xE3o da ra\xE7a ou prefer\xEAncia do tutor.",
          "serviceCode": "SRV003"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:53:55.760Z",
            "url": "https://blog.ciclic.com.br/wp-content/uploads/2022/11/yorkshire-terrier-getting-procedure-groomer-salon-young-woman-white-tshirt-trimming-little-dog-yorkshire-terrier-puppy-getting-haircut-with-shaving-machine-scaled.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644435770",
      "id": 31
    },
    {
      "details": {
        "registrationData": {
          "name": "Hidrata\xE7\xE3o de Pelagem",
          "descriptionShort": "Tratamento com produtos espec\xEDficos para brilho e maciez dos pelos.",
          "serviceCode": "SRV004"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:54:20.473Z",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnkQ2JDQ0ryHIsDO0khOinnGWLYW7UG946Q&s",
            "description": ""
          }
        ]
      },
      "version": "1760644460480",
      "id": 32
    },
    {
      "details": {
        "registrationData": {
          "name": "Corte de Unhas",
          "descriptionShort": "Corte seguro de unhas para c\xE3es e gatos, com ferramentas esterilizadas.",
          "serviceCode": "SRV005"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 5,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:54:40.479Z",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_sJVKqT-GEwh0Ea695NDTAUP2icDNSkIbA&s",
            "description": ""
          }
        ]
      },
      "version": "1760644480487",
      "id": 33
    },
    {
      "details": {
        "registrationData": {
          "name": "Limpeza de Ouvidos",
          "descriptionShort": "Higieniza\xE7\xE3o com produtos espec\xEDficos para evitar infec\xE7\xF5es auriculares.",
          "serviceCode": "SRV006"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:55:04.344Z",
            "url": "https://www.patasdacasa.com.br/sites/default/files/noticias/2020/07/como-funciona-o-produto-para-limpar-ouvido-de-cachorro.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644504347",
      "id": 34
    },
    {
      "details": {
        "registrationData": {
          "name": "Consulta Veterin\xE1ria",
          "descriptionShort": "Atendimento cl\xEDnico completo com veterin\xE1rio parceiro do petshop.",
          "serviceCode": "SRV007"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:55:25.969Z",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjioBj54zQTScBgfb2Qj_RJh5sjkV2Gqm1Tg&s",
            "description": ""
          }
        ]
      },
      "version": "1760644525972",
      "id": 35
    },
    {
      "details": {
        "registrationData": {
          "name": "Banho Medicamentoso",
          "descriptionShort": "Banho terap\xEAutico com produtos prescritos pelo veterin\xE1rio.",
          "serviceCode": "SRV008"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:55:50.630Z",
            "url": "https://www.reabilitacaoveterinaria.com.br/imagens/categorias/banho-terapeutico-06.webp",
            "description": ""
          }
        ]
      },
      "version": "1760644550648",
      "id": 36
    },
    {
      "details": {
        "registrationData": {
          "name": "Hospedagem Pet",
          "descriptionShort": "Servi\xE7o de hotelzinho com monitoramento e alimenta\xE7\xE3o inclu\xEDda.",
          "serviceCode": "SRV009"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:56:16.912Z",
            "url": "https://s2-oglobo.glbimg.com/5_pGvFu0fNt7RWKRjwQOe5jA_Yk=/0x0:3600x2400/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/s/B/hzPjArR5mwNuNAnfBaOQ/pet-friendly-hotels-4-0.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644576924",
      "id": 37
    },
    {
      "details": {
        "registrationData": {
          "name": "Adestramento B\xE1sico",
          "descriptionShort": "Treinamento comportamental inicial com refor\xE7o positivo.",
          "serviceCode": "SRV010"
        },
        "type": 18,
        "status": "A",
        "relationships": [
          {
            "type": "R_SERV_PF_PROVIDED_BY",
            "relatedMdmId": 6,
            "details": "",
            "additionalRelationshipData": ""
          }
        ],
        "attachments": [
          {
            "type": 1,
            "uploadDate": "2025-10-16T19:56:39.849Z",
            "url": "https://www.petz.com.br/blog/wp-content/uploads/2021/05/tipos-de-adestramento-2.jpg",
            "description": ""
          }
        ]
      },
      "version": "1760644599866",
      "id": 38
    }
  ]
};
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
