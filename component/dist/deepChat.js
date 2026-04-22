const m = "classList", v = "style", ga = "unset", ba = "html-wrapper", X = "length", A = (i = "div") => document.createElement(i);
class ya {
  static render(e, t) {
    const n = A();
    n.id = "error-view", n.innerText = t, e.replaceChildren(n);
  }
}
class zs {
  static onLoad(e) {
    e.innerHTML = '<div id="loading-validate-key-property"></div>';
  }
  static createElements() {
    const e = A();
    return e.id = "validate-property-key-view", e;
  }
  static render(e, t, n) {
    const s = zs.createElements(), r = {
      onSuccess: t,
      onFail: ya.render.bind(this, e, "Your 'key' has failed authentication"),
      onLoad: zs.onLoad.bind(this, s)
    };
    n.key && n.verifyKey(n.key, r), e.replaceChildren(s);
  }
}
const ae = "service", h = "text", L = "html", f = "error", Z = "https://deepchat.dev/docs/", ne = "ai", F = "user", gt = "assistant", Vs = "error-message-text", Ns = "deep-chat-outer-container-role-", Or = "empty-message", Ii = "deep-chat-top-message", Nr = "deep-chat-middle-message", Mi = "deep-chat-bottom-message", T = "src", E = "type", se = "file", b = "files", W = "image", ee = "images", Fe = "camera", Cn = "gifs", $ = "audio", ct = "microphone", Lo = "mixedFiles", on = "any", Oo = "file-message", qt = "start", No = "end", Bo = "messages", Br = "0", Dr = "1", x = "role", Ee = "string", ce = (i) => JSON.stringify(i), C = (i) => JSON.parse(ce(i));
function Fr(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
function _a(i) {
  return i && ce(i);
}
function rr(i, e, t, n) {
  const s = `
${Fr(e)} message: ${ce(i)} 
`, r = t ? `${Fr(e)} message after interceptor: ${_a(n)} 
` : "";
  return s + r;
}
function Ea(i, e, t, n) {
  return `${rr(i, e, t, n)}Make sure the ${e} message is using the Response format: ${Z}connect/#Response 
You can also augment it using the responseInterceptor property: ${Z}interceptors#responseInterceptor`;
}
function va(i, e, t) {
  const n = "response";
  return `${rr(i, n, e, t)}Make sure the ${n} message is using the {text: string} format, e.g: {text: "Model Response"}`;
}
function Sa(i, e) {
  const t = "request";
  return `${rr(i, t, e)}Make sure the ${t} message is using the {body: {text: string}} format, e.g: {body: {text: "Model Response"}}`;
}
function xa(i) {
  return `${i} failed - please wait for chat view to render before calling this property.`;
}
const Tn = Ea, Aa = Sa, wa = va, Ur = xa, pe = "Invalid API Key", Ue = "Failed to connect", He = "Request settings have not been set up", bi = "No file was added", or = "Image was not found", Do = "Multi-response arrays are not supported for streaming", Fo = `Make sure the events are using {text: string} or {html: string} format.
You can also augment them using the responseInterceptor property: ${Z}interceptors#responseInterceptor`, Ca = "Cannot mix {text: string} and {html: string} responses.", Ta = `No valid stream events were sent.
${Fo}`, Ra = "Readable Stream connection error.", Gt = "Please define a `function_handler` property inside the service config.", an = "Function tool response must be an array or contain a text property", Uo = "Failed to fetch history";
class jt {
  static apply(e, t) {
    if (t)
      try {
        jt.applyStyleSheet(e, t);
      } catch {
        jt.addStyleElement(e, t);
      }
  }
  static applyStyleSheet(e, t) {
    const n = new CSSStyleSheet();
    n.replaceSync(e), t.adoptedStyleSheets.push(n);
  }
  static addStyleElement(e, t) {
    const n = A("style");
    n.innerHTML = e, t.appendChild(n);
  }
  static camelToKebab(e) {
    return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  static applyChatStyle(e, t) {
    if (!e || !t) return;
    const n = Object.entries(e).filter(([, s]) => s).map(([s, r]) => `${jt.camelToKebab(s)}: ${r};`).join(" ");
    n && jt.apply(`:host { ${n} }`, t);
  }
}
const In = "inside-start", ft = "inside-end", Le = "outside-start", ve = "outside-end", et = "dropup-menu", w = "default", De = "hover", J = "click", H = "active", j = "disabled", G = "svg", Nt = "unavailable", R = "styles", ks = "mouseenter", cn = "mouseleave", Ia = "mousedown", Ma = "mouseup", st = "submit", It = "loading", Bi = "stop", Un = "unsupported", bn = "commandMode";
class de {
  static unsetStyle(e, t) {
    const n = Object.keys(t).reduce((s, r) => (s[r] = "", s), {});
    Object.assign(e[v], n);
  }
  static unsetActivityCSSMouseStates(e, t) {
    t[J] && de.unsetStyle(e, t[J]), t[De] && de.unsetStyle(e, t[De]);
  }
  static unsetAllCSSMouseStates(e, t) {
    de.unsetActivityCSSMouseStates(e, t), t[w] && de.unsetStyle(e, t[w]);
  }
  // if you want to asdd default styling - use pure css classes
  static processStateful(e) {
    const t = e[w] || {}, n = Object.assign(C(t), e == null ? void 0 : e[De]), s = Object.assign(C(n), e == null ? void 0 : e[J]);
    return { [w]: t, [De]: n, [J]: s };
  }
  static mergeStatefulStyles(e) {
    const t = { [w]: {}, [De]: {}, [J]: {} };
    return e.forEach((n) => {
      t[w] = Object.assign(t[w], n[w]), t[De] = Object.assign(t[De], n[De]), t[J] = Object.assign(t[J], n[J]);
    }), t;
  }
  static overwriteDefaultWithAlreadyApplied(e, t) {
    Object.keys(e[w] || []).forEach((n) => {
      var r;
      const s = n;
      t[v][s] && (r = e[w]) != null && r[s] && (e[w][n] = t[v][s]);
    });
  }
  static applyToStyleIfNotDefined(e, t) {
    for (const n in t) {
      const s = t[n];
      e[n] === "" && s && (e[n] = s);
    }
  }
}
const Xt = class Xt {
  static buildElement() {
    const e = A();
    e[m].add("tooltip");
    const t = A("span");
    return t[m].add("tooltip-text"), e.appendChild(t), e;
  }
  static tryCreateConfig(e, t) {
    if (t)
      return typeof t == "boolean" ? { [h]: e } : {
        [h]: t[h] || e,
        timeout: t.timeout || 0,
        style: t[v]
      };
  }
  static traverseParentUntilContainer(e) {
    let t = e;
    for (; t.parentElement; )
      t = t.parentElement;
    return t;
  }
  static setPosition(e, t) {
    const s = t.getRootNode().host.getBoundingClientRect(), r = e.getBoundingClientRect(), a = t.getBoundingClientRect().width / 2, c = r.left + r.width / 2;
    t[v].left = `${c - a - s.left}px`, t[v].top = `${r.top - 36 - s.top}px`;
    const l = t.getBoundingClientRect();
    l.left < s.left ? t[v].left = `${Xt.OVERFLOW_NEW_POSITION_PX}px` : l.right > s.right && (t[v].left = `${s.width - l.width - Xt.OVERFLOW_NEW_POSITION_PX}px`);
  }
  static display(e, t, n) {
    return n || (n = Xt.traverseParentUntilContainer(e).nextSibling), t[h] && (n.children[0].textContent = t[h]), { timeout: setTimeout(() => {
      n[v].visibility = "visible", Xt.setPosition(e, n), t[v] && Object.assign(n[v], t[v]);
    }, t.timeout || 0), element: n };
  }
  static hide(e, t) {
    clearTimeout(e.timeout), e.element[v].visibility = "hidden", t[v] && de.unsetStyle(e.element, t[v]), e.element[v].left = "", e.element[v].top = "";
  }
};
Xt.OVERFLOW_NEW_POSITION_PX = 4;
let ut = Xt;
const gs = class gs {
};
gs.IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), gs.IS_CHROMIUM = window.chrome, gs.IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let $e = gs;
var _e = /* @__PURE__ */ ((i) => (i.ESCAPE = "Escape", i.ENTER = "Enter", i.TAB = "Tab", i.ARROW_UP = "ArrowUp", i.ARROW_DOWN = "ArrowDown", i.ARROW_RIGHT = "ArrowRight", i.ARROW_LEFT = "ArrowLeft", i.BACKSPACE = "Backspace", i.DELETE = "Delete", i.META = "Meta", i.CONTROL = "Control", i))(_e || {});
const Zt = class Zt {
  // prettier-ignore
  static add(e, t, n, s) {
    n !== void 0 && e.addEventListener("keydown", Zt.onKeyDown.bind(this, n)), e.oninput = Zt.onInput.bind(this, n, s), e.addEventListener("paste", (r) => {
      var o;
      r.preventDefault(), (o = r.clipboardData) != null && o[b].length && t.addFilesToAnyType(Array.from(r.clipboardData[b]));
    });
  }
  // preventing insertion early for a nicer UX
  // prettier-ignore
  static onKeyDown(e, t) {
    const s = t.target.textContent;
    s && s.length >= e && !Zt.PERMITTED_KEYS.has(t.key) && !Zt.isKeyCombinationPermitted(t) && t.preventDefault();
  }
  static isKeyCombinationPermitted(e) {
    return e.key === "a" ? e.ctrlKey || e.metaKey : !1;
  }
  static onInput(e, t, n) {
    const s = n.target, r = s.textContent || "";
    e !== void 0 && r.length > e && (s.textContent = r.substring(0, e), ln.focusEndOfInput(s)), t == null || t();
  }
};
Zt.PERMITTED_KEYS = /* @__PURE__ */ new Set([
  _e.BACKSPACE,
  _e.DELETE,
  _e.ARROW_RIGHT,
  _e.ARROW_LEFT,
  _e.ARROW_DOWN,
  _e.ARROW_UP,
  _e.META,
  _e.CONTROL,
  _e.ENTER
]);
let Di = Zt;
class ka {
  static sanitizePastedTextContent(e) {
    var s;
    e.preventDefault();
    const t = (s = e.clipboardData) == null ? void 0 : s.getData("text/plain");
    if (!t) return;
    const n = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
    document.execCommand("insertHTML", !1, n);
  }
}
const Bt = class Bt {
  constructor(e, t, n, s) {
    var o, a, c, l;
    this._isComposing = !1;
    const r = Bt.processConfig(t, e.textInput);
    this.elementRef = Bt.createContainerElement((o = r == null ? void 0 : r[R]) == null ? void 0 : o.container), this._config = r, this.inputElementRef = this.createInputElement((a = e.defaultInput) == null ? void 0 : a[h], s), Bt.addFilesToAnyType(n, (c = e.defaultInput) == null ? void 0 : c[b]), this.elementRef.appendChild(this.inputElementRef), e.setPlaceholderText = this.setPlaceholderText.bind(this), e.setPlaceholderText(((l = this._config.placeholder) == null ? void 0 : l[h]) || "Ask me anything!"), this._browserStorage = s, setTimeout(() => {
      Di.add(this.inputElementRef, n, this._config.characterLimit, e._validationHandler), this._onInput = t.onInput;
    });
  }
  static processConfig(e, t) {
    var n;
    return t ?? (t = {}), t[j] ?? (t[j] = e.isTextInputDisabled), t.placeholder ?? (t.placeholder = {}), (n = t.placeholder)[h] ?? (n[h] = e.textInputPlaceholderText), t;
  }
  static createContainerElement(e) {
    const t = A();
    return t.id = "text-input-container", Object.assign(t[v], e), t;
  }
  // this is is a bug fix where if the browser is scrolled down and the user types in text that creates new line
  // the browser scrollbar will move up which leads to undesirable UX.
  // More details in this Stack Overflow question:
  // https://stackoverflow.com/questions/76285135/prevent-automatic-scroll-when-text-is-inserted-into-contenteditable-div
  // prettier-ignore
  static preventAutomaticScrollUpOnNewLine(e) {
    let t;
    e.addEventListener("keydown", () => {
      t = window.scrollY;
    }), e.addEventListener("input", () => {
      t !== window.scrollY && window.scrollTo({ top: t });
    });
  }
  // this also similarly prevents scroll up
  clear() {
    var t, n, s;
    const e = window.scrollY;
    this.inputElementRef[m].contains(`text-input-${j}`) || (Object.assign(this.inputElementRef[v], (t = this._config.placeholder) == null ? void 0 : t[v]), this.inputElementRef.textContent = "", ln.focusEndOfInput(this.inputElementRef), (n = this._onInput) == null || n.call(this, !1), (s = this._browserStorage) == null || s.addInputText("")), $e.IS_CHROMIUM && window.scrollTo({ top: e });
  }
  createInputElement(e, t) {
    var s, r, o, a;
    const n = A();
    return n.id = Bt.TEXT_INPUT_ID, n[m].add("text-input-styling"), n[x] = "textbox", typeof e == "string" ? n.innerText = e : t != null && t.trackInputText && (n.innerText = t.get().inputText || ""), $e.IS_MOBILE && n.setAttribute("tabindex", "0"), $e.IS_CHROMIUM && Bt.preventAutomaticScrollUpOnNewLine(n), typeof this._config[j] == "boolean" && this._config[j] === !0 ? (n.contentEditable = "false", n[m].add(`text-input-${j}`), n.setAttribute(`aria-${j}`, "true")) : (n.contentEditable = "true", n.removeAttribute(`aria-${j}`), this.addEventListeners(n)), Object.assign(n[v], (s = this._config[R]) == null ? void 0 : s[h]), Object.assign(n[v], (r = this._config.placeholder) == null ? void 0 : r[v]), (a = (o = this._config.placeholder) == null ? void 0 : o[v]) != null && a.color || n.setAttribute("textcolor", ""), n;
  }
  static addFilesToAnyType(e, t) {
    t && e.addFilesToAnyType(Array.from(t).map((n) => n));
  }
  removePlaceholderStyle() {
    var e, t, n, s;
    !this.inputElementRef[m].contains(`text-input-${j}`) && ((e = this._config.placeholder) != null && e[v]) && (de.unsetStyle(this.inputElementRef, (t = this._config.placeholder) == null ? void 0 : t[v]), Object.assign(this.inputElementRef[v], (s = (n = this._config) == null ? void 0 : n[R]) == null ? void 0 : s[h]));
  }
  addEventListeners(e) {
    var t, n;
    (t = this._config[R]) != null && t.focus && (e.onfocus = () => {
      var s;
      return Object.assign(this.elementRef[v], (s = this._config[R]) == null ? void 0 : s.focus);
    }, e.onblur = this.onBlur.bind(this, this._config[R].focus, (n = this._config[R]) == null ? void 0 : n.container)), e.addEventListener("keydown", this.onKeydown.bind(this)), e.addEventListener("input", this.onInput.bind(this)), e.addEventListener("paste", ka.sanitizePastedTextContent), e.addEventListener("compositionstart", () => this._isComposing = !0), e.addEventListener("compositionend", () => this._isComposing = !1);
  }
  onBlur(e, t) {
    de.unsetStyle(this.elementRef, e), t && Object.assign(this.elementRef[v], t);
  }
  onKeydown(e) {
    var t;
    e.key === _e.ENTER && !$e.IS_MOBILE && !this._isComposing && !e.ctrlKey && !e.shiftKey && (e.preventDefault(), (t = this.submit) == null || t.call(this));
  }
  onInput() {
    var e, t;
    this.isTextInputEmpty() ? Object.assign(this.inputElementRef[v], (e = this._config.placeholder) == null ? void 0 : e[v]) : this.removePlaceholderStyle(), (t = this._onInput) == null || t.call(this, !0);
  }
  setPlaceholderText(e) {
    this.inputElementRef.setAttribute("deep-chat-placeholder-text", e), this.inputElementRef.setAttribute("aria-label", e);
  }
  isTextInputEmpty() {
    return this.inputElementRef.textContent === "";
  }
};
Bt.TEXT_INPUT_ID = "text-input";
let Ks = Bt;
class ln {
  static focusEndOfInput(e) {
    const t = document.createRange();
    t.selectNodeContents(e), t.collapse(!1);
    const n = window.getSelection();
    n == null || n.removeAllRanges(), n == null || n.addRange(t), ($e.IS_MOBILE || $e.IS_SAFARI) && e.focus();
  }
  static focusFromParentElement(e) {
    const t = e.querySelector(`#${Ks.TEXT_INPUT_ID}`);
    t && ln.focusEndOfInput(t);
  }
}
const Ho = "Authentication", he = "Authorization", Pa = "authorization", yi = "Unauthorized", ar = "Authorization header", zt = "Invalid", Ps = "Incorrect", Te = "authentication_error", it = "invalid_request_error", q = "Content-Type", La = "content-type", te = "application/json", U = "object", cr = "completed", Ce = "Bearer ", ue = "GET", ye = "POST", lr = "Upload an audio file", $s = "function_call", sn = "input_audio", qe = "image_url", Mn = "system", pi = class pi {
  static addElements(e, ...t) {
    t.forEach((n) => e.appendChild(n));
  }
  static isScrollbarAtBottomOfElement(e, t = pi.CODE_SNIPPET_GENERATION_JUMP) {
    const n = e.scrollHeight, s = e.clientHeight, r = e.scrollTop, o = n - s;
    return r >= o - t;
  }
  static cloneElement(e) {
    const t = e.cloneNode(!0);
    return e.parentNode.replaceChild(t, e), t;
  }
  static scrollToBottom(e, t = !1, n) {
    e.scrollButton && e.scrollButton.hiddenElements.size > 0 && e.scrollButton.clearHidden(), n ? e.elementRef.scrollTo({ left: 0, top: n.offsetTop }) : t ? e.elementRef.scrollTo({ left: 0, top: e.elementRef.scrollHeight, behavior: "smooth" }) : e.elementRef.scrollTop = e.elementRef.scrollHeight;
  }
  static scrollToTop(e) {
    e.scrollTop = 0;
  }
  static isVisibleInParent(e, t) {
    const n = e.getBoundingClientRect(), s = t.getBoundingClientRect();
    return n.bottom > s.top && n.top < s.bottom;
  }
  static waitForScrollEnd(e, t) {
    let n = -1, s = 0;
    const r = () => {
      const o = e.scrollTop;
      if (o === n) {
        if (s++, s > 2) {
          t();
          return;
        }
      } else
        s = 0, n = o;
      requestAnimationFrame(r);
    };
    requestAnimationFrame(r);
  }
  static assignButtonEvents(e, t) {
    e.onclick = t, e.onkeydown = (n) => {
      n.key === _e.ENTER && setTimeout(t);
    };
  }
};
pi.CODE_SNIPPET_GENERATION_JUMP = 1;
let z = pi;
const fi = class fi {
  static speak(e, t) {
    if (!t.audio && window.SpeechSynthesisUtterance) {
      const n = new SpeechSynthesisUtterance(e);
      Object.assign(n, t), speechSynthesis.speak(n);
    }
  }
  static processConfig(e, t) {
    const n = {};
    setTimeout(() => {
      if (typeof e == "object" && (e.audio && (n.audio = e.audio), e.lang && (n.lang = e.lang), e.pitch && (n.pitch = e.pitch), e.rate && (n.rate = e.rate), e.volume && (n.volume = e.volume), e.voiceName)) {
        const s = window.speechSynthesis.getVoices().find((r) => {
          var o;
          return r.name.toLocaleLowerCase() === ((o = e.voiceName) == null ? void 0 : o.toLocaleLowerCase());
        });
        s && (n.voice = s);
      }
      t(n);
    }, fi.LOAD_VOICES_MS);
  }
};
fi.LOAD_VOICES_MS = 200;
let Rn = fi;
const Sn = class Sn {
  static colorToHex(e) {
    const t = A();
    return t[v].color = e, document.body.appendChild(t), `#${window.getComputedStyle(t).color.match(/\d+/g).map((r) => parseInt(r).toString(16).padStart(2, "0")).join("")}`;
  }
  static setDots(e, t) {
    var n, s;
    if ((s = (n = t == null ? void 0 : t[R]) == null ? void 0 : n.bubble) != null && s.color) {
      const r = Sn.colorToHex(t[R].bubble.color);
      e[v].setProperty("--loading-message-color", r), e[v].setProperty("--loading-message-color-fade", `${r}33`);
    } else
      e[v].setProperty("--loading-message-color", "#848484"), e[v].setProperty("--loading-message-color-fade", "#55555533");
  }
  static setRing(e, t) {
    const { color: n, width: s, height: r, margin: o, border: a } = t || {};
    if (n) {
      const c = Sn.colorToHex(n);
      e[v].setProperty("--loading-history-color", c);
    } else
      e[v].setProperty("--loading-history-color", "#dbdbdb");
    e[v].setProperty("--loading-history-height", r || "57px"), e[v].setProperty("--loading-history-width", s || "57px"), e[v].setProperty("--loading-history-margin", o || "7px"), e[v].setProperty("--loading-history-border", a || "6px solid");
  }
};
Sn.BUBBLE_CLASS = "deep-chat-loading-message-bubble", Sn.DOTS_CONTAINER_CLASS = "deep-chat-loading-message-dots-container";
let mt = Sn;
class le {
  static checkForContainerStyles(e, t) {
    const n = e.containerStyle;
    n && (Object.assign(t[v], n), console[f](`The containerStyle property${Je}1.3.14.`), console[f](`${Vt}the style property instead: ${Z}styles#style`));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static handleResponseProperty(e) {
    return console[f](`The {result: ....} response object type${Je}1.3.0.`), console[f](`${Vt}the new response object: ${Z}connect#Response`), e.result;
  }
  static processHistory(e) {
    const t = e.initialMessages;
    if (t)
      return console[f](`The initialMessages property${Je}2.0.0.`), console[f](`${Vt}the history property instead: ${Z}messages/#history`), t;
  }
  static processHistoryFile(e) {
    const t = e[se];
    t && (console[f](`The file property in MessageContent${Je}1.3.17.`), console[f](`${Vt}the files array property: ${Z}messages/#MessageContent`), e[b] = [t]);
  }
  static processValidateInput(e) {
    const t = e.validateMessageBeforeSending;
    if (t)
      return console[f](`The validateMessageBeforeSending property${Je}1.3.24.`), console[f](`${Vt}validateInput: ${Z}interceptors#validateInput`), t;
  }
  static processSubmitUserMessage(e) {
    return console[f](`The submitUserMessage(text: string) argument string type${Je}1.4.4.`), console[f](`${Vt}the new argument type: ${Z}methods#submitUserMessage`), { [h]: e };
  }
  static flagHTMLUpdateClass(e) {
    var t;
    (t = e.children[0]) != null && t[m].contains("deep-chat-update-message") && (console[f](`The "deep-chat-update-message" html class${Je}1.4.4.`), console[f](`${Vt}using {..., overwrite: true} object: ${Z}connect#Response`));
  }
  static processConnect(e) {
    const t = e;
    t.request && (t.connect ? Object.assign(t.connect, t.request) : t.connect = t.request, console[f](`The request property${Je}2.0.0.`), console[f](`${Bs}connect object: ${Z}connect#connect-1`));
  }
  static checkForStream(e) {
    const t = e.stream;
    if (t)
      return console[f](`The stream property${jr}the connect object in version 2.0.0.`), console[f](`${Bs}connect object: ${Z}connect#connect-1`), t;
  }
  static fireOnNewMessage(e, t) {
    var s;
    const n = e;
    n.onNewMessage && (console[f](`The onNewMessage event${Je}2.0.0.`), console[f](`${Bs}onMessage event: ${Z}events#onMessage`), (s = n.onNewMessage) == null || s.call(n, t)), e.dispatchEvent(new CustomEvent("new-message", { detail: t }));
  }
  static processFileConfigConnect(e) {
    const t = e;
    t.request && (console[f](`The request property in file configuration${Je}2.0.0.`), console[f](`Please use the connect property instead: ${Z}files`), t.connect || (t.connect = t.request));
  }
  static processMessageStyles(e) {
    if (!e) return;
    const t = C(e), n = t.loading;
    return n && (n.outerContainer || n.innerContainer || n.bubble || n.media) && (console[f](`The loading message styles are defined using LoadingMessageStyles interface${En}2.1.0.`), console[f](`Check it out here: ${Z}messages/styles#LoadingMessageStyles`), t.loading = { message: { styles: n } }), t;
  }
  static processDemo(e) {
    return typeof e == "boolean" || e.displayLoadingBubble && (console[f](`The demo displayLoadingBubble property${Je}2.1.0.`), console[f](`Please use displayLoading instead: ${Z}modes#demo`), e.displayLoading = { message: !0 }), e;
  }
  static processCohere(e) {
    const t = e, n = `${Bs}official documentation: ${Z}directConnection/Cohere`;
    return t.chat && (console[f](`Cohere chat property${Je}2.2.3.`), console[f](n), delete t.chat), t.textGeneration ? (console[f](`Cohere textGeneration${Hr}2.2.3.`), console[f](n), delete t.textGeneration, !1) : t.summarization ? (console[f](`Cohere summarization${Hr}2.2.3.`), console[f](n), delete t.summarization, !1) : !0;
  }
  static processStreamHTMLWrappers(e) {
    if (!e || typeof e !== U) return;
    const t = e.htmlWrappers;
    if (t)
      return console[f](`The htmlWrappers property${jr}Deep Chat's base${En}2.3.0.`), console[f](`Check it out here: ${Z}messages/HTML#htmlWrappers`), t;
  }
  static processFocusMode(e) {
    return !e || typeof e == "boolean" || e.scroll && (console[f](`The scroll property in focusMode has been changed to smoothScroll${En}2.3.0.`), console[f](`Check it out here: ${Z}modes#focusMode`), e.smoothScroll = !0), e;
  }
  static processPosition(e) {
    if (!e) return e;
    const t = `Position names have been updated${En}2.3.1.`;
    return e === "inside-left" ? (console[f](t), In) : e === "inside-right" ? (console[f](t), ft) : e === "outside-left" ? (console[f](t), Le) : e === "outside-right" ? (console[f](t), ve) : e;
  }
  static processBrowserStorage(e) {
    const t = e.get();
    t && Array.isArray(t) && e.addMessages(t);
  }
}
const En = " since version ", Je = ` is deprecated ${En}`, Vt = "Please change to using ", Bs = "Please see the ", Hr = ` is not supported ${En}`, jr = " has been moved to ";
class Rt {
  static mouseUp(e, t) {
    de.unsetAllCSSMouseStates(e, t), Object.assign(e[v], t[w]), Object.assign(e[v], t[De]);
  }
  static mouseDown(e, t) {
    Object.assign(e[v], t[J]);
  }
  static mouseLeave(e, t) {
    de.unsetAllCSSMouseStates(e, t), Object.assign(e[v], t[w]);
  }
  static mouseEnter(e, t) {
    Object.assign(e[v], t[De]);
  }
  static add(e, t) {
    e.addEventListener(ks, Rt.mouseEnter.bind(this, e, t)), e.addEventListener(cn, Rt.mouseLeave.bind(this, e, t)), e.addEventListener(Ia, Rt.mouseDown.bind(this, e, t)), e.addEventListener(Ma, Rt.mouseUp.bind(this, e, t));
  }
}
const Oa = "deep-chat-temporary-message", Na = "deep-chat-suggestion-button", Fi = {
  "deep-chat-button": {
    styles: {
      [w]: {
        backgroundColor: "white",
        padding: "5px",
        paddingLeft: "7px",
        paddingRight: "7px",
        border: "1px solid #c2c2c2",
        borderRadius: "6px",
        cursor: "pointer"
      },
      [De]: {
        backgroundColor: "#fafafa"
      },
      [J]: {
        backgroundColor: "#f1f1f1"
      }
    }
  }
}, $r = Object.keys(Fi);
class bt {
  static applySuggestionEvent(e, t) {
    setTimeout(() => {
      t.addEventListener(J, () => {
        var n, s;
        (s = e.submitUserMessage) == null || s.call(e, { [h]: ((n = t.textContent) == null ? void 0 : n.trim()) || "" });
      });
    });
  }
  static isElementTemporary(e) {
    var t;
    return e ? (t = e.bubbleElement.children[0]) == null ? void 0 : t[m].contains(Oa) : !1;
  }
  static doesElementContainDeepChatClass(e) {
    return $r.find((t) => e[m].contains(t));
  }
  static applyEvents(e, t) {
    const n = Fi[t].events;
    Object.keys(n || []).forEach((s) => {
      e.addEventListener(s, n == null ? void 0 : n[s]);
    });
  }
  static getProcessedStyles(e, t, n) {
    const s = Array.from(t[m]).reduce((a, c) => {
      var d;
      const l = (d = e[c]) == null ? void 0 : d[R];
      return l && e[c][R] && a.push(l), a;
    }, []), r = Fi[n][R];
    if (r) {
      const a = C(r);
      a[w] && de.overwriteDefaultWithAlreadyApplied(a, t), s.unshift(a);
    }
    const o = de.mergeStatefulStyles(s);
    return de.processStateful(o);
  }
  static applyDeepChatUtilities(e, t, n) {
    $r.forEach((r) => {
      const o = n.getElementsByClassName(r);
      Array.from(o || []).forEach((a) => {
        const c = bt.getProcessedStyles(t, a, r);
        oe.applyStylesToElement(a, c), bt.applyEvents(a, r);
      });
    });
    const s = n.getElementsByClassName(Na);
    Array.from(s).forEach((r) => bt.applySuggestionEvent(e, r));
  }
}
class oe {
  static applyStylesToElement(e, t) {
    const n = de.processStateful(t);
    Rt.add(e, n), Object.assign(e[v], n[w]);
  }
  static applyEventsToElement(e, t) {
    Object.keys(t).forEach((n) => {
      const s = t[n];
      s && e.addEventListener(n, s);
    });
  }
  static applyClassUtilitiesToElement(e, t) {
    const { events: n, styles: s } = t;
    n && oe.applyEventsToElement(e, n), s && !bt.doesElementContainDeepChatClass(e) && oe.applyStylesToElement(e, s);
  }
  static applyCustomClassUtilities(e, t) {
    Object.keys(e).forEach((n) => {
      const s = t.getElementsByClassName(n);
      Array.from(s).forEach((r) => {
        e[n] && oe.applyClassUtilitiesToElement(r, e[n]);
      });
    });
  }
  static apply(e, t) {
    bt.applyDeepChatUtilities(e, e.htmlClassUtilities, t), oe.applyCustomClassUtilities(e.htmlClassUtilities, t);
  }
  static traverseNodes(e, t) {
    e.nodeType === Node.ELEMENT_NODE && t.push(e.outerHTML), e.childNodes.forEach((n) => {
      oe.traverseNodes(n, t);
    });
  }
  static splitHTML(e) {
    const n = new DOMParser().parseFromString(e, "text/html"), s = [];
    return n.body.childNodes.forEach((r) => {
      oe.traverseNodes(r, s);
    }), s;
  }
  static isTemporaryBasedOnHTML(e) {
    const t = A();
    return t.innerHTML = e, bt.isElementTemporary({
      outerContainer: t,
      bubbleElement: t,
      innerContainer: t
    });
  }
  // useful for removing event listeners
  static replaceElementWithNewClone(e, t) {
    var s;
    const n = (t || e).cloneNode(!0);
    return (s = e.parentNode) == null || s.replaceChild(n, e), n;
  }
  static tryAddWrapper(e, t, n, s) {
    if (t && s) {
      const r = (n == null ? void 0 : n[s]) || (n == null ? void 0 : n[w]);
      if (r)
        return e.innerHTML = r, { contentEl: oe.getTargetWrapper(e), wrapper: !0 };
    }
    return { contentEl: e, wrapper: !1 };
  }
  static getTargetWrapper(e) {
    return e.getElementsByClassName(ba)[0] || e;
  }
}
const Dt = class Dt {
  static createElements(e, t, n, s, r = !1) {
    const o = e.createMessageElementsOnOrientation("", n, s, r);
    o.bubbleElement[m].add(Dt.HTML_BUBBLE_CLASS);
    const { contentEl: a } = oe.tryAddWrapper(o.bubbleElement, t, e._customWrappers, n);
    return a.innerHTML = t, o;
  }
  static overwriteElements(e, t, n) {
    n.bubbleElement.innerHTML = t, oe.apply(e, n.outerContainer), le.flagHTMLUpdateClass(n.bubbleElement);
  }
  // prettier-ignore
  static overwrite(e, t, n, s) {
    const { messageToElements: r } = e, o = B.overwriteMessage(
      r,
      s,
      t,
      n,
      L,
      Dt.HTML_BUBBLE_CLASS
    );
    return o && Dt.overwriteElements(e, t, o), o;
  }
  static create(e, t, n, s = !1) {
    var o;
    const r = Dt.createElements(e, t, n, s);
    return B.fillEmptyMessageElement(r.bubbleElement, t), oe.apply(e, r.outerContainer), le.flagHTMLUpdateClass(r.bubbleElement), e.applyCustomStyles(r, n, !1, (o = e.messageStyles) == null ? void 0 : o[L]), r;
  }
  static add(e, t, n, s, r = !1) {
    if (s != null && s.status) {
      const a = this.overwrite(e, t, n, e.messageElementRefs);
      if (a) return a;
      s.status = !1;
    }
    if (r && e.messageElementRefs.length > 0 && oe.isTemporaryBasedOnHTML(t))
      return;
    const o = Dt.create(e, t, n, r);
    return r || e.appendOuterContainerElemet(o.outerContainer), o;
  }
};
Dt.HTML_BUBBLE_CLASS = "html-message";
let yt = Dt;
class Ba {
  static katex(e, t, n) {
    const a = (n || {}).delimiter || "$";
    if (a.length !== 1)
      throw new Error("invalid delimiter");
    const c = (p, u) => {
      var g;
      return ((g = window.katex) == null ? void 0 : g.renderToString(p, { displayMode: u, throwOnError: !1, output: "mathml", ...e })) || "";
    }, l = (p, u, g) => {
      let y = !1, _ = p.bMarks[u] + p.tShift[u], S = p.eMarks[u];
      if (_ + 1 > S)
        return !1;
      const M = p[T].charAt(_);
      if (M !== a)
        return !1;
      let K = _;
      _ = p.skipChars(_, M);
      let ie = _ - K;
      if (ie !== 2)
        return !1;
      let re = u;
      for (; ++re, !(re >= g || (_ = K = p.bMarks[re] + p.tShift[re], S = p.eMarks[re], _ < S && p.tShift[re] < p.blkIndent)); )
        if (p[T].charAt(_) === a && !(p.tShift[re] - p.blkIndent >= 4) && (_ = p.skipChars(_, M), !(_ - K < ie) && (_ = p.skipSpaces(_), !(_ < S)))) {
          y = !0;
          break;
        }
      ie = p.tShift[u], p.line = re + (y ? 1 : 0);
      const Re = p.getLines(u + 1, re, ie, !0).replace(/[ \n]+/g, " ").trim();
      return p.tokens.push({
        type: "katex",
        params: null,
        content: Re,
        lines: [u, p.line],
        level: p.level,
        block: !0
      }), !0;
    }, d = (p, u) => {
      const g = p.pos, y = p.posMax;
      let _ = g;
      if (p[T].charAt(_) !== a)
        return !1;
      for (++_; _ < y && p[T].charAt(_) === a; )
        ++_;
      const S = p[T].slice(g, _);
      if (S.length > 2)
        return !1;
      const M = _;
      let K = 0;
      for (; _ < y; ) {
        const ie = p[T].charAt(_);
        if (ie === "{" && (_ === 0 || p[T].charAt(_ - 1) !== "\\"))
          K += 1;
        else if (ie === "}" && (_ === 0 || p[T].charAt(_ - 1) !== "\\")) {
          if (K -= 1, K < 0)
            return !1;
        } else if (ie === a && K === 0) {
          const re = _;
          let Re = _ + 1;
          for (; Re < y && p[T].charAt(Re) === a; )
            ++Re;
          if (Re - re === S.length) {
            if (!u) {
              const Lt = p[T].slice(M, re).replace(/[ \n]+/g, " ").trim();
              p.push({ type: "katex", content: Lt, block: S.length > 1, level: p.level });
            }
            return p.pos = Re, !0;
          }
        }
        _ += 1;
      }
      return u || (p.pending += S), p.pos += S.length, !0;
    };
    t.inline.ruler.push("katex", d, n), t.block.ruler.push("katex", l, n), t.renderer.rules.katex = (p, u) => c(p[u].content, p[u].block), t.renderer.rules.katex.delimiter = a;
  }
}
var Ds;
function jo(i) {
  return Ds = Ds || document.createElement("textarea"), Ds.innerHTML = "&" + i + ";", Ds.value;
}
var Da = Object.prototype.hasOwnProperty;
function Fa(i, e) {
  return i ? Da.call(i, e) : !1;
}
function $o(i) {
  var e = [].slice.call(arguments, 1);
  return e.forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(n) {
        i[n] = t[n];
      });
    }
  }), i;
}
var Ua = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function xs(i) {
  return i.indexOf("\\") < 0 ? i : i.replace(Ua, "$1");
}
function qo(i) {
  return !(i >= 55296 && i <= 57343 || i >= 64976 && i <= 65007 || (i & 65535) === 65535 || (i & 65535) === 65534 || i >= 0 && i <= 8 || i === 11 || i >= 14 && i <= 31 || i >= 127 && i <= 159 || i > 1114111);
}
function Ui(i) {
  if (i > 65535) {
    i -= 65536;
    var e = 55296 + (i >> 10), t = 56320 + (i & 1023);
    return String.fromCharCode(e, t);
  }
  return String.fromCharCode(i);
}
var Ha = /&([a-z#][a-z0-9]{1,31});/gi, ja = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function $a(i, e) {
  var t = 0, n = jo(e);
  return e !== n ? n : e.charCodeAt(0) === 35 && ja.test(e) && (t = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), qo(t)) ? Ui(t) : i;
}
function dn(i) {
  return i.indexOf("&") < 0 ? i : i.replace(Ha, $a);
}
var qa = /[&<>"]/, Ga = /[&<>"]/g, za = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Va(i) {
  return za[i];
}
function Ge(i) {
  return qa.test(i) ? i.replace(Ga, Va) : i;
}
var I = {};
I.blockquote_open = function() {
  return `<blockquote>
`;
};
I.blockquote_close = function(i, e) {
  return "</blockquote>" + pn(i, e);
};
I.code = function(i, e) {
  return i[e].block ? "<pre><code>" + Ge(i[e].content) + "</code></pre>" + pn(i, e) : "<code>" + Ge(i[e].content) + "</code>";
};
I.fence = function(i, e, t, n, s) {
  var r = i[e], o = "", a = t.langPrefix, c = "", l, d, p;
  if (r.params) {
    if (l = r.params.split(/\s+/g), d = l.join(" "), Fa(s.rules.fence_custom, l[0]))
      return s.rules.fence_custom[l[0]](i, e, t, n, s);
    c = Ge(dn(xs(d))), o = ' class="' + a + c + '"';
  }
  return t.highlight ? p = t.highlight.apply(t.highlight, [r.content].concat(l)) || Ge(r.content) : p = Ge(r.content), "<pre><code" + o + ">" + p + "</code></pre>" + pn(i, e);
};
I.fence_custom = {};
I.heading_open = function(i, e) {
  return "<h" + i[e].hLevel + ">";
};
I.heading_close = function(i, e) {
  return "</h" + i[e].hLevel + `>
`;
};
I.hr = function(i, e, t) {
  return (t.xhtmlOut ? "<hr />" : "<hr>") + pn(i, e);
};
I.bullet_list_open = function() {
  return `<ul>
`;
};
I.bullet_list_close = function(i, e) {
  return "</ul>" + pn(i, e);
};
I.list_item_open = function() {
  return "<li>";
};
I.list_item_close = function() {
  return `</li>
`;
};
I.ordered_list_open = function(i, e) {
  var t = i[e], n = t.order > 1 ? ' start="' + t.order + '"' : "";
  return "<ol" + n + `>
`;
};
I.ordered_list_close = function(i, e) {
  return "</ol>" + pn(i, e);
};
I.paragraph_open = function(i, e) {
  return i[e].tight ? "" : "<p>";
};
I.paragraph_close = function(i, e) {
  var t = !(i[e].tight && e && i[e - 1].type === "inline" && !i[e - 1].content);
  return (i[e].tight ? "" : "</p>") + (t ? pn(i, e) : "");
};
I.link_open = function(i, e, t) {
  var n = i[e].title ? ' title="' + Ge(dn(i[e].title)) + '"' : "", s = t.linkTarget ? ' target="' + t.linkTarget + '"' : "";
  return '<a href="' + Ge(i[e].href) + '"' + n + s + ">";
};
I.link_close = function() {
  return "</a>";
};
I.image = function(i, e, t) {
  var n = ' src="' + Ge(i[e].src) + '"', s = i[e].title ? ' title="' + Ge(dn(i[e].title)) + '"' : "", r = ' alt="' + (i[e].alt ? Ge(dn(xs(i[e].alt))) : "") + '"', o = t.xhtmlOut ? " /" : "";
  return "<img" + n + r + s + o + ">";
};
I.table_open = function() {
  return `<table>
`;
};
I.table_close = function() {
  return `</table>
`;
};
I.thead_open = function() {
  return `<thead>
`;
};
I.thead_close = function() {
  return `</thead>
`;
};
I.tbody_open = function() {
  return `<tbody>
`;
};
I.tbody_close = function() {
  return `</tbody>
`;
};
I.tr_open = function() {
  return "<tr>";
};
I.tr_close = function() {
  return `</tr>
`;
};
I.th_open = function(i, e) {
  var t = i[e];
  return "<th" + (t.align ? ' style="text-align:' + t.align + '"' : "") + ">";
};
I.th_close = function() {
  return "</th>";
};
I.td_open = function(i, e) {
  var t = i[e];
  return "<td" + (t.align ? ' style="text-align:' + t.align + '"' : "") + ">";
};
I.td_close = function() {
  return "</td>";
};
I.strong_open = function() {
  return "<strong>";
};
I.strong_close = function() {
  return "</strong>";
};
I.em_open = function() {
  return "<em>";
};
I.em_close = function() {
  return "</em>";
};
I.del_open = function() {
  return "<del>";
};
I.del_close = function() {
  return "</del>";
};
I.ins_open = function() {
  return "<ins>";
};
I.ins_close = function() {
  return "</ins>";
};
I.mark_open = function() {
  return "<mark>";
};
I.mark_close = function() {
  return "</mark>";
};
I.sub = function(i, e) {
  return "<sub>" + Ge(i[e].content) + "</sub>";
};
I.sup = function(i, e) {
  return "<sup>" + Ge(i[e].content) + "</sup>";
};
I.hardbreak = function(i, e, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
I.softbreak = function(i, e, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
I.text = function(i, e) {
  return Ge(i[e].content);
};
I.htmlblock = function(i, e) {
  return i[e].content;
};
I.htmltag = function(i, e) {
  return i[e].content;
};
I.abbr_open = function(i, e) {
  return '<abbr title="' + Ge(dn(i[e].title)) + '">';
};
I.abbr_close = function() {
  return "</abbr>";
};
I.footnote_ref = function(i, e) {
  var t = Number(i[e].id + 1).toString(), n = "fnref" + t;
  return i[e].subId > 0 && (n += ":" + i[e].subId), '<sup class="footnote-ref"><a href="#fn' + t + '" id="' + n + '">[' + t + "]</a></sup>";
};
I.footnote_block_open = function(i, e, t) {
  var n = t.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`;
  return n + `<section class="footnotes">
<ol class="footnotes-list">
`;
};
I.footnote_block_close = function() {
  return `</ol>
</section>
`;
};
I.footnote_open = function(i, e) {
  var t = Number(i[e].id + 1).toString();
  return '<li id="fn' + t + '"  class="footnote-item">';
};
I.footnote_close = function() {
  return `</li>
`;
};
I.footnote_anchor = function(i, e) {
  var t = Number(i[e].id + 1).toString(), n = "fnref" + t;
  return i[e].subId > 0 && (n += ":" + i[e].subId), ' <a href="#' + n + '" class="footnote-backref">↩</a>';
};
I.dl_open = function() {
  return `<dl>
`;
};
I.dt_open = function() {
  return "<dt>";
};
I.dd_open = function() {
  return "<dd>";
};
I.dl_close = function() {
  return `</dl>
`;
};
I.dt_close = function() {
  return `</dt>
`;
};
I.dd_close = function() {
  return `</dd>
`;
};
function Go(i, e) {
  return ++e >= i.length - 2 ? e : i[e].type === "paragraph_open" && i[e].tight && i[e + 1].type === "inline" && i[e + 1].content.length === 0 && i[e + 2].type === "paragraph_close" && i[e + 2].tight ? Go(i, e + 2) : e;
}
var pn = I.getBreak = function(e, t) {
  return t = Go(e, t), t < e.length && e[t].type === "list_item_close" ? "" : `
`;
};
function dr() {
  this.rules = $o({}, I), this.getBreak = I.getBreak;
}
dr.prototype.renderInline = function(i, e, t) {
  for (var n = this.rules, s = i.length, r = 0, o = ""; s--; )
    o += n[i[r].type](i, r++, e, t, this);
  return o;
};
dr.prototype.render = function(i, e, t) {
  for (var n = this.rules, s = i.length, r = -1, o = ""; ++r < s; )
    i[r].type === "inline" ? o += this.renderInline(i[r].children, e, t) : o += n[i[r].type](i, r, e, t, this);
  return o;
};
function Ye() {
  this.__rules__ = [], this.__cache__ = null;
}
Ye.prototype.__find__ = function(i) {
  for (var e = this.__rules__.length, t = -1; e--; )
    if (this.__rules__[++t].name === i)
      return t;
  return -1;
};
Ye.prototype.__compile__ = function() {
  var i = this, e = [""];
  i.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(n) {
      e.indexOf(n) < 0 && e.push(n);
    });
  }), i.__cache__ = {}, e.forEach(function(t) {
    i.__cache__[t] = [], i.__rules__.forEach(function(n) {
      n.enabled && (t && n.alt.indexOf(t) < 0 || i.__cache__[t].push(n.fn));
    });
  });
};
Ye.prototype.at = function(i, e, t) {
  var n = this.__find__(i), s = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + i);
  this.__rules__[n].fn = e, this.__rules__[n].alt = s.alt || [], this.__cache__ = null;
};
Ye.prototype.before = function(i, e, t, n) {
  var s = this.__find__(i), r = n || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + i);
  this.__rules__.splice(s, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Ye.prototype.after = function(i, e, t, n) {
  var s = this.__find__(i), r = n || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + i);
  this.__rules__.splice(s + 1, 0, {
    name: e,
    enabled: !0,
    fn: t,
    alt: r.alt || []
  }), this.__cache__ = null;
};
Ye.prototype.push = function(i, e, t) {
  var n = t || {};
  this.__rules__.push({
    name: i,
    enabled: !0,
    fn: e,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Ye.prototype.enable = function(i, e) {
  i = Array.isArray(i) ? i : [i], e && this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), i.forEach(function(t) {
    var n = this.__find__(t);
    if (n < 0)
      throw new Error("Rules manager: invalid rule name " + t);
    this.__rules__[n].enabled = !0;
  }, this), this.__cache__ = null;
};
Ye.prototype.disable = function(i) {
  i = Array.isArray(i) ? i : [i], i.forEach(function(e) {
    var t = this.__find__(e);
    if (t < 0)
      throw new Error("Rules manager: invalid rule name " + e);
    this.__rules__[t].enabled = !1;
  }, this), this.__cache__ = null;
};
Ye.prototype.getRules = function(i) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[i] || [];
};
function Ka(i) {
  i.inlineMode ? i.tokens.push({
    type: "inline",
    content: i.src.replace(/\n/g, " ").trim(),
    level: 0,
    lines: [0, 1],
    children: []
  }) : i.block.parse(i.src, i.options, i.env, i.tokens);
}
function fn(i, e, t, n, s) {
  this.src = i, this.env = n, this.options = t, this.parser = e, this.tokens = s, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
}
fn.prototype.pushPending = function() {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  }), this.pending = "";
};
fn.prototype.push = function(i) {
  this.pending && this.pushPending(), this.tokens.push(i), this.pendingLevel = this.level;
};
fn.prototype.cacheSet = function(i, e) {
  for (var t = this.cache.length; t <= i; t++)
    this.cache.push(0);
  this.cache[i] = e;
};
fn.prototype.cacheGet = function(i) {
  return i < this.cache.length ? this.cache[i] : 0;
};
function As(i, e) {
  var t, n, s, r = -1, o = i.posMax, a = i.pos, c = i.isInLabel;
  if (i.isInLabel)
    return -1;
  if (i.labelUnmatchedScopes)
    return i.labelUnmatchedScopes--, -1;
  for (i.pos = e + 1, i.isInLabel = !0, t = 1; i.pos < o; ) {
    if (s = i.src.charCodeAt(i.pos), s === 91)
      t++;
    else if (s === 93 && (t--, t === 0)) {
      n = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return n ? (r = i.pos, i.labelUnmatchedScopes = 0) : i.labelUnmatchedScopes = t - 1, i.pos = a, i.isInLabel = c, r;
}
function Wa(i, e, t, n) {
  var s, r, o, a, c, l;
  if (i.charCodeAt(0) !== 42 || i.charCodeAt(1) !== 91 || i.indexOf("]:") === -1 || (s = new fn(i, e, t, n, []), r = As(s, 1), r < 0 || i.charCodeAt(r + 1) !== 58))
    return -1;
  for (a = s.posMax, o = r + 2; o < a && s.src.charCodeAt(o) !== 10; o++)
    ;
  return c = i.slice(2, r), l = i.slice(r + 2, o).trim(), l.length === 0 ? -1 : (n.abbreviations || (n.abbreviations = {}), typeof n.abbreviations[":" + c] > "u" && (n.abbreviations[":" + c] = l), o);
}
function Xa(i) {
  var e = i.tokens, t, n, s, r;
  if (!i.inlineMode) {
    for (t = 1, n = e.length - 1; t < n; t++)
      if (e[t - 1].type === "paragraph_open" && e[t].type === "inline" && e[t + 1].type === "paragraph_close") {
        for (s = e[t].content; s.length && (r = Wa(s, i.inline, i.options, i.env), !(r < 0)); )
          s = s.slice(r).trim();
        e[t].content = s, s.length || (e[t - 1].tight = !0, e[t + 1].tight = !0);
      }
  }
}
function Hi(i) {
  var e = dn(i);
  try {
    e = decodeURI(e);
  } catch {
  }
  return encodeURI(e);
}
function zo(i, e) {
  var t, n, s, r = e, o = i.posMax;
  if (i.src.charCodeAt(e) === 60) {
    for (e++; e < o; ) {
      if (t = i.src.charCodeAt(e), t === 10)
        return !1;
      if (t === 62)
        return s = Hi(xs(i.src.slice(r + 1, e))), i.parser.validateLink(s) ? (i.pos = e + 1, i.linkContent = s, !0) : !1;
      if (t === 92 && e + 1 < o) {
        e += 2;
        continue;
      }
      e++;
    }
    return !1;
  }
  for (n = 0; e < o && (t = i.src.charCodeAt(e), !(t === 32 || t < 32 || t === 127)); ) {
    if (t === 92 && e + 1 < o) {
      e += 2;
      continue;
    }
    if (t === 40 && (n++, n > 1) || t === 41 && (n--, n < 0))
      break;
    e++;
  }
  return r === e || (s = xs(i.src.slice(r, e)), !i.parser.validateLink(s)) ? !1 : (i.linkContent = s, i.pos = e, !0);
}
function Vo(i, e) {
  var t, n = e, s = i.posMax, r = i.src.charCodeAt(e);
  if (r !== 34 && r !== 39 && r !== 40)
    return !1;
  for (e++, r === 40 && (r = 41); e < s; ) {
    if (t = i.src.charCodeAt(e), t === r)
      return i.pos = e + 1, i.linkContent = xs(i.src.slice(n + 1, e)), !0;
    if (t === 92 && e + 1 < s) {
      e += 2;
      continue;
    }
    e++;
  }
  return !1;
}
function Ko(i) {
  return i.trim().replace(/\s+/g, " ").toUpperCase();
}
function Za(i, e, t, n) {
  var s, r, o, a, c, l, d, p, u;
  if (i.charCodeAt(0) !== 91 || i.indexOf("]:") === -1 || (s = new fn(i, e, t, n, []), r = As(s, 0), r < 0 || i.charCodeAt(r + 1) !== 58))
    return -1;
  for (a = s.posMax, o = r + 2; o < a && (c = s.src.charCodeAt(o), !(c !== 32 && c !== 10)); o++)
    ;
  if (!zo(s, o))
    return -1;
  for (d = s.linkContent, o = s.pos, l = o, o = o + 1; o < a && (c = s.src.charCodeAt(o), !(c !== 32 && c !== 10)); o++)
    ;
  for (o < a && l !== o && Vo(s, o) ? (p = s.linkContent, o = s.pos) : (p = "", o = l); o < a && s.src.charCodeAt(o) === 32; )
    o++;
  return o < a && s.src.charCodeAt(o) !== 10 ? -1 : (u = Ko(i.slice(1, r)), typeof n.references[u] > "u" && (n.references[u] = { title: p, href: d }), o);
}
function Ya(i) {
  var e = i.tokens, t, n, s, r;
  if (i.env.references = i.env.references || {}, !i.inlineMode) {
    for (t = 1, n = e.length - 1; t < n; t++)
      if (e[t].type === "inline" && e[t - 1].type === "paragraph_open" && e[t + 1].type === "paragraph_close") {
        for (s = e[t].content; s.length && (r = Za(s, i.inline, i.options, i.env), !(r < 0)); )
          s = s.slice(r).trim();
        e[t].content = s, s.length || (e[t - 1].tight = !0, e[t + 1].tight = !0);
      }
  }
}
function Ja(i) {
  var e = i.tokens, t, n, s;
  for (n = 0, s = e.length; n < s; n++)
    t = e[n], t.type === "inline" && i.inline.parse(t.content, i.options, i.env, t.children);
}
function Qa(i) {
  var e, t, n, s, r, o, a, c, l, d = 0, p = !1, u = {};
  if (i.env.footnotes && (i.tokens = i.tokens.filter(function(g) {
    return g.type === "footnote_reference_open" ? (p = !0, c = [], l = g.label, !1) : g.type === "footnote_reference_close" ? (p = !1, u[":" + l] = c, !1) : (p && c.push(g), !p);
  }), !!i.env.footnotes.list)) {
    for (o = i.env.footnotes.list, i.tokens.push({
      type: "footnote_block_open",
      level: d++
    }), e = 0, t = o.length; e < t; e++) {
      for (i.tokens.push({
        type: "footnote_open",
        id: e,
        level: d++
      }), o[e].tokens ? (a = [], a.push({
        type: "paragraph_open",
        tight: !1,
        level: d++
      }), a.push({
        type: "inline",
        content: "",
        level: d,
        children: o[e].tokens
      }), a.push({
        type: "paragraph_close",
        tight: !1,
        level: --d
      })) : o[e].label && (a = u[":" + o[e].label]), i.tokens = i.tokens.concat(a), i.tokens[i.tokens.length - 1].type === "paragraph_close" ? r = i.tokens.pop() : r = null, s = o[e].count > 0 ? o[e].count : 1, n = 0; n < s; n++)
        i.tokens.push({
          type: "footnote_anchor",
          id: e,
          subId: n,
          level: d
        });
      r && i.tokens.push(r), i.tokens.push({
        type: "footnote_close",
        level: --d
      });
    }
    i.tokens.push({
      type: "footnote_block_close",
      level: --d
    });
  }
}
var qr = ` 
()[]'".,!?-`;
function ki(i) {
  return i.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function ec(i) {
  var e, t, n, s, r, o, a, c, l, d, p, u, g = i.tokens;
  if (i.env.abbreviations) {
    for (i.env.abbrRegExp || (u = "(^|[" + qr.split("").map(ki).join("") + "])(" + Object.keys(i.env.abbreviations).map(function(y) {
      return y.substr(1);
    }).sort(function(y, _) {
      return _.length - y.length;
    }).map(ki).join("|") + ")($|[" + qr.split("").map(ki).join("") + "])", i.env.abbrRegExp = new RegExp(u, "g")), d = i.env.abbrRegExp, t = 0, n = g.length; t < n; t++)
      if (g[t].type === "inline") {
        for (s = g[t].children, e = s.length - 1; e >= 0; e--)
          if (r = s[e], r.type === "text") {
            for (c = 0, o = r.content, d.lastIndex = 0, l = r.level, a = []; p = d.exec(o); )
              d.lastIndex > c && a.push({
                type: "text",
                content: o.slice(c, p.index + p[1].length),
                level: l
              }), a.push({
                type: "abbr_open",
                title: i.env.abbreviations[":" + p[2]],
                level: l++
              }), a.push({
                type: "text",
                content: p[2],
                level: l
              }), a.push({
                type: "abbr_close",
                level: --l
              }), c = d.lastIndex - p[3].length;
            a.length && (c < o.length && a.push({
              type: "text",
              content: o.slice(c),
              level: l
            }), g[t].children = s = [].concat(s.slice(0, e), a, s.slice(e + 1)));
          }
      }
  }
}
var tc = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, nc = /\((c|tm|r|p)\)/ig, sc = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function ic(i) {
  return i.indexOf("(") < 0 ? i : i.replace(nc, function(e, t) {
    return sc[t.toLowerCase()];
  });
}
function rc(i) {
  var e, t, n, s, r;
  if (i.options.typographer) {
    for (r = i.tokens.length - 1; r >= 0; r--)
      if (i.tokens[r].type === "inline")
        for (s = i.tokens[r].children, e = s.length - 1; e >= 0; e--)
          t = s[e], t.type === "text" && (n = t.content, n = ic(n), tc.test(n) && (n = n.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), t.content = n);
  }
}
var oc = /['"]/, Gr = /['"]/g, ac = /[-\s()\[\]]/, zr = "’";
function Vr(i, e) {
  return e < 0 || e >= i.length ? !1 : !ac.test(i[e]);
}
function yn(i, e, t) {
  return i.substr(0, e) + t + i.substr(e + 1);
}
function cc(i) {
  var e, t, n, s, r, o, a, c, l, d, p, u, g, y, _, S, M;
  if (i.options.typographer) {
    for (M = [], _ = i.tokens.length - 1; _ >= 0; _--)
      if (i.tokens[_].type === "inline") {
        for (S = i.tokens[_].children, M.length = 0, e = 0; e < S.length; e++)
          if (t = S[e], !(t.type !== "text" || oc.test(t.text))) {
            for (a = S[e].level, g = M.length - 1; g >= 0 && !(M[g].level <= a); g--)
              ;
            M.length = g + 1, n = t.content, r = 0, o = n.length;
            e:
              for (; r < o && (Gr.lastIndex = r, s = Gr.exec(n), !!s); ) {
                if (c = !Vr(n, s.index - 1), r = s.index + 1, y = s[0] === "'", l = !Vr(n, r), !l && !c) {
                  y && (t.content = yn(t.content, s.index, zr));
                  continue;
                }
                if (p = !l, u = !c, u) {
                  for (g = M.length - 1; g >= 0 && (d = M[g], !(M[g].level < a)); g--)
                    if (d.single === y && M[g].level === a) {
                      d = M[g], y ? (S[d.token].content = yn(S[d.token].content, d.pos, i.options.quotes[2]), t.content = yn(t.content, s.index, i.options.quotes[3])) : (S[d.token].content = yn(S[d.token].content, d.pos, i.options.quotes[0]), t.content = yn(t.content, s.index, i.options.quotes[1])), M.length = g;
                      continue e;
                    }
                }
                p ? M.push({
                  token: e,
                  pos: s.index,
                  single: y,
                  level: a
                }) : u && y && (t.content = yn(t.content, s.index, zr));
              }
          }
      }
  }
}
var Pi = [
  ["block", Ka],
  ["abbr", Xa],
  ["references", Ya],
  ["inline", Ja],
  ["footnote_tail", Qa],
  ["abbr2", ec],
  ["replacements", rc],
  ["smartquotes", cc]
];
function Wo() {
  this.options = {}, this.ruler = new Ye();
  for (var i = 0; i < Pi.length; i++)
    this.ruler.push(Pi[i][0], Pi[i][1]);
}
Wo.prototype.process = function(i) {
  var e, t, n;
  for (n = this.ruler.getRules(""), e = 0, t = n.length; e < t; e++)
    n[e](i);
};
function mn(i, e, t, n, s) {
  var r, o, a, c, l, d, p;
  for (this.src = i, this.parser = e, this.options = t, this.env = n, this.tokens = s, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", o = this.src, d = 0, p = !1, a = c = d = 0, l = o.length; c < l; c++) {
    if (r = o.charCodeAt(c), !p)
      if (r === 32) {
        d++;
        continue;
      } else
        p = !0;
    (r === 10 || c === l - 1) && (r !== 10 && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(d), p = !1, d = 0, a = c + 1);
  }
  this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
}
mn.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
mn.prototype.skipEmptyLines = function(e) {
  for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
mn.prototype.skipSpaces = function(e) {
  for (var t = this.src.length; e < t && this.src.charCodeAt(e) === 32; e++)
    ;
  return e;
};
mn.prototype.skipChars = function(e, t) {
  for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++)
    ;
  return e;
};
mn.prototype.skipCharsBack = function(e, t, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (t !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
mn.prototype.getLines = function(e, t, n, s) {
  var r, o, a, c, l, d = e;
  if (e >= t)
    return "";
  if (d + 1 === t)
    return o = this.bMarks[d] + Math.min(this.tShift[d], n), a = s ? this.eMarks[d] + 1 : this.eMarks[d], this.src.slice(o, a);
  for (c = new Array(t - e), r = 0; d < t; d++, r++)
    l = this.tShift[d], l > n && (l = n), l < 0 && (l = 0), o = this.bMarks[d] + l, d + 1 < t || s ? a = this.eMarks[d] + 1 : a = this.eMarks[d], c[r] = this.src.slice(o, a);
  return c.join("");
};
function lc(i, e, t) {
  var n, s;
  if (i.tShift[e] - i.blkIndent < 4)
    return !1;
  for (s = n = e + 1; n < t; ) {
    if (i.isEmpty(n)) {
      n++;
      continue;
    }
    if (i.tShift[n] - i.blkIndent >= 4) {
      n++, s = n;
      continue;
    }
    break;
  }
  return i.line = n, i.tokens.push({
    type: "code",
    content: i.getLines(e, s, 4 + i.blkIndent, !0),
    block: !0,
    lines: [e, i.line],
    level: i.level
  }), !0;
}
function dc(i, e, t, n) {
  var s, r, o, a, c, l = !1, d = i.bMarks[e] + i.tShift[e], p = i.eMarks[e];
  if (d + 3 > p || (s = i.src.charCodeAt(d), s !== 126 && s !== 96) || (c = d, d = i.skipChars(d, s), r = d - c, r < 3) || (o = i.src.slice(d, p).trim(), o.indexOf("`") >= 0))
    return !1;
  if (n)
    return !0;
  for (a = e; a++, !(a >= t || (d = c = i.bMarks[a] + i.tShift[a], p = i.eMarks[a], d < p && i.tShift[a] < i.blkIndent)); )
    if (i.src.charCodeAt(d) === s && !(i.tShift[a] - i.blkIndent >= 4) && (d = i.skipChars(d, s), !(d - c < r) && (d = i.skipSpaces(d), !(d < p)))) {
      l = !0;
      break;
    }
  return r = i.tShift[e], i.line = a + (l ? 1 : 0), i.tokens.push({
    type: "fence",
    params: o,
    content: i.getLines(e + 1, a, r, !0),
    lines: [e, i.line],
    level: i.level
  }), !0;
}
function hc(i, e, t, n) {
  var s, r, o, a, c, l, d, p, u, g, y, _ = i.bMarks[e] + i.tShift[e], S = i.eMarks[e];
  if (_ > S || i.src.charCodeAt(_++) !== 62 || i.level >= i.options.maxNesting)
    return !1;
  if (n)
    return !0;
  for (i.src.charCodeAt(_) === 32 && _++, c = i.blkIndent, i.blkIndent = 0, a = [i.bMarks[e]], i.bMarks[e] = _, _ = _ < S ? i.skipSpaces(_) : _, r = _ >= S, o = [i.tShift[e]], i.tShift[e] = _ - i.bMarks[e], p = i.parser.ruler.getRules("blockquote"), s = e + 1; s < t && (_ = i.bMarks[s] + i.tShift[s], S = i.eMarks[s], !(_ >= S)); s++) {
    if (i.src.charCodeAt(_++) === 62) {
      i.src.charCodeAt(_) === 32 && _++, a.push(i.bMarks[s]), i.bMarks[s] = _, _ = _ < S ? i.skipSpaces(_) : _, r = _ >= S, o.push(i.tShift[s]), i.tShift[s] = _ - i.bMarks[s];
      continue;
    }
    if (r)
      break;
    for (y = !1, u = 0, g = p.length; u < g; u++)
      if (p[u](i, s, t, !0)) {
        y = !0;
        break;
      }
    if (y)
      break;
    a.push(i.bMarks[s]), o.push(i.tShift[s]), i.tShift[s] = -1337;
  }
  for (l = i.parentType, i.parentType = "blockquote", i.tokens.push({
    type: "blockquote_open",
    lines: d = [e, 0],
    level: i.level++
  }), i.parser.tokenize(i, e, s), i.tokens.push({
    type: "blockquote_close",
    level: --i.level
  }), i.parentType = l, d[1] = i.line, u = 0; u < o.length; u++)
    i.bMarks[u + e] = a[u], i.tShift[u + e] = o[u];
  return i.blkIndent = c, !0;
}
function uc(i, e, t, n) {
  var s, r, o, a = i.bMarks[e], c = i.eMarks[e];
  if (a += i.tShift[e], a > c || (s = i.src.charCodeAt(a++), s !== 42 && s !== 45 && s !== 95))
    return !1;
  for (r = 1; a < c; ) {
    if (o = i.src.charCodeAt(a++), o !== s && o !== 32)
      return !1;
    o === s && r++;
  }
  return r < 3 ? !1 : (n || (i.line = e + 1, i.tokens.push({
    type: "hr",
    lines: [e, i.line],
    level: i.level
  })), !0);
}
function Kr(i, e) {
  var t, n, s;
  return n = i.bMarks[e] + i.tShift[e], s = i.eMarks[e], n >= s || (t = i.src.charCodeAt(n++), t !== 42 && t !== 45 && t !== 43) || n < s && i.src.charCodeAt(n) !== 32 ? -1 : n;
}
function Wr(i, e) {
  var t, n = i.bMarks[e] + i.tShift[e], s = i.eMarks[e];
  if (n + 1 >= s || (t = i.src.charCodeAt(n++), t < 48 || t > 57))
    return -1;
  for (; ; ) {
    if (n >= s)
      return -1;
    if (t = i.src.charCodeAt(n++), !(t >= 48 && t <= 57)) {
      if (t === 41 || t === 46)
        break;
      return -1;
    }
  }
  return n < s && i.src.charCodeAt(n) !== 32 ? -1 : n;
}
function pc(i, e) {
  var t, n, s = i.level + 2;
  for (t = e + 2, n = i.tokens.length - 2; t < n; t++)
    i.tokens[t].level === s && i.tokens[t].type === "paragraph_open" && (i.tokens[t + 2].tight = !0, i.tokens[t].tight = !0, t += 2);
}
function fc(i, e, t, n) {
  var s, r, o, a, c, l, d, p, u, g, y, _, S, M, K, ie, re, Re, Lt = !0, Ot, ze, Lr, Ri;
  if ((p = Wr(i, e)) >= 0)
    S = !0;
  else if ((p = Kr(i, e)) >= 0)
    S = !1;
  else
    return !1;
  if (i.level >= i.options.maxNesting)
    return !1;
  if (_ = i.src.charCodeAt(p - 1), n)
    return !0;
  for (K = i.tokens.length, S ? (d = i.bMarks[e] + i.tShift[e], y = Number(i.src.substr(d, p - d - 1)), i.tokens.push({
    type: "ordered_list_open",
    order: y,
    lines: re = [e, 0],
    level: i.level++
  })) : i.tokens.push({
    type: "bullet_list_open",
    lines: re = [e, 0],
    level: i.level++
  }), s = e, ie = !1, Ot = i.parser.ruler.getRules("list"); s < t && (M = i.skipSpaces(p), u = i.eMarks[s], M >= u ? g = 1 : g = M - p, g > 4 && (g = 1), g < 1 && (g = 1), r = p - i.bMarks[s] + g, i.tokens.push({
    type: "list_item_open",
    lines: Re = [e, 0],
    level: i.level++
  }), a = i.blkIndent, c = i.tight, o = i.tShift[e], l = i.parentType, i.tShift[e] = M - i.bMarks[e], i.blkIndent = r, i.tight = !0, i.parentType = "list", i.parser.tokenize(i, e, t, !0), (!i.tight || ie) && (Lt = !1), ie = i.line - e > 1 && i.isEmpty(i.line - 1), i.blkIndent = a, i.tShift[e] = o, i.tight = c, i.parentType = l, i.tokens.push({
    type: "list_item_close",
    level: --i.level
  }), s = e = i.line, Re[1] = s, M = i.bMarks[e], !(s >= t || i.isEmpty(s) || i.tShift[s] < i.blkIndent)); ) {
    for (Ri = !1, ze = 0, Lr = Ot.length; ze < Lr; ze++)
      if (Ot[ze](i, s, t, !0)) {
        Ri = !0;
        break;
      }
    if (Ri)
      break;
    if (S) {
      if (p = Wr(i, s), p < 0)
        break;
    } else if (p = Kr(i, s), p < 0)
      break;
    if (_ !== i.src.charCodeAt(p - 1))
      break;
  }
  return i.tokens.push({
    type: S ? "ordered_list_close" : "bullet_list_close",
    level: --i.level
  }), re[1] = s, i.line = s, Lt && pc(i, K), !0;
}
function mc(i, e, t, n) {
  var s, r, o, a, c, l = i.bMarks[e] + i.tShift[e], d = i.eMarks[e];
  if (l + 4 > d || i.src.charCodeAt(l) !== 91 || i.src.charCodeAt(l + 1) !== 94 || i.level >= i.options.maxNesting)
    return !1;
  for (a = l + 2; a < d; a++) {
    if (i.src.charCodeAt(a) === 32)
      return !1;
    if (i.src.charCodeAt(a) === 93)
      break;
  }
  return a === l + 2 || a + 1 >= d || i.src.charCodeAt(++a) !== 58 ? !1 : (n || (a++, i.env.footnotes || (i.env.footnotes = {}), i.env.footnotes.refs || (i.env.footnotes.refs = {}), c = i.src.slice(l + 2, a - 2), i.env.footnotes.refs[":" + c] = -1, i.tokens.push({
    type: "footnote_reference_open",
    label: c,
    level: i.level++
  }), s = i.bMarks[e], r = i.tShift[e], o = i.parentType, i.tShift[e] = i.skipSpaces(a) - a, i.bMarks[e] = a, i.blkIndent += 4, i.parentType = "footnote", i.tShift[e] < i.blkIndent && (i.tShift[e] += i.blkIndent, i.bMarks[e] -= i.blkIndent), i.parser.tokenize(i, e, t, !0), i.parentType = o, i.blkIndent -= 4, i.tShift[e] = r, i.bMarks[e] = s, i.tokens.push({
    type: "footnote_reference_close",
    level: --i.level
  })), !0);
}
function gc(i, e, t, n) {
  var s, r, o, a = i.bMarks[e] + i.tShift[e], c = i.eMarks[e];
  if (a >= c || (s = i.src.charCodeAt(a), s !== 35 || a >= c))
    return !1;
  for (r = 1, s = i.src.charCodeAt(++a); s === 35 && a < c && r <= 6; )
    r++, s = i.src.charCodeAt(++a);
  return r > 6 || a < c && s !== 32 ? !1 : (n || (c = i.skipCharsBack(c, 32, a), o = i.skipCharsBack(c, 35, a), o > a && i.src.charCodeAt(o - 1) === 32 && (c = o), i.line = e + 1, i.tokens.push({
    type: "heading_open",
    hLevel: r,
    lines: [e, i.line],
    level: i.level
  }), a < c && i.tokens.push({
    type: "inline",
    content: i.src.slice(a, c).trim(),
    level: i.level + 1,
    lines: [e, i.line],
    children: []
  }), i.tokens.push({ type: "heading_close", hLevel: r, level: i.level })), !0);
}
function bc(i, e, t) {
  var n, s, r, o = e + 1;
  return o >= t || i.tShift[o] < i.blkIndent || i.tShift[o] - i.blkIndent > 3 || (s = i.bMarks[o] + i.tShift[o], r = i.eMarks[o], s >= r) || (n = i.src.charCodeAt(s), n !== 45 && n !== 61) || (s = i.skipChars(s, n), s = i.skipSpaces(s), s < r) ? !1 : (s = i.bMarks[e] + i.tShift[e], i.line = o + 1, i.tokens.push({
    type: "heading_open",
    hLevel: n === 61 ? 1 : 2,
    lines: [e, i.line],
    level: i.level
  }), i.tokens.push({
    type: "inline",
    content: i.src.slice(s, i.eMarks[e]).trim(),
    level: i.level + 1,
    lines: [e, i.line - 1],
    children: []
  }), i.tokens.push({
    type: "heading_close",
    hLevel: n === 61 ? 1 : 2,
    level: i.level
  }), !0);
}
var Xo = {};
[
  "article",
  "aside",
  "button",
  "blockquote",
  "body",
  "canvas",
  "caption",
  "col",
  "colgroup",
  "dd",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "iframe",
  "li",
  "map",
  "object",
  "ol",
  "output",
  "p",
  "pre",
  "progress",
  "script",
  "section",
  "style",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "tr",
  "thead",
  "ul",
  "video"
].forEach(function(i) {
  Xo[i] = !0;
});
var yc = /^<([a-zA-Z]{1,15})[\s\/>]/, _c = /^<\/([a-zA-Z]{1,15})[\s>]/;
function Ec(i) {
  var e = i | 32;
  return e >= 97 && e <= 122;
}
function vc(i, e, t, n) {
  var s, r, o, a = i.bMarks[e], c = i.eMarks[e], l = i.tShift[e];
  if (a += l, !i.options.html || l > 3 || a + 2 >= c || i.src.charCodeAt(a) !== 60)
    return !1;
  if (s = i.src.charCodeAt(a + 1), s === 33 || s === 63) {
    if (n)
      return !0;
  } else if (s === 47 || Ec(s)) {
    if (s === 47) {
      if (r = i.src.slice(a, c).match(_c), !r)
        return !1;
    } else if (r = i.src.slice(a, c).match(yc), !r)
      return !1;
    if (Xo[r[1].toLowerCase()] !== !0)
      return !1;
    if (n)
      return !0;
  } else
    return !1;
  for (o = e + 1; o < i.lineMax && !i.isEmpty(o); )
    o++;
  return i.line = o, i.tokens.push({
    type: "htmlblock",
    level: i.level,
    lines: [e, i.line],
    content: i.getLines(e, o, 0, !0)
  }), !0;
}
function Li(i, e) {
  var t = i.bMarks[e] + i.blkIndent, n = i.eMarks[e];
  return i.src.substr(t, n - t);
}
function Sc(i, e, t, n) {
  var s, r, o, a, c, l, d, p, u, g, y;
  if (e + 2 > t || (c = e + 1, i.tShift[c] < i.blkIndent) || (o = i.bMarks[c] + i.tShift[c], o >= i.eMarks[c]) || (s = i.src.charCodeAt(o), s !== 124 && s !== 45 && s !== 58) || (r = Li(i, e + 1), !/^[-:| ]+$/.test(r)) || (l = r.split("|"), l <= 2))
    return !1;
  for (p = [], a = 0; a < l.length; a++) {
    if (u = l[a].trim(), !u) {
      if (a === 0 || a === l.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(u))
      return !1;
    u.charCodeAt(u.length - 1) === 58 ? p.push(u.charCodeAt(0) === 58 ? "center" : "right") : u.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (r = Li(i, e).trim(), r.indexOf("|") === -1 || (l = r.replace(/^\||\|$/g, "").split("|"), p.length !== l.length))
    return !1;
  if (n)
    return !0;
  for (i.tokens.push({
    type: "table_open",
    lines: g = [e, 0],
    level: i.level++
  }), i.tokens.push({
    type: "thead_open",
    lines: [e, e + 1],
    level: i.level++
  }), i.tokens.push({
    type: "tr_open",
    lines: [e, e + 1],
    level: i.level++
  }), a = 0; a < l.length; a++)
    i.tokens.push({
      type: "th_open",
      align: p[a],
      lines: [e, e + 1],
      level: i.level++
    }), i.tokens.push({
      type: "inline",
      content: l[a].trim(),
      lines: [e, e + 1],
      level: i.level,
      children: []
    }), i.tokens.push({ type: "th_close", level: --i.level });
  for (i.tokens.push({ type: "tr_close", level: --i.level }), i.tokens.push({ type: "thead_close", level: --i.level }), i.tokens.push({
    type: "tbody_open",
    lines: y = [e + 2, 0],
    level: i.level++
  }), c = e + 2; c < t && !(i.tShift[c] < i.blkIndent || (r = Li(i, c).trim(), r.indexOf("|") === -1)); c++) {
    for (l = r.replace(/^\||\|$/g, "").split("|"), i.tokens.push({ type: "tr_open", level: i.level++ }), a = 0; a < l.length; a++)
      i.tokens.push({ type: "td_open", align: p[a], level: i.level++ }), d = l[a].substring(
        l[a].charCodeAt(0) === 124 ? 1 : 0,
        l[a].charCodeAt(l[a].length - 1) === 124 ? l[a].length - 1 : l[a].length
      ).trim(), i.tokens.push({
        type: "inline",
        content: d,
        level: i.level,
        children: []
      }), i.tokens.push({ type: "td_close", level: --i.level });
    i.tokens.push({ type: "tr_close", level: --i.level });
  }
  return i.tokens.push({ type: "tbody_close", level: --i.level }), i.tokens.push({ type: "table_close", level: --i.level }), g[1] = y[1] = c, i.line = c, !0;
}
function Fs(i, e) {
  var t, n, s = i.bMarks[e] + i.tShift[e], r = i.eMarks[e];
  return s >= r || (n = i.src.charCodeAt(s++), n !== 126 && n !== 58) || (t = i.skipSpaces(s), s === t) || t >= r ? -1 : t;
}
function xc(i, e) {
  var t, n, s = i.level + 2;
  for (t = e + 2, n = i.tokens.length - 2; t < n; t++)
    i.tokens[t].level === s && i.tokens[t].type === "paragraph_open" && (i.tokens[t + 2].tight = !0, i.tokens[t].tight = !0, t += 2);
}
function Ac(i, e, t, n) {
  var s, r, o, a, c, l, d, p, u, g, y, _, S, M;
  if (n)
    return i.ddIndent < 0 ? !1 : Fs(i, e) >= 0;
  if (d = e + 1, i.isEmpty(d) && ++d > t || i.tShift[d] < i.blkIndent || (s = Fs(i, d), s < 0) || i.level >= i.options.maxNesting)
    return !1;
  l = i.tokens.length, i.tokens.push({
    type: "dl_open",
    lines: c = [e, 0],
    level: i.level++
  }), o = e, r = d;
  e:
    for (; ; ) {
      for (M = !0, S = !1, i.tokens.push({
        type: "dt_open",
        lines: [o, o],
        level: i.level++
      }), i.tokens.push({
        type: "inline",
        content: i.getLines(o, o + 1, i.blkIndent, !1).trim(),
        level: i.level + 1,
        lines: [o, o],
        children: []
      }), i.tokens.push({
        type: "dt_close",
        level: --i.level
      }); ; ) {
        if (i.tokens.push({
          type: "dd_open",
          lines: a = [d, 0],
          level: i.level++
        }), _ = i.tight, u = i.ddIndent, p = i.blkIndent, y = i.tShift[r], g = i.parentType, i.blkIndent = i.ddIndent = i.tShift[r] + 2, i.tShift[r] = s - i.bMarks[r], i.tight = !0, i.parentType = "deflist", i.parser.tokenize(i, r, t, !0), (!i.tight || S) && (M = !1), S = i.line - r > 1 && i.isEmpty(i.line - 1), i.tShift[r] = y, i.tight = _, i.parentType = g, i.blkIndent = p, i.ddIndent = u, i.tokens.push({
          type: "dd_close",
          level: --i.level
        }), a[1] = d = i.line, d >= t || i.tShift[d] < i.blkIndent)
          break e;
        if (s = Fs(i, d), s < 0)
          break;
        r = d;
      }
      if (d >= t || (o = d, i.isEmpty(o)) || i.tShift[o] < i.blkIndent || (r = o + 1, r >= t) || (i.isEmpty(r) && r++, r >= t) || i.tShift[r] < i.blkIndent || (s = Fs(i, r), s < 0))
        break;
    }
  return i.tokens.push({
    type: "dl_close",
    level: --i.level
  }), c[1] = d, i.line = d, M && xc(i, l), !0;
}
function wc(i, e) {
  var t, n, s, r, o, a = e + 1, c;
  if (t = i.lineMax, a < t && !i.isEmpty(a)) {
    for (c = i.parser.ruler.getRules("paragraph"); a < t && !i.isEmpty(a); a++)
      if (!(i.tShift[a] - i.blkIndent > 3)) {
        for (s = !1, r = 0, o = c.length; r < o; r++)
          if (c[r](i, a, t, !0)) {
            s = !0;
            break;
          }
        if (s)
          break;
      }
  }
  return n = i.getLines(e, a, i.blkIndent, !1).trim(), i.line = a, n.length && (i.tokens.push({
    type: "paragraph_open",
    tight: !1,
    lines: [e, i.line],
    level: i.level
  }), i.tokens.push({
    type: "inline",
    content: n,
    level: i.level + 1,
    lines: [e, i.line],
    children: []
  }), i.tokens.push({
    type: "paragraph_close",
    tight: !1,
    level: i.level
  })), !0;
}
var Us = [
  ["code", lc],
  ["fences", dc, ["paragraph", "blockquote", "list"]],
  ["blockquote", hc, ["paragraph", "blockquote", "list"]],
  ["hr", uc, ["paragraph", "blockquote", "list"]],
  ["list", fc, ["paragraph", "blockquote"]],
  ["footnote", mc, ["paragraph"]],
  ["heading", gc, ["paragraph", "blockquote"]],
  ["lheading", bc],
  ["htmlblock", vc, ["paragraph", "blockquote"]],
  ["table", Sc, ["paragraph"]],
  ["deflist", Ac, ["paragraph"]],
  ["paragraph", wc]
];
function hr() {
  this.ruler = new Ye();
  for (var i = 0; i < Us.length; i++)
    this.ruler.push(Us[i][0], Us[i][1], {
      alt: (Us[i][2] || []).slice()
    });
}
hr.prototype.tokenize = function(i, e, t) {
  for (var n = this.ruler.getRules(""), s = n.length, r = e, o = !1, a, c; r < t && (i.line = r = i.skipEmptyLines(r), !(r >= t || i.tShift[r] < i.blkIndent)); ) {
    for (c = 0; c < s && (a = n[c](i, r, t, !1), !a); c++)
      ;
    if (i.tight = !o, i.isEmpty(i.line - 1) && (o = !0), r = i.line, r < t && i.isEmpty(r)) {
      if (o = !0, r++, r < t && i.parentType === "list" && i.isEmpty(r))
        break;
      i.line = r;
    }
  }
};
var Cc = /[\n\t]/g, Tc = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, Rc = /\u00a0/g;
hr.prototype.parse = function(i, e, t, n) {
  var s, r = 0, o = 0;
  if (!i)
    return [];
  i = i.replace(Rc, " "), i = i.replace(Tc, `
`), i.indexOf("	") >= 0 && (i = i.replace(Cc, function(a, c) {
    var l;
    return i.charCodeAt(c) === 10 ? (r = c + 1, o = 0, a) : (l = "    ".slice((c - r - o) % 4), o = c - r + 1, l);
  })), s = new mn(i, this, e, t, n), this.tokenize(s, s.line, s.lineMax);
};
function Ic(i) {
  switch (i) {
    case 10:
    case 92:
    case 96:
    case 42:
    case 95:
    case 94:
    case 91:
    case 93:
    case 33:
    case 38:
    case 60:
    case 62:
    case 123:
    case 125:
    case 36:
    case 37:
    case 64:
    case 126:
    case 43:
    case 61:
    case 58:
      return !0;
    default:
      return !1;
  }
}
function Mc(i, e) {
  for (var t = i.pos; t < i.posMax && !Ic(i.src.charCodeAt(t)); )
    t++;
  return t === i.pos ? !1 : (e || (i.pending += i.src.slice(i.pos, t)), i.pos = t, !0);
}
function kc(i, e) {
  var t, n, s = i.pos;
  if (i.src.charCodeAt(s) !== 10)
    return !1;
  if (t = i.pending.length - 1, n = i.posMax, !e)
    if (t >= 0 && i.pending.charCodeAt(t) === 32)
      if (t >= 1 && i.pending.charCodeAt(t - 1) === 32) {
        for (var r = t - 2; r >= 0; r--)
          if (i.pending.charCodeAt(r) !== 32) {
            i.pending = i.pending.substring(0, r + 1);
            break;
          }
        i.push({
          type: "hardbreak",
          level: i.level
        });
      } else
        i.pending = i.pending.slice(0, -1), i.push({
          type: "softbreak",
          level: i.level
        });
    else
      i.push({
        type: "softbreak",
        level: i.level
      });
  for (s++; s < n && i.src.charCodeAt(s) === 32; )
    s++;
  return i.pos = s, !0;
}
var ur = [];
for (var Xr = 0; Xr < 256; Xr++)
  ur.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(i) {
  ur[i.charCodeAt(0)] = 1;
});
function Pc(i, e) {
  var t, n = i.pos, s = i.posMax;
  if (i.src.charCodeAt(n) !== 92)
    return !1;
  if (n++, n < s) {
    if (t = i.src.charCodeAt(n), t < 256 && ur[t] !== 0)
      return e || (i.pending += i.src[n]), i.pos += 2, !0;
    if (t === 10) {
      for (e || i.push({
        type: "hardbreak",
        level: i.level
      }), n++; n < s && i.src.charCodeAt(n) === 32; )
        n++;
      return i.pos = n, !0;
    }
  }
  return e || (i.pending += "\\"), i.pos++, !0;
}
function Lc(i, e) {
  var t, n, s, r, o, a = i.pos, c = i.src.charCodeAt(a);
  if (c !== 96)
    return !1;
  for (t = a, a++, n = i.posMax; a < n && i.src.charCodeAt(a) === 96; )
    a++;
  for (s = i.src.slice(t, a), r = o = a; (r = i.src.indexOf("`", o)) !== -1; ) {
    for (o = r + 1; o < n && i.src.charCodeAt(o) === 96; )
      o++;
    if (o - r === s.length)
      return e || i.push({
        type: "code",
        content: i.src.slice(a, r).replace(/[ \n]+/g, " ").trim(),
        block: !1,
        level: i.level
      }), i.pos = o, !0;
  }
  return e || (i.pending += s), i.pos += s.length, !0;
}
function Oc(i, e) {
  var t, n, s, r = i.posMax, o = i.pos, a, c;
  if (i.src.charCodeAt(o) !== 126 || e || o + 4 >= r || i.src.charCodeAt(o + 1) !== 126 || i.level >= i.options.maxNesting || (a = o > 0 ? i.src.charCodeAt(o - 1) : -1, c = i.src.charCodeAt(o + 2), a === 126) || c === 126 || c === 32 || c === 10)
    return !1;
  for (n = o + 2; n < r && i.src.charCodeAt(n) === 126; )
    n++;
  if (n > o + 3)
    return i.pos += n - o, e || (i.pending += i.src.slice(o, n)), !0;
  for (i.pos = o + 2, s = 1; i.pos + 1 < r; ) {
    if (i.src.charCodeAt(i.pos) === 126 && i.src.charCodeAt(i.pos + 1) === 126 && (a = i.src.charCodeAt(i.pos - 1), c = i.pos + 2 < r ? i.src.charCodeAt(i.pos + 2) : -1, c !== 126 && a !== 126 && (a !== 32 && a !== 10 ? s-- : c !== 32 && c !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return t ? (i.posMax = i.pos, i.pos = o + 2, e || (i.push({ type: "del_open", level: i.level++ }), i.parser.tokenize(i), i.push({ type: "del_close", level: --i.level })), i.pos = i.posMax + 2, i.posMax = r, !0) : (i.pos = o, !1);
}
function Nc(i, e) {
  var t, n, s, r = i.posMax, o = i.pos, a, c;
  if (i.src.charCodeAt(o) !== 43 || e || o + 4 >= r || i.src.charCodeAt(o + 1) !== 43 || i.level >= i.options.maxNesting || (a = o > 0 ? i.src.charCodeAt(o - 1) : -1, c = i.src.charCodeAt(o + 2), a === 43) || c === 43 || c === 32 || c === 10)
    return !1;
  for (n = o + 2; n < r && i.src.charCodeAt(n) === 43; )
    n++;
  if (n !== o + 2)
    return i.pos += n - o, e || (i.pending += i.src.slice(o, n)), !0;
  for (i.pos = o + 2, s = 1; i.pos + 1 < r; ) {
    if (i.src.charCodeAt(i.pos) === 43 && i.src.charCodeAt(i.pos + 1) === 43 && (a = i.src.charCodeAt(i.pos - 1), c = i.pos + 2 < r ? i.src.charCodeAt(i.pos + 2) : -1, c !== 43 && a !== 43 && (a !== 32 && a !== 10 ? s-- : c !== 32 && c !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return t ? (i.posMax = i.pos, i.pos = o + 2, e || (i.push({ type: "ins_open", level: i.level++ }), i.parser.tokenize(i), i.push({ type: "ins_close", level: --i.level })), i.pos = i.posMax + 2, i.posMax = r, !0) : (i.pos = o, !1);
}
function Bc(i, e) {
  var t, n, s, r = i.posMax, o = i.pos, a, c;
  if (i.src.charCodeAt(o) !== 61 || e || o + 4 >= r || i.src.charCodeAt(o + 1) !== 61 || i.level >= i.options.maxNesting || (a = o > 0 ? i.src.charCodeAt(o - 1) : -1, c = i.src.charCodeAt(o + 2), a === 61) || c === 61 || c === 32 || c === 10)
    return !1;
  for (n = o + 2; n < r && i.src.charCodeAt(n) === 61; )
    n++;
  if (n !== o + 2)
    return i.pos += n - o, e || (i.pending += i.src.slice(o, n)), !0;
  for (i.pos = o + 2, s = 1; i.pos + 1 < r; ) {
    if (i.src.charCodeAt(i.pos) === 61 && i.src.charCodeAt(i.pos + 1) === 61 && (a = i.src.charCodeAt(i.pos - 1), c = i.pos + 2 < r ? i.src.charCodeAt(i.pos + 2) : -1, c !== 61 && a !== 61 && (a !== 32 && a !== 10 ? s-- : c !== 32 && c !== 10 && s++, s <= 0))) {
      t = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return t ? (i.posMax = i.pos, i.pos = o + 2, e || (i.push({ type: "mark_open", level: i.level++ }), i.parser.tokenize(i), i.push({ type: "mark_close", level: --i.level })), i.pos = i.posMax + 2, i.posMax = r, !0) : (i.pos = o, !1);
}
function Zr(i) {
  return i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122;
}
function Yr(i, e) {
  var t = e, n, s, r, o = !0, a = !0, c = i.posMax, l = i.src.charCodeAt(e);
  for (n = e > 0 ? i.src.charCodeAt(e - 1) : -1; t < c && i.src.charCodeAt(t) === l; )
    t++;
  return t >= c && (o = !1), r = t - e, r >= 4 ? o = a = !1 : (s = t < c ? i.src.charCodeAt(t) : -1, (s === 32 || s === 10) && (o = !1), (n === 32 || n === 10) && (a = !1), l === 95 && (Zr(n) && (o = !1), Zr(s) && (a = !1))), {
    can_open: o,
    can_close: a,
    delims: r
  };
}
function Dc(i, e) {
  var t, n, s, r, o, a, c, l = i.posMax, d = i.pos, p = i.src.charCodeAt(d);
  if (p !== 95 && p !== 42 || e)
    return !1;
  if (c = Yr(i, d), t = c.delims, !c.can_open)
    return i.pos += t, e || (i.pending += i.src.slice(d, i.pos)), !0;
  if (i.level >= i.options.maxNesting)
    return !1;
  for (i.pos = d + t, a = [t]; i.pos < l; ) {
    if (i.src.charCodeAt(i.pos) === p) {
      if (c = Yr(i, i.pos), n = c.delims, c.can_close) {
        for (r = a.pop(), o = n; r !== o; ) {
          if (o < r) {
            a.push(r - o);
            break;
          }
          if (o -= r, a.length === 0)
            break;
          i.pos += r, r = a.pop();
        }
        if (a.length === 0) {
          t = r, s = !0;
          break;
        }
        i.pos += n;
        continue;
      }
      c.can_open && a.push(n), i.pos += n;
      continue;
    }
    i.parser.skipToken(i);
  }
  return s ? (i.posMax = i.pos, i.pos = d + t, e || ((t === 2 || t === 3) && i.push({ type: "strong_open", level: i.level++ }), (t === 1 || t === 3) && i.push({ type: "em_open", level: i.level++ }), i.parser.tokenize(i), (t === 1 || t === 3) && i.push({ type: "em_close", level: --i.level }), (t === 2 || t === 3) && i.push({ type: "strong_close", level: --i.level })), i.pos = i.posMax + t, i.posMax = l, !0) : (i.pos = d, !1);
}
var Fc = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Uc(i, e) {
  var t, n, s = i.posMax, r = i.pos;
  if (i.src.charCodeAt(r) !== 126 || e || r + 2 >= s || i.level >= i.options.maxNesting)
    return !1;
  for (i.pos = r + 1; i.pos < s; ) {
    if (i.src.charCodeAt(i.pos) === 126) {
      t = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return !t || r + 1 === i.pos || (n = i.src.slice(r + 1, i.pos), n.match(/(^|[^\\])(\\\\)*\s/)) ? (i.pos = r, !1) : (i.posMax = i.pos, i.pos = r + 1, e || i.push({
    type: "sub",
    level: i.level,
    content: n.replace(Fc, "$1")
  }), i.pos = i.posMax + 1, i.posMax = s, !0);
}
var Hc = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function jc(i, e) {
  var t, n, s = i.posMax, r = i.pos;
  if (i.src.charCodeAt(r) !== 94 || e || r + 2 >= s || i.level >= i.options.maxNesting)
    return !1;
  for (i.pos = r + 1; i.pos < s; ) {
    if (i.src.charCodeAt(i.pos) === 94) {
      t = !0;
      break;
    }
    i.parser.skipToken(i);
  }
  return !t || r + 1 === i.pos || (n = i.src.slice(r + 1, i.pos), n.match(/(^|[^\\])(\\\\)*\s/)) ? (i.pos = r, !1) : (i.posMax = i.pos, i.pos = r + 1, e || i.push({
    type: "sup",
    level: i.level,
    content: n.replace(Hc, "$1")
  }), i.pos = i.posMax + 1, i.posMax = s, !0);
}
function $c(i, e) {
  var t, n, s, r, o, a, c, l, d = !1, p = i.pos, u = i.posMax, g = i.pos, y = i.src.charCodeAt(g);
  if (y === 33 && (d = !0, y = i.src.charCodeAt(++g)), y !== 91 || i.level >= i.options.maxNesting || (t = g + 1, n = As(i, g), n < 0))
    return !1;
  if (a = n + 1, a < u && i.src.charCodeAt(a) === 40) {
    for (a++; a < u && (l = i.src.charCodeAt(a), !(l !== 32 && l !== 10)); a++)
      ;
    if (a >= u)
      return !1;
    for (g = a, zo(i, a) ? (r = i.linkContent, a = i.pos) : r = "", g = a; a < u && (l = i.src.charCodeAt(a), !(l !== 32 && l !== 10)); a++)
      ;
    if (a < u && g !== a && Vo(i, a))
      for (o = i.linkContent, a = i.pos; a < u && (l = i.src.charCodeAt(a), !(l !== 32 && l !== 10)); a++)
        ;
    else
      o = "";
    if (a >= u || i.src.charCodeAt(a) !== 41)
      return i.pos = p, !1;
    a++;
  } else {
    if (i.linkLevel > 0)
      return !1;
    for (; a < u && (l = i.src.charCodeAt(a), !(l !== 32 && l !== 10)); a++)
      ;
    if (a < u && i.src.charCodeAt(a) === 91 && (g = a + 1, a = As(i, a), a >= 0 ? s = i.src.slice(g, a++) : a = g - 1), s || (typeof s > "u" && (a = n + 1), s = i.src.slice(t, n)), c = i.env.references[Ko(s)], !c)
      return i.pos = p, !1;
    r = c.href, o = c.title;
  }
  return e || (i.pos = t, i.posMax = n, d ? i.push({
    type: "image",
    src: r,
    title: o,
    alt: i.src.substr(t, n - t),
    level: i.level
  }) : (i.push({
    type: "link_open",
    href: r,
    title: o,
    level: i.level++
  }), i.linkLevel++, i.parser.tokenize(i), i.linkLevel--, i.push({ type: "link_close", level: --i.level }))), i.pos = a, i.posMax = u, !0;
}
function qc(i, e) {
  var t, n, s, r, o = i.posMax, a = i.pos;
  return a + 2 >= o || i.src.charCodeAt(a) !== 94 || i.src.charCodeAt(a + 1) !== 91 || i.level >= i.options.maxNesting || (t = a + 2, n = As(i, a + 1), n < 0) ? !1 : (e || (i.env.footnotes || (i.env.footnotes = {}), i.env.footnotes.list || (i.env.footnotes.list = []), s = i.env.footnotes.list.length, i.pos = t, i.posMax = n, i.push({
    type: "footnote_ref",
    id: s,
    level: i.level
  }), i.linkLevel++, r = i.tokens.length, i.parser.tokenize(i), i.env.footnotes.list[s] = { tokens: i.tokens.splice(r) }, i.linkLevel--), i.pos = n + 1, i.posMax = o, !0);
}
function Gc(i, e) {
  var t, n, s, r, o = i.posMax, a = i.pos;
  if (a + 3 > o || !i.env.footnotes || !i.env.footnotes.refs || i.src.charCodeAt(a) !== 91 || i.src.charCodeAt(a + 1) !== 94 || i.level >= i.options.maxNesting)
    return !1;
  for (n = a + 2; n < o; n++) {
    if (i.src.charCodeAt(n) === 32 || i.src.charCodeAt(n) === 10)
      return !1;
    if (i.src.charCodeAt(n) === 93)
      break;
  }
  return n === a + 2 || n >= o || (n++, t = i.src.slice(a + 2, n - 1), typeof i.env.footnotes.refs[":" + t] > "u") ? !1 : (e || (i.env.footnotes.list || (i.env.footnotes.list = []), i.env.footnotes.refs[":" + t] < 0 ? (s = i.env.footnotes.list.length, i.env.footnotes.list[s] = { label: t, count: 0 }, i.env.footnotes.refs[":" + t] = s) : s = i.env.footnotes.refs[":" + t], r = i.env.footnotes.list[s].count, i.env.footnotes.list[s].count++, i.push({
    type: "footnote_ref",
    id: s,
    subId: r,
    level: i.level
  })), i.pos = n, i.posMax = o, !0);
}
var zc = [
  "coap",
  "doi",
  "javascript",
  "aaa",
  "aaas",
  "about",
  "acap",
  "cap",
  "cid",
  "crid",
  "data",
  "dav",
  "dict",
  "dns",
  "file",
  "ftp",
  "geo",
  "go",
  "gopher",
  "h323",
  "http",
  "https",
  "iax",
  "icap",
  "im",
  "imap",
  "info",
  "ipp",
  "iris",
  "iris.beep",
  "iris.xpc",
  "iris.xpcs",
  "iris.lwz",
  "ldap",
  "mailto",
  "mid",
  "msrp",
  "msrps",
  "mtqp",
  "mupdate",
  "news",
  "nfs",
  "ni",
  "nih",
  "nntp",
  "opaquelocktoken",
  "pop",
  "pres",
  "rtsp",
  "service",
  "session",
  "shttp",
  "sieve",
  "sip",
  "sips",
  "sms",
  "snmp",
  "soap.beep",
  "soap.beeps",
  "tag",
  "tel",
  "telnet",
  "tftp",
  "thismessage",
  "tn3270",
  "tip",
  "tv",
  "urn",
  "vemmi",
  "ws",
  "wss",
  "xcon",
  "xcon-userid",
  "xmlrpc.beep",
  "xmlrpc.beeps",
  "xmpp",
  "z39.50r",
  "z39.50s",
  "adiumxtra",
  "afp",
  "afs",
  "aim",
  "apt",
  "attachment",
  "aw",
  "beshare",
  "bitcoin",
  "bolo",
  "callto",
  "chrome",
  "chrome-extension",
  "com-eventbrite-attendee",
  "content",
  "cvs",
  "dlna-playsingle",
  "dlna-playcontainer",
  "dtn",
  "dvb",
  "ed2k",
  "facetime",
  "feed",
  "finger",
  "fish",
  "gg",
  "git",
  "gizmoproject",
  "gtalk",
  "hcp",
  "icon",
  "ipn",
  "irc",
  "irc6",
  "ircs",
  "itms",
  "jar",
  "jms",
  "keyparc",
  "lastfm",
  "ldaps",
  "magnet",
  "maps",
  "market",
  "message",
  "mms",
  "ms-help",
  "msnim",
  "mumble",
  "mvn",
  "notes",
  "oid",
  "palm",
  "paparazzi",
  "platform",
  "proxy",
  "psyc",
  "query",
  "res",
  "resource",
  "rmi",
  "rsync",
  "rtmp",
  "secondlife",
  "sftp",
  "sgn",
  "skype",
  "smb",
  "soldat",
  "spotify",
  "ssh",
  "steam",
  "svn",
  "teamspeak",
  "things",
  "udp",
  "unreal",
  "ut2004",
  "ventrilo",
  "view-source",
  "webcal",
  "wtai",
  "wyciwyg",
  "xfire",
  "xri",
  "ymsgr"
], Vc = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, Kc = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function Wc(i, e) {
  var t, n, s, r, o, a = i.pos;
  return i.src.charCodeAt(a) !== 60 || (t = i.src.slice(a), t.indexOf(">") < 0) ? !1 : (n = t.match(Kc), n ? zc.indexOf(n[1].toLowerCase()) < 0 || (r = n[0].slice(1, -1), o = Hi(r), !i.parser.validateLink(r)) ? !1 : (e || (i.push({
    type: "link_open",
    href: o,
    level: i.level
  }), i.push({
    type: "text",
    content: r,
    level: i.level + 1
  }), i.push({ type: "link_close", level: i.level })), i.pos += n[0].length, !0) : (s = t.match(Vc), s ? (r = s[0].slice(1, -1), o = Hi("mailto:" + r), i.parser.validateLink(o) ? (e || (i.push({
    type: "link_open",
    href: o,
    level: i.level
  }), i.push({
    type: "text",
    content: r,
    level: i.level + 1
  }), i.push({ type: "link_close", level: i.level })), i.pos += s[0].length, !0) : !1) : !1));
}
function _i(i, e) {
  return i = i.source, e = e || "", function t(n, s) {
    return n ? (s = s.source || s, i = i.replace(n, s), t) : new RegExp(i, e);
  };
}
var Xc = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, Zc = /[^"'=<>`\x00-\x20]+/, Yc = /'[^']*'/, Jc = /"[^"]*"/, Qc = _i(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", Zc)("single_quoted", Yc)("double_quoted", Jc)(), el = _i(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", Xc)("attr_value", Qc)(), tl = _i(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", el)(), nl = /<\/[A-Za-z][A-Za-z0-9]*\s*>/, sl = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/, il = /<[?].*?[?]>/, rl = /<![A-Z]+\s+[^>]*>/, ol = /<!\[CDATA\[[\s\S]*?\]\]>/, al = _i(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", tl)("close_tag", nl)("comment", sl)("processing", il)("declaration", rl)("cdata", ol)();
function cl(i) {
  var e = i | 32;
  return e >= 97 && e <= 122;
}
function ll(i, e) {
  var t, n, s, r = i.pos;
  return !i.options.html || (s = i.posMax, i.src.charCodeAt(r) !== 60 || r + 2 >= s) || (t = i.src.charCodeAt(r + 1), t !== 33 && t !== 63 && t !== 47 && !cl(t)) || (n = i.src.slice(r).match(al), !n) ? !1 : (e || i.push({
    type: "htmltag",
    content: i.src.slice(r, r + n[0].length),
    level: i.level
  }), i.pos += n[0].length, !0);
}
var dl = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, hl = /^&([a-z][a-z0-9]{1,31});/i;
function ul(i, e) {
  var t, n, s, r = i.pos, o = i.posMax;
  if (i.src.charCodeAt(r) !== 38)
    return !1;
  if (r + 1 < o) {
    if (t = i.src.charCodeAt(r + 1), t === 35) {
      if (s = i.src.slice(r).match(dl), s)
        return e || (n = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), i.pending += qo(n) ? Ui(n) : Ui(65533)), i.pos += s[0].length, !0;
    } else if (s = i.src.slice(r).match(hl), s) {
      var a = jo(s[1]);
      if (s[1] !== a)
        return e || (i.pending += a), i.pos += s[0].length, !0;
    }
  }
  return e || (i.pending += "&"), i.pos++, !0;
}
var Oi = [
  ["text", Mc],
  ["newline", kc],
  ["escape", Pc],
  ["backticks", Lc],
  ["del", Oc],
  ["ins", Nc],
  ["mark", Bc],
  ["emphasis", Dc],
  ["sub", Uc],
  ["sup", jc],
  ["links", $c],
  ["footnote_inline", qc],
  ["footnote_ref", Gc],
  ["autolink", Wc],
  ["htmltag", ll],
  ["entity", ul]
];
function Ei() {
  this.ruler = new Ye();
  for (var i = 0; i < Oi.length; i++)
    this.ruler.push(Oi[i][0], Oi[i][1]);
  this.validateLink = pl;
}
Ei.prototype.skipToken = function(i) {
  var e = this.ruler.getRules(""), t = e.length, n = i.pos, s, r;
  if ((r = i.cacheGet(n)) > 0) {
    i.pos = r;
    return;
  }
  for (s = 0; s < t; s++)
    if (e[s](i, !0)) {
      i.cacheSet(n, i.pos);
      return;
    }
  i.pos++, i.cacheSet(n, i.pos);
};
Ei.prototype.tokenize = function(i) {
  for (var e = this.ruler.getRules(""), t = e.length, n = i.posMax, s, r; i.pos < n; ) {
    for (r = 0; r < t && (s = e[r](i, !1), !s); r++)
      ;
    if (s) {
      if (i.pos >= n)
        break;
      continue;
    }
    i.pending += i.src[i.pos++];
  }
  i.pending && i.pushPending();
};
Ei.prototype.parse = function(i, e, t, n) {
  var s = new fn(i, this, e, t, n);
  this.tokenize(s);
};
function pl(i) {
  var e = ["vbscript", "javascript", "file", "data"], t = i.trim().toLowerCase();
  return t = dn(t), !(t.indexOf(":") !== -1 && e.indexOf(t.split(":")[0]) !== -1);
}
var fl = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "replacements",
        "smartquotes",
        "references",
        "abbr2",
        "footnote_tail"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "footnote",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph",
        "table"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "del",
        "emphasis",
        "entity",
        "escape",
        "footnote_ref",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
}, ml = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
}, gl = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "abbr2"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
}, bl = {
  default: fl,
  full: ml,
  commonmark: gl
};
function Zo(i, e, t) {
  this.src = e, this.env = t, this.options = i.options, this.tokens = [], this.inlineMode = !1, this.inline = i.inline, this.block = i.block, this.renderer = i.renderer, this.typographer = i.typographer;
}
function _t(i, e) {
  typeof i != "string" && (e = i, i = "default"), e && e.linkify != null && console.warn(
    `linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`
  ), this.inline = new Ei(), this.block = new hr(), this.core = new Wo(), this.renderer = new dr(), this.ruler = new Ye(), this.options = {}, this.configure(bl[i]), this.set(e || {});
}
_t.prototype.set = function(i) {
  $o(this.options, i);
};
_t.prototype.configure = function(i) {
  var e = this;
  if (!i)
    throw new Error("Wrong `remarkable` preset, check name/content");
  i.options && e.set(i.options), i.components && Object.keys(i.components).forEach(function(t) {
    i.components[t].rules && e[t].ruler.enable(i.components[t].rules, !0);
  });
};
_t.prototype.use = function(i, e) {
  return i(this, e), this;
};
_t.prototype.parse = function(i, e) {
  var t = new Zo(this, i, e);
  return this.core.process(t), t.tokens;
};
_t.prototype.render = function(i, e) {
  return e = e || {}, this.renderer.render(this.parse(i, e), this.options, e);
};
_t.prototype.parseInline = function(i, e) {
  var t = new Zo(this, i, e);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
_t.prototype.renderInline = function(i, e) {
  return e = e || {}, this.renderer.render(this.parseInline(i, e), this.options, e);
};
const Yt = class Yt {
  static addPlugins(e, t) {
    const n = window.remarkable_plugins;
    if (n && n.forEach((s) => {
      e.use(s.plugin, s.options);
    }), t != null && t.math) {
      window.katex || (console.warn("window.katex not found, use chatElementRef.refreshMessages to re-render messages"), console.warn("See https://deepchat.dev/examples/externalModules"));
      const s = typeof t.math == "object" ? t.math.delimiter : "", r = typeof t.math == "object" && t.math.options ? t.math.options : {};
      e.use(Ba.katex.bind(this, r), { delimiter: s });
    }
  }
  static instantiate(e) {
    if (e)
      return new _t({ ...Yt.DEFAULT_PROPERTIES, ...e });
    if (window.hljs) {
      const t = window.hljs;
      return new _t({
        highlight: function(n, s) {
          if (s && t.getLanguage(s))
            try {
              return t.highlight(n, { language: s }).value;
            } catch {
              console[f]("failed to setup the highlight dependency");
            }
          try {
            return t.highlightAuto(n).value;
          } catch {
            console[f]("failed to automatically highlight messages");
          }
          return "";
        },
        html: !1,
        // Enable HTML tags in source
        xhtmlOut: !1,
        // Use '/' to close single tags (<br />)
        breaks: !0,
        // Convert '\n' in paragraphs into <br>
        langPrefix: "language-",
        // CSS language prefix for fenced blocks
        linkTarget: "_blank",
        // set target to open in a new tab
        typographer: !0
        // Enable smartypants and other sweet transforms
      });
    } else
      return new _t(Yt.DEFAULT_PROPERTIES);
  }
  static createNew(e) {
    const t = Yt.instantiate(e);
    return Yt.addPlugins(t, e), t.inline.validateLink = () => !0, t;
  }
};
Yt.DEFAULT_PROPERTIES = {
  breaks: !0,
  linkTarget: "_blank"
  // set target to open in a new tab
};
let ws = Yt;
class yl {
  constructor(e) {
    this.storageKey = "deep-chat-storage", this.maxMessages = 1e3, this.trackInputText = !1, this.trackScrollHeight = !1, typeof e == "object" && (e.key && (this.storageKey = e.key), e.maxMessages && (this.maxMessages = e.maxMessages), e.inputText !== void 0 && (this.trackInputText = e.inputText), e.scrollHeight !== void 0 && (this.trackScrollHeight = e.scrollHeight), e.clear = this.clear.bind(this), le.processBrowserStorage(this));
  }
  get() {
    const e = localStorage.getItem(this.storageKey);
    return e ? JSON.parse(e) : { messages: [] };
  }
  set(e, t, n) {
    const s = { messages: e, inputText: t, scrollHeight: n };
    localStorage.setItem(this.storageKey, ce(s));
  }
  addMessages(e) {
    let t = e.length - this.maxMessages;
    t < 0 && (t = 0);
    const n = e.slice(t, e.length), s = this.trackInputText || this.trackScrollHeight ? localStorage.getItem(this.storageKey) : void 0, r = s ? JSON.parse(s) : void 0;
    this.set(
      n,
      this.trackInputText ? r == null ? void 0 : r.inputText : void 0,
      this.trackScrollHeight ? r == null ? void 0 : r.scrollHeight : void 0
    );
  }
  addInputText(e) {
    if (!this.trackInputText) return;
    const t = localStorage.getItem(this.storageKey), n = t ? JSON.parse(t) : void 0;
    this.set(
      (n == null ? void 0 : n.messages) || [],
      e,
      this.trackScrollHeight ? n == null ? void 0 : n.scrollHeight : void 0
    );
  }
  addScrollHeight(e) {
    if (!this.trackScrollHeight) return;
    const t = localStorage.getItem(this.storageKey), n = t ? JSON.parse(t) : void 0;
    this.set(
      (n == null ? void 0 : n.messages) || [],
      this.trackInputText ? n == null ? void 0 : n.inputText : void 0,
      e
    );
  }
  clear() {
    localStorage.removeItem(this.storageKey);
  }
}
class Be {
  static applyCustomStylesToElements(e, t, n) {
    if (n && (Object.assign(e.outerContainer[v], n.outerContainer), Object.assign(e.innerContainer[v], n.innerContainer), Object.assign(e.bubbleElement[v], n.bubble), t)) {
      const s = e.bubbleElement.children[0], r = s.tagName.toLocaleLowerCase() !== "a" ? s : s.children[0];
      Object.assign(r[v], n.media);
    }
  }
  static applySideStyles(e, t, n, s) {
    s && (Be.applyCustomStylesToElements(e, n, s.shared), t === F ? Be.applyCustomStylesToElements(e, n, s.user) : (Be.applyCustomStylesToElements(e, n, s.ai), Be.applyCustomStylesToElements(e, n, s[t])));
  }
  static isElementsStyles(e) {
    return !!(e.outerContainer || e.innerContainer || e.bubble || e.media);
  }
  // prettier-ignore
  static applyCustomStyles(e, t, n, s, r) {
    var o;
    r && e[w] !== r ? Be.isElementsStyles(r) ? (Be.applyCustomStylesToElements(t, s, (o = e[w]) == null ? void 0 : o.shared), Be.applyCustomStylesToElements(t, s, r)) : (Be.applySideStyles(t, n, s, e[w]), Be.applySideStyles(t, n, s, r)) : Be.applySideStyles(t, n, s, e[w]);
  }
  // prettier-ignore
  static extractParticularSharedStyles(e, t) {
    if (!(t != null && t.shared)) return;
    const n = t.shared, s = {
      outerContainer: {},
      innerContainer: {},
      bubble: {},
      media: {}
    };
    return e.forEach((r) => {
      var o, a, c, l;
      s.outerContainer[r] = ((o = n.outerContainer) == null ? void 0 : o[r]) || "", s.innerContainer[r] = ((a = n.innerContainer) == null ? void 0 : a[r]) || "", s.bubble[r] = ((c = n.bubble) == null ? void 0 : c[r]) || "", s.media[r] = ((l = n.media) == null ? void 0 : l[r]) || "";
    }), s;
  }
}
class Se {
  // prettier-ignore
  static setElementProps(e, t, n, s) {
    var r;
    n !== It && (e.applyCustomStyles(t, s, !0, (r = e.messageStyles) == null ? void 0 : r[n]), t.bubbleElement[m].add(Oo));
  }
  // prettier-ignore
  static addMessage(e, t, n, s, r) {
    Se.setElementProps(e, t, n, s), r ? e.elementRef.insertBefore(t.outerContainer, e.elementRef.firstChild) : e.appendOuterContainerElemet(t.outerContainer);
  }
  static wrapInLink(e, t, n) {
    const s = A("a");
    return s.href = t, s.download = n || se, s.target = "_blank", s.appendChild(e), s;
  }
  static isNonLinkableDataUrl(e, t) {
    return !t.startsWith("data") || e === W ? !1 : e === on && t.startsWith("data:text/javascript") || !t.startsWith("data:image") && !t.startsWith("data:application");
  }
  static processContent(e, t, n, s) {
    return !n || Se.isNonLinkableDataUrl(e, n) ? t : Se.wrapInLink(t, n, s);
  }
  static waitToLoadThenScroll(e) {
    setTimeout(() => {
      e();
    }, 60);
  }
  static scrollDownOnImageLoad(e, t) {
    if (e.startsWith("data"))
      Se.waitToLoadThenScroll(t);
    else
      try {
        fetch(e, { mode: "no-cors" }).catch(() => {
        }).finally(() => {
          Se.waitToLoadThenScroll(t);
        });
      } catch {
        t();
      }
  }
  // The strategy is to emit the actual file reference in the `onMessage` event for the user to inspect it
  // But it is not actually used by anything in the chat, hence it is removed when adding a message
  // after the body has been stringified and parsed - the file reference will disappear, hence this readds it
  static reAddFileRefToObject(e, t) {
    var n;
    (n = e[b]) == null || n.forEach((s, r) => {
      var o;
      s.ref && ((o = t[b]) != null && o[r]) && (t[b][r].ref = s.ref);
    });
  }
  // the chat does not use the actual file
  static removeFileRef(e) {
    const t = { ...e };
    return delete t.ref, t;
  }
  static isAudioFile(e) {
    const t = /\.(mp3|ogg|wav|aac|webm|4a)$/i, { type: n, src: s } = e;
    return n === $ || (s == null ? void 0 : s.startsWith("data:audio")) || s && t.test(s);
  }
  static isImageFile(e) {
    const { type: t, src: n } = e;
    return t === W || (n == null ? void 0 : n.startsWith("data:image")) || n && Se.isImageFileExtension(n);
  }
  static isImageFileExtension(e) {
    return /\.(jpg|jpeg|png|gif|bmp)$/i.test(e);
  }
}
class hn {
  static onMessage(e, t, n) {
    var r;
    const s = C({ message: t, isHistory: n, isInitial: n });
    Se.reAddFileRefToObject(t, s.message), (r = e.onMessage) == null || r.call(e, s), e.dispatchEvent(new CustomEvent("message", { detail: s })), le.fireOnNewMessage(e, s);
  }
  static onClearMessages(e) {
    var t;
    (t = e.onClearMessages) == null || t.call(e), e.dispatchEvent(new CustomEvent("clear-messages"));
  }
  static onRender(e) {
    var t;
    (t = e.onComponentRender) == null || t.call(e, e), e.dispatchEvent(new CustomEvent("render", { detail: e }));
  }
  static onInput(e, t, n) {
    var r, o;
    const s = C({ content: t, isUser: n });
    t[b] && Se.reAddFileRefToObject({ [b]: (r = t[b]) == null ? void 0 : r.map((a) => ({ ref: a })) }, s.content), (o = e.onInput) == null || o.call(e, s), e.dispatchEvent(new CustomEvent("input", { detail: s }));
  }
  static onError(e, t) {
    var n;
    (n = e.onError) == null || n.call(e, t), e.dispatchEvent(new CustomEvent(f, { detail: t }));
  }
}
const we = class we {
  static generateLoadingRingElement() {
    const e = A();
    return e[m].add("loading-history"), e.appendChild(A()), e.appendChild(A()), e.appendChild(A()), e.appendChild(A()), e;
  }
  static apply(e, t, n) {
    mt.setRing(t.bubbleElement, n == null ? void 0 : n.bubble), n != null && n.bubble && (n = C(n), delete n.bubble), e.applyCustomStyles(t, "history", !1, n);
  }
  static addLoadHistoryMessage(e, t, n = !0) {
    var a, c, l, d, p, u, g, y;
    e.bubbleElement[m].add(we.CLASS);
    const s = n ? we.FULL_VIEW_CLASS : we.SMALL_CLASS;
    e.outerContainer[m].add(s);
    const r = n ? (d = (l = (c = (a = t.messageStyles) == null ? void 0 : a.loading) == null ? void 0 : c.history) == null ? void 0 : l.full) == null ? void 0 : d[R] : (y = (g = (u = (p = t.messageStyles) == null ? void 0 : p.loading) == null ? void 0 : u.history) == null ? void 0 : g.small) == null ? void 0 : y[R];
    we.apply(t, e, r);
    let o = t.elementRef;
    n && t.elementRef.id !== Bo && (o = t.elementRef.parentElement), o == null || o.prepend(e.outerContainer);
  }
  static createDefaultElements(e) {
    const t = e.createMessageElements("", ne), { bubbleElement: n } = t, s = we.generateLoadingRingElement();
    return n.appendChild(s), t;
  }
  static addMessage(e, t = !0) {
    var r, o, a, c;
    const n = (c = (a = (o = (r = e.messageStyles) == null ? void 0 : r.loading) == null ? void 0 : o.history) == null ? void 0 : a.full) == null ? void 0 : c[L], s = n ? yt.createElements(e, n, ne, !0, !0) : we.createDefaultElements(e);
    return we.addLoadHistoryMessage(s, e, t), B.softRemRoleElements(s.innerContainer, e.avatar, e.name), s;
  }
  static tryChangeViewToSmall(e, t) {
    var n, s, r, o, a, c, l, d;
    if (t != null && t.outerContainer[m].contains(we.FULL_VIEW_CLASS)) {
      t.outerContainer[m].replace(we.FULL_VIEW_CLASS, we.SMALL_CLASS);
      const p = (o = (r = (s = (n = e.messageStyles) == null ? void 0 : n.loading) == null ? void 0 : s.history) == null ? void 0 : r.small) == null ? void 0 : o[R];
      p && we.apply(e, t, p);
      const u = (d = (l = (c = (a = e.messageStyles) == null ? void 0 : a.loading) == null ? void 0 : c.history) == null ? void 0 : l.small) == null ? void 0 : d[L];
      return u && (t.bubbleElement.innerHTML = u), !0;
    }
    return !1;
  }
  static changeFullViewToSmall(e) {
    const t = e.messageElementRefs[e.messageElementRefs.length - 1];
    we.tryChangeViewToSmall(e, t) || we.tryChangeViewToSmall(e, e.messageElementRefs[0]);
  }
};
we.CLASS = "loading-history-message", we.FULL_VIEW_CLASS = "loading-history-message-full-view", we.SMALL_CLASS = "loading-history-message-small";
let Mt = we;
const bs = class bs {
  static setFade(e, t) {
    e[v].transitionDuration = typeof t == "number" ? `${t}ms` : `${bs.DEFAULT_FADE_MS}ms`;
  }
  static async fadeAnimation(e, t) {
    e[v].opacity = "0";
    const n = typeof t == "number" ? t : bs.DEFAULT_FADE_MS;
    await new Promise((s) => {
      setTimeout(() => s(), n);
    }), e[v].opacity = "1";
  }
};
bs.DEFAULT_FADE_MS = 500;
let Ws = bs;
class Kt {
  constructor(e, t, n) {
    if (this.hiddenElements = /* @__PURE__ */ new Set(), this.isScrollButton = !1, this.isScrollingToBottom = !1, this._messages = e, t) {
      let s = {};
      typeof t == "object" && (s = C(t), s.onUpdate = t.onUpdate), s[R] ?? (s[R] = {});
      const r = "fit-content";
      s[R].default = { borderRadius: "10px", width: r, height: r, ...s[R].default }, this.hiddenMessagesConfig = s, this.io = this.initIntersectionObserver(this._messages.elementRef);
    }
    if (n) {
      const s = typeof n == "object" ? C(n) : {};
      s[R] ?? (s[R] = {}), s[R].default = { borderRadius: "50%", width: "1.4rem", height: "1.4rem", ...s[R].default }, this.scrollButtonConfig = s;
    }
    this.element = this.createElement(), this._messages.elementRef.appendChild(this.element);
  }
  static displayElement(e) {
    e[v].opacity = Dr, e[v].pointerEvents = "auto";
  }
  static hideElement(e) {
    e[v].opacity = Br, e[v].pointerEvents = "none";
  }
  initIntersectionObserver(e) {
    return new IntersectionObserver(
      (t) => {
        t.forEach((n) => {
          var s;
          n.isIntersecting && this.hiddenElements.has(n.target) && (this.hiddenElements.delete(n.target), (s = this.io) == null || s.unobserve(n.target), this.updateHiddenElement());
        });
      },
      { root: e, threshold: 0.1 }
    );
  }
  createElement() {
    const e = A();
    return e.id = "scroll-button", z.assignButtonEvents(e, () => {
      var s, r, o;
      const t = this.isScrollButton ? (s = this.scrollButtonConfig) == null ? void 0 : s.smoothScroll : (r = this.hiddenMessagesConfig) == null ? void 0 : r.smoothScroll, n = typeof t == "boolean" ? t : !0;
      if (this.isScrollButton || ((o = this.hiddenMessagesConfig) == null ? void 0 : o.clickScroll) === "last")
        z.scrollToBottom(this._messages, n), n && this.element && (Kt.hideElement(this.element), this.isScrollingToBottom = !0, z.waitForScrollEnd(this._messages.elementRef, () => {
          this.isScrollingToBottom = !1;
        }));
      else {
        const a = this.hiddenElements.values().next().value;
        a && this._messages.elementRef.scrollTo({
          left: 0,
          top: a.offsetTop,
          behavior: n ? "smooth" : "auto"
        });
      }
    }), oe.apply(this._messages, e), e;
  }
  assignStyles(e) {
    if (!this.element) return;
    Object.assign(this.element[v], e[w]);
    const t = de.processStateful(e);
    Rt.add(this.element, t);
  }
  updateHiddenElement() {
    var e, t;
    if (this.element) {
      this.isScrollButton = !1;
      const n = this.hiddenElements.size;
      if (n === 0) {
        Kt.hideElement(this.element);
        return;
      }
      const s = `${n} new message${n === 1 ? "" : "s"}`;
      if ((e = this.hiddenMessagesConfig) != null && e.onUpdate) {
        const r = this.hiddenMessagesConfig.onUpdate(s, n);
        this.element.innerHTML = r, oe.apply(this._messages, this.element);
      } else
        this.element.innerHTML = s;
      (t = this.hiddenMessagesConfig) != null && t[R] && this.assignStyles(this.hiddenMessagesConfig[R]), Kt.displayElement(this.element);
    }
  }
  updateHidden() {
    var e, t;
    if (!this.isScrollingToBottom)
      if (this.hiddenMessagesConfig) {
        const n = (e = this._messages.getFirstMessageContentEl()) == null ? void 0 : e.outerContainer;
        n && !z.isVisibleInParent(n, this._messages.elementRef) && (this.hiddenElements.add(n), (t = this.io) == null || t.observe(n), this.updateHiddenElement());
      } else
        this.updateScroll();
  }
  clearHidden() {
    this.hiddenElements.forEach((e) => {
      var t;
      return (t = this.io) == null ? void 0 : t.unobserve(e);
    }), this.hiddenElements.clear(), this.updateHiddenElement();
  }
  displayScroll() {
    var e, t;
    this.element && this.element[v].opacity !== Dr && (Kt.displayElement(this.element), this.element.innerHTML = ((e = this.scrollButtonConfig) == null ? void 0 : e.content) || '<span style="font-size: 1.2rem; user-select: none;">&darr;</span>', (t = this.scrollButtonConfig) != null && t[R] && this.assignStyles(this.scrollButtonConfig[R]));
  }
  updateScroll() {
    var e;
    this.isScrollingToBottom || !this.scrollButtonConfig || (z.isScrollbarAtBottomOfElement(this._messages.elementRef, ((e = this.scrollButtonConfig) == null ? void 0 : e.scrollDelta) || 80) ? this.element && this.element[v].opacity !== Br && Kt.hideElement(this.element) : (this.displayScroll(), this.isScrollButton = !0));
  }
}
const Jr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cpath%20d='M23,30.36H9c-2.404,0-4.36-1.956-4.36-4.36V15c0-2.404,1.956-4.36,4.36-4.36h3.659%20c0.167-1.566,1.415-2.813,2.981-2.981V5.333c-1.131-0.174-2-1.154-2-2.333c0-1.301,1.059-2.36,2.36-2.36%20c1.302,0,2.36,1.059,2.36,2.36c0,1.179-0.869,2.159-2,2.333V7.66c1.566,0.167,2.814,1.415,2.981,2.981H23%20c2.404,0,4.36,1.956,4.36,4.36v11C27.36,28.404,25.404,30.36,23,30.36z%20M9,11.36c-2.007,0-3.64,1.633-3.64,3.64v11%20c0,2.007,1.633,3.64,3.64,3.64h14c2.007,0,3.64-1.633,3.64-3.64V15c0-2.007-1.633-3.64-3.64-3.64H9z%20M13.384,10.64h5.231%20C18.439,9.354,17.334,8.36,16,8.36C14.667,8.36,13.561,9.354,13.384,10.64z%20M16,1.36c-0.904,0-1.64,0.736-1.64,1.64%20S15.096,4.64,16,4.64c0.904,0,1.64-0.736,1.64-1.64S16.904,1.36,16,1.36z%20M20,27.36h-8c-1.301,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36h8c1.302,0,2.36,1.059,2.36,2.36S21.302,27.36,20,27.36z%20M12,23.36c-0.904,0-1.64,0.735-1.64,1.64%20s0.736,1.64,1.64,1.64h8c0.904,0,1.64-0.735,1.64-1.64s-0.735-1.64-1.64-1.64H12z%20M31,23.86h-2c-0.199,0-0.36-0.161-0.36-0.36V15%20c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5C31.36,23.699,31.199,23.86,31,23.86z%20M29.36,23.14h1.279v-7.78%20H29.36V23.14z%20M3,23.86H1c-0.199,0-0.36-0.161-0.36-0.36V15c0-0.199,0.161-0.36,0.36-0.36h2c0.199,0,0.36,0.161,0.36,0.36v8.5%20C3.36,23.699,3.199,23.86,3,23.86z%20M1.36,23.14h1.28v-7.78H1.36V23.14z%20M20,20.36c-1.302,0-2.36-1.059-2.36-2.36%20s1.059-2.36,2.36-2.36s2.36,1.059,2.36,2.36C22.36,19.302,21.302,20.36,20,20.36z%20M20,16.36c-0.904,0-1.64,0.736-1.64,1.64%20s0.735,1.64,1.64,1.64s1.64-0.735,1.64-1.64S20.904,16.36,20,16.36z%20M12,20.36c-1.301,0-2.36-1.059-2.36-2.36s1.059-2.36,2.36-2.36%20s2.36,1.059,2.36,2.36C14.36,19.302,13.301,20.36,12,20.36z%20M12,16.36c-0.904,0-1.64,0.736-1.64,1.64s0.736,1.64,1.64,1.64%20s1.64-0.735,1.64-1.64S12.904,16.36,12,16.36z'/%3e%3crect%20style='fill:none;'%20width='32'%20height='32'/%3e%3c/svg%3e", ji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAADNQTFRF////9vX18vLy/Pz86enp4+Li2tnZ1tbWzczM+fn57Ozs4N/f09LS0M/P5uXl7+/v3dzcwtncCAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAZNSURBVHja7d3bdtsqEABQYABZSLH9/3+ZpnUsIcF5iOM6PfElNoMHMfPQdq3GmL0GkLhEUqLaUExnOtOZznSmM53pTGc605nOdKYznelMZzrTmV4LXSqllKyJDkob26xWq8Zae/iH0QoWTm9d1xur4WuypQJtTd+5dqn0VjcxzNO5/57mEBvdLo8Oron6aseWOjYOFkVvjQs3DmgyONMuht52EfztP+4hdu0i6LCO808/M8c1lE/fuPGej41uUzgdtoO/75N+2ELJ9I3b3//hPXbiMenm3pR/Jt4USgcLBIp4Bh10gqKVhvLo0klCxeSky96nKcj3siw6pJIL4XsoiQ7apyvMY/V3HHrSRioLopvEhSpTCn2TPEuwKYMOIX0tAxRBf/Hpa+lfSqBv9gi1FPsNfTrMAiVmIE/vJhz61FGnQxRIEYE4vfNYdN8Rp6MlHaHotHTn8ejekaZPAjEmyvQWdZFTtYTpXqCGJ0zvcek9Yfoel76nS0ffv1NMp1ca+pkgyfRCGind4L7OWWc605l+cxjsyhqy9AGbPpClc1/nvl5VX0c/3Alk6RU3+Am7shNZ+h6bvidLr7jBB+zKBrL0irOOudmIUDzTmf5gIP+iEuXtRuTVaEmY/oZLfyNMrzjryPc0gerMTdpVg0tvjJUU6bLPcGOoUv46SLL6Wi8yhLf06C7TUyekI0efRaaYqdFltkeNpPumRPSMDxgBYvSM035FrKAmH72hRW99PrpvSdEHkTEGUvSsK3yKVDkuJ92RohcZaehzzirPpOg+J92Tolfc4Cumx5xVXpGiZ34+ICX6W84qv5GiR5NPbiIpOv6BCoSvSkTX+eiaGP092zINvBOj4x8mSf9FqejvNo/cvpOji19ZbmviL0GPLsYMFzgzCor0+Bv/ePDvSJKOb9dJ5UlnbnEHiHgzv6cdTpJOWuc/u3FEucLDOL75xGtBiefrcwgoC9NDSH/jkH6pAuXmBqPQ9HSUPVdZBH1GGOrMXAQdYxcKZfxAoK+KKBKFLosoEoX+u4giUehz8jlcnAuhp78I46yDYNAd+QLR6K+pr+yvxdBTHyVDubQh0UfSxaHSd0lbvNkVRE87JGOtc+PQd2QLQ6fHhJkKsSh6yg13tO08JPprsgrrXWH0dJd2vH1MLPprot4eXoujpzrdhngiD40ek2y92lggPcnWa8qN1Yz0BFuvZhRl0uOfR0v4Ewuli/Bg4Qr3lArqGdndQ3UPO1EunXYwnelMZzrTmc50pjOd6UxnOtOZznSmM53pTGf6kuj6oedFKV0s3fX6sX1S3bsi6a4PD7+/YAqYeBw6pIB/4qEgOqxdSPbGiim4NRRCbzs3Jj0L4UfXtQXQVRfn5IdA/Bw7RZzurEV6EtdsLeGXkIPuA+K1UoVeA0l62zmN/LqfSSft9KkepmoRuvi3nd5uKNFB9zbbXEANqdr941XO0NJx2v2jdJenpf+/3bvn0ts16ph+sd6hX7dPo2+2cZzE02Ia43bzDHqr+2Evnhz74ZHU30ffbKOeng1/NPV30Ns1gYQnSP2P6e65Pfxc6h02XZqXQCjhJ6kPL6bFo4NrGvAU4UII4SE2P1vQuZkuOxckVfehisF1MjUddN/MZBN+kvq5uf0O/xa66gyNS9ktMWlz44rO1Z8C19i5FPdHzPamXn+F3hryPfxMr78+4F+kq22kO6Rf6fUQt+puuustyWv4rbG3l/duztFB96GYoe1cTBdXMr+nw9qVM6ZfxOvzezff0nXi/ZOndvrR6Zvpm0c3h6nhdb+5iS7tsIim/qXZD9+97/Jf+rpZ5BET1ayv0GUzLhEuhBBjIy/RdVPgndutIRt9nt7p5cKFEEJ3Z+jQFDZL+XnMDXxHB73gxn5s9Kc3d3/pFciFkN/QTSXHJpX5l66gDrkQoP6hL3xsPw39la4qOiV8tH78XeSbue6N9mvWa6J/ybpc1CT1Wnh5Qq9meP8IOKH3ddH7E/ri1iYux/SXDrXR4UiPdck/wUpU+FtPf6/orja6O9KL3l56LOvVxe5Ib2qjN0d6Vbex4ghWlU3bPqI90If66MNng680FNpbJijH6kCvaF3uMzQ3+IrpFerV4Y9dffQdN3im10ivbuImhD3Qq5u4HdZkua8znelMZ/pS4z9CPVKkxowNxgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMy0yN1QxNTo0NToxNSswMDowMN1xSg4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDMtMjdUMTU6NDU6MTUrMDA6MDCsLPKyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==";
class Yo {
  constructor(e) {
    this.className = e;
  }
  getAvatarContainer(e) {
    return e.getElementsByClassName(this.className)[0];
  }
  tryHide(e) {
    var t;
    (t = this.getAvatarContainer(e)[v]).visibility || (t.visibility = "hidden");
  }
  tryReveal(e) {
    this.getAvatarContainer(e)[v].visibility = "";
  }
  trySoftRem(e) {
    this.getAvatarContainer(e)[m].add("role-hidden");
  }
}
class vt extends Yo {
  constructor(e) {
    super("avatar-container"), this._avatars = e;
  }
  addBesideBubble(e, t) {
    const n = typeof this._avatars == "boolean" ? void 0 : this._avatars, s = this.createAvatar(t, n), r = this.getPosition(t, n);
    s[m].add(r === qt ? "start-item-position" : "end-item-position"), e.insertAdjacentElement(r === qt ? "beforebegin" : "afterend", s);
  }
  createAvatar(e, t) {
    var r, o, a, c, l;
    const n = A("img");
    e === F ? (n[T] = ((r = t == null ? void 0 : t[F]) == null ? void 0 : r[T]) || ((o = t == null ? void 0 : t[w]) == null ? void 0 : o[T]) || ji, n.onerror = vt.errorFallback.bind(this, ji)) : (n[T] = ((a = t == null ? void 0 : t[e]) == null ? void 0 : a[T]) || ((c = t == null ? void 0 : t[ne]) == null ? void 0 : c[T]) || ((l = t == null ? void 0 : t[w]) == null ? void 0 : l[T]) || Jr, n.onerror = vt.errorFallback.bind(this, Jr)), n[m].add("avatar"), n.alt = `${e} avatar`;
    const s = A();
    return s[m].add(this.className), s.appendChild(n), t && vt.applyCustomStyles(s, n, t, e), s;
  }
  getPosition(e, t) {
    var s, r, o, a, c, l;
    let n = le.processPosition((r = (s = t == null ? void 0 : t[e]) == null ? void 0 : s[R]) == null ? void 0 : r.position);
    return e !== F && (n ?? (n = (a = (o = t == null ? void 0 : t.ai) == null ? void 0 : o[R]) == null ? void 0 : a.position)), n ?? (n = (l = (c = t == null ? void 0 : t[w]) == null ? void 0 : c[R]) == null ? void 0 : l.position), n ?? (n = e === F ? No : qt), n;
  }
  static errorFallback(e, t) {
    const n = t.target;
    n.onerror = null, n[T] = e;
  }
  static applyCustomStylesToElements(e, t, n) {
    Object.assign(e[v], n.container), Object.assign(t[v], n.avatar);
  }
  static applyCustomStyles(e, t, n, s) {
    var r, o, a, c;
    if ((r = n[w]) != null && r[R] && vt.applyCustomStylesToElements(e, t, n[w][R]), s === F)
      (o = n.user) != null && o[R] && vt.applyCustomStylesToElements(e, t, n.user[R]);
    else {
      (a = n.ai) != null && a[R] && vt.applyCustomStylesToElements(e, t, n.ai[R]);
      const l = (c = n[s]) == null ? void 0 : c[R];
      l && vt.applyCustomStylesToElements(e, t, l);
    }
  }
}
class hs extends Yo {
  constructor(e) {
    super("name"), this._names = e;
  }
  addBesideBubble(e, t) {
    const n = typeof this._names == "boolean" ? {} : this._names, s = this.createName(t, n), r = hs.getPosition(t, n);
    s[m].add(r === qt ? "start-item-position" : "end-item-position"), e.insertAdjacentElement(r === qt ? "beforebegin" : "afterend", s);
  }
  createName(e, t) {
    const n = A();
    return n[m].add(this.className), n.textContent = hs.getNameText(e, t), hs.applyStyle(n, e, t), n;
  }
  static getPosition(e, t) {
    var s, r, o;
    let n = le.processPosition((s = t == null ? void 0 : t[e]) == null ? void 0 : s.position);
    return e !== F && (n ?? (n = (r = t == null ? void 0 : t[ne]) == null ? void 0 : r.position)), n ?? (n = (o = t == null ? void 0 : t[w]) == null ? void 0 : o.position), n ?? (n = e === F ? No : qt), n;
  }
  static applyStyle(e, t, n) {
    var s, r, o, a;
    Object.assign(e[v], (s = n[w]) == null ? void 0 : s[v]), t === F ? Object.assign(e[v], (r = n[F]) == null ? void 0 : r[v]) : (Object.assign(e[v], (o = n[ne]) == null ? void 0 : o[v]), Object.assign(e[v], (a = n[t]) == null ? void 0 : a[v]));
  }
  static getNameText(e, t) {
    var n, s, r, o, a, c;
    return e === F ? ((n = t[F]) == null ? void 0 : n[h]) || ((s = t[w]) == null ? void 0 : s[h]) || "User" : e === ne ? ((r = t[ne]) == null ? void 0 : r[h]) || ((o = t[w]) == null ? void 0 : o[h]) || "AI" : ((a = t[e]) == null ? void 0 : a[h]) || ((c = t[w]) == null ? void 0 : c[h]) || e;
  }
}
const je = class je {
  constructor(e) {
    var t, n, s, r;
    this.messageElementRefs = [], this.htmlClassUtilities = {}, this.messageToElements = [], this.maxVisibleMessages = 4e3, this.autoScrollAllowed = !0, this.elementRef = je.createContainerElement(), this.messageStyles = le.processMessageStyles(e.messageStyles), this._remarkable = ws.createNew(e.remarkable), this._applyHTMLToRemarkable = (t = e.remarkable) == null ? void 0 : t.applyHTML, e.avatars && (this.avatar = new vt(e.avatars)), e.names && (this.name = new hs(e.names)), e.browserStorage && (this.browserStorage = new yl(e.browserStorage)), this._onMessage = hn.onMessage.bind(this, e), e.htmlClassUtilities && (this.htmlClassUtilities = e.htmlClassUtilities), (e.hiddenMessages || e.scrollButton) && (this.scrollButton = new Kt(this, e.hiddenMessages, e.scrollButton)), this.focusMode = le.processFocusMode(e.focusMode), this.focusMode || (this._lastGroupMessagesElement = A(), this.elementRef.appendChild(this._lastGroupMessagesElement), e.upwardsMode && (this.elementRef = this._lastGroupMessagesElement)), typeof this.focusMode != "boolean" && ((n = this.focusMode) != null && n.fade) && Ws.setFade(this.elementRef, this.focusMode.fade), this._customWrappers = e.htmlWrappers || le.processStreamHTMLWrappers((s = e.connect) == null ? void 0 : s.stream), typeof this.focusMode != "boolean" && ((r = this.focusMode) == null ? void 0 : r.streamAutoScroll) === !1 && (this.autoScrollAllowed = !1), e.maxVisibleMessages && (this.maxVisibleMessages = e.maxVisibleMessages), setTimeout(() => {
      this.submitUserMessage = e.submitUserMessage;
    });
  }
  static createContainerElement() {
    const e = A();
    return e.id = Bo, e;
  }
  addNewTextMessage(e, t, n, s = !1) {
    if (n != null && n.status) {
      const o = this.overwriteText(t, e, this.messageElementRefs);
      if (o) return o;
      n.status = !1;
    }
    const r = s ? this.createAndPrependNewMessageElement(e, t, s) : this.createAndAppendNewMessageElement(e, t);
    return r.bubbleElement[m].add(je.TEXT_BUBBLE_CLASS), this.applyCustomStyles(r, t, !1), B.fillEmptyMessageElement(r.bubbleElement, e), r;
  }
  // prettier-ignore
  overwriteText(e, t, n) {
    const s = B.overwriteMessage(
      this.messageToElements,
      n,
      t,
      e,
      "text",
      je.TEXT_BUBBLE_CLASS
    );
    return s && this.renderText(s.bubbleElement, t, e), s;
  }
  createAndAppendNewMessageElement(e, t) {
    const n = this.createNewMessageElement(e, t);
    return this.appendOuterContainerElemet(n.outerContainer, this.focusMode ? t : void 0), n;
  }
  createNewGroupElementFocusMode() {
    var t;
    (t = this._lastGroupMessagesElement) == null || t[m].remove(je.LAST_GROUP_MESSAGES_ACTIVE);
    const e = A();
    (this.messageToElements.length > 1 || this.messageToElements.length === 1 && this.messageToElements[0][0][x] !== F) && e[m].add(je.LAST_GROUP_MESSAGES_ACTIVE), this._lastGroupMessagesElement = e;
  }
  appendOuterContainerElemet(e, t) {
    var n;
    this.focusMode && (t === F || !this._lastGroupMessagesElement) && this.createNewGroupElementFocusMode(), (n = this._lastGroupMessagesElement) == null || n.appendChild(e), this._lastGroupMessagesElement && (this.focusMode || !this.elementRef.contains(this._lastGroupMessagesElement)) && this.elementRef.appendChild(this._lastGroupMessagesElement);
  }
  createAndPrependNewMessageElement(e, t, n, s = !1) {
    var o;
    const r = this.createNewMessageElement(e, t, n, s);
    if (n && ((o = this.elementRef.firstChild) != null && o[m].contains(je.INTRO_CLASS))) {
      this.elementRef.firstChild.insertAdjacentElement("afterend", r.outerContainer);
      const a = this.messageElementRefs[0];
      this.messageElementRefs[0] = this.messageElementRefs[1], this.messageElementRefs[1] = a;
    } else
      this.elementRef.insertBefore(r.outerContainer, this.elementRef.firstChild);
    return r;
  }
  createMessageElementsOnOrientation(e, t, n, s = !1) {
    return n ? this.createAndPrependNewMessageElement(e, t, n, s) : this.createNewMessageElement(e, t, n, s);
  }
  getNumberOfContentMessages() {
    var t, n;
    const e = this.messageElementRefs.length;
    return (n = (t = this.messageElementRefs[e - 1]) == null ? void 0 : t.bubbleElement) != null && n[m].contains(mt.BUBBLE_CLASS) ? e - 1 : e;
  }
  createNewMessageElement(e, t, n = !1, s = !1) {
    var o;
    !s && this.getNumberOfContentMessages() >= this.maxVisibleMessages && setTimeout(() => this.removeFirstMessage()), s || (o = this._introPanel) == null || o.hide();
    const r = this.messageElementRefs[this.messageElementRefs.length - 1];
    return Mt.changeFullViewToSmall(this), !n && je.isTemporaryElement(r) && (this.revealRoleElementsIfTempRemoved(r, t), this.removeLastMessage()), this.createMessageElements(e, t, n);
  }
  // this can be tested by having an ai message, then a temp ai message with html that submits new user message:
  // https://github.com/OvidijusParsiunas/deep-chat/issues/258
  // prettier-ignore
  revealRoleElementsIfTempRemoved(e, t) {
    if ((this.avatar || this.name) && bt.isElementTemporary(e)) {
      const n = this.messageElementRefs[this.messageElementRefs.length - 2];
      n && this.messageToElements.length > 0 && !e.bubbleElement[m].contains(B.getRoleClass(t)) && B.revealRoleElements(n.innerContainer, this.avatar, this.name);
    }
  }
  static isTemporaryElement(e) {
    return je.isLoadingMessage(e) || bt.isElementTemporary(e);
  }
  createElements(e, t) {
    const n = je.createBaseElements(t), { outerContainer: s, innerContainer: r, bubbleElement: o } = n;
    return s.appendChild(r), this.addInnerContainerElements(o, e, t), n;
  }
  createMessageElements(e, t, n = !1) {
    const s = this.createElements(e, t);
    return B.updateRefArr(this.messageElementRefs, s, n), B.classifyRoleMessages(this.messageElementRefs, t), s;
  }
  static createBaseElements(e) {
    const t = A(), n = A();
    n[m].add("inner-message-container"), t.appendChild(n), t[m].add("outer-message-container"), t[m].add(B.buildRoleOuterContainerClass(e));
    const s = A();
    return s[m].add("message-bubble"), n.appendChild(s), { outerContainer: t, innerContainer: n, bubbleElement: s };
  }
  // prettier-ignore
  addInnerContainerElements(e, t, n) {
    const s = this.messageElementRefs[this.messageElementRefs.length - 1];
    return B.areOuterContainerClassRolesSame(n, s) && !this.isLastMessageError() && B.hideRoleElements(s.innerContainer, this.avatar, this.name), e[m].add(
      "message-bubble",
      B.getRoleClass(n),
      n === F ? "user-message-text" : "ai-message-text"
    ), this.renderText(e, t, n), B.addRoleElements(e, n, this.avatar, this.name), { bubbleElement: e };
  }
  // prettier-ignore
  applyCustomStyles(e, t, n, s) {
    e && this.messageStyles && Be.applyCustomStyles(this.messageStyles, e, t, n, s);
  }
  static createMessageContent(e) {
    const { text: t, files: n, html: s, custom: r, _sessionId: o, role: a } = e, c = { [x]: a || ne };
    return t && (c[h] = t), n && (c[b] = n), s && (c[L] = s), !t && !n && !s && (c[h] = ""), r && (c.custom = r), o && (c._sessionId = o), c;
  }
  removeMessage(e) {
    e.outerContainer.remove();
    const t = this.messageElementRefs.findIndex((n) => n === e);
    this.messageElementRefs.splice(t, 1);
  }
  removeFirstMessage() {
    this.messageElementRefs[0].outerContainer.remove(), this.messageElementRefs.shift();
  }
  removeLastMessage() {
    this.messageElementRefs[this.messageElementRefs.length - 1].outerContainer.remove(), this.messageElementRefs.pop();
  }
  isLastMessageError() {
    var e;
    return (e = B.getLastMessageBubbleElement(this.elementRef)) == null ? void 0 : e[m].contains(Vs);
  }
  static isLoadingMessage(e) {
    return e == null ? void 0 : e.bubbleElement[m].contains(mt.BUBBLE_CLASS);
  }
  sendClientUpdate(e, t = !1) {
    var n;
    (n = this._onMessage) == null || n.call(this, e, t);
  }
  // role is optional to not add wrapper to error
  renderText(e, t, n) {
    const { contentEl: s, wrapper: r } = oe.tryAddWrapper(e, t, this._customWrappers, n);
    r && oe.apply(this, e), s.innerHTML = this._remarkable.render(t), this._applyHTMLToRemarkable && oe.apply(this, s), s.innerText.trim().length === 0 && s.children.length > 0 && s.children[0].tagName !== "P" && (s.innerText = t);
  }
  // this is mostly used for enabling highlight.js to highlight code if it downloads later
  refreshTextMessages(e) {
    this._remarkable = ws.createNew(e), this.messageToElements.forEach((t) => {
      t[1][h] && t[0][h] && this.renderText(t[1][h].bubbleElement, t[0][h], t[0][x]);
    });
  }
  getFirstMessageContentEl() {
    const { text: e, html: t, files: n } = this.messageToElements[this.messageToElements.length - 1][1];
    return e || t || (n == null ? void 0 : n[0]);
  }
  scrollToFirstElement(e, t) {
    var n;
    if (e === F) {
      const s = typeof this.focusMode != "boolean" && ((n = this.focusMode) == null ? void 0 : n.smoothScroll);
      z.scrollToBottom(this, s);
    } else if (t && this.autoScrollAllowed) {
      const s = this.getFirstMessageContentEl();
      z.scrollToBottom(this, !1, s == null ? void 0 : s.outerContainer);
    }
  }
};
je.TEXT_BUBBLE_CLASS = "text-message", je.INTRO_CLASS = "deep-chat-intro", je.LAST_GROUP_MESSAGES_ACTIVE = "deep-chat-last-group-messages-active";
let nt = je;
class B {
  static getLastElementsByClass(e, t, n) {
    for (let s = e.length - 1; s >= 0; s -= 1) {
      const r = e[s];
      if (r.bubbleElement[m].contains(t[0]) && !t.slice(1).find((a) => !r.bubbleElement[m].contains(a)))
        if (n) {
          if (!n.find((c) => r.bubbleElement[m].contains(c))) return r;
        } else
          return r;
    }
  }
  static getLastMessage(e, t, n) {
    for (let s = e.length - 1; s >= 0; s -= 1)
      if (e[s][0][x] === t)
        if (n) {
          if (e[s][0][n]) return e[s][0];
        } else
          return e[s][0];
  }
  static getLastTextToElement(e, t) {
    for (let n = e.length - 1; n >= 0; n -= 1)
      if (e[n][0] === t)
        return e[n];
  }
  // IMPORTANT: If the overwrite message does not contain a role property it will look for the last 'ai' role message
  // and if messages have custom roles, it will still look to update the last 'ai' role message
  // prettier-ignore
  static overwriteMessage(e, t, n, s, r, o) {
    const a = B.getLastElementsByClass(
      t,
      [B.getRoleClass(s), o],
      [mt.BUBBLE_CLASS]
    ), c = B.getLastMessage(e, s, r);
    return c && (c[r] = n), a;
  }
  static getRoleClass(e) {
    return `${e}-message`;
  }
  // makes sure the bubble has dimensions when there is no text
  static fillEmptyMessageElement(e, t) {
    t.trim().length === 0 && (e[m].add(Or), e.innerHTML = '<div style="color:#00000000">.</div>');
  }
  static unfillEmptyMessageElement(e, t) {
    e[m].contains(Or) && t.trim().length > 0 && e.replaceChildren();
  }
  static getLastMessageBubbleElement(e) {
    var t, n, s;
    return Array.from(((s = (n = (t = B.getLastMessageElement(e)) == null ? void 0 : t.children) == null ? void 0 : n[0]) == null ? void 0 : s.children) || []).find((r) => r[m].contains("message-bubble"));
  }
  static getLastMessageElement(e) {
    var n;
    const t = (n = e.children[e.children.length - 1]) == null ? void 0 : n.children;
    return t == null ? void 0 : t[t.length - 1];
  }
  static addRoleElements(e, t, n, s) {
    n == null || n.addBesideBubble(e, t), s == null || s.addBesideBubble(e, t);
  }
  static hideRoleElements(e, t, n) {
    t == null || t.tryHide(e), n == null || n.tryHide(e);
  }
  static revealRoleElements(e, t, n) {
    t == null || t.tryReveal(e), n == null || n.tryReveal(e);
  }
  static softRemRoleElements(e, t, n) {
    t == null || t.trySoftRem(e), n == null || n.trySoftRem(e);
  }
  static updateRefArr(e, t, n) {
    n ? e.unshift(t) : e.push(t);
  }
  static buildRoleOuterContainerClass(e) {
    return `${Ns}${e}`;
  }
  static addNewPositionClasses(e, t) {
    e.outerContainer[m].remove(
      Ii,
      Nr,
      Mi
    ), e.outerContainer[m].add(...t);
  }
  static getNumberOfElements(e) {
    let t = 0;
    return e[h] !== void 0 && (t += 1), e[L] !== void 0 && (t += 1), e[b] && (t += e[b].length), t;
  }
  static filterdMessageElements(e, t) {
    return e.filter((n) => n.bubbleElement[m].contains(t));
  }
  static findMessageElements(e, t) {
    return e.find((n) => n.bubbleElement[m].contains(t));
  }
  static generateMessageBodyElements(e, t) {
    const n = {};
    return e[h] && (n[h] = B.findMessageElements(t, nt.TEXT_BUBBLE_CLASS)), e[L] && (n[L] = B.findMessageElements(t, yt.HTML_BUBBLE_CLASS)), e[b] && (n[b] = B.filterdMessageElements(t, Oo)), n;
  }
  static generateMessageBody(e, t, n = !1) {
    const s = B.getNumberOfElements(e), r = n ? t.slice(0, s) : t.slice(t.length - s);
    return B.generateMessageBodyElements(e, r);
  }
  // if role not present - traverse all, if present - traverse last messages
  static classifyRoleMessages(e, t) {
    let n = t ? B.buildRoleOuterContainerClass(t) : void 0;
    for (let s = e.length - 1; s >= 0; s -= 1) {
      if (t || (n = Array.from(e[s].outerContainer[m]).find(
        (p) => p.startsWith(Ns)
      )), !n) continue;
      const r = e[s], o = r.outerContainer[m].contains(n), a = e[s - 1], c = e[s + 1], l = a == null ? void 0 : a.outerContainer[m].contains(n), d = c == null ? void 0 : c.outerContainer[m].contains(n);
      if (o)
        !l && d ? B.addNewPositionClasses(r, [Ii]) : l && d ? B.addNewPositionClasses(r, [Nr]) : l && !d ? B.addNewPositionClasses(r, [Mi]) : !l && !d && B.addNewPositionClasses(r, [Ii, Mi]);
      else if (t)
        break;
    }
  }
  static areOuterContainerClassRolesSame(e, t) {
    return t ? Array.from(t.outerContainer[m]).find(
      (s) => s.startsWith(Ns)
    ) === B.buildRoleOuterContainerClass(e) : !1;
  }
  static resetAllRoleElements(e, t, n) {
    if (!t && !n) return;
    let s = "";
    e.forEach((r, o) => {
      r.bubbleElement[m].contains(Vs) || B.revealRoleElements(r.innerContainer, t, n);
      const a = Array.from(r.outerContainer[m]).find(
        (c) => c.startsWith(Ns)
      );
      s === a && B.hideRoleElements(e[o - 1].innerContainer, t, n), s = a;
    });
  }
  // this is a workaround to prevent JSON.parse(JSON.stringify()) from removing the files' 'ref' property values
  // and 'custom' property value if it is not shallow copyable
  // note - structuredClone can fix this but it doesn't have good legacy compatibility
  static deepCloneMessagesWithReferences(e) {
    return e.map((t) => B.processMessageContent(t));
  }
  static processMessageContent(e) {
    if (e == null || typeof e !== U) return e;
    if (Array.isArray(e))
      return e.map((n) => B.processMessageContent(n));
    const t = {};
    return Object.entries(e).forEach(([n, s]) => {
      n === "ref" && s instanceof File || n === "custom" ? t[n] = s : s !== null && typeof s === U ? t[n] = B.processMessageContent(s) : t[n] = s;
    }), t;
  }
}
const xt = class xt {
  constructor(e, t) {
    this._fileAdded = !1, this._streamType = "", this._hasStreamEnded = !1, this._partialContent = "", this._messages = e, typeof t == "object" && (this._partialRender = t.partialRender);
  }
  upsertStreamedMessage(e) {
    if (this._hasStreamEnded) return;
    if ((e == null ? void 0 : e[h]) === void 0 && (e == null ? void 0 : e[L]) === void 0)
      return console[f](Fo);
    const t = (e == null ? void 0 : e[h]) || (e == null ? void 0 : e[L]) || "", n = z.isScrollbarAtBottomOfElement(this._messages.elementRef), s = (e == null ? void 0 : e[h]) !== void 0 ? h : L;
    if (!this._elements && !this._message)
      this.setInitialState(s, t, e == null ? void 0 : e[x]);
    else {
      if (this._streamType !== s)
        return console[f](Ca);
      e != null && e[x] && (e == null ? void 0 : e[x]) !== this._activeMessageRole ? (this.finaliseStreamedMessage(!1), this.setInitialState(s, t, e == null ? void 0 : e[x])) : this.updateBasedOnType(t, s, e == null ? void 0 : e.overwrite);
    }
    e != null && e._sessionId && (this._sessionId = e == null ? void 0 : e._sessionId), e != null && e.custom && this._message && (this._message.custom = e.custom), n && this._messages.autoScrollAllowed && z.scrollToBottom(this._messages);
  }
  setInitialState(e, t, n) {
    var o, a, c;
    this._streamType = e, this._targetWrapper = void 0, this._fileAdded = !1, this._partialContent = "", this._partialBubble = void 0, n ?? (n = ne);
    const s = ((o = this._messages._customWrappers) == null ? void 0 : o[n]) || ((a = this._messages._customWrappers) == null ? void 0 : a[w]), r = s ? "" : t;
    this._elements = e === h ? this._messages.addNewTextMessage(r, n) : yt.add(this._messages, r, n), this._elements && (this._elements.bubbleElement[m].add(xt.MESSAGE_CLASS), this._activeMessageRole = n, this._message = { [x]: this._activeMessageRole, [e]: r }, this._messages.messageToElements.push([this._message, { [e]: this._elements }]), s && this.setTargetWrapperIfNeeded(this._elements, t, this._streamType, s), (c = this._messages.scrollButton) == null || c.updateHidden());
  }
  // not using existing htmlUtils htmlWrappers logic to be able to stream html
  setTargetWrapperIfNeeded(e, t, n, s) {
    e.bubbleElement.innerHTML = s, this._targetWrapper = oe.getTargetWrapper(e.bubbleElement), this._elements && oe.apply(this._messages, this._elements.bubbleElement), this.updateBasedOnType(t, n);
  }
  updateBasedOnType(e, t, n = !1) {
    var o;
    const s = this._targetWrapper || ((o = this._elements) == null ? void 0 : o.bubbleElement);
    this._partialRender || B.unfillEmptyMessageElement(s, e), (t === h ? this.updateText : this.updateHTML).bind(this)(e, s, n);
  }
  updateText(e, t, n) {
    this._message && (this._message[h] = n ? e : this._message[h] + e, this._partialRender && this.isNewPartialRenderParagraph(t, n) && this.partialRenderNewParagraph(t), this._partialBubble ? this.updatePartialRenderBubble(e) : this._messages.renderText(t, this._message[h]));
  }
  containsPartialRenderMark(e) {
    const t = e.indexOf(xt.PARTIAL_RENDER_MARK);
    return t === -1 ? !1 : !e.substring(t + xt.PARTIAL_RENDER_MARK.length).startsWith("---");
  }
  isNewPartialRenderParagraph(e, t) {
    var s;
    if (t)
      return e.innerHTML = "", !0;
    const n = this._streamType;
    if (!this._partialBubble) {
      const r = (s = this._message) == null ? void 0 : s[n];
      return !!r && this.containsPartialRenderMark(r);
    }
    return !!this._partialContent && this.containsPartialRenderMark(this._partialContent);
  }
  partialRenderNewParagraph(e) {
    this._partialContent = "", this._partialBubble = A(), this._partialBubble[m].add("partial-render-message"), e.appendChild(this._partialBubble);
  }
  updatePartialRenderBubble(e) {
    this._partialContent += e, this._streamType === h ? this._messages.renderText(this._partialBubble, this._partialContent) : this._partialBubble.innerHTML = this._partialContent;
  }
  updateHTML(e, t, n) {
    if (this._message)
      if (this._message[L] = n ? e : (this._message[L] || "") + e, this._partialRender && this.isNewPartialRenderParagraph(t, n) && this.partialRenderNewParagraph(t), this._partialBubble)
        this.updatePartialRenderBubble(e);
      else if (n)
        t.innerHTML = e;
      else {
        const s = A("span");
        s.innerHTML = e, t.appendChild(s);
      }
  }
  finaliseStreamedMessage(e = !0) {
    var t, n;
    if (!this._endStreamAfterOperation && !(this._fileAdded && !this._elements)) {
      if (!this._elements) throw Error(Ta);
      this._message && (t = this._elements.bubbleElement) != null && t[m].contains(xt.MESSAGE_CLASS) && (this._streamType === h ? this._messages.textToSpeech && Rn.speak(this._message[h] || "", this._messages.textToSpeech) : this._streamType === L && this._elements && oe.apply(this._messages, this._elements.outerContainer), this._elements.bubbleElement[m].remove(xt.MESSAGE_CLASS), this._message && (this._sessionId && (this._message._sessionId = this._sessionId), this._messages.sendClientUpdate(nt.createMessageContent(this._message), !1), (n = this._messages.browserStorage) == null || n.addMessages(this._messages.messageToElements.map(([s]) => s))), this._hasStreamEnded = e);
    }
  }
  markFileAdded() {
    this._fileAdded = !0;
  }
  // prettier-ignore
  async endStreamAfterFileDownloaded(e, t) {
    this._endStreamAfterOperation = !0;
    const { text: n, files: s } = await t();
    n && this.updateBasedOnType(n, h, !0), this._endStreamAfterOperation = !1, this.finaliseStreamedMessage(), s && e.addNewMessage({ [b]: s });
  }
};
xt.MESSAGE_CLASS = "streamed-message", xt.PARTIAL_RENDER_MARK = `

`;
let ht = xt;
class D {
  // need to pass stringifyBody boolean separately as binding is throwing an error for some reason
  // prettier-ignore
  static async tempRemoveContentHeader(e, t, n) {
    if (!(e != null && e.headers)) throw new Error(He);
    const s = e.headers[q];
    delete e.headers[q];
    let r;
    try {
      r = await t(n);
    } catch (o) {
      throw e.headers[q] = s, o;
    }
    return e.headers[q] = s, r;
  }
  static displayError(e, t, n = "Service error, please try again.") {
    if (console[f](t), typeof t === U)
      return t instanceof Error ? e.addNewErrorMessage(ae, t.message) : Array.isArray(t) || typeof t[f] === Ee ? e.addNewErrorMessage(ae, t) : Object.keys(t).length === 0 ? e.addNewErrorMessage(ae, n) : e.addNewErrorMessage(ae, ce(t));
    e.addNewErrorMessage(ae, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fetch(e, t, n, s) {
    var o, a;
    const r = { method: ((o = e.connectSettings) == null ? void 0 : o.method) || ye, headers: t };
    return r.method !== ue && (r.body = n ? ce(s) : s), e.connectSettings.credentials && (r.credentials = e.connectSettings.credentials), fetch(((a = e.connectSettings) == null ? void 0 : a.url) || e.url || "", r);
  }
  static processResponseByType(e) {
    const t = e.headers.get("content-type");
    return t != null && t.includes(te) ? e.json() : t != null && t.includes("text/plain") || !t ? e : e.blob();
  }
  static async processRequestInterceptor(e, t) {
    var o;
    const n = await ((o = e.requestInterceptor) == null ? void 0 : o.call(e, t)) || t, s = n, r = n;
    return { body: s.body, headers: s.headers, error: r[f] };
  }
  static validateResponseFormat(e, t) {
    if (!e) return !1;
    const n = Array.isArray(e) ? e : [e];
    return t && n.length > 1 ? (console[f](Do), !1) : !n.find(
      (r) => typeof r != "object" || !(typeof r[f] === Ee || typeof r[h] === Ee || typeof r[L] === Ee || Array.isArray(r[b]))
    );
  }
  static onInterceptorError(e, t, n) {
    e.addNewErrorMessage(ae, t), n == null || n();
  }
  // prettier-ignore
  static async basicResponseProcessing(e, t, n = {}) {
    const { io: s, displayError: r = !0, useRI: o = !0 } = n;
    if (!(s != null && s.extractResultData)) return t;
    const a = o ? s.deepChat.responseInterceptor : void 0, c = await (a == null ? void 0 : a(t)) || t, l = await s.extractResultData(c);
    if (!l || typeof l != "object" && !Array.isArray(l)) {
      if (r) {
        const d = Tn(t, "response", !!a, c);
        D.displayError(e, d);
      }
      return;
    }
    return l;
  }
}
async function _l(i, e) {
  const t = i.getReader();
  let n;
  for (; !(n = await t.read()).done; )
    e(n.value);
}
function El(i) {
  let e, t, n, s = !1;
  return function(o) {
    e === void 0 ? (e = o, t = 0, n = -1) : e = Sl(e, o);
    const a = e.length;
    let c = 0;
    for (; t < a; ) {
      s && (e[t] === 10 && (c = ++t), s = !1);
      let l = -1;
      for (; t < a && l === -1; ++t)
        switch (e[t]) {
          case 58:
            n === -1 && (n = t - c);
            break;
          case 13:
            s = !0;
          case 10:
            l = t;
            break;
        }
      if (l === -1)
        break;
      i(e.subarray(c, l), n), c = t, n = -1;
    }
    c === a ? e = void 0 : c !== 0 && (e = e.subarray(c), t -= c);
  };
}
function vl(i, e, t) {
  let n = Qr();
  const s = new TextDecoder();
  return function(o, a) {
    if (o.length === 0)
      t == null || t(n), n = Qr();
    else if (a > 0) {
      const c = s.decode(o.subarray(0, a)), l = a + (o[a + 1] === 32 ? 2 : 1), d = s.decode(o.subarray(l));
      switch (c) {
        case "data":
          n.data = n.data ? n.data + `
` + d : d;
          break;
        case "event":
          n.event = d;
          break;
        case "id":
          i(n.id = d);
          break;
        case "retry":
          const p = parseInt(d, 10);
          isNaN(p) || e(n.retry = p);
          break;
      }
    }
  };
}
function Sl(i, e) {
  const t = new Uint8Array(i.length + e.length);
  return t.set(i), t.set(e, i.length), t;
}
function Qr() {
  return {
    data: "",
    event: "",
    id: "",
    retry: void 0
  };
}
var xl = function(i, e) {
  var t = {};
  for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(i); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[s]) && (t[n[s]] = i[n[s]]);
  return t;
};
const $i = "text/event-stream", Al = 1e3, eo = "last-event-id";
function wl(i, e) {
  var { signal: t, headers: n, onopen: s, onmessage: r, onclose: o, onerror: a, openWhenHidden: c, fetch: l } = e, d = xl(e, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
  return new Promise((p, u) => {
    const g = Object.assign({}, n);
    g.accept || (g.accept = $i);
    let y;
    function _() {
      y.abort(), document.hidden || Re();
    }
    c || document.addEventListener("visibilitychange", _);
    let S = Al, M = 0;
    function K() {
      document.removeEventListener("visibilitychange", _), window.clearTimeout(M), y.abort();
    }
    t == null || t.addEventListener("abort", () => {
      K(), p();
    });
    const ie = l ?? window.fetch, re = s ?? Cl;
    async function Re() {
      var Lt;
      y = new AbortController();
      try {
        const Ot = await ie(i, Object.assign(Object.assign({}, d), { headers: g, signal: y.signal }));
        await re(Ot), await _l(Ot.body, El(vl((ze) => {
          ze ? g[eo] = ze : delete g[eo];
        }, (ze) => {
          S = ze;
        }, r))), o == null || o(), K(), p();
      } catch (Ot) {
        if (!y.signal.aborted)
          try {
            const ze = (Lt = a == null ? void 0 : a(Ot)) !== null && Lt !== void 0 ? Lt : S;
            window.clearTimeout(M), M = window.setTimeout(Re, ze);
          } catch (ze) {
            K(), u(ze);
          }
      }
    }
    Re();
  });
}
function Cl(i) {
  const e = i.headers.get("content-type");
  if (!(e != null && e.startsWith($i)))
    throw new Error(`Expected content-type to be ${$i}, Actual: ${e}`);
}
class V {
  // prettier-ignore
  static async request(e, t, n, s = !0, r = !1) {
    var u, g, y, _, S;
    const o = { body: t, headers: (u = e.connectSettings) == null ? void 0 : u.headers }, { body: a, headers: c, error: l } = await D.processRequestInterceptor(e.deepChat, o);
    if (l) return D.onInterceptorError(n, l, e.streamHandlers.onClose);
    if ((g = e.connectSettings) != null && g.handler) return dt.stream(e, a, n);
    if (((y = e.connectSettings) == null ? void 0 : y.url) === pt.URL) return pt.requestStream(n, e);
    const d = new ht(n, e.stream), p = {
      method: ((_ = e.connectSettings) == null ? void 0 : _.method) || ye,
      headers: c,
      credentials: (S = e.connectSettings) == null ? void 0 : S.credentials,
      body: s ? ce(a) : a
    };
    return typeof e.stream == "object" && e.stream.readable ? V.handleReadableStream(e, n, d, p, r, a) : V.handleEventStream(e, n, d, p, r, a), d;
  }
  // prettier-ignore
  static handleReadableStream(e, t, n, s, r, o) {
    var d;
    const { onOpen: a, onClose: c } = e.streamHandlers;
    let l = !1;
    fetch(((d = e.connectSettings) == null ? void 0 : d.url) || e.url || "", s).then(async (p) => {
      var _, S;
      if (!p.body) throw new Error(Ra);
      const u = p.body.getReader(), g = new TextDecoder();
      a();
      let y = !1;
      for (; !y && !l; ) {
        const { value: M, done: K } = await u.read();
        if (y = K, y)
          V.handleClose(e, n, c, r);
        else {
          const ie = g.decode(M, { stream: !0 }), re = await ((S = (_ = e.deepChat).responseInterceptor) == null ? void 0 : S.call(_, ie)) || ie, Re = typeof re == "object" ? re : { [h]: ie };
          V.handleMessage(e, t, n, Re, o);
        }
      }
    }).catch((p) => {
      V.handleError(e, t, p);
    }), e.streamHandlers.onAbort = () => {
      n.finaliseStreamedMessage(), e.streamHandlers.onClose(), l = !0;
    };
  }
  // prettier-ignore
  static handleEventStream(e, t, n, s, r, o) {
    var d;
    const { onOpen: a, onClose: c } = e.streamHandlers, l = new AbortController();
    e.streamHandlers.onAbort = () => {
      n.finaliseStreamedMessage(), e.streamHandlers.onClose(), l.abort();
    }, wl(((d = e.connectSettings) == null ? void 0 : d.url) || e.url || "", {
      ...s,
      openWhenHidden: !0,
      // keep stream open when browser tab not open
      async onopen(p) {
        if (p.ok)
          return a();
        throw await D.processResponseByType(p);
      },
      async onmessage(p) {
        var u, g;
        if (ce(p.data) !== ce("[DONE]")) {
          let y;
          try {
            y = JSON.parse(p.data);
          } catch {
            y = {};
          }
          const _ = await ((g = (u = e.deepChat).responseInterceptor) == null ? void 0 : g.call(u, y)) || y;
          V.handleMessage(e, t, n, _, o);
        }
      },
      onerror(p) {
        throw c(), p;
      },
      onclose() {
        V.handleClose(e, n, c, r);
      },
      signal: l.signal
    }).catch((p) => {
      V.handleError(e, t, p);
    });
  }
  //prettier-ignore
  static handleMessage(e, t, n, s, r) {
    var o;
    (o = e.extractResultData) == null || o.call(e, s, r).then((a) => {
      V.upsertContent(t, n.upsertStreamedMessage.bind(n), n, a), t.removeError();
    }).catch(
      (a) => {
        t.isLastMessageError() || D.displayError(t, a);
      }
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static handleError(e, t, n) {
    var s;
    t.isLastMessageError() || (s = e.extractResultData) == null || s.call(e, n).then(() => {
      D.displayError(t, n);
    }).catch((r) => {
      D.displayError(t, r);
    });
  }
  static handleClose(e, t, n, s) {
    if (e.asyncCallInProgress) {
      t.finaliseStreamedMessage(!1), e.asyncCallInProgress = !1;
      return;
    }
    try {
      t.finaliseStreamedMessage(), n();
    } catch (r) {
      if (!s) throw r;
    }
  }
  // io is only passed for demo to simulate a real stream
  static async simulate(e, t, n, s) {
    if (!await D.basicResponseProcessing(e, n, { io: s, useRI: !1 })) return t.onClose();
    if (Array.isArray(n) && (n = n[0]), n[L]) {
      t.onOpen();
      let r = oe.splitHTML(n[L]);
      r.length === 0 && (r = n[L].split(""));
      const o = new ht(e, s == null ? void 0 : s.stream);
      V.populateMessages(e, r, o, t, L, 0, s);
    }
    if (n[b]) {
      const r = await D.basicResponseProcessing(e, { [b]: n[b] }, { io: s });
      e.addNewMessage({ sendUpdate: !1, ...r }), !n[L] && !n[h] && (new ht(e, s == null ? void 0 : s.stream).finaliseStreamedMessage(), t.onClose());
    }
    if (n[h]) {
      t.onOpen();
      const r = n[h].split(""), o = new ht(e, s == null ? void 0 : s.stream);
      V.populateMessages(e, r, o, t, h, 0, s);
    }
    n[f] && (D.displayError(e, n[f]), t.onClose()), t.onAbort = () => {
      t.onClose();
    };
  }
  // prettier-ignore
  // io is only passed for demo to simulate a real stream
  static async populateMessages(e, t, n, s, r, o, a) {
    const c = t[o];
    if (c) {
      try {
        const d = await D.basicResponseProcessing(e, { [r]: c }, { io: a });
        V.upsertContent(e, n.upsertStreamedMessage.bind(n), n, d), e.removeError();
      } catch (d) {
        e.isLastMessageError() || D.displayError(e, d);
      }
      const l = setTimeout(() => {
        V.populateMessages(e, t, n, s, r, o + 1, a);
      }, s.simulationInterim || 6);
      s.onAbort = () => {
        V.abort(l, n, s.onClose);
      };
    } else
      n.finaliseStreamedMessage(), s.onClose();
  }
  static isSimulation(e) {
    return typeof e == "object" && !!e.simulation;
  }
  static isSimulatable(e, t) {
    return V.isSimulation(e) && t && (t[h] || t[L]);
  }
  static abort(e, t, n) {
    clearTimeout(e), t.finaliseStreamedMessage(), n();
  }
  static upsertContent(e, t, n, s) {
    if (s && Array.isArray(s) && (s = s[0]), s != null && s[h] || s != null && s[L]) {
      const r = t(s);
      n ?? (n = r || void 0);
    }
    if (s != null && s[b] && (e.addNewMessage({ [b]: s[b] }), n == null || n.markFileAdded()), s != null && s[f])
      throw s[f];
  }
}
const Jt = class Jt {
  static generateResponse(e) {
    const t = e[e.length - 1][0];
    if (t[b] && t[b].length > 0) {
      if (t[b].length > 1)
        return "These are interesting files!";
      const n = t[b][0];
      return n[T] && n[T].startsWith("data:image/gif") ? "That is a nice gif!" : n[E] === W ? "That is a nice image!" : n[E] === $ ? "I like the sound of that!" : "That is an interesting file!";
    }
    if (t[h]) {
      if (t[h].charAt(t[h].length - 1) === "?")
        return "I'm sorry but I can't answer that question...";
      if (t[h].includes("updog"))
        return "What's updog?";
    }
    return "Hi there! This is a demo response!";
  }
  static getCustomResponse(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  static getResponse({ customDemoResponse: e, messageToElements: t }) {
    return e ? Jt.getCustomResponse(e, t[t.length - 1][0]) : { [h]: Jt.generateResponse(t) };
  }
  // timeout is used to simulate a timeout for a response to come back
  static request(e, t) {
    const n = Jt.getResponse(t);
    setTimeout(async () => {
      const s = await D.basicResponseProcessing(t, n, { io: e });
      if (!s) return e.completionsHandlers.onFinish();
      const r = Array.isArray(s) ? s : [s], o = r.find((a) => typeof a[f] === Ee);
      o ? (t.addNewErrorMessage(ae, o[f]), e.completionsHandlers.onFinish()) : V.isSimulatable(e.stream, s) ? V.simulate(t, e.streamHandlers, s) : (r.forEach((a) => t.addNewMessage(a)), e.completionsHandlers.onFinish());
    }, 400);
  }
  // timeout is used to simulate a timeout for a response to come back
  static requestStream(e, t) {
    setTimeout(() => {
      const n = Jt.getResponse(e);
      V.simulate(e, t.streamHandlers, n, t);
    }, 400);
  }
};
Jt.URL = "deep-chat-demo";
let pt = Jt;
class ke {
  static setup(e) {
    e.permittedErrorPrefixes = ["Connection error", "Error in server message"], e.websocket = "pending";
  }
  static isElementPresentInDOM(e) {
    return e.getRootNode({ composed: !0 }) instanceof Document;
  }
  static createConnection(e, t) {
    if (!ke.isElementPresentInDOM(e.deepChat)) return;
    const n = e.connectSettings.websocket;
    if (n) {
      if (e.connectSettings.handler) return dt.websocket(e, t);
      try {
        const s = typeof n != "boolean" ? n : void 0, r = new WebSocket(e.connectSettings.url || "", s);
        e.websocket = r, e.websocket.onopen = () => {
          var o, a;
          t.removeError(), e.websocket && typeof e.websocket === U && ke.assignListeners(e, r, t), (a = (o = e.deepChat)._validationHandler) == null || a.call(o);
        }, e.websocket.onerror = (o) => {
          console[f](o), ke.retryConnection(e, t);
        };
      } catch (s) {
        console[f](s), ke.retryConnection(e, t);
      }
    }
  }
  static retryConnection(e, t) {
    var n, s;
    (s = (n = e.deepChat)._validationHandler) == null || s.call(n), ke.isElementPresentInDOM(e.deepChat) && (e.websocket = "pending", t.isLastMessageError() || t.addNewErrorMessage(ae, "Connection error"), setTimeout(() => {
      ke.createConnection(e, t);
    }, 5e3));
  }
  static assignListeners(e, t, n) {
    const s = {};
    t.onmessage = async (r) => {
      if (e.extractResultData)
        try {
          const o = JSON.parse(r.data), a = await D.basicResponseProcessing(n, o, { io: e, displayError: !1 });
          if (!a)
            throw Error(Tn(o, "server", !!e.deepChat.responseInterceptor, a));
          if (V.isSimulation(e.stream)) {
            const c = ke.stream.bind(this, e, n, s), l = s[o[x] || ne];
            V.upsertContent(n, c, l, a);
          } else {
            const c = Array.isArray(a) ? a : [a], l = c.find((d) => typeof d[f] === Ee);
            if (l) throw l[f];
            c.forEach((d) => n.addNewMessage(d));
          }
        } catch (o) {
          D.displayError(n, o, "Error in server message");
        }
    }, t.onclose = () => {
      var r, o;
      console[f]("Connection closed"), n.isLastMessageError() || n.addNewErrorMessage(ae, "Connection error"), e.stream && ((o = (r = e.streamHandlers).onAbort) == null || o.call(r)), ke.createConnection(e, n);
    };
  }
  static async sendWebsocket(e, t, n, s = !0) {
    var d, p;
    if (((d = e.connectSettings) == null ? void 0 : d.url) === pt.URL) return pt.request(e, n);
    const r = e.websocket;
    if (!r || r === "pending") return;
    const o = { body: t, headers: (p = e.connectSettings) == null ? void 0 : p.headers }, { body: a, error: c } = await D.processRequestInterceptor(e.deepChat, o);
    if (c) return n.addNewErrorMessage(ae, c);
    if (!ke.isWebSocket(r)) return r.newUserMessage.listener(a);
    const l = s ? ce(a) : a;
    r.readyState === void 0 || r.readyState !== r.OPEN ? (console[f]("Connection is not open"), n.isLastMessageError() || n.addNewErrorMessage(ae, "Connection error")) : (r.send(ce(l)), e.completionsHandlers.onFinish());
  }
  static canSendMessage(e) {
    return e ? e === "pending" ? !1 : ke.isWebSocket(e) ? e.readyState !== void 0 && e.readyState === e.OPEN : e.isOpen : !0;
  }
  // if false then it is the internal websocket handler
  static isWebSocket(e) {
    return e.send !== void 0;
  }
  static stream(e, t, n, s) {
    if (!s) return;
    const r = e.stream.simulation;
    if (typeof r === Ee) {
      const o = s[x] || ne, a = n[o];
      s[h] === r || s[L] === r ? (a == null || a.finaliseStreamedMessage(), delete n[o]) : (n[o] ?? (n[o] = new ht(t, e.stream)), n[o].upsertStreamedMessage(s));
    } else
      V.simulate(t, e.streamHandlers, s);
  }
}
class dt {
  static async request(e, t, n) {
    var a, c;
    let s = !0;
    const r = async (l) => {
      if (!s) return;
      s = !1;
      const d = await D.basicResponseProcessing(n, l, { io: e, displayError: !1 });
      if (!d)
        console[f](Tn(l, "server", !!e.deepChat.responseInterceptor, d)), n.addNewErrorMessage(ae, "Error in server message"), e.completionsHandlers.onFinish();
      else {
        const p = Array.isArray(d) ? d : [d], u = p.find((g) => typeof g[f] === Ee);
        u ? (console[f](u[f]), n.addNewErrorMessage(ae, u[f]), e.completionsHandlers.onFinish()) : V.isSimulatable(e.stream, d) ? V.simulate(n, e.streamHandlers, d) : (p.forEach((g) => n.addNewMessage(g)), e.completionsHandlers.onFinish());
      }
    }, o = dt.generateOptionalSignals();
    (c = (a = e.connectSettings).handler) == null || c.call(a, t, { ...o, onResponse: r });
  }
  static attemptToFinaliseStream(e, t) {
    try {
      const n = t.messageElementRefs[t.messageElementRefs.length - 1];
      nt.isLoadingMessage(n) ? t.removeLastMessage() : e.finaliseStreamedMessage();
    } catch (n) {
      console[f](n), t.addNewErrorMessage(ae, n);
    }
  }
  // prettier-ignore
  static stream(e, t, n) {
    var p, u;
    let s = !0, r = !1;
    const o = new ht(n, e.stream), a = () => {
      r || !s || (e.streamHandlers.onOpen(), r = !0);
    }, c = () => {
      s && (dt.attemptToFinaliseStream(o, n), e.streamHandlers.onClose(), s = !1);
    }, l = async (g) => {
      if (!s) return;
      const y = await D.basicResponseProcessing(n, g, { io: e, displayError: !1 });
      if (y)
        y[f] ? (dt.streamError(y[f], o, e, n), s = !1) : V.upsertContent(n, o.upsertStreamedMessage.bind(o), o, y);
      else {
        const _ = Tn(g, "server", !!e.deepChat.responseInterceptor, y);
        dt.streamError(_, o, e, n), s = !1;
      }
    };
    e.streamHandlers.onAbort = () => {
      dt.attemptToFinaliseStream(o, n), e.streamHandlers.onClose(), s = !1;
    };
    const d = dt.generateOptionalSignals();
    (u = (p = e.connectSettings).handler) == null || u.call(
      p,
      t,
      { ...d, onOpen: a, onResponse: l, onClose: c, stopClicked: e.streamHandlers.stopClicked }
    );
  }
  static streamError(e, t, n, s) {
    console[f](e), t.finaliseStreamedMessage(), s.addNewErrorMessage(ae, e), n.streamHandlers.onClose();
  }
  // prettier-ignore
  static websocket(e, t) {
    var c, l;
    const n = { isOpen: !1, newUserMessage: { listener: () => {
    } }, roleToStream: {} };
    e.websocket = n;
    const s = () => {
      t.removeError(), n.isOpen = !0;
    }, r = () => {
      n.isOpen = !1;
    }, o = async (d) => {
      const p = await D.basicResponseProcessing(t, d, { io: e, displayError: !1 });
      if (!p)
        console[f](Tn(d, "server", !!e.deepChat.responseInterceptor, p)), t.addNewErrorMessage(ae, "Error in server message");
      else {
        const u = Array.isArray(p) ? p : [p], g = u.find((y) => typeof y[f] === Ee);
        if (g)
          console[f](g[f]), t.isLastMessageError() || t.addNewErrorMessage(ae, g[f]);
        else if (V.isSimulation(e.stream)) {
          const y = p, _ = ke.stream.bind(this, e, t, n.roleToStream), S = n.roleToStream[y[x] || ne];
          V.upsertContent(t, _, S, y);
        } else
          u.forEach((y) => t.addNewMessage(y));
      }
    }, a = dt.generateOptionalSignals();
    (l = (c = e.connectSettings).handler) == null || l.call(
      c,
      void 0,
      { ...a, onOpen: s, onResponse: o, onClose: r, newUserMessage: n.newUserMessage }
    );
  }
  static generateOptionalSignals() {
    return { onClose: () => {
    }, onOpen: () => {
    }, stopClicked: { listener: () => {
    } }, newUserMessage: { listener: () => {
    } } };
  }
}
class ge {
  // prettier-ignore
  static async request(e, t, n, s = !0) {
    var p, u, g;
    const r = { body: t, headers: (p = e.connectSettings) == null ? void 0 : p.headers }, { body: o, headers: a, error: c } = await D.processRequestInterceptor(e.deepChat, r), { onFinish: l } = e.completionsHandlers;
    if (c) return D.onInterceptorError(n, c, l);
    if ((u = e.connectSettings) != null && u.handler) return dt.request(e, o, n);
    if (((g = e.connectSettings) == null ? void 0 : g.url) === pt.URL) return pt.request(e, n);
    let d = !0;
    D.fetch(e, a, s, o).then((y) => (d = !!y.ok, y)).then((y) => D.processResponseByType(y)).then(async (y) => {
      var M, K;
      if (!e.extractResultData) return;
      const _ = await ((K = (M = e.deepChat).responseInterceptor) == null ? void 0 : K.call(M, y)) || y, S = await e.extractResultData(_, o);
      if (!d) throw y;
      if (!S || typeof S !== U && !Array.isArray(S))
        throw Error(Tn(y, "response", !!e.deepChat.responseInterceptor, _));
      if (S[f]) throw S[f];
      if (e.asyncCallInProgress) {
        e.asyncCallInProgress = !1;
        return;
      }
      V.isSimulatable(e.stream, S) ? V.simulate(n, e.streamHandlers, S) : ((Array.isArray(S) ? S : [S]).forEach((re) => n.addNewMessage(re)), l());
    }).catch((y) => {
      D.displayError(n, y), l();
    });
  }
  static executePollRequest(e, t, n, s) {
    const { onFinish: r } = e.completionsHandlers;
    fetch(t, n).then((o) => o.json()).then(async (o) => {
      var c, l;
      if (!e.extractPollResultData) return;
      const a = await e.extractPollResultData(await ((l = (c = e.deepChat).responseInterceptor) == null ? void 0 : l.call(c, o)) || o);
      a.timeoutMS ? setTimeout(() => {
        ge.executePollRequest(e, t, n, s);
      }, a.timeoutMS) : V.isSimulatable(e.stream, a) ? V.simulate(s, e.streamHandlers, a) : (s.addNewMessage(a), r());
    }).catch((o) => {
      D.displayError(s, o), r();
    });
  }
  // prettier-ignore
  static async poll(e, t, n, s = !0) {
    var g, y, _;
    const r = { body: t, headers: (g = e.connectSettings) == null ? void 0 : g.headers }, { body: o, headers: a, error: c } = await D.processRequestInterceptor(e.deepChat, r);
    if (c) return D.onInterceptorError(n, c);
    const l = ((y = e.connectSettings) == null ? void 0 : y.url) || e.url || "", d = ((_ = e.connectSettings) == null ? void 0 : _.method) || ye, p = s ? ce(o) : o, u = { method: d, body: p, headers: a };
    e.connectSettings.credentials && (u.credentials = e.connectSettings.credentials), ge.executePollRequest(e, l, u, n);
  }
  // prettier-ignore
  static verifyKey(e, t, n, s, r, o, a, c, l) {
    if (e === "") return o(pe);
    a(), fetch(t, { method: s, headers: n, body: l || null }).then((d) => D.processResponseByType(d)).then((d) => {
      c(d, e, r, o);
    }).catch((d) => {
      o(Ue), console[f](d);
    });
  }
}
class kn {
  static getCharacterLimitMessages(e, t) {
    var r;
    if (t === -1) return e;
    let n = 0, s = e[X] - 1;
    for (s; s >= 0; s -= 1) {
      const o = (r = e[s]) == null ? void 0 : r[h];
      if (o !== void 0 && (n += o[X], n > t)) {
        e[s][h] = o.substring(0, o[X] - (n - t));
        break;
      }
    }
    return e.slice(Math.max(s, 0));
  }
  static getMaxMessages(e, t) {
    return e.slice(Math.max(e[X] - t, 0));
  }
  // if maxMessages is not defined we send all messages
  // if maxMessages above 0 we send that number
  // if maxMessages 0 or below we send only what is in the request
  static processMessages(e, t, n) {
    return t !== void 0 ? t > 0 && (e = kn.getMaxMessages(e, t)) : e = [e[e[X] - 1]], e = C(e), n === void 0 ? e : kn.getCharacterLimitMessages(e, n);
  }
}
const Ft = class Ft {
  constructor(e, t, n) {
    this._isLoading = !1, this._isPaginationComplete = !1, this._index = 0, this._messages = t, n.fetchHistory && this.fetchHistory(n.fetchHistory), this.setupInitialHistory(e);
  }
  async fetchHistory(e) {
    const t = Mt.addMessage(this._messages), n = await e();
    this._messages.removeMessage(t), Ft.displayIntroMessages(this._messages.messageElementRefs), n.forEach((s) => this._messages.addAnyMessage(s, !0)), setTimeout(() => z.scrollToBottom(this._messages), 0);
  }
  scrollToPreloadFirstEl(e, t) {
    this._messages.elementRef.scrollTop = t + e.offsetTop - 40;
  }
  processLoadedHistory(e) {
    var a;
    const { messageElementRefs: t, messageToElements: n, elementRef: s } = this._messages, r = (a = t.find(
      (c) => !c.outerContainer[m].contains(nt.INTRO_CLASS)
    )) == null ? void 0 : a.outerContainer, o = s.scrollTop;
    e == null || e.reverse().map((c) => {
      const l = this._messages.addAnyMessage({ ...c, sendUpdate: !0 }, !0, !0);
      if (l) {
        const d = B.generateMessageBody(l, t, !0);
        n.unshift([l, d]);
      }
      return l;
    }).filter((c) => !!c).reverse().forEach((c) => this._messages.sendClientUpdate(c, !0)), r && (this._messages.messageElementRefs.length >= this._messages.maxVisibleMessages ? setTimeout(() => this.scrollToPreloadFirstEl(r, o)) : this.scrollToPreloadFirstEl(r, o));
  }
  populateMessages(e, t) {
    this._messages.removeMessage(e), this._isPaginationComplete = t.findIndex((a) => !a) < 0;
    const n = t.filter((a) => !!a);
    this.processLoadedHistory(n);
    const { messageElementRefs: s, avatar: r, name: o } = this._messages;
    B.resetAllRoleElements(s, r, o);
  }
  async loadHistoryOnScroll(e) {
    if (this._isLoading || this._isPaginationComplete || this._messages.elementRef.scrollTop !== 0) return;
    this._isLoading = !0;
    const t = Mt.addMessage(this._messages, !1);
    try {
      const n = await e(this._index++);
      this.populateMessages(t, n), this._isLoading = !1;
    } catch (n) {
      this._messages.removeMessage(t), this._isPaginationComplete = !0, this._messages.addNewErrorMessage(ae, Ft.FAILED_ERROR_MESSAGE, !0), console[f](n);
    }
  }
  populateInitialHistory(e) {
    e.forEach((t) => {
      le.processHistoryFile(t), this._messages.addAnyMessage(t, !0);
    });
  }
  async loadInitialHistory(e) {
    this._isLoading = !0;
    const t = Mt.addMessage(this._messages);
    try {
      const n = await e(this._index++), s = this._messages.elementRef.scrollTop;
      this.populateMessages(t, n), this.restoreScrollOrScrollToBottom(s === 0);
    } catch (n) {
      this._messages.removeMessage(t), this._isPaginationComplete = !0, this._messages.addNewErrorMessage(ae, Ft.FAILED_ERROR_MESSAGE, !0), console[f](n);
    }
    Ft.displayIntroMessages(this._messages.messageElementRefs), this._isLoading = !1;
  }
  async setupInitialHistory(e) {
    var s;
    e.loadHistory && this.loadInitialHistory(e.loadHistory);
    const t = (s = this._messages.browserStorage) == null ? void 0 : s.get(), n = e.history || le.processHistory(e) || (t == null ? void 0 : t.messages);
    n && (this.populateInitialHistory(n), this.restoreScrollOrScrollToBottom(!0), this._index += 1);
  }
  restoreScrollOrScrollToBottom(e) {
    var n, s, r;
    const t = (s = (n = this._messages.browserStorage) == null ? void 0 : n.get()) == null ? void 0 : s.scrollHeight;
    t !== void 0 && ((r = this._messages.browserStorage) != null && r.trackScrollHeight) ? setTimeout(() => {
      this._messages.elementRef.scrollTop = t;
    }, 0) : e && setTimeout(() => z.scrollToBottom(this._messages), 0);
  }
  static addErrorPrefix(e) {
    e.permittedErrorPrefixes ?? (e.permittedErrorPrefixes = []), e.permittedErrorPrefixes.push(Ft.FAILED_ERROR_MESSAGE);
  }
  static displayIntroMessages(e) {
    for (let t = 0; t < e.length; t += 1) {
      const n = e[0];
      if (n.outerContainer[m].contains(nt.INTRO_CLASS))
        n.outerContainer[v].display = "";
      else
        break;
    }
  }
};
Ft.FAILED_ERROR_MESSAGE = "Failed to load history";
let Cs = Ft;
class Ae {
  static parseConfig(e, t, n) {
    var r;
    const s = { files: e };
    if (typeof n == "object") {
      le.processFileConfigConnect(n);
      const { files: o, connect: a, button: c } = n;
      o && (o.infoModal && (s[b].infoModal = o.infoModal, (r = o.infoModal) != null && r.textMarkDown && (s.infoModalTextMarkUp = t.render(o.infoModal.textMarkDown))), o.acceptedFormats && (s[b].acceptedFormats = o.acceptedFormats), o.maxNumberOfFiles && (s[b].maxNumberOfFiles = o.maxNumberOfFiles)), s.button = c, a && Object.keys(a).length > 0 && (s.connect = a);
    }
    return s;
  }
  static processMixedFiles(e, t, n) {
    if (n) {
      const s = { acceptedFormats: "" };
      e.fileTypes.mixedFiles = Ae.parseConfig(s, t, n);
    }
  }
  // needs to be set after audio to overwrite maxNumberOfFiles
  // prettier-ignore
  static processMicrophone(e, t, n, s) {
    var a, c, l, d, p, u;
    const o = { acceptedFormats: "audio/*", ...((a = e.fileTypes[$]) == null ? void 0 : a[b]) || {} };
    n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e.recordAudio = Ae.parseConfig(o, t, n), typeof n == "object" && n[b] && ((c = e.recordAudio)[b] ?? (c[b] = {}), e.recordAudio[b].format = (l = n[b]) == null ? void 0 : l.format, e.recordAudio[b].maxDurationSeconds = (d = n[b]) == null ? void 0 : d.maxDurationSeconds, (p = e.fileTypes[$]) != null && p[b] && ((u = e.fileTypes[$][b]).maxNumberOfFiles ?? (u.maxNumberOfFiles = n[b].maxNumberOfFiles)))) : s || (e.fileTypes[$] = Ae.parseConfig(o, t, n)));
  }
  // prettier-ignore
  static processAudioConfig(e, t, n, s) {
    if (!n && !s) return;
    const o = { acceptedFormats: "audio/*", ...(s == null ? void 0 : s[b]) || {} };
    e.fileTypes[$] = Ae.parseConfig(o, t, n);
  }
  // prettier-ignore
  static processGifConfig(e, t, n, s) {
    if (!n && !s) return;
    const o = { acceptedFormats: "image/gif", ...(s == null ? void 0 : s[b]) || {} };
    e.fileTypes[Cn] = Ae.parseConfig(o, t, n);
  }
  // needs to be set after images to overwrite maxNumberOfFiles
  // prettier-ignore
  static processCamera(e, t, n, s) {
    var a, c, l, d;
    const o = { acceptedFormats: "image/*", ...((a = e.fileTypes[ee]) == null ? void 0 : a[b]) || {} };
    n && (navigator.mediaDevices.getUserMedia !== void 0 ? (e[Fe] = Ae.parseConfig(o, t, n), typeof n == "object" && (e[Fe].modalContainerStyle = n.modalContainerStyle, n[b] && ((c = e[Fe])[b] ?? (c[b] = {}), e[Fe][b].format = (l = n[b]) == null ? void 0 : l.format, e[Fe][b].dimensions = (d = n[b]) == null ? void 0 : d.dimensions))) : s || (e.fileTypes[ee] = Ae.parseConfig(o, t, n)));
  }
  // prettier-ignore
  static processImagesConfig(e, t, n, s) {
    if (!n && !s) return;
    const o = { acceptedFormats: "image/*", ...(s == null ? void 0 : s[b]) || {} };
    e.fileTypes[ee] = Ae.parseConfig(o, t, n);
  }
  // default for direct service
  static populateDefaultFileIO(e, t) {
    var n, s;
    e && (e[b] ?? (e[b] = {}), (n = e[b]).acceptedFormats ?? (n.acceptedFormats = t), (s = e[b]).maxNumberOfFiles ?? (s.maxNumberOfFiles = 1));
  }
  static set(e, t, n) {
    Ae.populateDefaultFileIO(n == null ? void 0 : n[$], ".4a,.mp3,.webm,.mp4,.mpga,.wav,.mpeg,.m4a"), Ae.populateDefaultFileIO(n == null ? void 0 : n[ee], ".png,.jpg");
    const s = ws.createNew(e.remarkable);
    Ae.processImagesConfig(t, s, e[ee], n == null ? void 0 : n[ee]), Ae.processCamera(t, s, e[Fe], e[ee]), Ae.processGifConfig(t, s, e[Cn], n == null ? void 0 : n[Cn]), Ae.processAudioConfig(t, s, e[$], n == null ? void 0 : n[$]), Ae.processMicrophone(t, s, e[ct], e[$]), Ae.processMixedFiles(t, s, e[Lo]);
  }
}
class un {
  constructor(e, t, n) {
    var s, r, o, a, c;
    this.rawBody = {}, this.validateKeyProperty = !1, this.canSendMessage = un.canSendMessage, this.connectSettings = {}, this.fileTypes = {}, this.completionsHandlers = {}, this.streamHandlers = {}, this.deepChat = e, this.demo = n, Object.assign(this.rawBody, (s = e.connect) == null ? void 0 : s.additionalBodyProps), this.totalMessagesMaxCharLength = (r = e == null ? void 0 : e.requestBodyLimits) == null ? void 0 : r.totalMessagesMaxCharLength, this.maxMessages = (o = e == null ? void 0 : e.requestBodyLimits) == null ? void 0 : o.maxMessages, Ae.set(e, this, t), e.connect && (this.connectSettings = e.connect), this.demo && ((a = this.connectSettings).url ?? (a.url = pt.URL)), this.connectSettings.websocket && ke.setup(this), this.stream = ((c = this.deepChat.connect) == null ? void 0 : c.stream) || le.checkForStream(this.deepChat), e.loadHistory && Cs.addErrorPrefix(this);
  }
  static canSendMessage(e, t, n) {
    return n ? !0 : !!(e && e.trim() !== "") || !!(t && t[X] > 0);
  }
  verifyKey(e, t) {
  }
  static createCustomFormDataBody(e, t, n) {
    const s = new FormData();
    n.forEach((a) => s.append("files", a)), Object.keys(e).forEach((a) => s.append(a, String(e[a])));
    let r = 0;
    t.slice(0, t[X] - 1).forEach((a) => {
      s.append(`message${r += 1}`, ce(a));
    });
    const o = t[t[X] - 1];
    return o[h] && (delete o[b], s.append(`message${r += 1}`, ce(o))), s;
  }
  getServiceIOByType(e) {
    if (e[E].startsWith($) && this.fileTypes[$])
      return this.fileTypes[$];
    if (e[E].startsWith(W)) {
      if (this.fileTypes[Cn] && e[E].endsWith("/gif")) return this.fileTypes[Cn];
      if (this.fileTypes[ee]) return this.fileTypes[ee];
      if (this[Fe]) return this[Fe];
    }
    return this.fileTypes[Lo];
  }
  async request(e, t, n = !0) {
    return this.stream && !V.isSimulation(this.stream) ? V.request(this, e, t, n) : ge.request(this, e, t, n);
  }
  async callAPIWithText(e, t) {
    var r, o, a, c;
    const n = { messages: t, ...this.rawBody };
    let s = !1;
    (r = this.connectSettings.headers) != null && r[q] || ((o = this.connectSettings).headers ?? (o.headers = {}), (a = this.connectSettings.headers)[q] ?? (a[q] = te), s = !0), await this.request(n, e), s && ((c = this.connectSettings.headers) == null || delete c[q]);
  }
  async callApiWithFiles(e, t, n) {
    const s = un.createCustomFormDataBody(this.rawBody, t, n), r = this.connectSettings, o = this.getServiceIOByType(n[0]);
    this.connectSettings = (o == null ? void 0 : o.connect) || this.connectSettings, await this.request(s, e, !1), this.connectSettings = r;
  }
  async callServiceAPI(e, t, n) {
    n ? this.callApiWithFiles(e, t, n) : this.callAPIWithText(e, t);
  }
  // prettier-ignore
  async callAPI(e, t) {
    var s;
    if (!this.connectSettings) throw new Error(He);
    const n = kn.processMessages(
      t.messageToElements.map(([r]) => r),
      this.maxMessages,
      this.totalMessagesMaxCharLength
    );
    if (this.connectSettings.websocket && (!this.connectSettings.handler || this.connectSettings.url !== pt.URL)) {
      const r = { messages: n, ...this.rawBody };
      e[b] && ((s = this.getServiceIOByType(e[b][0])) != null && s.connect) ? this.callApiWithFiles(t, n, e[b]) : ke.sendWebsocket(this, r, t, !1);
    } else
      this.callServiceAPI(t, n, e[b]);
  }
  async extractResultData(e) {
    if (e.result) return le.handleResponseProperty(e);
    if (D.validateResponseFormat(e, !!this.stream))
      return e;
  }
  isDirectConnection() {
    return !1;
  }
  isWebModel() {
    return !1;
  }
  isCustomView() {
    return !1;
  }
}
class k extends un {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    var o;
    super(e, r), this.insertKeyPlaceholderText = "API Key", this.keyHelpUrl = "", this.asyncCallInProgress = !1, this.systemMessage = "", Object.assign(this.rawBody, (o = e.connect) == null ? void 0 : o.additionalBodyProps), this._keyVerificationDetails = t, this._buildHeadersFunc = n, s && this.setApiKeyProperties(s), this.connectSettings = this.buildConnectSettings(this.key || "", e.connect);
  }
  setApiKeyProperties(e) {
    this.key = e.key, e.validateKeyProperty && (this.validateKeyProperty = e.validateKeyProperty);
  }
  buildConnectSettings(e, t) {
    const n = t ?? {};
    return n.headers ?? (n.headers = {}), Object.assign(n.headers, this._buildHeadersFunc(e)), n;
  }
  completeConfig(e, t) {
    e.system_prompt && (this.systemMessage = e.system_prompt), t && (this.functionHandler = t), delete e.system_prompt, delete e.key, delete e.function_handler, Object.assign(this.rawBody, e);
  }
  keyAuthenticated(e, t) {
    this.connectSettings = this.buildConnectSettings(t, this.connectSettings), this.key = t, e();
  }
  // prettier-ignore
  verifyKey(e, t) {
    const { url: n, method: s, handleVerificationResult: r, createHeaders: o, body: a, augmentUrl: c } = this._keyVerificationDetails, l = (o == null ? void 0 : o(e)) || this._buildHeadersFunc(e), d = (c == null ? void 0 : c(e)) || n;
    ge.verifyKey(
      e,
      d,
      l,
      s,
      this.keyAuthenticated.bind(this, t.onSuccess),
      t.onFail,
      t.onLoad,
      r,
      a
    );
  }
  isDirectConnection() {
    return !0;
  }
  static getRoleViaUser(e) {
    return e === F ? F : gt;
  }
  static getRoleViaAI(e) {
    return e === ne ? gt : F;
  }
  processMessages(e) {
    return kn.getCharacterLimitMessages(
      e,
      this.totalMessagesMaxCharLength ? this.totalMessagesMaxCharLength - this.systemMessage[X] : -1
    );
  }
  addSystemMessage(e) {
    this.systemMessage && e.unshift({ [x]: Mn, content: this.systemMessage });
  }
  async callDirectServiceServiceAPI(e, t, n, s, r) {
    if (!this.connectSettings) throw new Error(He);
    const o = n(this.rawBody, t), a = s ? this.stream : !1;
    if (a && (typeof a !== U || !a.simulation) || o.stream)
      o.stream = !0, s != null && s.readable && (this.stream = { readable: !0 }), V.request(this, o, e);
    else
      return await ge.request(this, o, e, r);
  }
  async callToolFunction(e, t) {
    var r, o;
    this.asyncCallInProgress = !0;
    const n = await e(t);
    if (!Array.isArray(n)) {
      if (n[h]) {
        const a = { [h]: n[h] }, c = await ((o = (r = this.deepChat).responseInterceptor) == null ? void 0 : o.call(r, a)) || a;
        if (Array.isArray(c)) throw Error("Function tool response interceptor cannot return an array");
        return { processedResponse: c };
      }
      throw Error(an);
    }
    return { responses: await Promise.all(n) };
  }
  makeAnotherRequest(e, t, n) {
    try {
      return t && (this.stream ? V.request(this, e, t) : ge.request(this, e, t)), { [h]: n || "" };
    } catch (s) {
      throw this.asyncCallInProgress = !1, s;
    }
  }
  genereteAPIKeyName(e) {
    return `${e} API Key`;
  }
  static getImageContent(e) {
    return e.filter((t) => t[E] === W).map((t) => ({
      [E]: qe,
      [qe]: {
        url: t[T] || ""
      }
    })).filter((t) => t[qe].url[X] > 0);
  }
  static getTextWImagesContent(e) {
    if (e[b] && e[b][X] > 0) {
      const t = this.getImageContent(e[b]);
      return e[h] && e[h].trim()[X] > 0 && t.unshift({ [E]: h, [h]: e[h] }), t[X] > 0 ? t : e[h] || "";
    }
    return e[h] || "";
  }
  static getTextWFilesContent(e, t) {
    if (e[b] && e[b][X] > 0) {
      const n = t(e[b]);
      return e[h] && e[h].trim()[X] > 0 && n.unshift({ [E]: h, [h]: e[h] }), n;
    }
    return e[h] || "";
  }
  async extractStreamResultWToolsGeneric(e, t, n, s, r) {
    const { delta: o, finish_reason: a } = t;
    if (a === "tool_calls") {
      const c = { tool_calls: e._streamToolCalls };
      return e._streamToolCalls = void 0, this.handleToolsGeneric(c, n, e.messages, s, r);
    } else o != null && o.tool_calls && (e._streamToolCalls ? o.tool_calls.forEach((c, l) => {
      e._streamToolCalls && (e._streamToolCalls[l].function.arguments += c.function.arguments);
    }) : e._streamToolCalls = o.tool_calls);
    return { [h]: (o == null ? void 0 : o.content) || "" };
  }
  async handleToolsGeneric(e, t, n, s, r) {
    if (!e.tool_calls || !s || !t)
      throw Error(Gt);
    const o = C(s), a = e.tool_calls.map((d) => ({ name: d.function.name, arguments: d.function.arguments })), { responses: c, processedResponse: l } = await this.callToolFunction(t, a);
    if (l) return l;
    if (r && (o.messages = o.messages.slice(o.messages[X] - 1), r.message && o.messages.unshift({ [x]: Mn, content: r.message })), o.messages.push({ tool_calls: e.tool_calls, [x]: gt, content: null }), !c.find(({ response: d }) => typeof d !== Ee) && a[X] === c[X])
      return c.forEach((d, p) => {
        var g;
        const u = (g = e.tool_calls) == null ? void 0 : g[p];
        o == null || o.messages.push({
          [x]: "tool",
          tool_call_id: u == null ? void 0 : u.id,
          name: u == null ? void 0 : u.function.name,
          content: d.response
        });
      }), this.makeAnotherRequest(o, n);
    throw Error(an);
  }
  updateSessionId(e) {
    this.messages && this.messages.messageToElements[X] > 0 && (this.messages.messageToElements[this.messages.messageToElements[X] - 1][0]._sessionId = e);
  }
}
class Xs {
  static waitForPropertiesToBeUpdatedBeforeRender(e) {
    e._propUpdated_ = !1, setTimeout(() => {
      e._propUpdated_ ? Xs.waitForPropertiesToBeUpdatedBeforeRender(e) : (e._waitingToRender_ = !1, e.onRender());
    });
  }
  static attemptRender(e) {
    e._propUpdated_ = !0, e._waitingToRender_ || (e._waitingToRender_ = !0, Xs.waitForPropertiesToBeUpdatedBeforeRender(e));
  }
}
const At = class At extends HTMLElement {
  // If this is not working, try using propertyName directly
  constructor() {
    super(), this._waitingToRender_ = !1, this._propUpdated_ = !1, Object.keys(At._attributeToProperty_).forEach((e) => {
      const t = At._attributeToProperty_[e];
      this.constructPropertyAccessors(t), this.hasOwnProperty(e) || this.constructPropertyAccessors(t, e);
    });
  }
  static get observedAttributes() {
    return Object.keys(At._attributes_) || [];
  }
  // need to be called here as accessors need to be set for the class instance
  constructPropertyAccessors(e, t) {
    let n;
    Object.defineProperty(this, t || e, {
      get: function() {
        return n;
      },
      set: function(o) {
        n = o, t ? this[e] = o : Xs.attemptRender(this);
      }
    });
  }
  attributeChangedCallback(e, t, n) {
    if (t === n) return;
    const s = At._attributes_[e](n), r = At._attributeToProperty_[e];
    this[r] = s;
  }
  onRender() {
  }
};
At._attributes_ = {}, At._attributeToProperty_ = {};
let qi = At;
const Tl = `<?xml version="1.0" standalone="no"?>
<svg version="1.1"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.9em" height="0.9em"
	viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200">
		<path d="
			M669.727,273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025,0.457-209.823,25.517-310.913,73.536
			c-75.058,37.122-148.173,89.529-211.67,154.174C46.232,529.978,6.431,577.76,0,628.74c0.76,44.162,48.153,98.67,77.417,131.764
			c59.543,62.106,130.754,113.013,211.67,154.174c2.75,1.335,5.51,2.654,8.276,3.955l-75.072,131.102l102.005,60.286l551.416-960.033
			l-98.186-60.008L669.727,273.516z M902.563,338.995l-74.927,129.857c34.47,44.782,54.932,100.006,54.932,159.888
			c0,149.257-126.522,270.264-282.642,270.264c-6.749,0-13.29-0.728-19.922-1.172l-49.585,85.84c22.868,2.449,45.99,4.233,69.58,4.541
			c103.123-0.463,209.861-25.812,310.84-73.535c75.058-37.122,148.246-89.529,211.743-154.174
			c31.186-32.999,70.985-80.782,77.417-131.764c-0.76-44.161-48.153-98.669-77.417-131.763
			c-59.543-62.106-130.827-113.013-211.743-154.175C908.108,341.478,905.312,340.287,902.563,338.995L902.563,338.995z
			M599.927,358.478c6.846,0,13.638,0.274,20.361,0.732l-58.081,100.561c-81.514,16.526-142.676,85.88-142.676,168.897
			c0,20.854,3.841,40.819,10.913,59.325c0.008,0.021-0.008,0.053,0,0.074l-58.228,100.854
			c-34.551-44.823-54.932-100.229-54.932-160.182C317.285,479.484,443.808,358.477,599.927,358.478L599.927,358.478z M768.896,570.513
			L638.013,797.271c81.076-16.837,141.797-85.875,141.797-168.603C779.81,608.194,775.724,588.729,768.896,570.513L768.896,570.513z"
			/>
</svg>
`, Rl = `<?xml version="1.0" standalone="no"?>
<svg version="1.1"
	xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0.9em" height="0.9em"
	viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200">
		<path id="path6686" inkscape:connector-curvature="0" d="M779.843,599.925c0,95.331-80.664,172.612-180.169,172.612
			c-99.504,0-180.168-77.281-180.168-172.612c0-95.332,80.664-172.612,180.168-172.612
			C699.179,427.312,779.843,504.594,779.843,599.925z M600,240.521c-103.025,0.457-209.814,25.538-310.904,73.557
			c-75.058,37.122-148.206,89.496-211.702,154.141C46.208,501.218,6.431,549,0,599.981c0.76,44.161,48.13,98.669,77.394,131.763
			c59.543,62.106,130.786,113.018,211.702,154.179c94.271,45.751,198.616,72.092,310.904,73.557
			c103.123-0.464,209.888-25.834,310.866-73.557c75.058-37.122,148.243-89.534,211.74-154.179
			c31.185-32.999,70.962-80.782,77.394-131.763c-0.76-44.161-48.13-98.671-77.394-131.764
			c-59.543-62.106-130.824-112.979-211.74-154.141C816.644,268.36,712.042,242.2,600,240.521z M599.924,329.769
			c156.119,0,282.675,120.994,282.675,270.251c0,149.256-126.556,270.25-282.675,270.25S317.249,749.275,317.249,600.02
			C317.249,450.763,443.805,329.769,599.924,329.769L599.924,329.769z"/>
</svg>
`;
class kt {
  static createSVGElement(e) {
    return new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
  }
}
const Ut = class Ut {
  // prettier-ignore
  static changeVisibility(e, t, n, s) {
    s.target.id === Ut.VISIBLE_ICON_ID ? (t[v].display = "none", n[v].display = "block", e[E] = "password") : (t[v].display = "block", n[v].display = "none", e[E] = h);
  }
  static createIconElement(e, t) {
    const n = kt.createSVGElement(e);
    return n.id = t, n[m].add("visibility-icon"), n;
  }
  // prettier-ignore
  static create(e) {
    const t = A();
    t.id = "visibility-icon-container";
    const n = Ut.createIconElement(Rl, Ut.VISIBLE_ICON_ID);
    n[v].display = "none", t.appendChild(n);
    const s = Ut.createIconElement(Tl, "not-visible-icon");
    return t.appendChild(s), t.onclick = Ut.changeVisibility.bind(
      this,
      e,
      n,
      s
    ), t;
  }
};
Ut.VISIBLE_ICON_ID = "visible-icon";
let Gi = Ut;
class Oe {
  static createCautionText() {
    const e = A("a");
    return e[m].add("insert-key-input-help-text"), e.innerText = "Please exercise CAUTION when inserting your API key outside of deepchat.dev or localhost!!", e;
  }
  static createHelpLink(e) {
    const t = A("a");
    return t[m].add("insert-key-input-help-text"), t.href = e, t.innerText = "Find more info here", t.target = "_blank", t;
  }
  static createFailText() {
    const e = A();
    return e.id = "insert-key-input-invalid-text", e[v].display = "none", e;
  }
  static createHelpTextContainer(e, t = !0) {
    const n = A();
    n.id = "insert-key-help-text-container";
    const s = A();
    s.id = "insert-key-help-text-contents";
    const r = Oe.createFailText();
    if (s.appendChild(r), e) {
      const o = Oe.createHelpLink(e);
      s.appendChild(o);
    }
    if (t === !0) {
      const o = Oe.createCautionText();
      s.appendChild(o);
    }
    return n.appendChild(s), { helpTextContainerElement: n, failTextElement: r };
  }
  static onFail(e, t, n, s) {
    e[m].replace("insert-key-input-valid", "insert-key-input-invalid"), n.innerText = s, n[v].display = "block", t.innerText = "Start", e[m].remove(It);
  }
  static onLoad(e, t) {
    e[m].add(It), t.innerHTML = '<div id="loading-key"></div>';
  }
  // prettier-ignore
  static verifyKey(e, t, n) {
    const s = e.value.trim();
    n.verifyKey(s, t);
  }
  // prettier-ignore
  static addVerificationEvents(e, t, n, s, r) {
    const o = {
      onSuccess: s,
      onFail: Oe.onFail.bind(this, e, t, n),
      onLoad: Oe.onLoad.bind(this, e, t)
    }, a = Oe.verifyKey.bind(this, e, o, r);
    t.onclick = a, e.onkeydown = (c) => {
      !e[m].contains(It) && c.key === _e.ENTER && a();
    };
  }
  static createStartButton() {
    const e = A();
    return e.id = "start-button", e.innerText = "Start", e;
  }
  static onInputFocus(e) {
    e.target[m].replace("insert-key-input-invalid", "insert-key-input-valid");
  }
  static createInput(e) {
    const t = A();
    t.id = "insert-key-input-container";
    const n = A("input");
    return n.id = "insert-key-input", n.placeholder = e || "API Key", n[E] = "password", n[m].add("insert-key-input-valid"), n.onfocus = Oe.onInputFocus, t.appendChild(n), t;
  }
  // prettier-ignore
  static createContents(e, t) {
    var d;
    const n = A();
    n.id = "insert-key-contents";
    const s = Oe.createInput(t.insertKeyPlaceholderText), r = s.children[0], o = Gi.create(r);
    s.appendChild(o), n.appendChild(s);
    const a = Oe.createStartButton(), { helpTextContainerElement: c, failTextElement: l } = Oe.createHelpTextContainer(
      t.keyHelpUrl,
      (d = t.deepChat._insertKeyViewStyles) == null ? void 0 : d.displayCautionText
    );
    return n.appendChild(a), n.appendChild(c), Oe.addVerificationEvents(r, a, l, e, t), n;
  }
  static createElements(e, t) {
    const n = A();
    n.id = "insert-key-view";
    const s = Oe.createContents(e, t);
    return n.appendChild(s), n;
  }
  static render(e, t, n) {
    const s = Oe.createElements(t, n);
    e.replaceChildren(s);
  }
}
const Ve = class Ve {
  static enableButtons(e, t, n = 0) {
    window.webLLM ? (e && (e[j] = !1), t && (t[j] = !1)) : n < Ts.MODULE_SEARCH_LIMIT_S * 4 && setTimeout(() => Ve.enableButtons(e, t, n + 1), 250);
  }
  // prettier-ignore
  static setUpInitial(e, t, n, s) {
    const r = (t == null ? void 0 : t.downloadClass) || Ve.DOWNLOAD_BUTTON_CLASS, o = (t == null ? void 0 : t.uploadClass) || Ve.UPLOAD_BUTTON_CLASS, a = (t == null ? void 0 : t.fileInputClass) || Ve.FILE_INPUT_CLASS;
    return setTimeout(() => {
      const c = n == null ? void 0 : n.getElementsByClassName(r)[0], l = n == null ? void 0 : n.getElementsByClassName(a)[0], d = n == null ? void 0 : n.getElementsByClassName(o)[0];
      c && (c.onclick = () => e()), l && (l.onchange = () => {
        l[b] && l[b].length > 0 && e(l[b]);
      }), d && (d.onclick = () => l[J]()), (c || d) && Ve.enableButtons(c, d);
    }), (t == null ? void 0 : t.initialHtml) || `<div>
        Download or upload a web model that will run entirely on your browser: <br/> 
        <button disabled class="${r} deep-chat-button deep-chat-web-model-button">Download</button>
        ${s ? "" : `<input type="file" class="${a}" hidden multiple />
          <button disabled class="${o} deep-chat-button deep-chat-web-model-button">Upload</button>`}
      </div>`;
  }
  static exportFile(e) {
    const t = A("a"), n = 4;
    for (let s = 0; s < e.length / n; s += 1)
      setTimeout(() => {
        const r = s * n;
        for (let o = r; o < Math.min(r + n, e.length); o += 1) {
          const a = URL.createObjectURL(e[o]);
          t.href = a, t.download = e[o].name, document.body.appendChild(t), t[J](), URL.revokeObjectURL(a);
        }
      }, 500 * s);
  }
  // prettier-ignore
  static setUpAfterLoad(e, t, n, s) {
    const r = (t == null ? void 0 : t.exportFilesClass) || Ve.EXPORT_BUTTON_CLASS;
    return setTimeout(() => {
      const o = n == null ? void 0 : n.getElementsByClassName(r)[0];
      o && (o.onclick = () => Ve.exportFile(e));
    }), (t == null ? void 0 : t.afterLoadHtml) || `<div>
        Model loaded successfully and has been cached for future requests.
        ${s ? "" : `<br/> <button style="margin-top: 5px" class="${r} deep-chat-button">Export</button>`}
      </div>`;
  }
};
Ve.DOWNLOAD_BUTTON_CLASS = "deep-chat-download-button", Ve.UPLOAD_BUTTON_CLASS = "deep-chat-upload-button", Ve.FILE_INPUT_CLASS = "deep-chat-file-input", Ve.EXPORT_BUTTON_CLASS = "deep-chat-export-button";
let Zs = Ve;
const to = {
  model_list: [
    // Llama-2
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 9109.03,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 6749.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-7b-chat-hf-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-7b-chat-hf/Llama-2-7b-chat-hf-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 4618.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-13b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-13b-chat-hf/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 11814.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Llama-2-70b-chat-hf-q4f16_1-MLC/resolve/main/",
      local_id: "Llama-2-70b-chat-hf-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Llama-2-70b-chat-hf/Llama-2-70b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
      vram_required_MB: 43729.05,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // RedPajama
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k-webgpu.wasm",
      vram_required_MB: 2972.09,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k-webgpu.wasm",
      vram_required_MB: 3928.09,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2041.09,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC/resolve/main/",
      local_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/RedPajama-INCITE-Chat-3B-v1/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 2558.09,
      low_resource_required: !0
    },
    // Mistral variants
    {
      model_url: "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC/resolve/main/",
      local_id: "WizardMath-7B-V1.1-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC/resolve/main/",
      local_id: "Mistral-7B-Instruct-v0.2-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "OpenHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC/resolve/main/",
      local_id: "NeuralHermes-2.5-Mistral-7B-q4f16_1",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/Mistral-7B-Instruct-v0.2/Mistral-7B-Instruct-v0.2-q4f16_1-sw4k_cs1k-webgpu.wasm",
      vram_required_MB: 6079.02,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    // TinyLlama
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f16-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f16",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f16-ctx2k-webgpu.wasm",
      vram_required_MB: 5063.52,
      low_resource_required: !1,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q0f32-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q0f32",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q0f32-ctx2k-webgpu.wasm",
      vram_required_MB: 5394.53,
      low_resource_required: !1
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx1k-webgpu.wasm",
      vram_required_MB: 899.11,
      low_resource_required: !0,
      required_features: ["shader-f16"]
    },
    {
      model_url: "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC/resolve/main/",
      local_id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-1k",
      model_lib_url: "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/TinyLlama-1.1B-Chat-v0.4/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx1k-webgpu.wasm",
      vram_required_MB: 992.11,
      low_resource_required: !0
    }
  ],
  use_web_worker: !0
}, Y = class Y extends un {
  constructor(e) {
    var t, n;
    super(e), this._isModelLoaded = !1, this._isModelLoading = !1, this._loadOnFirstMessage = !1, this._webModel = {}, this.permittedErrorPrefixes = [Y.MULTIPLE_MODELS_ERROR, Y.WEB_LLM_NOT_FOUND_ERROR, Y.GENERIC_ERROR], this._conversationHistory = [], typeof e.webModel == "object" && (this._webModel = e.webModel), (t = this._webModel.load) != null && t.clearCache && Y.clearAllCache(), this.findModelInWindow(e), this.canSendMessage = this.canSubmit.bind(this), this._chatEl = (n = e.shadowRoot) == null ? void 0 : n.children[0], e.history && Y.setUpHistory(this._conversationHistory, e.history);
  }
  // need ref of messages object as web model exhibits unique behaviour to manipulate chat
  setUpMessages(e) {
    this._messages = e, this._removeIntro = () => {
      e.removeIntroductoryMessage(), this._removeIntro = void 0;
    };
  }
  static setUpHistory(e, t) {
    t.forEach((n, s) => {
      if (n[x] === F && n[h]) {
        const r = t[s + 1];
        r != null && r[h] && r[x] !== F && e.push([n[h], r[h]]);
      }
    });
  }
  findModelInWindow(e, t = 0) {
    var n;
    window.webLLM ? this.configureInit(this.shouldAddIntroMessage(e.introMessage)) : t > Y.MODULE_SEARCH_LIMIT_S ? ((n = this._messages) == null || n.addNewErrorMessage(ae, Y.WEB_LLM_NOT_FOUND_ERROR), console[f](
      "The deep-chat-web-llm module has not been attached to the window object. Please see the following guide:"
    ), console[f]("https://deepchat.dev/examples/externalModules")) : setTimeout(() => this.findModelInWindow(e, t + 1), 1e3);
  }
  shouldAddIntroMessage(e) {
    var t;
    return !e && this._webModel && ((t = this._webModel.introMessage) == null ? void 0 : t.displayed) !== !1;
  }
  scrollToTop(e) {
    var t;
    ((t = this._webModel.introMessage) == null ? void 0 : t.autoScroll) !== !1 && setTimeout(() => {
      var n, s;
      (n = this._messages) != null && n.elementRef && z.scrollToTop((s = this._messages) == null ? void 0 : s.elementRef);
    }, e);
  }
  // prettier-ignore
  getIntroMessage(e) {
    if (!this.shouldAddIntroMessage(e) || !this._chatEl) return;
    const t = Zs.setUpInitial(
      this.init.bind(this),
      this._webModel.introMessage,
      this._chatEl,
      !!this._webModel.worker
    );
    return this.scrollToTop(1), { [x]: ne, html: t, sendUpdate: !1 };
  }
  async configureInit(e) {
    const { load: t } = this._webModel;
    if (t) {
      if (t.onInit) {
        this.init();
        return;
      }
      if (t.onMessage) {
        this._loadOnFirstMessage = !0;
        return;
      }
    }
    e || this.init();
  }
  async init(e) {
    var n;
    (n = this._messages) == null || n.removeError();
    const t = this.attemptToCreateChat();
    t && await this.loadModel(t, e);
  }
  attemptToCreateChat() {
    var t;
    if (Y.chat) {
      (t = this._messages) == null || t.addNewErrorMessage(ae, Y.MULTIPLE_MODELS_ERROR), console[f](Y.MULTIPLE_MODELS_ERROR);
      return;
    }
    if (this._isModelLoaded || this._isModelLoading) return;
    const { worker: e } = this._webModel;
    return to.use_web_worker && e ? new window.webLLM.ChatWorkerClient(e) : new window.webLLM.ChatModule();
  }
  getConfig() {
    var n;
    let e = Y.DEFAULT_MODEL;
    this._webModel.model && (e = this._webModel.model);
    const t = C(to);
    if (this._webModel.urls) {
      const s = t.model_list.find((r) => r.local_id = e);
      s && (this._webModel.urls.model && (s.model_url = this._webModel.urls.model), this._webModel.urls.wasm && (s.model_lib_url = this._webModel.urls.wasm));
    }
    return (n = this._webModel.load) != null && n.skipCache && (t.use_cache = !1), { model: e, appConfig: t };
  }
  // prettier-ignore
  async loadModel(e, t) {
    var o, a, c, l, d, p, u;
    this.scrollToTop(), Y.chat = e, this._isModelLoading = !0;
    let n = ((o = this._webModel.introMessage) == null ? void 0 : o.displayed) === !1;
    const s = (g) => {
      var y;
      (y = this._messages) == null || y.addNewMessage({ html: `<div>${g[h]}</div>`, overwrite: !0, sendUpdate: !1 }), n && (setTimeout(() => z.scrollToBottom(this._messages)), n = !1);
    };
    Y.chat.setInitProgressCallback(s);
    let r;
    try {
      const { model: g, appConfig: y } = this.getConfig(), _ = {};
      this._webModel.instruction && (_.conv_config = { [Mn]: this._webModel.instruction }), this._conversationHistory.length > 0 && (_.conversation_history = this._conversationHistory), r = await Y.chat.reload(g, _, y, t);
    } catch (g) {
      return this.unloadChat(g);
    }
    if ((c = (a = this.deepChat)._validationHandler) == null || c.call(a), (l = this._webModel.introMessage) != null && l.removeAfterLoad)
      this._webModel.introMessage.displayed === !1 ? (p = this._messages) == null || p.removeLastMessage() : (u = this._removeIntro) == null || u.call(this);
    else {
      const g = Zs.setUpAfterLoad(
        r,
        this._webModel.introMessage,
        this._chatEl,
        !!this._webModel.worker
      );
      (d = this._messages) == null || d.addNewMessage({ html: g, overwrite: !0, sendUpdate: !1 });
    }
    this._isModelLoaded = !0, this._isModelLoading = !1;
  }
  async unloadChat(e) {
    var t;
    (t = this._messages) == null || t.addNewErrorMessage(ae, Y.GENERIC_ERROR), console[f](e), this._isModelLoaded = !1, this._isModelLoading = !1, Y.chat && (await Y.chat.unload(), Y.chat = void 0);
  }
  async immediateResp(e, t, n) {
    const s = { [h]: await n.generate(t, void 0, 0) }, r = await Y.processResponse(this.deepChat, e, s);
    r && r.forEach((o) => e.addNewMessage(o)), this.completionsHandlers.onFinish();
  }
  async streamResp(e, t, n) {
    this.streamHandlers.onAbort = () => {
      n.interruptGenerate();
    }, this.streamHandlers.onOpen();
    const s = new ht(e);
    await n.generate(t, async (r, o) => {
      const a = await Y.processResponse(this.deepChat, e, { [h]: o });
      a && s.upsertStreamedMessage({ [h]: a[0][h], overwrite: !0 });
    }), s.finaliseStreamedMessage(), this.streamHandlers.onClose();
  }
  async generateRespByType(e, t, n, s) {
    var r;
    try {
      n ? await this.streamResp(e, t, s) : await this.immediateResp(e, t, s);
    } catch (o) {
      (r = this._messages) == null || r.addNewErrorMessage(ae), console.log(o);
    }
  }
  async generateResp(e, t, n) {
    const s = t[t.length - 1][h], { body: r, error: o } = await D.processRequestInterceptor(this.deepChat, { body: { [h]: s } }), a = !!this.stream;
    try {
      if (o)
        D.displayError(e, new Error(o)), (a ? this.streamHandlers.onClose : this.completionsHandlers.onFinish)();
      else if (!r || !r[h]) {
        const c = Aa({ body: r }, !1);
        console[f](c);
        const l = a ? this.streamHandlers.onClose : this.completionsHandlers.onFinish;
        D.onInterceptorError(e, c, l);
      } else
        this.generateRespByType(e, r[h], !!this.stream, n);
    } catch (c) {
      this.unloadChat(c);
    }
  }
  async callServiceAPI(e, t) {
    var n, s;
    if (!this._isModelLoaded)
      if (this._loadOnFirstMessage)
        await this.init();
      else
        return;
    !Y.chat || this._isModelLoading || ((n = this._webModel.introMessage) != null && n.removeAfterMessage && ((s = this._removeIntro) == null || s.call(this)), e.addLoadingMessage(), this.generateResp(e, t, Y.chat));
  }
  canSubmit(e) {
    return !(e != null && e.trim()) || this._isModelLoading ? !1 : this._loadOnFirstMessage ? !0 : !!this._isModelLoaded;
  }
  static async processResponse(e, t, n) {
    var a, c;
    const s = await ((a = e.responseInterceptor) == null ? void 0 : a.call(e, n)) || n;
    if ((c = e.connect) != null && c.stream && Array.isArray(s) && s.length > 1) {
      console[f](Do);
      return;
    }
    const r = Array.isArray(s) ? s : [s], o = r.find((l) => typeof l[f] === Ee);
    if (o) {
      D.displayError(t, new Error(o[f]));
      return;
    } else if (r.find((d) => !d || !d[h])) {
      const d = wa(n, !!e.responseInterceptor, s);
      D.displayError(t, new Error(d));
      return;
    }
    return r;
  }
  isWebModel() {
    return !0;
  }
  static clearAllCache() {
    Y.clearCache("webllm/model"), Y.clearCache("webllm/wasm");
  }
  static clearCache(e) {
    caches.open(e).then((t) => {
      t.keys().then((n) => {
        n.forEach((s) => {
          t.delete(s);
        });
      });
    });
  }
};
Y.GENERIC_ERROR = `Error, please check the [troubleshooting](${Z}webModel#troubleshooting) section of documentation for help.`, Y.MULTIPLE_MODELS_ERROR = "Cannot run multiple web models", Y.WEB_LLM_NOT_FOUND_ERROR = "WebLLM module not found", Y.DEFAULT_MODEL = "Llama-2-7b-chat-hf-q4f32_1", Y.MODULE_SEARCH_LIMIT_S = 5;
let Ts = Y;
const be = (i, e, t, n) => ({
  url: i,
  method: e,
  handleVerificationResult: t,
  augmentUrl: n
}), Il = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
  // bigcode/santacoder expects this so adding just-in-case
}), Ml = (i, e, t, n) => {
  const s = i;
  Array.isArray(s[f]) && s[f][0] === "Error in `parameters`: field required" ? t(e) : n(pe);
}, kl = () => be(
  "https://api-inference.huggingface.co/models/gpt2",
  ye,
  Ml
), ys = class ys extends k {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    super(
      e,
      kl(),
      Il,
      r,
      o
    ), this.insertKeyPlaceholderText = "Hugging Face Token", this.keyHelpUrl = "https://huggingface.co/settings/tokens", this.permittedErrorPrefixes = [ar], this.url = `${ys.URL_PREFIX}${n}`, this.textInputPlaceholderText = t, typeof s == "object" && (s.model && (this.url = `${ys.URL_PREFIX}${s.model}`), s.options && (this.rawBody.options = s.options), s.parameters && (this.rawBody.parameters = s.parameters));
  }
  preprocessBody(e, t, n) {
    const s = C(e), r = t[t.length - 1][h];
    if (r)
      return s.options ?? (s.options = {}), s.options.wait_for_model = !0, { inputs: r, ...s };
  }
  async callServiceAPI(e, t, n) {
    if (!this.connectSettings) throw new Error(He);
    const s = this.preprocessBody(this.rawBody, t, n);
    ge.request(this, s, e);
  }
};
ys.URL_PREFIX = "https://api-inference.huggingface.co/models/";
let Pt = ys;
class Ls extends Pt {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    super(e, t, n, s, r, o), this.isTextInputDisabled = !0, this.canSendMessage = Ls.canSendFile;
  }
  static canSendFile(e, t) {
    return !!(t != null && t[0]);
  }
  preprocessBody(e, t, n) {
    return n[0];
  }
  // prettier-ignore
  async callServiceAPI(e, t, n) {
    if (!this.connectSettings) throw new Error(He);
    if (!(n != null && n[0])) throw new Error(bi);
    ge.poll(this, n[0], e, !1);
  }
}
class Pl extends Ls {
  // prettier-ignore
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.audioClassification, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(
      e,
      `Attach an audio ${se}`,
      "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition",
      t,
      n,
      { audio: {} }
    );
  }
  async extractPollResultData(e) {
    var t;
    if (e.estimated_time) return { timeoutMS: (e.estimated_time + 1) * 1e3 };
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.label) || "" };
  }
}
class Ll extends Ls {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.imageClassification, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, `Attach an image ${se}`, "google/vit-base-patch16-224", t, n, { images: {} });
  }
  async extractPollResultData(e) {
    var t;
    if (e.estimated_time) return { timeoutMS: (e.estimated_time + 1) * 1e3 };
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.label) || "" };
  }
}
const vi = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Ol = (i, e, t, n) => {
  i.message ? n(pe) : t(e);
}, Si = () => be("https://api.stability.ai/v1/engines/list", ue, Ol), On = "data:image/png;base64,";
class xi extends k {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    super(e, t, n, s, r), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Stability AI"), this.keyHelpUrl = "https://platform.stability.ai/docs/getting-started/authentication", this.permittedErrorPrefixes = [Ps, "invalid_"];
  }
}
class Ys extends xi {
  constructor(e) {
    var o;
    const t = C(e.directConnection), n = t == null ? void 0 : t.stabilityAI, s = { images: { files: { acceptedFormats: ".png", maxNumberOfFiles: 1 } } };
    super(e, Si(), vi, n, s), this.url = "https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale", this.textInputPlaceholderText = "Describe image changes";
    const r = (o = t == null ? void 0 : t.stabilityAI) == null ? void 0 : o.imageToImageUpscale;
    typeof r == "object" && (r.engine_id && (this.url = `https://api.stability.ai/v1/generation/${r.engine_id}/image-to-image/upscale`), Ys.cleanConfig(r), Object.assign(this.rawBody, r)), this.canSendMessage = Ys.canSendFileMessage;
  }
  static cleanConfig(e) {
    delete e.engine_id;
  }
  static canSendFileMessage(e, t) {
    return !!(t != null && t[0]);
  }
  createFormDataBody(e, t) {
    const n = new FormData();
    return n.append(W, t), Object.keys(e).forEach((s) => {
      n.append(s, String(e[s]));
    }), n;
  }
  // prettier-ignore
  async callServiceAPI(e, t, n) {
    if (!this.connectSettings) throw new Error(He);
    if (!n) throw new Error(or);
    const s = this.createFormDataBody(this.rawBody, n[0]);
    D.tempRemoveContentHeader(
      this.connectSettings,
      ge.request.bind(this, this, s, e),
      !1
    );
  }
  async extractResultData(e) {
    if (e.message) throw e.message;
    const t = e.artifacts.map((n) => ({ [T]: `${On}${n.base64}`, [E]: W }));
    return { [b]: t };
  }
}
class Js extends xi {
  constructor(e) {
    var o;
    const t = C(e.directConnection), n = t == null ? void 0 : t.stabilityAI, s = { [ee]: { [b]: { acceptedFormats: ".png", maxNumberOfFiles: 2 } } };
    super(e, Si(), vi, n, s), this.url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking", this._maskSource = "MASK_IMAGE_WHITE", this.textInputPlaceholderText = "Describe image changes";
    const r = (o = t == null ? void 0 : t.stabilityAI) == null ? void 0 : o.imageToImageMasking;
    typeof r == "object" && (r.engine_id && (this.url = `https://api.stability.ai/v1/generation/${r.engine_id}/image-to-image/masking`), r.weight !== void 0 && r.weight !== null && (this._imageWeight = r.weight), r.mask_source !== void 0 && r.mask_source !== null && (this._maskSource = r.mask_source), Js.cleanConfig(r), Object.assign(this.rawBody, r)), this.canSendMessage = Js.canSendFileTextMessage;
  }
  static cleanConfig(e) {
    delete e.engine_id, delete e.weight;
  }
  static canSendFileTextMessage(e, t) {
    return !!(t != null && t[0]) && !!(e && e.trim() !== "");
  }
  createFormDataBody(e, t, n, s) {
    const r = new FormData();
    return r.append("init_image", t), r.append("mask_source", String(this._maskSource)), r.append("mask_image", n), s && s !== "" && r.append("text_prompts[0][text]", s), this._imageWeight !== void 0 && this._imageWeight !== null && r.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(e).forEach((o) => {
      r.append(o, String(e[o]));
    }), r.get("weight") === void 0 && r.append("weight", String(1)), r;
  }
  // prettier-ignore
  async callServiceAPI(e, t, n) {
    var o, a;
    if (!this.connectSettings) throw new Error(He);
    if (!n || !n[0] || !n[1]) throw new Error(or);
    const s = (a = (o = t[t.length - 1]) == null ? void 0 : o[h]) == null ? void 0 : a.trim(), r = this.createFormDataBody(this.rawBody, n[0], n[1], s);
    D.tempRemoveContentHeader(
      this.connectSettings,
      ge.request.bind(this, this, r, e),
      !1
    );
  }
  async extractResultData(e) {
    if (e.message) throw e.message;
    const t = e.artifacts.map((n) => ({ [T]: `${On}${n.base64}`, [E]: W }));
    return { [b]: t };
  }
}
class Nl extends Ls {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.audioSpeechRecognition, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, `Attach an audio ${se}`, "facebook/wav2vec2-large-960h-lv60-self", t, n, { audio: {} });
  }
  async extractPollResultData(e) {
    if (e.estimated_time) return { timeoutMS: (e.estimated_time + 1) * 1e3 };
    if (e[f]) throw e[f];
    return { [h]: e[h] || "" };
  }
}
class Bl extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.textGeneration, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "Once upon a time", "gpt2", t, n);
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.generated_text) || "" };
  }
}
class Dl extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.questionAnswer, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "Ask a question", "bert-large-uncased-whole-word-masking-finetuned-squad", t, n), this.permittedErrorPrefixes = [ar, "Error in"], this._context = t.context;
  }
  preprocessBody(e, t) {
    const n = t[t.length - 1][h];
    if (n)
      return {
        inputs: { question: n, context: this._context, options: { wait_for_model: !0 } }
      };
  }
  async extractResultData(e) {
    if (e[f]) throw e[f];
    return { [h]: e.answer || "" };
  }
}
class Fl extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.summarization, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "Insert text to summarize", "facebook/bart-large-cnn", t, n);
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.summary_text) || "" };
  }
}
class Ul extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.conversation, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "Ask me anything!", "facebook/blenderbot-400M-distill", t, n), this.maxMessages ?? (this.maxMessages = -1);
  }
  // prettier-ignore
  processMessagesI(e) {
    const t = e.filter((a) => a[h]), n = t[t.length - 1][h], s = t.slice(0, t.length - 1);
    if (!n) return;
    const r = s.filter((a) => a[x] === F).map((a) => a[h]), o = s.filter((a) => a[x] === ne).map((a) => a[h]);
    return { past_user_inputs: r, generated_responses: o, mostRecentMessageText: n };
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessagesI(t);
    if (s)
      return n.options ?? (n.options = {}), n.options.wait_for_model = !0, {
        inputs: {
          past_user_inputs: s.past_user_inputs,
          generated_responses: s.generated_responses,
          [h]: s.mostRecentMessageText
        },
        ...n
      };
  }
  async extractResultData(e) {
    if (e[f]) throw e[f];
    return { [h]: e.generated_text || "" };
  }
}
class Qs extends xi {
  constructor(e) {
    var o;
    const t = C(e.directConnection), n = t.stabilityAI, s = { [ee]: { [b]: { acceptedFormats: ".png", maxNumberOfFiles: 1 } } };
    super(e, Si(), vi, n, s), this.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image", this.textInputPlaceholderText = "Describe image changes";
    const r = (o = t.stabilityAI) == null ? void 0 : o.imageToImage;
    typeof r == "object" && (r.engine_id && (this.url = `https://api.stability.ai/v1/generation/${r.engine_id}/text-to-image`), r.weight !== void 0 && r.weight !== null && (this._imageWeight = r.weight), Qs.cleanConfig(r), Object.assign(this.rawBody, r)), this.canSendMessage = Qs.canSendFileTextMessage;
  }
  static cleanConfig(e) {
    delete e.engine_id, delete e.weight;
  }
  static canSendFileTextMessage(e, t) {
    return !!(t != null && t[0]) && !!(e && e.trim() !== "");
  }
  createFormDataBody(e, t, n) {
    const s = new FormData();
    return s.append("init_image", t), n && n !== "" && s.append("text_prompts[0][text]", n), this._imageWeight !== void 0 && this._imageWeight !== null && s.append("text_prompts[0][weight]", String(this._imageWeight)), Object.keys(e).forEach((r) => {
      s.append(r, String(e[r]));
    }), s.get("weight") === void 0 && s.append("weight", String(1)), s;
  }
  // prettier-ignore
  async callServiceAPI(e, t, n) {
    var o, a;
    if (!this.connectSettings) throw new Error(He);
    if (!n) throw new Error(or);
    const s = (a = (o = t[t.length - 1]) == null ? void 0 : o[h]) == null ? void 0 : a.trim(), r = this.createFormDataBody(this.rawBody, n[0], s);
    D.tempRemoveContentHeader(
      this.connectSettings,
      ge.request.bind(this, this, r, e),
      !1
    );
  }
  async extractResultData(e) {
    if (e.message) throw e.message;
    const t = e.artifacts.map((n) => ({ [T]: `${On}${n.base64}`, [E]: W }));
    return { [b]: t };
  }
}
class Hl extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.translation, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "Insert text to translate", "Helsinki-NLP/opus-tatoeba-en-ja", t, n);
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.translation_text) || "" };
  }
}
class ei extends xi {
  constructor(e) {
    var r;
    const t = C(e.directConnection), n = t.stabilityAI;
    super(e, Si(), vi, n), this.url = "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image", this.textInputPlaceholderText = "Describe an image";
    const s = (r = t.stabilityAI) == null ? void 0 : r.textToImage;
    typeof s == "object" && (s.engine_id && (this.url = `https://api.stability.ai/v1/generation/${s.engine_id}/text-to-image`), s.weight !== void 0 && s.weight !== null && (this._imageWeight = s.weight), ei.cleanConfig(s), Object.assign(this.rawBody, s)), this.canSendMessage = ei.canSendTextMessage;
  }
  static cleanConfig(e) {
    delete e.engine_id, delete e.weight;
  }
  static canSendTextMessage(e) {
    return !!(e && e.trim() !== "");
  }
  preprocessBody(e, t) {
    const n = t[t.length - 1][h], s = C(e), r = { [h]: n };
    return this._imageWeight && (r.weight = this._imageWeight), s.text_prompts = [r], s;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    if (e.message) throw e.message;
    const t = e.artifacts.map((n) => ({ [T]: `${On}${n.base64}`, [E]: W }));
    return { [b]: t };
  }
}
class jl extends Pt {
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.huggingFace) == null ? void 0 : r.fillMask, n = (o = e.directConnection) == null ? void 0 : o.huggingFace;
    super(e, "The goal of life is [MASK].", "bert-base-uncased", t, n), this.permittedErrorPrefixes = [ar, "No mask_token"];
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f];
    return { [h]: ((t = e[0]) == null ? void 0 : t.sequence) || "" };
  }
}
const pr = (i) => ({
  [q]: te,
  [he]: `${Ce}${i}`
}), $l = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].message === yi ? n(pe) : n(Ue) : t(e);
}, fr = () => be(
  "https://open.bigmodel.cn/api/paas/v4/models",
  ue,
  $l
);
class ql extends k {
  constructor(e) {
    var r, o, a;
    const t = C(e.directConnection), n = t.bigModel;
    super(e, fr(), pr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("BigModel"), this.keyHelpUrl = "https://open.bigmodel.cn/usercenter/apikeys", this.url = "https://open.bigmodel.cn/api/paas/v4/audio/speech", this.permittedErrorPrefixes = [he, Te];
    const s = (r = t.bigModel) == null ? void 0 : r.textToSpeech;
    typeof s === U && (this.cleanConfig(s), Object.assign(this.rawBody, s)), (o = this.rawBody).model ?? (o.model = "cogtts"), (a = this.rawBody).voice ?? (a.voice = "tongtong");
  }
  cleanConfig(e) {
    delete e.key;
  }
  preprocessBody(e, t) {
    const n = C(e), s = t[t.length - 1];
    return n.input = (s == null ? void 0 : s[h]) || "", n;
  }
  async callServiceAPI(e, t) {
    return this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    const t = new Blob([e], { [E]: "audio/mpeg" }), n = URL.createObjectURL(t);
    return { [b]: [{ [T]: n, [E]: $ }] };
  }
}
const mr = (i) => ({
  [q]: te,
  [he]: `${Ce}${i}`
}), Gl = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].message === yi ? n(pe) : n(Ue) : t(e);
}, gr = () => be("https://api.together.xyz/v1/models", ue, Gl);
class zl extends k {
  constructor(e) {
    var r, o, a;
    const t = C(e.directConnection), n = t.together;
    super(e, gr(), mr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Together AI"), this.keyHelpUrl = "https://api.together.xyz/settings/api-keys", this.url = "https://api.together.xyz/v1/audio/speech", this.permittedErrorPrefixes = [it, Te];
    const s = (r = t.together) == null ? void 0 : r.textToSpeech;
    typeof s === U && this.completeConfig(s), (o = this.rawBody).model ?? (o.model = "cartesia/sonic"), (a = this.rawBody).voice ?? (a.voice = "laidback woman");
  }
  preprocessBody(e, t) {
    const n = C(e), s = t[t.length - 1];
    return n.input = (s == null ? void 0 : s[h]) || "", n;
  }
  async callServiceAPI(e, t) {
    return this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    const t = new Blob([e], { [E]: "audio/mpeg" }), n = URL.createObjectURL(t);
    return { [b]: [{ [T]: n, [E]: $ }] };
  }
}
const Ze = "https://api.openai.com/v1/", Nn = "https://platform.openai.com/account/api-keys", zi = "input_text", no = "input_image", so = "output_text", Ni = "image_generation_call", Jo = "function_call_output", Hn = "response", Bn = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Qo = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].code === "invalid_api_key" ? n(pe) : n(Ue) : t(e);
}, Dn = () => be(`${Ze}models`, ue, Qo), $t = async (i, e, t, n = !0) => {
  const { connectSettings: s, deepChat: r, completionsHandlers: o, messages: a } = i;
  s.method = t;
  const c = { body: e, headers: s.headers }, { body: l, headers: d, error: p } = await D.processRequestInterceptor(r, c), { onFinish: u } = o;
  if (p && a) return D.onInterceptorError(a, p, u);
  const g = await D.fetch(i, d, n, l).then(
    (y) => D.processResponseByType(y)
  );
  if (g[f]) throw g[f].message;
  return g;
}, Ke = class Ke {
  static async storeFiles(e, t, n, s) {
    const r = e.connectSettings.headers;
    if (!r) return;
    e.url = s;
    const o = r[q];
    delete r[q];
    const a = n.map(async (c) => {
      const l = new FormData();
      return l.append("purpose", "assistants"), l.append("file", c), new Promise((d) => {
        d($t(e, l, ye, !1));
      });
    });
    try {
      const c = (await Promise.all(a)).map((l) => ({ id: l.id, name: l.filename }));
      return r[q] = o, c;
    } catch (c) {
      throw r[q] = o, D.displayError(t, c), e.completionsHandlers.onFinish(), c;
    }
  }
  static getType(e, t) {
    const { path: n } = e[t];
    return !n || n.endsWith("png") ? W : on;
  }
  static async getFiles(e, t, n, s) {
    const r = t.map(({ fileId: c }) => (e.url = `${n}${c}${s}`, new Promise((l) => {
      l($t(e, void 0, "GET", !1));
    }))), a = (await Promise.all(r)).map((c, l) => new Promise((d) => {
      const p = new FileReader();
      p.readAsDataURL(c), p.onload = (u) => {
        d({
          [T]: u.target.result,
          name: t[l].name,
          [E]: Ke.getType(t, l)
        });
      };
    }));
    return await Promise.all(a);
  }
  static getFileName(e) {
    const t = e.split("/");
    return t[t.length - 1];
  }
  // prettier-ignore
  static async getFilesAndNewText(e, t, n, s, r) {
    var l, d;
    let o;
    const { getFilesPrefix: a, getFilesPostfix: c } = n;
    return t.length > 0 && (o = await Ke.getFiles(e, t, a, c), (l = r == null ? void 0 : r[h]) != null && l.value && o.forEach((p, u) => {
      var y;
      if (!p[T]) return;
      const g = t[u].path;
      (y = r == null ? void 0 : r[h]) != null && y.value && g && (r[h].value = r[h].value.replace(g, p[T]));
    })), (d = r == null ? void 0 : r[h]) != null && d.value ? { [h]: r[h].value, [x]: s } : { [b]: o, [x]: s };
  }
  // Noticed an issue where text contains a sandbox hyperlink to a csv, but no annotation provided
  // To reproduce use the following text:
  // give example data for a csv and create a suitable bar chart for it with a link
  // Don't think it can be fixed and it is something on OpenAI side of things
  // prettier-ignore
  static getFileDetails(e, t) {
    var s;
    const n = [];
    return (s = t == null ? void 0 : t[h]) != null && s.value && e.content.forEach((r) => {
      var o, a;
      (a = (o = r[h]) == null ? void 0 : o.annotations) == null || a.forEach((c) => {
        var l;
        c[h] && c[h].startsWith("sandbox:") && ((l = c.file_path) != null && l.file_id) && n.push({
          path: c[h],
          fileId: c.file_path.file_id,
          name: Ke.getFileName(c[h])
        });
      });
    }), t != null && t.image_file && n.push({
      fileId: t.image_file.file_id
    }), n;
  }
  // prettier-ignore
  static async getFilesAndText(e, t, n, s) {
    const r = Ke.getFileDetails(t, s);
    return await Ke.getFilesAndNewText(e, r, n, t.role, s);
  }
  static parseResult(e, t) {
    let n = [];
    if (t)
      n = e.data;
    else
      for (let s = 0; s < e.data.length; s += 1) {
        const r = e.data[s];
        if (r.role === gt)
          n.push(r);
        else
          break;
      }
    return n.reverse();
  }
  // test this using this prompt and it should give 2 text mesages and a file:
  // "give example data for a csv and create a suitable bar chart"
  static parseMessages(e, t, n) {
    const s = [];
    return t.forEach(async (r) => {
      r.content.filter((o) => !!o[h] || !!o.image_file).sort((o) => o[h] ? -1 : o.image_file ? 1 : 0).forEach(async (o) => {
        s.push(Ke.getFilesAndText(e, r, n, o));
      });
    }), Promise.all(s);
  }
  static async processStreamMessages(e, t, n) {
    return Ke.parseMessages(e, [{ content: t, role: gt }], n);
  }
  // prettier-ignore
  static async processAPIMessages(e, t, n, s) {
    const r = Ke.parseResult(t, n);
    return Ke.parseMessages(e, r, s);
  }
};
Ke.FILES_WITH_TEXT_ERROR = "content with type `text` must have `text` values", Ke.FUNCTION_TOOL_RESP_ERROR = `Response must contain an array of strings for each individual function/tool_call, see ${Z}directConnection/OpenAI/#assistant-functions.`;
let St = Ke;
const Ht = class Ht extends k {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    if (super(e, s, r, o), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = Nn, this.url = "", this.permittedErrorPrefixes = [Ps, "Please send text", Cs.FAILED_ERROR_MESSAGE], this.shouldFetchHistory = !1, this._searchedForThreadId = !1, this._config = {}, this._newAssistantDetails = { model: "gpt-4" }, this._waitingForStreamResponse = !1, this._isSSEStream = !1, this.urlSegments = n, typeof t == "object") {
      this._config = t;
      const { new_assistant: a, thread_id: c, load_thread_history: l } = this._config;
      Object.assign(this._newAssistantDetails, a), c && (this.sessionId = c), l && (this.shouldFetchHistory = !0);
    }
    this.maxMessages = 1, this._isSSEStream = !!(this.stream && (typeof this.stream != "object" || !this.stream.simulation));
  }
  async fetchHistoryFunc() {
    setTimeout(() => this.deepChat.disableSubmitButton(), 2);
    try {
      const e = await this.getThreadMessages(this.sessionId, !0);
      return this.deepChat.disableSubmitButton(!1), e;
    } catch {
      return [{ [f]: Uo }];
    }
  }
  static processImageMessage(e, t) {
    const n = t == null ? void 0 : t.filter((s) => Se.isImageFileExtension(s.name)).map((s) => ({ [E]: "image_file", image_file: { file_id: s.id } }));
    if (n && n.length > 0)
      return e[h] && e[h].length > 0 && n.push({ [E]: h, [h]: e[h] }), { content: n, [x]: F };
  }
  static processAttachmentsMessage(e, t, n) {
    return { attachments: t.map((r) => ({ tools: [{ [E]: n }], file_id: r.id })), content: [{ [E]: h, [h]: e[h] }], [x]: F };
  }
  processMessage(e, t) {
    const n = this.totalMessagesMaxCharLength || -1, s = kn.getCharacterLimitMessages(e, n)[0];
    if (t && t.length > 0) {
      let r = this.filesToolType;
      if (typeof this.filesToolType == "function") {
        const a = this.filesToolType(t.map(({ name: c }) => c));
        a === "code_interpreter" || a === "file_search" || a === ee ? r = a : (console[f](`Tool type "${a}" is not valid`), console[f]('Expected "code_interpreter" or "file_search" or "images". Going to default to "images"'));
      }
      if (r === "file_search")
        return Ht.processAttachmentsMessage(s, t, "file_search");
      if (r === "code_interpreter")
        return Ht.processAttachmentsMessage(s, t, "code_interpreter");
      if (t.find(({ name: a }) => !Se.isImageFileExtension(a)))
        console[f]("The uploaded files contained a non-image file"), console[f](
          'Make sure only images can be uploaded or define a "code_interpreter" or "file_search" value in the "files_tool_type" property'
        ), console.warn(
          'Make sure your existing assistant supports these "tools" or specify them in the "new_assistant" property'
        );
      else {
        const a = Ht.processImageMessage(s, t);
        if (a) return a;
      }
    }
    return { content: s[h] || "", [x]: F };
  }
  createNewThreadMessages(e, t, n) {
    const s = C(e), r = this.processMessage(t, n);
    return s.thread = { messages: [r] }, s;
  }
  callService(e, t, n) {
    if (this.messages = e, this.sessionId) {
      this.url = `${this.urlSegments.threadsPrefix}/${this.sessionId}/messages${this.urlSegments.createMessagePostfix}`;
      const s = this.processMessage(t, n);
      ge.request(this, s, e);
    } else {
      this.url = `${this.urlSegments.threadsPrefix}/runs${this.urlSegments.threadsPosfix}`;
      const s = this.createNewThreadMessages(this.rawBody, t, n);
      this._isSSEStream ? this.createStreamRun(s) : ge.request(this, s, e);
    }
  }
  async callServiceAPI(e, t, n) {
    var r;
    if (this._waitingForStreamResponse = !1, !this.connectSettings) throw new Error(He);
    (r = this.rawBody).assistant_id ?? (r.assistant_id = this._config.assistant_id || await this.createNewAssistant()), this._searchedForThreadId || this.searchPreviousMessagesForThreadId(e.messageToElements);
    const s = n ? await St.storeFiles(this, e, n, this.urlSegments.storeFiles) : void 0;
    this.connectSettings.method = ye, this.callService(e, t, s);
  }
  async createNewAssistant() {
    try {
      this.url = this.urlSegments.newAssistantUrl;
      const e = await $t(this, C(this._newAssistantDetails), ye);
      return this._config.assistant_id = e.id, this._config.assistant_id;
    } catch (e) {
      console[f](e), console[f]("Failed to create a new assistant");
    }
  }
  searchPreviousMessagesForThreadId(e) {
    const t = e.find(([n]) => n._sessionId);
    t && (this.sessionId = t[0]._sessionId), this._searchedForThreadId = !0;
  }
  async extractResultData(e) {
    var s;
    if (this._waitingForStreamResponse || this._isSSEStream && this.sessionId)
      return await this.handleStream(e);
    if (e[f])
      throw e[f].message.startsWith(St.FILES_WITH_TEXT_ERROR) ? Error("Please send text with your file(s)") : e[f].message;
    this.asyncCallInProgress = !0, await this.assignThreadAndRun(e);
    const t = `${this.urlSegments.threadsPrefix}/${this.sessionId}/runs/${this.run_id}${this.urlSegments.threadsPosfix}`, n = { method: ue, headers: (s = this.connectSettings) == null ? void 0 : s.headers };
    return ge.executePollRequest(this, t, n, this.messages), { [h]: "" };
  }
  async assignThreadAndRun(e) {
    if (this.sessionId) {
      this.url = `${this.urlSegments.threadsPrefix}/${this.sessionId}/runs${this.urlSegments.threadsPosfix}`;
      const t = await $t(this, C(this.rawBody), ye);
      this.run_id = t.id;
    } else
      this.sessionId = e.thread_id, this.run_id = e.id, this.updateSessionId(this.sessionId);
  }
  async getThreadMessages(e, t = !1) {
    var s, r;
    this.url = `${this.urlSegments.threadsPrefix}/${e}/messages?${this.urlSegments.listMessagesPostfix}`;
    let n = await $t(this, {}, ue);
    return !t && this.deepChat.responseInterceptor && (n = await ((r = (s = this.deepChat).responseInterceptor) == null ? void 0 : r.call(s, n))), St.processAPIMessages(this, n, t, this.urlSegments);
  }
  async extractPollResultData(e) {
    var r;
    const { status: t, required_action: n } = e;
    if (t === "queued" || t === "in_progress") return { timeoutMS: Ht.POLLING_TIMEOUT_MS };
    if (t === cr && this.messages) {
      const o = await this.getThreadMessages(e.thread_id), { text: a, files: c } = o.shift();
      return setTimeout(() => {
        o.forEach((l) => this.deepChat.addMessage(l));
      }), { text: a, _sessionId: this.sessionId, [b]: c };
    }
    const s = (r = n == null ? void 0 : n.submit_tool_outputs) == null ? void 0 : r.tool_calls;
    if (t === "requires_action" && s)
      return await this.handleTools(s);
    throw Error(`Thread run status: ${t}`);
  }
  // prettier-ignore
  async handleTools(e) {
    if (!this._functionHandlerI)
      throw Error(Gt);
    const t = e.map((c) => ({ name: c.function.name, arguments: c.function.arguments })), n = await this._functionHandlerI(t);
    if (!Array.isArray(n) || e.length !== n.length)
      throw Error(St.FUNCTION_TOOL_RESP_ERROR);
    const s = await Promise.all(n);
    if (s.find((c) => typeof c !== Ee))
      throw Error(St.FUNCTION_TOOL_RESP_ERROR);
    const r = s.map((c, l) => ({ tool_call_id: e[l].id, output: c })), o = `${this.urlSegments.threadsPrefix}/${this.sessionId}`, a = `/runs/${this.run_id}/submit_tool_outputs${this.urlSegments.threadsPosfix}`;
    return this.url = `${o}${a}`, this._isSSEStream ? await this.createStreamRun({ tool_outputs: r }) : await $t(this, { tool_outputs: r }, ye), { timeoutMS: Ht.POLLING_TIMEOUT_MS };
  }
  async handleStream(e) {
    var n, s;
    const t = (s = (n = e.required_action) == null ? void 0 : n.submit_tool_outputs) == null ? void 0 : s.tool_calls;
    if (e.status === "requires_action" && t)
      return this.run_id = e.id, await this.handleTools(t);
    if (this._waitingForStreamResponse)
      return this.parseStreamResult(e);
    if (this._isSSEStream && this.sessionId) {
      this.asyncCallInProgress = !0, this.url = `${this.urlSegments.threadsPrefix}/${this.sessionId}/runs${this.urlSegments.threadsPosfix}`;
      const r = C(this.rawBody);
      this.createStreamRun(r);
    }
    return { [h]: "" };
  }
  // prettier-ignore
  async parseStreamResult(e) {
    var t, n, s, r, o;
    if (e.content && e.content.length > 0 && this.messages) {
      const a = e.content.find((c) => c[h]);
      if ((t = a == null ? void 0 : a[h]) != null && t.annotations && a[h].annotations.length > 0) {
        const c = e.content.find((d) => !!d[h]) || e.content[0], l = St.getFilesAndText.bind(
          this,
          this,
          { [x]: gt, content: e.content },
          this.urlSegments,
          c
        );
        return (n = this._messageStream) == null || n.endStreamAfterFileDownloaded(this.messages, l), { [h]: "" };
      }
    }
    if ((s = e.delta) != null && s.content) {
      if (e.delta.content.length > 1) {
        const a = e.delta.content.find((c) => c[h]);
        if ((r = a == null ? void 0 : a[h]) != null && r.annotations && a[h].annotations.length === 0) {
          const c = await St.processStreamMessages(this, e.delta.content, this.urlSegments);
          return { [h]: c[0][h], [b]: c[1][b] };
        }
      }
      return { [h]: (o = e.delta.content[0][h]) == null ? void 0 : o.value };
    }
    return !this.sessionId && e.thread_id && (this.sessionId = e.thread_id), { [h]: "" };
  }
  // https://platform.openai.com/docs/api-reference/assistants-streaming
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createStreamRun(e) {
    e.stream = !0, this._waitingForStreamResponse = !0, this._messageStream = await V.request(this, e, this.messages, !0, !0);
  }
};
Ht.POLLING_TIMEOUT_MS = 500;
let ti = Ht;
class br extends ti {
  constructor(e) {
    var o, a, c, l, d;
    const t = C(e.directConnection), n = t.openAI, s = (o = t.openAI) == null ? void 0 : o.assistant, r = br.buildUrlSegments(s);
    if (super(e, s, r, Dn(), Bn, n), (a = this.connectSettings).headers ?? (a.headers = {}), (c = this.connectSettings.headers)["OpenAI-Beta"] ?? (c["OpenAI-Beta"] = "assistants=v2"), this.shouldFetchHistory && this.sessionId && (this.fetchHistory = this.fetchHistoryFunc.bind(this)), typeof s === U) {
      const { function_handler: p, files_tool_type: u } = (d = (l = e.directConnection) == null ? void 0 : l.openAI) == null ? void 0 : d.assistant;
      p && (this._functionHandlerI = p), u && (this.filesToolType = u);
    }
  }
  static buildUrlSegments(e) {
    const t = typeof e == "object" && e.custom_base_url || Ze;
    return {
      threadsPrefix: `${t}/threads`,
      threadsPosfix: "",
      newAssistantUrl: `${t}/assistants`,
      createMessagePostfix: "",
      listMessagesPostfix: "order=desc",
      storeFiles: `${t}/${b}`,
      getFilesPrefix: `${t}/${b}/`,
      getFilesPostfix: "/content"
    };
  }
}
const ni = `Please define the Azure URL Details. [More Information](${Z}directConnection/Azure)`, ea = (i) => ({
  "api-key": i,
  [q]: te
}), ta = (i) => be(
  `${i.endpoint}/openai/models?api-version=${i.version}`,
  ue,
  Qo
), na = (i) => {
  const { endpoint: e, version: t, deploymentId: n } = i;
  return e && t && n;
}, xn = class xn extends ti {
  constructor(e) {
    var l, d, p, u, g, y, _, S;
    const t = C(e.directConnection), n = t.azure, s = (l = t.azure) == null ? void 0 : l.openAI, r = (s == null ? void 0 : s.urlDetails) || {}, o = `${(d = s == null ? void 0 : s.urlDetails) == null ? void 0 : d.endpoint}/openai/`, a = `?api-version=${(p = s == null ? void 0 : s.urlDetails) == null ? void 0 : p.version}`, c = {
      threadsPrefix: `${o}${xn.THREAD_RESOURCE}`,
      threadsPosfix: a,
      newAssistantUrl: `${o}${xn.NEW_ASSISTANT_RESOURCE}${a}`,
      createMessagePostfix: a,
      listMessagesPostfix: `order=desc&api-version=${(u = s == null ? void 0 : s.urlDetails) == null ? void 0 : u.version}`,
      storeFiles: `${o}${b}${a}`,
      getFilesPrefix: `${o}${b}/`,
      getFilesPostfix: `/content${a}`
    };
    if (super(
      e,
      s == null ? void 0 : s.assistant,
      c,
      ta(r),
      ea,
      n
    ), this.permittedErrorPrefixes = [ni], this.insertKeyPlaceholderText = this.genereteAPIKeyName("Azure OpenAI"), this.keyHelpUrl = "https://learn.microsoft.com/en-us/answers/questions/1193991/how-to-get-the-value-of-openai-api-key", this.isTextInputDisabled = !1, typeof (s == null ? void 0 : s.assistant) === U) {
      const { function_handler: M, files_tool_type: K } = (_ = (y = (g = e.directConnection) == null ? void 0 : g.azure) == null ? void 0 : y.openAI) == null ? void 0 : _.assistant;
      M && (this._functionHandlerI = M), K && (this.filesToolType = K);
    }
    na(r) ? (S = this.connectSettings).headers ?? (S.headers = {}) : (this.isTextInputDisabled = !0, this.canSendMessage = () => !1, setTimeout(() => {
      e.addMessage({ [f]: ni });
    }));
  }
};
xn.THREAD_RESOURCE = "threads", xn.NEW_ASSISTANT_RESOURCE = "assistants";
let Vi = xn;
const Vl = "sts-session-started", Kl = "sts-session-stopped";
class me {
  static addAttributes(e) {
    e[x] = "button", e.setAttribute("tabindex", "0");
  }
  static addAriaBusy(e) {
    e.setAttribute("aria-busy", "true");
  }
  static removeAriaBusy(e) {
    e.removeAttribute("aria-busy");
  }
  static addAriaDisabled(e) {
    e.setAttribute(`aria-${j}`, "true");
  }
  static removeAriaDisabled(e) {
    e.removeAttribute(`aria-${j}`);
  }
  static removeAriaAttributes(e) {
    me.removeAriaBusy(e), me.removeAriaDisabled(e);
  }
}
const sa = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg height="1.4em" width="1.4em" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 490.9 490.9" xml:space="preserve">
	<g>
		<g>
			<path d="M245.5,322.9c53,0,96.2-43.2,96.2-96.2V96.2c0-53-43.2-96.2-96.2-96.2s-96.2,43.2-96.2,96.2v130.5
				C149.3,279.8,192.5,322.9,245.5,322.9z M173.8,96.2c0-39.5,32.2-71.7,71.7-71.7s71.7,32.2,71.7,71.7v130.5
				c0,39.5-32.2,71.7-71.7,71.7s-71.7-32.2-71.7-71.7V96.2z"/>
			<path d="M94.4,214.5c-6.8,0-12.3,5.5-12.3,12.3c0,85.9,66.7,156.6,151.1,162.8v76.7h-63.9c-6.8,0-12.3,5.5-12.3,12.3
				s5.5,12.3,12.3,12.3h152.3c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3h-63.9v-76.7c84.4-6.3,151.1-76.9,151.1-162.8
				c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3c0,76.6-62.3,138.9-138.9,138.9s-138.9-62.3-138.9-138.9
				C106.6,220,101.2,214.5,94.4,214.5z"/>
		</g>
	</g>
</svg>
`, We = class We {
  static createTextElement(e) {
    const t = A();
    return t[m].add(We.INPUT_BUTTON_INNER_TEXT_CLASS), t.innerText = e, t;
  }
  static tryAddSVGElement(e, t, n, s) {
    n ? e.push(kt.createSVGElement(n)) : n !== "" && s && e.push(t);
  }
  static createCustomElements(e, t, n) {
    var c, l;
    const s = n == null ? void 0 : n[e], r = (c = s == null ? void 0 : s[h]) == null ? void 0 : c.content, o = (l = s == null ? void 0 : s[G]) == null ? void 0 : l.content, a = [];
    return We.tryAddSVGElement(a, t, o, r), r && a.push(We.createTextElement(r)), a.length > 0 ? a : void 0;
  }
  static reassignClassBasedOnChildren(e, t) {
    e[m].remove(
      We.INPUT_BUTTON_SVG_CLASS,
      We.INPUT_BUTTON_SVG_TEXT_CLASS
    ), t.find((n) => n[m].contains(We.INPUT_BUTTON_INNER_TEXT_CLASS)) ? t.length > 1 && e[m].add(We.INPUT_BUTTON_SVG_TEXT_CLASS) : e[m].add(We.INPUT_BUTTON_SVG_CLASS);
  }
};
We.INPUT_BUTTON_SVG_TEXT_CLASS = "input-button-svg-text", We.INPUT_BUTTON_INNER_TEXT_CLASS = "text-button", We.INPUT_BUTTON_SVG_CLASS = "input-button-svg";
let Et = We;
class us {
  static parseSVGTextElements(e) {
    return {
      [G]: e.find((t) => t.tagName.toLowerCase() === G),
      [h]: e.find((t) => t.tagName.toLowerCase() === "div")
    };
  }
}
class xe {
  static unsetAllCSS(e, t) {
    var r, o;
    t.container && de.unsetAllCSSMouseStates(e, t.container);
    const { svg: n, text: s } = us.parseSVGTextElements(Array.from(e.children));
    (r = t[G]) != null && r[R] && n && de.unsetAllCSSMouseStates(n, t[G][R]), (o = t[h]) != null && o[R] && s && de.unsetAllCSSMouseStates(s, t[h][R]);
  }
  static unsetActionCSS(e, t) {
    var r, o;
    t.container && de.unsetActivityCSSMouseStates(e, t.container);
    const { svg: n, text: s } = us.parseSVGTextElements(Array.from(e.children));
    (r = t[G]) != null && r[R] && n && de.unsetActivityCSSMouseStates(n, t[G][R]), (o = t[h]) != null && o[R] && s && de.unsetActivityCSSMouseStates(s, t[h][R]);
  }
  static setElementsCSS(e, t, n) {
    var o, a, c, l, d;
    Object.assign(e[v], (o = t.container) == null ? void 0 : o[n]);
    const { svg: s, text: r } = us.parseSVGTextElements(Array.from(e.children));
    s && Object.assign(s[v], (c = (a = t[G]) == null ? void 0 : a[R]) == null ? void 0 : c[n]), r && Object.assign(r[v], (d = (l = t[h]) == null ? void 0 : l[R]) == null ? void 0 : d[n]);
  }
  static setElementCssUpToState(e, t, n) {
    xe.setElementsCSS(e, t, w), n !== w && (xe.setElementsCSS(e, t, De), n !== De && xe.setElementsCSS(e, t, J));
  }
}
class gn {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    this._mouseState = { state: "default" }, this.isCustom = !1, me.addAttributes(e), this.elementRef = e, this[G] = kt.createSVGElement(t), this.customStyles = r, this.position = le.processPosition(n), this._tooltipSettings = s, this.dropupText = o;
  }
  buttonMouseLeave(e) {
    var t;
    this._mouseState.state = w, ((t = this._activeTooltip) == null ? void 0 : t.element[v].visibility) === "visible" && this._tooltipSettings && ut.hide(this._activeTooltip, this._tooltipSettings), e && (xe.unsetAllCSS(this.elementRef, e), xe.setElementsCSS(this.elementRef, e, w));
  }
  buttonMouseEnter(e) {
    var t;
    this._mouseState.state = De, this._tooltipSettings && (this._activeTooltip = ut.display(this.elementRef, this._tooltipSettings, (t = this._activeTooltip) == null ? void 0 : t.element)), e && xe.setElementsCSS(this.elementRef, e, De);
  }
  buttonMouseUp(e) {
    e && xe.unsetActionCSS(this.elementRef, e), this.buttonMouseEnter(e);
  }
  buttonMouseDown(e) {
    this._mouseState.state = J, e && xe.setElementsCSS(this.elementRef, e, J);
  }
  // be careful not to use onclick as that is used for button functionality
  setEvents(e) {
    this.elementRef.onmousedown = this.buttonMouseDown.bind(this, e), this.elementRef.onmouseup = this.buttonMouseUp.bind(this, e), this.elementRef.onmouseenter = this.buttonMouseEnter.bind(this, e), this.elementRef.onmouseleave = this.buttonMouseLeave.bind(this, e);
  }
  unsetCustomStateStyles(e) {
    if (this.customStyles)
      for (let t = 0; t < e.length; t += 1) {
        const n = e[t], s = n && this.customStyles[n];
        s && xe.unsetActionCSS(this.elementRef, s);
      }
  }
  reapplyStateStyle(e, t) {
    if (!this.customStyles) return;
    t && this.unsetCustomStateStyles(t);
    const n = this.customStyles[e];
    n && xe.setElementCssUpToState(this.elementRef, n, this._mouseState.state), this.setEvents(n);
  }
  changeElementsByState(e) {
    this.elementRef.replaceChildren(...e), Et.reassignClassBasedOnChildren(this.elementRef, e);
  }
  buildDefaultIconElement(e) {
    const t = this[G].cloneNode(!0);
    return t.id = e, [t];
  }
  createInnerElements(e, t, n) {
    const s = Et.createCustomElements(t, this[G], n);
    if (s && s.length > 0) {
      if (this.position === et) {
        const r = s[0].cloneNode(!0);
        r.id = s[0] === this[G] ? e : "dropup-menu-item-icon-element-custom", s[0] = r;
      }
      return s;
    }
    return this.buildDefaultIconElement(e);
  }
}
const mi = class mi extends gn {
  constructor(e) {
    var n, s;
    const t = ((s = (n = e == null ? void 0 : e[w]) == null ? void 0 : n[G]) == null ? void 0 : s.content) || mi.EMPTY_SVG;
    super(A(), t, void 0, void 0, e), this.isActive = !1, this._innerElements = this.createInnerElementsForStates(this.customStyles), this.changeToDefault();
  }
  createInnerElementsForStates(e) {
    return {
      [w]: this.createInnerButtonElements(w, e),
      [H]: this.createInnerButtonElements(H, e),
      [Nt]: this.createInnerButtonElements(Nt, e)
    };
  }
  createInnerButtonElements(e, t) {
    return Et.createCustomElements(e, this[G], t) || [this[G]];
  }
  changeState(e) {
    this.changeElementsByState(e), this.elementRef[m].replace(Et.INPUT_BUTTON_SVG_CLASS, "deep-chat-openai-realtime-button");
  }
  changeToActive() {
    this.changeState(this._innerElements[H]), this.reapplyStateStyle(H, [Nt, w]), this.isActive = !0;
  }
  changeToDefault() {
    var e, t, n, s;
    this.changeState(this._innerElements[w]), (e = this.customStyles) != null && e[H] && xe.unsetAllCSS(this.elementRef, (t = this.customStyles) == null ? void 0 : t[H]), (n = this.customStyles) != null && n[Nt] && xe.unsetAllCSS(this.elementRef, (s = this.customStyles) == null ? void 0 : s[Nt]), this.reapplyStateStyle(w, [H, Nt]), this.isActive = !1;
  }
  changeToUnavailable() {
    var e, t, n, s;
    this.changeState(this._innerElements[Nt]), (e = this.customStyles) != null && e[H] && xe.unsetAllCSS(this.elementRef, (t = this.customStyles) == null ? void 0 : t[H]), (n = this.customStyles) != null && n[w] && xe.unsetAllCSS(this.elementRef, (s = this.customStyles) == null ? void 0 : s[w]), this.reapplyStateStyle(Nt, [w, H]), this.isActive = !1;
  }
};
mi.EMPTY_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"></svg>';
let si = mi;
class Pe {
  static setPropertyValueIfDoesNotExist(e, t, n) {
    const s = t[0];
    t.length === 1 ? e[s] ?? (e[s] = n) : (e[s] ?? (e[s] = {}), t.shift(), Pe.setPropertyValueIfDoesNotExist(e[s], t, n));
  }
  static setPropertyValue(e, t, n) {
    const s = t[0];
    t.length === 1 ? e[s] = n : (e[s] ?? (e[s] = {}), t.shift(), Pe.setPropertyValue(e[s], t, n));
  }
  static getObjectValue(e, t) {
    const n = t[0], s = e[n];
    return s === void 0 || t.length === 1 ? s : Pe.getObjectValue(s, t.slice(1));
  }
  static overwritePropertyObjectFromAnother(e, t, n) {
    const s = Pe.getObjectValue(t, n);
    if (s) {
      const r = { ...s, ...Pe.getObjectValue(e, n) || {} };
      Pe.setPropertyValue(e, n, r);
    }
  }
  static isJson(e) {
    try {
      return ce(e), !0;
    } catch {
      return !1;
    }
  }
  // prettier-ignore
  static assignPropertyFromOneToAnother(e, t, n) {
    t[e] ?? (t[e] = {}), Object.assign(t[e], n == null ? void 0 : n[e]);
  }
}
const ia = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>
</svg>`, Ki = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>
</svg>`, Q = class Q extends k {
  constructor(e) {
    var r, o, a, c, l;
    const t = C(e.directConnection), n = Q.getKey(e);
    super(e, Dn(), Bn, { key: n }), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = Nn, this._microphoneButton = null, this._toggleButton = null, this._errorElement = null, this._loadingElement = null, this._pc = null, this._mediaStream = null, this._isMuted = !1;
    const s = (r = t.openAI) == null ? void 0 : r.realtime;
    if (typeof s === U) {
      this._avatarConfig = s.avatar, this._ephemeralKey = s.ephemeralKey, this._errorConfig = s[f], this._loadingConfig = s.loading, Object.assign(this.rawBody, s.config);
      const d = (a = (o = e.directConnection) == null ? void 0 : o.openAI) == null ? void 0 : a.realtime, { function_handler: p } = d.config || {};
      p && (this._functionHandlerI = p), this._events = s.events, d.methods = this.generateMethods(), this.setInputAudioTranscribe(e, (c = d.config) == null ? void 0 : c.input_audio_transcription);
    }
    (l = this.rawBody).model ?? (l.model = "gpt-4o-realtime-preview-2025-06-03"), this._avatarConfig = Q.buildAvatarConfig(s), this._buttonsConfig = Q.buildButtonsConfig(s), this._avatarEl = Q.createAvatar(this._avatarConfig), this._containerEl = this.createContainer(), this._deepChat = e;
  }
  static getKey(e) {
    const t = e.directConnection.openAI;
    if (t != null && t.key) return t.key;
    const n = t == null ? void 0 : t.realtime;
    if (typeof n == "object" && (n.ephemeralKey || n.fetchEphemeralKey))
      return "placeholder";
  }
  // https://community.openai.com/t/unable-to-access-user-audio-transcript-in-realtime-api/1001570/3
  setInputAudioTranscribe(e, t) {
    if (t) {
      const n = "whisper-1";
      typeof t == "object" ? this.rawBody.input_audio_transcription = {
        model: t.model || n,
        language: t.language,
        prompt: t.prompt
      } : this.rawBody.input_audio_transcription = {
        model: n
      };
    } else e.onMessage && (console.warn("To get user audio transcription, set `input_audio_transcription` in the `realtime` config."), console.warn(`See: ${Z}directConnection/OpenAI/OpenAIRealtime#OpenAIRealtimeConfig`));
  }
  // called after API key was inserted
  setUpView(e, t) {
    e[v].display = "none", t.appendChild(this._containerEl), this.setup();
  }
  async setup() {
    var s;
    const e = (s = this._deepChat.directConnection) == null ? void 0 : s.openAI;
    if (!e) return;
    const t = e == null ? void 0 : e.realtime;
    if (typeof t != "object" || !t.autoStart && !t.autoFetchEphemeralKey) return;
    const n = this.key || e.key;
    (t.fetchEphemeralKey || n) && t.autoStart && (this.changeToUnavailable(), this.displayLoading()), this.fetchEphemeralKey(t.autoStart);
  }
  async fetchEphemeralKey(e) {
    var o;
    const t = (o = this._deepChat.directConnection) == null ? void 0 : o.openAI, n = typeof (t == null ? void 0 : t.realtime) == "object" ? t == null ? void 0 : t.realtime.fetchEphemeralKey : void 0, s = t == null ? void 0 : t.realtime, r = this.key || t.key;
    if (typeof s == "object") {
      if (!this._ephemeralKey)
        try {
          if (n) {
            const a = n();
            a.then && (this._retrievingEphemeralKey = a), this._ephemeralKey = await a;
          } else r && (this._retrievingEphemeralKey = this.getEphemeralKey(r), this._ephemeralKey = await this._retrievingEphemeralKey);
        } catch (a) {
          this.displayFailedToRetrieveEphemeralKey(a);
        }
      this._ephemeralKey && (e ? this.init(this._ephemeralKey) : this.changeToAvailable());
    } else if (r)
      try {
        this._retrievingEphemeralKey = this.getEphemeralKey(r), this._ephemeralKey = await this._retrievingEphemeralKey, e && this.init(this._ephemeralKey);
      } catch (a) {
        this.displayFailedToRetrieveEphemeralKey(a);
      }
  }
  async getEphemeralKey(e) {
    return (await (await fetch(`${Ze}realtime/sessions`, {
      method: ye,
      body: ce(this.rawBody),
      headers: {
        [q]: te,
        [he]: `${Ce}${e}`
      }
    })).json()).client_secret.value;
  }
  generateMethods() {
    return {
      updateConfig: (e) => {
        var t;
        (t = this._dc) == null || t.send(ce({ [E]: "session.update", session: e }));
      },
      sendMessage: (e, t) => {
        const n = t || Mn, s = [{ [E]: n === Mn || n === F ? zi : h, text: e }], r = { [x]: n, [E]: "message", content: s };
        this.sendMessage(r);
      }
    };
  }
  static buildAvatarConfig(e) {
    const t = typeof e == "object" && e.avatar ? C(e.avatar) : {};
    return t.maxScale = t.maxScale && t.maxScale >= 1 ? t.maxScale : 2.5, t;
  }
  static buildButtonsConfig(e) {
    var n, s, r, o, a, c, l, d, p, u, g, y, _, S, M;
    const t = typeof e == "object" && e.buttons ? C(e.buttons) : {};
    return (r = (s = (n = t[ct]) == null ? void 0 : n[w]) == null ? void 0 : s[h]) != null && r.content || (t[ct] ?? (t[ct] = {}), (o = t[ct])[w] ?? (o[w] = {}), (a = t[ct][w])[G] ?? (a[G] = {}), (c = t[ct][w][G]).content ?? (c.content = sa)), (p = (d = (l = t.toggle) == null ? void 0 : l[w]) == null ? void 0 : d[h]) != null && p.content || (t.toggle ?? (t.toggle = {}), (u = t.toggle)[w] ?? (u[w] = {}), (g = t.toggle[w])[G] ?? (g[G] = {}), (y = t.toggle[w][G]).content ?? (y.content = ia), (_ = t.toggle)[H] ?? (_[H] = {}), (S = t.toggle[H])[G] ?? (S[G] = {}), (M = t.toggle[H][G]).content ?? (M.content = Ki)), t;
  }
  createContainer() {
    const e = A();
    return e.id = "deep-chat-openai-realtime-container", e.appendChild(this.createAvatarContainer()), e.appendChild(this.createButtonsContainer()), e.appendChild(this.createError()), e;
  }
  createAvatarContainer() {
    var t, n;
    const e = A();
    return e.id = "deep-chat-openai-realtime-avatar-container", Object.assign(e[v], (n = (t = this._avatarConfig) == null ? void 0 : t[R]) == null ? void 0 : n.container), e.appendChild(this._avatarEl), e;
  }
  static createAvatar(e) {
    var n;
    const t = A("img");
    return t.id = "deep-chat-openai-realtime-avatar", Object.assign(t[v], (n = e == null ? void 0 : e[R]) == null ? void 0 : n[W]), t[T] = (e == null ? void 0 : e[T]) || ji, t;
  }
  createButtonsContainer() {
    var s;
    const e = A();
    e.id = "deep-chat-openai-realtime-buttons-container", Object.assign(e[v], (s = this._buttonsConfig) == null ? void 0 : s.container), this._microphoneButton = this.createMicophoneButton();
    const t = Q.createButtonContainer(this._microphoneButton.elementRef);
    this._toggleButton = this.createToggleButton();
    const n = Q.createButtonContainer(this._toggleButton.elementRef);
    return e.appendChild(t), e.appendChild(n), e.appendChild(this.createLoading()), e;
  }
  static createButtonContainer(e) {
    const t = A();
    return t[m].add("deep-chat-openai-realtime-button-container"), t.appendChild(e), t;
  }
  createMicophoneButton() {
    var t;
    const e = new si((t = this._buttonsConfig) == null ? void 0 : t[ct]);
    return e.elementRef[m].add(Q.BUTTON_DEFAULT, "deep-chat-openai-realtime-microphone"), z.assignButtonEvents(e.elementRef, () => {
      e.isActive ? (this.toggleMicorphone(!0), e.elementRef[m].replace(
        Q.MICROPHONE_ACTIVE,
        Q.BUTTON_DEFAULT
      ), e.changeToDefault(), this._isMuted = !1) : (this.toggleMicorphone(!1), e.elementRef[m].replace(
        Q.BUTTON_DEFAULT,
        Q.MICROPHONE_ACTIVE
      ), me.removeAriaAttributes(e.elementRef), e.changeToActive(), this._isMuted = !0);
    }), e;
  }
  toggleMicorphone(e) {
    var t;
    (t = this._mediaStream) == null || t.getAudioTracks().forEach((n) => n.enabled = e);
  }
  createToggleButton() {
    var t;
    const e = new si((t = this._buttonsConfig) == null ? void 0 : t.toggle);
    return e.elementRef[m].add(Q.BUTTON_DEFAULT, "deep-chat-openai-realtime-toggle"), z.assignButtonEvents(e.elementRef, async () => {
      var n;
      if (e.isActive)
        e.changeToDefault(), this.stop();
      else
        try {
          if (this._ephemeralKey)
            this.displayLoading(), await this.init(this._ephemeralKey);
          else if (this._retrievingEphemeralKey) {
            this.displayLoading();
            const s = await this._retrievingEphemeralKey;
            (n = this._toggleButton) != null && n.isActive && await this.init(s);
          } else
            this.displayLoading(), await this.fetchEphemeralKey(!0);
        } catch (s) {
          console[f]("Failed to start conversation:", s), this.displayError(), this.hideLoading();
        }
    }), e;
  }
  async init(e) {
    const t = new RTCPeerConnection();
    this._pc = t;
    const n = A($);
    n.autoplay = !0;
    const s = new AudioContext(), r = s.createAnalyser();
    r.fftSize = 256;
    const o = new Uint8Array(r.frequencyBinCount);
    this._pc.ontrack = async (a) => {
      if (a.streams[0]) {
        n.srcObject = a.streams[0];
        const c = s.createMediaStreamSource(a.streams[0]);
        s.state === "suspended" && await s.resume(), c.connect(r), this.monitorFrequencies(r, o);
      } else
        console[f]("No streams found in the ontrack event."), this.displayError();
    }, await navigator.mediaDevices.getUserMedia({
      audio: !0
    }).then((a) => {
      var c;
      t === this._pc && (this._mediaStream = a, (c = this._pc) == null || c.addTrack(this._mediaStream.getTracks()[0]), this._isMuted && this.toggleMicorphone(!1));
    }).catch((a) => {
      console[f]("Error accessing microphone:", a), this.displayError();
    }), this._dc = this._pc.createDataChannel("oai-events"), this._dc.addEventListener("message", async (a) => {
      var l, d, p;
      const c = JSON.parse(a.data);
      if (c[E] === "session.created")
        this.removeUnavailable(), this._toggleButton && (me.removeAriaAttributes(this._toggleButton.elementRef), this._toggleButton.changeToActive()), (d = (l = this._events) == null ? void 0 : l.started) == null || d.call(l), this._deepChat.dispatchEvent(new CustomEvent(Vl)), this.hideLoading();
      else if (c[E] === "response.done") {
        const g = (p = JSON.parse(a.data).response.output) == null ? void 0 : p[0];
        if ((g == null ? void 0 : g[E]) === $s) {
          const { name: y, call_id: _ } = g;
          try {
            await this.handleTool(y, g.arguments, _);
          } catch (S) {
            this.stopOnError(S);
          }
        }
      } else c[E] === f ? this.stopOnError(c[f].message) : c[E] === it ? this.stopOnError(c.message) : c[E] === "response.audio_transcript.delta" || (c[E] === "response.audio_transcript.done" ? c.transcript && hn.onMessage(this._deepChat, { [x]: ne, [h]: c.transcript }, !1) : c[E] === "conversation.item.input_audio_transcription.completed" && c.transcript && hn.onMessage(this._deepChat, { [x]: F, [h]: c.transcript }, !1));
    });
    try {
      const a = await this._pc.createOffer();
      if (t !== this._pc || (await this._pc.setLocalDescription(a), t !== this._pc)) return;
      const c = await fetch(`${Ze}realtime`, {
        method: ye,
        body: a.sdp,
        headers: {
          [he]: `${Ce}${e}`,
          [q]: "application/sdp"
        }
      });
      if (t !== this._pc) return;
      const l = {
        [E]: "answer",
        sdp: await c[h]()
      };
      if (t !== this._pc || (await this._pc.setRemoteDescription(l), t !== this._pc)) return;
    } catch (a) {
      console[f](a), this.displayError();
    }
  }
  // there is a bug where sometimes upon refreshing the browser too many times the frequencyData is all 0s
  // in such instance please wait and refresh at a later time
  monitorFrequencies(e, t) {
    const n = () => {
      var l;
      e.getByteFrequencyData(t);
      const s = t.reduce((d, p) => d + p, 0), r = t.length * 255, o = s / r * 100, a = 1, c = a + o / 100 * (((l = this._avatarConfig) == null ? void 0 : l.maxScale) - a);
      this._avatarEl[v].transform = `scale(${c})`, requestAnimationFrame(n);
    };
    n();
  }
  stopOnError(e) {
    this.stop(), console[f](e), this.displayError();
  }
  stop() {
    var e, t, n;
    (e = this._mediaStream) == null || e.getTracks().forEach((s) => s.stop()), this._mediaStream = null, this._pc && (this._pc.close(), this._pc = null, (n = (t = this._events) == null ? void 0 : t.stopped) == null || n.call(t), this._deepChat.dispatchEvent(new CustomEvent(Kl)), this._dc = void 0);
  }
  changeToUnavailable() {
    this._microphoneButton && Q.changeButtonToUnavailable(this._microphoneButton), this._toggleButton && Q.changeButtonToUnavailable(this._toggleButton);
  }
  static changeButtonToUnavailable(e) {
    e.elementRef[m].add(Q.UNAVAILABLE), me.removeAriaBusy(e.elementRef), me.addAriaDisabled(e.elementRef), e.changeToUnavailable();
  }
  changeToAvailable() {
    this._microphoneButton && Q.changeButtonToAvailable(this._microphoneButton), this._toggleButton && Q.changeButtonToAvailable(this._toggleButton);
  }
  static changeButtonToAvailable(e) {
    Q.removeButtonUnavailable(e), e.changeToDefault();
  }
  removeUnavailable() {
    this._microphoneButton && Q.removeButtonUnavailable(this._microphoneButton), this._toggleButton && Q.removeButtonUnavailable(this._toggleButton);
  }
  static removeButtonUnavailable(e) {
    me.removeAriaDisabled(e.elementRef), e.elementRef[m].remove(Q.UNAVAILABLE);
  }
  createError() {
    var t;
    const e = A();
    return e.id = "deep-chat-openai-realtime-error", Object.assign(e[v], (t = this._errorConfig) == null ? void 0 : t[v]), this._errorElement = e, e;
  }
  displayFailedToRetrieveEphemeralKey(e) {
    console[f]("Failed to retrieve ephemeral key"), console[f](e), this.displayError();
  }
  displayError() {
    var e;
    this._errorElement && (this._errorElement[v].display = "block", this._errorElement.textContent = ((e = this._errorConfig) == null ? void 0 : e[h]) || "Error", this.changeToUnavailable()), this.hideLoading();
  }
  createLoading() {
    var t, n;
    const e = A();
    return e.id = "deep-chat-openai-realtime-loading", this._loadingElement = e, (t = this._loadingConfig) != null && t[L] && (this._loadingElement.innerHTML = this._loadingConfig[L]), Object.assign(e[v], (n = this._loadingConfig) == null ? void 0 : n[v]), e[v].display = "none", e;
  }
  displayLoading() {
    var e, t, n;
    this._toggleButton && (this._toggleButton.changeToActive(), this._toggleButton.elementRef[m].add(Q.BUTTON_LOADING), me.removeAriaDisabled(this._toggleButton.elementRef), me.addAriaBusy(this._toggleButton.elementRef)), (typeof ((e = this._loadingConfig) == null ? void 0 : e.display) != "boolean" || this._loadingConfig.display) && this._loadingElement && (this._loadingElement[v].display = "block", (t = this._loadingConfig) != null && t[L] || (this._loadingElement.textContent = ((n = this._loadingConfig) == null ? void 0 : n[h]) || "Loading"));
  }
  hideLoading() {
    this._toggleButton && (this._toggleButton.elementRef[m].remove(Q.BUTTON_LOADING), me.removeAriaBusy(this._toggleButton.elementRef)), this._loadingElement && (this._loadingElement[v].display = "none");
  }
  // https://platform.openai.com/docs/guides/function-calling?api-mode=responses
  async handleTool(e, t, n) {
    if (!this._functionHandlerI)
      throw Error(Gt);
    const s = await this._functionHandlerI({ name: e, arguments: t });
    if (typeof s != "object" || !Pe.isJson(s))
      throw Error('The `function_handler` response must be a JSON object, e.g. {response: "My response"}');
    const r = { [E]: Jo, call_id: n, output: ce(s) };
    this.sendMessage(r);
  }
  // https://platform.openai.com/docs/api-reference/realtime-client-events/conversation/item/create
  sendMessage(e) {
    if (!this._dc) return;
    const t = ce({ [E]: "conversation.item.create", item: e });
    this._dc.send(t);
    const n = { [E]: "response.create" };
    this._dc.send(ce(n));
  }
  isCustomView() {
    return !0;
  }
};
Q.BUTTON_DEFAULT = "deep-chat-openai-realtime-button-default", Q.BUTTON_LOADING = "deep-chat-openai-realtime-button-loading", Q.MICROPHONE_ACTIVE = "deep-chat-openai-realtime-microphone-active", Q.UNAVAILABLE = "deep-chat-openai-realtime-button-unavailable";
let Wi = Q;
const An = class An extends k {
  constructor(e) {
    var r, o, a;
    const t = C(e.directConnection), n = t == null ? void 0 : t.openAI;
    super(e, Dn(), Bn, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = Nn, this.url = `${Ze}audio/speech`, this.permittedErrorPrefixes = [zt];
    const s = (r = t == null ? void 0 : t.openAI) == null ? void 0 : r.textToSpeech;
    typeof s === U && Object.assign(this.rawBody, s), (o = this.rawBody).model ?? (o.model = An.DEFAULT_MODEL), (a = this.rawBody).voice ?? (a.voice = An.DEFAULT_VOIDE), this.textInputPlaceholderText = "Insert text to generate audio", this.rawBody.response_format = "mp3";
  }
  preprocessBody(e, t) {
    var r, o;
    const n = C(e), s = (o = (r = t[t[X] - 1]) == null ? void 0 : r[h]) == null ? void 0 : o.trim();
    return s && s !== "" && (n.input = s), n;
  }
  async callServiceAPI(e, t) {
    this.url = this.connectSettings.url || this.url, this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    if (e instanceof Blob)
      return new Promise((t) => {
        const n = new FileReader();
        n.readAsDataURL(e), n.onload = (s) => {
          t({ [b]: [{ [T]: s.target.result, [E]: $ }] });
        };
      });
    if (e[f]) throw e[f].message;
    return { [f]: f };
  }
};
An.DEFAULT_MODEL = "tts-1", An.DEFAULT_VOIDE = "alloy";
let Xi = An;
const rt = class rt extends k {
  constructor(e) {
    var r, o;
    const t = C(e.directConnection), n = t == null ? void 0 : t.openAI;
    super(e, Dn(), Bn, n, { audio: {} }), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = Nn, this.url = "", this.permittedErrorPrefixes = [zt], this.textInputPlaceholderText = lr, this._service_url = rt.AUDIO_TRANSCRIPTIONS_URL;
    const s = (r = t == null ? void 0 : t.openAI) == null ? void 0 : r[$];
    typeof s == "object" && (this.processConfig(s), rt.cleanConfig(s), Object.assign(this.rawBody, s)), (o = this.rawBody).model ?? (o.model = rt.DEFAULT_MODEL), this.rawBody.response_format = "json", this.canSendMessage = rt.canSendFileMessage;
  }
  static canSendFileMessage(e, t) {
    return !!(t != null && t[0]);
  }
  processConfig(e) {
    e != null && e[E] && e[E] === "translation" && (this._service_url = rt.AUDIO_TRANSLATIONS_URL, delete e.language);
  }
  static cleanConfig(e) {
    delete e[E];
  }
  static createFormDataBody(e, t) {
    const n = new FormData();
    return n.append(se, t), Object.keys(e).forEach((s) => {
      n.append(s, String(e[s]));
    }), n;
  }
  preprocessBody(e, t) {
    var r, o;
    const n = C(e), s = (o = (r = t[t[X] - 1]) == null ? void 0 : r[h]) == null ? void 0 : o.trim();
    return s && s !== "" && (n.prompt = s), n;
  }
  // prettier-ignore
  async callServiceAPI(e, t, n) {
    var o;
    if (!((o = this.connectSettings) != null && o.headers)) throw new Error(He);
    if (!(n != null && n[0])) throw new Error(bi);
    this.url = this.connectSettings.url || this._service_url;
    const s = this.preprocessBody(this.rawBody, t), r = rt.createFormDataBody(s, n[0]);
    D.tempRemoveContentHeader(
      this.connectSettings,
      ge.request.bind(this, this, r, e),
      !1
    );
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    return { [h]: e[h] };
  }
};
rt.AUDIO_TRANSCRIPTIONS_URL = `${Ze}audio/transcriptions`, rt.AUDIO_TRANSLATIONS_URL = `${Ze}audio/translations`, rt.DEFAULT_MODEL = "whisper-1";
let Zi = rt;
const Fn = "Ocp-Apim-Subscription-Key", ra = (
  // eslint-disable-next-line max-len
  "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal"
), Wl = (i, e) => ({
  [Fn]: e,
  [q]: "application/ssml+xml",
  "X-Microsoft-OutputFormat": i
}), Xl = (i) => ({
  [Fn]: i,
  Accept: te
}), Zl = (i, e, t, n) => {
  i[f] ? n(pe) : t(e);
}, Yl = (i) => ({
  url: `https://${i}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`,
  method: ye,
  createHeaders: (e) => ({ [Fn]: `${e}` }),
  handleVerificationResult: Zl
}), Jl = (i) => ({
  [Fn]: i,
  [q]: te
}), Ql = (i, e, t, n) => {
  var r;
  ((r = i[f]) == null ? void 0 : r.code) === "401" ? n(pe) : t(e);
}, ed = (i) => ({
  url: `${i}/language/analyze-text/jobs?api-version=2022-10-01-preview`,
  method: ye,
  createHeaders: (e) => ({ [Fn]: `${e}` }),
  handleVerificationResult: Ql
}), td = (i, e, t, n) => {
  i.json().then((r) => {
    !Array.isArray(r) && r[f].code === 401e3 ? n(pe) : t(e);
  });
}, nd = (i) => ({
  url: "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=es",
  method: ye,
  createHeaders: (e) => oa(i, e),
  handleVerificationResult: td
}), oa = (i, e) => {
  const t = {
    [Fn]: e,
    [q]: te
  };
  return i && (t["Ocp-Apim-Subscription-Region"] = i), t;
};
class sd extends k {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    super(
      e,
      ed(n),
      t,
      s,
      r
    ), this.insertKeyPlaceholderText = "Azure Language Subscription Key", this.keyHelpUrl = ra, this.permittedErrorPrefixes = ["Access"];
  }
}
const _s = class _s extends sd {
  constructor(e) {
    var s, r, o, a;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.summarization, n = (o = e.directConnection) == null ? void 0 : o.azure;
    super(e, Jl, t.endpoint, n), this.permittedErrorPrefixes = [_s.ENDPOINT_ERROR_MESSAGE], this.url = "", this.textInputPlaceholderText = "Insert text to summarize", this.isTextInputDisabled = !1, t.endpoint ? ((a = this.rawBody).language ?? (a.language = "en"), Object.assign(this.rawBody, t), this.url = `${t.endpoint}/language/analyze-text/jobs?api-version=2022-10-01-preview`) : (this.isTextInputDisabled = !0, this.canSendMessage = () => !1, setTimeout(() => {
      e.addMessage({ [f]: _s.ENDPOINT_ERROR_MESSAGE });
    }));
  }
  preprocessBody(e, t) {
    const n = t[t.length - 1][h];
    if (n)
      return {
        analysisInput: {
          documents: [
            {
              id: "1",
              language: e.language,
              [h]: n
            }
          ]
        },
        tasks: [
          {
            kind: "ExtractiveSummarization"
          }
        ]
      };
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this)), this.messages = e;
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f].message;
    if (this.messages && this.completionsHandlers) {
      this.asyncCallInProgress = !0;
      const n = e.headers.get("operation-location"), s = { method: ue, headers: (t = this.connectSettings) == null ? void 0 : t.headers };
      ge.executePollRequest(this, n, s, this.messages);
    }
    return { [h]: "" };
  }
  async extractPollResultData(e) {
    if (e[f]) throw e[f];
    if (e.status === "running" || e.status === "notStarted") return { timeoutMS: 2e3 };
    if (e.errors.length > 0) throw e.errors[0];
    if (e.tasks.items[0].results.errors.length > 0) throw e.tasks.items[0].results.errors[0];
    let t = "";
    for (const n of e.tasks.items[0].results.documents[0].sentences)
      t += n[h];
    return { [h]: t || "" };
  }
};
_s.ENDPOINT_ERROR_MESSAGE = // eslint-disable-next-line max-len
`Please define the azure endpoint. [More Information](${Z}directConnection/Azure#Summarization)`;
let Yi = _s;
const id = async (i, e) => {
  const t = {
    [Pa]: i,
    [La]: te
  }, o = `https://api.assemblyai.com/v2/transcript/${(await (await fetch("https://api.assemblyai.com/v2/transcript", {
    method: ye,
    body: ce({ audio_url: e }),
    headers: t
  })).json()).id}`;
  let a;
  for (; !a; ) {
    const l = await (await fetch(o, { headers: t })).json();
    if (l.status === cr)
      a = l;
    else {
      if (l.status === f)
        throw new Error(`Transcription failed: ${l[f]}`);
      await new Promise((d) => setTimeout(d, 3e3));
    }
  }
  return a;
}, rd = (i) => ({
  [he]: i,
  [q]: "application/octet-stream"
}), od = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].code === "invalid_api_key" ? n(pe) : n(Ue) : t(e);
}, ad = () => be("https://api.assemblyai.com/v2/upload", ye, od);
class yr extends k {
  constructor(e) {
    var n;
    const t = (n = e.directConnection) == null ? void 0 : n.assemblyAI;
    super(e, ad(), rd, t, { audio: {} }), this.insertKeyPlaceholderText = this.genereteAPIKeyName("AssemblyAI"), this.keyHelpUrl = "https://www.assemblyai.com/app/account", this.url = "https://api.assemblyai.com/v2/upload", this.isTextInputDisabled = !0, this.textInputPlaceholderText = lr, this.permittedErrorPrefixes = [Ho, zt], this.canSendMessage = yr.canFileSendMessage;
  }
  static canFileSendMessage(e, t) {
    return !!(t != null && t[0]);
  }
  async callServiceAPI(e, t, n) {
    var s;
    if (!((s = this.connectSettings) != null && s.headers)) throw new Error(He);
    if (!(n != null && n[0])) throw new Error(bi);
    ge.request(this, n[0], e, !1);
  }
  async extractResultData(e) {
    var s, r;
    if (e[f]) throw e[f];
    const t = (r = (s = this.connectSettings) == null ? void 0 : s.headers) == null ? void 0 : r[he], n = await id(t, e.upload_url);
    return { [h]: n[h] };
  }
}
class ii extends k {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    var p, u;
    const o = C(e.directConnection), a = t || Dn(), c = n || Bn, l = s || o.openAI;
    super(e, a, c, l), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = "https://platform.openai.com/account/api-keys", this.permittedErrorPrefixes = [Ps, "Invalid value"];
    const d = r || ((p = o.openAI) == null ? void 0 : p.chat);
    typeof d === U && this.processConfig(d, e), this.maxMessages ?? (this.maxMessages = -1), (u = this.rawBody).model ?? (u.model = "gpt-4o");
  }
  processConfig(e, t) {
    var n, s, r;
    this.completeConfig(e, (r = (s = (n = t.directConnection) == null ? void 0 : n.openAI) == null ? void 0 : s.chat) == null ? void 0 : r.function_handler);
  }
  static getBaseFileContent(e) {
    return e.map((t) => {
      var n, s, r;
      if (t[E] === $) {
        const o = (n = t[T]) == null ? void 0 : n.split(",")[1], a = ((r = (s = t.name) == null ? void 0 : s.split(".").pop()) == null ? void 0 : r.toLowerCase()) || "wav";
        return { [E]: sn, [sn]: { data: o, format: a } };
      }
      return t;
    });
  }
  static getBaseContent(e, t = !0) {
    if (t && e[b] && e[b][X] > 0) {
      const s = this.getBaseFileContent(e[b]);
      return e[h] && e[h].trim()[X] > 0 && s.unshift({ [E]: h, [h]: e[h] }), s;
    }
    return e[h];
  }
}
class ri extends ii {
  constructor() {
    super(...arguments), this.url = `${Ze}chat/completions`;
  }
  static getFileContent(e) {
    return ii.getBaseFileContent(e).map((n) => n[E] === sn ? n : { [E]: qe, [qe]: { url: n[T] } });
  }
  static getContent(e) {
    if (e[b] && e[b][X] > 0) {
      const t = ri.getFileContent(e[b]);
      return e[h] && e[h].trim()[X] > 0 && t.unshift({ [E]: h, [h]: e[h] }), t;
    }
    return e[h];
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: ri.getContent(r),
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    var n, s, r, o, a, c;
    if (e[f]) throw e[f].message;
    if ((s = (n = e.choices) == null ? void 0 : n[0]) != null && s.delta)
      return this.extractStreamResult(e.choices[0], t);
    if ((o = (r = e.choices) == null ? void 0 : r[0]) != null && o.message) {
      if (e.choices[0].message.tool_calls)
        return this.handleToolsGeneric(e.choices[0].message, this.functionHandler, this.messages, t);
      if ((a = e.choices[0].message) != null && a[$]) {
        const l = this.deepChat.textToSpeech, d = typeof l == "object" && typeof ((c = l == null ? void 0 : l[$]) == null ? void 0 : c.displayText) == "boolean";
        return {
          [b]: [{ [T]: `data:audio/wav;base64,${e.choices[0].message[$].data}`, [E]: $ }],
          [h]: d ? e.choices[0].message[$].transcript : void 0
        };
      }
      return { [h]: e.choices[0].message.content };
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    return this.extractStreamResultWToolsGeneric(this, e, this.functionHandler, t);
  }
}
const kr = class kr extends k {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    super(
      e,
      Yl(n),
      t,
      s,
      r
    ), this.insertKeyPlaceholderText = "Azure Speech Subscription Key", this.keyHelpUrl = ra;
  }
};
kr.REGION_ERROR_PREFIX = `Please define a region config property. [More Information](${Z}directConnection/Azure#`;
let Pn = kr;
const Es = class Es extends Pn {
  // prettier-ignore
  constructor(e) {
    var s, r, o, a, c, l;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.textToSpeech, n = (o = e.directConnection) == null ? void 0 : o.azure;
    super(
      e,
      Wl.bind({}, (t == null ? void 0 : t.outputFormat) || "audio-16khz-128kbitrate-mono-mp3"),
      t.region,
      n
    ), this.permittedErrorPrefixes = [Es.REGION_ERROR_MESSAGE], this.isTextInputDisabled = !1, this.url = "", t.region ? (Object.assign(this.rawBody, t), (a = this.rawBody).lang ?? (a.lang = "en-US"), (c = this.rawBody).name ?? (c.name = "en-US-JennyNeural"), (l = this.rawBody).gender ?? (l.gender = "Female"), this.url = `https://${t.region}.tts.speech.microsoft.com/cognitiveservices/v1`) : (this.isTextInputDisabled = !0, this.canSendMessage = () => !1, setTimeout(() => {
      e.addMessage({ [f]: Es.REGION_ERROR_MESSAGE });
    }));
  }
  preprocessBody(e, t) {
    const n = t[t.length - 1][h];
    if (n)
      return `<speak version='1.0' xml:lang='${e.lang}'>
      <voice xml:lang='${e.lang}' xml:gender='${e.gender}' name='${e.name}'>
        ${n}
      </voice>
    </speak>`;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), void 0, !1);
  }
  async extractResultData(e) {
    return new Promise((t) => {
      const n = new FileReader();
      n.readAsDataURL(e), n.onload = (s) => {
        t({ [b]: [{ [T]: s.target.result, [E]: $ }] });
      };
    });
  }
};
Es.REGION_ERROR_MESSAGE = `${Pn.REGION_ERROR_PREFIX}TextToSpeech)`;
let Ji = Es;
const wn = class wn extends Pn {
  constructor(e) {
    var r, o, a;
    const t = (o = (r = e.directConnection) == null ? void 0 : r.azure) == null ? void 0 : o.speechToText, n = (a = e.directConnection) == null ? void 0 : a.azure, s = { audio: { [b]: { acceptedFormats: ".wav,.ogg" } } };
    if (super(e, Xl, t.region, n, s), this.permittedErrorPrefixes = [wn.REGION_ERROR_MESSAGE], this.url = "", this.isTextInputDisabled = !0, this.textInputPlaceholderText = lr, !t.region)
      this.isTextInputDisabled = !0, this.canSendMessage = () => !1, setTimeout(() => {
        e.addMessage({ [f]: wn.REGION_ERROR_MESSAGE });
      });
    else {
      this.canSendMessage = wn.canFileSendMessage;
      const c = t.lang || "en-US";
      this.url = `https://${t.region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=${c}&format=detailed`, this.recordAudio = void 0;
    }
  }
  static canFileSendMessage(e, t) {
    return !!(t != null && t[0]);
  }
  async callServiceAPI(e, t, n) {
    var s, r;
    if (!((s = this.connectSettings) != null && s.headers)) throw new Error(He);
    if (!(n != null && n[0])) throw new Error(bi);
    (r = this.connectSettings) != null && r.headers && (this.connectSettings.headers[q] = n[0].name.toLocaleLowerCase().endsWith(".wav") ? "audio/wav; codecs=audio/pcm; samplerate=16000" : "audio/ogg; codecs=opus"), ge.request(this, n[0], e, !1);
  }
  async extractResultData(e) {
    if (e[f]) throw e[f];
    return { [h]: e.DisplayText || "" };
  }
};
wn.REGION_ERROR_MESSAGE = `${Pn.REGION_ERROR_PREFIX}SpeechToText)`;
let Qi = wn;
class cd extends k {
  // prettier-ignore
  constructor(e) {
    var s, r, o;
    const t = (r = (s = e.directConnection) == null ? void 0 : s.azure) == null ? void 0 : r.translation, n = (o = e.directConnection) == null ? void 0 : o.azure;
    super(
      e,
      nd(t.region),
      oa.bind({}, t == null ? void 0 : t.region),
      n
    ), this.insertKeyPlaceholderText = "Azure Translate Subscription Key", this.keyHelpUrl = // eslint-disable-next-line max-len
    "https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#create-and-manage-subscriptions-in-azure-portal", this.url = "", this.url = `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${t.language || "es"}`;
  }
  preprocessBody(e) {
    const t = e[e.length - 1][h];
    if (t)
      return [{ Text: t }];
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    var t;
    if (Array.isArray(e))
      return { [h]: ((t = e[0].translations) == null ? void 0 : t[0][h]) || "" };
    throw e[f];
  }
}
class ld extends k {
  constructor(e) {
    var r, o;
    const t = C(e.directConnection), n = t.bigModel;
    super(e, fr(), pr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("BigModel"), this.keyHelpUrl = "https://open.bigmodel.cn/usercenter/apikeys", this.url = "https://open.bigmodel.cn/api/paas/v4/images/generations", this.permittedErrorPrefixes = [he, Te];
    const s = (r = t.bigModel) == null ? void 0 : r[ee];
    typeof s === U && (this.cleanConfig(s), Object.assign(this.rawBody, s)), (o = this.rawBody).model ?? (o.model = "cogview-4-250304");
  }
  cleanConfig(e) {
    delete e.key;
  }
  preprocessBody(e, t) {
    const n = C(e), s = t[t.length - 1];
    return n.prompt = (s == null ? void 0 : s[h]) || "", n;
  }
  async callServiceAPI(e, t) {
    return this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    const t = e.data.map((n) => n != null && n.url ? { [T]: n.url, [E]: W } : { [T]: "", [E]: W });
    return { [b]: t };
  }
}
const aa = (i) => ({
  [q]: te,
  [he]: `${Ce}${i}`
}), dd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].message === yi ? n(pe) : n(Ue) : t(e);
}, ca = () => be("https://api.groq.com/openai/v1/models", ue, dd);
class hd extends k {
  constructor(e) {
    var r, o, a, c;
    const t = C(e.directConnection), n = t.groq;
    super(e, ca(), aa, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Groq"), this.keyHelpUrl = "https://console.groq.com/keys", this.url = "https://api.groq.com/openai/v1/audio/speech", this.permittedErrorPrefixes = [zt, "property"];
    const s = (r = t.groq) == null ? void 0 : r.textToSpeech;
    typeof s === U && this.completeConfig(s), (o = this.rawBody).model ?? (o.model = "playai-tts"), (a = this.rawBody).voice ?? (a.voice = "Fritz-PlayAI"), (c = this.rawBody).response_format ?? (c.response_format = "mp3");
  }
  preprocessBody(e, t) {
    const n = C(e), s = t[t.length - 1];
    return n.input = (s == null ? void 0 : s[h]) || "", n;
  }
  async callServiceAPI(e, t) {
    return this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    const t = this.rawBody.response_format || "mp3", n = new Blob([e], { [E]: `audio/${t}` }), s = URL.createObjectURL(n);
    return { [b]: [{ [T]: s, [E]: $ }] };
  }
}
class ud extends k {
  constructor(e) {
    var r, o;
    const t = C(e.directConnection), n = t.together;
    super(e, gr(), mr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Together AI"), this.keyHelpUrl = "https://api.together.xyz/settings/api-keys", this.url = "https://api.together.xyz/v1/images/generations", this.permittedErrorPrefixes = [it, Te];
    const s = (r = t.together) == null ? void 0 : r[ee];
    typeof s === U && this.completeConfig(s), (o = this.rawBody).model ?? (o.model = "black-forest-labs/FLUX.1-schnell-Free");
  }
  preprocessBody(e, t) {
    const n = C(e), s = t[t.length - 1];
    return n.prompt = (s == null ? void 0 : s[h]) || "", n;
  }
  async callServiceAPI(e, t) {
    return this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    const t = e.data.map((n) => n != null && n.url ? { [T]: n.url, [E]: W } : n != null && n.b64_json ? { [T]: `data:image/png;base64,${n.b64_json}`, [E]: W } : { [T]: "", [E]: W });
    return { [b]: t };
  }
}
const Xe = class Xe extends ii {
  // https://platform.openai.com/docs/models/gpt-4o-audio-preview
  // prettier-ignore
  constructor(e, t, n, s, r) {
    var a, c;
    super(e, t, n, s, r), this.keyHelpUrl = Nn, this.url = `${Ze}responses`, this._functionStreamInProgress = !1, this._useConversation = !1, this._conversationLoadLimit = 50;
    const o = r || ((c = (a = e.directConnection) == null ? void 0 : a.openAI) == null ? void 0 : c.chat);
    this._urlSegments = Xe.buildUrlSegments(o), this.url = this._urlSegments.responsesUrl, typeof o === U && o !== !0 && o && (o.conversation && (this._useConversation = !0, typeof o.conversation == "string" && (this._conversationId = o.conversation)), typeof o.conversationLoadLimit == "number" && (this._conversationLoadLimit = o.conversationLoadLimit), this.cleanConfig(o)), this._conversationId && (this.fetchHistory = this.fetchHistoryFunc.bind(this));
  }
  processConfig(e, t) {
    super.processConfig(e, t);
  }
  static buildUrlSegments(e) {
    const t = typeof e == "object" && (e == null ? void 0 : e.custom_base_url) || Ze;
    return {
      responsesUrl: `${t}responses`,
      conversationsUrl: `${t}conversations`
    };
  }
  cleanConfig(e) {
    delete e.conversation, delete e.conversationLoadLimit, delete e.custom_base_url;
  }
  static getFileContent(e) {
    return ii.getBaseFileContent(e).map((n) => n[E] === sn ? n : { detail: "auto", [E]: no, [qe]: n[T] });
  }
  static getContent(e) {
    if (e[x] === F && e[b] && e[b][X] > 0) {
      const n = Xe.getFileContent(e[b]);
      return e[h] && e[h].trim()[X] > 0 && n.unshift({ [E]: zi, [h]: e[h] }), n;
    }
    return e[h];
  }
  async fetchHistoryFunc() {
    setTimeout(() => this.deepChat.disableSubmitButton(), 2);
    try {
      const e = this.url, { conversationsUrl: t } = this._urlSegments;
      this.url = `${t}/${this._conversationId}/items?limit=${this._conversationLoadLimit}`;
      const n = await $t(this, {}, ue);
      return this.connectSettings.method = ye, this.url = e, this.deepChat.disableSubmitButton(!1), this.processConversationHistory(n);
    } catch {
      return this.deepChat.disableSubmitButton(!1), [{ [f]: Uo }];
    }
  }
  static filterCompleted(e) {
    return (e == null ? void 0 : e.filter((t) => t.status === cr)) || [];
  }
  processConversationHistory(e) {
    if (!e.data || !Array.isArray(e.data)) return [];
    const t = [];
    for (const n of Xe.filterCompleted(e.data.reverse()))
      if (n[E] === "message" && n.content && Array.isArray(n.content))
        for (const s of n.content)
          (s[E] === zi || s[E] === so) && s[h] ? t.push({ [x]: n[x], [h]: s[h] }) : s[E] === no && t.push({
            [x]: n[x],
            [b]: Xe.generateImageFile(s[qe] || "")
          });
      else n[E] === Ni && t.push({
        [x]: ne,
        [b]: Xe.generateImageFile(n.result)
      });
    return t;
  }
  preprocessBody(e, t) {
    const n = C(e);
    t = this.processMessages(t), t = this._useConversation ? [t[t[X] - 1]] : t;
    const s = t.map((r) => ({
      content: Xe.getContent(r),
      [x]: k.getRoleViaUser(r[x])
    }));
    return n.input = s, this._conversationId && (n.conversation = this._conversationId), n;
  }
  async createConversation() {
    try {
      const e = this.url;
      this.url = this._urlSegments.conversationsUrl;
      const t = await $t(this, {}, ye);
      return this.url = e, t.id;
    } catch (e) {
      throw console[f]("Failed to create conversation:", e), e;
    }
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this._useConversation && !this._conversationId && (this._conversationId = await this.createConversation()), this._conversationId && this.updateSessionId(this._conversationId), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    const n = await this.extractResult(e, t);
    return this._conversationId && (n._sessionId = this._conversationId), n;
  }
  async extractResult(e, t) {
    var n, s, r, o;
    if (e[f]) throw e[f].message;
    if (e.status) {
      const a = Xe.filterCompleted(e.output);
      if (a[X] > 0) {
        const c = (r = (s = (n = a.find((p) => {
          var u, g;
          return typeof ((g = (u = p.content) == null ? void 0 : u[0]) == null ? void 0 : g[h]) === Ee;
        })) == null ? void 0 : n.content) == null ? void 0 : s[0]) == null ? void 0 : r[h], l = await this.handleResponsesFunctionCalls(a, t, c);
        if (l) return l;
        const d = this.handleFileGenerationResponse(a, c);
        return d || { [h]: c };
      }
      return { [h]: "" };
    }
    return ((o = e.item) == null ? void 0 : o[E]) === $s && e[E] ? this.handleStreamedResponsesFunctionCall(e, t) : e[E] === `${Hn}.${Ni}.partial_image` && e.partial_image_b64 ? { [b]: [{ [T]: `${Xe.IMAGE_BASE64_PREFIX}${e.partial_image_b64}`, [E]: W }] } : e.delta && !this._functionStreamInProgress && e[E] === `${Hn}.${so}.delta` ? { [h]: e.delta } : { [h]: "" };
  }
  async handleStreamedResponsesFunctionCall(e, t) {
    var n;
    if (e[E] === `${Hn}.output_item.done`) {
      if (this._functionStreamInProgress = !1, ((n = e.item) == null ? void 0 : n[E]) === $s)
        return this.handleResponsesFunctionCalls([e.item], t);
    } else e[E] === `${Hn}.output_item.added` && (this._functionStreamInProgress = !0);
    return { [h]: "" };
  }
  handleFileGenerationResponse(e, t) {
    const n = e.find(
      (s) => s[E] === Ni
    );
    return n ? {
      [b]: Xe.generateImageFile(n.result),
      [h]: t
    } : null;
  }
  static generateImageFile(e) {
    return [{ [T]: `${Xe.IMAGE_BASE64_PREFIX}${e}`, [E]: W }];
  }
  async handleResponsesFunctionCalls(e, t, n) {
    const s = e.filter((l) => l[E] === $s);
    if (s[X] === 0) return null;
    if (!t || !this.functionHandler) throw Error(Gt);
    const r = s.map((l) => ({ name: l.name, arguments: l.arguments })), { responses: o, processedResponse: a } = await this.callToolFunction(this.functionHandler, r);
    if (a) return a;
    const c = C(t);
    if (c.input && (s.forEach((l) => c.input.push(l)), !o.find(({ response: l }) => typeof l !== Ee) && r[X] === o[X]))
      return o.forEach((l, d) => {
        const p = s[d];
        c.input.push({ [E]: Jo, call_id: p.call_id, output: l[Hn] });
      }), this.makeAnotherRequest(c, this.messages, n);
    throw Error(an);
  }
};
Xe.IMAGE_BASE64_PREFIX = "data:image/png;base64,";
let oi = Xe;
class _r extends oi {
  constructor(e) {
    var o, a, c, l, d, p, u;
    const t = C(e.directConnection), n = t.azure, s = ((a = (o = t.azure) == null ? void 0 : o.openAI) == null ? void 0 : a.urlDetails) || {}, r = (l = (c = t.azure) == null ? void 0 : c.openAI) == null ? void 0 : l.chat;
    if (super(e, ta(s), ea, n, r), this.permittedErrorPrefixes = [ni], this.isTextInputDisabled = !1, typeof r === U) {
      const { function_handler: g } = (u = (p = (d = e.directConnection) == null ? void 0 : d.azure) == null ? void 0 : p.openAI) == null ? void 0 : u.chat;
      g && (this.functionHandler = g);
    }
    na(s) ? this.url = _r.buildURL(s) : (this.isTextInputDisabled = !0, this.canSendMessage = () => !1, setTimeout(() => {
      e.addMessage({ [f]: ni });
    }));
  }
  static buildURL(e) {
    const { endpoint: t, deploymentId: n, version: s } = e;
    return `${t}/openai/deployments/${n}/chat/completions?api-version=${s}`;
  }
}
class ai extends k {
  constructor(e) {
    var r, o, a, c, l;
    const t = C(e.directConnection), n = t.bigModel;
    super(e, fr(), pr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("BigModel"), this.keyHelpUrl = "https://open.bigmodel.cn/usercenter/apikeys", this.url = "https://open.bigmodel.cn/api/paas/v4/chat/completions", this.permittedErrorPrefixes = [he, Te];
    const s = (r = t.bigModel) == null ? void 0 : r.chat;
    typeof s === U && this.completeConfig(s, (c = (a = (o = e.directConnection) == null ? void 0 : o.bigModel) == null ? void 0 : a.chat) == null ? void 0 : c.function_handler), this.maxMessages ?? (this.maxMessages = -1), (l = this.rawBody).model ?? (l.model = "glm-4.5");
  }
  static getFileContent(e) {
    return e.map((t) => t[E] === W ? { [E]: qe, [qe]: { url: t[T] || "" } } : { [E]: se, file_url: { url: t[T] || "" } });
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: ai.getTextWFilesContent(r, ai.getFileContent),
      [x]: k.getRoleViaAI(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    if (e[f]) throw e[f].message;
    if (e.choices.length > 0) {
      if (e.choices[0].delta !== void 0)
        return this.extractStreamResult(e.choices[0], t);
      if (e.choices[0].message !== void 0) {
        const n = e.choices[0].message;
        return n.tool_calls ? this.handleToolsGeneric({ tool_calls: n.tool_calls }, this.functionHandler, this.messages, t) : { [h]: n.content };
      }
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    var o, a, c, l;
    const { delta: n, finish_reason: s } = e, r = (o = this.messages) == null ? void 0 : o.messageToElements[this.messages.messageToElements.length - 2];
    if ((r == null ? void 0 : r[0][x]) === ne && ((a = r == null ? void 0 : r[0][h]) == null ? void 0 : a.replace(/\n/g, "").trim().length) === 0 && ((c = this.messages) == null || c.removeMessage(r[1][h]), (l = this.messages) == null || l.messageToElements.splice(this.messages.messageToElements.length - 2, 1)), s === "tool_calls") {
      if (n.tool_calls) {
        const d = { tool_calls: n.tool_calls };
        return this.handleToolsGeneric(d, this.functionHandler, this.messages, t);
      }
      return { [h]: (n == null ? void 0 : n.content) || "" };
    }
    return { [h]: (n == null ? void 0 : n.content) || "" };
  }
}
class pd extends k {
  constructor(e) {
    var r, o;
    const t = C(e.directConnection), n = t.together;
    super(e, gr(), mr, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Together AI"), this.keyHelpUrl = "https://api.together.xyz/settings/api-keys", this.url = "https://api.together.xyz/v1/chat/completions", this.permittedErrorPrefixes = [it, Te];
    const s = (r = t.together) == null ? void 0 : r.chat;
    typeof s === U && this.completeConfig(s), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: r[h] || "",
      [x]: r[x] === ne ? gt : r[x]
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    if (e.choices.length > 0) {
      if (e.choices[0].message !== void 0)
        return { [h]: e.choices[0].message.content };
      if (e.choices[0].delta !== void 0)
        return { [h]: e.choices[0].delta.content };
    }
    return { [h]: "" };
  }
}
const ot = class ot extends k {
  constructor(e) {
    var o;
    const { directConnection: t } = e, n = t == null ? void 0 : t.openAI, s = { images: { [b]: { acceptedFormats: ".png", maxNumberOfFiles: 2 } } };
    super(e, Dn(), Bn, n, s), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenAI"), this.keyHelpUrl = Nn, this.url = "", this.permittedErrorPrefixes = [Ps, "Invalid input image"];
    const r = (o = t == null ? void 0 : t.openAI) == null ? void 0 : o[ee];
    if (this[Fe]) {
      const a = typeof r == "object" && r.size ? Number.parseInt(r.size) : 1024;
      this[Fe][b] = { dimensions: { width: a, height: a } };
    }
    typeof r === U && Object.assign(this.rawBody, r), this.canSendMessage = ot.canFileSendMessage;
  }
  static canFileSendMessage(e, t) {
    return !!(t != null && t[0]) || !!(e && e.trim() !== "");
  }
  static createFormDataBody(e, t, n) {
    const s = new FormData();
    return s.append(W, t), n && s.append("mask", n), Object.keys(e).forEach((r) => {
      s.append(r, String(e[r]));
    }), s;
  }
  preprocessBody(e, t) {
    const n = C(e);
    return t && t !== "" && (n.prompt = t), n;
  }
  // prettier-ignore
  callApiWithImage(e, t, n) {
    var o, a;
    let s;
    const r = (a = (o = t[t[X] - 1]) == null ? void 0 : o[h]) == null ? void 0 : a.trim();
    if (n[1] || r && r !== "") {
      this.url = ot.IMAGE_EDIT_URL;
      const c = this.preprocessBody(this.rawBody, r);
      s = ot.createFormDataBody(c, n[0], n[1]);
    } else
      this.url = ot.IMAGE_VARIATIONS_URL, s = ot.createFormDataBody(this.rawBody, n[0]);
    D.tempRemoveContentHeader(
      this.connectSettings,
      ge.request.bind(this, this, s, e),
      !1
    );
  }
  async callServiceAPI(e, t, n) {
    var s;
    if (!((s = this.connectSettings) != null && s.headers)) throw new Error(He);
    if (n != null && n[0])
      this.callApiWithImage(e, t, n);
    else {
      if (!this.connectSettings) throw new Error(He);
      this.url = ot.IMAGE_GENERATION_URL;
      const r = this.preprocessBody(this.rawBody, t[t[X] - 1][h]);
      ge.request(this, r, e);
    }
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    const t = e.data.map((n) => n.url ? { [T]: n.url, [E]: W } : { [T]: `${On}${n.b64_json}`, [E]: W });
    return { [b]: t };
  }
  // private static readonly MODAL_MARKDOWN = `
  // 1 image:
  // - With text - edits image based on the text
  // - No text - creates a variation of the image
  // 2 images:
  // - The second image needs to be a copy of the first with a transparent area where the edit should take place.
  // Add text to describe the required modification.
  // Click here for [more info](https://platform.openai.com/docs/guides/images/introduction).
  //   `;
};
ot.IMAGE_GENERATION_URL = `${Ze}images/generations`, ot.IMAGE_VARIATIONS_URL = `${Ze}images/variations`, ot.IMAGE_EDIT_URL = `${Ze}images/edits`;
let er = ot;
const fd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), md = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === Te ? n(pe) : n(Ue) : t(e);
}, gd = () => be("https://openrouter.ai/api/v1/key", ue, md);
class ps extends k {
  constructor(e) {
    var s, r, o, a;
    const n = C(e.directConnection).openRouter;
    super(e, gd(), fd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("OpenRouter"), this.keyHelpUrl = "https://openrouter.ai/keys", this.url = "https://openrouter.ai/api/v1/chat/completions", this.permittedErrorPrefixes = [it, Te], typeof n === U && this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.openRouter) == null ? void 0 : r.function_handler), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "openai/gpt-4o"), (a = this.rawBody).max_tokens ?? (a.max_tokens = 1e3);
  }
  static getAudioContent(e) {
    return e.filter((t) => t[E] === $).map((t) => {
      var r, o, a;
      const n = (r = t[T]) == null ? void 0 : r.split(",")[1], s = (a = (o = t[T]) == null ? void 0 : o.match(/data:audio\/([^;]+)/)) == null ? void 0 : a[1];
      return {
        [E]: sn,
        [sn]: {
          data: n || "",
          format: s === "wav" || s === "mp3" ? s : "mp3"
        }
      };
    }).filter((t) => t[sn].data.length > 0);
  }
  static getContent(e) {
    if (e[b] && e[b].length > 0) {
      const t = [
        ...ps.getImageContent(e[b]),
        ...ps.getAudioContent(e[b])
      ];
      return e[h] && e[h].trim().length > 0 && t.unshift({ [E]: h, [h]: e[h] }), t.length > 0 ? t : e[h] || "";
    }
    return e[h] || "";
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((o) => ({
      content: ps.getContent(o),
      [x]: k.getRoleViaUser(o[x])
    })), r = [];
    return this.systemMessage && r.push({ [x]: Mn, content: this.systemMessage }), r.push(...s), n.messages = r, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    var n, s, r, o;
    if (e[f]) throw e[f].message;
    if (e.object === "chat.completion.chunk") {
      const a = (n = e.choices) == null ? void 0 : n[0];
      if (a != null && a.delta)
        return this.extractStreamResult(a, t);
      if ((s = e.message) != null && s[ee]) {
        const c = e.message[ee].map((l) => ({
          [T]: l[qe].url
        }));
        return {
          [h]: e.message.content || "",
          [b]: c
        };
      }
      return { [h]: "" };
    }
    if (e.object === "chat.completion") {
      const a = (r = e.choices) == null ? void 0 : r[0];
      if (a != null && a.message) {
        if (a.message.tool_calls)
          return this.handleToolsGeneric(
            { tool_calls: a.message.tool_calls },
            this.functionHandler,
            this.messages,
            t
          );
        const c = ((o = a.message[ee]) == null ? void 0 : o.map((l) => ({
          [T]: l[qe].url
        }))) || [];
        return {
          [h]: a.message.content || "",
          files: c
        };
      }
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    const { delta: n } = e;
    if (n != null && n[ee]) {
      const s = n[ee].map((r) => ({
        [T]: r[qe].url
      }));
      return {
        [h]: n.content || "",
        [b]: s
      };
    }
    return this.extractStreamResultWToolsGeneric(this, e, this.functionHandler, t);
  }
}
const bd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), yd = (i, e, t, n) => {
  i[f] ? n(pe) : t(e);
}, _d = () => be("https://api.perplexity.ai/chat/completions", ye, yd);
class Ed extends k {
  constructor(e) {
    var s;
    const n = C(e.directConnection).perplexity;
    super(e, _d(), bd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Perplexity"), this.keyHelpUrl = "https://www.perplexity.ai/settings/api", this.url = "https://api.perplexity.ai/chat/completions", this.permittedErrorPrefixes = [zt, Ho, "Permission denied"], typeof n === U && this.completeConfig(n), this.maxMessages ?? (this.maxMessages = -1), (s = this.rawBody).model ?? (s.model = "sonar");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: r[h] || "",
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const t = e.choices[0];
      if (t.delta && t.delta.content)
        return { [h]: t.delta.content };
      if (t.message && t.message.content)
        return { [h]: t.message.content };
    }
    return { [h]: "" };
  }
}
const vd = (i) => ({
  [he]: `Bearer ${i}`,
  [q]: te
}), Sd = (i, e, t, n) => {
  const s = i;
  s.detail ? n(s.detail) : t(e);
}, xd = () => be("http://localhost:3000/api/v1/models", ue, Sd);
class Ad extends k {
  constructor(e) {
    var s, r, o, a;
    const n = C(e.directConnection).openWebUI;
    super(e, xd(), vd, n), this.insertKeyPlaceholderText = "Open WebUI API Key", this.keyHelpUrl = "https://docs.openwebui.com/getting-started/api-endpoints/", this.url = "http://localhost:3000/api/chat/completions", this.permittedErrorPrefixes = ["Error"], typeof n === U && (this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.openWebUI) == null ? void 0 : r.function_handler), n[b] && n[b].length > 0 && (this.rawBody[b] = n[b])), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "llama3.2"), (a = this.rawBody).stream ?? (a.stream = !1);
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: k.getTextWImagesContent(r),
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), { readable: !0 });
  }
  async extractResultData(e, t) {
    var n;
    if (e[f]) throw e[f].message;
    if (e[h]) {
      const s = e[h].trim();
      return this.processStreamingResponse(s, t);
    }
    if (e.choices && ((n = e.choices[0]) != null && n.message)) {
      const s = e.choices[0].message;
      return s.tool_calls ? this.handleTools({ tool_calls: s.tool_calls }, t) : { [h]: s.content || "" };
    }
    return { [h]: "" };
  }
  async processStreamingResponse(e, t) {
    var r;
    const n = e.split(`
`).filter((o) => o.trim() !== "");
    let s = "";
    for (const o of n) {
      let a = o.trim();
      if (a.startsWith("data: ") && (a = a.substring(6)), a !== "[DONE]")
        try {
          const c = JSON.parse(a);
          if (c.choices && ((r = c.choices[0]) != null && r.delta)) {
            const l = c.choices[0].delta;
            if (l.tool_calls)
              return this.handleTools({ tool_calls: l.tool_calls }, t);
            l.content && (s += l.content);
          }
        } catch {
          continue;
        }
    }
    return { [h]: s };
  }
  async handleTools(e, t) {
    if (!e.tool_calls || !t || !this.functionHandler)
      throw Error(Gt);
    const n = C(t), s = e.tool_calls.map((a) => ({ name: a.function.name, arguments: a.function.arguments })), { responses: r, processedResponse: o } = await this.callToolFunction(this.functionHandler, s);
    if (o) return o;
    if (n.messages.push({ tool_calls: e.tool_calls, [x]: gt, content: "" }), !r.find(({ response: a }) => typeof a !== Ee) && s.length === r.length)
      return r.forEach((a, c) => {
        var d;
        const l = (d = e.tool_calls) == null ? void 0 : d[c];
        n == null || n.messages.push({
          [x]: "tool",
          tool_name: l == null ? void 0 : l.function.name,
          content: a.response
        });
      }), this.makeAnotherRequest(n, this.messages);
    throw Error(an);
  }
}
const wd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Cd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === Te ? n(pe) : n(Ue) : t(e);
}, Td = () => be("https://api.deepseek.com/models", ue, Cd);
class Rd extends k {
  constructor(e) {
    var s, r, o;
    const n = C(e.directConnection).deepSeek;
    super(e, Td(), wd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("DeepSeek"), this.keyHelpUrl = "https://platform.deepseek.com/api_keys", this.url = "https://api.deepseek.com/v1/chat/completions", this.permittedErrorPrefixes = [it, Te], typeof n === U && this.completeConfig(n), this.maxMessages ?? (this.maxMessages = -1), (s = this.rawBody).model ?? (s.model = "deepseek-chat"), (r = this.rawBody).temperature ?? (r.temperature = 1), (o = this.rawBody).max_tokens ?? (o.max_tokens = 4096);
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: r[h] || "",
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const t = e.choices[0];
      if (t.delta && t.delta.content)
        return { [h]: t.delta.content };
      if (t.message && t.message.content)
        return { [h]: t.message.content };
    }
    return { [h]: "" };
  }
}
const Id = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Md = (i, e, t, n) => {
  var r;
  ((r = i.base_resp) == null ? void 0 : r.status_code) === 1004 ? n(pe) : t(e);
}, kd = () => be(
  "https://api.minimax.io/v1/files/delete",
  ye,
  Md
);
class Pd extends k {
  constructor(e) {
    var s;
    const n = C(e.directConnection).miniMax;
    super(e, kd(), Id, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("MiniMax"), this.keyHelpUrl = "https://www.minimaxi.com", this.url = "https://api.minimax.io/v1/text/chatcompletion_v2", this.permittedErrorPrefixes = [it, Te, "insufficient balance"], typeof n === U && this.completeConfig(n), this.maxMessages ?? (this.maxMessages = -1), (s = this.rawBody).model ?? (s.model = "MiniMax-M1");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: r[h] || "",
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e) {
    var t;
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const n = e.choices[0];
      if (n.delta && n.delta.content)
        return { [h]: n.delta.content };
      if (n.message && n.message.content)
        return { [h]: n.message.content };
    }
    if (typeof ((t = e.base_resp) == null ? void 0 : t.status_code) == "number" && e.base_resp.status_code > 0)
      throw e.base_resp.status_msg;
    return { [h]: "" };
  }
}
const Ld = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te,
  accept: te
}), Od = (i, e, t, n) => {
  i.detail ? n(pe) : t(e);
}, Nd = () => be("https://api.mistral.ai/v1/models", ue, Od);
class Er extends k {
  constructor(e) {
    var s, r, o;
    const n = C(e.directConnection).mistral;
    super(e, Nd(), Ld, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Mistral"), this.keyHelpUrl = "https://console.mistral.ai/api-keys/", this.url = "https://api.mistral.ai/v1/chat/completions", this.permittedErrorPrefixes = [zt], typeof n === U && this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.mistral) == null ? void 0 : r.function_handler), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "mistral-small-latest");
  }
  static getFileContent(e) {
    return e.map((t) => t[E] === W ? { [E]: qe, [qe]: t[T] || "" } : { [E]: h, [h]: `[Unsupported ${se} ${E}: ${t[E]}]` });
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      [x]: k.getRoleViaAI(r[x]),
      content: k.getTextWFilesContent(r, Er.getFileContent)
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    if (e.message) throw e.message;
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const n = e.choices[0];
      if (n.delta)
        return this.extractStreamResult(n, t);
      if (n.message)
        return n.message.tool_calls ? this.handleToolsGeneric(
          { tool_calls: n.message.tool_calls },
          this.functionHandler,
          this.messages,
          t
        ) : { [h]: n.message.content || "" };
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    const { delta: n, finish_reason: s } = e;
    if (s === "tool_calls" && (n != null && n.tool_calls)) {
      const r = { tool_calls: n.tool_calls };
      return this.handleToolsGeneric(r, this.functionHandler, this.messages, t);
    }
    return { [h]: (n == null ? void 0 : n.content) || "" };
  }
}
class vr extends k {
  constructor(e) {
    var r, o, a, c, l;
    const t = C(e.directConnection), n = t.groq;
    super(e, ca(), aa, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Groq"), this.keyHelpUrl = "https://console.groq.com/keys", this.url = "https://api.groq.com/openai/v1/chat/completions", this.permittedErrorPrefixes = [zt, "property"];
    const s = (r = t.groq) == null ? void 0 : r.chat;
    typeof s === U && this.completeConfig(s, (c = (a = (o = e.directConnection) == null ? void 0 : o.groq) == null ? void 0 : a.chat) == null ? void 0 : c.function_handler), this.maxMessages ?? (this.maxMessages = -1), (l = this.rawBody).model ?? (l.model = "llama-3.3-70b-versatile");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: vr.getTextWImagesContent(r),
      [x]: r[x] === ne ? gt : r[x]
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    var n, s, r, o;
    if (e[f]) throw e[f].message;
    return (s = (n = e.choices) == null ? void 0 : n[0]) != null && s.delta ? this.extractStreamResult(e.choices[0], t) : (o = (r = e.choices) == null ? void 0 : r[0]) != null && o.message ? e.choices[0].message.tool_calls ? this.handleToolsGeneric(e.choices[0].message, this.functionHandler, this.messages, t, {
      message: this.systemMessage
    }) : { [h]: e.choices[0].message.content || "" } : { [h]: "" };
  }
  // https://console.groq.com/docs/tool-use
  async extractStreamResult(e, t) {
    return this.extractStreamResultWToolsGeneric(this, e, this.functionHandler, t);
  }
}
const Bd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te,
  accept: te
}), Dd = (i, e, t, n) => {
  typeof i.message === Ee ? n(pe) : t(e);
}, Fd = () => be("https://api.cohere.ai/v1/models", ue, Dd);
class ci extends k {
  constructor(e) {
    var s;
    const n = C(e.directConnection).cohere;
    if (super(e, Fd(), Bd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Cohere"), this.keyHelpUrl = "https://dashboard.cohere.ai/api-keys", this.permittedErrorPrefixes = ["invalid"], this.url = "https://api.cohere.com/v2/chat", typeof n === U) {
      const r = le.processCohere(n);
      this.canSendMessage = () => r, this.cleanConfig(n), Object.assign(this.rawBody, n);
    }
    this.maxMessages ?? (this.maxMessages = -1), (s = this.rawBody).model ?? (s.model = "command-a-03-2025");
  }
  cleanConfig(e) {
    delete e.key;
  }
  preprocessBody(e, t) {
    const n = C(e), s = t.filter((r) => r[h]);
    return n.messages = s.map((r) => ({
      [x]: k.getRoleViaAI(r[x]),
      content: r[h]
    })), n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), { readable: !0 });
  }
  async extractResultData(e) {
    var t, n, s;
    if (typeof e.message == "string") throw e.message;
    if (this.stream && e[h]) {
      const r = ci.parseBundledEvents(e[h]);
      return { text: ci.aggregateBundledEventsText(r) };
    }
    if ("message" in e && ((s = (n = (t = e.message) == null ? void 0 : t.content) == null ? void 0 : n[0]) != null && s[h]))
      return { [h]: e.message.content[0][h] };
    throw new Error("Invalid response format from Cohere API");
  }
  static parseBundledEvents(e) {
    const t = e.trim().split(`
`), n = [];
    for (const s of t)
      if (s.trim())
        try {
          const r = JSON.parse(s);
          n.push(r);
        } catch (r) {
          console[f]("Failed to parse line:", s, r);
        }
    return n;
  }
  static aggregateBundledEventsText(e) {
    return e.filter((t) => {
      var n, s, r;
      return t[E] === "content-delta" && ((r = (s = (n = t.delta) == null ? void 0 : n.message) == null ? void 0 : s.content) == null ? void 0 : r[h]);
    }).map((t) => {
      var n, s, r;
      return (r = (s = (n = t.delta) == null ? void 0 : n.message) == null ? void 0 : s.content) == null ? void 0 : r[h];
    }).join("");
  }
}
const Ud = () => ({
  [q]: te
}), Hd = (i, e, t, n) => {
  var r;
  const s = i;
  s[f] ? s[f].code === 403 || (r = s[f].message) != null && r.includes("API key") ? n(pe) : n(Ue) : t(e);
}, jd = () => {
  const i = "https://generativelanguage.googleapis.com/v1beta/models?key=";
  return be(i, ue, Hd, (e) => `${i}${e}`);
};
class Sr extends k {
  constructor(e) {
    var s, r;
    const n = C(e.directConnection).gemini;
    if (super(e, jd(), Ud, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Gemini"), this.keyHelpUrl = "https://aistudio.google.com/app/apikey", this.urlPrefix = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", this.url = "", this.permittedErrorPrefixes = ["API_KEY_INVALID"], typeof n === U) {
      const o = n;
      o.model && (this.urlPrefix = `https://generativelanguage.googleapis.com/v1beta/models/${o.model}:generateContent`), this.cleanConfig(o), this.completeConfig(o, (r = (s = e.directConnection) == null ? void 0 : s.gemini) == null ? void 0 : r.function_handler);
    }
    this.maxMessages ?? (this.maxMessages = -1);
  }
  cleanConfig(e) {
    delete e.model;
  }
  static getContent(e) {
    const t = [];
    return e[h] && e[h].trim().length > 0 && t.push({ [h]: e[h] }), e[b] && e[b].length > 0 && e[b].forEach((n) => {
      if (n[T] && n[T].includes("data:")) {
        const [s, r] = n[T].split(",");
        t.push({
          inlineData: {
            mimeType: s.replace("data:", "").replace(";base64", ""),
            data: r
          }
        });
      }
    }), {
      parts: t,
      [x]: e[x] === F ? F : "model"
    };
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => Sr.getContent(r));
    return n.contents = s, this.systemMessage && (n.systemInstruction = { parts: [{ [h]: this.systemMessage }] }), n;
  }
  async callServiceAPI(e, t) {
    if (!this.connectSettings) throw new Error(He);
    this.messages ?? (this.messages = e);
    const n = this.preprocessBody(this.rawBody, t), s = this.stream;
    s && (typeof s !== U || !s.simulation) || n.stream ? (this.url = `${this.urlPrefix.replace(":generateContent", ":streamGenerateContent")}?alt=sse&key=${this.key}`, V.request(this, n, e)) : (this.url = `${this.urlPrefix}?key=${this.key}`, ge.request(this, n, e));
  }
  // https://ai.google.dev/gemini-api/docs/function-calling?example=weather
  async extractResultData(e, t) {
    var n, s, r, o;
    if (e[f]) throw e[f].message || "Gemini API Error";
    if ((r = (s = (n = e.candidates) == null ? void 0 : n[0]) == null ? void 0 : s.content) != null && r.parts) {
      const a = e.candidates[0].content.parts, c = a.find((p) => p.functionCall);
      if (c != null && c.functionCall)
        return this.handleTools([c.functionCall], t);
      const l = a.find((p) => p[h]), d = a.find((p) => {
        var u;
        return ((u = p.inlineData) == null ? void 0 : u.mimeType) === "image/png";
      });
      return {
        [h]: (l == null ? void 0 : l[h]) || "",
        [b]: (o = d == null ? void 0 : d.inlineData) != null && o.data ? [{ [T]: `data:image/png;base64,${d.inlineData.data}` }] : []
      };
    }
    return { [h]: "" };
  }
  async handleTools(e, t) {
    if (!e || !t || !this.functionHandler)
      throw Error(Gt);
    const n = C(t), s = e.map((c) => ({ name: c.name, arguments: ce(c.args) })), { responses: r, processedResponse: o } = await this.callToolFunction(this.functionHandler, s);
    if (o) return o;
    const a = {
      parts: e.map((c) => ({
        functionCall: {
          name: c.name,
          args: c.args
        }
      })),
      [x]: "model"
    };
    if (n.contents.push(a), !r.find(({ response: c }) => typeof c !== Ee) && s.length === r.length) {
      const c = {
        parts: r.map((l, d) => ({
          functionResponse: {
            name: e[d].name,
            response: {
              result: l.response
            }
          }
        })),
        [x]: F
      };
      return n.contents.push(c), this.makeAnotherRequest(n, this.messages);
    }
    throw Error(an);
  }
}
const $d = (i) => ({
  "x-api-key": i,
  [q]: te,
  "anthropic-version": "2023-06-01",
  "anthropic-dangerous-direct-browser-access": "true"
}), qd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === Te ? n(pe) : n(Ue) : t(e);
}, Gd = () => be("https://api.anthropic.com/v1/models", ue, qd);
class li extends k {
  constructor(e) {
    var s, r, o, a;
    const n = C(e.directConnection).claude;
    if (super(e, Gd(), $d, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Claude"), this.keyHelpUrl = "https://console.anthropic.com/settings/keys", this.url = "https://api.anthropic.com/v1/messages", this.permittedErrorPrefixes = [Te, it], this._streamToolCalls = { [E]: "tool_use", id: "", name: "", input: "" }, typeof n === U) {
      const c = n;
      c.custom_base_url && (this.url = c.custom_base_url, delete c.custom_base_url), c.cache_control && (this._cacheControl = c.cache_control, delete c.cache_control), this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.claude) == null ? void 0 : r.function_handler);
    }
    this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "claude-sonnet-4-5-20250929"), (a = this.rawBody).max_tokens ?? (a.max_tokens = 4096);
  }
  static getFileContent(e) {
    return e.map((t) => {
      var n, s, r;
      if (t[E] === W) {
        const o = (n = t[T]) == null ? void 0 : n.split(",")[1], a = ((r = (s = t[T]) == null ? void 0 : s.match(/data:([^;]+)/)) == null ? void 0 : r[1]) || "image/jpeg";
        return { [E]: W, source: { [E]: "base64", media_type: a, data: o || "" } };
      }
      return { [E]: h, [h]: `[Unsupported ${se} ${E}: ${t[E]}]` };
    });
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: li.getTextWFilesContent(r, li.getFileContent),
      [x]: k.getRoleViaUser(r[x])
    }));
    return n.messages = s, this.systemMessage && (this._cacheControl ? n.system = [{ type: h, text: this.systemMessage, cache_control: this._cacheControl }] : n.system = this.systemMessage), n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    var n, s, r;
    if (e[f]) throw e[f].message;
    if (e.content && e.content.length > 0) {
      const o = e.content.find((c) => c[E] === "tool_use");
      if (o)
        return this.handleTools([o], t);
      const a = e.content.find((c) => c[E] === h);
      if (a)
        return { [h]: a[h] };
    }
    if (e[E] === "content_block_delta" && e.delta && e.delta[E] === "text_delta")
      return { [h]: e.delta[h] || "" };
    if (e[E] === "content_block_start" && ((n = e.content_block) == null ? void 0 : n[E]) === "tool_use")
      this._streamToolCalls = e.content_block, this._streamToolCalls.input = "";
    else if (e[E] === "content_block_delta" && ((s = e.delta) == null ? void 0 : s[E]) === "input_json_delta")
      this._streamToolCalls.input += e.delta.partial_json || "";
    else if (e[E] === "message_delta" && ((r = e.delta) == null ? void 0 : r.stop_reason) === "tool_use")
      return this._streamToolCalls.input = this._streamToolCalls.input ? JSON.parse(this._streamToolCalls.input) : {}, this.handleTools([this._streamToolCalls], t);
    return { [h]: "" };
  }
  async handleTools(e, t) {
    if (!e || !t || !this.functionHandler)
      throw Error(Gt);
    const n = C(t), s = e.map((c) => ({ name: c.name, arguments: ce(c.input) })), { responses: r, processedResponse: o } = await this.callToolFunction(this.functionHandler, s);
    if (o) return o;
    const a = e.map((c) => ({
      [E]: "tool_use",
      id: c.id,
      name: c.name,
      input: c.input
    }));
    if (n.messages.push({
      [x]: "assistant",
      content: a
    }), !r.find(({ response: c }) => typeof c !== Ee) && s.length === r.length) {
      const c = r.map((l, d) => ({
        [E]: "tool_result",
        tool_use_id: e[d].id,
        content: l.response
      }));
      return n.messages.push({ [x]: F, content: c }), this.makeAnotherRequest(n, this.messages);
    }
    throw Error(an);
  }
}
const zd = () => ({}), Vd = () => {
}, Kd = () => be("", ue, Vd), vs = class vs extends k {
  constructor(e) {
    var s, r, o, a;
    const t = C(e.directConnection);
    super(e, Kd(), zd, { key: "placeholder" }), this.insertKeyPlaceholderText = "", this.keyHelpUrl = "", this.validateKeyProperty = !1, this.url = "http://localhost:11434/api/chat", this.permittedErrorPrefixes = ["Error"];
    const n = t.ollama;
    typeof n === U && this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.ollama) == null ? void 0 : r.function_handler), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "llama3.2"), (a = this.rawBody).stream ?? (a.stream = !1);
  }
  static getImageData(e) {
    return e.filter((t) => t[E] === W).map((t) => {
      var s;
      return ((s = t[T]) == null ? void 0 : s.split(",")[1]) || "";
    }).filter((t) => t.length > 0);
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => {
      const o = {
        content: r[h] || "",
        [x]: k.getRoleViaUser(r[x])
      };
      if (r[b] && r[b].length > 0) {
        const a = vs.getImageData(r[b]);
        a.length > 0 && (o[ee] = a);
      }
      return o;
    });
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), { readable: !0 });
  }
  parseMessage(e) {
    return e.split(`
`).filter((t) => t.trim()).map((t) => JSON.parse(t));
  }
  async extractResultData(e, t) {
    var n, s;
    if (e[f]) throw e[f].message;
    if (e[h]) {
      const r = this.parseMessage(e[h]), o = [];
      for (const l of r)
        (n = l.message) != null && n.tool_calls && o.push(await this.handleTools({ tool_calls: l.message.tool_calls }, t)), o.push({ [h]: ((s = l.message) == null ? void 0 : s.content) || "" });
      const a = o.map((l) => l[h]), c = a.lastIndexOf(vs.THINK_END);
      return c === -1 || t != null && t.think ? { [h]: a.join("") } : { [h]: a.slice(c + 1).join(""), overwrite: !0 };
    }
    return e.message ? e.message.tool_calls ? this.handleTools({ tool_calls: e.message.tool_calls }, t) : { [h]: e.message.content || "" } : { [h]: "" };
  }
  async handleTools(e, t) {
    if (!e.tool_calls || !t || !this.functionHandler)
      throw Error(Gt);
    const n = C(t), s = e.tool_calls.map((a) => ({ name: a.function.name, arguments: ce(a.function.arguments) })), { responses: r, processedResponse: o } = await this.callToolFunction(this.functionHandler, s);
    if (o) return o;
    if (n.messages.push({ tool_calls: e.tool_calls, [x]: gt, content: "" }), !r.find(({ response: a }) => typeof a !== Ee) && s.length === r.length)
      return r.forEach((a, c) => {
        var d;
        const l = (d = e.tool_calls) == null ? void 0 : d[c];
        n == null || n.messages.push({
          [x]: "tool",
          tool_name: l == null ? void 0 : l.function.name,
          content: a.response
        });
      }), this.makeAnotherRequest(n, this.messages);
    throw Error(an);
  }
};
vs.THINK_END = "</think>";
let tr = vs;
const la = (i) => ({
  Authorization: `${Ce}${i}`,
  [q]: te
}), Wd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === Te || s[f][E] === it ? n(pe) : n(Ue) : t(e);
}, da = () => be("https://api.x.ai/v1/models", ue, Wd), gi = class gi extends k {
  constructor(e) {
    var r, o;
    const { directConnection: t } = e, n = t == null ? void 0 : t.x;
    super(e, da(), la, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("X"), this.keyHelpUrl = "https://console.x.ai/team/default/api-keys", this.url = gi.IMAGE_GENERATION_URL, this.permittedErrorPrefixes = [it, Te];
    const s = (r = t == null ? void 0 : t.x) == null ? void 0 : r[ee];
    typeof s === U && Object.assign(this.rawBody, s), (o = this.rawBody).model ?? (o.model = "grok-2-image");
  }
  preprocessBody(e, t) {
    const n = t[t.length - 1][h], s = C(e);
    return n && n !== "" && (s.prompt = n), s;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this));
  }
  async extractResultData(e) {
    if (e[f]) throw e[f].message;
    const t = e.data.map((n) => n.url ? { [T]: n.url, [E]: W } : { [T]: `${On}${n.b64_json}`, [E]: W });
    return { [b]: t };
  }
};
gi.IMAGE_GENERATION_URL = "https://api.x.ai/v1/images/generations";
let nr = gi;
const Xd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Zd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === it ? n(pe) : n(Ue) : t(e);
}, Yd = () => be(
  "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/models",
  ue,
  Zd
);
class xr extends k {
  constructor(e) {
    var s, r, o;
    const n = C(e.directConnection).qwen;
    super(e, Yd(), Xd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Qwen"), this.keyHelpUrl = "https://www.alibabacloud.com/help/en/model-studio/get-api-key", this.url = "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions", this.permittedErrorPrefixes = ["No static", "The model", Ps], typeof n === U && this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.qwen) == null ? void 0 : r.function_handler), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "qwen-plus");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: xr.getTextWImagesContent(r),
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const n = e.choices[0];
      if (n.delta)
        return this.extractStreamResult(n, t);
      if (n.message)
        return n.message.tool_calls ? this.handleToolsGeneric(
          { tool_calls: n.message.tool_calls },
          this.functionHandler,
          this.messages,
          t
        ) : { [h]: n.message.content || "" };
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    return this.extractStreamResultWToolsGeneric(this, e, this.functionHandler, t);
  }
}
const Jd = (i) => ({
  [he]: `${Ce}${i}`,
  [q]: te
}), Qd = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f][E] === Te ? n(pe) : n(Ue) : t(e);
}, eh = () => be("https://api.moonshot.ai/v1/models", ue, Qd);
class Ar extends k {
  constructor(e) {
    var s, r, o;
    const n = C(e.directConnection).kimi;
    super(e, eh(), Jd, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Kimi"), this.keyHelpUrl = "https://platform.moonshot.ai/console/api-keys", this.url = "https://api.moonshot.ai/v1/chat/completions", this.permittedErrorPrefixes = [zt, "Not found"], typeof n === U && this.completeConfig(n, (r = (s = e.directConnection) == null ? void 0 : s.kimi) == null ? void 0 : r.function_handler), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "moonshot-v1-8k");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: Ar.getTextWImagesContent(r),
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.messages ?? (this.messages = e), this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e, t) {
    if (e[f]) throw e[f].message;
    if (e.choices && e.choices.length > 0) {
      const n = e.choices[0];
      if (n.delta)
        return this.extractStreamResult(n, t);
      if (n.message)
        return n.message.tool_calls ? this.handleToolsGeneric(
          { tool_calls: n.message.tool_calls },
          this.functionHandler,
          this.messages,
          t
        ) : { [h]: n.message.content || "" };
    }
    return { [h]: "" };
  }
  async extractStreamResult(e, t) {
    return this.extractStreamResultWToolsGeneric(this, e, this.functionHandler, t);
  }
}
class th extends k {
  constructor(e) {
    var r, o;
    const t = C(e.directConnection), n = t.x;
    super(e, da(), la, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("X"), this.keyHelpUrl = "https://console.x.ai/team/default/api-keys", this.url = "https://api.x.ai/v1/chat/completions", this.permittedErrorPrefixes = [it, Te];
    const s = (r = t.x) == null ? void 0 : r.chat;
    typeof s === U && this.completeConfig(s), this.maxMessages ?? (this.maxMessages = -1), (o = this.rawBody).model ?? (o.model = "grok-3-latest");
  }
  preprocessBody(e, t) {
    const n = C(e), s = this.processMessages(t).map((r) => ({
      content: r[h] || "",
      [x]: k.getRoleViaUser(r[x])
    }));
    return this.addSystemMessage(s), n.messages = s, n;
  }
  async callServiceAPI(e, t) {
    this.callDirectServiceServiceAPI(e, t, this.preprocessBody.bind(this), {});
  }
  async extractResultData(e) {
    var t, n, s, r;
    if (e[f]) throw e[f].message;
    if (e.object === "chat.completion.chunk") {
      const o = (t = e.choices) == null ? void 0 : t[0];
      return (n = o == null ? void 0 : o.delta) != null && n.content ? { [h]: o.delta.content } : { [h]: "" };
    }
    return e.object === "chat.completion" && ((r = (s = e.choices) == null ? void 0 : s[0]) != null && r.message) ? { [h]: e.choices[0].message.content || "" } : { [h]: "" };
  }
}
var qs = /* @__PURE__ */ ((i) => (i.BLOCKING = "blocking", i.STREAMING = "streaming", i))(qs || {}), _n = /* @__PURE__ */ ((i) => (i.MESSAGE = "message", i.AGENT_MESSAGE = "agent_message", i.WORKFLOW_FINISHED = "workflow_finished", i.ERROR = "error", i))(_n || {});
const nh = "image/", sh = "data:", ih = (i, e) => ({
  type: e,
  transfer_method: "local_file",
  upload_file_id: i
}), rh = (i) => {
  const e = i.trim();
  if (!e.startsWith(sh)) return null;
  const t = e.replace(/^data:\s*/, "").trim();
  return t ? JSON.parse(t) : null;
};
async function oh(i, e) {
  const t = new FormData();
  t.append(se, i), t.append(F, e[F]);
  const { [q]: n, ...s } = e.headers, r = await fetch(e.url, { method: ye, headers: s, body: t });
  if (!r.ok) {
    const a = await r.text();
    throw new Error(a);
  }
  const o = await r.json();
  if (!o.id) throw new Error("Upload response missing file ID");
  return o.id;
}
async function ah(i, e) {
  if (i.length === 0) return [];
  const t = i.map(async (s) => {
    const r = await oh(s, e), o = s[E].startsWith(nh) ? W : se;
    return ih(r, o);
  });
  return (await Promise.all(t)).filter((s) => s !== null);
}
function ch(i, e) {
  return i.conversation_id && e(i.conversation_id), i.code && i.message && !i.answer ? { [f]: i.message } : { [h]: i.answer || "" };
}
const lh = (i, e, t) => {
  var n, s;
  switch (!e.conversationIdSet && i.conversation_id && (t(i.conversation_id), e.conversationIdSet = !0), i.event) {
    case _n.MESSAGE:
    case _n.AGENT_MESSAGE:
      e.fullAnswer += i.answer || "";
      break;
    case _n.WORKFLOW_FINISHED:
      !e.fullAnswer && ((s = (n = i.data) == null ? void 0 : n.outputs) != null && s.answer) && (e.fullAnswer = i.data.outputs.answer);
      break;
    case _n.ERROR:
      e.errorMessage = i.message || _n.ERROR;
      break;
  }
};
async function dh(i, e) {
  const t = { fullAnswer: "", conversationIdSet: !1, errorMessage: "" }, s = (await i.text()).split(/\r?\n\r?\n/);
  for (const r of s) {
    const o = rh(r);
    o && lh(o, t, e);
  }
  return t.errorMessage ? { [f]: t.errorMessage } : { [h]: t.fullAnswer };
}
const hh = (i) => ({
  [q]: te,
  [he]: `${Ce}${i}`
}), uh = (i, e, t, n) => {
  const s = i;
  s[f] ? s[f].message === yi ? n(pe) : n(Ue) : "user_input_form" in i || "opening_statement" in i || "file_upload" in i ? t(e) : n(Ue);
}, ph = (i) => be(`${i}/parameters`, ue, uh);
class fh extends k {
  constructor(e) {
    var r;
    const t = C(e.directConnection), n = t == null ? void 0 : t.dify, s = ((r = e.connect) == null ? void 0 : r.url) ?? "https://api.dify.ai/v1";
    super(e, ph(s), hh, n), this.insertKeyPlaceholderText = this.genereteAPIKeyName("Dify"), this.keyHelpUrl = "https://docs.dify.ai/en/use-dify/publish/developing-with-apis", this.permittedErrorPrefixes = [Te], this._conversationId = "", this._user = F, this._inputs = {}, this.url = `${s}/chat-messages`, this._uploadUrl = `${s}/${b}/upload`, typeof n === U && (n[F] && (this._user = n[F]), n.inputs && (this._inputs = n.inputs), this.completeConfig(n)), this.maxMessages ?? (this.maxMessages = -1), this._mode = this.stream ? qs.STREAMING : qs.BLOCKING;
  }
  preprocessBody(e, t, n) {
    const s = this.processMessages(t), r = s[s.length - 1], o = (r == null ? void 0 : r[h]) || " ", a = { inputs: this._inputs, query: o, response_mode: this._mode, [F]: this._user };
    return this._conversationId && (a.conversation_id = this._conversationId), n && n.length > 0 && (a[b] = n), a;
  }
  async callServiceAPI(e, t, n) {
    this.messages ?? (this.messages = e);
    let s = [];
    n && n.length > 0 && (s = await ah(n, {
      url: this._uploadUrl,
      [F]: this._user,
      headers: this.connectSettings.headers
    })), this.callDirectServiceServiceAPI(
      e,
      t,
      (r, o) => this.preprocessBody(r, o, s)
    );
  }
  async extractResultData(e) {
    const t = (n) => {
      this._conversationId = n;
    };
    return this._mode === qs.BLOCKING && !this.stream ? ch(e, t) : dh(e, t);
  }
}
class mh {
  // this should only be called when no _activeService is set or is demo as otherwise we don't want to reconnect
  static create(e) {
    const { directConnection: t, connect: n, demo: s, webModel: r } = e;
    if (r)
      return new Ts(e);
    if (t) {
      if (t.openAI)
        return t.openAI[ee] ? new er(e) : t.openAI.speechToText ? new Zi(e) : t.openAI.textToSpeech ? new Xi(e) : t.openAI.assistant ? new br(e) : t.openAI.realtime ? new Wi(e) : t.openAI.completions ? new ri(e) : new oi(e);
      if (t.assemblyAI)
        return new yr(e);
      if (t.cohere)
        return new ci(e);
      if (t.huggingFace)
        return t.huggingFace.textGeneration ? new Bl(e) : t.huggingFace.summarization ? new Fl(e) : t.huggingFace.translation ? new Hl(e) : t.huggingFace.fillMask ? new jl(e) : t.huggingFace.questionAnswer ? new Dl(e) : t.huggingFace.audioSpeechRecognition ? new Nl(e) : t.huggingFace.audioClassification ? new Pl(e) : t.huggingFace.imageClassification ? new Ll(e) : new Ul(e);
      if (t.azure) {
        if (t.azure.openAI) {
          if (t.azure.openAI.chat)
            return new _r(e);
          if (t.azure.openAI.assistant)
            return new Vi(e);
        }
        if (t.azure.speechToText)
          return new Qi(e);
        if (t.azure.textToSpeech)
          return new Ji(e);
        if (t.azure.summarization)
          return new Yi(e);
        if (t.azure.translation)
          return new cd(e);
      }
      if (t.stabilityAI)
        return t.stabilityAI.imageToImage ? new Qs(e) : t.stabilityAI.imageToImageUpscale ? new Ys(e) : t.stabilityAI.imageToImageMasking ? new Js(e) : new ei(e);
      if (t.mistral)
        return new Er(e);
      if (t.gemini)
        return new Sr(e);
      if (t.claude)
        return new li(e);
      if (t.deepSeek)
        return new Rd(e);
      if (t.miniMax)
        return new Pd(e);
      if (t.openRouter)
        return new ps(e);
      if (t.kimi)
        return new Ar(e);
      if (t.x)
        return t.x[ee] ? new nr(e) : new th(e);
      if (t.qwen)
        return new xr(e);
      if (t.together)
        return t.together[ee] ? new ud(e) : t.together.textToSpeech ? new zl(e) : new pd(e);
      if (t.bigModel)
        return t.bigModel[ee] ? new ld(e) : t.bigModel.textToSpeech ? new ql(e) : new ai(e);
      if (t.groq)
        return t.groq.textToSpeech ? new hd(e) : new vr(e);
      if (t.perplexity)
        return new Ed(e);
      if (t.ollama)
        return new tr(e);
      if (t.openWebUI)
        return new Ad(e);
      if (t.dify)
        return new fh(e);
    }
    return n && Object.keys(n).length > 0 && !s ? new un(e) : new un(e, void 0, s || !0);
  }
}
const Qt = class Qt {
  static attemptAppendStyleSheetToHead(e, t) {
    const n = e.fontFamily || t;
    if (n && n !== Qt.DEFAULT_FONT_FAMILY) return;
    const s = document.getElementsByTagName("head")[0];
    if (!Array.from(s.getElementsByTagName("link")).some(
      (o) => o.getAttribute("href") === Qt.FONT_URL
    )) {
      const o = A("link");
      o.rel = "stylesheet", o.href = Qt.FONT_URL, s.appendChild(o);
    }
  }
};
Qt.FONT_URL = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", Qt.DEFAULT_FONT_FAMILY = "'Inter', sans-serif, Avenir, Helvetica, Arial";
let sr = Qt;
const Pr = class Pr {
};
Pr.attibutes = {
  string: (e) => e,
  number: (e) => parseFloat(e),
  boolean: (e) => e === "true",
  object: (e) => JSON.parse(e),
  array: (e) => JSON.parse(e),
  function: (e) => new Function(`return ${e}`)()
};
let ir = Pr;
function O(i) {
  return function(e, t) {
    Object.defineProperty(e, t, {});
    const n = e.constructor, s = t.toLocaleLowerCase();
    n._attributes_[s] = ir.attibutes[i], n._attributeToProperty_[s] = t;
  };
}
const gh = "deep-chat-downwards-mode", bh = "deep-chat-upwards-mode", jn = "submit-button", Hs = "loading-button", $n = "disabled-button", io = "text-input-container-start-adjustment", ro = "text-input-container-end-adjustment", oo = "text-input-container-start-small-adjustment", ao = "text-input-container-end-small-adjustment";
class wr {
  constructor(e) {
    this._isDisplayed = !1, this._elementRef = this.createIntroPanelWithChild(e), this._isDisplayed = !0;
  }
  static createIntroPanel() {
    const e = A();
    return e[m].add("intro-panel"), Object.assign(e[v]), e;
  }
  createIntroPanelWithChild(e) {
    const t = wr.createIntroPanel();
    return e[v].display === "none" && (e[v].display = "block"), t.appendChild(e), t;
  }
  hide() {
    this._isDisplayed && (this._elementRef[v].display = "none", this._isDisplayed = !1);
  }
  display() {
    this._isDisplayed || (this._elementRef[v].display = "", this._isDisplayed = !0);
  }
}
const yh = `<?xml version="1.0" encoding="iso-8859-1"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="50 30 420 450" xml:space="preserve">
<g filter="brightness(0) saturate(100%) invert(16%) sepia(0%) saturate(1942%) hue-rotate(215deg) brightness(99%) contrast(93%)">
	<g>
		<path d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008
			C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237
			h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931
			l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278
			c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239
			h66.527V486.763z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/>
	</g>
</g>
<g>
	<g>
		<path d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175
			c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/>
	</g>
</g>
<g>
	<g>
		<path d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256
			c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/>
	</g>
</g>
</svg>`, Ie = class Ie {
  static createImage(e, t) {
    const n = new Image();
    return n[T] = e[T], t && Se.scrollDownOnImageLoad(n[T], t), Se.processContent(W, n, n[T], e.name);
  }
  // WORK - image still does not scroll down when loaded
  static createImageMessage(e, t, n, s, r) {
    const o = e.createNewMessageElement("", n, s), a = !s && r ? e.scrollToFirstElement.bind(e, n, r) : void 0, c = Ie.createImage(t, a);
    return o.bubbleElement.appendChild(c), o.bubbleElement[m].add(Ie.IMAGE_BUBBLE_CLASS), { [E]: W, elements: o };
  }
  static createAudioElement(e, t) {
    const n = A($);
    return n[T] = e[T], n[m].add("audio-player"), n.controls = !0, $e.IS_SAFARI && (n[m].add("audio-player-safari"), n[m].add(t === F ? "audio-player-safari-end" : "audio-player-safari-start")), n;
  }
  static autoPlayAudio(e) {
    e.addEventListener("loadeddata", () => {
      e.play().catch((t) => {
        console.warn("Auto-play failed:", t);
      });
    });
  }
  static createNewAudioMessage(e, t, n, s) {
    const r = Ie.createAudioElement(t, n), o = e.createMessageElementsOnOrientation("", n, s);
    return o.bubbleElement.appendChild(r), o.bubbleElement[m].add(Ie.AUDIO_BUBBLE_CLASS), { [E]: $, elements: o, audioElement: r };
  }
  static createAnyFile(e) {
    const t = A();
    t[m].add("any-file-message-contents");
    const n = A();
    n[m].add("any-file-message-icon-container");
    const s = kt.createSVGElement(yh);
    s[m].add("any-file-message-icon"), n.appendChild(s);
    const r = A();
    return r[m].add("any-file-message-text"), r.textContent = e.name || se, t.appendChild(n), t.appendChild(r), Se.processContent(on, t, e[T], r.textContent);
  }
  static createNewAnyFileMessage(e, t, n, s) {
    const r = e.createMessageElementsOnOrientation("", n, s), o = Ie.createAnyFile(t);
    return r.bubbleElement[m].add(Ie.ANY_FILE_BUBBLE_CLASS), r.bubbleElement.appendChild(o), { [E]: se, elements: r };
  }
  static createMessages(e, t, n, s, r = !1) {
    return t.map((o, a) => {
      var c;
      if (o.ref && (o = Se.removeFileRef(o)), Se.isAudioFile(o)) {
        const l = Ie.createNewAudioMessage(e, o, n, r), d = (c = e.textToSpeech) == null ? void 0 : c.audio;
        return d && (d.autoPlay && Ie.autoPlayAudio(l.audioElement), typeof d.displayAudio == "boolean" && !d.displayAudio) ? void 0 : l;
      }
      return Se.isImageFile(o) ? Ie.createImageMessage(e, o, n, r, s && a === 0) : Ie.createNewAnyFileMessage(e, o, n, r);
    }).filter((o) => o !== void 0);
  }
  // no overwrite previous message logic as it is complex to track which files are to be overwritten
  static addMessages(e, t, n, s, r) {
    Ie.createMessages(e, t, n, s, r).filter((a) => a !== void 0).forEach(({ [E]: a, elements: c }) => {
      Se.addMessage(e, c, a, n, r);
    });
  }
};
Ie.IMAGE_BUBBLE_CLASS = "image-message", Ie.AUDIO_BUBBLE_CLASS = "audio-message", Ie.ANY_FILE_BUBBLE_CLASS = "any-file-message";
let di = Ie;
class Qe {
  static removeElements(e, t) {
    if (!t) return;
    const n = e.findIndex((s) => s === t);
    e.splice(n, 1), t == null || t.outerContainer.remove();
  }
  static removeFilesMessages(e, t) {
    var n;
    (n = t[1][b]) == null || n.forEach((s) => {
      Qe.removeElements(e.messageElementRefs, s);
    }), delete t[0][b], delete t[1][b];
  }
  static removeTextHTMLMessage(e, t, n) {
    const s = t[1][n];
    Qe.removeElements(e.messageElementRefs, s), delete t[0][n], delete t[1][n];
  }
  static updateHTMLMessage(e, t, n) {
    var s, r, o;
    if (t[1][L])
      yt.overwriteElements(e, n, t[1][L]);
    else {
      const a = yt.create(e, n, t[0][x]), c = ((r = t[1][b]) == null ? void 0 : r[((s = t[1][b]) == null ? void 0 : s.length) - 1]) || t[1][h], { nextSibling: l } = c.outerContainer;
      (o = l == null ? void 0 : l.parentElement) == null || o.insertBefore(a.outerContainer, l), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1);
      const d = e.messageElementRefs.findIndex((p) => p === c);
      e.messageElementRefs.splice(d + 1, 0, a), t[1][L] = a;
    }
    t[0][L] = n;
  }
  // finds beforeElement, creates new elements, remove old and adds new ones
  static updateFileMessages(e, t, n) {
    var p, u;
    const s = t[0][x], r = di.createMessages(e, n, s, !1), o = t[1][L], a = ((u = t[1][b]) == null ? void 0 : u[((p = t[1][b]) == null ? void 0 : p.length) - 1]) || t[1][h], c = o || a;
    let l = e.messageElementRefs.findIndex((g) => g === c);
    a && (l += 1);
    const d = (o == null ? void 0 : o.outerContainer) || (a == null ? void 0 : a.outerContainer.nextSibling);
    r.forEach(({ type: g, elements: y }, _) => {
      var S;
      Se.setElementProps(e, y, g, s), (S = d.parentElement) == null || S.insertBefore(y.outerContainer, d), e.messageElementRefs.splice(e.messageElementRefs.length - 1, 1), e.messageElementRefs.splice(l + _, 0, y);
    }), Qe.removeFilesMessages(e, t), t[1][b] = r.map(({ elements: g }) => g), t[0][b] = n;
  }
  static updateTextMessage(e, t, n) {
    var s, r;
    if (t[1][h])
      e.renderText(t[1][h].bubbleElement, n, t[0][x]);
    else {
      const o = e.createElements(n, t[0][x]), a = ((s = t[1][b]) == null ? void 0 : s[0]) || t[1][L];
      (r = a.outerContainer.parentElement) == null || r.insertBefore(o.outerContainer, a.outerContainer);
      const c = e.messageElementRefs.findIndex((l) => l === a);
      e.messageElementRefs.splice(c, 0, o), t[1][h] = o;
    }
    t[0][h] = n;
  }
  static isElementActive(e) {
    var t, n;
    return tt.isActiveElement((t = e[h]) == null ? void 0 : t.bubbleElement[m]) || tt.isActiveElement((n = e[L]) == null ? void 0 : n.bubbleElement[m]);
  }
  // note that overwrite and 'deep-chat-temporary-message' are used to remove a message
  static update(e, t, n) {
    const s = e.messageToElements[n];
    if (s) {
      if (Qe.isElementActive(s[1]))
        return console[f]("Cannot update a message that is being streamed");
      t[h] && Qe.updateTextMessage(e, s, t[h]), t[b] ? Qe.updateFileMessages(e, s, t[b]) : Qe.removeFilesMessages(e, s), t[L] && Qe.updateHTMLMessage(e, s, t[L]), !t[h] && s[1][h] && Qe.removeTextHTMLMessage(e, s, h), !t[L] && s[1][L] && Qe.removeTextHTMLMessage(e, s, L);
      const { messageElementRefs: r, avatar: o, name: a } = e;
      B.classifyRoleMessages(r), B.resetAllRoleElements(r, o, a);
    } else
      console[f]("Message index not found. Please use the `getMessages` method to find the correct index");
  }
}
class _h {
  static getText(e, t) {
    var n, s;
    if (!e.directConnection && !e.connect && !e.webModel && !e.demo)
      return `Connect to any API using the [connect](${Z}connect#connect-1) property or a popular service via [directConnection](${Z}directConnection/#directConnection).
 Host AI entirely on your browser via a [webModel](${Z}webModel).
 To get started checkout the [Start](https://deepchat.dev/start) page and live code [examples](https://deepchat.dev/examples/frameworks).
 To remove this message set the [demo](${Z}modes#demo) property to true.`;
    if (e.directConnection) {
      if (!t.isDirectConnection())
        return `Please define a valid service inside
          the [directConnection](${Z}directConnection/#directConnection) object.`;
      const r = (n = e.directConnection.openAI) == null ? void 0 : n.chat;
      if (typeof r == "object" && ((s = r.tools) != null && s.find((o) => o[E] === "function")) && !r.function_handler)
        return `Please define the \`function_handler\` property inside the openAI [chat](${Z}directConnection/openAI#Chat) object.`;
    } else if (e.connect && !e.connect.url && !e.connect.handler)
      return `Please define a \`url\` or a \`handler\` property inside the [connect](${Z}connect#connect-1) object.`;
    return null;
  }
}
class tt extends nt {
  constructor(e, t, n) {
    var a, c;
    super(e);
    const { permittedErrorPrefixes: s, demo: r } = t;
    this._errorMessageOverrides = (a = e.errorMessages) == null ? void 0 : a.overrides, this._onClearMessages = hn.onClearMessages.bind(this, e), this._onError = hn.onError.bind(this, e), this._isLoadingMessageAllowed = tt.getDefaultDisplayLoadingMessage(e, t), typeof e.displayLoadingBubble == "object" && e.displayLoadingBubble.toggle && (e.displayLoadingBubble.toggle = this.setLoadingToggle.bind(this)), this._permittedErrorPrefixes = s, this.addSetupMessageIfNeeded(e, t) || this.populateIntroPanel(n), r && this.prepareDemo(le.processDemo(r), e.loadHistory), this.addIntroductoryMessages(e, t);
    const o = new Cs(e, this, t);
    this._displayServiceErrorMessages = (c = e.errorMessages) == null ? void 0 : c.displayServiceErrorMessages, e.getMessages = () => B.deepCloneMessagesWithReferences(this.messageToElements.map(([l]) => l)), e.clearMessages = this.clearMessages.bind(this, t), e.refreshMessages = this.refreshTextMessages.bind(this, e.remarkable), e.scrollToBottom = z.scrollToBottom.bind(this, this), e.addMessage = (l, d) => {
      this.addAnyMessage({ ...l, sendUpdate: !!d }, !d);
    }, e.updateMessage = (l, d) => Qe.update(this, l, d), t.isWebModel() && t.setUpMessages(this), e.textToSpeech && Rn.processConfig(e.textToSpeech, (l) => {
      this.textToSpeech = l;
    }), this.elementRef.onscroll = async () => {
      var l, d;
      e.loadHistory && o.loadHistoryOnScroll(e.loadHistory), (l = this.scrollButton) == null || l.updateScroll(), (d = this.browserStorage) != null && d.trackScrollHeight && this.browserStorage.addScrollHeight(this.elementRef.scrollTop);
    };
  }
  static getDefaultDisplayLoadingMessage(e, t) {
    return typeof e.displayLoadingBubble == "object" && e.displayLoadingBubble.toggle ? !1 : t.websocket ? typeof e.displayLoadingBubble === U ? !1 : !!e.displayLoadingBubble : (typeof e.displayLoadingBubble === U || e.displayLoadingBubble) ?? !0;
  }
  setLoadingToggle(e) {
    const t = this.messageElementRefs[this.messageElementRefs.length - 1], n = nt.isLoadingMessage(t);
    if (!e && n)
      this.removeLastMessage(), delete this._activeLoadingConfig;
    else {
      if (this._activeLoadingConfig && n) {
        const s = oe.getTargetWrapper(t.bubbleElement);
        if (s)
          return this._activeLoadingConfig = e || {}, this.updateLoadingMessage(s);
        this.removeLastMessage();
      }
      this._activeLoadingConfig = e || {}, this.addLoadingMessage(!0);
    }
  }
  prepareDemo(e, t) {
    var n;
    if (typeof e == "object") {
      if (!t && e.displayLoading) {
        const { history: s } = e.displayLoading;
        s != null && s.small && Mt.addMessage(this, !1), s != null && s.full && Mt.addMessage(this);
      }
      e.displayErrors && (e.displayErrors[w] && this.addNewErrorMessage("", ""), e.displayErrors.service && this.addNewErrorMessage(ae, ""), e.displayErrors.speechToText && this.addNewErrorMessage("speechToText", "")), (n = e.displayLoading) != null && n.message && this.addLoadingMessage(), e.response && (this.customDemoResponse = e.response);
    }
  }
  addSetupMessageIfNeeded(e, t) {
    const n = _h.getText(e, t);
    if (n) {
      const s = this.createAndAppendNewMessageElement(n, ne);
      this.applyCustomStyles(s, ne, !1);
    }
    return !!n;
  }
  // WORK - const file for deep chat classes
  addIntroductoryMessages(e, t) {
    e != null && e.shadowRoot && (this._introMessage = e.introMessage);
    let n = this._introMessage;
    t != null && t.isWebModel() && (n ?? (n = t.getIntroMessage(n)));
    const s = !(e != null && e.history) && !!(e != null && e.loadHistory || t != null && t.fetchHistory);
    n && (Array.isArray(n) ? n.forEach((r, o) => {
      if (o !== 0) {
        const a = this.messageElementRefs[this.messageElementRefs.length - 1].innerContainer;
        B.hideRoleElements(a, this.avatar, this.name);
      }
      this.addIntroductoryMessage(r, s);
    }) : this.addIntroductoryMessage(n, s));
  }
  addIntroductoryMessage(e, t) {
    var s;
    let n;
    return e != null && e[h] ? n = this.createAndAppendNewMessageElement(e[h], ne) : e != null && e[L] && (n = yt.add(this, e[L], ne)), n && (this.applyCustomStyles(n, ne, !1, (s = this.messageStyles) == null ? void 0 : s.intro), n.outerContainer[m].add(nt.INTRO_CLASS), t && (n.outerContainer[v].display = "none")), n;
  }
  removeIntroductoryMessage() {
    const e = this.messageElementRefs[0];
    e.outerContainer[m].contains(nt.INTRO_CLASS) && (e.outerContainer.remove(), this.messageElementRefs.shift());
  }
  addAnyMessage(e, t = !1, n = !1) {
    return e[f] ? this.addNewErrorMessage(ae, e[f], n) : this.addNewMessage(e, t, n);
  }
  tryAddTextMessage(e, t, n, s = !1, r = !1) {
    e[h] !== void 0 && n[h] !== null && (this.addNewTextMessage(e[h], e[x], t, r), !s && this.textToSpeech && e[x] !== F && Rn.speak(e[h], this.textToSpeech));
  }
  tryAddFileMessages(e, t, n = !1) {
    e[b] && Array.isArray(e[b]) && di.addMessages(this, e[b], e[x], t, n);
  }
  tryAddHTMLMessage(e, t, n = !1) {
    if (e[L] !== void 0 && e[L] !== null) {
      const s = yt.add(this, e[L], e[x], t, n);
      !n && bt.isElementTemporary(s) && delete e[L];
    }
  }
  // this should not be activated by streamed messages
  addNewMessage(e, t = !1, n = !1) {
    var c, l, d, p;
    e[x] !== F && ((c = this._hiddenAttachments) == null || c.removeHiddenFiles());
    const s = tt.createMessageContent(e), r = (d = (l = this.textToSpeech) == null ? void 0 : l.audio) == null ? void 0 : d.displayText;
    typeof r == "boolean" && !r && delete s[h];
    const o = z.isScrollbarAtBottomOfElement(this.elementRef), a = { status: e.overwrite };
    return n ? (this.tryAddFileMessages(s, o, n), this.tryAddHTMLMessage(s, a, n), this.tryAddTextMessage(s, a, e, t, n)) : (this.tryAddTextMessage(s, a, e, t, n), this.tryAddHTMLMessage(s, a, n), this.tryAddFileMessages(s, o, n)), this.isValidMessageContent(s) && !n && (this.updateStateOnMessage(s, e.overwrite, e.sendUpdate, t), a.status || setTimeout(() => this.scrollToFirstElement(s[x], o)), t || (p = this.browserStorage) == null || p.addMessages(this.messageToElements.map(([u]) => u)), this.scrollButton && s[x] !== F && this.tryUpdateHiddenMessageCount(t, e)), this._activeLoadingConfig && this.addLoadingMessage(!1), s;
  }
  tryUpdateHiddenMessageCount(e, t) {
    (!e || t.sendUpdate !== void 0) && setTimeout(() => {
      var n, s;
      return (s = (n = this.scrollButton) == null ? void 0 : n.updateHidden) == null ? void 0 : s.call(n);
    });
  }
  isValidMessageContent(e) {
    return e[h] || e[L] || e[b] && e[b].length > 0;
  }
  updateStateOnMessage(e, t, n = !0, s = !1) {
    if (!t) {
      const r = B.generateMessageBody(e, this.messageElementRefs);
      this.messageToElements.push([e, r]);
    }
    n && this.sendClientUpdate(e, s);
  }
  // prettier-ignore
  removeMessageOnError() {
    const e = this.messageElementRefs[this.messageElementRefs.length - 1], t = e == null ? void 0 : e.bubbleElement;
    (t != null && t[m].contains(ht.MESSAGE_CLASS) && t.textContent === "" || tt.isTemporaryElement(e)) && this.removeLastMessage();
  }
  // prettier-ignore
  addNewErrorMessage(e, t, n = !1) {
    var l, d, p, u, g, y;
    (l = this._hiddenAttachments) == null || l.readdHiddenFiles(), this.removeMessageOnError();
    const s = this.getPermittedMessage(t) || ((d = this._errorMessageOverrides) == null ? void 0 : d[e]) || ((p = this._errorMessageOverrides) == null ? void 0 : p[w]) || "Error, please try again.", r = this.createMessageElementsOnOrientation(s, f, n);
    B.hideRoleElements(r.innerContainer, this.avatar, this.name);
    const { bubbleElement: o, outerContainer: a } = r;
    o[m].add(Vs), this.renderText(o, s);
    const c = Be.extractParticularSharedStyles(
      ["fontSize", "fontFamily"],
      (u = this.messageStyles) == null ? void 0 : u[w]
    );
    Be.applyCustomStylesToElements(r, !1, c), Be.applyCustomStylesToElements(r, !1, (g = this.messageStyles) == null ? void 0 : g[f]), n || this.appendOuterContainerElemet(a), this.textToSpeech && Rn.speak(s, this.textToSpeech), (y = this._onError) == null || y.call(this, s), setTimeout(() => z.scrollToBottom(this));
  }
  static checkPermittedErrorPrefixes(e, t) {
    for (let n = 0; n < e.length; n += 1)
      if (t.startsWith(e[n])) return t;
  }
  static extractErrorMessages(e) {
    return Array.isArray(e) ? e : e instanceof Error ? [e.message] : typeof e == "string" ? [e] : typeof e == "object" && e[f] ? [e[f]] : [];
  }
  getPermittedMessage(e) {
    if (e) {
      const t = tt.extractErrorMessages(e);
      for (let n = 0; n < t.length; n += 1) {
        const s = t[n];
        if (typeof s === Ee) {
          if (this._displayServiceErrorMessages) return s;
          if (this._permittedErrorPrefixes) {
            const r = tt.checkPermittedErrorPrefixes(this._permittedErrorPrefixes, s);
            if (r) return r;
          }
        }
      }
    }
  }
  removeError() {
    this.isLastMessageError() && B.getLastMessageElement(this.elementRef).remove();
  }
  addDefaultLoadingMessage(e, t = ne) {
    const n = this.createMessageElements("", t), { bubbleElement: s } = n;
    n.bubbleElement[m].add(mt.DOTS_CONTAINER_CLASS);
    const r = A();
    return r[m].add("loading-message-dots"), s.appendChild(r), mt.setDots(s, e), n;
  }
  // prettier-ignore
  addLoadingMessage(e = !1) {
    var a, c, l, d, p, u;
    if (nt.isLoadingMessage(this.messageElementRefs[this.messageElementRefs.length - 1]) || !this._activeLoadingConfig && !e && !this._isLoadingMessageAllowed) return;
    const t = ((a = this._activeLoadingConfig) == null ? void 0 : a[x]) || ne, n = ((c = this._activeLoadingConfig) == null ? void 0 : c[v]) || ((d = (l = this.messageStyles) == null ? void 0 : l.loading) == null ? void 0 : d.message), s = n == null ? void 0 : n[L], r = s ? yt.createElements(this, s, t, !1) : this.addDefaultLoadingMessage(n, t);
    this.appendOuterContainerElemet(r.outerContainer), r.bubbleElement[m].add(mt.BUBBLE_CLASS), this.applyCustomStyles(r, t, !1, n == null ? void 0 : n[R]), (u = (p = this.avatar) == null ? void 0 : p.getAvatarContainer(r.innerContainer)) == null || u[m].add("loading-avatar-container"), !this.focusMode && z.isScrollbarAtBottomOfElement(this.elementRef) && z.scrollToBottom(this);
  }
  // this is a special method not to constantly refresh loading animations
  updateLoadingMessage(e) {
    var s;
    const t = (s = this._activeLoadingConfig) == null ? void 0 : s[v], n = t == null ? void 0 : t[L];
    e.innerHTML = n || "";
  }
  populateIntroPanel(e) {
    e && (this._introPanel = new wr(e), oe.apply(this, this._introPanel._elementRef), this.elementRef.appendChild(this._introPanel._elementRef));
  }
  async addMultipleFiles(e, t) {
    return this._hiddenAttachments = t, Promise.all(
      (e || []).map((n) => new Promise((s) => {
        if (!n[E] || n[E] === on) {
          const r = n[se].name || se;
          s({ name: r, [E]: on, ref: n[se] });
        } else {
          const r = new FileReader();
          r.readAsDataURL(n[se]), r.onload = () => {
            const o = n[se].name;
            s({ [T]: r.result, name: o, [E]: n[E], ref: n[se] });
          };
        }
      }))
    );
  }
  static isActiveElement(e) {
    return e ? e.contains(mt.BUBBLE_CLASS) || e.contains(Mt.CLASS) || e.contains(ht.MESSAGE_CLASS) : !1;
  }
  // WORK - update all message classes to use deep-chat prefix
  clearMessages(e, t) {
    var r, o, a, c;
    const n = [];
    this.messageElementRefs.forEach((l) => {
      tt.isActiveElement(l.bubbleElement[m]) ? n.push(l) : l.outerContainer.remove();
    }), Array.from(this.elementRef.children).forEach((l) => {
      var p;
      const d = (p = l.children[0]) == null ? void 0 : p.children[0];
      d != null && d[m].contains(Vs) && l.remove();
    }), this.messageElementRefs = n;
    const s = this.messageToElements.filter((l) => l[1][h] && tt.isActiveElement(l[1][h].bubbleElement[m]) || l[1][L] && tt.isActiveElement(l[1][L].bubbleElement[m]));
    this.messageToElements.splice(0, this.messageToElements.length, ...s), t !== !1 && ((r = this._introPanel) != null && r._elementRef && this._introPanel.display(), this.addIntroductoryMessages()), (o = this.browserStorage) == null || o.clear(), (a = this.scrollButton) == null || a.clearHidden(), (c = this._onClearMessages) == null || c.call(this), delete e.sessionId;
  }
}
class fs {
  static adjustInputPadding(e, t) {
    t[In].length > 0 && e[m].add("text-input-inner-start-adjustment"), t[ft].length > 0 && e[m].add("text-input-inner-end-adjustment");
  }
  static adjustForOutsideButton(e, t, n) {
    n[ve].length === 0 && n[Le].length > 0 ? (e[0][m].add(oo), t[m].add(oo)) : n[Le].length === 0 && n[ve].length > 0 && (e[3][m].add(ao), t[m].add(ao));
  }
  // when submit is the only button
  // when submit button is outside by itself - we increase the height for a better look
  static adjustOutsideSubmit(e, t, n) {
    if (!(n[In].length > 0 || n[ft].length > 0)) {
      if (n[ve].length === 0 && n[Le].length > 0)
        return e[0][m].add(io), t[m].add(io), n[Le].map((s) => s.button.elementRef[m].add("submit-button-enlarged"));
      if (n[Le].length === 0 && n[ve].length > 0)
        return e[3][m].add(ro), t[m].add(ro), n[ve].map((s) => s.button.elementRef[m].add("submit-button-enlarged"));
    }
  }
  // prettier-ignore
  static set(e, t, n, s) {
    !!fs.adjustOutsideSubmit(t, n, s) || fs.adjustForOutsideButton(t, n, s), fs.adjustInputPadding(e, s);
  }
}
class Ln {
  static create() {
    return Array.from({ length: 4 }).map((e, t) => {
      const n = A();
      return n[m].add("input-button-container"), (t === 0 || t === 3) && n[m].add("outer-button-container"), (t === 1 || t === 2) && n[m].add("inner-button-container"), n;
    });
  }
  static add(e, t) {
    e.insertBefore(t[1], e.firstChild), e.insertBefore(t[0], e.firstChild), e.appendChild(t[2]), e.appendChild(t[3]);
  }
  static getContainerIndex(e) {
    return e === Le ? 0 : e === In ? 1 : e === ft ? 2 : 3;
  }
  static addButton(e, t, n) {
    t[m].add(n);
    const s = Ln.getContainerIndex(n);
    e[s].appendChild(t), s === 3 && t[m].add(ve);
  }
}
const co = [
  "camera",
  "gifs",
  "images",
  "audio",
  "mixedFiles",
  st,
  "microphone"
], Eh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">
  <rect x="2.5" y="2.5" width="17" height="17" rx="2" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`, Me = class Me {
  static addHighlightEvents(e, t) {
    t.addEventListener(ks, (n) => {
      e.highlightedItem = n.target;
    }), t.addEventListener(cn, () => {
      e.highlightedItem = void 0;
    });
  }
  static addItemEvents(e, t, n, s) {
    Rt.add(t, s), t.addEventListener(J, () => {
      n[J]();
    }), Me.addHighlightEvents(e, t);
  }
  static createItemText(e, t) {
    const n = A();
    return Object.assign(n[v], t), n[m].add(Me.TEXT_CLASS), n.textContent = e || "File", n;
  }
  static createItemIcon(e, t) {
    const n = A();
    return Object.assign(n[v], t), n[m].add(Me.ICON_CLASS), n.appendChild(e), n;
  }
  static populateItem(e, t, n) {
    const { elementRef: s, dropupText: r, svg: o, customStyles: a } = e, c = s.children[0], l = a && Object.values(a).find((d) => {
      var p;
      return ((p = d[G]) == null ? void 0 : p.content) === "";
    });
    c[m].contains(Et.INPUT_BUTTON_INNER_TEXT_CLASS) ? (l || t.appendChild(Me.createItemIcon(o, n == null ? void 0 : n.iconContainer)), t.appendChild(Me.createItemText(c.textContent, n == null ? void 0 : n[h]))) : (l || t.appendChild(Me.createItemIcon(s.children[0], n == null ? void 0 : n.iconContainer)), t.appendChild(Me.createItemText(r, n == null ? void 0 : n[h])));
  }
  static createItem(e, t, n) {
    var o;
    const s = A();
    Object.assign(s[v], (o = n == null ? void 0 : n.item) == null ? void 0 : o[w]), Me.populateItem(t, s, n), s[m].add(Me.MENU_ITEM_CLASS), s.tabIndex = 0;
    const { elementRef: r } = t;
    if (t.isCustom)
      t.setDropupItem(e, s);
    else {
      const a = de.processStateful((n == null ? void 0 : n.item) || {});
      Me.addItemEvents(e, s, r, a);
    }
    return s;
  }
};
Me.MENU_ITEM_CLASS = "dropup-menu-item", Me.CUSTOM_BUTTON_ITEM_CLASS = "dropup-menu-item-custom-button", Me.TEXT_CLASS = "dropup-menu-item-text", Me.ICON_CLASS = "dropup-menu-item-icon";
let lt = Me;
const fe = class fe extends gn {
  // prettier-ignore
  constructor(e, t, n, s) {
    var c, l, d, p, u, g;
    const r = ((p = (d = (l = (c = e == null ? void 0 : e[R]) == null ? void 0 : c.button) == null ? void 0 : l[w]) == null ? void 0 : d[h]) == null ? void 0 : p.content) || `Custom ${t}`, o = Eh, a = ut.tryCreateConfig(`Custom ${t}`, e == null ? void 0 : e.tooltip);
    super(
      fe.createButtonElement(),
      o,
      e == null ? void 0 : e.position,
      a,
      ((u = e == null ? void 0 : e[R]) == null ? void 0 : u.button) || a && {},
      r
    ), this._state = w, this.isCustom = !0, this._innerElements = this.createInnerElementsForStates(this.customStyles), this._menuStyles = s, this._onClick = e.onClick, this._dropupStyles = (g = e[R]) == null ? void 0 : g.dropup, this.setSetState(e), this.addClickListener(n), this.changeState(e.initialState, !0);
  }
  static createButtonElement() {
    const e = A();
    return e[m].add("input-button", fe.BUTTON_CLASS), e;
  }
  createInnerElementsForStates(e) {
    const t = "custom-icon", n = this.createInnerElements(t, w, e);
    return {
      [w]: n,
      [H]: this.genStateInnerElements(t, H, n, e),
      [j]: this.genStateInnerElements(t, j, n, e)
    };
  }
  setSetState(e) {
    e.setState = (t) => {
      t === w && this.changeToDefault(), t === H && this.changeToActive(), t === j && this.changeToDisabled();
    };
  }
  addClickListener(e) {
    z.assignButtonEvents(this.elementRef, () => {
      var n;
      const t = (n = this._onClick) == null ? void 0 : n.call(this, this._state);
      e == null || e(), (t === w || t === H || t === j) && this.changeState(t);
    });
  }
  changeState(e, t) {
    e === j ? this.changeToDisabled(t) : e === H ? this.changeToActive(t) : this.changeToDefault(t);
  }
  applyDropupContentStyles(e) {
    const t = Array.from(this.elementRef.children);
    if (e != null && e[h]) {
      const n = t.find(
        (s) => s[m].contains(lt.TEXT_CLASS)
      );
      n && Object.assign(n[v], e[h]);
    }
    if (e != null && e.iconContainer) {
      const n = t.find(
        (s) => s[m].contains(lt.ICON_CLASS)
      );
      n && Object.assign(n[v], e.iconContainer);
    }
  }
  resetDropupItem(e) {
    var n, s, r;
    this.elementRef = oe.replaceElementWithNewClone(this.elementRef, this._originalElementRef), this.elementRef.innerHTML = "", ((n = e == null ? void 0 : e[G]) == null ? void 0 : n.content) === "" || this.elementRef.appendChild(lt.createItemIcon(this[G], (s = this._menuStyles) == null ? void 0 : s.iconContainer)), this.elementRef.appendChild(lt.createItemText(this.dropupText, (r = this._menuStyles) == null ? void 0 : r[h]));
  }
  assignDropupItemStyle(e, t) {
    var s;
    this.elementRef.parentElement && this._originalElementRef && this.resetDropupItem(t), lt.addHighlightEvents(this._menu, this.elementRef), this.applyDropupContentStyles(e), Object.assign(this.elementRef[v], (s = e == null ? void 0 : e.item) == null ? void 0 : s[w]);
    const n = de.processStateful((e == null ? void 0 : e.item) || {});
    Rt.add(this.elementRef, n), this.addClickListener();
  }
  changeToDefault(e) {
    var t, n, s, r, o, a;
    !e && this._state === w || (this.elementRef[m].contains(lt.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t[w], (n = this.customStyles) == null ? void 0 : n[w]) : (this.changeElementsByState(this._innerElements[w]), (s = this.customStyles) != null && s[H] && xe.unsetAllCSS(this.elementRef, (r = this.customStyles) == null ? void 0 : r[H]), (o = this.customStyles) != null && o[j] && xe.unsetAllCSS(this.elementRef, (a = this.customStyles) == null ? void 0 : a[j]), this.reapplyStateStyle(w, [H, j])), this.elementRef[m].remove(fe.DISABLED_CONTAINER_CLASS, fe.ACTIVE_CONTAINER_CLASS), this.elementRef[m].add(fe.DEFAULT_CONTAINER_CLASS), me.removeAriaDisabled(this.elementRef), this._state = w);
  }
  changeToActive(e) {
    var t, n;
    !e && this._state === H || (this.elementRef[m].contains(lt.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t[H], (n = this.customStyles) == null ? void 0 : n[H]) : (this.changeElementsByState(this._innerElements[H]), this.reapplyStateStyle(H, [j, w])), this.elementRef[m].remove(fe.DISABLED_CONTAINER_CLASS, fe.DEFAULT_CONTAINER_CLASS), this.elementRef[m].add(fe.ACTIVE_CONTAINER_CLASS), me.removeAriaDisabled(this.elementRef), this._state = H);
  }
  changeToDisabled(e) {
    var t, n, s, r, o, a;
    !e && this._state === j || (this.elementRef[m].contains(lt.MENU_ITEM_CLASS) ? this.assignDropupItemStyle((t = this._dropupStyles) == null ? void 0 : t[j], (n = this.customStyles) == null ? void 0 : n[j]) : (this.changeElementsByState(this._innerElements[j]), (s = this.customStyles) != null && s[H] && xe.unsetAllCSS(this.elementRef, (r = this.customStyles) == null ? void 0 : r[H]), (o = this.customStyles) != null && o[w] && xe.unsetAllCSS(this.elementRef, (a = this.customStyles) == null ? void 0 : a[w]), this.reapplyStateStyle(j, [w, H])), this.elementRef[m].remove(fe.ACTIVE_CONTAINER_CLASS, fe.DEFAULT_CONTAINER_CLASS), this.elementRef[m].add(fe.DISABLED_CONTAINER_CLASS), me.addAriaDisabled(this.elementRef), this._state = j);
  }
  // called after class is initialised
  setDropupItem(e, t) {
    this._menu = e, this.elementRef = t, this._originalElementRef = t.cloneNode(!0), this.changeState(this._state, !0);
  }
  genStateInnerElements(e, t, n, s) {
    var c, l, d, p;
    let r = this.createInnerElements(e, t, s);
    const o = (l = (c = s == null ? void 0 : s[t]) == null ? void 0 : c[G]) == null ? void 0 : l.content, a = (p = (d = s == null ? void 0 : s[t]) == null ? void 0 : d[h]) == null ? void 0 : p.content;
    if (o === void 0 || a === void 0) {
      const { svg: u, [h]: g } = us.parseSVGTextElements(n), { svg: y, [h]: _ } = us.parseSVGTextElements(r), S = [];
      fe.addToInnerElements(S, o, u, y), fe.addToInnerElements(S, a, g, _), r = S;
    }
    return r;
  }
  static addToInnerElements(e, t, n, s) {
    t === void 0 && n ? e.push(n.cloneNode(!0)) : s && e.push(s);
  }
  static add(e, t) {
    const { customButtons: n, focusInput: s, dropupStyles: r } = e;
    n == null || n.forEach((o, a) => {
      const c = { button: new fe(o, a + 1, s, r == null ? void 0 : r.menu) };
      t[`${fe.INDICATOR_PREFIX}${a + 1}`] = c;
    });
  }
};
fe.INDICATOR_PREFIX = "custom", fe.BUTTON_CLASS = "custom-button", fe.DISABLED_CONTAINER_CLASS = "custom-button-container-disabled", fe.DEFAULT_CONTAINER_CLASS = "custom-button-container-default", fe.ACTIVE_CONTAINER_CLASS = "custom-button-container-active";
let rn = fe;
const vh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
</svg>`;
class Rs {
  static focusItemWhenOnEdge(e, t) {
    const n = e.elementRef, s = t ? n.children[0] : n.children[n.children.length - 1];
    Rs.focusSiblingItem(e, s, t, !0);
  }
  // isEdgeItem means is it a start or end item
  static focusSiblingItem(e, t, n, s = !1) {
    const r = s ? t : t[n ? "nextSibling" : "previousSibling"];
    r ? (t.dispatchEvent(new MouseEvent(cn)), r.dispatchEvent(new MouseEvent(ks)), r.focus()) : (t.dispatchEvent(new MouseEvent(cn)), Rs.focusItemWhenOnEdge(e, n));
  }
}
class Cr {
  constructor(e, t) {
    var n;
    this._isOpen = !0, this._styles = t, this.elementRef = Cr.createElement((n = this._styles) == null ? void 0 : n.container), this.close(), setTimeout(() => this.addWindowEvents(e));
  }
  static createElement(e) {
    const t = A();
    return t.id = et, Object.assign(t[v], e), t;
  }
  open() {
    this.elementRef[v].display = "block", this._isOpen = !0;
  }
  close() {
    this._isOpen && (this.elementRef[v].display = "none", this._isOpen = !1);
  }
  toggle() {
    this._isOpen ? this.close() : this.open();
  }
  addItem(e) {
    const t = lt.createItem(this, e, this._styles);
    this.elementRef.appendChild(t);
  }
  // prettier-ignore
  addWindowEvents(e) {
    this.clickEvent = this.windowClick.bind(this, e), window.addEventListener(J, this.clickEvent), this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
  }
  windowClick(e, t) {
    var n;
    !e.isConnected && this.clickEvent ? window.removeEventListener(J, this.clickEvent) : e.parentElement !== ((n = t.target.shadowRoot) == null ? void 0 : n.children[0]) && this.close();
  }
  // prettier-ignore
  windowKeyDown(e, t) {
    var n, s, r;
    !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === _e.ESCAPE ? (this.close(), (n = this.highlightedItem) == null || n.dispatchEvent(new MouseEvent(cn))) : t.key === _e.ENTER ? ((s = this.highlightedItem) == null || s[J](), (r = this.highlightedItem) == null || r.dispatchEvent(new MouseEvent(cn))) : t.key === _e.ARROW_DOWN ? Rs.focusSiblingItem(
      this,
      this.highlightedItem || this.elementRef.children[this.elementRef.children.length - 1],
      !0
    ) : t.key === _e.ARROW_UP && Rs.focusSiblingItem(
      this,
      this.highlightedItem || this.elementRef.children[0],
      !1
    ));
  }
}
const en = class en extends gn {
  constructor(e, t) {
    var r, o;
    const n = ut.tryCreateConfig("Options", (r = t == null ? void 0 : t.button) == null ? void 0 : r.tooltip);
    super(en.createButtonElement(), vh, void 0, n, { [R]: (o = t == null ? void 0 : t.button) == null ? void 0 : o[R] });
    const s = this.createInnerElementsForStates(this.customStyles);
    this._menu = new Cr(e, t == null ? void 0 : t.menu), this.addClickEvent(), this.buttonContainer = en.createButtonContainer(), this.changeElementsByState(s[R]), this.buttonContainer.appendChild(this.elementRef), this.elementRef[m].add(en.BUTTON_ICON_CLASS), this.buttonContainer.appendChild(this._menu.elementRef), this.reapplyStateStyle(R), this.addContainerEvents(e);
  }
  static createButtonElement() {
    const e = A();
    return e[m].add("input-button"), e;
  }
  createInnerElementsForStates(e) {
    return {
      [R]: this.createInnerElements("dropup-icon", R, e)
    };
  }
  addClickEvent() {
    this.elementRef.onclick = this._menu.toggle.bind(this._menu), this.elementRef.onkeydown = (e) => {
      e.key === _e.ENTER && setTimeout(() => {
        this._menu.toggle();
        const t = this._menu.elementRef.children[0];
        t.focus(), t.dispatchEvent(new MouseEvent(ks));
      });
    };
  }
  static createButtonContainer() {
    const e = A();
    return e.id = "dropup-container", e;
  }
  addItem(e) {
    this._menu.addItem(e);
  }
  addContainerEvents(e) {
    e.addEventListener(J, (t) => {
      const n = t.target[m];
      !n.contains(en.BUTTON_ICON_CLASS) && !n.contains(rn.DISABLED_CONTAINER_CLASS) && this._menu.close();
    });
  }
  static getPosition(e, t) {
    var n, s;
    return (n = t == null ? void 0 : t.button) != null && n.position ? le.processPosition((s = t == null ? void 0 : t.button) == null ? void 0 : s.position) : e[Le].length > 0 && e[ve].length === 0 ? ve : Le;
  }
};
en.BUTTON_ICON_CLASS = "dropup-button";
let hi = en;
class Ne {
  // prettier-ignore
  static addToDropup(e, t, n, s) {
    const r = new hi(n, s);
    co.forEach((a) => {
      const c = t[et].findIndex((d) => d.buttonType === a), l = t[et][c];
      l && (r.addItem(l.button), t[et].splice(c, 1));
    }), t[et].forEach(({ button: a }) => r.addItem(a));
    const o = hi.getPosition(t, s);
    Ln.addButton(e, r.buttonContainer, o), t[o].push({});
  }
  static addToSideContainer(e, t) {
    [In, ft, Le, ve].forEach((s) => {
      const r = s;
      t[r].forEach((o) => {
        Ln.addButton(e, o.button.elementRef, r);
      });
    });
  }
  static setPosition(e, t, n) {
    const s = { ...e[t], buttonType: t };
    n.push(s), delete e[t];
  }
  static createPositionsToButtonsObj() {
    return {
      [et]: [],
      [Le]: [],
      [In]: [],
      [ft]: [],
      [ve]: []
    };
  }
  // prettier-ignore
  static generatePositionToButtons(e) {
    const t = Ne.createPositionsToButtonsObj();
    Object.keys(e).forEach((s) => {
      var o;
      const r = (o = e[s]) == null ? void 0 : o.button.position;
      r && Ne.setPosition(e, s, t[r]);
    }), t[ft].length === 0 && e.submit && Ne.setPosition(e, st, t[ft]), t[ve].length === 0 && (e.submit ? Ne.setPosition(e, st, t[ve]) : e.microphone ? Ne.setPosition(e, ct, t[ve]) : e.camera ? Ne.setPosition(e, Fe, t[ve]) : e[`${rn.INDICATOR_PREFIX}1`] && Ne.setPosition(e, `${rn.INDICATOR_PREFIX}1`, t[ve])), e.submit && Ne.setPosition(
      e,
      st,
      t[Le].length === 0 ? t[Le] : t[ft]
    ), e.microphone && Ne.setPosition(
      e,
      ct,
      t[Le].length === 0 ? t[Le] : t[ft]
    );
    const n = Object.keys(e);
    return n.length > 1 || t[et].length > 0 ? (co.forEach((s) => {
      e[s] && t[et].push({ ...e[s], buttonType: s });
    }), n.forEach((s) => {
      const r = s;
      r.startsWith(rn.INDICATOR_PREFIX) && e[r] && t[et].push({ ...e[r], customType: r });
    })) : n.length === 1 && Ne.setPosition(
      e,
      n[0],
      t[ve].length === 0 ? t[ve] : t[Le]
    ), t;
  }
  // prettier-ignore
  static addButtons(e, t, n, s) {
    const r = Ne.generatePositionToButtons(t);
    return Ne.addToSideContainer(e, r), r[et].length > 0 && Ne.addToDropup(e, r, n, s), r;
  }
}
const Sh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L9.47904 16.2154C9.15083 16.525 8.70569 16.6989 8.24154 16.6989C7.77738 16.6989 7.33224 16.525 7.00403 16.2154C6.67583 15.9059 6.49144 15.4861 6.49144 15.0483C6.49144 14.6106 6.67583 14.1907 7.00403 13.8812L14.429 6.88674" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`, xh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,15.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12.2928932 L7.14644661,9.14644661 C7.34170876,8.95118446 7.65829124,8.95118446 7.85355339,9.14644661 L13.5,14.7928932 L16.1464466,12.1464466 C16.3417088,11.9511845 16.6582912,11.9511845 16.8535534,12.1464466 L20,15.2928932 Z M20,16.7071068 L16.5,13.2071068 L13.8535534,15.8535534 C13.6582912,16.0488155 13.3417088,16.0488155 13.1464466,15.8535534 L7.5,10.2071068 L4,13.7071068 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.7071068 Z M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,5.5 Z M15,6 L17,6 C17.5522847,6 18,6.44771525 18,7 L18,9 C18,9.55228475 17.5522847,10 17,10 L15,10 C14.4477153,10 14,9.55228475 14,9 L14,7 C14,6.44771525 14.4477153,6 15,6 Z M15,7 L15,9 L17,9 L17,7 L15,7 Z"/>
</svg>
`, Ah = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-49.49 -49.49 593.87 593.87" stroke-width="3.95908" transform="rotate(0)">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="0.98977"></g>
  <g>
    <g>
      <g>
        <path d="M163.205,76.413v293.301c-3.434-3.058-7.241-5.867-11.486-8.339c-21.38-12.452-49.663-15.298-77.567-7.846 c-49.038,13.096-80.904,54.519-71.038,92.337c4.019,15.404,14.188,28.221,29.404,37.087c13.553,7.894,29.87,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.447-4.087c42.74-11.406,72.411-44.344,72.807-77.654h0.011v-0.162c0.002-0.166,0-0.331,0-0.496V187.072 l290.971-67.3v178.082c-3.433-3.055-7.238-5.863-11.481-8.334c-21.385-12.452-49.654-15.308-77.567-7.846 c-49.038,13.087-80.904,54.519-71.038,92.356c4.019,15.385,14.183,28.212,29.404,37.067c13.548,7.894,29.875,11.933,47.115,11.933 c9.962,0,20.231-1.356,30.452-4.087c42.74-11.413,72.411-44.346,72.804-77.654h0.004v-0.065c0.003-0.236,0.001-0.469,0-0.704V0 L163.205,76.413z M104.999,471.779c-22.543,6.038-45.942,3.846-62.572-5.846c-10.587-6.163-17.591-14.817-20.255-25.038 c-7.144-27.375,18.452-58.029,57.062-68.346c8.409-2.25,16.938-3.346,25.188-3.346c13.87,0,26.962,3.115,37.389,9.192 c10.587,6.163,17.591,14.817,20.255,25.029c0.809,3.102,1.142,6.248,1.139,9.4v0.321h0.014 C162.99,437.714,139.082,462.678,104.999,471.779z M182.898,166.853V92.067l290.971-67.298v74.784L182.898,166.853z M415.677,399.923c-22.558,6.038-45.942,3.837-62.587-5.846c-10.587-6.163-17.587-14.817-20.25-25.019 c-7.144-27.385,18.452-58.058,57.058-68.365c8.414-2.25,16.942-3.346,25.192-3.346c13.875,0,26.962,3.115,37.385,9.192 c10.596,6.163,17.596,14.817,20.26,25.029v0.01c0.796,3.05,1.124,6.144,1.135,9.244v0.468h0.02 C473.668,365.851,449.763,390.814,415.677,399.923z">
        </path>
      </g>
    </g>
  </g>
</svg>`, wh = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 5.9266752 5.6408391" height="21.31971" width="22.4">
  <g>
    <path d="m 5.2564627,1.548212 c -3.1136005,-0.4796804 -1.5568006,-0.2398402 0,0 z M 2.0001198,2.0922063 c 0.1556781,0 0.2657489,0.020893 0.3917849,0.080366 0.081154,0.038347 0.1153492,0.134065 0.076377,0.2138602 -0.038973,0.07979 -0.1363527,0.1134129 -0.2175069,0.075091 -0.078199,-0.036919 -0.1407455,-0.048792 -0.250655,-0.048792 -0.2260486,0 -0.3921482,0.2042182 -0.3921482,0.4801409 0,0.2761822 0.1663188,0.4810688 0.3921482,0.4810688 0.1117901,0 0.2064255,-0.046133 0.255659,-0.1284198 l 0.00162,-0.00389 V 3.0534032 l -0.098011,1.75e-4 c -0.081844,0 -0.1495979,-0.059305 -0.1612403,-0.1365887 l -0.00175,-0.023683 c 0,-0.08047 0.060311,-0.1470874 0.1389194,-0.1585331 l 0.024085,-0.00195 h 0.2612303 c 0.081842,0 0.149598,0.059305 0.1612404,0.1365891 l 0.00175,0.023683 -3.398e-4,0.3968809 v 0 l -0.00168,0.014211 v 0 l -0.00553,0.023034 v 0 l -0.00532,0.014145 c -0.098178,0.22826 -0.3236506,0.3528713 -0.5706303,0.3528713 -0.4240855,0 -0.7181621,-0.3622714 -0.7181621,-0.8016063 0,-0.4391857 0.2940275,-0.8006848 0.7181621,-0.8006848 z m 1.2034759,0.031275 c 0.081843,0 0.1495977,0.059305 0.1612403,0.1365891 l 0.00175,0.023683 v 1.2211775 c 0,0.088516 -0.07298,0.1602721 -0.1630073,0.1602721 -0.081841,0 -0.1495972,-0.059305 -0.1612397,-0.1365892 L 3.040589,3.5049308 V 2.2837527 c 0,-0.088516 0.07298,-0.1602721 0.1630067,-0.1602714 z m 0.7813442,0 0.5209469,0.00195 c 0.090025,3.048e-4 0.1627543,0.072306 0.1624458,0.1608234 -2.809e-4,0.08047 -0.06083,0.1468798 -0.1394772,0.158066 l -0.024092,0.00195 -0.3575326,-0.0013 v 0.4497782 l 0.2928918,2.27e-4 c 0.081842,0 0.1495979,0.059305 0.1612403,0.136589 l 0.00175,0.023683 c 0,0.080469 -0.06031,0.1470871 -0.1389193,0.1585393 l -0.024092,0.00195 -0.2928919,-2.336e-4 1.563e-4,0.2860316 c 0,0.080471 -0.06031,0.1470873 -0.1389193,0.1585395 l -0.024085,0.00195 c -0.081843,0 -0.1495979,-0.059305 -0.1612403,-0.1365826 l -0.00175,-0.023691 V 2.2841354 c 2.798e-4,-0.08047 0.060829,-0.1468797 0.1394758,-0.1580594 z"/>
    <path d="m 5.0894191,1.0943261 c 0,-0.21918999 -0.177687,-0.39686999 -0.396876,-0.39686999 h -3.43959 c -0.2191879,0 -0.391262,0.1777519 -0.3968759,0.39686999 l -0.027082,3.4379266 c 0.040152,0.2939927 0.4235456,0.409415 0.4235456,0.409415 l 3.4785583,-0.00851 c 0,0 0.3008506,-0.1402998 0.3236271,-0.4201576 0.042911,-0.5272495 0.034693,-1.6106146 0.034693,-3.4186761 z m -4.49792494,0 c 0,-0.36530999 0.29614504,-0.66145999 0.66145894,-0.66145999 h 3.43959 c 0.365314,0 0.66146,0.29615 0.66146,0.66145999 v 3.43959 c 0,0.36532 -0.296146,0.66146 -0.66146,0.66146 h -3.43959 c -0.3653139,0 -0.66145894,-0.29614 -0.66145894,-0.66146 z"/>
  </g>
</svg>
`, Ch = {
  [ee]: { id: "upload-images-icon", svgString: xh, dropupText: "Image" },
  [Cn]: { id: "upload-gifs-icon", svgString: wh, dropupText: "GIF" },
  [$]: { id: "upload-audio-icon", svgString: Ah, dropupText: "Audio" },
  mixedFiles: { id: "upload-mixed-files-icon", svgString: Sh, dropupText: "File" }
};
class Ai extends gn {
  constructor(e) {
    (e == null ? void 0 : e.position) === et && (e.position = ve);
    const t = ut.tryCreateConfig("Microphone", e == null ? void 0 : e.tooltip);
    super(Ai.createMicrophoneElement(), sa, e == null ? void 0 : e.position, t, e), this.isActive = !1, this._innerElements = this.createInnerElementsForStates(this.customStyles), this.changeToDefault();
  }
  createInnerElementsForStates(e) {
    const t = "microphone-icon";
    return {
      [w]: this.createInnerElements(t, w, e),
      [H]: this.createInnerElements(t, H, e),
      [Un]: this.createInnerElements(t, Un, e),
      [bn]: this.createInnerElements(t, bn, e)
    };
  }
  static createMicrophoneElement() {
    const e = A();
    return e.id = "microphone-button", e[m].add("input-button"), e;
  }
  changeToActive() {
    this.changeElementsByState(this._innerElements[H]), this.toggleIconFilter(H), this.reapplyStateStyle(H, [w, bn]), this.isActive = !0;
  }
  changeToDefault() {
    this.changeElementsByState(this._innerElements[w]), this.toggleIconFilter(w), this.reapplyStateStyle(w, [H, bn]), this.isActive = !1;
  }
  changeToCommandMode() {
    this.changeElementsByState(this._innerElements[bn]), this.toggleIconFilter("command"), this.reapplyStateStyle(bn, [H]);
  }
  changeToUnsupported() {
    this.changeElementsByState(this._innerElements[Un]), this.elementRef[m].add(`${Un}-microphone`), this.reapplyStateStyle(Un, [H]);
  }
  toggleIconFilter(e) {
    const t = this.elementRef.children[0];
    if (t.tagName.toLocaleLowerCase() === G)
      switch (e) {
        case w:
          t[m].remove("active-microphone-icon", "command-microphone-icon"), t[m].add("default-microphone-icon");
          break;
        case H:
          t[m].remove("default-microphone-icon", "command-microphone-icon"), t[m].add("active-microphone-icon");
          break;
        case "command":
          t[m].remove("active-microphone-icon", "default-microphone-icon"), t[m].add("command-microphone-icon");
          break;
      }
  }
}
function Th(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var js = {}, qn = {}, Gn = {}, zn = {}, Vn = {}, lo;
function wi() {
  if (lo) return Vn;
  lo = 1, Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.Text = void 0;
  class i {
    static capitalize(t) {
      return t.replace(i.FIRST_CHAR_REGEX, (n) => n.toUpperCase());
    }
    static lineBreak(t) {
      return t.replace(i.DOUBLE_LINE, "<p></p>").replace(i.ONE_LINE, "<br>");
    }
    static isCharDefined(t) {
      return t !== void 0 && t !== " " && t !== " " && t !== `
` && t !== "";
    }
    static breakupIntoWordsArr(t) {
      return t.split(/(\W+)/);
    }
  }
  return Vn.Text = i, i.FIRST_CHAR_REGEX = /\S/, i.DOUBLE_LINE = /\n\n/g, i.ONE_LINE = /\n/g, Vn;
}
var ho;
function ha() {
  if (ho) return zn;
  ho = 1, Object.defineProperty(zn, "__esModule", { value: !0 }), zn.Translate = void 0;
  const i = wi();
  class e {
    static translate(n, s) {
      const r = i.Text.breakupIntoWordsArr(n);
      for (let o = 0; o < r.length; o += 1)
        s[r[o]] && (r[o] = s[r[o]]);
      return r.join("");
    }
  }
  return zn.Translate = e, zn;
}
var uo;
function Rh() {
  if (uo) return Gn;
  uo = 1, Object.defineProperty(Gn, "__esModule", { value: !0 }), Gn.WebSpeechTranscript = void 0;
  const i = ha();
  class e {
    static extract(n, s, r) {
      let o = "";
      for (let a = n.resultIndex; a < n.results.length; ++a) {
        let c = n.results[a][0].transcript;
        r && (c = i.Translate.translate(c, r)), n.results[a].isFinal ? s += c : o += c;
      }
      return { interimTranscript: o, finalTranscript: s, newText: o || s };
    }
    static extractSafari(n, s, r) {
      let o = "";
      for (let c = n.resultIndex; c < n.results.length; ++c) {
        let l = n.results[c][0].transcript;
        r && (l = i.Translate.translate(l, r)), o += l;
      }
      return { interimTranscript: "", finalTranscript: o, newText: o };
    }
  }
  return Gn.WebSpeechTranscript = e, Gn;
}
var Kn = {}, po;
function Tr() {
  if (po) return Kn;
  po = 1, Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.Browser = void 0;
  class i {
  }
  return Kn.Browser = i, i.IS_SAFARI = () => (i._IS_SAFARI === void 0 && (i._IS_SAFARI = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), i._IS_SAFARI), Kn;
}
var Wn = {}, Xn = {}, fo;
function Ih() {
  if (fo) return Xn;
  fo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 }), Xn.EventListeners = void 0;
  class i {
    static getElementIfFocusedOnAvailable(t, n) {
      return Array.isArray(t) ? t.find((s) => n === s) : n === t ? t : void 0;
    }
    static keyDownWindow(t) {
      t.element && i.getElementIfFocusedOnAvailable(t.element, document.activeElement) && (i.KEY_DOWN_TIMEOUT !== null && clearTimeout(i.KEY_DOWN_TIMEOUT), i.KEY_DOWN_TIMEOUT = setTimeout(() => {
        i.KEY_DOWN_TIMEOUT = null, this.resetRecording(t);
      }, 500));
    }
    static mouseDownWindow(t, n) {
      this.mouseDownElement = i.getElementIfFocusedOnAvailable(t, n.target);
    }
    static mouseUpWindow(t) {
      this.mouseDownElement && this.resetRecording(t), this.mouseDownElement = void 0;
    }
    static add(t, n) {
      const s = (n == null ? void 0 : n.insertInCursorLocation) === void 0 || (n == null ? void 0 : n.insertInCursorLocation);
      n != null && n.element && s && (t.mouseDownEvent = i.mouseDownWindow.bind(t, n.element), document.addEventListener("mousedown", t.mouseDownEvent), t.mouseUpEvent = i.mouseUpWindow.bind(t, n), document.addEventListener("mouseup", t.mouseUpEvent), t.keyDownEvent = i.keyDownWindow.bind(t, n), document.addEventListener("keydown", t.keyDownEvent));
    }
    static remove(t) {
      document.removeEventListener("mousedown", t.mouseDownEvent), document.removeEventListener("mouseup", t.mouseUpEvent), document.removeEventListener("keydown", t.keyDownEvent);
    }
  }
  return Xn.EventListeners = i, i.KEY_DOWN_TIMEOUT = null, Xn;
}
var Zn = {}, mo;
function Mh() {
  if (mo) return Zn;
  mo = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.PreResultUtils = void 0;
  class i {
    static process(t, n, s, r, o) {
      const a = r == null ? void 0 : r(n, s);
      return a ? (setTimeout(() => {
        a.restart ? t.resetRecording(o) : a.stop && t.stop();
      }), (a.stop || a.restart) && a.removeNewText) : !1;
    }
  }
  return Zn.PreResultUtils = i, Zn;
}
var Yn = {}, Jn = {}, go;
function ua() {
  if (go) return Jn;
  go = 1, Object.defineProperty(Jn, "__esModule", { value: !0 }), Jn.AutoScroll = void 0;
  class i {
    static changeStateIfNeeded(t, n) {
      n && !t.isCursorAtEnd && (t.endPadding = "", t.scrollingSpan.innerHTML = "&nbsp;");
    }
    static scrollGeneric(t, n) {
      t.isCursorAtEnd ? n.scrollTop = n.scrollHeight : t.scrollingSpan.scrollIntoView({ block: "nearest" });
    }
    // primitives don't need to be scrolled except in safari
    // they can only safely be scrolled to the end
    static scrollSafariPrimitiveToEnd(t) {
      t.scrollLeft = t.scrollWidth, t.scrollTop = t.scrollHeight;
    }
    static isElementOverflown(t) {
      return t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth;
    }
    static isRequired(t, n) {
      return t && i.isElementOverflown(n);
    }
  }
  return Jn.AutoScroll = i, Jn;
}
var Qn = {}, bo;
function Ci() {
  if (bo) return Qn;
  bo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 }), Qn.Elements = void 0;
  class i {
    static isPrimitiveElement(t) {
      return t.tagName === "INPUT" || t.tagName === "TEXTAREA";
    }
    static createInterimSpan() {
      const t = document.createElement("span");
      return t.style.color = "grey", t.style.pointerEvents = "none", t;
    }
    static createGenericSpan() {
      const t = document.createElement("span");
      return t.style.pointerEvents = "none", t;
    }
    static appendSpans(t, n) {
      if (t.spansPopulated = !0, t.insertInCursorLocation && document.activeElement === n) {
        const s = window.getSelection();
        if (s != null && s.focusNode) {
          const r = s.getRangeAt(0);
          r.insertNode(t.scrollingSpan), r.insertNode(t.interimSpan), r.insertNode(t.finalSpan), r.collapse(!1), s.removeAllRanges(), s.addRange(r);
          return;
        }
      }
      n.appendChild(t.finalSpan), n.appendChild(t.interimSpan), n.appendChild(t.scrollingSpan);
    }
    static applyCustomColors(t, n) {
      n.interim && (t.interimSpan.style.color = n.interim), n.final && (t.finalSpan.style.color = n.final);
    }
    static isInsideShadowDOM(t) {
      return t.getRootNode() instanceof ShadowRoot;
    }
  }
  return Qn.Elements = i, Qn;
}
var es = {}, yo;
function Ti() {
  if (yo) return es;
  yo = 1, Object.defineProperty(es, "__esModule", { value: !0 }), es.Cursor = void 0;
  class i {
    static setOffsetForGeneric(t, n, s = 0) {
      let r = 0;
      for (let o = 0; o < t.childNodes.length; o += 1) {
        const a = t.childNodes[o];
        if (a.childNodes.length > 0) {
          const c = i.setOffsetForGeneric(a, n, s);
          if (c === -1)
            return -1;
          s += c;
        } else if (a.textContent !== null) {
          if (s + a.textContent.length > n) {
            const c = document.createRange();
            c.setStart(a, n - s), c.collapse(!0);
            const l = window.getSelection();
            return l == null || l.removeAllRanges(), l == null || l.addRange(c), t.focus(), -1;
          }
          s += a.textContent.length, r += a.textContent.length;
        }
      }
      return r;
    }
    static focusEndOfGeneric(t) {
      const n = document.createRange();
      n.selectNodeContents(t), n.collapse(!1);
      const s = window.getSelection();
      s && (s.removeAllRanges(), s.addRange(n));
    }
    static setOffsetForSafariGeneric(t, n) {
      const s = window.getSelection();
      if (s) {
        const r = i.getGenericElementCursorOffset(t, s, !0);
        i.setOffsetForGeneric(t, r + n);
      }
    }
    // set to automatically scroll to cursor (scroll does not work in Safari)
    static setOffsetForPrimitive(t, n, s) {
      s && t.blur(), t.setSelectionRange(n, n), t.focus();
    }
    // Scroll Input in Safari - does not work for TextArea and uses span which can have a different style
    // private static getCursorOffsetFromLeft(inputElement: HTMLInputElement, position: number) {
    //   // Get the value of the input element up to the cursor position
    //   const valueUpToCursor = inputElement.value.substring(0, position);
    //   // Create a temporary span element to measure the width of the text
    //   const tempSpan = document.createElement('span');
    //   tempSpan.textContent = valueUpToCursor;
    //   tempSpan.style.visibility = 'hidden';
    //   tempSpan.style.position = 'absolute';
    //   document.body.appendChild(tempSpan);
    //   // Measure the width of the text up to the cursor position
    //   const offsetWidth = tempSpan.offsetWidth;
    //   const offsetHeight = tempSpan.offsetHeight;
    //   // Clean up the temporary span element
    //   document.body.removeChild(tempSpan);
    //   return {left: offsetWidth, top: offsetHeight};
    // }
    static getGenericElementCursorOffset(t, n, s) {
      let r = 0;
      if (n.rangeCount > 0) {
        const o = n.getRangeAt(0), a = o.cloneRange();
        a.selectNodeContents(t), s ? a.setEnd(o.startContainer, o.startOffset) : a.setEnd(o.endContainer, o.endOffset), r = a.toString().length;
      }
      return r;
    }
  }
  return es.Cursor = i, es;
}
var _o;
function pa() {
  if (_o) return Yn;
  _o = 1, Object.defineProperty(Yn, "__esModule", { value: !0 }), Yn.CommandUtils = void 0;
  const i = ua(), e = Ci(), t = Tr(), n = Ti(), s = wi();
  class r {
    static processCommand(a, c) {
      return (!c || !c.caseSensitive) && (a = a.toLowerCase()), (c == null ? void 0 : c.substrings) === !1 ? s.Text.breakupIntoWordsArr(a) : a;
    }
    static process(a) {
      var c;
      return ((c = a.settings) === null || c === void 0 ? void 0 : c.caseSensitive) === !0 ? a : Object.keys(a).reduce((d, p) => {
        const u = a[p];
        return d[p] = typeof u == "string" ? r.processCommand(u, a.settings) : u, d;
      }, {});
    }
    static toggleCommandModeOn(a) {
      var c;
      a.isWaitingForCommand = !0, (c = a.onCommandModeTrigger) === null || c === void 0 || c.call(a, !0);
    }
    static toggleCommandModeOff(a) {
      var c;
      a.isWaitingForCommand && ((c = a.onCommandModeTrigger) === null || c === void 0 || c.call(a, !1), a.isWaitingForCommand = !1);
    }
    static setText(a, c, l, d) {
      r.toggleCommandModeOff(a), e.Elements.isPrimitiveElement(d) ? (d.value = l, a.isTargetInShadow || n.Cursor.setOffsetForPrimitive(d, l.length, !0), t.Browser.IS_SAFARI() && a.autoScroll && i.AutoScroll.scrollSafariPrimitiveToEnd(d)) : (d.textContent = l, a.isTargetInShadow || n.Cursor.focusEndOfGeneric(d), setTimeout(() => i.AutoScroll.scrollGeneric(a, d))), a.resetRecording(c);
    }
    static checkIfMatchesSubstring(a, c) {
      return c.includes(a);
    }
    static checkIfMatchesWord(a, c, l) {
      const d = a;
      for (let p = l.length - 1; p >= 0; p -= 1) {
        let u = p, g = d.length - 1;
        for (; l[u] === d[g] && g >= 0; )
          u -= 1, g -= 1;
        if (g < 0)
          return !0;
      }
      return !1;
    }
    // prettier-ignore
    static execCommand(a, c, l, d, p) {
      var u, g, y;
      const _ = a.commands;
      if (!_ || !d || !l)
        return;
      const S = ((u = _.settings) === null || u === void 0 ? void 0 : u.caseSensitive) === !0 ? c : c.toLowerCase(), M = s.Text.breakupIntoWordsArr(S), K = ((g = _.settings) === null || g === void 0 ? void 0 : g.substrings) === !1 ? r.checkIfMatchesWord : r.checkIfMatchesSubstring;
      if (_.commandMode && K(_.commandMode, S, M))
        return a.setInterimColorToFinal(), setTimeout(() => r.toggleCommandModeOn(a)), { doNotProcessTranscription: !1 };
      if (!(_.commandMode && !a.isWaitingForCommand)) {
        if (_.stop && K(_.stop, S, M))
          return r.toggleCommandModeOff(a), setTimeout(() => a.stop()), { doNotProcessTranscription: !1 };
        if (_.pause && K(_.pause, S, M))
          return r.toggleCommandModeOff(a), a.setInterimColorToFinal(), setTimeout(() => {
            var ie;
            a.isPaused = !0, (ie = a.onPauseTrigger) === null || ie === void 0 || ie.call(a, !0);
          }), { doNotProcessTranscription: !1 };
        if (_.resume && K(_.resume, S, M))
          return a.isPaused = !1, (y = a.onPauseTrigger) === null || y === void 0 || y.call(a, !1), r.toggleCommandModeOff(a), a.resetRecording(l), { doNotProcessTranscription: !0 };
        if (_.reset && K(_.reset, S, M))
          return p !== void 0 && r.setText(a, l, p, d), { doNotProcessTranscription: !0 };
        if (_.removeAllText && K(_.removeAllText, S, M))
          return r.setText(a, l, "", d), { doNotProcessTranscription: !0 };
      }
    }
  }
  return Yn.CommandUtils = r, Yn;
}
var ts = {}, Eo;
function kh() {
  if (Eo) return ts;
  Eo = 1, Object.defineProperty(ts, "__esModule", { value: !0 }), ts.Highlight = void 0;
  const i = Ci(), e = Ti();
  class t {
    static setStateForPrimitive(s, r) {
      let o, a;
      r.selectionStart !== null && (o = r.selectionStart), r.selectionEnd !== null && (a = r.selectionEnd), s.isHighlighted = o !== a;
    }
    static setStateForGeneric(s, r) {
      const o = window.getSelection();
      if (o != null && o.focusNode) {
        const a = e.Cursor.getGenericElementCursorOffset(r, o, !0), c = e.Cursor.getGenericElementCursorOffset(r, o, !1);
        s.isHighlighted = a !== c;
      }
    }
    static setState(s, r) {
      document.activeElement === r && (i.Elements.isPrimitiveElement(r) ? t.setStateForPrimitive(s, r) : t.setStateForGeneric(s, r));
    }
    static removeForGeneric(s, r) {
      const o = window.getSelection();
      if (o) {
        const a = e.Cursor.getGenericElementCursorOffset(r, o, !0);
        o.deleteFromDocument(), e.Cursor.setOffsetForGeneric(r, a), s.isHighlighted = !1;
      }
    }
    static removeForPrimitive(s, r) {
      const o = r.selectionStart, a = r.selectionEnd, c = r.value;
      if (o && a) {
        const l = c.substring(0, o) + c.substring(a);
        r.value = l, e.Cursor.setOffsetForPrimitive(r, o, s.autoScroll);
      }
      s.isHighlighted = !1;
    }
  }
  return ts.Highlight = t, ts;
}
var ns = {}, vo;
function Ph() {
  if (vo) return ns;
  vo = 1, Object.defineProperty(ns, "__esModule", { value: !0 }), ns.Padding = void 0;
  const i = Ci(), e = Ti(), t = wi();
  class n {
    static setStateForPrimitiveElement(r, o) {
      if (document.activeElement === o && o.selectionStart !== null) {
        const c = o.selectionStart, l = o.value[c - 1], d = o.selectionEnd === null ? c : o.selectionEnd, p = o.value[d];
        t.Text.isCharDefined(l) && (r.startPadding = " ", r.numberOfSpacesBeforeNewText = 1), t.Text.isCharDefined(p) && (r.endPadding = " ", r.numberOfSpacesAfterNewText = 1), r.isCursorAtEnd = o.value.length === d;
        return;
      }
      const a = o.value[o.value.length - 1];
      t.Text.isCharDefined(a) && (r.startPadding = " ", r.numberOfSpacesBeforeNewText = 1), r.isCursorAtEnd = !0;
    }
    static setStateForGenericElement(r, o) {
      var a, c, l;
      if (document.activeElement === o) {
        const p = window.getSelection();
        if (p != null && p.focusNode) {
          const u = e.Cursor.getGenericElementCursorOffset(o, p, !0), g = (a = o.textContent) === null || a === void 0 ? void 0 : a[u - 1], y = e.Cursor.getGenericElementCursorOffset(o, p, !1), _ = (c = o.textContent) === null || c === void 0 ? void 0 : c[y];
          t.Text.isCharDefined(g) && (r.startPadding = " "), t.Text.isCharDefined(_) && (r.endPadding = " "), r.isCursorAtEnd = ((l = o.textContent) === null || l === void 0 ? void 0 : l.length) === y;
          return;
        }
      }
      const d = o.innerText.charAt(o.innerText.length - 1);
      t.Text.isCharDefined(d) && (r.startPadding = " "), r.isCursorAtEnd = !0;
    }
    static setState(r, o) {
      i.Elements.isPrimitiveElement(o) ? n.setStateForPrimitiveElement(r, o) : n.setStateForGenericElement(r, o);
    }
    static adjustStateAfterRecodingPrimitiveElement(r, o) {
      if (r.primitiveTextRecorded = !0, r.insertInCursorLocation && document.activeElement === o && (o.selectionEnd !== null && (r.endPadding = r.endPadding + o.value.slice(o.selectionEnd)), o.selectionStart !== null)) {
        r.startPadding = o.value.slice(0, o.selectionStart) + r.startPadding;
        return;
      }
      r.startPadding = o.value + r.startPadding;
    }
    static adjustSateForNoTextPrimitiveElement(r) {
      r.numberOfSpacesBeforeNewText === 1 && (r.startPadding = r.startPadding.substring(0, r.startPadding.length - 1), r.numberOfSpacesBeforeNewText = 0), r.numberOfSpacesAfterNewText === 1 && (r.endPadding = r.endPadding.substring(1), r.numberOfSpacesAfterNewText = 0);
    }
  }
  return ns.Padding = n, ns;
}
var So;
function fa() {
  if (So) return Wn;
  So = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.Speech = void 0;
  const i = Ih(), e = Mh(), t = pa(), n = ua(), s = kh(), r = Ci(), o = Ph(), a = Tr(), c = Ti(), l = wi();
  class d {
    constructor() {
      this.finalTranscript = "", this.interimSpan = r.Elements.createInterimSpan(), this.finalSpan = r.Elements.createGenericSpan(), this.scrollingSpan = r.Elements.createGenericSpan(), this.isCursorAtEnd = !1, this.spansPopulated = !1, this.startPadding = "", this.endPadding = "", this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.recognizing = !1, this._displayInterimResults = !0, this.insertInCursorLocation = !0, this.autoScroll = !0, this.isRestarting = !1, this.isPaused = !1, this.isWaitingForCommand = !1, this.isTargetInShadow = !1, this.cannotBeStopped = !1, this.resetState();
    }
    prepareBeforeStart(u) {
      var g, y;
      if (u != null && u.element)
        if (i.EventListeners.add(this, u), Array.isArray(u.element)) {
          const S = u.element.find((M) => M === document.activeElement) || u.element[0];
          if (!S)
            return;
          this.prepare(S);
        } else
          this.prepare(u.element);
      (u == null ? void 0 : u.displayInterimResults) !== void 0 && (this._displayInterimResults = u.displayInterimResults), u != null && u.textColor && (this._finalTextColor = (g = u == null ? void 0 : u.textColor) === null || g === void 0 ? void 0 : g.final, r.Elements.applyCustomColors(this, u.textColor)), (u == null ? void 0 : u.insertInCursorLocation) !== void 0 && (this.insertInCursorLocation = u.insertInCursorLocation), (u == null ? void 0 : u.autoScroll) !== void 0 && (this.autoScroll = u.autoScroll), this._onResult = u == null ? void 0 : u.onResult, this._onPreResult = u == null ? void 0 : u.onPreResult, this._onStart = u == null ? void 0 : u.onStart, this._onStop = u == null ? void 0 : u.onStop, this._onError = u == null ? void 0 : u.onError, this.onCommandModeTrigger = u == null ? void 0 : u.onCommandModeTrigger, this.onPauseTrigger = u == null ? void 0 : u.onPauseTrigger, this._options = u, !((y = this._options) === null || y === void 0) && y.commands && (this.commands = t.CommandUtils.process(this._options.commands));
    }
    prepare(u) {
      o.Padding.setState(this, u), s.Highlight.setState(this, u), this.isTargetInShadow = r.Elements.isInsideShadowDOM(u), r.Elements.isPrimitiveElement(u) ? (this._primitiveElement = u, this._originalText = this._primitiveElement.value) : (this._genericElement = u, this._originalText = this._genericElement.textContent);
    }
    // there was an attempt to optimize this by not having to restart the service and just reset state:
    // unfortunately it did not work because the service would still continue firing the intermediate and final results
    // into the new position
    resetRecording(u) {
      this.isRestarting = !0, this.stop(!0), this.resetState(!0), this.start(u, !0);
    }
    // prettier-ignore
    updateElements(u, g, y) {
      var _;
      const S = l.Text.capitalize(g);
      if (this.finalTranscript === S && u === "")
        return;
      e.PreResultUtils.process(this, y, u === "", this._onPreResult, this._options) && (u = "", y = "");
      const M = this.commands && t.CommandUtils.execCommand(this, y, this._options, this._primitiveElement || this._genericElement, this._originalText);
      if (M) {
        if (M.doNotProcessTranscription)
          return;
        u = "", y = "";
      }
      if (this.isPaused || this.isWaitingForCommand)
        return;
      (_ = this._onResult) === null || _ === void 0 || _.call(this, y, u === ""), this.finalTranscript = S, this._displayInterimResults || (u = "");
      const K = this.finalTranscript === "" && u === "";
      this._primitiveElement ? this.updatePrimitiveElement(this._primitiveElement, u, K) : this._genericElement && this.updateGenericElement(this._genericElement, u, K);
    }
    // prettier-ignore
    // remember that padding values here contain actual text left and right
    updatePrimitiveElement(u, g, y) {
      this.isHighlighted && s.Highlight.removeForPrimitive(this, u), this.primitiveTextRecorded || o.Padding.adjustStateAfterRecodingPrimitiveElement(this, u), y && o.Padding.adjustSateForNoTextPrimitiveElement(this);
      const _ = this.startPadding + this.finalTranscript + g;
      if (u.value = _ + this.endPadding, !this.isTargetInShadow) {
        const S = _.length + this.numberOfSpacesAfterNewText;
        c.Cursor.setOffsetForPrimitive(u, S, this.autoScroll);
      }
      this.autoScroll && a.Browser.IS_SAFARI() && this.isCursorAtEnd && n.AutoScroll.scrollSafariPrimitiveToEnd(u);
    }
    updateGenericElement(u, g, y) {
      this.isHighlighted && s.Highlight.removeForGeneric(this, u), this.spansPopulated || r.Elements.appendSpans(this, u);
      const _ = (y ? "" : this.startPadding) + l.Text.lineBreak(this.finalTranscript);
      this.finalSpan.innerHTML = _;
      const S = n.AutoScroll.isRequired(this.autoScroll, u);
      n.AutoScroll.changeStateIfNeeded(this, S);
      const M = l.Text.lineBreak(g) + (y ? "" : this.endPadding);
      this.interimSpan.innerHTML = M, a.Browser.IS_SAFARI() && this.insertInCursorLocation && c.Cursor.setOffsetForSafariGeneric(u, _.length + M.length), S && n.AutoScroll.scrollGeneric(this, u), y && (this.scrollingSpan.innerHTML = "");
    }
    finalise(u) {
      this._genericElement && (u ? (this.finalSpan = r.Elements.createGenericSpan(), this.setInterimColorToFinal(), this.interimSpan = r.Elements.createInterimSpan(), this.scrollingSpan = r.Elements.createGenericSpan()) : this._genericElement.textContent = this._genericElement.textContent, this.spansPopulated = !1), i.EventListeners.remove(this);
    }
    setInterimColorToFinal() {
      this.interimSpan.style.color = this._finalTextColor || "black";
    }
    resetState(u) {
      this._primitiveElement = void 0, this._genericElement = void 0, this.finalTranscript = "", this.finalSpan.innerHTML = "", this.interimSpan.innerHTML = "", this.scrollingSpan.innerHTML = "", this.startPadding = "", this.endPadding = "", this.isHighlighted = !1, this.primitiveTextRecorded = !1, this.numberOfSpacesBeforeNewText = 0, this.numberOfSpacesAfterNewText = 0, u || (this.stopTimeout = void 0);
    }
    setStateOnStart() {
      var u;
      this.recognizing = !0, this.isRestarting ? this.isRestarting = !1 : (u = this._onStart) === null || u === void 0 || u.call(this);
    }
    setStateOnStop() {
      var u;
      this.recognizing = !1, this.isRestarting || (u = this._onStop) === null || u === void 0 || u.call(this);
    }
    setStateOnError(u) {
      var g;
      (g = this._onError) === null || g === void 0 || g.call(this, u), this.recognizing = !1;
    }
  }
  return Wn.Speech = d, Wn;
}
var xo;
function Lh() {
  if (xo) return qn;
  xo = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.WebSpeech = void 0;
  const i = Rh(), e = Tr(), t = fa();
  class n extends t.Speech {
    constructor() {
      super();
    }
    start(r) {
      var o;
      this._extractText === void 0 && (this._extractText = e.Browser.IS_SAFARI() ? i.WebSpeechTranscript.extractSafari : i.WebSpeechTranscript.extract), this.validate() && (this.prepareBeforeStart(r), this.instantiateService(r), (o = this._service) === null || o === void 0 || o.start(), this._translations = r == null ? void 0 : r.translations);
    }
    validate() {
      return n.getAPI() ? !0 : (this.error("Speech Recognition is unsupported"), !1);
    }
    instantiateService(r) {
      var o, a;
      const c = n.getAPI();
      this._service = new c(), this._service.continuous = !0, this._service.interimResults = (o = r == null ? void 0 : r.displayInterimResults) !== null && o !== void 0 ? o : !0, this._service.lang = ((a = r == null ? void 0 : r.language) === null || a === void 0 ? void 0 : a.trim()) || "en-US", this.setEvents();
    }
    setEvents() {
      this._service && (this._service.onstart = () => {
        this.setStateOnStart();
      }, this._service.onerror = (r) => {
        e.Browser.IS_SAFARI() && r.message === "Another request is started" || r.error === "aborted" && this.isRestarting || r.error !== "no-speech" && this.error(r.message || r.error);
      }, this._service.onaudioend = () => {
        this.setStateOnStop();
      }, this._service.onend = () => {
        this._stopping = !1;
      }, this._service.onresult = (r) => {
        if (typeof r.results > "u" && this._service)
          this._service.onend = null, this._service.stop();
        else if (this._extractText && !this._stopping) {
          const { interimTranscript: o, finalTranscript: a, newText: c } = this._extractText(r, this.finalTranscript, this._translations);
          this.updateElements(o, a, c);
        }
      });
    }
    stop(r) {
      var o;
      this._stopping = !0, (o = this._service) === null || o === void 0 || o.stop(), this.finalise(r);
    }
    static getAPI() {
      return window.webkitSpeechRecognition || window.SpeechRecognition;
    }
    error(r) {
      console.error(r), this.setStateOnError(r), this.stop();
    }
  }
  return qn.WebSpeech = n, qn;
}
var ss = {}, Ao;
function Oh() {
  if (Ao) return ss;
  Ao = 1, Object.defineProperty(ss, "__esModule", { value: !0 }), ss.GlobalState = void 0;
  class i {
    static doubleClickDetector() {
      return i.doubleClickPending ? !0 : (i.doubleClickPending = !0, setTimeout(() => {
        i.doubleClickPending = !1;
      }, 300), !1);
    }
  }
  return ss.GlobalState = i, i.doubleClickPending = !1, ss;
}
var is = {}, rs = {}, wo;
function Nh() {
  if (wo) return rs;
  wo = 1, Object.defineProperty(rs, "__esModule", { value: !0 }), rs.PreventConnectionStop = void 0;
  class i {
    static applyPrevention(t) {
      clearTimeout(t._manualConnectionStopPrevention), t.cannotBeStopped = !0, t._manualConnectionStopPrevention = setTimeout(() => {
        t.cannotBeStopped = !1;
      }, 800);
    }
    static clearPrevention(t) {
      clearTimeout(t._manualConnectionStopPrevention), t.cannotBeStopped = !1;
    }
  }
  return rs.PreventConnectionStop = i, rs;
}
var os = {}, as = {}, Co;
function Bh() {
  return Co || (Co = 1, Object.defineProperty(as, "__esModule", { value: !0 }), as.README_URL = void 0, as.README_URL = "https://github.com/OvidijusParsiunas/speech-to-element"), as;
}
var To;
function Dh() {
  if (To) return os;
  To = 1, Object.defineProperty(os, "__esModule", { value: !0 }), os.AzureSpeechConfig = void 0;
  const i = Bh();
  class e {
    static validateOptions(n, s) {
      return s ? !s.subscriptionKey && !s.token && !s.retrieveToken ? (n(`Please define a 'subscriptionKey', 'token' or 'retrieveToken' property - more info: ${i.README_URL}`), !1) : s.region ? !0 : (n(`Please define a 'region' property - more info: ${i.README_URL}`), !1) : (n(`Please provide subscription details - more info: ${i.README_URL}`), !1);
    }
    static async getNewSpeechConfig(n, s) {
      if (s.region)
        return s.subscriptionKey ? n.fromSubscription(s.subscriptionKey.trim(), s.region.trim()) : s.token ? n.fromAuthorizationToken(s.token.trim(), s.region.trim()) : s.retrieveToken ? s.retrieveToken().then((r) => s.region ? n.fromAuthorizationToken((r == null ? void 0 : r.trim()) || "", s.region.trim()) : null).catch((r) => (console.error(r), null)) : null;
    }
    static process(n, s) {
      s.endpointId && (n.endpointId = s.endpointId.trim()), s.language && (n.speechRecognitionLanguage = s.language.trim());
    }
    static async get(n, s) {
      const r = await e.getNewSpeechConfig(n, s);
      return r && e.process(r, s), r;
    }
  }
  return os.AzureSpeechConfig = e, os;
}
var cs = {}, Ro;
function Fh() {
  if (Ro) return cs;
  Ro = 1, Object.defineProperty(cs, "__esModule", { value: !0 }), cs.StopTimeout = void 0;
  class i {
    static set(t) {
      t.stopTimeout = setTimeout(() => t.stop(), t.stopTimeoutMS);
    }
    static reset(t, n) {
      t.stopTimeoutMS = n || i.DEFAULT_MS, i.stop(t), i.set(t);
    }
    static stop(t) {
      t.stopTimeout && clearTimeout(t.stopTimeout);
    }
  }
  return cs.StopTimeout = i, i.DEFAULT_MS = 2e4, cs;
}
var ls = {}, Io;
function Uh() {
  if (Io) return ls;
  Io = 1, Object.defineProperty(ls, "__esModule", { value: !0 }), ls.AzureAudioConfig = void 0;
  class i {
    static get(t, n) {
      return n ? t.fromMicrophoneInput(n) : t.fromDefaultMicrophoneInput();
    }
  }
  return ls.AzureAudioConfig = i, ls;
}
var ds = {}, Mo;
function Hh() {
  if (Mo) return ds;
  Mo = 1, Object.defineProperty(ds, "__esModule", { value: !0 }), ds.AzureTranscript = void 0;
  const i = ha();
  class e {
    // newText is used to only send new text in onResult as finalTranscript is continuously accumulated
    static extract(n, s, r, o) {
      return o && (n = i.Translate.translate(n, o)), r ? { interimTranscript: "", finalTranscript: s + n, newText: n } : { interimTranscript: n, finalTranscript: s, newText: n };
    }
  }
  return ds.AzureTranscript = e, ds;
}
var ko;
function jh() {
  if (ko) return is;
  ko = 1, Object.defineProperty(is, "__esModule", { value: !0 }), is.Azure = void 0;
  const i = Nh(), e = Dh(), t = Fh(), n = Uh(), s = Hh(), r = fa();
  class o extends r.Speech {
    constructor() {
      super(...arguments), this._newTextPadding = "";
    }
    start(c, l) {
      this._newTextPadding = "", this.stopTimeout === void 0 && t.StopTimeout.reset(this, c == null ? void 0 : c.stopAfterSilenceMs), this.prepareBeforeStart(c), this.startAsync(c), l || i.PreventConnectionStop.applyPrevention(this);
    }
    async startAsync(c) {
      var l;
      this.validate(c) && (await this.instantiateService(c), this._translations = c == null ? void 0 : c.translations, (l = this._service) === null || l === void 0 || l.startContinuousRecognitionAsync(() => {
      }, this.error));
    }
    validate(c) {
      return o.getAPI() ? e.AzureSpeechConfig.validateOptions(this.error.bind(this), c) : (this.moduleNotFound(), !1);
    }
    async instantiateService(c) {
      const l = o.getAPI(), d = n.AzureAudioConfig.get(l.AudioConfig, c.deviceId), p = await e.AzureSpeechConfig.get(l.SpeechConfig, c);
      if (p) {
        let u;
        if (c.autoLanguage && c.autoLanguage.languages.length > 0) {
          const { type: g, languages: y } = c.autoLanguage, _ = y.slice(0, g === "Continuous" ? 10 : 4), S = l.AutoDetectSourceLanguageConfig.fromLanguages(_);
          g === "Continuous" && (S.mode = 1), u = l.SpeechRecognizer.FromConfig(p, S, d);
        } else
          u = new l.SpeechRecognizer(p, d);
        this.setEvents(u), this._service = u, c.retrieveToken && this.retrieveTokenInterval(c.retrieveToken);
      } else
        this.error("Unable to contact Azure server");
    }
    setEvents(c) {
      c.recognizing = this.onRecognizing.bind(this), c.recognized = this.onRecognized.bind(this), c.sessionStarted = this.onSessionStarted.bind(this), c.canceled = this.onCanceled.bind(this), c.sessionStopped = this.onSessionStopped.bind(this);
    }
    // prettier-ignore
    onRecognizing(c, l) {
      if (this._stopping)
        return;
      const { interimTranscript: d, finalTranscript: p, newText: u } = s.AzureTranscript.extract(this._newTextPadding + l.result.text, this.finalTranscript, !1, this._translations);
      t.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(d, p, u);
    }
    // prettier-ignore
    onRecognized(c, l) {
      const d = l.result;
      switch (d.reason) {
        case window.SpeechSDK.ResultReason.Canceled:
          break;
        case window.SpeechSDK.ResultReason.RecognizedSpeech:
          if (d.text && !this._stopping) {
            const { interimTranscript: p, finalTranscript: u, newText: g } = s.AzureTranscript.extract(this._newTextPadding + d.text, this.finalTranscript, !0, this._translations);
            t.StopTimeout.reset(this, this.stopTimeoutMS), this.updateElements(p, u, g), u !== "" && (this._newTextPadding = " ");
          }
          break;
      }
    }
    onCanceled(c, l) {
      l.reason === window.SpeechSDK.CancellationReason.Error && this.error(l.errorDetails);
    }
    onSessionStarted() {
      i.PreventConnectionStop.clearPrevention(this), this.setStateOnStart();
    }
    onSessionStopped() {
      this._retrieveTokenInterval || clearInterval(this._retrieveTokenInterval), this._stopping = !1, this.setStateOnStop();
    }
    retrieveTokenInterval(c) {
      this._retrieveTokenInterval = setInterval(() => {
        c == null || c().then((l) => {
          this._service && (this._service.authorizationToken = (l == null ? void 0 : l.trim()) || "");
        }).catch((l) => {
          this.error(l);
        });
      }, 1e4);
    }
    stop(c) {
      var l;
      !c && this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), this._stopping = !0, (l = this._service) === null || l === void 0 || l.stopContinuousRecognitionAsync(), t.StopTimeout.stop(this), this.finalise(c);
    }
    static getAPI() {
      return window.SpeechSDK;
    }
    moduleNotFound() {
      console.error("speech recognition module not found:"), console.error(`please install the 'microsoft-cognitiveservices-speech-sdk' npm package or add a script tag: <script src="https://aka.ms/csspeech/jsbrowserpackageraw"><\/script>`), this.setStateOnError("speech recognition module not found");
    }
    error(c) {
      this._retrieveTokenInterval && clearInterval(this._retrieveTokenInterval), console.error(c), this.setStateOnError(c), this.stop();
    }
  }
  return is.Azure = o, is;
}
var Po;
function $h() {
  if (Po) return js;
  Po = 1, Object.defineProperty(js, "__esModule", { value: !0 });
  const i = Lh(), e = pa(), t = Oh(), n = jh();
  class s {
    static toggle(o, a) {
      var c, l;
      const d = o.toLocaleLowerCase().trim();
      !((c = t.GlobalState.service) === null || c === void 0) && c.recognizing ? this.stop() : d === "webspeech" ? s.startWebSpeech(a) : d === "azure" ? s.startAzure(a) : (console.error("service not found - must be either 'webspeech' or 'azure'"), (l = a == null ? void 0 : a.onError) === null || l === void 0 || l.call(a, "service not found - must be either 'webspeech' or 'azure'"));
    }
    static startWebSpeech(o) {
      s.stop() || (t.GlobalState.service = new i.WebSpeech(), t.GlobalState.service.start(o));
    }
    static isWebSpeechSupported() {
      return !!i.WebSpeech.getAPI();
    }
    static startAzure(o) {
      var a;
      s.stop() || !((a = t.GlobalState.service) === null || a === void 0) && a.cannotBeStopped || (t.GlobalState.service = new n.Azure(), t.GlobalState.service.start(o));
    }
    static stop() {
      var o;
      return t.GlobalState.doubleClickDetector() ? !0 : (!((o = t.GlobalState.service) === null || o === void 0) && o.recognizing && t.GlobalState.service.stop(), !1);
    }
    static endCommandMode() {
      t.GlobalState.service && e.CommandUtils.toggleCommandModeOff(t.GlobalState.service);
    }
  }
  return js.default = s, js;
}
var qh = $h();
const Gs = /* @__PURE__ */ Th(qh);
class Gh {
  constructor(e, t) {
    this._silenceMS = 2e3, this._stop = !0, typeof t == "boolean" && t === !1 && (this._stop = !1), typeof e == "number" && (this._silenceMS = e);
  }
  setSilenceTimeout(e, t) {
    this._silenceTimeout = setTimeout(() => {
      var n;
      (n = e.submit) == null || n.call(e), Gs.stop(), this._stop || setTimeout(t, Is.MICROPHONE_RESET_TIMEOUT_MS);
    }, this._silenceMS);
  }
  clearSilenceTimeout() {
    this._silenceTimeout && clearTimeout(this._silenceTimeout);
  }
  resetSilenceTimeout(e, t) {
    this.clearSilenceTimeout(), this.setSilenceTimeout(e, t);
  }
  onPause(e, t, n) {
    e ? this.resetSilenceTimeout(t, n) : this.clearSilenceTimeout();
  }
}
const Ss = class Ss extends Ai {
  constructor(e, t, n) {
    const s = typeof e.speechToText == "object" ? e.speechToText : {};
    super(s == null ? void 0 : s.button);
    const { serviceName: r, processedConfig: o } = this.processConfiguration(t, e.speechToText);
    if (this._addErrorMessage = n, r === "webspeech" && !Gs.isWebSpeechSupported())
      this.changeToUnsupported();
    else {
      const a = !e.textInput || !e.textInput[j];
      z.assignButtonEvents(
        this.elementRef,
        this.buttonClick.bind(this, t, a, r, o)
      );
    }
    setTimeout(() => {
      this._validationHandler = e._validationHandler;
    });
  }
  // prettier-ignore
  processConfiguration(e, t) {
    var l;
    const n = typeof t == "object" ? t : {}, s = typeof n.webSpeech == "object" ? n.webSpeech : {}, r = n.azure || {}, o = {
      displayInterimResults: n.displayInterimResults ?? void 0,
      textColor: n.textColor ?? void 0,
      translations: n.translations ?? void 0,
      commands: n.commands ?? void 0,
      events: n.events ?? void 0,
      ...s,
      ...r
    }, a = (l = n.commands) == null ? void 0 : l.submit;
    return a && (o.onPreResult = (d) => d.toLowerCase().includes(a) ? (setTimeout(() => {
      var p;
      return (p = e.submit) == null ? void 0 : p.call(e);
    }), Gs.endCommandMode(), { restart: !0, removeNewText: !0 }) : null), n.submitAfterSilence && (this._silenceSubmit = new Gh(n.submitAfterSilence, n.stopAfterSubmit)), { serviceName: Ss.getServiceName(n), processedConfig: o };
  }
  static getServiceName(e) {
    return e.azure ? "azure" : "webspeech";
  }
  buttonClick(e, t, n, s) {
    const r = s == null ? void 0 : s.events;
    e.removePlaceholderStyle(), Gs.toggle(n, {
      insertInCursorLocation: !1,
      element: t ? e.inputElementRef : void 0,
      onError: () => {
        var o;
        this.onError(), (o = this._silenceSubmit) == null || o.clearSilenceTimeout();
      },
      onStart: () => {
        var o;
        this.changeToActive(), (o = r == null ? void 0 : r.onStart) == null || o.call(r);
      },
      onStop: () => {
        var o, a, c;
        (o = this._validationHandler) == null || o.call(this), (a = this._silenceSubmit) == null || a.clearSilenceTimeout(), this.changeToDefault(), (c = r == null ? void 0 : r.onStop) == null || c.call(r);
      },
      onPauseTrigger: (o) => {
        var a, c;
        (a = this._silenceSubmit) == null || a.onPause(o, e, this.elementRef.onclick), (c = r == null ? void 0 : r.onPauseTrigger) == null || c.call(r, o);
      },
      onPreResult: (o, a) => {
        var c;
        (c = r == null ? void 0 : r.onPreResult) == null || c.call(r, o, a);
      },
      onResult: (o, a) => {
        var c, l, d;
        a && ((c = this._validationHandler) == null || c.call(this)), (l = this._silenceSubmit) == null || l.resetSilenceTimeout(e, this.elementRef.onclick), (d = r == null ? void 0 : r.onResult) == null || d.call(r, o, a);
      },
      onCommandModeTrigger: (o) => {
        var a;
        this.onCommandModeTrigger(o), (a = r == null ? void 0 : r.onCommandModeTrigger) == null || a.call(r, o);
      },
      ...s
    });
  }
  onCommandModeTrigger(e) {
    e ? this.changeToCommandMode() : this.changeToActive();
  }
  onError() {
    this._addErrorMessage("speechToText", "speech input error");
  }
  static toggleSpeechAfterSubmit(e, t = !0) {
    e[J](), t || setTimeout(() => e[J](), Ss.MICROPHONE_RESET_TIMEOUT_MS);
  }
};
Ss.MICROPHONE_RESET_TIMEOUT_MS = 300;
let Is = Ss;
class Tt {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    this._attachments = [], this._fileCountLimit = 99, this._acceptedFormat = "", this._hiddenAttachments = /* @__PURE__ */ new Set(), n.maxNumberOfFiles && (this._fileCountLimit = n.maxNumberOfFiles), this._toggleContainerDisplay = s, this._fileAttachmentsContainerRef = r, n.acceptedFormats && (this._acceptedFormat = n.acceptedFormats), setTimeout(() => {
      this._validationHandler = e._validationHandler, this._onInput = t.onInput;
    });
  }
  attemptAddFile(e, t) {
    var n;
    return Tt.isFileTypeValid(e, this._acceptedFormat) ? (this.addAttachmentBasedOnType(e, t, !0), (n = this._onInput) == null || n.call(this, !0), !0) : !1;
  }
  static isFileTypeValid(e, t) {
    if (t === "") return !0;
    const n = t.split(",");
    for (let s = 0; s < n.length; s++) {
      const r = n[s].trim();
      if (e[E] === r)
        return !0;
      if (r.startsWith(".")) {
        const o = r.slice(1);
        if (e.name.endsWith(o))
          return !0;
      } else {
        if (e.name.endsWith(r))
          return !0;
        if (r.endsWith("/*") && e[E].startsWith(r.slice(0, -2)))
          return !0;
      }
    }
    return !1;
  }
  static getTypeFromBlob(e) {
    const { type: t } = e;
    return t.startsWith(W) ? W : t.startsWith($) ? $ : on;
  }
  addAttachmentBasedOnType(e, t, n) {
    const s = Tt.getTypeFromBlob(e);
    if (s === W) {
      const r = Tt.createImageAttachment(t);
      this.addFileAttachment(e, W, r, n);
    } else if (s === $) {
      const r = Ms.createAudioAttachment(t);
      this.addFileAttachment(e, $, r, n);
    } else {
      const r = Tt.createAnyFileAttachment(e.name);
      this.addFileAttachment(e, on, r, n);
    }
  }
  static createImageAttachment(e) {
    const t = new Image();
    return t[T] = e, t[m].add("image-attachment"), t;
  }
  static createAnyFileAttachment(e) {
    const t = A();
    t[m].add("border-bound-attachment"), $e.IS_SAFARI && t[m].add("border-bound-attachment-safari");
    const n = A();
    n[m].add("any-file-attachment-text");
    const s = A();
    return s[m].add("file-attachment-text-container"), s.appendChild(n), n.textContent = e, t.appendChild(s), t;
  }
  addFileAttachment(e, t, n, s) {
    var a;
    const r = Tt.createContainer(n);
    if (this._attachments.length >= this._fileCountLimit) {
      const c = this._attachments[this._attachments.length - 1].removeButton;
      c == null || c[J]();
      const l = this._fileAttachmentsContainerRef.children;
      this._fileAttachmentsContainerRef.insertBefore(r, l[0]);
    } else
      this._fileAttachmentsContainerRef.appendChild(r);
    const o = { file: e, attachmentContainerElement: r, fileType: t };
    return s && (o.removeButton = this.createRemoveAttachmentButton(o), r.appendChild(o.removeButton)), this._toggleContainerDisplay(!0), this._attachments.push(o), this._fileAttachmentsContainerRef.scrollTop = this._fileAttachmentsContainerRef.scrollHeight, (a = this._validationHandler) == null || a.call(this), o;
  }
  static createContainer(e) {
    const t = A();
    return t[m].add("file-attachment"), t.appendChild(e), t;
  }
  createRemoveAttachmentButton(e) {
    const t = A();
    t[m].add("remove-file-attachment-button"), t.onclick = this.removeAttachment.bind(this, e);
    const n = A();
    return n[m].add("x-icon"), n.innerText = "×", t.appendChild(n), t;
  }
  removeAttachment(e, t) {
    var r, o;
    const n = this._attachments.findIndex((a) => a === e);
    if (n < 0) return;
    (r = this._onInput) == null || r.call(this, !!(t != null && t.isTrusted));
    const s = this._attachments[n].attachmentContainerElement;
    this._attachments.splice(n, 1), Ms.stopAttachmentPlayback(s), s.remove(), this._toggleContainerDisplay(!1), (o = this._validationHandler) == null || o.call(this);
  }
  getFiles() {
    return Array.from(this._attachments).map((e) => ({ [se]: e[se], [E]: e.fileType }));
  }
  hideAttachments() {
    this._hiddenAttachments.clear(), this._attachments.forEach((e) => {
      setTimeout(() => {
        var t;
        return (t = e.removeButton) == null ? void 0 : t[J]();
      }), this._hiddenAttachments.add(e);
    });
  }
  removeAttachments() {
    this._attachments.forEach((e) => {
      setTimeout(() => {
        var t;
        return (t = e.removeButton) == null ? void 0 : t[J]();
      });
    }), this._hiddenAttachments.clear();
  }
  readdAttachments() {
    var e;
    Array.from(this._hiddenAttachments).forEach((t) => {
      this._fileAttachmentsContainerRef.appendChild(t.attachmentContainerElement), this._attachments.push(t);
    }), (e = this._onInput) == null || e.call(this, !1), this._hiddenAttachments.clear();
  }
}
const wt = class wt extends Tt {
  // prettier-ignore
  constructor(e, t, n, s, r) {
    super(e, t, n, s, r);
  }
  static createAudioContainer() {
    const e = A();
    return e[m].add("border-bound-attachment", "audio-attachment-icon-container"), $e.IS_SAFARI && e[m].add("border-bound-attachment-safari"), e;
  }
  static addAudioElements(e, t) {
    const n = e.parentElement ? z.cloneElement(e) : e, s = A($);
    s[T] = t;
    const r = kt.createSVGElement(ia);
    r[m].add("attachment-icon", "play-icon");
    const o = kt.createSVGElement(Ki);
    o[m].add("attachment-icon", "stop-icon"), n.replaceChildren(r), s.onplay = () => {
      n.replaceChildren(o);
    }, s.onpause = () => {
      n.replaceChildren(r), s.currentTime = 0;
    }, s.onended = () => {
      n.replaceChildren(r);
    }, z.assignButtonEvents(n, () => {
      s.paused ? s.play() : s.pause();
    });
  }
  static createAudioAttachment(e) {
    const t = wt.createAudioContainer();
    return wt.addAudioElements(t, e), t;
  }
  createTimer(e, t) {
    let n = 0;
    const s = t !== void 0 && t < wt.TIMER_LIMIT_S ? t : wt.TIMER_LIMIT_S;
    return setInterval(() => {
      var a;
      n += 1, n === s && ((a = this.stopPlaceholderCallback) == null || a.call(this), this.clearTimer()), n === 600 && e[m].add("audio-placeholder-text-4-digits");
      const r = Math.floor(n / 60), o = (n % 60).toString().padStart(2, "0");
      e.textContent = `${r}:${o}`;
    }, 1e3);
  }
  createPlaceholderAudioAttachment(e) {
    const t = wt.createAudioContainer(), n = A();
    n[m].add("audio-placeholder-text-3-digits");
    const s = A();
    s[m].add("file-attachment-text-container", "audio-placeholder-text-3-digits-container"), s.appendChild(n);
    const r = kt.createSVGElement(Ki);
    return r[m].add("attachment-icon", "stop-icon", "not-removable-attachment-icon"), n.textContent = "0:00", this._activePlaceholderTimer = this.createTimer(n, e), t.appendChild(s), this.addPlaceholderAudioAttachmentEvents(t, r, s), t;
  }
  addPlaceholderAudioAttachmentEvents(e, t, n) {
    const s = () => e.replaceChildren(t);
    e.addEventListener(ks, s);
    const r = () => e.replaceChildren(n);
    e.addEventListener(cn, r);
    const o = () => {
      var a;
      return (a = this.stopPlaceholderCallback) == null ? void 0 : a.call(this);
    };
    e.addEventListener(J, o);
  }
  addPlaceholderAttachment(e, t) {
    const n = this.createPlaceholderAudioAttachment(t);
    this._activePlaceholderAttachment = this.addFileAttachment(new File([], ""), $, n, !1), this.stopPlaceholderCallback = e;
  }
  // prettier-ignore
  completePlaceholderAttachment(e, t) {
    const n = this._activePlaceholderAttachment;
    n && (n[se] = e, wt.addAudioElements(
      n.attachmentContainerElement.children[0],
      t
    ), n.removeButton = this.createRemoveAttachmentButton(n), n.attachmentContainerElement.appendChild(n.removeButton), this._activePlaceholderAttachment = void 0, this.clearTimer());
  }
  removePlaceholderAttachment() {
    this._activePlaceholderAttachment && (this.removeAttachment(this._activePlaceholderAttachment), this._activePlaceholderAttachment = void 0, this.clearTimer());
  }
  clearTimer() {
    this._activePlaceholderTimer !== void 0 && (clearInterval(this._activePlaceholderTimer), this._activePlaceholderTimer = void 0, this.stopPlaceholderCallback = void 0);
  }
  static stopAttachmentPlayback(e) {
    var t, n, s;
    (s = (n = (t = e.children[0]) == null ? void 0 : t.children) == null ? void 0 : n[0]) != null && s[m].contains("stop-icon") && e.children[0][J]();
  }
};
wt.TIMER_LIMIT_S = 5999;
let Ms = wt;
class zh {
  // prettier-ignore
  static create(e, t, n, s, r, o) {
    return o === $ ? new Ms(e, t, n, s, r) : new Tt(e, t, n, s, r);
  }
}
class Os {
  constructor(e, t, n) {
    this._fileAttachmentsTypes = [], this.elementRef = this.createAttachmentContainer();
    const s = typeof n == "object" && !!n.displayFileAttachmentContainer;
    this.toggleContainerDisplay(s), e.appendChild(this.elementRef), t && Object.assign(this.elementRef[v], t);
  }
  // prettier-ignore
  addType(e, t, n, s) {
    const r = zh.create(
      e,
      t,
      n,
      this.toggleContainerDisplay.bind(this),
      this.elementRef,
      s
    );
    return this._fileAttachmentsTypes.push(r), r;
  }
  createAttachmentContainer() {
    const e = A();
    return e.id = "file-attachment-container", e;
  }
  toggleContainerDisplay(e) {
    e ? this.elementRef[v].display = "block" : this.elementRef.children.length === 0 && (this.elementRef[v].display = "none");
  }
  getAllFileData() {
    const e = this._fileAttachmentsTypes.map((t) => t.getFiles()).flat();
    return e.length > 0 ? e : void 0;
  }
  async completePlaceholders() {
    await Promise.all(
      this._fileAttachmentsTypes.map(
        async (e) => {
          var t;
          return (t = e.stopPlaceholderCallback) == null ? void 0 : t.call(e);
        }
      )
    );
  }
  static addFilesToType(e, t) {
    e.forEach((n) => {
      const s = new FileReader();
      s.readAsDataURL(n), s.onload = (r) => {
        for (let o = 0; o < t.length && !t[o].attemptAddFile(n, r.target.result); o += 1)
          ;
      };
    });
  }
  addFilesToAnyType(e) {
    Os.addFilesToType(e, this._fileAttachmentsTypes);
  }
  hideFiles() {
    this._fileAttachmentsTypes.forEach((e) => e.hideAttachments()), this.elementRef.replaceChildren(), this.toggleContainerDisplay(!1);
  }
  removeHiddenFiles() {
    this._fileAttachmentsTypes.forEach((e) => e.removeAttachments());
  }
  readdHiddenFiles() {
    this._fileAttachmentsTypes.forEach((e) => e.readdAttachments()), this.toggleContainerDisplay(!0);
  }
  getNumberOfTypes() {
    return this._fileAttachmentsTypes.length;
  }
}
const at = class at {
  constructor(e, t, n) {
    this._isOpen = !1, this._contentRef = at.createModalContent(t, n == null ? void 0 : n.backgroundColor), this._buttonPanel = at.createButtonPanel(n == null ? void 0 : n.backgroundColor), this._elementRef = at.createContainer(this._contentRef, n), this._elementRef.appendChild(this._buttonPanel), e.appendChild(this._elementRef), this._backgroundPanelRef = at.createDarkBackgroundPanel(), e.appendChild(this._backgroundPanelRef), this.addWindowEvents(e);
  }
  isOpen() {
    return this._isOpen;
  }
  static createContainer(e, t) {
    const n = A();
    return n[m].add("modal"), n.appendChild(e), t && delete t.backgroundColor, Object.assign(n[v], t), n;
  }
  static createModalContent(e, t) {
    const n = A();
    return n[m].add(...e), t && (n[v].backgroundColor = t), A().appendChild(n), n;
  }
  static createButtonPanel(e) {
    const t = A();
    return t[m].add("modal-button-panel"), e && (t[v].backgroundColor = e), t;
  }
  static createDarkBackgroundPanel() {
    const e = A();
    return e.id = "modal-background-panel", e;
  }
  addButtons(...e) {
    e.forEach((t) => {
      me.addAttributes(t), this._buttonPanel.appendChild(t);
    });
  }
  static createTextButton(e) {
    const t = A();
    return t[m].add("modal-button"), t.textContent = e, t;
  }
  static createSVGButton(e) {
    const t = A();
    t[m].add("modal-button", "modal-svg-button");
    const n = kt.createSVGElement(e);
    return n[m].add("modal-svg-button-icon"), t.appendChild(n), t;
  }
  close() {
    this._elementRef[m].remove("show-modal"), this._elementRef[m].add("hide-modal"), this._backgroundPanelRef[m].remove("show-modal-background"), this._backgroundPanelRef[m].add("hide-modal-background"), this._isOpen = !1, setTimeout(() => {
      this._elementRef[v].display = "none", this._backgroundPanelRef[v].display = "none";
    }, at.MODAL_CLOSE_TIMEOUT_MS);
  }
  displayModalElements() {
    this._elementRef[v].display = "flex", this._elementRef[m].remove("hide-modal"), this._elementRef[m].add("show-modal"), this._backgroundPanelRef[v].display = "block", this._backgroundPanelRef[m].remove("hide-modal-background"), this._backgroundPanelRef[m].add("show-modal-background"), this._isOpen = !0;
  }
  openTextModal(e) {
    this._contentRef.innerHTML = e, this.displayModalElements();
  }
  addCloseButton(e, t, n) {
    const s = t ? at.createSVGButton(e) : at.createTextButton(e);
    return this.addButtons(s), z.assignButtonEvents(s, () => {
      this.close(), setTimeout(() => {
        n == null || n();
      }, 140);
    }), s;
  }
  static createTextModalFunc(e, t, n) {
    var s;
    if (typeof t == "object" && ((s = t[b]) != null && s.infoModal)) {
      const r = new at(e, ["modal-content"], t[b].infoModal.containerStyle);
      return r.addCloseButton("OK", !1, n), r.openTextModal.bind(r, t.infoModalTextMarkUp || "");
    }
  }
  addWindowEvents(e) {
    this.keyDownEvent = this.windowKeyDown.bind(this, e), window.addEventListener("keydown", this.keyDownEvent);
  }
  windowKeyDown(e, t) {
    var n, s;
    !e.isConnected && this.keyDownEvent ? window.removeEventListener("keydown", this.keyDownEvent) : this._isOpen && (t.key === _e.ESCAPE ? (this.close(), (n = this.extensionCloseCallback) == null || n.call(this)) : t.key === _e.ENTER && (this.close(), (s = this.extensionCloseCallback) == null || s.call(this)));
  }
};
at.MODAL_CLOSE_TIMEOUT_MS = 190;
let tn = at;
class ui extends gn {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    var p, u, g, y, _, S, M, K, ie, re;
    const a = le.processPosition((p = n == null ? void 0 : n.button) == null ? void 0 : p.position), c = ((y = (g = (u = n == null ? void 0 : n.button) == null ? void 0 : u[R]) == null ? void 0 : g[h]) == null ? void 0 : y.content) || o, l = ut.tryCreateConfig("Upload File", (_ = n == null ? void 0 : n.button) == null ? void 0 : _.tooltip);
    super(
      ui.createButtonElement(),
      r,
      a,
      l,
      n.button,
      c
    );
    const d = this.createInnerElementsForStates(s, this.customStyles);
    this._inputElement = ui.createInputElement((S = n == null ? void 0 : n[b]) == null ? void 0 : S.acceptedFormats), this.addClickEvent(e, n), this.changeElementsByState(d[R]), this.reapplyStateStyle(R), this._fileAttachmentsType = t, this._openModalOnce = ((K = (M = n[b]) == null ? void 0 : M.infoModal) == null ? void 0 : K.openModalOnce) === !1 || (re = (ie = n[b]) == null ? void 0 : ie.infoModal) == null ? void 0 : re.openModalOnce;
  }
  createInnerElementsForStates(e, t) {
    return {
      [R]: this.createInnerElements(e, R, t)
    };
  }
  triggerImportPrompt(e) {
    e.onchange = this.import.bind(this, e), e[J]();
  }
  import(e) {
    Os.addFilesToType(Array.from(e[b] || []), [this._fileAttachmentsType]), e.value = "";
  }
  static createInputElement(e) {
    const t = A("input");
    return t[E] = se, t.accept = e || "", t.hidden = !0, t.multiple = !0, t;
  }
  static createButtonElement() {
    const e = A();
    return e[m].add("input-button"), e;
  }
  addClickEvent(e, t) {
    const n = this.triggerImportPrompt.bind(this, this._inputElement), s = tn.createTextModalFunc(e, t, n);
    this.elementRef.onclick = this[J].bind(this, s);
  }
  click(e) {
    e && (this._openModalOnce === void 0 || this._openModalOnce === !0) ? (e(), this._openModalOnce === !0 && (this._openModalOnce = !1)) : this.triggerImportPrompt(this._inputElement);
  }
}
class Ct {
  static create(e, t, n) {
    const s = Ct.createElement(n);
    Ct.addEvents(s, e, t), e.appendChild(s);
  }
  static createElement(e) {
    const t = A();
    return t.id = "drag-and-drop", typeof e === U && Object.assign(t[v], e), t;
  }
  static addEvents(e, t, n) {
    t.ondragenter = (s) => {
      s.preventDefault(), Ct.display(e);
    }, e.ondragleave = (s) => {
      s.preventDefault(), Ct.hide(e);
    }, e.ondragover = (s) => {
      s.preventDefault();
    }, e.ondrop = (s) => {
      s.preventDefault(), Ct.uploadFile(n, s), Ct.hide(e);
    };
  }
  static uploadFile(e, t) {
    var s;
    const n = (s = t.dataTransfer) == null ? void 0 : s[b];
    n && e.addFilesToAnyType(Array.from(n));
  }
  static display(e) {
    e[v].display = "block";
  }
  static hide(e) {
    e[v].display = "none";
  }
  static isEnabled(e, t) {
    return t !== void 0 && t === !1 ? !1 : !!t || e.getNumberOfTypes() > 0;
  }
}
class Wt {
  // prettier-ignore
  static validate(e, t, n, s, r, o, a) {
    const c = n.isSubmitProgrammaticallyDisabled ? !1 : e(s, r, a);
    return c ? t.changeToSubmitIcon() : t.changeToDisabledIcon(), o == null || o.addInputText(s || ""), c;
  }
  // prettier-ignore
  static async useValidationFunc(e, t, n, s, r, o) {
    const a = t.isTextInputEmpty() ? "" : t.inputElementRef.textContent;
    await n.completePlaceholders();
    const c = n.getAllFileData(), l = c == null ? void 0 : c.map((d) => d[se]);
    return Wt.validate(e, s, r, a, l, o);
  }
  // prettier-ignore
  static async useValidationFuncProgrammatic(e, t, n, s, r) {
    var a;
    const o = (a = t[b]) == null ? void 0 : a.map((c) => c[se]);
    return Wt.validate(e, n, s, t[h], o, r, !0);
  }
  static validateWebsocket(e, t) {
    const { websocket: n, connectSettings: s } = e;
    return n && s.url !== pt.URL && !ke.canSendMessage(n) ? (t.changeToDisabledIcon(), !1) : !0;
  }
  // prettier-ignore
  static attach(e, t, n, s, r, o) {
    const a = e.validateInput || le.processValidateInput(e);
    e._validationHandler = async (c) => {
      if (r.status.loadingActive || r.status.requestInProgress || !Wt.validateWebsocket(t, r)) return !1;
      const l = a || t.canSendMessage;
      return l ? c ? Wt.useValidationFuncProgrammatic(l, c, r, t, o) : Wt.useValidationFunc(l, n, s, r, t, o) : null;
    };
  }
}
class ma {
  static getFileName(e, t) {
    const n = /* @__PURE__ */ new Date(), s = String(n.getHours()).padStart(2, "0"), r = String(n.getMinutes()).padStart(2, "0"), o = String(n.getSeconds()).padStart(2, "0");
    return `${e}-${s}-${r}-${o}.${t}`;
  }
}
class Vh extends Ai {
  constructor(e, t) {
    var n, s;
    super(t.button), this._waitingForBrowserApproval = !1, this._audioType = e, this._extension = ((n = t[b]) == null ? void 0 : n.format) || "mp3", this._maxDurationSeconds = (s = t[b]) == null ? void 0 : s.maxDurationSeconds, z.assignButtonEvents(this.elementRef, this.buttonClick.bind(this));
  }
  buttonClick() {
    this._waitingForBrowserApproval || (this.isActive ? this.stop() : (this._waitingForBrowserApproval = !0, this.record()));
  }
  stop() {
    return new Promise((e) => {
      var t, n;
      this.changeToDefault(), (t = this._mediaRecorder) == null || t.stop(), (n = this._mediaStream) == null || n.getTracks().forEach((s) => s.stop()), setTimeout(() => {
        e();
      }, 10);
    });
  }
  record() {
    navigator.mediaDevices.getUserMedia({ audio: !0 }).then((e) => {
      this.changeToActive(), this._mediaRecorder = new MediaRecorder(e), this._audioType.addPlaceholderAttachment(this.stop.bind(this), this._maxDurationSeconds), this._mediaStream = e, this._mediaRecorder.addEventListener("dataavailable", (t) => {
        this.createFile(t);
      }), this._mediaRecorder[qt]();
    }).catch((e) => {
      console[f](e), this.stop();
    }).finally(() => {
      this._waitingForBrowserApproval = !1;
    });
  }
  createFile(e) {
    const t = new Blob([e.data], { type: `audio/${this._extension}` }), n = ma.getFileName(this._newFilePrefix || $, this._extension), s = new File([t], n, { type: t[E] }), r = new FileReader();
    r.readAsDataURL(s), r.onload = (o) => {
      this._audioType.completePlaceholderAttachment(s, o.target.result);
    };
  }
}
const Kh = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="14"></line>
  <polygon points="22 2 15 22 11 14 2 10 22 2"></polygon>
</svg>
`;
class nn {
  static resetSubmit(e, t) {
    t ? e.unsetCustomStateStyles([It, st]) : e.unsetCustomStateStyles([Bi, It, st]), e.reapplyStateStyle(st);
  }
  static overwriteDefaultStyleWithSubmit(e, t) {
    if (!e.submit) return;
    const n = C(e[t] || {});
    Pe.overwritePropertyObjectFromAnother(n, e.submit, ["container", w]), Pe.overwritePropertyObjectFromAnother(n, e.submit, [h, "styles", w]), Pe.overwritePropertyObjectFromAnother(n, e.submit, [G, "styles", w]), e[t] = n;
  }
  // prettier-ignore
  static setUpDisabledButton(e) {
    Pe.setPropertyValueIfDoesNotExist(e, [st, "container", w, "backgroundColor"], ""), Pe.setPropertyValueIfDoesNotExist(e, [j, "container", w, "backgroundColor"], ga), Pe.setPropertyValueIfDoesNotExist(e.submit, [G, "styles", w, "filter"], ""), Pe.setPropertyValueIfDoesNotExist(
      e[j],
      [G, "styles", w, "filter"],
      "brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(5564%) hue-rotate(207deg) brightness(100%) contrast(97%)"
    ), Pe.setPropertyValueIfDoesNotExist(e[j], [h, "styles", w, "color"], "grey"), nn.overwriteDefaultStyleWithSubmit(e, j);
  }
  static process(e) {
    const t = C(e || {});
    return nn.overwriteDefaultStyleWithSubmit(t, It), nn.overwriteDefaultStyleWithSubmit(t, Bi), e != null && e.alwaysEnabled || nn.setUpDisabledButton(t), t;
  }
}
class ms extends gn {
  // prettier-ignore
  constructor(e, t, n, s, r, o) {
    const a = nn.process(e.submitButtonStyles), c = Kh, l = ut.tryCreateConfig("Submit", a == null ? void 0 : a.tooltip);
    super(ms.createButtonContainerElement(), c, a == null ? void 0 : a.position, l, a), this._isSVGLoadingIconOverriden = !1, this.status = { requestInProgress: !1, loadingActive: !1 }, this._messages = n, this._textInput = t, this._fileAttachments = r, this._innerElements = this.createInnerElementsForStates(), this._stopClicked = { listener: () => {
    } }, this._serviceIO = s, this._alwaysEnabled = !!(a != null && a.alwaysEnabled), e.disableSubmitButton = this.disableSubmitButton.bind(this, s), this.attemptOverwriteLoadingStyle(e), o.microphone && this.setUpSpeechToText(o.microphone.button, e.speechToText), setTimeout(() => {
      var d;
      this._validationHandler = e._validationHandler, this.assignHandlers(this._validationHandler), (d = this._validationHandler) == null || d.call(this);
    });
  }
  createInnerElementsForStates() {
    const { submit: e, loading: t, stop: n } = this.createCustomElements();
    return {
      submit: e,
      loading: t || [ms.createLoadingIconElement()],
      stop: n || [ms.createStopIconElement()],
      [j]: this.createDisabledIconElement(e)
    };
  }
  createCustomElements() {
    const e = Et.createCustomElements(st, this[G], this.customStyles), t = { loading: void 0, stop: void 0 };
    return Object.keys(t).forEach((n) => {
      const s = n, r = Et.createCustomElements(s, this[G], this.customStyles);
      r && (t[s] = r);
    }), t.submit = e || this.buildDefaultIconElement("submit-icon"), t;
  }
  static createButtonContainerElement() {
    const e = A();
    return e[m].add("input-button"), e;
  }
  static createLoadingIconElement() {
    const e = A();
    return e[m].add("loading-submit-button"), e;
  }
  static createStopIconElement() {
    const e = A();
    return e.id = "stop-icon", e;
  }
  createDisabledIconElement(e) {
    return Et.createCustomElements(j, this[G], this.customStyles) || [e[0].cloneNode(!0)];
  }
  // prettier-ignore
  attemptOverwriteLoadingStyle(e) {
    var t, n, s, r, o, a, c, l, d;
    if (!((n = (t = this.customStyles) == null ? void 0 : t.submit) != null && n[G] || (o = (r = (s = this.customStyles) == null ? void 0 : s.loading) == null ? void 0 : r[G]) != null && o.content || (l = (c = (a = this.customStyles) == null ? void 0 : a.loading) == null ? void 0 : c[h]) != null && l.content) && (e.displayLoadingBubble === void 0 || e.displayLoadingBubble === !0)) {
      const p = A("style");
      p.textContent = `
        .loading-button > * {
          filter: brightness(0) saturate(100%) invert(72%) sepia(0%) saturate(3044%) hue-rotate(322deg) brightness(100%)
            contrast(96%) !important;
        }`, (d = e.shadowRoot) == null || d.appendChild(p), this._isSVGLoadingIconOverriden = !0;
    }
  }
  assignHandlers(e) {
    this._serviceIO.completionsHandlers = {
      onFinish: this.resetSubmit.bind(this, e)
    }, this._serviceIO.streamHandlers = {
      onOpen: this.changeToStopIcon.bind(this),
      onClose: this.resetSubmit.bind(this, e),
      stopClicked: this._stopClicked
    };
    const { stream: t } = this._serviceIO;
    typeof t == "object" && typeof t.simulation == "number" && (this._serviceIO.streamHandlers.simulationInterim = t.simulation);
  }
  setUpSpeechToText(e, t) {
    this._microphoneButton = e, this._stopSTTAfterSubmit = typeof t == "object" ? t.stopAfterSubmit : !1;
  }
  resetSubmit(e) {
    this.status.requestInProgress = !1, this.status.loadingActive = !1, e();
  }
  async submitFromInput() {
    await this._fileAttachments.completePlaceholders();
    const e = this._fileAttachments.getAllFileData();
    if (this._textInput.isTextInputEmpty())
      this.attemptSubmit({ [h]: "", [b]: e });
    else {
      const t = this._textInput.inputElementRef.innerText.trim();
      this.attemptSubmit({ [h]: t, [b]: e });
    }
    ($e.IS_SAFARI || $e.IS_MOBILE) && setTimeout(() => ln.focusEndOfInput(this._textInput.inputElementRef));
  }
  async programmaticSubmit(e) {
    typeof e == "string" && (e = le.processSubmitUserMessage(e));
    const t = { [h]: e[h] };
    e[b] && (t[b] = Array.from(e[b]).map((n) => ({ file: n, [E]: Tt.getTypeFromBlob(n) }))), e.custom && (t.custom = e.custom), setTimeout(() => this.attemptSubmit(t, !0));
  }
  // TO-DO - should be disabled when loading history
  async attemptSubmit(e, t = !1) {
    var r, o, a, c;
    if (await ((r = this._validationHandler) == null ? void 0 : r.call(this, t ? e : void 0)) === !1) return;
    this.changeToLoadingIcon(), this._textInput.clear(), $e.IS_MOBILE && setTimeout(() => this._textInput.inputElementRef.focus()), typeof this._messages.focusMode != "boolean" && ((o = this._messages.focusMode) != null && o.fade) && await Ws.fadeAnimation(this._messages.elementRef, this._messages.focusMode.fade), await this.addNewMessage(e), this._serviceIO.isWebModel() || this._messages.addLoadingMessage();
    const n = (a = e[b]) == null ? void 0 : a.map((l) => l[se]), s = { [h]: e[h] === "" ? void 0 : e[h], [b]: n };
    await this._serviceIO.callAPI(s, this._messages), (c = this._fileAttachments) == null || c.hideFiles();
  }
  async addNewMessage({ text: e, files: t, custom: n }) {
    const s = { [x]: F, custom: n };
    e && (s[h] = e), t && (s[b] = await this._messages.addMultipleFiles(t, this._fileAttachments)), this._serviceIO.sessionId && (s._sessionId = this._serviceIO.sessionId), Object.keys(s).length > 0 && this._messages.addNewMessage(s);
  }
  stopStream() {
    var e, t, n;
    (t = (e = this._serviceIO.streamHandlers).onAbort) == null || t.call(e), (n = this._stopClicked) == null || n.listener(), this._validationHandler && this.resetSubmit(this._validationHandler);
  }
  changeToStopIcon() {
    this._serviceIO.websocket || (this.elementRef[m].remove(Hs, $n, jn), me.removeAriaAttributes(this.elementRef), this.changeElementsByState(this._innerElements.stop), this.reapplyStateStyle(Bi, [It, st]), z.assignButtonEvents(this.elementRef, this.stopStream.bind(this)), this.status.loadingActive = !1);
  }
  changeToLoadingIcon() {
    this._serviceIO.websocket || (this._isSVGLoadingIconOverriden || this.changeElementsByState(this._innerElements.loading), this.elementRef[m].remove(jn, $n), me.removeAriaDisabled(this.elementRef), this.elementRef[m].add(Hs), me.addAriaBusy(this.elementRef), this.reapplyStateStyle(It, [st]), z.assignButtonEvents(this.elementRef, () => {
    }), this.status.requestInProgress = !0, this.status.loadingActive = !0);
  }
  // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  changeToSubmitIcon() {
    this.elementRef[m].contains(jn) || (this.elementRef[m].remove(Hs, $n), me.removeAriaAttributes(this.elementRef), this.elementRef[m].add(jn), this.changeElementsByState(this._innerElements.submit), nn.resetSubmit(this, this.status.loadingActive), z.assignButtonEvents(this.elementRef, () => {
      var e;
      this.submitFromInput(), (e = this._microphoneButton) != null && e.isActive && Is.toggleSpeechAfterSubmit(this._microphoneButton.elementRef, !!this._stopSTTAfterSubmit), setTimeout(() => ln.focusEndOfInput(this._textInput.inputElementRef));
    }));
  }
  // called every time when user triggers an input via ValidationHandler - hence use class to check if not already present
  changeToDisabledIcon(e = !1) {
    this._alwaysEnabled && !e ? this.changeToSubmitIcon() : this.elementRef[m].contains($n) || (this.elementRef[m].remove(Hs, jn), me.removeAriaBusy(this.elementRef), this.elementRef[m].add($n), me.addAriaDisabled(this.elementRef), this.changeElementsByState(this._innerElements[j]), this.reapplyStateStyle(j, [st]), z.assignButtonEvents(this.elementRef, () => {
    }));
  }
  disableSubmitButton(e, t) {
    var n;
    e.isSubmitProgrammaticallyDisabled = t !== !1, !(this.status.requestInProgress || this.status.loadingActive) && (t === !1 ? (n = this._validationHandler) == null || n.call(this) : this.changeToDisabledIcon(!0));
  }
}
const Wh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"/>
</svg>
`, Xh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"></path>
</svg>
`, Zh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/>
</svg>`, Yh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
class Rr extends tn {
  // prettier-ignore
  constructor(e, t, n, s) {
    super(e, ["modal-content", "modal-camera-content"], n), this._stopped = !1, this._format = "image/png", this._canvas = A("canvas"), this._canvas[m].add("camera-modal-canvas");
    const { captureButton: r, submitButton: o } = this.addButtonsAndTheirEvents(t);
    this._captureButton = r, this._submitButton = o, this._captureIcon = this._captureButton.children[0], this._refreshIcon = kt.createSVGElement(Wh), this._refreshIcon[m].add("modal-svg-button-icon", "modal-svg-refresh-icon"), (s == null ? void 0 : s.format) === "jpeg" && (this._format = "image/jpeg"), s != null && s.dimensions && (this._dimensions = s.dimensions), this._contentRef.appendChild(this._canvas), this.extensionCloseCallback = this.stop;
  }
  addButtonsAndTheirEvents(e) {
    const t = tn.createSVGButton(Xh);
    t[m].add("modal-svg-camera-button"), t.children[0][m].add("modal-svg-camera-icon");
    const n = this.addCloseButton(Zh, !0);
    n[m].add("modal-svg-close-button"), n.children[0][m].add("modal-svg-close-icon");
    const s = tn.createSVGButton(Yh);
    return s[m].add("modal-svg-submit-button"), this.addButtons(t, s), this.addButtonEvents(t, n, s, e), { captureButton: t, submitButton: s };
  }
  // prettier-ignore
  addButtonEvents(e, t, n, s) {
    z.assignButtonEvents(e, this.capture.bind(this)), z.assignButtonEvents(t, this.stop.bind(this)), z.assignButtonEvents(n, () => {
      const r = this.getFile();
      r && Os.addFilesToType([r], [s]), this.stop(), this.close();
    });
  }
  stop() {
    this._mediaStream && this._mediaStream.getTracks().forEach((e) => e.stop()), this._stopped = !0, setTimeout(() => {
      this._captureButton.replaceChildren(this._captureIcon), this._captureButton[m].replace("modal-svg-refresh-button", "modal-svg-camera-button");
      const e = this._canvas.getContext("2d");
      e == null || e.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }, tn.MODAL_CLOSE_TIMEOUT_MS);
  }
  start() {
    this._dataURL = void 0, this._submitButton[m].add(`modal-svg-submit-${j}`), this._stopped = !1, navigator.mediaDevices.getUserMedia({ video: this._dimensions || !0 }).then((e) => {
      if (this._mediaStream = e, !this.isOpen()) return this.stop();
      const t = A("video");
      t.srcObject = e, t.play(), requestAnimationFrame(this.updateCanvas.bind(this, t, this._canvas));
    }).catch((e) => {
      console[f](e), this.stop(), this.close();
    });
  }
  capture() {
    this._dataURL ? (this._captureButton.replaceChildren(this._captureIcon), this._captureButton[m].replace("modal-svg-refresh-button", "modal-svg-camera-button"), this._submitButton[m].add(`modal-svg-submit-${j}`), this._dataURL = void 0) : (this._captureButton.replaceChildren(this._refreshIcon), this._captureButton[m].replace("modal-svg-camera-button", "modal-svg-refresh-button"), this._submitButton[m].remove(`modal-svg-submit-${j}`), this._dataURL = this._canvas.toDataURL());
  }
  getFile() {
    if (this._dataURL) {
      const e = atob(this._dataURL.split(",")[1]), t = new Array(e.length);
      for (let a = 0; a < e.length; a++)
        t[a] = e.charCodeAt(a);
      const n = new Uint8Array(t), s = new Blob([n], { type: this._format }), r = this._format === "image/jpeg" ? "jpeg" : "png", o = ma.getFileName(this._newFilePrefix || "photo", r);
      return new File([s], o, { type: s[E] });
    }
  }
  updateCanvas(e, t) {
    if (!this._stopped) {
      if (!this._dataURL) {
        t.width = e.videoWidth, t.height = e.videoHeight;
        const n = t.getContext("2d");
        n == null || n.drawImage(e, 0, 0, t.width, t.height);
      }
      requestAnimationFrame(this.updateCanvas.bind(this, e, t));
    }
  }
  openCameraModal(e) {
    this.displayModalElements(), e[qt]();
  }
  // prettier-ignore
  static createCameraModalFunc(e, t, n, s) {
    const r = new Rr(e, t, n, s);
    return r.openCameraModal.bind(r, r);
  }
}
const Jh = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <path d="M29 7h-4.599l-2.401-4h-12l-2.4 4h-4.6c-1 0-3 1-3 2.969v16.031c0 1.657 1.5 3 2.792 3h26.271c1.313 0 2.938-1.406 2.938-2.968v-16.032c0-1-1-3-3-3zM30 26.032c0 0.395-0.639 0.947-0.937 0.969h-26.265c-0.232-0.019-0.797-0.47-0.797-1v-16.031c0-0.634 0.851-0.953 1-0.969h5.732l2.4-4h9.802l1.785 3.030 0.55 0.97h5.731c0.705 0 0.99 0.921 1 1v16.032zM16 10c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zM16 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
</svg>`;
class Ir extends gn {
  constructor(e, t, n) {
    var l, d, p, u, g, y;
    const s = le.processPosition((l = n == null ? void 0 : n.button) == null ? void 0 : l.position), r = ((u = (p = (d = n == null ? void 0 : n.button) == null ? void 0 : d[R]) == null ? void 0 : p[h]) == null ? void 0 : u.content) || "Photo", o = ut.tryCreateConfig("Camera", (g = n == null ? void 0 : n.button) == null ? void 0 : g.tooltip), a = ((y = n == null ? void 0 : n.button) == null ? void 0 : y[R]) || {};
    super(Ir.createButtonElement(), Jh, s, o, a, r);
    const c = this.createInnerElementsForStates(this.customStyles);
    n && this.addClickEvent(e, t, n.modalContainerStyle, n[b]), this.changeElementsByState(c[R]), this.reapplyStateStyle(R);
  }
  createInnerElementsForStates(e) {
    return {
      [R]: this.createInnerElements("camera-icon", R, e)
    };
  }
  static createButtonElement() {
    const e = A();
    return e[m].add("input-button"), e;
  }
  // prettier-ignore
  addClickEvent(e, t, n, s) {
    const r = Rr.createCameraModalFunc(
      e,
      t,
      n,
      s
    );
    z.assignButtonEvents(this.elementRef, r);
  }
}
class vn {
  constructor(e, t, n, s) {
    this.elementRef = vn.createPanelElement(e.inputAreaStyle);
    const r = {}, o = this.createFileUploadComponents(e, n, s, r), a = new Ks(e, n, o, t.browserStorage);
    e.speechToText && !r.microphone && (r.microphone = { button: new Is(e, a, t.addNewErrorMessage.bind(t)) });
    const c = new ms(e, a, t, n, o, r);
    a.submit = c.submitFromInput.bind(c), Wt.attach(e, n, a, o, c, t.browserStorage), e.submitUserMessage = c.programmaticSubmit.bind(c), r.submit = { button: c }, e.customButtons && rn.add(e, r), vn.addElements(this.elementRef, a, r, s, o, e.dropupStyles), vn.assignOnInput(e, n, o, a);
  }
  static createPanelElement(e) {
    const t = A();
    return t.id = "input", Object.assign(t[v], e), t;
  }
  // prettier-ignore
  createFileUploadComponents(e, t, n, s) {
    var o, a, c, l;
    const r = new Os(this.elementRef, e.attachmentContainerStyle, t.demo);
    if (vn.createUploadButtons(e, t, t.fileTypes || {}, r, n, s), (o = t[Fe]) != null && o[b]) {
      const d = ((a = s[ee]) == null ? void 0 : a.fileType) || r.addType(e, t, t[Fe][b], ee);
      s[Fe] = { button: new Ir(n, d, t[Fe]) };
    }
    if ((c = t.recordAudio) != null && c[b]) {
      const d = ((l = s[$]) == null ? void 0 : l.fileType) || r.addType(e, t, t.recordAudio[b], $);
      s.microphone = { button: new Vh(d, t.recordAudio) };
    }
    return Ct.isEnabled(r, e.dragAndDrop) && Ct.create(n, r, e.dragAndDrop), r;
  }
  // prettier-ignore
  static createUploadButtons(e, t, n, s, r, o) {
    Object.keys(n).forEach((a) => {
      const c = a, l = n[c];
      if (l[b]) {
        const d = s.addType(e, t, l[b], c), { id: p, svgString: u, dropupText: g } = Ch[c], y = new ui(r, d, l, p, u, g);
        o[c] = { button: y, fileType: d };
      }
    });
  }
  // prettier-ignore
  static addElements(e, t, n, s, r, o) {
    z.addElements(e, t.elementRef);
    const a = Ln.create(), c = Ne.addButtons(a, n, s, o);
    fs.set(t.inputElementRef, a, r.elementRef, c), Ln.add(e, a);
  }
  static assignOnInput(e, t, n, s) {
    t.onInput = (r) => {
      setTimeout(() => {
        const o = n.getAllFileData(), a = s.inputElementRef.innerText.trim(), c = { [h]: a };
        o && (c[b] = o.map((l) => l[se])), hn.onInput(e, c, r);
      });
    };
  }
}
class Mr {
  static createElements(e, t, n) {
    const s = A();
    s.id = "chat-view";
    const r = !e.focusMode && e.upwardsMode;
    s.classList.add(r ? bh : gh);
    const o = new tt(e, t, n);
    t.websocket && ke.createConnection(t, o);
    const a = new vn(e, o, t, s), c = r ? o.elementRef.parentElement : o.elementRef;
    return z.addElements(s, c, a.elementRef), s;
  }
  static render(e, t, n, s) {
    const r = Mr.createElements(e, n, s);
    t.replaceChildren(r), n.isCustomView() && n.setUpView(r, t);
  }
}
const Qh = `#validate-property-key-view{height:100%;position:relative;display:flex;justify-content:center;align-items:center;padding:8px}#loading-validate-key-property{display:inline-block;width:50px;height:50px}#loading-validate-key-property:after{content:" ";display:block;width:38px;height:38px;margin:1px;border-radius:50%;border:5px solid #5fb2ff;border-color:#5fb2ff transparent #5fb2ff transparent;animation:loading-spinner 1.4s linear infinite}#deep-chat-openai-realtime-container{height:100%;width:100%}#deep-chat-openai-realtime-avatar-container{height:60%;width:100%;display:flex;justify-content:center;align-items:center}#deep-chat-openai-realtime-avatar{border-radius:50%;height:110px;border:1px solid rgb(215,215,215);padding:8px;-webkit-user-select:none;user-select:none;margin-top:20px}#deep-chat-openai-realtime-buttons-container{height:40%;display:flex;position:relative}.deep-chat-openai-realtime-button-container{height:100%;width:50%;display:flex;justify-content:center;align-items:center}.deep-chat-openai-realtime-button{width:70px;height:70px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer}.deep-chat-openai-realtime-button-default{background-color:#e3e3e3}.deep-chat-openai-realtime-button-default:hover{background-color:#d4d4d4}.deep-chat-openai-realtime-button-default:active{background-color:#c5c5c5}.deep-chat-openai-realtime-button-loading{opacity:.7;pointer-events:none}.deep-chat-openai-realtime-microphone-active{background-color:#ffe7e7}.deep-chat-openai-realtime-microphone-active:hover{background-color:#ffdede}.deep-chat-openai-realtime-microphone-active:active{background-color:#ffd2d2}.deep-chat-openai-realtime-microphone>*{height:30px;width:30px}.deep-chat-openai-realtime-microphone-active>*{filter:brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(1360%) hue-rotate(325deg) brightness(95%) contrast(92%)}.deep-chat-openai-realtime-toggle>*{height:32px;width:32px;padding-inline-start:3px;filter:brightness(0) saturate(100%) invert(22%) sepia(0%) saturate(4537%) hue-rotate(208deg) brightness(105%) contrast(91%)}.deep-chat-openai-realtime-button-unavailable{opacity:.45;pointer-events:none}#deep-chat-openai-realtime-error{color:red;position:absolute;top:calc(50% + 40px);inset-inline-start:50%;transform:translate(-50%,-50%);font-size:17px}#deep-chat-openai-realtime-loading{position:absolute;font-size:15px;top:50%;inset-inline-start:50%;transform:translate(-50%,-50%)}#insert-key-view{height:100%;position:relative}#insert-key-contents{text-align:center;position:absolute;inset-block-start:44%;inset-inline-start:50%;transform:translate(-50%,-50%);width:82%;display:flex;max-width:700px}#insert-key-title{margin-bottom:15px}#insert-key-input-container{margin-inline-end:2.7em;width:calc(100% - 80px)}#insert-key-input{padding:.3em 1.7em .3em .3em;border-width:1px;border-style:solid;border-radius:3px;width:100%;font-size:inherit}.insert-key-input-valid{border-color:gray}.insert-key-input-invalid{border-color:red}#visibility-icon-container{position:relative;float:inline-end;cursor:pointer;-webkit-user-select:none;user-select:none}.visibility-icon{filter:brightness(0) saturate(100%) invert(63%) sepia(1%) saturate(9%) hue-rotate(43deg) brightness(98%) contrast(92%);position:absolute;inset-inline-end:-1.7em;inset-block-start:-1.43em}#visible-icon{inset-block-start:-1.4em}.visibility-icon:hover{filter:unset}.visibility-icon>*{pointer-events:none}#start-button{border:1px solid grey;color:#454545;border-radius:4px;width:3em;display:flex;justify-content:center;align-items:center;cursor:pointer;padding:.28em .3em;-webkit-user-select:none;user-select:none;background-color:#fff}#start-button:hover{background-color:#f2f2f2}#start-button:active{background-color:#d2d2d2}#insert-key-help-text-container{width:100%;position:absolute;margin-top:32px;margin-bottom:20px}#insert-key-help-text-contents{width:100%;position:absolute}#insert-key-input-invalid-text{display:block;margin-top:1em;margin-bottom:.5em;color:red}.insert-key-input-help-text{display:block;margin-top:16px}#loading-key{display:inline-block;width:16px;height:16px}#loading-key:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:2px solid #0084ff;border-color:#0084ff transparent #0084ff transparent;animation:loading-spinner 1.2s linear infinite}#error-view{color:red;font-size:1.2em;line-height:1.3em;margin-top:-5px;text-align:center;height:100%;display:flex;justify-content:center;align-items:center;padding-inline:8px}@keyframes loading-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.intro-panel{position:absolute;display:flex;justify-content:center;right:0;bottom:0;left:0;margin:auto;height:fit-content;top:-2.5em}pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-dark
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#2b2b2b;color:#f8f8f2}.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-deletion,.hljs-name,.hljs-regexp,.hljs-selector-class,.hljs-selector-id,.hljs-tag,.hljs-template-variable,.hljs-variable{color:#ffa07a}.hljs-built_in,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-type{color:#f5ab35}.hljs-attribute{color:gold}.hljs-addition,.hljs-bullet,.hljs-string,.hljs-symbol{color:#abe338}.hljs-section,.hljs-title{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-quote,.hljs-string,.hljs-symbol,.hljs-type{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}#messages,.deep-chat-upwards-mode #messages>div{overflow:auto;overflow-anchor:none}.deep-chat-upwards-mode #messages{height:100%;display:flex;flex-direction:column;justify-content:flex-end}.outer-message-container:last-child{margin-bottom:5px}.inner-message-container{display:flex;margin-inline:auto;width:calc(97.5% - 24px);max-width:100%}.message-bubble{margin-top:10px;word-wrap:break-word;width:fit-content;max-width:60%;border-radius:10px;padding:.42em .55em;height:fit-content;line-height:1.26}.user-message-text{color:#fff;background-color:#0084ff;margin-inline-end:0px;margin-inline-start:auto}.ai-message-text{color:#000;background-color:#e4e6eb;margin-inline-start:0px;margin-inline-end:auto}.deep-chat-last-group-messages-active{height:100%}#scroll-button{position:absolute;top:75%;left:50%;right:50%;transform:translate(-50%,-50%);transition:opacity .1s ease;display:flex;opacity:0;padding:8px;background-color:#fff;border:.5px solid #000000;justify-content:center;align-items:center;white-space:nowrap;cursor:pointer}#scroll-button:hover{background-color:#fafafa}.loading-history-message-full-view{position:absolute;height:70%;width:100%;display:flex;align-items:center}.deep-chat-upwards-mode #messages .loading-history-message-full-view{height:100%}.loading-history-message-small{height:20px;margin-bottom:30px}.loading-history-message-small>div>div{scale:.6}.loading-history-message{margin-top:0;width:100%;max-width:100%;display:flex;justify-content:center;background-color:unset}.loading-history{width:70px}.loading-history div{position:absolute;width:var(--loading-history-width);height:var(--loading-history-height);margin:var(--loading-history-margin);border:var(--loading-history-border);border-radius:50%;animation:loading-spinner 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:var(--loading-history-color) transparent transparent transparent}.loading-history div:nth-child(1){animation-delay:-.45s}.loading-history div:nth-child(2){animation-delay:-.3s}.loading-history div:nth-child(3){animation-delay:-.15s}.html-message{max-width:unset}.error-message-text{margin-inline:auto;background-color:#f4c0c0;color:#474747;text-align:center;max-width:95%;margin-top:14px;margin-bottom:10px}.deep-chat-loading-message-dots-container{width:1em;padding-top:.6em;padding-bottom:.6em;padding-inline-start:1.3em;padding-inline-end:.75em}.loading-message-dots{position:relative;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite linear alternate;animation-delay:.5s}.loading-message-dots:before,.loading-message-dots:after{content:"";display:inline-block;position:absolute;top:0}.loading-message-dots:before{inset-inline-start:-.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:0s}.loading-message-dots:after{inset-inline-start:.7em;width:.45em;height:.45em;border-radius:5px;background-color:var(--loading-message-color);color:var(--loading-message-color);animation:loading-message-dots 1s infinite alternate;animation-delay:1s}@keyframes loading-message-dots{0%{background-color:var(--loading-message-color)}50%,to{background-color:var(--loading-message-color-fade)}}.message-bubble>p:first-child,.message-bubble>.partial-render-message>p:first-child,.html-wrapper>p:first-child{margin-top:0}.message-bubble>p:last-child,.message-bubble>.partial-render-message:last-child>p,.html-wrapper>p:last-child{margin-bottom:0}pre{overflow:auto;display:block;word-break:break-all;word-wrap:break-word;border-radius:7px;background:#2b2b2b;color:#f8f8f2;margin-top:.8em;margin-bottom:.8em;padding:.6em;font-size:.9em;line-height:1.5em}.image-message{padding:0;display:flex;background-color:#ddd}.image-message>*,.image-message>*>*{width:100%;border-radius:8px;display:flex}.audio-message{width:60%;max-width:300px;height:2.2em;max-height:54px;padding:0;background-color:unset}.audio-player{width:100%;height:100%}.audio-player-safari{height:fit-content;width:40px}.audio-player-safari-start{float:inline-start}.audio-player-safari-end{float:inline-end}.any-file-message{padding:1px}.any-file-message-contents{display:flex}.any-file-message-icon-container{width:1.3em;min-width:1.3em;position:relative;border-radius:4px;margin-inline-start:6px;margin-inline-end:2px}.any-file-message-icon{background-color:#fff;border-radius:4px;position:absolute;width:1em;height:1.25em;padding:1px;margin-top:auto;margin-bottom:auto;top:0;bottom:0}.any-file-message-text{padding-top:5px;overflow-wrap:anywhere;padding-bottom:5px;padding-inline-end:7px}.message-bubble>a{color:inherit}.start-item-position{margin-inline-end:10px}.end-item-position{margin-inline-start:10px}.role-hidden{display:none}.avatar{padding-top:5px;width:1.5em;height:1.5em;border-radius:1px}.avatar-container{margin-top:9px}.name{margin-top:16px;font-size:15px}#drag-and-drop{position:absolute;display:none;z-index:10;height:calc(100% - 10px);width:calc(100% - 10px);background-color:#70c6ff4d;border:5px dashed #6dafff}#file-attachment-container{position:absolute;height:3.6em;width:calc(80% - 4px);top:-2.5em;border-radius:5px;overflow:auto;text-align:start;background-color:#d7d7d73b;padding-inline-start:4px}.file-attachment{width:2.85em;height:2.85em;display:inline-flex;margin-inline-end:.6em;margin-bottom:.44em;margin-top:4px;position:relative;background-color:#fff;border-radius:5px}.image-attachment{width:100%;height:100%;object-fit:cover;border-radius:5px}.border-bound-attachment{width:calc(100% - 2px);height:calc(100% - 2px);border:1px solid #c3c3c3;border-radius:5px;overflow:hidden}.border-bound-attachment-safari{width:calc(100% - 1px);height:calc(100% - 1px)}.audio-attachment-icon-container{cursor:pointer}.audio-attachment-icon-container:hover{background-color:#f8f8f8}.attachment-icon{inset-inline:0;bottom:0;top:2px;margin:auto;position:absolute;width:25px;-webkit-user-select:none;user-select:none}.not-removable-attachment-icon{top:0;right:0;bottom:0;left:0}.play-icon{filter:brightness(0) saturate(100%) invert(17%) sepia(0%) saturate(1392%) hue-rotate(67deg) brightness(98%) contrast(97%)}.stop-icon{filter:brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(1228%) hue-rotate(198deg) brightness(93%) contrast(98%)}.audio-placeholder-text-3-digits{padding-inline-start:.26rem}.audio-placeholder-text-4-digits{padding-inline-start:.1rem}.any-file-attachment{padding:2px 0}.file-attachment-text-container{position:absolute;width:inherit;display:flex;align-items:center;height:100%;top:-1px}.audio-placeholder-text-3-digits-container{padding-top:1px;cursor:default}.any-file-attachment-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-inline-start:.13em;margin-inline:auto}.remove-file-attachment-button{height:1.25em;width:1.25em;border:1px solid #cfcfcf;border-radius:25px;background-color:#fff;top:-4px;inset-inline-end:-5px;position:absolute;display:flex;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.remove-file-attachment-button:hover{background-color:#e4e4e4}.remove-file-attachment-button:active{background-color:#d7d7d7}.x-icon{color:#4e4e4e;top:-.075em;position:relative;font-size:1.05em}.modal{display:none;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:80%;max-width:420px;max-height:80%;margin:auto;top:0;right:0;bottom:0;left:0;z-index:3}.modal-content{border-top:1px solid rgb(217,217,217);border-inline:1px solid rgb(217,217,217);border-start-start-radius:inherit;border-start-end-radius:inherit;background-color:#fff;overflow-y:auto;height:fit-content;max-height:calc(100% - 3.3em);width:100%}.modal-content>p{margin-inline:1em}.modal-content>ul{margin-inline-end:1em}.modal-button-panel{height:3.3em;border:1px solid;border-color:rgb(223,223,223) rgb(217,217,217) rgb(217,217,217);border-end-start-radius:inherit;border-end-end-radius:inherit;background-color:#fff;text-align:center;justify-content:center;display:flex;width:100%}.modal-button{min-width:2.5em;text-align:center;color:#fff;border-radius:5px;padding:.4em .4em .3em;height:1.25em;background-color:#3279b2;inset-block:0;margin-top:auto;margin-bottom:auto;cursor:pointer;-webkit-user-select:none;user-select:none;margin-inline:.31em}.modal-button:hover{background-color:#276da7}.modal-button:active{background-color:#1b5687}.modal-svg-button{padding:0 0 2px;width:2em;height:1.8em}.modal-svg-button-icon{width:100%;height:100%;filter:brightness(0) saturate(100%) invert(100%) sepia(15%) saturate(4%) hue-rotate(346deg) brightness(101%) contrast(102%)}#modal-background-panel{position:absolute;width:100%;height:100%;background-color:#00000042;z-index:2;display:none}.show-modal-background{animation:fadeInBackground .3s ease-in-out}@keyframes fadeInBackground{0%{opacity:0}to{opacity:1}}.show-modal{animation:fadeInModal .3s ease-in-out}@keyframes fadeInModal{0%{opacity:0;scale:.95}to{opacity:1;scale:1}}.hide-modal-background{animation:fadeOutBackground .2s ease-in-out}@keyframes fadeOutBackground{0%{opacity:1}to{opacity:0}}.hide-modal{animation:fadeOutModal .2s ease-in-out}@keyframes fadeOutModal{0%{opacity:1;scale:1}to{opacity:0;scale:.95}}.modal-camera-content{overflow:hidden;text-align:center;border:unset;height:100%;background-color:#2a2a2a;display:flex;justify-content:center}.camera-modal-canvas{max-width:100%;max-height:100%;margin-top:auto;margin-bottom:auto}.modal-svg-submit-button{background-color:green}.modal-svg-submit-button:hover{background-color:#007500}.modal-svg-submit-button:active{background-color:#006500}.modal-svg-submit-disabled{pointer-events:none;background-color:#747474}.modal-svg-close-button{height:1.56em;padding-top:.37em;padding-bottom:0;background-color:#c13e3e}.modal-svg-close-button:hover{background-color:#b43434}.modal-svg-close-button:active{background-color:#972929}.modal-svg-close-icon{width:80%;height:80%}.modal-svg-camera-button{height:1.6em;padding-top:.38em;padding-bottom:0}.modal-svg-camera-icon{height:76%}.modal-svg-refresh-icon{height:105%}.modal-svg-refresh-button{height:1.66em;padding-top:.11em;padding-bottom:.21em}.input-button-container{position:relative;z-index:1}.inside-end{position:absolute;inset-inline-end:calc(10% + .35em);inset-block-end:.85em}.inside-start{position:absolute;inset-inline-start:calc(10% + .35em);inset-block-end:.85em}.outside-start{position:absolute;inset-inline-end:calc(11px - .55em);inset-block-end:.88em}.outside-end{position:absolute;inset-inline-start:calc(11px - .55em);inset-block-end:.88em}#upload-images-icon{position:absolute;pointer-events:none;width:1.45em;height:1.45em;inset-inline-start:.11em;inset-block-end:.08em;filter:brightness(0) saturate(100%) invert(43%) sepia(0%) saturate(740%) hue-rotate(77deg) brightness(99%) contrast(92%)}#upload-gifs-icon{position:absolute;pointer-events:none;width:1.5em;height:1.48em;inset-inline-start:.07em;inset-block-end:.08em;filter:brightness(0) saturate(100%) invert(49%) sepia(0%) saturate(2586%) hue-rotate(12deg) brightness(93%) contrast(90%)}#upload-audio-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;inset-inline-start:.17em;inset-block-end:.2em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%);transform:scaleX(.95)}#camera-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;inset-inline-start:.23em;inset-block-end:.2em;filter:brightness(0) saturate(100%) invert(52%) sepia(0%) saturate(161%) hue-rotate(164deg) brightness(91%) contrast(92%);transform:scaleX(.95)}#upload-mixed-files-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;inset-inline-start:.25em;inset-block-end:.2em;filter:brightness(0) saturate(100%) invert(53%) sepia(0%) saturate(36%) hue-rotate(74deg) brightness(98%) contrast(93%);transform:scaleX(.95)}#interim-text{color:gray}#microphone-button{padding-top:.5px}.outer-button-container>#microphone-button{padding-bottom:1px}#microphone-icon{position:absolute;pointer-events:none;width:1.21em;height:1.21em;inset-inline-start:.25em;inset-block-end:.25em}.default-microphone-icon{filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%)}.active-microphone-icon{filter:brightness(0) saturate(100%) invert(10%) sepia(97%) saturate(7495%) hue-rotate(0deg) brightness(101%) contrast(107%);border-radius:10px}.command-microphone-icon{filter:brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1067%) hue-rotate(77deg) brightness(99%) contrast(102%)}.unsupported-microphone{display:none}#submit-icon{height:100%;filter:brightness(0) saturate(100%) invert(32%) sepia(0%) saturate(924%) hue-rotate(46deg) brightness(95%) contrast(99%);width:1.21em}#stop-icon{background-color:#acacac;position:absolute;width:.95em;height:.95em;inset-inline-start:.35em;inset-block-end:.35em;border-radius:2px}.submit-button-enlarged{scale:1.1;margin-inline:.3em}.loading-submit-button{position:relative;inset-inline-start:calc(-9990px + .275em);width:.22em;height:.22em;border-radius:5px;background-color:#848484;color:#848484;box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484;animation:loading-submit-button 1.5s infinite linear;inset-block-end:-.75em}@keyframes loading-submit-button{0%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}16.667%{box-shadow:9990px -6px #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}33.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}50%{box-shadow:9990px 0 #848484,calc(9990px + .44em) -6px 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}66.667%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}83.333%{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) -6px 0 0 #848484}to{box-shadow:9990px 0 #848484,calc(9990px + .44em) 0 0 0 #848484,calc(9990px + .8em) 0 0 0 #848484}}.tooltip{position:absolute;visibility:hidden;z-index:1;pointer-events:none;padding:5px;padding-inline:7px;background-color:#333;border-radius:5px;width:max-content}.tooltip-text{color:#fff;font-size:13px}.input-button{border-radius:4px;cursor:pointer;margin-bottom:.2em;-webkit-user-select:none;user-select:none}.input-button-svg{width:1.65em;height:1.65em}.input-button-svg-text{padding:1px;height:1.65em;display:flex}.input-button-svg-text>svg{padding:.22rem}.input-button-svg-text>div{margin-inline-start:2px}.input-button:hover,.input-button:focus-visible{background-color:#9c9c9c2e}.input-button:active{background-color:#9c9c9c5e}.input-button:active:not(:hover){background-color:transparent}.loading-button{cursor:auto}.loading-button:hover{background-color:unset}.text-button{filter:unset!important;display:flex;justify-content:center;align-items:center;margin-inline:4px;height:1.6em;width:max-content}#custom-icon{height:100%;width:1.2em}.custom-button-container-default{color:#505050}.custom-button-container-default>.dropup-menu-item-icon{color:unset}.custom-button-container-default>svg{filter:brightness(0) saturate(100%) invert(39%) sepia(1%) saturate(0%) hue-rotate(83deg) brightness(93%) contrast(90%)}.custom-button-container-default>.dropup-menu-item-icon>svg{position:absolute;inset-inline-start:.2em}.custom-button-container-active{background-color:#edf7ff;color:#0285ff}.custom-button-container-active:hover,.custom-button-container-active:focus-visible{background-color:#def0ff}.custom-button-container-active:active{background-color:#d2eaff}.custom-button-container-active>svg{filter:brightness(0) saturate(100%) invert(32%) sepia(34%) saturate(4196%) hue-rotate(196deg) brightness(107%) contrast(104%)}.custom-button-container-disabled{color:#aeaeae;cursor:auto}.custom-button-container-disabled>div{pointer-events:none}.custom-button-container-disabled:hover,.custom-button-container-disabled:focus-visible{background-color:transparent}.custom-button-container-disabled:active{background-color:transparent}.custom-button-container-disabled>svg{filter:brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(818%) hue-rotate(28deg) brightness(102%) contrast(100%)}#text-input-container{background-color:#fff;width:80%;display:flex;border:1px solid #0000001a;border-radius:5px;margin-top:.8em;margin-bottom:.8em;box-shadow:#959da533 0 1px 12px;overflow-y:auto;max-height:200px;position:relative}.text-input-container-start-adjustment{margin-inline-start:1.5em}.text-input-container-end-adjustment{margin-inline-end:1.5em}.text-input-container-start-small-adjustment{margin-inline-start:1.1em}.text-input-container-start-small-adjustment>.outside-start{inset-inline-end:calc(14px - .55em)}.text-input-container-end-small-adjustment{margin-inline-end:1.1em}.text-input-container-end-small-adjustment>.outside-end{inset-inline-start:calc(14px - .55em)}#text-input{text-align:start;outline:none;word-wrap:break-word;line-break:auto}.text-input-styling{padding:.4em .5em;overflow:overlay;width:100%}.text-input-inner-start-adjustment{padding-inline-start:2.2em}.text-input-inner-end-adjustment{padding-inline-end:2em}.text-input-disabled{pointer-events:none;-webkit-user-select:none;user-select:none}[contenteditable]:empty:before{content:attr(deep-chat-placeholder-text);pointer-events:none}[contenteditable][textcolor]:empty:before{color:gray}.outside-end>#dropup-menu,.inside-end>#dropup-menu{inset-inline-end:0px}#dropup-icon{position:absolute;pointer-events:none;width:1.16em;height:1.2em;inset-inline-start:.265em;bottom:.43em;filter:brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(724%) hue-rotate(6deg) brightness(92%) contrast(90%)}.dropup-button>*{pointer-events:none}#dropup-menu{background-color:#fff;position:absolute;transform:translateY(-100%);border-radius:5px;z-index:1;top:-.49em;box-shadow:#0003 -1px 2px 10px,#0000001a 0 2px 4px;cursor:pointer;-webkit-user-select:none;user-select:none}.dropup-menu-item{height:1.4em;padding-inline-start:.35em;padding-inline-end:.84em;padding-top:.28em;padding-bottom:.28em;display:flex;position:relative}.dropup-menu-item:hover,.dropup-menu-item:focus-visible{background-color:#f3f3f3}.dropup-menu-item:active{background-color:#ebebeb}.dropup-menu-item:active:not(:hover){background-color:transparent}.dropup-menu-item:first-child{padding-top:.49em;border-start-start-radius:inherit;border-start-end-radius:inherit}.dropup-menu-item:last-child{padding-bottom:.45em;border-end-start-radius:inherit;border-end-end-radius:inherit}.dropup-menu-item-icon{width:1.39em;position:relative}.dropup-menu-item-icon>svg{bottom:0!important;top:0!important;margin-bottom:auto;margin-top:auto}#dropup-menu-item-icon-element-custom{position:absolute;pointer-events:none;width:1.21em;height:1.21em;inset-inline-start:.28em;filter:brightness(0) saturate(100%) invert(15%) sepia(0%) saturate(337%) hue-rotate(125deg) brightness(91%) contrast(94%)}.dropup-menu-item-text{margin-inline-start:.56em;margin-top:.08em;width:max-content}#input{width:100%;display:inline-flex;text-align:center;margin-inline:auto;margin-top:auto;position:relative;justify-content:center}#chat-view{height:100%;grid-template-columns:100%}.deep-chat-downwards-mode{display:grid}.deep-chat-upwards-mode{display:flex;flex-direction:column}::-webkit-scrollbar{width:9px;height:9px}::-webkit-scrollbar-thumb{background-color:#d0d0d0;border-radius:5px}::-webkit-scrollbar-track{background-color:#f2f2f2}.deep-chat-web-model-button{margin-top:10px;margin-bottom:5px;margin-inline-start:1px}:host{all:initial;display:table-cell;height:350px;width:320px;border:1px solid #cacaca;font-family:Inter,sans-serif,Avenir,Helvetica,Arial;font-size:.9rem;background-color:#fff;position:relative;overflow:hidden}#container{height:inherit;width:inherit;overflow:hidden}`;
var eu = Object.defineProperty, N = (i, e, t, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(e, t, s) || s);
  return s && eu(e, t, s), s;
};
class P extends qi {
  constructor() {
    var e;
    super(), this.getMessages = () => [], this.submitUserMessage = () => console.warn(Ur("submitUserMessage")), this.addMessage = () => console.warn(Ur("addMessage")), this.updateMessage = () => {
    }, this.clearMessages = () => {
    }, this.focusInput = () => ln.focusFromParentElement(this._elementRef), this.refreshMessages = () => {
    }, this.scrollToBottom = () => {
    }, this.disableSubmitButton = () => {
    }, this.setPlaceholderText = () => {
    }, this._hasBeenRendered = !1, this._auxiliaryStyleApplied = !1, this._chatStyleApplied = !1, this._elementRef = A(), this._elementRef.id = "container", this.attachShadow({ mode: "open" }).appendChild(this._elementRef), (e = this.shadowRoot) == null || e.appendChild(ut.buildElement()), jt.apply(Qh, this.shadowRoot), setTimeout(() => {
      this._hasBeenRendered || this.onRender();
    }, 20);
  }
  changeToChatView() {
    this._activeService && (this._activeService.validateKeyProperty = !1), this.onRender();
  }
  // prettier-ignore
  onRender() {
    var e;
    sr.attemptAppendStyleSheetToHead(this.style, (e = this.chatStyle) == null ? void 0 : e.fontFamily), le.processConnect(this), (!this._activeService || this._activeService.demo) && (this._activeService = mh.create(this)), this.auxiliaryStyle && !this._auxiliaryStyleApplied && (jt.apply(this.auxiliaryStyle, this.shadowRoot), this._auxiliaryStyleApplied = !0), this.chatStyle && !this._chatStyleApplied && (jt.applyChatStyle(this.chatStyle, this.shadowRoot), this._chatStyleApplied = !0), le.checkForContainerStyles(this, this._elementRef), this._activeService.key && this._activeService.validateKeyProperty ? zs.render(this._elementRef, this.changeToChatView.bind(this), this._activeService) : !(this._activeService instanceof k) || this._activeService.key ? (this._childElement ?? (this._childElement = this.children[0]), Mr.render(this, this._elementRef, this._activeService, this._childElement)) : this._activeService instanceof k && Oe.render(this._elementRef, this.changeToChatView.bind(this), this._activeService), this._hasBeenRendered || hn.onRender(this), this._hasBeenRendered = !0;
  }
  disconnectedCallback() {
    Ts.chat = void 0;
  }
}
N([
  O("object")
], P.prototype, "connect");
N([
  O("object")
], P.prototype, "directConnection");
N([
  O("object")
], P.prototype, "webModel");
N([
  O("object")
], P.prototype, "requestBodyLimits");
N([
  O("function")
], P.prototype, "requestInterceptor");
N([
  O("function")
], P.prototype, "responseInterceptor");
N([
  O("function")
], P.prototype, "validateInput");
N([
  O("function")
], P.prototype, "loadHistory");
N([
  O("object")
], P.prototype, "chatStyle");
N([
  O("object")
], P.prototype, "attachmentContainerStyle");
N([
  O("object")
], P.prototype, "dropupStyles");
N([
  O("object")
], P.prototype, "inputAreaStyle");
N([
  O("object")
], P.prototype, "textInput");
N([
  O("object")
], P.prototype, "defaultInput");
N([
  O("object")
], P.prototype, "submitButtonStyles");
N([
  O("object")
], P.prototype, "customButtons");
N([
  O("string")
], P.prototype, "auxiliaryStyle");
N([
  O("array")
], P.prototype, "history");
N([
  O("object")
], P.prototype, "browserStorage");
N([
  O("object")
], P.prototype, "introMessage");
N([
  O("object")
], P.prototype, "avatars");
N([
  O("object")
], P.prototype, "names");
N([
  O("object")
], P.prototype, "displayLoadingBubble");
N([
  O("object")
], P.prototype, "errorMessages");
N([
  O("object")
], P.prototype, "messageStyles");
N([
  O("object")
], P.prototype, "textToSpeech");
N([
  O("object")
], P.prototype, "speechToText");
N([
  O("object")
], P.prototype, "images");
N([
  O("object")
], P.prototype, "gifs");
N([
  O("object")
], P.prototype, "camera");
N([
  O("object")
], P.prototype, "audio");
N([
  O("object")
], P.prototype, "microphone");
N([
  O("object")
], P.prototype, "mixedFiles");
N([
  O("object")
], P.prototype, "dragAndDrop");
N([
  O("object")
], P.prototype, "htmlWrappers");
N([
  O("object")
], P.prototype, "htmlClassUtilities");
N([
  O("object")
], P.prototype, "remarkable");
N([
  O("object")
], P.prototype, "focusMode");
N([
  O("boolean")
], P.prototype, "upwardsMode");
N([
  O("object")
], P.prototype, "scrollButton");
N([
  O("object")
], P.prototype, "hiddenMessages");
N([
  O("number")
], P.prototype, "maxVisibleMessages");
N([
  O("function")
], P.prototype, "onMessage");
N([
  O("function")
], P.prototype, "onClearMessages");
N([
  O("function")
], P.prototype, "onComponentRender");
N([
  O("function")
], P.prototype, "onInput");
N([
  O("function")
], P.prototype, "onError");
N([
  O("object")
], P.prototype, "demo");
N([
  O("object")
], P.prototype, "_insertKeyViewStyles");
customElements.define("deep-chat", P);
export {
  P as DeepChat
};
