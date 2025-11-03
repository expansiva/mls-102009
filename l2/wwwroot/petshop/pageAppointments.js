/// <mls shortName="pageAppointments" project="102009" enhancement="_blank" folder="wwwroot/petshop" />
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

// virtual:/_100554_collabPageElement
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

// virtual:/_102009_petshop/pageAppointments
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
var PageAppointments = class PageAppointments2 extends CollabPageElement {
  constructor() {
    super();
    if (this.loadStyle)
      this.loadStyle(`petshop--page-appointments-102009 {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg-primary-color);
}
petshop--page-appointments-102009 header {
  flex-shrink: 0;
}
petshop--page-appointments-102009 main {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: var(--space-32) 0 var(--space-32) 0;
  background: var(--bg-secondary-color);
}
petshop--page-appointments-102009 main petshop--organism-view-my-appointments-102009 {
  max-width: 978px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  petshop--page-appointments-102009 main {
    padding: var(--space-16) 0 var(--space-16) 0;
  }
}
petshop--page-appointments-102009 main #agendamento-core-main-1 {
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
}
petshop--page-appointments-102009 footer {
  flex-shrink: 0;
}
`);
  }
  initPage() {
  }
};
PageAppointments = __decorate3([
  e2("petshop--page-appointments-102009")
], PageAppointments);

// virtual:/l2/_100554_collabState
function getState2(key) {
  return globalState2.globalStateManagment.getState(key);
}
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

// virtual:/_102009_petshop/organismNav
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
var organismNav = class organismNav2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-nav-102009{background:var(--bg-primary-color);border-bottom:1px solid var(--grey-color);font-family:var(--font-family-primary)}petshop--organism-nav-102009 .nav-container{display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:0 auto;padding:var(--space-16) var(--space-24)}petshop--organism-nav-102009 .logo{display:flex;align-items:center}petshop--organism-nav-102009 .logo img{height:48px;width:48px;margin-right:var(--space-16)}petshop--organism-nav-102009 .logo .brand{font-size:var(--font-size-24);font-weight:var(--font-weight-bold);color:var(--text-primary-color);letter-spacing:1px}petshop--organism-nav-102009 nav{flex:1;display:flex;justify-content:center}petshop--organism-nav-102009 nav ul{display:flex;gap:var(--space-32);list-style:none;margin:0;padding:0}petshop--organism-nav-102009 nav ul li a{color:var(--text-primary-color-darker);font-size:var(--font-size-16);text-decoration:none;font-weight:var(--font-weight-normal);transition:color var(--transition-normal)}petshop--organism-nav-102009 nav ul li a:hover,petshop--organism-nav-102009 nav ul li a:focus{color:var(--text-secondary-color)}petshop--organism-nav-102009 .social{display:flex;align-items:center;gap:var(--space-16)}petshop--organism-nav-102009 .social span{white-space:nowrap}petshop--organism-nav-102009 .social .social-perfil{background:rgba(240,236,227,0.376);border:none;cursor:pointer;padding:var(--space-8);border-radius:50%;transition:background var(--transition-slow);display:flex}petshop--organism-nav-102009 .social .social-perfil:hover,petshop--organism-nav-102009 .social .social-perfil:focus{background:var(--bg-secondary-color-lighter)}petshop--organism-nav-102009 .social .social-perfil img{width:30px;height:30px;border-radius:50%}`);
    this.name = "";
    this.nameCompany = "";
    this.imgCompany = "";
  }
  firstUpdated() {
    this.init();
  }
  render() {
    return Z`<div class="nav-container" id="petshop--nav-102009-1">
          <a href="/" class="logo" aria-label="Página inicial" id="petshop--nav-102009-2">
            <img src="${this.imgCompany}" alt="Logo Petshop" id="petshop--nav-102009-3">
            <span class="brand" id="petshop--nav-102009-4">${this.nameCompany}</span>
          </a>
          <nav aria-label="Menu principal" id="petshop--nav-102009-5">
            <ul id="petshop--nav-102009-6">
              <li id="petshop--nav-102009-7">
                <a href="/pageHome" id="petshop--nav-102009-8">Home</a>
              </li>
              <li id="petshop--nav-102009-9">
                <a href="/pageAppointments" id="petshop--nav-102009-10">Agendamento</a>
              </li>
              <li id="petshop--nav-102009-11">
                <a href="/pageProduct" id="petshop--nav-102009-12">Produtos</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/pageContact" id="petshop--nav-102009-14">Contato</a>
              </li>
              <li id="petshop--nav-102009-13">
                <a href="/pageLogin" id="petshop--nav-102009-30">Sair</a>
              </li>
            </ul> 
            
          </nav>
          <div class="social">
            <span>Olá, ${this.name}</span>
            <a href="/pagePerfil" class="social-perfil">
                <img src="${this.img}" alt="Sair" id="petshop--admin-nav-102009-16">
              </a>
            </div>
        </div>
      `;
  }
  init() {
    this.mdmData = getState2("ui.petshop.login");
    this.mdmCompany = getState2("ui.petshop.enterprise");
    if (this.mdmData) {
      this.name = this.mdmData.details.registrationData.name;
      if (this.mdmData.details.attachments && this.mdmData.details.attachments.length > 0) {
        this.mdmData.details.attachments.forEach((i4) => {
          if (i4.type === AttachmentType.MEDIA_PROFILE_PIC) {
            this.img = i4.url;
          }
        });
      }
      if (this.img === "")
        this.img = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMHBob3RvfGVufDB8fHx8MTc1NDQxMTUzMXww&ixlib=rb-4.1.0&q=80&w=200";
    }
    if (this.mdmCompany) {
      this.nameCompany = this.mdmCompany.details.registrationData.fantasyName;
      if (this.mdmCompany.details.attachments && this.mdmCompany.details.attachments.length > 0) {
        this.mdmCompany.details.attachments.forEach((i4) => {
          if (i4.type === AttachmentType.MEDIA_PROFILE_PIC) {
            this.imgCompany = i4.url;
          }
        });
      }
      if (this.imgCompany === "")
        this.imgCompany = "https://images.unsplash.com/photo-1701500096456-28186c4a306d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2NDU4NjB8MHwxfHNlYXJjaHwxfHxwZXRzaG9wJTIwbG9nbyUyMGFuaW1hbCUyMHBhdyUyMGJsdWUlMjBncmVlbnxlbnwwfHx8fDE3NTQ0MTEzMTR8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080";
    }
  }
};
__decorate5([
  U2()
], organismNav.prototype, "mdmData", void 0);
__decorate5([
  U2()
], organismNav.prototype, "mdmCompany", void 0);
__decorate5([
  U2()
], organismNav.prototype, "name", void 0);
__decorate5([
  U2()
], organismNav.prototype, "img", void 0);
__decorate5([
  U2()
], organismNav.prototype, "nameCompany", void 0);
__decorate5([
  U2()
], organismNav.prototype, "imgCompany", void 0);
organismNav = __decorate5([
  e2("petshop--organism-nav-102009")
], organismNav);

// virtual:/_102009_layer1IndexedDb
var DB_NAME = "PetshopDB";
var VERSION = 5;
var STORE_NAME_SCHEDULING = "scheduling_data";
var STORE_NAME_SERVICEORDER = "service_order_data";
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, VERSION);
    request.onupgradeneeded = (event) => {
      migrationScheduling(event, request);
      migrationServiceOrder(event, request);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
function migrationScheduling(event, request) {
  const oldVersion = event.oldVersion;
  const newVersion = event.newVersion;
  const db = request.result;
  let store;
  if (!db.objectStoreNames.contains(STORE_NAME_SCHEDULING)) {
    store = db.createObjectStore(STORE_NAME_SCHEDULING, { keyPath: "id", autoIncrement: true });
  } else {
    store = request.transaction.objectStore(STORE_NAME_SCHEDULING);
  }
  if (oldVersion === 2) {
  }
  if (oldVersion === 3) {
  }
  if (oldVersion === 4) {
  }
  if (!store.indexNames.contains("clientMdmId")) {
    store.createIndex("clientMdmId", "details.tutor.clientMdmId", { unique: false });
  }
  if (!store.indexNames.contains("startDateTime")) {
    store.createIndex("startDateTime", "details.startDateTime", { unique: false });
  }
  if (oldVersion === 5) {
  }
}
function migrationServiceOrder(event, request) {
  const oldVersion = event.oldVersion;
  const newVersion = event.newVersion;
  const db = request.result;
  let store;
  if (!db.objectStoreNames.contains(STORE_NAME_SERVICEORDER)) {
    store = db.createObjectStore(STORE_NAME_SERVICEORDER, { keyPath: "id", autoIncrement: true });
  } else {
    store = request.transaction.objectStore(STORE_NAME_SERVICEORDER);
  }
  if (oldVersion != newVersion) {
  }
}

// virtual:/_102009_layer1SchedulingIndexedDB
var Scheduling = class {
  async upd(param) {
    return await this.saveSchedulingRecord(param);
  }
  async add(param) {
    return await this.saveSchedulingRecord(param);
  }
  async del(id) {
    return await this.deleteSchedulingRecord(id);
  }
  async list() {
    return await this.getAllSchedulingRecord();
  }
  async getById(id) {
    return await this.getSchedulingRecord(id);
  }
  async recordCount() {
    return await this.getRecordCount();
  }
  async listByClient(clientId) {
    return await this.getRecordsByClient(clientId);
  }
  async saveSchedulingRecord(data) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SCHEDULING, "readwrite");
    const store = tx.objectStore(STORE_NAME_SCHEDULING);
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
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME_SCHEDULING, "readonly");
    const store = transaction.objectStore(STORE_NAME_SCHEDULING);
    const request = store.count();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || 0);
      request.onerror = () => reject(request.error);
    });
  }
  async getSchedulingRecord(id) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
    const request = tx.objectStore(STORE_NAME_SCHEDULING).get(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }
  async getAllSchedulingRecord() {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
    const request = tx.objectStore(STORE_NAME_SCHEDULING).getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  async deleteSchedulingRecord(id) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SCHEDULING, "readwrite");
    tx.objectStore(STORE_NAME_SCHEDULING).delete(id);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }
  async getRecordsByClient(clientId) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SCHEDULING, "readonly");
    const index = tx.objectStore(STORE_NAME_SCHEDULING).index("clientMdmId");
    const request = index.getAll(clientId);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }
};
var schedulingIndexedDB = new Scheduling();

// virtual:/_102009_layer1ServiceOrderIndexedDB
var ServiceOrder = class {
  async upd(param) {
    return await this.saveServiceOrderRecord(param);
  }
  async add(param) {
    return await this.saveServiceOrderRecord(param);
  }
  async del(id) {
    return await this.deleteServiceOrderRecord(id);
  }
  async list() {
    return await this.getAllServiceOrderRecord();
  }
  async getById(id) {
    return await this.getServiceOrderRecord(id);
  }
  async saveServiceOrderRecord(data) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SERVICEORDER, "readwrite");
    const store = tx.objectStore(STORE_NAME_SERVICEORDER);
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
  async getServiceOrderRecord(id) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
    const request = tx.objectStore(STORE_NAME_SERVICEORDER).get(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }
  async getAllServiceOrderRecord() {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SERVICEORDER, "readonly");
    const request = tx.objectStore(STORE_NAME_SERVICEORDER).getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  async deleteServiceOrderRecord(id) {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME_SERVICEORDER, "readwrite");
    tx.objectStore(STORE_NAME_SERVICEORDER).delete(id);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }
};
var serviceOrderIndexedDB = new ServiceOrder();

// virtual:/_102009_layer1Context
function createContext(param) {
  if (!param.inDeveloped)
    throw new Error("Not implement api production");
  const ctx = {
    io: {
      petshopDB: {
        scheduling: schedulingIndexedDB,
        serviceOrder: serviceOrderIndexedDB
      }
    }
  };
  return ctx;
}

// virtual:/_102009_layer3AddScheduling
async function addScheduling(ctx, data) {
  return await ctx.io.petshopDB.scheduling.add(data);
}

// virtual:/_102009_layer2AddScheduling
async function addScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2AddScheduling]:Into the data");
    ret.data = await addScheduling(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3UpdScheduling
async function updScheduling(ctx, data) {
  return await ctx.io.petshopDB.scheduling.upd(data);
}

// virtual:/_102009_layer2UpdScheduling
async function updScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2UpdScheduling]:Into the data");
    ret.data = await updScheduling(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3DelScheduling
async function delScheduling(ctx, id) {
  return await ctx.io.petshopDB.scheduling.del(id);
}

// virtual:/_102009_layer2DelScheduling
async function delScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2DelScheduling]:Into the data");
    ret.data = await delScheduling(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3ListScheduling
async function listScheduling(ctx) {
  return await ctx.io.petshopDB.scheduling.list();
}

// virtual:/_102009_layer2ListScheduling
async function listScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    ret.data = await listScheduling(ctx);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3GetByIdScheduling
async function getByIdScheduling(ctx, id) {
  return await ctx.io.petshopDB.scheduling.getById(id);
}

// virtual:/_102009_layer2GetByIdScheduling
async function getByIdScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2GetByIdScheduling]:Into the data");
    ret.data = await getByIdScheduling(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3GetByClientScheduling
async function getByClientScheduling(ctx, clientId) {
  return await ctx.io.petshopDB.scheduling.listByClient(clientId);
}

// virtual:/_102009_layer2GetByClientScheduling
async function getByClientScheduling2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.clientId)
      throw new Error("[layer2GetByClientScheduling]:Into the data");
    ret.data = await getByClientScheduling(ctx, data.clientId);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3AddServiceOrder
async function addServiceOrder(ctx, data) {
  return await ctx.io.petshopDB.serviceOrder.add(data);
}

// virtual:/_102009_layer2AddServiceOrder
async function addServiceOrder2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2AddServiceOrder]:Into the data");
    ret.data = await addServiceOrder(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3UpdServiceOrder
async function updServiceOrder(ctx, data) {
  return await ctx.io.petshopDB.serviceOrder.upd(data);
}

// virtual:/_102009_layer2UpdServiceOrder
async function updServiceOrder2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data)
      throw new Error("[layer2UpdServiceOrder]:Into the data");
    ret.data = await updServiceOrder(ctx, data);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3DelServiceOrder
async function delServiceOrder(ctx, id) {
  return await ctx.io.petshopDB.serviceOrder.del(id);
}

// virtual:/_102009_layer2DelServiceOrder
async function delServiceOrder2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2DelServiceOrder]:Into the data");
    ret.data = await delServiceOrder(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3ListServiceOrder
async function listServiceOrder(ctx) {
  return await ctx.io.petshopDB.serviceOrder.list();
}

// virtual:/_102009_layer2ListServiceOrder
async function listServiceOrder2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    ret.data = await listServiceOrder(ctx);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer3GetByIdServiceOrder
async function getByIdServiceOrder(ctx, id) {
  const record = await ctx.io.petshopDB.serviceOrder.getById(id);
  if (record.data) {
  }
  return record;
}

// virtual:/_102009_layer2GetByIdServiceOrder
async function getByIdServiceOrder2(ctx, data) {
  const ret = {
    statusCode: 200,
    ok: true,
    data: void 0,
    error: void 0
  };
  try {
    if (!data || !data.id)
      throw new Error("[layer2GetByIdServiceOrder]:Into the data");
    ret.data = await getByIdServiceOrder(ctx, data.id);
    return ret;
  } catch (e6) {
    ret.statusCode = 400;
    ret.ok = false;
    ret.error = e6.message;
    return ret;
  }
}

// virtual:/_102009_layer1Exec
async function petshopExec(param) {
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
    case "SchedulingAdd":
      return await addScheduling2(ctx, args);
    case "SchedulingUpd":
      return await updScheduling2(ctx, args);
    case "SchedulingDel":
      return await delScheduling2(ctx, args);
    case "SchedulingList":
      return await listScheduling2(ctx, args);
    case "SchedulingGetById":
      return await getByIdScheduling2(ctx, args);
    case "SchedulingGetByClient":
      return await getByClientScheduling2(ctx, args);
    case "ServiceOrderAdd":
      return await addServiceOrder2(ctx, args);
    case "ServiceOrderUpd":
      return await updServiceOrder2(ctx, args);
    case "ServiceOrderDel":
      return await delServiceOrder2(ctx, args);
    case "ServiceOrderList":
      return await listServiceOrder2(ctx, args);
    case "ServiceOrderGetById":
      return await getByIdServiceOrder2(ctx, args);
    default:
      return {
        statusCode: 400,
        ok: false,
        error: "Uninformed action"
      };
  }
}

// virtual:/_102009_layer4Scheduling
var SchedulingStatus;
(function(SchedulingStatus2) {
  SchedulingStatus2["PENDING"] = "PENDING";
  SchedulingStatus2["CONFIRMED"] = "CONFIRMED";
  SchedulingStatus2["COMPLETED"] = "COMPLETED";
  SchedulingStatus2["CANCELED"] = "CANCELED";
})(SchedulingStatus || (SchedulingStatus = {}));

// virtual:/_102009_layer4ServiceOrder
var ServiceOrderStatus;
(function(ServiceOrderStatus2) {
  ServiceOrderStatus2["WAITING"] = "WAITING";
  ServiceOrderStatus2["IN_PROGRESS"] = "IN_PROGRESS";
  ServiceOrderStatus2["READY_FOR_COLLECTION"] = "READY_FOR_COLLECTION";
  ServiceOrderStatus2["BILLED"] = "BILLED";
  ServiceOrderStatus2["CANCELED"] = "CANCELED";
})(ServiceOrderStatus || (ServiceOrderStatus = {}));

// virtual:/_102009_petshop/organismViewMyAppointments
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
var organismViewMyAppointments = class organismViewMyAppointments2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-view-my-appointments-102009{width:100%}petshop--organism-view-my-appointments-102009 .section-card{margin-bottom:var(--space-24)}petshop--organism-view-my-appointments-102009 a:hover{color:#fff !important}petshop--organism-view-my-appointments-102009 .form-container{height:100%;overflow-y:auto}petshop--organism-view-my-appointments-102009 .status{padding:4px 8px;border-radius:8px;font-size:12px;font-weight:bold;color:#fff}petshop--organism-view-my-appointments-102009 td span.det{cursor:pointer;color:var(--active-color)}petshop--organism-view-my-appointments-102009 .status--pending{background:var(--warning-color)}petshop--organism-view-my-appointments-102009 .status--approved{background:var(--success-color)}petshop--organism-view-my-appointments-102009 .status--cancelled{background:var(--error-color)}`);
    this.scenary = "list";
    this.scheduling = [];
    this.error = "";
    this.indexDetail = -1;
    this.filterData = "";
  }
  firstUpdated() {
    this.init();
  }
  render() {
    if (this.scenary === "list")
      return this.renderList();
    return this.renderEdit();
  }
  renderList() {
    return Z`
        <div class="form-container">
            <h2>Meus Agendamentos</h2>
            <div style="display:flex">
                <div class="form-group" style="width:70%">
                    <label for="date-filter">Filtrar por Data</label>
                    <input type="date" id="date-filter" name="date-filter" @change=${(e6) => this.filterData = e6.target.value}>
                </div>
                <div class="form-group" style="width:30%; display: flex; align-items: end; justify-content: end;">
                    <a href="/pageAppointments" class="btn btn-save">Novo agendamento</a>
                    
                </div>
            </div>
            <div class="section-card">
                <table>
                    <thead>
                        <tr>
                            <th>Pet</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Serviço</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.scheduling.map((sch, index) => this.renderItem(sch, index))}
                    </tbody>
                </table>
            </div>
        </div>`;
  }
  renderItem(sch, index) {
    const data = this.getDataHorario(sch.details.startDateTime);
    const stateCLS = {
      "PENDING": "status--pending",
      "CONFIRMED": "status--approved",
      "CANCELED": "status--cancelled",
      "COMPLETED": "status--approved"
    };
    const stateLabel = {
      "PENDING": "Pendente",
      "CONFIRMED": "Aprovado",
      "CANCELED": "Cancelado",
      "COMPLETED": "Completo"
    };
    let display = "";
    if (this.filterData !== "") {
      display = this.filterData === data.vl ? "" : "none";
    }
    return Z`
        <tr style="display:${display}">
            <td>${sch.details.pet.name}</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>${sch.details.service.name}</td>
            <td><span class="status ${stateCLS[sch.details.status]}">${stateLabel[sch.details.status]}</span></td>
            <td><span class="det" @click=${() => {
      this.indexDetail = index;
      this.changeScneray("add");
    }}>Detalhes</span></td>
        </tr>`;
  }
  renderEdit() {
    const sch = this.scheduling[this.indexDetail];
    if (!sch)
      return Z`<div>
            <div class="section-card">
                <h2>Detalhes do Agendamento</h2>
                <div class="form-group">
                    Nenhum agendamento selecionado
                </div>
                <div class="form-actions">
                    <button class="btn btn-back" @click=${() => this.changeScneray("list")}>Voltar à Lista</button>
                </div>
            </div>
        </div>`;
    const data = this.getDataHorario(sch.details.startDateTime);
    const stateLabel = {
      "PENDING": "Pendente",
      "CONFIRMED": "Aprovado",
      "CANCELED": "Cancelado",
      "COMPLETED": "Completo"
    };
    return Z`
        <div>
            <div class="section-card">
                <h2>Detalhes do Agendamento</h2>
                <div class="form-group">
                    <label>Data:</label>
                    <span class="field-value">${data.date}</span>
                </div>
                <div class="form-group">
                    <label>Horário:</label>
                    <span class="field-value">${data.time}</span>
                </div>
                <div class="form-group">
                    <label>Serviço:</label>
                    <span class="field-value">${sch.details.service.name}</span>
                </div>
                <div class="form-group">
                    <label>Pet:</label>
                    <span class="field-value">${sch.details.pet.name}</span>
                </div>
                <div class="form-group">
                    <label>Status:</label>
                    <span class="field-value">${stateLabel[sch.details.status]}</span>
                </div>
                <div class="form-actions">
                    <button class="btn btn-delete" @click=${() => this.handleClickCancel()} >Cancelar Agendamento</button>
                    <button class="btn btn-back" @click=${() => this.changeScneray("list")}>Voltar à Lista</button>
                </div>
                ${this.error ? Z`<div style="text-align:center">${this.error}</div>` : ""}
            </div>
        </div>`;
  }
  async init() {
    this.mdmData = getState2("ui.petshop.login");
    this.scheduling = getState2("ui.petshop.client.scheduling") || [];
    this.loadInfos();
  }
  async loadInfos() {
    await this.getScheduling();
  }
  async getScheduling() {
    if (!this.mdmData) {
      this.error = "Falta parametros para pegar os pets";
      return;
    }
    const req = {
      action: "SchedulingGetByClient",
      inDeveloped: true,
      version: "1",
      params: { clientId: this.mdmData.id || 0 }
    };
    const response = await petshopExec(req);
    if (!response.ok) {
      this.error = response.error;
      return;
    }
    this.scheduling = response.data.filter((item) => item != null);
    setState2("ui.petshop.client.scheduling", this.scheduling);
  }
  changeScneray(scenary) {
    this.error = "";
    this.scenary = scenary;
  }
  getDataHorario(data) {
    const dateObj = new Date(data);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const hours = String(dateObj.getUTCHours()).padStart(2, "0");
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
    const date = `${day}/${month}/${year}`;
    const time = `${hours}:${minutes}`;
    const vl = `${year}-${month}-${day}`;
    return { date, time, vl };
  }
  async handleClickCancel() {
    const sch = this.scheduling[this.indexDetail];
    if (!sch) {
      this.error = "Nenhum agendamento selecionado!";
      return;
    }
    if (sch.details.status === SchedulingStatus.CANCELED) {
      this.error = "N\xE3o pode alterar o status de um agendamento cancelado!";
      return;
    }
    sch.details.status = SchedulingStatus.CANCELED;
    const req = {
      action: "SchedulingUpd",
      inDeveloped: true,
      version: "1",
      params: sch
    };
    const response = await petshopExec(req);
    if (!response.ok) {
      this.error = response.error;
      return;
    }
    this.changeScneray("list");
  }
};
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "scenary", void 0);
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "mdmData", void 0);
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "scheduling", void 0);
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "error", void 0);
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "indexDetail", void 0);
__decorate6([
  U2()
], organismViewMyAppointments.prototype, "filterData", void 0);
organismViewMyAppointments = __decorate6([
  e2("petshop--organism-view-my-appointments-102009")
], organismViewMyAppointments);

// virtual:/_100554_collabDecorators
function propertyDataSource(options) {
  return (proto, propName) => {
    w2(options)(proto, propName);
    const attributeName = options?.attribute && typeof options.attribute === "string" ? String(options.attribute) : String(propName);
    Object.defineProperty(proto, propName, {
      get() {
        const attributeValue = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
        if (typeof attributeValue === "string" && attributeValue && attributeValue.includes("{{") && attributeValue.includes("}}")) {
          const stateKey = attributeValue.replace(/[{{}}]/g, "").trim();
          const stateValue = getState(stateKey);
          if (options?.type === Boolean) {
            if (typeof stateValue === "boolean")
              return stateValue;
            if (typeof stateValue === "string")
              return stateValue === "true" || stateValue === "";
            return Boolean(stateValue);
          }
          let aux = stateValue ? stateValue.toString() : "";
          if (typeof stateValue === "object")
            aux = JSON.stringify(stateValue);
          if (options?.type === String)
            return stateValue ? aux : stateValue;
          if (options?.type === Array && typeof stateValue === "string")
            return JSON.parse(stateValue);
          return stateValue;
        }
        if (options?.type === Boolean) {
          if (this.hasAttribute(attributeName) && attributeValue !== "false" || attributeValue === "true")
            return true;
          if (attributeValue === "false" || attributeValue === void 0)
            return false;
          if (typeof attributeValue === "boolean")
            return attributeValue;
          return Boolean(attributeValue);
        }
        if (this[`_${attributeName}`] !== void 0)
          return this[`_${attributeName}`];
        return attributeValue;
      },
      set(value) {
        if (options?.type === Number && typeof value === "number" && isNaN(value)) {
          const attributeValue = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
          if (typeof attributeValue === "string" && attributeValue.startsWith("{{") && attributeValue.endsWith("}}")) {
            if (options?.reflect) {
              const attributeValueR = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
              if (attributeValueR !== value)
                this.setAttribute(attributeName, value);
            }
            const stateKey = attributeValue.replace(/[{{}}]/g, "").trim();
            prepareForNotification.call(this, attributeName, [stateKey]);
            this[`_${attributeName}`] = value;
            setState(stateKey, value);
          } else {
            this[`_${attributeName}`] = value;
          }
          this.requestUpdate();
          return;
        }
        if (options?.type === Boolean && typeof value === "boolean") {
          const attributeValue = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
          if (typeof attributeValue === "string" && attributeValue.startsWith("{{") && attributeValue.endsWith("}}")) {
            if (options?.reflect) {
              const attributeValueR = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
              if (attributeValueR !== value)
                this.setAttribute(attributeName, value);
            }
            const stateKey = attributeValue.replace(/[{{}}]/g, "").trim();
            prepareForNotification.call(this, attributeName, [stateKey]);
            this[`_${attributeName}`] = value;
            setState(stateKey, value);
          } else {
            this[`_${attributeName}`] = value;
          }
          this.requestUpdate();
          return;
        }
        if (typeof value === "string" && value.startsWith("{{") && value.endsWith("}}")) {
          if (options?.reflect) {
            const attributeValue = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
            if (attributeValue !== value)
              this.setAttribute(attributeName, value);
          }
          const stateKey = value.replace(/[{{}}]/g, "").trim();
          prepareForNotification.call(this, attributeName, [stateKey]);
          this[`_${attributeName}`] = getState(stateKey);
        } else if (options?.type === Object && (typeof value === "string" && ((value.startsWith("[") || value.startsWith("{")) && (value.endsWith("]") || value.endsWith("}"))))) {
          this[`_${attributeName}`] = JSON.parse(value);
        } else {
          const attributeValue = this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : "";
          if (typeof attributeValue === "string" && attributeValue.includes("{{") && attributeValue.includes("}}")) {
            const dynamicKey = attributeValue.replace(/[{{}}]/g, "").trim();
            this[`_${attributeName}`] = value;
            setState(dynamicKey, value);
          } else
            this[`_${attributeName}`] = value;
        }
        this.requestUpdate();
      }
    });
  };
}
function prepareForNotification(attributeName, path) {
  if (typeof this.updateStateKeys !== "function")
    return;
  this.updateStateKeys(attributeName, path);
}

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
function createContext2(param) {
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
  const ctx = createContext2(param);
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

// virtual:/_102009_petshop/organismBookingForm
var __decorate7 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var organismBookingForm = class organismBookingForm2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-booking-form-102009{background:var(--bg-primary-color);border-radius:var(--space-16);box-shadow:0 2px 8px 0 rgba(211,211,211,0.2);padding:var(--space-32) var(--space-40);margin-bottom:var(--space-32);max-width:480px;width:100%;font-family:var(--font-family-primary)}@media (max-width:768px){petshop--organism-booking-form-102009{padding:var(--space-16) var(--space-8);max-width:100%}}petshop--organism-booking-form-102009 h2{color:var(--text-primary-color);font-size:var(--font-size-24);font-weight:var(--font-weight-bold);margin-bottom:var(--space-24);text-align:center}petshop--organism-booking-form-102009 form{display:flex;flex-direction:column;gap:var(--space-16)}petshop--organism-booking-form-102009 label{font-size:var(--font-size-16);color:var(--text-primary-color-darker);margin-bottom:var(--space-8);font-weight:var(--font-weight-normal)}petshop--organism-booking-form-102009 input,petshop--organism-booking-form-102009 select{border:1px solid var(--grey-color);border-radius:var(--space-8);padding:var(--space-8);font-size:var(--font-size-16);font-family:var(--font-family-primary);background:var(--bg-primary-color-lighter);color:var(--text-primary-color-darker);transition:border-color var(--transition-normal)}petshop--organism-booking-form-102009 input:focus,petshop--organism-booking-form-102009 select:focus{border-color:var(--text-primary-color);outline:none}petshop--organism-booking-form-102009 .form-row{margin-top:.8rem;display:flex;gap:var(--space-16)}@media (max-width:544px){petshop--organism-booking-form-102009 .form-row{flex-direction:column;gap:var(--space-8)}}petshop--organism-booking-form-102009 .form-actions{display:flex;flex-direction:column;align-items:center;margin-top:var(--space-24)}petshop--organism-booking-form-102009 button[type="submit"]{background:var(--text-secondary-color);color:var(--bg-primary-color);border:none;border-radius:var(--space-8);padding:var(--space-8) var(--space-32);font-size:var(--font-size-16);font-weight:var(--font-weight-bold);cursor:pointer;transition:background var(--transition-normal)}petshop--organism-booking-form-102009 button[type="submit"]:hover{background:var(--text-secondary-color-hover)}petshop--organism-booking-form-102009 button[type="submit"]:disabled{background:var(--text-secondary-color-disabled);cursor:not-allowed}petshop--organism-booking-form-102009 .form-error{color:var(--error-color);font-size:var(--font-size-12);margin-top:var(--space-8)}petshop--organism-booking-form-102009 .confirmation-message{color:var(--success-color);font-size:var(--font-size-16);text-align:center;margin-top:var(--space-16)}`);
    this.myPets = [];
    this.services = [];
    this.error = "";
    this.loading = false;
    this.petIndex = -1;
    this.serviceIndex = -1;
    this.data = "";
    this.horario = "";
  }
  firstUpdated() {
    this.init();
  }
  render() {
    return Z`
      <h2>Agende um serviço</h2>
      <div autocomplete="off">
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Serviço *</label>
            <select id="service" .value=${this.serviceIndex} name="service" required="" @change=${(e6) => {
      this.serviceIndex = +e6.target.value;
    }}>
              <option value="-1">Selecione</option>
              ${this.services.map((serv, index) => Z`
                  <option value="${index}">${serv.details.registrationData.name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div style="flex:1;">
            <label for="service">Pet *</label>
            <select id="service" .value=${this.petIndex} name="service" required="" @change=${(e6) => {
      this.petIndex = +e6.target.value;
    }}>
              <option value="-1">Selecione</option>
              ${this.myPets.map((serv, index) => Z`
                  <option value="${index}">${serv.details.registrationData.name}</option>
              `)}
            </select>
          </div>
        </div>
        <div class="form-row" >
          <div style="flex:1;">
            <label for="date">Data *</label>
            <input type="date" id="date" .value=${this.data} name="date" required="" min="2025-08-06" @change=${(e6) => {
      this.data = e6.target.value;
    }}>
          </div>
          <div style="flex:1;">
            <label for="time">Horário *</label>
            <select id="time" .value=${this.horario} name="time" required="" @change=${(e6) => {
      this.horario = e6.target.value;
    }}>
              <option value="">Selecione</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
            </select>
          </div>
        </div>
        
        <div class="form-actions">
          <button type="submit" @click=${this.handleClickSave}>Agendar ${this.loading ? Z`<span class="loading"></span>` : Z``}</button>
        </div>
        <div class="form-group" style="width:100%; display: flex; align-items: center; justify-content: center; padding:1rem">
          <a href="/pagePerfilAppointments" id="meusagendamentos" style="font-size:17px;text-decoration: underline; dipslay:flex">Meus Agendamentos 
            <svg xmlns="http://www.w3.org/2000/svg" style="width:15px; fill:var(--active-color)" viewBox="0 0 448 512"><!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
          </a>
        </div>
        ${this.error ? Z`<div style="text-align:center">${this.error}</div>` : ""}
      </div>
    `;
  }
  async init() {
    this.mdmData = getState2("ui.petshop.login");
    this.myPets = getState2("ui.petshop.client.myPets") || [];
    this.services = getState2("ui.petshop.client.services") || [];
    this.loadInfos();
  }
  async loadInfos() {
    await this.getMyPets();
    await this.getServices();
  }
  async getMyPets() {
    if (!this.mdmData) {
      this.error = "Falta parametros para pegar os pets";
      return;
    }
    const ids = [];
    if (this.mdmData.details.relationships) {
      this.mdmData.details.relationships.forEach((r4) => {
        if (r4.type === "R_PF_OWNER_OF_PET")
          ids.push(r4.relatedMdmId);
      });
    }
    const req = {
      action: "MDMGetListByIds",
      inDeveloped: true,
      version: "1",
      params: { ids }
    };
    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error;
      this.loading = false;
      return;
    }
    this.myPets = response.data.filter((item) => item != null);
    setState2("ui.petshop.client.myPets", this.myPets);
  }
  async getServices() {
    const req = {
      action: "MDMGetListByType",
      inDeveloped: true,
      version: "1",
      params: { type: MdmType.Servico }
    };
    const response = await exec(req);
    if (!response.ok) {
      this.error = response.error;
      this.loading = false;
      return;
    }
    this.services = response.data.filter((item) => item != null);
    setState2("ui.petshop.client.services", this.services);
  }
  async handleClickSave() {
    if (!this.mdmData) {
      this.error = "Nenhum cliente selecionado!";
      return;
    }
    if (this.petIndex < 0 || !this.myPets[this.petIndex]) {
      this.error = "Pet obrigat\xF3rio.";
      return;
    }
    if (this.serviceIndex < 0 || !this.services[this.serviceIndex]) {
      this.error = "Selecione um servi\xE7o";
      return;
    }
    if (!this.data) {
      this.error = "Informe uma data";
      return;
    }
    if (!this.horario) {
      this.error = "Informe um horario";
      return;
    }
    const dataHoraInformada = new Date(`${this.data}T${this.horario}`);
    const agora = new Date();
    if (dataHoraInformada < agora) {
      this.error = "A data e hor\xE1rio n\xE3o podem ser anteriores ao momento atual";
      return;
    }
    this.loading = true;
    const pet = this.myPets[this.petIndex];
    const serv = this.services[this.serviceIndex];
    const localDateTimeString = `${this.data}T${this.horario}:00`;
    const localDate = new Date(localDateTimeString);
    const utcString = new Date(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds())).toISOString();
    let phoneClient = "";
    if (this.mdmData.details.contactData && this.mdmData.details.contactData.phone) {
      phoneClient = this.mdmData.details.contactData.phone[0].number;
    }
    const params = {
      details: {
        startDateTime: utcString,
        status: SchedulingStatus.PENDING,
        serviceOrderId: null,
        tutor: {
          clientMdmId: this.mdmData.id || 0,
          name: this.mdmData.details.registrationData.name,
          phone: phoneClient
        },
        pet: {
          petMdmId: this.myPets[this.petIndex].id || 0,
          name: pet.details.registrationData.name,
          species: pet.details.registrationData.species,
          breed: pet.details.registrationData.breed,
          allergies: []
        },
        service: {
          serviceMdmId: this.services[this.serviceIndex].id || 0,
          name: serv.details.registrationData.name,
          serviceCode: serv.details.registrationData.serviceCode
        }
      }
    };
    const req = {
      action: "SchedulingAdd",
      inDeveloped: true,
      version: "1",
      params
    };
    const response = await petshopExec(req);
    if (!response.ok) {
      this.error = response.error || "Error";
      this.loading = false;
      return;
    }
    this.loading = false;
    this.petIndex = -1;
    this.serviceIndex = -1;
    this.horario = "";
    this.data = "";
    this.error = "Agendamento realizado com sucesso";
    if (this.meusagendamentos)
      this.meusagendamentos.click();
  }
};
__decorate7([
  t5("#meusagendamentos")
], organismBookingForm.prototype, "meusagendamentos", void 0);
__decorate7([
  U2()
], organismBookingForm.prototype, "mdmData", void 0);
__decorate7([
  U2()
], organismBookingForm.prototype, "myPets", void 0);
__decorate7([
  U2()
], organismBookingForm.prototype, "services", void 0);
__decorate7([
  U2()
], organismBookingForm.prototype, "error", void 0);
__decorate7([
  U2()
], organismBookingForm.prototype, "loading", void 0);
__decorate7([
  propertyDataSource()
], organismBookingForm.prototype, "petIndex", void 0);
__decorate7([
  propertyDataSource()
], organismBookingForm.prototype, "serviceIndex", void 0);
__decorate7([
  propertyDataSource()
], organismBookingForm.prototype, "data", void 0);
__decorate7([
  propertyDataSource()
], organismBookingForm.prototype, "horario", void 0);
organismBookingForm = __decorate7([
  e2("petshop--organism-booking-form-102009")
], organismBookingForm);

// virtual:/_102009_petshop/organismBookingInfo
var __decorate8 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var organismBookingInfo = class organismBookingInfo2 extends IcaOrganismBase {
  constructor() {
    super();
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-booking-info-102009{background:var(--bg-primary-color-lighter);border-radius:var(--space-16);box-shadow:0 1px 4px 0 rgba(211,211,211,0.1);padding:var(--space-24) var(--space-32);max-width:480px;width:100%;font-family:var(--font-family-primary);color:var(--text-primary-color-darker);font-size:var(--font-size-16);margin-bottom:var(--space-32)}@media (max-width:768px){petshop--organism-booking-info-102009{padding:var(--space-16) var(--space-8);max-width:100%}}petshop--organism-booking-info-102009 h3{color:var(--text-secondary-color-darker);font-size:var(--font-size-20);font-weight:var(--font-weight-bold);margin-bottom:var(--space-16)}petshop--organism-booking-info-102009 ul{margin:0 0 var(--space-16) 0;padding-left:var(--space-24)}petshop--organism-booking-info-102009 ul li{margin-bottom:var(--space-8);line-height:var(--line-height-large)}petshop--organism-booking-info-102009 .info-note{background:var(--bg-secondary-color-lighter);border-left:4px solid var(--text-secondary-color);padding:var(--space-8) var(--space-16);border-radius:var(--space-8);font-size:var(--font-size-12);color:var(--text-primary-color-darker)}`);
  }
  render() {
    return Z`<h3 id="petshop--booking-info-102009-1">Como funciona o agendamento?</h3>
      <ul id="petshop--booking-info-102009-2">
        <li id="petshop--booking-info-102009-3">Escolha o serviço desejado, data e horário disponíveis.</li>
        <li id="petshop--booking-info-102009-4">Preencha os dados do seu pet e do tutor corretamente.</li>
        <li id="petshop--booking-info-102009-5">Após o envio, você receberá um e-mail de confirmação do agendamento.</li>
        <li id="petshop--booking-info-102009-6">Chegue com 10 minutos de antecedência ao horário marcado.</li>
      </ul>
      <div class="info-note" id="petshop--booking-info-102009-7">
        <strong id="petshop--booking-info-102009-8">Importante:</strong> Cancelamentos devem ser feitos com pelo menos 2h de antecedência. Horários disponíveis podem variar conforme demanda.<br id="petshop--booking-info-102009-9">
        Para dúvidas, entre em contato pelo WhatsApp ou telefone.
      </div>
    `;
  }
};
organismBookingInfo = __decorate8([
  e2("petshop--organism-booking-info-102009")
], organismBookingInfo);

// virtual:/_102009_petshop/organismFooterInfo
var __decorate9 = function(decorators, target, key, desc) {
  var c4 = arguments.length, r4 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d4 = decorators[i4])
        r4 = (c4 < 3 ? d4(r4) : c4 > 3 ? d4(target, key, r4) : d4(target, key)) || r4;
  return c4 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
};
var organismFooterInfo = class organismFooterInfo2 extends IcaOrganismBase {
  constructor() {
    super(...arguments);
    if (this.loadStyle)
      this.loadStyle(`petshop--organism-footer-info-102009{background:var(--bg-primary-color-darker);color:var(--text-primary-color-lighter);padding:var(--space-32) 0;font-family:var(--font-family-primary)}petshop--organism-footer-info-102009 .footer-container{padding-top:.8rem;max-width:1100px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:var(--space-32)}petshop--organism-footer-info-102009 .footer-section{flex:1 1 200px;margin-bottom:var(--space-16)}petshop--organism-footer-info-102009 .footer-section h4{color:var(--text-secondary-color);font-size:var(--font-size-16);font-weight:var(--font-weight-bold);margin-bottom:var(--space-8)}petshop--organism-footer-info-102009 .footer-section ul{list-style:none;padding:0;margin:0}petshop--organism-footer-info-102009 .footer-section ul li{margin-bottom:var(--space-8)}petshop--organism-footer-info-102009 .footer-section ul li a{color:var(--text-primary-color-lighter);text-decoration:none;font-size:var(--font-size-12);transition:color var(--transition-normal)}petshop--organism-footer-info-102009 .footer-section ul li a:hover,petshop--organism-footer-info-102009 .footer-section ul li a:focus{color:var(--text-secondary-color)}petshop--organism-footer-info-102009 .footer-section .contact-info{font-size:var(--font-size-12);margin-bottom:var(--space-8)}petshop--organism-footer-info-102009 .footer-section .contact-info a{color:var(--text-primary-color-lighter);text-decoration:none}petshop--organism-footer-info-102009 .footer-section .contact-info a:hover,petshop--organism-footer-info-102009 .footer-section .contact-info a:focus{color:var(--text-secondary-color)}petshop--organism-footer-info-102009 .footer-social{display:flex;gap:var(--space-16);margin-top:var(--space-16)}petshop--organism-footer-info-102009 .footer-social a{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:var(--bg-secondary-color-lighter);color:var(--text-primary-color);transition:background var(--transition-normal),color var(--transition-normal)}petshop--organism-footer-info-102009 .footer-social a:hover,petshop--organism-footer-info-102009 .footer-social a:focus{background:var(--bg-secondary-color);color:var(--text-secondary-color)}petshop--organism-footer-info-102009 .footer-social a svg{width:18px;height:18px}petshop--organism-footer-info-102009 .footer-bottom{text-align:center;font-size:var(--font-size-12);color:var(--text-primary-color-lighter-disabled);margin-top:var(--space-24)}@media (max-width:768px){petshop--organism-footer-info-102009 .footer-container{flex-direction:column;align-items:center;gap:var(--space-16)}petshop--organism-footer-info-102009 .footer-section{width:100%;text-align:center}}`);
    this.tel = "(99) 99999-9999";
    this.email = "contato@petshopamigo.com";
    this.end = "Endere\xE7o: Av. dos Pets, 123 - Centro, Cidade/UF";
  }
  firstUpdated() {
    this.init();
  }
  render() {
    return Z`<div class="footer-container">
          <div class="footer-section">
            <h4>Contato</h4>
            <div class="contact-info">
              Telefone:
              <a href="tel:+5599999999999">${this.tel} </a>
            </div>
            <div class="contact-info">
              E-mail: 
              <a href="mailto:contato@petshopamigo.com">${this.email}</a>
            </div>
            <div class="contact-info">
              ${this.end}
            </div>
          </div>
          <div class="footer-section">
            <h4>Links úteis</h4>
            <ul>
              <li><a href="/pageHome">Home</a></li>
              <li><a href="/pageAppointments">Agendamento</a></li>
              <li><a href="/pageProduct">Produtos</a></li>
              <li><a href="/pageContact">Contato</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Redes sociais</h4>
            <div class="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"></path></svg>
              </a>
              <a href="https://wa.me/5599999999999" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12c0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.45l-.37-.22l-3.67.97l.98-3.58l-.24-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10s-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9c-.25-.09-.43-.14-.61.14c-.18.28-.7.9-.86 1.08c-.16.18-.32.2-.6.07c-.28-.14-1.18-.44-2.25-1.41c-.83-.74-1.39-1.65-1.55-1.93c-.16-.28-.02-.43.12-.57c.13-.13.28-.34.42-.51c.14-.17.18-.29.27-.48c.09-.19.05-.36-.02-.5c-.07-.14-.61-1.47-.84-2.01c-.22-.54-.45-.47-.61-.48c-.16-.01-.35-.01-.54-.01c-.19 0-.5.07-.76.34c-.26.27-1 1-.98 2.44c.02 1.44 1.03 2.84 1.18 3.04c.15.2 2.03 3.1 4.93 4.22c.69.28 1.23.45 1.65.58c.69.22 1.32.19 1.82.12c.56-.08 1.65-.67 1.88-1.32c.23-.65.23-1.2.16-1.32c-.07-.12-.25-.19-.53-.33z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          © 2025 Petshop Amigo. Todos os direitos reservados.
        </div>
      `;
  }
  init() {
    this.mdmData = getState2("ui.petshop.enterprise");
    if (this.mdmData) {
      if (this.mdmData.details.contactData && this.mdmData.details.contactData.phone.length > 0) {
        this.tel = this.mdmData.details.contactData.phone[0].number;
      }
      if (this.mdmData.details.contactData && this.mdmData.details.contactData.email) {
        this.email = this.mdmData.details.contactData.email;
      }
      if (this.mdmData.details.addresses && this.mdmData.details.addresses.length > 0) {
        const end = this.mdmData.details.addresses[0];
        this.end = `${end.street}, ${end.number} - ${end.neighborhood}`;
      }
    }
  }
};
__decorate9([
  U2()
], organismFooterInfo.prototype, "mdmData", void 0);
__decorate9([
  U2()
], organismFooterInfo.prototype, "tel", void 0);
__decorate9([
  U2()
], organismFooterInfo.prototype, "email", void 0);
__decorate9([
  U2()
], organismFooterInfo.prototype, "end", void 0);
organismFooterInfo = __decorate9([
  e2("petshop--organism-footer-info-102009")
], organismFooterInfo);
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
