import {
  __privateAdd,
  __privateMethod,
  __publicField
} from "./chunk-XPZLJQLW.js";

// node_modules/@typebot.io/react/dist/web.js
var xh = Object.create;
var Ga = Object.defineProperty;
var kh = Object.getOwnPropertyDescriptor;
var Th = Object.getOwnPropertyNames;
var Sh = Object.getPrototypeOf;
var Eh = Object.prototype.hasOwnProperty;
var Ch = (e, t) => () => (e && (t = e(e = 0)), t);
var Qe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var qd = (e, t) => {
  for (var r in t) Ga(e, r, { get: t[r], enumerable: true });
};
var Yd = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of Th(t)) !Eh.call(e, o) && o !== r && Ga(e, o, { get: () => t[o], enumerable: !(n = kh(t, o)) || n.enumerable });
  return e;
};
var Kd = (e, t, r) => (r = e != null ? xh(Sh(e)) : {}, Yd(t || !e || !e.__esModule ? Ga(r, "default", { value: e, enumerable: true }) : r, e));
var Wa = (e) => Yd(Ga({}, "__esModule", { value: true }), e);
var Fh = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  function t(x) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? t = function(C) {
      return typeof C;
    } : t = function(C) {
      return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C;
    }, t(x);
  }
  var r = "basil", n = function(x) {
    return x === 3 ? "v3" : x;
  }, o = "https://js.stripe.com", a = "".concat(o, "/").concat(r, "/stripe.js"), i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, s = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/, l = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used", d = function(x) {
    return i.test(x) || s.test(x);
  }, c = function() {
    for (var x = document.querySelectorAll('script[src^="'.concat(o, '"]')), C = 0; C < x.length; C++) {
      var R = x[C];
      if (d(R.src)) return R;
    }
    return null;
  }, u = function(x) {
    var C = x && !x.advancedFraudSignals ? "?advancedFraudSignals=false" : "", R = document.createElement("script");
    R.src = "".concat(a).concat(C);
    var D = document.head || document.body;
    if (!D) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    return D.appendChild(R), R;
  }, p = function(x, C) {
    !x || !x._registerWrapper || x._registerWrapper({ name: "stripe-js", version: "7.4.0", startTime: C });
  }, g = null, m = null, f = null, v = function(x) {
    return function(C) {
      x(new Error("Failed to load Stripe.js", { cause: C }));
    };
  }, w = function(x, C) {
    return function() {
      window.Stripe ? x(window.Stripe) : C(new Error("Stripe.js not available"));
    };
  }, y = function(x) {
    return g !== null ? g : (g = new Promise(function(C, R) {
      if (typeof window > "u" || typeof document > "u") {
        C(null);
        return;
      }
      if (window.Stripe && x && console.warn(l), window.Stripe) {
        C(window.Stripe);
        return;
      }
      try {
        var D = c();
        if (D && x) console.warn(l);
        else if (!D) D = u(x);
        else if (D && f !== null && m !== null) {
          var N;
          D.removeEventListener("load", f), D.removeEventListener("error", m), (N = D.parentNode) === null || N === void 0 || N.removeChild(D), D = u(x);
        }
        f = w(C, R), m = v(R), D.addEventListener("load", f), D.addEventListener("error", m);
      } catch (K) {
        R(K);
        return;
      }
    }), g.catch(function(C) {
      return g = null, Promise.reject(C);
    }));
  }, T = function(x, C, R) {
    if (x === null) return null;
    var D = C[0], N = D.match(/^pk_test/), K = n(x.version), F = r;
    N && K !== F && console.warn("Stripe.js@".concat(K, " was loaded on the page, but @stripe/stripe-js@").concat("7.4.0", " expected Stripe.js@").concat(F, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
    var A = x.apply(void 0, C);
    return p(A, R), A;
  }, b = function(x) {
    var C = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(x), `
`);
    if (x === null || t(x) !== "object") throw new Error(C);
    if (Object.keys(x).length === 1 && typeof x.advancedFraudSignals == "boolean") return x;
    throw new Error(C);
  }, S, _ = false, I = function() {
    for (var x = arguments.length, C = new Array(x), R = 0; R < x; R++) C[R] = arguments[R];
    _ = true;
    var D = Date.now();
    return y(S).then(function(N) {
      return T(N, C, D);
    });
  };
  I.setLoadParameters = function(x) {
    if (_ && S) {
      var C = b(x), R = Object.keys(C), D = R.reduce(function(N, K) {
        var F;
        return N && x[K] === ((F = S) === null || F === void 0 ? void 0 : F[K]);
      }, true);
      if (D) return;
    }
    if (_) throw new Error("You cannot change load parameters after calling loadStripe");
    S = b(x);
  }, e.loadStripe = I;
});
var Ph = Qe((e, t) => {
  "use strict";
  t.exports = Fh();
});
var Eo = {};
qd(Eo, { __addDisposableResource: () => wu, __assign: () => Kn, __asyncDelegator: () => pu, __asyncGenerator: () => uu, __asyncValues: () => gu, __await: () => xn, __awaiter: () => au, __classPrivateFieldGet: () => bu, __classPrivateFieldIn: () => vu, __classPrivateFieldSet: () => yu, __createBinding: () => ao, __decorate: () => Jd, __disposeResources: () => xu, __esDecorate: () => eu, __exportStar: () => su, __extends: () => Xd, __generator: () => iu, __importDefault: () => mu, __importStar: () => fu, __makeTemplateObject: () => hu, __metadata: () => ou, __param: () => Qd, __propKey: () => ru, __read: () => js, __rest: () => Zd, __rewriteRelativeImportExtension: () => ku, __runInitializers: () => tu, __setFunctionName: () => nu, __spread: () => lu, __spreadArray: () => du, __spreadArrays: () => cu, __values: () => Sa, default: () => Eu });
function Xd(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  fa(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Zd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Jd(e, t, r, n) {
  var o = arguments.length, a = o < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, r, n);
  else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
  return o > 3 && a && Object.defineProperty(t, r, a), a;
}
function Qd(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function eu(e, t, r, n, o, a) {
  function i(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (var s = n.kind, l = s === "getter" ? "get" : s === "setter" ? "set" : "value", d = !t && e ? n.static ? e : e.prototype : null, c = t || (d ? Object.getOwnPropertyDescriptor(d, n.name) : {}), u, p = false, g = r.length - 1; g >= 0; g--) {
    var m = {};
    for (var f in n) m[f] = f === "access" ? {} : n[f];
    for (var f in n.access) m.access[f] = n.access[f];
    m.addInitializer = function(w) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(i(w || null));
    };
    var v = (0, r[g])(s === "accessor" ? { get: c.get, set: c.set } : c[l], m);
    if (s === "accessor") {
      if (v === void 0) continue;
      if (v === null || typeof v != "object") throw new TypeError("Object expected");
      (u = i(v.get)) && (c.get = u), (u = i(v.set)) && (c.set = u), (u = i(v.init)) && o.unshift(u);
    } else (u = i(v)) && (s === "field" ? o.unshift(u) : c[l] = u);
  }
  d && Object.defineProperty(d, n.name, c), p = true;
}
function tu(e, t, r) {
  for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
  return n ? r : void 0;
}
function ru(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function nu(e, t, r) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: true, value: r ? "".concat(r, " ", t) : t });
}
function ou(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function au(e, t, r, n) {
  function o(a) {
    return a instanceof r ? a : new r(function(i) {
      i(a);
    });
  }
  return new (r || (r = Promise))(function(a, i) {
    function s(c) {
      try {
        d(n.next(c));
      } catch (u) {
        i(u);
      }
    }
    function l(c) {
      try {
        d(n.throw(c));
      } catch (u) {
        i(u);
      }
    }
    function d(c) {
      c.done ? a(c.value) : o(c.value).then(s, l);
    }
    d((n = n.apply(e, t || [])).next());
  });
}
function iu(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, o, a, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return i.next = s(0), i.throw = s(1), i.return = s(2), typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function s(d) {
    return function(c) {
      return l([d, c]);
    };
  }
  function l(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && (i = 0, d[0] && (r = 0)), r; ) try {
      if (n = 1, o && (a = d[0] & 2 ? o.return : d[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, d[1])).done) return a;
      switch (o = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
        case 0:
        case 1:
          a = d;
          break;
        case 4:
          return r.label++, { value: d[1], done: false };
        case 5:
          r.label++, o = d[1], d = [0];
          continue;
        case 7:
          d = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            r = 0;
            continue;
          }
          if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
            r.label = d[1];
            break;
          }
          if (d[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = d;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(d);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      d = t.call(e, r);
    } catch (c) {
      d = [6, c], o = 0;
    } finally {
      n = a = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: true };
  }
}
function su(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ao(t, e, r);
}
function Sa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return { next: function() {
    return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
  } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function js(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), o, a = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) a.push(o.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
function lu() {
  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(js(arguments[t]));
  return e;
}
function cu() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), o = 0, t = 0; t < r; t++) for (var a = arguments[t], i = 0, s = a.length; i < s; i++, o++) n[o] = a[i];
  return n;
}
function du(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++) (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function xn(e) {
  return this instanceof xn ? (this.v = e, this) : new xn(e);
}
function uu(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), o, a = [];
  return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", i), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function i(g) {
    return function(m) {
      return Promise.resolve(m).then(g, u);
    };
  }
  function s(g, m) {
    n[g] && (o[g] = function(f) {
      return new Promise(function(v, w) {
        a.push([g, f, v, w]) > 1 || l(g, f);
      });
    }, m && (o[g] = m(o[g])));
  }
  function l(g, m) {
    try {
      d(n[g](m));
    } catch (f) {
      p(a[0][3], f);
    }
  }
  function d(g) {
    g.value instanceof xn ? Promise.resolve(g.value.v).then(c, u) : p(a[0][2], g);
  }
  function c(g) {
    l("next", g);
  }
  function u(g) {
    l("throw", g);
  }
  function p(g, m) {
    g(m), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function pu(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(o) {
    throw o;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(o, a) {
    t[o] = e[o] ? function(i) {
      return (r = !r) ? { value: xn(e[o](i)), done: false } : a ? a(i) : i;
    } : a;
  }
}
function gu(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Sa == "function" ? Sa(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(a) {
    r[a] = e[a] && function(i) {
      return new Promise(function(s, l) {
        i = e[a](i), o(s, l, i.done, i.value);
      });
    };
  }
  function o(a, i, s, l) {
    Promise.resolve(l).then(function(d) {
      a({ value: d, done: s });
    }, i);
  }
}
function hu(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function fu(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = ma(e), n = 0; n < r.length; n++) r[n] !== "default" && ao(t, e, r[n]);
  return Tu(t, e), t;
}
function mu(e) {
  return e && e.__esModule ? e : { default: e };
}
function bu(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function yu(e, t, r, n, o) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}
function vu(e, t) {
  if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function wu(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, o;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose], r && (o = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    o && (n = function() {
      try {
        o.call(this);
      } catch (a) {
        return Promise.reject(a);
      }
    }), e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: true });
  return t;
}
function xu(e) {
  function t(a) {
    e.error = e.hasError ? new Su(a, e.error, "An error was suppressed during disposal.") : a, e.hasError = true;
  }
  var r, n = 0;
  function o() {
    for (; r = e.stack.pop(); ) try {
      if (!r.async && n === 1) return n = 0, e.stack.push(r), Promise.resolve().then(o);
      if (r.dispose) {
        var a = r.dispose.call(r.value);
        if (r.async) return n |= 2, Promise.resolve(a).then(o, function(i) {
          return t(i), o();
        });
      } else n |= 1;
    } catch (i) {
      t(i);
    }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return o();
}
function ku(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, o, a, i) {
    return n ? t ? ".jsx" : ".js" : o && (!a || !i) ? r : o + a + "." + i.toLowerCase() + "js";
  }) : e;
}
var fa;
var Kn;
var ao;
var Tu;
var ma;
var Su;
var Eu;
var qa = Ch(() => {
  "use strict";
  fa = function(e, t) {
    return fa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
      r.__proto__ = n;
    } || function(r, n) {
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }, fa(e, t);
  }, Kn = function() {
    return Kn = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, Kn.apply(this, arguments);
  }, ao = Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r);
    var o = Object.getOwnPropertyDescriptor(t, r);
    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: true, get: function() {
      return t[r];
    } }), Object.defineProperty(e, n, o);
  } : function(e, t, r, n) {
    n === void 0 && (n = r), e[n] = t[r];
  }, Tu = Object.create ? function(e, t) {
    Object.defineProperty(e, "default", { enumerable: true, value: t });
  } : function(e, t) {
    e.default = t;
  }, ma = function(e) {
    return ma = Object.getOwnPropertyNames || function(t) {
      var r = [];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
      return r;
    }, ma(e);
  }, Su = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
  }, Eu = { __extends: Xd, __assign: Kn, __rest: Zd, __decorate: Jd, __param: Qd, __esDecorate: eu, __runInitializers: tu, __propKey: ru, __setFunctionName: nu, __metadata: ou, __awaiter: au, __generator: iu, __createBinding: ao, __exportStar: su, __values: Sa, __read: js, __spread: lu, __spreadArrays: cu, __spreadArray: du, __await: xn, __asyncGenerator: uu, __asyncDelegator: pu, __asyncValues: gu, __makeTemplateObject: hu, __importStar: fu, __importDefault: mu, __classPrivateFieldGet: bu, __classPrivateFieldSet: yu, __classPrivateFieldIn: vu, __addDisposableResource: wu, __disposeResources: xu, __rewriteRelativeImportExtension: ku };
});
var Co = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmBase = void 0;
  var t = class {
    constructor(r = "Unknown", n = 0) {
      this.name = r, this.start = n;
    }
    getType() {
      return "Unknown";
    }
    updateBySource() {
    }
    setSource(r) {
      this.source = r, this.updateBySource();
    }
    updateByData() {
    }
    setData(r) {
      this.data = r, this.updateByData();
    }
    getValue() {
      return this.data;
    }
    setValue(r) {
      this.setData(r);
    }
  };
  e.WebmBase = t;
});
var Vs = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.SectionType = void 0;
  var t;
  (function(r) {
    r.Container = "Container", r.Uint = "Uint", r.Int = "Int", r.Float = "Float", r.String = "String", r.Date = "Date", r.Binary = "Binary";
  })(t || (e.SectionType = t = {}));
});
var Cu = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.sections = void 0;
  var t = Vs();
  e.sections = { 172351395: { name: "EBML", type: t.SectionType.Container }, 646: { name: "EBMLVersion", type: t.SectionType.Uint }, 759: { name: "EBMLReadVersion", type: t.SectionType.Uint }, 754: { name: "EBMLMaxIDLength", type: t.SectionType.Uint }, 755: { name: "EBMLMaxSizeLength", type: t.SectionType.Uint }, 642: { name: "DocType", type: t.SectionType.String }, 647: { name: "DocTypeVersion", type: t.SectionType.Uint }, 645: { name: "DocTypeReadVersion", type: t.SectionType.Uint }, 108: { name: "Void", type: t.SectionType.Binary }, 63: { name: "CRC-32", type: t.SectionType.Binary }, 190023271: { name: "SignatureSlot", type: t.SectionType.Container }, 16010: { name: "SignatureAlgo", type: t.SectionType.Uint }, 16026: { name: "SignatureHash", type: t.SectionType.Uint }, 16037: { name: "SignaturePublicKey", type: t.SectionType.Binary }, 16053: { name: "Signature", type: t.SectionType.Binary }, 15963: { name: "SignatureElements", type: t.SectionType.Container }, 15995: { name: "SignatureElementList", type: t.SectionType.Container }, 9522: { name: "SignedElement", type: t.SectionType.Binary }, 139690087: { name: "Segment", type: t.SectionType.Container }, 21863284: { name: "SeekHead", type: t.SectionType.Container }, 3515: { name: "Seek", type: t.SectionType.Container }, 5035: { name: "SeekID", type: t.SectionType.Binary }, 5036: { name: "SeekPosition", type: t.SectionType.Uint }, 88713574: { name: "Info", type: t.SectionType.Container }, 13220: { name: "SegmentUID", type: t.SectionType.Binary }, 13188: { name: "SegmentFilename", type: t.SectionType.String }, 1882403: { name: "PrevUID", type: t.SectionType.Binary }, 1868715: { name: "PrevFilename", type: t.SectionType.String }, 2013475: { name: "NextUID", type: t.SectionType.Binary }, 1999803: { name: "NextFilename", type: t.SectionType.String }, 1092: { name: "SegmentFamily", type: t.SectionType.Binary }, 10532: { name: "ChapterTranslate", type: t.SectionType.Container }, 10748: { name: "ChapterTranslateEditionUID", type: t.SectionType.Uint }, 10687: { name: "ChapterTranslateCodec", type: t.SectionType.Uint }, 10661: { name: "ChapterTranslateID", type: t.SectionType.Binary }, 710577: { name: "TimecodeScale", type: t.SectionType.Uint }, 1161: { name: "Duration", type: t.SectionType.Float }, 1121: { name: "DateUTC", type: t.SectionType.Date }, 15273: { name: "Title", type: t.SectionType.String }, 3456: { name: "MuxingApp", type: t.SectionType.String }, 5953: { name: "WritingApp", type: t.SectionType.String }, 103: { name: "Timecode", type: t.SectionType.Uint }, 6228: { name: "SilentTracks", type: t.SectionType.Container }, 6359: { name: "SilentTrackNumber", type: t.SectionType.Uint }, 39: { name: "Position", type: t.SectionType.Uint }, 43: { name: "PrevSize", type: t.SectionType.Uint }, 35: { name: "SimpleBlock", type: t.SectionType.Binary }, 32: { name: "BlockGroup", type: t.SectionType.Container }, 33: { name: "Block", type: t.SectionType.Binary }, 34: { name: "BlockVirtual", type: t.SectionType.Binary }, 13729: { name: "BlockAdditions", type: t.SectionType.Container }, 38: { name: "BlockMore", type: t.SectionType.Container }, 110: { name: "BlockAddID", type: t.SectionType.Uint }, 37: { name: "BlockAdditional", type: t.SectionType.Binary }, 27: { name: "BlockDuration", type: t.SectionType.Uint }, 122: { name: "ReferencePriority", type: t.SectionType.Uint }, 123: { name: "ReferenceBlock", type: t.SectionType.Int }, 125: { name: "ReferenceVirtual", type: t.SectionType.Int }, 36: { name: "CodecState", type: t.SectionType.Binary }, 13730: { name: "DiscardPadding", type: t.SectionType.Int }, 14: { name: "Slices", type: t.SectionType.Container }, 104: { name: "TimeSlice", type: t.SectionType.Container }, 76: { name: "LaceNumber", type: t.SectionType.Uint }, 77: { name: "FrameNumber", type: t.SectionType.Uint }, 75: { name: "BlockAdditionID", type: t.SectionType.Uint }, 78: { name: "Delay", type: t.SectionType.Uint }, 79: { name: "SliceDuration", type: t.SectionType.Uint }, 72: { name: "ReferenceFrame", type: t.SectionType.Container }, 73: { name: "ReferenceOffset", type: t.SectionType.Uint }, 74: { name: "ReferenceTimeCode", type: t.SectionType.Uint }, 47: { name: "EncryptedBlock", type: t.SectionType.Binary }, 106212971: { name: "Tracks", type: t.SectionType.Container }, 46: { name: "TrackEntry", type: t.SectionType.Container }, 87: { name: "TrackNumber", type: t.SectionType.Uint }, 13253: { name: "TrackUID", type: t.SectionType.Uint }, 3: { name: "TrackType", type: t.SectionType.Uint }, 57: { name: "FlagEnabled", type: t.SectionType.Uint }, 8: { name: "FlagDefault", type: t.SectionType.Uint }, 5546: { name: "FlagForced", type: t.SectionType.Uint }, 28: { name: "FlagLacing", type: t.SectionType.Uint }, 11751: { name: "MinCache", type: t.SectionType.Uint }, 11768: { name: "MaxCache", type: t.SectionType.Uint }, 254851: { name: "DefaultDuration", type: t.SectionType.Uint }, 216698: { name: "DefaultDecodedFieldDuration", type: t.SectionType.Uint }, 209231: { name: "TrackTimecodeScale", type: t.SectionType.Float }, 4991: { name: "TrackOffset", type: t.SectionType.Int }, 5614: { name: "MaxBlockAdditionID", type: t.SectionType.Uint }, 4974: { name: "Name", type: t.SectionType.String }, 177564: { name: "Language", type: t.SectionType.String }, 6: { name: "CodecID", type: t.SectionType.String }, 9122: { name: "CodecPrivate", type: t.SectionType.Binary }, 362120: { name: "CodecName", type: t.SectionType.String }, 13382: { name: "AttachmentLink", type: t.SectionType.Uint }, 1742487: { name: "CodecSettings", type: t.SectionType.String }, 1785920: { name: "CodecInfoURL", type: t.SectionType.String }, 438848: { name: "CodecDownloadURL", type: t.SectionType.String }, 42: { name: "CodecDecodeAll", type: t.SectionType.Uint }, 12203: { name: "TrackOverlay", type: t.SectionType.Uint }, 5802: { name: "CodecDelay", type: t.SectionType.Uint }, 5819: { name: "SeekPreRoll", type: t.SectionType.Uint }, 9764: { name: "TrackTranslate", type: t.SectionType.Container }, 9980: { name: "TrackTranslateEditionUID", type: t.SectionType.Uint }, 9919: { name: "TrackTranslateCodec", type: t.SectionType.Uint }, 9893: { name: "TrackTranslateTrackID", type: t.SectionType.Binary }, 96: { name: "Video", type: t.SectionType.Container }, 26: { name: "FlagInterlaced", type: t.SectionType.Uint }, 5048: { name: "StereoMode", type: t.SectionType.Uint }, 5056: { name: "AlphaMode", type: t.SectionType.Uint }, 5049: { name: "OldStereoMode", type: t.SectionType.Uint }, 48: { name: "PixelWidth", type: t.SectionType.Uint }, 58: { name: "PixelHeight", type: t.SectionType.Uint }, 5290: { name: "PixelCropBottom", type: t.SectionType.Uint }, 5307: { name: "PixelCropTop", type: t.SectionType.Uint }, 5324: { name: "PixelCropLeft", type: t.SectionType.Uint }, 5341: { name: "PixelCropRight", type: t.SectionType.Uint }, 5296: { name: "DisplayWidth", type: t.SectionType.Uint }, 5306: { name: "DisplayHeight", type: t.SectionType.Uint }, 5298: { name: "DisplayUnit", type: t.SectionType.Uint }, 5299: { name: "AspectRatioType", type: t.SectionType.Uint }, 963876: { name: "ColourSpace", type: t.SectionType.Binary }, 1029411: { name: "GammaValue", type: t.SectionType.Float }, 230371: { name: "FrameRate", type: t.SectionType.Float }, 97: { name: "Audio", type: t.SectionType.Container }, 53: { name: "SamplingFrequency", type: t.SectionType.Float }, 14517: { name: "OutputSamplingFrequency", type: t.SectionType.Float }, 31: { name: "Channels", type: t.SectionType.Uint }, 15739: { name: "ChannelPositions", type: t.SectionType.Binary }, 8804: { name: "BitDepth", type: t.SectionType.Uint }, 98: { name: "TrackOperation", type: t.SectionType.Container }, 99: { name: "TrackCombinePlanes", type: t.SectionType.Container }, 100: { name: "TrackPlane", type: t.SectionType.Container }, 101: { name: "TrackPlaneUID", type: t.SectionType.Uint }, 102: { name: "TrackPlaneType", type: t.SectionType.Uint }, 105: { name: "TrackJoinBlocks", type: t.SectionType.Container }, 109: { name: "TrackJoinUID", type: t.SectionType.Uint }, 64: { name: "TrickTrackUID", type: t.SectionType.Uint }, 65: { name: "TrickTrackSegmentUID", type: t.SectionType.Binary }, 70: { name: "TrickTrackFlag", type: t.SectionType.Uint }, 71: { name: "TrickMasterTrackUID", type: t.SectionType.Uint }, 68: { name: "TrickMasterTrackSegmentUID", type: t.SectionType.Binary }, 11648: { name: "ContentEncodings", type: t.SectionType.Container }, 8768: { name: "ContentEncoding", type: t.SectionType.Container }, 4145: { name: "ContentEncodingOrder", type: t.SectionType.Uint }, 4146: { name: "ContentEncodingScope", type: t.SectionType.Uint }, 4147: { name: "ContentEncodingType", type: t.SectionType.Uint }, 4148: { name: "ContentCompression", type: t.SectionType.Container }, 596: { name: "ContentCompAlgo", type: t.SectionType.Uint }, 597: { name: "ContentCompSettings", type: t.SectionType.Binary }, 4149: { name: "ContentEncryption", type: t.SectionType.Container }, 2017: { name: "ContentEncAlgo", type: t.SectionType.Uint }, 2018: { name: "ContentEncKeyID", type: t.SectionType.Binary }, 2019: { name: "ContentSignature", type: t.SectionType.Binary }, 2020: { name: "ContentSigKeyID", type: t.SectionType.Binary }, 2021: { name: "ContentSigAlgo", type: t.SectionType.Uint }, 2022: { name: "ContentSigHashAlgo", type: t.SectionType.Uint }, 206814059: { name: "Cues", type: t.SectionType.Container }, 59: { name: "CuePoint", type: t.SectionType.Container }, 51: { name: "CueTime", type: t.SectionType.Uint }, 55: { name: "CueTrackPositions", type: t.SectionType.Container }, 119: { name: "CueTrack", type: t.SectionType.Uint }, 113: { name: "CueClusterPosition", type: t.SectionType.Uint }, 112: { name: "CueRelativePosition", type: t.SectionType.Uint }, 50: { name: "CueDuration", type: t.SectionType.Uint }, 4984: { name: "CueBlockNumber", type: t.SectionType.Uint }, 106: { name: "CueCodecState", type: t.SectionType.Uint }, 91: { name: "CueReference", type: t.SectionType.Container }, 22: { name: "CueRefTime", type: t.SectionType.Uint }, 23: { name: "CueRefCluster", type: t.SectionType.Uint }, 4959: { name: "CueRefNumber", type: t.SectionType.Uint }, 107: { name: "CueRefCodecState", type: t.SectionType.Uint }, 155296873: { name: "Attachments", type: t.SectionType.Container }, 8615: { name: "AttachedFile", type: t.SectionType.Container }, 1662: { name: "FileDescription", type: t.SectionType.String }, 1646: { name: "FileName", type: t.SectionType.String }, 1632: { name: "FileMimeType", type: t.SectionType.String }, 1628: { name: "FileData", type: t.SectionType.Binary }, 1710: { name: "FileUID", type: t.SectionType.Uint }, 1653: { name: "FileReferral", type: t.SectionType.Binary }, 1633: { name: "FileUsedStartTime", type: t.SectionType.Uint }, 1634: { name: "FileUsedEndTime", type: t.SectionType.Uint }, 4433776: { name: "Chapters", type: t.SectionType.Container }, 1465: { name: "EditionEntry", type: t.SectionType.Container }, 1468: { name: "EditionUID", type: t.SectionType.Uint }, 1469: { name: "EditionFlagHidden", type: t.SectionType.Uint }, 1499: { name: "EditionFlagDefault", type: t.SectionType.Uint }, 1501: { name: "EditionFlagOrdered", type: t.SectionType.Uint }, 54: { name: "ChapterAtom", type: t.SectionType.Container }, 13252: { name: "ChapterUID", type: t.SectionType.Uint }, 5716: { name: "ChapterStringUID", type: t.SectionType.String }, 17: { name: "ChapterTimeStart", type: t.SectionType.Uint }, 18: { name: "ChapterTimeEnd", type: t.SectionType.Uint }, 24: { name: "ChapterFlagHidden", type: t.SectionType.Uint }, 1432: { name: "ChapterFlagEnabled", type: t.SectionType.Uint }, 11879: { name: "ChapterSegmentUID", type: t.SectionType.Binary }, 11964: { name: "ChapterSegmentEditionUID", type: t.SectionType.Uint }, 9155: { name: "ChapterPhysicalEquiv", type: t.SectionType.Uint }, 15: { name: "ChapterTrack", type: t.SectionType.Container }, 9: { name: "ChapterTrackNumber", type: t.SectionType.Uint }, 0: { name: "ChapterDisplay", type: t.SectionType.Container }, 5: { name: "ChapString", type: t.SectionType.String }, 892: { name: "ChapLanguage", type: t.SectionType.String }, 894: { name: "ChapCountry", type: t.SectionType.String }, 10564: { name: "ChapProcess", type: t.SectionType.Container }, 10581: { name: "ChapProcessCodecID", type: t.SectionType.Uint }, 1293: { name: "ChapProcessPrivate", type: t.SectionType.Binary }, 10513: { name: "ChapProcessCommand", type: t.SectionType.Container }, 10530: { name: "ChapProcessTime", type: t.SectionType.Uint }, 10547: { name: "ChapProcessData", type: t.SectionType.Binary }, 39109479: { name: "Tags", type: t.SectionType.Container }, 13171: { name: "Tag", type: t.SectionType.Container }, 9152: { name: "Targets", type: t.SectionType.Container }, 10442: { name: "TargetTypeValue", type: t.SectionType.Uint }, 9162: { name: "TargetType", type: t.SectionType.String }, 9157: { name: "TagTrackUID", type: t.SectionType.Uint }, 9161: { name: "TagEditionUID", type: t.SectionType.Uint }, 9156: { name: "TagChapterUID", type: t.SectionType.Uint }, 9158: { name: "TagAttachmentUID", type: t.SectionType.Uint }, 10184: { name: "SimpleTag", type: t.SectionType.Container }, 1443: { name: "TagName", type: t.SectionType.String }, 1146: { name: "TagLanguage", type: t.SectionType.String }, 1156: { name: "TagDefault", type: t.SectionType.Uint }, 1159: { name: "TagString", type: t.SectionType.String }, 1157: { name: "TagBinary", type: t.SectionType.Binary }, 5552: { name: "Colour", type: t.SectionType.Container }, 5553: { name: "MatrixCoefficients", type: t.SectionType.Uint }, 5554: { name: "BitsPerChannel", type: t.SectionType.Uint }, 5555: { name: "ChromaSubsamplingHorz", type: t.SectionType.Uint }, 5556: { name: "ChromaSubsamplingVert", type: t.SectionType.Uint }, 5557: { name: "CbSubsamplingHorz", type: t.SectionType.Uint }, 5558: { name: "CbSubsamplingVert", type: t.SectionType.Uint }, 5559: { name: "ChromaSitingHorz", type: t.SectionType.Uint }, 5560: { name: "ChromaSitingVert", type: t.SectionType.Uint }, 5561: { name: "Range", type: t.SectionType.Uint }, 5562: { name: "TransferCharacteristics", type: t.SectionType.Uint }, 5563: { name: "Primaries", type: t.SectionType.Uint }, 5564: { name: "MaxCLL", type: t.SectionType.Uint }, 5565: { name: "MaxFALL", type: t.SectionType.Uint } };
});
var Fu = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmUint = void 0;
  var t = Co();
  function r(o) {
    return o.length % 2 === 1 ? "0" + o : o;
  }
  var n = class extends t.WebmBase {
    constructor(o, a = 0) {
      super(o, a);
    }
    getType() {
      return "Uint";
    }
    updateBySource() {
      this.data = "";
      for (let o = 0; o < this.source.length; o++) {
        let a = this.source[o].toString(16);
        this.data += r(a);
      }
    }
    updateByData() {
      let o = this.data.length / 2;
      this.source = new Uint8Array(o);
      for (let a = 0; a < o; a++) {
        let i = this.data.substring(a * 2, a * 2 + 2);
        this.source[a] = parseInt(i, 16);
      }
    }
    getValue() {
      return parseInt(this.data, 16);
    }
    setValue(o) {
      this.setData(r(o.toString(16)));
    }
  };
  e.WebmUint = n;
});
var Pu = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmFloat = void 0;
  var t = Co(), r = class extends t.WebmBase {
    constructor(n, o = 0) {
      super(n, o);
    }
    getType() {
      return "Float";
    }
    getFloatArrayType() {
      return this.source && this.source.length === 4 ? Float32Array : Float64Array;
    }
    updateBySource() {
      let n = this.source.reverse(), o = this.getFloatArrayType(), a = new o(n.buffer);
      this.data = a[0];
    }
    updateByData() {
      let n = this.getFloatArrayType(), o = new n([this.data]), a = new Uint8Array(o.buffer);
      this.source = a.reverse();
    }
  };
  e.WebmFloat = r;
});
var _u = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmString = void 0;
  var t = Co(), r = class extends t.WebmBase {
    constructor(n, o = 0) {
      super(n, o);
    }
    getType() {
      return "String";
    }
    updateBySource() {
      this.data = this.source;
    }
    updateByData() {
      this.source = this.data;
    }
    getValue() {
      let n = "";
      return this.source.forEach((o) => {
        n += String.fromCharCode(o);
      }), n;
    }
  };
  e.WebmString = r;
});
var Iu = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmContainer = void 0;
  var t = Co(), r = Cu(), n = Vs(), o = Fu(), a = Pu(), i = _u(), s = class os extends t.WebmBase {
    constructor(d, c = false, u = 0) {
      super(d, u), this.isInfinite = c, this.offset = 0;
    }
    getType() {
      return "Container";
    }
    readByte() {
      return this.source[this.offset++];
    }
    readUint() {
      let d = this.readByte(), c = 8 - d.toString(2).length, u = d - (1 << 7 - c);
      for (let p = 0; p < c; p++) u <<= 8, u |= this.readByte();
      return u;
    }
    updateBySource() {
      var d;
      this.data = [];
      let c;
      for (this.offset = 0; this.offset < this.source.length; this.offset = c) {
        let u = this.offset, p = this.readUint(), { name: g, type: m } = (d = r.sections[p]) !== null && d !== void 0 ? d : {}, f = this.readUint();
        c = this.source.length, f >= 0 && (c = Math.min(this.offset + f, c));
        let v = this.source.slice(this.offset, c), w;
        switch (m) {
          case n.SectionType.Container:
            w = new os(g, f < 0, u);
            break;
          case n.SectionType.Uint:
            w = new o.WebmUint(g, u);
            break;
          case n.SectionType.Float:
            w = new a.WebmFloat(g, u);
            break;
          case n.SectionType.String:
            w = new i.WebmString(g, u);
            break;
          default:
            w = new t.WebmBase(g, u);
            break;
        }
        w.setSource(v), this.data.push({ id: p, idHex: p.toString(16), data: w });
      }
    }
    writeUint(d, c = false) {
      let u;
      for (u = 1; (d < 0 || d >= 1 << 7 * u) && u < 8; u++) ;
      if (!c) {
        for (let p = 0; p < u; p++) this.source[this.offset + p] = d >> 8 * (u - 1 - p) & 255;
        this.source[this.offset] &= (1 << 8 - u) - 1, this.source[this.offset] |= 1 << 8 - u;
      }
      this.offset += u;
    }
    writeSections(d = false) {
      this.offset = 0;
      for (let c = 0; c < this.data.length; c++) {
        let u = this.data[c], p = u.data.source, g = p.length;
        this.writeUint(u.id, d), this.writeUint(u.data instanceof os && u.data.isInfinite ? -1 : g, d), d || this.source.set(p, this.offset), this.offset += g;
      }
      return this.offset;
    }
    updateByData() {
      let d = this.writeSections(true);
      this.source = new Uint8Array(d), this.writeSections();
    }
    getSectionById(d) {
      for (let c = 0; c < this.data.length; c++) {
        let u = this.data[c];
        if (u.id === d) return u.data;
      }
      return null;
    }
  };
  e.WebmContainer = s;
});
var _h = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.WebmFile = void 0;
  var t = (qa(), Wa(Eo)), r = Iu(), n = class as extends r.WebmContainer {
    constructor(a) {
      super("File"), this.setSource(a);
    }
    getType() {
      return "File";
    }
    toBlob(a = "video/webm") {
      return new Blob([this.source.buffer], { type: a });
    }
    static blobToArray(a) {
      return new Promise((i, s) => {
        try {
          let l = new FileReader();
          l.onloadend = () => {
            try {
              i(new Uint8Array(l.result));
            } catch (d) {
              s(d);
            }
          }, l.readAsArrayBuffer(a);
        } catch (l) {
          s(l);
        }
      });
    }
    static fromBlob(a) {
      return t.__awaiter(this, void 0, void 0, function* () {
        let i = yield as.blobToArray(a);
        return new as(i);
      });
    }
  };
  e.WebmFile = n;
});
var Ih = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
});
var Ou = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var t = (qa(), Wa(Eo));
  t.__exportStar(Co(), e), t.__exportStar(Iu(), e), t.__exportStar(_h(), e), t.__exportStar(Pu(), e), t.__exportStar(_u(), e), t.__exportStar(Fu(), e), t.__exportStar(Vs(), e), t.__exportStar(Ih(), e), t.__exportStar(Cu(), e);
});
var Au = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.fixParsedWebmDuration = void 0;
  var t = Ou(), r = (n, o, a = {}) => {
    let i = a.logger;
    i === void 0 ? i = (u) => console.debug(u) : i || (i = () => {
    });
    let s = n.getSectionById(139690087);
    if (!s) return i("[fix-webm-duration] Segment section is missing"), false;
    let l = s.getSectionById(88713574);
    if (!l) return i("[fix-webm-duration] Info section is missing"), false;
    let d = l.getSectionById(710577);
    if (!d) return i("[fix-webm-duration] TimecodeScale section is missing"), false;
    let c = l.getSectionById(1161);
    if (c) if (c.getValue() <= 0) i(`[fix-webm-duration] Duration section is present, but the value is ${c.getValue()}`), c.setValue(o);
    else return i(`[fix-webm-duration] Duration section is present, and the value is ${c.getValue()}`), false;
    else i("[fix-webm-duration] Duration section is missing"), c = new t.WebmFloat("Duration"), c.setValue(o), l.data.push({ id: 1161, data: c });
    return d.setValue(1e6), l.updateByData(), s.updateByData(), n.updateByData(), true;
  };
  e.fixParsedWebmDuration = r;
});
var Oh = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), e.fixWebmDuration = void 0;
  var t = (qa(), Wa(Eo)), r = Ou(), n = Au(), o = (a, i, s) => t.__awaiter(void 0, void 0, void 0, function* () {
    try {
      let l = yield r.WebmFile.fromBlob(a);
      if ((0, n.fixParsedWebmDuration)(l, i, s)) return l.toBlob(a.type);
    } catch {
    }
    return a;
  });
  e.fixWebmDuration = o;
});
var Ah = Qe((e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true });
  var t = (qa(), Wa(Eo));
  t.__exportStar(Oh(), e), t.__exportStar(Au(), e);
});
function Rh(e) {
  return Object.keys(e).reduce((t, r) => {
    let n = e[r];
    return t[r] = Object.assign({}, n), Nu(n.value) && !Uh(n.value) && !Array.isArray(n.value) && (t[r].value = Object.assign({}, n.value)), Array.isArray(n.value) && (t[r].value = n.value.slice(0)), t;
  }, {});
}
function Nh(e) {
  return e ? Object.keys(e).reduce((t, r) => {
    let n = e[r];
    return t[r] = Nu(n) && "value" in n ? n : { value: n }, t[r].attribute || (t[r].attribute = Mh(r)), t[r].parse = "parse" in t[r] ? t[r].parse : typeof t[r].value != "string", t;
  }, {}) : {};
}
function Dh(e) {
  return Object.keys(e).reduce((t, r) => (t[r] = e[r].value, t), {});
}
function Lh(e, t) {
  let r = Rh(t);
  return Object.keys(t).forEach((n) => {
    let o = r[n], a = e.getAttribute(o.attribute), i = e[n];
    a != null && (o.value = o.parse ? Ru(a) : a), i != null && (o.value = Array.isArray(i) ? i.slice(0) : i), o.reflect && Wl(e, o.attribute, o.value, !!o.parse), Object.defineProperty(e, n, { get() {
      return o.value;
    }, set(s) {
      let l = o.value;
      o.value = s, o.reflect && Wl(this, o.attribute, o.value, !!o.parse);
      for (let d = 0, c = this.__propertyChangedCallbacks.length; d < c; d++) this.__propertyChangedCallbacks[d](n, s, l);
    }, enumerable: true, configurable: true });
  }), r;
}
function Ru(e) {
  if (e) try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
function Wl(e, t, r, n) {
  if (r == null || r === false) return e.removeAttribute(t);
  let o = n ? JSON.stringify(r) : r;
  e.__updating[t] = true, o === "true" && (o = ""), e.setAttribute(t, o), Promise.resolve().then(() => delete e.__updating[t]);
}
function Mh(e) {
  return e.replace(/\.?([A-Z]+)/g, (t, r) => "-" + r.toLowerCase()).replace("_", "-").replace(/^-/, "");
}
function Nu(e) {
  return e != null && (typeof e == "object" || typeof e == "function");
}
function Uh(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function Bh(e) {
  return typeof e == "function" && e.toString().indexOf("class") === 0;
}
var ki;
function $h(e, t) {
  let r = Object.keys(t);
  return class extends e {
    static get observedAttributes() {
      return r.map((n) => t[n].attribute);
    }
    constructor() {
      super(), this.__initialized = false, this.__released = false, this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = {};
    }
    connectedCallback() {
      if (this.__initialized) return;
      this.__releaseCallbacks = [], this.__propertyChangedCallbacks = [], this.__updating = {}, this.props = Lh(this, t);
      let n = Dh(this.props), o = this.Component, a = ki;
      try {
        ki = this, this.__initialized = true, Bh(o) ? new o(n, { element: this }) : o(n, { element: this });
      } finally {
        ki = a;
      }
    }
    async disconnectedCallback() {
      if (await Promise.resolve(), this.isConnected) return;
      this.__propertyChangedCallbacks.length = 0;
      let n = null;
      for (; n = this.__releaseCallbacks.pop(); ) n(this);
      delete this.__initialized, this.__released = true;
    }
    attributeChangedCallback(n, o, a) {
      if (this.__initialized && !this.__updating[n] && (n = this.lookupProp(n), n in t)) {
        if (a == null && !this[n]) return;
        this[n] = t[n].parse ? Ru(a) : a;
      }
    }
    lookupProp(n) {
      if (t) return r.find((o) => n === o || n === t[o].attribute);
    }
    get renderRoot() {
      return this.shadowRoot || this.attachShadow({ mode: "open" });
    }
    addReleaseCallback(n) {
      this.__releaseCallbacks.push(n);
    }
    addPropertyChangedCallback(n) {
      this.__propertyChangedCallbacks.push(n);
    }
  };
}
var W_ = Symbol("element-context");
function zh(e, t = {}, r = {}) {
  let { BaseElement: n = HTMLElement, extension: o, customElements: a = window.customElements } = r;
  return (i) => {
    if (!e) throw new Error("tag is required to register a Component");
    let s = a.get(e);
    return s ? (s.prototype.Component = i, s) : (s = $h(n, Nh(t)), s.prototype.Component = i, s.prototype.registeredTag = e, a.define(e, s, o), s);
  };
}
var de = { context: void 0, registry: void 0, effects: void 0, done: false, getContextId() {
  return ql(this.context.count);
}, getNextContextId() {
  return ql(this.context.count++);
} };
function ql(e) {
  let t = String(e), r = t.length - 1;
  return de.context.id + (r ? String.fromCharCode(96 + r) : "") + t;
}
function is(e) {
  de.context = e;
}
function jh() {
  return { ...de.context, id: de.getNextContextId(), count: 0 };
}
var Vh = (e, t) => e === t;
var io = Symbol("solid-proxy");
var Du = typeof Proxy == "function";
var Hs = Symbol("solid-track");
var q_ = Symbol("solid-dev-component");
var Ea = { equals: Vh };
var Yl = null;
var Lu = $u;
var ft = 1;
var so = 2;
var Mu = { owned: null, cleanups: null, context: null, owner: null };
var ce = null;
var z = null;
var Fo = null;
var bn = null;
var ye = null;
var Le = null;
var Ge = null;
var Ya = 0;
function Gt(e, t) {
  let r = ye, n = ce, o = e.length === 0, a = t === void 0 ? n : t, i = o ? Mu : { owned: null, cleanups: null, context: a ? a.context : null, owner: a }, s = o ? e : () => e(() => Be(() => dr(i)));
  ce = i, ye = null;
  try {
    return Nt(s, true);
  } finally {
    ye = r, ce = n;
  }
}
function M(e, t) {
  t = t ? Object.assign({}, Ea, t) : Ea;
  let r = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 }, n = (o) => (typeof o == "function" && (z && z.running && z.sources.has(r) ? o = o(r.tValue) : o = o(r.value)), Bu(r, o));
  return [Uu.bind(r), n];
}
function B(e, t, r) {
  let n = qs(e, t, false, ft);
  Fo && z && z.running ? Le.push(n) : Po(n);
}
function Ce(e, t, r) {
  Lu = Yh;
  let n = qs(e, t, false, ft), o = ls && Ka(ls);
  o && (n.suspense = o), (!r || !r.render) && (n.user = true), Ge ? Ge.push(n) : Po(n);
}
function te(e, t, r) {
  r = r ? Object.assign({}, Ea, r) : Ea;
  let n = qs(e, t, true, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Fo && z && z.running ? (n.tState = ft, Le.push(n)) : Po(n), Uu.bind(n);
}
function Be(e) {
  if (!bn && ye === null) return e();
  let t = ye;
  ye = null;
  try {
    return bn ? bn.untrack(e) : e();
  } finally {
    ye = t;
  }
}
function ve(e) {
  Ce(() => Be(e));
}
function ue(e) {
  return ce === null || (ce.cleanups === null ? ce.cleanups = [e] : ce.cleanups.push(e)), e;
}
function ss() {
  return ce;
}
function Hh(e, t) {
  let r = ce, n = ye;
  ce = e, ye = null;
  try {
    return Nt(t, true);
  } catch (o) {
    Xa(o);
  } finally {
    ce = r, ye = n;
  }
}
function Gh(e) {
  if (z && z.running) return e(), z.done;
  let t = ye, r = ce;
  return Promise.resolve().then(() => {
    ye = t, ce = r;
    let n;
    return (Fo || ls) && (n = z || (z = { sources: /* @__PURE__ */ new Set(), effects: [], promises: /* @__PURE__ */ new Set(), disposed: /* @__PURE__ */ new Set(), queue: /* @__PURE__ */ new Set(), running: true }), n.done || (n.done = new Promise((o) => n.resolve = o)), n.running = true), Nt(e, false), ye = ce = null, n ? n.done : void 0;
  });
}
var [Y_, Kl] = M(false);
function Gs(e, t) {
  let r = Symbol("context");
  return { id: r, Provider: Xh(r), defaultValue: e };
}
function Ka(e) {
  let t;
  return ce && ce.context && (t = ce.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function Ws(e) {
  let t = te(e), r = te(() => cs(t()));
  return r.toArray = () => {
    let n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var ls;
function Uu() {
  let e = z && z.running;
  if (this.sources && (e ? this.tState : this.state)) if ((e ? this.tState : this.state) === ft) Po(this);
  else {
    let t = Le;
    Le = null, Nt(() => Ca(this), false), Le = t;
  }
  if (ye) {
    let t = this.observers ? this.observers.length : 0;
    ye.sources ? (ye.sources.push(this), ye.sourceSlots.push(t)) : (ye.sources = [this], ye.sourceSlots = [t]), this.observers ? (this.observers.push(ye), this.observerSlots.push(ye.sources.length - 1)) : (this.observers = [ye], this.observerSlots = [ye.sources.length - 1]);
  }
  return e && z.sources.has(this) ? this.tValue : this.value;
}
function Bu(e, t, r) {
  let n = z && z.running && z.sources.has(e) ? e.tValue : e.value;
  if (!e.comparator || !e.comparator(n, t)) {
    if (z) {
      let o = z.running;
      (o || !r && z.sources.has(e)) && (z.sources.add(e), e.tValue = t), o || (e.value = t);
    } else e.value = t;
    e.observers && e.observers.length && Nt(() => {
      for (let o = 0; o < e.observers.length; o += 1) {
        let a = e.observers[o], i = z && z.running;
        i && z.disposed.has(a) || ((i ? !a.tState : !a.state) && (a.pure ? Le.push(a) : Ge.push(a), a.observers && zu(a)), i ? a.tState = ft : a.state = ft);
      }
      if (Le.length > 1e6) throw Le = [], new Error();
    }, false);
  }
  return t;
}
function Po(e) {
  if (!e.fn) return;
  dr(e);
  let t = Ya;
  Xl(e, z && z.running && z.sources.has(e) ? e.tValue : e.value, t), z && !z.running && z.sources.has(e) && queueMicrotask(() => {
    Nt(() => {
      z && (z.running = true), ye = ce = e, Xl(e, e.tValue, t), ye = ce = null;
    }, false);
  });
}
function Xl(e, t, r) {
  let n, o = ce, a = ye;
  ye = ce = e;
  try {
    n = e.fn(t);
  } catch (i) {
    return e.pure && (z && z.running ? (e.tState = ft, e.tOwned && e.tOwned.forEach(dr), e.tOwned = void 0) : (e.state = ft, e.owned && e.owned.forEach(dr), e.owned = null)), e.updatedAt = r + 1, Xa(i);
  } finally {
    ye = a, ce = o;
  }
  (!e.updatedAt || e.updatedAt <= r) && (e.updatedAt != null && "observers" in e ? Bu(e, n, true) : z && z.running && e.pure ? (z.sources.add(e), e.tValue = n) : e.value = n, e.updatedAt = r);
}
function qs(e, t, r, n = ft, o) {
  let a = { fn: e, state: n, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t, owner: ce, context: ce ? ce.context : null, pure: r };
  if (z && z.running && (a.state = 0, a.tState = n), ce === null || ce !== Mu && (z && z.running && ce.pure ? ce.tOwned ? ce.tOwned.push(a) : ce.tOwned = [a] : ce.owned ? ce.owned.push(a) : ce.owned = [a]), bn && a.fn) {
    let [i, s] = M(void 0, { equals: false }), l = bn.factory(a.fn, s);
    ue(() => l.dispose());
    let d = () => Gh(s).then(() => c.dispose()), c = bn.factory(a.fn, d);
    a.fn = (u) => (i(), z && z.running ? c.track(u) : l.track(u));
  }
  return a;
}
function lo(e) {
  let t = z && z.running;
  if ((t ? e.tState : e.state) === 0) return;
  if ((t ? e.tState : e.state) === so) return Ca(e);
  if (e.suspense && Be(e.suspense.inFallback)) return e.suspense.effects.push(e);
  let r = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Ya); ) {
    if (t && z.disposed.has(e)) return;
    (t ? e.tState : e.state) && r.push(e);
  }
  for (let n = r.length - 1; n >= 0; n--) {
    if (e = r[n], t) {
      let o = e, a = r[n + 1];
      for (; (o = o.owner) && o !== a; ) if (z.disposed.has(o)) return;
    }
    if ((t ? e.tState : e.state) === ft) Po(e);
    else if ((t ? e.tState : e.state) === so) {
      let o = Le;
      Le = null, Nt(() => Ca(e, r[0]), false), Le = o;
    }
  }
}
function Nt(e, t) {
  if (Le) return e();
  let r = false;
  t || (Le = []), Ge ? r = true : Ge = [], Ya++;
  try {
    let n = e();
    return Wh(r), n;
  } catch (n) {
    r || (Ge = null), Le = null, Xa(n);
  }
}
function Wh(e) {
  if (Le && (Fo && z && z.running ? qh(Le) : $u(Le), Le = null), e) return;
  let t;
  if (z) {
    if (!z.promises.size && !z.queue.size) {
      let n = z.sources, o = z.disposed;
      Ge.push.apply(Ge, z.effects), t = z.resolve;
      for (let a of Ge) "tState" in a && (a.state = a.tState), delete a.tState;
      z = null, Nt(() => {
        for (let a of o) dr(a);
        for (let a of n) {
          if (a.value = a.tValue, a.owned) for (let i = 0, s = a.owned.length; i < s; i++) dr(a.owned[i]);
          a.tOwned && (a.owned = a.tOwned), delete a.tValue, delete a.tOwned, a.tState = 0;
        }
        Kl(false);
      }, false);
    } else if (z.running) {
      z.running = false, z.effects.push.apply(z.effects, Ge), Ge = null, Kl(true);
      return;
    }
  }
  let r = Ge;
  Ge = null, r.length && Nt(() => Lu(r), false), t && t();
}
function $u(e) {
  for (let t = 0; t < e.length; t++) lo(e[t]);
}
function qh(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t], n = z.queue;
    n.has(r) || (n.add(r), Fo(() => {
      n.delete(r), Nt(() => {
        z.running = true, lo(r);
      }, false), z && (z.running = false);
    }));
  }
}
function Yh(e) {
  let t, r = 0;
  for (t = 0; t < e.length; t++) {
    let n = e[t];
    n.user ? e[r++] = n : lo(n);
  }
  if (de.context) {
    if (de.count) {
      de.effects || (de.effects = []), de.effects.push(...e.slice(0, r));
      return;
    }
    is();
  }
  for (de.effects && (de.done || !de.count) && (e = [...de.effects, ...e], r += de.effects.length, delete de.effects), t = 0; t < r; t++) lo(e[t]);
}
function Ca(e, t) {
  let r = z && z.running;
  r ? e.tState = 0 : e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    let o = e.sources[n];
    if (o.sources) {
      let a = r ? o.tState : o.state;
      a === ft ? o !== t && (!o.updatedAt || o.updatedAt < Ya) && lo(o) : a === so && Ca(o, t);
    }
  }
}
function zu(e) {
  let t = z && z.running;
  for (let r = 0; r < e.observers.length; r += 1) {
    let n = e.observers[r];
    (t ? !n.tState : !n.state) && (t ? n.tState = so : n.state = so, n.pure ? Le.push(n) : Ge.push(n), n.observers && zu(n));
  }
}
function dr(e) {
  let t;
  if (e.sources) for (; e.sources.length; ) {
    let r = e.sources.pop(), n = e.sourceSlots.pop(), o = r.observers;
    if (o && o.length) {
      let a = o.pop(), i = r.observerSlots.pop();
      n < o.length && (a.sourceSlots[i] = n, o[n] = a, r.observerSlots[n] = i);
    }
  }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) dr(e.tOwned[t]);
    delete e.tOwned;
  }
  if (z && z.running && e.pure) ju(e, true);
  else if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) dr(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  z && z.running ? e.tState = 0 : e.state = 0;
}
function ju(e, t) {
  if (t || (e.tState = 0, z.disposed.add(e)), e.owned) for (let r = 0; r < e.owned.length; r++) ju(e.owned[r]);
}
function Kh(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", { cause: e });
}
function Zl(e, t, r) {
  try {
    for (let n of t) n(e);
  } catch (n) {
    Xa(n, r && r.owner || null);
  }
}
function Xa(e, t = ce) {
  let r = Yl && t && t.context && t.context[Yl], n = Kh(e);
  if (!r) throw n;
  Ge ? Ge.push({ fn() {
    Zl(n, r, t);
  }, state: ft }) : Zl(n, r, t);
}
function cs(e) {
  if (typeof e == "function" && !e.length) return cs(e());
  if (Array.isArray(e)) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
      let n = cs(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return e;
}
function Xh(e, t) {
  return function(r) {
    let n;
    return B(() => n = Be(() => (ce.context = { ...ce.context, [e]: r.value }, Ws(() => r.children))), void 0), n;
  };
}
var ds = Symbol("fallback");
function Fa(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function Zh(e, t, r = {}) {
  let n = [], o = [], a = [], i = 0, s = t.length > 1 ? [] : null;
  return ue(() => Fa(a)), () => {
    let l = e() || [], d = l.length, c, u;
    return l[Hs], Be(() => {
      let g, m, f, v, w, y, T, b, S;
      if (d === 0) i !== 0 && (Fa(a), a = [], n = [], o = [], i = 0, s && (s = [])), r.fallback && (n = [ds], o[0] = Gt((_) => (a[0] = _, r.fallback())), i = 1);
      else if (i === 0) {
        for (o = new Array(d), u = 0; u < d; u++) n[u] = l[u], o[u] = Gt(p);
        i = d;
      } else {
        for (f = new Array(d), v = new Array(d), s && (w = new Array(d)), y = 0, T = Math.min(i, d); y < T && n[y] === l[y]; y++) ;
        for (T = i - 1, b = d - 1; T >= y && b >= y && n[T] === l[b]; T--, b--) f[b] = o[T], v[b] = a[T], s && (w[b] = s[T]);
        for (g = /* @__PURE__ */ new Map(), m = new Array(b + 1), u = b; u >= y; u--) S = l[u], c = g.get(S), m[u] = c === void 0 ? -1 : c, g.set(S, u);
        for (c = y; c <= T; c++) S = n[c], u = g.get(S), u !== void 0 && u !== -1 ? (f[u] = o[c], v[u] = a[c], s && (w[u] = s[c]), u = m[u], g.set(S, u)) : a[c]();
        for (u = y; u < d; u++) u in f ? (o[u] = f[u], a[u] = v[u], s && (s[u] = w[u], s[u](u))) : o[u] = Gt(p);
        o = o.slice(0, i = d), n = l.slice(0);
      }
      return o;
    });
    function p(g) {
      if (a[u] = g, s) {
        let [m, f] = M(u);
        return s[u] = f, t(l[u], m);
      }
      return t(l[u]);
    }
  };
}
function Jh(e, t, r = {}) {
  let n = [], o = [], a = [], i = [], s = 0, l;
  return ue(() => Fa(a)), () => {
    let d = e() || [], c = d.length;
    return d[Hs], Be(() => {
      if (c === 0) return s !== 0 && (Fa(a), a = [], n = [], o = [], s = 0, i = []), r.fallback && (n = [ds], o[0] = Gt((p) => (a[0] = p, r.fallback())), s = 1), o;
      for (n[0] === ds && (a[0](), a = [], n = [], o = [], s = 0), l = 0; l < c; l++) l < n.length && n[l] !== d[l] ? i[l](() => d[l]) : l >= n.length && (o[l] = Gt(u));
      for (; l < n.length; l++) a[l]();
      return s = i.length = a.length = c, n = d.slice(0), o = o.slice(0, s);
    });
    function u(p) {
      a[l] = p;
      let [g, m] = M(d[l]);
      return i[l] = m, t(g, l);
    }
  };
}
var Qh = false;
function h(e, t) {
  if (Qh && de.context) {
    let r = de.context;
    is(jh());
    let n = Be(() => e(t || {}));
    return is(r), n;
  }
  return Be(() => e(t || {}));
}
function qo() {
  return true;
}
var us = { get(e, t, r) {
  return t === io ? r : e.get(t);
}, has(e, t) {
  return t === io ? true : e.has(t);
}, set: qo, deleteProperty: qo, getOwnPropertyDescriptor(e, t) {
  return { configurable: true, enumerable: true, get() {
    return e.get(t);
  }, set: qo, deleteProperty: qo };
}, ownKeys(e) {
  return e.keys();
} };
function Ti(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function ef() {
  for (let e = 0, t = this.length; e < t; ++e) {
    let r = this[e]();
    if (r !== void 0) return r;
  }
}
function he(...e) {
  let t = false;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    t = t || !!s && io in s, e[i] = typeof s == "function" ? (t = true, te(s)) : s;
  }
  if (Du && t) return new Proxy({ get(i) {
    for (let s = e.length - 1; s >= 0; s--) {
      let l = Ti(e[s])[i];
      if (l !== void 0) return l;
    }
  }, has(i) {
    for (let s = e.length - 1; s >= 0; s--) if (i in Ti(e[s])) return true;
    return false;
  }, keys() {
    let i = [];
    for (let s = 0; s < e.length; s++) i.push(...Object.keys(Ti(e[s])));
    return [...new Set(i)];
  } }, us);
  let r = {}, n = /* @__PURE__ */ Object.create(null);
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (!s) continue;
    let l = Object.getOwnPropertyNames(s);
    for (let d = l.length - 1; d >= 0; d--) {
      let c = l[d];
      if (c === "__proto__" || c === "constructor") continue;
      let u = Object.getOwnPropertyDescriptor(s, c);
      if (!n[c]) n[c] = u.get ? { enumerable: true, configurable: true, get: ef.bind(r[c] = [u.get.bind(s)]) } : u.value !== void 0 ? u : void 0;
      else {
        let p = r[c];
        p && (u.get ? p.push(u.get.bind(s)) : u.value !== void 0 && p.push(() => u.value));
      }
    }
  }
  let o = {}, a = Object.keys(n);
  for (let i = a.length - 1; i >= 0; i--) {
    let s = a[i], l = n[s];
    l && l.get ? Object.defineProperty(o, s, l) : o[s] = l ? l.value : void 0;
  }
  return o;
}
function ct(e, ...t) {
  if (Du && io in e) {
    let o = new Set(t.length > 1 ? t.flat() : t[0]), a = t.map((i) => new Proxy({ get(s) {
      return i.includes(s) ? e[s] : void 0;
    }, has(s) {
      return i.includes(s) && s in e;
    }, keys() {
      return i.filter((s) => s in e);
    } }, us));
    return a.push(new Proxy({ get(i) {
      return o.has(i) ? void 0 : e[i];
    }, has(i) {
      return o.has(i) ? false : i in e;
    }, keys() {
      return Object.keys(e).filter((i) => !o.has(i));
    } }, us)), a;
  }
  let r = {}, n = t.map(() => ({}));
  for (let o of Object.getOwnPropertyNames(e)) {
    let a = Object.getOwnPropertyDescriptor(e, o), i = !a.get && !a.set && a.enumerable && a.writable && a.configurable, s = false, l = 0;
    for (let d of t) d.includes(o) && (s = true, i ? n[l][o] = a.value : Object.defineProperty(n[l], o, a)), ++l;
    s || (i ? r[o] = a.value : Object.defineProperty(r, o, a));
  }
  return [...n, r];
}
var tf = 0;
function Et() {
  return de.context ? de.getNextContextId() : `cl-${tf++}`;
}
var Vu = (e) => `Stale read from <${e}>.`;
function Oe(e) {
  let t = "fallback" in e && { fallback: () => e.fallback };
  return te(Zh(() => e.each, e.children, t || void 0));
}
function Hu(e) {
  let t = "fallback" in e && { fallback: () => e.fallback };
  return te(Jh(() => e.each, e.children, t || void 0));
}
function Y(e) {
  let t = e.keyed, r = te(() => e.when, void 0, void 0), n = t ? r : te(r, void 0, { equals: (o, a) => !o == !a });
  return te(() => {
    let o = n();
    if (o) {
      let a = e.children;
      return typeof a == "function" && a.length > 0 ? Be(() => a(t ? o : () => {
        if (!Be(n)) throw Vu("Show");
        return r();
      })) : a;
    }
    return e.fallback;
  }, void 0, void 0);
}
function ze(e) {
  let t = Ws(() => e.children), r = te(() => {
    let n = t(), o = Array.isArray(n) ? n : [n], a = () => {
    };
    for (let i = 0; i < o.length; i++) {
      let s = i, l = o[i], d = a, c = te(() => d() ? void 0 : l.when, void 0, void 0), u = l.keyed ? c : te(c, void 0, { equals: (p, g) => !p == !g });
      a = () => d() || (u() ? [s, c, l] : void 0);
    }
    return a;
  });
  return te(() => {
    let n = r()();
    if (!n) return e.fallback;
    let [o, a, i] = n, s = i.children;
    return typeof s == "function" && s.length > 0 ? Be(() => s(i.keyed ? a() : () => {
      var _a5;
      if (((_a5 = Be(r)()) == null ? void 0 : _a5[0]) !== o) throw Vu("Match");
      return a();
    })) : s;
  }, void 0, void 0);
}
function Q(e) {
  return e;
}
var rf = ["allowfullscreen", "async", "alpha", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected", "adauctionheaders", "browsingtopics", "credentialless", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disablepictureinpicture", "disableremoteplayback", "preservespitch", "shadowrootclonable", "shadowrootcustomelementregistry", "shadowrootdelegatesfocus", "shadowrootserializable", "sharedstoragewritable"];
var nf = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", "adAuctionHeaders", "allowFullscreen", "browsingTopics", "defaultChecked", "defaultMuted", "defaultSelected", "disablePictureInPicture", "disableRemotePlayback", "preservesPitch", "shadowRootClonable", "shadowRootCustomElementRegistry", "shadowRootDelegatesFocus", "shadowRootSerializable", "sharedStorageWritable", ...rf]);
var of = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]);
var af = Object.assign(/* @__PURE__ */ Object.create(null), { className: "class", htmlFor: "for" });
var sf = Object.assign(/* @__PURE__ */ Object.create(null), { class: "className", novalidate: { $: "noValidate", FORM: 1 }, formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 }, ismap: { $: "isMap", IMG: 1 }, nomodule: { $: "noModule", SCRIPT: 1 }, playsinline: { $: "playsInline", VIDEO: 1 }, readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 }, adauctionheaders: { $: "adAuctionHeaders", IFRAME: 1 }, allowfullscreen: { $: "allowFullscreen", IFRAME: 1 }, browsingtopics: { $: "browsingTopics", IMG: 1 }, defaultchecked: { $: "defaultChecked", INPUT: 1 }, defaultmuted: { $: "defaultMuted", AUDIO: 1, VIDEO: 1 }, defaultselected: { $: "defaultSelected", OPTION: 1 }, disablepictureinpicture: { $: "disablePictureInPicture", VIDEO: 1 }, disableremoteplayback: { $: "disableRemotePlayback", AUDIO: 1, VIDEO: 1 }, preservespitch: { $: "preservesPitch", AUDIO: 1, VIDEO: 1 }, shadowrootclonable: { $: "shadowRootClonable", TEMPLATE: 1 }, shadowrootdelegatesfocus: { $: "shadowRootDelegatesFocus", TEMPLATE: 1 }, shadowrootserializable: { $: "shadowRootSerializable", TEMPLATE: 1 }, sharedstoragewritable: { $: "sharedStorageWritable", IFRAME: 1, IMG: 1 } });
function lf(e, t) {
  let r = sf[e];
  return typeof r == "object" ? r[t] ? r.$ : void 0 : r;
}
var cf = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
var df = /* @__PURE__ */ new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]);
var uf = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" };
var ae = (e) => te(() => e());
function pf(e, t, r) {
  let n = r.length, o = t.length, a = n, i = 0, s = 0, l = t[o - 1].nextSibling, d = null;
  for (; i < o || s < a; ) {
    if (t[i] === r[s]) {
      i++, s++;
      continue;
    }
    for (; t[o - 1] === r[a - 1]; ) o--, a--;
    if (o === i) {
      let c = a < n ? s ? r[s - 1].nextSibling : r[a - s] : l;
      for (; s < a; ) e.insertBefore(r[s++], c);
    } else if (a === s) for (; i < o; ) (!d || !d.has(t[i])) && t[i].remove(), i++;
    else if (t[i] === r[a - 1] && r[s] === t[o - 1]) {
      let c = t[--o].nextSibling;
      e.insertBefore(r[s++], t[i++].nextSibling), e.insertBefore(r[--a], c), t[o] = r[a];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let u = s;
        for (; u < a; ) d.set(r[u], u++);
      }
      let c = d.get(t[i]);
      if (c != null) if (s < c && c < a) {
        let u = i, p = 1, g;
        for (; ++u < o && u < a && !((g = d.get(t[u])) == null || g !== c + p); ) p++;
        if (p > c - s) {
          let m = t[i];
          for (; s < c; ) e.insertBefore(r[s++], m);
        } else e.replaceChild(r[s++], t[i++]);
      } else i++;
      else t[i++].remove();
    }
  }
}
var Jl = "_$DX_DELEGATE";
function P(e, t, r, n) {
  let o, a = () => {
    let s = n ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    return s.innerHTML = e, r ? s.content.firstChild.firstChild : n ? s.firstChild : s.content.firstChild;
  }, i = t ? () => Be(() => document.importNode(o || (o = a()), true)) : () => (o || (o = a())).cloneNode(true);
  return i.cloneNode = i, i;
}
function nt(e, t = window.document) {
  let r = t[Jl] || (t[Jl] = /* @__PURE__ */ new Set());
  for (let n = 0, o = e.length; n < o; n++) {
    let a = e[n];
    r.has(a) || (r.add(a), t.addEventListener(a, vf));
  }
}
function J(e, t, r) {
  jr(e) || (r == null ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function gf(e, t, r, n) {
  jr(e) || (n == null ? e.removeAttributeNS(t, r) : e.setAttributeNS(t, r, n));
}
function hf(e, t, r) {
  jr(e) || (r ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function Z(e, t) {
  jr(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function rt(e, t, r, n) {
  if (n) Array.isArray(r) ? (e[`$$${t}`] = r[0], e[`$$${t}Data`] = r[1]) : e[`$$${t}`] = r;
  else if (Array.isArray(r)) {
    let o = r[0];
    e.addEventListener(t, r[0] = (a) => o.call(e, r[1], a));
  } else e.addEventListener(t, r, typeof r != "function" && r);
}
function ff(e, t, r = {}) {
  let n = Object.keys(t || {}), o = Object.keys(r), a, i;
  for (a = 0, i = o.length; a < i; a++) {
    let s = o[a];
    !s || s === "undefined" || t[s] || (Ql(e, s, false), delete r[s]);
  }
  for (a = 0, i = n.length; a < i; a++) {
    let s = n[a], l = !!t[s];
    !s || s === "undefined" || r[s] === l || !l || (Ql(e, s, true), r[s] = l);
  }
  return r;
}
function Ys(e, t, r) {
  if (!t) return r ? J(e, "style") : t;
  let n = e.style;
  if (typeof t == "string") return n.cssText = t;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), t || (t = {});
  let o, a;
  for (a in r) t[a] == null && n.removeProperty(a), delete r[a];
  for (a in t) o = t[a], o !== r[a] && (n.setProperty(a, o), r[a] = o);
  return r;
}
function ne(e, t, r) {
  r != null ? e.style.setProperty(t, r) : e.style.removeProperty(t);
}
function _e(e, t = {}, r, n) {
  let o = {};
  return n || B(() => o.children = kn(e, t.children, o.children)), B(() => typeof t.ref == "function" && Fe(t.ref, e)), B(() => mf(e, t, r, true, o, true)), o;
}
function Fe(e, t, r) {
  return Be(() => e(t, r));
}
function E(e, t, r, n) {
  if (r !== void 0 && !n && (n = []), typeof t != "function") return kn(e, t, n, r);
  B((o) => kn(e, t(), o, r), n);
}
function mf(e, t, r, n, o = {}, a = false) {
  t || (t = {});
  for (let i in o) if (!(i in t)) {
    if (i === "children") continue;
    o[i] = ec(e, i, null, o[i], r, a, t);
  }
  for (let i in t) {
    if (i === "children") {
      n || kn(e, t.children);
      continue;
    }
    let s = t[i];
    o[i] = ec(e, i, s, o[i], r, a, t);
  }
}
function bf(e) {
  let t, r;
  return !jr() || !(t = de.registry.get(r = wf())) ? e() : (de.completed && de.completed.add(t), de.registry.delete(r), t);
}
function jr(e) {
  return !!de.context && !de.done && (!e || e.isConnected);
}
function yf(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
}
function Ql(e, t, r) {
  let n = t.trim().split(/\s+/);
  for (let o = 0, a = n.length; o < a; o++) e.classList.toggle(n[o], r);
}
function ec(e, t, r, n, o, a, i) {
  let s, l, d, c, u;
  if (t === "style") return Ys(e, r, n);
  if (t === "classList") return ff(e, r, n);
  if (r === n) return n;
  if (t === "ref") a || r(e);
  else if (t.slice(0, 3) === "on:") {
    let p = t.slice(3);
    n && e.removeEventListener(p, n, typeof n != "function" && n), r && e.addEventListener(p, r, typeof r != "function" && r);
  } else if (t.slice(0, 10) === "oncapture:") {
    let p = t.slice(10);
    n && e.removeEventListener(p, n, true), r && e.addEventListener(p, r, true);
  } else if (t.slice(0, 2) === "on") {
    let p = t.slice(2).toLowerCase(), g = cf.has(p);
    if (!g && n) {
      let m = Array.isArray(n) ? n[0] : n;
      e.removeEventListener(p, m);
    }
    (g || r) && (rt(e, p, r, g), g && nt([p]));
  } else if (t.slice(0, 5) === "attr:") J(e, t.slice(5), r);
  else if (t.slice(0, 5) === "bool:") hf(e, t.slice(5), r);
  else if ((u = t.slice(0, 5) === "prop:") || (d = of.has(t)) || !o && ((c = lf(t, e.tagName)) || (l = nf.has(t))) || (s = e.nodeName.includes("-") || "is" in i)) {
    if (u) t = t.slice(5), l = true;
    else if (jr(e)) return r;
    t === "class" || t === "className" ? Z(e, r) : s && !l && !d ? e[yf(t)] = r : e[c || t] = r;
  } else {
    let p = o && t.indexOf(":") > -1 && uf[t.split(":")[0]];
    p ? gf(e, p, t, r) : J(e, af[t] || t, r);
  }
  return r;
}
function vf(e) {
  if (de.registry && de.events && de.events.find(([l, d]) => d === e)) return;
  let t = e.target, r = `$$${e.type}`, n = e.target, o = e.currentTarget, a = (l) => Object.defineProperty(e, "target", { configurable: true, value: l }), i = () => {
    let l = t[r];
    if (l && !t.disabled) {
      let d = t[`${r}Data`];
      if (d !== void 0 ? l.call(t, d, e) : l.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && a(t.host), true;
  }, s = () => {
    for (; i() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", { configurable: true, get() {
    return t || document;
  } }), de.registry && !de.done && (de.done = _$HY.done = true), e.composedPath) {
    let l = e.composedPath();
    a(l[0]);
    for (let d = 0; d < l.length - 2 && (t = l[d], !!i()); d++) {
      if (t._$host) {
        t = t._$host, s();
        break;
      }
      if (t.parentNode === o) break;
    }
  } else s();
  a(n);
}
function kn(e, t, r, n, o) {
  let a = jr(e);
  if (a) {
    !r && (r = [...e.childNodes]);
    let l = [];
    for (let d = 0; d < r.length; d++) {
      let c = r[d];
      c.nodeType === 8 && c.data.slice(0, 2) === "!$" ? c.remove() : l.push(c);
    }
    r = l;
  }
  for (; typeof r == "function"; ) r = r();
  if (t === r) return r;
  let i = typeof t, s = n !== void 0;
  if (e = s && r[0] && r[0].parentNode || e, i === "string" || i === "number") {
    if (a || i === "number" && (t = t.toString(), t === r)) return r;
    if (s) {
      let l = r[0];
      l && l.nodeType === 3 ? l.data !== t && (l.data = t) : l = document.createTextNode(t), r = Qr(e, r, n, l);
    } else r !== "" && typeof r == "string" ? r = e.firstChild.data = t : r = e.textContent = t;
  } else if (t == null || i === "boolean") {
    if (a) return r;
    r = Qr(e, r, n);
  } else {
    if (i === "function") return B(() => {
      let l = t();
      for (; typeof l == "function"; ) l = l();
      r = kn(e, l, r, n);
    }), () => r;
    if (Array.isArray(t)) {
      let l = [], d = r && Array.isArray(r);
      if (ps(l, t, r, o)) return B(() => r = kn(e, l, r, n, true)), () => r;
      if (a) {
        if (!l.length) return r;
        if (n === void 0) return r = [...e.childNodes];
        let c = l[0];
        if (c.parentNode !== e) return r;
        let u = [c];
        for (; (c = c.nextSibling) !== n; ) u.push(c);
        return r = u;
      }
      if (l.length === 0) {
        if (r = Qr(e, r, n), s) return r;
      } else d ? r.length === 0 ? tc(e, l, n) : pf(e, r, l) : (r && Qr(e), tc(e, l));
      r = l;
    } else if (t.nodeType) {
      if (a && t.parentNode) return r = s ? [t] : t;
      if (Array.isArray(r)) {
        if (s) return r = Qr(e, r, n, t);
        Qr(e, r, null, t);
      } else r == null || r === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      r = t;
    }
  }
  return r;
}
function ps(e, t, r, n) {
  let o = false;
  for (let a = 0, i = t.length; a < i; a++) {
    let s = t[a], l = r && r[e.length], d;
    if (!(s == null || s === true || s === false)) if ((d = typeof s) == "object" && s.nodeType) e.push(s);
    else if (Array.isArray(s)) o = ps(e, s, l) || o;
    else if (d === "function") if (n) {
      for (; typeof s == "function"; ) s = s();
      o = ps(e, Array.isArray(s) ? s : [s], Array.isArray(l) ? l : [l]) || o;
    } else e.push(s), o = true;
    else {
      let c = String(s);
      l && l.nodeType === 3 && l.data === c ? e.push(l) : e.push(document.createTextNode(c));
    }
  }
  return o;
}
function tc(e, t, r = null) {
  for (let n = 0, o = t.length; n < o; n++) e.insertBefore(t[n], r);
}
function Qr(e, t, r, n) {
  if (r === void 0) return e.textContent = "";
  let o = n || document.createTextNode("");
  if (t.length) {
    let a = false;
    for (let i = t.length - 1; i >= 0; i--) {
      let s = t[i];
      if (o !== s) {
        let l = s.parentNode === e;
        !a && !i ? l ? e.replaceChild(o, s) : e.insertBefore(o, r) : l && s.remove();
      } else a = true;
    }
  } else e.insertBefore(o, r);
  return [o];
}
function wf() {
  return de.getNextContextId();
}
var K_ = Symbol();
var xf = false;
var kf = "http://www.w3.org/2000/svg";
function Gu(e, t = false, r = void 0) {
  return t ? document.createElementNS(kf, e) : document.createElement(e, { is: r });
}
function Wu(e) {
  let { useShadow: t } = e, r = document.createTextNode(""), n = () => e.mount || document.body, o = ss(), a, i = !!de.context;
  return Ce(() => {
    i && (ss().user = i = false), a || (a = Hh(o, () => te(() => e.children)));
    let s = n();
    if (s instanceof HTMLHeadElement) {
      let [l, d] = M(false), c = () => d(true);
      Gt((u) => E(s, () => l() ? u() : a(), null)), ue(c);
    } else {
      let l = Gu(e.isSVG ? "g" : "div", e.isSVG), d = t && l.attachShadow ? l.attachShadow({ mode: "open" }) : l;
      Object.defineProperty(l, "_$host", { get() {
        return r.parentNode;
      }, configurable: true }), E(d, a), s.appendChild(l), e.ref && e.ref(l), ue(() => s.removeChild(l));
    }
  }, void 0, { render: !i }), r;
}
function Tf(e, t) {
  let r = te(e);
  return te(() => {
    let n = r();
    switch (typeof n) {
      case "function":
        return Be(() => n(t));
      case "string":
        let o = df.has(n), a = de.context ? bf() : Gu(n, o, Be(() => t.is));
        return _e(a, t, o), a;
    }
  });
}
function Sf(e) {
  let [, t] = ct(e, ["component"]);
  return Tf(() => e.component, t);
}
function Ef(e) {
  let t = Object.keys(e), r = {};
  for (let n = 0; n < t.length; n++) {
    let [o, a] = M(e[t[n]]);
    Object.defineProperty(r, t[n], { get: o, set(i) {
      a(() => i);
    } });
  }
  return r;
}
function Cf(e) {
  if (e.assignedSlot && e.assignedSlot._$owner) return e.assignedSlot._$owner;
  let t = e.parentNode;
  for (; t && !t._$owner && !(t.assignedSlot && t.assignedSlot._$owner); ) t = t.parentNode;
  return t && t.assignedSlot ? t.assignedSlot._$owner : e._$owner;
}
function Ff(e) {
  return (t, r) => {
    let { element: n } = r;
    return Gt((o) => {
      let a = Ef(t);
      n.addPropertyChangedCallback((s, l) => a[s] = l), n.addReleaseCallback(() => {
        n.renderRoot.textContent = "", o();
      });
      let i = e(a, r);
      return E(n.renderRoot, i);
    }, Cf(n));
  };
}
function Si(e, t, r) {
  return arguments.length === 2 && (r = t, t = {}), zh(e, t)(Ff(r));
}
var Ks = { id: void 0, typebot: void 0, onNewInputBlock: void 0, onAnswer: void 0, onEnd: void 0, onInit: void 0, onNewLogs: void 0, onChatStatePersisted: void 0, onScriptExecutionSuccess: void 0, font: void 0, progressBarRef: void 0, isPreview: void 0, startFrom: void 0, prefilledVariables: void 0, apiHost: void 0, wsHost: void 0, resultId: void 0, sessionId: void 0 };
var Pf = { ...Ks, onClose: void 0, onOpen: void 0, theme: void 0, autoShowDelay: void 0, isOpen: void 0, defaultOpen: void 0 };
var _f = { ...Ks, isOpen: void 0, onClose: void 0, onOpen: void 0, theme: void 0, previewMessage: void 0, onPreviewMessageClick: void 0, onPreviewMessageDismissed: void 0, autoShowDelay: void 0, inlineStyle: void 0 };
var Yo = { xs: 440, sm: 640, md: 768, lg: 1024, xl: 1280 };
var Ie = () => (e, t) => ct(e, t);
var Ei = Symbol("fallback");
function rc(e) {
  for (let t of e) t.dispose();
}
function If(e, t, r, n = {}) {
  if (xf) {
    let i = e(), s = [];
    if (i && i.length) for (let l = 0, d = i.length; l < d; l++) s.push(r(() => i[l], () => l));
    else n.fallback && (s = [n.fallback()]);
    return () => s;
  }
  let o = /* @__PURE__ */ new Map();
  return ue(() => rc(o.values())), () => {
    let i = e() || [];
    return i[Hs], Be(() => {
      var _a5, _b2;
      if (!i.length) return rc(o.values()), o.clear(), n.fallback ? [Gt((c) => (o.set(Ei, { dispose: c }), n.fallback()))] : [];
      let s = new Array(i.length), l = o.get(Ei);
      if (!o.size || l) {
        l == null ? void 0 : l.dispose(), o.delete(Ei);
        for (let c = 0; c < i.length; c++) {
          let u = i[c], p = t(u, c);
          a(s, u, c, p);
        }
        return s;
      }
      let d = new Set(o.keys());
      for (let c = 0; c < i.length; c++) {
        let u = i[c], p = t(u, c);
        d.delete(p);
        let g = o.get(p);
        g ? (s[c] = g.mapped, (_a5 = g.setIndex) == null ? void 0 : _a5.call(g, c), g.setItem(() => u)) : a(s, u, c, p);
      }
      for (let c of d) (_b2 = o.get(c)) == null ? void 0 : _b2.dispose(), o.delete(c);
      return s;
    });
  };
  function a(i, s, l, d) {
    Gt((c) => {
      let [u, p] = M(s), g = { setItem: p, dispose: c };
      if (r.length > 1) {
        let [m, f] = M(l);
        g.setIndex = f, g.mapped = r(u, m);
      } else g.mapped = r(u);
      o.set(d, g), i[l] = g.mapped;
    });
  }
}
function Of(e) {
  let { by: t } = e;
  return te(If(() => e.each, typeof t == "function" ? t : (r) => r[t], e.children, "fallback" in e ? { fallback: () => e.fallback } : void 0));
}
function Af(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
var Rf = (e) => e[0];
var Nf = (e) => e[e.length - 1];
var Df = (e, ...t) => e.concat(t);
var Lf = (e, ...t) => e.filter((r) => !t.includes(r));
var Mf = (e) => Array.from(new Set(e));
function Xs(e, t, r = {}) {
  let { step: n = 1, loop: o = true } = r, a = t + n, i = e.length, s = i - 1;
  return t === -1 ? n > 0 ? 0 : s : a < 0 ? o ? s : 0 : a >= i ? o ? 0 : t > i ? i : t : a;
}
function Uf(e, t, r = {}) {
  return e[Xs(e, t, r)];
}
function qu(e, t, r = {}) {
  let { step: n = 1, loop: o = true } = r;
  return Xs(e, t, { step: -n, loop: o });
}
function Bf(e, t, r = {}) {
  return e[qu(e, t, r)];
}
var nc = (e) => (e == null ? void 0 : e.constructor.name) === "Array";
var $f = (e, t) => {
  if (e.length !== t.length) return false;
  for (let r = 0; r < e.length; r++) if (!_o(e[r], t[r])) return false;
  return true;
};
var _o = (e, t) => {
  if (Object.is(e, t)) return true;
  if (e == null && t != null || e != null && t == null) return false;
  if (typeof (e == null ? void 0 : e.isEqual) == "function" && typeof (t == null ? void 0 : t.isEqual) == "function") return e.isEqual(t);
  if (typeof e == "function" && typeof t == "function") return e.toString() === t.toString();
  if (nc(e) && nc(t)) return $f(Array.from(e), Array.from(t));
  if (typeof e != "object" || typeof t != "object") return false;
  let r = Object.keys(t ?? /* @__PURE__ */ Object.create(null)), n = r.length;
  for (let o = 0; o < n; o++) if (!Reflect.has(e, r[o])) return false;
  for (let o = 0; o < n; o++) {
    let a = r[o];
    if (!_o(e[a], t[a])) return false;
  }
  return true;
};
var zf = (e) => Array.isArray(e);
var Yu = (e) => e != null && typeof e == "object";
var Ku = (e) => Yu(e) && !zf(e);
var Zs = (e) => typeof e == "number" && !Number.isNaN(e);
var yn = (e) => typeof e == "string";
var It = (e) => typeof e == "function";
var jf = (e) => e == null;
var ba = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var Vf = (e) => Object.prototype.toString.call(e);
var Xu = Function.prototype.toString;
var Hf = Xu.call(Object);
var Gf = (e) => {
  if (!Yu(e) || Vf(e) != "[object Object]" || Yf(e)) return false;
  let t = Object.getPrototypeOf(e);
  if (t === null) return true;
  let r = ba(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Xu.call(r) == Hf;
};
var Wf = (e) => typeof e == "object" && e !== null && "$$typeof" in e && "props" in e;
var qf = (e) => typeof e == "object" && e !== null && "__v_isVNode" in e;
var Yf = (e) => Wf(e) || qf(e);
var Xn = (e, ...t) => (typeof e == "function" ? e(...t) : e) ?? void 0;
var oc = (e) => e;
var Kf = () => {
};
var Pa = (...e) => (...t) => {
  e.forEach(function(r) {
    r == null ? void 0 : r(...t);
  });
};
var Zu = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (e++, e.toString(36));
})();
function Xf(e, t = 0) {
  let r = 0, n = null;
  return (...o) => {
    let a = Date.now(), i = a - r;
    i >= t ? (n && (clearTimeout(n), n = null), e(...o), r = a) : n || (n = setTimeout(() => {
      e(...o), r = Date.now(), n = null;
    }, t - i));
  };
}
var { floor: Zf, abs: X_, round: Jf, min: Qf, max: em, pow: Z_, sign: J_ } = Math;
var tm = (e) => Number.isNaN(e);
var ur = (e) => tm(e) ? 0 : e;
var rm = (e, t) => (e % t + t) % t;
var nm = (e, t) => ur(e) >= t;
var om = (e, t) => ur(e) <= t;
var am = (e, t, r) => ur(e) >= t && ur(e) <= r;
var hn = (e, t, r) => Qf(em(ur(e), t), r);
var im = (e, t, r) => (ur(e) - t) / (r - t);
var no = (e, t) => typeof t == "number" ? Zf(e * t + 0.5) / t : Jf(e);
var ac = (e) => {
  if (!Number.isFinite(e)) return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; ) t *= 10, r += 1;
  return r;
};
var Ju = (e, t, r) => {
  let n = t === "+" ? e + r : e - r;
  if (e % 1 !== 0 || r % 1 !== 0) {
    let o = 10 ** Math.max(ac(e), ac(r));
    e = Math.round(e * o), r = Math.round(r * o), n = t === "+" ? e + r : e - r, n /= o;
  }
  return n;
};
var sm = (e, t) => Ju(ur(e), "+", t);
var lm = (e, t) => Ju(ur(e), "-", t);
function Za(e) {
  if (!Gf(e) || e === void 0) return e;
  let t = Reflect.ownKeys(e).filter((n) => typeof n == "string"), r = {};
  for (let n of t) {
    let o = e[n];
    o !== void 0 && (r[n] = Za(o));
  }
  return r;
}
function cm(e, t) {
  let r = {}, n = {}, o = new Set(t);
  for (let a in e) o.has(a) ? n[a] = e[a] : r[a] = e[a];
  return [n, r];
}
var Ct = (e) => function(t) {
  return cm(t, e);
};
function Ci(e, t) {
  let r = performance.now(), n;
  function o(a) {
    if (a - r >= t) {
      e();
      return;
    }
    n = requestAnimationFrame(o);
  }
  return n = requestAnimationFrame(o), () => cancelAnimationFrame(n);
}
function co(...e) {
  let t = e.length === 1 ? e[0] : e[1], r = e.length === 2 ? e[0] : true;
}
function dm(e, t) {
  if (e == null) throw new Error(t());
}
function Qu(e, t, r) {
  let n = [];
  for (let o of t) e[o] == null && n.push(o);
  if (n.length > 0) throw new Error(`[zag-js${r ? ` > ${r}` : ""}] missing required props: ${n.join(", ")}`);
}
var um = (e, t) => e.map((r, n) => e[(Math.max(t, 0) + n) % e.length]);
var ep = () => {
};
var Ja = (e) => typeof e == "object" && e !== null;
var tp = 2147483647;
var re = (e) => e ? "" : void 0;
var uo = (e) => e ? "true" : void 0;
var pm = 1;
var gm = 9;
var hm = 11;
var We = (e) => Ja(e) && e.nodeType === pm && typeof e.nodeName == "string";
var Js = (e) => Ja(e) && e.nodeType === gm;
var fm = (e) => Ja(e) && e === e.window;
var rp = (e) => We(e) ? e.localName || "" : "#document";
function mm(e) {
  return ["html", "body", "#document"].includes(rp(e));
}
var bm = (e) => Ja(e) && e.nodeType !== void 0;
var po = (e) => bm(e) && e.nodeType === hm && "host" in e;
var ym = (e) => We(e) && e.localName === "input";
var vm = (e) => !!(e == null ? void 0 : e.matches("a[href]"));
var wm = (e) => We(e) ? e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0 : false;
var xm = /(textarea|select)/;
function Qs(e) {
  if (e == null || !We(e)) return false;
  try {
    return ym(e) && e.selectionStart != null || xm.test(e.localName) || e.isContentEditable || e.getAttribute("contenteditable") === "true" || e.getAttribute("contenteditable") === "";
  } catch {
    return false;
  }
}
function At(e, t) {
  var _a5;
  if (!e || !t || !We(e) || !We(t)) return false;
  let r = (_a5 = t.getRootNode) == null ? void 0 : _a5.call(t);
  if (e === t || e.contains(t)) return true;
  if (r && po(r)) {
    let n = t;
    for (; n; ) {
      if (e === n) return true;
      n = n.parentNode || n.host;
    }
  }
  return false;
}
function Ft(e) {
  return Js(e) ? e : fm(e) ? e.document : (e == null ? void 0 : e.ownerDocument) ?? document;
}
function km(e) {
  return Ft(e).documentElement;
}
function dt(e) {
  var _a5;
  return po(e) ? dt(e.host) : Js(e) ? e.defaultView ?? window : We(e) ? ((_a5 = e.ownerDocument) == null ? void 0 : _a5.defaultView) ?? window : window;
}
function np(e) {
  let t = e.activeElement;
  for (; t == null ? void 0 : t.shadowRoot; ) {
    let r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r;
  }
  return t;
}
function Tm(e) {
  if (rp(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || po(e) && e.host || km(e);
  return po(t) ? t.host : t;
}
var Fi = /* @__PURE__ */ new WeakMap();
function Sn(e) {
  return Fi.has(e) || Fi.set(e, dt(e).getComputedStyle(e)), Fi.get(e);
}
var Qa = () => typeof document < "u";
function Sm() {
  var _a5;
  return ((_a5 = navigator.userAgentData) == null ? void 0 : _a5.platform) ?? navigator.platform;
}
function Em() {
  let e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map(({ brand: t, version: r }) => `${t}/${r}`).join(" ") : navigator.userAgent;
}
var el = (e) => Qa() && e.test(Sm());
var Cm = (e) => Qa() && e.test(Em());
var Fm = (e) => Qa() && e.test(navigator.vendor);
var ic = () => Qa() && !!navigator.maxTouchPoints;
var Pm = () => el(/^iPhone/i);
var _m = () => el(/^iPad/i) || ti() && navigator.maxTouchPoints > 1;
var ei = () => Pm() || _m();
var Im = () => ti() || ei();
var ti = () => el(/^Mac/i);
var op = () => Im() && Fm(/apple/i);
var Om = () => Cm(/Firefox/i);
function Am(e) {
  var _a5, _b2, _c2;
  return ((_a5 = e.composedPath) == null ? void 0 : _a5.call(e)) ?? ((_c2 = (_b2 = e.nativeEvent) == null ? void 0 : _b2.composedPath) == null ? void 0 : _c2.call(_b2));
}
function tt(e) {
  var _a5;
  return ((_a5 = Am(e)) == null ? void 0 : _a5[0]) ?? e.target;
}
var ap = (e) => At(e.currentTarget, tt(e));
function sc(e) {
  let t = e.currentTarget;
  if (!t || !t.matches("a[href], button[type='submit'], input[type='submit']")) return false;
  let r = e.button === 1, n = Nm(e);
  return r || n;
}
function lc(e) {
  let t = e.currentTarget;
  if (!t) return false;
  let r = t.localName;
  return e.altKey ? r === "a" || r === "button" && t.type === "submit" || r === "input" && t.type === "submit" : false;
}
function Rm(e) {
  return Um(e).isComposing || e.keyCode === 229;
}
function Nm(e) {
  return ti() ? e.metaKey : e.ctrlKey;
}
function Dm(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
var ya = (e) => e.button === 0;
var ip = (e) => e.button === 2 || ti() && e.ctrlKey && e.button === 0;
var gs = (e) => e.ctrlKey || e.altKey || e.metaKey;
var Lm = (e) => "touches" in e && e.touches.length > 0;
var Mm = { Up: "ArrowUp", Down: "ArrowDown", Esc: "Escape", " ": "Space", ",": "Comma", Left: "ArrowLeft", Right: "ArrowRight" };
var cc = { ArrowLeft: "ArrowRight", ArrowRight: "ArrowLeft" };
function hs(e, t = {}) {
  let { dir: r = "ltr", orientation: n = "horizontal" } = t, o = e.key;
  return o = Mm[o] ?? o, r === "rtl" && n === "horizontal" && o in cc && (o = cc[o]), o;
}
function Um(e) {
  return e.nativeEvent ?? e;
}
var Bm = /* @__PURE__ */ new Set(["PageUp", "PageDown"]);
var $m = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
function zm(e) {
  return e.ctrlKey || e.metaKey ? 0.1 : Bm.has(e.key) || e.shiftKey && $m.has(e.key) ? 10 : 1;
}
function fn(e, t = "client") {
  let r = Lm(e) ? e.touches[0] || e.changedTouches[0] : e;
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
var ke = (e, t, r, n) => {
  let o = typeof e == "function" ? e() : e;
  return o == null ? void 0 : o.addEventListener(t, r, n), () => {
    o == null ? void 0 : o.removeEventListener(t, r, n);
  };
};
function jm(e, t) {
  let { type: r = "HTMLInputElement", property: n = "value" } = t, o = dt(e)[r].prototype;
  return Object.getOwnPropertyDescriptor(o, n) ?? {};
}
function Vm(e) {
  if (e.localName === "input") return "HTMLInputElement";
  if (e.localName === "textarea") return "HTMLTextAreaElement";
  if (e.localName === "select") return "HTMLSelectElement";
}
function Hm(e, t, r = "value") {
  var _a5;
  if (!e) return;
  let n = Vm(e);
  n && ((_a5 = jm(e, { type: n, property: r }).set) == null ? void 0 : _a5.call(e, t)), e.setAttribute(r, t);
}
function Gm(e) {
  return Wm(e) ? e.form : e.closest("form");
}
function Wm(e) {
  return e.matches("textarea, input, select, button");
}
function qm(e, t) {
  if (!e) return;
  let r = Gm(e), n = (o) => {
    o.defaultPrevented || t();
  };
  return r == null ? void 0 : r.addEventListener("reset", n, { passive: true }), () => r == null ? void 0 : r.removeEventListener("reset", n);
}
function Ym(e, t) {
  let r = e == null ? void 0 : e.closest("fieldset");
  if (!r) return;
  t(r.disabled);
  let n = dt(r), o = new n.MutationObserver(() => t(r.disabled));
  return o.observe(r, { attributes: true, attributeFilter: ["disabled"] }), () => o.disconnect();
}
function Km(e, t) {
  if (!e) return;
  let { onFieldsetDisabledChange: r, onFormReset: n } = t, o = [qm(e, n), Ym(e, r)];
  return () => o.forEach((a) => a == null ? void 0 : a());
}
var sp = (e) => We(e) && e.tagName === "IFRAME";
var Xm = (e) => !Number.isNaN(parseInt(e.getAttribute("tabindex") || "0", 10));
var Zm = (e) => parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
var tl = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var lp = (e, t = false) => {
  if (!e) return [];
  let r = Array.from(e.querySelectorAll(tl));
  (t == true || t == "if-empty" && r.length === 0) && We(e) && Wt(e) && r.unshift(e);
  let n = r.filter(Wt);
  return n.forEach((o, a) => {
    if (sp(o) && o.contentDocument) {
      let i = o.contentDocument.body;
      n.splice(a, 1, ...lp(i));
    }
  }), n;
};
function Wt(e) {
  return !e || e.closest("[inert]") ? false : e.matches(tl) && wm(e);
}
function Io(e, t) {
  if (!e) return [];
  let r = Array.from(e.querySelectorAll(tl)), n = r.filter(lr);
  return t && lr(e) && n.unshift(e), n.forEach((o, a) => {
    if (sp(o) && o.contentDocument) {
      let i = o.contentDocument.body, s = Io(i);
      n.splice(a, 1, ...s);
    }
  }), !n.length && t ? r : n;
}
function lr(e) {
  return e != null && e.tabIndex > 0 ? true : Wt(e) && !Zm(e);
}
function Jm(e, t) {
  let r = Io(e, t), n = r[0] || null, o = r[r.length - 1] || null;
  return [n, o];
}
function Ln(e) {
  return e.tabIndex < 0 && (/^(audio|video|details)$/.test(e.localName) || Qs(e)) && !Xm(e) ? 0 : e.tabIndex;
}
function Qm(e) {
  let { root: t, getInitialEl: r, filter: n, enabled: o = true } = e;
  if (!o) return;
  let a = null;
  if (a || (a = typeof r == "function" ? r() : r), a || (a = t == null ? void 0 : t.querySelector("[data-autofocus],[autofocus]")), !a) {
    let i = Io(t);
    a = n ? i.filter(n)[0] : i[0];
  }
  return a || t || void 0;
}
function eb(e) {
  let t = e.currentTarget;
  if (!t) return false;
  let [r, n] = Jm(t), o = t.ownerDocument || document;
  return !(o.activeElement === r && e.shiftKey || o.activeElement === n && !e.shiftKey || !r && !n);
}
function cp(e) {
  let t = /* @__PURE__ */ new Set();
  function r(n) {
    let o = globalThis.requestAnimationFrame(n);
    t.add(() => globalThis.cancelAnimationFrame(o));
  }
  return r(() => r(e)), function() {
    t.forEach((n) => n());
  };
}
function xe(e) {
  let t, r = globalThis.requestAnimationFrame(() => {
    t = e();
  });
  return () => {
    globalThis.cancelAnimationFrame(r), t == null ? void 0 : t();
  };
}
function tb(e, t, r) {
  let n = xe(() => {
    e.removeEventListener(t, o, true), r();
  }), o = () => {
    n(), r();
  };
  return e.addEventListener(t, o, { once: true, capture: true }), n;
}
function rb(e, t) {
  if (!e) return;
  let { attributes: r, callback: n } = t, o = e.ownerDocument.defaultView || window, a = new o.MutationObserver((i) => {
    for (let s of i) s.type === "attributes" && s.attributeName && r.includes(s.attributeName) && n(s);
  });
  return a.observe(e, { attributes: true, attributeFilter: r }), () => a.disconnect();
}
function dp(e, t) {
  let { defer: r } = t, n = r ? xe : (a) => a(), o = [];
  return o.push(n(() => {
    let a = typeof e == "function" ? e() : e;
    o.push(rb(a, t));
  })), () => {
    o.forEach((a) => a == null ? void 0 : a());
  };
}
function nb(e) {
  let t = () => {
    let r = dt(e);
    e.dispatchEvent(new r.MouseEvent("click"));
  };
  Om() ? tb(e, "keyup", t) : queueMicrotask(t);
}
function fs(e) {
  let t = Tm(e);
  return mm(t) ? Ft(t).body : We(t) && up(t) ? t : fs(t);
}
var ob = /auto|scroll|overlay|hidden|clip/;
var ab = /* @__PURE__ */ new Set(["inline", "contents"]);
function up(e) {
  let t = dt(e), { overflow: r, overflowX: n, overflowY: o, display: a } = t.getComputedStyle(e);
  return ob.test(r + o + n) && !ab.has(a);
}
function ib(e) {
  return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
}
function sb(e, t) {
  let { rootEl: r, ...n } = t || {};
  !e || !r || !up(r) || !ib(r) || e.scrollIntoView(n);
}
function lb(e, t) {
  let r = e.body, n = "pointerLockElement" in e || "mozPointerLockElement" in e, o = () => !!e.pointerLockElement;
  function a() {
    t == null ? void 0 : t(o());
  }
  function i(l) {
    o() && (t == null ? void 0 : t(false)), console.error("PointerLock error occurred:", l), e.exitPointerLock();
  }
  if (!n) return;
  try {
    r.requestPointerLock();
  } catch {
  }
  let s = [ke(e, "pointerlockchange", a, false), ke(e, "pointerlockerror", i, false)];
  return () => {
    s.forEach((l) => l()), e.exitPointerLock();
  };
}
var mn = "default";
var ms = "";
var va = /* @__PURE__ */ new WeakMap();
function cb(e = {}) {
  let { target: t, doc: r } = e, n = r ?? document, o = n.documentElement;
  return ei() ? (mn === "default" && (ms = o.style.webkitUserSelect, o.style.webkitUserSelect = "none"), mn = "disabled") : t && (va.set(t, t.style.userSelect), t.style.userSelect = "none"), () => db({ target: t, doc: n });
}
function db(e = {}) {
  let { target: t, doc: r } = e, n = (r ?? document).documentElement;
  if (ei()) {
    if (mn !== "disabled") return;
    mn = "restoring", setTimeout(() => {
      cp(() => {
        mn === "restoring" && (n.style.webkitUserSelect === "none" && (n.style.webkitUserSelect = ms || ""), ms = "", mn = "default");
      });
    }, 300);
  } else if (t && va.has(t)) {
    let o = va.get(t);
    t.style.userSelect === "none" && (t.style.userSelect = o ?? ""), t.getAttribute("style") === "" && t.removeAttribute("style"), va.delete(t);
  }
}
function ub(e = {}) {
  let { defer: t, target: r, ...n } = e, o = t ? xe : (i) => i(), a = [];
  return a.push(o(() => {
    let i = typeof r == "function" ? r() : r;
    a.push(cb({ ...n, target: i }));
  })), () => {
    a.forEach((i) => i == null ? void 0 : i());
  };
}
function pb(e, t) {
  let { onPointerMove: r, onPointerUp: n } = t, o = [ke(e, "pointermove", (a) => {
    let i = fn(a), s = Math.sqrt(i.x ** 2 + i.y ** 2), l = a.pointerType === "touch" ? 10 : 5;
    if (!(s < l)) {
      if (a.pointerType === "mouse" && a.button === 0) {
        n();
        return;
      }
      r({ point: i, event: a });
    }
  }, false), ke(e, "pointerup", n, false), ke(e, "pointercancel", n, false), ke(e, "contextmenu", n, false), ub({ doc: e })];
  return () => {
    o.forEach((a) => a());
  };
}
function pp(e, t) {
  return Array.from((e == null ? void 0 : e.querySelectorAll(t)) ?? []);
}
var rl = (e) => e.id;
function gb(e, t, r = rl) {
  return e.find((n) => r(n) === t);
}
function hb(e, t, r = rl) {
  let n = gb(e, t, r);
  return n ? e.indexOf(n) : -1;
}
var fb = (e) => e.split("").map((t) => {
  let r = t.charCodeAt(0);
  return r > 0 && r < 128 ? t : r >= 128 && r <= 255 ? `/x${r.toString(16)}`.replace("/", "\\") : "";
}).join("").trim();
var mb = (e) => {
  var _a5;
  return fb(((_a5 = e.dataset) == null ? void 0 : _a5.valuetext) ?? e.textContent ?? "");
};
var bb = (e, t) => e.trim().toLowerCase().startsWith(t.toLowerCase());
function yb(e, t, r, n = rl) {
  let o = r ? hb(e, r, n) : -1, a = r ? um(e, o) : e;
  return t.length === 1 && (a = a.filter((i) => n(i) !== r)), a.find((i) => bb(mb(i), t));
}
function _a(e, t) {
  if (!e) return ep;
  let r = Object.keys(t).reduce((n, o) => (n[o] = e.style.getPropertyValue(o), n), {});
  return Object.assign(e.style, t), () => {
    Object.assign(e.style, r), e.style.length === 0 && e.removeAttribute("style");
  };
}
function vb(e, t, r) {
  if (!e) return ep;
  let n = e.style.getPropertyValue(t);
  return e.style.setProperty(t, r), () => {
    e.style.setProperty(t, n), e.style.length === 0 && e.removeAttribute("style");
  };
}
function wb(e, t) {
  let { state: r, activeId: n, key: o, timeout: a = 350, itemToId: i } = t, s = r.keysSoFar + o, l = s.length > 1 && Array.from(s).every((g) => g === s[0]) ? s[0] : s, d = e.slice(), c = yb(d, l, n, i);
  function u() {
    clearTimeout(r.timer), r.timer = -1;
  }
  function p(g) {
    r.keysSoFar = g, u(), g !== "" && (r.timer = +setTimeout(() => {
      p(""), u();
    }, a));
  }
  return p(s), c;
}
var gp = Object.assign(wb, { defaultOptions: { keysSoFar: "", timer: -1 }, isValidEvent: xb });
function xb(e) {
  return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function kb(e, t, r) {
  let { signal: n } = t;
  return [new Promise((o, a) => {
    let i = setTimeout(() => {
      a(new Error(`Timeout of ${r}ms exceeded`));
    }, r);
    n.addEventListener("abort", () => {
      clearTimeout(i), a(new Error("Promise aborted"));
    }), e.then((s) => {
      n.aborted || (clearTimeout(i), o(s));
    }).catch((s) => {
      n.aborted || (clearTimeout(i), a(s));
    });
  }), () => t.abort()];
}
function Tb(e, t) {
  let { timeout: r, rootNode: n } = t, o = dt(n), a = Ft(n), i = new o.AbortController();
  return kb(new Promise((s) => {
    let l = e();
    if (l) {
      s(l);
      return;
    }
    let d = new o.MutationObserver(() => {
      let c = e();
      c && c.isConnected && (d.disconnect(), s(c));
    });
    d.observe(a.body, { childList: true, subtree: true });
  }), i, r);
}
var Sb = (...e) => e.map((t) => {
  var _a5;
  return (_a5 = t == null ? void 0 : t.trim) == null ? void 0 : _a5.call(t);
}).filter(Boolean).join(" ");
var Eb = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var dc = (e) => {
  let t = {}, r;
  for (; r = Eb.exec(e); ) t[r[1]] = r[2];
  return t;
};
var Cb = (e, t) => {
  if (yn(e)) {
    if (yn(t)) return `${e};${t}`;
    e = dc(e);
  } else yn(t) && (t = dc(t));
  return Object.assign({}, e ?? {}, t ?? {});
};
function hp(...e) {
  let t = {};
  for (let r of e) {
    for (let n in t) {
      if (n.startsWith("on") && typeof t[n] == "function" && typeof r[n] == "function") {
        t[n] = Pa(r[n], t[n]);
        continue;
      }
      if (n === "className" || n === "class") {
        t[n] = Sb(t[n], r[n]);
        continue;
      }
      if (n === "style") {
        t[n] = Cb(t[n], r[n]);
        continue;
      }
      t[n] = r[n] !== void 0 ? r[n] : t[n];
    }
    for (let n in r) t[n] === void 0 && (t[n] = r[n]);
  }
  return t;
}
function bs(e, t, r) {
  let n = [], o;
  return (a) => {
    var _a5;
    let i = e(a);
    return (i.length !== n.length || i.some((s, l) => !_o(n[l], s))) && (n = i, o = t(...i), (_a5 = r == null ? void 0 : r.onChange) == null ? void 0 : _a5.call(r, o)), o;
  };
}
function nl() {
  return { and: (...e) => function(t) {
    return e.every((r) => t.guard(r));
  }, or: (...e) => function(t) {
    return e.some((r) => t.guard(r));
  }, not: (e) => function(t) {
    return !t.guard(e);
  } };
}
function Fb() {
  return { guards: nl(), createMachine: (e) => e, choose: (e) => function({ choose: t }) {
    var _a5;
    return (_a5 = t(e)) == null ? void 0 : _a5.actions;
  } };
}
var ln = ((e) => (e.NotStarted = "Not Started", e.Started = "Started", e.Stopped = "Stopped", e))(ln || {});
var Pi = "__init__";
function Pb(e) {
  let t = () => {
    var _a5;
    return ((_a5 = e.getRootNode) == null ? void 0 : _a5.call(e)) ?? document;
  }, r = () => Ft(t()), n = () => r().defaultView ?? window, o = () => np(t());
  return { ...e, getRootNode: t, getDoc: r, getWin: n, getActiveElement: o, isActiveElement: (a) => a === o(), getById: (a) => t().getElementById(a) };
}
function _b(e) {
  return new Proxy({}, { get(t, r) {
    return r === "style" ? (n) => e({ style: n }).style : e;
  } });
}
var yt = () => (e) => Array.from(new Set(e));
function Ia(e) {
  let t = e().value ?? e().defaultValue, r = e().isEqual ?? Object.is, [n, o] = M(t), a = te(() => e().value != null), i = { current: n() }, s = { current: void 0 };
  Ce(() => {
    let c = a() ? e().value : n();
    s.current = c, i.current = c;
  });
  let l = (c) => {
    var _a5, _b2;
    let u = s.current, p = It(c) ? c(i.current) : c;
    e().debug && console.log(`[bindable > ${e().debug}] setValue`, { next: p, prev: u }), a() || o(p), r(p, u) || ((_b2 = (_a5 = e()).onChange) == null ? void 0 : _b2.call(_a5, p, u));
  };
  function d() {
    let c = a() ? e().value : n;
    return It(c) ? c() : c;
  }
  return { initial: t, ref: i, get: d, set: l, invoke(c, u) {
    var _a5, _b2;
    (_b2 = (_a5 = e()).onChange) == null ? void 0 : _b2.call(_a5, c, u);
  }, hash(c) {
    var _a5, _b2;
    return ((_b2 = (_a5 = e()).hash) == null ? void 0 : _b2.call(_a5, c)) ?? String(c);
  } };
}
Ia.cleanup = (e) => {
  ue(() => e());
};
Ia.ref = (e) => {
  let t = e;
  return { get: () => t, set: (r) => {
    t = r;
  } };
};
function Ib(e) {
  let t = { current: e };
  return { get(r) {
    return t.current[r];
  }, set(r, n) {
    t.current[r] = n;
  } };
}
function _i(e) {
  return It(e) ? e() : e;
}
var Ob = (e, t) => {
  let r = [], n = true;
  Ce(() => {
    if (n) {
      r = e.map((a) => _i(a)), n = false;
      return;
    }
    let o = false;
    for (let a = 0; a < e.length; a++) if (!_o(r[a], _i(e[a]))) {
      o = true;
      break;
    }
    o && (r = e.map((a) => _i(a)), t());
  });
};
function fr(e, t = {}) {
  var _a5, _b2, _c2;
  let r = te(() => {
    let { id: x, ids: C, getRootNode: R } = Ii(t);
    return Pb({ id: x, ids: C, getRootNode: R });
  }), n = (...x) => {
    e.debug && console.log(...x);
  }, o = te(() => {
    var _a6;
    return ((_a6 = e.props) == null ? void 0 : _a6.call(e, { props: Za(Ii(t)), scope: r() })) ?? Ii(t);
  }), a = Ab(o), i = (_a5 = e.context) == null ? void 0 : _a5.call(e, { prop: a, bindable: Ia, get scope() {
    return r();
  }, flush: uc, getContext() {
    return s;
  }, getComputed() {
    return b;
  }, getRefs() {
    return m;
  }, getEvent() {
    return p();
  } }), s = { get(x) {
    return i == null ? void 0 : i[x].get();
  }, set(x, C) {
    i == null ? void 0 : i[x].set(C);
  }, initial(x) {
    return i == null ? void 0 : i[x].initial;
  }, hash(x) {
    let C = i == null ? void 0 : i[x].get();
    return i == null ? void 0 : i[x].hash(C);
  } }, l = { current: /* @__PURE__ */ new Map() }, d = { current: null }, c = { current: null }, u = { current: { type: "" } }, p = () => he(u.current, { current() {
    return u.current;
  }, previous() {
    return c.current;
  } }), g = () => he(S, { matches(...x) {
    let C = S.get();
    return x.includes(C);
  }, hasTag(x) {
    var _a6, _b3;
    let C = S.get();
    return !!((_b3 = (_a6 = e.states[C]) == null ? void 0 : _a6.tags) == null ? void 0 : _b3.includes(x));
  } }), m = Ib(((_b2 = e.refs) == null ? void 0 : _b2.call(e, { prop: a, context: s })) ?? {}), f = () => ({ state: g(), context: s, event: p(), prop: a, send: I, action: v, guard: w, track: Ob, refs: m, computed: b, flush: uc, get scope() {
    return r();
  }, choose: T }), v = (x) => {
    let C = It(x) ? x(f()) : x;
    if (!C) return;
    let R = C.map((D) => {
      var _a6, _b3;
      let N = (_b3 = (_a6 = e.implementations) == null ? void 0 : _a6.actions) == null ? void 0 : _b3[D];
      return N || co(`[zag-js] No implementation found for action "${JSON.stringify(D)}"`), N;
    });
    for (let D of R) D == null ? void 0 : D(f());
  }, w = (x) => {
    var _a6, _b3;
    return It(x) ? x(f()) : (_b3 = (_a6 = e.implementations) == null ? void 0 : _a6.guards) == null ? void 0 : _b3[x](f());
  }, y = (x) => {
    let C = It(x) ? x(f()) : x;
    if (!C) return;
    let R = C.map((N) => {
      var _a6, _b3;
      let K = (_b3 = (_a6 = e.implementations) == null ? void 0 : _a6.effects) == null ? void 0 : _b3[N];
      return K || co(`[zag-js] No implementation found for effect "${JSON.stringify(N)}"`), K;
    }), D = [];
    for (let N of R) {
      let K = N == null ? void 0 : N(f());
      K && D.push(K);
    }
    return () => D.forEach((N) => N == null ? void 0 : N());
  }, T = (x) => Af(x).find((C) => {
    let R = !C.guard;
    return yn(C.guard) ? R = !!w(C.guard) : It(C.guard) && (R = C.guard(f())), R;
  }), b = (x) => {
    dm(e.computed, () => "[zag-js] No computed object found on machine");
    let C = e.computed[x];
    return C({ context: s, event: u.current, prop: a, refs: m, scope: r(), computed: b });
  }, S = Ia(() => ({ defaultValue: e.initialState({ prop: a }), onChange(x, C) {
    var _a6, _b3, _c3, _d2, _e2;
    C && ((_a6 = l.current.get(C)) == null ? void 0 : _a6(), l.current.delete(C)), C && v((_b3 = e.states[C]) == null ? void 0 : _b3.exit), v((_c3 = d.current) == null ? void 0 : _c3.actions);
    let R = y((_d2 = e.states[x]) == null ? void 0 : _d2.effects);
    if (R && l.current.set(x, R), C === Pi) {
      v(e.entry);
      let D = y(e.effects);
      D && l.current.set(Pi, D);
    }
    v((_e2 = e.states[x]) == null ? void 0 : _e2.entry);
  } })), _ = ln.NotStarted;
  ve(() => {
    let x = _ === ln.Started;
    _ = ln.Started, n(x ? "rehydrating..." : "initializing..."), S.invoke(S.initial, Pi);
  }), ue(() => {
    n("unmounting..."), _ = ln.Stopped, l.current.forEach((x) => x == null ? void 0 : x()), l.current = /* @__PURE__ */ new Map(), d.current = null, v(e.exit);
  });
  let I = (x) => {
    var _a6, _b3;
    if (_ !== ln.Started) return;
    c.current = u.current, u.current = x;
    let C = S.get(), R = ((_a6 = e.states[C].on) == null ? void 0 : _a6[x.type]) ?? ((_b3 = e.on) == null ? void 0 : _b3[x.type]), D = T(R);
    if (!D) return;
    d.current = D;
    let N = D.target ?? C;
    n("transition", x.type, D.target || C, `(${D.actions})`);
    let K = N !== C;
    K ? S.set(N) : D.reenter && !K ? S.invoke(C, C) : v(D.actions);
  };
  return (_c2 = e.watch) == null ? void 0 : _c2.call(e, f()), { state: g(), send: I, context: s, prop: a, get scope() {
    return r();
  }, refs: m, computed: b, event: p(), getStatus: () => _ };
}
function uc(e) {
  e();
}
function Ii(e) {
  return It(e) ? e() : e;
}
function Ab(e) {
  return function(t) {
    return e()[t];
  };
}
function U(...e) {
  let t = {};
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (typeof n == "function" && (n = n()), n) {
      let o = Object.getOwnPropertyDescriptors(n);
      for (let a in o) a in t || Object.defineProperty(t, a, { enumerable: true, get() {
        let i = {};
        if (a === "style" || a === "class" || a === "className" || a.startsWith("on")) {
          for (let s = 0; s < e.length; s++) {
            let l = e[s];
            typeof l == "function" && (l = l()), i = hp(i, { [a]: (l || {})[a] });
          }
          return i[a];
        }
        for (let s = e.length - 1; s >= 0; s--) {
          let l, d = e[s];
          if (typeof d == "function" && (d = d()), l = (d || {})[a], l !== void 0) return l;
        }
      } });
    }
  }
  return t;
}
var pc = { onFocus: "onFocusIn", onBlur: "onFocusOut", onDoubleClick: "onDblClick", onChange: "onInput", defaultChecked: "checked", defaultValue: "value", htmlFor: "for", className: "class" };
var Rb = (e) => e.startsWith("--") ? e : Bb(e);
function Nb(e) {
  return e in pc ? pc[e] : e;
}
var mr = _b((e) => {
  let t = {};
  for (let r in e) {
    let n = e[r];
    if (!(r === "readOnly" && n === false)) {
      if (r === "style" && Ku(n)) {
        t.style = Db(n);
        continue;
      }
      if (r === "children") {
        yn(n) && (t.textContent = n);
        continue;
      }
      t[Nb(r)] = n;
    }
  }
  return t;
});
function Db(e) {
  let t = {};
  for (let r in e) {
    let n = e[r];
    !yn(n) && !Zs(n) || (t[Rb(r)] = n);
  }
  return t;
}
var Lb = /[A-Z]/g;
var Mb = /^ms-/;
function Ub(e) {
  return "-" + e.toLowerCase();
}
var Oi = {};
function Bb(e) {
  if (Oi.hasOwnProperty(e)) return Oi[e];
  var t = e.replace(Lb, Ub);
  return Oi[e] = Mb.test(t) ? "-" + t : t;
}
var Ai = (e) => (t) => {
  let [r, n] = ct(t, ["asChild"]);
  if (r.asChild) {
    let o = (a) => {
      let [, i] = ct(n, ["ref"]);
      return U(i, a);
    };
    return r.asChild(o);
  }
  return h(Sf, he({ component: e }, n));
};
function $b() {
  let e = /* @__PURE__ */ new Map();
  return new Proxy(Ai, { apply(t, r, n) {
    return Ai(n[0]);
  }, get(t, r) {
    let n = r;
    return e.has(n) || e.set(n, Ai(n)), e.get(n);
  } });
}
var V = $b();
function zb(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ve(e = {}) {
  let { strict: t = true, hookName: r = "useContext", providerName: n = "Provider", errorMessage: o, defaultValue: a } = e, i = Gs(a);
  function s() {
    var _a5;
    let l = Ka(i);
    if (!l && t) {
      let d = new Error(o ?? zb(r, n));
      throw d.name = "ContextError", (_a5 = Error.captureStackTrace) == null ? void 0 : _a5.call(Error, d, s), d;
    }
    return l;
  }
  return [i.Provider, s, i];
}
var jb = (e) => typeof e == "function";
var br = (e, ...t) => jb(e) ? e(...t) : e;
var [Vb, Zt] = Ve({ hookName: "useEnvironmentContext", providerName: "<EnvironmentProvider />", strict: false, defaultValue: () => ({ getRootNode: () => document, getDocument: () => document, getWindow: () => window }) });
var Hb = P("<span hidden>");
var ol = (e) => {
  let [t, r] = M(), n = () => {
    var _a5;
    return br(e.value) ?? ((_a5 = t()) == null ? void 0 : _a5.getRootNode()) ?? document;
  }, o = te(() => ({ getRootNode: n, getDocument: () => Ft(n()), getWindow: () => dt(n()) }));
  return h(Vb, { value: o, get children() {
    return [ae(() => e.children), h(Y, { get when() {
      return !e.value;
    }, get children() {
      var a = Hb();
      return Fe(r, a), a;
    } })];
  } });
};
var [Q_, En] = Ve({ hookName: "useEnvironmentContext", providerName: "<EnvironmentProvider />", strict: false, defaultValue: () => ({ dir: "ltr", locale: "en-US" }) });
var Gb = Object.defineProperty;
var yr = (e, t) => {
  for (var r in t) Gb(e, r, { get: t[r], enumerable: true });
};
var gt = (e, t = []) => ({ parts: (...r) => {
  if (Wb(t)) return gt(e, r);
  throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
}, extendWith: (...r) => gt(e, [...t, ...r]), omit: (...r) => gt(e, t.filter((n) => !r.includes(n))), rename: (r) => gt(r, t), keys: () => t, build: () => [...new Set(t)].reduce((r, n) => Object.assign(r, { [n]: { selector: [`&[data-scope="${en(e)}"][data-part="${en(n)}"]`, `& [data-scope="${en(e)}"][data-part="${en(n)}"]`].join(", "), attrs: { "data-scope": en(e), "data-part": en(n) } } }), {}) });
var en = (e) => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
var Wb = (e) => e.length === 0;
var qb = (e) => typeof e == "function";
var gc = (e, t) => {
  for (let r of e) qb(r) && r(t);
};
function Oo(...e) {
  let t = null;
  return Ce(() => {
    gc(e, t);
  }), (r) => {
    t = r, gc(e, r);
  };
}
var [fp, Yb] = Ve({ hookName: "useRenderStrategyContext", providerName: "<RenderStrategyProvider />" });
var al = (e) => Ie()(e, ["lazyMount", "unmountOnExit"]);
function Kb(e, t) {
  let { state: r, send: n, context: o } = e, a = r.matches("mounted", "unmountSuspended");
  return { skip: !o.get("initial"), present: a, setNode(i) {
    i && n({ type: "NODE.SET", node: i });
  }, unmount() {
    n({ type: "UNMOUNT" });
  } };
}
var Xb = { props({ props: e }) {
  return { ...e, present: !!e.present };
}, initialState({ prop: e }) {
  return e("present") ? "mounted" : "unmounted";
}, refs() {
  return { node: null, styles: null };
}, context({ bindable: e }) {
  return { unmountAnimationName: e(() => ({ defaultValue: null })), prevAnimationName: e(() => ({ defaultValue: null })), present: e(() => ({ defaultValue: false })), initial: e(() => ({ sync: true, defaultValue: false })) };
}, exit: ["clearInitial", "cleanupNode"], watch({ track: e, prop: t, send: r }) {
  e([() => t("present")], () => {
    r({ type: "PRESENCE.CHANGED" });
  });
}, on: { "NODE.SET": { actions: ["setupNode"] }, "PRESENCE.CHANGED": { actions: ["setInitial", "syncPresence"] } }, states: { mounted: { on: { UNMOUNT: { target: "unmounted", actions: ["clearPrevAnimationName", "invokeOnExitComplete"] }, "UNMOUNT.SUSPEND": { target: "unmountSuspended" } } }, unmountSuspended: { effects: ["trackAnimationEvents"], on: { MOUNT: { target: "mounted", actions: ["setPrevAnimationName"] }, UNMOUNT: { target: "unmounted", actions: ["clearPrevAnimationName", "invokeOnExitComplete"] } } }, unmounted: { on: { MOUNT: { target: "mounted", actions: ["setPrevAnimationName"] } } } }, implementations: { actions: { setInitial: ({ context: e }) => {
  e.get("initial") || queueMicrotask(() => {
    e.set("initial", true);
  });
}, clearInitial: ({ context: e }) => {
  e.set("initial", false);
}, invokeOnExitComplete: ({ prop: e }) => {
  var _a5;
  (_a5 = e("onExitComplete")) == null ? void 0 : _a5();
}, setupNode: ({ refs: e, event: t }) => {
  e.get("node") !== t.node && (e.set("node", t.node), e.set("styles", Sn(t.node)));
}, cleanupNode: ({ refs: e }) => {
  e.set("node", null), e.set("styles", null);
}, syncPresence: ({ context: e, refs: t, send: r, prop: n }) => {
  let o = n("present");
  if (o) return r({ type: "MOUNT", src: "presence.changed" });
  let a = t.get("node");
  if (!o && (a == null ? void 0 : a.ownerDocument.visibilityState) === "hidden") return r({ type: "UNMOUNT", src: "visibilitychange" });
  xe(() => {
    var _a5, _b2;
    let i = Ko(t.get("styles"));
    e.set("unmountAnimationName", i), i === "none" || i === e.get("prevAnimationName") || ((_a5 = t.get("styles")) == null ? void 0 : _a5.display) === "none" || ((_b2 = t.get("styles")) == null ? void 0 : _b2.animationDuration) === "0s" ? r({ type: "UNMOUNT", src: "presence.changed" }) : r({ type: "UNMOUNT.SUSPEND" });
  });
}, setPrevAnimationName: ({ context: e, refs: t }) => {
  xe(() => {
    e.set("prevAnimationName", Ko(t.get("styles")));
  });
}, clearPrevAnimationName: ({ context: e }) => {
  e.set("prevAnimationName", null);
} }, effects: { trackAnimationEvents: ({ context: e, refs: t, send: r }) => {
  let n = t.get("node");
  if (!n) return;
  let o = (s) => {
    var _a5, _b2;
    (((_b2 = (_a5 = s.composedPath) == null ? void 0 : _a5.call(s)) == null ? void 0 : _b2[0]) ?? s.target) === n && e.set("prevAnimationName", Ko(t.get("styles")));
  }, a = (s) => {
    let l = Ko(t.get("styles"));
    tt(s) === n && l === e.get("unmountAnimationName") && r({ type: "UNMOUNT", src: "animationend" });
  };
  n.addEventListener("animationstart", o), n.addEventListener("animationcancel", a), n.addEventListener("animationend", a);
  let i = _a(n, { animationFillMode: "forwards" });
  return () => {
    n.removeEventListener("animationstart", o), n.removeEventListener("animationcancel", a), n.removeEventListener("animationend", a), cp(() => i());
  };
} } } };
function Ko(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
var eI = yt()(["onExitComplete", "present", "immediate"]);
var ri = (e) => Ie()(e, ["immediate", "lazyMount", "onExitComplete", "present", "skipAnimationOnMount", "unmountOnExit"]);
var Ao = (e) => {
  let [t, r] = al(br(e)), [n, o] = M(false), a = fr(Xb, e), i = te(() => Kb(a, mr));
  return Ce(() => {
    i().present && o(true);
  }), te(() => ({ unmounted: !i().present && !n() && t.lazyMount || t.unmountOnExit && !i().present && n(), present: i().present, ref: i().setNode, presenceProps: { hidden: !i().present, "data-state": i().skip && r.skipAnimationOnMount ? void 0 : r.present ? "open" : "closed" } }));
};
var [ni, Cn] = Ve({ hookName: "usePresenceContext", providerName: "<PresenceProvider />" });
var Zb = ["top", "right", "bottom", "left"];
var pr = Math.min;
var it = Math.max;
var Oa = Math.round;
var Xo = Math.floor;
var Rt = (e) => ({ x: e, y: e });
var Jb = { left: "right", right: "left", bottom: "top", top: "bottom" };
var Qb = { start: "end", end: "start" };
function ys(e, t, r) {
  return it(e, pr(t, r));
}
function Kt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function Fn(e) {
  return e.split("-")[1];
}
function il(e) {
  return e === "x" ? "y" : "x";
}
function sl(e) {
  return e === "y" ? "height" : "width";
}
var ey = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ot(e) {
  return ey.has(Xt(e)) ? "y" : "x";
}
function ll(e) {
  return il(Ot(e));
}
function ty(e, t, r) {
  r === void 0 && (r = false);
  let n = Fn(e), o = ll(e), a = sl(o), i = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Aa(i)), [i, Aa(i)];
}
function ry(e) {
  let t = Aa(e);
  return [vs(e), t, vs(t)];
}
function vs(e) {
  return e.replace(/start|end/g, (t) => Qb[t]);
}
var hc = ["left", "right"];
var fc = ["right", "left"];
var ny = ["top", "bottom"];
var oy = ["bottom", "top"];
function ay(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? fc : hc : t ? hc : fc;
    case "left":
    case "right":
      return t ? ny : oy;
    default:
      return [];
  }
}
function iy(e, t, r, n) {
  let o = Fn(e), a = ay(Xt(e), r === "start", n);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(vs)))), a;
}
function Aa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Jb[t]);
}
function sy(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function mp(e) {
  return typeof e != "number" ? sy(e) : { top: e, right: e, bottom: e, left: e };
}
function Ra(e) {
  let { x: t, y: r, width: n, height: o } = e;
  return { width: n, height: o, top: r, left: t, right: t + n, bottom: r + o, x: t, y: r };
}
function mc(e, t, r) {
  let { reference: n, floating: o } = e, a = Ot(t), i = ll(t), s = sl(i), l = Xt(t), d = a === "y", c = n.x + n.width / 2 - o.width / 2, u = n.y + n.height / 2 - o.height / 2, p = n[s] / 2 - o[s] / 2, g;
  switch (l) {
    case "top":
      g = { x: c, y: n.y - o.height };
      break;
    case "bottom":
      g = { x: c, y: n.y + n.height };
      break;
    case "right":
      g = { x: n.x + n.width, y: u };
      break;
    case "left":
      g = { x: n.x - o.width, y: u };
      break;
    default:
      g = { x: n.x, y: n.y };
  }
  switch (Fn(t)) {
    case "start":
      g[i] -= p * (r && d ? -1 : 1);
      break;
    case "end":
      g[i] += p * (r && d ? -1 : 1);
      break;
  }
  return g;
}
var ly = async (e, t, r) => {
  let { placement: n = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = r, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t)), d = await i.getElementRects({ reference: e, floating: t, strategy: o }), { x: c, y: u } = mc(d, n, l), p = n, g = {}, m = 0;
  for (let f = 0; f < s.length; f++) {
    let { name: v, fn: w } = s[f], { x: y, y: T, data: b, reset: S } = await w({ x: c, y: u, initialPlacement: n, placement: p, strategy: o, middlewareData: g, rects: d, platform: i, elements: { reference: e, floating: t } });
    c = y ?? c, u = T ?? u, g = { ...g, [v]: { ...g[v], ...b } }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (d = S.rects === true ? await i.getElementRects({ reference: e, floating: t, strategy: o }) : S.rects), { x: c, y: u } = mc(d, p, l)), f = -1);
  }
  return { x: c, y: u, placement: p, strategy: o, middlewareData: g };
};
async function go(e, t) {
  var r;
  t === void 0 && (t = {});
  let { x: n, y: o, platform: a, rects: i, elements: s, strategy: l } = e, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: p = false, padding: g = 0 } = Kt(t, e), m = mp(g), f = s[p ? u === "floating" ? "reference" : "floating" : u], v = Ra(await a.getClippingRect({ element: (r = await (a.isElement == null ? void 0 : a.isElement(f))) == null || r ? f : f.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: d, rootBoundary: c, strategy: l })), w = u === "floating" ? { x: n, y: o, width: i.floating.width, height: i.floating.height } : i.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), T = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, b = Ra(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: w, offsetParent: y, strategy: l }) : w);
  return { top: (v.top - b.top + m.top) / T.y, bottom: (b.bottom - v.bottom + m.bottom) / T.y, left: (v.left - b.left + m.left) / T.x, right: (b.right - v.right + m.right) / T.x };
}
var cy = (e) => ({ name: "arrow", options: e, async fn(t) {
  let { x: r, y: n, placement: o, rects: a, platform: i, elements: s, middlewareData: l } = t, { element: d, padding: c = 0 } = Kt(e, t) || {};
  if (d == null) return {};
  let u = mp(c), p = { x: r, y: n }, g = ll(o), m = sl(g), f = await i.getDimensions(d), v = g === "y", w = v ? "top" : "left", y = v ? "bottom" : "right", T = v ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[g] - p[g] - a.floating[m], S = p[g] - a.reference[g], _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d)), I = _ ? _[T] : 0;
  (!I || !await (i.isElement == null ? void 0 : i.isElement(_))) && (I = s.floating[T] || a.floating[m]);
  let x = b / 2 - S / 2, C = I / 2 - f[m] / 2 - 1, R = pr(u[w], C), D = pr(u[y], C), N = R, K = I - f[m] - D, F = I / 2 - f[m] / 2 + x, A = ys(N, F, K), L = !l.arrow && Fn(o) != null && F !== A && a.reference[m] / 2 - (F < N ? R : D) - f[m] / 2 < 0, X = L ? F < N ? F - N : F - K : 0;
  return { [g]: p[g] + X, data: { [g]: A, centerOffset: F - A - X, ...L && { alignmentOffset: X } }, reset: L };
} });
var dy = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r, n;
    let { placement: o, middlewareData: a, rects: i, initialPlacement: s, platform: l, elements: d } = t, { mainAxis: c = true, crossAxis: u = true, fallbackPlacements: p, fallbackStrategy: g = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: f = true, ...v } = Kt(e, t);
    if ((r = a.arrow) != null && r.alignmentOffset) return {};
    let w = Xt(o), y = Ot(s), T = Xt(s) === s, b = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), S = p || (T || !f ? [Aa(s)] : ry(s)), _ = m !== "none";
    !p && _ && S.push(...iy(s, f, m, b));
    let I = [s, ...S], x = await go(t, v), C = [], R = ((n = a.flip) == null ? void 0 : n.overflows) || [];
    if (c && C.push(x[w]), u) {
      let F = ty(o, i, b);
      C.push(x[F[0]], x[F[1]]);
    }
    if (R = [...R, { placement: o, overflows: C }], !C.every((F) => F <= 0)) {
      var D, N;
      let F = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1, A = I[F];
      if (A && (!(u === "alignment" && y !== Ot(A)) || R.every((X) => Ot(X.placement) === y ? X.overflows[0] > 0 : true))) return { data: { index: F, overflows: R }, reset: { placement: A } };
      let L = (N = R.filter((X) => X.overflows[0] <= 0).sort((X, O) => X.overflows[1] - O.overflows[1])[0]) == null ? void 0 : N.placement;
      if (!L) switch (g) {
        case "bestFit": {
          var K;
          let X = (K = R.filter((O) => {
            if (_) {
              let pe = Ot(O.placement);
              return pe === y || pe === "y";
            }
            return true;
          }).map((O) => [O.placement, O.overflows.filter((pe) => pe > 0).reduce((pe, Ae) => pe + Ae, 0)]).sort((O, pe) => O[1] - pe[1])[0]) == null ? void 0 : K[0];
          X && (L = X);
          break;
        }
        case "initialPlacement":
          L = s;
          break;
      }
      if (o !== L) return { reset: { placement: L } };
    }
    return {};
  } };
};
function bc(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function yc(e) {
  return Zb.some((t) => e[t] >= 0);
}
var uy = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    let { rects: r } = t, { strategy: n = "referenceHidden", ...o } = Kt(e, t);
    switch (n) {
      case "referenceHidden": {
        let a = await go(t, { ...o, elementContext: "reference" }), i = bc(a, r.reference);
        return { data: { referenceHiddenOffsets: i, referenceHidden: yc(i) } };
      }
      case "escaped": {
        let a = await go(t, { ...o, altBoundary: true }), i = bc(a, r.floating);
        return { data: { escapedOffsets: i, escaped: yc(i) } };
      }
      default:
        return {};
    }
  } };
};
var bp = /* @__PURE__ */ new Set(["left", "top"]);
async function py(e, t) {
  let { placement: r, platform: n, elements: o } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), i = Xt(r), s = Fn(r), l = Ot(r) === "y", d = bp.has(i) ? -1 : 1, c = a && l ? -1 : 1, u = Kt(t, e), { mainAxis: p, crossAxis: g, alignmentAxis: m } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return s && typeof m == "number" && (g = s === "end" ? m * -1 : m), l ? { x: g * c, y: p * d } : { x: p * d, y: g * c };
}
var gy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var r, n;
    let { x: o, y: a, placement: i, middlewareData: s } = t, l = await py(t, e);
    return i === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : { x: o + l.x, y: a + l.y, data: { ...l, placement: i } };
  } };
};
var hy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    let { x: r, y: n, placement: o } = t, { mainAxis: a = true, crossAxis: i = false, limiter: s = { fn: (v) => {
      let { x: w, y } = v;
      return { x: w, y };
    } }, ...l } = Kt(e, t), d = { x: r, y: n }, c = await go(t, l), u = Ot(Xt(o)), p = il(u), g = d[p], m = d[u];
    if (a) {
      let v = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", y = g + c[v], T = g - c[w];
      g = ys(y, g, T);
    }
    if (i) {
      let v = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", y = m + c[v], T = m - c[w];
      m = ys(y, m, T);
    }
    let f = s.fn({ ...t, [p]: g, [u]: m });
    return { ...f, data: { x: f.x - r, y: f.y - n, enabled: { [p]: a, [u]: i } } };
  } };
};
var fy = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    let { x: r, y: n, placement: o, rects: a, middlewareData: i } = t, { offset: s = 0, mainAxis: l = true, crossAxis: d = true } = Kt(e, t), c = { x: r, y: n }, u = Ot(o), p = il(u), g = c[p], m = c[u], f = Kt(s, t), v = typeof f == "number" ? { mainAxis: f, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...f };
    if (l) {
      let T = p === "y" ? "height" : "width", b = a.reference[p] - a.floating[T] + v.mainAxis, S = a.reference[p] + a.reference[T] - v.mainAxis;
      g < b ? g = b : g > S && (g = S);
    }
    if (d) {
      var w, y;
      let T = p === "y" ? "width" : "height", b = bp.has(Xt(o)), S = a.reference[u] - a.floating[T] + (b && ((w = i.offset) == null ? void 0 : w[u]) || 0) + (b ? 0 : v.crossAxis), _ = a.reference[u] + a.reference[T] + (b ? 0 : ((y = i.offset) == null ? void 0 : y[u]) || 0) - (b ? v.crossAxis : 0);
      m < S ? m = S : m > _ && (m = _);
    }
    return { [p]: g, [u]: m };
  } };
};
var my = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    var r, n;
    let { placement: o, rects: a, platform: i, elements: s } = t, { apply: l = () => {
    }, ...d } = Kt(e, t), c = await go(t, d), u = Xt(o), p = Fn(o), g = Ot(o) === "y", { width: m, height: f } = a.floating, v, w;
    u === "top" || u === "bottom" ? (v = u, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = u, v = p === "end" ? "top" : "bottom");
    let y = f - c.top - c.bottom, T = m - c.left - c.right, b = pr(f - c[v], y), S = pr(m - c[w], T), _ = !t.middlewareData.shift, I = b, x = S;
    if ((r = t.middlewareData.shift) != null && r.enabled.x && (x = T), (n = t.middlewareData.shift) != null && n.enabled.y && (I = y), _ && !p) {
      let R = it(c.left, 0), D = it(c.right, 0), N = it(c.top, 0), K = it(c.bottom, 0);
      g ? x = m - 2 * (R !== 0 || D !== 0 ? R + D : it(c.left, c.right)) : I = f - 2 * (N !== 0 || K !== 0 ? N + K : it(c.top, c.bottom));
    }
    await l({ ...t, availableWidth: x, availableHeight: I });
    let C = await i.getDimensions(s.floating);
    return m !== C.width || f !== C.height ? { reset: { rects: true } } : {};
  } };
};
function oi() {
  return typeof window < "u";
}
function Pn(e) {
  return yp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lt(e) {
  var t;
  return (t = (yp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yp(e) {
  return oi() ? e instanceof Node || e instanceof st(e).Node : false;
}
function kt(e) {
  return oi() ? e instanceof Element || e instanceof st(e).Element : false;
}
function Dt(e) {
  return oi() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : false;
}
function vc(e) {
  return !oi() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
var by = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ro(e) {
  let { overflow: t, overflowX: r, overflowY: n, display: o } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !by.has(o);
}
var yy = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vy(e) {
  return yy.has(Pn(e));
}
var wy = [":popover-open", ":modal"];
function ai(e) {
  return wy.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
var xy = ["transform", "translate", "scale", "rotate", "perspective"];
var ky = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
var Ty = ["paint", "layout", "strict", "content"];
function cl(e) {
  let t = dl(), r = kt(e) ? Tt(e) : e;
  return xy.some((n) => r[n] ? r[n] !== "none" : false) || (r.containerType ? r.containerType !== "normal" : false) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : false) || !t && (r.filter ? r.filter !== "none" : false) || ky.some((n) => (r.willChange || "").includes(n)) || Ty.some((n) => (r.contain || "").includes(n));
}
function Sy(e) {
  let t = gr(e);
  for (; Dt(t) && !Tn(t); ) {
    if (cl(t)) return t;
    if (ai(t)) return null;
    t = gr(t);
  }
  return null;
}
function dl() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
var Ey = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Tn(e) {
  return Ey.has(Pn(e));
}
function Tt(e) {
  return st(e).getComputedStyle(e);
}
function ii(e) {
  return kt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function gr(e) {
  if (Pn(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || vc(e) && e.host || Lt(e);
  return vc(t) ? t.host : t;
}
function vp(e) {
  let t = gr(e);
  return Tn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dt(t) && Ro(t) ? t : vp(t);
}
function ho(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = true);
  let o = vp(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = st(o);
  if (a) {
    let s = ws(i);
    return t.concat(i, i.visualViewport || [], Ro(o) ? o : [], s && r ? ho(s) : []);
  }
  return t.concat(o, ho(o, [], r));
}
function ws(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wp(e) {
  let t = Tt(e), r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0, o = Dt(e), a = o ? e.offsetWidth : r, i = o ? e.offsetHeight : n, s = Oa(r) !== a || Oa(n) !== i;
  return s && (r = a, n = i), { width: r, height: n, $: s };
}
function ul(e) {
  return kt(e) ? e : e.contextElement;
}
function vn(e) {
  let t = ul(e);
  if (!Dt(t)) return Rt(1);
  let r = t.getBoundingClientRect(), { width: n, height: o, $: a } = wp(t), i = (a ? Oa(r.width) : r.width) / n, s = (a ? Oa(r.height) : r.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: i, y: s };
}
var Cy = Rt(0);
function xp(e) {
  let t = st(e);
  return !dl() || !t.visualViewport ? Cy : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Fy(e, t, r) {
  return t === void 0 && (t = false), !r || t && r !== st(e) ? false : t;
}
function Br(e, t, r, n) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  let o = e.getBoundingClientRect(), a = ul(e), i = Rt(1);
  t && (n ? kt(n) && (i = vn(n)) : i = vn(e));
  let s = Fy(a, r, n) ? xp(a) : Rt(0), l = (o.left + s.x) / i.x, d = (o.top + s.y) / i.y, c = o.width / i.x, u = o.height / i.y;
  if (a) {
    let p = st(a), g = n && kt(n) ? st(n) : n, m = p, f = ws(m);
    for (; f && n && g !== m; ) {
      let v = vn(f), w = f.getBoundingClientRect(), y = Tt(f), T = w.left + (f.clientLeft + parseFloat(y.paddingLeft)) * v.x, b = w.top + (f.clientTop + parseFloat(y.paddingTop)) * v.y;
      l *= v.x, d *= v.y, c *= v.x, u *= v.y, l += T, d += b, m = st(f), f = ws(m);
    }
  }
  return Ra({ width: c, height: u, x: l, y: d });
}
function pl(e, t) {
  let r = ii(e).scrollLeft;
  return t ? t.left + r : Br(Lt(e)).left + r;
}
function kp(e, t, r) {
  r === void 0 && (r = false);
  let n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : pl(e, n)), a = n.top + t.scrollTop;
  return { x: o, y: a };
}
function Py(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: o } = e, a = o === "fixed", i = Lt(n), s = t ? ai(t.floating) : false;
  if (n === i || s && a) return r;
  let l = { scrollLeft: 0, scrollTop: 0 }, d = Rt(1), c = Rt(0), u = Dt(n);
  if ((u || !u && !a) && ((Pn(n) !== "body" || Ro(i)) && (l = ii(n)), Dt(n))) {
    let g = Br(n);
    d = vn(n), c.x = g.x + n.clientLeft, c.y = g.y + n.clientTop;
  }
  let p = i && !u && !a ? kp(i, l, true) : Rt(0);
  return { width: r.width * d.x, height: r.height * d.y, x: r.x * d.x - l.scrollLeft * d.x + c.x + p.x, y: r.y * d.y - l.scrollTop * d.y + c.y + p.y };
}
function _y(e) {
  return Array.from(e.getClientRects());
}
function Iy(e) {
  let t = Lt(e), r = ii(e), n = e.ownerDocument.body, o = it(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = it(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight), i = -r.scrollLeft + pl(e), s = -r.scrollTop;
  return Tt(n).direction === "rtl" && (i += it(t.clientWidth, n.clientWidth) - o), { width: o, height: a, x: i, y: s };
}
function Oy(e, t) {
  let r = st(e), n = Lt(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    let d = dl();
    (!d || d && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: i, x: s, y: l };
}
var Ay = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ry(e, t) {
  let r = Br(e, true, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, a = Dt(e) ? vn(e) : Rt(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, d = n * a.y;
  return { width: i, height: s, x: l, y: d };
}
function wc(e, t, r) {
  let n;
  if (t === "viewport") n = Oy(e, r);
  else if (t === "document") n = Iy(Lt(e));
  else if (kt(t)) n = Ry(t, r);
  else {
    let o = xp(e);
    n = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Ra(n);
}
function Tp(e, t) {
  let r = gr(e);
  return r === t || !kt(r) || Tn(r) ? false : Tt(r).position === "fixed" || Tp(r, t);
}
function Ny(e, t) {
  let r = t.get(e);
  if (r) return r;
  let n = ho(e, [], false).filter((s) => kt(s) && Pn(s) !== "body"), o = null, a = Tt(e).position === "fixed", i = a ? gr(e) : e;
  for (; kt(i) && !Tn(i); ) {
    let s = Tt(i), l = cl(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && o && Ay.has(o.position) || Ro(i) && !l && Tp(e, i)) ? n = n.filter((d) => d !== i) : o = s, i = gr(i);
  }
  return t.set(e, n), n;
}
function Dy(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e, a = [...r === "clippingAncestors" ? ai(t) ? [] : Ny(t, this._c) : [].concat(r), n], i = a[0], s = a.reduce((l, d) => {
    let c = wc(t, d, o);
    return l.top = it(c.top, l.top), l.right = pr(c.right, l.right), l.bottom = pr(c.bottom, l.bottom), l.left = it(c.left, l.left), l;
  }, wc(t, i, o));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}
function Ly(e) {
  let { width: t, height: r } = wp(e);
  return { width: t, height: r };
}
function My(e, t, r) {
  let n = Dt(t), o = Lt(t), a = r === "fixed", i = Br(e, true, a, t), s = { scrollLeft: 0, scrollTop: 0 }, l = Rt(0);
  function d() {
    l.x = pl(o);
  }
  if (n || !n && !a) if ((Pn(t) !== "body" || Ro(o)) && (s = ii(t)), n) {
    let g = Br(t, true, a, t);
    l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
  } else o && d();
  a && !n && o && d();
  let c = o && !n && !a ? kp(o, s) : Rt(0), u = i.left + s.scrollLeft - l.x - c.x, p = i.top + s.scrollTop - l.y - c.y;
  return { x: u, y: p, width: i.width, height: i.height };
}
function Ri(e) {
  return Tt(e).position === "static";
}
function xc(e, t) {
  if (!Dt(e) || Tt(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Lt(e) === r && (r = r.ownerDocument.body), r;
}
function Sp(e, t) {
  let r = st(e);
  if (ai(e)) return r;
  if (!Dt(e)) {
    let o = gr(e);
    for (; o && !Tn(o); ) {
      if (kt(o) && !Ri(o)) return o;
      o = gr(o);
    }
    return r;
  }
  let n = xc(e, t);
  for (; n && vy(n) && Ri(n); ) n = xc(n, t);
  return n && Tn(n) && Ri(n) && !cl(n) ? r : n || Sy(e) || r;
}
var Uy = async function(e) {
  let t = this.getOffsetParent || Sp, r = this.getDimensions, n = await r(e.floating);
  return { reference: My(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: n.width, height: n.height } };
};
function By(e) {
  return Tt(e).direction === "rtl";
}
var $y = { convertOffsetParentRelativeRectToViewportRelativeRect: Py, getDocumentElement: Lt, getClippingRect: Dy, getOffsetParent: Sp, getElementRects: Uy, getClientRects: _y, getDimensions: Ly, getScale: vn, isElement: kt, isRTL: By };
function Ep(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zy(e, t) {
  let r = null, n, o = Lt(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, l) {
    s === void 0 && (s = false), l === void 0 && (l = 1), a();
    let d = e.getBoundingClientRect(), { left: c, top: u, width: p, height: g } = d;
    if (s || t(), !p || !g) return;
    let m = Xo(u), f = Xo(o.clientWidth - (c + p)), v = Xo(o.clientHeight - (u + g)), w = Xo(c), y = { rootMargin: -m + "px " + -f + "px " + -v + "px " + -w + "px", threshold: it(0, pr(1, l)) || 1 }, T = true;
    function b(S) {
      let _ = S[0].intersectionRatio;
      if (_ !== l) {
        if (!T) return i();
        _ ? i(false, _) : n = setTimeout(() => {
          i(false, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Ep(d, e.getBoundingClientRect()) && i(), T = false;
    }
    try {
      r = new IntersectionObserver(b, { ...y, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, y);
    }
    r.observe(e);
  }
  return i(true), a;
}
function jy(e, t, r, n) {
  n === void 0 && (n = {});
  let { ancestorScroll: o = true, ancestorResize: a = true, elementResize: i = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: l = false } = n, d = ul(e), c = o || a ? [...d ? ho(d) : [], ...ho(t)] : [];
  c.forEach((w) => {
    o && w.addEventListener("scroll", r, { passive: true }), a && w.addEventListener("resize", r);
  });
  let u = d && s ? zy(d, r) : null, p = -1, g = null;
  i && (g = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var T;
      (T = g) == null || T.observe(t);
    })), r();
  }), d && !l && g.observe(d), g.observe(t));
  let m, f = l ? Br(e) : null;
  l && v();
  function v() {
    let w = Br(e);
    f && !Ep(f, w) && r(), f = w, m = requestAnimationFrame(v);
  }
  return r(), () => {
    var w;
    c.forEach((y) => {
      o && y.removeEventListener("scroll", r), a && y.removeEventListener("resize", r);
    }), u == null ? void 0 : u(), (w = g) == null || w.disconnect(), g = null, l && cancelAnimationFrame(m);
  };
}
var Vy = gy;
var Hy = hy;
var Gy = dy;
var Wy = my;
var qy = uy;
var Yy = cy;
var Ky = fy;
var Xy = (e, t, r) => {
  let n = /* @__PURE__ */ new Map(), o = { platform: $y, ...r }, a = { ...o.platform, _c: n };
  return ly(e, t, { ...o, platform: a });
};
function kc(e = 0, t = 0, r = 0, n = 0) {
  if (typeof DOMRect == "function") return new DOMRect(e, t, r, n);
  let o = { x: e, y: t, width: r, height: n, top: t, right: e + r, bottom: t + n, left: e };
  return { ...o, toJSON: () => o };
}
function Zy(e) {
  if (!e) return kc();
  let { x: t, y: r, width: n, height: o } = e;
  return kc(t, r, n, o);
}
function Jy(e, t) {
  return { contextElement: We(e) ? e : void 0, getBoundingClientRect: () => {
    let r = e, n = t == null ? void 0 : t(r);
    return n || !r ? Zy(n) : r.getBoundingClientRect();
  } };
}
var Mn = (e) => ({ variable: e, reference: `var(${e})` });
var Ht = { arrowSize: Mn("--arrow-size"), arrowSizeHalf: Mn("--arrow-size-half"), arrowBg: Mn("--arrow-background"), transformOrigin: Mn("--transform-origin"), arrowOffset: Mn("--arrow-offset") };
var Qy = (e) => ({ top: "bottom center", "top-start": e ? `${e.x}px bottom` : "left bottom", "top-end": e ? `${e.x}px bottom` : "right bottom", bottom: "top center", "bottom-start": e ? `${e.x}px top` : "top left", "bottom-end": e ? `${e.x}px top` : "top right", left: "right center", "left-start": e ? `right ${e.y}px` : "right top", "left-end": e ? `right ${e.y}px` : "right bottom", right: "left center", "right-start": e ? `left ${e.y}px` : "left top", "right-end": e ? `left ${e.y}px` : "left bottom" });
var ev = { name: "transformOrigin", fn({ placement: e, elements: t, middlewareData: r }) {
  let { arrow: n } = r, o = Qy(n)[e], { floating: a } = t;
  return a.style.setProperty(Ht.transformOrigin.variable, o), { data: { transformOrigin: o } };
} };
var tv = { name: "rects", fn({ rects: e }) {
  return { data: e };
} };
var rv = (e) => {
  if (e) return { name: "shiftArrow", fn({ placement: t, middlewareData: r }) {
    if (!r.arrow) return {};
    let { x: n, y: o } = r.arrow, a = t.split("-")[0];
    return Object.assign(e.style, { left: n != null ? `${n}px` : "", top: o != null ? `${o}px` : "", [a]: `calc(100% + ${Ht.arrowOffset.reference})` }), {};
  } };
};
function nv(e) {
  let [t, r] = e.split("-");
  return { side: t, align: r, hasAlign: r != null };
}
function ov(e) {
  return e.split("-")[0];
}
var av = { strategy: "absolute", placement: "bottom", listeners: true, gutter: 8, flip: true, slide: true, overlap: false, sameWidth: false, fitViewport: false, overflowPadding: 8, arrowPadding: 4 };
function Tc(e, t) {
  let r = e.devicePixelRatio || 1;
  return Math.round(t * r) / r;
}
function Cp(e) {
  return Xn(e.boundary);
}
function iv(e, t) {
  if (e) return Yy({ element: e, padding: t.arrowPadding });
}
function sv(e, t) {
  if (!jf(t.offset ?? t.gutter)) return Vy(({ placement: r }) => {
    var _a5, _b2;
    let n = ((e == null ? void 0 : e.clientHeight) || 0) / 2, o = ((_a5 = t.offset) == null ? void 0 : _a5.mainAxis) ?? t.gutter, a = typeof o == "number" ? o + n : o ?? n, { hasAlign: i } = nv(r), s = i ? void 0 : t.shift, l = ((_b2 = t.offset) == null ? void 0 : _b2.crossAxis) ?? s;
    return Za({ crossAxis: l, mainAxis: a, alignmentAxis: t.shift });
  });
}
function lv(e) {
  if (e.flip) return Gy({ boundary: Cp(e), padding: e.overflowPadding, fallbackPlacements: e.flip === true ? void 0 : e.flip });
}
function cv(e) {
  if (!(!e.slide && !e.overlap)) return Hy({ boundary: Cp(e), mainAxis: e.slide, crossAxis: e.overlap, padding: e.overflowPadding, limiter: Ky() });
}
function dv(e) {
  return Wy({ padding: e.overflowPadding, apply({ elements: t, rects: r, availableHeight: n, availableWidth: o }) {
    let a = t.floating, i = Math.round(r.reference.width);
    o = Math.floor(o), n = Math.floor(n), a.style.setProperty("--reference-width", `${i}px`), a.style.setProperty("--available-width", `${o}px`), a.style.setProperty("--available-height", `${n}px`);
  } });
}
function uv(e) {
  var _a5;
  if (e.hideWhenDetached) return qy({ strategy: "referenceHidden", boundary: ((_a5 = e.boundary) == null ? void 0 : _a5.call(e)) ?? "clippingAncestors" });
}
function pv(e) {
  return e ? e === true ? { ancestorResize: true, ancestorScroll: true, elementResize: true, layoutShift: true } : e : {};
}
function gv(e, t, r = {}) {
  let n = Jy(e, r.getAnchorRect);
  if (!t || !n) return;
  let o = Object.assign({}, av, r), a = t.querySelector("[data-part=arrow]"), i = [sv(a, o), lv(o), cv(o), iv(a, o), rv(a), ev, dv(o), uv(o), tv], { placement: s, strategy: l, onComplete: d, onPositioned: c } = o, u = async () => {
    var _a5;
    if (!n || !t) return;
    let f = await Xy(n, t, { placement: s, middleware: i, strategy: l });
    d == null ? void 0 : d(f), c == null ? void 0 : c({ placed: true });
    let v = dt(t), w = Tc(v, f.x), y = Tc(v, f.y);
    t.style.setProperty("--x", `${w}px`), t.style.setProperty("--y", `${y}px`), o.hideWhenDetached && (((_a5 = f.middlewareData.hide) == null ? void 0 : _a5.referenceHidden) ? (t.style.setProperty("visibility", "hidden"), t.style.setProperty("pointer-events", "none")) : (t.style.removeProperty("visibility"), t.style.removeProperty("pointer-events")));
    let T = t.firstElementChild;
    if (T) {
      let b = Sn(T);
      t.style.setProperty("--z-index", b.zIndex);
    }
  }, p = async () => {
    r.updatePosition ? (await r.updatePosition({ updatePosition: u, floatingElement: t }), c == null ? void 0 : c({ placed: true })) : await u();
  }, g = pv(o.listeners), m = o.listeners ? jy(n, t, p, g) : Kf;
  return p(), () => {
    m == null ? void 0 : m(), c == null ? void 0 : c({ placed: false });
  };
}
function Sc(e, t, r = {}) {
  let { defer: n, ...o } = r, a = n ? xe : (s) => s(), i = [];
  return i.push(a(() => {
    let s = typeof e == "function" ? e() : e, l = typeof t == "function" ? t() : t;
    i.push(gv(s, l, o));
  })), () => {
    i.forEach((s) => s == null ? void 0 : s());
  };
}
var hv = { bottom: "rotate(45deg)", left: "rotate(135deg)", top: "rotate(225deg)", right: "rotate(315deg)" };
function fv(e = {}) {
  let { placement: t, sameWidth: r, fitViewport: n, strategy: o = "absolute" } = e;
  return { arrow: { position: "absolute", width: Ht.arrowSize.reference, height: Ht.arrowSize.reference, [Ht.arrowSizeHalf.variable]: `calc(${Ht.arrowSize.reference} / 2)`, [Ht.arrowOffset.variable]: `calc(${Ht.arrowSizeHalf.reference} * -1)` }, arrowTip: { transform: t ? hv[t.split("-")[0]] : void 0, background: Ht.arrowBg.reference, top: "0", left: "0", width: "100%", height: "100%", position: "absolute", zIndex: "inherit" }, floating: { position: o, isolation: "isolate", minWidth: r ? void 0 : "max-content", width: r ? "var(--reference-width)" : void 0, maxWidth: n ? "var(--available-width)" : void 0, maxHeight: n ? "var(--available-height)" : void 0, pointerEvents: t ? void 0 : "none", top: "0px", left: "0px", transform: t ? "translate3d(var(--x), var(--y), 0)" : "translate3d(0, -100vh, 0)", zIndex: "var(--z-index)" } };
}
function mv(e) {
  let t = { each(r) {
    var _a5;
    for (let n = 0; n < ((_a5 = e.frames) == null ? void 0 : _a5.length); n += 1) {
      let o = e.frames[n];
      o && r(o);
    }
  }, addEventListener(r, n, o) {
    return t.each((a) => {
      try {
        a.document.addEventListener(r, n, o);
      } catch {
      }
    }), () => {
      try {
        t.removeEventListener(r, n, o);
      } catch {
      }
    };
  }, removeEventListener(r, n, o) {
    t.each((a) => {
      try {
        a.document.removeEventListener(r, n, o);
      } catch {
      }
    });
  } };
  return t;
}
function bv(e) {
  let t = e.frameElement != null ? e.parent : null;
  return { addEventListener: (r, n, o) => {
    try {
      t == null ? void 0 : t.addEventListener(r, n, o);
    } catch {
    }
    return () => {
      try {
        t == null ? void 0 : t.removeEventListener(r, n, o);
      } catch {
      }
    };
  }, removeEventListener: (r, n, o) => {
    try {
      t == null ? void 0 : t.removeEventListener(r, n, o);
    } catch {
    }
  } };
}
var Ec = "pointerdown.outside";
var Cc = "focus.outside";
function yv(e) {
  for (let t of e) if (We(t) && Wt(t)) return true;
  return false;
}
var Fp = (e) => "clientY" in e;
function vv(e, t) {
  if (!Fp(t) || !e) return false;
  let r = e.getBoundingClientRect();
  return r.width === 0 || r.height === 0 ? false : r.top <= t.clientY && t.clientY <= r.top + r.height && r.left <= t.clientX && t.clientX <= r.left + r.width;
}
function wv(e, t) {
  return e.y <= t.y && t.y <= e.y + e.height && e.x <= t.x && t.x <= e.x + e.width;
}
function Fc(e, t) {
  if (!t || !Fp(e)) return false;
  let r = t.scrollHeight > t.clientHeight, n = r && e.clientX > t.offsetLeft + t.clientWidth, o = t.scrollWidth > t.clientWidth, a = o && e.clientY > t.offsetTop + t.clientHeight, i = { x: t.offsetLeft, y: t.offsetTop, width: t.clientWidth + (r ? 16 : 0), height: t.clientHeight + (o ? 16 : 0) }, s = { x: e.clientX, y: e.clientY };
  return wv(i, s) ? n || a : false;
}
function xv(e, t) {
  let { exclude: r, onFocusOutside: n, onPointerDownOutside: o, onInteractOutside: a, defer: i } = t;
  if (!e) return;
  let s = Ft(e), l = dt(e), d = mv(l), c = bv(l);
  function u(y, T) {
    if (!We(T) || !T.isConnected || At(e, T) || vv(e, y)) return false;
    let b = s.querySelector(`[aria-controls="${e.id}"]`);
    if (b) {
      let _ = fs(b);
      if (Fc(y, _)) return false;
    }
    let S = fs(e);
    return Fc(y, S) ? false : !(r == null ? void 0 : r(T));
  }
  let p = /* @__PURE__ */ new Set(), g = po(e == null ? void 0 : e.getRootNode());
  function m(y) {
    function T(b) {
      var _a5;
      let S = i && !ic() ? xe : (x) => x(), _ = b ?? y, I = ((_a5 = _ == null ? void 0 : _.composedPath) == null ? void 0 : _a5.call(_)) ?? [_ == null ? void 0 : _.target];
      S(() => {
        let x = g ? I[0] : tt(y);
        if (!(!e || !u(y, x))) {
          if (o || a) {
            let C = Pa(o, a);
            e.addEventListener(Ec, C, { once: true });
          }
          Pc(e, Ec, { bubbles: false, cancelable: true, detail: { originalEvent: _, contextmenu: ip(_), focusable: yv(I), target: x } });
        }
      });
    }
    y.pointerType === "touch" ? (p.forEach((b) => b()), p.add(ke(s, "click", T, { once: true })), p.add(c.addEventListener("click", T, { once: true })), p.add(d.addEventListener("click", T, { once: true }))) : T();
  }
  let f = /* @__PURE__ */ new Set(), v = setTimeout(() => {
    f.add(ke(s, "pointerdown", m, true)), f.add(c.addEventListener("pointerdown", m, true)), f.add(d.addEventListener("pointerdown", m, true));
  }, 0);
  function w(y) {
    (i ? xe : (T) => T())(() => {
      let T = tt(y);
      if (!(!e || !u(y, T))) {
        if (n || a) {
          let b = Pa(n, a);
          e.addEventListener(Cc, b, { once: true });
        }
        Pc(e, Cc, { bubbles: false, cancelable: true, detail: { originalEvent: y, contextmenu: false, focusable: Wt(T), target: T } });
      }
    });
  }
  return ic() || (f.add(ke(s, "focusin", w, true)), f.add(c.addEventListener("focusin", w, true)), f.add(d.addEventListener("focusin", w, true))), () => {
    clearTimeout(v), p.forEach((y) => y()), f.forEach((y) => y());
  };
}
function kv(e, t) {
  let { defer: r } = t, n = r ? xe : (a) => a(), o = [];
  return o.push(n(() => {
    let a = typeof e == "function" ? e() : e;
    o.push(xv(a, t));
  })), () => {
    o.forEach((a) => a == null ? void 0 : a());
  };
}
function Pc(e, t, r) {
  let n = e.ownerDocument.defaultView || window, o = new n.CustomEvent(t, r);
  return e.dispatchEvent(o);
}
function Tv(e, t) {
  let r = (n) => {
    n.key === "Escape" && (n.isComposing || (t == null ? void 0 : t(n)));
  };
  return ke(Ft(e), "keydown", r, { capture: true });
}
var ot = { layers: [], branches: [], count() {
  return this.layers.length;
}, pointerBlockingLayers() {
  return this.layers.filter((e) => e.pointerBlocking);
}, topMostPointerBlockingLayer() {
  return [...this.pointerBlockingLayers()].slice(-1)[0];
}, hasPointerBlockingLayer() {
  return this.pointerBlockingLayers().length > 0;
}, isBelowPointerBlockingLayer(e) {
  var _a5;
  let t = this.indexOf(e), r = this.topMostPointerBlockingLayer() ? this.indexOf((_a5 = this.topMostPointerBlockingLayer()) == null ? void 0 : _a5.node) : -1;
  return t < r;
}, isTopMost(e) {
  var _a5;
  return ((_a5 = this.layers[this.count() - 1]) == null ? void 0 : _a5.node) === e;
}, getNestedLayers(e) {
  return Array.from(this.layers).slice(this.indexOf(e) + 1);
}, isInNestedLayer(e, t) {
  return this.getNestedLayers(e).some((r) => At(r.node, t));
}, isInBranch(e) {
  return Array.from(this.branches).some((t) => At(t, e));
}, add(e) {
  let t = this.layers.push(e);
  e.node.style.setProperty("--layer-index", `${t}`);
}, addBranch(e) {
  this.branches.push(e);
}, remove(e) {
  let t = this.indexOf(e);
  t < 0 || (t < this.count() - 1 && this.getNestedLayers(e).forEach((r) => r.dismiss()), this.layers.splice(t, 1), e.style.removeProperty("--layer-index"));
}, removeBranch(e) {
  let t = this.branches.indexOf(e);
  t >= 0 && this.branches.splice(t, 1);
}, indexOf(e) {
  return this.layers.findIndex((t) => t.node === e);
}, dismiss(e) {
  var _a5;
  (_a5 = this.layers[this.indexOf(e)]) == null ? void 0 : _a5.dismiss();
}, clear() {
  this.remove(this.layers[0].node);
} };
var _c;
function Ic() {
  ot.layers.forEach(({ node: e }) => {
    e.style.pointerEvents = ot.isBelowPointerBlockingLayer(e) ? "none" : "auto";
  });
}
function Sv(e) {
  e.style.pointerEvents = "";
}
function Ev(e, t) {
  let r = Ft(e), n = [];
  return ot.hasPointerBlockingLayer() && !r.body.hasAttribute("data-inert") && (_c = document.body.style.pointerEvents, queueMicrotask(() => {
    r.body.style.pointerEvents = "none", r.body.setAttribute("data-inert", "");
  })), t == null ? void 0 : t.forEach((o) => {
    let [a, i] = Tb(() => {
      let s = o();
      return We(s) ? s : null;
    }, { timeout: 1e3 });
    a.then((s) => n.push(_a(s, { pointerEvents: "auto" }))), n.push(i);
  }), () => {
    ot.hasPointerBlockingLayer() || (queueMicrotask(() => {
      r.body.style.pointerEvents = _c, r.body.removeAttribute("data-inert"), r.body.style.length === 0 && r.body.removeAttribute("style");
    }), n.forEach((o) => o()));
  };
}
function Cv(e, t) {
  let { warnOnMissingNode: r = true } = t;
  if (r && !e) {
    co("[@zag-js/dismissable] node is `null` or `undefined`");
    return;
  }
  if (!e) return;
  let { onDismiss: n, pointerBlocking: o, exclude: a, debug: i } = t, s = { dismiss: n, node: e, pointerBlocking: o };
  ot.add(s), Ic();
  function l(g) {
    var _a5, _b2;
    let m = tt(g.detail.originalEvent);
    ot.isBelowPointerBlockingLayer(e) || ot.isInBranch(m) || ((_a5 = t.onPointerDownOutside) == null ? void 0 : _a5.call(t, g), (_b2 = t.onInteractOutside) == null ? void 0 : _b2.call(t, g), !g.defaultPrevented && (i && console.log("onPointerDownOutside:", g.detail.originalEvent), n == null ? void 0 : n()));
  }
  function d(g) {
    var _a5, _b2;
    let m = tt(g.detail.originalEvent);
    ot.isInBranch(m) || ((_a5 = t.onFocusOutside) == null ? void 0 : _a5.call(t, g), (_b2 = t.onInteractOutside) == null ? void 0 : _b2.call(t, g), !g.defaultPrevented && (i && console.log("onFocusOutside:", g.detail.originalEvent), n == null ? void 0 : n()));
  }
  function c(g) {
    var _a5;
    ot.isTopMost(e) && ((_a5 = t.onEscapeKeyDown) == null ? void 0 : _a5.call(t, g), !g.defaultPrevented && n && (g.preventDefault(), n()));
  }
  function u(g) {
    var _a5;
    if (!e) return false;
    let m = typeof a == "function" ? a() : a, f = Array.isArray(m) ? m : [m], v = (_a5 = t.persistentElements) == null ? void 0 : _a5.map((w) => w()).filter(We);
    return v && f.push(...v), f.some((w) => At(w, g)) || ot.isInNestedLayer(e, g);
  }
  let p = [o ? Ev(e, t.persistentElements) : void 0, Tv(e, c), kv(e, { exclude: u, onFocusOutside: d, onPointerDownOutside: l, defer: t.defer })];
  return () => {
    ot.remove(e), Ic(), Sv(e), p.forEach((g) => g == null ? void 0 : g());
  };
}
function Pp(e, t) {
  let { defer: r } = t, n = r ? xe : (a) => a(), o = [];
  return o.push(n(() => {
    let a = It(e) ? e() : e;
    o.push(Cv(a, t));
  })), () => {
    o.forEach((a) => a == null ? void 0 : a());
  };
}
function Fv(e, t = {}) {
  let { defer: r } = t, n = r ? xe : (a) => a(), o = [];
  return o.push(n(() => {
    let a = It(e) ? e() : e;
    if (!a) {
      co("[@zag-js/dismissable] branch node is `null` or `undefined`");
      return;
    }
    ot.addBranch(a), o.push(() => {
      ot.removeBranch(a);
    });
  })), () => {
    o.forEach((a) => a == null ? void 0 : a());
  };
}
var Pv = Object.defineProperty;
var _v = (e, t, r) => t in e ? Pv(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var Se = (e, t, r) => _v(e, typeof t != "symbol" ? t + "" : t, r);
var Oc = { activateTrap(e, t) {
  if (e.length > 0) {
    let n = e[e.length - 1];
    n !== t && n.pause();
  }
  let r = e.indexOf(t);
  r === -1 || e.splice(r, 1), e.push(t);
}, deactivateTrap(e, t) {
  let r = e.indexOf(t);
  r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
} };
var Iv = [];
var Ov = class {
  constructor(e, t) {
    Se(this, "trapStack"), Se(this, "config"), Se(this, "doc"), Se(this, "state", { containers: [], containerGroups: [], tabbableGroups: [], nodeFocusedBeforeActivation: null, mostRecentlyFocusedNode: null, active: false, paused: false, delayInitialFocusTimer: void 0, recentNavEvent: void 0 }), Se(this, "listenerCleanups", []), Se(this, "handleFocus", (n) => {
      let o = tt(n), a = this.findContainerIndex(o, n) >= 0;
      if (a || Js(o)) a && (this.state.mostRecentlyFocusedNode = o);
      else {
        n.stopImmediatePropagation();
        let i, s = true;
        if (this.state.mostRecentlyFocusedNode) if (Ln(this.state.mostRecentlyFocusedNode) > 0) {
          let l = this.findContainerIndex(this.state.mostRecentlyFocusedNode), { tabbableNodes: d } = this.state.containerGroups[l];
          if (d.length > 0) {
            let c = d.findIndex((u) => u === this.state.mostRecentlyFocusedNode);
            c >= 0 && (this.config.isKeyForward(this.state.recentNavEvent) ? c + 1 < d.length && (i = d[c + 1], s = false) : c - 1 >= 0 && (i = d[c - 1], s = false));
          }
        } else this.state.containerGroups.some((l) => l.tabbableNodes.some((d) => Ln(d) > 0)) || (s = false);
        else s = false;
        s && (i = this.findNextNavNode({ target: this.state.mostRecentlyFocusedNode, isBackward: this.config.isKeyBackward(this.state.recentNavEvent) })), i ? this.tryFocus(i) : this.tryFocus(this.state.mostRecentlyFocusedNode || this.getInitialFocusNode());
      }
      this.state.recentNavEvent = void 0;
    }), Se(this, "handlePointerDown", (n) => {
      let o = tt(n);
      if (!(this.findContainerIndex(o, n) >= 0)) {
        if (Bn(this.config.clickOutsideDeactivates, n)) {
          this.deactivate({ returnFocus: this.config.returnFocusOnDeactivate });
          return;
        }
        Bn(this.config.allowOutsideClick, n) || n.preventDefault();
      }
    }), Se(this, "handleClick", (n) => {
      let o = tt(n);
      this.findContainerIndex(o, n) >= 0 || Bn(this.config.clickOutsideDeactivates, n) || Bn(this.config.allowOutsideClick, n) || (n.preventDefault(), n.stopImmediatePropagation());
    }), Se(this, "handleTabKey", (n) => {
      if (this.config.isKeyForward(n) || this.config.isKeyBackward(n)) {
        this.state.recentNavEvent = n;
        let o = this.config.isKeyBackward(n), a = this.findNextNavNode({ event: n, isBackward: o });
        if (!a) return;
        Un(n) && n.preventDefault(), this.tryFocus(a);
      }
    }), Se(this, "handleEscapeKey", (n) => {
      Av(n) && Bn(this.config.escapeDeactivates, n) !== false && (n.preventDefault(), this.deactivate());
    }), Se(this, "_mutationObserver"), Se(this, "setupMutationObserver", () => {
      let n = this.doc.defaultView || window;
      this._mutationObserver = new n.MutationObserver((o) => {
        o.some((a) => Array.from(a.removedNodes).some((i) => i === this.state.mostRecentlyFocusedNode)) && this.tryFocus(this.getInitialFocusNode());
      });
    }), Se(this, "updateObservedNodes", () => {
      var _a5;
      (_a5 = this._mutationObserver) == null ? void 0 : _a5.disconnect(), this.state.active && !this.state.paused && this.state.containers.map((n) => {
        var _a6;
        (_a6 = this._mutationObserver) == null ? void 0 : _a6.observe(n, { subtree: true, childList: true });
      });
    }), Se(this, "getInitialFocusNode", () => {
      let n = this.getNodeForOption("initialFocus", { hasFallback: true });
      if (n === false) return false;
      if (n === void 0 || n && !Wt(n)) if (this.findContainerIndex(this.doc.activeElement) >= 0) n = this.doc.activeElement;
      else {
        let o = this.state.tabbableGroups[0];
        n = o && o.firstTabbableNode || this.getNodeForOption("fallbackFocus");
      }
      else n === null && (n = this.getNodeForOption("fallbackFocus"));
      if (!n) throw new Error("Your focus-trap needs to have at least one focusable element");
      return n.isConnected || (n = this.getNodeForOption("fallbackFocus")), n;
    }), Se(this, "tryFocus", (n) => {
      if (n !== false && n !== np(this.doc)) {
        if (!n || !n.focus) {
          this.tryFocus(this.getInitialFocusNode());
          return;
        }
        n.focus({ preventScroll: !!this.config.preventScroll }), this.state.mostRecentlyFocusedNode = n, Rv(n) && n.select();
      }
    }), Se(this, "deactivate", (n) => {
      if (!this.state.active) return this;
      let o = { onDeactivate: this.config.onDeactivate, onPostDeactivate: this.config.onPostDeactivate, checkCanReturnFocus: this.config.checkCanReturnFocus, ...n };
      clearTimeout(this.state.delayInitialFocusTimer), this.state.delayInitialFocusTimer = void 0, this.removeListeners(), this.state.active = false, this.state.paused = false, this.updateObservedNodes(), Oc.deactivateTrap(this.trapStack, this);
      let a = this.getOption(o, "onDeactivate"), i = this.getOption(o, "onPostDeactivate"), s = this.getOption(o, "checkCanReturnFocus"), l = this.getOption(o, "returnFocus", "returnFocusOnDeactivate");
      a == null ? void 0 : a();
      let d = () => {
        Ac(() => {
          if (l) {
            let c = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
            this.tryFocus(c);
          }
          i == null ? void 0 : i();
        });
      };
      if (l && s) {
        let c = this.getReturnFocusNode(this.state.nodeFocusedBeforeActivation);
        return s(c).then(d, d), this;
      }
      return d(), this;
    }), Se(this, "pause", (n) => {
      if (this.state.paused || !this.state.active) return this;
      let o = this.getOption(n, "onPause"), a = this.getOption(n, "onPostPause");
      return this.state.paused = true, o == null ? void 0 : o(), this.removeListeners(), this.updateObservedNodes(), a == null ? void 0 : a(), this;
    }), Se(this, "unpause", (n) => {
      if (!this.state.paused || !this.state.active) return this;
      let o = this.getOption(n, "onUnpause"), a = this.getOption(n, "onPostUnpause");
      return this.state.paused = false, o == null ? void 0 : o(), this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), a == null ? void 0 : a(), this;
    }), Se(this, "updateContainerElements", (n) => (this.state.containers = Array.isArray(n) ? n.filter(Boolean) : [n].filter(Boolean), this.state.active && this.updateTabbableNodes(), this.updateObservedNodes(), this)), Se(this, "getReturnFocusNode", (n) => {
      let o = this.getNodeForOption("setReturnFocus", { params: [n] });
      return o || (o === false ? false : n);
    }), Se(this, "getOption", (n, o, a) => n && n[o] !== void 0 ? n[o] : this.config[a || o]), Se(this, "getNodeForOption", (n, { hasFallback: o = false, params: a = [] } = {}) => {
      let i = this.config[n];
      if (typeof i == "function" && (i = i(...a)), i === true && (i = void 0), !i) {
        if (i === void 0 || i === false) return i;
        throw new Error(`\`${n}\` was specified but was not a node, or did not return a node`);
      }
      let s = i;
      if (typeof i == "string") {
        try {
          s = this.doc.querySelector(i);
        } catch (l) {
          throw new Error(`\`${n}\` appears to be an invalid selector; error="${l.message}"`);
        }
        if (!s && !o) throw new Error(`\`${n}\` as selector refers to no known node`);
      }
      return s;
    }), Se(this, "findNextNavNode", (n) => {
      let { event: o, isBackward: a = false } = n, i = n.target || tt(o);
      this.updateTabbableNodes();
      let s = null;
      if (this.state.tabbableGroups.length > 0) {
        let l = this.findContainerIndex(i, o), d = l >= 0 ? this.state.containerGroups[l] : void 0;
        if (l < 0) a ? s = this.state.tabbableGroups[this.state.tabbableGroups.length - 1].lastTabbableNode : s = this.state.tabbableGroups[0].firstTabbableNode;
        else if (a) {
          let c = this.state.tabbableGroups.findIndex(({ firstTabbableNode: u }) => i === u);
          if (c < 0 && ((d == null ? void 0 : d.container) === i || Wt(i) && !lr(i) && !(d == null ? void 0 : d.nextTabbableNode(i, false))) && (c = l), c >= 0) {
            let u = c === 0 ? this.state.tabbableGroups.length - 1 : c - 1, p = this.state.tabbableGroups[u];
            s = Ln(i) >= 0 ? p.lastTabbableNode : p.lastDomTabbableNode;
          } else Un(o) || (s = d == null ? void 0 : d.nextTabbableNode(i, false));
        } else {
          let c = this.state.tabbableGroups.findIndex(({ lastTabbableNode: u }) => i === u);
          if (c < 0 && ((d == null ? void 0 : d.container) === i || Wt(i) && !lr(i) && !(d == null ? void 0 : d.nextTabbableNode(i))) && (c = l), c >= 0) {
            let u = c === this.state.tabbableGroups.length - 1 ? 0 : c + 1, p = this.state.tabbableGroups[u];
            s = Ln(i) >= 0 ? p.firstTabbableNode : p.firstDomTabbableNode;
          } else Un(o) || (s = d == null ? void 0 : d.nextTabbableNode(i));
        }
      } else s = this.getNodeForOption("fallbackFocus");
      return s;
    }), this.trapStack = t.trapStack || Iv;
    let r = { returnFocusOnDeactivate: true, escapeDeactivates: true, delayInitialFocus: true, isKeyForward(n) {
      return Un(n) && !n.shiftKey;
    }, isKeyBackward(n) {
      return Un(n) && n.shiftKey;
    }, ...t };
    this.doc = r.document || Ft(Array.isArray(e) ? e[0] : e), this.config = r, this.updateContainerElements(e), this.setupMutationObserver();
  }
  get active() {
    return this.state.active;
  }
  get paused() {
    return this.state.paused;
  }
  findContainerIndex(e, t) {
    let r = typeof (t == null ? void 0 : t.composedPath) == "function" ? t.composedPath() : void 0;
    return this.state.containerGroups.findIndex(({ container: n, tabbableNodes: o }) => n.contains(e) || (r == null ? void 0 : r.includes(n)) || o.find((a) => a === e));
  }
  updateTabbableNodes() {
    if (this.state.containerGroups = this.state.containers.map((e) => {
      let t = Io(e), r = lp(e), n = t.length > 0 ? t[0] : void 0, o = t.length > 0 ? t[t.length - 1] : void 0, a = r.find((d) => lr(d)), i = r.slice().reverse().find((d) => lr(d)), s = !!t.find((d) => Ln(d) > 0);
      function l(d, c = true) {
        let u = t.indexOf(d);
        return u < 0 ? c ? r.slice(r.indexOf(d) + 1).find((p) => lr(p)) : r.slice(0, r.indexOf(d)).reverse().find((p) => lr(p)) : t[u + (c ? 1 : -1)];
      }
      return { container: e, tabbableNodes: t, focusableNodes: r, posTabIndexesFound: s, firstTabbableNode: n, lastTabbableNode: o, firstDomTabbableNode: a, lastDomTabbableNode: i, nextTabbableNode: l };
    }), this.state.tabbableGroups = this.state.containerGroups.filter((e) => e.tabbableNodes.length > 0), this.state.tabbableGroups.length <= 0 && !this.getNodeForOption("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (this.state.containerGroups.find((e) => e.posTabIndexesFound) && this.state.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }
  addListeners() {
    if (this.state.active) return Oc.activateTrap(this.trapStack, this), this.state.delayInitialFocusTimer = this.config.delayInitialFocus ? Ac(() => {
      this.tryFocus(this.getInitialFocusNode());
    }) : this.tryFocus(this.getInitialFocusNode()), this.listenerCleanups.push(ke(this.doc, "focusin", this.handleFocus, true), ke(this.doc, "mousedown", this.handlePointerDown, { capture: true, passive: false }), ke(this.doc, "touchstart", this.handlePointerDown, { capture: true, passive: false }), ke(this.doc, "click", this.handleClick, { capture: true, passive: false }), ke(this.doc, "keydown", this.handleTabKey, { capture: true, passive: false }), ke(this.doc, "keydown", this.handleEscapeKey)), this;
  }
  removeListeners() {
    if (this.state.active) return this.listenerCleanups.forEach((e) => e()), this.listenerCleanups = [], this;
  }
  activate(e) {
    if (this.state.active) return this;
    let t = this.getOption(e, "onActivate"), r = this.getOption(e, "onPostActivate"), n = this.getOption(e, "checkCanFocusTrap");
    n || this.updateTabbableNodes(), this.state.active = true, this.state.paused = false, this.state.nodeFocusedBeforeActivation = this.doc.activeElement || null, t == null ? void 0 : t();
    let o = () => {
      n && this.updateTabbableNodes(), this.addListeners(), this.updateObservedNodes(), r == null ? void 0 : r();
    };
    return n ? (n(this.state.containers.concat()).then(o, o), this) : (o(), this);
  }
};
var Un = (e) => e.key === "Tab";
var Bn = (e, ...t) => typeof e == "function" ? e(...t) : e;
var Av = (e) => !e.isComposing && e.key === "Escape";
var Ac = (e) => setTimeout(e, 0);
var Rv = (e) => e.localName === "input" && "select" in e && typeof e.select == "function";
function Nv(e, t = {}) {
  let r, n = xe(() => {
    let o = typeof e == "function" ? e() : e;
    if (o) {
      r = new Ov(o, { escapeDeactivates: false, allowOutsideClick: true, preventScroll: true, returnFocusOnDeactivate: true, delayInitialFocus: false, fallbackFocus: o, ...t, document: Ft(o) });
      try {
        r.activate();
      } catch {
      }
    }
  });
  return function() {
    r == null ? void 0 : r.deactivate(), n();
  };
}
var [_p, No] = Ve({ hookName: "useFieldsetContext", providerName: "<FieldsetProvider />", strict: false });
var Dv = (e) => e.children(No());
var Lv = (e) => {
  let t = No(), r = U(() => t().getErrorTextProps(), e);
  return h(Y, { get when() {
    return t().invalid;
  }, get children() {
    return h(V.span, r);
  } });
};
var Mv = (e) => {
  let t = No(), r = U(() => t().getHelperTextProps(), e);
  return h(V.span, r);
};
var Uv = (e) => {
  let t = No(), r = U(() => t().getLegendProps(), e);
  return h(V.legend, r);
};
var Bv = gt("fieldset").parts("root", "errorText", "helperText", "legend");
var Zo = Bv.build();
var $v = (e) => {
  Zt();
  let t = he({ disabled: false, invalid: false }, br(e)), r, n = t.id ?? Et(), o = `fieldset::${n}::error-text`, a = `fieldset::${n}::helper-text`, [i, s] = M(false), [l, d] = M(false);
  Ce(() => {
  });
  let c = [];
  i() && t.invalid && c.push(o), l() && c.push(a);
  let u = () => ({ ...Zo.root.attrs, disabled: t.disabled, "data-disabled": re(t.disabled), "data-invalid": re(t.invalid), "aria-describedby": c.join(" ") || void 0 }), p = () => ({ ...Zo.legend.attrs, "data-disabled": re(t.disabled), "data-invalid": re(t.invalid) }), g = () => ({ id: a, ...Zo.helperText.attrs }), m = () => ({ id: o, ...Zo.errorText.attrs, "aria-live": "polite" });
  return te(() => ({ refs: { rootRef: r }, disabled: t.disabled, invalid: t.invalid, getRootProps: u, getLegendProps: p, getHelperTextProps: g, getErrorTextProps: m }));
};
var Ip = (e) => {
  let [t, r] = Ie()(e, ["id", "disabled", "invalid"]), n = $v(t), o = U(() => n().getRootProps(), r);
  return h(_p, { value: n, get children() {
    return h(V.fieldset, o);
  } });
};
Ip.displayName = "FieldsetRoot";
var zv = (e) => {
  let [{ value: t }, r] = Ie()(e, ["value"]), n = U(() => t().getRootProps(), r);
  return h(_p, { value: t, get children() {
    return h(V.fieldset, n);
  } });
};
var jv = {};
yr(jv, { Context: () => Dv, ErrorText: () => Lv, HelperText: () => Mv, Legend: () => Uv, Root: () => Ip, RootProvider: () => zv });
var Vv = (e) => {
  var _a5, _b2;
  if (!e) return;
  let t = Sn(e), r = dt(e), n = Ft(e), o = () => {
    requestAnimationFrame(() => {
      e.style.height = "auto";
      let d;
      t.boxSizing === "content-box" ? d = e.scrollHeight - (parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : d = e.scrollHeight + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), t.maxHeight !== "none" && d > parseFloat(t.maxHeight) ? (t.overflowY === "hidden" && (e.style.overflowY = "scroll"), d = parseFloat(t.maxHeight)) : t.overflowY !== "hidden" && (e.style.overflowY = "hidden"), e.style.height = `${d}px`;
    });
  };
  e.addEventListener("input", o), (_a5 = e.form) == null ? void 0 : _a5.addEventListener("reset", o);
  let a = Object.getPrototypeOf(e), i = Object.getOwnPropertyDescriptor(a, "value");
  Object.defineProperty(e, "value", { ...i, set() {
    var _a6;
    (_a6 = i == null ? void 0 : i.set) == null ? void 0 : _a6.apply(this, arguments), o();
  } });
  let s = new r.ResizeObserver(() => {
    requestAnimationFrame(() => o());
  });
  s.observe(e);
  let l = new r.MutationObserver(() => o());
  return l.observe(e, { attributes: true, attributeFilter: ["rows", "placeholder"] }), (_b2 = n.fonts) == null ? void 0 : _b2.addEventListener("loadingdone", o), () => {
    var _a6, _b3;
    e.removeEventListener("input", o), (_a6 = e.form) == null ? void 0 : _a6.removeEventListener("reset", o), (_b3 = n.fonts) == null ? void 0 : _b3.removeEventListener("loadingdone", o), s.disconnect(), l.disconnect();
  };
};
var [Op, Mt] = Ve({ hookName: "useFieldContext", providerName: "<FieldProvider />", strict: false });
var Hv = (e) => e.children(Mt());
var Gv = (e) => {
  let t = Mt(), r = U(() => t().getErrorTextProps(), e);
  return h(Y, { get when() {
    return t == null ? void 0 : t().invalid;
  }, get children() {
    return h(V.span, r);
  } });
};
var Wv = (e) => {
  let t = Mt(), r = U(() => t().getHelperTextProps(), e);
  return h(V.span, r);
};
var qv = (e) => {
  let t = Mt(), r = U(() => t == null ? void 0 : t().getInputProps(), e);
  return h(V.input, r);
};
var Yv = (e) => {
  let t = Mt(), r = U(() => t == null ? void 0 : t().getLabelProps(), e);
  return h(V.label, r);
};
var Kv = (e) => {
  let t = Mt(), r = U(() => t().getRequiredIndicatorProps(), e);
  return h(Y, { get when() {
    return t().required;
  }, get fallback() {
    return e.fallback;
  }, get children() {
    return h(V.span, he(r, { get children() {
      return e.children ?? "*";
    } }));
  } });
};
var Xv = gt("field").parts("root", "errorText", "helperText", "input", "label", "select", "textarea", "requiredIndicator");
var nr = Xv.build();
var Zv = (e) => {
  var _a5, _b2, _c2, _d2;
  let t = No(), r = Zt(), n = he({ disabled: !!(t == null ? void 0 : t().disabled), required: false, invalid: false, readOnly: false }, e), [o, a] = M(false), [i, s] = M(false), l = n.id ?? Et(), [d, c] = M(void 0), u = ((_a5 = n.ids) == null ? void 0 : _a5.control) ?? `field::${l}`, p = ((_b2 = n.ids) == null ? void 0 : _b2.errorText) ?? `field::${l}::error-text`, g = ((_c2 = n.ids) == null ? void 0 : _c2.helperText) ?? `field::${l}::helper-text`, m = ((_d2 = n.ids) == null ? void 0 : _d2.label) ?? `field::${l}::label`;
  ve(() => {
    let C = d();
    if (!C) return;
    let R = () => {
      let K = r().getRootNode();
      a(!!K.getElementById(p)), s(!!K.getElementById(g));
    };
    R();
    let D = r().getWindow(), N = new D.MutationObserver(R);
    N.observe(C, { childList: true, subtree: true }), ue(() => N.disconnect());
  });
  let f = () => ({ ...nr.root.attrs, id: u, role: "group", "data-disabled": re(n.disabled), "data-invalid": re(n.invalid), "data-readonly": re(n.readOnly) }), v = () => ({ ...nr.label.attrs, id: m, "data-disabled": re(n.disabled), "data-invalid": re(n.invalid), "data-readonly": re(n.readOnly), htmlFor: l }), w = te(() => {
    let C = [];
    return o() && n.invalid && C.push(p), i() && C.push(g), C;
  }), y = () => ({ "aria-describedby": w().join(" ") || void 0, "aria-invalid": uo(n.invalid), "data-invalid": re(n.invalid), "data-required": re(n.required), "data-readonly": re(n.readOnly), id: l, required: n.required, disabled: n.disabled, readOnly: n.readOnly || void 0 }), T = () => ({ ...y(), ...nr.input.attrs }), b = () => ({ ...y(), ...nr.textarea.attrs }), S = () => ({ ...y(), ...nr.select.attrs }), _ = () => ({ id: g, ...nr.helperText.attrs, "data-disabled": re(n.disabled) }), I = () => ({ id: p, ...nr.errorText.attrs, "aria-live": "polite" }), x = () => ({ "aria-hidden": true, ...nr.requiredIndicator.attrs });
  return te(() => ({ ariaDescribedby: w().join(" "), ids: { control: l, label: m, errorText: p, helperText: g }, refs: { rootRef: c }, disabled: n.disabled, invalid: n.invalid, readOnly: n.readOnly, required: n.required, getLabelProps: v, getRootProps: f, getInputProps: T, getTextareaProps: b, getSelectProps: S, getHelperTextProps: _, getErrorTextProps: I, getRequiredIndicatorProps: x }));
};
var Jv = (e) => {
  let [t, r] = Ie()(e, ["id", "ids", "disabled", "invalid", "readOnly", "required"]), n = Zv(t), o = U(() => n().getRootProps(), r);
  return h(Op, { value: n, get children() {
    return h(V.div, he(o, { ref(a) {
      var i = Oo(n().refs.rootRef, e.ref);
      typeof i == "function" && i(a);
    } }));
  } });
};
var Qv = (e) => {
  let [{ value: t }, r] = Ie()(e, ["value"]), n = U(() => t().getRootProps(), r);
  return h(Op, { value: t, get children() {
    return h(V.div, n);
  } });
};
var e0 = (e) => {
  let t = Mt(), r = U(() => t == null ? void 0 : t().getSelectProps(), e);
  return h(V.select, r);
};
var t0 = (e) => {
  let t = Mt(), r, [n, o] = ct(e, ["autoresize"]), a = U(() => t == null ? void 0 : t().getTextareaProps(), () => ({ style: { resize: n.autoresize ? "none" : void 0 } }), o);
  return ve(() => {
    if (!n.autoresize) return;
    let i = Vv(r);
    ue(() => i == null ? void 0 : i());
  }), h(V.textarea, he(a, { ref(i) {
    var s = Oo((l) => r = l, e.ref);
    typeof s == "function" && s(i);
  } }));
};
var r0 = {};
yr(r0, { Context: () => Hv, ErrorText: () => Gv, HelperText: () => Wv, Input: () => qv, Label: () => Yv, RequiredIndicator: () => Kv, Root: () => Jv, RootProvider: () => Qv, Select: () => e0, Textarea: () => t0 });
var n0 = gt("toast").parts("group", "root", "title", "description", "actionTrigger", "closeTrigger");
var cn = n0.build();
var o0 = (e) => `toast-group:${e}`;
var Rc = (e, t) => e.getById(`toast-group:${t}`);
var Ap = (e) => `toast:${e.id}`;
var Nc = (e) => e.getById(Ap(e));
var Dc = (e) => `toast:${e.id}:title`;
var Lc = (e) => `toast:${e.id}:description`;
var a0 = (e) => `toast${e.id}:close`;
var Mc = { info: 5e3, error: 5e3, success: 2e3, loading: 1 / 0, DEFAULT: 5e3 };
function Ni(e, t) {
  return e ?? Mc[t] ?? Mc.DEFAULT;
}
var i0 = (e) => typeof e == "string" ? { left: e, right: e, bottom: e, top: e } : e;
function s0(e, t) {
  var _a5;
  let { prop: r, computed: n, context: o } = e, { offsets: a, gap: i } = r("store").attrs, s = o.get("heights"), l = i0(a), d = r("dir") === "rtl", c = t.replace("-start", d ? "-right" : "-left").replace("-end", d ? "-left" : "-right"), u = c.includes("right"), p = c.includes("left"), g = { position: "fixed", pointerEvents: n("count") > 0 ? void 0 : "none", display: "flex", flexDirection: "column", "--gap": `${i}px`, "--first-height": `${((_a5 = s[0]) == null ? void 0 : _a5.height) || 0}px`, zIndex: tp }, m = "center";
  if (u && (m = "flex-end"), p && (m = "flex-start"), g.alignItems = m, c.includes("top")) {
    let f = l.top;
    g.top = `max(env(safe-area-inset-top, 0px), ${f})`;
  }
  if (c.includes("bottom")) {
    let f = l.bottom;
    g.bottom = `max(env(safe-area-inset-bottom, 0px), ${f})`;
  }
  if (!c.includes("left")) {
    let f = l.right;
    g.insetInlineEnd = `calc(env(safe-area-inset-right, 0px) + ${f})`;
  }
  if (!c.includes("right")) {
    let f = l.left;
    g.insetInlineStart = `calc(env(safe-area-inset-left, 0px) + ${f})`;
  }
  return g;
}
function l0(e, t) {
  let { prop: r, context: n, computed: o } = e, a = r("parent"), i = a.computed("placement"), { gap: s } = a.prop("store").attrs, [l] = i.split("-"), d = n.get("mounted"), c = n.get("remainingTime"), u = o("height"), p = o("frontmost"), g = !p, m = !r("stacked"), f = r("stacked"), v = r("type") === "loading" ? Number.MAX_SAFE_INTEGER : c, w = o("heightIndex") * s + o("heightBefore"), y = { position: "absolute", pointerEvents: "auto", "--opacity": "0", "--remove-delay": `${r("removeDelay")}ms`, "--duration": `${v}ms`, "--initial-height": `${u}px`, "--offset": `${w}px`, "--index": r("index"), "--z-index": o("zIndex"), "--lift-amount": "calc(var(--lift) * var(--gap))", "--y": "100%", "--x": "0" }, T = (b) => Object.assign(y, b);
  return l === "top" ? T({ top: "0", "--sign": "-1", "--y": "-100%", "--lift": "1" }) : l === "bottom" && T({ bottom: "0", "--sign": "1", "--y": "100%", "--lift": "-1" }), d && (T({ "--y": "0", "--opacity": "1" }), f && T({ "--y": "calc(var(--lift) * var(--offset))", "--height": "var(--initial-height)" })), t || T({ "--opacity": "0", pointerEvents: "none" }), g && m && (T({ "--base-scale": "var(--index) * 0.05 + 1", "--y": "calc(var(--lift-amount) * var(--index))", "--scale": "calc(-1 * var(--base-scale))", "--height": "var(--first-height)" }), t || T({ "--y": "calc(var(--sign) * 40%)" })), g && f && !t && T({ "--y": "calc(var(--lift) * var(--offset) + var(--lift) * -100%)" }), p && !t && T({ "--y": "calc(var(--lift) * -100%)" }), y;
}
function c0(e, t) {
  let { computed: r } = e, n = { position: "absolute", inset: "0", scale: "1 2", pointerEvents: t ? "none" : "auto" }, o = (a) => Object.assign(n, a);
  return r("frontmost") && !t && o({ height: "calc(var(--initial-height) + 80%)" }), n;
}
function d0() {
  return { position: "absolute", left: "0", height: "calc(var(--gap) + 2px)", bottom: "100%", width: "100%" };
}
function u0(e, t) {
  let { context: r, prop: n, send: o, refs: a, computed: i } = e;
  return { getCount() {
    return r.get("toasts").length;
  }, getToasts() {
    return r.get("toasts");
  }, getGroupProps(s = {}) {
    let { label: l = "Notifications" } = s, { hotkey: d } = n("store").attrs, c = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""), u = i("placement"), [p, g = "center"] = u.split("-");
    return t.element({ ...cn.group.attrs, dir: n("dir"), tabIndex: -1, "aria-label": `${u} ${l} ${c}`, id: o0(u), "data-placement": u, "data-side": p, "data-align": g, "aria-live": "polite", role: "region", style: s0(e, u), onMouseMove() {
      o({ type: "REGION.POINTER_ENTER", placement: u });
    }, onMouseLeave() {
      o({ type: "REGION.POINTER_LEAVE", placement: u });
    }, onFocus(m) {
      o({ type: "REGION.FOCUS", target: m.relatedTarget });
    }, onBlur(m) {
      a.get("isFocusWithin") && !At(m.currentTarget, m.relatedTarget) && queueMicrotask(() => o({ type: "REGION.BLUR" }));
    } });
  }, subscribe(s) {
    return n("store").subscribe(() => s(r.get("toasts")));
  } };
}
var p0 = { props({ props: e }) {
  return { dir: "ltr", id: Zu(), ...e, store: e.store };
}, initialState({ prop: e }) {
  return e("store").attrs.overlap ? "overlap" : "stack";
}, refs() {
  return { lastFocusedEl: null, isFocusWithin: false, dismissableCleanup: void 0 };
}, context({ bindable: e }) {
  return { toasts: e(() => ({ defaultValue: [], sync: true, hash: (t) => t.map((r) => r.id).join(",") })), heights: e(() => ({ defaultValue: [], sync: true })) };
}, computed: { count: ({ context: e }) => e.get("toasts").length, overlap: ({ prop: e }) => e("store").attrs.overlap, placement: ({ prop: e }) => e("store").attrs.placement }, effects: ["subscribeToStore", "trackDocumentVisibility", "trackHotKeyPress"], watch({ track: e, context: t, action: r }) {
  e([() => t.hash("toasts")], () => {
    queueMicrotask(() => {
      r(["collapsedIfEmpty", "setDismissableBranch"]);
    });
  });
}, exit: ["clearDismissableBranch", "clearLastFocusedEl"], on: { "DOC.HOTKEY": { actions: ["focusRegionEl"] }, "REGION.BLUR": [{ guard: "isOverlapping", target: "overlap", actions: ["collapseToasts", "resumeToasts", "restoreLastFocusedEl"] }, { target: "stack", actions: ["resumeToasts", "restoreLastFocusedEl"] }], "TOAST.REMOVE": { actions: ["removeToast", "removeHeight"] }, "TOAST.PAUSE": { actions: ["pauseToasts"] } }, states: { stack: { on: { "REGION.POINTER_LEAVE": [{ guard: "isOverlapping", target: "overlap", actions: ["resumeToasts", "collapseToasts"] }, { actions: ["resumeToasts"] }], "REGION.OVERLAP": { target: "overlap", actions: ["collapseToasts"] }, "REGION.FOCUS": { actions: ["setLastFocusedEl", "pauseToasts"] }, "REGION.POINTER_ENTER": { actions: ["pauseToasts"] } } }, overlap: { on: { "REGION.STACK": { target: "stack", actions: ["expandToasts"] }, "REGION.POINTER_ENTER": { target: "stack", actions: ["pauseToasts", "expandToasts"] }, "REGION.FOCUS": { target: "stack", actions: ["setLastFocusedEl", "pauseToasts", "expandToasts"] } } } }, implementations: { guards: { isOverlapping: ({ computed: e }) => e("overlap") }, effects: { subscribeToStore({ context: e, prop: t }) {
  return t("store").subscribe((r) => {
    if (r.dismiss) {
      e.set("toasts", (n) => n.filter((o) => o.id !== r.id));
      return;
    }
    e.set("toasts", (n) => {
      let o = n.findIndex((a) => a.id === r.id);
      return o !== -1 ? [...n.slice(0, o), { ...n[o], ...r }, ...n.slice(o + 1)] : [r, ...n];
    });
  });
}, trackHotKeyPress({ prop: e, send: t }) {
  return ke(document, "keydown", (r) => {
    let { hotkey: n } = e("store").attrs;
    n.every((o) => r[o] || r.code === o) && t({ type: "DOC.HOTKEY" });
  }, { capture: true });
}, trackDocumentVisibility({ prop: e, send: t, scope: r }) {
  let { pauseOnPageIdle: n } = e("store").attrs;
  if (!n) return;
  let o = r.getDoc();
  return ke(o, "visibilitychange", () => {
    let a = o.visibilityState === "hidden";
    t({ type: a ? "PAUSE_ALL" : "RESUME_ALL" });
  });
} }, actions: { setDismissableBranch({ refs: e, context: t, computed: r, scope: n }) {
  var _a5;
  let o = t.get("toasts"), a = r("placement"), i = o.length > 0;
  if (!i) {
    (_a5 = e.get("dismissableCleanup")) == null ? void 0 : _a5();
    return;
  }
  if (i && e.get("dismissableCleanup")) return;
  let s = Fv(() => Rc(n, a), { defer: true });
  e.set("dismissableCleanup", s);
}, clearDismissableBranch({ refs: e }) {
  var _a5;
  (_a5 = e.get("dismissableCleanup")) == null ? void 0 : _a5();
}, focusRegionEl({ scope: e, computed: t }) {
  queueMicrotask(() => {
    var _a5;
    (_a5 = Rc(e, t("placement"))) == null ? void 0 : _a5.focus();
  });
}, pauseToasts({ prop: e }) {
  e("store").pause();
}, resumeToasts({ prop: e }) {
  e("store").resume();
}, expandToasts({ prop: e }) {
  e("store").expand();
}, collapseToasts({ prop: e }) {
  e("store").collapse();
}, removeToast({ prop: e, event: t }) {
  e("store").remove(t.id);
}, removeHeight({ event: e, context: t }) {
  (e == null ? void 0 : e.id) != null && queueMicrotask(() => {
    t.set("heights", (r) => r.filter((n) => n.id !== e.id));
  });
}, collapsedIfEmpty({ send: e, computed: t }) {
  !t("overlap") || t("count") > 1 || e({ type: "REGION.OVERLAP" });
}, setLastFocusedEl({ refs: e, event: t }) {
  e.get("isFocusWithin") || !t.target || (e.set("isFocusWithin", true), e.set("lastFocusedEl", t.target));
}, restoreLastFocusedEl({ refs: e }) {
  var _a5;
  e.get("lastFocusedEl") && ((_a5 = e.get("lastFocusedEl")) == null ? void 0 : _a5.focus({ preventScroll: true }), e.set("lastFocusedEl", null), e.set("isFocusWithin", false));
}, clearLastFocusedEl({ refs: e }) {
  var _a5;
  e.get("lastFocusedEl") && ((_a5 = e.get("lastFocusedEl")) == null ? void 0 : _a5.focus({ preventScroll: true }), e.set("lastFocusedEl", null), e.set("isFocusWithin", false));
} } } };
function g0(e, t) {
  let { state: r, send: n, prop: o, scope: a, context: i, computed: s } = e, l = r.hasTag("visible"), d = r.hasTag("paused"), c = i.get("mounted"), u = s("frontmost"), p = o("parent").computed("placement"), g = o("type"), m = o("stacked"), f = o("title"), v = o("description"), w = o("action"), [y, T = "center"] = p.split("-");
  return { type: g, title: f, description: v, placement: p, visible: l, paused: d, closable: !!o("closable"), pause() {
    n({ type: "PAUSE" });
  }, resume() {
    n({ type: "RESUME" });
  }, dismiss() {
    n({ type: "DISMISS", src: "programmatic" });
  }, getRootProps() {
    return t.element({ ...cn.root.attrs, dir: o("dir"), id: Ap(a), "data-state": l ? "open" : "closed", "data-type": g, "data-placement": p, "data-align": T, "data-side": y, "data-mounted": re(c), "data-paused": re(d), "data-first": re(u), "data-sibling": re(!u), "data-stack": re(m), "data-overlap": re(!m), role: "status", "aria-atomic": "true", "aria-describedby": v ? Lc(a) : void 0, "aria-labelledby": f ? Dc(a) : void 0, tabIndex: 0, style: l0(e, l), onKeyDown(b) {
      b.defaultPrevented || b.key == "Escape" && (n({ type: "DISMISS", src: "keyboard" }), b.preventDefault());
    } });
  }, getGhostBeforeProps() {
    return t.element({ "data-ghost": "before", style: c0(e, l) });
  }, getGhostAfterProps() {
    return t.element({ "data-ghost": "after", style: d0() });
  }, getTitleProps() {
    return t.element({ ...cn.title.attrs, id: Dc(a) });
  }, getDescriptionProps() {
    return t.element({ ...cn.description.attrs, id: Lc(a) });
  }, getActionTriggerProps() {
    return t.button({ ...cn.actionTrigger.attrs, type: "button", onClick(b) {
      var _a5;
      b.defaultPrevented || ((_a5 = w == null ? void 0 : w.onClick) == null ? void 0 : _a5.call(w), n({ type: "DISMISS", src: "user" }));
    } });
  }, getCloseTriggerProps() {
    return t.button({ id: a0(a), ...cn.closeTrigger.attrs, type: "button", "aria-label": "Dismiss notification", onClick(b) {
      b.defaultPrevented || n({ type: "DISMISS", src: "user" });
    } });
  } };
}
var { not: h0 } = nl();
var f0 = { props({ props: e }) {
  return Qu(e, ["id", "type", "parent", "removeDelay"], "toast"), { closable: true, ...e, duration: Ni(e.duration, e.type) };
}, initialState({ prop: e }) {
  return e("type") === "loading" || e("duration") === 1 / 0 ? "visible:persist" : "visible";
}, context({ prop: e, bindable: t }) {
  return { remainingTime: t(() => ({ defaultValue: Ni(e("duration"), e("type")) })), createdAt: t(() => ({ defaultValue: Date.now() })), mounted: t(() => ({ defaultValue: false })), initialHeight: t(() => ({ defaultValue: 0 })) };
}, refs() {
  return { closeTimerStartTime: Date.now(), lastCloseStartTimerStartTime: 0 };
}, computed: { zIndex: ({ prop: e }) => {
  let t = e("parent").context.get("toasts"), r = t.findIndex((n) => n.id === e("id"));
  return t.length - r;
}, height: ({ prop: e }) => {
  var _a5;
  return ((_a5 = e("parent").context.get("heights").find((t) => t.id === e("id"))) == null ? void 0 : _a5.height) ?? 0;
}, heightIndex: ({ prop: e }) => e("parent").context.get("heights").findIndex((t) => t.id === e("id")), frontmost: ({ prop: e }) => e("index") === 0, heightBefore: ({ prop: e }) => {
  let t = e("parent").context.get("heights"), r = t.findIndex((n) => n.id === e("id"));
  return t.reduce((n, o, a) => a >= r ? n : n + o.height, 0);
}, shouldPersist: ({ prop: e }) => e("type") === "loading" || e("duration") === 1 / 0 }, watch({ track: e, prop: t, send: r }) {
  e([() => t("message")], () => {
    let n = t("message");
    n && r({ type: n, src: "programmatic" });
  }), e([() => t("type"), () => t("duration")], () => {
    r({ type: "UPDATE" });
  });
}, on: { UPDATE: [{ guard: "shouldPersist", target: "visible:persist", actions: ["resetCloseTimer"] }, { target: "visible:updating", actions: ["resetCloseTimer"] }], MEASURE: { actions: ["measureHeight"] } }, entry: ["setMounted", "measureHeight", "invokeOnVisible"], effects: ["trackHeight"], states: { "visible:updating": { tags: ["visible", "updating"], effects: ["waitForNextTick"], on: { SHOW: { target: "visible" } } }, "visible:persist": { tags: ["visible", "paused"], on: { RESUME: { guard: h0("isLoadingType"), target: "visible", actions: ["setCloseTimer"] }, DISMISS: { target: "dismissing" } } }, visible: { tags: ["visible"], effects: ["waitForDuration"], on: { DISMISS: { target: "dismissing" }, PAUSE: { target: "visible:persist", actions: ["syncRemainingTime"] } } }, dismissing: { entry: ["invokeOnDismiss"], effects: ["waitForRemoveDelay"], on: { REMOVE: { target: "unmounted", actions: ["notifyParentToRemove"] } } }, unmounted: { entry: ["invokeOnUnmount"] } }, implementations: { effects: { waitForRemoveDelay({ prop: e, send: t }) {
  return Ci(() => {
    t({ type: "REMOVE", src: "timer" });
  }, e("removeDelay"));
}, waitForDuration({ send: e, context: t, computed: r }) {
  if (!r("shouldPersist")) return Ci(() => {
    e({ type: "DISMISS", src: "timer" });
  }, t.get("remainingTime"));
}, waitForNextTick({ send: e }) {
  return Ci(() => {
    e({ type: "SHOW", src: "timer" });
  }, 0);
}, trackHeight({ scope: e, prop: t }) {
  let r;
  return xe(() => {
    let n = Nc(e);
    if (!n) return;
    let o = () => {
      let s = n.style.height;
      n.style.height = "auto";
      let l = n.getBoundingClientRect().height;
      n.style.height = s;
      let d = { id: t("id"), height: l };
      Uc(t("parent"), d);
    }, a = e.getWin(), i = new a.MutationObserver(o);
    i.observe(n, { childList: true, subtree: true, characterData: true }), r = () => i.disconnect();
  }), () => r == null ? void 0 : r();
} }, guards: { isLoadingType: ({ prop: e }) => e("type") === "loading", shouldPersist: ({ computed: e }) => e("shouldPersist") }, actions: { setMounted({ context: e }) {
  xe(() => {
    e.set("mounted", true);
  });
}, measureHeight({ scope: e, prop: t, context: r }) {
  queueMicrotask(() => {
    let n = Nc(e);
    if (!n) return;
    let o = n.style.height;
    n.style.height = "auto";
    let a = n.getBoundingClientRect().height;
    n.style.height = o, r.set("initialHeight", a);
    let i = { id: t("id"), height: a };
    Uc(t("parent"), i);
  });
}, setCloseTimer({ refs: e }) {
  e.set("closeTimerStartTime", Date.now());
}, resetCloseTimer({ context: e, refs: t, prop: r }) {
  t.set("closeTimerStartTime", Date.now()), e.set("remainingTime", Ni(r("duration"), r("type")));
}, syncRemainingTime({ context: e, refs: t }) {
  e.set("remainingTime", (r) => {
    let n = t.get("closeTimerStartTime"), o = Date.now() - n;
    return t.set("lastCloseStartTimerStartTime", Date.now()), r - o;
  });
}, notifyParentToRemove({ prop: e }) {
  e("parent").send({ type: "TOAST.REMOVE", id: e("id") });
}, invokeOnDismiss({ prop: e, event: t }) {
  var _a5;
  (_a5 = e("onStatusChange")) == null ? void 0 : _a5({ status: "dismissing", src: t.src });
}, invokeOnUnmount({ prop: e }) {
  var _a5;
  (_a5 = e("onStatusChange")) == null ? void 0 : _a5({ status: "unmounted" });
}, invokeOnVisible({ prop: e }) {
  var _a5;
  (_a5 = e("onStatusChange")) == null ? void 0 : _a5({ status: "visible" });
} } } };
function Uc(e, t) {
  let { id: r, height: n } = t;
  e.context.set("heights", (o) => o.find((a) => a.id === r) ? o.map((a) => a.id === r ? { ...a, height: n } : a) : [{ id: r, height: n }, ...o]);
}
var m0 = (e, t) => ({ ...t, ...Za(e) });
function b0(e) {
  let t = m0(e, { placement: "bottom", overlap: false, max: 24, gap: 16, offsets: "1rem", hotkey: ["altKey", "KeyT"], removeDelay: 200, pauseOnPageIdle: true }), r = [], n = [], o = /* @__PURE__ */ new Set(), a = [], i = (p) => (r.push(p), () => {
    let g = r.indexOf(p);
    r.splice(g, 1);
  }), s = (p) => (r.forEach((g) => g(p)), p), l = (p) => {
    if (n.length >= t.max) {
      a.push(p);
      return;
    }
    s(p), n.unshift(p);
  }, d = () => {
    for (; a.length > 0 && n.length < t.max; ) {
      let p = a.shift();
      p && (s(p), n.unshift(p));
    }
  }, c = (p) => {
    let g = p.id ?? `toast:${Zu()}`, m = n.find((f) => f.id === g);
    return o.has(g) && o.delete(g), m ? n = n.map((f) => f.id === g ? s({ ...f, ...p, id: g }) : f) : l({ id: g, duration: t.duration, removeDelay: t.removeDelay, type: "info", ...p, stacked: !t.overlap, gap: t.gap }), g;
  }, u = (p) => (o.add(p), p ? (r.forEach((g) => g({ id: p, dismiss: true })), n = n.filter((g) => g.id !== p), d()) : (n.forEach((g) => {
    r.forEach((m) => m({ id: g.id, dismiss: true }));
  }), n = [], a = []), p);
  return { attrs: t, subscribe: i, create: c, update: (p, g) => c({ id: p, ...g }), remove: u, dismiss: (p) => {
    p != null ? n = n.map((g) => g.id === p ? s({ ...g, message: "DISMISS" }) : g) : n = n.map((g) => s({ ...g, message: "DISMISS" }));
  }, error: (p) => c({ ...p, type: "error" }), success: (p) => c({ ...p, type: "success" }), info: (p) => c({ ...p, type: "info" }), warning: (p) => c({ ...p, type: "warning" }), loading: (p) => c({ ...p, type: "loading" }), getVisibleToasts: () => n.filter((p) => !o.has(p.id)), getCount: () => n.length, promise: (p, g, m = {}) => {
    if (!g || !g.loading) {
      co("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");
      return;
    }
    let f = c({ ...m, ...g.loading, promise: p, type: "loading" }), v = true, w, y = Xn(p).then(async (T) => {
      if (w = ["resolve", T], y0(T) && !T.ok) {
        v = false;
        let b = Xn(g.error, `HTTP Error! status: ${T.status}`);
        c({ ...m, ...b, id: f, type: "error" });
      } else if (g.success !== void 0) {
        v = false;
        let b = Xn(g.success, T);
        c({ ...m, ...b, id: f, type: "success" });
      }
    }).catch(async (T) => {
      if (w = ["reject", T], g.error !== void 0) {
        v = false;
        let b = Xn(g.error, T);
        c({ ...m, ...b, id: f, type: "error" });
      }
    }).finally(() => {
      var _a5;
      v && u(f), (_a5 = g.finally) == null ? void 0 : _a5.call(g);
    });
    return { id: f, unwrap: () => new Promise((T, b) => y.then(() => w[0] === "reject" ? b(w[1]) : T(w[1])).catch(b)) };
  }, pause: (p) => {
    p != null ? n = n.map((g) => g.id === p ? s({ ...g, message: "PAUSE" }) : g) : n = n.map((g) => s({ ...g, message: "PAUSE" }));
  }, resume: (p) => {
    p != null ? n = n.map((g) => g.id === p ? s({ ...g, message: "RESUME" }) : g) : n = n.map((g) => s({ ...g, message: "RESUME" }));
  }, isVisible: (p) => !o.has(p) && !!n.find((g) => g.id === p), isDismissed: (p) => o.has(p), expand: () => {
    n = n.map((p) => s({ ...p, stacked: true }));
  }, collapse: () => {
    n = n.map((p) => s({ ...p, stacked: false }));
  } };
}
var y0 = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number";
var Bc = { connect: u0, machine: p0 };
var v0 = (e) => b0(e);
var [w0, _n] = Ve({ hookName: "useToastContext", providerName: "<ToastProvider />" });
var x0 = (e) => {
  let t = _n(), r = U(() => t().getActionTriggerProps(), e);
  return h(V.button, r);
};
var k0 = (e) => {
  let t = _n(), r = U(() => t().getCloseTriggerProps(), e);
  return h(V.button, r);
};
var T0 = (e) => e.children(_n());
var S0 = (e) => {
  let t = _n(), r = U(() => t().getDescriptionProps(), e);
  return h(V.div, r);
};
var E0 = P("<div><div></div><div>");
var C0 = (e) => {
  let t = _n(), r = U(() => t().getRootProps(), e);
  return (() => {
    var n = E0(), o = n.firstChild, a = o.nextSibling;
    return _e(n, r, false, true), _e(o, he(() => t().getGhostBeforeProps()), false, false), E(n, () => e.children, a), _e(a, he(() => t().getGhostAfterProps()), false, false), n;
  })();
};
var F0 = (e) => {
  let t = _n(), r = U(() => t().getTitleProps(), e);
  return h(V.div, r);
};
var P0 = (e) => {
  let [t, r] = ct(e, ["toaster", "children"]), n = En(), o = Zt(), a = fr(Bc.machine, () => {
    var _a5, _b2;
    return { store: t.toaster, id: Et(), dir: (_a5 = n()) == null ? void 0 : _a5.dir, getRootNode: (_b2 = o()) == null ? void 0 : _b2.getRootNode };
  }), i = te(() => Bc.connect(a, mr)), s = te(() => i().getToasts()), l = U(() => i().getGroupProps(), r);
  return h(V.div, he(l, { get children() {
    return h(Of, { get each() {
      return s();
    }, by: "id", children: (d, c) => h(_0, { value: d, index: c, parent: a, children: (u) => t.children(u) }) });
  } }));
};
var _0 = (e) => {
  let t = Zt(), r = te(() => ({ ...e.value(), parent: e.parent, index: e.index(), getRootNode: t().getRootNode })), n = fr(f0, r), o = te(() => g0(n, mr));
  return h(w0, { value: o, get children() {
    return e.children(e.value);
  } });
};
var Zn = {};
yr(Zn, { ActionTrigger: () => x0, CloseTrigger: () => k0, Context: () => T0, Description: () => S0, Root: () => C0, Title: () => F0 });
var tn = /* @__PURE__ */ new WeakMap();
var Jo = /* @__PURE__ */ new WeakMap();
var Qo = {};
var Di = 0;
var Rp = (e) => e && (e.host || Rp(e.parentNode));
var I0 = (e, t) => t.map((r) => {
  if (e.contains(r)) return r;
  let n = Rp(r);
  return n && e.contains(n) ? n : (console.error("[zag-js > ariaHidden] target", r, "in not contained inside", e, ". Doing nothing"), null);
}).filter((r) => !!r);
var O0 = /* @__PURE__ */ new Set(["script", "output", "status", "next-route-announcer"]);
var A0 = (e) => O0.has(e.localName) || e.role === "status" || e.hasAttribute("aria-live") ? true : e.matches("[data-live-announcer]");
var R0 = (e, t) => {
  let { parentNode: r, markerName: n, controlAttribute: o } = t, a = I0(r, Array.isArray(e) ? e : [e]);
  Qo[n] || (Qo[n] = /* @__PURE__ */ new WeakMap());
  let i = Qo[n], s = [], l = /* @__PURE__ */ new Set(), d = new Set(a), c = (p) => {
    !p || l.has(p) || (l.add(p), c(p.parentNode));
  };
  a.forEach(c);
  let u = (p) => {
    !p || d.has(p) || Array.prototype.forEach.call(p.children, (g) => {
      if (l.has(g)) u(g);
      else try {
        if (A0(g)) return;
        let m = g.getAttribute(o) === "true", f = (tn.get(g) || 0) + 1, v = (i.get(g) || 0) + 1;
        tn.set(g, f), i.set(g, v), s.push(g), f === 1 && m && Jo.set(g, true), v === 1 && g.setAttribute(n, ""), m || g.setAttribute(o, "true");
      } catch (m) {
        console.error("[zag-js > ariaHidden] cannot operate on ", g, m);
      }
    });
  };
  return u(r), l.clear(), Di++, () => {
    s.forEach((p) => {
      let g = tn.get(p) - 1, m = i.get(p) - 1;
      tn.set(p, g), i.set(p, m), g || (Jo.has(p) || p.removeAttribute(o), Jo.delete(p)), m || p.removeAttribute(n);
    }), Di--, Di || (tn = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Qo = {});
  };
};
var N0 = (e) => (Array.isArray(e) ? e[0] : e).ownerDocument.body;
var D0 = (e, t = N0(e), r = "data-aria-hidden") => {
  if (t) return R0(e, { parentNode: t, markerName: r, controlAttribute: "aria-hidden" });
};
var L0 = (e) => {
  let t = requestAnimationFrame(() => e());
  return () => cancelAnimationFrame(t);
};
function M0(e, t = {}) {
  let { defer: r = true } = t, n = r ? L0 : (a) => a(), o = [];
  return o.push(n(() => {
    let a = (typeof e == "function" ? e() : e).filter(Boolean);
    a.length !== 0 && o.push(D0(a));
  })), () => {
    o.forEach((a) => a == null ? void 0 : a());
  };
}
var Li = "data-scroll-lock";
function U0(e) {
  let t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function B0(e) {
  let t = e ?? document, r = t.defaultView ?? window, { documentElement: n, body: o } = t;
  if (o.hasAttribute(Li)) return;
  let a = r.innerWidth - n.clientWidth;
  o.setAttribute(Li, "");
  let i = () => vb(n, "--scrollbar-width", `${a}px`), s = U0(n), l = () => _a(o, { overflow: "hidden", [s]: `${a}px` }), d = () => {
    let { scrollX: u, scrollY: p, visualViewport: g } = r, m = (g == null ? void 0 : g.offsetLeft) ?? 0, f = (g == null ? void 0 : g.offsetTop) ?? 0, v = _a(o, { position: "fixed", overflow: "hidden", top: `${-(p - Math.floor(f))}px`, left: `${-(u - Math.floor(m))}px`, right: "0", [s]: `${a}px` });
    return () => {
      v == null ? void 0 : v(), r.scrollTo({ left: u, top: p, behavior: "instant" });
    };
  }, c = [i(), ei() ? d() : l()];
  return () => {
    c.forEach((u) => u == null ? void 0 : u()), o.removeAttribute(Li);
  };
}
var Jn = (e, t) => ({ x: e, y: t });
function $0(e) {
  let { x: t, y: r, width: n, height: o } = e, a = t + n / 2, i = r + o / 2;
  return { x: t, y: r, width: n, height: o, minX: t, minY: r, maxX: t + n, maxY: r + o, midX: a, midY: i, center: Jn(a, i) };
}
function z0(e) {
  let t = Jn(e.minX, e.minY), r = Jn(e.maxX, e.minY), n = Jn(e.maxX, e.maxY), o = Jn(e.minX, e.maxY);
  return { top: t, right: r, bottom: n, left: o };
}
var { min: tI, max: rI } = Math;
function j0(e, t) {
  let r = $0(e), { top: n, right: o, left: a, bottom: i } = z0(r), [s] = t.split("-");
  return { top: [a, n, o, i], right: [n, o, i, a], bottom: [n, a, i, o], left: [o, n, a, i] }[s];
}
function V0(e, t) {
  let { x: r, y: n } = t, o = false;
  for (let a = 0, i = e.length - 1; a < e.length; i = a++) {
    let s = e[a].x, l = e[a].y, d = e[i].x, c = e[i].y;
    l > n != c > n && r < (d - s) * (n - l) / (c - l) + s && (o = !o);
  }
  return o;
}
var { sign: nI, abs: oI, min: aI } = Math;
var H0 = gt("menu").parts("arrow", "arrowTip", "content", "contextTrigger", "indicator", "item", "itemGroup", "itemGroupLabel", "itemIndicator", "itemText", "positioner", "separator", "trigger", "triggerItem");
var Ye = H0.build();
var Na = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.trigger) ?? `menu:${e.id}:trigger`;
};
var Np = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.contextTrigger) ?? `menu:${e.id}:ctx-trigger`;
};
var oo = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.content) ?? `menu:${e.id}:content`;
};
var G0 = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.arrow) ?? `menu:${e.id}:arrow`;
};
var Dp = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.positioner) ?? `menu:${e.id}:popper`;
};
var W0 = (e, t) => {
  var _a5, _b2;
  return ((_b2 = (_a5 = e.ids) == null ? void 0 : _a5.group) == null ? void 0 : _b2.call(_a5, t)) ?? `menu:${e.id}:group:${t}`;
};
var fo = (e, t) => `${e.id}/${t}`;
var Sr = (e) => (e == null ? void 0 : e.dataset.value) ?? null;
var $c = (e, t) => {
  var _a5, _b2;
  return ((_b2 = (_a5 = e.ids) == null ? void 0 : _a5.groupLabel) == null ? void 0 : _b2.call(_a5, t)) ?? `menu:${e.id}:group-label:${t}`;
};
var sr = (e) => e.getById(oo(e));
var zc = (e) => e.getById(Dp(e));
var ea = (e) => e.getById(Na(e));
var Lp = (e, t) => t ? e.getById(fo(e, t)) : null;
var Mi = (e) => e.getById(Np(e));
var Do = (e) => {
  let t = `[role^="menuitem"][data-ownedby=${CSS.escape(oo(e))}]:not([data-disabled])`;
  return pp(sr(e), t);
};
var q0 = (e) => Rf(Do(e));
var Y0 = (e) => Nf(Do(e));
var gl = (e, t) => t ? e.id === t || e.dataset.value === t : false;
var K0 = (e, t) => {
  let r = Do(e), n = r.findIndex((o) => gl(o, t.value));
  return Uf(r, n, { loop: t.loop ?? t.loopFocus });
};
var X0 = (e, t) => {
  let r = Do(e), n = r.findIndex((o) => gl(o, t.value));
  return Bf(r, n, { loop: t.loop ?? t.loopFocus });
};
var Z0 = (e, t) => {
  let r = Do(e), n = r.find((o) => gl(o, t.value));
  return gp(r, { state: t.typeaheadState, key: t.key, activeId: (n == null ? void 0 : n.id) ?? null });
};
var ta = (e) => We(e) && (e.dataset.disabled === "" || e.hasAttribute("disabled"));
var J0 = (e) => {
  var _a5;
  return !!((_a5 = e == null ? void 0 : e.getAttribute("role")) == null ? void 0 : _a5.startsWith("menuitem")) && !!(e == null ? void 0 : e.hasAttribute("aria-controls"));
};
var xs = "menu:select";
function Q0(e, t) {
  if (!e) return;
  let r = dt(e), n = new r.CustomEvent(xs, { detail: { value: t } });
  e.dispatchEvent(n);
}
function ew(e, t) {
  let { context: r, send: n, state: o, computed: a, prop: i, scope: s } = e, l = o.hasTag("open"), d = r.get("isSubmenu"), c = a("isTypingAhead"), u = i("composite"), p = r.get("currentPlacement"), g = r.get("anchorPoint"), m = r.get("highlightedValue"), f = fv({ ...i("positioning"), placement: g ? "bottom" : p });
  function v(b) {
    return { id: fo(s, b.value), disabled: !!b.disabled, highlighted: m === b.value };
  }
  function w(b) {
    let S = b.valueText ?? b.value;
    return { ...b, id: b.value, valueText: S };
  }
  function y(b) {
    return { ...v(w(b)), checked: !!b.checked };
  }
  function T(b) {
    let { closeOnSelect: S, valueText: _, value: I } = b, x = v(b), C = fo(s, I);
    return t.element({ ...Ye.item.attrs, id: C, role: "menuitem", "aria-disabled": uo(x.disabled), "data-disabled": re(x.disabled), "data-ownedby": oo(s), "data-highlighted": re(x.highlighted), "data-value": I, "data-valuetext": _, onDragStart(R) {
      R.currentTarget.matches("a[href]") && R.preventDefault();
    }, onPointerMove(R) {
      if (x.disabled || R.pointerType !== "mouse") return;
      let D = R.currentTarget;
      x.highlighted || n({ type: "ITEM_POINTERMOVE", id: C, target: D, closeOnSelect: S });
    }, onPointerLeave(R) {
      var _a5;
      if (x.disabled || R.pointerType !== "mouse" || !((_a5 = e.event.previous()) == null ? void 0 : _a5.type.includes("POINTER"))) return;
      let D = R.currentTarget;
      n({ type: "ITEM_POINTERLEAVE", id: C, target: D, closeOnSelect: S });
    }, onPointerDown(R) {
      if (x.disabled) return;
      let D = R.currentTarget;
      n({ type: "ITEM_POINTERDOWN", target: D, id: C, closeOnSelect: S });
    }, onClick(R) {
      if (lc(R) || sc(R) || x.disabled) return;
      let D = R.currentTarget;
      n({ type: "ITEM_CLICK", target: D, id: C, closeOnSelect: S });
    } });
  }
  return { highlightedValue: m, open: l, setOpen(b) {
    o.hasTag("open") !== b && n({ type: b ? "OPEN" : "CLOSE" });
  }, setHighlightedValue(b) {
    n({ type: "HIGHLIGHTED.SET", value: b });
  }, setParent(b) {
    n({ type: "PARENT.SET", value: b, id: b.prop("id") });
  }, setChild(b) {
    n({ type: "CHILD.SET", value: b, id: b.prop("id") });
  }, reposition(b = {}) {
    n({ type: "POSITIONING.SET", options: b });
  }, addItemListener(b) {
    let S = s.getById(b.id);
    if (!S) return;
    let _ = () => {
      var _a5;
      return (_a5 = b.onSelect) == null ? void 0 : _a5.call(b);
    };
    return S.addEventListener(xs, _), () => S.removeEventListener(xs, _);
  }, getContextTriggerProps() {
    return t.element({ ...Ye.contextTrigger.attrs, dir: i("dir"), id: Np(s), "data-state": l ? "open" : "closed", onPointerDown(b) {
      if (b.pointerType === "mouse") return;
      let S = fn(b);
      n({ type: "CONTEXT_MENU_START", point: S });
    }, onPointerCancel(b) {
      b.pointerType !== "mouse" && n({ type: "CONTEXT_MENU_CANCEL" });
    }, onPointerMove(b) {
      b.pointerType !== "mouse" && n({ type: "CONTEXT_MENU_CANCEL" });
    }, onPointerUp(b) {
      b.pointerType !== "mouse" && n({ type: "CONTEXT_MENU_CANCEL" });
    }, onContextMenu(b) {
      let S = fn(b);
      n({ type: "CONTEXT_MENU", point: S }), b.preventDefault();
    }, style: { WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" } });
  }, getTriggerItemProps(b) {
    let S = b.getTriggerProps();
    return hp(T({ value: S.id }), S);
  }, getTriggerProps() {
    return t.button({ ...d ? Ye.triggerItem.attrs : Ye.trigger.attrs, "data-placement": r.get("currentPlacement"), type: "button", dir: i("dir"), id: Na(s), "data-uid": i("id"), "aria-haspopup": u ? "menu" : "dialog", "aria-controls": oo(s), "aria-expanded": l || void 0, "data-state": l ? "open" : "closed", onPointerMove(b) {
      if (b.pointerType !== "mouse" || ta(b.currentTarget) || !d) return;
      let S = fn(b);
      n({ type: "TRIGGER_POINTERMOVE", target: b.currentTarget, point: S });
    }, onPointerLeave(b) {
      if (ta(b.currentTarget) || b.pointerType !== "mouse" || !d) return;
      let S = fn(b);
      n({ type: "TRIGGER_POINTERLEAVE", target: b.currentTarget, point: S });
    }, onPointerDown(b) {
      ta(b.currentTarget) || ip(b) || b.preventDefault();
    }, onClick(b) {
      b.defaultPrevented || ta(b.currentTarget) || n({ type: "TRIGGER_CLICK", target: b.currentTarget });
    }, onBlur() {
      n({ type: "TRIGGER_BLUR" });
    }, onFocus() {
      n({ type: "TRIGGER_FOCUS" });
    }, onKeyDown(b) {
      if (b.defaultPrevented) return;
      let S = { ArrowDown() {
        n({ type: "ARROW_DOWN" });
      }, ArrowUp() {
        n({ type: "ARROW_UP" });
      }, Enter() {
        n({ type: "ARROW_DOWN", src: "enter" });
      }, Space() {
        n({ type: "ARROW_DOWN", src: "space" });
      } }, _ = hs(b, { orientation: "vertical", dir: i("dir") }), I = S[_];
      I && (b.preventDefault(), I(b));
    } });
  }, getIndicatorProps() {
    return t.element({ ...Ye.indicator.attrs, dir: i("dir"), "data-state": l ? "open" : "closed" });
  }, getPositionerProps() {
    return t.element({ ...Ye.positioner.attrs, dir: i("dir"), id: Dp(s), style: f.floating });
  }, getArrowProps() {
    return t.element({ id: G0(s), ...Ye.arrow.attrs, dir: i("dir"), style: f.arrow });
  }, getArrowTipProps() {
    return t.element({ ...Ye.arrowTip.attrs, dir: i("dir"), style: f.arrowTip });
  }, getContentProps() {
    return t.element({ ...Ye.content.attrs, id: oo(s), "aria-label": i("aria-label"), hidden: !l, "data-state": l ? "open" : "closed", role: u ? "menu" : "dialog", tabIndex: 0, dir: i("dir"), "aria-activedescendant": a("highlightedId") || void 0, "aria-labelledby": Na(s), "data-placement": p, onPointerEnter(b) {
      b.pointerType === "mouse" && n({ type: "MENU_POINTERENTER" });
    }, onKeyDown(b) {
      if (b.defaultPrevented || !ap(b)) return;
      let S = tt(b);
      if (!((S == null ? void 0 : S.closest("[role=menu]")) === b.currentTarget || S === b.currentTarget)) return;
      if (b.key === "Tab" && !eb(b)) {
        b.preventDefault();
        return;
      }
      let _ = Lp(s, m), I = { ArrowDown() {
        n({ type: "ARROW_DOWN" });
      }, ArrowUp() {
        n({ type: "ARROW_UP" });
      }, ArrowLeft() {
        n({ type: "ARROW_LEFT" });
      }, ArrowRight() {
        n({ type: "ARROW_RIGHT" });
      }, Enter() {
        var _a5;
        n({ type: "ENTER" }), m != null && vm(_) && ((_a5 = i("navigate")) == null ? void 0 : _a5({ value: m, node: _, href: _.href }));
      }, Space(R) {
        var _a5;
        c ? n({ type: "TYPEAHEAD", key: R.key }) : (_a5 = I.Enter) == null ? void 0 : _a5.call(I, R);
      }, Home() {
        n({ type: "HOME" });
      }, End() {
        n({ type: "END" });
      } }, x = hs(b, { dir: i("dir") }), C = I[x];
      if (C) {
        C(b), b.stopPropagation(), b.preventDefault();
        return;
      }
      i("typeahead") && Dm(b) && (gs(b) || Qs(S) || (n({ type: "TYPEAHEAD", key: b.key }), b.preventDefault()));
    } });
  }, getSeparatorProps() {
    return t.element({ ...Ye.separator.attrs, role: "separator", dir: i("dir"), "aria-orientation": "horizontal" });
  }, getItemState: v, getItemProps: T, getOptionItemState: y, getOptionItemProps(b) {
    let { type: S, disabled: _, closeOnSelect: I } = b, x = w(b), C = y(b);
    return { ...T(x), ...t.element({ "data-type": S, ...Ye.item.attrs, dir: i("dir"), "data-value": x.value, role: `menuitem${S}`, "aria-checked": !!C.checked, "data-state": C.checked ? "checked" : "unchecked", onClick(R) {
      if (_ || lc(R) || sc(R)) return;
      let D = R.currentTarget;
      n({ type: "ITEM_CLICK", target: D, option: x, closeOnSelect: I });
    } }) };
  }, getItemIndicatorProps(b) {
    let S = y(oc(b)), _ = S.checked ? "checked" : "unchecked";
    return t.element({ ...Ye.itemIndicator.attrs, dir: i("dir"), "data-disabled": re(S.disabled), "data-highlighted": re(S.highlighted), "data-state": ba(b, "checked") ? _ : void 0, hidden: ba(b, "checked") ? !S.checked : void 0 });
  }, getItemTextProps(b) {
    let S = y(oc(b)), _ = S.checked ? "checked" : "unchecked";
    return t.element({ ...Ye.itemText.attrs, dir: i("dir"), "data-disabled": re(S.disabled), "data-highlighted": re(S.highlighted), "data-state": ba(b, "checked") ? _ : void 0 });
  }, getItemGroupLabelProps(b) {
    return t.element({ ...Ye.itemGroupLabel.attrs, id: $c(s, b.htmlFor), dir: i("dir") });
  }, getItemGroupProps(b) {
    return t.element({ id: W0(s, b.id), ...Ye.itemGroup.attrs, dir: i("dir"), "aria-labelledby": $c(s, b.id), role: "group" });
  } };
}
var { not: pt, and: rn, or: tw } = nl();
var rw = { props({ props: e }) {
  return { closeOnSelect: true, typeahead: true, composite: true, loopFocus: false, navigate(t) {
    nb(t.node);
  }, ...e, positioning: { placement: "bottom-start", gutter: 8, ...e.positioning } };
}, initialState({ prop: e }) {
  return e("open") || e("defaultOpen") ? "open" : "idle";
}, context({ bindable: e, prop: t }) {
  return { suspendPointer: e(() => ({ defaultValue: false })), highlightedValue: e(() => ({ defaultValue: t("defaultHighlightedValue") || null, value: t("highlightedValue"), onChange(r) {
    var _a5;
    (_a5 = t("onHighlightChange")) == null ? void 0 : _a5({ highlightedValue: r });
  } })), lastHighlightedValue: e(() => ({ defaultValue: null })), currentPlacement: e(() => ({ defaultValue: void 0 })), intentPolygon: e(() => ({ defaultValue: null })), anchorPoint: e(() => ({ defaultValue: null, hash(r) {
    return `x: ${r == null ? void 0 : r.x}, y: ${r == null ? void 0 : r.y}`;
  } })), isSubmenu: e(() => ({ defaultValue: false })) };
}, refs() {
  return { parent: null, children: {}, typeaheadState: { ...gp.defaultOptions }, positioningOverride: {} };
}, computed: { isRtl: ({ prop: e }) => e("dir") === "rtl", isTypingAhead: ({ refs: e }) => e.get("typeaheadState").keysSoFar !== "", highlightedId: ({ context: e, scope: t, refs: r }) => ow(r.get("children"), e.get("highlightedValue"), t) }, watch({ track: e, action: t, context: r, prop: n }) {
  e([() => r.get("isSubmenu")], () => {
    t(["setSubmenuPlacement"]);
  }), e([() => r.hash("anchorPoint")], () => {
    t(["reposition"]);
  }), e([() => n("open")], () => {
    t(["toggleVisibility"]);
  });
}, on: { "PARENT.SET": { actions: ["setParentMenu"] }, "CHILD.SET": { actions: ["setChildMenu"] }, OPEN: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }], OPEN_AUTOFOCUS: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["highlightFirstItem", "invokeOnOpen"] }], CLOSE: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }], "HIGHLIGHTED.RESTORE": { actions: ["restoreHighlightedItem"] }, "HIGHLIGHTED.SET": { actions: ["setHighlightedItem"] } }, states: { idle: { tags: ["closed"], on: { "CONTROLLED.OPEN": { target: "open" }, "CONTROLLED.CLOSE": { target: "closed" }, CONTEXT_MENU_START: { target: "opening:contextmenu", actions: ["setAnchorPoint"] }, CONTEXT_MENU: [{ guard: "isOpenControlled", actions: ["setAnchorPoint", "invokeOnOpen"] }, { target: "open", actions: ["setAnchorPoint", "invokeOnOpen"] }], TRIGGER_CLICK: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }], TRIGGER_FOCUS: { guard: pt("isSubmenu"), target: "closed" }, TRIGGER_POINTERMOVE: { guard: "isSubmenu", target: "opening" } } }, "opening:contextmenu": { tags: ["closed"], effects: ["waitForLongPress"], on: { "CONTROLLED.OPEN": { target: "open" }, "CONTROLLED.CLOSE": { target: "closed" }, CONTEXT_MENU_CANCEL: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }], "LONG_PRESS.OPEN": [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }] } }, opening: { tags: ["closed"], effects: ["waitForOpenDelay"], on: { "CONTROLLED.OPEN": { target: "open" }, "CONTROLLED.CLOSE": { target: "closed" }, BLUR: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }], TRIGGER_POINTERLEAVE: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }], "DELAY.OPEN": [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }] } }, closing: { tags: ["open"], effects: ["trackPointerMove", "trackInteractOutside", "waitForCloseDelay"], on: { "CONTROLLED.OPEN": { target: "open" }, "CONTROLLED.CLOSE": { target: "closed", actions: ["focusParentMenu", "restoreParentHighlightedItem"] }, MENU_POINTERENTER: { target: "open", actions: ["clearIntentPolygon"] }, POINTER_MOVED_AWAY_FROM_SUBMENU: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["focusParentMenu", "restoreParentHighlightedItem"] }], "DELAY.CLOSE": [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["focusParentMenu", "restoreParentHighlightedItem", "invokeOnClose"] }] } }, closed: { tags: ["closed"], entry: ["clearHighlightedItem", "focusTrigger", "resumePointer", "clearAnchorPoint"], on: { "CONTROLLED.OPEN": [{ guard: tw("isOpenAutoFocusEvent", "isArrowDownEvent"), target: "open", actions: ["highlightFirstItem"] }, { guard: "isArrowUpEvent", target: "open", actions: ["highlightLastItem"] }, { target: "open" }], CONTEXT_MENU_START: { target: "opening:contextmenu", actions: ["setAnchorPoint"] }, CONTEXT_MENU: [{ guard: "isOpenControlled", actions: ["setAnchorPoint", "invokeOnOpen"] }, { target: "open", actions: ["setAnchorPoint", "invokeOnOpen"] }], TRIGGER_CLICK: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }], TRIGGER_POINTERMOVE: { guard: "isTriggerItem", target: "opening" }, TRIGGER_BLUR: { target: "idle" }, ARROW_DOWN: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["highlightFirstItem", "invokeOnOpen"] }], ARROW_UP: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["highlightLastItem", "invokeOnOpen"] }] } }, open: { tags: ["open"], effects: ["trackInteractOutside", "trackPositioning", "scrollToHighlightedItem"], entry: ["focusMenu", "resumePointer"], on: { "CONTROLLED.CLOSE": [{ target: "closed", guard: "isArrowLeftEvent", actions: ["focusParentMenu"] }, { target: "closed" }], TRIGGER_CLICK: [{ guard: rn(pt("isTriggerItem"), "isOpenControlled"), actions: ["invokeOnClose"] }, { guard: pt("isTriggerItem"), target: "closed", actions: ["invokeOnClose"] }], CONTEXT_MENU: { actions: ["setAnchorPoint", "focusMenu"] }, ARROW_UP: { actions: ["highlightPrevItem", "focusMenu"] }, ARROW_DOWN: { actions: ["highlightNextItem", "focusMenu"] }, ARROW_LEFT: [{ guard: rn("isSubmenu", "isOpenControlled"), actions: ["invokeOnClose"] }, { guard: "isSubmenu", target: "closed", actions: ["focusParentMenu", "invokeOnClose"] }], HOME: { actions: ["highlightFirstItem", "focusMenu"] }, END: { actions: ["highlightLastItem", "focusMenu"] }, ARROW_RIGHT: { guard: "isTriggerItemHighlighted", actions: ["openSubmenu"] }, ENTER: [{ guard: "isTriggerItemHighlighted", actions: ["openSubmenu"] }, { actions: ["clickHighlightedItem"] }], ITEM_POINTERMOVE: [{ guard: pt("isPointerSuspended"), actions: ["setHighlightedItem", "focusMenu"] }, { actions: ["setLastHighlightedItem"] }], ITEM_POINTERLEAVE: { guard: rn(pt("isPointerSuspended"), pt("isTriggerItem")), actions: ["clearHighlightedItem"] }, ITEM_CLICK: [{ guard: rn(pt("isTriggerItemHighlighted"), pt("isHighlightedItemEditable"), "closeOnSelect", "isOpenControlled"), actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"] }, { guard: rn(pt("isTriggerItemHighlighted"), pt("isHighlightedItemEditable"), "closeOnSelect"), target: "closed", actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"] }, { guard: rn(pt("isTriggerItemHighlighted"), pt("isHighlightedItemEditable")), actions: ["invokeOnSelect", "setOptionState"] }, { actions: ["setHighlightedItem"] }], TRIGGER_POINTERMOVE: { guard: "isTriggerItem", actions: ["setIntentPolygon"] }, TRIGGER_POINTERLEAVE: { target: "closing" }, ITEM_POINTERDOWN: { actions: ["setHighlightedItem"] }, TYPEAHEAD: { actions: ["highlightMatchedItem"] }, FOCUS_MENU: { actions: ["focusMenu"] }, "POSITIONING.SET": { actions: ["reposition"] } } } }, implementations: { guards: { closeOnSelect: ({ prop: e, event: t }) => !!((t == null ? void 0 : t.closeOnSelect) ?? e("closeOnSelect")), isTriggerItem: ({ event: e }) => J0(e.target), isTriggerItemHighlighted: ({ event: e, scope: t, computed: r }) => {
  var _a5;
  return !!((_a5 = e.target ?? t.getById(r("highlightedId"))) == null ? void 0 : _a5.hasAttribute("aria-controls"));
}, isSubmenu: ({ context: e }) => e.get("isSubmenu"), isPointerSuspended: ({ context: e }) => e.get("suspendPointer"), isHighlightedItemEditable: ({ scope: e, computed: t }) => Qs(e.getById(t("highlightedId"))), isOpenControlled: ({ prop: e }) => e("open") !== void 0, isArrowLeftEvent: ({ event: e }) => {
  var _a5;
  return ((_a5 = e.previousEvent) == null ? void 0 : _a5.type) === "ARROW_LEFT";
}, isArrowUpEvent: ({ event: e }) => {
  var _a5;
  return ((_a5 = e.previousEvent) == null ? void 0 : _a5.type) === "ARROW_UP";
}, isArrowDownEvent: ({ event: e }) => {
  var _a5;
  return ((_a5 = e.previousEvent) == null ? void 0 : _a5.type) === "ARROW_DOWN";
}, isOpenAutoFocusEvent: ({ event: e }) => {
  var _a5;
  return ((_a5 = e.previousEvent) == null ? void 0 : _a5.type) === "OPEN_AUTOFOCUS";
} }, effects: { waitForOpenDelay({ send: e }) {
  let t = setTimeout(() => {
    e({ type: "DELAY.OPEN" });
  }, 100);
  return () => clearTimeout(t);
}, waitForCloseDelay({ send: e }) {
  let t = setTimeout(() => {
    e({ type: "DELAY.CLOSE" });
  }, 300);
  return () => clearTimeout(t);
}, waitForLongPress({ send: e }) {
  let t = setTimeout(() => {
    e({ type: "LONG_PRESS.OPEN" });
  }, 700);
  return () => clearTimeout(t);
}, trackPositioning({ context: e, prop: t, scope: r, refs: n }) {
  if (Mi(r)) return;
  let o = { ...t("positioning"), ...n.get("positioningOverride") };
  e.set("currentPlacement", o.placement);
  let a = () => zc(r);
  return Sc(ea(r), a, { ...o, defer: true, onComplete(i) {
    e.set("currentPlacement", i.placement);
  } });
}, trackInteractOutside({ refs: e, scope: t, prop: r, context: n, send: o }) {
  let a = () => sr(t), i = true;
  return Pp(a, { defer: true, exclude: [ea(t)], onInteractOutside: r("onInteractOutside"), onFocusOutside(s) {
    var _a5;
    (_a5 = r("onFocusOutside")) == null ? void 0 : _a5(s);
    let l = tt(s.detail.originalEvent);
    if (At(Mi(t), l)) {
      s.preventDefault();
      return;
    }
  }, onEscapeKeyDown(s) {
    var _a5;
    (_a5 = r("onEscapeKeyDown")) == null ? void 0 : _a5(s), n.get("isSubmenu") && s.preventDefault(), jc({ parent: e.get("parent") });
  }, onPointerDownOutside(s) {
    var _a5;
    (_a5 = r("onPointerDownOutside")) == null ? void 0 : _a5(s);
    let l = tt(s.detail.originalEvent);
    if (At(Mi(t), l) && s.detail.contextmenu) {
      s.preventDefault();
      return;
    }
    i = !s.detail.focusable;
  }, onDismiss() {
    o({ type: "CLOSE", src: "interact-outside", restoreFocus: i });
  } });
}, trackPointerMove({ context: e, scope: t, send: r, refs: n, flush: o }) {
  let a = n.get("parent");
  o(() => {
    a.context.set("suspendPointer", true);
  });
  let i = t.getDoc();
  return ke(i, "pointermove", (s) => {
    nw(e.get("intentPolygon"), { x: s.clientX, y: s.clientY }) || (r({ type: "POINTER_MOVED_AWAY_FROM_SUBMENU" }), a.context.set("suspendPointer", false));
  });
}, scrollToHighlightedItem({ event: e, scope: t, computed: r }) {
  let n = () => {
    if (e.type.startsWith("ITEM_POINTER")) return;
    let o = t.getById(r("highlightedId")), a = sr(t);
    sb(o, { rootEl: a, block: "nearest" });
  };
  return xe(() => n()), dp(() => sr(t), { defer: true, attributes: ["aria-activedescendant"], callback: n });
} }, actions: { setAnchorPoint({ context: e, event: t }) {
  e.set("anchorPoint", (r) => _o(r, t.point) ? r : t.point);
}, setSubmenuPlacement({ context: e, computed: t, refs: r }) {
  if (!e.get("isSubmenu")) return;
  let n = t("isRtl") ? "left-start" : "right-start";
  r.set("positioningOverride", { placement: n, gutter: 0 });
}, reposition({ context: e, scope: t, prop: r, event: n, refs: o }) {
  let a = () => zc(t), i = e.get("anchorPoint"), s = i ? () => ({ width: 0, height: 0, ...i }) : void 0, l = { ...r("positioning"), ...o.get("positioningOverride") };
  Sc(ea(t), a, { ...l, defer: true, getAnchorRect: s, ...n.options ?? {}, listeners: false, onComplete(d) {
    e.set("currentPlacement", d.placement);
  } });
}, setOptionState({ event: e }) {
  if (!e.option) return;
  let { checked: t, onCheckedChange: r, type: n } = e.option;
  n === "radio" ? r == null ? void 0 : r(true) : n === "checkbox" && (r == null ? void 0 : r(!t));
}, clickHighlightedItem({ scope: e, computed: t }) {
  let r = e.getById(t("highlightedId"));
  !r || r.dataset.disabled || queueMicrotask(() => r.click());
}, setIntentPolygon({ context: e, scope: t, event: r }) {
  let n = sr(t), o = e.get("currentPlacement");
  if (!n || !o) return;
  let a = n.getBoundingClientRect(), i = j0(a, o);
  if (!i) return;
  let s = ov(o) === "right" ? -5 : 5;
  e.set("intentPolygon", [{ ...r.point, x: r.point.x + s }, ...i]);
}, clearIntentPolygon({ context: e }) {
  e.set("intentPolygon", null);
}, clearAnchorPoint({ context: e }) {
  e.set("anchorPoint", null);
}, resumePointer({ refs: e, flush: t }) {
  let r = e.get("parent");
  r && t(() => {
    r.context.set("suspendPointer", false);
  });
}, setHighlightedItem({ context: e, event: t }) {
  let r = t.value || Sr(t.target);
  e.set("highlightedValue", r);
}, clearHighlightedItem({ context: e }) {
  e.set("highlightedValue", null);
}, focusMenu({ scope: e }) {
  xe(() => {
    var _a5;
    let t = sr(e);
    (_a5 = Qm({ root: t, enabled: !At(t, e.getActiveElement()), filter(r) {
      var _a6;
      return !((_a6 = r.role) == null ? void 0 : _a6.startsWith("menuitem"));
    } })) == null ? void 0 : _a5.focus({ preventScroll: true });
  });
}, highlightFirstItem({ context: e, scope: t }) {
  (sr(t) ? queueMicrotask : xe)(() => {
    let r = q0(t);
    r && e.set("highlightedValue", Sr(r));
  });
}, highlightLastItem({ context: e, scope: t }) {
  (sr(t) ? queueMicrotask : xe)(() => {
    let r = Y0(t);
    r && e.set("highlightedValue", Sr(r));
  });
}, highlightNextItem({ context: e, scope: t, event: r, prop: n }) {
  let o = K0(t, { loop: r.loop, value: e.get("highlightedValue"), loopFocus: n("loopFocus") });
  e.set("highlightedValue", Sr(o));
}, highlightPrevItem({ context: e, scope: t, event: r, prop: n }) {
  let o = X0(t, { loop: r.loop, value: e.get("highlightedValue"), loopFocus: n("loopFocus") });
  e.set("highlightedValue", Sr(o));
}, invokeOnSelect({ context: e, prop: t, scope: r }) {
  var _a5;
  let n = e.get("highlightedValue");
  if (n == null) return;
  let o = Lp(r, n);
  Q0(o, n), (_a5 = t("onSelect")) == null ? void 0 : _a5({ value: n });
}, focusTrigger({ scope: e, context: t, event: r }) {
  t.get("isSubmenu") || t.get("anchorPoint") || r.restoreFocus === false || queueMicrotask(() => {
    var _a5;
    return (_a5 = ea(e)) == null ? void 0 : _a5.focus({ preventScroll: true });
  });
}, highlightMatchedItem({ scope: e, context: t, event: r, refs: n }) {
  let o = Z0(e, { key: r.key, value: t.get("highlightedValue"), typeaheadState: n.get("typeaheadState") });
  o && t.set("highlightedValue", Sr(o));
}, setParentMenu({ refs: e, event: t, context: r }) {
  e.set("parent", t.value), r.set("isSubmenu", true);
}, setChildMenu({ refs: e, event: t }) {
  let r = e.get("children");
  r[t.id] = t.value, e.set("children", r);
}, closeRootMenu({ refs: e }) {
  jc({ parent: e.get("parent") });
}, openSubmenu({ refs: e, scope: t, computed: r }) {
  var _a5, _b2;
  let n = (_a5 = t.getById(r("highlightedId"))) == null ? void 0 : _a5.getAttribute("data-uid"), o = e.get("children");
  (_b2 = n ? o[n] : null) == null ? void 0 : _b2.send({ type: "OPEN_AUTOFOCUS" });
}, focusParentMenu({ refs: e }) {
  var _a5;
  (_a5 = e.get("parent")) == null ? void 0 : _a5.send({ type: "FOCUS_MENU" });
}, setLastHighlightedItem({ context: e, event: t }) {
  e.set("lastHighlightedValue", Sr(t.target));
}, restoreHighlightedItem({ context: e }) {
  e.get("lastHighlightedValue") && (e.set("highlightedValue", e.get("lastHighlightedValue")), e.set("lastHighlightedValue", null));
}, restoreParentHighlightedItem({ refs: e }) {
  var _a5;
  (_a5 = e.get("parent")) == null ? void 0 : _a5.send({ type: "HIGHLIGHTED.RESTORE" });
}, invokeOnOpen({ prop: e }) {
  var _a5;
  (_a5 = e("onOpenChange")) == null ? void 0 : _a5({ open: true });
}, invokeOnClose({ prop: e }) {
  var _a5;
  (_a5 = e("onOpenChange")) == null ? void 0 : _a5({ open: false });
}, toggleVisibility({ prop: e, event: t, send: r }) {
  r({ type: e("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: t });
} } } };
function jc(e) {
  let t = e.parent;
  for (; t && t.context.get("isSubmenu"); ) t = t.refs.get("parent");
  t == null ? void 0 : t.send({ type: "CLOSE" });
}
function nw(e, t) {
  return e ? V0(e, t) : false;
}
function ow(e, t, r) {
  let n = Object.keys(e).length > 0;
  if (!t) return null;
  if (!n) return fo(r, t);
  for (let o in e) {
    let a = e[o], i = Na(a.scope);
    if (i === t) return i;
  }
  return fo(r, t);
}
var aw = yt()(["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "dir", "getRootNode", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "open", "positioning", "typeahead"]);
var iI = Ct(aw);
var iw = yt()(["closeOnSelect", "disabled", "value", "valueText"]);
var sI = Ct(iw);
var sw = yt()(["htmlFor"]);
var lI = Ct(sw);
var lw = yt()(["id"]);
var cI = Ct(lw);
var cw = yt()(["checked", "closeOnSelect", "disabled", "onCheckedChange", "type", "value", "valueText"]);
var dI = Ct(cw);
var [Mp, Me] = Ve({ hookName: "useMenuContext", providerName: "<MenuProvider />", strict: false });
var dw = (e) => {
  let t = Me(), r = U(() => t().getArrowProps(), e);
  return h(V.div, r);
};
var uw = (e) => {
  let t = Me(), r = U(() => t().getArrowTipProps(), e);
  return h(V.div, r);
};
var [hl, pw] = Ve({ hookName: "useMenuItemContext", providerName: "<MenuItemProvider />" });
var [fl, Up] = Ve({ hookName: "useMenuItemPropsContext", providerName: "<MenuItemPropsProvider />" });
var gw = (e) => {
  let [t, r] = Ie()(e, ["checked", "closeOnSelect", "disabled", "onCheckedChange", "value", "valueText"]), n = U(t, { type: "checkbox" }), o = Me(), a = U(() => o().getOptionItemProps(n), r), i = te(() => o().getItemState(n));
  return h(fl, { value: n, get children() {
    return h(hl, { value: i, get children() {
      return h(V.div, a);
    } });
  } });
};
var hw = (e) => {
  let t = Me(), r = Cn(), n = U(() => t().getContentProps(), () => r().presenceProps, e);
  return h(Y, { get when() {
    return !r().unmounted;
  }, get children() {
    return h(V.div, he(n, { ref(o) {
      var a = Oo(r().ref, e.ref);
      typeof a == "function" && a(o);
    } }));
  } });
};
var fw = (e) => e.children(Me());
var mw = (e) => {
  let t = Me(), r = U(() => t().getContextTriggerProps(), e);
  return h(V.button, r);
};
var bw = (e) => {
  let t = Me(), r = U(() => t().getIndicatorProps(), e);
  return h(V.div, r);
};
var yw = (e) => {
  let [t, r] = Ie()(e, ["closeOnSelect", "disabled", "value", "valueText", "onSelect"]), n = Me(), o = U(() => n().getItemProps(t), r), a = te(() => n().getItemState(t));
  return Ce(() => {
    let i = n().addItemListener({ id: a().id, onSelect: t.onSelect });
    ue(() => i == null ? void 0 : i());
  }), h(fl, { value: t, get children() {
    return h(hl, { value: a, get children() {
      return h(V.div, o);
    } });
  } });
};
var vw = (e) => e.children(pw());
var [Bp, $p] = Ve({ hookName: "useMenuItemGroupContext", providerName: "<MenuItemGroupProvider />" });
var ww = (e) => {
  let [t, r] = Ie()(e, ["id"]), n = U({ id: Et() }, t), o = Me(), a = U(() => o().getItemGroupProps(n), r);
  return h(Bp, { value: n, get children() {
    return h(V.div, a);
  } });
};
var xw = (e) => {
  let t = Me(), r = $p(), n = U(t().getItemGroupLabelProps({ htmlFor: r.id }), e);
  return h(V.div, n);
};
var kw = (e) => {
  let t = Me(), r = Up(), n = U(() => t().getItemIndicatorProps(r), e);
  return h(V.div, n);
};
var Tw = (e) => {
  let t = Me(), r = Up(), n = U(() => t().getItemTextProps(r), e);
  return h(V.div, n);
};
var Sw = (e) => {
  let t = Me(), r = Cn(), n = U(() => t().getPositionerProps(), e);
  return h(Y, { get when() {
    return !r().unmounted;
  }, get children() {
    return h(V.div, n);
  } });
};
var Ew = (e) => {
  let [t, r] = Ie()(e, ["closeOnSelect", "disabled", "value", "valueText"]), n = Me(), o = $p(), a = U(t, () => ({ type: "radio", checked: o.value === t.value, onCheckedChange: () => {
    var _a5;
    return (_a5 = o.onValueChange) == null ? void 0 : _a5.call(o, { value: t.value });
  } })), i = U(() => n().getOptionItemProps(a), r), s = te(() => n().getOptionItemState(a));
  return h(fl, { value: a, get children() {
    return h(hl, { value: s, get children() {
      return h(V.div, i);
    } });
  } });
};
var Cw = (e) => {
  let [t, r] = Ie()(e, ["id", "onValueChange", "value"]), n = Me(), o = U({ id: Et() }, t), a = U(() => n().getItemGroupProps(o), r);
  return h(Bp, { value: o, get children() {
    return h(V.div, a);
  } });
};
var Fw = (e) => {
  let t = Et(), r = En(), n = Zt(), o = te(() => ({ id: t, dir: r().dir, getRootNode: n().getRootNode, ...br(e) })), a = fr(rw, o);
  return { api: te(() => ew(a, mr)), service: a };
};
var [zp, jp] = Ve({ hookName: "useMenuMachineContext", providerName: "<MenuMachineProvider />", strict: false });
var [Vp, Pw] = Ve({ hookName: "useMenuMachineContext", providerName: "<MenuMachineProvider />", strict: false });
var _w = (e) => {
  let [t, r] = ri(e), [n, o] = Ie()(r, ["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "open", "positioning", "typeahead"]), a = Me(), i = jp(), s = Fw(n), l = Ao(U(t, () => ({ present: s.api().open })));
  return ve(() => {
    i && (a == null ? void 0 : a().setChild(s.service), s.api().setParent(i));
  }), h(Vp, { value: () => a == null ? void 0 : a().getTriggerItemProps(s.api()), get children() {
    return h(zp, { get value() {
      return s.service;
    }, get children() {
      return h(Mp, { get value() {
        return s.api;
      }, get children() {
        return h(ni, { value: l, get children() {
          return o.children;
        } });
      } });
    } });
  } });
};
var Iw = (e) => {
  let t = Me(), r = jp(), [n, o] = ri(e), a = Ao(U(n, () => ({ present: o.value.api().open })));
  return Ce(() => {
    r && (t == null ? void 0 : t().setChild(o.value.service), o.value.api().setParent(r));
  }), h(Vp, { value: () => t == null ? void 0 : t().getTriggerItemProps(o.value.api()), get children() {
    return h(zp, { get value() {
      return o.value.service;
    }, get children() {
      return h(Mp, { get value() {
        return o.value.api;
      }, get children() {
        return h(ni, { value: a, get children() {
          return o.children;
        } });
      } });
    } });
  } });
};
var Ow = (e) => {
  let t = Me(), r = U(() => t().getSeparatorProps(), e);
  return h(V.hr, r);
};
var Aw = (e) => {
  let t = Me(), r = Cn(), n = U(() => t().getTriggerProps(), () => ({ "aria-controls": r().unmounted && null }), e);
  return h(V.button, n);
};
var Rw = (e) => {
  let t = Pw(), r = U(() => t == null ? void 0 : t(), e);
  return h(V.div, r);
};
var Or = {};
yr(Or, { Arrow: () => dw, ArrowTip: () => uw, CheckboxItem: () => gw, Content: () => hw, Context: () => fw, ContextTrigger: () => mw, Indicator: () => bw, Item: () => yw, ItemContext: () => vw, ItemGroup: () => ww, ItemGroupLabel: () => xw, ItemIndicator: () => kw, ItemText: () => Tw, Positioner: () => Sw, RadioItem: () => Ew, RadioItemGroup: () => Cw, Root: () => _w, RootProvider: () => Iw, Separator: () => Ow, Trigger: () => Aw, TriggerItem: () => Rw });
var Nw = gt("progress").parts("root", "label", "track", "range", "valueText", "view", "circle", "circleTrack", "circleRange");
var zt = Nw.build();
var Dw = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.root) ?? `progress-${e.id}`;
};
var Lw = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.track) ?? `progress-${e.id}-track`;
};
var Mw = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.label) ?? `progress-${e.id}-label`;
};
var Uw = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.circle) ?? `progress-${e.id}-circle`;
};
function Bw(e, t) {
  let { context: r, computed: n, prop: o, send: a, scope: i } = e, s = n("percent"), l = n("isIndeterminate") ? "" : n("formatter").format(s / 100), d = o("max"), c = o("min"), u = o("orientation"), p = o("translations"), g = n("isIndeterminate"), m = r.get("value"), f = (p == null ? void 0 : p.value({ value: m, max: d, percent: s, min: c, formatter: n("formatter") })) ?? "", v = $w(m, d), w = { role: "progressbar", "aria-label": f, "data-max": d, "aria-valuemin": c, "aria-valuemax": d, "aria-valuenow": m ?? void 0, "data-orientation": u, "data-state": v }, y = jw(e);
  return { value: m, valueAsString: f, min: c, max: d, percent: s, percentAsString: l, indeterminate: g, setValue(T) {
    a({ type: "VALUE.SET", value: T });
  }, setToMax() {
    a({ type: "VALUE.SET", value: d });
  }, setToMin() {
    a({ type: "VALUE.SET", value: c });
  }, getRootProps() {
    return t.element({ dir: o("dir"), ...zt.root.attrs, id: Dw(i), "data-max": d, "data-value": m ?? void 0, "data-state": v, "data-orientation": u, style: { "--percent": g ? void 0 : s } });
  }, getLabelProps() {
    return t.element({ dir: o("dir"), id: Mw(i), ...zt.label.attrs, "data-orientation": u });
  }, getValueTextProps() {
    return t.element({ dir: o("dir"), "aria-live": "polite", ...zt.valueText.attrs });
  }, getTrackProps() {
    return t.element({ dir: o("dir"), id: Lw(i), ...zt.track.attrs, ...w });
  }, getRangeProps() {
    return t.element({ dir: o("dir"), ...zt.range.attrs, "data-orientation": u, "data-state": v, style: { [n("isHorizontal") ? "width" : "height"]: g ? void 0 : `${s}%` } });
  }, getCircleProps() {
    return t.element({ dir: o("dir"), id: Uw(i), ...zt.circle.attrs, ...w, ...y.root });
  }, getCircleTrackProps() {
    return t.element({ dir: o("dir"), "data-orientation": u, ...zt.circleTrack.attrs, ...y.track });
  }, getCircleRangeProps() {
    return t.element({ dir: o("dir"), ...zt.circleRange.attrs, ...y.range, "data-state": v });
  }, getViewProps(T) {
    return t.element({ dir: o("dir"), ...zt.view.attrs, "data-state": T.state, hidden: T.state !== v });
  } };
}
function $w(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
var Vc = { style: { "--radius": "calc(var(--size) / 2 - var(--thickness) / 2)", cx: "calc(var(--size) / 2)", cy: "calc(var(--size) / 2)", r: "var(--radius)", fill: "transparent", strokeWidth: "var(--thickness)" } };
var zw = { style: { width: "var(--size)", height: "var(--size)" } };
function jw(e) {
  let { context: t, computed: r } = e;
  return { root: zw, track: Vc, range: { opacity: t.get("value") === 0 ? 0 : void 0, style: { ...Vc.style, "--percent": r("percent"), "--circumference": "calc(2 * 3.14159 * var(--radius))", "--offset": "calc(var(--circumference) * (100 - var(--percent)) / 100)", strokeDashoffset: "calc(var(--circumference) * ((100 - var(--percent)) / 100))", strokeDasharray: r("isIndeterminate") ? void 0 : "var(--circumference)", transformOrigin: "center", transform: "rotate(-90deg)" } } };
}
var Vw = { props({ props: e }) {
  let t = e.min ?? 0, r = e.max ?? 100;
  return { orientation: "horizontal", ...e, max: r, min: t, defaultValue: e.defaultValue !== void 0 ? e.defaultValue : Ww(t, r), formatOptions: { style: "percent", ...e.formatOptions }, translations: { value: ({ value: n, percent: o, formatter: a }) => {
    if (n === null) return "loading...";
    if (a) {
      let i = a.resolvedOptions().style === "percent" ? o / 100 : n;
      return a.format(i);
    }
    return n.toString();
  }, ...e.translations } };
}, initialState() {
  return "idle";
}, entry: ["validateContext"], context({ bindable: e, prop: t }) {
  return { value: e(() => ({ defaultValue: t("defaultValue"), value: t("value"), onChange(r) {
    var _a5;
    (_a5 = t("onValueChange")) == null ? void 0 : _a5({ value: r });
  } })) };
}, computed: { isIndeterminate: ({ context: e }) => e.get("value") === null, percent({ context: e, prop: t }) {
  let r = e.get("value");
  return Zs(r) ? im(r, t("min"), t("max")) * 100 : -1;
}, formatter: bs(({ prop: e }) => [e("locale"), e("formatOptions")], (e, t) => new Intl.NumberFormat(e, t)), isHorizontal: ({ prop: e }) => e("orientation") === "horizontal" }, states: { idle: { on: { "VALUE.SET": { actions: ["setValue"] } } } }, implementations: { actions: { setValue: ({ context: e, event: t, prop: r }) => {
  let n = t.value === null ? null : Math.max(0, Math.min(t.value, r("max")));
  e.set("value", n);
}, validateContext: ({ context: e, prop: t }) => {
  let r = t("max"), n = t("min"), o = e.get("value");
  if (o != null) {
    if (!ml(r)) throw new Error(`[progress] The max value passed \`${r}\` is not a valid number`);
    if (!Hw(o, r)) throw new Error(`[progress] The value passed \`${o}\` exceeds the max value \`${r}\``);
    if (!Gw(o, n)) throw new Error(`[progress] The value passed \`${o}\` exceeds the min value \`${n}\``);
  }
} } } };
var ml = (e) => Zs(e) && !isNaN(e);
var Hw = (e, t) => ml(e) && e <= t;
var Gw = (e, t) => ml(e) && e >= t;
var Ww = (e, t) => e + (t - e) / 2;
var qw = yt()(["dir", "getRootNode", "id", "ids", "max", "min", "orientation", "translations", "value", "onValueChange", "defaultValue", "formatOptions", "locale"]);
var uI = Ct(qw);
var [Hp, Jt] = Ve({ hookName: "useProgressContext", providerName: "<ProgressProvider />" });
var Yw = (e) => {
  let t = Jt(), r = U(() => t().getCircleProps(), e);
  return h(V.svg, r);
};
var Kw = (e) => {
  let t = Jt(), r = U(() => t().getCircleRangeProps(), e);
  return h(V.circle, r);
};
var Xw = (e) => {
  let t = Jt(), r = U(() => t().getCircleTrackProps(), e);
  return h(V.circle, r);
};
var Zw = (e) => e.children(Jt());
var Jw = (e) => {
  let t = Jt(), r = U(() => t().getLabelProps(), e);
  return h(V.label, r);
};
var Qw = (e) => {
  let t = Jt(), r = U(() => t().getRangeProps(), e);
  return h(V.div, r);
};
var e1 = (e) => {
  let t = Et(), r = En(), n = Zt(), o = te(() => ({ id: t, dir: r().dir, locale: r().locale, getRootNode: n().getRootNode, ...br(e) })), a = fr(Vw, o);
  return te(() => Bw(a, mr));
};
var t1 = (e) => {
  let [t, r] = Ie()(e, ["defaultValue", "formatOptions", "id", "ids", "locale", "max", "min", "onValueChange", "orientation", "translations", "value"]), n = e1(t), o = U(() => n().getRootProps(), r);
  return h(Hp, { value: n, get children() {
    return h(V.div, o);
  } });
};
var r1 = (e) => {
  let [{ value: t }, r] = Ie()(e, ["value"]), n = U(() => t().getRootProps(), r);
  return h(Hp, { value: t, get children() {
    return h(V.div, n);
  } });
};
var n1 = (e) => {
  let t = Jt(), r = U(() => t().getTrackProps(), e);
  return h(V.div, r);
};
var o1 = (e) => {
  let t = Jt(), r = U(() => t().getValueTextProps(), e);
  return h(V.span, he(r, { get children() {
    return e.children || t().percentAsString;
  } }));
};
var a1 = (e) => {
  let [t, r] = Ie()(e, ["state"]), n = Jt(), o = U(() => n().getViewProps(t), r);
  return h(V.span, o);
};
var Qn = {};
yr(Qn, { Circle: () => Yw, CircleRange: () => Kw, CircleTrack: () => Xw, Context: () => Zw, Label: () => Jw, Range: () => Qw, Root: () => t1, RootProvider: () => r1, Track: () => n1, ValueText: () => o1, View: () => a1 });
var Ui = /* @__PURE__ */ new Map();
var ks = false;
try {
  ks = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
var Da = false;
try {
  Da = new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style === "unit";
} catch {
}
var Gp = { degree: { narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" } } };
var i1 = class {
  format(e) {
    let t = "";
    if (!ks && this.options.signDisplay != null ? t = l1(this.numberFormatter, this.options.signDisplay, e) : t = this.numberFormatter.format(e), this.options.style === "unit" && !Da) {
      var r;
      let { unit: n, unitDisplay: o = "short", locale: a } = this.resolvedOptions();
      if (!n) return t;
      let i = (r = Gp[n]) === null || r === void 0 ? void 0 : r[o];
      t += i[a] || i.default;
    }
    return t;
  }
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  formatRange(e, t) {
    if (typeof this.numberFormatter.formatRange == "function") return this.numberFormatter.formatRange(e, t);
    if (t < e) throw new RangeError("End date must be >= start date");
    return `${this.format(e)} – ${this.format(t)}`;
  }
  formatRangeToParts(e, t) {
    if (typeof this.numberFormatter.formatRangeToParts == "function") return this.numberFormatter.formatRangeToParts(e, t);
    if (t < e) throw new RangeError("End date must be >= start date");
    let r = this.numberFormatter.formatToParts(e), n = this.numberFormatter.formatToParts(t);
    return [...r.map((o) => ({ ...o, source: "startRange" })), { type: "literal", value: " – ", source: "shared" }, ...n.map((o) => ({ ...o, source: "endRange" }))];
  }
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    return !ks && this.options.signDisplay != null && (e = { ...e, signDisplay: this.options.signDisplay }), !Da && this.options.style === "unit" && (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }), e;
  }
  constructor(e, t = {}) {
    this.numberFormatter = s1(e, t), this.options = t;
  }
};
function s1(e, t = {}) {
  let { numberingSystem: r } = t;
  if (r && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${r}`), t.style === "unit" && !Da) {
    var n;
    let { unit: i, unitDisplay: s = "short" } = t;
    if (!i) throw new Error('unit option must be provided with style: "unit"');
    if (!(!((n = Gp[i]) === null || n === void 0) && n[s])) throw new Error(`Unsupported unit ${i} with unitDisplay = ${s}`);
    t = { ...t, style: "decimal" };
  }
  let o = e + (t ? Object.entries(t).sort((i, s) => i[0] < s[0] ? -1 : 1).join() : "");
  if (Ui.has(o)) return Ui.get(o);
  let a = new Intl.NumberFormat(e, t);
  return Ui.set(o, a), a;
}
function l1(e, t, r) {
  if (t === "auto") return e.format(r);
  if (t === "never") return e.format(Math.abs(r));
  {
    let n = false;
    if (t === "always" ? n = r > 0 || Object.is(r, 0) : t === "exceptZero" && (Object.is(r, -0) || Object.is(r, 0) ? r = Math.abs(r) : n = r > 0), n) {
      let o = e.format(-r), a = e.format(r), i = o.replace(a, "").replace(/\u200e|\u061C/, "");
      return [...i].length !== 1 && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"), o.replace(a, "!!!").replace(i, "+").replace("!!!", a);
    } else return e.format(r);
  }
}
var c1 = new RegExp("^.*\\(.*\\).*$");
var d1 = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
var Wp = class {
  parse(e) {
    return Bi(this.locale, this.options, e).parse(e);
  }
  isValidPartialNumber(e, t, r) {
    return Bi(this.locale, this.options, e).isValidPartialNumber(e, t, r);
  }
  getNumberingSystem(e) {
    return Bi(this.locale, this.options, e).options.numberingSystem;
  }
  constructor(e, t = {}) {
    this.locale = e, this.options = t;
  }
};
var Hc = /* @__PURE__ */ new Map();
function Bi(e, t, r) {
  let n = Gc(e, t);
  if (!e.includes("-nu-") && !n.isValidPartialNumber(r)) {
    for (let o of d1) if (o !== n.options.numberingSystem) {
      let a = Gc(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + o, t);
      if (a.isValidPartialNumber(r)) return a;
    }
  }
  return n;
}
function Gc(e, t) {
  let r = e + (t ? Object.entries(t).sort((o, a) => o[0] < a[0] ? -1 : 1).join() : ""), n = Hc.get(r);
  return n || (n = new u1(e, t), Hc.set(r, n)), n;
}
var u1 = class {
  parse(e) {
    let t = this.sanitize(e);
    if (this.symbols.group && (t = $n(t, this.symbols.group, "")), this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")), t = t.replace(this.symbols.numeral, this.symbols.index), this.options.style === "percent") {
      let a = t.indexOf("-");
      t = t.replace("-", ""), t = t.replace("+", "");
      let i = t.indexOf(".");
      i === -1 && (i = t.length), t = t.replace(".", ""), i - 2 === 0 ? t = `0.${t}` : i - 2 === -1 ? t = `0.0${t}` : i - 2 === -2 ? t = "0.00" : t = `${t.slice(0, i - 2)}.${t.slice(i - 2)}`, a > -1 && (t = `-${t}`);
    }
    let r = t ? +t : NaN;
    if (isNaN(r)) return NaN;
    if (this.options.style === "percent") {
      var n, o;
      let a = { ...this.options, style: "decimal", minimumFractionDigits: Math.min(((n = this.options.minimumFractionDigits) !== null && n !== void 0 ? n : 0) + 2, 20), maximumFractionDigits: Math.min(((o = this.options.maximumFractionDigits) !== null && o !== void 0 ? o : 0) + 2, 20) };
      return new Wp(this.locale, a).parse(new i1(this.locale, a).format(r));
    }
    return this.options.currencySign === "accounting" && c1.test(e) && (r = -1 * r), r;
  }
  sanitize(e) {
    return e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = e.replace(",", this.symbols.decimal), e = e.replace("،", this.symbols.decimal)), this.symbols.group && (e = $n(e, ".", this.symbols.group))), this.options.locale === "fr-FR" && this.symbols.group && (e = $n(e, " ", this.symbols.group), e = $n(e, /\u00A0/g, this.symbols.group)), e;
  }
  isValidPartialNumber(e, t = -1 / 0, r = 1 / 0) {
    return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && r > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? false : (this.symbols.group && (e = $n(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
  }
  constructor(e, t = {}) {
    this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits == null && (t.minimumFractionDigits = t.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = g1(e, this.formatter, this.options, t);
    var r, n;
    this.options.style === "percent" && (((r = this.options.minimumFractionDigits) !== null && r !== void 0 ? r : 0) > 18 || ((n = this.options.maximumFractionDigits) !== null && n !== void 0 ? n : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
};
var Wc = /* @__PURE__ */ new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]);
var p1 = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function g1(e, t, r, n) {
  var o, a, i, s;
  let l = new Intl.NumberFormat(e, { ...r, minimumSignificantDigits: 1, maximumSignificantDigits: 21, roundingIncrement: 1, roundingPriority: "auto", roundingMode: "halfExpand" }), d = l.formatToParts(-10000.111), c = l.formatToParts(10000.111), u = p1.map((x) => l.formatToParts(x));
  var p;
  let g = (p = (o = d.find((x) => x.type === "minusSign")) === null || o === void 0 ? void 0 : o.value) !== null && p !== void 0 ? p : "-", m = (a = c.find((x) => x.type === "plusSign")) === null || a === void 0 ? void 0 : a.value;
  !m && ((n == null ? void 0 : n.signDisplay) === "exceptZero" || (n == null ? void 0 : n.signDisplay) === "always") && (m = "+");
  let f = (i = new Intl.NumberFormat(e, { ...r, minimumFractionDigits: 2, maximumFractionDigits: 2 }).formatToParts(1e-3).find((x) => x.type === "decimal")) === null || i === void 0 ? void 0 : i.value, v = (s = d.find((x) => x.type === "group")) === null || s === void 0 ? void 0 : s.value, w = d.filter((x) => !Wc.has(x.type)).map((x) => qc(x.value)), y = u.flatMap((x) => x.filter((C) => !Wc.has(C.type)).map((C) => qc(C.value))), T = [.../* @__PURE__ */ new Set([...w, ...y])].sort((x, C) => C.length - x.length), b = T.length === 0 ? new RegExp("[\\p{White_Space}]", "gu") : new RegExp(`${T.join("|")}|[\\p{White_Space}]`, "gu"), S = [...new Intl.NumberFormat(r.locale, { useGrouping: false }).format(9876543210)].reverse(), _ = new Map(S.map((x, C) => [x, C])), I = new RegExp(`[${S.join("")}]`, "g");
  return { minusSign: g, plusSign: m, decimal: f, group: v, literals: b, numeral: I, index: (x) => String(_.get(x)) };
}
function $n(e, t, r) {
  return e.replaceAll ? e.replaceAll(t, r) : e.split(t).join(r);
}
function qc(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var h1 = gt("numberInput").parts("root", "label", "input", "control", "valueText", "incrementTrigger", "decrementTrigger", "scrubber");
var or = h1.build();
var f1 = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.root) ?? `number-input:${e.id}`;
};
var eo = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.input) ?? `number-input:${e.id}:input`;
};
var qp = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.incrementTrigger) ?? `number-input:${e.id}:inc`;
};
var Yp = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.decrementTrigger) ?? `number-input:${e.id}:dec`;
};
var m1 = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.scrubber) ?? `number-input:${e.id}:scrubber`;
};
var Kp = (e) => `number-input:${e.id}:cursor`;
var b1 = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.label) ?? `number-input:${e.id}:label`;
};
var to = (e) => e.getById(eo(e));
var y1 = (e) => e.getById(qp(e));
var v1 = (e) => e.getById(Yp(e));
var Xp = (e) => e.getDoc().getElementById(Kp(e));
var w1 = (e, t) => {
  let r = null;
  return t === "increment" && (r = y1(e)), t === "decrement" && (r = v1(e)), r;
};
var x1 = (e, t) => {
  if (!op()) return S1(e, t), () => {
    var _a5;
    (_a5 = Xp(e)) == null ? void 0 : _a5.remove();
  };
};
var k1 = (e) => {
  let t = e.getDoc(), r = t.documentElement, n = t.body;
  return n.style.pointerEvents = "none", r.style.userSelect = "none", r.style.cursor = "ew-resize", () => {
    n.style.pointerEvents = "", r.style.userSelect = "", r.style.cursor = "", r.style.length || r.removeAttribute("style"), n.style.length || n.removeAttribute("style");
  };
};
var T1 = (e, t) => {
  let { point: r, isRtl: n, event: o } = t, a = e.getWin(), i = no(o.movementX, a.devicePixelRatio), s = no(o.movementY, a.devicePixelRatio), l = i > 0 ? "increment" : i < 0 ? "decrement" : null;
  n && l === "increment" && (l = "decrement"), n && l === "decrement" && (l = "increment");
  let d = { x: r.x + i, y: r.y + s }, c = a.innerWidth, u = no(7.5, a.devicePixelRatio);
  return d.x = rm(d.x + u, c) - u, { hint: l, point: d };
};
var S1 = (e, t) => {
  let r = e.getDoc(), n = r.createElement("div");
  n.className = "scrubber--cursor", n.id = Kp(e), Object.assign(n.style, { width: "15px", height: "15px", position: "fixed", pointerEvents: "none", left: "0px", top: "0px", zIndex: tp, transform: t ? `translate3d(${t.x}px, ${t.y}px, 0px)` : void 0, willChange: "transform" }), n.innerHTML = `
      <svg width="46" height="15" style="left: -15.5px; position: absolute; top: 0; filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 1px 1.1px);">
        <g transform="translate(2 3)">
          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z" style="stroke-width: 2px; stroke: white;"></path>
          <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z"></path>
        </g>
      </svg>`, r.body.appendChild(n);
};
function E1(e, t) {
  let { state: r, send: n, prop: o, scope: a, computed: i } = e, s = r.hasTag("focus"), l = i("isDisabled"), d = o("readOnly"), c = i("isValueEmpty"), u = i("isOutOfRange") || !!o("invalid"), p = l || !i("canIncrement") || d, g = l || !i("canDecrement") || d, m = o("translations");
  return { focused: s, invalid: u, empty: c, value: i("formattedValue"), valueAsNumber: i("valueAsNumber"), setValue(f) {
    n({ type: "VALUE.SET", value: f });
  }, clearValue() {
    n({ type: "VALUE.CLEAR" });
  }, increment() {
    n({ type: "VALUE.INCREMENT" });
  }, decrement() {
    n({ type: "VALUE.DECREMENT" });
  }, setToMax() {
    n({ type: "VALUE.SET", value: o("max") });
  }, setToMin() {
    n({ type: "VALUE.SET", value: o("min") });
  }, focus() {
    var _a5;
    (_a5 = to(a)) == null ? void 0 : _a5.focus();
  }, getRootProps() {
    return t.element({ id: f1(a), ...or.root.attrs, dir: o("dir"), "data-disabled": re(l), "data-focus": re(s), "data-invalid": re(u) });
  }, getLabelProps() {
    return t.label({ ...or.label.attrs, dir: o("dir"), "data-disabled": re(l), "data-focus": re(s), "data-invalid": re(u), id: b1(a), htmlFor: eo(a) });
  }, getControlProps() {
    return t.element({ ...or.control.attrs, dir: o("dir"), role: "group", "aria-disabled": l, "data-focus": re(s), "data-disabled": re(l), "data-invalid": re(u), "aria-invalid": uo(u) });
  }, getValueTextProps() {
    return t.element({ ...or.valueText.attrs, dir: o("dir"), "data-disabled": re(l), "data-invalid": re(u), "data-focus": re(s) });
  }, getInputProps() {
    return t.input({ ...or.input.attrs, dir: o("dir"), name: o("name"), form: o("form"), id: eo(a), role: "spinbutton", defaultValue: i("formattedValue"), pattern: o("pattern"), inputMode: o("inputMode"), "aria-invalid": uo(u), "data-invalid": re(u), disabled: l, "data-disabled": re(l), readOnly: d, required: o("required"), autoComplete: "off", autoCorrect: "off", spellCheck: "false", type: "text", "aria-roledescription": "numberfield", "aria-valuemin": o("min"), "aria-valuemax": o("max"), "aria-valuenow": Number.isNaN(i("valueAsNumber")) ? void 0 : i("valueAsNumber"), "aria-valuetext": i("valueText"), onFocus() {
      n({ type: "INPUT.FOCUS" });
    }, onBlur() {
      n({ type: "INPUT.BLUR" });
    }, onInput(f) {
      n({ type: "INPUT.CHANGE", target: f.currentTarget, hint: "set" });
    }, onBeforeInput(f) {
      try {
        let { selectionStart: v, selectionEnd: w, value: y } = f.currentTarget, T = y.slice(0, v) + (f.data ?? "") + y.slice(w);
        i("parser").isValidPartialNumber(T) || f.preventDefault();
      } catch {
      }
    }, onKeyDown(f) {
      if (f.defaultPrevented || d || Rm(f)) return;
      let v = zm(f) * o("step"), w = { ArrowUp() {
        n({ type: "INPUT.ARROW_UP", step: v }), f.preventDefault();
      }, ArrowDown() {
        n({ type: "INPUT.ARROW_DOWN", step: v }), f.preventDefault();
      }, Home() {
        gs(f) || (n({ type: "INPUT.HOME" }), f.preventDefault());
      }, End() {
        gs(f) || (n({ type: "INPUT.END" }), f.preventDefault());
      }, Enter() {
        n({ type: "INPUT.ENTER" });
      } }[f.key];
      w == null ? void 0 : w(f);
    } });
  }, getDecrementTriggerProps() {
    return t.button({ ...or.decrementTrigger.attrs, dir: o("dir"), id: Yp(a), disabled: g, "data-disabled": re(g), "aria-label": m.decrementLabel, type: "button", tabIndex: -1, "aria-controls": eo(a), onPointerDown(f) {
      var _a5;
      g || ya(f) && (n({ type: "TRIGGER.PRESS_DOWN", hint: "decrement", pointerType: f.pointerType }), f.pointerType === "mouse" && f.preventDefault(), f.pointerType === "touch" && ((_a5 = f.currentTarget) == null ? void 0 : _a5.focus({ preventScroll: true })));
    }, onPointerUp(f) {
      n({ type: "TRIGGER.PRESS_UP", hint: "decrement", pointerType: f.pointerType });
    }, onPointerLeave() {
      g || n({ type: "TRIGGER.PRESS_UP", hint: "decrement" });
    } });
  }, getIncrementTriggerProps() {
    return t.button({ ...or.incrementTrigger.attrs, dir: o("dir"), id: qp(a), disabled: p, "data-disabled": re(p), "aria-label": m.incrementLabel, type: "button", tabIndex: -1, "aria-controls": eo(a), onPointerDown(f) {
      var _a5;
      p || !ya(f) || (n({ type: "TRIGGER.PRESS_DOWN", hint: "increment", pointerType: f.pointerType }), f.pointerType === "mouse" && f.preventDefault(), f.pointerType === "touch" && ((_a5 = f.currentTarget) == null ? void 0 : _a5.focus({ preventScroll: true })));
    }, onPointerUp(f) {
      n({ type: "TRIGGER.PRESS_UP", hint: "increment", pointerType: f.pointerType });
    }, onPointerLeave(f) {
      n({ type: "TRIGGER.PRESS_UP", hint: "increment", pointerType: f.pointerType });
    } });
  }, getScrubberProps() {
    return t.element({ ...or.scrubber.attrs, dir: o("dir"), "data-disabled": re(l), id: m1(a), role: "presentation", onMouseDown(f) {
      if (l || !ya(f)) return;
      let v = fn(f), w = dt(f.currentTarget).devicePixelRatio;
      v.x = v.x - no(7.5, w), v.y = v.y - no(7.5, w), n({ type: "SCRUBBER.PRESS_DOWN", point: v }), f.preventDefault();
    }, style: { cursor: l ? void 0 : "ew-resize" } });
  } };
}
function C1(e) {
  if (!(!e || e.ownerDocument.activeElement !== e)) try {
    let { selectionStart: t, selectionEnd: r, value: n } = e, o = n.substring(0, t), a = n.substring(r);
    return { start: t, end: r, value: n, beforeTxt: o, afterTxt: a };
  } catch {
  }
}
function F1(e, t) {
  if (!(!e || e.ownerDocument.activeElement !== e)) {
    if (!t) {
      e.setSelectionRange(e.value.length, e.value.length);
      return;
    }
    try {
      let { value: r } = e, { beforeTxt: n = "", afterTxt: o = "", start: a } = t, i = r.length;
      if (r.endsWith(o)) i = r.length - o.length;
      else if (r.startsWith(n)) i = n.length;
      else if (a != null) {
        let s = n[a - 1], l = r.indexOf(s, a - 1);
        l !== -1 && (i = l + 1);
      }
      e.setSelectionRange(i, i);
    } catch {
    }
  }
}
var P1 = (e, t = {}) => new Intl.NumberFormat(e, t);
var _1 = (e, t = {}) => new Wp(e, t);
var $i = (e, t) => {
  let { prop: r, computed: n } = t;
  return r("formatOptions") ? n("parser").parse(String(e)) : parseFloat(e);
};
var Er = (e, t) => {
  let { prop: r, computed: n } = t;
  return Number.isNaN(e) ? "" : r("formatOptions") ? n("formatter").format(e) : e.toString();
};
var I1 = (e, t) => {
  let r = e !== void 0 && !Number.isNaN(e) ? e : 1;
  return (t == null ? void 0 : t.style) === "percent" && (e === void 0 || Number.isNaN(e)) && (r = 0.01), r;
};
var { choose: O1, guards: A1, createMachine: R1 } = Fb();
var { not: Yc, and: Kc } = A1;
var N1 = R1({ props({ props: e }) {
  let t = I1(e.step, e.formatOptions);
  return { dir: "ltr", locale: "en-US", focusInputOnChange: true, clampValueOnBlur: !e.allowOverflow, allowOverflow: false, inputMode: "decimal", pattern: "-?[0-9]*(.[0-9]+)?", defaultValue: "", step: t, min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, spinOnPress: true, ...e, translations: { incrementLabel: "increment value", decrementLabel: "decrease value", ...e.translations } };
}, initialState() {
  return "idle";
}, context({ prop: e, bindable: t, getComputed: r }) {
  return { value: t(() => ({ defaultValue: e("defaultValue"), value: e("value"), onChange(n) {
    var _a5;
    let o = r(), a = $i(n, { computed: o, prop: e });
    (_a5 = e("onValueChange")) == null ? void 0 : _a5({ value: n, valueAsNumber: a });
  } })), hint: t(() => ({ defaultValue: null })), scrubberCursorPoint: t(() => ({ defaultValue: null, hash(n) {
    return n ? `x:${n.x}, y:${n.y}` : "";
  } })), fieldsetDisabled: t(() => ({ defaultValue: false })) };
}, computed: { isRtl: ({ prop: e }) => e("dir") === "rtl", valueAsNumber: ({ context: e, computed: t, prop: r }) => $i(e.get("value"), { computed: t, prop: r }), formattedValue: ({ computed: e, prop: t }) => Er(e("valueAsNumber"), { computed: e, prop: t }), isAtMin: ({ computed: e, prop: t }) => om(e("valueAsNumber"), t("min")), isAtMax: ({ computed: e, prop: t }) => nm(e("valueAsNumber"), t("max")), isOutOfRange: ({ computed: e, prop: t }) => !am(e("valueAsNumber"), t("min"), t("max")), isValueEmpty: ({ context: e }) => e.get("value") === "", isDisabled: ({ prop: e, context: t }) => !!e("disabled") || t.get("fieldsetDisabled"), canIncrement: ({ prop: e, computed: t }) => e("allowOverflow") || !t("isAtMax"), canDecrement: ({ prop: e, computed: t }) => e("allowOverflow") || !t("isAtMin"), valueText: ({ prop: e, context: t }) => {
  var _a5, _b2;
  return (_b2 = (_a5 = e("translations")).valueText) == null ? void 0 : _b2.call(_a5, t.get("value"));
}, formatter: bs(({ prop: e }) => [e("locale"), e("formatOptions")], (e, t) => P1(e, t)), parser: bs(({ prop: e }) => [e("locale"), e("formatOptions")], (e, t) => _1(e, t)) }, watch({ track: e, action: t, context: r, computed: n, prop: o }) {
  e([() => r.get("value"), () => o("locale")], () => {
    t(["syncInputElement"]);
  }), e([() => n("isOutOfRange")], () => {
    t(["invokeOnInvalid"]);
  }), e([() => r.hash("scrubberCursorPoint")], () => {
    t(["setVirtualCursorPosition"]);
  });
}, effects: ["trackFormControl"], on: { "VALUE.SET": { actions: ["setRawValue"] }, "VALUE.CLEAR": { actions: ["clearValue"] }, "VALUE.INCREMENT": { actions: ["increment"] }, "VALUE.DECREMENT": { actions: ["decrement"] } }, states: { idle: { on: { "TRIGGER.PRESS_DOWN": [{ guard: "isTouchPointer", target: "before:spin", actions: ["setHint"] }, { target: "before:spin", actions: ["focusInput", "invokeOnFocus", "setHint"] }], "SCRUBBER.PRESS_DOWN": { target: "scrubbing", actions: ["focusInput", "invokeOnFocus", "setHint", "setCursorPoint"] }, "INPUT.FOCUS": { target: "focused", actions: ["focusInput", "invokeOnFocus"] } } }, focused: { tags: ["focus"], effects: ["attachWheelListener"], on: { "TRIGGER.PRESS_DOWN": [{ guard: "isTouchPointer", target: "before:spin", actions: ["setHint"] }, { target: "before:spin", actions: ["focusInput", "setHint"] }], "SCRUBBER.PRESS_DOWN": { target: "scrubbing", actions: ["focusInput", "setHint", "setCursorPoint"] }, "INPUT.ARROW_UP": { actions: ["increment"] }, "INPUT.ARROW_DOWN": { actions: ["decrement"] }, "INPUT.HOME": { actions: ["decrementToMin"] }, "INPUT.END": { actions: ["incrementToMax"] }, "INPUT.CHANGE": { actions: ["setValue", "setHint"] }, "INPUT.BLUR": [{ guard: Kc("clampValueOnBlur", Yc("isInRange")), target: "idle", actions: ["setClampedValue", "clearHint", "invokeOnBlur"] }, { guard: Yc("isInRange"), target: "idle", actions: ["setFormattedValue", "clearHint", "invokeOnBlur", "invokeOnInvalid"] }, { target: "idle", actions: ["setFormattedValue", "clearHint", "invokeOnBlur"] }], "INPUT.ENTER": { actions: ["setFormattedValue", "clearHint", "invokeOnBlur"] } } }, "before:spin": { tags: ["focus"], effects: ["trackButtonDisabled", "waitForChangeDelay"], entry: O1([{ guard: "isIncrementHint", actions: ["increment"] }, { guard: "isDecrementHint", actions: ["decrement"] }]), on: { CHANGE_DELAY: { target: "spinning", guard: Kc("isInRange", "spinOnPress") }, "TRIGGER.PRESS_UP": [{ guard: "isTouchPointer", target: "focused", actions: ["clearHint"] }, { target: "focused", actions: ["focusInput", "clearHint"] }] } }, spinning: { tags: ["focus"], effects: ["trackButtonDisabled", "spinValue"], on: { SPIN: [{ guard: "isIncrementHint", actions: ["increment"] }, { guard: "isDecrementHint", actions: ["decrement"] }], "TRIGGER.PRESS_UP": { target: "focused", actions: ["focusInput", "clearHint"] } } }, scrubbing: { tags: ["focus"], effects: ["activatePointerLock", "trackMousemove", "setupVirtualCursor", "preventTextSelection"], on: { "SCRUBBER.POINTER_UP": { target: "focused", actions: ["focusInput", "clearCursorPoint"] }, "SCRUBBER.POINTER_MOVE": [{ guard: "isIncrementHint", actions: ["increment", "setCursorPoint"] }, { guard: "isDecrementHint", actions: ["decrement", "setCursorPoint"] }] } } }, implementations: { guards: { clampValueOnBlur: ({ prop: e }) => e("clampValueOnBlur"), spinOnPress: ({ prop: e }) => !!e("spinOnPress"), isInRange: ({ computed: e }) => !e("isOutOfRange"), isDecrementHint: ({ context: e, event: t }) => (t.hint ?? e.get("hint")) === "decrement", isIncrementHint: ({ context: e, event: t }) => (t.hint ?? e.get("hint")) === "increment", isTouchPointer: ({ event: e }) => e.pointerType === "touch" }, effects: { waitForChangeDelay({ send: e }) {
  let t = setTimeout(() => {
    e({ type: "CHANGE_DELAY" });
  }, 300);
  return () => clearTimeout(t);
}, spinValue({ send: e }) {
  let t = setInterval(() => {
    e({ type: "SPIN" });
  }, 50);
  return () => clearInterval(t);
}, trackFormControl({ context: e, scope: t }) {
  let r = to(t);
  return Km(r, { onFieldsetDisabledChange(n) {
    e.set("fieldsetDisabled", n);
  }, onFormReset() {
    e.set("value", e.initial("value"));
  } });
}, setupVirtualCursor({ context: e, scope: t }) {
  let r = e.get("scrubberCursorPoint");
  return x1(t, r);
}, preventTextSelection({ scope: e }) {
  return k1(e);
}, trackButtonDisabled({ context: e, scope: t, send: r }) {
  let n = e.get("hint"), o = w1(t, n);
  return dp(o, { attributes: ["disabled"], callback() {
    r({ type: "TRIGGER.PRESS_UP", src: "attr" });
  } });
}, attachWheelListener({ scope: e, send: t, prop: r }) {
  let n = to(e);
  if (!n || !e.isActiveElement(n) || !r("allowMouseWheel")) return;
  function o(a) {
    a.preventDefault();
    let i = Math.sign(a.deltaY) * -1;
    i === 1 ? t({ type: "VALUE.INCREMENT" }) : i === -1 && t({ type: "VALUE.DECREMENT" });
  }
  return ke(n, "wheel", o, { passive: false });
}, activatePointerLock({ scope: e }) {
  if (!op()) return lb(e.getDoc());
}, trackMousemove({ scope: e, send: t, context: r, computed: n }) {
  let o = e.getDoc();
  function a(s) {
    let l = r.get("scrubberCursorPoint"), d = n("isRtl"), c = T1(e, { point: l, isRtl: d, event: s });
    c.hint && t({ type: "SCRUBBER.POINTER_MOVE", hint: c.hint, point: c.point });
  }
  function i() {
    t({ type: "SCRUBBER.POINTER_UP" });
  }
  return Pa(ke(o, "mousemove", a, false), ke(o, "mouseup", i, false));
} }, actions: { focusInput({ scope: e, prop: t }) {
  if (!t("focusInputOnChange")) return;
  let r = to(e);
  e.isActiveElement(r) || xe(() => r == null ? void 0 : r.focus({ preventScroll: true }));
}, increment({ context: e, event: t, prop: r, computed: n }) {
  let o = sm(n("valueAsNumber"), t.step ?? r("step"));
  r("allowOverflow") || (o = hn(o, r("min"), r("max"))), e.set("value", Er(o, { computed: n, prop: r }));
}, decrement({ context: e, event: t, prop: r, computed: n }) {
  let o = lm(n("valueAsNumber"), t.step ?? r("step"));
  r("allowOverflow") || (o = hn(o, r("min"), r("max"))), e.set("value", Er(o, { computed: n, prop: r }));
}, setClampedValue({ context: e, prop: t, computed: r }) {
  let n = hn(r("valueAsNumber"), t("min"), t("max"));
  e.set("value", Er(n, { computed: r, prop: t }));
}, setRawValue({ context: e, event: t, prop: r, computed: n }) {
  let o = $i(t.value, { computed: n, prop: r });
  r("allowOverflow") || (o = hn(o, r("min"), r("max"))), e.set("value", Er(o, { computed: n, prop: r }));
}, setValue({ context: e, event: t }) {
  var _a5;
  let r = ((_a5 = t.target) == null ? void 0 : _a5.value) ?? t.value;
  e.set("value", r);
}, clearValue({ context: e }) {
  e.set("value", "");
}, incrementToMax({ context: e, prop: t, computed: r }) {
  let n = Er(t("max"), { computed: r, prop: t });
  e.set("value", n);
}, decrementToMin({ context: e, prop: t, computed: r }) {
  let n = Er(t("min"), { computed: r, prop: t });
  e.set("value", n);
}, setHint({ context: e, event: t }) {
  e.set("hint", t.hint);
}, clearHint({ context: e }) {
  e.set("hint", null);
}, invokeOnFocus({ computed: e, prop: t }) {
  var _a5;
  (_a5 = t("onFocusChange")) == null ? void 0 : _a5({ focused: true, value: e("formattedValue"), valueAsNumber: e("valueAsNumber") });
}, invokeOnBlur({ computed: e, prop: t }) {
  var _a5;
  (_a5 = t("onFocusChange")) == null ? void 0 : _a5({ focused: false, value: e("formattedValue"), valueAsNumber: e("valueAsNumber") });
}, invokeOnInvalid({ computed: e, prop: t, event: r }) {
  var _a5;
  if (r.type === "INPUT.CHANGE") return;
  let n = e("valueAsNumber") > t("max") ? "rangeOverflow" : "rangeUnderflow";
  (_a5 = t("onValueInvalid")) == null ? void 0 : _a5({ reason: n, value: e("formattedValue"), valueAsNumber: e("valueAsNumber") });
}, syncInputElement({ context: e, event: t, computed: r, scope: n }) {
  let o = t.type.endsWith("CHANGE") ? e.get("value") : r("formattedValue"), a = to(n), i = C1(a);
  xe(() => {
    Hm(a, o), F1(a, i);
  });
}, setFormattedValue({ context: e, computed: t }) {
  e.set("value", t("formattedValue"));
}, setCursorPoint({ context: e, event: t }) {
  e.set("scrubberCursorPoint", t.point);
}, clearCursorPoint({ context: e }) {
  e.set("scrubberCursorPoint", null);
}, setVirtualCursorPosition({ context: e, scope: t }) {
  let r = Xp(t), n = e.get("scrubberCursorPoint");
  !r || !n || (r.style.transform = `translate3d(${n.x}px, ${n.y}px, 0px)`);
} } } });
var D1 = yt()(["allowMouseWheel", "allowOverflow", "clampValueOnBlur", "dir", "disabled", "focusInputOnChange", "form", "formatOptions", "getRootNode", "id", "ids", "inputMode", "invalid", "locale", "max", "min", "name", "onFocusChange", "onValueChange", "onValueInvalid", "pattern", "required", "readOnly", "spinOnPress", "step", "translations", "value", "defaultValue"]);
var pI = Ct(D1);
var [Zp, vr] = Ve({ hookName: "useNumberInputContext", providerName: "<NumberInputProvider />" });
var L1 = (e) => e.children(vr());
var M1 = (e) => {
  let t = vr(), r = U(() => t().getControlProps(), e);
  return h(V.div, r);
};
var U1 = (e) => {
  let t = vr(), r = U(() => t().getDecrementTriggerProps(), e);
  return h(V.button, r);
};
var B1 = (e) => {
  let t = vr(), r = U(() => t().getIncrementTriggerProps(), e);
  return h(V.button, r);
};
var $1 = (e) => {
  let t = vr(), r = U(() => t().getInputProps(), e), n = Mt();
  return h(V.input, he({ get "aria-describedby"() {
    return n == null ? void 0 : n().ariaDescribedby;
  } }, r));
};
var z1 = (e) => {
  let t = vr(), r = U(() => t().getLabelProps(), e);
  return h(V.label, r);
};
var Jp = (e) => {
  let t = Et(), r = En(), n = Zt(), o = Mt(), a = te(() => ({ id: t, ids: { label: o == null ? void 0 : o().ids.label, input: o == null ? void 0 : o().ids.control }, disabled: o == null ? void 0 : o().disabled, readOnly: o == null ? void 0 : o().readOnly, required: o == null ? void 0 : o().required, invalid: o == null ? void 0 : o().invalid, dir: r().dir, locale: r().locale, getRootNode: n().getRootNode, ...br(e) })), i = fr(N1, a);
  return te(() => E1(i, mr));
};
var j1 = (e) => {
  let [t, r] = Ie()(e, ["allowMouseWheel", "allowOverflow", "clampValueOnBlur", "defaultValue", "disabled", "focusInputOnChange", "form", "formatOptions", "id", "ids", "inputMode", "invalid", "locale", "max", "min", "name", "onFocusChange", "onValueChange", "onValueInvalid", "pattern", "readOnly", "required", "spinOnPress", "step", "translations", "value"]), n = Jp(t), o = U(() => n().getRootProps(), r);
  return h(Zp, { value: n, get children() {
    return h(V.div, o);
  } });
};
var V1 = (e) => {
  let [{ value: t }, r] = Ie()(e, ["value"]), n = U(() => t().getRootProps(), r);
  return h(Zp, { value: t, get children() {
    return h(V.div, n);
  } });
};
var H1 = (e) => {
  let t = vr(), r = U(() => t().getScrubberProps(), e);
  return h(V.div, r);
};
var G1 = (e) => {
  let t = vr(), r = U(() => t().getValueTextProps(), e);
  return h(V.span, r);
};
var dn = {};
yr(dn, { Context: () => L1, Control: () => M1, DecrementTrigger: () => U1, IncrementTrigger: () => B1, Input: () => $1, Label: () => z1, Root: () => j1, RootProvider: () => V1, Scrubber: () => H1, ValueText: () => G1 });
var W1 = gt("dialog").parts("trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger");
var Cr = W1.build();
var Qp = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.positioner) ?? `dialog:${e.id}:positioner`;
};
var eg = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.backdrop) ?? `dialog:${e.id}:backdrop`;
};
var Ts = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.content) ?? `dialog:${e.id}:content`;
};
var tg = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.trigger) ?? `dialog:${e.id}:trigger`;
};
var Ss = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.title) ?? `dialog:${e.id}:title`;
};
var Es = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.description) ?? `dialog:${e.id}:description`;
};
var rg = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.closeTrigger) ?? `dialog:${e.id}:close`;
};
var ra = (e) => e.getById(Ts(e));
var q1 = (e) => e.getById(Qp(e));
var Y1 = (e) => e.getById(eg(e));
var K1 = (e) => e.getById(tg(e));
var X1 = (e) => e.getById(Ss(e));
var Z1 = (e) => e.getById(Es(e));
var J1 = (e) => e.getById(rg(e));
function Q1(e, t) {
  let { state: r, send: n, context: o, prop: a, scope: i } = e, s = a("aria-label"), l = r.matches("open");
  return { open: l, setOpen(d) {
    r.matches("open") !== d && n({ type: d ? "OPEN" : "CLOSE" });
  }, getTriggerProps() {
    return t.button({ ...Cr.trigger.attrs, dir: a("dir"), id: tg(i), "aria-haspopup": "dialog", type: "button", "aria-expanded": l, "data-state": l ? "open" : "closed", "aria-controls": Ts(i), onClick(d) {
      d.defaultPrevented || n({ type: "TOGGLE" });
    } });
  }, getBackdropProps() {
    return t.element({ ...Cr.backdrop.attrs, dir: a("dir"), hidden: !l, id: eg(i), "data-state": l ? "open" : "closed" });
  }, getPositionerProps() {
    return t.element({ ...Cr.positioner.attrs, dir: a("dir"), id: Qp(i), style: { pointerEvents: l ? void 0 : "none" } });
  }, getContentProps() {
    let d = o.get("rendered");
    return t.element({ ...Cr.content.attrs, dir: a("dir"), role: a("role"), hidden: !l, id: Ts(i), tabIndex: -1, "data-state": l ? "open" : "closed", "aria-modal": true, "aria-label": s || void 0, "aria-labelledby": s || !d.title ? void 0 : Ss(i), "aria-describedby": d.description ? Es(i) : void 0 });
  }, getTitleProps() {
    return t.element({ ...Cr.title.attrs, dir: a("dir"), id: Ss(i) });
  }, getDescriptionProps() {
    return t.element({ ...Cr.description.attrs, dir: a("dir"), id: Es(i) });
  }, getCloseTriggerProps() {
    return t.button({ ...Cr.closeTrigger.attrs, dir: a("dir"), id: rg(i), type: "button", onClick(d) {
      d.defaultPrevented || (d.stopPropagation(), n({ type: "CLOSE" }));
    } });
  } };
}
var ex = { props({ props: e, scope: t }) {
  let r = e.role === "alertdialog", n = r ? () => J1(t) : void 0, o = typeof e.modal == "boolean" ? e.modal : true;
  return { role: "dialog", modal: o, trapFocus: o, preventScroll: o, closeOnInteractOutside: !r, closeOnEscape: true, restoreFocus: true, initialFocusEl: n, ...e };
}, initialState({ prop: e }) {
  return e("open") || e("defaultOpen") ? "open" : "closed";
}, context({ bindable: e }) {
  return { rendered: e(() => ({ defaultValue: { title: true, description: true } })) };
}, watch({ track: e, action: t, prop: r }) {
  e([() => r("open")], () => {
    t(["toggleVisibility"]);
  });
}, states: { open: { entry: ["checkRenderedElements", "syncZIndex"], effects: ["trackDismissableElement", "trapFocus", "preventScroll", "hideContentBelow"], on: { "CONTROLLED.CLOSE": { target: "closed" }, CLOSE: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }], TOGGLE: [{ guard: "isOpenControlled", actions: ["invokeOnClose"] }, { target: "closed", actions: ["invokeOnClose"] }] } }, closed: { on: { "CONTROLLED.OPEN": { target: "open" }, OPEN: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }], TOGGLE: [{ guard: "isOpenControlled", actions: ["invokeOnOpen"] }, { target: "open", actions: ["invokeOnOpen"] }] } } }, implementations: { guards: { isOpenControlled: ({ prop: e }) => e("open") != null }, effects: { trackDismissableElement({ scope: e, send: t, prop: r }) {
  return Pp(() => ra(e), { defer: true, pointerBlocking: r("modal"), exclude: [K1(e)], onInteractOutside(n) {
    var _a5;
    (_a5 = r("onInteractOutside")) == null ? void 0 : _a5(n), r("closeOnInteractOutside") || n.preventDefault();
  }, persistentElements: r("persistentElements"), onFocusOutside: r("onFocusOutside"), onPointerDownOutside: r("onPointerDownOutside"), onEscapeKeyDown(n) {
    var _a5;
    (_a5 = r("onEscapeKeyDown")) == null ? void 0 : _a5(n), r("closeOnEscape") || n.preventDefault();
  }, onDismiss() {
    t({ type: "CLOSE", src: "interact-outside" });
  } });
}, preventScroll({ scope: e, prop: t }) {
  if (t("preventScroll")) return B0(e.getDoc());
}, trapFocus({ scope: e, prop: t }) {
  return t("trapFocus") ? Nv(() => ra(e), { preventScroll: true, returnFocusOnDeactivate: !!t("restoreFocus"), initialFocus: t("initialFocusEl"), setReturnFocus: (r) => {
    var _a5;
    return ((_a5 = t("finalFocusEl")) == null ? void 0 : _a5()) ?? r;
  } }) : void 0;
}, hideContentBelow({ scope: e, prop: t }) {
  return t("modal") ? M0(() => [ra(e)], { defer: true }) : void 0;
} }, actions: { checkRenderedElements({ context: e, scope: t }) {
  xe(() => {
    e.set("rendered", { title: !!X1(t), description: !!Z1(t) });
  });
}, syncZIndex({ scope: e }) {
  xe(() => {
    let t = ra(e);
    if (!t) return;
    let r = Sn(t);
    [q1(e), Y1(e)].forEach((n) => {
      n == null ? void 0 : n.style.setProperty("--z-index", r.zIndex), n == null ? void 0 : n.style.setProperty("--layer-index", r.getPropertyValue("--layer-index"));
    });
  });
}, invokeOnClose({ prop: e }) {
  var _a5;
  (_a5 = e("onOpenChange")) == null ? void 0 : _a5({ open: false });
}, invokeOnOpen({ prop: e }) {
  var _a5;
  (_a5 = e("onOpenChange")) == null ? void 0 : _a5({ open: true });
}, toggleVisibility({ prop: e, send: t, event: r }) {
  t({ type: e("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: r });
} } } };
var tx = yt()(["aria-label", "closeOnEscape", "closeOnInteractOutside", "dir", "finalFocusEl", "getRootNode", "getRootNode", "id", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "defaultOpen", "open", "persistentElements", "preventScroll", "restoreFocus", "role", "trapFocus"]);
var gI = Ct(tx);
var [ng, wr] = Ve({ hookName: "useDialogContext", providerName: "<DialogProvider />" });
var rx = (e) => {
  let t = wr(), r = Yb(), n = Ao(U(r, () => ({ present: t().open }))), o = U(() => t().getBackdropProps(), () => n().presenceProps, e);
  return h(Y, { get when() {
    return !n().unmounted;
  }, get children() {
    return h(V.div, he(o, { ref(a) {
      var i = Oo(n().ref, e.ref);
      typeof i == "function" && i(a);
    } }));
  } });
};
var nx = (e) => {
  let t = wr(), r = U(() => t().getCloseTriggerProps(), e);
  return h(V.button, r);
};
var ox = (e) => {
  let t = wr(), r = Cn(), n = U(() => t().getContentProps(), () => r().presenceProps, e);
  return h(Y, { get when() {
    return !r().unmounted;
  }, get children() {
    return h(V.div, he(n, { ref(o) {
      var a = Oo(r().ref, e.ref);
      typeof a == "function" && a(o);
    } }));
  } });
};
var ax = (e) => e.children(wr());
var ix = (e) => {
  let t = wr(), r = U(() => t().getDescriptionProps(), e);
  return h(V.div, r);
};
var sx = (e) => {
  let t = wr(), r = Cn(), n = U(() => t().getPositionerProps(), e);
  return h(Y, { get when() {
    return !r().unmounted;
  }, get children() {
    return h(V.div, n);
  } });
};
var lx = (e) => {
  let t = Et(), r = En(), n = Zt(), o = te(() => ({ id: t, dir: r().dir, getRootNode: n().getRootNode, ...br(e) })), a = fr(ex, o);
  return te(() => Q1(a, mr));
};
var cx = (e) => {
  let [t, r] = ri(e), [n] = al(t), [o, a] = Ie()(r, ["aria-label", "closeOnEscape", "closeOnInteractOutside", "defaultOpen", "finalFocusEl", "id", "ids", "initialFocusEl", "modal", "onEscapeKeyDown", "onFocusOutside", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "open", "persistentElements", "preventScroll", "restoreFocus", "role", "trapFocus"]), i = lx(o), s = Ao(U(t, () => ({ present: i().open })));
  return h(ng, { value: i, get children() {
    return h(fp, { value: n, get children() {
      return h(ni, { value: s, get children() {
        return a.children;
      } });
    } });
  } });
};
var dx = (e) => {
  let [t, r] = ri(e), [n] = al(t), o = Ao(U(t, () => ({ present: r.value().open })));
  return h(ng, { get value() {
    return r.value;
  }, get children() {
    return h(fp, { value: n, get children() {
      return h(ni, { value: o, get children() {
        return r.children;
      } });
    } });
  } });
};
var ux = (e) => {
  let t = wr(), r = U(() => t().getTitleProps(), e);
  return h(V.h2, r);
};
var px = (e) => {
  let t = wr(), r = Cn(), n = U(() => t().getTriggerProps(), () => ({ "aria-controls": r().unmounted && null }), e);
  return h(V.button, n);
};
var un = {};
yr(un, { Backdrop: () => rx, CloseTrigger: () => nx, Content: () => ox, Context: () => ax, Description: () => ix, Positioner: () => sx, Root: () => cx, RootProvider: () => dx, Title: () => ux, Trigger: () => px });
function gx(e) {
  let t = Sn(e), r = e.getBoundingClientRect(), n = t.getPropertyValue("scroll-padding-left").replace("auto", "0px"), o = t.getPropertyValue("scroll-padding-top").replace("auto", "0px"), a = t.getPropertyValue("scroll-padding-right").replace("auto", "0px"), i = t.getPropertyValue("scroll-padding-bottom").replace("auto", "0px");
  function s(p, g) {
    let m = parseFloat(p);
    return /%/.test(p) && (m /= 100, m *= g), Number.isNaN(m) ? 0 : m;
  }
  let l = s(n, r.width), d = s(o, r.height), c = s(a, r.width), u = s(i, r.height);
  return { x: { before: l, after: c }, y: { before: d, after: u } };
}
function hx(e, t, r = "both") {
  return r === "x" && e.right >= t.left && e.left <= t.right || r === "y" && e.bottom >= t.top && e.top <= t.bottom || r === "both" && e.right >= t.left && e.left <= t.right && e.bottom >= t.top && e.top <= t.bottom;
}
function og(e) {
  let t = [];
  for (let r of e.children) t = t.concat(r, og(r));
  return t;
}
function ag(e, t = false) {
  let r = e.getBoundingClientRect(), n = { x: { start: [], center: [], end: [] }, y: { start: [], center: [], end: [] } }, o = t ? og(e) : e.children;
  for (let a of ["x", "y"]) {
    let i = a === "x" ? "y" : "x", s = a === "x" ? "left" : "top", l = a === "x" ? "width" : "height", d = a === "x" ? "scrollLeft" : "scrollTop";
    for (let c of o) {
      let u = c.getBoundingClientRect();
      if (!hx(r, u, i)) continue;
      let p = Sn(c), [g, m] = p.getPropertyValue("scroll-snap-align").split(" ");
      typeof m > "u" && (m = g);
      let f = a === "x" ? m : g, v = u[s] - r[s] + e[d];
      switch (f) {
        case "none":
          break;
        case "start":
          n[a].start.push({ node: c, position: v });
          break;
        case "center":
          n[a].center.push({ node: c, position: v + u[l] / 2 });
          break;
        case "end":
          n[a].end.push({ node: c, position: v + u[l] });
          break;
      }
    }
  }
  return n;
}
function Xc(e) {
  let t = e.getBoundingClientRect(), r = gx(e), n = ag(e), o = { x: e.scrollWidth - e.offsetWidth, y: e.scrollHeight - e.offsetHeight };
  return { x: Zc([...n.x.start.map((a) => a.position - r.x.before), ...n.x.center.map((a) => a.position - t.width / 2), ...n.x.end.map((a) => a.position - t.width + r.x.after)].map(Jc(0, o.x))), y: Zc([...n.y.start.map((a) => a.position - r.y.before), ...n.y.center.map((a) => a.position - t.height / 2), ...n.y.end.map((a) => a.position - t.height + r.y.after)].map(Jc(0, o.y))) };
}
function fx(e, t, r) {
  let n = ag(e), o = [...n[t].start, ...n[t].center, ...n[t].end];
  for (let a of o) if (r(a.node)) return a.position;
}
var Zc = (e) => [...new Set(e)];
var Jc = (e, t) => (r) => Math.max(e, Math.min(t, r));
var mx = gt("carousel").parts("root", "itemGroup", "item", "control", "nextTrigger", "prevTrigger", "indicatorGroup", "indicator", "autoplayTrigger");
var jt = mx.build();
var bx = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.root) ?? `carousel:${e.id}`;
};
var yx = (e, t) => {
  var _a5, _b2;
  return ((_b2 = (_a5 = e.ids) == null ? void 0 : _a5.item) == null ? void 0 : _b2.call(_a5, t)) ?? `carousel:${e.id}:item:${t}`;
};
var wa = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.itemGroup) ?? `carousel:${e.id}:item-group`;
};
var vx = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.nextTrigger) ?? `carousel:${e.id}:next-trigger`;
};
var wx = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.prevTrigger) ?? `carousel:${e.id}:prev-trigger`;
};
var xx = (e) => {
  var _a5;
  return ((_a5 = e.ids) == null ? void 0 : _a5.indicatorGroup) ?? `carousel:${e.id}:indicator-group`;
};
var ig = (e, t) => {
  var _a5, _b2;
  return ((_b2 = (_a5 = e.ids) == null ? void 0 : _a5.indicator) == null ? void 0 : _b2.call(_a5, t)) ?? `carousel:${e.id}:indicator:${t}`;
};
var et = (e) => e.getById(wa(e));
var Qc = (e) => pp(et(e), "[data-part=item]");
var kx = (e, t) => e.getById(ig(e, t));
var ed = (e) => {
  let t = et(e);
  if (!t) return;
  let r = Io(t);
  t.setAttribute("tabindex", r.length > 0 ? "-1" : "0");
};
function Tx(e, t) {
  let { state: r, context: n, computed: o, send: a, scope: i, prop: s } = e, l = r.matches("autoplay"), d = r.matches("dragging"), c = o("canScrollNext"), u = o("canScrollPrev"), p = o("isHorizontal"), g = Array.from(n.get("pageSnapPoints")), m = n.get("page"), f = s("slidesPerPage"), v = s("padding"), w = s("translations");
  return { isPlaying: l, isDragging: d, page: m, pageSnapPoints: g, canScrollNext: c, canScrollPrev: u, getProgress() {
    return m / g.length;
  }, scrollToIndex(y, T) {
    a({ type: "INDEX.SET", index: y, instant: T });
  }, scrollTo(y, T) {
    a({ type: "PAGE.SET", index: y, instant: T });
  }, scrollNext(y) {
    a({ type: "PAGE.NEXT", instant: y });
  }, scrollPrev(y) {
    a({ type: "PAGE.PREV", instant: y });
  }, play() {
    a({ type: "AUTOPLAY.START" });
  }, pause() {
    a({ type: "AUTOPLAY.PAUSE" });
  }, isInView(y) {
    return Array.from(n.get("slidesInView")).includes(y);
  }, refresh() {
    a({ type: "SNAP.REFRESH" });
  }, getRootProps() {
    return t.element({ ...jt.root.attrs, id: bx(i), role: "region", "aria-roledescription": "carousel", "data-orientation": s("orientation"), dir: s("dir"), style: { "--slides-per-page": f, "--slide-spacing": s("spacing"), "--slide-item-size": "calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page))" } });
  }, getItemGroupProps() {
    return t.element({ ...jt.itemGroup.attrs, id: wa(i), "data-orientation": s("orientation"), "data-dragging": re(d), dir: s("dir"), "aria-live": l ? "off" : "polite", onFocus(y) {
      ap(y) && a({ type: "VIEWPORT.FOCUS" });
    }, onBlur(y) {
      At(y.currentTarget, y.relatedTarget) || a({ type: "VIEWPORT.BLUR" });
    }, onMouseDown(y) {
      if (y.defaultPrevented || !s("allowMouseDrag") || !ya(y)) return;
      let T = tt(y);
      Wt(T) && T !== y.currentTarget || (y.preventDefault(), a({ type: "DRAGGING.START" }));
    }, onWheel: Xf((y) => {
      let T = s("orientation") === "horizontal" ? "deltaX" : "deltaY";
      y[T] < 0 && !o("canScrollPrev") || y[T] > 0 && !o("canScrollNext") || a({ type: "USER.SCROLL" });
    }, 150), onTouchStart() {
      a({ type: "USER.SCROLL" });
    }, style: { display: "grid", gap: "var(--slide-spacing)", scrollSnapType: [p ? "x" : "y", s("snapType")].join(" "), gridAutoFlow: p ? "column" : "row", scrollbarWidth: "none", overscrollBehaviorX: "contain", [p ? "gridAutoColumns" : "gridAutoRows"]: "var(--slide-item-size)", [p ? "scrollPaddingInline" : "scrollPaddingBlock"]: v, [p ? "paddingInline" : "paddingBlock"]: v, [p ? "overflowX" : "overflowY"]: "auto" } });
  }, getItemProps(y) {
    let T = n.get("slidesInView").includes(y.index);
    return t.element({ ...jt.item.attrs, id: yx(i, y.index), dir: s("dir"), role: "group", "data-index": y.index, "data-inview": re(T), "aria-roledescription": "slide", "data-orientation": s("orientation"), "aria-label": w.item(y.index, s("slideCount")), "aria-hidden": uo(!T), style: { scrollSnapAlign: (() => {
      let b = y.snapAlign ?? "start", S = s("slidesPerMove"), _ = S === "auto" ? Math.floor(s("slidesPerPage")) : S;
      return (y.index + _) % _ === 0 ? b : void 0;
    })() } });
  }, getControlProps() {
    return t.element({ ...jt.control.attrs, "data-orientation": s("orientation") });
  }, getPrevTriggerProps() {
    return t.button({ ...jt.prevTrigger.attrs, id: wx(i), type: "button", disabled: !u, dir: s("dir"), "aria-label": w.prevTrigger, "data-orientation": s("orientation"), "aria-controls": wa(i), onClick(y) {
      y.defaultPrevented || a({ type: "PAGE.PREV", src: "trigger" });
    } });
  }, getNextTriggerProps() {
    return t.button({ ...jt.nextTrigger.attrs, dir: s("dir"), id: vx(i), type: "button", "aria-label": w.nextTrigger, "data-orientation": s("orientation"), "aria-controls": wa(i), disabled: !c, onClick(y) {
      y.defaultPrevented || a({ type: "PAGE.NEXT", src: "trigger" });
    } });
  }, getIndicatorGroupProps() {
    return t.element({ ...jt.indicatorGroup.attrs, dir: s("dir"), id: xx(i), "data-orientation": s("orientation"), onKeyDown(y) {
      if (y.defaultPrevented) return;
      let T = "indicator", b = { ArrowDown(I) {
        p || (a({ type: "PAGE.NEXT", src: T }), I.preventDefault());
      }, ArrowUp(I) {
        p || (a({ type: "PAGE.PREV", src: T }), I.preventDefault());
      }, ArrowRight(I) {
        p && (a({ type: "PAGE.NEXT", src: T }), I.preventDefault());
      }, ArrowLeft(I) {
        p && (a({ type: "PAGE.PREV", src: T }), I.preventDefault());
      }, Home(I) {
        a({ type: "PAGE.SET", index: 0, src: T }), I.preventDefault();
      }, End(I) {
        a({ type: "PAGE.SET", index: g.length - 1, src: T }), I.preventDefault();
      } }, S = hs(y, { dir: s("dir"), orientation: s("orientation") }), _ = b[S];
      _ == null ? void 0 : _(y);
    } });
  }, getIndicatorProps(y) {
    return t.button({ ...jt.indicator.attrs, dir: s("dir"), id: ig(i, y.index), type: "button", "data-orientation": s("orientation"), "data-index": y.index, "data-readonly": re(y.readOnly), "data-current": re(y.index === m), "aria-label": w.indicator(y.index), onClick(T) {
      T.defaultPrevented || y.readOnly || a({ type: "PAGE.SET", index: y.index, src: "indicator" });
    } });
  }, getAutoplayTriggerProps() {
    return t.button({ ...jt.autoplayTrigger.attrs, type: "button", "data-orientation": s("orientation"), "data-pressed": re(l), "aria-label": l ? w.autoplayStop : w.autoplayStart, onClick(y) {
      y.defaultPrevented || a({ type: l ? "AUTOPLAY.PAUSE" : "AUTOPLAY.START" });
    } });
  } };
}
var Sx = { props({ props: e }) {
  return Qu(e, ["slideCount"], "carousel"), { dir: "ltr", defaultPage: 0, orientation: "horizontal", snapType: "mandatory", loop: !!e.autoplay, slidesPerPage: 1, slidesPerMove: "auto", spacing: "0px", autoplay: false, allowMouseDrag: false, inViewThreshold: 0.6, ...e, translations: { nextTrigger: "Next slide", prevTrigger: "Previous slide", indicator: (t) => `Go to slide ${t + 1}`, item: (t, r) => `${t + 1} of ${r}`, autoplayStart: "Start slide rotation", autoplayStop: "Stop slide rotation", ...e.translations } };
}, refs() {
  return { timeoutRef: void 0 };
}, initialState({ prop: e }) {
  return e("autoplay") ? "autoplay" : "idle";
}, context({ prop: e, bindable: t, getContext: r }) {
  return { page: t(() => ({ defaultValue: e("defaultPage"), value: e("page"), onChange(n) {
    var _a5;
    let o = r().get("pageSnapPoints");
    (_a5 = e("onPageChange")) == null ? void 0 : _a5({ page: n, pageSnapPoint: o[n] });
  } })), pageSnapPoints: t(() => ({ defaultValue: Ex(e("slideCount"), e("slidesPerMove"), e("slidesPerPage")) })), slidesInView: t(() => ({ defaultValue: [] })) };
}, computed: { isRtl: ({ prop: e }) => e("dir") === "rtl", isHorizontal: ({ prop: e }) => e("orientation") === "horizontal", canScrollNext: ({ prop: e, context: t }) => e("loop") || t.get("page") < t.get("pageSnapPoints").length - 1, canScrollPrev: ({ prop: e, context: t }) => e("loop") || t.get("page") > 0, autoplayInterval: ({ prop: e }) => {
  let t = e("autoplay");
  return Ku(t) ? t.delay : 4e3;
} }, watch({ track: e, action: t, context: r, prop: n, send: o }) {
  e([() => n("slidesPerPage"), () => n("slidesPerMove")], () => {
    t(["setSnapPoints"]);
  }), e([() => r.get("page")], () => {
    t(["scrollToPage", "focusIndicatorEl"]);
  }), e([() => n("orientation")], () => {
    t(["setSnapPoints", "scrollToPage"]);
  }), e([() => n("slideCount")], () => {
    o({ type: "SNAP.REFRESH", src: "slide.count" });
  }), e([() => !!n("autoplay")], () => {
    o({ type: n("autoplay") ? "AUTOPLAY.START" : "AUTOPLAY.PAUSE", src: "autoplay.prop.change" });
  });
}, on: { "PAGE.NEXT": { target: "idle", actions: ["clearScrollEndTimer", "setNextPage"] }, "PAGE.PREV": { target: "idle", actions: ["clearScrollEndTimer", "setPrevPage"] }, "PAGE.SET": { target: "idle", actions: ["clearScrollEndTimer", "setPage"] }, "INDEX.SET": { target: "idle", actions: ["clearScrollEndTimer", "setMatchingPage"] }, "SNAP.REFRESH": { actions: ["setSnapPoints", "clampPage"] }, "PAGE.SCROLL": { actions: ["scrollToPage"] } }, effects: ["trackSlideMutation", "trackSlideIntersections", "trackSlideResize"], entry: ["setSnapPoints", "setPage"], exit: ["clearScrollEndTimer"], states: { idle: { on: { "DRAGGING.START": { target: "dragging", actions: ["invokeDragStart"] }, "AUTOPLAY.START": { target: "autoplay", actions: ["invokeAutoplayStart"] }, "USER.SCROLL": { target: "userScroll" }, "VIEWPORT.FOCUS": { target: "focus" } } }, focus: { effects: ["trackKeyboardScroll"], on: { "VIEWPORT.BLUR": { target: "idle" }, "PAGE.NEXT": { actions: ["clearScrollEndTimer", "setNextPage"] }, "PAGE.PREV": { actions: ["clearScrollEndTimer", "setPrevPage"] }, "PAGE.SET": { actions: ["clearScrollEndTimer", "setPage"] }, "INDEX.SET": { actions: ["clearScrollEndTimer", "setMatchingPage"] }, "USER.SCROLL": { target: "userScroll" } } }, dragging: { effects: ["trackPointerMove"], entry: ["disableScrollSnap"], on: { DRAGGING: { actions: ["scrollSlides", "invokeDragging"] }, "DRAGGING.END": { target: "idle", actions: ["endDragging", "invokeDraggingEnd"] } } }, userScroll: { effects: ["trackScroll"], on: { "SCROLL.END": [{ guard: "isFocused", target: "focus", actions: ["setClosestPage"] }, { target: "idle", actions: ["setClosestPage"] }] } }, autoplay: { effects: ["trackDocumentVisibility", "trackScroll", "autoUpdateSlide"], exit: ["invokeAutoplayEnd"], on: { "AUTOPLAY.TICK": { actions: ["setNextPage", "invokeAutoplay"] }, "DRAGGING.START": { target: "dragging", actions: ["invokeDragStart"] }, "AUTOPLAY.PAUSE": { target: "idle" } } } }, implementations: { guards: { isFocused: ({ scope: e }) => e.isActiveElement(et(e)) }, effects: { autoUpdateSlide({ computed: e, send: t }) {
  let r = setInterval(() => {
    t({ type: e("canScrollNext") ? "AUTOPLAY.TICK" : "AUTOPLAY.PAUSE", src: "autoplay.interval" });
  }, e("autoplayInterval"));
  return () => clearInterval(r);
}, trackSlideMutation({ scope: e, send: t }) {
  let r = et(e);
  if (!r) return;
  let n = e.getWin(), o = new n.MutationObserver(() => {
    t({ type: "SNAP.REFRESH", src: "slide.mutation" }), ed(e);
  });
  return ed(e), o.observe(r, { childList: true, subtree: true }), () => o.disconnect();
}, trackSlideResize({ scope: e, send: t }) {
  if (!et(e)) return;
  let r = e.getWin(), n = () => {
    t({ type: "SNAP.REFRESH", src: "slide.resize" });
  };
  xe(() => {
    n(), xe(() => {
      t({ type: "PAGE.SCROLL", instant: true });
    });
  });
  let o = new r.ResizeObserver(n);
  return Qc(e).forEach((a) => o.observe(a)), () => o.disconnect();
}, trackSlideIntersections({ scope: e, prop: t, context: r }) {
  let n = et(e), o = e.getWin(), a = new o.IntersectionObserver((i) => {
    let s = i.reduce((l, d) => {
      let c = d.target, u = Number(c.dataset.index ?? "-1");
      return u == null || Number.isNaN(u) || u === -1 ? l : d.isIntersecting ? Df(l, u) : Lf(l, u);
    }, r.get("slidesInView"));
    r.set("slidesInView", Mf(s));
  }, { root: n, threshold: t("inViewThreshold") });
  return Qc(e).forEach((i) => a.observe(i)), () => a.disconnect();
}, trackScroll({ send: e, refs: t, scope: r }) {
  let n = et(r);
  return n ? ke(n, "scroll", () => {
    clearTimeout(t.get("timeoutRef")), t.set("timeoutRef", void 0), t.set("timeoutRef", setTimeout(() => {
      e({ type: "SCROLL.END" });
    }, 150));
  }, { passive: true }) : void 0;
}, trackDocumentVisibility({ scope: e, send: t }) {
  let r = e.getDoc();
  return ke(r, "visibilitychange", () => {
    r.visibilityState !== "visible" && t({ type: "AUTOPLAY.PAUSE", src: "doc.hidden" });
  });
}, trackPointerMove({ scope: e, send: t }) {
  let r = e.getDoc();
  return pb(r, { onPointerMove({ event: n }) {
    t({ type: "DRAGGING", left: -n.movementX, top: -n.movementY });
  }, onPointerUp() {
    t({ type: "DRAGGING.END" });
  } });
}, trackKeyboardScroll({ scope: e, send: t, context: r }) {
  let n = e.getWin();
  return ke(n, "keydown", (o) => {
    switch (o.key) {
      case "ArrowRight":
        o.preventDefault(), t({ type: "PAGE.NEXT" });
        break;
      case "ArrowLeft":
        o.preventDefault(), t({ type: "PAGE.PREV" });
        break;
      case "Home":
        o.preventDefault(), t({ type: "PAGE.SET", index: 0 });
        break;
      case "End":
        o.preventDefault(), t({ type: "PAGE.SET", index: r.get("pageSnapPoints").length - 1 });
    }
  }, { capture: true });
} }, actions: { clearScrollEndTimer({ refs: e }) {
  e.get("timeoutRef") != null && (clearTimeout(e.get("timeoutRef")), e.set("timeoutRef", void 0));
}, scrollToPage({ context: e, event: t, scope: r, computed: n, flush: o }) {
  let a = t.instant ? "instant" : "smooth", i = hn(t.index ?? e.get("page"), 0, e.get("pageSnapPoints").length - 1), s = et(r);
  if (!s) return;
  let l = n("isHorizontal") ? "left" : "top";
  o(() => {
    s.scrollTo({ [l]: e.get("pageSnapPoints")[i], behavior: a });
  });
}, setClosestPage({ context: e, scope: t, computed: r }) {
  let n = et(t);
  if (!n) return;
  let o = r("isHorizontal") ? n.scrollLeft : n.scrollTop, a = e.get("pageSnapPoints").findIndex((i) => Math.abs(i - o) < 1);
  a !== -1 && e.set("page", a);
}, setNextPage({ context: e, prop: t, state: r }) {
  let n = r.matches("autoplay") || t("loop"), o = Xs(e.get("pageSnapPoints"), e.get("page"), { loop: n });
  e.set("page", o);
}, setPrevPage({ context: e, prop: t, state: r }) {
  let n = r.matches("autoplay") || t("loop"), o = qu(e.get("pageSnapPoints"), e.get("page"), { loop: n });
  e.set("page", o);
}, setMatchingPage({ context: e, event: t, computed: r, scope: n }) {
  let o = et(n);
  if (!o) return;
  let a = fx(o, r("isHorizontal") ? "x" : "y", (s) => s.dataset.index === t.index.toString());
  if (a == null) return;
  let i = e.get("pageSnapPoints").findIndex((s) => Math.abs(s - a) < 1);
  e.set("page", i);
}, setPage({ context: e, event: t }) {
  let r = t.index ?? e.get("page");
  e.set("page", r);
}, clampPage({ context: e }) {
  let t = hn(e.get("page"), 0, e.get("pageSnapPoints").length - 1);
  e.set("page", t);
}, setSnapPoints({ context: e, computed: t, scope: r }) {
  let n = et(r);
  if (!n) return;
  let o = Xc(n);
  e.set("pageSnapPoints", t("isHorizontal") ? o.x : o.y);
}, disableScrollSnap({ scope: e }) {
  let t = et(e);
  if (!t) return;
  let r = getComputedStyle(t);
  t.dataset.scrollSnapType = r.getPropertyValue("scroll-snap-type"), t.style.setProperty("scroll-snap-type", "none");
}, scrollSlides({ scope: e, event: t }) {
  var _a5;
  (_a5 = et(e)) == null ? void 0 : _a5.scrollBy({ left: t.left, top: t.top, behavior: "instant" });
}, endDragging({ scope: e, context: t, computed: r }) {
  let n = et(e);
  if (!n) return;
  let o = n.scrollLeft, a = n.scrollTop, i = Xc(n), s = i.x.reduce((d, c) => Math.abs(c - o) < Math.abs(d - o) ? c : d, i.x[0]), l = i.y.reduce((d, c) => Math.abs(c - a) < Math.abs(d - a) ? c : d, i.y[0]);
  xe(() => {
    n.scrollTo({ left: s, top: l, behavior: "smooth" });
    let d = r("isHorizontal") ? s : l;
    t.set("page", t.get("pageSnapPoints").indexOf(d));
    let c = n.dataset.scrollSnapType;
    c && (n.style.setProperty("scroll-snap-type", c), delete n.dataset.scrollSnapType);
  });
}, focusIndicatorEl({ context: e, event: t, scope: r }) {
  if (t.src !== "indicator") return;
  let n = kx(r, e.get("page"));
  n && xe(() => n.focus({ preventScroll: true }));
}, invokeDragStart({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onDragStatusChange")) == null ? void 0 : _a5({ type: "dragging.start", isDragging: true, page: e.get("page") });
}, invokeDragging({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onDragStatusChange")) == null ? void 0 : _a5({ type: "dragging", isDragging: true, page: e.get("page") });
}, invokeDraggingEnd({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onDragStatusChange")) == null ? void 0 : _a5({ type: "dragging.end", isDragging: false, page: e.get("page") });
}, invokeAutoplay({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onAutoplayStatusChange")) == null ? void 0 : _a5({ type: "autoplay", isPlaying: true, page: e.get("page") });
}, invokeAutoplayStart({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onAutoplayStatusChange")) == null ? void 0 : _a5({ type: "autoplay.start", isPlaying: true, page: e.get("page") });
}, invokeAutoplayEnd({ context: e, prop: t }) {
  var _a5;
  (_a5 = t("onAutoplayStatusChange")) == null ? void 0 : _a5({ type: "autoplay.stop", isPlaying: false, page: e.get("page") });
} } } };
function Ex(e, t, r) {
  if (e == null || r <= 0) return [];
  let n = [], o = t === "auto" ? Math.floor(r) : t;
  if (o <= 0) return [];
  for (let a = 0; a < e && !(a + r > e); a += o) n.push(a);
  return n;
}
var Cx = yt()(["dir", "getRootNode", "id", "ids", "loop", "page", "defaultPage", "onPageChange", "orientation", "slideCount", "slidesPerPage", "slidesPerMove", "spacing", "padding", "autoplay", "allowMouseDrag", "inViewThreshold", "translations", "snapType", "onDragStatusChange", "onAutoplayStatusChange"]);
var hI = Ct(Cx);
var Fx = yt()(["index", "readOnly"]);
var fI = Ct(Fx);
var Px = yt()(["index", "snapAlign"]);
var mI = Ct(Px);
var [sg, Qt] = Ve({ hookName: "useCarouselContext", providerName: "<CarouselProvider />" });
var _x = (e) => {
  let t = Qt(), r = U(() => t().getAutoplayTriggerProps(), e);
  return h(V.button, r);
};
var Ix = (e) => e.children(Qt());
var Ox = (e) => {
  let t = Qt(), r = U(() => t().getControlProps(), e);
  return h(V.div, r);
};
var Ax = (e) => {
  let [t, r] = Ie()(e, ["index", "readOnly"]), n = Qt(), o = U(() => n().getIndicatorProps(t), r);
  return h(V.button, o);
};
var Rx = (e) => {
  let t = Qt(), r = U(() => t().getIndicatorGroupProps(), e);
  return h(V.div, r);
};
var Nx = (e) => {
  let [t, r] = Ie()(e, ["index", "snapAlign"]), n = Qt(), o = U(() => n().getItemProps(t), r);
  return h(V.div, o);
};
var Dx = (e) => {
  let t = Qt(), r = U(() => t().getItemGroupProps(), e);
  return h(V.div, r);
};
var Lx = (e) => {
  let t = Qt(), r = U(() => t().getNextTriggerProps(), e);
  return h(V.button, r);
};
var Mx = (e) => {
  let t = Qt(), r = U(() => t().getPrevTriggerProps(), e);
  return h(V.button, r);
};
var Ux = (e) => {
  let t = Et(), r = En(), n = Zt(), o = te(() => ({ id: t, dir: r().dir, getRootNode: n().getRootNode, ...br(e) })), a = fr(Sx, o);
  return te(() => Tx(a, mr));
};
var Bx = (e) => {
  let [t, r] = Ie()(e, ["allowMouseDrag", "autoplay", "defaultPage", "id", "ids", "inViewThreshold", "loop", "onAutoplayStatusChange", "onDragStatusChange", "onPageChange", "orientation", "padding", "page", "slideCount", "slidesPerMove", "slidesPerPage", "snapType", "spacing", "translations"]), n = Ux(t), o = U(() => n().getRootProps(), r);
  return h(sg, { value: n, get children() {
    return h(V.div, o);
  } });
};
var $x = (e) => {
  let [{ value: t }, r] = Ie()(e, ["value"]), n = U(() => t().getRootProps(), r);
  return h(sg, { value: t, get children() {
    return h(V.div, n);
  } });
};
var Vr = {};
yr(Vr, { AutoplayTrigger: () => _x, Context: () => Ix, Control: () => Ox, Indicator: () => Ax, IndicatorGroup: () => Rx, Item: () => Nx, ItemGroup: () => Dx, NextTrigger: () => Lx, PrevTrigger: () => Mx, Root: () => Bx, RootProvider: () => $x });
var zx = async (e) => {
  let t;
  try {
    let r = typeof e == "string" ? e : e.url;
    t = await fetch(r, { method: typeof e == "string" ? "GET" : e.method, mode: "cors", headers: typeof e != "string" && ie(e.body) ? { "Content-Type": "application/json" } : void 0, body: typeof e != "string" && ie(e.body) ? JSON.stringify(e.body) : void 0 });
    let n = await t.json();
    if (!t.ok) throw "error" in n ? n.error : n;
    return { data: n, response: t };
  } catch (r) {
    return console.error(r), { error: r, response: t };
  }
};
var ie = (e) => e != null;
var St = (e) => e == null;
var Xe = (e) => e == null || e === "";
var Ne = (e) => e != null && e !== "";
var jx = (e) => {
  e.split("</noscript>").forEach((t) => {
    let [r, n] = t.split("<noscript>"), o = document.createRange().createContextualFragment(r ?? "");
    if (document.head.append(o), St(n)) return;
    let a = document.createElement("noscript"), i = document.createRange().createContextualFragment(n);
    a.append(i), document.head.append(a);
  });
};
var $r = (e) => (e == null ? void 0 : e.startsWith("data:image/svg")) || (e == null ? void 0 : e.endsWith(".svg"));
var bl = `/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */
:root,
.light {
  --blue-1: rgb(252 253 254);
  --blue-2: rgb(246 249 255);
  --blue-3: rgb(235 242 255);
  --blue-4: rgb(221 234 255);
  --blue-5: rgb(204 223 255);
  --blue-6: rgb(183 210 255);
  --blue-7: rgb(160 191 255);
  --blue-8: rgb(127 165 253);
  --blue-9: rgb(53 102 252);
  --blue-10: rgb(47 91 225);
  --blue-11: rgb(44 87 221);
  --blue-12: rgb(23 44 101);
  --orange-1: rgb(254 252 251);
  --orange-2: rgb(255 244 240);
  --orange-3: rgb(255 232 222);
  --orange-4: rgb(255 214 199);
  --orange-5: rgb(255 200 181);
  --orange-6: rgb(255 184 160);
  --orange-7: rgb(255 162 134);
  --orange-8: rgb(249 136 104);
  --orange-9: rgb(255 89 36);
  --orange-10: rgb(242 73 5);
  --orange-11: rgb(220 59 0);
  --orange-12: rgb(91 42 28);
  --purple-1: rgb(252 252 255);
  --purple-2: rgb(249 248 255);
  --purple-3: rgb(242 240 255);
  --purple-4: rgb(231 228 255);
  --purple-5: rgb(221 216 255);
  --purple-6: rgb(208 201 255);
  --purple-7: rgb(189 179 255);
  --purple-8: rgb(165 149 255);
  --purple-9: rgb(128 85 253);
  --purple-10: rgb(116 71 236);
  --purple-11: rgb(104 65 211);
  --purple-12: rgb(50 30 108);
  --red-1: rgb(255 252 252);
  --red-2: rgb(255 247 246);
  --red-3: rgb(255 235 233);
  --red-4: rgb(255 218 214);
  --red-5: rgb(255 203 198);
  --red-6: rgb(255 186 181);
  --red-7: rgb(252 165 160);
  --red-8: rgb(244 137 132);
  --red-9: rgb(248 59 69);
  --red-10: rgb(234 38 56);
  --red-11: rgb(216 6 42);
  --red-12: rgb(106 13 20);
  --green-1: rgb(251 254 252);
  --green-2: rgb(244 251 247);
  --green-3: rgb(229 246 236);
  --green-4: rgb(213 241 224);
  --green-5: rgb(195 232 210);
  --green-6: rgb(173 222 192);
  --green-7: rgb(142 206 169);
  --green-8: rgb(95 184 136);
  --green-9: rgb(43 154 102);
  --green-10: rgb(22 141 90);
  --green-11: rgb(0 129 79);
  --green-12: rgb(28 59 42);
  --gray-1: rgb(255 255 255);
  --gray-2: rgb(248 248 248);
  --gray-3: rgb(241 241 241);
  --gray-4: rgb(232 232 232);
  --gray-5: rgb(224 224 224);
  --gray-6: rgb(223 223 223);
  --gray-7: rgb(206 206 206);
  --gray-8: rgb(187 187 187);
  --gray-9: rgb(141 141 141);
  --gray-10: rgb(131 131 131);
  --gray-11: rgb(70 70 70);
  --gray-12: rgb(32 32 32);
}
.dark {
  --blue-1: rgb(7 13 26);
  --blue-2: rgb(15 22 39);
  --blue-3: rgb(18 35 78);
  --blue-4: rgb(22 44 106);
  --blue-5: rgb(29 55 126);
  --blue-6: rgb(37 66 143);
  --blue-7: rgb(46 78 164);
  --blue-8: rgb(54 91 193);
  --blue-9: rgb(53 102 252);
  --blue-10: rgb(42 87 236);
  --blue-11: rgb(141 180 255);
  --blue-12: rgb(209 226 255);
  --orange-1: rgb(18 11 9);
  --orange-2: rgb(31 20 17);
  --orange-3: rgb(55 24 16);
  --orange-4: rgb(78 22 6);
  --orange-5: rgb(94 30 11);
  --orange-6: rgb(110 44 24);
  --orange-7: rgb(135 60 38);
  --orange-8: rgb(173 77 49);
  --orange-9: rgb(255 89 36);
  --orange-10: rgb(241 75 15);
  --orange-11: rgb(255 151 118);
  --orange-12: rgb(255 215 202);
  --purple-1: rgb(13 10 27);
  --purple-2: rgb(23 19 42);
  --purple-3: rgb(38 27 79);
  --purple-4: rgb(50 30 108);
  --purple-5: rgb(59 37 124);
  --purple-6: rgb(70 49 139);
  --purple-7: rgb(84 62 162);
  --purple-8: rgb(104 76 199);
  --purple-9: rgb(128 85 253);
  --purple-10: rgb(116 70 238);
  --purple-11: rgb(180 166 255);
  --purple-12: rgb(224 220 255);
  --red-1: rgb(19 10 10);
  --red-2: rgb(32 18 17);
  --red-3: rgb(62 14 15);
  --red-4: rgb(85 5 12);
  --red-5: rgb(103 11 19);
  --red-6: rgb(121 27 31);
  --red-7: rgb(147 43 45);
  --red-8: rgb(190 58 60);
  --red-9: rgb(248 59 69);
  --red-10: rgb(233 41 57);
  --red-11: rgb(255 143 137);
  --red-12: rgb(255 208 203);
  --green-1: rgb(13 19 15);
  --green-2: rgb(19 27 22);
  --green-3: rgb(21 44 32);
  --green-4: rgb(22 59 39);
  --green-5: rgb(28 72 49);
  --green-6: rgb(37 87 61);
  --green-7: rgb(45 103 73);
  --green-8: rgb(53 123 87);
  --green-9: rgb(43 154 102);
  --green-10: rgb(22 141 90);
  --green-11: rgb(104 208 152);
  --green-12: rgb(179 240 204);
  --gray-1: rgb(13 13 13);
  --gray-2: rgb(23 23 23);
  --gray-3: rgb(34 34 34);
  --gray-4: rgb(42 42 42);
  --gray-5: rgb(49 49 49);
  --gray-6: rgb(58 58 58);
  --gray-7: rgb(72 72 72);
  --gray-8: rgb(96 96 96);
  --gray-9: rgb(110 110 110);
  --gray-10: rgb(123 123 123);
  --gray-11: rgb(180 180 180);
  --gray-12: rgb(238 238 238);
}
`;
function lg(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = lg(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Vx() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = lg(e)) && (n && (n += " "), n += t);
  return n;
}
var td = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
var oe = Vx;
var Hx = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return oe(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  let { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((d) => {
    let c = r == null ? void 0 : r[d], u = a == null ? void 0 : a[d];
    if (c === null) return null;
    let p = td(c) || td(u);
    return o[d][p];
  }), s = r && Object.entries(r).reduce((d, c) => {
    let [u, p] = c;
    return p === void 0 || (d[u] = p), d;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, c) => {
    let { class: u, className: p, ...g } = c;
    return Object.entries(g).every((m) => {
      let [f, v] = m;
      return Array.isArray(v) ? v.includes({ ...a, ...s }[f]) : { ...a, ...s }[f] === v;
    }) ? [...d, u, p] : d;
  }, []);
  return oe(e, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var cg = "Zendesk Web Widget Opened";
var dg = (e) => Number(e) >= 6;
var ht = { general: { isInputPrefillEnabled: false, isHideQueryParamsEnabled: true, isNewResultOnRefreshEnabled: true, rememberUser: { isEnabled: false, storage: "session" }, isBrandingEnabled: false, isTypingEmulationEnabled: true }, typingEmulation: { enabled: true, speed: 400, maxDelay: 3, delayBetweenBubbles: 0, isDisabledOnFirstMessage: true }, metadata: { description: "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.", favIconUrl: (e) => e + "/favicon.svg", imageUrl: (e) => e + "/site-preview.png" } };
var Dr = { invalidMessage: "Invalid message. Please, try again.", botClosed: "This bot is now closed", networkErrorTitle: "Network Error", networkErrorMessage: "Please check your internet connection and try again.", popupBlockedTitle: "Popup blocked", popupBlockedDescription: "The bot wants to open a new tab but it was blocked by your browser. It needs a manual approval.", popupBlockedButtonLabel: "Continue in new tab", fileUploadError: "An error occured while uploading the files", fileUploadSizeError: "[[file]] is larger than [[limit]]MB", whatsAppPictureChoiceSelectLabel: "Select" };
var Ee = { blue: { light: { 1: "#fcfdfe", 2: "#f6f9ff", 3: "#ebf2ff", 4: "#ddeaff", 5: "#ccdfff", 6: "#b7d2ff", 7: "#a0bfff", 8: "#7fa5fd", 9: "#3566fc", 10: "#2f5be1", 11: "#2c57dd", 12: "#172c65" }, dark: { 1: "#070d1a", 2: "#0f1627", 3: "#12234e", 4: "#162c6a", 5: "#1d377e", 6: "#25428f", 7: "#2e4ea4", 8: "#365bc1", 9: "#3566fc", 10: "#2a57ec", 11: "#8db4ff", 12: "#d1e2ff" } }, orange: { light: { 1: "#fefcfb", 2: "#fff4f0", 3: "#ffe8de", 4: "#ffd6c7", 5: "#ffc8b5", 6: "#ffb8a0", 7: "#ffa286", 8: "#f98868", 9: "#ff5924", 10: "#f24905", 11: "#dc3b00", 12: "#5b2a1c" }, dark: { 1: "#120b09", 2: "#1f1411", 3: "#371810", 4: "#4e1606", 5: "#5e1e0b", 6: "#6e2c18", 7: "#873c26", 8: "#ad4d31", 9: "#ff5924", 10: "#f14b0f", 11: "#ff9776", 12: "#ffd7ca" } }, purple: { light: { 1: "#fcfcff", 2: "#f9f8ff", 3: "#f2f0ff", 4: "#e7e4ff", 5: "#ddd8ff", 6: "#d0c9ff", 7: "#bdb3ff", 8: "#a595ff", 9: "#8055fd", 10: "#7447ec", 11: "#6841d3", 12: "#321e6c" }, dark: { 1: "#0d0a1b", 2: "#17132a", 3: "#261b4f", 4: "#321d6c", 5: "#3b257c", 6: "#46318b", 7: "#543ea2", 8: "#684cc7", 9: "#8055fd", 10: "#7446ee", 11: "#b4a6ff", 12: "#e0dcff" } }, red: { light: { 1: "#fffcfc", 2: "#fff7f6", 3: "#ffebe9", 4: "#ffdad6", 5: "#ffcbc6", 6: "#ffbab5", 7: "#fca5a0", 8: "#f48984", 9: "#f83b45", 10: "#ea2638", 11: "#d8062a", 12: "#6a0d14" }, dark: { 1: "#130a0a", 2: "#201211", 3: "#3e0e0f", 4: "#55050c", 5: "#670b13", 6: "#791b1f", 7: "#932b2d", 8: "#be3a3c", 9: "#f83b45", 10: "#e92939", 11: "#ff8f89", 12: "#ffd0cb" } }, gray: { light: { 1: "#ffffff", 2: "#F8F8F8", 3: "#f1f1f1", 4: "#e8e8e8", 5: "#e0e0e0", 6: "#dfdfdf", 7: "#cecece", 8: "#bbbbbb", 9: "#8d8d8d", 10: "#838383", 11: "#464646", 12: "#202020" }, dark: { 1: "#0D0D0D", 2: "#1D1D1D", 3: "#222222", 4: "#2a2a2a", 5: "#313131", 6: "#3a3a3a", 7: "#484848", 8: "#606060", 9: "#6e6e6e", 10: "#7b7b7b", 11: "#b4b4b4", 12: "#eeeeee" } }, green: { light: { 1: "#FBFEFC", 2: "#F4FBF7", 3: "#E5F6EC", 4: "#D5F1E0", 5: "#C3E8D2", 6: "#ADDEC0", 7: "#8ECEA9", 8: "#5FB888", 9: "#2B9A66", 10: "#168D5A", 11: "#00814F", 12: "#1C3B2A" }, dark: { 1: "#0D130F", 2: "#131B16", 3: "#152C20", 4: "#163B27", 5: "#1C4831", 6: "#25573D", 7: "#2D6749", 8: "#357B57", 9: "#2B9A66", 10: "#168D5A", 11: "#68D098", 12: "#B3F0CC" } } };
var Gx = "Google";
var yl = "Open Sans";
var La = "Color";
var Wx = { 6: "#FFFFFF", "6.1": Ee.gray.light[2] };
var qx = { 6: "#e0edff", "6.1": Ee.orange.light[9] };
var Yx = { 6: Ee.gray.light[3], "6.1": Ee.gray.light[9] };
var Kx = 4;
var ug = "absolute";
var Xx = "Top";
var In = "medium";
var lt = 1;
var pg = 0;
var Zx = "800px";
var Jx = "100%";
var si = "transparent";
var Qx = { 6: "#F7F8FF", "6.1": Ee.gray.light[1] };
var ek = Ee.gray.light[12];
var tk = { 6: 0, "6.1": 1 };
var rk = Ee.gray.light[6];
var nk = { 6: "#FF8E21", "6.1": Ee.orange.light[9] };
var ok = Ee.gray.light[1];
var ak = { 6: 0, "6.1": 1 };
var ik = Ee.orange.light[6];
var gg = { 6: "#0042DA", "6.1": Ee.orange.light[9] };
var sk = Ee.gray.light[1];
var lk = { 6: 0, "6.1": 1 };
var ck = Ee.orange.light[8];
var dk = "#FFFFFF";
var uk = Ee.gray.light[12];
var pk = "#9095A0";
var gk = { 6: 0, "6.1": 1 };
var hk = { 6: void 0, "6.1": Ee.gray.light[7] };
var fk = { 6: "md", "6.1": void 0 };
var mo = true;
var Cs = false;
var mk = "wrap";
var G = { general: { bgImage: "--typebot-container-bg-image", bgColor: "--typebot-container-bg-color", fontFamily: "--typebot-container-font-family", progressBar: { position: "--typebot-progress-bar-position", color: "--typebot-progress-bar-color", colorRgb: "--typebot-progress-bar-bg-rgb", height: "--typebot-progress-bar-height", top: "--typebot-progress-bar-top", bottom: "--typebot-progress-bar-bottom" } }, chat: { container: { maxWidth: "--typebot-chat-container-max-width", maxHeight: "--typebot-chat-container-max-height", bgColor: "--typebot-chat-container-bg-rgb", color: "--typebot-chat-container-color", borderRadius: "--typebot-chat-container-border-radius", borderWidth: "--typebot-chat-container-border-width", borderColor: "--typebot-chat-container-border-rgb", borderOpacity: "--typebot-chat-container-border-opacity", opacity: "--typebot-chat-container-opacity", blur: "--typebot-chat-container-blur", boxShadow: "--typebot-chat-container-box-shadow" }, hostBubbles: { bgColor: "--typebot-host-bubble-bg-rgb", color: "--typebot-host-bubble-color", borderRadius: "--typebot-host-bubble-border-radius", borderWidth: "--typebot-host-bubble-border-width", borderColor: "--typebot-host-bubble-border-rgb", borderOpacity: "--typebot-host-bubble-border-opacity", opacity: "--typebot-host-bubble-opacity", blur: "--typebot-host-bubble-blur", boxShadow: "--typebot-host-bubble-box-shadow" }, guestBubbles: { bgColor: "--typebot-guest-bubble-bg-rgb", color: "--typebot-guest-bubble-color", borderRadius: "--typebot-guest-bubble-border-radius", borderWidth: "--typebot-guest-bubble-border-width", borderColor: "--typebot-guest-bubble-border-rgb", borderOpacity: "--typebot-guest-bubble-border-opacity", opacity: "--typebot-guest-bubble-opacity", blur: "--typebot-guest-bubble-blur", boxShadow: "--typebot-guest-bubble-box-shadow" }, inputs: { bgColor: "--typebot-input-bg-rgb", color: "--typebot-input-color", placeholderColor: "--typebot-input-placeholder-color", borderRadius: "--typebot-input-border-radius", borderWidth: "--typebot-input-border-width", borderColor: "--typebot-input-border-rgb", borderOpacity: "--typebot-input-border-opacity", opacity: "--typebot-input-opacity", blur: "--typebot-input-blur", boxShadow: "--typebot-input-box-shadow" }, buttons: { bgRgb: "--typebot-button-bg-rgb", color: "--typebot-button-color", borderRadius: "--typebot-button-border-radius", borderWidth: "--typebot-button-border-width", borderColor: "--typebot-button-border-rgb", borderOpacity: "--typebot-button-border-opacity", opacity: "--typebot-button-opacity", blur: "--typebot-button-blur", boxShadow: "--typebot-button-box-shadow", flexDirection: "--typebot-buttons-input-flex-direction" }, checkbox: { bgRgb: "--typebot-checkbox-bg-rgb", alphaRatio: "--selectable-alpha-ratio" } } };
var bk = "#F7F8FF";
var yk = "#303235";
var vk = "#F7F8FF";
var wk = "#303235";
var xk = (e) => {
  let t = Tk(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
  return { getClassGroupId: (o) => {
    let a = o.split("-");
    return a[0] === "" && a.length !== 1 && a.shift(), hg(a, t) || kk(o);
  }, getConflictingClassGroupIds: (o, a) => {
    let i = r[o] || [];
    return a && n[o] ? [...i, ...n[o]] : i;
  } };
};
var hg = (e, t) => {
  var _a5;
  if (e.length === 0) return t.classGroupId;
  let r = e[0], n = t.nextPart.get(r), o = n ? hg(e.slice(1), n) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  let a = e.join("-");
  return (_a5 = t.validators.find(({ validator: i }) => i(a))) == null ? void 0 : _a5.classGroupId;
};
var rd = /^\[(.+)\]$/;
var kk = (e) => {
  if (rd.test(e)) {
    let t = rd.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
};
var Tk = (e) => {
  let { theme: t, classGroups: r } = e, n = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
  for (let o in r) Fs(r[o], n, o, t);
  return n;
};
var Fs = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      let a = o === "" ? t : nd(t, o);
      a.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Sk(o)) {
        Fs(o(n), t, r, n);
        return;
      }
      t.validators.push({ validator: o, classGroupId: r });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Fs(i, nd(t, a), r, n);
    });
  });
};
var nd = (e, t) => {
  let r = e;
  return t.split("-").forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), r = r.nextPart.get(n);
  }), r;
};
var Sk = (e) => e.isThemeGetter;
var Ek = (e) => {
  if (e < 1) return { get: () => {
  }, set: () => {
  } };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = (a, i) => {
    r.set(a, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return { get(a) {
    let i = r.get(a);
    if (i !== void 0) return i;
    if ((i = n.get(a)) !== void 0) return o(a, i), i;
  }, set(a, i) {
    r.has(a) ? r.set(a, i) : o(a, i);
  } };
};
var Ck = (e) => {
  let { prefix: t, experimentalParseClassName: r } = e, n = (o) => {
    let a = [], i = 0, s = 0, l = 0, d;
    for (let m = 0; m < o.length; m++) {
      let f = o[m];
      if (i === 0 && s === 0) {
        if (f === ":") {
          a.push(o.slice(l, m)), l = m + 1;
          continue;
        }
        if (f === "/") {
          d = m;
          continue;
        }
      }
      f === "[" ? i++ : f === "]" ? i-- : f === "(" ? s++ : f === ")" && s--;
    }
    let c = a.length === 0 ? o : o.substring(l), u = Fk(c), p = u !== c, g = d && d > l ? d - l : void 0;
    return { modifiers: a, hasImportantModifier: p, baseClassName: u, maybePostfixModifierPosition: g };
  };
  if (t) {
    let o = t + ":", a = n;
    n = (i) => i.startsWith(o) ? a(i.substring(o.length)) : { isExternal: true, modifiers: [], hasImportantModifier: false, baseClassName: i, maybePostfixModifierPosition: void 0 };
  }
  if (r) {
    let o = n;
    n = (a) => r({ className: a, parseClassName: o });
  }
  return n;
};
var Fk = (e) => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e;
var Pk = (e) => {
  let t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, true]));
  return (r) => {
    if (r.length <= 1) return r;
    let n = [], o = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (n.push(...o.sort(), a), o = []) : o.push(a);
    }), n.push(...o.sort()), n;
  };
};
var _k = (e) => ({ cache: Ek(e.cacheSize), parseClassName: Ck(e), sortModifiers: Pk(e), ...xk(e) });
var Ik = /\s+/;
var Ok = (e, t) => {
  let { parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o, sortModifiers: a } = t, i = [], s = e.trim().split(Ik), l = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    let c = s[d], { isExternal: u, modifiers: p, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: f } = r(c);
    if (u) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!f, w = n(v ? m.substring(0, f) : m);
    if (!w) {
      if (!v) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = n(m), !w) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = false;
    }
    let y = a(p).join(":"), T = g ? y + "!" : y, b = T + w;
    if (i.includes(b)) continue;
    i.push(b);
    let S = o(w, v);
    for (let _ = 0; _ < S.length; ++_) {
      let I = S[_];
      i.push(T + I);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Ak() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (r = fg(t)) && (n && (n += " "), n += r);
  return n;
}
var fg = (e) => {
  if (typeof e == "string") return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++) e[n] && (t = fg(e[n])) && (r && (r += " "), r += t);
  return r;
};
function od(e, ...t) {
  let r, n, o, a = i;
  function i(l) {
    let d = t.reduce((c, u) => u(c), e());
    return r = _k(d), n = r.cache.get, o = r.cache.set, a = s, s(l);
  }
  function s(l) {
    let d = n(l);
    if (d) return d;
    let c = Ok(l, r);
    return o(l, c), c;
  }
  return function() {
    return a(Ak.apply(null, arguments));
  };
}
var De = (e) => {
  let t = (r) => r[e] || [];
  return t.isThemeGetter = true, t;
};
var mg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var bg = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var Rk = /^\d+\/\d+$/;
var Nk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Dk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var Lk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var Mk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var Uk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var nn = (e) => Rk.test(e);
var se = (e) => !!e && !Number.isNaN(Number(e));
var ar = (e) => !!e && Number.isInteger(Number(e));
var zi = (e) => e.endsWith("%") && se(e.slice(0, -1));
var Vt = (e) => Nk.test(e);
var Bk = () => true;
var $k = (e) => Dk.test(e) && !Lk.test(e);
var yg = () => false;
var zk = (e) => Mk.test(e);
var jk = (e) => Uk.test(e);
var Vk = (e) => !W(e) && !q(e);
var Hk = (e) => On(e, xg, yg);
var W = (e) => mg.test(e);
var Fr = (e) => On(e, kg, $k);
var ji = (e) => On(e, Kk, se);
var ad = (e) => On(e, vg, yg);
var Gk = (e) => On(e, wg, jk);
var na = (e) => On(e, Tg, zk);
var q = (e) => bg.test(e);
var zn = (e) => An(e, kg);
var Wk = (e) => An(e, Xk);
var id = (e) => An(e, vg);
var qk = (e) => An(e, xg);
var Yk = (e) => An(e, wg);
var oa = (e) => An(e, Tg, true);
var On = (e, t, r) => {
  let n = mg.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : false;
};
var An = (e, t, r = false) => {
  let n = bg.exec(e);
  return n ? n[1] ? t(n[1]) : r : false;
};
var vg = (e) => e === "position" || e === "percentage";
var wg = (e) => e === "image" || e === "url";
var xg = (e) => e === "length" || e === "size" || e === "bg-size";
var kg = (e) => e === "length";
var Kk = (e) => e === "number";
var Xk = (e) => e === "family-name";
var Tg = (e) => e === "shadow";
var sd = () => {
  let e = De("color"), t = De("font"), r = De("text"), n = De("font-weight"), o = De("tracking"), a = De("leading"), i = De("breakpoint"), s = De("container"), l = De("spacing"), d = De("radius"), c = De("shadow"), u = De("inset-shadow"), p = De("text-shadow"), g = De("drop-shadow"), m = De("blur"), f = De("perspective"), v = De("aspect"), w = De("ease"), y = De("animate"), T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"], S = () => [...b(), q, W], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], x = () => [q, W, l], C = () => [nn, "full", "auto", ...x()], R = () => [ar, "none", "subgrid", q, W], D = () => ["auto", { span: ["full", ar, q, W] }, ar, q, W], N = () => [ar, "auto", q, W], K = () => ["auto", "min", "max", "fr", q, W], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], A = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], L = () => ["auto", ...x()], X = () => [nn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], O = () => [e, q, W], pe = () => [...b(), id, ad, { position: [q, W] }], Ae = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }], Te = () => ["auto", "cover", "contain", qk, Hk, { size: [q, W] }], Wr = () => [zi, zn, Fr], ge = () => ["", "none", "full", d, q, W], He = () => ["", se, zn, Fr], we = () => ["solid", "dashed", "dotted", "double"], tr = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Pe = () => [se, zi, id, ad], Rn = () => ["", "none", m, q, W], rr = () => ["none", se, q, W], xr = () => ["none", se, q, W], qr = () => [se, q, W], wt = () => [nn, "full", ...x()];
  return { cacheSize: 500, theme: { animate: ["spin", "ping", "pulse", "bounce"], aspect: ["video"], blur: [Vt], breakpoint: [Vt], color: [Bk], container: [Vt], "drop-shadow": [Vt], ease: ["in", "out", "in-out"], font: [Vk], "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "inset-shadow": [Vt], leading: ["none", "tight", "snug", "normal", "relaxed", "loose"], perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"], radius: [Vt], shadow: [Vt], spacing: ["px", se], text: [Vt], "text-shadow": [Vt], tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"] }, classGroups: { aspect: [{ aspect: ["auto", "square", nn, W, q, v] }], container: ["container"], columns: [{ columns: [se, W, q, s] }], "break-after": [{ "break-after": T() }], "break-before": [{ "break-before": T() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], sr: ["sr-only", "not-sr-only"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: S() }], overflow: [{ overflow: _() }], "overflow-x": [{ "overflow-x": _() }], "overflow-y": [{ "overflow-y": _() }], overscroll: [{ overscroll: I() }], "overscroll-x": [{ "overscroll-x": I() }], "overscroll-y": [{ "overscroll-y": I() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: C() }], "inset-x": [{ "inset-x": C() }], "inset-y": [{ "inset-y": C() }], start: [{ start: C() }], end: [{ end: C() }], top: [{ top: C() }], right: [{ right: C() }], bottom: [{ bottom: C() }], left: [{ left: C() }], visibility: ["visible", "invisible", "collapse"], z: [{ z: [ar, "auto", q, W] }], basis: [{ basis: [nn, "full", "auto", s, ...x()] }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }], flex: [{ flex: [se, nn, "auto", "initial", "none", W] }], grow: [{ grow: ["", se, q, W] }], shrink: [{ shrink: ["", se, q, W] }], order: [{ order: [ar, "first", "last", "none", q, W] }], "grid-cols": [{ "grid-cols": R() }], "col-start-end": [{ col: D() }], "col-start": [{ "col-start": N() }], "col-end": [{ "col-end": N() }], "grid-rows": [{ "grid-rows": R() }], "row-start-end": [{ row: D() }], "row-start": [{ "row-start": N() }], "row-end": [{ "row-end": N() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": K() }], "auto-rows": [{ "auto-rows": K() }], gap: [{ gap: x() }], "gap-x": [{ "gap-x": x() }], "gap-y": [{ "gap-y": x() }], "justify-content": [{ justify: [...F(), "normal"] }], "justify-items": [{ "justify-items": [...A(), "normal"] }], "justify-self": [{ "justify-self": ["auto", ...A()] }], "align-content": [{ content: ["normal", ...F()] }], "align-items": [{ items: [...A(), { baseline: ["", "last"] }] }], "align-self": [{ self: ["auto", ...A(), { baseline: ["", "last"] }] }], "place-content": [{ "place-content": F() }], "place-items": [{ "place-items": [...A(), "baseline"] }], "place-self": [{ "place-self": ["auto", ...A()] }], p: [{ p: x() }], px: [{ px: x() }], py: [{ py: x() }], ps: [{ ps: x() }], pe: [{ pe: x() }], pt: [{ pt: x() }], pr: [{ pr: x() }], pb: [{ pb: x() }], pl: [{ pl: x() }], m: [{ m: L() }], mx: [{ mx: L() }], my: [{ my: L() }], ms: [{ ms: L() }], me: [{ me: L() }], mt: [{ mt: L() }], mr: [{ mr: L() }], mb: [{ mb: L() }], ml: [{ ml: L() }], "space-x": [{ "space-x": x() }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": x() }], "space-y-reverse": ["space-y-reverse"], size: [{ size: X() }], w: [{ w: [s, "screen", ...X()] }], "min-w": [{ "min-w": [s, "screen", "none", ...X()] }], "max-w": [{ "max-w": [s, "screen", "none", "prose", { screen: [i] }, ...X()] }], h: [{ h: ["screen", "lh", ...X()] }], "min-h": [{ "min-h": ["screen", "lh", "none", ...X()] }], "max-h": [{ "max-h": ["screen", "lh", ...X()] }], "font-size": [{ text: ["base", r, zn, Fr] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: [n, q, ji] }], "font-stretch": [{ "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", zi, W] }], "font-family": [{ font: [Wk, W, t] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: [o, q, W] }], "line-clamp": [{ "line-clamp": [se, "none", q, ji] }], leading: [{ leading: [a, ...x()] }], "list-image": [{ "list-image": ["none", q, W] }], "list-style-position": [{ list: ["inside", "outside"] }], "list-style-type": [{ list: ["disc", "decimal", "none", q, W] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "placeholder-color": [{ placeholder: O() }], "text-color": [{ text: O() }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...we(), "wavy"] }], "text-decoration-thickness": [{ decoration: [se, "from-font", "auto", q, Fr] }], "text-decoration-color": [{ decoration: O() }], "underline-offset": [{ "underline-offset": [se, "auto", q, W] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: x() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, W] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], wrap: [{ wrap: ["break-word", "anywhere", "normal"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", q, W] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: pe() }], "bg-repeat": [{ bg: Ae() }], "bg-size": [{ bg: Te() }], "bg-image": [{ bg: ["none", { linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, ar, q, W], radial: ["", q, W], conic: [ar, q, W] }, Yk, Gk] }], "bg-color": [{ bg: O() }], "gradient-from-pos": [{ from: Wr() }], "gradient-via-pos": [{ via: Wr() }], "gradient-to-pos": [{ to: Wr() }], "gradient-from": [{ from: O() }], "gradient-via": [{ via: O() }], "gradient-to": [{ to: O() }], rounded: [{ rounded: ge() }], "rounded-s": [{ "rounded-s": ge() }], "rounded-e": [{ "rounded-e": ge() }], "rounded-t": [{ "rounded-t": ge() }], "rounded-r": [{ "rounded-r": ge() }], "rounded-b": [{ "rounded-b": ge() }], "rounded-l": [{ "rounded-l": ge() }], "rounded-ss": [{ "rounded-ss": ge() }], "rounded-se": [{ "rounded-se": ge() }], "rounded-ee": [{ "rounded-ee": ge() }], "rounded-es": [{ "rounded-es": ge() }], "rounded-tl": [{ "rounded-tl": ge() }], "rounded-tr": [{ "rounded-tr": ge() }], "rounded-br": [{ "rounded-br": ge() }], "rounded-bl": [{ "rounded-bl": ge() }], "border-w": [{ border: He() }], "border-w-x": [{ "border-x": He() }], "border-w-y": [{ "border-y": He() }], "border-w-s": [{ "border-s": He() }], "border-w-e": [{ "border-e": He() }], "border-w-t": [{ "border-t": He() }], "border-w-r": [{ "border-r": He() }], "border-w-b": [{ "border-b": He() }], "border-w-l": [{ "border-l": He() }], "divide-x": [{ "divide-x": He() }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": He() }], "divide-y-reverse": ["divide-y-reverse"], "border-style": [{ border: [...we(), "hidden", "none"] }], "divide-style": [{ divide: [...we(), "hidden", "none"] }], "border-color": [{ border: O() }], "border-color-x": [{ "border-x": O() }], "border-color-y": [{ "border-y": O() }], "border-color-s": [{ "border-s": O() }], "border-color-e": [{ "border-e": O() }], "border-color-t": [{ "border-t": O() }], "border-color-r": [{ "border-r": O() }], "border-color-b": [{ "border-b": O() }], "border-color-l": [{ "border-l": O() }], "divide-color": [{ divide: O() }], "outline-style": [{ outline: [...we(), "none", "hidden"] }], "outline-offset": [{ "outline-offset": [se, q, W] }], "outline-w": [{ outline: ["", se, zn, Fr] }], "outline-color": [{ outline: O() }], shadow: [{ shadow: ["", "none", c, oa, na] }], "shadow-color": [{ shadow: O() }], "inset-shadow": [{ "inset-shadow": ["none", u, oa, na] }], "inset-shadow-color": [{ "inset-shadow": O() }], "ring-w": [{ ring: He() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: O() }], "ring-offset-w": [{ "ring-offset": [se, Fr] }], "ring-offset-color": [{ "ring-offset": O() }], "inset-ring-w": [{ "inset-ring": He() }], "inset-ring-color": [{ "inset-ring": O() }], "text-shadow": [{ "text-shadow": ["none", p, oa, na] }], "text-shadow-color": [{ "text-shadow": O() }], opacity: [{ opacity: [se, q, W] }], "mix-blend": [{ "mix-blend": [...tr(), "plus-darker", "plus-lighter"] }], "bg-blend": [{ "bg-blend": tr() }], "mask-clip": [{ "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] }, "mask-no-clip"], "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }], "mask-image-linear-pos": [{ "mask-linear": [se] }], "mask-image-linear-from-pos": [{ "mask-linear-from": Pe() }], "mask-image-linear-to-pos": [{ "mask-linear-to": Pe() }], "mask-image-linear-from-color": [{ "mask-linear-from": O() }], "mask-image-linear-to-color": [{ "mask-linear-to": O() }], "mask-image-t-from-pos": [{ "mask-t-from": Pe() }], "mask-image-t-to-pos": [{ "mask-t-to": Pe() }], "mask-image-t-from-color": [{ "mask-t-from": O() }], "mask-image-t-to-color": [{ "mask-t-to": O() }], "mask-image-r-from-pos": [{ "mask-r-from": Pe() }], "mask-image-r-to-pos": [{ "mask-r-to": Pe() }], "mask-image-r-from-color": [{ "mask-r-from": O() }], "mask-image-r-to-color": [{ "mask-r-to": O() }], "mask-image-b-from-pos": [{ "mask-b-from": Pe() }], "mask-image-b-to-pos": [{ "mask-b-to": Pe() }], "mask-image-b-from-color": [{ "mask-b-from": O() }], "mask-image-b-to-color": [{ "mask-b-to": O() }], "mask-image-l-from-pos": [{ "mask-l-from": Pe() }], "mask-image-l-to-pos": [{ "mask-l-to": Pe() }], "mask-image-l-from-color": [{ "mask-l-from": O() }], "mask-image-l-to-color": [{ "mask-l-to": O() }], "mask-image-x-from-pos": [{ "mask-x-from": Pe() }], "mask-image-x-to-pos": [{ "mask-x-to": Pe() }], "mask-image-x-from-color": [{ "mask-x-from": O() }], "mask-image-x-to-color": [{ "mask-x-to": O() }], "mask-image-y-from-pos": [{ "mask-y-from": Pe() }], "mask-image-y-to-pos": [{ "mask-y-to": Pe() }], "mask-image-y-from-color": [{ "mask-y-from": O() }], "mask-image-y-to-color": [{ "mask-y-to": O() }], "mask-image-radial": [{ "mask-radial": [q, W] }], "mask-image-radial-from-pos": [{ "mask-radial-from": Pe() }], "mask-image-radial-to-pos": [{ "mask-radial-to": Pe() }], "mask-image-radial-from-color": [{ "mask-radial-from": O() }], "mask-image-radial-to-color": [{ "mask-radial-to": O() }], "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] }], "mask-image-radial-pos": [{ "mask-radial-at": b() }], "mask-image-conic-pos": [{ "mask-conic": [se] }], "mask-image-conic-from-pos": [{ "mask-conic-from": Pe() }], "mask-image-conic-to-pos": [{ "mask-conic-to": Pe() }], "mask-image-conic-from-color": [{ "mask-conic-from": O() }], "mask-image-conic-to-color": [{ "mask-conic-to": O() }], "mask-mode": [{ mask: ["alpha", "luminance", "match"] }], "mask-origin": [{ "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] }], "mask-position": [{ mask: pe() }], "mask-repeat": [{ mask: Ae() }], "mask-size": [{ mask: Te() }], "mask-type": [{ "mask-type": ["alpha", "luminance"] }], "mask-image": [{ mask: ["none", q, W] }], filter: [{ filter: ["", "none", q, W] }], blur: [{ blur: Rn() }], brightness: [{ brightness: [se, q, W] }], contrast: [{ contrast: [se, q, W] }], "drop-shadow": [{ "drop-shadow": ["", "none", g, oa, na] }], "drop-shadow-color": [{ "drop-shadow": O() }], grayscale: [{ grayscale: ["", se, q, W] }], "hue-rotate": [{ "hue-rotate": [se, q, W] }], invert: [{ invert: ["", se, q, W] }], saturate: [{ saturate: [se, q, W] }], sepia: [{ sepia: ["", se, q, W] }], "backdrop-filter": [{ "backdrop-filter": ["", "none", q, W] }], "backdrop-blur": [{ "backdrop-blur": Rn() }], "backdrop-brightness": [{ "backdrop-brightness": [se, q, W] }], "backdrop-contrast": [{ "backdrop-contrast": [se, q, W] }], "backdrop-grayscale": [{ "backdrop-grayscale": ["", se, q, W] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [se, q, W] }], "backdrop-invert": [{ "backdrop-invert": ["", se, q, W] }], "backdrop-opacity": [{ "backdrop-opacity": [se, q, W] }], "backdrop-saturate": [{ "backdrop-saturate": [se, q, W] }], "backdrop-sepia": [{ "backdrop-sepia": ["", se, q, W] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": x() }], "border-spacing-x": [{ "border-spacing-x": x() }], "border-spacing-y": [{ "border-spacing-y": x() }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, W] }], "transition-behavior": [{ transition: ["normal", "discrete"] }], duration: [{ duration: [se, "initial", q, W] }], ease: [{ ease: ["linear", "initial", w, q, W] }], delay: [{ delay: [se, q, W] }], animate: [{ animate: ["none", y, q, W] }], backface: [{ backface: ["hidden", "visible"] }], perspective: [{ perspective: [f, q, W] }], "perspective-origin": [{ "perspective-origin": S() }], rotate: [{ rotate: rr() }], "rotate-x": [{ "rotate-x": rr() }], "rotate-y": [{ "rotate-y": rr() }], "rotate-z": [{ "rotate-z": rr() }], scale: [{ scale: xr() }], "scale-x": [{ "scale-x": xr() }], "scale-y": [{ "scale-y": xr() }], "scale-z": [{ "scale-z": xr() }], "scale-3d": ["scale-3d"], skew: [{ skew: qr() }], "skew-x": [{ "skew-x": qr() }], "skew-y": [{ "skew-y": qr() }], transform: [{ transform: [q, W, "", "none", "gpu", "cpu"] }], "transform-origin": [{ origin: S() }], "transform-style": [{ transform: ["3d", "flat"] }], translate: [{ translate: wt() }], "translate-x": [{ "translate-x": wt() }], "translate-y": [{ "translate-y": wt() }], "translate-z": [{ "translate-z": wt() }], "translate-none": ["translate-none"], accent: [{ accent: O() }], appearance: [{ appearance: ["none", "auto"] }], "caret-color": [{ caret: O() }], "color-scheme": [{ scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, W] }], "field-sizing": [{ "field-sizing": ["fixed", "content"] }], "pointer-events": [{ "pointer-events": ["auto", "none"] }], resize: [{ resize: ["none", "", "y", "x"] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": x() }], "scroll-mx": [{ "scroll-mx": x() }], "scroll-my": [{ "scroll-my": x() }], "scroll-ms": [{ "scroll-ms": x() }], "scroll-me": [{ "scroll-me": x() }], "scroll-mt": [{ "scroll-mt": x() }], "scroll-mr": [{ "scroll-mr": x() }], "scroll-mb": [{ "scroll-mb": x() }], "scroll-ml": [{ "scroll-ml": x() }], "scroll-p": [{ "scroll-p": x() }], "scroll-px": [{ "scroll-px": x() }], "scroll-py": [{ "scroll-py": x() }], "scroll-ps": [{ "scroll-ps": x() }], "scroll-pe": [{ "scroll-pe": x() }], "scroll-pt": [{ "scroll-pt": x() }], "scroll-pr": [{ "scroll-pr": x() }], "scroll-pb": [{ "scroll-pb": x() }], "scroll-pl": [{ "scroll-pl": x() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", q, W] }], fill: [{ fill: ["none", ...O()] }], "stroke-w": [{ stroke: [se, zn, Fr, ji] }], stroke: [{ stroke: ["none", ...O()] }], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], translate: ["translate-x", "translate-y", "translate-none"], "translate-none": ["translate", "translate-x", "translate-y", "translate-z"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] }, orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"] };
};
var Zk = (e, { cacheSize: t, prefix: r, experimentalParseClassName: n, extend: o = {}, override: a = {} }) => (ro(e, "cacheSize", t), ro(e, "prefix", r), ro(e, "experimentalParseClassName", n), aa(e.theme, a.theme), aa(e.classGroups, a.classGroups), aa(e.conflictingClassGroups, a.conflictingClassGroups), aa(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ro(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), ia(e.theme, o.theme), ia(e.classGroups, o.classGroups), ia(e.conflictingClassGroups, o.conflictingClassGroups), ia(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Sg(e, o, "orderSensitiveModifiers"), e);
var ro = (e, t, r) => {
  r !== void 0 && (e[t] = r);
};
var aa = (e, t) => {
  if (t) for (let r in t) ro(e, r, t[r]);
};
var ia = (e, t) => {
  if (t) for (let r in t) Sg(e, t, r);
};
var Sg = (e, t, r) => {
  let n = t[r];
  n !== void 0 && (e[r] = e[r] ? e[r].concat(n) : n);
};
var Jk = (e, ...t) => typeof e == "function" ? od(sd, e, ...t) : od(() => Zk(sd(), e), ...t);
var Qk = Jk({ extend: { classGroups: { "border-w": ["border-host-bubble", "border-button", "border-input"], "border-color": ["border-host-bubble-border", "border-button-border", "border-input-border"] } } });
function bo(...e) {
  return Qk(oe(e));
}
var Ps = class extends Error {
  constructor(e, t, r) {
    let n = e.status || e.status === 0 ? e.status : "", o = e.statusText || "", a = `${n} ${o}`.trim(), i = a ? `status code ${a}` : "an unknown error";
    super(`Request failed with ${i}`), Object.defineProperty(this, "response", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "HTTPError", this.response = e, this.request = t, this.options = r;
  }
};
var Eg = class extends Error {
  constructor(e) {
    super("Request timed out"), Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.name = "TimeoutError", this.request = e;
  }
};
var xa = (e) => e !== null && typeof e == "object";
var sa = (...e) => {
  for (let t of e) if ((!xa(t) || Array.isArray(t)) && t !== void 0) throw new TypeError("The `options` argument must be an object");
  return vl({}, ...e);
};
var Cg = (e = {}, t = {}) => {
  let r = new globalThis.Headers(e), n = t instanceof globalThis.Headers, o = new globalThis.Headers(t);
  for (let [a, i] of o.entries()) n && i === "undefined" || i === void 0 ? r.delete(a) : r.set(a, i);
  return r;
};
var vl = (...e) => {
  let t = {}, r = {};
  for (let n of e) if (Array.isArray(n)) Array.isArray(t) || (t = []), t = [...t, ...n];
  else if (xa(n)) {
    for (let [o, a] of Object.entries(n)) xa(a) && o in t && (a = vl(t[o], a)), t = { ...t, [o]: a };
    xa(n.headers) && (r = Cg(r, n.headers), t.headers = r);
  }
  return t;
};
var eT = (() => {
  let e = false, t = false, r = typeof globalThis.ReadableStream == "function", n = typeof globalThis.Request == "function";
  return r && n && (t = new globalThis.Request("https://empty.invalid", { body: new globalThis.ReadableStream(), method: "POST", get duplex() {
    return e = true, "half";
  } }).headers.has("Content-Type")), e && !t;
})();
var tT = typeof globalThis.AbortController == "function";
var rT = typeof globalThis.ReadableStream == "function";
var nT = typeof globalThis.FormData == "function";
var Fg = ["get", "post", "put", "patch", "head", "delete"];
var oT = () => {
};
oT();
var aT = { json: "application/json", text: "text/*", formData: "multipart/form-data", arrayBuffer: "*/*", blob: "*/*" };
var Vi = 2147483647;
var Pg = Symbol("stop");
var iT = { json: true, parseJson: true, searchParams: true, prefixUrl: true, retry: true, timeout: true, hooks: true, throwHttpErrors: true, onDownloadProgress: true, fetch: true };
var sT = { method: true, headers: true, body: true, mode: true, credentials: true, cache: true, redirect: true, referrer: true, referrerPolicy: true, integrity: true, keepalive: true, signal: true, window: true, dispatcher: true, duplex: true, priority: true };
var lT = (e) => Fg.includes(e) ? e.toUpperCase() : e;
var cT = ["get", "put", "head", "delete", "options", "trace"];
var dT = [408, 413, 429, 500, 502, 503, 504];
var _g = [413, 429, 503];
var ld = { limit: 2, methods: cT, statusCodes: dT, afterStatusCodes: _g, maxRetryAfter: Number.POSITIVE_INFINITY, backoffLimit: Number.POSITIVE_INFINITY, delay: (e) => 0.3 * 2 ** (e - 1) * 1e3 };
var uT = (e = {}) => {
  if (typeof e == "number") return { ...ld, limit: e };
  if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
  if (e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
  return { ...ld, ...e, afterStatusCodes: _g };
};
async function pT(e, t, r, n) {
  return new Promise((o, a) => {
    let i = setTimeout(() => {
      r && r.abort(), a(new Eg(e));
    }, n.timeout);
    n.fetch(e, t).then(o).catch(a).then(() => {
      clearTimeout(i);
    });
  });
}
async function gT(e, { signal: t }) {
  return new Promise((r, n) => {
    t && (t.throwIfAborted(), t.addEventListener("abort", o, { once: true }));
    function o() {
      clearTimeout(a), n(t.reason);
    }
    let a = setTimeout(() => {
      t == null ? void 0 : t.removeEventListener("abort", o), r();
    }, e);
  });
}
var hT = (e, t) => {
  let r = {};
  for (let n in t) !(n in sT) && !(n in iT) && !(n in e) && (r[n] = t[n]);
  return r;
};
var cd = class Ig {
  static create(t, r) {
    let n = new Ig(t, r), o = async () => {
      if (typeof n._options.timeout == "number" && n._options.timeout > Vi) throw new RangeError(`The \`timeout\` option cannot be greater than ${Vi}`);
      await Promise.resolve();
      let i = await n._fetch();
      for (let s of n._options.hooks.afterResponse) {
        let l = await s(n.request, n._options, n._decorateResponse(i.clone()));
        l instanceof globalThis.Response && (i = l);
      }
      if (n._decorateResponse(i), !i.ok && n._options.throwHttpErrors) {
        let s = new Ps(i, n.request, n._options);
        for (let l of n._options.hooks.beforeError) s = await l(s);
        throw s;
      }
      if (n._options.onDownloadProgress) {
        if (typeof n._options.onDownloadProgress != "function") throw new TypeError("The `onDownloadProgress` option must be a function");
        if (!rT) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        return n._stream(i.clone(), n._options.onDownloadProgress);
      }
      return i;
    }, a = n._options.retry.methods.includes(n.request.method.toLowerCase()) ? n._retry(o) : o();
    for (let [i, s] of Object.entries(aT)) a[i] = async () => {
      n.request.headers.set("accept", n.request.headers.get("accept") || s);
      let l = (await a).clone();
      if (i === "json") {
        if (l.status === 204 || (await l.clone().arrayBuffer()).byteLength === 0) return "";
        if (r.parseJson) return r.parseJson(await l.text());
      }
      return l[i]();
    };
    return a;
  }
  constructor(t, r = {}) {
    Object.defineProperty(this, "request", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "abortController", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_retryCount", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_input", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_options", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._input = t;
    let n = this._input instanceof Request && "credentials" in Request.prototype ? this._input.credentials : void 0;
    if (this._options = { ...n && { credentials: n }, ...r, headers: Cg(this._input.headers, r.headers), hooks: vl({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, r.hooks), method: lT(r.method ?? this._input.method), prefixUrl: String(r.prefixUrl || ""), retry: uT(r.retry), throwHttpErrors: r.throwHttpErrors !== false, timeout: r.timeout ?? 1e4, fetch: r.fetch ?? globalThis.fetch.bind(globalThis) }, typeof this._input != "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request)) throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input;
    }
    if (tT) {
      if (this.abortController = new globalThis.AbortController(), this._options.signal) {
        let o = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(o.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if (eT && (this._options.duplex = "half"), this.request = new globalThis.Request(this._input, this._options), this._options.searchParams) {
      let o = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()), a = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, o);
      (nT && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"]) && this.request.headers.delete("content-type"), this.request = new globalThis.Request(new globalThis.Request(a, { ...this.request }), this._options);
    }
    this._options.json !== void 0 && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json"), this.request = new globalThis.Request(this.request, { body: this._options.body }));
  }
  _calculateRetryDelay(t) {
    if (this._retryCount++, this._retryCount <= this._options.retry.limit && !(t instanceof Eg)) {
      if (t instanceof Ps) {
        if (!this._options.retry.statusCodes.includes(t.response.status)) return 0;
        let n = t.response.headers.get("Retry-After");
        if (n && this._options.retry.afterStatusCodes.includes(t.response.status)) {
          let o = Number(n);
          return Number.isNaN(o) ? o = Date.parse(n) - Date.now() : o *= 1e3, this._options.retry.maxRetryAfter !== void 0 && o > this._options.retry.maxRetryAfter ? 0 : o;
        }
        if (t.response.status === 413) return 0;
      }
      let r = this._options.retry.delay(this._retryCount);
      return Math.min(this._options.retry.backoffLimit, r);
    }
    return 0;
  }
  _decorateResponse(t) {
    return this._options.parseJson && (t.json = async () => this._options.parseJson(await t.text())), t;
  }
  async _retry(t) {
    try {
      return await t();
    } catch (r) {
      let n = Math.min(this._calculateRetryDelay(r), Vi);
      if (n !== 0 && this._retryCount > 0) {
        await gT(n, { signal: this._options.signal });
        for (let o of this._options.hooks.beforeRetry) if (await o({ request: this.request, options: this._options, error: r, retryCount: this._retryCount }) === Pg) return;
        return this._retry(t);
      }
      throw r;
    }
  }
  async _fetch() {
    for (let r of this._options.hooks.beforeRequest) {
      let n = await r(this.request, this._options);
      if (n instanceof Request) {
        this.request = n;
        break;
      }
      if (n instanceof Response) return n;
    }
    let t = hT(this.request, this._options);
    return this._options.timeout === false ? this._options.fetch(this.request.clone(), t) : pT(this.request.clone(), t, this.abortController, this._options);
  }
  _stream(t, r) {
    let n = Number(t.headers.get("content-length")) || 0, o = 0;
    return t.status === 204 ? (r && r({ percent: 1, totalBytes: n, transferredBytes: o }, new Uint8Array()), new globalThis.Response(null, { status: t.status, statusText: t.statusText, headers: t.headers })) : new globalThis.Response(new globalThis.ReadableStream({ async start(a) {
      let i = t.body.getReader();
      r && r({ percent: 0, transferredBytes: 0, totalBytes: n }, new Uint8Array());
      async function s() {
        let { done: l, value: d } = await i.read();
        if (l) {
          a.close();
          return;
        }
        if (r) {
          o += d.byteLength;
          let c = n === 0 ? 0 : o / n;
          r({ percent: c, transferredBytes: o, totalBytes: n }, d);
        }
        a.enqueue(d), await s();
      }
      await s();
    } }), { status: t.status, statusText: t.statusText, headers: t.headers });
  }
};
var _s = (e) => {
  let t = (r, n) => cd.create(r, sa(e, n));
  for (let r of Fg) t[r] = (n, o) => cd.create(n, sa(e, o, { method: r }));
  return t.create = (r) => _s(sa(r)), t.extend = (r) => _s(sa(e, r)), t.stop = Pg, t;
};
var fT = _s();
var Lo = fT;
var Og = Gs(() => {
});
var Ag = () => Ka(Og);
var mT = (e) => {
  sessionStorage.setItem("typebotPaymentInProgress", JSON.stringify(e));
};
var wl = () => sessionStorage.getItem("typebotPaymentInProgress");
var Rg = () => {
  sessionStorage.removeItem("typebotPaymentInProgress");
};
var li = () => {
  try {
    if (typeof window > "u" || parent === window || !Ne(document.referrer)) return;
    try {
      return new URL(document.referrer).origin;
    } catch {
      return;
    }
  } catch {
    return;
  }
};
var Ur = (e, t) => {
  if (typeof window < "u") return window.__ENV ? window.__ENV[e] ?? t : void 0;
  if (!(typeof process > "u")) return process.env[e] ?? t;
};
var bT = "https://typebot.io";
var hr = ({ ignoreChatApiUrl: e } = { ignoreChatApiUrl: false }) => {
  var _a5, _b2;
  let t = Ur("NEXT_PUBLIC_CHAT_API_URL"), r = (_a5 = Ur("NEXT_PUBLIC_USE_EXPERIMENTAL_CHAT_API_ON")) == null ? void 0 : _a5.split(",");
  if (!e && t && (!r || r.some((o) => o === window.location.href))) return t;
  let n = (_b2 = Ur("NEXT_PUBLIC_VIEWER_URL")) == null ? void 0 : _b2.split(",");
  return (n == null ? void 0 : n.find((o) => window.location.href.startsWith(o))) ?? (n == null ? void 0 : n[0]) ?? bT;
};
async function yT({ typebot: e, isPreview: t, apiHost: r, prefilledVariables: n, resultId: o, stripeRedirectStatus: a, startFrom: i, sessionId: s }) {
  if (St(e)) throw new Error("Typebot ID is required to get initial messages");
  let l = wl() ?? void 0, d = l ? JSON.parse(l) : void 0;
  if (d) return vT({ apiHost: r, stripeRedirectStatus: a, paymentInProgressState: d });
  let c = typeof e == "string" ? e : e.id;
  if (t) return wT({ apiHost: r, typebotId: c, startFrom: i, typebot: e, prefilledVariables: n, sessionId: s });
  try {
    let u = li();
    return { data: await (await Lo.post(`${xl(r)}/api/v1/typebots/${c}/startChat`, { headers: { "x-typebot-iframe-referrer-origin": u }, json: { isStreamEnabled: true, prefilledVariables: n, resultId: o, isOnlyRegistering: false }, timeout: false })).json() };
  } catch (u) {
    return { error: u };
  }
}
var vT = async ({ apiHost: e, stripeRedirectStatus: t, paymentInProgressState: r }) => {
  Rg();
  try {
    let n = li();
    return { data: { ...await Lo.post(`${xl(e)}/api/v1/sessions/${r.sessionId}/continueChat`, { headers: { "x-typebot-iframe-referrer-origin": n }, json: { message: t === "failed" ? "fail" : "Success" }, timeout: false }).json(), ...r } };
  } catch (n) {
    return { error: n };
  }
};
var wT = async ({ apiHost: e, typebotId: t, startFrom: r, typebot: n, prefilledVariables: o, sessionId: a }) => {
  try {
    return { data: await Lo.post(`${xl(e)}/api/v1/typebots/${t}/preview/startChat`, { json: { isStreamEnabled: true, startFrom: r, typebot: n, prefilledVariables: o, sessionId: a }, timeout: false }).json() };
  } catch (i) {
    return { error: i };
  }
};
var xl = (e) => Ne(e) ? e : hr();
var xT = class extends Error {
  constructor(e) {
    super("This bot can only be executed on " + e);
  }
};
var Is = (e, t) => {
  var _a5, _b2, _c2, _d2, _e2;
  return { ...e, general: e.general ? { ...e.general, background: e.general.background ? { ...e.general.background, content: (t == null ? void 0 : t.backgroundUrl) ?? ((_a5 = e.general.background) == null ? void 0 : _a5.content) } : void 0 } : void 0, chat: { ...e.chat, hostAvatar: ((_b2 = e.chat) == null ? void 0 : _b2.hostAvatar) && (t == null ? void 0 : t.hostAvatarUrl) ? { ...e.chat.hostAvatar, url: t.hostAvatarUrl } : (_c2 = e.chat) == null ? void 0 : _c2.hostAvatar, guestAvatar: ((_d2 = e.chat) == null ? void 0 : _d2.guestAvatar) && (t == null ? void 0 : t.guestAvatarUrl) ? { ...e.chat.guestAvatar, url: t == null ? void 0 : t.guestAvatarUrl } : (_e2 = e.chat) == null ? void 0 : _e2.guestAvatar } };
};
var kT = "https://fonts.bunny.net/css2";
var la = "typebot-font";
var Ng = (e) => {
  var _a5;
  let t = document.getElementById(la);
  if (typeof e == "string" || e.type === "Google") {
    let r = (typeof e == "string" ? e : e.family) ?? yl;
    if ((_a5 = t == null ? void 0 : t.getAttribute("href")) == null ? void 0 : _a5.includes(r)) return;
    t == null ? void 0 : t.remove();
    let n = document.createElement("link");
    n.href = `${kT}?family=${r}:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap`, n.rel = "stylesheet", n.id = la, document.head.appendChild(n);
    return;
  }
  if (e.type === "Custom") {
    if (Ne(e.css)) {
      if ((t == null ? void 0 : t.innerHTML) === e.css) return;
      t == null ? void 0 : t.remove();
      let r = document.createElement("style");
      r.innerHTML = e.css, r.id = la, document.head.appendChild(r);
    }
    if (Ne(e.url)) {
      if ((t == null ? void 0 : t.getAttribute("href")) === e.url) return;
      t == null ? void 0 : t.remove();
      let r = document.createElement("link");
      r.href = e.url, r.rel = "stylesheet", r.id = la, document.head.appendChild(r);
    }
  }
};
var TT = Symbol("store-raw");
var ST = Symbol("store-node");
var on = Symbol("store-has");
var ET = Symbol("store-self");
function yo(e) {
  let t;
  return e != null && typeof e == "object" && (e[io] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Os(e, t = /* @__PURE__ */ new Set()) {
  let r, n, o, a;
  if (r = e != null && e[TT]) return r;
  if (!yo(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let i = 0, s = e.length; i < s; i++) o = e[i], (n = Os(o, t)) !== o && (e[i] = n);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    let i = Object.keys(e), s = Object.getOwnPropertyDescriptors(e);
    for (let l = 0, d = i.length; l < d; l++) a = i[l], !s[a].get && (o = e[a], (n = Os(o, t)) !== o && (e[a] = n));
  }
  return e;
}
function CT(e, t) {
  let r = e[t];
  return r || Object.defineProperty(e, t, { value: r = /* @__PURE__ */ Object.create(null) }), r;
}
function dd(e, t, r) {
  if (e[t]) return e[t];
  let [n, o] = M(r, { equals: false, internal: true });
  return n.$ = o, e[t] = n;
}
function ir(e, t, r, n = false) {
  if (!n && e[t] === r) return;
  let o = e[t], a = e.length;
  r === void 0 ? (delete e[t], e[on] && e[on][t] && o !== void 0 && e[on][t].$()) : (e[t] = r, e[on] && e[on][t] && o === void 0 && e[on][t].$());
  let i = CT(e, ST), s;
  if ((s = dd(i, t, o)) && s.$(() => r), Array.isArray(e) && e.length !== a) {
    for (let l = e.length; l < a; l++) (s = i[l]) && s.$();
    (s = dd(i, "length", a)) && s.$(e.length);
  }
  (s = i[ET]) && s.$();
}
var As = Symbol("store-root");
function pn(e, t, r, n, o) {
  let a = t[r];
  if (e === a) return;
  let i = Array.isArray(e);
  if (r !== As && (!yo(e) || !yo(a) || i !== Array.isArray(a) || o && e[o] !== a[o])) {
    ir(t, r, e);
    return;
  }
  if (i) {
    if (e.length && a.length && (!n || o && e[0] && e[0][o] != null)) {
      let d, c, u, p, g, m, f, v;
      for (u = 0, p = Math.min(a.length, e.length); u < p && (a[u] === e[u] || o && a[u] && e[u] && a[u][o] && a[u][o] === e[u][o]); u++) pn(e[u], a, u, n, o);
      let w = new Array(e.length), y = /* @__PURE__ */ new Map();
      for (p = a.length - 1, g = e.length - 1; p >= u && g >= u && (a[p] === e[g] || o && a[p] && e[g] && a[p][o] && a[p][o] === e[g][o]); p--, g--) w[g] = a[p];
      if (u > g || u > p) {
        for (c = u; c <= g; c++) ir(a, c, e[c]);
        for (; c < e.length; c++) ir(a, c, w[c]), pn(e[c], a, c, n, o);
        a.length > e.length && ir(a, "length", e.length);
        return;
      }
      for (f = new Array(g + 1), c = g; c >= u; c--) m = e[c], v = o && m ? m[o] : m, d = y.get(v), f[c] = d === void 0 ? -1 : d, y.set(v, c);
      for (d = u; d <= p; d++) m = a[d], v = o && m ? m[o] : m, c = y.get(v), c !== void 0 && c !== -1 && (w[c] = a[d], c = f[c], y.set(v, c));
      for (c = u; c < e.length; c++) c in w ? (ir(a, c, w[c]), pn(e[c], a, c, n, o)) : ir(a, c, e[c]);
    } else for (let d = 0, c = e.length; d < c; d++) pn(e[d], a, d, n, o);
    a.length > e.length && ir(a, "length", e.length);
    return;
  }
  let s = Object.keys(e);
  for (let d = 0, c = s.length; d < c; d++) pn(e[s[d]], a, s[d], n, o);
  let l = Object.keys(a);
  for (let d = 0, c = l.length; d < c; d++) e[l[d]] === void 0 && ir(a, l[d], void 0);
}
function FT(e, t = {}) {
  let { merge: r, key: n = "id" } = t, o = Os(e);
  return (a) => {
    if (!yo(a) || !yo(o)) return o;
    let i = pn(o, { [As]: a }, As, r, n);
    return i === void 0 ? a : i;
  };
}
var Rs = "resultId";
var PT = (e) => {
  if (e) try {
    return sessionStorage.getItem(`${Rs}-${e}`) ?? localStorage.getItem(`${Rs}-${e}`) ?? void 0;
  } catch {
  }
};
var _T = (e = "session") => (t, r) => {
  try {
    ci(e).setItem(`${Rs}-${t}`, r);
  } catch {
  }
};
var IT = (e) => {
  if (e) try {
    let t = sessionStorage.getItem(`typebot-${e}-initialChatReply`) ?? localStorage.getItem(`typebot-${e}-initialChatReply`);
    return t ? JSON.parse(t) : void 0;
  } catch {
  }
};
var ud = (e, { typebotId: t, storage: r }) => {
  try {
    let n = JSON.stringify(e);
    ci(r).setItem(`typebot-${t}-initialChatReply`, n);
  } catch {
  }
};
var Dg = () => {
  try {
    sessionStorage.setItem("typebot-botOpened", "true");
  } catch {
  }
};
var Ma = () => {
  try {
    sessionStorage.removeItem("typebot-botOpened");
  } catch {
  }
};
var Lg = () => {
  try {
    return sessionStorage.getItem("typebot-botOpened") === "true";
  } catch {
    return false;
  }
};
var ci = (e) => (e ?? ht.general.rememberUser.storage) === "session" ? sessionStorage : localStorage;
var wn = (e) => {
  Object.keys(localStorage).forEach((t) => {
    t.startsWith(`typebot-${e}`) && localStorage.removeItem(t);
  }), Object.keys(sessionStorage).forEach((t) => {
    t.startsWith(`typebot-${e}`) && sessionStorage.removeItem(t);
  });
};
function Ns(e, t) {
  var _a5;
  if (!t.storage) return [...e];
  let r = ci(t.storage || ht.general.rememberUser.storage), n = (i) => {
    let s = JSON.parse(JSON.stringify(i));
    return typeof s != "object" || ("blobUrl" in s && (s.blobUrl = void 0), "attachments" in s && Array.isArray(s.attachments) && s.attachments.forEach((l) => {
      l && "blobUrl" in l && (l.blobUrl = void 0);
    })), JSON.stringify(s);
  }, o = JSON.parse.bind(JSON), a = r.getItem(t.key);
  if (a) {
    let i = typeof e[0] == "function" ? (l) => e[1](() => l) : (l) => e[1](FT(l)), s = o(a);
    t.transformInitDataFromStorage && (s = t.transformInitDataFromStorage(s), r.setItem(t.key, n(s))), i(s), (_a5 = t.onRecovered) == null ? void 0 : _a5.call(t);
  }
  return [e[0], typeof e[0] == "function" ? (i) => {
    let s = e[1](i);
    return i ? r.setItem(t.key, n(s)) : r.removeItem(t.key), s;
  } : (...i) => {
    e[1](...i);
    let s = n(Be(() => e[0]));
    r.setItem(t.key, s);
  }];
}
var je = (e) => {
  let t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, (n, o, a, i) => o + o + a + a + i + i);
  let r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return r ? [Number.parseInt(r[1] ?? "", 16), Number.parseInt(r[2] ?? "", 16), Number.parseInt(r[3] ?? "", 16)] : [0, 0, 0];
};
var vo = (e) => (([t, r, n]) => (t * 299 + r * 587 + n * 114) / 1e3 > 155)(je(e));
var kl = ({ chatContainer: e, generalBackground: t }) => {
  let r = (e == null ? void 0 : e.backgroundColor) ?? si;
  if (((e == null ? void 0 : e.opacity) ?? lt) <= 0.3 || r === "transparent" || Xe(r)) {
    let n = (t == null ? void 0 : t.type) ?? La, o = n === "Image" ? "#000000" : n === "Color" && Ne(t == null ? void 0 : t.content) ? t.content : "#ffffff";
    return vo(o);
  }
  return vo(r);
};
var OT = ({ theme: e, container: t, isPreview: r, typebotVersion: n }) => {
  var _a5;
  if (!e) return;
  let o = t == null ? void 0 : t.style;
  o && (AT({ generalTheme: e.general, documentStyle: o, isPreview: r, typebotVersion: n }), NT({ chatTheme: e.chat, generalBackground: (_a5 = e.general) == null ? void 0 : _a5.background, documentStyle: o, typebotVersion: n }));
};
var AT = ({ generalTheme: e, documentStyle: t, isPreview: r, typebotVersion: n }) => {
  var _a5;
  Mg({ background: e == null ? void 0 : e.background, documentStyle: t, typebotVersion: n }), t.setProperty(G.general.fontFamily, (typeof (e == null ? void 0 : e.font) == "string" ? e.font : (_a5 = e == null ? void 0 : e.font) == null ? void 0 : _a5.family) ?? yl), RT({ progressBar: e == null ? void 0 : e.progressBar, documentStyle: t, isPreview: r, typebotVersion: n });
};
var RT = ({ progressBar: e, documentStyle: t, isPreview: r, typebotVersion: n }) => {
  let o = (e == null ? void 0 : e.position) ?? ug;
  t.setProperty(G.general.progressBar.position, o === "fixed" ? r ? "absolute" : "fixed" : o), t.setProperty(G.general.progressBar.color, (e == null ? void 0 : e.color) ?? qx[n]), t.setProperty(G.general.progressBar.colorRgb, je((e == null ? void 0 : e.backgroundColor) ?? Yx[n]).join(", ")), t.setProperty(G.general.progressBar.height, `${(e == null ? void 0 : e.thickness) ?? Kx}px`);
  let a = (e == null ? void 0 : e.placement) ?? Xx;
  t.setProperty(G.general.progressBar.top, a === "Top" ? "0" : "auto"), t.setProperty(G.general.progressBar.bottom, a === "Bottom" ? "0" : "auto");
};
var NT = ({ chatTheme: e, generalBackground: t, documentStyle: r, typebotVersion: n }) => {
  DT({ container: e == null ? void 0 : e.container, generalBackground: t, documentStyle: r, legacyRoundness: e == null ? void 0 : e.roundness, typebotVersion: n }), LT({ hostBubbles: e == null ? void 0 : e.hostBubbles, documentStyle: r, legacyRoundness: e == null ? void 0 : e.roundness, typebotVersion: n }), MT({ guestBubbles: e == null ? void 0 : e.guestBubbles, documentStyle: r, legacyRoundness: e == null ? void 0 : e.roundness, typebotVersion: n }), UT({ buttons: e == null ? void 0 : e.buttons, documentStyle: r, legacyRoundness: e == null ? void 0 : e.roundness, typebotVersion: n }), $T({ inputs: e == null ? void 0 : e.inputs, documentStyle: r, legacyRoundness: e == null ? void 0 : e.roundness, typebotVersion: n }), zT(e == null ? void 0 : e.container, t, r), BT({ buttonsInput: e == null ? void 0 : e.buttonsInput, documentStyle: r, typebotVersion: n });
};
var DT = ({ container: e, generalBackground: t, documentStyle: r, legacyRoundness: n }) => {
  var _a5, _b2, _c2, _d2;
  let o = (e == null ? void 0 : e.backgroundColor) ?? si, a = o === "transparent" || Xe(o);
  r.setProperty(G.chat.container.bgColor, a ? "0, 0, 0" : je(o).join(", ")), r.setProperty(G.chat.container.color, je((e == null ? void 0 : e.color) ?? (kl({ chatContainer: e, generalBackground: t }) ? Ee.gray.light[12] : Ee.gray.dark[12])).join(", ")), r.setProperty(G.chat.container.maxWidth, (e == null ? void 0 : e.maxWidth) ?? Zx), r.setProperty(G.chat.container.maxHeight, (e == null ? void 0 : e.maxHeight) ?? Jx);
  let i = a ? "1" : ((e == null ? void 0 : e.opacity) ?? lt).toString();
  r.setProperty(G.chat.container.opacity, a ? "0" : ((e == null ? void 0 : e.opacity) ?? lt).toString()), r.setProperty(G.chat.container.blur, i === "1" || a ? "0xp" : `${(e == null ? void 0 : e.blur) ?? pg}px`), Uo(e == null ? void 0 : e.shadow, r, G.chat.container.boxShadow), Mo((e == null ? void 0 : e.border) ?? { roundeness: n ?? In }, r, G.chat.container.borderRadius), r.setProperty(G.chat.container.borderWidth, ie((_a5 = e == null ? void 0 : e.border) == null ? void 0 : _a5.thickness) ? `${(_b2 = e == null ? void 0 : e.border) == null ? void 0 : _b2.thickness}px` : "0"), r.setProperty(G.chat.container.borderOpacity, ie((_c2 = e == null ? void 0 : e.border) == null ? void 0 : _c2.opacity) ? e.border.opacity.toString() : lt.toString()), r.setProperty(G.chat.container.borderColor, je(((_d2 = e == null ? void 0 : e.border) == null ? void 0 : _d2.color) ?? "").join(", "));
};
var LT = ({ hostBubbles: e, documentStyle: t, legacyRoundness: r, typebotVersion: n }) => {
  var _a5, _b2, _c2;
  t.setProperty(G.chat.hostBubbles.bgColor, je((e == null ? void 0 : e.backgroundColor) ?? Qx[n]).join(", ")), t.setProperty(G.chat.hostBubbles.color, (e == null ? void 0 : e.color) ?? ek), Mo((e == null ? void 0 : e.border) ?? { roundeness: r ?? In }, t, G.chat.hostBubbles.borderRadius);
  let o = ((_a5 = e == null ? void 0 : e.border) == null ? void 0 : _a5.thickness) ?? tk[n];
  ie(o) && t.setProperty(G.chat.hostBubbles.borderWidth, o + "px"), t.setProperty(G.chat.hostBubbles.borderColor, je(((_b2 = e == null ? void 0 : e.border) == null ? void 0 : _b2.color) ?? rk).join(", ")), t.setProperty(G.chat.hostBubbles.opacity, (e == null ? void 0 : e.backgroundColor) === "transparent" ? "0" : ie(e == null ? void 0 : e.opacity) ? e.opacity.toString() : lt.toString()), t.setProperty(G.chat.hostBubbles.borderOpacity, ie((_c2 = e == null ? void 0 : e.border) == null ? void 0 : _c2.opacity) ? e.border.opacity.toString() : lt.toString()), t.setProperty(G.chat.hostBubbles.blur, ie(e == null ? void 0 : e.blur) ? `${e.blur ?? 0}px` : "none"), Uo(e == null ? void 0 : e.shadow, t, G.chat.hostBubbles.boxShadow);
};
var MT = ({ guestBubbles: e, documentStyle: t, legacyRoundness: r, typebotVersion: n }) => {
  var _a5, _b2, _c2;
  t.setProperty(G.chat.guestBubbles.bgColor, je((e == null ? void 0 : e.backgroundColor) ?? nk[n]).join(", ")), t.setProperty(G.chat.guestBubbles.color, (e == null ? void 0 : e.color) ?? ok), Mo((e == null ? void 0 : e.border) ?? { roundeness: r ?? In }, t, G.chat.guestBubbles.borderRadius);
  let o = ((_a5 = e == null ? void 0 : e.border) == null ? void 0 : _a5.thickness) ?? ak[n];
  ie(o) && t.setProperty(G.chat.guestBubbles.borderWidth, o + "px"), t.setProperty(G.chat.guestBubbles.borderColor, je(((_b2 = e == null ? void 0 : e.border) == null ? void 0 : _b2.color) ?? ik).join(", ")), t.setProperty(G.chat.guestBubbles.borderOpacity, ie((_c2 = e == null ? void 0 : e.border) == null ? void 0 : _c2.opacity) ? e.border.opacity.toString() : lt.toString()), t.setProperty(G.chat.guestBubbles.opacity, (e == null ? void 0 : e.backgroundColor) === "transparent" ? "0" : ie(e == null ? void 0 : e.opacity) ? e.opacity.toString() : lt.toString()), t.setProperty(G.chat.guestBubbles.blur, ie(e == null ? void 0 : e.blur) ? `${e.blur ?? 0}px` : "none"), Uo(e == null ? void 0 : e.shadow, t, G.chat.guestBubbles.boxShadow);
};
var UT = ({ buttons: e, documentStyle: t, legacyRoundness: r, typebotVersion: n }) => {
  var _a5, _b2, _c2, _d2;
  let o = (e == null ? void 0 : e.backgroundColor) ?? gg[n];
  t.setProperty(G.chat.buttons.bgRgb, je(o).join(", ")), t.setProperty(G.chat.buttons.bgRgb, je(o).join(", ")), t.setProperty(G.chat.buttons.color, (e == null ? void 0 : e.color) ?? sk), Mo((e == null ? void 0 : e.border) ?? { roundeness: r ?? In }, t, G.chat.buttons.borderRadius), t.setProperty(G.chat.buttons.borderWidth, ie((_a5 = e == null ? void 0 : e.border) == null ? void 0 : _a5.thickness) ? `${(_b2 = e == null ? void 0 : e.border) == null ? void 0 : _b2.thickness}px` : `${lk[n]}px`), t.setProperty(G.chat.buttons.borderColor, je(((_c2 = e == null ? void 0 : e.border) == null ? void 0 : _c2.color) ?? (e == null ? void 0 : e.backgroundColor) ?? ck).join(", ")), t.setProperty(G.chat.buttons.borderOpacity, ie((_d2 = e == null ? void 0 : e.border) == null ? void 0 : _d2.opacity) ? e.border.opacity.toString() : lt.toString()), t.setProperty(G.chat.buttons.opacity, (e == null ? void 0 : e.backgroundColor) === "transparent" ? "0" : ie(e == null ? void 0 : e.opacity) ? e.opacity.toString() : lt.toString()), t.setProperty(G.chat.buttons.blur, ie(e == null ? void 0 : e.blur) ? `${e.blur ?? 0}px` : pg.toString()), Uo(e == null ? void 0 : e.shadow, t, G.chat.buttons.boxShadow);
};
var BT = ({ buttonsInput: e, documentStyle: t }) => {
  t.setProperty(G.chat.buttons.flexDirection, ((e == null ? void 0 : e.layout) ?? mk) === "vertical" ? "column" : "unset");
};
var $T = ({ inputs: e, documentStyle: t, legacyRoundness: r, typebotVersion: n }) => {
  var _a5, _b2, _c2;
  t.setProperty(G.chat.inputs.bgColor, je((e == null ? void 0 : e.backgroundColor) ?? dk).join(", ")), t.setProperty(G.chat.inputs.color, (e == null ? void 0 : e.color) ?? uk), t.setProperty(G.chat.inputs.placeholderColor, (e == null ? void 0 : e.placeholderColor) ?? pk), Mo((e == null ? void 0 : e.border) ?? { roundeness: r ?? In }, t, G.chat.inputs.borderRadius), t.setProperty(G.chat.inputs.borderWidth, `${((_a5 = e == null ? void 0 : e.border) == null ? void 0 : _a5.thickness) ?? gk[n]}px`);
  let o = ((_b2 = e == null ? void 0 : e.border) == null ? void 0 : _b2.color) ?? hk[n];
  ie(o) && t.setProperty(G.chat.inputs.borderColor, je(o).join(", ")), t.setProperty(G.chat.inputs.borderOpacity, ie((_c2 = e == null ? void 0 : e.border) == null ? void 0 : _c2.opacity) ? e.border.opacity.toString() : lt.toString()), t.setProperty(G.chat.inputs.opacity, (e == null ? void 0 : e.backgroundColor) === "transparent" ? "0" : ie(e == null ? void 0 : e.opacity) ? e.opacity.toString() : lt.toString()), t.setProperty(G.chat.inputs.blur, ie(e == null ? void 0 : e.blur) ? `${e.blur ?? 0}px` : "none"), Uo((e == null ? void 0 : e.shadow) ?? fk[n], t, G.chat.inputs.boxShadow);
};
var zT = (e, t, r) => {
  let n = (e == null ? void 0 : e.backgroundColor) ?? si;
  if (n === "transparent" || Xe(n) || ((e == null ? void 0 : e.opacity) ?? lt) <= 0.2) {
    let o = (t == null ? void 0 : t.type) ?? La;
    r.setProperty(G.chat.checkbox.bgRgb, o === "Image" ? "rgba(255, 255, 255, 0.75)" : je((o === "Color" ? t == null ? void 0 : t.content : "#ffffff") ?? "#ffffff").join(", ")), o === "Image" ? r.setProperty(G.chat.checkbox.alphaRatio, "3") : r.setProperty(G.chat.checkbox.alphaRatio, (t == null ? void 0 : t.content) && vo(t == null ? void 0 : t.content) ? "1" : "2");
  } else r.setProperty(G.chat.checkbox.bgRgb, je(n).concat((e == null ? void 0 : e.opacity) ?? 1).join(", ")), r.setProperty(G.chat.checkbox.alphaRatio, vo(n) ? "1" : "2");
};
var Mg = ({ background: e, documentStyle: t, typebotVersion: r }) => {
  t.setProperty(G.general.bgImage, null), t.setProperty(G.general.bgColor, null), t.setProperty(((e == null ? void 0 : e.type) ?? La) === "Image" ? G.general.bgImage : G.general.bgColor, jT({ type: (e == null ? void 0 : e.type) ?? La, content: (e == null ? void 0 : e.content) ?? Wx[r] }));
};
var jT = ({ type: e, content: t }) => {
  switch (e) {
    case "None":
      return "transparent";
    case void 0:
    case "Color":
      return t;
    case "Image":
      return `url(${t})`;
  }
};
var Mo = (e, t, r) => {
  switch ((e == null ? void 0 : e.roundeness) ?? In) {
    case "none": {
      t.setProperty(r, "0");
      break;
    }
    case "medium": {
      t.setProperty(r, "6px");
      break;
    }
    case "large": {
      t.setProperty(r, "20px");
      break;
    }
    case "custom": {
      t.setProperty(r, `${e.customRoundeness ?? 6}px`);
      break;
    }
  }
};
var Uo = (e, t, r) => {
  if (e === void 0) {
    t.setProperty(r, "0 0 #0000");
    return;
  }
  switch (e) {
    case "none":
      t.setProperty(r, "0 0 #0000");
      break;
    case "sm":
      t.setProperty(r, "0 1px 2px 0 rgb(0 0 0 / 0.05)");
      break;
    case "md":
      t.setProperty(r, "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)");
      break;
    case "lg":
      t.setProperty(r, "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)");
      break;
    case "xl":
      t.setProperty(r, "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)");
      break;
    case "2xl":
      t.setProperty(r, "0 25px 50px -12px rgb(0 0 0 / 0.25)");
      break;
  }
};
var qt = v0({ placement: "bottom-end", gap: 24 });
var VT = P('<svg><circle class=opacity-25 cx=12 cy=12 r=10 stroke=currentColor stroke-width=4></circle><path class=opacity-75 fill=currentColor d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">');
var Ug = (e) => (() => {
  var t = VT();
  return _e(t, he(e, { get class() {
    return "animate-spin h-6 w-6 " + e.class;
  }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "data-testid": "loading-spinner" }), true, true), t;
})();
var HT = P("<button>");
var Ds = Hx("font-semibold focus:outline-none filter hover:brightness-90 active:brightness-75 disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 flex justify-center shrink-0 transition-[filter] duration-200 cursor-pointer", { variants: { variant: { primary: "typebot-button bg-button-bg text-button-text border-button-border rounded-button border-(length:--typebot-button-border-width) blur-button shadow-button", secondary: "secondary-button bg-host-bubble-bg text-host-bubble-text rounded-host-bubble border-host-bubble border-host-bubble-border" }, size: { icon: "text-sm size-6 pt-[3px]", sm: "py-2 px-4 text-sm", md: "py-2 px-4" } }, defaultVariants: { variant: "primary", size: "md" } });
var Yt = (e) => {
  let t = Ws(() => e.children), [r, n] = ct(e, ["variant", "size", "isDisabled", "isLoading"]);
  return (() => {
    var o = HT();
    return _e(o, he(n, { get disabled() {
      return r.isDisabled || r.isLoading;
    }, get class() {
      return bo(Ds({ variant: r.variant, size: r.size }), n.class);
    } }), false, true), E(o, h(Y, { get when() {
      return !r.isLoading;
    }, get fallback() {
      return h(Ug, {});
    }, get children() {
      return t();
    } })), o;
  })();
};
var er = "Send";
var di = async ({ err: e, context: t }) => {
  try {
    return typeof e == "string" ? { context: t, description: e, details: void 0 } : e instanceof Error ? "response" in e && typeof e.response == "object" && e.response && "text" in e.response && typeof e.response.text == "function" ? { context: t, description: e.message, details: JSON.stringify(await e.response.text()) } : { context: t, description: e.message, details: typeof e.cause == "string" ? e.cause : JSON.stringify(e.cause) } : { context: t, description: JSON.stringify(e) };
  } catch {
    return { context: t, description: "Unknown error (failed to parse)" };
  }
};
var GT = "lg";
var Bg = Gs(() => GT);
var $g = () => Ka(Bg);
var WT = (e) => {
  let [t, r] = M("lg"), n = new ResizeObserver(() => {
    let o = e();
    o && r(pd(o));
  });
  return ve(() => {
    let o = e();
    o && (r(pd(o)), n.observe(o));
  }), ue(() => {
    let o = e();
    o && n.unobserve(o);
  }), t;
};
var pd = (e) => {
  let t = e.clientWidth;
  return t < Yo.xs ? "xs" : t < Yo.sm ? "sm" : t < Yo.md ? "md" : t < Yo.lg ? "lg" : "xl";
};
var gd = async ({ apiHost: e, message: t, sessionId: r }) => {
  try {
    let n = li();
    return { data: await Lo.post(`${Ne(e) ? e : hr()}/api/v1/sessions/${r}/continueChat`, { headers: { "x-typebot-iframe-referrer-origin": n }, json: { message: t }, timeout: false }).json() };
  } catch (n) {
    return { error: n };
  }
};
var hd = async ({ apiHost: e, sessionId: t, clientLogs: r }) => {
  try {
    let n = li();
    await Lo.post(`${Ne(e) ? e : hr()}/api/v2/sessions/${t}/clientLogs`, { headers: { "x-typebot-iframe-referrer-origin": n }, json: { clientLogs: r } });
  } catch (n) {
    console.log(n);
  }
};
var qT = (e) => {
  if (e instanceof TypeError) {
    let t = ["Connection refused", "Failed to fetch", "Failed to load resource", "Failed to execute 'fetch' on 'Window'", "Load failed", "NetworkError", "Network request failed", "Request failed"], r = ["ERR_INTERNET_DISCONNECTED", "ERR_NAME_NOT_RESOLVED", "ERR_CONNECTION_REFUSED", "ERR_CONNECTION_TIMED_OUT", "ERR_SSL_PROTOCOL_ERROR"];
    return [...t, ...r].some((n) => e.message.toLowerCase().includes(n.toLowerCase()));
  }
  return e instanceof DOMException ? e.name === "AbortError" || e.name === "TimeoutError" : false;
};
var zg = Object.getPrototypeOf(async () => {
}).constructor;
var jg = async ({ content: e, args: t }) => {
  try {
    let r = await zg(...t.map((n) => n.id), YT(e))(...t.map((n) => n.value));
    if (r && typeof r == "string") return { scriptCallbackMessage: r };
  } catch (r) {
    return console.log(r), { logs: [await di({ err: r, context: "While executing script" })] };
  }
};
var YT = (e) => e.replace(/<script>/g, "").replace(/<\/script>/g, "");
var Ls = async ({ args: e, content: t }) => {
  try {
    let r = await zg(...Object.keys(e), t)(...Object.keys(e).map((n) => e[n]));
    if (r && typeof r == "string") return { scriptCallbackMessage: r };
  } catch (r) {
    console.warn("Script threw an error:", r);
  }
};
var Tl = "Chatwoot Web Widget Opened";
var KT = (e) => (jg(e.scriptToExecute), { scriptCallbackMessage: Tl });
var XT = (e) => ie(window.gtag) ? Promise.resolve() : new Promise((t) => {
  let r = document.getElementById("gtag");
  if (!r) {
    let n = document.createElement("script");
    n.src = `https://www.googletagmanager.com/gtag/js?id=${e}`, n.id = "gtag";
    let o = document.createElement("script");
    o.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${e}');
      `, document.body.appendChild(n), document.body.appendChild(o), n.onload = () => {
      t();
    };
  }
  r && t();
});
var ZT = (e) => {
  if (e) {
    if (!window.gtag) {
      console.error("Google Analytics was not properly initialized");
      return;
    }
    window.gtag("event", e.action, { event_category: Xe(e.category) ? void 0 : e.category, event_label: Xe(e.label) ? void 0 : e.label, value: e.value, send_to: Xe(e.sendTo) ? void 0 : e.sendTo });
  }
};
var JT = async (e) => {
  (e == null ? void 0 : e.trackingId) && ZT(e);
};
var QT = async (e) => {
  let { url: t, method: r, body: n, headers: o } = e;
  try {
    let a = await fetch(t, { method: r, body: r !== "GET" && n ? JSON.stringify(n) : void 0, headers: o }), i = a.status, s = await a.json();
    return JSON.stringify({ statusCode: i, data: s });
  } catch (a) {
    return console.error(a), JSON.stringify({ statusCode: 500, data: "An error occured while executing the webhook on the client" });
  }
};
var bI = Symbol("Let zodToJsonSchema decide on which parser to use");
var yI = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var wo = { code: "0", name: "text", parse: (e) => {
  if (typeof e != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: e };
} };
var xo = { code: "3", name: "error", parse: (e) => {
  if (typeof e != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: e };
} };
var ko = { code: "4", name: "assistant_message", parse: (e) => {
  if (e == null || typeof e != "object" || !("id" in e) || !("role" in e) || !("content" in e) || typeof e.id != "string" || typeof e.role != "string" || e.role !== "assistant" || !Array.isArray(e.content) || !e.content.every((t) => t != null && typeof t == "object" && "type" in t && t.type === "text" && "text" in t && t.text != null && typeof t.text == "object" && "value" in t.text && typeof t.text.value == "string")) throw new Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');
  return { type: "assistant_message", value: e };
} };
var To = { code: "5", name: "assistant_control_data", parse: (e) => {
  if (e == null || typeof e != "object" || !("threadId" in e) || !("messageId" in e) || typeof e.threadId != "string" || typeof e.messageId != "string") throw new Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');
  return { type: "assistant_control_data", value: { threadId: e.threadId, messageId: e.messageId } };
} };
var So = { code: "6", name: "data_message", parse: (e) => {
  if (e == null || typeof e != "object" || !("role" in e) || !("data" in e) || typeof e.role != "string" || e.role !== "data") throw new Error('"data_message" parts expect an object with a "role" and "data" property.');
  return { type: "data_message", value: e };
} };
var eS = [wo, xo, ko, To, So];
var vI = { [wo.code]: wo, [xo.code]: xo, [ko.code]: ko, [To.code]: To, [So.code]: So };
var wI = { [wo.name]: wo.code, [xo.name]: xo.code, [ko.name]: ko.code, [To.name]: To.code, [So.name]: So.code };
var xI = eS.map((e) => e.code);
var tS = { code: "0", name: "text", parse: (e) => {
  if (typeof e != "string") throw new Error('"text" parts expect a string value.');
  return { type: "text", value: e };
} };
var rS = { code: "2", name: "data", parse: (e) => {
  if (!Array.isArray(e)) throw new Error('"data" parts expect an array value.');
  return { type: "data", value: e };
} };
var nS = { code: "3", name: "error", parse: (e) => {
  if (typeof e != "string") throw new Error('"error" parts expect a string value.');
  return { type: "error", value: e };
} };
var oS = { code: "8", name: "message_annotations", parse: (e) => {
  if (!Array.isArray(e)) throw new Error('"message_annotations" parts expect an array value.');
  return { type: "message_annotations", value: e };
} };
var aS = { code: "9", name: "tool_call", parse: (e) => {
  if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string" || !("args" in e) || typeof e.args != "object") throw new Error('"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.');
  return { type: "tool_call", value: e };
} };
var iS = { code: "a", name: "tool_result", parse: (e) => {
  if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("result" in e)) throw new Error('"tool_result" parts expect an object with a "toolCallId" and a "result" property.');
  return { type: "tool_result", value: e };
} };
var sS = { code: "b", name: "tool_call_streaming_start", parse: (e) => {
  if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string") throw new Error('"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.');
  return { type: "tool_call_streaming_start", value: e };
} };
var lS = { code: "c", name: "tool_call_delta", parse: (e) => {
  if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("argsTextDelta" in e) || typeof e.argsTextDelta != "string") throw new Error('"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.');
  return { type: "tool_call_delta", value: e };
} };
var cS = { code: "d", name: "finish_message", parse: (e) => {
  if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string") throw new Error('"finish_message" parts expect an object with a "finishReason" property.');
  let t = { finishReason: e.finishReason };
  return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = { promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN, completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN }), { type: "finish_message", value: t };
} };
var dS = { code: "e", name: "finish_step", parse: (e) => {
  if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string") throw new Error('"finish_step" parts expect an object with a "finishReason" property.');
  let t = { finishReason: e.finishReason, isContinued: false };
  return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = { promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN, completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN }), "isContinued" in e && typeof e.isContinued == "boolean" && (t.isContinued = e.isContinued), { type: "finish_step", value: t };
} };
var uS = { code: "f", name: "start_step", parse: (e) => {
  if (e == null || typeof e != "object" || !("messageId" in e) || typeof e.messageId != "string") throw new Error('"start_step" parts expect an object with an "id" property.');
  return { type: "start_step", value: { messageId: e.messageId } };
} };
var pS = { code: "g", name: "reasoning", parse: (e) => {
  if (typeof e != "string") throw new Error('"reasoning" parts expect a string value.');
  return { type: "reasoning", value: e };
} };
var gS = { code: "h", name: "source", parse: (e) => {
  if (e == null || typeof e != "object") throw new Error('"source" parts expect a Source object.');
  return { type: "source", value: e };
} };
var hS = { code: "i", name: "redacted_reasoning", parse: (e) => {
  if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string") throw new Error('"redacted_reasoning" parts expect an object with a "data" property.');
  return { type: "redacted_reasoning", value: { data: e.data } };
} };
var fS = { code: "j", name: "reasoning_signature", parse: (e) => {
  if (e == null || typeof e != "object" || !("signature" in e) || typeof e.signature != "string") throw new Error('"reasoning_signature" parts expect an object with a "signature" property.');
  return { type: "reasoning_signature", value: { signature: e.signature } };
} };
var mS = { code: "k", name: "file", parse: (e) => {
  if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string") throw new Error('"file" parts expect an object with a "data" and "mimeType" property.');
  return { type: "file", value: e };
} };
var Sl = [tS, rS, nS, oS, aS, iS, sS, lS, cS, dS, uS, pS, gS, hS, fS, mS];
var bS = Object.fromEntries(Sl.map((e) => [e.code, e]));
var kI = Object.fromEntries(Sl.map((e) => [e.name, e.code]));
var yS = Sl.map((e) => e.code);
var vS = (e) => {
  let t = e.indexOf(":");
  if (t === -1) throw new Error("Failed to parse stream string. No separator found.");
  let r = e.slice(0, t);
  if (!yS.includes(r)) throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  let n = r, o = e.slice(t + 1), a = JSON.parse(o);
  return bS[n].parse(a);
};
var wS = 10;
function xS(e, t) {
  let r = new Uint8Array(t), n = 0;
  for (let o of e) r.set(o, n), n += o.length;
  return e.length = 0, r;
}
async function kS({ stream: e, onTextPart: t, onReasoningPart: r, onReasoningSignaturePart: n, onRedactedReasoningPart: o, onSourcePart: a, onFilePart: i, onDataPart: s, onErrorPart: l, onToolCallStreamingStartPart: d, onToolCallDeltaPart: c, onToolCallPart: u, onToolResultPart: p, onMessageAnnotationsPart: g, onFinishMessagePart: m, onFinishStepPart: f, onStartStepPart: v }) {
  let w = e.getReader(), y = new TextDecoder(), T = [], b = 0;
  for (; ; ) {
    let { value: S } = await w.read();
    if (S && (T.push(S), b += S.length, S[S.length - 1] !== wS)) continue;
    if (T.length === 0) break;
    let _ = xS(T, b);
    b = 0;
    let I = y.decode(_, { stream: true }).split(`
`).filter((x) => x !== "").map(vS);
    for (let { type: x, value: C } of I) switch (x) {
      case "text":
        await (t == null ? void 0 : t(C));
        break;
      case "reasoning":
        await (r == null ? void 0 : r(C));
        break;
      case "reasoning_signature":
        await (n == null ? void 0 : n(C));
        break;
      case "redacted_reasoning":
        await (o == null ? void 0 : o(C));
        break;
      case "file":
        await (i == null ? void 0 : i(C));
        break;
      case "source":
        await (a == null ? void 0 : a(C));
        break;
      case "data":
        await (s == null ? void 0 : s(C));
        break;
      case "error":
        await (l == null ? void 0 : l(C));
        break;
      case "message_annotations":
        await (g == null ? void 0 : g(C));
        break;
      case "tool_call_streaming_start":
        await (d == null ? void 0 : d(C));
        break;
      case "tool_call_delta":
        await (c == null ? void 0 : c(C));
        break;
      case "tool_call":
        await (u == null ? void 0 : u(C));
        break;
      case "tool_result":
        await (p == null ? void 0 : p(C));
        break;
      case "finish_message":
        await (m == null ? void 0 : m(C));
        break;
      case "finish_step":
        await (f == null ? void 0 : f(C));
        break;
      case "start_step":
        await (v == null ? void 0 : v(C));
        break;
      default: {
        let R = x;
        throw new Error(`Unknown stream part type: ${R}`);
      }
    }
  }
}
var TI = Symbol.for("vercel.ai.schema");
var ca = null;
var TS = 3;
var SS = 1;
var Vg = (e) => async ({ messages: t, onMessageStream: r, onError: n }) => {
  try {
    ca = new AbortController();
    let o = e.apiHost, a = await fetch((Ne(o) ? o : hr()) + `/api/v2/sessions/${e.sessionId}/streamMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: t }), signal: ca.signal });
    if (!a.ok) return (e.retryAttempt ?? 0) < SS && (a.status === 403 || a.status === 500 || a.status === 503) ? (await new Promise((l) => setTimeout(l, TS * 1e3)), Vg({ ...e, retryAttempt: (e.retryAttempt ?? 0) + 1 })({ messages: t, onMessageStream: r })) : { error: { description: "Failed to fetch chat streaming", details: await a.text(), context: "While streaming chat" } };
    if (!a.body) return { error: { description: "The chat stream response body is empty" } };
    let i = "", s = Et();
    return await kS({ stream: a.body, onTextPart: async (l) => {
      i += l, r && r({ id: s, message: i });
    }, onErrorPart: (l) => {
      n == null ? void 0 : n(JSON.parse(l));
    } }), ca = null, { message: i };
  } catch (o) {
    return console.error(o), o.name === "AbortError" ? (ca = null, { error: { description: "Request aborted" } }) : { error: await di({ err: o, context: "While streaming chat" }) };
  }
};
var ES = (e) => {
  let t = document.createElement("script");
  t.innerHTML = `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  ${e.map((r) => `fbq('init', '${r}');`).join(`
`)}
  fbq('track', 'PageView');`, document.head.appendChild(t);
};
var CS = (e) => {
  var _a5;
  if (!(e == null ? void 0 : e.eventType) || !e.pixelId) return;
  if (!window.fbq) {
    console.error("Facebook Pixel was not properly initialized");
    return;
  }
  let t = ((_a5 = e.params) == null ? void 0 : _a5.length) ? e.params.reduce((r, n) => !n.key || !n.value ? r : { ...r, [n.key]: n.value }, {}) : void 0;
  if (e.eventType === "Custom") {
    if (!e.name) return;
    window.fbq("trackSingleCustom", e.pixelId, e.name, t);
  }
  window.fbq("trackSingle", e.pixelId, e.eventType, t);
};
var FS = async (e) => {
  Xe(e == null ? void 0 : e.pixelId) || CS(e);
};
var PS = ({ url: e, isNewTab: t } = {}) => {
  if (e && !window.open(e, t ? "_blank" : "_top")) return { blockedPopupUrl: e };
};
var fd = (e) => {
  if (St(e)) return null;
  if (typeof e == "string") return e;
  try {
    return JSON.stringify(e);
  } catch {
    return console.warn("Failed to safely stringify variable value", e), null;
  }
};
var _S = Object.getPrototypeOf(async () => {
}).constructor;
var IS = async ({ content: e, args: t, isCode: r }) => {
  try {
    if (!isNaN(e) && /0[^.].+/.test(e)) return { replyToSend: e };
    let n = await _S(...t.map((o) => o.id), e.includes("return ") ? e : `return ${e}`)(...t.map((o) => o.value));
    return { replyToSend: fd(n) ?? void 0 };
  } catch (n) {
    return console.error(n), { replyToSend: fd(e) ?? void 0, logs: r ? [await di({ err: n, context: "While executing set variable" })] : void 0 };
  }
};
var OS = async ({ secondsToWaitFor: e }) => {
  await new Promise((t) => setTimeout(t, e * 1e3));
};
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Hg = class extends Event {
  constructor(e, t) {
    super("error", t);
    __publicField(this, "message");
    __publicField(this, "error");
    this.message = e.message, this.error = e;
  }
};
var Gg = class extends Event {
  constructor(e = 1e3, t = "", r) {
    super("close", r);
    __publicField(this, "code");
    __publicField(this, "reason");
    __publicField(this, "wasClean", true);
    this.code = e, this.reason = t;
  }
};
var Hi = { Event, ErrorEvent: Hg, CloseEvent: Gg };
function AS(e, t) {
  if (!e) throw new Error(t);
}
function RS(e) {
  return new e.constructor(e.type, e);
}
function NS(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Gg(e.code || 1999, e.reason || "unknown reason", e) : "error" in e ? new Hg(e.error, e) : new Event(e.type, e);
}
var _a2;
var DS = typeof process < "u" && typeof ((_a2 = process.versions) == null ? void 0 : _a2.node) < "u" && typeof document > "u";
var da = DS ? NS : RS;
var Pr = { maxReconnectionDelay: 1e4, minReconnectionDelay: 1e3 + Math.random() * 4e3, minUptime: 5e3, reconnectionDelayGrowFactor: 1.3, connectionTimeout: 4e3, maxRetries: 1 / 0, maxEnqueuedMessages: 1 / 0, startClosed: false, debug: false };
var md = false;
var LS = class Ar extends EventTarget {
  constructor(t, r, n = {}) {
    super();
    __publicField(this, "_ws");
    __publicField(this, "_retryCount", -1);
    __publicField(this, "_uptimeTimeout");
    __publicField(this, "_connectTimeout");
    __publicField(this, "_shouldReconnect", true);
    __publicField(this, "_connectLock", false);
    __publicField(this, "_binaryType", "blob");
    __publicField(this, "_closeCalled", false);
    __publicField(this, "_messageQueue", []);
    __publicField(this, "_debugLogger", console.log.bind(console));
    __publicField(this, "_url");
    __publicField(this, "_protocols");
    __publicField(this, "_options");
    __publicField(this, "onclose", null);
    __publicField(this, "onerror", null);
    __publicField(this, "onmessage", null);
    __publicField(this, "onopen", null);
    __publicField(this, "_handleOpen", (t) => {
      this._debug("open event");
      let { minUptime: r = Pr.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), AS(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((n) => {
        var _a5;
        return (_a5 = this._ws) == null ? void 0 : _a5.send(n);
      }), this._messageQueue = [], this.onopen && this.onopen(t), this.dispatchEvent(da(t));
    });
    __publicField(this, "_handleMessage", (t) => {
      this._debug("message event"), this.onmessage && this.onmessage(t), this.dispatchEvent(da(t));
    });
    __publicField(this, "_handleError", (t) => {
      this._debug("error event", t.message), this._disconnect(void 0, t.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(t), this._debug("exec error listeners"), this.dispatchEvent(da(t)), this._connect();
    });
    __publicField(this, "_handleClose", (t) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(t), this.dispatchEvent(da(t));
    });
    this._url = t, this._protocols = r, this._options = n, this._options.startClosed && (this._shouldReconnect = false), this._options.debugLogger && (this._debugLogger = this._options.debugLogger), this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return Ar.CONNECTING;
  }
  get OPEN() {
    return Ar.OPEN;
  }
  get CLOSING() {
    return Ar.CLOSING;
  }
  get CLOSED() {
    return Ar.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(t) {
    this._binaryType = t, this._ws && (this._ws.binaryType = t);
  }
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  get bufferedAmount() {
    return this._messageQueue.reduce((t, r) => (typeof r == "string" ? t += r.length : r instanceof Blob ? t += r.size : t += r.byteLength, t), 0) + (this._ws ? this._ws.bufferedAmount : 0);
  }
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  get readyState() {
    return this._ws ? this._ws.readyState : this._options.startClosed ? Ar.CLOSED : Ar.CONNECTING;
  }
  get url() {
    return this._ws ? this._ws.url : "";
  }
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  close(t = 1e3, r) {
    if (this._closeCalled = true, this._shouldReconnect = false, this._clearTimeouts(), !this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(t, r);
  }
  reconnect(t, r) {
    this._shouldReconnect = true, this._closeCalled = false, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(t, r), this._connect());
  }
  send(t) {
    if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", t), this._ws.send(t);
    else {
      let { maxEnqueuedMessages: r = Pr.maxEnqueuedMessages } = this._options;
      this._messageQueue.length < r && (this._debug("enqueue", t), this._messageQueue.push(t));
    }
  }
  _debug(...t) {
    this._options.debug && this._debugLogger("RWS>", ...t);
  }
  _getNextDelay() {
    let { reconnectionDelayGrowFactor: t = Pr.reconnectionDelayGrowFactor, minReconnectionDelay: r = Pr.minReconnectionDelay, maxReconnectionDelay: n = Pr.maxReconnectionDelay } = this._options, o = 0;
    return this._retryCount > 0 && (o = r * Math.pow(t, this._retryCount - 1), o > n && (o = n)), this._debug("next delay", o), o;
  }
  _wait() {
    return new Promise((t) => {
      setTimeout(t, this._getNextDelay());
    });
  }
  _getNextProtocols(t) {
    if (!t) return Promise.resolve(null);
    if (typeof t == "string" || Array.isArray(t)) return Promise.resolve(t);
    if (typeof t == "function") {
      let r = t();
      if (!r) return Promise.resolve(null);
      if (typeof r == "string" || Array.isArray(r)) return Promise.resolve(r);
      if (r.then) return r;
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(t) {
    if (typeof t == "string") return Promise.resolve(t);
    if (typeof t == "function") {
      let r = t();
      if (typeof r == "string") return Promise.resolve(r);
      if (r.then) return r;
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect) return;
    this._connectLock = true;
    let { maxRetries: t = Pr.maxRetries, connectionTimeout: r = Pr.connectionTimeout } = this._options;
    if (this._retryCount >= t) {
      this._debug("max retries reached", this._retryCount, ">=", t);
      return;
    }
    this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), this._wait().then(() => Promise.all([this._getNextUrl(this._url), this._getNextProtocols(this._protocols || null)])).then(([n, o]) => {
      if (this._closeCalled) {
        this._connectLock = false;
        return;
      }
      !this._options.WebSocket && typeof WebSocket > "u" && !md && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), md = true);
      let a = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: n, protocols: o }), this._ws = o ? new a(n, o) : new a(n), this._ws.binaryType = this._binaryType, this._connectLock = false, this._addListeners(), this._connectTimeout = setTimeout(() => this._handleTimeout(), r);
    }).catch((n) => {
      this._connectLock = false, this._handleError(new Hi.ErrorEvent(Error(n.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Hi.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(t = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        this._ws.close(t, r), this._handleClose(new Hi.CloseEvent(t, r, this));
      } catch {
      }
    }
  }
  _acceptOpen() {
    this._debug("accept open"), this._retryCount = 0;
  }
  _removeListeners() {
    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
  }
  _addListeners() {
    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
  }
};
var MS = (e) => e[1] !== null && e[1] !== void 0;
function US() {
  if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
  let e = (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    let n = Math.random() * 16;
    return e > 0 ? (n = (e + n) % 16 | 0, e = Math.floor(e / 16)) : (n = (t + n) % 16 | 0, t = Math.floor(t / 16)), (r === "x" ? n : n & 3 | 8).toString(16);
  });
}
function Wg(e, t, r = {}) {
  let { host: n, path: o, protocol: a, room: i, party: s, prefix: l, query: d } = e, c = n.replace(/^(http|https|ws|wss):\/\//, "");
  if (c.endsWith("/") && (c = c.slice(0, -1)), o && o.startsWith("/")) throw new Error("path must not start with a slash");
  let u = s ?? "main", p = o ? `/${o}` : "", g = a || (c.startsWith("localhost:") || c.startsWith("127.0.0.1:") || c.startsWith("192.168.") || c.startsWith("10.") || c.startsWith("172.") && c.split(".")[1] >= "16" && c.split(".")[1] <= "31" || c.startsWith("[::ffff:7f00:1]:") ? t : t + "s"), m = `${g}://${c}/${l || `parties/${u}/${i}`}${p}`, f = (w = {}) => `${m}?${new URLSearchParams([...Object.entries(r), ...Object.entries(w).filter(MS)])}`, v = typeof d == "function" ? async () => f(await d()) : f(d);
  return { host: c, path: p, room: i, name: u, protocol: g, partyUrl: m, urlProvider: v };
}
var BS = class extends LS {
  constructor(e) {
    let t = bd(e);
    super(t.urlProvider, t.protocols, t.socketOptions);
    __publicField(this, "_pk");
    __publicField(this, "_pkurl");
    __publicField(this, "name");
    __publicField(this, "room");
    __publicField(this, "host");
    __publicField(this, "path");
    this.partySocketOptions = e, this.setWSProperties(t);
  }
  updateProperties(e) {
    let t = bd({ ...this.partySocketOptions, ...e, host: e.host ?? this.host, room: e.room ?? this.room, path: e.path ?? this.path });
    this._url = t.urlProvider, this._protocols = t.protocols, this._options = t.socketOptions, this.setWSProperties(t);
  }
  setWSProperties(e) {
    let { _pk: t, _pkurl: r, name: n, room: o, host: a, path: i } = e;
    this._pk = t, this._pkurl = r, this.name = n, this.room = o, this.host = a, this.path = i;
  }
  reconnect(e, t) {
    if (!this.room || !this.host) throw new Error("The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor.");
    super.reconnect(e, t);
  }
  get id() {
    return this._pk;
  }
  get roomUrl() {
    return this._pkurl;
  }
  static async fetch(e, t) {
    let r = Wg(e, "http"), n = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (e.fetch ?? fetch)(n, t);
  }
};
function bd(e) {
  let { id: t, host: r, path: n, party: o, room: a, protocol: i, query: s, protocols: l, ...d } = e, c = t || US(), u = Wg(e, "ws", { _pk: c });
  return { _pk: c, _pkurl: u.partyUrl, name: u.name, room: u.room, host: u.host, path: u.path, protocols: l, socketOptions: d, urlProvider: u.urlProvider };
}
var $S = "partykit.typebot.io";
var zS = (e) => e ?? Ur("NEXT_PUBLIC_PARTYKIT_HOST") ?? $S;
var jS = ({ sessionId: e, resultId: t, context: r }) => {
  let n = new BS({ host: zS(r.wsHost), room: VS({ sessionId: e, resultId: t }) });
  return new Promise((o) => {
    n.addEventListener("message", (a) => {
      n.close(), o({ replyToSend: a.data });
    }), n.addEventListener("error", (a) => {
      o({ logs: [{ status: "error", description: "Websocket returned an error", details: JSON.stringify(a, null, 2) }], replyToSend: void 0 });
    });
  });
};
var VS = ({ sessionId: e, resultId: t }) => {
  if (t) return `${t}/webhooks`;
  let [r, n] = e.split("-");
  return `${n}/${r}/webhooks`;
};
var HS = (e) => {
  if (document.getElementById("gtm-noscript")) return "";
  let t = document.createElement("noscript");
  t.id = "gtm-noscript";
  let r = document.createElement("iframe");
  return r.src = `https://www.googletagmanager.com/ns.html?id=${e}`, r.height = "0", r.width = "0", r.style.display = "none", r.style.visibility = "hidden", t.appendChild(r), t;
};
var GS = async (e) => {
  let t = e.customHeadCode;
  Ne(t) && jx(t);
  let r = e.gtmId;
  Ne(r) && document.body.prepend(HS(r));
  let n = e.googleAnalyticsId;
  Ne(n) && await XT(n);
  let o = e.pixelIds;
  ie(o) && ES(o);
};
var WS = async ({ clientSideAction: e, context: t, onMessageStream: r, onStreamError: n }) => {
  var _a5;
  if ("chatwoot" in e) return KT(e.chatwoot);
  if ("googleAnalytics" in e) return JT(e.googleAnalytics);
  if ("scriptToExecute" in e) return jg(e.scriptToExecute);
  if ("redirect" in e) return PS(e.redirect);
  if ("wait" in e) return await OS(e.wait), e.expectsDedicatedReply ? { replyToSend: void 0 } : void 0;
  if ("setVariable" in e) return IS(e.setVariable.scriptToExecute);
  if ("streamOpenAiChatCompletion" in e || "stream" in e) {
    let { error: o, message: a } = await Vg(t)({ messages: "streamOpenAiChatCompletion" in e ? (_a5 = e.streamOpenAiChatCompletion) == null ? void 0 : _a5.messages : void 0, onMessageStream: r, onError: n });
    return o ? { replyToSend: void 0, logs: [{ status: "error", description: "Message streaming returned an error", details: JSON.stringify(o, null, 2) }] } : { replyToSend: a };
  }
  if ("httpRequestToExecute" in e) return { replyToSend: await QT(e.httpRequestToExecute) };
  if ("startPropsToInject" in e) return GS(e.startPropsToInject);
  if ("pixel" in e) return FS(e.pixel);
  if ("codeToExecute" in e) return Ls(e.codeToExecute);
  if (e.type === "listenForWebhook") return jS({ sessionId: t.sessionId, resultId: t.resultId, context: t });
};
var qS = (e) => e.type === "text" ? e.label ?? e.value : e.url;
var YS = (e, { storage: t, typebotId: r }) => {
  if (e.length === 0) return [];
  if ("version" in e[0]) return e;
  let n = ci(t), o = QS({ storage: n, typebotId: r });
  return e.map((a, i) => ({ version: "2", messages: a.messages, clientSideActions: i === e.length - 1 ? ZS({ storage: n, typebotId: r }) : [], input: XS({ input: a.input, storage: n, typebotId: r, chunkIndex: i }), streamingMessage: a.streamingMessageId ? KS({ streamingMessageId: a.streamingMessageId, storage: n }) : void 0, dynamicTheme: JS({ chunkIndex: i, avatarsHistory: o }) }));
};
var KS = ({ streamingMessageId: e, storage: t }) => {
  let r = `typebot-streaming-message-${e}`, n = t.getItem(r) ?? void 0, o = n ? JSON.parse(n) : void 0;
  return t.removeItem(r), o;
};
var XS = ({ input: e, storage: t, typebotId: r, chunkIndex: n }) => {
  if (!e) return e;
  let o = `typebot-${r}-input-${n}`, a = t.getItem(o) ?? void 0, i = a ? JSON.parse(a) : void 0;
  return t.removeItem(o), { ...e, answer: i };
};
var ZS = ({ storage: e, typebotId: t }) => {
  let r = `typebot-${t}-clientSideActions`, n = e.getItem(r);
  if (e.removeItem(r), n) return JSON.parse(n);
};
var JS = ({ chunkIndex: e, avatarsHistory: t }) => {
  var _a5, _b2;
  let r = t.filter((n) => n.chunkIndex === e);
  if (r.length > 0) return { hostAvatarUrl: (_a5 = r.find((n) => n.role === "host")) == null ? void 0 : _a5.avatarUrl, guestAvatarUrl: (_b2 = r.find((n) => n.role === "guest")) == null ? void 0 : _b2.avatarUrl };
};
var QS = ({ storage: e, typebotId: t }) => {
  let r = `typebot-${t}-avatarsHistory`, n = e.getItem(r);
  return e.removeItem(r), n ? JSON.parse(n) : [];
};
var eE = { isAutoplayEnabled: true };
var tE = P('<div class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bubble1"></div><div class="w-2 h-2 rounded-full bubble2"></div><div class="w-2 h-2 rounded-full bubble3">');
var Hr = () => tE();
var rE = P('<div><div class="flex w-full items-center"><div class="flex relative z-10 items-start typebot-host-bubble max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing z-10 "></div><audio controls>');
var nE = 400;
var oE = 100;
var Gi;
var aE = (e) => {
  let t = false, r, n, [o, a] = M(!!e.onTransitionEnd);
  return ve(() => {
    Gi = setTimeout(() => {
      t || (t = true, a(false), setTimeout(() => {
        var _a5;
        return (_a5 = e.onTransitionEnd) == null ? void 0 : _a5.call(e, r);
      }, nE));
    }, oE);
  }), ue(() => {
    Gi && clearTimeout(Gi);
  }), (() => {
    var i = rE(), s = i.firstChild, l = s.firstChild, d = l.firstChild, c = d.nextSibling, u = r;
    typeof u == "function" ? Fe(u, i) : r = i, E(d, (() => {
      var g = ae(() => !!o());
      return () => g() && h(Hr, {});
    })());
    var p = n;
    return typeof p == "function" ? Fe(p, c) : n = c, B((g) => {
      var _a5, _b2;
      var m = oe("flex flex-col", e.onTransitionEnd ? "animate-fade-in" : void 0), f = o() ? "64px" : "100%", v = o() ? "32px" : "100%", w = (_a5 = e.content) == null ? void 0 : _a5.url, y = e.onTransitionEnd ? ((_b2 = e.content) == null ? void 0 : _b2.isAutoplayEnabled) ?? eE.isAutoplayEnabled : false, T = oe("z-10 text-fade-in", o() ? "opacity-0 h-8 @xs:h-9" : "opacity-100 m-2 h-[revert]");
      return m !== g.e && Z(i, g.e = m), f !== g.t && ne(d, "width", g.t = f), v !== g.a && ne(d, "height", g.a = v), w !== g.o && J(c, "src", g.o = w), y !== g.i && (c.autoplay = g.i = y), T !== g.n && Z(c, g.n = T), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), i;
  })();
};
var iE = P('<div><div class="flex w-full items-center"><div class="flex relative z-10 items-start typebot-host-bubble w-full max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing z-10 "></div><div><div class="w-full overflow-y-auto max-h-[calc(var(--bot-container-height)-100px)]">');
var Wi;
var sE = 400;
var lE = (e) => {
  let t, [r, n] = M(!!e.onTransitionEnd), o;
  return ve(() => {
    Ls({ args: { ...e.content.initFunction.args, typebotElement: o }, content: e.content.initFunction.content }), e.content.waitForEventFunction && Ls({ args: { ...e.content.waitForEventFunction.args, continueFlow: (a) => e.onCompleted(a ? { type: "text", value: a } : void 0) }, content: e.content.waitForEventFunction.content }), Wi = setTimeout(() => {
      n(false), setTimeout(() => {
        var _a5;
        return (_a5 = e.onTransitionEnd) == null ? void 0 : _a5.call(e, t);
      }, sE);
    }, 2e3);
  }), ue(() => {
    Wi && clearTimeout(Wi);
  }), (() => {
    var a = iE(), i = a.firstChild, s = i.firstChild, l = s.firstChild, d = l.nextSibling, c = d.firstChild, u = t;
    typeof u == "function" ? Fe(u, a) : t = a, E(l, (() => {
      var g = ae(() => !!r());
      return () => g() && h(Hr, {});
    })());
    var p = o;
    return typeof p == "function" ? Fe(p, c) : o = c, B((g) => {
      var m = oe("flex flex-col w-full", e.onTransitionEnd ? "animate-fade-in" : void 0), f = r() ? "64px" : "100%", v = r() ? "32px" : "100%", w = oe("p-2 z-20 text-fade-in w-full", r() ? "opacity-0 h-8 @xs:h-9" : "opacity-100");
      return m !== g.e && Z(a, g.e = m), f !== g.t && ne(l, "width", g.t = f), v !== g.a && ne(l, "height", g.a = v), w !== g.o && Z(d, g.o = w), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0 }), a;
  })();
};
var cE = { height: 400 };
var dE = P('<div><div class="flex w-full items-center"><div class="flex relative z-10 items-start typebot-host-bubble w-full max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing z-10 "></div><div><iframe id=embed-bubble-content class="w-full h-full">');
var qi;
var uE = 400;
var pE = (e) => {
  let t, [r, n] = M(!!e.onTransitionEnd), o = (a) => {
    var _a5, _b2, _c2, _d2;
    ((_b2 = (_a5 = e.content) == null ? void 0 : _a5.waitForEvent) == null ? void 0 : _b2.isEnabled) && Ne(a.data.name) && a.data.name === ((_c2 = e.content) == null ? void 0 : _c2.waitForEvent.name) && ((_d2 = e.onCompleted) == null ? void 0 : _d2.call(e, e.content.waitForEvent.saveDataInVariableId && a.data.data ? { type: "text", value: a.data.data } : void 0), window.removeEventListener("message", o));
  };
  return ve(() => {
    qi = setTimeout(() => {
      var _a5, _b2;
      n(false), ((_b2 = (_a5 = e.content) == null ? void 0 : _a5.waitForEvent) == null ? void 0 : _b2.isEnabled) && window.addEventListener("message", o), setTimeout(() => {
        var _a6;
        (_a6 = e.onTransitionEnd) == null ? void 0 : _a6.call(e, t);
      }, uE);
    }, 2e3);
  }), ue(() => {
    qi && clearTimeout(qi), window.removeEventListener("message", o);
  }), (() => {
    var a = dE(), i = a.firstChild, s = i.firstChild, l = s.firstChild, d = l.nextSibling, c = d.firstChild, u = t;
    return typeof u == "function" ? Fe(u, a) : t = a, E(l, (() => {
      var p = ae(() => !!r());
      return () => p() && h(Hr, {});
    })()), B((p) => {
      var _a5, _b2;
      var g = oe("flex flex-col w-full", e.onTransitionEnd ? "animate-fade-in" : void 0), m = r() ? "64px" : "100%", f = r() ? "32px" : "100%", v = oe("p-4 z-20 text-fade-in w-full", r() ? "opacity-0 h-8 @xs:h-9" : "opacity-100 p-4 h-(--embed-bubble-height)"), w = `${((_a5 = e.content) == null ? void 0 : _a5.height) ?? cE.height}px`, y = (_b2 = e.content) == null ? void 0 : _b2.url;
      return g !== p.e && Z(a, p.e = g), m !== p.t && ne(l, "width", p.t = m), f !== p.a && ne(l, "height", p.a = f), v !== p.o && Z(d, p.o = v), w !== p.i && ne(d, "--embed-bubble-height", p.i = w), y !== p.n && J(c, "src", p.n = y), p;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), a;
  })();
};
var yd = { clickLink: { alt: "Bubble image" } };
var gE = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2px stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>');
var Bo = (e) => (() => {
  var t = gE();
  return _e(t, e, true, true), t;
})();
var qg = (e) => h(un.Root, { get open() {
  return e.isOpen;
}, lazyMount: true, unmountOnExit: true, get onOpenChange() {
  return e.onClose;
}, get children() {
  return h(Wu, { get mount() {
    return Ag()();
  }, get children() {
    return [h(un.Backdrop, { class: "absolute inset-0 bg-[rgba(0,0,0,0.8)] h-screen z-50" }), h(un.Positioner, { class: "absolute inset-0 z-50 flex items-center justify-center px-2", get children() {
      return [h(un.Content, { class: "focus:outline-none", get children() {
        return e.children;
      } }), h(un.CloseTrigger, { class: "fixed top-4 right-4 z-50 rounded-md bg-[#202020] p-2 text-white", get children() {
        return h(Bo, { class: "w-6 h-6" });
      } })];
    } })];
  } });
} });
var hE = P('<img elementtiming="Bubble image"fetchpriority=high>');
var fE = P('<img class="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1rem)] rounded-[6px] m-auto">');
var mE = P('<div><div class="flex w-full items-center"><div class="flex relative z-10 items-start typebot-host-bubble max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing z-10 ">');
var bE = P("<a target=_blank rel=noreferrer>");
var yE = P("<figure>");
var vE = 400;
var wE = 5e3;
var ua;
var xE = (e) => {
  let t, r, [n, o] = M(false), [a, i] = M(!!e.onTransitionEnd), s = () => {
    a() && (i(false), setTimeout(() => {
      var _a5;
      (_a5 = e.onTransitionEnd) == null ? void 0 : _a5.call(e, t);
    }, vE));
  };
  ve(() => {
    r && (ua = setTimeout(s, wE), r.onload = () => {
      clearTimeout(ua), s();
    });
  }), ue(() => {
    ua && clearTimeout(ua);
  });
  let l = () => {
    o(true);
  }, d = () => {
    o(false);
  }, c = (() => {
    var u = hE(), p = r;
    return typeof p == "function" ? Fe(p, u) : r = u, B((g) => {
      var _a5, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
      var m = (_a5 = e.content) == null ? void 0 : _a5.url, f = ((_c2 = (_b2 = e.content) == null ? void 0 : _b2.clickLink) == null ? void 0 : _c2.alt) ?? yd.clickLink.alt, v = oe(a() ? "opacity-0" : "opacity-100", e.onTransitionEnd ? "text-fade-in" : void 0, ((_e2 = (_d2 = e.content) == null ? void 0 : _d2.url) == null ? void 0 : _e2.endsWith(".svg")) ? "w-96" : void 0), w = ((_g2 = (_f2 = e.content) == null ? void 0 : _f2.url) == null ? void 0 : _g2.startsWith("data:image/svg")) ? "100%" : void 0, y = ((_i2 = (_h2 = e.content) == null ? void 0 : _h2.url) == null ? void 0 : _i2.startsWith("data:image/svg")) ? "120px" : "512px", T = a() ? "32px" : "auto";
      return m !== g.e && J(u, "src", g.e = m), f !== g.t && J(u, "alt", g.t = f), v !== g.a && Z(u, g.a = v), w !== g.o && ne(u, "width", g.o = w), y !== g.i && ne(u, "max-height", g.i = y), T !== g.n && ne(u, "height", g.n = T), g;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), u;
  })();
  return (() => {
    var u = mE(), p = u.firstChild, g = p.firstChild, m = g.firstChild, f = t;
    return typeof f == "function" ? Fe(f, u) : t = u, E(m, (() => {
      var v = ae(() => !!a());
      return () => v() ? h(Hr, {}) : null;
    })()), E(g, (() => {
      var v = ae(() => {
        var _a5;
        return !!((_a5 = e.content) == null ? void 0 : _a5.clickLink);
      });
      return () => v() ? (() => {
        var w = bE();
        return E(w, c), B((y) => {
          var T = e.content.clickLink.url, b = oe("z-10", a() ? "h-8" : "p-4");
          return T !== y.e && J(w, "href", y.e = T), b !== y.t && Z(w, y.t = b), y;
        }, { e: void 0, t: void 0 }), w;
      })() : (() => {
        var _a5, _b2;
        var w = yE();
        return rt(w, "click", ((_b2 = (_a5 = e.content) == null ? void 0 : _a5.url) == null ? void 0 : _b2.startsWith("data:image/svg")) ? void 0 : l), E(w, c), B(() => Z(w, oe("z-10 cursor-pointer", a() ? "h-8 @xs:h-9" : "p-4"))), w;
      })();
    })(), null), E(u, h(qg, { get isOpen() {
      return n();
    }, onClose: d, get children() {
      var v = fE();
      return B((w) => {
        var _a5, _b2, _c2;
        var y = (_a5 = e.content) == null ? void 0 : _a5.url, T = ((_c2 = (_b2 = e.content) == null ? void 0 : _b2.clickLink) == null ? void 0 : _c2.alt) ?? yd.clickLink.alt;
        return y !== w.e && J(v, "src", w.e = y), T !== w.t && J(v, "alt", w.t = T), w;
      }, { e: void 0, t: void 0 }), v;
    } }), null), B((v) => {
      var w = oe("flex flex-col", e.onTransitionEnd ? "animate-fade-in" : void 0), y = a() ? "64px" : "100%", T = a() ? "32px" : "100%";
      return w !== v.e && Z(u, v.e = w), y !== v.t && ne(m, "width", v.t = y), T !== v.a && ne(m, "height", v.a = T), v;
    }, { e: void 0, t: void 0, a: void 0 }), u;
  })();
};
var kE = ({ bubbleContent: e, typingSettings: t }) => {
  var _a5;
  let r = ((_a5 = e.match(/(\w+)/g)) == null ? void 0 : _a5.length) ?? 0;
  r === 0 && (r = e.length);
  let { enabled: n, speed: o, maxDelay: a } = { enabled: (t == null ? void 0 : t.enabled) ?? ht.typingEmulation.enabled, speed: (t == null ? void 0 : t.speed) ?? ht.typingEmulation.speed, maxDelay: (t == null ? void 0 : t.maxDelay) ?? ht.typingEmulation.maxDelay }, i = n ? r / o * 6e4 : 0;
  return i > a * 1e3 && (i = a * 1e3), i;
};
var Yg = (e) => e.map((t) => t.text ?? Yg(t.children)).join("");
var TE = (e) => "type" in e;
var SE = (e) => "text" in e;
var EE = P("<span>");
var CE = (e, t, r) => {
  let n = "";
  return e && (n += "slate-bold"), t && (n += " slate-italic"), r && (n += " slate-underline"), n;
};
var FE = (e) => (() => {
  var t = EE();
  return E(t, () => e.text), B(() => Z(t, CE(e.bold, e.italic, e.underline))), t;
})();
var PE = P('<a target=_blank rel="noopener noreferrer">');
var _E = P("<ol>");
var IE = P("<ul>");
var OE = P("<li>");
var AE = P("<br>");
var RE = P("<div>");
var gn = (e) => {
  let t = te(() => {
    let n = e.element;
    return SE(n) ? n : void 0;
  }), r = te(() => {
    let n = e.element;
    return TE(n) ? n : void 0;
  });
  return h(ze, { get children() {
    return [h(Q, { get when() {
      return t();
    }, keyed: true, children: (n) => h(FE, n) }), h(Q, { get when() {
      return r();
    }, keyed: true, children: (n) => h(ze, { get children() {
      return [h(Q, { get when() {
        return n.type === "a";
      }, get children() {
        var o = PE();
        return E(o, h(Oe, { get each() {
          return n.children;
        }, children: (a) => h(gn, { element: a }) })), B(() => J(o, "href", n.url)), o;
      } }), h(Q, { get when() {
        return n.type === "ol";
      }, get children() {
        var o = _E();
        return E(o, h(Oe, { get each() {
          return n.children;
        }, children: (a) => h(gn, { element: a }) })), o;
      } }), h(Q, { get when() {
        return e.element.type === "ul";
      }, get children() {
        var o = IE();
        return E(o, h(Oe, { get each() {
          return n.children;
        }, children: (a) => h(gn, { element: a }) })), o;
      } }), h(Q, { get when() {
        return e.element.type === "li";
      }, get children() {
        var o = OE();
        return E(o, h(Oe, { get each() {
          return n.children;
        }, children: (a) => h(gn, { element: a }) })), o;
      } }), h(Q, { get when() {
        return ae(() => n.type === "p" && n.children.length === 1 && "text" in n.children[0])() && Xe(n.children[0].text);
      }, get children() {
        return AE();
      } }), h(Q, { when: true, get children() {
        var o = RE();
        return E(o, h(Oe, { get each() {
          return n.children;
        }, children: (a) => h(gn, { element: a }) })), B(() => J(o, "data-element-type", e.element.type)), o;
      } })];
    } }) })];
  } });
};
var NE = P('<div><div class="flex w-full items-center"><div class="flex relative items-start typebot-host-bubble max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing "data-testid=host-bubble></div><div>');
var DE = 400;
var Yi;
var LE = (e) => {
  let t, [r, n] = M(!!e.onTransitionEnd), o = () => {
    r() && (n(false), setTimeout(() => {
      var _a5;
      (_a5 = e.onTransitionEnd) == null ? void 0 : _a5.call(e, t);
    }, DE));
  };
  return ve(() => {
    var _a5, _b2;
    if (!r) return;
    let a = ((_a5 = e.content) == null ? void 0 : _a5.richText) ? Yg(e.content.richText) : "", i = ((_b2 = e.typingEmulation) == null ? void 0 : _b2.enabled) === false || e.isTypingSkipped ? 0 : kE({ bubbleContent: a, typingSettings: e.typingEmulation });
    Yi = setTimeout(o, i);
  }), ue(() => {
    Yi && clearTimeout(Yi);
  }), (() => {
    var a = NE(), i = a.firstChild, s = i.firstChild, l = s.firstChild, d = l.nextSibling, c = t;
    return typeof c == "function" ? Fe(c, a) : t = a, E(l, (() => {
      var u = ae(() => !!r());
      return () => u() && h(Hr, {});
    })()), E(d, h(Oe, { get each() {
      var _a5;
      return (_a5 = e.content) == null ? void 0 : _a5.richText;
    }, children: (u) => h(gn, { element: u }) })), B((u) => {
      var p = oe("flex flex-col", e.onTransitionEnd ? "animate-fade-in" : void 0), g = r() ? "64px" : "100%", m = r() ? "32px" : "100%", f = oe("overflow-hidden text-fade-in mx-4 my-2 whitespace-pre-wrap slate-html-container relative text-ellipsis", r() ? "opacity-0 h-4 @xs:h-5" : "opacity-100 h-full");
      return p !== u.e && Z(a, u.e = p), g !== u.t && ne(l, "width", u.t = g), m !== u.a && ne(l, "height", u.a = m), f !== u.o && Z(d, u.o = f), u;
    }, { e: void 0, t: void 0, a: void 0, o: void 0 }), a;
  })();
};
var vd = ["youtube", "vimeo", "tiktok", "gumlet"];
var Rr = { height: 400, aspectRatio: "16/9", maxWidth: "100%", areControlsDisplayed: true, isAutoplayEnabled: true };
var ME = "https://www.youtube.com/embed";
var UE = "https://player.vimeo.com/video";
var BE = "https://www.tiktok.com/embed/v2";
var $E = "https://play.gumlet.io/embed";
var zE = { vimeo: UE, youtube: ME, tiktok: BE, gumlet: $E };
var jE = (e) => (e == null ? void 0 : e.isAutoplayEnabled) ?? Rr.isAutoplayEnabled ? (e == null ? void 0 : e.type) === "youtube" || (e == null ? void 0 : e.type) === "vimeo" ? "autoplay=1" : (e == null ? void 0 : e.type) === "gumlet" ? "autoplay=true" : "" : "";
var VE = P("<video>");
var HE = P('<div><iframe class="w-full h-full"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen>');
var GE = P('<div><div class="flex w-full items-center"><div class="flex relative z-10 items-start typebot-host-bubble overflow-hidden w-full max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing z-10 ">');
var WE = 400;
var Ki;
var qE = (e) => {
  let t, [r, n] = M(!!e.onTransitionEnd);
  return ve(() => {
    var _a5, _b2;
    let o = ((_a5 = e.content) == null ? void 0 : _a5.type) && vd.includes((_b2 = e.content) == null ? void 0 : _b2.type) ? 2e3 : 100;
    Ki = setTimeout(() => {
      r() && (n(false), setTimeout(() => {
        var _a6;
        (_a6 = e.onTransitionEnd) == null ? void 0 : _a6.call(e, t);
      }, WE));
    }, o);
  }), ue(() => {
    Ki && clearTimeout(Ki);
  }), (() => {
    var o = GE(), a = o.firstChild, i = a.firstChild, s = i.firstChild, l = t;
    return typeof l == "function" ? Fe(l, o) : t = o, E(s, (() => {
      var d = ae(() => !!r());
      return () => d() && h(Hr, {});
    })()), E(i, h(ze, { get children() {
      return [h(Q, { get when() {
        return ae(() => {
          var _a5;
          return !!((_a5 = e.content) == null ? void 0 : _a5.type);
        })() && e.content.type === "url";
      }, get children() {
        var d = VE();
        return B((c) => {
          var _a5, _b2, _c2, _d2, _e2;
          var u = e.onTransitionEnd ? ((_a5 = e.content) == null ? void 0 : _a5.isAutoplayEnabled) ?? Rr.isAutoplayEnabled : false, p = (_b2 = e.content) == null ? void 0 : _b2.url, g = ((_c2 = e.content) == null ? void 0 : _c2.areControlsDisplayed) ?? Rr.areControlsDisplayed, m = oe("p-4 focus:outline-none w-full z-10 text-fade-in rounded-md", r() ? "opacity-0 h-8 @xs:h-9" : "opacity-100 h-auto"), f = (_d2 = e.content) == null ? void 0 : _d2.aspectRatio, v = ((_e2 = e.content) == null ? void 0 : _e2.maxWidth) ?? Rr.maxWidth;
          return u !== c.e && (d.autoplay = c.e = u), p !== c.t && J(d, "src", c.t = p), g !== c.a && (d.controls = c.a = g), m !== c.o && Z(d, c.o = m), f !== c.i && ne(d, "aspect-ratio", c.i = f), v !== c.n && ne(d, "max-width", c.n = v), c;
        }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), d;
      } }), h(Q, { get when() {
        return ae(() => {
          var _a5;
          return !!((_a5 = e.content) == null ? void 0 : _a5.type);
        })() && vd.includes(e.content.type);
      }, get children() {
        var d = HE(), c = d.firstChild;
        return B((u) => {
          var _a5, _b2, _c2, _d2, _e2, _f2, _g2;
          var p = oe("p-4 z-10 text-fade-in w-full aspect-(--aspect-ratio)", r() ? "opacity-0 h-8 @xs:h-9" : "opacity-100", !((_a5 = e.content) == null ? void 0 : _a5.aspectRatio) && "h-(--height)"), g = (_b2 = e.content) == null ? void 0 : _b2.aspectRatio, m = `${((_c2 = e.content) == null ? void 0 : _c2.height) ?? Rr.height}px`, f = ((_d2 = e.content) == null ? void 0 : _d2.maxWidth) ?? Rr.maxWidth, v = `${zE[(_e2 = e.content) == null ? void 0 : _e2.type]}/${((_f2 = e.content) == null ? void 0 : _f2.id) ?? ""}${((_g2 = e.content) == null ? void 0 : _g2.queryParamsStr) ?? `?${jE(e.content)}`}`;
          return p !== u.e && Z(d, u.e = p), g !== u.t && ne(d, "--aspect-ratio", u.t = g), m !== u.a && ne(d, "--height", u.a = m), f !== u.o && ne(d, "max-width", u.o = f), v !== u.i && J(c, "src", u.i = v), u;
        }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), d;
      } })];
    } }), null), B((d) => {
      var _a5;
      var c = oe("flex flex-col w-full", e.onTransitionEnd ? "animate-fade-in" : void 0), u = r() ? "64px" : "100%", p = r() ? "32px" : "100%", g = ((_a5 = e.content) == null ? void 0 : _a5.maxWidth) ?? Rr.maxWidth;
      return c !== d.e && Z(o, d.e = c), u !== d.t && ne(s, "width", d.t = u), p !== d.a && ne(s, "height", d.a = p), g !== d.o && ne(s, "max-width", d.o = g), d;
    }, { e: void 0, t: void 0, a: void 0, o: void 0 }), o;
  })();
};
var YE = (e) => h(ze, { get children() {
  return [h(Q, { get when() {
    return e.message.type === "text";
  }, get children() {
    return h(LE, { get content() {
      return e.message.content;
    }, get isTypingSkipped() {
      return e.isTypingSkipped;
    }, get typingEmulation() {
      return e.typingEmulation;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    } });
  } }), h(Q, { get when() {
    return e.message.type === "image";
  }, get children() {
    return h(xE, { get content() {
      return e.message.content;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    } });
  } }), h(Q, { get when() {
    return e.message.type === "video";
  }, get children() {
    return h(qE, { get content() {
      return e.message.content;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    } });
  } }), h(Q, { get when() {
    return e.message.type === "embed";
  }, get children() {
    return h(pE, { get content() {
      return e.message.content;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    }, get onCompleted() {
      return e.onCompleted;
    } });
  } }), h(Q, { get when() {
    return e.message.type === "custom-embed";
  }, get children() {
    return h(lE, { get content() {
      return e.message.content;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    }, get onCompleted() {
      return e.onCompleted;
    } });
  } }), h(Q, { get when() {
    return e.message.type === "audio";
  }, get children() {
    return h(aE, { get content() {
      return e.message.content;
    }, get onTransitionEnd() {
      return e.onTransitionEnd;
    } });
  } })];
} });
var { entries: Kg, setPrototypeOf: wd, isFrozen: KE, getPrototypeOf: XE, getOwnPropertyDescriptor: ZE } = Object;
var { freeze: Ze, seal: mt, create: Xg } = Object;
var { apply: Ms, construct: Us } = typeof Reflect < "u" && Reflect;
Ze || (Ze = function(e) {
  return e;
});
mt || (mt = function(e) {
  return e;
});
Ms || (Ms = function(e, t, r) {
  return e.apply(t, r);
});
Us || (Us = function(e, t) {
  return new e(...t);
});
var pa = Je(Array.prototype.forEach);
var JE = Je(Array.prototype.lastIndexOf);
var xd = Je(Array.prototype.pop);
var jn = Je(Array.prototype.push);
var QE = Je(Array.prototype.splice);
var ka = Je(String.prototype.toLowerCase);
var Xi = Je(String.prototype.toString);
var kd = Je(String.prototype.match);
var Vn = Je(String.prototype.replace);
var e2 = Je(String.prototype.indexOf);
var t2 = Je(String.prototype.trim);
var xt = Je(Object.prototype.hasOwnProperty);
var Ke = Je(RegExp.prototype.test);
var Hn = r2(TypeError);
function Je(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
    return Ms(e, t, n);
  };
}
function r2(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
    return Us(e, r);
  };
}
function le(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ka;
  wd && wd(e, null);
  let n = t.length;
  for (; n--; ) {
    let o = t[n];
    if (typeof o == "string") {
      let a = r(o);
      a !== o && (KE(t) || (t[n] = a), o = a);
    }
    e[o] = true;
  }
  return e;
}
function n2(e) {
  for (let t = 0; t < e.length; t++) xt(e, t) || (e[t] = null);
  return e;
}
function Nr(e) {
  let t = Xg(null);
  for (let [r, n] of Kg(e)) xt(e, r) && (Array.isArray(n) ? t[r] = n2(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Nr(n) : t[r] = n);
  return t;
}
function Gn(e, t) {
  for (; e !== null; ) {
    let n = ZE(e, t);
    if (n) {
      if (n.get) return Je(n.get);
      if (typeof n.value == "function") return Je(n.value);
    }
    e = XE(e);
  }
  function r() {
    return null;
  }
  return r;
}
var Td = Ze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Zi = Ze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var Ji = Ze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var o2 = Ze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var Qi = Ze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var a2 = Ze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Sd = Ze(["#text"]);
var Ed = Ze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
var es = Ze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Cd = Ze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var ga = Ze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var i2 = mt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var s2 = mt(/<%[\w\W]*|[\w\W]*%>/gm);
var l2 = mt(/\$\{[\w\W]*/gm);
var c2 = mt(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var d2 = mt(/^aria-[\-\w]+$/);
var Zg = mt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var u2 = mt(/^(?:\w+script|data):/i);
var p2 = mt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var Jg = mt(/^html$/i);
var g2 = mt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Fd = Object.freeze({ __proto__: null, ARIA_ATTR: d2, ATTR_WHITESPACE: p2, CUSTOM_ELEMENT: g2, DATA_ATTR: c2, DOCTYPE_NAME: Jg, ERB_EXPR: s2, IS_ALLOWED_URI: Zg, IS_SCRIPT_OR_DATA: u2, MUSTACHE_EXPR: i2, TMPLIT_EXPR: l2 });
var Wn = { element: 1, attribute: 2, text: 3, cdataSection: 4, entityReference: 5, entityNode: 6, progressingInstruction: 7, comment: 8, document: 9, documentType: 10, documentFragment: 11, notation: 12 };
var h2 = function() {
  return typeof window > "u" ? null : window;
};
var f2 = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function") return null;
  let r = null, n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  let o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, { createHTML(a) {
      return a;
    }, createScriptURL(a) {
      return a;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
var Pd = function() {
  return { afterSanitizeAttributes: [], afterSanitizeElements: [], afterSanitizeShadowDOM: [], beforeSanitizeAttributes: [], beforeSanitizeElements: [], beforeSanitizeShadowDOM: [], uponSanitizeAttribute: [], uponSanitizeElement: [], uponSanitizeShadowNode: [] };
};
function Qg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h2(), t = (k) => Qg(k);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Wn.document || !e.Element) return t.isSupported = false, t;
  let { document: r } = e, n = r, o = n.currentScript, { DocumentFragment: a, HTMLTemplateElement: i, Node: s, Element: l, NodeFilter: d, NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: u, DOMParser: p, trustedTypes: g } = e, m = l.prototype, f = Gn(m, "cloneNode"), v = Gn(m, "remove"), w = Gn(m, "nextSibling"), y = Gn(m, "childNodes"), T = Gn(m, "parentNode");
  if (typeof i == "function") {
    let k = r.createElement("template");
    k.content && k.content.ownerDocument && (r = k.content.ownerDocument);
  }
  let b, S = "", { implementation: _, createNodeIterator: I, createDocumentFragment: x, getElementsByTagName: C } = r, { importNode: R } = n, D = Pd();
  t.isSupported = typeof Kg == "function" && typeof T == "function" && _ && _.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: N, ERB_EXPR: K, TMPLIT_EXPR: F, DATA_ATTR: A, ARIA_ATTR: L, IS_SCRIPT_OR_DATA: X, ATTR_WHITESPACE: O, CUSTOM_ELEMENT: pe } = Fd, { IS_ALLOWED_URI: Ae } = Fd, Te = null, Wr = le({}, [...Td, ...Zi, ...Ji, ...Qi, ...Sd]), ge = null, He = le({}, [...Ed, ...es, ...Cd, ...ga]), we = Object.seal(Xg(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), tr = null, Pe = null, Rn = true, rr = true, xr = false, qr = true, wt = false, gi = true, kr = false, hi = false, fi = false, Yr = false, $o = false, zo = false, _l = true, Il = false, ph = "user-content-", mi = true, Nn = false, Kr = {}, Xr = null, Ol = le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Al = null, Rl = le({}, ["audio", "video", "img", "source", "image", "track"]), bi = null, Nl = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jo = "http://www.w3.org/1998/Math/MathML", Vo = "http://www.w3.org/2000/svg", Ut = "http://www.w3.org/1999/xhtml", Zr = Ut, yi = false, vi = null, gh = le({}, [jo, Vo, Ut], Xi), Ho = le({}, ["mi", "mo", "mn", "ms", "mtext"]), Go = le({}, ["annotation-xml"]), hh = le({}, ["title", "style", "font", "a", "script"]), Dn = null, fh = ["application/xhtml+xml", "text/html"], mh = "text/html", Ue = null, Jr = null, bh = r.createElement("form"), Dl = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, wi = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Jr && Jr === k)) {
      if ((!k || typeof k != "object") && (k = {}), k = Nr(k), Dn = fh.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? mh : k.PARSER_MEDIA_TYPE, Ue = Dn === "application/xhtml+xml" ? Xi : ka, Te = xt(k, "ALLOWED_TAGS") ? le({}, k.ALLOWED_TAGS, Ue) : Wr, ge = xt(k, "ALLOWED_ATTR") ? le({}, k.ALLOWED_ATTR, Ue) : He, vi = xt(k, "ALLOWED_NAMESPACES") ? le({}, k.ALLOWED_NAMESPACES, Xi) : gh, bi = xt(k, "ADD_URI_SAFE_ATTR") ? le(Nr(Nl), k.ADD_URI_SAFE_ATTR, Ue) : Nl, Al = xt(k, "ADD_DATA_URI_TAGS") ? le(Nr(Rl), k.ADD_DATA_URI_TAGS, Ue) : Rl, Xr = xt(k, "FORBID_CONTENTS") ? le({}, k.FORBID_CONTENTS, Ue) : Ol, tr = xt(k, "FORBID_TAGS") ? le({}, k.FORBID_TAGS, Ue) : {}, Pe = xt(k, "FORBID_ATTR") ? le({}, k.FORBID_ATTR, Ue) : {}, Kr = xt(k, "USE_PROFILES") ? k.USE_PROFILES : false, Rn = k.ALLOW_ARIA_ATTR !== false, rr = k.ALLOW_DATA_ATTR !== false, xr = k.ALLOW_UNKNOWN_PROTOCOLS || false, qr = k.ALLOW_SELF_CLOSE_IN_ATTR !== false, wt = k.SAFE_FOR_TEMPLATES || false, gi = k.SAFE_FOR_XML !== false, kr = k.WHOLE_DOCUMENT || false, Yr = k.RETURN_DOM || false, $o = k.RETURN_DOM_FRAGMENT || false, zo = k.RETURN_TRUSTED_TYPE || false, fi = k.FORCE_BODY || false, _l = k.SANITIZE_DOM !== false, Il = k.SANITIZE_NAMED_PROPS || false, mi = k.KEEP_CONTENT !== false, Nn = k.IN_PLACE || false, Ae = k.ALLOWED_URI_REGEXP || Zg, Zr = k.NAMESPACE || Ut, Ho = k.MATHML_TEXT_INTEGRATION_POINTS || Ho, Go = k.HTML_INTEGRATION_POINTS || Go, we = k.CUSTOM_ELEMENT_HANDLING || {}, k.CUSTOM_ELEMENT_HANDLING && Dl(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (we.tagNameCheck = k.CUSTOM_ELEMENT_HANDLING.tagNameCheck), k.CUSTOM_ELEMENT_HANDLING && Dl(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (we.attributeNameCheck = k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (we.allowCustomizedBuiltInElements = k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), wt && (rr = false), $o && (Yr = true), Kr && (Te = le({}, Sd), ge = [], Kr.html === true && (le(Te, Td), le(ge, Ed)), Kr.svg === true && (le(Te, Zi), le(ge, es), le(ge, ga)), Kr.svgFilters === true && (le(Te, Ji), le(ge, es), le(ge, ga)), Kr.mathMl === true && (le(Te, Qi), le(ge, Cd), le(ge, ga))), k.ADD_TAGS && (Te === Wr && (Te = Nr(Te)), le(Te, k.ADD_TAGS, Ue)), k.ADD_ATTR && (ge === He && (ge = Nr(ge)), le(ge, k.ADD_ATTR, Ue)), k.ADD_URI_SAFE_ATTR && le(bi, k.ADD_URI_SAFE_ATTR, Ue), k.FORBID_CONTENTS && (Xr === Ol && (Xr = Nr(Xr)), le(Xr, k.FORBID_CONTENTS, Ue)), mi && (Te["#text"] = true), kr && le(Te, ["html", "head", "body"]), Te.table && (le(Te, ["tbody"]), delete tr.tbody), k.TRUSTED_TYPES_POLICY) {
        if (typeof k.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof k.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        b = k.TRUSTED_TYPES_POLICY, S = b.createHTML("");
      } else b === void 0 && (b = f2(g, o)), b !== null && typeof S == "string" && (S = b.createHTML(""));
      Ze && Ze(k), Jr = k;
    }
  }, Ll = le({}, [...Zi, ...Ji, ...o2]), Ml = le({}, [...Qi, ...a2]), yh = function(k) {
    let H = T(k);
    (!H || !H.tagName) && (H = { namespaceURI: Zr, tagName: "template" });
    let $ = ka(k.tagName), be = ka(H.tagName);
    return vi[k.namespaceURI] ? k.namespaceURI === Vo ? H.namespaceURI === Ut ? $ === "svg" : H.namespaceURI === jo ? $ === "svg" && (be === "annotation-xml" || Ho[be]) : !!Ll[$] : k.namespaceURI === jo ? H.namespaceURI === Ut ? $ === "math" : H.namespaceURI === Vo ? $ === "math" && Go[be] : !!Ml[$] : k.namespaceURI === Ut ? H.namespaceURI === Vo && !Go[be] || H.namespaceURI === jo && !Ho[be] ? false : !Ml[$] && (hh[$] || !Ll[$]) : !!(Dn === "application/xhtml+xml" && vi[k.namespaceURI]) : false;
  }, Tr = function(k) {
    jn(t.removed, { element: k });
    try {
      T(k).removeChild(k);
    } catch {
      v(k);
    }
  }, Wo = function(k, H) {
    try {
      jn(t.removed, { attribute: H.getAttributeNode(k), from: H });
    } catch {
      jn(t.removed, { attribute: null, from: H });
    }
    if (H.removeAttribute(k), k === "is") if (Yr || $o) try {
      Tr(H);
    } catch {
    }
    else try {
      H.setAttribute(k, "");
    } catch {
    }
  }, Ul = function(k) {
    let H = null, $ = null;
    if (fi) k = "<remove></remove>" + k;
    else {
      let Re = kd(k, /^[\r\n\t ]+/);
      $ = Re && Re[0];
    }
    Dn === "application/xhtml+xml" && Zr === Ut && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    let be = b ? b.createHTML(k) : k;
    if (Zr === Ut) try {
      H = new p().parseFromString(be, Dn);
    } catch {
    }
    if (!H || !H.documentElement) {
      H = _.createDocument(Zr, "template", null);
      try {
        H.documentElement.innerHTML = yi ? S : be;
      } catch {
      }
    }
    let $e = H.body || H.documentElement;
    return k && $ && $e.insertBefore(r.createTextNode($), $e.childNodes[0] || null), Zr === Ut ? C.call(H, kr ? "html" : "body")[0] : kr ? H.documentElement : $e;
  }, Bl = function(k) {
    return I.call(k.ownerDocument || k, k, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, xi = function(k) {
    return k instanceof u && (typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || !(k.attributes instanceof c) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function");
  }, $l = function(k) {
    return typeof s == "function" && k instanceof s;
  };
  function Bt(k, H, $) {
    pa(k, (be) => {
      be.call(t, H, $, Jr);
    });
  }
  let zl = function(k) {
    let H = null;
    if (Bt(D.beforeSanitizeElements, k, null), xi(k)) return Tr(k), true;
    let $ = Ue(k.nodeName);
    if (Bt(D.uponSanitizeElement, k, { tagName: $, allowedTags: Te }), k.hasChildNodes() && !$l(k.firstElementChild) && Ke(/<[/\w]/g, k.innerHTML) && Ke(/<[/\w]/g, k.textContent) || k.nodeType === Wn.progressingInstruction || gi && k.nodeType === Wn.comment && Ke(/<[/\w]/g, k.data)) return Tr(k), true;
    if (!Te[$] || tr[$]) {
      if (!tr[$] && Vl($) && (we.tagNameCheck instanceof RegExp && Ke(we.tagNameCheck, $) || we.tagNameCheck instanceof Function && we.tagNameCheck($))) return false;
      if (mi && !Xr[$]) {
        let be = T(k) || k.parentNode, $e = y(k) || k.childNodes;
        if ($e && be) {
          let Re = $e.length;
          for (let $t = Re - 1; $t >= 0; --$t) {
            let ut = f($e[$t], true);
            ut.__removalCount = (k.__removalCount || 0) + 1, be.insertBefore(ut, w(k));
          }
        }
      }
      return Tr(k), true;
    }
    return k instanceof l && !yh(k) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && Ke(/<\/no(script|embed|frames)/i, k.innerHTML) ? (Tr(k), true) : (wt && k.nodeType === Wn.text && (H = k.textContent, pa([N, K, F], (be) => {
      H = Vn(H, be, " ");
    }), k.textContent !== H && (jn(t.removed, { element: k.cloneNode() }), k.textContent = H)), Bt(D.afterSanitizeElements, k, null), false);
  }, jl = function(k, H, $) {
    if (_l && (H === "id" || H === "name") && ($ in r || $ in bh)) return false;
    if (!(rr && !Pe[H] && Ke(A, H)) && !(Rn && Ke(L, H))) {
      if (!ge[H] || Pe[H]) {
        if (!(Vl(k) && (we.tagNameCheck instanceof RegExp && Ke(we.tagNameCheck, k) || we.tagNameCheck instanceof Function && we.tagNameCheck(k)) && (we.attributeNameCheck instanceof RegExp && Ke(we.attributeNameCheck, H) || we.attributeNameCheck instanceof Function && we.attributeNameCheck(H)) || H === "is" && we.allowCustomizedBuiltInElements && (we.tagNameCheck instanceof RegExp && Ke(we.tagNameCheck, $) || we.tagNameCheck instanceof Function && we.tagNameCheck($)))) return false;
      } else if (!bi[H] && !Ke(Ae, Vn($, O, "")) && !((H === "src" || H === "xlink:href" || H === "href") && k !== "script" && e2($, "data:") === 0 && Al[k]) && !(xr && !Ke(X, Vn($, O, ""))) && $) return false;
    }
    return true;
  }, Vl = function(k) {
    return k !== "annotation-xml" && kd(k, pe);
  }, Hl = function(k) {
    Bt(D.beforeSanitizeAttributes, k, null);
    let { attributes: H } = k;
    if (!H || xi(k)) return;
    let $ = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: ge, forceKeepAttr: void 0 }, be = H.length;
    for (; be--; ) {
      let $e = H[be], { name: Re, namespaceURI: $t, value: ut } = $e, Pt = Ue(Re), qe = Re === "value" ? ut : t2(ut);
      if ($.attrName = Pt, $.attrValue = qe, $.keepAttr = true, $.forceKeepAttr = void 0, Bt(D.uponSanitizeAttribute, k, $), qe = $.attrValue, Il && (Pt === "id" || Pt === "name") && (Wo(Re, k), qe = ph + qe), gi && Ke(/((--!?|])>)|<\/(style|title)/i, qe)) {
        Wo(Re, k);
        continue;
      }
      if ($.forceKeepAttr || (Wo(Re, k), !$.keepAttr)) continue;
      if (!qr && Ke(/\/>/i, qe)) {
        Wo(Re, k);
        continue;
      }
      wt && pa([N, K, F], (wh) => {
        qe = Vn(qe, wh, " ");
      });
      let Gl = Ue(k.nodeName);
      if (jl(Gl, Pt, qe)) {
        if (b && typeof g == "object" && typeof g.getAttributeType == "function" && !$t) switch (g.getAttributeType(Gl, Pt)) {
          case "TrustedHTML": {
            qe = b.createHTML(qe);
            break;
          }
          case "TrustedScriptURL": {
            qe = b.createScriptURL(qe);
            break;
          }
        }
        try {
          $t ? k.setAttributeNS($t, Re, qe) : k.setAttribute(Re, qe), xi(k) ? Tr(k) : xd(t.removed);
        } catch {
        }
      }
    }
    Bt(D.afterSanitizeAttributes, k, null);
  }, vh = function k(H) {
    let $ = null, be = Bl(H);
    for (Bt(D.beforeSanitizeShadowDOM, H, null); $ = be.nextNode(); ) Bt(D.uponSanitizeShadowNode, $, null), zl($), Hl($), $.content instanceof a && k($.content);
    Bt(D.afterSanitizeShadowDOM, H, null);
  };
  return t.sanitize = function(k) {
    let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = null, be = null, $e = null, Re = null;
    if (yi = !k, yi && (k = "<!-->"), typeof k != "string" && !$l(k)) if (typeof k.toString == "function") {
      if (k = k.toString(), typeof k != "string") throw Hn("dirty is not a string, aborting");
    } else throw Hn("toString is not a function");
    if (!t.isSupported) return k;
    if (hi || wi(H), t.removed = [], typeof k == "string" && (Nn = false), Nn) {
      if (k.nodeName) {
        let Pt = Ue(k.nodeName);
        if (!Te[Pt] || tr[Pt]) throw Hn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (k instanceof s) $ = Ul("<!---->"), be = $.ownerDocument.importNode(k, true), be.nodeType === Wn.element && be.nodeName === "BODY" || be.nodeName === "HTML" ? $ = be : $.appendChild(be);
    else {
      if (!Yr && !wt && !kr && k.indexOf("<") === -1) return b && zo ? b.createHTML(k) : k;
      if ($ = Ul(k), !$) return Yr ? null : zo ? S : "";
    }
    $ && fi && Tr($.firstChild);
    let $t = Bl(Nn ? k : $);
    for (; $e = $t.nextNode(); ) zl($e), Hl($e), $e.content instanceof a && vh($e.content);
    if (Nn) return k;
    if (Yr) {
      if ($o) for (Re = x.call($.ownerDocument); $.firstChild; ) Re.appendChild($.firstChild);
      else Re = $;
      return (ge.shadowroot || ge.shadowrootmode) && (Re = R.call(n, Re, true)), Re;
    }
    let ut = kr ? $.outerHTML : $.innerHTML;
    return kr && Te["!doctype"] && $.ownerDocument && $.ownerDocument.doctype && $.ownerDocument.doctype.name && Ke(Jg, $.ownerDocument.doctype.name) && (ut = "<!DOCTYPE " + $.ownerDocument.doctype.name + `>
` + ut), wt && pa([N, K, F], (Pt) => {
      ut = Vn(ut, Pt, " ");
    }), b && zo ? b.createHTML(ut) : ut;
  }, t.setConfig = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wi(k), hi = true;
  }, t.clearConfig = function() {
    Jr = null, hi = false;
  }, t.isValidAttribute = function(k, H, $) {
    Jr || wi({});
    let be = Ue(k), $e = Ue(H);
    return jl(be, $e, $);
  }, t.addHook = function(k, H) {
    typeof H == "function" && jn(D[k], H);
  }, t.removeHook = function(k, H) {
    if (H !== void 0) {
      let $ = JE(D[k], H);
      return $ === -1 ? void 0 : QE(D[k], $, 1)[0];
    }
    return xd(D[k]);
  }, t.removeHooks = function(k) {
    D[k] = [];
  }, t.removeAllHooks = function() {
    D = Pd();
  }, t;
}
var _d = Qg();
function El() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var Gr = El();
function eh(e) {
  Gr = e;
}
var th = /[&<>"']/;
var m2 = new RegExp(th.source, "g");
var rh = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var b2 = new RegExp(rh.source, "g");
var y2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Id = (e) => y2[e];
function at(e, t) {
  if (t) {
    if (th.test(e)) return e.replace(m2, Id);
  } else if (rh.test(e)) return e.replace(b2, Id);
  return e;
}
var v2 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function w2(e) {
  return e.replace(v2, (t, r) => (r = r.toLowerCase(), r === "colon" ? ":" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : ""));
}
var x2 = /(^|[^\[])\^/g;
function me(e, t) {
  e = typeof e == "string" ? e : e.source, t = t || "";
  let r = { replace: (n, o) => (o = typeof o == "object" && "source" in o ? o.source : o, o = o.replace(x2, "$1"), e = e.replace(n, o), r), getRegex: () => new RegExp(e, t) };
  return r;
}
function Od(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
var Ua = { exec: () => null };
function Ad(e, t) {
  let r = e.replace(/\|/g, (a, i, s) => {
    let l = false, d = i;
    for (; --d >= 0 && s[d] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), n = r.split(/ \|/), o = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t) if (n.length > t) n.splice(t);
  else for (; n.length < t; ) n.push("");
  for (; o < n.length; o++) n[o] = n[o].trim().replace(/\\\|/g, "|");
  return n;
}
function ts(e, t, r) {
  let n = e.length;
  if (n === 0) return "";
  let o = 0;
  for (; o < n; ) {
    let a = e.charAt(n - o - 1);
    if (a === t && !r) o++;
    else if (a !== t && r) o++;
    else break;
  }
  return e.slice(0, n - o);
}
function k2(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < e.length; n++) if (e[n] === "\\") n++;
  else if (e[n] === t[0]) r++;
  else if (e[n] === t[1] && (r--, r < 0)) return n;
  return -1;
}
function Rd(e, t, r, n) {
  let o = t.href, a = t.title ? at(t.title) : null, i = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    n.state.inLink = true;
    let s = { type: "link", raw: r, href: o, title: a, text: i, tokens: n.inlineTokens(i) };
    return n.state.inLink = false, s;
  }
  return { type: "image", raw: r, href: o, title: a, text: at(i) };
}
function T2(e, t) {
  let r = e.match(/^(\s+)(?:```)/);
  if (r === null) return t;
  let n = r[1];
  return t.split(`
`).map((o) => {
    let a = o.match(/^\s+/);
    if (a === null) return o;
    let [i] = a;
    return i.length >= n.length ? o.slice(n.length) : o;
  }).join(`
`);
}
var Ba = class {
  constructor(e) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e || Gr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let r = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : ts(r, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let r = t[0], n = T2(r, t[3] || "");
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2], text: n };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        let n = ts(r, "#");
        (this.options.pedantic || !n || / $/.test(n)) && (r = n.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: t[0] };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = t[0].replace(/^ *>[ \t]?/gm, ""), n = this.lexer.state.top;
      this.lexer.state.top = true;
      let o = this.lexer.blockTokens(r);
      return this.lexer.state.top = n, { type: "blockquote", raw: t[0], tokens: o, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim(), n = r.length > 1, o = { type: "list", raw: "", ordered: n, start: n ? +r.slice(0, -1) : "", loose: false, items: [] };
      r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = n ? r : "[*+-]");
      let a = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), i = "", s = "", l = false;
      for (; e; ) {
        let d = false;
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        i = t[0], e = e.substring(i.length);
        let c = t[2].split(`
`, 1)[0].replace(/^\t+/, (v) => " ".repeat(3 * v.length)), u = e.split(`
`, 1)[0], p = 0;
        this.options.pedantic ? (p = 2, s = c.trimStart()) : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, s = c.slice(p), p += t[1].length);
        let g = false;
        if (!c && /^ *$/.test(u) && (i += u + `
`, e = e.substring(u.length + 1), d = true), !d) {
          let v = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), w = new RegExp(`^ {0,${Math.min(3, p - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), y = new RegExp(`^ {0,${Math.min(3, p - 1)}}(?:\`\`\`|~~~)`), T = new RegExp(`^ {0,${Math.min(3, p - 1)}}#`);
          for (; e; ) {
            let b = e.split(`
`, 1)[0];
            if (u = b, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), y.test(u) || T.test(u) || v.test(u) || w.test(e)) break;
            if (u.search(/[^ ]/) >= p || !u.trim()) s += `
` + u.slice(p);
            else {
              if (g || c.search(/[^ ]/) >= 4 || y.test(c) || T.test(c) || w.test(c)) break;
              s += `
` + u;
            }
            !g && !u.trim() && (g = true), i += b + `
`, e = e.substring(b.length + 1), c = u.slice(p);
          }
        }
        o.loose || (l ? o.loose = true : /\n *\n *$/.test(i) && (l = true));
        let m = null, f;
        this.options.gfm && (m = /^\[[ xX]\] /.exec(s), m && (f = m[0] !== "[ ] ", s = s.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: i, task: !!m, checked: f, loose: false, text: s, tokens: [] }), o.raw += i;
      }
      o.items[o.items.length - 1].raw = i.trimEnd(), o.items[o.items.length - 1].text = s.trimEnd(), o.raw = o.raw.trimEnd();
      for (let d = 0; d < o.items.length; d++) if (this.lexer.state.top = false, o.items[d].tokens = this.lexer.blockTokens(o.items[d].text, []), !o.loose) {
        let c = o.items[d].tokens.filter((p) => p.type === "space"), u = c.length > 0 && c.some((p) => /\n.*\n/.test(p.raw));
        o.loose = u;
      }
      if (o.loose) for (let d = 0; d < o.items.length; d++) o.items[d].loose = true;
      return o;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let r = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: n, title: o };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (t) {
      if (!/[:|]/.test(t[2])) return;
      let r = { type: "table", raw: t[0], header: Ad(t[1]).map((n) => ({ text: n, tokens: [] })), align: t[2].replace(/^\||\| *$/g, "").split("|"), rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [] };
      if (r.header.length === r.align.length) {
        let n = r.align.length, o, a, i, s;
        for (o = 0; o < n; o++) {
          let l = r.align[o];
          l && (/^ *-+: *$/.test(l) ? r.align[o] = "right" : /^ *:-+: *$/.test(l) ? r.align[o] = "center" : /^ *:-+ *$/.test(l) ? r.align[o] = "left" : r.align[o] = null);
        }
        for (n = r.rows.length, o = 0; o < n; o++) r.rows[o] = Ad(r.rows[o], r.header.length).map((l) => ({ text: l, tokens: [] }));
        for (n = r.header.length, a = 0; a < n; a++) r.header[a].tokens = this.lexer.inline(r.header[a].text);
        for (n = r.rows.length, a = 0; a < n; a++) for (s = r.rows[a], i = 0; i < s.length; i++) s[i].tokens = this.lexer.inline(s[i].text);
        return r;
      }
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: at(t[1]) };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return;
        let a = ts(r.slice(0, -1), "\\");
        if ((r.length - a.length) % 2 === 0) return;
      } else {
        let a = k2(t[2], "()");
        if (a > -1) {
          let i = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, i).trim(), t[3] = "";
        }
      }
      let n = t[2], o = "";
      if (this.options.pedantic) {
        let a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
        a && (n = a[1], o = a[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return n = n.trim(), /^</.test(n) && (this.options.pedantic && !/>$/.test(r) ? n = n.slice(1) : n = n.slice(1, -1)), Rd(t, { href: n && n.replace(this.rules.inline._escapes, "$1"), title: o && o.replace(this.rules.inline._escapes, "$1") }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let n = (r[2] || r[1]).replace(/\s+/g, " ");
      if (n = t[n.toLowerCase()], !n) {
        let o = r[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return Rd(r, n, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let n = this.rules.inline.emStrong.lDelim.exec(e);
    if (!(!n || n[3] && r.match(/[\p{L}\p{N}]/u)) && (!(n[1] || n[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      let o = [...n[0]].length - 1, a, i, s = o, l = 0, d = n[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (d.lastIndex = 0, t = t.slice(-1 * e.length + n[0].length - 1); (n = d.exec(t)) != null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a) continue;
        if (i = [...a].length, n[3] || n[4]) {
          s += i;
          continue;
        } else if ((n[5] || n[6]) && o % 3 && !((o + i) % 3)) {
          l += i;
          continue;
        }
        if (s -= i, s > 0) continue;
        i = Math.min(i, i + s + l);
        let c = [...e].slice(0, o + n.index + i + 1).join("");
        if (Math.min(o, i) % 2) {
          let p = c.slice(1, -1);
          return { type: "em", raw: c, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        let u = c.slice(2, -2);
        return { type: "strong", raw: c, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " "), n = /[^ ]/.test(r), o = /^ /.test(r) && / $/.test(r);
      return n && o && (r = r.substring(1, r.length - 1)), r = at(r, true), { type: "codespan", raw: t[0], text: r };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, n;
      return t[2] === "@" ? (r = at(t[1]), n = "mailto:" + r) : (r = at(t[1]), n = r), { type: "link", raw: t[0], text: r, href: n, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, n;
      if (t[2] === "@") r = at(t[0]), n = "mailto:" + r;
      else {
        let o;
        do
          o = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0];
        while (o !== t[0]);
        r = at(t[0]), t[1] === "www." ? n = "http://" + t[0] : n = t[0];
      }
      return { type: "link", raw: t[0], text: r, href: n, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = at(t[0]), { type: "text", raw: t[0], text: r };
    }
  }
};
var ee = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: Ua, lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/ };
ee._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
ee._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
ee.def = me(ee.def).replace("label", ee._label).replace("title", ee._title).getRegex();
ee.bullet = /(?:[*+-]|\d{1,9}[.)])/;
ee.listItemStart = me(/^( *)(bull) */).replace("bull", ee.bullet).getRegex();
ee.list = me(ee.list).replace(/bull/g, ee.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + ee.def.source + ")").getRegex();
ee._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
ee._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
ee.html = me(ee.html, "i").replace("comment", ee._comment).replace("tag", ee._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
ee.lheading = me(ee.lheading).replace(/bull/g, ee.bullet).getRegex();
ee.paragraph = me(ee._paragraph).replace("hr", ee.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee._tag).getRegex();
ee.blockquote = me(ee.blockquote).replace("paragraph", ee.paragraph).getRegex();
ee.normal = { ...ee };
ee.gfm = { ...ee.normal, table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" };
ee.gfm.table = me(ee.gfm.table).replace("hr", ee.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee._tag).getRegex();
ee.gfm.paragraph = me(ee._paragraph).replace("hr", ee.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", ee.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ee._tag).getRegex();
ee.pedantic = { ...ee.normal, html: me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ee._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ua, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: me(ee.normal._paragraph).replace("hr", ee.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ee.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() };
var j = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: Ua, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: Ua, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^((?![*_])[\spunctuation])/ };
j._punctuation = "\\p{P}$+<=>`^|~";
j.punctuation = me(j.punctuation, "u").replace(/punctuation/g, j._punctuation).getRegex();
j.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
j.anyPunctuation = /\\[punct]/g;
j._escapes = /\\([punct])/g;
j._comment = me(ee._comment).replace("(?:-->|$)", "-->").getRegex();
j.emStrong.lDelim = me(j.emStrong.lDelim, "u").replace(/punct/g, j._punctuation).getRegex();
j.emStrong.rDelimAst = me(j.emStrong.rDelimAst, "gu").replace(/punct/g, j._punctuation).getRegex();
j.emStrong.rDelimUnd = me(j.emStrong.rDelimUnd, "gu").replace(/punct/g, j._punctuation).getRegex();
j.anyPunctuation = me(j.anyPunctuation, "gu").replace(/punct/g, j._punctuation).getRegex();
j._escapes = me(j._escapes, "gu").replace(/punct/g, j._punctuation).getRegex();
j._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
j._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
j.autolink = me(j.autolink).replace("scheme", j._scheme).replace("email", j._email).getRegex();
j._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
j.tag = me(j.tag).replace("comment", j._comment).replace("attribute", j._attribute).getRegex();
j._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
j._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
j._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
j.link = me(j.link).replace("label", j._label).replace("href", j._href).replace("title", j._title).getRegex();
j.reflink = me(j.reflink).replace("label", j._label).replace("ref", ee._label).getRegex();
j.nolink = me(j.nolink).replace("ref", ee._label).getRegex();
j.reflinkSearch = me(j.reflinkSearch, "g").replace("reflink", j.reflink).replace("nolink", j.nolink).getRegex();
j.normal = { ...j };
j.pedantic = { ...j.normal, strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: me(/^!?\[(label)\]\((.*?)\)/).replace("label", j._label).getRegex(), reflink: me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", j._label).getRegex() };
j.gfm = { ...j.normal, escape: me(j.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
j.gfm.url = me(j.gfm.url, "i").replace("email", j.gfm._extended_email).getRegex();
j.breaks = { ...j.gfm, br: me(j.br).replace("{2,}", "*").getRegex(), text: me(j.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var Lr = class Bs {
  constructor(t) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Gr, this.options.tokenizer = this.options.tokenizer || new Ba(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { block: ee.normal, inline: j.normal };
    this.options.pedantic ? (r.block = ee.pedantic, r.inline = j.pedantic) : this.options.gfm && (r.block = ee.gfm, this.options.breaks ? r.inline = j.breaks : r.inline = j.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: ee, inline: j };
  }
  static lex(t, r) {
    return new Bs(r).lex(t);
  }
  static lexInline(t, r) {
    return new Bs(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    let r;
    for (; r = this.inlineQueue.shift(); ) this.inlineTokens(r.src, r.tokens);
    return this.tokens;
  }
  blockTokens(t, r = []) {
    this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (s, l, d) => l + "    ".repeat(d.length));
    let n, o, a, i;
    for (; t; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => (n = s.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), true) : false))) {
      if (n = this.tokenizer.space(t)) {
        t = t.substring(n.raw.length), n.raw.length === 1 && r.length > 0 ? r[r.length - 1].raw += `
` : r.push(n);
        continue;
      }
      if (n = this.tokenizer.code(t)) {
        t = t.substring(n.raw.length), o = r[r.length - 1], o && (o.type === "paragraph" || o.type === "text") ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.fences(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.heading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.hr(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.blockquote(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.list(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.html(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.def(t)) {
        t = t.substring(n.raw.length), o = r[r.length - 1], o && (o.type === "paragraph" || o.type === "text") ? (o.raw += `
` + n.raw, o.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title });
        continue;
      }
      if (n = this.tokenizer.table(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.lheading(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (a = t, this.options.extensions && this.options.extensions.startBlock) {
        let s = 1 / 0, l = t.slice(1), d;
        this.options.extensions.startBlock.forEach((c) => {
          d = c.call({ lexer: this }, l), typeof d == "number" && d >= 0 && (s = Math.min(s, d));
        }), s < 1 / 0 && s >= 0 && (a = t.substring(0, s + 1));
      }
      if (this.state.top && (n = this.tokenizer.paragraph(a))) {
        o = r[r.length - 1], i && o.type === "paragraph" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : r.push(n), i = a.length !== t.length, t = t.substring(n.raw.length);
        continue;
      }
      if (n = this.tokenizer.text(t)) {
        t = t.substring(n.raw.length), o = r[r.length - 1], o && o.type === "text" ? (o.raw += `
` + n.raw, o.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : r.push(n);
        continue;
      }
      if (t) {
        let s = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let n, o, a, i = t, s, l, d;
    if (this.tokens.links) {
      let c = Object.keys(this.tokens.links);
      if (c.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) c.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, s.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; ) if (l || (d = ""), l = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((c) => (n = c.call({ lexer: this }, t, r)) ? (t = t.substring(n.raw.length), r.push(n), true) : false))) {
      if (n = this.tokenizer.escape(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.tag(t)) {
        t = t.substring(n.raw.length), o = r[r.length - 1], o && n.type === "text" && o.type === "text" ? (o.raw += n.raw, o.text += n.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.link(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(n.raw.length), o = r[r.length - 1], o && n.type === "text" && o.type === "text" ? (o.raw += n.raw, o.text += n.text) : r.push(n);
        continue;
      }
      if (n = this.tokenizer.emStrong(t, i, d)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.codespan(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.br(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.del(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (n = this.tokenizer.autolink(t)) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (!this.state.inLink && (n = this.tokenizer.url(t))) {
        t = t.substring(n.raw.length), r.push(n);
        continue;
      }
      if (a = t, this.options.extensions && this.options.extensions.startInline) {
        let c = 1 / 0, u = t.slice(1), p;
        this.options.extensions.startInline.forEach((g) => {
          p = g.call({ lexer: this }, u), typeof p == "number" && p >= 0 && (c = Math.min(c, p));
        }), c < 1 / 0 && c >= 0 && (a = t.substring(0, c + 1));
      }
      if (n = this.tokenizer.inlineText(a)) {
        t = t.substring(n.raw.length), n.raw.slice(-1) !== "_" && (d = n.raw.slice(-1)), l = true, o = r[r.length - 1], o && o.type === "text" ? (o.raw += n.raw, o.text += n.text) : r.push(n);
        continue;
      }
      if (t) {
        let c = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(c);
          break;
        } else throw new Error(c);
      }
    }
    return r;
  }
};
var $a = class {
  constructor(e) {
    __publicField(this, "options");
    this.options = e || Gr;
  }
  code(e, t, r) {
    var _a5;
    let n = (_a5 = (t || "").match(/^\S*/)) == null ? void 0 : _a5[0];
    return e = e.replace(/\n$/, "") + `
`, n ? '<pre><code class="language-' + at(n) + '">' + (r ? e : at(e, true)) + `</code></pre>
` : "<pre><code>" + (r ? e : at(e, true)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    let n = t ? "ol" : "ul", o = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + n + o + `>
` + e + "</" + n + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    let r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    let n = Od(e);
    if (n === null) return r;
    e = n;
    let o = '<a href="' + e + '"';
    return t && (o += ' title="' + t + '"'), o += ">" + r + "</a>", o;
  }
  image(e, t, r) {
    let n = Od(e);
    if (n === null) return r;
    e = n;
    let o = `<img src="${e}" alt="${r}"`;
    return t && (o += ` title="${t}"`), o += ">", o;
  }
  text(e) {
    return e;
  }
};
var Cl = class {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
};
var Mr = class $s {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = t || Gr, this.options.renderer = this.options.renderer || new $a(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Cl();
  }
  static parse(t, r) {
    return new $s(r).parse(t);
  }
  static parseInline(t, r) {
    return new $s(r).parseInline(t);
  }
  parse(t, r = true) {
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let a = t[o];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        let i = a, s = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (s !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(i.type)) {
          n += s || "";
          continue;
        }
      }
      switch (a.type) {
        case "space":
          continue;
        case "hr": {
          n += this.renderer.hr();
          continue;
        }
        case "heading": {
          let i = a;
          n += this.renderer.heading(this.parseInline(i.tokens), i.depth, w2(this.parseInline(i.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          let i = a;
          n += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          let i = a, s = "", l = "";
          for (let c = 0; c < i.header.length; c++) l += this.renderer.tablecell(this.parseInline(i.header[c].tokens), { header: true, align: i.align[c] });
          s += this.renderer.tablerow(l);
          let d = "";
          for (let c = 0; c < i.rows.length; c++) {
            let u = i.rows[c];
            l = "";
            for (let p = 0; p < u.length; p++) l += this.renderer.tablecell(this.parseInline(u[p].tokens), { header: false, align: i.align[p] });
            d += this.renderer.tablerow(l);
          }
          n += this.renderer.table(s, d);
          continue;
        }
        case "blockquote": {
          let i = a, s = this.parse(i.tokens);
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          let i = a, s = i.ordered, l = i.start, d = i.loose, c = "";
          for (let u = 0; u < i.items.length; u++) {
            let p = i.items[u], g = p.checked, m = p.task, f = "";
            if (p.task) {
              let v = this.renderer.checkbox(!!g);
              d ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = v + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = v + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: v + " " }) : f += v + " ";
            }
            f += this.parse(p.tokens, d), c += this.renderer.listitem(f, m, !!g);
          }
          n += this.renderer.list(c, s, l);
          continue;
        }
        case "html": {
          let i = a;
          n += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          let i = a;
          n += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = a, s = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; o + 1 < t.length && t[o + 1].type === "text"; ) i = t[++o], s += `
` + (i.tokens ? this.parseInline(i.tokens) : i.text);
          n += r ? this.renderer.paragraph(s) : s;
          continue;
        }
        default: {
          let i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
  parseInline(t, r) {
    r = r || this.renderer;
    let n = "";
    for (let o = 0; o < t.length; o++) {
      let a = t[o];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type]) {
        let i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          n += i || "";
          continue;
        }
      }
      switch (a.type) {
        case "escape": {
          let i = a;
          n += r.text(i.text);
          break;
        }
        case "html": {
          let i = a;
          n += r.html(i.text);
          break;
        }
        case "link": {
          let i = a;
          n += r.link(i.href, i.title, this.parseInline(i.tokens, r));
          break;
        }
        case "image": {
          let i = a;
          n += r.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          let i = a;
          n += r.strong(this.parseInline(i.tokens, r));
          break;
        }
        case "em": {
          let i = a;
          n += r.em(this.parseInline(i.tokens, r));
          break;
        }
        case "codespan": {
          let i = a;
          n += r.codespan(i.text);
          break;
        }
        case "br": {
          n += r.br();
          break;
        }
        case "del": {
          let i = a;
          n += r.del(this.parseInline(i.tokens, r));
          break;
        }
        case "text": {
          let i = a;
          n += r.text(i.text);
          break;
        }
        default: {
          let i = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return n;
  }
};
var _a3;
var Ta = (_a3 = class {
  constructor(e) {
    __publicField(this, "options");
    this.options = e || Gr;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
}, __publicField(_a3, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess"])), _a3);
var _S2_instances, e_fn, t_fn, _a4;
var S2 = (_a4 = class {
  constructor(...e) {
    __privateAdd(this, _S2_instances);
    __publicField(this, "defaults", El());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", __privateMethod(this, _S2_instances, e_fn).call(this, Lr.lex, Mr.parse));
    __publicField(this, "parseInline", __privateMethod(this, _S2_instances, e_fn).call(this, Lr.lexInline, Mr.parseInline));
    __publicField(this, "Parser", Mr);
    __publicField(this, "parser", Mr.parse);
    __publicField(this, "Renderer", $a);
    __publicField(this, "TextRenderer", Cl);
    __publicField(this, "Lexer", Lr);
    __publicField(this, "lexer", Lr.lex);
    __publicField(this, "Tokenizer", Ba);
    __publicField(this, "Hooks", Ta);
    this.use(...e);
  }
  walkTokens(e, t) {
    var _a5, _b2;
    let r = [];
    for (let n of e) switch (r = r.concat(t.call(this, n)), n.type) {
      case "table": {
        let o = n;
        for (let a of o.header) r = r.concat(this.walkTokens(a.tokens, t));
        for (let a of o.rows) for (let i of a) r = r.concat(this.walkTokens(i.tokens, t));
        break;
      }
      case "list": {
        let o = n;
        r = r.concat(this.walkTokens(o.items, t));
        break;
      }
      default: {
        let o = n;
        ((_b2 = (_a5 = this.defaults.extensions) == null ? void 0 : _a5.childTokens) == null ? void 0 : _b2[o.type]) ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
          r = r.concat(this.walkTokens(o[a], t));
        }) : o.tokens && (r = r.concat(this.walkTokens(o.tokens, t)));
      }
    }
    return r;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      let n = { ...r };
      if (n.async = this.defaults.async || n.async || false, r.extensions && (r.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let a = t.renderers[o.name];
          a ? t.renderers[o.name] = function(...i) {
            let s = o.renderer.apply(this, i);
            return s === false && (s = a.apply(this, i)), s;
          } : t.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = t[o.level];
          a ? a.unshift(o.tokenizer) : t[o.level] = [o.tokenizer], o.start && (o.level === "block" ? t.startBlock ? t.startBlock.push(o.start) : t.startBlock = [o.start] : o.level === "inline" && (t.startInline ? t.startInline.push(o.start) : t.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (t.childTokens[o.name] = o.childTokens);
      }), n.extensions = t), r.renderer) {
        let o = this.defaults.renderer || new $a(this.defaults);
        for (let a in r.renderer) {
          let i = r.renderer[a], s = a, l = o[s];
          o[s] = (...d) => {
            let c = i.apply(o, d);
            return c === false && (c = l.apply(o, d)), c || "";
          };
        }
        n.renderer = o;
      }
      if (r.tokenizer) {
        let o = this.defaults.tokenizer || new Ba(this.defaults);
        for (let a in r.tokenizer) {
          let i = r.tokenizer[a], s = a, l = o[s];
          o[s] = (...d) => {
            let c = i.apply(o, d);
            return c === false && (c = l.apply(o, d)), c;
          };
        }
        n.tokenizer = o;
      }
      if (r.hooks) {
        let o = this.defaults.hooks || new Ta();
        for (let a in r.hooks) {
          let i = r.hooks[a], s = a, l = o[s];
          Ta.passThroughHooks.has(a) ? o[s] = (d) => {
            if (this.defaults.async) return Promise.resolve(i.call(o, d)).then((u) => l.call(o, u));
            let c = i.call(o, d);
            return l.call(o, c);
          } : o[s] = (...d) => {
            let c = i.apply(o, d);
            return c === false && (c = l.apply(o, d)), c;
          };
        }
        n.hooks = o;
      }
      if (r.walkTokens) {
        let o = this.defaults.walkTokens, a = r.walkTokens;
        n.walkTokens = function(i) {
          let s = [];
          return s.push(a.call(this, i)), o && (s = s.concat(o.call(this, i))), s;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
}, _S2_instances = new WeakSet(), e_fn = function(e, t) {
  return (r, n) => {
    let o = { ...n }, a = { ...this.defaults, ...o };
    this.defaults.async === true && o.async === false && (a.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), a.async = true);
    let i = __privateMethod(this, _S2_instances, t_fn).call(this, !!a.silent, !!a.async);
    if (typeof r > "u" || r === null) return i(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (a.hooks && (a.hooks.options = a), a.async) return Promise.resolve(a.hooks ? a.hooks.preprocess(r) : r).then((s) => e(s, a)).then((s) => a.walkTokens ? Promise.all(this.walkTokens(s, a.walkTokens)).then(() => s) : s).then((s) => t(s, a)).then((s) => a.hooks ? a.hooks.postprocess(s) : s).catch(i);
    try {
      a.hooks && (r = a.hooks.preprocess(r));
      let s = e(r, a);
      a.walkTokens && this.walkTokens(s, a.walkTokens);
      let l = t(s, a);
      return a.hooks && (l = a.hooks.postprocess(l)), l;
    } catch (s) {
      return i(s);
    }
  };
}, t_fn = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      let n = "<p>An error occurred:</p><pre>" + at(r.message + "", true) + "</pre>";
      return t ? Promise.resolve(n) : n;
    }
    if (t) return Promise.reject(r);
    throw r;
  };
}, _a4);
var zr = new S2();
function fe(e, t) {
  return zr.parse(e, t);
}
fe.options = fe.setOptions = function(e) {
  return zr.setOptions(e), fe.defaults = zr.defaults, eh(fe.defaults), fe;
};
fe.getDefaults = El;
fe.defaults = Gr;
fe.use = function(...e) {
  return zr.use(...e), fe.defaults = zr.defaults, eh(fe.defaults), fe;
};
fe.walkTokens = function(e, t) {
  return zr.walkTokens(e, t);
};
fe.parseInline = zr.parseInline;
fe.Parser = Mr;
fe.parser = Mr.parse;
fe.Renderer = $a;
fe.TextRenderer = Cl;
fe.Lexer = Lr;
fe.lexer = Lr.lex;
fe.Tokenizer = Ba;
fe.Hooks = Ta;
fe.parse = fe;
var SI = fe.options;
var EI = fe.setOptions;
var CI = fe.use;
var FI = fe.walkTokens;
var PI = fe.parseInline;
var _I = Mr.parse;
var II = Lr.lex;
var E2 = P('<div class="flex flex-col animate-fade-in typebot-streaming-container"><div class="flex w-full items-center"><div class="flex relative items-start typebot-host-bubble max-w-full"><div class="flex items-center absolute px-4 py-2 bubble-typing "data-testid=host-bubble></div><div class="flex flex-col overflow-hidden text-fade-in mx-4 my-2 relative text-ellipsis h-full gap-6">');
var C2 = P("<span>");
var F2 = (e) => {
  fe.use({ renderer: { link: (r, n, o) => `<a href="${r}" target="_blank" rel="noopener noreferrer">${o}</a>` } });
  let t = te(() => {
    var _a5;
    return Array.isArray(e.content) ? e.content : ((_a5 = e.content.split("```").flatMap((r, n) => n % 2 === 0 ? r.split(`

`).map((o) => _d.sanitize(fe.parse(o.replace(/【.+】/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;"), { breaks: true }), { ADD_ATTR: ["target"] })) : [_d.sanitize(fe.parse("```" + r + "```".replace(/</g, "&lt;").replace(/>/g, "&gt;"), { breaks: true }), { ADD_ATTR: ["target"] })])) == null ? void 0 : _a5.filter(Ne)) ?? [];
  });
  return (() => {
    var r = E2(), n = r.firstChild, o = n.firstChild, a = o.firstChild, i = a.nextSibling;
    return ne(a, "width", "100%"), ne(a, "height", "100%"), E(i, h(Oe, { get each() {
      return t();
    }, children: (s) => (() => {
      var l = C2();
      return l.innerHTML = s, l;
    })() })), r;
  })();
};
var nh = { provider: "Stripe", labels: { button: "Pay", success: "Success" }, retryMessageContent: "Payment failed. Please, try again.", currency: "USD" };
var za = { buttonLabel: er, searchInputPlaceholder: "Filter the options...", isMultipleChoice: false, isSearchable: false, areInitialSearchButtonsVisible: true };
var P2 = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
var _2 = /CrOS/;
var I2 = /android|ipad|playbook|silk/i;
var bt = (e) => {
  let t = navigator.userAgent, r = P2.test(t) && !_2.test(t) || !!(e == null ? void 0 : e.includeTablet) && I2.test(t);
  return !r && (e == null ? void 0 : e.includeTablet) && navigator.maxTouchPoints > 1 && t.indexOf("Macintosh") !== -1 && t.indexOf("Safari") !== -1 && (r = true), r;
};
var O2 = P('<button class="w-5 h-5">');
var A2 = P('<div class="flex justify-between items-center gap-2 w-full pr-4"><input class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input"type=text>');
var ui = (e) => {
  let [t, r] = M(""), [n, o] = ct(e, ["onInput", "ref"]), a = (s) => {
    r(s), n.onInput(s);
  }, i = () => {
    r(""), e.onClear();
  };
  return (() => {
    var s = A2(), l = s.firstChild;
    l.$$input = (c) => a(c.currentTarget.value);
    var d = e.ref;
    return typeof d == "function" ? Fe(d, l) : e.ref = l, _e(l, he({ get value() {
      return t();
    } }, o), false, false), E(s, h(Y, { get when() {
      return t().length > 0;
    }, get children() {
      var c = O2();
      return rt(c, "click", i), E(c, h(Bo, {})), c;
    } }), null), s;
  })();
};
nt(["input"]);
var R2 = P('<div class="flex items-end typebot-input w-full">');
var N2 = P('<div class="flex flex-col items-end gap-2 w-full typebot-buttons-input"><div data-slot=list>');
var D2 = P("<span class=relative>");
var L2 = P('<span class="flex h-3 w-3 absolute top-0 right-0 -mt-1 -mr-1 ping"><span class="animate-ping absolute inline-flex h-full w-full rounded-full brightness-200 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 brightness-150">');
var M2 = (e) => {
  var _a5, _b2;
  let t, r = ((_a5 = e.options) == null ? void 0 : _a5.areInitialSearchButtonsVisible) ?? za.areInitialSearchButtonsVisible, [n, o] = M(((_b2 = e.options) == null ? void 0 : _b2.isSearchable) && !r ? [] : e.defaultItems);
  ve(() => {
    !bt() && t && t.focus({ preventScroll: true });
  });
  let a = (s) => {
    let l = n()[s], { value: d, content: c } = l;
    e.onSubmit({ type: "text", value: d || c || "", label: d ? c : void 0 });
  }, i = (s) => {
    if (s === "" || s.trim().length === 0) {
      o(r ? e.defaultItems : []);
      return;
    }
    o(e.defaultItems.filter((l) => {
      var _a6;
      return (_a6 = l.content) == null ? void 0 : _a6.toLowerCase().includes(s.toLowerCase());
    }));
  };
  return (() => {
    var s = N2(), l = s.firstChild;
    return E(s, h(Y, { get when() {
      var _a6;
      return (_a6 = e.options) == null ? void 0 : _a6.isSearchable;
    }, get children() {
      var d = R2();
      return E(d, h(ui, { ref(c) {
        var u = t;
        typeof u == "function" ? u(c) : t = c;
      }, onInput: i, get placeholder() {
        var _a6;
        return ((_a6 = e.options) == null ? void 0 : _a6.searchInputPlaceholder) ?? za.searchInputPlaceholder;
      }, onClear: () => o(r ? e.defaultItems : []) })), d;
    } }), l), E(l, h(Oe, { get each() {
      return n();
    }, children: (d, c) => (() => {
      var u = D2();
      return E(u, h(Yt, { "on:click": () => a(c()), get "data-itemid"() {
        return d.id;
      }, class: "w-full", get children() {
        return d.content;
      } }), null), E(u, (() => {
        var p = ae(() => e.chunkIndex === 0 && e.defaultItems.length === 1);
        return () => p() && L2();
      })(), null), u;
    })() })), B(() => {
      var _a6;
      return Z(l, oe("flex justify-end gap-2 w-full @xs:w-auto", ((_a6 = e.options) == null ? void 0 : _a6.isSearchable) && "overflow-y-scroll max-h-80 rounded-md"));
    }), s;
  })();
};
var U2 = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"fill=currentColor><path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z">');
var B2 = (e) => (() => {
  var t = U2();
  return _e(t, e, true, true), t;
})();
var vt = (e) => {
  let t = $g(), [r, n] = ct(e, ["isDisabled", "isLoading", "disableIcon"]), o = t() === "sm" && !r.disableIcon || !n.children || typeof n.children == "string" && Xe(n.children);
  return h(Yt, he(n, { type: "submit", get class() {
    return oe(n.class, "flex items-center");
  }, "aria-label": o ? "Send" : void 0, get children() {
    return h(ze, { get children() {
      return [h(Q, { when: o, get children() {
        return h(B2, { get class() {
          return "send-icon flex w-6 h-6 " + (r.disableIcon ? "hidden" : "");
        } });
      } }), h(Q, { when: !o, get children() {
        return e.children;
      } })];
    } });
  } }));
};
var $2 = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=3px stroke-linecap=round stroke-linejoin=round><polyline points="20 6 9 17 4 12">');
var z2 = (e) => (() => {
  var t = $2();
  return _e(t, e, true, true), t;
})();
var j2 = P("<div>");
var ja = (e) => (() => {
  var t = j2();
  return E(t, h(Y, { get when() {
    return e.isChecked;
  }, get children() {
    return h(z2, {});
  } })), B(() => Z(t, "w-4 h-4 typebot-checkbox" + (e.isChecked ? " checked" : "") + (e.class ? ` ${e.class}` : ""))), t;
})();
var V2 = P('<div class="flex items-end typebot-input w-full">');
var H2 = P('<form class="flex flex-col items-end gap-2 w-full typebot-buttons-input"><div data-slot=list>');
var G2 = P('<span class="relative w-full @xs:w-auto"><div role=checkbox><div class="flex items-center gap-2"><span>');
var W2 = P('<span class="relative w-full @xs:w-auto"><div role=checkbox aria-checked class="w-full py-2 px-4 font-semibold focus:outline-none cursor-pointer select-none typebot-selectable selected"><div class="flex items-center gap-2"><span>');
var q2 = (e) => {
  var _a5, _b2;
  let t, [r, n] = M(((_a5 = e.options) == null ? void 0 : _a5.isSearchable) && !((_b2 = e.options) == null ? void 0 : _b2.areInitialSearchButtonsVisible) ? [] : e.defaultItems), [o, a] = M([]);
  ve(() => {
    !bt() && t && t.focus({ preventScroll: true });
  });
  let i = (c) => {
    s(c);
  }, s = (c) => {
    let u = o().indexOf(c);
    a(u !== -1 ? (p) => p.filter((g) => g !== c) : (p) => [...p, c]);
  }, l = () => {
    let c = o().map((p) => e.defaultItems.find((g) => g.id === p)), u = c.some((p) => p == null ? void 0 : p.value);
    e.onSubmit({ type: "text", value: c.map((p) => (p == null ? void 0 : p.value) ?? (p == null ? void 0 : p.content)).join(", "), label: u ? c.map((p) => (p == null ? void 0 : p.content) ?? (p == null ? void 0 : p.value)).join(", ") : void 0 });
  }, d = (c) => {
    var _a6;
    if (c === "" || c.trim().length === 0) {
      n(((_a6 = e.options) == null ? void 0 : _a6.areInitialSearchButtonsVisible) ? e.defaultItems : []);
      return;
    }
    n(e.defaultItems.filter((u) => {
      var _a7;
      return (_a7 = u.content) == null ? void 0 : _a7.toLowerCase().includes(c.toLowerCase());
    }));
  };
  return (() => {
    var c = H2(), u = c.firstChild;
    return c.addEventListener("submit", l), E(c, h(Y, { get when() {
      var _a6;
      return (_a6 = e.options) == null ? void 0 : _a6.isSearchable;
    }, get children() {
      var p = V2();
      return E(p, h(ui, { ref(g) {
        var m = t;
        typeof m == "function" ? m(g) : t = g;
      }, onInput: d, get placeholder() {
        var _a6;
        return ((_a6 = e.options) == null ? void 0 : _a6.searchInputPlaceholder) ?? za.searchInputPlaceholder;
      }, onClear: () => {
        var _a6;
        return n(((_a6 = e.options) == null ? void 0 : _a6.areInitialSearchButtonsVisible) ? e.defaultItems : []);
      } })), p;
    } }), u), E(u, h(Oe, { get each() {
      return r();
    }, children: (p) => (() => {
      var g = G2(), m = g.firstChild, f = m.firstChild, v = f.firstChild;
      return rt(m, "click", () => i(p.id)), E(f, h(ja, { get isChecked() {
        return o().some((w) => w === p.id);
      }, class: "shrink-0" }), v), E(v, () => p.content), B((w) => {
        var y = o().some((S) => S === p.id), T = "w-full py-2 px-4 font-semibold focus:outline-none cursor-pointer select-none typebot-selectable" + (o().some((S) => S === p.id) ? " selected" : ""), b = p.id;
        return y !== w.e && J(m, "aria-checked", w.e = y), T !== w.t && Z(m, w.t = T), b !== w.a && J(m, "data-itemid", w.a = b), w;
      }, { e: void 0, t: void 0, a: void 0 }), g;
    })() }), null), E(u, h(Oe, { get each() {
      return o().filter((p) => r().every((g) => g.id !== p));
    }, children: (p) => (() => {
      var g = W2(), m = g.firstChild, f = m.firstChild, v = f.firstChild;
      return rt(m, "click", () => i(p)), J(m, "data-itemid", p), E(f, h(ja, { isChecked: true }), v), E(v, () => {
        var _a6;
        return (_a6 = e.defaultItems.find((w) => w.id === p)) == null ? void 0 : _a6.content;
      }), g;
    })() }), null), E(c, (() => {
      var p = ae(() => o().length > 0);
      return () => p() && h(vt, { disableIcon: true, get children() {
        var _a6;
        return ((_a6 = e.options) == null ? void 0 : _a6.buttonLabel) ?? za.buttonLabel;
      } });
    })(), null), B(() => {
      var _a6;
      return Z(u, "flex justify-end gap-2" + (((_a6 = e.options) == null ? void 0 : _a6.isSearchable) ? " overflow-y-scroll max-h-80 rounded-md" : ""));
    }), c;
  })();
};
var Y2 = (e) => h(Vr.Root, e);
var K2 = (e) => h(Vr.Control, e);
var X2 = (e) => h(Vr.PrevTrigger, e);
var Z2 = (e) => h(Vr.NextTrigger, e);
var J2 = (e) => h(Vr.ItemGroup, e);
var Q2 = (e) => h(Vr.Item, e);
var an = { Root: Y2, Control: K2, PrevTrigger: X2, NextTrigger: Z2, ItemGroup: J2, Item: Q2 };
var eC = P('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m12 19-7-7 7-7"></path><path d="M19 12H5">');
var tC = (e) => (() => {
  var t = eC();
  return _e(t, e, true, true), t;
})();
var rC = P('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M5 12h14"></path><path d="m12 5 7 7-7 7">');
var nC = (e) => (() => {
  var t = rC();
  return _e(t, e, true, true), t;
})();
var oC = P('<div class="flex justify-end mb-2">');
var aC = P('<div class="flex flex-col gap-4"><div class="flex flex-col gap-2">');
var iC = P('<div class="px-3 pb-2">');
var sC = P('<img alt="Card image"class="aspect-16/11 object-cover">');
var lC = P('<h2 class="px-4 font-semibold">');
var cC = P("<p class=px-4>");
var dC = P("<div>");
var uC = (e) => {
  let t = (o, a) => {
    var _a5, _b2, _c2, _d2;
    let i = (_b2 = (_a5 = e.block.items[o].paths) == null ? void 0 : _a5[a]) == null ? void 0 : _b2.id, s = (_d2 = (_c2 = e.block.items[o].paths) == null ? void 0 : _c2[a]) == null ? void 0 : _d2.text;
    e.onSubmit({ type: "text", value: i ?? s ?? "", label: s ?? "", metadata: { replyId: i }, attachments: e.block.items[o].imageUrl ? [{ url: e.block.items[o].imageUrl, type: "image" }] : void 0 });
  }, r = $g(), n = te(() => gC(e.block.items.length, { containerSize: r() }));
  return h(an.Root, { get slideCount() {
    return e.block.items.length;
  }, get slidesPerPage() {
    return n();
  }, slidesPerMove: 1, spacing: "12px", class: "overflow-hidden @xs:-mr-5 -mr-4", get children() {
    return [(() => {
      var o = oC();
      return E(o, h(an.Control, { class: "flex gap-2 @xs:mr-5 mr-4", get children() {
        return [h(an.PrevTrigger, { asChild: (a) => h(Yt, he({ variant: "secondary" }, a, { get children() {
          return h(tC, { class: "w-4 h-4" });
        } })) }), h(an.NextTrigger, { asChild: (a) => h(Yt, he({ variant: "secondary" }, a, { get children() {
          return h(nC, { class: "w-4 h-4" });
        } })) })];
      } })), B((a) => ne(o, "display", e.block.items.length > n() ? void 0 : "none")), o;
    })(), h(an.ItemGroup, { class: "rounded-l-host-bubble @xs:pr-5 pr-4", get children() {
      return h(Hu, { get each() {
        return e.block.items;
      }, children: (o, a) => h(an.Item, { index: a, get children() {
        return h(pC, { class: "h-full", get children() {
          return [(() => {
            var i = aC(), s = i.firstChild;
            return E(i, h(Y, { get when() {
              return o().imageUrl;
            }, children: (l) => (() => {
              var d = sC();
              return B(() => J(d, "src", l())), d;
            })() }), s), E(s, h(Y, { get when() {
              return o().title;
            }, children: (l) => (() => {
              var d = lC();
              return E(d, l), d;
            })() }), null), E(s, h(Y, { get when() {
              return o().description;
            }, children: (l) => (() => {
              var d = cC();
              return E(d, l), d;
            })() }), null), B((l) => ne(i, "padding-top", o().imageUrl ? void 0 : "12px")), i;
          })(), (() => {
            var i = iC();
            return E(i, h(Oe, { get each() {
              return o().paths;
            }, children: (s, l) => h(Yt, { variant: "secondary", get class() {
              var _a5;
              return bo("w-full font-normal text-sm border-host-bubble-border rounded-none", l() === 0 && "rounded-t-host-bubble border border-b-0", l() !== 0 && "border border-b-0", l() === (((_a5 = o().paths) == null ? void 0 : _a5.length) ?? 1) - 1 && "rounded-b-host-bubble border-b");
            }, size: "sm", "on:click": () => t(a, l()), get children() {
              return s.text;
            } }) })), i;
          })()];
        } });
      } }) });
    } })];
  } });
};
var pC = (e) => (() => {
  var t = dC();
  return E(t, () => e.children), B(() => Z(t, bo("typebot-card flex flex-col justify-between gap-4 text-host-bubble-text bg-host-bubble-bg border-host-bubble-border border-host-bubble rounded-host-bubble shadow-host-bubble filter-host-bubble overflow-hidden", e.class))), t;
})();
var gC = (e, { containerSize: t }) => t === "xs" ? e > 1 ? 1.2 : 1 : t === "sm" ? e > 1 ? 1.5 : 1 : t === "md" || t === "lg" ? e > 2 ? 2.2 : e : e > 3 ? 3.2 : e;
var Nd = { hasTime: false, isRange: false, labels: { button: er, from: "From:", to: "To:" }, format: "dd/MM/yyyy", formatWithTime: "dd/MM/yyyy HH:mm" };
var hC = P('<div class="typebot-input-form flex gap-2 items-end"><form><div class="flex flex-col"><div><input class="focus:outline-none flex-1 w-full text-input typebot-datetime-input"data-testid=from-date style=min-height:32px;min-width:100px;font-size:16px>');
var Dd = P("<p class=font-semibold>");
var fC = P('<div class="flex items-center p-4"><input class="focus:outline-none flex-1 w-full text-input ml-2 typebot-datetime-input"data-testid=to-date style=min-height:32px;min-width:100px;font-size:16px>');
var mC = (e) => {
  let [t, r] = M(bC(e.defaultValue ?? "")), n = () => {
    var _a5;
    t().from === "" && t().to === "" || e.onSubmit({ type: "text", value: `${t().from}${((_a5 = e.options) == null ? void 0 : _a5.isRange) ? ` to ${t().to}` : ""}` });
  }, o = (a) => {
    a.key === "Enter" && (a.preventDefault(), n());
  };
  return (() => {
    var a = hC(), i = a.firstChild, s = i.firstChild, l = s.firstChild, d = l.firstChild;
    return i.addEventListener("submit", (c) => {
      c.preventDefault(), n();
    }), E(l, (() => {
      var c = ae(() => {
        var _a5;
        return !!((_a5 = e.options) == null ? void 0 : _a5.isRange);
      });
      return () => c() && (() => {
        var u = Dd();
        return E(u, () => {
          var _a5;
          return ((_a5 = e.options.labels) == null ? void 0 : _a5.from) ?? Nd.labels.from;
        }), u;
      })();
    })(), d), d.$$keydown = o, d.addEventListener("change", (c) => r({ ...t(), from: c.currentTarget.value })), E(s, (() => {
      var c = ae(() => {
        var _a5;
        return !!((_a5 = e.options) == null ? void 0 : _a5.isRange);
      });
      return () => c() && (() => {
        var u = fC(), p = u.firstChild;
        return E(u, (() => {
          var g = ae(() => !!e.options.isRange);
          return () => g() && (() => {
            var m = Dd();
            return E(m, () => {
              var _a5;
              return ((_a5 = e.options.labels) == null ? void 0 : _a5.to) ?? Nd.labels.to;
            }), m;
          })();
        })(), p), p.$$keydown = o, p.addEventListener("change", (g) => r({ ...t(), to: g.currentTarget.value })), B((g) => {
          var _a5, _b2;
          var m = e.options.hasTime ? "datetime-local" : "date", f = (_a5 = e.options) == null ? void 0 : _a5.min, v = (_b2 = e.options) == null ? void 0 : _b2.max;
          return m !== g.e && J(p, "type", g.e = m), f !== g.t && J(p, "min", g.t = f), v !== g.a && J(p, "max", g.a = v), g;
        }, { e: void 0, t: void 0, a: void 0 }), B(() => p.value = t().to), u;
      })();
    })(), null), E(a, h(vt, { class: "h-[56px]", "on:click": n, get children() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button;
    } }), null), B((c) => {
      var _a5, _b2, _c2, _d2, _e2;
      var u = oe("flex typebot-input", ((_a5 = e.options) == null ? void 0 : _a5.isRange) ? "items-end" : "items-center"), p = "flex items-center p-4 " + (((_b2 = e.options) == null ? void 0 : _b2.isRange) ? "pb-0 gap-2" : ""), g = ((_c2 = e.options) == null ? void 0 : _c2.hasTime) ? "datetime-local" : "date", m = (_d2 = e.options) == null ? void 0 : _d2.min, f = (_e2 = e.options) == null ? void 0 : _e2.max;
      return u !== c.e && Z(i, c.e = u), p !== c.t && Z(l, c.t = p), g !== c.a && J(d, "type", c.a = g), m !== c.o && J(d, "min", c.o = m), f !== c.i && J(d, "max", c.i = f), c;
    }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), B(() => d.value = t().from), a;
  })();
};
var bC = (e) => {
  if (!e.includes("to")) return { from: e, to: "" };
  let [t, r] = e.split(" to ");
  return { from: t, to: r };
};
nt(["keydown"]);
var yC = { labels: { button: er, placeholder: "Type your email..." }, retryMessageContent: "This email doesn't seem to be valid. Can you type it again?" };
var vC = P('<input class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input"type=text>');
var pi = (e) => {
  let [t, r] = ct(e, ["ref", "onInput", "inputmode"]);
  return (() => {
    var n = vC();
    n.$$input = (a) => t.onInput(a.currentTarget.value);
    var o = e.ref;
    return typeof o == "function" ? Fe(o, n) : e.ref = n, _e(n, he({ get inputmode() {
      return t.inputmode;
    } }, r), false, false), n;
  })();
};
nt(["input"]);
var wC = P('<div class="typebot-input-form flex w-full gap-2 items-end max-w-[350px]"><div class="flex typebot-input w-full">');
var xC = (e) => {
  let [t, r] = M(e.defaultValue ?? ""), n, o = (d) => r(d), a = () => (n == null ? void 0 : n.value) !== "" && (n == null ? void 0 : n.reportValidity()), i = () => {
    a() ? e.onSubmit({ type: "text", value: (n == null ? void 0 : n.value) ?? t() }) : n == null ? void 0 : n.focus();
  }, s = (d) => {
    d.key === "Enter" && i();
  };
  ve(() => {
    !bt() && n && n.focus({ preventScroll: true }), window.addEventListener("message", l);
  }), ue(() => {
    window.removeEventListener("message", l);
  });
  let l = (d) => {
    let { data: c } = d;
    c.isFromTypebot && (c.command === "setInputValue" && r(c.value), c.command === "submitInput" && i());
  };
  return (() => {
    var d = wC(), c = d.firstChild;
    return d.$$keydown = s, E(c, h(pi, { ref(u) {
      var p = n;
      typeof p == "function" ? p(u) : n = u;
    }, get value() {
      return t();
    }, get placeholder() {
      var _a5, _b2;
      return ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.placeholder) ?? yC.labels.placeholder;
    }, onInput: o, type: "email", autocomplete: "email" })), E(d, h(vt, { type: "button", class: "h-[56px]", "on:click": i, get children() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button;
    } }), null), d;
  })();
};
nt(["keydown"]);
var _t = { isRequired: true, isMultipleAllowed: false, visibility: "Auto", labels: { placeholder: `<strong>
      Click to upload
    </strong> or drag and drop<br>
    (size limit: 10MB)`, button: "Upload", clear: "Clear", skip: "Skip", success: { single: "File uploaded", multiple: "{total} files uploaded" } } };
var kC = (e) => {
  if (!e || e.length === 0) return "";
  let t = e.join(", ");
  return e.some((r) => r.startsWith("image/") || r === "image/*") ? `${t}, capture=camera` : t;
};
var oh = ({ newFile: e, existingFiles: t, params: r, context: n, onError: o }) => {
  var _a5, _b2;
  let a = r.sizeLimit ?? Ur("NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE");
  if (a && e.size > Number(a) * 1024 * 1024) {
    o({ description: (((_b2 = (_a5 = n.typebot.settings.general) == null ? void 0 : _a5.systemMessages) == null ? void 0 : _b2.fileUploadSizeError) ?? Dr.fileUploadSizeError).replace("[[file]]", e.name).replace("[[limit]]", a) });
    return;
  }
  if (t.length === 0) return e;
  let i = e.name, s = 1;
  for (; t.some((l) => l.name === i); ) {
    let l = e.name.lastIndexOf("."), d = l !== -1 ? e.name.slice(l) : "";
    i = `${e.name.slice(0, l)}(${s})${d}`, s++;
  }
  return new File([e], i, { type: e.type });
};
var Va = async ({ apiHost: e, files: t, onUploadProgress: r }) => {
  let n = [], o = [], a = 0;
  for (let { input: i, file: s } of t) {
    r && r({ progress: a / t.length * 100, fileIndex: a }), a += 1;
    let { data: l, error: d } = await zx({ method: "POST", url: `${e}/api/v3/generate-upload-url`, body: { fileName: i.fileName, sessionId: i.sessionId, fileType: s.type, blockId: i.blockId } });
    if (d) {
      o.push(d.message);
      continue;
    }
    if (l == null ? void 0 : l.presignedUrl) {
      let c = new FormData();
      if (Object.entries(l.formData).forEach(([u, p]) => {
        c.append(u, p);
      }), c.append("file", s), !(await fetch(l.presignedUrl, { method: "POST", body: c })).ok) continue;
      n.push({ url: l.fileUrl, type: s.type });
    } else continue;
  }
  return o.length > 0 ? { type: "error", error: o.join(", ") } : { type: "success", urls: n };
};
var TC = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2px stroke-linecap=round stroke-linejoin=round><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4">');
var ah = (e) => (() => {
  var t = TC();
  return _e(t, e, true, true), t;
})();
var SC = P('<div class="flex items-center gap-4 border bg-white border-gray-200 rounded-md p-2 text-gray-900 min-w-[250px]"><div></div><div class="flex flex-col"><span class="text-md font-semibold text-sm"></span><span class="text-gray-500 text-xs">');
var ih = (e) => {
  let t = CC(e.file);
  return (() => {
    var r = SC(), n = r.firstChild, o = n.nextSibling, a = o.firstChild, i = a.nextSibling;
    return E(n, h(ah, { class: "w-6 h-6" })), E(a, () => e.file.name), E(i, () => EC(e.file)), B(() => Z(n, oe("rounded-md text-white p-2 flex items-center", t === "pink" && "bg-pink-400", t === "blue" && "bg-blue-400", t === "green" && "bg-green-400", t === "gray" && "bg-gray-400", t === "orange" && "bg-orange-400"))), r;
  })();
};
var EC = (e) => {
  switch (e.name.split(".").pop()) {
    case "pdf":
      return "PDF";
    case "doc":
    case "docx":
      return "Word";
    case "xls":
    case "xlsx":
    case "csv":
      return "Sheet";
    case "json":
      return "JSON";
    case "md":
      return "Markdown";
    default:
      return "DOCUMENT";
  }
};
var CC = (e) => {
  let t = e.name.split(".").pop();
  if (!t) return "gray";
  switch (t) {
    case "pdf":
      return "pink";
    case "doc":
    case "docx":
      return "blue";
    case "xls":
    case "xlsx":
    case "csv":
      return "green";
    case "json":
      return "orange";
    default:
      return "gray";
  }
};
var FC = P('<img class="rounded-md object-cover w-[58px] h-[58px]">');
var PC = P('<div class="relative group shrink-0"><button class="absolute -right-2 p-0.5 -top-2 rounded-full bg-gray-200 text-black border border-gray-400 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"aria-label="Remove attachment">');
var _C = P('<div class="absolute w-full h-full inset-0 bg-black/20 rounded-md">');
var sh = (e) => (() => {
  var t = PC(), r = t.firstChild;
  return E(t, h(ze, { get children() {
    return [h(Q, { get when() {
      return e.file.type.startsWith("image");
    }, get children() {
      var n = FC();
      return B((o) => {
        var a = URL.createObjectURL(e.file), i = e.file.name;
        return a !== o.e && J(n, "src", o.e = a), i !== o.t && J(n, "alt", o.t = i), o;
      }, { e: void 0, t: void 0 }), n;
    } }), h(Q, { when: true, get children() {
      return h(ih, { get file() {
        return e.file;
      } });
    } })];
  } }), r), rt(r, "click", e.onRemoveClick), E(r, h(Bo, { class: "w-4" })), E(t, h(Y, { get when() {
    return ae(() => !!ie(e.uploadProgressPercent))() && e.uploadProgressPercent !== 100;
  }, get children() {
    return h(IC, { get progressPercent() {
      return e.uploadProgressPercent;
    } });
  } }), null), t;
})();
var IC = (e) => {
  let [t, r] = M(e.progressPercent ?? 0), n;
  return Ce(() => {
    e.progressPercent === 20 && (n = setInterval(() => {
      t() < 100 && r((o) => o + (Math.floor(Math.random() * 10) + 1));
    }, 1e3));
  }), ue(() => {
    clearInterval(n);
  }), (() => {
    var o = _C();
    return E(o, h(Qn.Root, { get value() {
      return t();
    }, class: "flex items-center justify-center", get children() {
      return h(Qn.Circle, { get children() {
        return [h(Qn.CircleTrack, {}), h(Qn.CircleRange, {})];
      } });
    } })), o;
  })();
};
var OC = P('<div class="w-full bg-gray-200 rounded-full h-2.5"><div class="upload-progress-bar h-2.5 rounded-full">');
var AC = P('<div class="p-4 flex gap-2 border-gray-200 border overflow-auto bg-white rounded-md w-full">');
var RC = P('<div class="flex flex-col justify-center items-center gap-4 max-w-[90%]"><p class="text-sm text-gray-500 text-center">');
var NC = P("<input id=dropzone-file type=file class=hidden>");
var DC = P('<div class="flex justify-end">');
var LC = P('<div class="flex justify-end"><div class="flex gap-2">');
var MC = P('<form class="flex flex-col w-full gap-2"><label for=dropzone-file>');
var UC = P('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class=text-gray-500><polyline points="16 16 12 12 8 16"></polyline><line x1=12 y1=12 x2=12 y2=21></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16">');
var BC = (e) => {
  var _a5, _b2;
  let [t, r] = M([]), [n, o] = M(false), [a, i] = M(0), [s, l] = M(false), d = ((_b2 = (_a5 = e.context.typebot.settings.general) == null ? void 0 : _a5.systemMessages) == null ? void 0 : _b2.fileUploadError) ?? Dr.fileUploadError, c = (b) => {
    var _a6;
    let S = Array.from(b).map((_) => oh({ existingFiles: t(), newFile: _, params: { sizeLimit: e.block.options && "sizeLimit" in e.block.options ? e.block.options.sizeLimit : void 0 }, context: e.context, onError: ({ description: I }) => qt.create({ description: I }) })).filter(ie);
    if (S.length !== 0) {
      if (!((_a6 = e.block.options) == null ? void 0 : _a6.isMultipleAllowed)) return p(S[0]);
      r([...t(), ...S]);
    }
  }, u = async (b) => {
    b.preventDefault(), t().length !== 0 && g(t());
  }, p = async (b) => {
    var _a6, _b3, _c2;
    o(true);
    let S = await Va({ apiHost: e.context.apiHost ?? hr({ ignoreChatApiUrl: true }), files: [{ file: b, input: { sessionId: e.context.sessionId, blockId: e.block.id, fileName: b.name } }] });
    if (o(false), S.type === "success" && S.urls.length && S.urls[0]) return e.onSubmit({ type: "text", label: ((_c2 = (_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.success) == null ? void 0 : _c2.single) ?? _t.labels.success.single, value: S.urls[0] ? Ld(S.urls[0].url) : "", attachments: [{ type: b.type, url: S.urls[0].url, blobUrl: URL.createObjectURL(b) }] });
    S.type === "error" && qt.create({ title: d, description: S.error });
  }, g = async (b) => {
    var _a6, _b3, _c2, _d2, _e2, _f2;
    o(true);
    let S = await Va({ apiHost: e.context.apiHost ?? hr({ ignoreChatApiUrl: true }), files: b.map((_) => ({ file: _, input: { sessionId: e.context.sessionId, blockId: e.block.id, fileName: _.name } })), onUploadProgress: i });
    if (o(false), i(0), S.type === "error") return qt.create({ title: d, description: S.error });
    e.onSubmit({ type: "text", label: S.urls.length > 1 ? (((_c2 = (_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.success) == null ? void 0 : _c2.multiple) ?? _t.labels.success.multiple).replaceAll("{total}", S.urls.length.toString()) : ((_f2 = (_e2 = (_d2 = e.block.options) == null ? void 0 : _d2.labels) == null ? void 0 : _e2.success) == null ? void 0 : _f2.single) ?? _t.labels.success.single, value: S.urls.filter(ie).map(({ url: _ }) => Ld(_)).join(", "), attachments: S.urls.map((_, I) => _ ? { ..._, blobUrl: URL.createObjectURL(t()[I]) } : null).filter(ie) });
  }, m = (b) => {
    b.preventDefault(), l(true);
  }, f = () => l(false), v = (b) => {
    var _a6;
    b.preventDefault(), b.stopPropagation(), ((_a6 = b.dataTransfer) == null ? void 0 : _a6.files) && c(b.dataTransfer.files);
  }, w = () => r([]), y = () => {
    var _a6, _b3;
    return e.onSkip(((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.skip) ?? _t.labels.skip);
  }, T = (b) => {
    r((S) => S.filter((_, I) => I !== b));
  };
  return (() => {
    var b = MC(), S = b.firstChild;
    return b.addEventListener("submit", u), S.addEventListener("drop", v), S.addEventListener("dragleave", f), S.addEventListener("dragover", m), E(S, h(ze, { get children() {
      return [h(Q, { get when() {
        return n();
      }, get children() {
        return h(Y, { get when() {
          return t().length > 1;
        }, get fallback() {
          return h(Ug, {});
        }, get children() {
          var _ = OC(), I = _.firstChild;
          return ne(I, "transition", "width 150ms cubic-bezier(0.4, 0, 0.2, 1)"), B((x) => ne(I, "width", `${a() > 0 ? a : 10}%`)), _;
        } });
      } }), h(Q, { get when() {
        return !n();
      }, get children() {
        return [(() => {
          var _ = RC(), I = _.firstChild;
          return E(_, h(Y, { get when() {
            return t().length;
          }, get fallback() {
            return h($C, {});
          }, get children() {
            var x = AC();
            return rt(x, "click", (C) => {
              C.preventDefault(), C.stopPropagation();
            }), E(x, h(Oe, { get each() {
              return t();
            }, children: (C, R) => h(sh, { file: C, onRemoveClick: () => T(R()) }) })), x;
          } }), I), B(() => {
            var _a6, _b3;
            return I.innerHTML = ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.placeholder) ?? _t.labels.placeholder;
          }), _;
        })(), (() => {
          var _ = NC();
          return _.addEventListener("change", (I) => {
            I.currentTarget.files && (c(I.currentTarget.files), I.currentTarget.value = "");
          }), B((I) => {
            var _a6, _b3, _c2;
            var x = ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.allowedFileTypes) == null ? void 0 : _b3.isEnabled) ? kC(e.block.options.allowedFileTypes.types) : void 0, C = ((_c2 = e.block.options) == null ? void 0 : _c2.isMultipleAllowed) ?? _t.isMultipleAllowed;
            return x !== I.e && J(_, "accept", I.e = x), C !== I.t && (_.multiple = I.t = C), I;
          }, { e: void 0, t: void 0 }), _;
        })()];
      } })];
    } })), E(b, h(Y, { get when() {
      var _a6;
      return ae(() => t().length === 0)() && ((_a6 = e.block.options) == null ? void 0 : _a6.isRequired) === false;
    }, get children() {
      var _ = DC();
      return E(_, h(Yt, { "on:click": y, get children() {
        var _a6, _b3;
        return ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.skip) ?? _t.labels.skip;
      } })), _;
    } }), null), E(b, h(Y, { get when() {
      return ae(() => {
        var _a6;
        return !!(((_a6 = e.block.options) == null ? void 0 : _a6.isMultipleAllowed) && t().length > 0);
      })() && !n();
    }, get children() {
      var _ = LC(), I = _.firstChild;
      return E(I, h(Y, { get when() {
        return t().length;
      }, get children() {
        return h(Yt, { variant: "secondary", "on:click": w, get children() {
          var _a6, _b3;
          return ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.clear) ?? _t.labels.clear;
        } });
      } }), null), E(I, h(vt, { type: "submit", disableIcon: true, get children() {
        var _a6, _b3;
        return ae(() => {
          var _a7, _b4;
          return (((_b4 = (_a7 = e.block.options) == null ? void 0 : _a7.labels) == null ? void 0 : _b4.button) ?? _t.labels.button) === _t.labels.button;
        })() ? `Upload ${t().length} file${t().length > 1 ? "s" : ""}` : (_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.button;
      } }), null), _;
    } }), null), B(() => Z(S, "typebot-upload-input py-6 flex flex-col justify-center items-center w-full bg-gray-50 border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 px-8 " + (s() ? "dragging-over" : ""))), b;
  })();
};
var $C = () => UC();
var Ld = (e) => {
  let t = e.split("/").pop();
  if (!t) return e;
  let r = encodeURIComponent(t);
  return e.replace(t, r);
};
var zC = "decimal";
var jC = er;
var VC = "Type a number...";
var rs = (e) => {
  if (typeof e == "number") return e;
  if (!e) return;
  let t = Number.parseFloat(e.toString().replace(",", "."));
  return isNaN(t) ? void 0 : t;
};
var HC = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2px stroke-linecap=round stroke-linejoin=round><polyline points="6 9 12 15 18 9">');
var lh = (e) => (() => {
  var t = HC();
  return _e(t, e, true, true), t;
})();
var GC = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 15l-6-6-6 6">');
var WC = (e) => (() => {
  var t = GC();
  return _e(t, e, true, true), t;
})();
var qC = P('<div class="typebot-input-form flex w-full gap-2 items-end max-w-[350px]">');
var YC = (e) => {
  var _a5, _b2, _c2;
  let t = Jp({ locale: navigator.language, formatOptions: KC(e.block.options), min: rs((_a5 = e.block.options) == null ? void 0 : _a5.min), max: rs((_b2 = e.block.options) == null ? void 0 : _b2.max), step: rs((_c2 = e.block.options) == null ? void 0 : _c2.step) }), r, n = () => t().invalid ? (r == null ? void 0 : r.reportValidity(), false) : true, o = () => {
    n() ? e.onSubmit({ type: "text", value: t().valueAsNumber.toString(), label: t().value.toString() }) : t().focus();
  }, a = (s) => {
    s.key === "Enter" && o();
  };
  ve(() => {
    !bt() && r && r.focus({ preventScroll: true }), window.addEventListener("message", i);
  }), ue(() => {
    window.removeEventListener("message", i);
  });
  let i = (s) => {
    let { data: l } = s;
    l.isFromTypebot && l.command === "setInputValue" && t().setValue(Number(l.value));
  };
  return (() => {
    var s = qC();
    return s.$$keydown = a, E(s, h(dn.RootProvider, { value: t, class: "flex typebot-input w-full", get children() {
      return [h(dn.Input, { ref(l) {
        var d = r;
        typeof d == "function" ? d(l) : r = l;
      }, class: "focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input", style: { "font-size": "16px", appearance: "auto" }, get placeholder() {
        var _a6, _b3;
        return ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.placeholder) ?? VC;
      } }), h(dn.Control, { class: "flex flex-col rounded-r-md overflow-hidden divide-y h-[56px]", get children() {
        return [h(dn.IncrementTrigger, { class: "flex items-center justify-center h-7 w-8 border-input-border border-l", get children() {
          return h(WC, { class: "size-4" });
        } }), h(dn.DecrementTrigger, { class: "flex items-center justify-center h-7 w-8 border-input-border border-l", get children() {
          return h(lh, { class: "size-4" });
        } })];
      } })];
    } }), null), E(s, h(vt, { type: "button", class: "h-[56px]", "on:click": o, get children() {
      var _a6, _b3;
      return ((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.labels) == null ? void 0 : _b3.button) ?? jC;
    } }), null), s;
  })();
};
var KC = (e) => {
  let t = { style: zC };
  return (e == null ? void 0 : e.style) === "currency" && e.currency ? { style: e.style, currency: e.currency } : (e == null ? void 0 : e.style) === "unit" && e.unit ? { style: e.style, unit: e.unit } : t;
};
nt(["keydown"]);
var XC = Kd(Ph(), 1);
var ZC = P('<div class="typebot-input-error-message mt-4 text-center animate-fade-in">');
var JC = P('<form id=payment-form class="flex flex-col p-4 typebot-input w-full items-center"><slot name=stripe-payment-form>');
var QC = "stripe-payment-form";
var qn;
var Yn = null;
var ha = null;
var eF = (e) => {
  let [t, r] = M(), [n, o] = M(false), [a, i] = M(false);
  ve(async () => {
    var _a5, _b2;
    if (!qn) return;
    if (tF(qn), !((_a5 = e.options) == null ? void 0 : _a5.publicKey)) return r("Missing Stripe public key");
    if (Yn = await (0, XC.loadStripe)((_b2 = e.options) == null ? void 0 : _b2.publicKey), !Yn) return;
    ha = Yn.elements({ appearance: { theme: "stripe", variables: { colorPrimary: getComputedStyle(qn).getPropertyValue("--typebot-button-bg-color") } }, clientSecret: e.options.paymentIntentSecret });
    let l = ha.create("payment", { layout: "tabs" });
    l.on("ready", () => {
      o(true), e.onTransitionEnd();
    }), l.mount("#payment-element");
  });
  let s = async (l) => {
    var _a5, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    if (l.preventDefault(), !Yn || !ha) return;
    i(true), mT({ sessionId: e.context.sessionId, resultId: e.context.resultId, typebot: e.context.typebot });
    let { postalCode: d, ...c } = ((_b2 = (_a5 = e.options) == null ? void 0 : _a5.additionalInformation) == null ? void 0 : _b2.address) ?? {}, { error: u, paymentIntent: p } = await Yn.confirmPayment({ elements: ha, confirmParams: { return_url: window.location.href, payment_method_data: { billing_details: { name: (_d2 = (_c2 = e.options) == null ? void 0 : _c2.additionalInformation) == null ? void 0 : _d2.name, email: (_f2 = (_e2 = e.options) == null ? void 0 : _e2.additionalInformation) == null ? void 0 : _f2.email, phone: (_h2 = (_g2 = e.options) == null ? void 0 : _g2.additionalInformation) == null ? void 0 : _h2.phoneNumber, address: { ...c, postal_code: d } } } }, redirect: "if_required" });
    if (Rg(), i(false), (u == null ? void 0 : u.type) !== "validation_error") {
      if ((u == null ? void 0 : u.type) === "card_error") return r(u.message);
      if (!u && p.status === "succeeded") return e.onSuccess();
    }
  };
  return (() => {
    var l = JC(), d = l.firstChild;
    l.addEventListener("submit", s);
    var c = qn;
    return typeof c == "function" ? Fe(c, d) : qn = d, d._$owner = ss(), E(l, h(Y, { get when() {
      return n();
    }, get children() {
      return h(vt, { get isLoading() {
        return a();
      }, class: "mt-4 w-full max-w-lg animate-fade-in", disableIcon: true, get children() {
        return [ae(() => {
          var _a5, _b2;
          return ((_b2 = (_a5 = e.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button) ?? nh.labels.button;
        }), " ", ae(() => {
          var _a5;
          return (_a5 = e.options) == null ? void 0 : _a5.amountLabel;
        })];
      } });
    } }), null), E(l, h(Y, { get when() {
      return t();
    }, get children() {
      var u = ZC();
      return E(u, t), u;
    } }), null), l;
  })();
};
var tF = (e) => {
  let t = e.getRootNode().host, r = document.createElement("div");
  r.style.width = "100%", r.slot = QC, t.appendChild(r);
  let n = document.createElement("div");
  n.id = "payment-element", r.appendChild(n);
};
var rF = (e) => h(eF, { get onSuccess() {
  return e.onSuccess;
}, get options() {
  return e.options;
}, get context() {
  return e.context;
}, get onTransitionEnd() {
  return e.onTransitionEnd;
} });
var nF = { labels: { button: er, placeholder: "Type your phone number..." }, retryMessageContent: "This phone number doesn't seem to be valid. Can you type it again?" };
var sn = [{ name: "International", flag: "🌐", code: "INT", dial_code: "" }, { name: "Afghanistan", flag: "🇦🇫", code: "AF", dial_code: "+93" }, { name: "Åland Islands", flag: "🇦🇽", code: "AX", dial_code: "+358" }, { name: "Albania", flag: "🇦🇱", code: "AL", dial_code: "+355" }, { name: "Algeria", flag: "🇩🇿", code: "DZ", dial_code: "+213" }, { name: "American Samoa", flag: "🇦🇸", code: "AS", dial_code: "+1684" }, { name: "Andorra", flag: "🇦🇩", code: "AD", dial_code: "+376" }, { name: "Angola", flag: "🇦🇴", code: "AO", dial_code: "+244" }, { name: "Anguilla", flag: "🇦🇮", code: "AI", dial_code: "+1264" }, { name: "Antarctica", flag: "🇦🇶", code: "AQ", dial_code: "+672" }, { name: "Antigua and Barbuda", flag: "🇦🇬", code: "AG", dial_code: "+1268" }, { name: "Argentina", flag: "🇦🇷", code: "AR", dial_code: "+54" }, { name: "Armenia", flag: "🇦🇲", code: "AM", dial_code: "+374" }, { name: "Aruba", flag: "🇦🇼", code: "AW", dial_code: "+297" }, { name: "Australia", flag: "🇦🇺", code: "AU", dial_code: "+61" }, { name: "Austria", flag: "🇦🇹", code: "AT", dial_code: "+43" }, { name: "Azerbaijan", flag: "🇦🇿", code: "AZ", dial_code: "+994" }, { name: "Bahamas", flag: "🇧🇸", code: "BS", dial_code: "+1242" }, { name: "Bahrain", flag: "🇧🇭", code: "BH", dial_code: "+973" }, { name: "Bangladesh", flag: "🇧🇩", code: "BD", dial_code: "+880" }, { name: "Barbados", flag: "🇧🇧", code: "BB", dial_code: "+1246" }, { name: "Belarus", flag: "🇧🇾", code: "BY", dial_code: "+375" }, { name: "Belgium", flag: "🇧🇪", code: "BE", dial_code: "+32" }, { name: "Belize", flag: "🇧🇿", code: "BZ", dial_code: "+501" }, { name: "Benin", flag: "🇧🇯", code: "BJ", dial_code: "+229" }, { name: "Bermuda", flag: "🇧🇲", code: "BM", dial_code: "+1441" }, { name: "Bhutan", flag: "🇧🇹", code: "BT", dial_code: "+975" }, { name: "Bolivia, Plurinational State of bolivia", flag: "🇧🇴", code: "BO", dial_code: "+591" }, { name: "Bosnia and Herzegovina", flag: "🇧🇦", code: "BA", dial_code: "+387" }, { name: "Botswana", flag: "🇧🇼", code: "BW", dial_code: "+267" }, { name: "Bouvet Island", flag: "🇧🇻", code: "BV", dial_code: "+47" }, { name: "Brazil", flag: "🇧🇷", code: "BR", dial_code: "+55" }, { name: "British Indian Ocean Territory", flag: "🇮🇴", code: "IO", dial_code: "+246" }, { name: "Brunei Darussalam", flag: "🇧🇳", code: "BN", dial_code: "+673" }, { name: "Bulgaria", flag: "🇧🇬", code: "BG", dial_code: "+359" }, { name: "Burkina Faso", flag: "🇧🇫", code: "BF", dial_code: "+226" }, { name: "Burundi", flag: "🇧🇮", code: "BI", dial_code: "+257" }, { name: "Cambodia", flag: "🇰🇭", code: "KH", dial_code: "+855" }, { name: "Cameroon", flag: "🇨🇲", code: "CM", dial_code: "+237" }, { name: "Canada", flag: "🇨🇦", code: "CA", dial_code: "+1" }, { name: "Cape Verde", flag: "🇨🇻", code: "CV", dial_code: "+238" }, { name: "Cayman Islands", flag: "🇰🇾", code: "KY", dial_code: "+345" }, { name: "Central African Republic", flag: "🇨🇫", code: "CF", dial_code: "+236" }, { name: "Chad", flag: "🇹🇩", code: "TD", dial_code: "+235" }, { name: "Chile", flag: "🇨🇱", code: "CL", dial_code: "+56" }, { name: "China", flag: "🇨🇳", code: "CN", dial_code: "+86" }, { name: "Christmas Island", flag: "🇨🇽", code: "CX", dial_code: "+61" }, { name: "Cocos (Keeling) Islands", flag: "🇨🇨", code: "CC", dial_code: "+61" }, { name: "Colombia", flag: "🇨🇴", code: "CO", dial_code: "+57" }, { name: "Comoros", flag: "🇰🇲", code: "KM", dial_code: "+269" }, { name: "Congo", flag: "🇨🇬", code: "CG", dial_code: "+242" }, { name: "Congo, The Democratic Republic of the Congo", flag: "🇨🇩", code: "CD", dial_code: "+243" }, { name: "Cook Islands", flag: "🇨🇰", code: "CK", dial_code: "+682" }, { name: "Costa Rica", flag: "🇨🇷", code: "CR", dial_code: "+506" }, { name: "Cote d'Ivoire", flag: "🇨🇮", code: "CI", dial_code: "+225" }, { name: "Croatia", flag: "🇭🇷", code: "HR", dial_code: "+385" }, { name: "Cuba", flag: "🇨🇺", code: "CU", dial_code: "+53" }, { name: "Cyprus", flag: "🇨🇾", code: "CY", dial_code: "+357" }, { name: "Czech Republic", flag: "🇨🇿", code: "CZ", dial_code: "+420" }, { name: "Denmark", flag: "🇩🇰", code: "DK", dial_code: "+45" }, { name: "Djibouti", flag: "🇩🇯", code: "DJ", dial_code: "+253" }, { name: "Dominica", flag: "🇩🇲", code: "DM", dial_code: "+1767" }, { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1849" }, { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1829" }, { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1809" }, { name: "Ecuador", flag: "🇪🇨", code: "EC", dial_code: "+593" }, { name: "Egypt", flag: "🇪🇬", code: "EG", dial_code: "+20" }, { name: "El Salvador", flag: "🇸🇻", code: "SV", dial_code: "+503" }, { name: "Equatorial Guinea", flag: "🇬🇶", code: "GQ", dial_code: "+240" }, { name: "Eritrea", flag: "🇪🇷", code: "ER", dial_code: "+291" }, { name: "Estonia", flag: "🇪🇪", code: "EE", dial_code: "+372" }, { name: "Ethiopia", flag: "🇪🇹", code: "ET", dial_code: "+251" }, { name: "Falkland Islands (Malvinas)", flag: "🇫🇰", code: "FK", dial_code: "+500" }, { name: "Faroe Islands", flag: "🇫🇴", code: "FO", dial_code: "+298" }, { name: "Fiji", flag: "🇫🇯", code: "FJ", dial_code: "+679" }, { name: "Finland", flag: "🇫🇮", code: "FI", dial_code: "+358" }, { name: "France", flag: "🇫🇷", code: "FR", dial_code: "+33" }, { name: "French Guiana", flag: "🇬🇫", code: "GF", dial_code: "+594" }, { name: "French Polynesia", flag: "🇵🇫", code: "PF", dial_code: "+689" }, { name: "French Southern Territories", flag: "🇹🇫", code: "TF", dial_code: "+262" }, { name: "Gabon", flag: "🇬🇦", code: "GA", dial_code: "+241" }, { name: "Gambia", flag: "🇬🇲", code: "GM", dial_code: "+220" }, { name: "Georgia", flag: "🇬🇪", code: "GE", dial_code: "+995" }, { name: "Germany", flag: "🇩🇪", code: "DE", dial_code: "+49" }, { name: "Ghana", flag: "🇬🇭", code: "GH", dial_code: "+233" }, { name: "Gibraltar", flag: "🇬🇮", code: "GI", dial_code: "+350" }, { name: "Greece", flag: "🇬🇷", code: "GR", dial_code: "+30" }, { name: "Greenland", flag: "🇬🇱", code: "GL", dial_code: "+299" }, { name: "Grenada", flag: "🇬🇩", code: "GD", dial_code: "+1473" }, { name: "Guadeloupe", flag: "🇬🇵", code: "GP", dial_code: "+590" }, { name: "Guam", flag: "🇬🇺", code: "GU", dial_code: "+1671" }, { name: "Guatemala", flag: "🇬🇹", code: "GT", dial_code: "+502" }, { name: "Guernsey", flag: "🇬🇬", code: "GG", dial_code: "+44" }, { name: "Guinea", flag: "🇬🇳", code: "GN", dial_code: "+224" }, { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW", dial_code: "+245" }, { name: "Guyana", flag: "🇬🇾", code: "GY", dial_code: "+592" }, { name: "Haiti", flag: "🇭🇹", code: "HT", dial_code: "+509" }, { name: "Heard Island and Mcdonald Islands", flag: "🇭🇲", code: "HM", dial_code: "+672" }, { name: "Holy See (Vatican City State)", flag: "🇻🇦", code: "VA", dial_code: "+379" }, { name: "Honduras", flag: "🇭🇳", code: "HN", dial_code: "+504" }, { name: "Hong Kong", flag: "🇭🇰", code: "HK", dial_code: "+852" }, { name: "Hungary", flag: "🇭🇺", code: "HU", dial_code: "+36" }, { name: "Iceland", flag: "🇮🇸", code: "IS", dial_code: "+354" }, { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" }, { name: "Indonesia", flag: "🇮🇩", code: "ID", dial_code: "+62" }, { name: "Iran, Islamic Republic of Persian Gulf", flag: "🇮🇷", code: "IR", dial_code: "+98" }, { name: "Iraq", flag: "🇮🇶", code: "IQ", dial_code: "+964" }, { name: "Ireland", flag: "🇮🇪", code: "IE", dial_code: "+353" }, { name: "Isle of Man", flag: "🇮🇲", code: "IM", dial_code: "+44" }, { name: "Israel", flag: "🇮🇱", code: "IL", dial_code: "+972" }, { name: "Italy", flag: "🇮🇹", code: "IT", dial_code: "+39" }, { name: "Jamaica", flag: "🇯🇲", code: "JM", dial_code: "+1876" }, { name: "Japan", flag: "🇯🇵", code: "JP", dial_code: "+81" }, { name: "Jersey", flag: "🇯🇪", code: "JE", dial_code: "+44" }, { name: "Jordan", flag: "🇯🇴", code: "JO", dial_code: "+962" }, { name: "Kazakhstan", flag: "🇰🇿", code: "KZ", dial_code: "+7" }, { name: "Kenya", flag: "🇰🇪", code: "KE", dial_code: "+254" }, { name: "Kiribati", flag: "🇰🇮", code: "KI", dial_code: "+686" }, { name: "Korea, Democratic People's Republic of Korea", flag: "🇰🇵", code: "KP", dial_code: "+850" }, { name: "Korea, Republic of South Korea", flag: "🇰🇷", code: "KR", dial_code: "+82" }, { name: "Kosovo", flag: "🇽🇰", code: "XK", dial_code: "+383" }, { name: "Kuwait", flag: "🇰🇼", code: "KW", dial_code: "+965" }, { name: "Kyrgyzstan", flag: "🇰🇬", code: "KG", dial_code: "+996" }, { name: "Laos", flag: "🇱🇦", code: "LA", dial_code: "+856" }, { name: "Latvia", flag: "🇱🇻", code: "LV", dial_code: "+371" }, { name: "Lebanon", flag: "🇱🇧", code: "LB", dial_code: "+961" }, { name: "Lesotho", flag: "🇱🇸", code: "LS", dial_code: "+266" }, { name: "Liberia", flag: "🇱🇷", code: "LR", dial_code: "+231" }, { name: "Libyan Arab Jamahiriya", flag: "🇱🇾", code: "LY", dial_code: "+218" }, { name: "Liechtenstein", flag: "🇱🇮", code: "LI", dial_code: "+423" }, { name: "Lithuania", flag: "🇱🇹", code: "LT", dial_code: "+370" }, { name: "Luxembourg", flag: "🇱🇺", code: "LU", dial_code: "+352" }, { name: "Macao", flag: "🇲🇴", code: "MO", dial_code: "+853" }, { name: "Macedonia", flag: "🇲🇰", code: "MK", dial_code: "+389" }, { name: "Madagascar", flag: "🇲🇬", code: "MG", dial_code: "+261" }, { name: "Malawi", flag: "🇲🇼", code: "MW", dial_code: "+265" }, { name: "Malaysia", flag: "🇲🇾", code: "MY", dial_code: "+60" }, { name: "Maldives", flag: "🇲🇻", code: "MV", dial_code: "+960" }, { name: "Mali", flag: "🇲🇱", code: "ML", dial_code: "+223" }, { name: "Malta", flag: "🇲🇹", code: "MT", dial_code: "+356" }, { name: "Marshall Islands", flag: "🇲🇭", code: "MH", dial_code: "+692" }, { name: "Martinique", flag: "🇲🇶", code: "MQ", dial_code: "+596" }, { name: "Mauritania", flag: "🇲🇷", code: "MR", dial_code: "+222" }, { name: "Mauritius", flag: "🇲🇺", code: "MU", dial_code: "+230" }, { name: "Mayotte", flag: "🇾🇹", code: "YT", dial_code: "+262" }, { name: "Mexico", flag: "🇲🇽", code: "MX", dial_code: "+52" }, { name: "Micronesia, Federated States of Micronesia", flag: "🇫🇲", code: "FM", dial_code: "+691" }, { name: "Moldova", flag: "🇲🇩", code: "MD", dial_code: "+373" }, { name: "Monaco", flag: "🇲🇨", code: "MC", dial_code: "+377" }, { name: "Mongolia", flag: "🇲🇳", code: "MN", dial_code: "+976" }, { name: "Montenegro", flag: "🇲🇪", code: "ME", dial_code: "+382" }, { name: "Montserrat", flag: "🇲🇸", code: "MS", dial_code: "+1664" }, { name: "Morocco", flag: "🇲🇦", code: "MA", dial_code: "+212" }, { name: "Mozambique", flag: "🇲🇿", code: "MZ", dial_code: "+258" }, { name: "Myanmar", flag: "🇲🇲", code: "MM", dial_code: "+95" }, { name: "Namibia", flag: "🇳🇦", code: "NA", dial_code: "+264" }, { name: "Nauru", flag: "🇳🇷", code: "NR", dial_code: "+674" }, { name: "Nepal", flag: "🇳🇵", code: "NP", dial_code: "+977" }, { name: "Netherlands", flag: "🇳🇱", code: "NL", dial_code: "+31" }, { name: "Netherlands Antilles", flag: "", code: "AN", dial_code: "+599" }, { name: "New Caledonia", flag: "🇳🇨", code: "NC", dial_code: "+687" }, { name: "New Zealand", flag: "🇳🇿", code: "NZ", dial_code: "+64" }, { name: "Nicaragua", flag: "🇳🇮", code: "NI", dial_code: "+505" }, { name: "Niger", flag: "🇳🇪", code: "NE", dial_code: "+227" }, { name: "Nigeria", flag: "🇳🇬", code: "NG", dial_code: "+234" }, { name: "Niue", flag: "🇳🇺", code: "NU", dial_code: "+683" }, { name: "Norfolk Island", flag: "🇳🇫", code: "NF", dial_code: "+672" }, { name: "Northern Mariana Islands", flag: "🇲🇵", code: "MP", dial_code: "+1670" }, { name: "Norway", flag: "🇳🇴", code: "NO", dial_code: "+47" }, { name: "Oman", flag: "🇴🇲", code: "OM", dial_code: "+968" }, { name: "Pakistan", flag: "🇵🇰", code: "PK", dial_code: "+92" }, { name: "Palau", flag: "🇵🇼", code: "PW", dial_code: "+680" }, { name: "Palestinian Territory, Occupied", flag: "🇵🇸", code: "PS", dial_code: "+970" }, { name: "Panama", flag: "🇵🇦", code: "PA", dial_code: "+507" }, { name: "Papua New Guinea", flag: "🇵🇬", code: "PG", dial_code: "+675" }, { name: "Paraguay", flag: "🇵🇾", code: "PY", dial_code: "+595" }, { name: "Peru", flag: "🇵🇪", code: "PE", dial_code: "+51" }, { name: "Philippines", flag: "🇵🇭", code: "PH", dial_code: "+63" }, { name: "Pitcairn", flag: "🇵🇳", code: "PN", dial_code: "+64" }, { name: "Poland", flag: "🇵🇱", code: "PL", dial_code: "+48" }, { name: "Portugal", flag: "🇵🇹", code: "PT", dial_code: "+351" }, { name: "Puerto Rico", flag: "🇵🇷", code: "PR", dial_code: "+1939" }, { name: "Qatar", flag: "🇶🇦", code: "QA", dial_code: "+974" }, { name: "Romania", flag: "🇷🇴", code: "RO", dial_code: "+40" }, { name: "Russia", flag: "🇷🇺", code: "RU", dial_code: "+7" }, { name: "Rwanda", flag: "🇷🇼", code: "RW", dial_code: "+250" }, { name: "Reunion", flag: "🇷🇪", code: "RE", dial_code: "+262" }, { name: "Saint Barthelemy", flag: "🇧🇱", code: "BL", dial_code: "+590" }, { name: "Saint Helena, Ascension and Tristan Da Cunha", flag: "🇸🇭", code: "SH", dial_code: "+290" }, { name: "Saint Kitts and Nevis", flag: "🇰🇳", code: "KN", dial_code: "+1869" }, { name: "Saint Lucia", flag: "🇱🇨", code: "LC", dial_code: "+1758" }, { name: "Saint Martin", flag: "🇲🇫", code: "MF", dial_code: "+590" }, { name: "Saint Pierre and Miquelon", flag: "🇵🇲", code: "PM", dial_code: "+508" }, { name: "Saint Vincent and the Grenadines", flag: "🇻🇨", code: "VC", dial_code: "+1784" }, { name: "Samoa", flag: "🇼🇸", code: "WS", dial_code: "+685" }, { name: "San Marino", flag: "🇸🇲", code: "SM", dial_code: "+378" }, { name: "Sao Tome and Principe", flag: "🇸🇹", code: "ST", dial_code: "+239" }, { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", dial_code: "+966" }, { name: "Senegal", flag: "🇸🇳", code: "SN", dial_code: "+221" }, { name: "Serbia", flag: "🇷🇸", code: "RS", dial_code: "+381" }, { name: "Seychelles", flag: "🇸🇨", code: "SC", dial_code: "+248" }, { name: "Sierra Leone", flag: "🇸🇱", code: "SL", dial_code: "+232" }, { name: "Singapore", flag: "🇸🇬", code: "SG", dial_code: "+65" }, { name: "Slovakia", flag: "🇸🇰", code: "SK", dial_code: "+421" }, { name: "Slovenia", flag: "🇸🇮", code: "SI", dial_code: "+386" }, { name: "Solomon Islands", flag: "🇸🇧", code: "SB", dial_code: "+677" }, { name: "Somalia", flag: "🇸🇴", code: "SO", dial_code: "+252" }, { name: "South Africa", flag: "🇿🇦", code: "ZA", dial_code: "+27" }, { name: "South Sudan", flag: "🇸🇸", code: "SS", dial_code: "+211" }, { name: "South Georgia and the South Sandwich Islands", flag: "🇬🇸", code: "GS", dial_code: "+500" }, { name: "Spain", flag: "🇪🇸", code: "ES", dial_code: "+34" }, { name: "Sri Lanka", flag: "🇱🇰", code: "LK", dial_code: "+94" }, { name: "Sudan", flag: "🇸🇩", code: "SD", dial_code: "+249" }, { name: "Suriname", flag: "🇸🇷", code: "SR", dial_code: "+597" }, { name: "Svalbard and Jan Mayen", flag: "🇸🇯", code: "SJ", dial_code: "+47" }, { name: "Swaziland", flag: "🇸🇿", code: "SZ", dial_code: "+268" }, { name: "Sweden", flag: "🇸🇪", code: "SE", dial_code: "+46" }, { name: "Switzerland", flag: "🇨🇭", code: "CH", dial_code: "+41" }, { name: "Syrian Arab Republic", flag: "🇸🇾", code: "SY", dial_code: "+963" }, { name: "Taiwan", flag: "🇹🇼", code: "TW", dial_code: "+886" }, { name: "Tajikistan", flag: "🇹🇯", code: "TJ", dial_code: "+992" }, { name: "Tanzania, United Republic of Tanzania", flag: "🇹🇿", code: "TZ", dial_code: "+255" }, { name: "Thailand", flag: "🇹🇭", code: "TH", dial_code: "+66" }, { name: "Timor-Leste", flag: "🇹🇱", code: "TL", dial_code: "+670" }, { name: "Togo", flag: "🇹🇬", code: "TG", dial_code: "+228" }, { name: "Tokelau", flag: "🇹🇰", code: "TK", dial_code: "+690" }, { name: "Tonga", flag: "🇹🇴", code: "TO", dial_code: "+676" }, { name: "Trinidad and Tobago", flag: "🇹🇹", code: "TT", dial_code: "+1868" }, { name: "Tunisia", flag: "🇹🇳", code: "TN", dial_code: "+216" }, { name: "Turkey", flag: "🇹🇷", code: "TR", dial_code: "+90" }, { name: "Turkmenistan", flag: "🇹🇲", code: "TM", dial_code: "+993" }, { name: "Turks and Caicos Islands", flag: "🇹🇨", code: "TC", dial_code: "+1649" }, { name: "Tuvalu", flag: "🇹🇻", code: "TV", dial_code: "+688" }, { name: "Uganda", flag: "🇺🇬", code: "UG", dial_code: "+256" }, { name: "Ukraine", flag: "🇺🇦", code: "UA", dial_code: "+380" }, { name: "United Arab Emirates", flag: "🇦🇪", code: "AE", dial_code: "+971" }, { name: "United Kingdom", flag: "🇬🇧", code: "GB", dial_code: "+44" }, { name: "United States", flag: "🇺🇸", code: "US", dial_code: "+1" }, { name: "Uruguay", flag: "🇺🇾", code: "UY", dial_code: "+598" }, { name: "Uzbekistan", flag: "🇺🇿", code: "UZ", dial_code: "+998" }, { name: "Vanuatu", flag: "🇻🇺", code: "VU", dial_code: "+678" }, { name: "Venezuela, Bolivarian Republic of Venezuela", flag: "🇻🇪", code: "VE", dial_code: "+58" }, { name: "Vietnam", flag: "🇻🇳", code: "VN", dial_code: "+84" }, { name: "Virgin Islands, British", flag: "🇻🇬", code: "VG", dial_code: "+1284" }, { name: "Virgin Islands, U.S.", flag: "🇻🇮", code: "VI", dial_code: "+1340" }, { name: "Wallis and Futuna", flag: "🇼🇫", code: "WF", dial_code: "+681" }, { name: "Yemen", flag: "🇾🇪", code: "YE", dial_code: "+967" }, { name: "Zambia", flag: "🇿🇲", code: "ZM", dial_code: "+260" }, { name: "Zimbabwe", flag: "🇿🇼", code: "ZW", dial_code: "+263" }];
var oF = P('<div class="typebot-input-form flex w-full gap-2 items-end max-w-[350px]"><div class="flex typebot-input w-full"><div class="relative typebot-country-select flex justify-center items-center"><div class="pl-2 pr-1 flex items-center gap-2"><span></span></div><select class="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0">');
var aF = P("<option> ");
var iF = (e) => {
  let [t, r] = M(Xe(e.defaultCountryCode) ? "INT" : e.defaultCountryCode), [n, o] = M(e.defaultValue ?? ""), a, i = (p) => {
    if (o(p), (p == null ? void 0 : p.startsWith("+")) && p.length > 2) {
      let g = sn.reduce((m, f) => !(f == null ? void 0 : f.dial_code) || m !== null && !m.dial_code ? m : (p == null ? void 0 : p.startsWith(f.dial_code)) && f.dial_code.length > ((m == null ? void 0 : m.dial_code.length) ?? 0) ? f : m, null);
      g && r(g.code);
    }
  }, s = () => (a == null ? void 0 : a.value) !== "" && (a == null ? void 0 : a.reportValidity()), l = () => {
    var _a5;
    let p = (_a5 = sn.find((g) => g.code === t())) == null ? void 0 : _a5.dial_code;
    if (s()) {
      let g = (a == null ? void 0 : a.value) ?? n();
      e.onSubmit({ type: "text", value: g.startsWith("+") ? g : `${p ?? ""}${g}` });
    } else a == null ? void 0 : a.focus();
  }, d = (p) => {
    p.key === "Enter" && l();
  }, c = (p) => {
    let g = sn.find((f) => f.code === p.currentTarget.value);
    if (!g) return;
    let m = sn.find((f) => f.code === t());
    (n() === "" || m && n() === m.dial_code) && o(g.dial_code), r(g.code), a == null ? void 0 : a.focus();
  };
  ve(() => {
    !bt() && a && a.focus({ preventScroll: true }), window.addEventListener("message", u);
  }), ue(() => {
    window.removeEventListener("message", u);
  });
  let u = (p) => {
    let { data: g } = p;
    g.isFromTypebot && (g.command === "setInputValue" && o(g.value), g.command === "submitInput" && l());
  };
  return (() => {
    var p = oF(), g = p.firstChild, m = g.firstChild, f = m.firstChild, v = f.firstChild, w = f.nextSibling;
    return p.$$keydown = d, E(v, () => {
      var _a5;
      return (_a5 = sn.find((y) => t() === y.code)) == null ? void 0 : _a5.flag;
    }), E(f, h(lh, { class: "w-3" }), null), w.addEventListener("change", c), E(w, h(Oe, { each: sn, children: (y) => (() => {
      var T = aF(), b = T.firstChild;
      return E(T, () => y.name, b), E(T, (() => {
        var S = ae(() => !!y.dial_code);
        return () => S() ? `(${y.dial_code})` : "";
      })(), null), B(() => T.selected = y.code === t()), B(() => T.value = y.code), T;
    })() })), E(g, h(pi, { type: "tel", ref(y) {
      var T = a;
      typeof T == "function" ? T(y) : a = y;
    }, get value() {
      return n();
    }, onInput: i, get placeholder() {
      var _a5;
      return ((_a5 = e.labels) == null ? void 0 : _a5.placeholder) ?? nF.labels.placeholder;
    }, get autofocus() {
      return !bt();
    } }), null), E(p, h(vt, { type: "button", class: "h-[56px]", "on:click": l, get children() {
      var _a5;
      return (_a5 = e.labels) == null ? void 0 : _a5.button;
    } }), null), p;
  })();
};
nt(["keydown"]);
var Md = { buttonLabel: er, searchInputPlaceholder: "Filter the options...", isMultipleChoice: false, isSearchable: false, dynamicItems: { isEnabled: false } };
var sF = P('<div class="flex items-end typebot-input w-full">');
var lF = P('<form class="flex flex-col gap-2 w-full items-end"><div>');
var Ud = P("<span class=font-semibold>");
var Bd = P('<span class="text-sm whitespace-pre-wrap text-left">');
var $d = P('<div class="flex flex-col gap-1 ">');
var cF = P("<div role=checkbox><img fetchpriority=high class=m-auto><div>");
var dF = P('<div role=checkbox aria-checked class="flex flex-col focus:outline-none cursor-pointer select-none typebot-selectable-picture selected"><img fetchpriority=high><div>');
var uF = (e) => {
  let t, [r, n] = M(e.defaultItems), [o, a] = M([]), [i, s] = M(0);
  ve(() => {
    !bt() && t && t.focus({ preventScroll: true });
  });
  let l = (g) => {
    d(g);
  }, d = (g) => {
    let m = o().indexOf(g);
    a(m !== -1 ? (f) => f.filter((v) => v !== g) : (f) => [...f, g]);
  }, c = () => {
    let g = o().map((f) => e.defaultItems.find((v) => v.id === f)), m = g.some((f) => f == null ? void 0 : f.value);
    e.onSubmit({ type: "text", value: g.map((f) => (f == null ? void 0 : f.value) ? f.value : Ne(f == null ? void 0 : f.title) ? f.title : f == null ? void 0 : f.pictureSrc).join(", "), label: m ? g.map((f) => Ne(f == null ? void 0 : f.title) ? f.title : f == null ? void 0 : f.pictureSrc).join(", ") : void 0 });
  }, u = (g) => {
    n(e.defaultItems.filter((m) => {
      var _a5, _b2;
      return ((_a5 = m.title) == null ? void 0 : _a5.toLowerCase().includes((g ?? "").toLowerCase())) || ((_b2 = m.description) == null ? void 0 : _b2.toLowerCase().includes((g ?? "").toLowerCase()));
    }));
  };
  Ce(() => {
    i() === e.defaultItems.filter((g) => ie(g.pictureSrc)).length && e.onTransitionEnd();
  });
  let p = () => {
    s((g) => g + 1);
  };
  return (() => {
    var g = lF(), m = g.firstChild;
    return g.addEventListener("submit", c), E(g, h(Y, { get when() {
      var _a5;
      return (_a5 = e.options) == null ? void 0 : _a5.isSearchable;
    }, get children() {
      var f = sF();
      return E(f, h(ui, { ref(v) {
        var w = t;
        typeof w == "function" ? w(v) : t = v;
      }, onInput: u, get placeholder() {
        var _a5;
        return ((_a5 = e.options) == null ? void 0 : _a5.searchInputPlaceholder) ?? Md.searchInputPlaceholder;
      }, onClear: () => n(e.defaultItems) })), f;
    } }), m), E(m, h(Oe, { get each() {
      return r();
    }, children: (f, v) => (() => {
      var w = cF(), y = w.firstChild, T = y.nextSibling;
      return rt(w, "click", () => l(f.id)), y.addEventListener("load", p), E(T, h(ja, { get isChecked() {
        return o().some((b) => b === f.id);
      }, get class() {
        return "shrink-0" + (f.title || f.description ? " mt-1" : void 0);
      } }), null), E(T, h(Y, { get when() {
        return f.title || f.description;
      }, get children() {
        var b = $d();
        return E(b, h(Y, { get when() {
          return f.title;
        }, get children() {
          var S = Ud();
          return E(S, () => f.title), S;
        } }), null), E(b, h(Y, { get when() {
          return f.description;
        }, get children() {
          var S = Bd();
          return E(S, () => f.description), S;
        } }), null), b;
      } }), null), B((b) => {
        var S = o().some((N) => N === f.id), _ = "flex flex-col focus:outline-none cursor-pointer select-none typebot-selectable-picture" + (o().some((N) => N === f.id) ? " selected" : "") + ($r(f.pictureSrc) ? " has-svg" : ""), I = f.id, x = f.pictureSrc, C = f.title ?? `Picture ${v() + 1}`, R = `Picture choice ${v() + 1}`, D = "flex gap-3 py-2 shrink-0" + (Xe(f.title) && Xe(f.description) ? " justify-center" : " px-3");
        return S !== b.e && J(w, "aria-checked", b.e = S), _ !== b.t && Z(w, b.t = _), I !== b.a && J(w, "data-itemid", b.a = I), x !== b.o && J(y, "src", b.o = x), C !== b.i && J(y, "alt", b.i = C), R !== b.n && J(y, "elementtiming", b.n = R), D !== b.s && Z(T, b.s = D), b;
      }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0 }), w;
    })() }), null), E(m, h(Oe, { get each() {
      return o().filter((f) => r().every((v) => v.id !== f)).map((f) => e.defaultItems.find((v) => v.id === f)).filter(ie);
    }, children: (f, v) => (() => {
      var w = dF(), y = w.firstChild, T = y.nextSibling;
      return rt(w, "click", () => l(f.id)), E(T, h(ja, { get isChecked() {
        return o().some((b) => b === f.id);
      }, get class() {
        return "shrink-0" + (f.title || f.description ? " mt-1" : void 0);
      } }), null), E(T, h(Y, { get when() {
        return f.title || f.description;
      }, get children() {
        var b = $d();
        return E(b, h(Y, { get when() {
          return f.title;
        }, get children() {
          var S = Ud();
          return E(S, () => f.title), S;
        } }), null), E(b, h(Y, { get when() {
          return f.description;
        }, get children() {
          var S = Bd();
          return E(S, () => f.description), S;
        } }), null), b;
      } }), null), B((b) => {
        var _a5;
        var S = f.id, _ = (_a5 = e.defaultItems.find((R) => R.id === f.id)) == null ? void 0 : _a5.pictureSrc, I = f.title ?? `Selected picture ${v() + 1}`, x = `Selected picture choice ${v() + 1}`, C = "flex gap-3 py-2 shrink-0" + (Xe(f.title) && Xe(f.description) ? " justify-center" : " pl-4");
        return S !== b.e && J(w, "data-itemid", b.e = S), _ !== b.t && J(y, "src", b.t = _), I !== b.a && J(y, "alt", b.a = I), x !== b.o && J(y, "elementtiming", b.o = x), C !== b.i && Z(T, b.i = C), b;
      }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), w;
    })() }), null), E(g, (() => {
      var f = ae(() => o().length > 0);
      return () => f() && h(vt, { disableIcon: true, get children() {
        var _a5;
        return ((_a5 = e.options) == null ? void 0 : _a5.buttonLabel) ?? Md.buttonLabel;
      } });
    })(), null), B(() => {
      var _a5;
      return Z(m, "flex flex-wrap justify-end gap-2" + (((_a5 = e.options) == null ? void 0 : _a5.isSearchable) ? " overflow-y-scroll max-h-[464px] rounded-md" : ""));
    }), g;
  })();
};
var pF = P('<div class="flex items-end typebot-input w-full">');
var gF = P('<div class="flex flex-col gap-2 w-full"><div>');
var hF = P('<button><img fetchpriority=high class=m-auto><div><span class=font-semibold></span><span class="text-sm whitespace-pre-wrap text-left">');
var fF = (e) => {
  let t, [r, n] = M(e.defaultItems), [o, a] = M(0);
  ve(() => {
    !bt() && t && t.focus({ preventScroll: true });
  });
  let i = (d) => {
    let c = r()[d];
    if (c) return e.onSubmit({ type: "text", label: Ne(c.title) ? c.title : c.pictureSrc || c.id, value: Ne(c.value) ? c.value : c.id });
  }, s = (d) => {
    n(e.defaultItems.filter((c) => {
      var _a5, _b2;
      return ((_a5 = c.title) == null ? void 0 : _a5.toLowerCase().includes((d ?? "").toLowerCase())) || ((_b2 = c.description) == null ? void 0 : _b2.toLowerCase().includes((d ?? "").toLowerCase()));
    }));
  };
  Ce(() => {
    o() === e.defaultItems.filter((d) => ie(d.pictureSrc)).length && e.onTransitionEnd();
  });
  let l = () => {
    a((d) => d + 1);
  };
  return (() => {
    var d = gF(), c = d.firstChild;
    return E(d, h(Y, { get when() {
      var _a5;
      return (_a5 = e.options) == null ? void 0 : _a5.isSearchable;
    }, get children() {
      var u = pF();
      return E(u, h(ui, { ref(p) {
        var g = t;
        typeof g == "function" ? g(p) : t = p;
      }, onInput: s, get placeholder() {
        var _a5;
        return ((_a5 = e.options) == null ? void 0 : _a5.searchInputPlaceholder) ?? "";
      }, onClear: () => n(e.defaultItems) })), u;
    } }), c), E(c, h(Oe, { get each() {
      return r();
    }, children: (u, p) => (() => {
      var g = hF(), m = g.firstChild, f = m.nextSibling, v = f.firstChild, w = v.nextSibling;
      return rt(g, "click", () => i(p())), m.addEventListener("load", l), E(v, () => u.title), E(w, () => u.description), B((y) => {
        var T = u.id, b = "flex flex-col typebot-picture-button focus:outline-none filter hover:brightness-90 active:brightness-75 justify-between  " + ($r(u.pictureSrc) ? "has-svg" : ""), S = u.pictureSrc, _ = u.title ?? `Picture ${p() + 1}`, I = `Picture choice ${p() + 1}`, x = "flex flex-col gap-1 py-2 shrink-0 px-4 w-full" + (u.description ? " items-start" : "");
        return T !== y.e && J(g, "data-itemid", y.e = T), b !== y.t && Z(g, y.t = b), S !== y.a && J(m, "src", y.a = S), _ !== y.o && J(m, "alt", y.o = _), I !== y.i && J(m, "elementtiming", y.i = I), x !== y.n && Z(f, y.n = x), y;
      }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0 }), g;
    })() })), B(() => {
      var _a5;
      return Z(c, "gap-2 flex flex-wrap justify-end" + (((_a5 = e.options) == null ? void 0 : _a5.isSearchable) ? " overflow-y-scroll max-h-[464px] rounded-md" : ""));
    }), d;
  })();
};
var cr = { buttonType: "Numbers", length: 10, labels: { button: er }, startsAt: 0, customIcon: { isEnabled: false }, isOneClickSubmitEnabled: false };
var mF = P('<form class="flex flex-col gap-2"><div class="flex flex-wrap justify-center gap-2"></div><div class="flex justify-end">');
var bF = P('<span class="text-sm w-full rating-label">');
var yF = P('<span class="text-sm w-full text-right pr-2 rating-label">');
var vF = P("<div role=checkbox>");
var wF = P("<div>");
var xF = (e) => {
  let [t, r] = M(e.defaultValue ? Number(e.defaultValue) : void 0), n = (a) => {
    a.preventDefault();
    let i = t();
    St(i) || e.onSubmit({ type: "text", value: i.toString() });
  }, o = (a) => {
    var _a5;
    ((_a5 = e.block.options) == null ? void 0 : _a5.isOneClickSubmitEnabled) && e.onSubmit({ type: "text", value: a.toString() }), r(a);
  };
  return (() => {
    var a = mF(), i = a.firstChild, s = i.nextSibling;
    return a.addEventListener("submit", n), E(a, (() => {
      var l = ae(() => {
        var _a5, _b2;
        return !!((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.left);
      });
      return () => l() && (() => {
        var d = bF();
        return E(d, () => e.block.options.labels.left), d;
      })();
    })(), i), E(i, h(Oe, { get each() {
      var _a5, _b2, _c2;
      return Array.from(Array((((_a5 = e.block.options) == null ? void 0 : _a5.length) ?? cr.length) + ((((_b2 = e.block.options) == null ? void 0 : _b2.buttonType) ?? cr.buttonType) === "Numbers" ? -((((_c2 = e.block.options) == null ? void 0 : _c2.startsAt) ?? cr.startsAt) - 1) : 0)));
    }, children: (l, d) => h(kF, he(() => e.block.options, { get rating() {
      return t();
    }, get idx() {
      var _a5, _b2;
      return d() + ((((_a5 = e.block.options) == null ? void 0 : _a5.buttonType) ?? cr.buttonType) === "Numbers" ? ((_b2 = e.block.options) == null ? void 0 : _b2.startsAt) ?? cr.startsAt : 1);
    }, onClick: o })) })), E(a, (() => {
      var l = ae(() => {
        var _a5, _b2;
        return !!((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.right);
      });
      return () => l() && (() => {
        var d = yF();
        return E(d, () => e.block.options.labels.right), d;
      })();
    })(), s), E(s, (() => {
      var l = ae(() => !!ie(t()));
      return () => l() && h(vt, { disableIcon: true, get children() {
        var _a5, _b2;
        return ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button) ?? cr.labels.button;
      } });
    })()), a;
  })();
};
var kF = (e) => {
  let t = (r) => {
    r.preventDefault(), e.onClick(e.idx);
  };
  return h(ze, { get children() {
    return [h(Q, { get when() {
      return (e.buttonType ?? cr.buttonType) === "Numbers";
    }, get children() {
      return [h(Y, { get when() {
        return e.isOneClickSubmitEnabled;
      }, get children() {
        return h(Yt, { "on:click": t, get children() {
          return e.idx;
        } });
      } }), h(Y, { get when() {
        return !e.isOneClickSubmitEnabled;
      }, get children() {
        var r = vF();
        return rt(r, "click", t), E(r, () => e.idx), B((n) => {
          var o = ie(e.rating) && e.idx <= e.rating, a = "py-2 px-4 font-semibold focus:outline-none cursor-pointer select-none typebot-selectable" + (ie(e.rating) && e.idx <= e.rating ? " selected" : "");
          return o !== n.e && J(r, "aria-checked", n.e = o), a !== n.t && Z(r, n.t = a), n;
        }, { e: void 0, t: void 0 }), r;
      } })];
    } }), h(Q, { get when() {
      return (e.buttonType ?? cr.buttonType) !== "Numbers";
    }, get children() {
      var r = wF();
      return rt(r, "click", () => e.onClick(e.idx)), B((n) => {
        var _a5;
        var o = "flex justify-center items-center rating-icon-container cursor-pointer " + (ie(e.rating) && e.idx <= e.rating ? "selected" : ""), a = ((_a5 = e.customIcon) == null ? void 0 : _a5.isEnabled) && !Xe(e.customIcon.svg) ? e.customIcon.svg : TF;
        return o !== n.e && Z(r, n.e = o), a !== n.t && (r.innerHTML = n.t = a), n;
      }, { e: void 0, t: void 0 }), r;
    } })];
  } });
};
var TF = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
var SF = Kd(Ah(), 1);
var ns = { isLong: false, labels: { button: er, placeholder: "Type your answer..." }, audioClip: { isEnabled: false, visibility: "Auto" }, attachments: { isEnabled: false, visibility: "Auto" } };
var EF = P('<svg viewBox="0 0 384 512"stroke=currentColor fill=currentColor><path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z">');
var CF = (e) => (() => {
  var t = EF();
  return _e(t, e, true, true), t;
})();
var FF = P('<textarea class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input"rows=6 data-testid=textarea required>');
var PF = (e) => {
  let [t, r] = ct(e, ["ref", "onInput", "inputmode"]), n = bt();
  return (() => {
    var o = FF();
    o.$$input = (i) => t.onInput(i.currentTarget.value);
    var a = t.ref;
    return typeof a == "function" ? Fe(a, o) : t.ref = o, o.autofocus = !n, _e(o, he({ get inputmode() {
      return t.inputmode;
    } }, r), false, false), o;
  })();
};
nt(["input"]);
var _F = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">');
var zd = (e) => (() => {
  var t = _F();
  return _e(t, e, true, true), t;
})();
var IF = P('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2px stroke-linecap=round stroke-linejoin=round><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=10 cy=12 r=2></circle><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22">');
var OF = (e) => (() => {
  var t = IF();
  return _e(t, e, true, true), t;
})();
var AF = P("<input type=file id=document-upload multiple class=hidden>");
var RF = P('<input type=file id=photos-upload accept="image/avif, image/*, video/*, capture=camera"multiple class=hidden>');
var NF = P('<label aria-label="Add attachments"for=document-upload>');
var DF = P("<label> Document");
var LF = P("<label> Photos & videos");
var MF = (e) => [(() => {
  var t = AF();
  return t.addEventListener("change", (r) => {
    r.currentTarget.files && (e.onNewFiles(r.currentTarget.files), r.currentTarget.value = "");
  }), t;
})(), (() => {
  var t = RF();
  return t.addEventListener("change", (r) => {
    r.currentTarget.files && (e.onNewFiles(r.currentTarget.files), r.currentTarget.value = "");
  }), t;
})(), (() => {
  var t = NF();
  return E(t, h(zd, { class: "w-5" })), B(() => Z(t, oe("filter data-[state=open]:backdrop-brightness-90 hover:backdrop-brightness-95 transition rounded-md p-2 focus:outline-none @xs:hidden", e.class))), t;
})(), h(Or.Root, { get children() {
  return [h(Or.Trigger, { get class() {
    return oe("filter data-[state=open]:backdrop-brightness-90 hover:backdrop-brightness-95 transition rounded-md p-2 focus:outline-none @xs:block hidden", e.class);
  }, "aria-label": "Add attachments", get children() {
    return h(zd, { class: "w-5" });
  } }), h(Or.Positioner, { get children() {
    return h(Or.Content, { class: "p-3 gap-2 focus:outline-none", get children() {
      return [h(Or.Item, { value: "document", asChild: (t) => (() => {
        var r = DF(), n = r.firstChild;
        return _e(r, he(t, { for: "document-upload", class: "p-2 filter hover:brightness-95 flex gap-3 items-center" }), false, true), E(r, h(ah, { class: "w-4" }), n), r;
      })() }), h(Or.Item, { value: "photos", asChild: (t) => (() => {
        var r = LF(), n = r.firstChild;
        return _e(r, he(t, { for: "photos-upload", class: "p-2 filter hover:brightness-95 flex gap-3 items-center" }), false, true), E(r, h(OF, { class: "w-4" }), n), r;
      })() })];
    } });
  } })];
} })];
var UF = `
const gainFactor = 3;

class VolumeProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputs) {
    const input = inputs[0];
    if (input.length > 0) {
      const channelData = input[0];
      let sum = 0;
      for (let i = 0; i < channelData.length; i++) {
        sum += channelData[i] * channelData[i];
      }
      const rms = Math.sqrt(sum / channelData.length);
      this.port.postMessage(rms * 100 * gainFactor)
    }
    return true;
  }
}

registerProcessor("volume-processor", VolumeProcessor);

`;
var BF = P('<div><button class="p-0.5 rounded-full"aria-label="Stop recording"></button><div class="relative flex w-full"><canvas class="w-full h-[56px]"></canvas><div class="absolute left-gradient w-2 left-0 h-[56px]"></div><div class="absolute right-gradient w-3 right-0 h-[56px]"></div></div><span class="time-container flex-none w-[35px] font-bold text-sm">');
var _r = 3;
var Ir = 3;
var $F = 60;
var zF = 10;
var jF = 5;
var VF = 90;
var HF = (e) => {
  var _a5;
  let [t, r] = M(0), n, o, a, i, s, l, d, c = [], u, p, g = 0, m = je(((_a5 = e.buttonsTheme) == null ? void 0 : _a5.backgroundColor) ?? gg[dg(e.context.typebot.version) ? e.context.typebot.version : "6"]).join(", "), f = () => {
    if (!a || !n || !p) return;
    let y = performance.now(), T = y - p;
    p = y, a.clearRect(0, 0, n.width, n.height), a.fillStyle = `rgba(${m}, 0.2)`;
    for (let b = 0; b < (n.width + Ir) / (_r + Ir); b++) {
      let S = b * (_r + Ir) - g, _ = n.height * (zF / 100), I = (n.height - _) / 2;
      a.beginPath(), a.roundRect(S, I, _r, _, 5), a.fill();
    }
    a.fillStyle = `rgba(${m}, 1)`;
    for (let b = 0; b < c.length; b++) {
      let S = n.width + (b + 1) * (_r + Ir) - g, _ = n.height * ((c[b] ?? 0) / 100), I = (n.height - _) / 2;
      a.beginPath(), a.roundRect(S, I, _r, _, 5), a.fill();
    }
    g += $F * (T / 1e3), o = requestAnimationFrame(f);
  }, v = async () => {
    n && (d = await navigator.mediaDevices.getUserMedia({ audio: true }), e.onRecordingConfirmed(d), a || (a = n.getContext("2d") ?? void 0), u = setInterval(() => {
      r((y) => y += 1);
    }, 1e3), i = new AudioContext(), s = await GF(i), l = i.createMediaStreamSource(d), l.connect(s), s.connect(i.destination), s.port.onmessage = (y) => {
      ((n.width + Ir) / (_r + Ir) + c.length) * (_r + Ir) < n.width + g && c.push(Math.min(Math.max(y.data, jF), VF));
    }, p = performance.now(), o = requestAnimationFrame(f));
  }, w = () => {
    a && n && a.clearRect(0, 0, n.width, n.height), g = 0, s == null ? void 0 : s.disconnect(), s = void 0, l == null ? void 0 : l.disconnect(), l = void 0, i == null ? void 0 : i.close(), i = void 0, d == null ? void 0 : d.getTracks().forEach((y) => y.stop()), d = void 0, c = [], clearTimeout(u), r(0), cancelAnimationFrame(o), e.onAbortRecording();
  };
  return Ce(() => {
    e.recordingStatus === "asking" ? v() : e.recordingStatus === "stopped" && w();
  }), ue(() => {
    w();
  }), (() => {
    var y = BF(), T = y.firstChild, b = T.nextSibling, S = b.firstChild, _ = b.nextSibling;
    rt(T, "click", w), E(T, h(Bo, { class: "w-4" }));
    var I = n;
    return typeof I == "function" ? Fe(I, S) : n = S, E(_, () => WF(t())), B(() => Z(y, oe("w-full gap-2 items-center transition-opacity px-2 typebot-recorder", e.recordingStatus === "started" ? "opacity-100 flex" : "opacity-0 hidden"))), y;
  })();
};
var GF = async (e) => {
  let t = new Blob([UF], { type: "application/javascript" }), r = URL.createObjectURL(t);
  return await e.audioWorklet.addModule(r), new AudioWorkletNode(e, "volume-processor");
};
var WF = (e) => {
  let t = Math.floor(e / 60), r = (e % 60).toString().padStart(2, "0");
  return `${t}:${r}`;
};
var qF = P('<div class="p-2 flex gap-2 border-input-border overflow-auto"style=border-bottom-width:1px>');
var YF = P("<div>");
var KF = P("<div><div>");
var XF = (e) => {
  let [t, r] = M(e.defaultValue ?? ""), [n, o] = M([]), [a, i] = M(void 0), [s, l] = M(false), [d, c] = M("stopped"), u, p, g = [], m = (N) => r(N), f = () => (u == null ? void 0 : u.value) !== "" && (u == null ? void 0 : u.reportValidity()), v = async () => {
    var _a5;
    if (d() === "started" && p) {
      p.stop();
      return;
    }
    if (f()) {
      let N;
      if (n().length > 0) {
        i(void 0);
        let K = await Va({ apiHost: e.context.apiHost ?? hr({ ignoreChatApiUrl: true }), files: n().map((F) => ({ file: F, input: { blockId: e.block.id, sessionId: e.context.sessionId, fileName: F.name } })), onUploadProgress: i });
        if (K.type === "error") {
          qt.create({ description: K.error });
          return;
        }
        N = (_a5 = K.urls) == null ? void 0 : _a5.map((F, A) => F ? { ...F, blobUrl: URL.createObjectURL(n()[A]) } : null).filter(ie);
      }
      e.onSubmit({ type: "text", value: (u == null ? void 0 : u.value) ?? t(), attachments: N });
    } else u == null ? void 0 : u.focus();
  }, w = (N) => {
    var _a5;
    ((_a5 = e.block.options) == null ? void 0 : _a5.isLong) || N.key === "Enter" && v();
  }, y = (N) => {
    var _a5;
    ((_a5 = e.block.options) == null ? void 0 : _a5.isLong) && N.key === "Enter" && (N.metaKey || N.ctrlKey) && v();
  };
  ve(() => {
    !bt() && u && u.focus({ preventScroll: true }), window.addEventListener("message", T);
  }), ue(() => {
    window.removeEventListener("message", T);
  });
  let T = (N) => {
    let { data: K } = N;
    K.isFromTypebot && (K.command === "setInputValue" && r(K.value), K.command === "submitInput" && v());
  }, b = (N) => {
    N.preventDefault(), l(true);
  }, S = () => l(false), _ = (N) => {
    var _a5;
    N.preventDefault(), N.stopPropagation(), ((_a5 = N.dataTransfer) == null ? void 0 : _a5.files) && I(N.dataTransfer.files);
  }, I = (N) => {
    let K = Array.from(N).map((F) => oh({ existingFiles: n(), newFile: F, params: { sizeLimit: Ur("NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE") ? Number(Ur("NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE")) : void 0 }, context: e.context, onError: ({ description: A }) => {
      qt.create({ description: A });
    } })).filter(ie);
    K.length !== 0 && o((F) => [...K, ...F]);
  }, x = (N) => {
    o((K) => K.filter((F, A) => A !== N));
  }, C = () => {
    c("asking");
  }, R = (N) => {
    let K, F = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "video/mp4";
    p = new MediaRecorder(N, { mimeType: F }), p.ondataavailable = (A) => {
      A.data.size !== 0 && g.push(A.data);
    }, p.onstart = () => {
      K = Date.now();
    }, p.onstop = async () => {
      if (d() !== "started" || g.length === 0) return;
      let A = Date.now() - K, L = await (0, SF.fixWebmDuration)(new Blob(g, { type: F }), A), X = new File([L], `rec-${e.block.id}-${Date.now()}.${F === "audio/webm" ? "webm" : "mp4"}`, { type: F });
      i(void 0);
      let O = await Va({ apiHost: e.context.apiHost ?? hr({ ignoreChatApiUrl: true }), files: [{ file: X, input: { blockId: e.block.id, sessionId: e.context.sessionId, fileName: X.name } }], onUploadProgress: i });
      if (O.type === "error") {
        qt.create({ description: O.error });
        return;
      }
      let pe = O.urls.filter(ie).map((Ae) => Ae.url);
      e.onSubmit({ type: "recording", url: pe[0], blobUrl: URL.createObjectURL(X) });
    }, p.start(), c("started");
  }, D = () => {
    p == null ? void 0 : p.stop(), c("stopped"), p = void 0, g = [];
  };
  return (() => {
    var N = KF(), K = N.firstChild;
    return N.addEventListener("dragleave", S), N.addEventListener("dragover", b), N.addEventListener("drop", _), N.$$keydown = w, E(K, h(HF, { get recordingStatus() {
      return d();
    }, get buttonsTheme() {
      var _a5;
      return (_a5 = e.context.typebot.theme.chat) == null ? void 0 : _a5.buttons;
    }, get context() {
      return e.context;
    }, onRecordingConfirmed: R, onAbortRecording: D }), null), E(K, h(Y, { get when() {
      return d() !== "started";
    }, get children() {
      return [h(Y, { get when() {
        return n().length;
      }, get children() {
        var F = qF();
        return E(F, h(Oe, { get each() {
          return n();
        }, children: (A, L) => h(sh, { file: A, get uploadProgressPercent() {
          var _a5;
          return ae(() => !!a())() ? ae(() => {
            var _a6;
            return ((_a6 = a()) == null ? void 0 : _a6.fileIndex) === L();
          })() ? 20 : L() < (((_a5 = a()) == null ? void 0 : _a5.fileIndex) ?? 0) ? 100 : 0 : void 0;
        }, onRemoveClick: () => x(L()) }) })), F;
      } }), (() => {
        var F = YF();
        return E(F, (() => {
          var A = ae(() => {
            var _a5;
            return !!((_a5 = e.block.options) == null ? void 0 : _a5.isLong);
          });
          return () => A() ? h(PF, { ref(L) {
            var X = u;
            typeof X == "function" ? X(L) : u = L;
          }, onInput: m, onKeyDown: y, get value() {
            return t();
          }, get inputmode() {
            var _a5;
            return (_a5 = e.block.options) == null ? void 0 : _a5.inputMode;
          }, get placeholder() {
            var _a5, _b2;
            return ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.placeholder) ?? ns.labels.placeholder;
          } }) : h(pi, { ref(L) {
            var X = u;
            typeof X == "function" ? X(L) : u = L;
          }, onInput: m, get value() {
            return t();
          }, get inputmode() {
            var _a5;
            return (_a5 = e.block.options) == null ? void 0 : _a5.inputMode;
          }, get placeholder() {
            var _a5, _b2;
            return ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.placeholder) ?? ns.labels.placeholder;
          } });
        })(), null), E(F, h(Y, { get when() {
          var _a5, _b2;
          return ae(() => {
            var _a6, _b3;
            return !!(((_b3 = (_a6 = e.block.options) == null ? void 0 : _a6.attachments) == null ? void 0 : _b3.isEnabled) ?? ns.attachments.isEnabled);
          })() && ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.attachments) == null ? void 0 : _b2.saveVariableId);
        }, get children() {
          return h(MF, { onNewFiles: I, get class() {
            var _a5;
            return oe(((_a5 = e.block.options) == null ? void 0 : _a5.isLong) ? "ml-2" : void 0);
          } });
        } }), null), B(() => {
          var _a5;
          return Z(F, oe("flex justify-between px-2", ((_a5 = e.block.options) == null ? void 0 : _a5.isLong) ? "items-end" : "items-center"));
        }), F;
      })()];
    } }), null), E(N, h(ze, { get children() {
      return [h(Q, { get when() {
        var _a5, _b2;
        return ae(() => !t() && d() !== "started")() && ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.audioClip) == null ? void 0 : _b2.isEnabled);
      }, get children() {
        return h(Yt, { class: "h-[56px] flex items-center", "on:click": C, "aria-label": "Record voice", get children() {
          return h(CF, { class: "flex w-6 h-6" });
        } });
      } }), h(Q, { when: true, get children() {
        return h(vt, { type: "button", "on:click": v, get isDisabled() {
          return !!a();
        }, class: "h-[56px]", get children() {
          var _a5, _b2;
          return (_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button;
        } });
      } })];
    } }), null), B((F) => {
      var _a5;
      var A = oe("typebot-input-form flex w-full gap-2 items-end", ((_a5 = e.block.options) == null ? void 0 : _a5.isLong) && d() !== "started" ? "max-w-full" : "max-w-[350px]"), L = oe("relative typebot-input flex-col w-full", s() && "filter brightness-95");
      return A !== F.e && Z(N, F.e = A), L !== F.t && Z(K, F.t = L), F;
    }, { e: void 0, t: void 0 }), N;
  })();
};
nt(["keydown"]);
var ZF = P('<div class="typebot-input-form flex w-full gap-2 items-end max-w-[350px]"><div class="flex typebot-input w-full"><input class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input typebot-datetime-input "type=time data-testid=time style=font-size:16px>');
var JF = (e) => {
  let [t, r] = M(e.defaultValue ?? ""), n, o = (d) => r(d), a = () => (n == null ? void 0 : n.value) !== "" && (n == null ? void 0 : n.reportValidity()), i = () => {
    a() ? e.onSubmit({ type: "text", value: (n == null ? void 0 : n.value) ?? t() }) : n == null ? void 0 : n.focus();
  }, s = (d) => {
    d.key === "Enter" && i();
  };
  ve(() => {
    !bt() && n && n.focus({ preventScroll: true }), window.addEventListener("message", l);
  }), ue(() => {
    window.removeEventListener("message", l);
  });
  let l = (d) => {
    let { data: c } = d;
    c.isFromTypebot && (c.command === "setInputValue" && r(c.value), c.command === "submitInput" && i());
  };
  return (() => {
    var d = ZF(), c = d.firstChild, u = c.firstChild;
    d.$$keydown = s, u.$$input = (g) => {
      o(g.currentTarget.value);
    };
    var p = n;
    return typeof p == "function" ? Fe(p, u) : n = u, E(d, h(vt, { type: "button", class: "h-[56px]", "on:click": i, get children() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.block) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button;
    } }), null), B(() => u.value = t()), d;
  })();
};
nt(["keydown", "input"]);
var QF = { labels: { button: er, placeholder: "Type a URL..." }, retryMessageContent: "This URL doesn't seem to be valid. Can you type it again?" };
var eP = P('<div class="typebot-input-form flex w-full gap-2 items-end max-w-[350px]"><div class="flex typebot-input w-full">');
var tP = (e) => {
  let [t, r] = M(e.defaultValue ?? ""), n, o = (d) => {
    r(d);
  }, a = () => (n == null ? void 0 : n.value) !== "" && (n == null ? void 0 : n.reportValidity()), i = () => {
    n && !(n == null ? void 0 : n.value.startsWith("http")) && (n.value = `https://${n.value}`), a() ? e.onSubmit({ type: "text", value: (n == null ? void 0 : n.value) ?? t() }) : n == null ? void 0 : n.focus();
  }, s = (d) => {
    d.key === "Enter" && i();
  };
  ve(() => {
    !bt() && n && n.focus({ preventScroll: true }), window.addEventListener("message", l);
  }), ue(() => {
    window.removeEventListener("message", l);
  });
  let l = (d) => {
    let { data: c } = d;
    c.isFromTypebot && (c.command === "setInputValue" && r(c.value), c.command === "submitInput" && i(), c.command === "submitInput" && i());
  };
  return (() => {
    var d = eP(), c = d.firstChild;
    return d.$$keydown = s, E(c, h(pi, { ref(u) {
      var p = n;
      typeof p == "function" ? p(u) : n = u;
    }, get value() {
      return t();
    }, get placeholder() {
      var _a5, _b2;
      return ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.placeholder) ?? QF.labels.placeholder;
    }, onInput: o, type: "url", autocomplete: "url" })), E(d, h(vt, { type: "button", class: "h-[56px]", "on:click": i, get children() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.button;
    } }), null), d;
  })();
};
nt(["keydown"]);
var rP = P('<svg viewBox="0 0 156 156"class="size-6 @xs:size-10"data-testid=default-avatar><rect width=156 height=156 rx=78></rect><path d="M104.936 49.1111C103.446 45.3515 99.7782 42.6938 95.4875 42.6938H58.0109C52.3972 42.6938 47.8457 47.2454 47.8457 52.859V102.555C47.8457 105.405 49.0182 107.98 50.9075 109.825C52.3996 113.584 56.0699 116.242 60.3606 116.242H97.8373C103.451 116.242 108 111.693 108 106.079V56.3837C108 53.5334 106.828 50.9557 104.936 49.1111ZM99.7759 102.555C99.7759 104.918 97.8514 106.843 95.4875 106.843H58.0109C57.3177 106.843 56.6621 106.678 56.0817 106.382C54.6812 105.677 53.7202 104.225 53.7202 102.555V52.859C53.7202 50.4928 55.6446 48.5683 58.0109 48.5683H95.4875C97.748 48.5683 99.6067 50.3283 99.7641 52.5535C99.7712 52.6546 99.7759 52.7556 99.7759 52.859V102.555Z"fill=white></path><path d="M74.1477 54.4219L71.2273 54.9369C70.4362 55.0764 69.908 55.8308 70.0475 56.6219L77.6623 99.8073C77.8017 100.598 78.5561 101.127 79.3472 100.987L82.2676 100.472C83.0587 100.333 83.587 99.5783 83.4475 98.7872L75.8327 55.6018C75.6932 54.8107 74.9388 54.2824 74.1477 54.4219Z"fill=white>');
var nP = ({ backgroundColor: e }) => (() => {
  var t = rP(), r = t.firstChild;
  return J(r, "fill", e), t;
})();
var oP = P('<span class="text-4xl text-[40px]">');
var aP = P('<img alt="Bot avatar"class="flex justify-center items-center relative animate-fade-in shrink-0 w-6 h-6 text-sm @xs:w-10 @xs:h-10 @xs:text-xl"elementtiming="Bot avatar">');
var iP = P('<figure class="flex justify-center items-center rounded-full text-white relative animate-fade-in shrink-0 w-6 h-6 text-sm @xs:w-10 @xs:h-10 @xs:text-xl"><img alt="Bot avatar"class="rounded-full object-cover w-full h-full"elementtiming="Bot avatar"fetchpriority=high>');
var ch = (e) => h(Y, { get when() {
  return Ne(e.src);
}, keyed: true, get fallback() {
  return h(nP, { get backgroundColor() {
    return ae(() => !!e.isChatContainerLight)() ? Ee.gray.dark[2] : Ee.gray.dark[1];
  } });
}, get children() {
  return h(ze, { get children() {
    return [h(Q, { get when() {
      return sP(e.src ?? "");
    }, get children() {
      var t = oP();
      return E(t, () => e.src), t;
    } }), h(Q, { get when() {
      return $r(e.src);
    }, get children() {
      var t = aP();
      return B(() => J(t, "src", e.src)), t;
    } }), h(Q, { when: true, get children() {
      var t = iP(), r = t.firstChild;
      return B(() => J(r, "src", e.src)), t;
    } })];
  } });
} });
var sP = (e) => new RegExp("^(?:\\p{Extended_Pictographic}(?:\\uFE0F)?(?:\\p{Emoji_Modifier})?(?:\\u200D\\p{Extended_Pictographic}(?:\\uFE0F)?(?:\\p{Emoji_Modifier})?)*)|(?:\\p{Regional_Indicator}{2})|(?:[0-9#*]\\uFE0F?\\u20E3)$", "u").test(e);
var lP = P("<div>");
var jd = P('<div class="flex gap-1 overflow-auto max-w-[350px] flex-wrap justify-end @xs:items-center @xs:flex-nowrap">');
var cP = P('<span class="px-[15px] py-[7px]">');
var dP = P('<img alt=Attachment class="max-h-[calc(100vh-1rem)] max-w-[calc(100%-1rem)] rounded-[6px] m-auto">');
var uP = P('<div class="flex flex-col gap-1 items-end"><div class="p-px whitespace-pre-wrap max-w-full typebot-guest-bubble flex flex-col"data-testid=guest-bubble>');
var pP = P("<img>");
var gP = P('<div class="flex flex-col gap-1 items-end"><div class="p-2 w-full whitespace-pre-wrap typebot-guest-bubble flex flex-col"data-testid=guest-bubble><audio controls>');
var hP = (e) => (() => {
  var t = lP();
  return E(t, h(ze, { get children() {
    return [h(Q, { get when() {
      var _a5;
      return ((_a5 = e.answer) == null ? void 0 : _a5.type) === "text";
    }, get children() {
      return h(fP, { get answer() {
        return e.answer;
      } });
    } }), h(Q, { get when() {
      var _a5;
      return ((_a5 = e.answer) == null ? void 0 : _a5.type) === "recording";
    }, get children() {
      return h(mP, { get answer() {
        return e.answer;
      } });
    } })];
  } }), null), E(t, h(Y, { get when() {
    var _a5, _b2;
    return ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.guestAvatar) == null ? void 0 : _b2.isEnabled) ?? Cs;
  }, get children() {
    return h(ch, { get src() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.guestAvatar) == null ? void 0 : _b2.url;
    }, get isChatContainerLight() {
      var _a5, _b2;
      return kl({ chatContainer: (_a5 = e.theme.chat) == null ? void 0 : _a5.container, generalBackground: (_b2 = e.theme.general) == null ? void 0 : _b2.background });
    } });
  } }), null), B(() => {
    var _a5, _b2;
    return Z(t, oe("flex justify-end items-end animate-fade-in gap-2 guest-container", (((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.isEnabled) ?? mo) && "ml-7 @xs:ml-[50px]"));
  }), t;
})();
var fP = (e) => {
  let [t, r] = M();
  return (() => {
    var n = uP(), o = n.firstChild;
    return E(n, h(Y, { get when() {
      return (e.answer.attachments ?? []).length > 0;
    }, get children() {
      return [(() => {
        var a = jd();
        return E(a, h(Oe, { get each() {
          var _a5;
          return (_a5 = e.answer.attachments) == null ? void 0 : _a5.filter((i) => i.type.startsWith("image"));
        }, children: (i, s) => (() => {
          var l = pP();
          return l.$$click = () => r(i.blobUrl ?? i.url), B((d) => {
            var c = i.blobUrl ?? i.url, u = `Attached image ${s() + 1}`, p = oe("typebot-guest-bubble-image-attachment cursor-pointer", e.answer.attachments.filter((g) => g.type.startsWith("image")).length > 1 && "max-w-[90%]");
            return c !== d.e && J(l, "src", d.e = c), u !== d.t && J(l, "alt", d.t = u), p !== d.a && Z(l, d.a = p), d;
          }, { e: void 0, t: void 0, a: void 0 }), l;
        })() })), a;
      })(), (() => {
        var a = jd();
        return E(a, h(Oe, { get each() {
          var _a5;
          return (_a5 = e.answer.attachments) == null ? void 0 : _a5.filter((i) => !i.type.startsWith("image"));
        }, children: (i) => h(ih, { get file() {
          return { name: i.url.split("/").at(-1) };
        } }) })), a;
      })()];
    } }), o), E(o, h(Y, { get when() {
      return Ne(e.answer.label ?? e.answer.value);
    }, get children() {
      var a = cP();
      return E(a, () => e.answer.label ?? e.answer.value), a;
    } })), E(n, h(qg, { get isOpen() {
      return t() !== void 0;
    }, onClose: () => r(void 0), get children() {
      var a = dP();
      return B(() => J(a, "src", t())), a;
    } }), null), n;
  })();
};
var mP = (e) => (() => {
  var t = gP(), r = t.firstChild, n = r.firstChild;
  return B(() => J(n, "src", e.answer.blobUrl ?? e.answer.url)), t;
})();
nt(["click"]);
var bP = P('<div class="flex shrink-0 items-center w-6 h-6 @xs:w-10 @xs:h-10">');
var yP = P('<div class="flex justify-end animate-fade-in gap-1 @xs:gap-2 typebot-input-container">');
var vP = (e) => {
  let t = async (n) => {
    e.onSubmit(n);
  }, r = (n) => {
    e.onSkip(n);
  };
  return h(ze, { get children() {
    return [h(Q, { get when() {
      return ae(() => !!e.input.answer)() && e.input.answer.status !== "retry";
    }, get children() {
      return h(hP, { get answer() {
        return e.input.answer;
      }, get theme() {
        return e.theme;
      } });
    } }), h(Q, { get when() {
      var _a5;
      return St(e.input.answer) || ((_a5 = e.input.answer) == null ? void 0 : _a5.status) === "retry";
    }, get children() {
      var n = yP(), o = e.ref;
      return typeof o == "function" ? Fe(o, n) : e.ref = n, E(n, h(Y, { get when() {
        var _a5, _b2;
        return ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.isEnabled) ?? mo;
      }, get children() {
        return bP();
      } }), null), E(n, h(xP, { get context() {
        return e.context;
      }, get block() {
        return e.input;
      }, get chunkIndex() {
        return e.chunkIndex;
      }, get isInputPrefillEnabled() {
        return e.isInputPrefillEnabled;
      }, get existingAnswer() {
        return ae(() => {
          var _a5;
          return ((_a5 = e.input.answer) == null ? void 0 : _a5.status) === "retry";
        })() ? wP(e.input.answer) : void 0;
      }, get onTransitionEnd() {
        return e.onTransitionEnd;
      }, onSubmit: t, onSkip: r }), null), B(() => J(n, "data-blockid", e.input.id)), n;
    } })];
  } });
};
var wP = (e) => {
  if (e) return e.type === "text" ? e.value : e.url;
};
var xP = (e) => {
  let t = () => e.existingAnswer ?? (e.isInputPrefillEnabled ? e.block.prefilledValue : void 0), r = () => {
    var _a5, _b2;
    return e.onSubmit({ type: "text", value: ((_b2 = (_a5 = e.block.options) == null ? void 0 : _a5.labels) == null ? void 0 : _b2.success) ?? nh.labels.success });
  };
  return h(ze, { get children() {
    return [h(Q, { get when() {
      return e.block.type === "text input";
    }, get children() {
      return h(XF, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get context() {
        return e.context;
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "number input";
    }, get children() {
      return h(YC, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "email input";
    }, get children() {
      return h(xC, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "url input";
    }, get children() {
      return h(tP, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "phone number input";
    }, get children() {
      return h(iF, { get labels() {
        var _a5;
        return (_a5 = e.block.options) == null ? void 0 : _a5.labels;
      }, get defaultCountryCode() {
        var _a5;
        return (_a5 = e.block.options) == null ? void 0 : _a5.defaultCountryCode;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "date input";
    }, get children() {
      return h(mC, { get options() {
        return e.block.options;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "time input";
    }, get children() {
      return h(JF, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return kP(e.block);
    }, keyed: true, children: (n) => h(ze, { get children() {
      return [h(Q, { get when() {
        var _a5;
        return !((_a5 = n.options) == null ? void 0 : _a5.isMultipleChoice);
      }, get children() {
        return h(M2, { get chunkIndex() {
          return e.chunkIndex;
        }, get defaultItems() {
          return n.items;
        }, get options() {
          return n.options;
        }, get onSubmit() {
          return e.onSubmit;
        } });
      } }), h(Q, { get when() {
        var _a5;
        return (_a5 = n.options) == null ? void 0 : _a5.isMultipleChoice;
      }, get children() {
        return h(q2, { get defaultItems() {
          return n.items;
        }, get options() {
          return n.options;
        }, get onSubmit() {
          return e.onSubmit;
        } });
      } })];
    } }) }), h(Q, { get when() {
      return TP(e.block);
    }, keyed: true, children: (n) => h(ze, { get children() {
      return [h(Q, { get when() {
        var _a5;
        return !((_a5 = n.options) == null ? void 0 : _a5.isMultipleChoice);
      }, get children() {
        return h(fF, { get defaultItems() {
          return n.items;
        }, get options() {
          return n.options;
        }, get onSubmit() {
          return e.onSubmit;
        }, get onTransitionEnd() {
          return e.onTransitionEnd;
        } });
      } }), h(Q, { get when() {
        var _a5;
        return (_a5 = n.options) == null ? void 0 : _a5.isMultipleChoice;
      }, get children() {
        return h(uF, { get defaultItems() {
          return n.items;
        }, get options() {
          return n.options;
        }, get onSubmit() {
          return e.onSubmit;
        }, get onTransitionEnd() {
          return e.onTransitionEnd;
        } });
      } })];
    } }) }), h(Q, { get when() {
      return e.block.type === "rating input";
    }, get children() {
      return h(xF, { get block() {
        return e.block;
      }, get defaultValue() {
        return t();
      }, get onSubmit() {
        return e.onSubmit;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "file input";
    }, get children() {
      return h(BC, { get context() {
        return e.context;
      }, get block() {
        return e.block;
      }, get onSubmit() {
        return e.onSubmit;
      }, get onSkip() {
        return e.onSkip;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "payment input";
    }, get children() {
      return h(rF, { get context() {
        return e.context;
      }, get options() {
        return { ...e.block.options, ...e.block.runtimeOptions };
      }, onSuccess: r, get onTransitionEnd() {
        return e.onTransitionEnd;
      } });
    } }), h(Q, { get when() {
      return e.block.type === "cards";
    }, get children() {
      return h(uC, { get block() {
        return e.block;
      }, get onSubmit() {
        return e.onSubmit;
      }, get onTransitionEnd() {
        return e.onTransitionEnd;
      } });
    } })];
  } });
};
var kP = (e) => (e == null ? void 0 : e.type) === "choice input" ? e : void 0;
var TP = (e) => (e == null ? void 0 : e.type) === "picture choice input" ? e : void 0;
var SP = P('<div class="flex shrink-0 items-center relative typebot-avatar-container w-6 @xs:w-10"><div>');
var zs = (e) => {
  let t, [r, n] = M(0), o = new ResizeObserver((a) => {
    n(a[0].target.clientHeight);
  });
  return ve(() => {
    t && o.observe(t);
  }), ue(() => {
    t && o.unobserve(t);
  }), (() => {
    var a = SP(), i = a.firstChild, s = t;
    return typeof s == "function" ? Fe(s, a) : t = a, E(i, h(ch, { get src() {
      var _a5, _b2;
      return (_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.url;
    }, get isChatContainerLight() {
      var _a5, _b2;
      return kl({ chatContainer: (_a5 = e.theme.chat) == null ? void 0 : _a5.container, generalBackground: (_b2 = e.theme.general) == null ? void 0 : _b2.background });
    } })), B((l) => {
      var d = `${r()}px`, c = oe("absolute flex items-center w-6 h-6 @xs:w-10 @xs:h-10 top-[max(0px,calc(var(--top)-24px))] @xs:top-[max(0px,calc(var(--top)-40px))]", e.hideAvatar ? "opacity-0" : "opacity-100"), u = e.isTransitionDisabled ? void 0 : "top 350ms ease-out, opacity 250ms ease-out";
      return d !== l.e && ne(a, "--top", l.e = d), c !== l.t && Z(i, l.t = c), u !== l.a && ne(i, "transition", l.a = u), l;
    }, { e: void 0, t: void 0, a: void 0 }), a;
  })();
};
var Vd = P('<div class="flex gap-1 @xs:gap-2"><div>');
var EP = P('<div class="flex flex-col w-full min-w-0 gap-2 typebot-chat-chunk">');
var CP = (e) => {
  let t, [r, n] = M(e.isTransitionDisabled ? e.messages.length : 0), [o, a] = M();
  ve(() => {
    e.streamingMessage || (e.messages.length === 0 && e.onAllBubblesDisplayed(), e.onScrollToBottom({ lastElement: t, offset: 50 }));
  });
  let i = async (s) => {
    var _a5;
    (((_a5 = e.settings.typingEmulation) == null ? void 0 : _a5.delayBetweenBubbles) ?? ht.typingEmulation.delayBetweenBubbles) > 0 && r() < e.messages.length - 1 && await new Promise((d) => {
      var _a6;
      return setTimeout(d, (((_a6 = e.settings.typingEmulation) == null ? void 0 : _a6.delayBetweenBubbles) ?? ht.typingEmulation.delayBetweenBubbles) * 1e3);
    });
    let l = e.messages[r()].id;
    await e.onNewBubbleDisplayed(l), n(r() === e.messages.length ? r() : r() + 1), e.onScrollToBottom({ lastElement: s }), r() === e.messages.length && (a(s), e.onAllBubblesDisplayed());
  };
  return (() => {
    var s = EP();
    return E(s, h(Y, { get when() {
      return e.messages.length > 0;
    }, get children() {
      var l = Vd(), d = l.firstChild;
      return E(l, h(Y, { get when() {
        return ae(() => {
          var _a5, _b2;
          return !!(((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.isEnabled) ?? mo);
        })() && e.messages.length > 0;
      }, get children() {
        return h(zs, { get hideAvatar() {
          return e.hideAvatar;
        }, get isTransitionDisabled() {
          return e.isTransitionDisabled;
        }, get theme() {
          return e.theme;
        } });
      } }), d), E(d, h(Oe, { get each() {
        return e.messages.slice(0, r() + 1);
      }, children: (c, u) => h(YE, { message: c, get typingEmulation() {
        return e.settings.typingEmulation;
      }, get isTypingSkipped() {
        return ae(() => {
          var _a5;
          return !!((((_a5 = e.settings.typingEmulation) == null ? void 0 : _a5.isDisabledOnFirstMessage) ?? ht.typingEmulation.isDisabledOnFirstMessage) && e.index === 0);
        })() && u() === 0;
      }, get onTransitionEnd() {
        return e.isTransitionDisabled ? void 0 : i;
      }, get onCompleted() {
        return e.onSubmit;
      } }) })), B(() => {
        var _a5, _b2;
        return Z(d, oe("flex flex-col flex-1 gap-2", ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.guestAvatar) == null ? void 0 : _b2.isEnabled) ?? Cs ? "max-w-[calc(100%-60px)] sm:max-w-[calc(100%-48px-48px)]" : "max-w-full"));
      }), l;
    } }), null), E(s, h(Y, { get when() {
      return ae(() => !!(e.input && r() === e.messages.length))() && !e.input.isHidden;
    }, get children() {
      return h(vP, { ref(l) {
        var d = t;
        typeof d == "function" ? d(l) : t = l;
      }, get input() {
        return e.input;
      }, get chunkIndex() {
        return e.index;
      }, get theme() {
        return e.theme;
      }, get context() {
        return e.context;
      }, get isInputPrefillEnabled() {
        var _a5;
        return ((_a5 = e.settings.general) == null ? void 0 : _a5.isInputPrefillEnabled) ?? ht.general.isInputPrefillEnabled;
      }, onTransitionEnd: () => e.onScrollToBottom({ lastElement: o() }), get onSubmit() {
        return e.onSubmit;
      }, get onSkip() {
        return e.onSkip;
      } });
    } }), null), E(s, h(Y, { get when() {
      return e.streamingMessage;
    }, get children() {
      var l = Vd(), d = l.firstChild;
      return E(l, h(Y, { get when() {
        var _a5, _b2;
        return ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.isEnabled) ?? mo;
      }, get children() {
        return h(zs, { get hideAvatar() {
          return e.hideAvatar;
        }, get theme() {
          return e.theme;
        } });
      } }), d), E(d, h(F2, { get content() {
        return e.streamingMessage;
      } })), B(() => {
        var _a5, _b2;
        return Z(d, oe("flex flex-col flex-1 gap-2", ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.guestAvatar) == null ? void 0 : _b2.isEnabled) ?? Cs ? "max-w-[calc(100%-60px)] sm:max-w-[calc(100%-48px-48px)]" : "max-w-full"));
      }), l;
    } }), null), s;
  })();
};
var FP = P('<div class="flex flex-col animate-fade-in"><div class="flex w-full items-center"><div class="flex relative items-start typebot-host-bubble"><div class="flex items-center absolute px-4 py-2 bubble-typing "data-testid=host-bubble></div><p class="overflow-hidden text-fade-in mx-4 my-2 whitespace-pre-wrap slate-html-container relative opacity-0 h-6 text-ellipsis">');
var PP = () => (() => {
  var e = FP(), t = e.firstChild, r = t.firstChild, n = r.firstChild;
  return ne(n, "width", "64px"), ne(n, "height", "32px"), E(n, h(Hr, {})), e;
})();
var _P = P('<div class="flex w-full typebot-loading-chunk"><div class="flex flex-col w-full min-w-0"><div class="flex gap-2">');
var IP = (e) => (() => {
  var t = _P(), r = t.firstChild, n = r.firstChild;
  return E(n, h(Y, { get when() {
    var _a5, _b2;
    return ((_b2 = (_a5 = e.theme.chat) == null ? void 0 : _a5.hostAvatar) == null ? void 0 : _b2.isEnabled) ?? mo;
  }, get children() {
    return h(zs, { get theme() {
      return e.theme;
    } });
  } }), null), E(n, h(PP, {}), null), t;
})();
var OP = P('<div><div><div class="w-full flex flex-col gap-2 @xs:px-5 px-3">');
var AP = P('<div class="w-full shrink-0 typebot-bottom-spacer h-5">');
var RP = 0.6;
var NP = 50;
var DP = (e) => {
  let t, r = Ag(), [n, o] = Ns(M([{ version: "2", input: e.initialChatReply.input, messages: e.initialChatReply.messages, clientSideActions: e.initialChatReply.clientSideActions, dynamicTheme: e.initialChatReply.dynamicTheme }]), { key: `typebot-${e.context.typebot.id}-chatChunks`, storage: e.context.storage, transformInitDataFromStorage: (F) => YS(F, { storage: e.context.storage, typebotId: e.context.typebot.id }), onRecovered: () => {
    setTimeout(() => {
      var _a5;
      (_a5 = u()) == null ? void 0 : _a5.scrollTo(0, u().scrollHeight);
    }, 200);
  } }), [a, i] = Ns(M(false), { key: `typebot-${e.context.typebot.id}-isEnded`, storage: e.context.storage }), [s, l] = M(false), [d, c] = M(true);
  ve(() => {
    window.addEventListener("message", _), (async () => {
      var _a5, _b2, _c2, _d2, _e2, _f2;
      if (n().length > 1) {
        p();
        let F = (_a5 = n().findLast((A) => {
          var _a6;
          return (_a6 = A.dynamicTheme) == null ? void 0 : _a6.backgroundUrl;
        })) == null ? void 0 : _a5.dynamicTheme;
        (F == null ? void 0 : F.backgroundUrl) && Gd(F.backgroundUrl, (_b2 = r()) == null ? void 0 : _b2.style), ((_d2 = (_c2 = n().at(-1)) == null ? void 0 : _c2.input) == null ? void 0 : _d2.answer) && v((_f2 = (_e2 = n().at(-1)) == null ? void 0 : _e2.input) == null ? void 0 : _f2.answer);
      }
      await S();
    })();
  });
  let u = () => {
    var _a5;
    return (_a5 = r()) == null ? void 0 : _a5.querySelector(".scrollable-container");
  }, p = () => {
    var _a5;
    ((_a5 = n().at(-1)) == null ? void 0 : _a5.streamingMessage) && o((F) => F.slice(0, -1));
  }, g = ({ message: F }) => {
    var _a5;
    l(false), c(false), ((_a5 = n().at(-1)) == null ? void 0 : _a5.streamingMessage) ? o((A) => A.map((L, X) => X === A.length - 1 ? { ...L, messages: [], streamingMessage: F } : L)) : o((A) => [...A, { version: "2", messages: [], streamingMessage: F }]);
  }, m = async (F) => {
    var _a5;
    F && ((_a5 = e.onNewLogs) == null ? void 0 : _a5.call(e, F), !e.context.isPreview && await hd({ apiHost: e.context.apiHost, sessionId: e.initialChatReply.sessionId, clientLogs: F }));
  }, f = () => {
    var _a5, _b2, _c2, _d2;
    qt.create({ title: ((_b2 = (_a5 = e.context.typebot.settings.general) == null ? void 0 : _a5.systemMessages) == null ? void 0 : _b2.networkErrorTitle) ?? Dr.networkErrorTitle, description: ((_d2 = (_c2 = e.context.typebot.settings.general) == null ? void 0 : _c2.systemMessages) == null ? void 0 : _d2.networkErrorMessage) ?? Dr.networkErrorMessage });
  }, v = async (F) => {
    var _a5, _b2, _c2;
    let A = n().at(-1);
    if (F && F.type !== "clientSideResult" && o(Hd(F)), (A == null ? void 0 : A.clientSideActions) && A.clientSideActions.length > 0 && ((_b2 = (_a5 = A.input) == null ? void 0 : _a5.answer) == null ? void 0 : _b2.status) === "retry") {
      await S();
      return;
    }
    ((_c2 = A == null ? void 0 : A.input) == null ? void 0 : _c2.id) && F && F.type !== "clientSideResult" && e.onAnswer && e.onAnswer({ message: qS(F), blockId: A.input.id });
    let L = setTimeout(() => {
      l(true);
    }, 1e3);
    y();
    let { data: X, error: O } = await gd({ apiHost: e.context.apiHost, sessionId: e.initialChatReply.sessionId, message: MP(F) });
    clearTimeout(L), l(false), await w({ data: X, error: O });
  }, w = async ({ data: F, error: A }) => {
    var _a5, _b2, _c2, _d2, _e2;
    if (A) {
      qT(A) && f();
      let L = [await di({ err: A, context: "While sending message" })];
      await hd({ apiHost: e.context.apiHost, sessionId: e.initialChatReply.sessionId, clientLogs: L }), (_a5 = e.onNewLogs) == null ? void 0 : _a5.call(e, L);
      return;
    }
    F && (F.progress && ((_b2 = e.onProgressUpdate) == null ? void 0 : _b2.call(e, F.progress)), F.lastMessageNewFormat && o(BP(F.lastMessageNewFormat)), F.logs && ((_c2 = e.onNewLogs) == null ? void 0 : _c2.call(e, F.logs)), ((_d2 = F.dynamicTheme) == null ? void 0 : _d2.backgroundUrl) && Gd(F.dynamicTheme.backgroundUrl, (_e2 = r()) == null ? void 0 : _e2.style), F.input && e.onNewInputBlock && e.onNewInputBlock(F.input), o(zP(F)), await S());
  }, y = ({ lastElement: F, offset: A = 0 } = {}) => {
    let L = u();
    if (!L || L.scrollTop + L.clientHeight < L.scrollHeight - L.clientHeight * RP && !d()) return;
    let X = (O) => {
      let pe, Ae = () => {
        clearTimeout(pe), pe = window.setTimeout(() => {
          O(), L == null ? void 0 : L.removeEventListener("scroll", Ae);
        }, 100);
      };
      L == null ? void 0 : L.addEventListener("scroll", Ae, { passive: true });
    };
    setTimeout(() => {
      X(() => {
        if (!L) return;
        let O = Math.abs(L.scrollHeight - L.scrollTop - L.clientHeight) < 2;
        c(O);
      }), L == null ? void 0 : L.scrollTo({ top: F ? F.offsetTop - A : L == null ? void 0 : L.scrollHeight, behavior: "smooth" });
    }, NP);
  }, T = async () => {
    var _a5;
    let F = n().at(-1);
    F && St(F.input) && (i(true), (_a5 = e.onEnd) == null ? void 0 : _a5.call(e));
  }, b = async (F) => {
    await S(F);
  }, S = async (F) => {
    var _a5, _b2, _c2, _d2, _e2, _f2;
    let A = false, L = [];
    for (let X of ((_a5 = n().at(-1)) == null ? void 0 : _a5.clientSideActions) ?? []) {
      if (F !== X.lastBubbleBlockId) break;
      L.push(X);
    }
    if (L.length !== 0) for (let X of L) {
      ("streamOpenAiChatCompletion" in X || "webhookToExecute" in X || "stream" in X) && l(true);
      let O = await WS({ clientSideAction: X, context: { apiHost: e.context.apiHost, wsHost: e.context.wsHost, sessionId: e.initialChatReply.sessionId, resultId: e.initialChatReply.resultId }, onMessageStream: g, onStreamError: async (pe) => {
        var _a6;
        o(HP), A = true, await m([pe]), (_a6 = e.onNewLogs) == null ? void 0 : _a6.call(e, [pe]);
      } });
      if (("streamOpenAiChatCompletion" in X || "stream" in X) && O && "replyToSend" in O && !O.replyToSend) {
        l(false);
        continue;
      }
      if (A) return;
      if (o($P), O && "logs" in O && m(O.logs), O && "replyToSend" in O) {
        l(false), v(O.replyToSend ? { type: "clientSideResult", result: O.replyToSend } : void 0);
        return;
      }
      O && "blockedPopupUrl" in O && qt.create({ title: ((_c2 = (_b2 = e.context.typebot.settings.general) == null ? void 0 : _b2.systemMessages) == null ? void 0 : _c2.popupBlockedTitle) ?? Dr.popupBlockedTitle, description: ((_e2 = (_d2 = e.context.typebot.settings.general) == null ? void 0 : _d2.systemMessages) == null ? void 0 : _e2.popupBlockedDescription) ?? Dr.popupBlockedDescription, meta: { link: O.blockedPopupUrl } }), O && "scriptCallbackMessage" in O && ((_f2 = e.onScriptExecutionSuccess) == null ? void 0 : _f2.call(e, O.scriptCallbackMessage));
    }
  };
  ue(() => {
    window.removeEventListener("message", _);
  });
  let _ = async (F) => {
    let { data: A } = F;
    !A.isFromTypebot || A.id && e.context.typebot.id !== A.id || A.command === "sendCommand" && !a() && await I(A.text);
  }, I = async (F, A = 0, L = 5) => {
    var _a5, _b2;
    if (s()) {
      if (A >= L) throw new Error("Max retry attempts for command reached");
      return await new Promise((Ae) => setTimeout(Ae, 5e3)), I(F, A + 1, L);
    }
    let X = setTimeout(() => {
      l(true);
    }, 1e3);
    y();
    let { data: O, error: pe } = await gd({ apiHost: e.context.apiHost, sessionId: e.initialChatReply.sessionId, message: { type: "command", command: F } });
    return clearTimeout(X), l(false), ((_b2 = (_a5 = n().at(-1)) == null ? void 0 : _a5.input) == null ? void 0 : _b2.id) && O && o(UP), w({ data: O, error: pe });
  }, x = (F) => {
    o(Hd({ type: "text", value: F })), v(void 0);
  }, C = te(() => {
    var _a5;
    return Is(e.initialChatReply.typebot.theme, (_a5 = n().findLast((F) => F.dynamicTheme)) == null ? void 0 : _a5.dynamicTheme);
  }), R = WT(() => t), D = te(() => {
    var _a5, _b2;
    return (((_b2 = (_a5 = e.initialChatReply.typebot.theme.chat) == null ? void 0 : _a5.container) == null ? void 0 : _b2.backgroundColor) ?? si) === "transparent";
  }), N = te(() => n().filter(VP)), K = te(() => {
    let F = N(), A = s();
    return F.map((L, X) => {
      var _a5, _b2;
      let O = F[X + 1];
      return ((!L.input || ((_a5 = L.input) == null ? void 0 : _a5.isHidden)) && ((((_b2 = O == null ? void 0 : O.messages) == null ? void 0 : _b2.length) ?? 0) > 0 || (O == null ? void 0 : O.streamingMessage) !== void 0 || L.messages.length > 0 && A)) ?? false;
    });
  });
  return h(Bg.Provider, { value: R, get children() {
    var F = OP(), A = F.firstChild, L = A.firstChild, X = t;
    return typeof X == "function" ? Fe(X, A) : t = A, E(L, h(Hu, { get each() {
      return N();
    }, children: (O, pe) => h(CP, { index: pe, get messages() {
      return O().messages;
    }, get input() {
      return O().input;
    }, get theme() {
      return Is(e.initialChatReply.typebot.theme, O().dynamicTheme);
    }, get settings() {
      return e.initialChatReply.typebot.settings;
    }, get context() {
      return e.context;
    }, get hideAvatar() {
      return K()[pe];
    }, get isTransitionDisabled() {
      return pe !== N().length - 1;
    }, get streamingMessage() {
      return O().streamingMessage;
    }, onNewBubbleDisplayed: b, onAllBubblesDisplayed: T, onSubmit: v, onScrollToBottom: y, onSkip: x }) }), null), E(L, h(Y, { get when() {
      return s();
    }, get children() {
      return h(IP, { get theme() {
        return C();
      } });
    } }), null), E(A, h(LP, {}), null), B((O) => {
      var pe = oe("w-full h-full px-[calc((100%-var(--typebot-chat-container-max-width))/2)]", D() ? "overflow-y-auto scroll-smooth scrollable-container" : "@container flex @xs:items-center"), Ae = oe("@container relative typebot-chat-view w-full flex flex-col items-center pt-5 max-w-chat-container-max-width", D() ? void 0 : `h-full overflow-y-auto scroll-smooth scrollable-container
                @xs:min-h-chat-container-min-height max-h-full @xs:max-h-chat-container-max-height @xs:rounded-chat-container`);
      return pe !== O.e && Z(F, O.e = pe), Ae !== O.t && Z(A, O.t = Ae), O;
    }, { e: void 0, t: void 0 }), F;
  } });
};
var LP = () => AP();
var MP = (e) => {
  var _a5;
  if (e) {
    if (e.type === "clientSideResult") return { type: "text", text: e.result };
    if (e.type === "text") return { type: "text", text: e.value, attachedFileUrls: (_a5 = e.attachments) == null ? void 0 : _a5.map((t) => t.url), metadata: e.metadata };
    if (e.type === "recording") return { type: "audio", url: e.url };
  }
};
var UP = (e) => {
  let t = e[e.length - 1];
  return !t || !t.input || t.input.answer ? e : e.map((r, n) => n === e.length - 1 ? { ...r, input: { ...r.input, isHidden: true } } : r);
};
var BP = (e) => (t) => {
  var _a5;
  let r = t[t.length - 1];
  return !r || !r.input || !r.input.answer || r.input.answer.type === "recording" || ((_a5 = r.input.answer) == null ? void 0 : _a5.type) === "text" && r.input.answer.label ? t : r.input.type !== "file input" ? t.map((n, o) => o === t.length - 1 ? { ...n, input: { ...n.input, answer: { ...n.input.answer, label: e } } } : n) : t;
};
var Hd = (e) => (t) => {
  let r = t[t.length - 1];
  return !r || !r.input ? t : t.map((n, o) => o === t.length - 1 ? { ...n, input: { ...n.input, answer: e } } : n);
};
var $P = (e) => {
  let t = e[e.length - 1];
  return !t || !t.clientSideActions ? e : e.reduce((r, n, o) => {
    if (o === e.length - 1) {
      let a = n.clientSideActions.slice(1);
      if (a.length === 0 && n.messages.length === 0 && !n.input) return r;
      r.push({ ...n, clientSideActions: a });
    } else r.push(n);
    return r;
  }, []);
};
var Gd = (e, t) => {
  Mg({ background: { type: "Image", content: e }, documentStyle: t ?? document.documentElement.style, typebotVersion: "6.1" });
};
var zP = (e) => (t) => [...t, { version: "2", clientSideActions: e.clientSideActions, input: e.input, dynamicTheme: e.dynamicTheme, messages: jP(e.messages) }];
var jP = (e) => e.filter((t) => {
  var _a5, _b2, _c2;
  return t.type !== "text" || t.content.type !== "richText" || t.content.richText.length > 1 || ((_a5 = t.content.richText[0]) == null ? void 0 : _a5.type) !== "variable" || (((_c2 = (_b2 = t.content.richText[0]) == null ? void 0 : _b2.children) == null ? void 0 : _c2.length) ?? 0) > 0;
});
var VP = (e) => !e.clientSideActions || e.clientSideActions.every((t) => t.lastBubbleBlockId);
var HP = (e) => {
  let t = e[e.length - 1];
  return !t || !t.input || !t.input.answer ? e : e.map((r, n) => n === e.length - 1 ? { ...r, input: { ...r.input, answer: { ...r.input.answer, status: "retry" } } } : r);
};
var GP = P('<div class="h-full flex justify-center items-center flex-col"><p class="text-2xl text-center"></p><pre>');
var WP = (e) => (() => {
  var t = GP(), r = t.firstChild, n = r.nextSibling;
  return E(r, () => e.error.message), E(n, () => JSON.stringify(e.error.cause, null, 2)), t;
})();
var qP = P('<svg viewBox="0 0 40 48"width=13 fill=none><path d="M37.9625 4.18811C36.9719 1.73444 34.5328 0 31.6797 0H6.75937C3.02656 0 0 2.97048 0 6.63412V39.0671C0 40.9273 0.779687 42.6081 2.03594 43.8119C3.02813 46.2656 5.46875 48 8.32187 48H33.2422C36.975 48 40 45.0311 40 41.3674V8.93444C40 7.07425 39.2203 5.39195 37.9625 4.18811ZM34.5312 39.0671C34.5312 40.6098 33.2516 41.8658 31.6797 41.8658H6.75937C6.29844 41.8658 5.8625 41.7585 5.47656 41.5652C4.54531 41.1052 3.90625 40.1574 3.90625 39.0671V6.63412C3.90625 5.08984 5.18594 3.83387 6.75937 3.83387H31.6797C33.1828 3.83387 34.4188 4.98249 34.5234 6.43476C34.5281 6.5007 34.5312 6.56665 34.5312 6.63412V39.0671Z"fill=currentColor></path><path d="M17.7516 7.26994L15.8321 7.6084C15.3121 7.70009 14.965 8.19594 15.0566 8.71591L20.0616 37.1007C20.1533 37.6207 20.6492 37.9679 21.1691 37.8762L23.0886 37.5377C23.6086 37.446 23.9558 36.9502 23.8641 36.4302L18.8591 8.04543C18.7674 7.52545 18.2716 7.17826 17.7516 7.26994Z"fill=currentColor>');
var YP = () => qP();
var KP = P('<a href="https://typebot.io/?utm_source=litebadge"target=_blank rel="noopener noreferrer"class=lite-badge id=lite-badge><span>Made with Typebot');
var XP = (e) => {
  let t, r, n, o = { display: "flex", opacity: "1", visibility: "visible", "pointer-events": "auto", transform: "none", "clip-path": "none", width: "auto", height: "auto", position: "absolute", padding: "4px 8px", "background-color": "white", "z-index": "50", "border-radius": "4px", color: "rgb(17 24 39)", gap: "8px", "font-size": "14px", "line-height": "20px", "font-weight": "600", "border-width": "1px", "border-color": "#cecece", top: "auto", right: "auto", left: "auto", bottom: "20px", transition: "background-color 0.2s ease-in-out", "text-decoration": "none" };
  return ve(() => {
    !document || !e.botContainer || !t || (r = new MutationObserver((a) => {
      a.forEach((i) => {
        i.removedNodes.forEach((s) => {
          var _a5;
          "id" in s && t && s.id === "lite-badge" && (console.log("Sorry, you can't remove the brand 😅"), (_a5 = e.botContainer) == null ? void 0 : _a5.append(t));
        });
      });
    }), r.observe(e.botContainer, { subtree: false, childList: true }), n = new MutationObserver((a) => {
      a.forEach((i) => {
        i.type === "attributes" && t && (i.attributeName === "style" && Object.assign(t.style, o), i.attributeName === "class" && (t.className = "lite-badge"), i.attributeName === "href" && (t.href = "https://typebot.io/?utm_source=litebadge"), i.attributeName === "id" && (t.id = "lite-badge"));
      });
    }), n.observe(t, { attributes: true, attributeFilter: ["style", "class", "href", "id"] }));
  }), ue(() => {
    r && r.disconnect(), n && n.disconnect();
  }), (() => {
    var a = KP(), i = a.firstChild, s = t;
    return typeof s == "function" ? Fe(s, a) : t = a, E(a, h(YP, {}), i), B((l) => Ys(a, o, l)), a;
  })();
};
var ZP = P("<div class=typebot-progress-bar-container part=progress-bar-container><div class=typebot-progress-bar>");
var Wd = (e) => (() => {
  var t = ZP(), r = t.firstChild;
  return B((n) => ne(r, "width", `${e.value}%`)), t;
})();
var JP = P("<style>");
var QP = P("<div>");
var e_ = P("<a target=_blank rel=noreferrer>");
var Fl = (e) => {
  let [t, r] = M(), [n, o] = M(""), [a, i] = M(false), [s, l] = M(), d = async () => {
    var _a5, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
    e.font && Ng(e.font), i(true);
    let c = new URLSearchParams(location.search);
    (_a5 = e.onInit) == null ? void 0 : _a5.call(e);
    let u = {};
    c.forEach((w, y) => {
      u[y] = w;
    });
    let p = typeof e.typebot == "string" ? e.typebot : void 0, g = typeof e.typebot != "string" || (e.isPreview ?? false), m = PT(p), { data: f, error: v } = await yT({ stripeRedirectStatus: c.get("redirect_status") ?? void 0, typebot: e.typebot, apiHost: e.apiHost, isPreview: g, resultId: Ne(e.resultId) ? e.resultId : m, prefilledVariables: { ...u, ...e.prefilledVariables }, startFrom: e.startFrom, sessionId: e.sessionId });
    if (v instanceof Ps) return g ? l(new Error("An error occurred while loading the bot.", { cause: { status: v.response.status, body: await v.response.json() } })) : v.response.status === 400 || v.response.status === 403 ? l(new Error((await v.response.json()).message)) : v.response.status === 404 ? l(new Error("The bot you're looking for doesn't exist.")) : l(new Error(`Error! Couldn't initiate the chat. (${v.response.statusText})`));
    if (v instanceof xT) return l(new Error(v.message));
    if (!f) return v && (console.error(v), g) ? l(new Error("Error! Could not reach server. Check your connection.", { cause: v })) : l(new Error("Error! Could not reach server. Check your connection."));
    if (f.resultId && p && (((_c2 = (_b2 = f.typebot.settings.general) == null ? void 0 : _b2.rememberUser) == null ? void 0 : _c2.isEnabled) ?? ht.general.rememberUser.isEnabled)) {
      m && m !== f.resultId && wn(f.typebot.id);
      let w = ((_e2 = (_d2 = f.typebot.settings.general) == null ? void 0 : _d2.rememberUser) == null ? void 0 : _e2.storage) ?? ht.general.rememberUser.storage;
      _T(w)(p, f.resultId);
      let y = IT(f.typebot.id);
      y && y.typebot.publishedAt && f.typebot.publishedAt ? new Date(y.typebot.publishedAt).getTime() === new Date(f.typebot.publishedAt).getTime() ? r(y) : (wn(f.typebot.id), r(f), ud(f, { typebotId: f.typebot.id, storage: w })) : (r(f), ud(f, { typebotId: f.typebot.id, storage: w })), (_f2 = e.onChatStatePersisted) == null ? void 0 : _f2.call(e, true, { typebotId: f.typebot.id });
    } else wn(f.typebot.id), r(f), ((_g2 = f.input) == null ? void 0 : _g2.id) && e.onNewInputBlock && e.onNewInputBlock(f.input), f.logs && ((_h2 = e.onNewLogs) == null ? void 0 : _h2.call(e, f.logs)), (_i2 = e.onChatStatePersisted) == null ? void 0 : _i2.call(e, false, { typebotId: f.typebot.id });
    o(f.typebot.theme.customCss ?? "");
  };
  return Ce(() => {
    St(e.typebot) || a() || d().then();
  }), Ce(() => {
    var _a5, _b2, _c2, _d2, _e2;
    St(e.typebot) || typeof e.typebot == "string" || (o(e.typebot.theme.customCss ?? ""), ((_b2 = (_a5 = e.typebot.theme.general) == null ? void 0 : _a5.progressBar) == null ? void 0 : _b2.isEnabled) && t() && !((_e2 = (_d2 = (_c2 = t()) == null ? void 0 : _c2.typebot.theme.general) == null ? void 0 : _d2.progressBar) == null ? void 0 : _e2.isEnabled) && (i(false), d().then()));
  }), ue(() => {
    i(false);
  }), [h(Y, { get when() {
    return n();
  }, children: (c) => (() => {
    var u = JP();
    return E(u, c), u;
  })() }), h(Y, { get when() {
    return s();
  }, keyed: true, children: (c) => h(WP, { error: c }) }), h(Y, { get when() {
    return t();
  }, keyed: true, children: (c) => h(t_, { get class() {
    return e.class;
  }, get initialChatReply() {
    var _a5, _b2;
    return { ...c, typebot: { ...c.typebot, settings: typeof e.typebot == "string" || !e.typebot ? c.typebot.settings : (_a5 = e.typebot) == null ? void 0 : _a5.settings, theme: typeof e.typebot == "string" || !e.typebot ? c.typebot.theme : (_b2 = e.typebot) == null ? void 0 : _b2.theme } };
  }, get context() {
    var _a5, _b2, _c2, _d2;
    return { apiHost: e.apiHost, wsHost: e.wsHost, isPreview: typeof e.typebot != "string" || (e.isPreview ?? false), resultId: c.resultId, sessionId: c.sessionId, typebot: c.typebot, storage: ((_b2 = (_a5 = c.typebot.settings.general) == null ? void 0 : _a5.rememberUser) == null ? void 0 : _b2.isEnabled) && !(typeof e.typebot != "string" || (e.isPreview ?? false)) ? ((_d2 = (_c2 = c.typebot.settings.general) == null ? void 0 : _c2.rememberUser) == null ? void 0 : _d2.storage) ?? ht.general.rememberUser.storage : void 0 };
  }, get progressBarRef() {
    return e.progressBarRef;
  }, get onNewInputBlock() {
    return e.onNewInputBlock;
  }, get onNewLogs() {
    return e.onNewLogs;
  }, get onAnswer() {
    return e.onAnswer;
  }, get onEnd() {
    return e.onEnd;
  }, get onScriptExecutionSuccess() {
    return e.onScriptExecutionSuccess;
  } }) })];
};
var t_ = (e) => {
  let [t, r] = Ns(M(e.initialChatReply.progress), { storage: e.context.storage, key: `typebot-${e.context.typebot.id}-progressValue` }), n, [o, a] = M("100%");
  return Ce(() => {
    n && a(`${n.clientHeight}px`);
  }), Ce(() => {
    var _a5;
    Ng(((_a5 = e.initialChatReply.typebot.theme.general) == null ? void 0 : _a5.font) ?? { type: Gx, family: yl }), n && OT({ theme: Is(e.initialChatReply.typebot.theme, e.initialChatReply.dynamicTheme), container: n, isPreview: e.context.isPreview, typebotVersion: dg(e.initialChatReply.typebot.version) ? e.initialChatReply.typebot.version : "6" });
  }), h(Og.Provider, { value: () => n, get children() {
    var i = QP(), s = n;
    return typeof s == "function" ? Fe(s, i) : n = i, E(i, h(Y, { get when() {
      var _a5, _b2;
      return ae(() => !!ie(t()))() && ((_b2 = (_a5 = e.initialChatReply.typebot.theme.general) == null ? void 0 : _a5.progressBar) == null ? void 0 : _b2.isEnabled);
    }, get children() {
      return h(Y, { get when() {
        var _a5, _b2;
        return ae(() => !!e.progressBarRef)() && (((_b2 = (_a5 = e.initialChatReply.typebot.theme.general) == null ? void 0 : _a5.progressBar) == null ? void 0 : _b2.position) ?? ug) === "fixed";
      }, get fallback() {
        return h(Wd, { get value() {
          return t();
        } });
      }, get children() {
        return h(Wu, { get mount() {
          return e.progressBarRef;
        }, get children() {
          return h(Wd, { get value() {
            return t();
          } });
        } });
      } });
    } }), null), E(i, h(DP, { get context() {
      return e.context;
    }, get initialChatReply() {
      return e.initialChatReply;
    }, get onNewInputBlock() {
      return e.onNewInputBlock;
    }, get onAnswer() {
      return e.onAnswer;
    }, get onEnd() {
      return e.onEnd;
    }, get onNewLogs() {
      return e.onNewLogs;
    }, onProgressUpdate: r, get onScriptExecutionSuccess() {
      return e.onScriptExecutionSuccess;
    } }), null), E(i, h(Y, { get when() {
      var _a5;
      return (_a5 = e.initialChatReply.typebot.settings.general) == null ? void 0 : _a5.isBrandingEnabled;
    }, get children() {
      return h(XP, { botContainer: n });
    } }), null), E(i, h(P0, { toaster: qt, class: "w-full", children: (l) => h(Zn.Root, { class: "flex flex-col pl-4 py-4 pr-8 gap-2 max-w-[350px] rounded-chat text-input-text border-input border-input-border bg-input-bg shadow-input data-[state=open]:animate-fade-in-from-bottom data-[state=closed]:animate-fade-out-from-bottom", get children() {
      return [h(Zn.Title, { class: "font-semibold", get children() {
        return l().title;
      } }), h(Zn.Description, { class: "text-sm", get children() {
        return l().description;
      } }), h(Zn.CloseTrigger, { get class() {
        return bo("absolute right-2 top-2", Ds({ variant: "secondary", size: "icon" }));
      }, get children() {
        return h(Bo, { class: "w-4 h-4" });
      } }), h(Y, { get when() {
        var _a5;
        return (_a5 = l().meta) == null ? void 0 : _a5.link;
      }, children: (d) => (() => {
        var c = e_();
        return E(c, () => {
          var _a5, _b2;
          return ((_b2 = (_a5 = e.initialChatReply.typebot.settings.general) == null ? void 0 : _a5.systemMessages) == null ? void 0 : _b2.popupBlockedButtonLabel) ?? Dr.popupBlockedButtonLabel;
        }), B((u) => {
          var p = d(), g = bo(Ds({ variant: "primary", size: "sm" }), "no-underline");
          return p !== u.e && J(c, "href", u.e = p), g !== u.t && Z(c, u.t = g), u;
        }, { e: void 0, t: void 0 }), c;
      })() })];
    } }) }), null), B((l) => {
      var d = oe("relative flex w-full overflow-hidden h-full text-base flex-col justify-center items-center typebot-container", e.class), c = o();
      return d !== l.e && Z(i, l.e = d), c !== l.t && ne(i, "--bot-container-height", l.t = c), l;
    }, { e: void 0, t: void 0 }), i;
  } });
};
var r_ = (e, { isHidden: t = false } = {}) => t ? "0px" : e === "large" ? "64px" : e === "medium" || !e ? "48px" : typeof e == "string" && /^\d+px$/.test(e.trim()) ? e.trim() : (console.warn("[Typebot] Invalid button size. Use 'medium', 'large' or an explicit pixel string (e.g. '52px')."), "48px");
var Pl = `/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: "Untitled Sans", sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);
    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 27.5rem;
    --container-sm: 24rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 16px;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 18px;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 20px;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 24px;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-4xl: 2.5rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --leading-relaxed: 1.625;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --radius-xl: 12px;
    --radius-2xl: 1rem;
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
    --leading-4: 16px;
    --leading-6: 24px;
    --spacing-px: 1px;
    --spacing-0: 0;
    --spacing-0\\.5: 2px;
    --spacing-1: 4px;
    --spacing-1\\.5: 6px;
    --spacing-2: 8px;
    --spacing-2\\.5: 10px;
    --spacing-3: 12px;
    --spacing-3\\.5: 14px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-7: 28px;
    --spacing-8: 32px;
    --spacing-9: 36px;
    --spacing-10: 40px;
    --spacing-11: 44px;
    --spacing-12: 48px;
    --spacing-14: 56px;
    --spacing-64: 256px;
    --spacing-80: 320px;
    --spacing-96: 384px;
    --animate-fade-in: fade-in 0.3s ease-out;
    --animate-fade-in-from-bottom: fadeInFromBottom 150ms ease-out forwards;
    --animate-fade-out-from-bottom: fadeOutFromBottom 50ms ease-out forwards;
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .\\@container {
    container-type: inline-size;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .-inset-px {
    inset: -1px;
  }
  .-inset-px {
    inset: calc(var(--spacing-px) * -1);
  }
  .inset-0 {
    inset: var(--spacing-0);
  }
  .-top-2 {
    top: calc(var(--spacing-2) * -1);
  }
  .top-0 {
    top: var(--spacing-0);
  }
  .top-2 {
    top: var(--spacing-2);
  }
  .top-4 {
    top: var(--spacing-4);
  }
  .top-\\[max\\(0px\\,calc\\(var\\(--top\\)-24px\\)\\)\\] {
    top: max(0px, calc(var(--top) - 24px));
  }
  .top-auto {
    top: auto;
  }
  .-right-2 {
    right: calc(var(--spacing-2) * -1);
  }
  .-right-5 {
    right: calc(var(--spacing-5) * -1);
  }
  .right-0 {
    right: var(--spacing-0);
  }
  .right-2 {
    right: var(--spacing-2);
  }
  .right-4 {
    right: var(--spacing-4);
  }
  .right-5 {
    right: var(--spacing-5);
  }
  .bottom-\\(--container-bottom\\) {
    bottom: var(--container-bottom);
  }
  .bottom-0 {
    bottom: var(--spacing-0);
  }
  .bottom-4 {
    bottom: var(--spacing-4);
  }
  .bottom-\\[calc\\(100\\%\\+12px\\)\\] {
    bottom: calc(100% + 12px);
  }
  .bottom-\\[calc\\(100\\%\\+var\\(--button-gap\\)\\)\\] {
    bottom: calc(100% + var(--button-gap));
  }
  .-left-5 {
    left: calc(var(--spacing-5) * -1);
  }
  .left-0 {
    left: var(--spacing-0);
  }
  .left-5 {
    left: var(--spacing-5);
  }
  .left-auto {
    left: auto;
  }
  .-z-10 {
    z-index: calc(10 * -1);
  }
  .z-0 {
    z-index: 0;
  }
  .z-1 {
    z-index: 1;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-50 {
    z-index: 50;
  }
  .z-424242 {
    z-index: 424242;
  }
  .z-\\[calc\\(1000-var\\(--toast-index\\)\\)\\] {
    z-index: calc(1000 - var(--toast-index));
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .m-2 {
    margin: var(--spacing-2);
  }
  .m-auto {
    margin: auto;
  }
  .mx-4 {
    margin-inline: var(--spacing-4);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-2 {
    margin-block: var(--spacing-2);
  }
  .-mt-1 {
    margin-top: calc(var(--spacing-1) * -1);
  }
  .mt-1 {
    margin-top: var(--spacing-1);
  }
  .mt-4 {
    margin-top: var(--spacing-4);
  }
  .-mr-1 {
    margin-right: calc(var(--spacing-1) * -1);
  }
  .-mr-4 {
    margin-right: calc(var(--spacing-4) * -1);
  }
  .mr-0 {
    margin-right: var(--spacing-0);
  }
  .mr-4 {
    margin-right: var(--spacing-4);
  }
  .mb-2 {
    margin-bottom: var(--spacing-2);
  }
  .ml-2 {
    margin-left: var(--spacing-2);
  }
  .ml-7 {
    margin-left: var(--spacing-7);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline-flex {
    display: inline-flex;
  }
  .aspect-\\(--aspect-ratio\\) {
    aspect-ratio: var(--aspect-ratio);
  }
  .aspect-16\\/11 {
    aspect-ratio: 16/11;
  }
  .size-\\(--button-size\\) {
    width: var(--button-size);
    height: var(--button-size);
  }
  .size-3 {
    width: var(--spacing-3);
    height: var(--spacing-3);
  }
  .size-4 {
    width: var(--spacing-4);
    height: var(--spacing-4);
  }
  .size-5 {
    width: var(--spacing-5);
    height: var(--spacing-5);
  }
  .size-6 {
    width: var(--spacing-6);
    height: var(--spacing-6);
  }
  .size-7 {
    width: var(--spacing-7);
    height: var(--spacing-7);
  }
  .size-8 {
    width: var(--spacing-8);
    height: var(--spacing-8);
  }
  .size-9 {
    width: var(--spacing-9);
    height: var(--spacing-9);
  }
  .size-10 {
    width: var(--spacing-10);
    height: var(--spacing-10);
  }
  .size-14 {
    width: var(--spacing-14);
    height: var(--spacing-14);
  }
  .size-full {
    width: 100%;
    height: 100%;
  }
  .h-\\(--accordion-panel-height\\) {
    height: var(--accordion-panel-height);
  }
  .h-\\(--active-tab-height\\) {
    height: var(--active-tab-height);
  }
  .h-\\(--bot-max-height\\) {
    height: var(--bot-max-height);
  }
  .h-\\(--embed-bubble-height\\) {
    height: var(--embed-bubble-height);
  }
  .h-\\(--height\\) {
    height: var(--height);
  }
  .h-1\\.5 {
    height: var(--spacing-1\\.5);
  }
  .h-2 {
    height: var(--spacing-2);
  }
  .h-2\\.5 {
    height: var(--spacing-2\\.5);
  }
  .h-3 {
    height: var(--spacing-3);
  }
  .h-4 {
    height: var(--spacing-4);
  }
  .h-5 {
    height: var(--spacing-5);
  }
  .h-6 {
    height: var(--spacing-6);
  }
  .h-7 {
    height: var(--spacing-7);
  }
  .h-8 {
    height: var(--spacing-8);
  }
  .h-9 {
    height: var(--spacing-9);
  }
  .h-10 {
    height: var(--spacing-10);
  }
  .h-11 {
    height: var(--spacing-11);
  }
  .h-\\[56px\\] {
    height: 56px;
  }
  .h-\\[58px\\] {
    height: 58px;
  }
  .h-\\[80vh\\] {
    height: 80vh;
  }
  .h-\\[revert\\] {
    height: revert;
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .h-px {
    height: var(--spacing-px);
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-\\(--available-height\\) {
    max-height: var(--available-height);
  }
  .max-h-80 {
    max-height: var(--spacing-80);
  }
  .max-h-\\[464px\\] {
    max-height: 464px;
  }
  .max-h-\\[calc\\(100dvh-var\\(--container-bottom\\)-var\\(--button-gap\\)-var\\(--button-size\\)\\)\\] {
    max-height: calc(100dvh - var(--container-bottom) - var(--button-gap) - var(--button-size));
  }
  .max-h-\\[calc\\(100vh-1rem\\)\\] {
    max-height: calc(100vh - 1rem);
  }
  .max-h-\\[calc\\(var\\(--bot-container-height\\)-100px\\)\\] {
    max-height: calc(var(--bot-container-height) - 100px);
  }
  .max-h-\\[min\\(var\\(--available-height\\)\\,23rem\\)\\] {
    max-height: min(var(--available-height), 23rem);
  }
  .max-h-full {
    max-height: 100%;
  }
  .min-h-0 {
    min-height: var(--spacing-0);
  }
  .min-h-20\\.5 {
    min-height: calc(var(--spacing) * 20.5);
  }
  .min-h-full {
    min-height: 100%;
  }
  .w-\\(--active-tab-width\\) {
    width: var(--active-tab-width);
  }
  .w-\\(--anchor-width\\) {
    width: var(--anchor-width);
  }
  .w-2 {
    width: var(--spacing-2);
  }
  .w-3 {
    width: var(--spacing-3);
  }
  .w-4 {
    width: var(--spacing-4);
  }
  .w-5 {
    width: var(--spacing-5);
  }
  .w-6 {
    width: var(--spacing-6);
  }
  .w-7 {
    width: var(--spacing-7);
  }
  .w-8 {
    width: var(--spacing-8);
  }
  .w-10 {
    width: var(--spacing-10);
  }
  .w-64 {
    width: var(--spacing-64);
  }
  .w-96 {
    width: var(--spacing-96);
  }
  .w-\\[35px\\] {
    width: 35px;
  }
  .w-\\[58px\\] {
    width: 58px;
  }
  .w-\\[60\\%\\] {
    width: 60%;
  }
  .w-\\[250px\\] {
    width: 250px;
  }
  .w-\\[300px\\] {
    width: 300px;
  }
  .w-\\[calc\\(100vw-16px\\)\\] {
    width: calc(100vw - 16px);
  }
  .w-fit {
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-px {
    width: var(--spacing-px);
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-\\(--available-width\\) {
    max-width: var(--available-width);
  }
  .max-w-\\(--bot-max-width\\) {
    max-width: var(--bot-max-width);
  }
  .max-w-\\[90\\%\\] {
    max-width: 90%;
  }
  .max-w-\\[350px\\] {
    max-width: 350px;
  }
  .max-w-\\[calc\\(100\\%-1rem\\)\\] {
    max-width: calc(100% - 1rem);
  }
  .max-w-\\[calc\\(100\\%-60px\\)\\] {
    max-width: calc(100% - 60px);
  }
  .max-w-chat-container-max-width {
    max-width: var(--typebot-chat-container-max-width);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-lg {
    max-width: var(--container-lg);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .max-w-xs {
    max-width: var(--container-xs);
  }
  .min-w-\\(--anchor-width\\) {
    min-width: var(--anchor-width);
  }
  .min-w-0 {
    min-width: var(--spacing-0);
  }
  .min-w-\\[250px\\] {
    min-width: 250px;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-none {
    flex: none;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .caption-bottom {
    caption-side: bottom;
  }
  .origin-\\(--transform-origin\\) {
    transform-origin: var(--transform-origin);
  }
  .translate-x-\\(--active-tab-left\\) {
    --tw-translate-x: var(--active-tab-left);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\(--active-tab-bottom\\) {
    --tw-translate-y: calc(var(--active-tab-bottom) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-px {
    --tw-translate-y: 1px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-px {
    --tw-translate-y: var(--spacing-px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-0 {
    --tw-scale-x: 0%;
    --tw-scale-y: 0%;
    --tw-scale-z: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-100 {
    --tw-scale-x: 100%;
    --tw-scale-y: 100%;
    --tw-scale-z: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-180 {
    rotate: calc(180deg * -1);
  }
  .rotate-0 {
    rotate: 0deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .transform-\\[translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+calc\\(min\\(var\\(--toast-index\\)\\,10\\)\\*-15px\\)\\)\\)_scale\\(calc\\(max\\(0\\,1-\\(var\\(--toast-index\\)\\*0\\.1\\)\\)\\)\\)\\] {
    transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--toast-swipe-movement-y) + calc(min(var(--toast-index), 10) * -15px))) scale(calc(max(0, 1 - (var(--toast-index) * 0.1))));
  }
  .animate-fade-in {
    animation: var(--animate-fade-in);
  }
  .animate-ping {
    animation: var(--animate-ping);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize-y {
    resize: vertical;
  }
  .scroll-pt-2 {
    scroll-padding-top: var(--spacing-2);
  }
  .scroll-pb-2 {
    scroll-padding-bottom: var(--spacing-2);
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-0\\.5 {
    gap: var(--spacing-0\\.5);
  }
  .gap-1 {
    gap: var(--spacing-1);
  }
  .gap-1\\.5 {
    gap: var(--spacing-1\\.5);
  }
  .gap-2 {
    gap: var(--spacing-2);
  }
  .gap-2\\.5 {
    gap: var(--spacing-2\\.5);
  }
  .gap-3 {
    gap: var(--spacing-3);
  }
  .gap-4 {
    gap: var(--spacing-4);
  }
  .gap-6 {
    gap: var(--spacing-6);
  }
  .gap-px {
    gap: 1px;
  }
  .gap-px {
    gap: var(--spacing-px);
  }
  .-space-y-px {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(-1px * var(--tw-space-y-reverse));
      margin-block-end: calc(-1px * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .-space-y-px {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing-px) * -1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing-px) * -1) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-0\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--spacing-0\\.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--spacing-0\\.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    column-gap: var(--spacing-0\\.5);
  }
  .gap-x-2 {
    column-gap: var(--spacing-2);
  }
  .gap-y-0\\.5 {
    row-gap: var(--spacing-0\\.5);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-clip {
    overflow-y: clip;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .overscroll-contain {
    overscroll-behavior: contain;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-\\[6px\\] {
    border-radius: 6px;
  }
  .rounded-\\[calc\\(\\.75rem-1px\\)\\] {
    border-radius: calc(.75rem - 1px);
  }
  .rounded-button {
    border-radius: var(--typebot-button-border-radius);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-host-bubble {
    border-radius: var(--typebot-host-bubble-border-radius);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-t-host-bubble {
    border-top-left-radius: var(--typebot-host-bubble-border-radius);
    border-top-right-radius: var(--typebot-host-bubble-border-radius);
  }
  .rounded-t-md {
    border-top-left-radius: var(--radius-md);
    border-top-right-radius: var(--radius-md);
  }
  .rounded-l-host-bubble {
    border-top-left-radius: var(--typebot-host-bubble-border-radius);
    border-bottom-left-radius: var(--typebot-host-bubble-border-radius);
  }
  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-none {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rounded-b-host-bubble {
    border-bottom-right-radius: var(--typebot-host-bubble-border-radius);
    border-bottom-left-radius: var(--typebot-host-bubble-border-radius);
  }
  .rounded-b-md {
    border-bottom-right-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-\\(length\\:--typebot-button-border-width\\) {
    border-style: var(--tw-border-style);
    border-width: var(--typebot-button-border-width);
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-x {
    border-inline-style: var(--tw-border-style);
    border-inline-width: 1px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-b-0 {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-button-border {
    border-color: rgba(
    var(--typebot-button-border-rgb),
    var(--typebot-button-border-opacity)
  );
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-gray-400 {
    border-color: var(--color-gray-400);
  }
  .border-host-bubble-border {
    border-color: rgba(
    var(--typebot-host-bubble-border-rgb),
    var(--typebot-host-bubble-border-opacity)
  );
  }
  .border-input-border {
    border-color: rgba(
    var(--typebot-input-border-rgb),
    var(--typebot-input-border-opacity)
  );
  }
  .border-transparent {
    border-color: transparent;
  }
  .bg-\\(--bot-bg-color\\) {
    background-color: var(--bot-bg-color);
  }
  .bg-\\[\\#202020\\] {
    background-color: #202020;
  }
  .bg-\\[rgba\\(0\\,0\\,0\\,0\\.8\\)\\] {
    background-color: rgba(0,0,0,0.8);
  }
  .bg-black\\/20 {
    background-color: color-mix(in srgb, #000 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);
    }
  }
  .bg-black\\/50 {
    background-color: color-mix(in srgb, #000 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 50%, transparent);
    }
  }
  .bg-blue-400 {
    background-color: var(--color-blue-400);
  }
  .bg-button-bg {
    background-color: rgba(
    var(--typebot-button-bg-rgb),
    var(--typebot-button-opacity)
  );
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-400 {
    background-color: var(--color-gray-400);
  }
  .bg-green-400 {
    background-color: var(--color-green-400);
  }
  .bg-host-bubble-bg {
    background-color: rgba(
    var(--typebot-host-bubble-bg-rgb),
    var(--typebot-host-bubble-opacity)
  );
  }
  .bg-input-bg {
    background-color: rgba(
    var(--typebot-input-bg-rgb),
    var(--typebot-input-opacity)
  );
  }
  .bg-orange-400 {
    background-color: var(--color-orange-400);
  }
  .bg-pink-400 {
    background-color: var(--color-pink-400);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-clip-padding {
    background-clip: padding-box;
  }
  .fill-transparent {
    fill: transparent;
  }
  .stroke-\\[1\\.5px\\] {
    stroke-width: 1.5px;
  }
  .object-cover {
    object-fit: cover;
  }
  .p-0\\.5 {
    padding: var(--spacing-0\\.5);
  }
  .p-1 {
    padding: var(--spacing-1);
  }
  .p-1\\.5 {
    padding: var(--spacing-1\\.5);
  }
  .p-2 {
    padding: var(--spacing-2);
  }
  .p-3 {
    padding: var(--spacing-3);
  }
  .p-4 {
    padding: var(--spacing-4);
  }
  .p-6 {
    padding: var(--spacing-6);
  }
  .p-px {
    padding: 1px;
  }
  .p-px {
    padding: var(--spacing-px);
  }
  .px-1 {
    padding-inline: var(--spacing-1);
  }
  .px-2 {
    padding-inline: var(--spacing-2);
  }
  .px-3 {
    padding-inline: var(--spacing-3);
  }
  .px-3\\.5 {
    padding-inline: var(--spacing-3\\.5);
  }
  .px-4 {
    padding-inline: var(--spacing-4);
  }
  .px-6 {
    padding-inline: var(--spacing-6);
  }
  .px-8 {
    padding-inline: var(--spacing-8);
  }
  .px-\\[15px\\] {
    padding-inline: 15px;
  }
  .px-\\[calc\\(\\(100\\%-var\\(--typebot-chat-container-max-width\\)\\)\\/2\\)\\] {
    padding-inline: calc((100% - var(--typebot-chat-container-max-width)) / 2);
  }
  .py-0\\.5 {
    padding-block: var(--spacing-0\\.5);
  }
  .py-1 {
    padding-block: var(--spacing-1);
  }
  .py-2 {
    padding-block: var(--spacing-2);
  }
  .py-2\\.5 {
    padding-block: var(--spacing-2\\.5);
  }
  .py-3 {
    padding-block: var(--spacing-3);
  }
  .py-4 {
    padding-block: var(--spacing-4);
  }
  .py-6 {
    padding-block: var(--spacing-6);
  }
  .py-12 {
    padding-block: var(--spacing-12);
  }
  .py-\\[7px\\] {
    padding-block: 7px;
  }
  .pt-5 {
    padding-top: var(--spacing-5);
  }
  .pt-\\[3px\\] {
    padding-top: 3px;
  }
  .pr-1 {
    padding-right: var(--spacing-1);
  }
  .pr-2 {
    padding-right: var(--spacing-2);
  }
  .pr-4 {
    padding-right: var(--spacing-4);
  }
  .pr-5 {
    padding-right: var(--spacing-5);
  }
  .pr-8 {
    padding-right: var(--spacing-8);
  }
  .pb-0 {
    padding-bottom: var(--spacing-0);
  }
  .pb-0\\.5 {
    padding-bottom: var(--spacing-0\\.5);
  }
  .pb-2 {
    padding-bottom: var(--spacing-2);
  }
  .pb-4 {
    padding-bottom: var(--spacing-4);
  }
  .pl-2 {
    padding-left: var(--spacing-2);
  }
  .pl-4 {
    padding-left: var(--spacing-4);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .align-bottom {
    vertical-align: bottom;
  }
  .align-middle {
    vertical-align: middle;
  }
  .font-\\[inherit\\] {
    font-family: inherit;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-sm\\/4 {
    font-size: var(--text-sm);
    line-height: var(--leading-4);
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[15px\\] {
    font-size: 15px;
  }
  .text-\\[40px\\] {
    font-size: 40px;
  }
  .leading-4 {
    --tw-leading: var(--leading-4);
    line-height: var(--leading-4);
  }
  .leading-6 {
    --tw-leading: var(--leading-6);
    line-height: var(--leading-6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-button-text {
    color: var(--typebot-button-color);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-host-bubble-text {
    color: var(--typebot-host-bubble-color);
  }
  .text-input-text {
    color: var(--typebot-input-color);
  }
  .text-white {
    color: var(--color-white);
  }
  .italic {
    font-style: italic;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-2xs {
    --tw-shadow: 0 1px var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-button {
    --tw-shadow: var(--typebot-button-box-shadow);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-host-bubble {
    --tw-shadow: var(--typebot-host-bubble-box-shadow);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-input {
    --tw-shadow: var(--typebot-input-box-shadow);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-0 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .outline-hidden {
    --tw-outline-style: none;
    outline-style: none;
    @media (forced-colors: active) {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .blur-button {
    --tw-blur: blur(var(--typebot-button-blur));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .brightness-95 {
    --tw-brightness: brightness(95%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .brightness-150 {
    --tw-brightness: brightness(150%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .brightness-200 {
    --tw-brightness: brightness(200%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[box-shadow\\,border-color\\] {
    transition-property: box-shadow,border-color;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,background-color\\,box-shadow\\] {
    transition-property: color,background-color,box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,border-color\\,box-shadow\\] {
    transition-property: color,border-color,box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[filter\\] {
    transition-property: filter;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[height\\] {
    transition-property: height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[width\\,translate\\] {
    transition-property: width,translate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .\\[transition-property\\:opacity\\,transform\\] {
    transition-property: opacity,transform;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .duration-500 {
    --tw-duration: 500ms;
    transition-duration: 500ms;
  }
  .duration-1000 {
    --tw-duration: 1000ms;
    transition-duration: 1000ms;
  }
  .ease-\\[cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.22,1,0.36,1);
    transition-timing-function: cubic-bezier(0.22,1,0.36,1);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-data-\\[side\\=none\\]\\:min-w-\\[calc\\(var\\(--anchor-width\\)\\+10px\\)\\] {
    &:is(:where(.group)[data-side="none"] *) {
      min-width: calc(var(--anchor-width) + 10px);
    }
  }
  .file\\:border-0 {
    &::file-selector-button {
      border-style: var(--tw-border-style);
      border-width: 0px;
    }
  }
  .file\\:bg-transparent {
    &::file-selector-button {
      background-color: transparent;
    }
  }
  .file\\:text-sm {
    &::file-selector-button {
      font-size: var(--text-sm);
      line-height: var(--tw-leading, var(--text-sm--line-height));
    }
  }
  .file\\:font-medium {
    &::file-selector-button {
      --tw-font-weight: var(--font-weight-medium);
      font-weight: var(--font-weight-medium);
    }
  }
  .before\\:pointer-events-none {
    &::before {
      content: var(--tw-content);
      pointer-events: none;
    }
  }
  .before\\:absolute {
    &::before {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .before\\:inset-0 {
    &::before {
      content: var(--tw-content);
      inset: var(--spacing-0);
    }
  }
  .before\\:-top-full {
    &::before {
      content: var(--tw-content);
      top: -100%;
    }
  }
  .before\\:left-0 {
    &::before {
      content: var(--tw-content);
      left: var(--spacing-0);
    }
  }
  .before\\:size-1\\.5 {
    &::before {
      content: var(--tw-content);
      width: var(--spacing-1\\.5);
      height: var(--spacing-1\\.5);
    }
  }
  .before\\:h-full {
    &::before {
      content: var(--tw-content);
      height: 100%;
    }
  }
  .before\\:w-full {
    &::before {
      content: var(--tw-content);
      width: 100%;
    }
  }
  .before\\:rounded-\\[calc\\(0\\.25rem-1px\\)\\] {
    &::before {
      content: var(--tw-content);
      border-radius: calc(0.25rem - 1px);
    }
  }
  .before\\:rounded-full {
    &::before {
      content: var(--tw-content);
      border-radius: calc(infinity * 1px);
    }
  }
  .before\\:bg-white {
    &::before {
      content: var(--tw-content);
      background-color: var(--color-white);
    }
  }
  .before\\:content-\\[\\'\\'\\] {
    &::before {
      --tw-content: '';
      content: var(--tw-content);
    }
  }
  .not-disabled\\:not-aria-invalid\\:not-data-checked\\:before\\:shadow-xs {
    &:not(*:disabled) {
      &:not(*[aria-invalid="true"]) {
        &:not(*[data-checked]) {
          &::before {
            content: var(--tw-content);
            --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
            box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
          }
        }
      }
    }
  }
  .not-disabled\\:not-data-checked\\:not-aria-invalid\\:before\\:shadow-\\[0_1px_--theme\\(--color-black\\/4\\%\\)\\] {
    &:not(*:disabled) {
      &:not(*[data-checked]) {
        &:not(*[aria-invalid="true"]) {
          &::before {
            content: var(--tw-content);
            --tw-shadow: 0 1px var(--tw-shadow-color, color-mix(in srgb, #000 4%, transparent));
            @supports (color: color-mix(in lab, red, red)) {
              --tw-shadow: 0 1px var(--tw-shadow-color, color-mix(in oklab, var(--color-black) 4%, transparent));
            }
            box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
          }
        }
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:bottom-full {
    &::after {
      content: var(--tw-content);
      bottom: 100%;
    }
  }
  .after\\:left-0 {
    &::after {
      content: var(--tw-content);
      left: var(--spacing-0);
    }
  }
  .after\\:h-\\[calc\\(var\\(--gap\\)\\+1px\\)\\] {
    &::after {
      content: var(--tw-content);
      height: calc(var(--gap) + 1px);
    }
  }
  .after\\:w-full {
    &::after {
      content: var(--tw-content);
      width: 100%;
    }
  }
  .after\\:content-\\[\\'\\'\\] {
    &::after {
      --tw-content: '';
      content: var(--tw-content);
    }
  }
  .first\\:rounded-t-md {
    &:first-child {
      border-top-left-radius: var(--radius-md);
      border-top-right-radius: var(--radius-md);
    }
  }
  .first\\:rounded-l-md {
    &:first-child {
      border-top-left-radius: var(--radius-md);
      border-bottom-left-radius: var(--radius-md);
    }
  }
  .first\\:border-l {
    &:first-child {
      border-left-style: var(--tw-border-style);
      border-left-width: 1px;
    }
  }
  .first\\:pl-4 {
    &:first-child {
      padding-left: var(--spacing-4);
    }
  }
  .last\\:rounded-r-md {
    &:last-child {
      border-top-right-radius: var(--radius-md);
      border-bottom-right-radius: var(--radius-md);
    }
  }
  .last\\:rounded-b-md {
    &:last-child {
      border-bottom-right-radius: var(--radius-md);
      border-bottom-left-radius: var(--radius-md);
    }
  }
  .last\\:border-b {
    &:last-child {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 1px;
    }
  }
  .hover\\:scale-110 {
    &:hover {
      @media (hover: hover) {
        --tw-scale-x: 110%;
        --tw-scale-y: 110%;
        --tw-scale-z: 110%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }
    }
  }
  .hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .hover\\:no-underline {
    &:hover {
      @media (hover: hover) {
        text-decoration-line: none;
      }
    }
  }
  .hover\\:shadow-lg {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:brightness-90 {
    &:hover {
      @media (hover: hover) {
        --tw-brightness: brightness(90%);
        filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
      }
    }
  }
  .hover\\:brightness-95 {
    &:hover {
      @media (hover: hover) {
        --tw-brightness: brightness(95%);
        filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
      }
    }
  }
  .hover\\:backdrop-brightness-95 {
    &:hover {
      @media (hover: hover) {
        --tw-backdrop-brightness: brightness(95%);
        -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
        backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
      }
    }
  }
  .focus\\:border-transparent {
    &:focus {
      border-color: transparent;
    }
  }
  .focus\\:ring-2 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:outline-hidden {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .focus-visible\\:ring-0 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-2 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-\\[3px\\] {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:ring-offset-1 {
    &:focus-visible {
      --tw-ring-offset-width: 1px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .active\\:scale-95 {
    &:active {
      --tw-scale-x: 95%;
      --tw-scale-y: 95%;
      --tw-scale-z: 95%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .active\\:brightness-75 {
    &:active {
      --tw-brightness: brightness(75%);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .active\\:brightness-90 {
    &:active {
      --tw-brightness: brightness(90%);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .disabled\\:pointer-events-none {
    &:disabled {
      pointer-events: none;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .disabled\\:opacity-64 {
    &:disabled {
      opacity: 64%;
    }
  }
  .disabled\\:brightness-100 {
    &:disabled {
      --tw-brightness: brightness(100%);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .has-focus-visible\\:ring-\\[3px\\] {
    &:has(*:focus-visible) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .has-disabled\\:opacity-50 {
    &:has(*:disabled) {
      opacity: 50%;
    }
  }
  .has-data-\\[slot\\=alert-action\\]\\:grid-cols-\\[1fr_auto\\] {
    &:has(*[data-slot="alert-action"]) {
      grid-template-columns: 1fr auto;
    }
  }
  .has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr\\] {
    &:has(>svg) {
      grid-template-columns: calc(var(--spacing) * 4) 1fr;
    }
  }
  .has-\\[\\>svg\\]\\:gap-x-2 {
    &:has(>svg) {
      column-gap: var(--spacing-2);
    }
  }
  .has-data-\\[slot\\=alert-action\\]\\:has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr_auto\\] {
    &:has(*[data-slot="alert-action"]) {
      &:has(>svg) {
        grid-template-columns: calc(var(--spacing) * 4) 1fr auto;
      }
    }
  }
  .data-disabled\\:pointer-events-none {
    &[data-disabled] {
      pointer-events: none;
    }
  }
  .data-disabled\\:opacity-64 {
    &[data-disabled] {
      opacity: 64%;
    }
  }
  .data-empty\\:hidden {
    &[data-empty] {
      display: none;
    }
  }
  .data-ending-style\\:h-0 {
    &[data-ending-style] {
      height: var(--spacing-0);
    }
  }
  .data-ending-style\\:opacity-0 {
    &[data-ending-style] {
      opacity: 0%;
    }
  }
  .data-expanded\\:transform-\\[translateX\\(var\\(--toast-swipe-movement-x\\)\\)_translateY\\(calc\\(var\\(--toast-offset-y\\)\\*-1\\+calc\\(var\\(--toast-index\\)\\*var\\(--gap\\)\\*-1\\)\\+var\\(--toast-swipe-movement-y\\)\\)\\)\\] {
    &[data-expanded] {
      transform: translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--toast-offset-y) * -1 + calc(var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y)));
    }
  }
  .data-highlighted\\:relative {
    &[data-highlighted] {
      position: relative;
    }
  }
  .data-highlighted\\:z-0 {
    &[data-highlighted] {
      z-index: 0;
    }
  }
  .data-highlighted\\:before\\:absolute {
    &[data-highlighted] {
      &::before {
        content: var(--tw-content);
        position: absolute;
      }
    }
  }
  .data-highlighted\\:before\\:inset-x-2 {
    &[data-highlighted] {
      &::before {
        content: var(--tw-content);
        inset-inline: var(--spacing-2);
      }
    }
  }
  .data-highlighted\\:before\\:inset-y-0 {
    &[data-highlighted] {
      &::before {
        content: var(--tw-content);
        inset-block: var(--spacing-0);
      }
    }
  }
  .data-highlighted\\:before\\:z-\\[-1\\] {
    &[data-highlighted] {
      &::before {
        content: var(--tw-content);
        z-index: -1;
      }
    }
  }
  .data-highlighted\\:before\\:rounded-sm {
    &[data-highlighted] {
      &::before {
        content: var(--tw-content);
        border-radius: var(--radius-sm);
      }
    }
  }
  .data-limited\\:opacity-0 {
    &[data-limited] {
      opacity: 0%;
    }
  }
  .data-nested-dialog-open\\:translate-y-2 {
    &[data-nested-dialog-open] {
      --tw-translate-y: var(--spacing-2);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-nested-dialog-open\\:translate-y-4 {
    &[data-nested-dialog-open] {
      --tw-translate-y: var(--spacing-4);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-nested-dialog-open\\:scale-\\[0\\.97\\] {
    &[data-nested-dialog-open] {
      scale: 0.97;
    }
  }
  .data-nested-dialog-open\\:blur-\\[1px\\] {
    &[data-nested-dialog-open] {
      --tw-blur: blur(1px);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .data-starting-style\\:h-0 {
    &[data-starting-style] {
      height: var(--spacing-0);
    }
  }
  .data-starting-style\\:transform-\\[translateY\\(150\\%\\)\\] {
    &[data-starting-style] {
      transform: translateY(150%);
    }
  }
  .data-unchecked\\:hidden {
    &[data-unchecked] {
      display: none;
    }
  }
  .data-unchecked\\:translate-x-0 {
    &[data-unchecked] {
      --tw-translate-x: var(--spacing-0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[active\\=true\\]\\:z-10 {
    &[data-active="true"] {
      z-index: 10;
    }
  }
  .data-\\[active\\=true\\]\\:ring-\\[3px\\] {
    &[data-active="true"] {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .data-\\[direction\\=down\\]\\:bottom-0 {
    &[data-direction="down"] {
      bottom: var(--spacing-0);
    }
  }
  .data-\\[direction\\=down\\]\\:before\\:-bottom-full {
    &[data-direction="down"] {
      &::before {
        content: var(--tw-content);
        bottom: -100%;
      }
    }
  }
  .data-\\[disabled\\=true\\]\\:pointer-events-none {
    &[data-disabled="true"] {
      pointer-events: none;
    }
  }
  .data-\\[disabled\\=true\\]\\:opacity-50 {
    &[data-disabled="true"] {
      opacity: 50%;
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:h-0\\.5 {
    &[data-orientation="horizontal"] {
      height: var(--spacing-0\\.5);
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:translate-y-px {
    &[data-orientation="horizontal"] {
      --tw-translate-y: 1px;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:translate-y-px {
    &[data-orientation="horizontal"] {
      --tw-translate-y: var(--spacing-px);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[orientation\\=horizontal\\]\\:py-1 {
    &[data-orientation="horizontal"] {
      padding-block: var(--spacing-1);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-0\\.5 {
    &[data-orientation="vertical"] {
      width: var(--spacing-0\\.5);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:w-full {
    &[data-orientation="vertical"] {
      width: 100%;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:-translate-x-px {
    &[data-orientation="vertical"] {
      --tw-translate-x: -1px;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:-translate-x-px {
    &[data-orientation="vertical"] {
      --tw-translate-x: calc(var(--spacing-px) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .data-\\[orientation\\=vertical\\]\\:flex-col {
    &[data-orientation="vertical"] {
      flex-direction: column;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:flex-row {
    &[data-orientation="vertical"] {
      flex-direction: row;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:justify-start {
    &[data-orientation="vertical"] {
      justify-content: flex-start;
    }
  }
  .data-\\[orientation\\=vertical\\]\\:px-1 {
    &[data-orientation="vertical"] {
      padding-inline: var(--spacing-1);
    }
  }
  .data-\\[state\\=closed\\]\\:animate-fade-out-from-bottom {
    &[data-state="closed"] {
      animation: var(--animate-fade-out-from-bottom);
    }
  }
  .data-\\[state\\=open\\]\\:animate-fade-in-from-bottom {
    &[data-state="open"] {
      animation: var(--animate-fade-in-from-bottom);
    }
  }
  .data-\\[state\\=open\\]\\:backdrop-brightness-90 {
    &[data-state="open"] {
      --tw-backdrop-brightness: brightness(90%);
      -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
      backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    }
  }
  .data-ending-style\\:data-\\[swipe-direction\\=down\\]\\:transform-\\[translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {
    &[data-ending-style] {
      &[data-swipe-direction="down"] {
        transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));
      }
    }
  }
  .data-expanded\\:data-ending-style\\:data-\\[swipe-direction\\=down\\]\\:transform-\\[translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)\\+150\\%\\)\\)\\] {
    &[data-expanded] {
      &[data-ending-style] {
        &[data-swipe-direction="down"] {
          transform: translateY(calc(var(--toast-swipe-movement-y) + 150%));
        }
      }
    }
  }
  .data-ending-style\\:data-\\[swipe-direction\\=left\\]\\:transform-\\[translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {
    &[data-ending-style] {
      &[data-swipe-direction="left"] {
        transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));
      }
    }
  }
  .data-expanded\\:data-ending-style\\:data-\\[swipe-direction\\=left\\]\\:transform-\\[translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)-150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {
    &[data-expanded] {
      &[data-ending-style] {
        &[data-swipe-direction="left"] {
          transform: translateX(calc(var(--toast-swipe-movement-x) - 150%)) translateY(var(--offset-y));
        }
      }
    }
  }
  .data-ending-style\\:data-\\[swipe-direction\\=right\\]\\:transform-\\[translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {
    &[data-ending-style] {
      &[data-swipe-direction="right"] {
        transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));
      }
    }
  }
  .data-expanded\\:data-ending-style\\:data-\\[swipe-direction\\=right\\]\\:transform-\\[translateX\\(calc\\(var\\(--toast-swipe-movement-x\\)\\+150\\%\\)\\)_translateY\\(var\\(--offset-y\\)\\)\\] {
    &[data-expanded] {
      &[data-ending-style] {
        &[data-swipe-direction="right"] {
          transform: translateX(calc(var(--toast-swipe-movement-x) + 150%)) translateY(var(--offset-y));
        }
      }
    }
  }
  .data-ending-style\\:data-\\[swipe-direction\\=up\\]\\:transform-\\[translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {
    &[data-ending-style] {
      &[data-swipe-direction="up"] {
        transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));
      }
    }
  }
  .data-expanded\\:data-ending-style\\:data-\\[swipe-direction\\=up\\]\\:transform-\\[translateY\\(calc\\(var\\(--toast-swipe-movement-y\\)-150\\%\\)\\)\\] {
    &[data-expanded] {
      &[data-ending-style] {
        &[data-swipe-direction="up"] {
          transform: translateY(calc(var(--toast-swipe-movement-y) - 150%));
        }
      }
    }
  }
  .max-sm\\:col-start-2 {
    @media (width < 40rem) {
      grid-column-start: 2;
    }
  }
  .max-sm\\:mt-2 {
    @media (width < 40rem) {
      margin-top: var(--spacing-2);
    }
  }
  .sm\\:right-0 {
    @media (width >= 40rem) {
      right: var(--spacing-0);
    }
  }
  .sm\\:right-8 {
    @media (width >= 40rem) {
      right: var(--spacing-8);
    }
  }
  .sm\\:bottom-8 {
    @media (width >= 40rem) {
      bottom: var(--spacing-8);
    }
  }
  .sm\\:left-0 {
    @media (width >= 40rem) {
      left: var(--spacing-0);
    }
  }
  .sm\\:row-start-1 {
    @media (width >= 40rem) {
      grid-row-start: 1;
    }
  }
  .sm\\:row-end-3 {
    @media (width >= 40rem) {
      grid-row-end: 3;
    }
  }
  .sm\\:my-8 {
    @media (width >= 40rem) {
      margin-block: var(--spacing-8);
    }
  }
  .sm\\:ml-0 {
    @media (width >= 40rem) {
      margin-left: var(--spacing-0);
    }
  }
  .sm\\:w-96 {
    @media (width >= 40rem) {
      width: var(--spacing-96);
    }
  }
  .sm\\:w-screen {
    @media (width >= 40rem) {
      width: 100vw;
    }
  }
  .sm\\:max-w-\\[calc\\(100\\%-48px-48px\\)\\] {
    @media (width >= 40rem) {
      max-width: calc(100% - 48px - 48px);
    }
  }
  .sm\\:self-center {
    @media (width >= 40rem) {
      align-self: center;
    }
  }
  .sm\\:p-0 {
    @media (width >= 40rem) {
      padding: var(--spacing-0);
    }
  }
  .sm\\:opacity-0 {
    @media (width >= 40rem) {
      opacity: 0%;
    }
  }
  .\\@xs\\:top-\\[max\\(0px\\,calc\\(var\\(--top\\)-40px\\)\\)\\] {
    @container (width >= 27.5rem) {
      top: max(0px, calc(var(--top) - 40px));
    }
  }
  .\\@xs\\:-mr-5 {
    @container (width >= 27.5rem) {
      margin-right: calc(var(--spacing-5) * -1);
    }
  }
  .\\@xs\\:mr-5 {
    @container (width >= 27.5rem) {
      margin-right: var(--spacing-5);
    }
  }
  .\\@xs\\:ml-\\[50px\\] {
    @container (width >= 27.5rem) {
      margin-left: 50px;
    }
  }
  .\\@xs\\:block {
    @container (width >= 27.5rem) {
      display: block;
    }
  }
  .\\@xs\\:hidden {
    @container (width >= 27.5rem) {
      display: none;
    }
  }
  .\\@xs\\:size-10 {
    @container (width >= 27.5rem) {
      width: var(--spacing-10);
      height: var(--spacing-10);
    }
  }
  .\\@xs\\:h-5 {
    @container (width >= 27.5rem) {
      height: var(--spacing-5);
    }
  }
  .\\@xs\\:h-9 {
    @container (width >= 27.5rem) {
      height: var(--spacing-9);
    }
  }
  .\\@xs\\:h-10 {
    @container (width >= 27.5rem) {
      height: var(--spacing-10);
    }
  }
  .\\@xs\\:max-h-chat-container-max-height {
    @container (width >= 27.5rem) {
      max-height: var(--typebot-chat-container-max-height);
    }
  }
  .\\@xs\\:min-h-chat-container-min-height {
    @container (width >= 27.5rem) {
      min-height: var(--typebot-chat-container-min-height);
    }
  }
  .\\@xs\\:w-10 {
    @container (width >= 27.5rem) {
      width: var(--spacing-10);
    }
  }
  .\\@xs\\:w-auto {
    @container (width >= 27.5rem) {
      width: auto;
    }
  }
  .\\@xs\\:flex-nowrap {
    @container (width >= 27.5rem) {
      flex-wrap: nowrap;
    }
  }
  .\\@xs\\:items-center {
    @container (width >= 27.5rem) {
      align-items: center;
    }
  }
  .\\@xs\\:gap-2 {
    @container (width >= 27.5rem) {
      gap: var(--spacing-2);
    }
  }
  .\\@xs\\:rounded-chat-container {
    @container (width >= 27.5rem) {
      border-radius: var(--typebot-chat-container-border-radius);
    }
  }
  .\\@xs\\:px-5 {
    @container (width >= 27.5rem) {
      padding-inline: var(--spacing-5);
    }
  }
  .\\@xs\\:pr-5 {
    @container (width >= 27.5rem) {
      padding-right: var(--spacing-5);
    }
  }
  .\\@xs\\:text-xl {
    @container (width >= 27.5rem) {
      font-size: var(--text-xl);
      line-height: var(--tw-leading, var(--text-xl--line-height));
    }
  }
  .dark\\:bg-clip-border {
    @media (prefers-color-scheme: dark) {
      background-clip: border-box;
    }
  }
  .dark\\:shadow-black\\/24 {
    @media (prefers-color-scheme: dark) {
      --tw-shadow-color: color-mix(in srgb, #000 24%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 24%, transparent) var(--tw-shadow-alpha), transparent);
      }
    }
  }
  .dark\\:not-disabled\\:not-data-checked\\:shadow-xs {
    @media (prefers-color-scheme: dark) {
      &:not(*:disabled) {
        &:not(*[data-checked]) {
          --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
          box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
        }
      }
    }
  }
  .dark\\:not-disabled\\:not-aria-invalid\\:not-data-checked\\:before\\:shadow-\\[0_-1px_--theme\\(--color-white\\/8\\%\\)\\] {
    @media (prefers-color-scheme: dark) {
      &:not(*:disabled) {
        &:not(*[aria-invalid="true"]) {
          &:not(*[data-checked]) {
            &::before {
              content: var(--tw-content);
              --tw-shadow: 0 -1px var(--tw-shadow-color, color-mix(in srgb, #fff 8%, transparent));
              @supports (color: color-mix(in lab, red, red)) {
                --tw-shadow: 0 -1px var(--tw-shadow-color, color-mix(in oklab, var(--color-white) 8%, transparent));
              }
              box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
            }
          }
        }
      }
    }
  }
  .dark\\:not-disabled\\:not-data-checked\\:not-aria-invalid\\:before\\:shadow-\\[0_-1px_--theme\\(--color-white\\/8\\%\\)\\] {
    @media (prefers-color-scheme: dark) {
      &:not(*:disabled) {
        &:not(*[data-checked]) {
          &:not(*[aria-invalid="true"]) {
            &::before {
              content: var(--tw-content);
              --tw-shadow: 0 -1px var(--tw-shadow-color, color-mix(in srgb, #fff 8%, transparent));
              @supports (color: color-mix(in lab, red, red)) {
                --tw-shadow: 0 -1px var(--tw-shadow-color, color-mix(in oklab, var(--color-white) 8%, transparent));
              }
              box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
            }
          }
        }
      }
    }
  }
  .\\[\\&_span\\]\\:size-4 {
    & span {
      width: var(--spacing-4);
      height: var(--spacing-4);
    }
  }
  .\\[\\&_span\\]\\:size-5 {
    & span {
      width: var(--spacing-5);
      height: var(--spacing-5);
    }
  }
  .\\[\\&_span\\]\\:data-checked\\:translate-x-3 {
    & span {
      &[data-checked] {
        --tw-translate-x: var(--spacing-3);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .\\[\\&_span\\]\\:data-checked\\:translate-x-4 {
    & span {
      &[data-checked] {
        --tw-translate-x: var(--spacing-4);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .rtl\\:\\[\\&_span\\]\\:data-checked\\:-translate-x-3 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      & span {
        &[data-checked] {
          --tw-translate-x: calc(var(--spacing-3) * -1);
          translate: var(--tw-translate-x) var(--tw-translate-y);
        }
      }
    }
  }
  .rtl\\:\\[\\&_span\\]\\:data-checked\\:-translate-x-4 {
    &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
      & span {
        &[data-checked] {
          --tw-translate-x: calc(var(--spacing-4) * -1);
          translate: var(--tw-translate-x) var(--tw-translate-y);
        }
      }
    }
  }
  .\\[\\&_svg\\]\\:pointer-events-none {
    & svg {
      pointer-events: none;
    }
  }
  .\\[\\&_svg\\]\\:size-3 {
    & svg {
      width: var(--spacing-3);
      height: var(--spacing-3);
    }
  }
  .\\[\\&_svg\\]\\:size-4 {
    & svg {
      width: var(--spacing-4);
      height: var(--spacing-4);
    }
  }
  .\\[\\&_svg\\]\\:shrink-0 {
    & svg {
      flex-shrink: 0;
    }
  }
  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 {
    & svg:not([class*='size-']) {
      width: var(--spacing-4);
      height: var(--spacing-4);
    }
  }
  .\\[\\&_tr\\]\\:border-b {
    & tr {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 1px;
    }
  }
  .\\[\\&_tr\\:last-child\\]\\:border-0 {
    & tr:last-child {
      border-style: var(--tw-border-style);
      border-width: 0px;
    }
  }
  .\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0 {
    &:has([role=checkbox]) {
      padding-right: var(--spacing-0);
    }
  }
  .\\[\\:disabled\\,\\[data-checked\\]\\,\\[aria-invalid\\]\\]\\:shadow-none {
    &:is(:disabled,[data-checked],[aria-invalid]) {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .\\*\\:\\[\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] {
    :is(& > *) {
      &:is([role=checkbox]) {
        --tw-translate-y: 2px;
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .\\[p\\]\\:\\*\\:leading-relaxed {
    &:is(p) {
      :is(& > *) {
        --tw-leading: var(--leading-relaxed);
        line-height: var(--leading-relaxed);
      }
    }
  }
  .data-ending-style\\:\\[\\&\\:not\\(\\[data-limited\\]\\)\\]\\:transform-\\[translateY\\(150\\%\\)\\] {
    &[data-ending-style] {
      &:not([data-limited]) {
        transform: translateY(150%);
      }
    }
  }
  .\\[\\&\\>svg\\]\\:size-4 {
    &>svg {
      width: var(--spacing-4);
      height: var(--spacing-4);
    }
  }
  .\\[\\&\\>svg\\]\\:h-lh {
    &>svg {
      height: 1lh;
    }
  }
  .\\[\\&\\>svg\\]\\:w-4 {
    &>svg {
      width: var(--spacing-4);
    }
  }
  .last\\:\\[\\&\\>tr\\]\\:border-b-0 {
    &:last-child {
      &>tr {
        border-bottom-style: var(--tw-border-style);
        border-bottom-width: 0px;
      }
    }
  }
  .\\[\\&\\[data-nested-dialog-open\\]_\\[data-scope\\=inside-backdrop\\]\\]\\:block {
    &[data-nested-dialog-open] [data-scope=inside-backdrop] {
      display: block;
    }
  }
  .\\[\\&\\[data-panel-open\\]\\>svg\\]\\:rotate-180 {
    &[data-panel-open]>svg {
      rotate: 180deg;
    }
  }
  .sm\\:\\[\\[data-slot\\=alert-description\\]\\~\\&\\]\\:col-start-2 {
    @media (width >= 40rem) {
      [data-slot=alert-description]~& {
        grid-column-start: 2;
      }
    }
  }
  .sm\\:\\[\\[data-slot\\=alert-title\\]\\~\\&\\]\\:col-start-2 {
    @media (width >= 40rem) {
      [data-slot=alert-title]~& {
        grid-column-start: 2;
      }
    }
  }
  .\\[button\\,a\\&\\]\\:cursor-pointer {
    button,a& {
      cursor: pointer;
    }
  }
  .pointer-coarse\\:\\[button\\,a\\&\\]\\:after\\:absolute {
    @media (pointer: coarse) {
      button,a& {
        &::after {
          content: var(--tw-content);
          position: absolute;
        }
      }
    }
  }
  .pointer-coarse\\:\\[button\\,a\\&\\]\\:after\\:size-full {
    @media (pointer: coarse) {
      button,a& {
        &::after {
          content: var(--tw-content);
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .pointer-coarse\\:\\[button\\,a\\&\\]\\:after\\:min-h-11 {
    @media (pointer: coarse) {
      button,a& {
        &::after {
          content: var(--tw-content);
          min-height: var(--spacing-11);
        }
      }
    }
  }
  .pointer-coarse\\:\\[button\\,a\\&\\]\\:after\\:min-w-11 {
    @media (pointer: coarse) {
      button,a& {
        &::after {
          content: var(--tw-content);
          min-width: var(--spacing-11);
        }
      }
    }
  }
  .\\[svg\\~\\&\\]\\:col-start-2 {
    svg~& {
      grid-column-start: 2;
    }
  }
  .sm\\:\\[svg\\~\\&\\]\\:col-start-2 {
    @media (width >= 40rem) {
      svg~& {
        grid-column-start: 2;
      }
    }
  }
  .sm\\:\\[svg\\~\\[data-slot\\=alert-description\\]\\~\\&\\]\\:col-start-3 {
    @media (width >= 40rem) {
      svg~[data-slot=alert-description]~& {
        grid-column-start: 3;
      }
    }
  }
  .sm\\:\\[svg\\~\\[data-slot\\=alert-title\\]\\~\\&\\]\\:col-start-3 {
    @media (width >= 40rem) {
      svg~[data-slot=alert-title]~& {
        grid-column-start: 3;
      }
    }
  }
}
:host {
  --tw-divide-y-reverse: 0;
  --tw-border-style: solid;
  --tw-font-weight: initial;
  --tw-tracking: initial;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-translate-z: 0;
  --tw-rotate-x: rotateX(0);
  --tw-rotate-y: rotateY(0);
  --tw-rotate-z: rotateZ(0);
  --tw-skew-x: skewX(0);
  --tw-skew-y: skewY(0);
  --tw-space-x-reverse: 0;
  --tw-gradient-position: initial;
  --tw-gradient-from: #0000;
  --tw-gradient-via: #0000;
  --tw-gradient-to: #0000;
  --tw-gradient-stops: initial;
  --tw-gradient-via-stops: initial;
  --tw-gradient-from-position: 0%;
  --tw-gradient-via-position: 50%;
  --tw-gradient-to-position: 100%;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-color: initial;
  --tw-inset-shadow: 0 0 #0000;
  --tw-inset-shadow-color: initial;
  --tw-ring-color: initial;
  --tw-ring-shadow: 0 0 #0000;
  --tw-inset-ring-color: initial;
  --tw-inset-ring-shadow: 0 0 #0000;
  --tw-ring-inset: initial;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-blur: initial;
  --tw-brightness: initial;
  --tw-contrast: initial;
  --tw-grayscale: initial;
  --tw-hue-rotate: initial;
  --tw-invert: initial;
  --tw-opacity: initial;
  --tw-saturate: initial;
  --tw-sepia: initial;
  --tw-drop-shadow: initial;
  --tw-duration: initial;
  --tw-ease: initial;
}
.scrollable-container::-webkit-scrollbar {
  display: none;
}
.scrollable-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.text-fade-in {
  transition: opacity 400ms ease-in 200ms;
}
.bubble-typing {
  transition: width 400ms ease-out,
    height 400ms ease-out;
}
.bubble1,
.bubble2,
.bubble3 {
  background-color: var(--typebot-host-bubble-color);
  opacity: 0.5;
}
.bubble1 {
  animation: chatBubbles 1s ease-in-out infinite;
}
.bubble2 {
  animation: chatBubbles 1s ease-in-out infinite;
  animation-delay: 0.3s;
}
.bubble3 {
  animation: chatBubbles 1s ease-in-out infinite;
  animation-delay: 0.5s;
}
@keyframes chatBubbles {
  0% {
    transform: translateY(2.5);
  }
  50% {
    transform: translateY(-2.5px);
  }
  100% {
    transform: translateY(0);
  }
}
@layer base {
  a {
    text-decoration: underline;
  }
  ul,
  ol {
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  li:not(:last-child) {
    margin-bottom: 8px;
  }
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
  }
}
.slate-bold {
  font-weight: bold;
}
.slate-italic {
  font-style: oblique;
}
.slate-underline {
  text-decoration: underline;
}
.text-input::-webkit-input-placeholder {
  color: var(--typebot-input-placeholder-color);
  opacity: 1;
}
.text-input::-moz-placeholder {
  color: var(--typebot-input-placeholder-color);
  opacity: 1;
}
.text-input::placeholder {
  color: var(--typebot-input-placeholder-color);
  opacity: 1;
}
.typebot-container {
  background-image: var(--typebot-container-bg-image);
  background-color: var(--typebot-container-bg-color);
  background-position: center;
  background-size: cover;
  font-family: var(--typebot-container-font-family), -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  container-type: size;
}
.typebot-chat-view {
  background-color: rgba(
    var(--typebot-chat-container-bg-rgb),
    var(--typebot-chat-container-opacity)
  );
  color: rgb(var(--typebot-chat-container-color));
  backdrop-filter: blur(var(--typebot-chat-container-blur));
  border-width: var(--typebot-chat-container-border-width);
  border-color: rgba(
    var(--typebot-chat-container-border-rgb),
    var(--typebot-chat-container-border-opacity)
  );
  box-shadow: var(--typebot-chat-container-box-shadow);
}
@container (min-height: 500px) {
  .typebot-chat-view {
    padding-top: var(--spacing-10);
  }
}
@container (min-height: 300px) {
  .typebot-bottom-spacer {
    height: calc(0.2 * var(--bot-container-height));
  }
}
.typebot-selectable {
  border-width: var(--typebot-button-border-width);
  border-color: rgba(
    var(--typebot-button-border-rgb),
    calc(var(--selectable-alpha-ratio) * 0.25)
  );
  border-radius: var(--typebot-button-border-radius);
  color: rgb(var(--typebot-chat-container-color));
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.08)
  );
  transition: all 0.3s ease;
}
.typebot-selectable:hover {
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.12)
  );
  border-color: rgba(
    var(--typebot-button-border-rgb),
    calc(var(--selectable-alpha-ratio) * 0.3)
  );
}
.typebot-selectable.selected {
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.18)
  );
  border-color: rgba(
    var(--typebot-button-border-rgb),
    calc(var(--selectable-alpha-ratio) * 0.35)
  );
}
.typebot-checkbox {
  border: 1px solid
    rgba(var(--typebot-button-bg-rgb), var(--typebot-button-opacity));
  border-radius: var(--typebot-button-border-radius);
  background-color: rgba(var(--typebot-checkbox-bg-rgb));
  color: var(--typebot-button-color);
  padding: 1px;
  transition: all 0.3s ease;
}
.typebot-checkbox.checked {
  background-color: rgb(var(--typebot-button-bg-rgb));
}
.typebot-host-bubble {
  color: var(--typebot-host-bubble-color);
}
.typebot-host-bubble > .bubble-typing {
  background-color: rgba(
    var(--typebot-host-bubble-bg-rgb),
    var(--typebot-host-bubble-opacity)
  );
  border-width: var(--typebot-host-bubble-border-width);
  border-color: rgba(
    var(--typebot-host-bubble-border-rgb),
    var(--typebot-host-bubble-border-opacity)
  );
  border-radius: var(--typebot-host-bubble-border-radius);
  box-shadow: var(--typebot-host-bubble-box-shadow);
  backdrop-filter: blur(var(--typebot-host-bubble-blur));
}
.typebot-host-bubble img,
.typebot-host-bubble video,
.typebot-host-bubble iframe {
  border-radius: 6px;
}
.typebot-guest-bubble {
  color: var(--typebot-guest-bubble-color);
  background-color: rgba(
    var(--typebot-guest-bubble-bg-rgb),
    var(--typebot-guest-bubble-opacity)
  );
  border-width: var(--typebot-guest-bubble-border-width);
  border-color: rgba(
    var(--typebot-guest-bubble-border-rgb),
    var(--typebot-guest-bubble-border-opacity)
  );
  border-radius: var(--typebot-guest-bubble-border-radius);
  box-shadow: var(--typebot-guest-bubble-box-shadow);
  backdrop-filter: blur(var(--typebot-guest-bubble-blur));
}
.typebot-guest-bubble-image-attachment {
  border-radius: var(--typebot-guest-bubble-border-radius);
}
.typebot-input {
  color: var(--typebot-input-color);
  background-color: rgba(
    var(--typebot-input-bg-rgb),
    var(--typebot-input-opacity)
  );
  border-width: var(--typebot-input-border-width);
  border-color: rgba(
    var(--typebot-input-border-rgb),
    var(--typebot-input-border-opacity)
  );
  border-radius: var(--typebot-input-border-radius);
  box-shadow: var(--typebot-input-box-shadow);
  backdrop-filter: blur(var(--typebot-input-blur));
  transition: filter 100ms ease;
}
.typebot-input-error-message {
  color: var(--typebot-input-color);
}
.typebot-input-form .typebot-button {
  box-shadow: var(--typebot-input-box-shadow);
}
.typebot-button > .send-icon {
  fill: var(--typebot-button-color);
}
.ping span {
  background-color: rgb(var(--typebot-button-bg-rgb));
}
.rating-icon-container svg {
  width: 42px;
  height: 42px;
  stroke: rgb(var(--typebot-button-bg-rgb));
  fill: rgba(
    var(--typebot-host-bubble-bg-rgb),
    var(--typebot-host-bubble-opacity)
  );
  transition: fill 100ms ease-out;
}
.rating-icon-container.selected svg {
  fill: rgb(var(--typebot-button-bg-rgb));
}
.rating-icon-container:hover svg {
  filter: brightness(0.9);
}
.rating-icon-container:active svg {
  filter: brightness(0.75);
}
.upload-progress-bar {
  background-color: rgb(var(--typebot-button-bg-rgb));
  border-radius: var(--typebot-input-border-radius);
}
.total-files-indicator {
  background-color: rgb(var(--typebot-button-bg-rgb));
  color: var(--typebot-button-color);
  font-size: 10px;
}
.typebot-upload-input {
  transition: border-color 100ms ease-out;
  border-radius: var(--typebot-input-border-radius);
}
.typebot-upload-input.dragging-over {
  border-color: rgb(var(--typebot-button-bg-rgb));
}
.typebot-country-select {
  color: var(--typebot-input-color);
  background-color: var(--typebot-input-bg-color);
  border-radius: var(--typebot-button-border-radius);
}
.typebot-datetime-input {
  color-scheme: light;
  color: var(--typebot-input-color);
  background-color: var(--typebot-input-bg-color);
  border-radius: var(--typebot-input-border-radius);
}
.typebot-picture-button {
  color: var(--typebot-button-color);
  background-color: rgb(var(--typebot-button-bg-rgb));
  border-radius: var(--typebot-button-border-radius);
  transition: all 0.3s ease;
  width: 236px;
}
.typebot-picture-button > img,
.typebot-selectable-picture > img {
  border-radius: var(--typebot-button-border-radius)
    var(--typebot-button-border-radius) 0 0;
  min-width: 200px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  object-fit: cover;
}
.typebot-picture-button.has-svg > img,
.typebot-selectable-picture.has-svg > img {
  max-height: 128px;
  object-fit: contain;
  padding: 1rem;
}
.typebot-selectable-picture {
  border: 1px solid
    rgba(
      var(--typebot-button-bg-rgb),
      calc(var(--selectable-alpha-ratio) * 0.25)
    );
  border-radius: var(--typebot-button-border-radius);
  color: rgb(var(--typebot-chat-container-color));
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.08)
  );
  transition: all 0.3s ease;
  width: 236px;
}
.typebot-selectable-picture:hover {
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.12)
  );
  border-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.3)
  );
}
.typebot-selectable-picture.selected {
  background-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.18)
  );
  border-color: rgba(
    var(--typebot-button-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.35)
  );
}
select option {
  color: var(--typebot-input-color);
  background-color: var(--typebot-input-bg-color);
}
.typebot-progress-bar-container {
  background-color: rgba(
    var(--typebot-progress-bar-bg-rgb),
    calc(var(--selectable-alpha-ratio) * 0.12)
  );
  height: var(--typebot-progress-bar-height);
  position: var(--typebot-progress-bar-position);
  top: var(--typebot-progress-bar-top);
  bottom: var(--typebot-progress-bar-bottom);
  left: 0;
  width: 100%;
  z-index: 42424242;
}
.typebot-progress-bar-container > .typebot-progress-bar {
  background-color: var(--typebot-progress-bar-color);
  position: absolute;
  height: 100%;
  transition: width 0.25s ease;
}
.typebot-recorder .left-gradient {
  background-image: linear-gradient(
    to right,
    rgba(var(--typebot-input-bg-rgb), 1),
    rgba(var(--typebot-input-bg-rgb), 0)
  );
}
.typebot-recorder .right-gradient {
  background-image: linear-gradient(
    to left,
    rgba(var(--typebot-input-bg-rgb), 1),
    rgba(var(--typebot-input-bg-rgb), 0)
  );
}
.typebot-recorder button {
  color: rgba(var(--typebot-button-bg-rgb));
  background-color: rgba(var(--typebot-button-bg-rgb), 0.3);
}
@keyframes fadeInFromTop {
  0% {
    opacity: 0;
    transform: translateY(-4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOutFromTop {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-4px);
  }
}
@keyframes fadeInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOutFromBottom {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(4px);
  }
}
[data-scope="menu"][data-part="content"] {
  color: var(--typebot-input-color);
  background-color: rgba(
    var(--typebot-input-bg-rgb),
    var(--typebot-input-opacity)
  );
  border-width: var(--typebot-input-border-width);
  border-color: rgba(
    var(--typebot-input-border-rgb),
    var(--typebot-input-border-opacity)
  );
  border-radius: var(--typebot-input-border-radius);
  box-shadow: var(--typebot-input-box-shadow);
  backdrop-filter: blur(var(--typebot-input-blur));
}
[data-scope="menu"][data-part="item"] {
  cursor: pointer;
  background-color: rgba(
    var(--typebot-input-bg-rgb),
    var(--typebot-input-opacity)
  );
  border-radius: var(--typebot-input-border-radius);
}
[data-scope="menu"][data-part="content"][data-state="open"] {
  animation: fadeInFromTop 150ms ease-out forwards;
}
[data-scope="menu"][data-part="content"][data-state="closed"] {
  animation: fadeOutFromTop 50ms ease-out forwards;
}
[data-scope="progress"][data-part="root"] {
  width: 100%;
  height: 100%;
}
[data-scope="progress"][data-part="circle"] {
  --size: 40px;
  --thickness: 4px;
  --radius: calc(40px / 2 - 4px / 2);
  --circomference: calc(2 * 3.14159 * calc(40px / 2 - 4px / 2));
}
[data-scope="progress"][data-part="circle-range"] {
  stroke: white;
  --transition-prop: stroke-dasharray, stroke, stroke-dashoffset;
  transition-property: stroke-dasharray, stroke, stroke-dashoffset;
  --transition-duration: 0.2s;
  transition-duration: 0.2s;
}
[data-scope="progress"][data-part="circle-track"] {
  stroke: rgba(0, 0, 0, 0.5);
}
.typebot-buttons-input > [data-slot="list"] {
  flex-direction: var(--typebot-buttons-input-flex-direction);
  flex-wrap: wrap;
}
.typebot-buttons-input > .typebot-input {
  max-width: 350px;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
    }
  }
}
`;
var n_ = P("<button part=button>");
var o_ = P('<svg part=button-icon viewBox="0 0 16 16"><path d="M8 15C12.418 15 16 11.866 16 8C16 4.134 12.418 1 8 1C3.582 1 0 4.134 0 8C0 9.76 0.743 11.37 1.97 12.6C1.873 13.616 1.553 14.73 1.199 15.566C1.12 15.752 1.273 15.96 1.472 15.928C3.728 15.558 5.069 14.99 5.652 14.694C6.41791 14.8983 7.20732 15.0012 8 15Z"fill=currentColor>');
var a_ = P('<img part=button-icon alt="Bubble button icon">');
var dh = P(`<span part=button-icon style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'">`);
var i_ = P('<svg part=button-icon viewBox="0 0 24 24"><path fill-rule=evenodd clip-rule=evenodd d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z">');
var s_ = P('<img part=button-icon alt="Bubble button close icon">');
var Ha = (e) => e.startsWith("http") || e.startsWith("data:image/svg+xml");
var l_ = (e) => (() => {
  var t = n_();
  return t.$$click = () => e.toggleBot(), E(t, h(c_, e), null), E(t, h(d_, e), null), B((r) => {
    var n = oe("relative shadow-md rounded-2xl hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in size-(--button-size)"), o = e.backgroundColor ?? Ee.gray.dark[2], a = e.backgroundColor && vo(e.backgroundColor) ? Ee.gray.light[12] : Ee.gray.dark[12], i = e.isBotOpen ? "Close chatbot" : "Open chatbot", s = e.isBotOpen;
    return n !== r.e && Z(t, r.e = n), o !== r.t && ne(t, "background-color", r.t = o), a !== r.a && ne(t, "color", r.a = a), i !== r.o && J(t, "aria-label", r.o = i), s !== r.i && J(t, "aria-pressed", r.i = s), r;
  }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), t;
})();
var c_ = (e) => h(ze, { get children() {
  return [h(Q, { get when() {
    return St(e.customIconSrc);
  }, get children() {
    var t = o_();
    return B(() => J(t, "class", oe("fill-transparent absolute duration-200 transition size-6", e.isBotOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"))), t;
  } }), h(Q, { get when() {
    return ae(() => !!e.customIconSrc)() && Ha(e.customIconSrc);
  }, get children() {
    var t = a_();
    return B((r) => {
      var n = e.customIconSrc, o = oe("duration-200 transition", e.isBotOpen ? "scale-0 opacity-0" : "scale-100 opacity-100", $r(e.customIconSrc) ? "w-[60%]" : "w-full h-full", $r(e.customIconSrc) ? "" : "object-cover rounded-2xl");
      return n !== r.e && J(t, "src", r.e = n), o !== r.t && Z(t, r.t = o), r;
    }, { e: void 0, t: void 0 }), t;
  } }), h(Q, { get when() {
    return ae(() => !!e.customIconSrc)() && !Ha(e.customIconSrc);
  }, get children() {
    var t = dh();
    return E(t, () => e.customIconSrc), B(() => Z(t, oe("text-4xl duration-200 transition", e.isBotOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"))), t;
  } })];
} });
var d_ = (e) => h(ze, { get children() {
  return [h(Q, { get when() {
    return St(e.customCloseIconSrc);
  }, get children() {
    var t = i_();
    return ne(t, "fill", "#fff"), B(() => J(t, "class", oe("absolute duration-200 transition w-[60%]", e.isBotOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0"))), t;
  } }), h(Q, { get when() {
    return ae(() => !!e.customCloseIconSrc)() && Ha(e.customCloseIconSrc);
  }, get children() {
    var t = s_();
    return B((r) => {
      var n = e.customCloseIconSrc, o = oe("absolute duration-200 transition", e.isBotOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0", $r(e.customCloseIconSrc) ? "w-[60%]" : "w-full h-full", $r(e.customCloseIconSrc) ? "" : "object-cover rounded-2xl");
      return n !== r.e && J(t, "src", r.e = n), o !== r.t && Z(t, r.t = o), r;
    }, { e: void 0, t: void 0 }), t;
  } }), h(Q, { get when() {
    return ae(() => !!e.customCloseIconSrc)() && !Ha(e.customCloseIconSrc);
  }, get children() {
    var t = dh();
    return E(t, () => e.customCloseIconSrc), B(() => Z(t, oe("absolute text-4xl duration-200 transition", e.isBotOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0"))), t;
  } })];
} });
nt(["click"]);
var u_ = P("<div part=preview-message><p>");
var p_ = P('<img class="rounded-full w-8 h-8 object-cover"alt="Bot avatar"elementtiming="Bot avatar"fetchpriority=high>');
var g_ = P('<button part=preview-message-close-button aria-label=Close><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>');
var h_ = (e) => {
  let [t, r] = M(false), [n, o] = M({ x: 0, y: 0 }), a = (s) => {
    var _a5, _b2;
    o({ x: ((_a5 = s.touches[0]) == null ? void 0 : _a5.clientX) ?? 0, y: ((_b2 = s.touches[0]) == null ? void 0 : _b2.clientY) ?? 0 });
  }, i = (s) => {
    var _a5, _b2;
    let l = ((_a5 = s.changedTouches[0]) == null ? void 0 : _a5.clientX) ?? 0, d = ((_b2 = s.changedTouches[0]) == null ? void 0 : _b2.clientY) ?? 0;
    (Math.abs(l - n().x) > 10 || d - n().y > 10) && e.onCloseClick(), o({ x: 0, y: 0 });
  };
  return (() => {
    var s = u_(), l = s.firstChild;
    return s.$$touchend = i, s.$$touchstart = a, s.addEventListener("mouseleave", () => r(false)), s.addEventListener("mouseenter", () => r(true)), s.$$click = () => e.onClick(), E(s, h(f_, { get isHovered() {
      return t();
    }, get previewMessageTheme() {
      return e.previewMessageTheme;
    }, get onClick() {
      return e.onCloseClick;
    } }), l), E(s, h(Y, { get when() {
      return e.avatarUrl;
    }, keyed: true, children: (d) => (() => {
      var c = p_();
      return J(c, "src", d), c;
    })() }), l), E(l, () => e.message), B((d) => {
      var _a5, _b2;
      var c = oe("absolute bottom-[calc(100%+12px)] w-64 rounded-md duration-200 flex items-center gap-4 shadow-md animate-fade-in cursor-pointer hover:shadow-lg p-4", e.placement === "left" ? "left-0" : "right-0"), u = ((_a5 = e.previewMessageTheme) == null ? void 0 : _a5.backgroundColor) ?? bk, p = ((_b2 = e.previewMessageTheme) == null ? void 0 : _b2.textColor) ?? yk;
      return c !== d.e && Z(s, d.e = c), u !== d.t && ne(s, "background-color", d.t = u), p !== d.a && ne(s, "color", d.a = p), d;
    }, { e: void 0, t: void 0, a: void 0 }), s;
  })();
};
var f_ = (e) => (() => {
  var t = g_();
  return t.$$click = (r) => (r.stopPropagation(), e.onClick()), B((r) => {
    var _a5, _b2;
    var n = "absolute -top-2 -right-2 rounded-full w-6 h-6 p-1 hover:brightness-95 active:brightness-90 transition-all border " + (e.isHovered ? "opacity-100" : "opacity-0"), o = ((_a5 = e.previewMessageTheme) == null ? void 0 : _a5.closeButtonBackgroundColor) ?? vk, a = ((_b2 = e.previewMessageTheme) == null ? void 0 : _b2.closeButtonIconColor) ?? wk;
    return n !== r.e && Z(t, r.e = n), o !== r.t && ne(t, "background-color", r.t = o), a !== r.a && ne(t, "color", r.a = a), r;
  }, { e: void 0, t: void 0, a: void 0 }), t;
})();
nt(["click", "touchstart", "touchend"]);
var m_ = P("<style>");
var b_ = P("<div>");
var y_ = P("<div style=--container-border-radius:7px><div part=bot>");
var v_ = "20px";
var w_ = "12px";
var x_ = (e) => {
  var _a5, _b2;
  let [t, r] = ct(e, ["isOpen", "onOpen", "onClose", "previewMessage", "onPreviewMessageClick", "onPreviewMessageDismissed", "theme", "autoShowDelay", "inlineStyle"]), [n, o] = M("idle"), [a, i] = M(false), [s, l] = M(), d = te(() => ie(t.isOpen)), c = te(() => d() ? t.isOpen : n() === "open"), [u, p] = M(r.prefilledVariables), [g, m] = M({ message: ((_a5 = t.previewMessage) == null ? void 0 : _a5.message) ?? "", avatarUrl: (_b2 = t.previewMessage) == null ? void 0 : _b2.avatarUrl }), [f, v] = M(false);
  Ce(() => {
    n() !== "idle" || !r.typebot || (o("ready"), R());
  }), ue(() => {
    o("idle");
  }), Ce(() => {
    window.addEventListener("message", w), ue(() => {
      window.removeEventListener("message", w);
    });
  }), Ce(() => {
    t.isOpen && !a() && i(true);
  });
  let w = (F) => {
    let { data: A } = F;
    if (!(!A.isFromTypebot || A.id && r.id !== A.id)) switch (A.command) {
      case "open":
        y();
        break;
      case "close":
        T();
        break;
      case "toggle":
        b();
        break;
      case "showPreviewMessage":
        I(A.message);
        break;
      case "hidePreviewMessage":
        x();
        break;
      case "setPrefilledVariables":
        p((L) => ({ ...L, ...A.variables }));
        break;
      case "unmount":
        C();
        break;
      case "reload":
        S();
        break;
      case "reset": {
        let L = s();
        if (!L) return;
        wn(L), Ma();
        break;
      }
    }
  }, y = () => {
    var _a6;
    (_a6 = t.onOpen) == null ? void 0 : _a6.call(t), !d() && (i(true), x(), o("open"));
  }, T = () => {
    var _a6;
    (_a6 = t.onClose) == null ? void 0 : _a6.call(t), !d() && (o("closed"), Ma());
  }, b = () => {
    c() ? T() : y();
  }, S = () => {
    i(false), i(true);
  }, _ = () => {
    var _a6;
    (_a6 = t.onPreviewMessageClick) == null ? void 0 : _a6.call(t), y();
  }, I = (F) => {
    if (c()) return;
    let A = F ?? (t.previewMessage ? { message: t.previewMessage.message, avatarUrl: t.previewMessage.avatarUrl } : void 0);
    A && (m(A), v(true));
  }, x = () => {
    var _a6;
    v(false), (_a6 = t.onPreviewMessageDismissed) == null ? void 0 : _a6.call(t);
  }, C = () => {
    c() ? (T(), setTimeout(() => {
      o("unmounted");
    }, 200)) : o("unmounted");
  }, R = () => {
    var _a6;
    (Lg() || wl()) && y(), ie(t.autoShowDelay) && setTimeout(y, t.autoShowDelay);
    let F = (_a6 = t.previewMessage) == null ? void 0 : _a6.autoShowDelay;
    ie(F) && setTimeout(I, F);
  }, D = (F, { typebotId: A }) => {
    var _a6;
    (_a6 = r.onChatStatePersisted) == null ? void 0 : _a6.call(r, F, { typebotId: A }), l(A), F && Dg();
  }, N = (F) => {
    var _a6;
    (F === cg || F === Tl) && C(), (_a6 = r.onScriptExecutionSuccess) == null ? void 0 : _a6.call(r, F);
  }, K;
  return h(Y, { get when() {
    return n() !== "unmounted";
  }, get children() {
    return h(ol, { get value() {
      var _a6;
      return (_a6 = document.querySelector("typebot-bubble")) == null ? void 0 : _a6.shadowRoot;
    }, get children() {
      return [(() => {
        var F = m_();
        return E(F, bl, null), E(F, Pl, null), F;
      })(), (() => {
        var F = b_(), A = K;
        return typeof A == "function" ? Fe(A, F) : K = F, F;
      })(), (() => {
        var F = y_(), A = F.firstChild;
        return E(F, h(Y, { get when() {
          return f();
        }, get children() {
          return h(h_, he(g, { get placement() {
            var _a6;
            return (_a6 = t.theme) == null ? void 0 : _a6.placement;
          }, get previewMessageTheme() {
            var _a6;
            return (_a6 = t.theme) == null ? void 0 : _a6.previewMessage;
          }, onClick: _, onCloseClick: x }));
        } }), A), E(F, h(Y, { get when() {
          var _a6, _b3;
          return !((_b3 = (_a6 = t.theme) == null ? void 0 : _a6.button) == null ? void 0 : _b3.isHidden);
        }, get children() {
          return h(l_, he(() => {
            var _a6;
            return (_a6 = t.theme) == null ? void 0 : _a6.button;
          }, { get placement() {
            var _a6;
            return (_a6 = t.theme) == null ? void 0 : _a6.placement;
          }, toggleBot: b, get isBotOpen() {
            return c();
          } }));
        } }), A), ne(A, "transition", "transform 200ms cubic-bezier(0, 1.2, 1, 1), opacity 150ms ease-out"), E(A, h(Y, { get when() {
          return a();
        }, get children() {
          return h(Fl, he(r, { onScriptExecutionSuccess: N, onChatStatePersisted: D, get prefilledVariables() {
            return u();
          } }));
        } })), B((L) => {
          var _a6, _b3, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l, _m2, _n2, _o2, _p2;
          var X = oe(((_a6 = t.theme) == null ? void 0 : _a6.position) === "static" ? "relative" : "z-424242 fixed bottom-(--container-bottom) right-5", ((_b3 = t.theme) == null ? void 0 : _b3.placement) === "left" && "left-5"), O = { "--container-bottom": v_, "--button-gap": w_, "--button-size": r_(((_d2 = (_c2 = t.theme) == null ? void 0 : _c2.button) == null ? void 0 : _d2.size) ?? "medium", { isHidden: (_f2 = (_e2 = t.theme) == null ? void 0 : _e2.button) == null ? void 0 : _f2.isHidden }), "--bot-bg-color": (_h2 = (_g2 = t.theme) == null ? void 0 : _g2.chatWindow) == null ? void 0 : _h2.backgroundColor, "--bot-max-width": ((_j = (_i2 = t.theme) == null ? void 0 : _i2.chatWindow) == null ? void 0 : _j.maxWidth) ?? "400px", "--bot-max-height": ((_l = (_k2 = t.theme) == null ? void 0 : _k2.chatWindow) == null ? void 0 : _l.maxHeight) ?? "704px", ...t.inlineStyle }, pe = ((_m2 = t.theme) == null ? void 0 : _m2.placement) === "left" ? "bottom left" : "bottom right", Ae = c() ? "scale3d(1, 1, 1)" : "scale3d(0, 0, 1)", Te = oe("absolute rounded-lg max-h-[calc(100dvh-var(--container-bottom)-var(--button-gap)-var(--button-size))] shadow-lg bg-(--bot-bg-color) h-(--bot-max-height) max-w-(--bot-max-width) overflow-hidden", c() ? "opacity-100" : "opacity-0 pointer-events-none", ((_n2 = t.theme) == null ? void 0 : _n2.placement) === "left" ? "sm:left-0 -left-5" : "sm:right-0 -right-5", ((_p2 = (_o2 = t.theme) == null ? void 0 : _o2.button) == null ? void 0 : _p2.isHidden) ? "bottom-0 ml-2 sm:ml-0 w-[calc(100vw-16px)] sm:w-screen" : "bottom-[calc(100%+var(--button-gap))] w-screen");
          return X !== L.e && Z(F, L.e = X), L.t = Ys(F, O, L.t), pe !== L.a && ne(A, "transform-origin", L.a = pe), Ae !== L.o && ne(A, "transform", L.o = Ae), Te !== L.i && Z(A, L.i = Te), L;
        }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0 }), F;
      })()];
    } });
  } });
};
var k_ = P("<style>");
var T_ = P('<div class=relative aria-labelledby=modal-title role=dialog aria-modal=true><div class="fixed inset-0 bg-black/50 transition-opacity animate-fade-in"part=overlay></div><div class="fixed inset-0 z-10 overflow-y-auto"><div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"><div>');
var S_ = (e) => {
  let [t, r] = ct(e, ["onOpen", "onClose", "autoShowDelay", "theme", "isOpen", "defaultOpen"]), [n, o] = M(), [a, i] = M(r.prefilledVariables), [s, l] = M(t.isOpen ?? false);
  ve(() => {
    (t.defaultOpen || wl() || Lg()) && u(), window.addEventListener("message", c);
    let w = t.autoShowDelay;
    ie(w) && setTimeout(() => {
      u();
    }, w);
  }), ue(() => {
    window.removeEventListener("message", c);
  }), Ce(() => {
    St(e.isOpen) || e.isOpen === s() || g();
  }), Ce(() => {
    e.prefilledVariables && i((w) => ({ ...w, ...e.prefilledVariables }));
  });
  let d = (w) => {
    w.stopPropagation();
  }, c = (w) => {
    let { data: y } = w;
    if (!(!y.isFromTypebot || y.id && r.id !== y.id)) switch (y.command) {
      case "open":
        u();
        break;
      case "close":
        p();
        break;
      case "toggle":
        g();
        break;
      case "setPrefilledVariables":
        i((T) => ({ ...T, ...y.variables }));
        break;
      case "reload":
        m();
        break;
      case "reset": {
        let T = n();
        if (!T) return;
        wn(T), Ma();
        break;
      }
    }
  }, u = () => {
    var _a5;
    l(true), (_a5 = t.onOpen) == null ? void 0 : _a5.call(t), document.body.style.setProperty("overflow", "hidden", "important"), document.addEventListener("pointerdown", p);
  }, p = () => {
    var _a5;
    l(false), (_a5 = t.onClose) == null ? void 0 : _a5.call(t), document.body.style.overflow = "auto", document.removeEventListener("pointerdown", p), Ma();
  }, g = () => {
    s() ? p() : u();
  }, m = () => {
    l(false), l(true);
  }, f = (w, { typebotId: y }) => {
    var _a5;
    (_a5 = r.onChatStatePersisted) == null ? void 0 : _a5.call(r, w, { typebotId: y }), o(y), w && Dg();
  }, v = (w) => {
    var _a5;
    (w === cg || w === Tl) && p(), (_a5 = e.onScriptExecutionSuccess) == null ? void 0 : _a5.call(e, w);
  };
  return h(Y, { get when() {
    return s();
  }, get children() {
    return h(ol, { get value() {
      var _a5;
      return (_a5 = document.querySelector("typebot-popup")) == null ? void 0 : _a5.shadowRoot;
    }, get children() {
      return [(() => {
        var w = k_();
        return E(w, bl, null), E(w, Pl, null), w;
      })(), (() => {
        var w = T_(), y = w.firstChild, T = y.nextSibling, b = T.firstChild, S = b.firstChild;
        return rt(S, "pointerdown", d), E(S, h(Fl, he(r, { onScriptExecutionSuccess: v, get prefilledVariables() {
          return a();
        }, onChatStatePersisted: f }))), B((_) => {
          var _a5, _b2, _c2, _d2;
          var I = ((_a5 = e.theme) == null ? void 0 : _a5.zIndex) ?? 42424242, x = "relative h-[80vh] transform overflow-hidden rounded-lg text-left transition-all sm:my-8 w-full max-w-lg" + (((_b2 = e.theme) == null ? void 0 : _b2.backgroundColor) ? " shadow-xl" : ""), C = ((_c2 = e.theme) == null ? void 0 : _c2.backgroundColor) ?? "transparent", R = ((_d2 = e.theme) == null ? void 0 : _d2.width) ?? "512px";
          return I !== _.e && ne(w, "z-index", _.e = I), x !== _.t && Z(S, _.t = x), C !== _.a && ne(S, "background-color", _.a = C), R !== _.o && ne(S, "max-width", _.o = R), _;
        }, { e: void 0, t: void 0, a: void 0, o: void 0 }), w;
      })()];
    } });
  } });
};
var E_ = P(`<style>
:host {
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
`);
var C_ = (e, { element: t }) => {
  let [r, n] = M(false), [o, a] = M(e.prefilledVariables), [i, s] = M(), l = () => {
    n(true);
  }, d = () => {
    n(false), setTimeout(() => {
      n(true);
    }, 1);
  }, c = new IntersectionObserver((g) => {
    g.some((m) => m.isIntersecting) && l();
  });
  ve(() => {
    window.addEventListener("message", u), c.observe(t);
  }), Ce(() => {
    e.prefilledVariables && a((g) => ({ ...g, ...e.prefilledVariables }));
  });
  let u = (g) => {
    let { data: m } = g;
    if (!(!m.isFromTypebot || m.id && e.id !== m.id)) switch (m.command) {
      case "setPrefilledVariables":
        a((f) => ({ ...f, ...m.variables }));
        break;
      case "reload":
        d();
        break;
      case "reset": {
        let f = i();
        if (!f) return;
        wn(f);
        break;
      }
    }
  }, p = (g, { typebotId: m }) => {
    var _a5;
    s(m), (_a5 = e.onChatStatePersisted) == null ? void 0 : _a5.call(e, g, { typebotId: m });
  };
  return ue(() => {
    c.disconnect();
  }), h(ol, { get value() {
    var _a5;
    return (_a5 = document.querySelector("typebot-standard")) == null ? void 0 : _a5.shadowRoot;
  }, get children() {
    return [(() => {
      var g = E_(), m = g.firstChild;
      return E(g, bl, m), E(g, Pl, m), g;
    })(), h(Y, { get when() {
      return r();
    }, get children() {
      return h(Fl, he(e, { get prefilledVariables() {
        return o();
      }, onChatStatePersisted: p }));
    } })];
  } });
};
var F_ = () => {
  typeof window > "u" || (Si("typebot-standard", Ks, C_), Si("typebot-bubble", _f, x_), Si("typebot-popup", Pf, S_));
};
var uh = {};
qd(uh, { close: () => P_, hidePreviewMessage: () => __, open: () => I_, reload: () => O_, reset: () => A_, sendCommand: () => R_, setInputValue: () => N_, setPrefilledVariables: () => D_, showPreviewMessage: () => L_, submitInput: () => M_, toggle: () => U_, unmount: () => B_ });
var P_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "close", id: e };
  window.postMessage(t);
};
var __ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "hidePreviewMessage", id: e };
  window.postMessage(t);
};
var I_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "open", id: e };
  window.postMessage(t);
};
var O_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "reload", id: e };
  window.postMessage(t);
};
var A_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "reset", id: e };
  window.postMessage(t);
};
var R_ = (e, { id: t } = {}) => {
  let r = { isFromTypebot: true, command: "sendCommand", text: e, id: t };
  window.postMessage(r);
};
var N_ = (e, { id: t } = {}) => {
  let r = { isFromTypebot: true, command: "setInputValue", value: e, id: t };
  window.postMessage(r);
};
var D_ = (e, { id: t } = {}) => {
  let r = { isFromTypebot: true, command: "setPrefilledVariables", variables: e, id: t };
  window.postMessage(r);
};
var L_ = (e, { id: t } = {}) => {
  let r = { isFromTypebot: true, command: "showPreviewMessage", message: e, id: t };
  window.postMessage(r);
};
var M_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "submitInput", id: e };
  window.postMessage(t);
};
var U_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "toggle", id: e };
  window.postMessage(t);
};
var B_ = ({ id: e } = {}) => {
  let t = { isFromTypebot: true, command: "unmount", id: e };
  window.postMessage(t);
};
var $_ = (e) => {
  let t = e.id ? document.getElementById(e.id) : document.querySelector("typebot-standard");
  if (!t) throw new Error("<typebot-standard> element not found.");
  Object.assign(t, e);
};
var z_ = (e) => {
  let t = document.createElement("typebot-popup");
  Object.assign(t, e), document.body.prepend(t);
};
var j_ = (e) => {
  let t = document.createElement("typebot-bubble");
  Object.assign(t, e), document.body.prepend(t);
};
var V_ = () => ({ initStandard: $_, initPopup: z_, initBubble: j_, ...uh });
var H_ = (e) => {
  typeof window > "u" || (window.Typebot = { ...e });
};
F_();
var G_ = V_();
H_(G_);
/*! Bundled license information:

@typebot.io/react/dist/web.js:
  (*! Bundled license information:
  
  ky/distribution/index.js:
    (*! MIT License © Sindre Sorhus *)
  
  partysocket/dist/chunk-4SNNYC7I.mjs:
    (*!
     * Reconnecting WebSocket
     * by Pedro Ladaria <pedro.ladaria@gmail.com>
     * https://github.com/pladaria/reconnecting-websocket
     * License MIT
     *)
  
  dompurify/dist/purify.es.mjs:
    (*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE *)
  *)
*/
//# sourceMappingURL=web-VQKYD2GB.js.map
