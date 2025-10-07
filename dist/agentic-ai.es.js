import Us, { createContext as wt, useContext as H, useReducer as qo, useState as an, useRef as xe, useId as Xo, useEffect as Me, useCallback as $s, useLayoutEffect as Zo, useMemo as _e, useInsertionEffect as Jo, forwardRef as Qo, Fragment as Ws, createElement as ta, Component as ea } from "react";
import na from "react-dom";
function ia(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var me = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function sa() {
  if (bi) return Kt;
  bi = 1;
  var t = Us, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, u) {
    var c, h = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) i.call(l, c) && !o.hasOwnProperty(c) && (h[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: p, props: h, _owner: s.current };
  }
  return Kt.Fragment = n, Kt.jsx = r, Kt.jsxs = r, Kt;
}
var Gt = {}, Pi;
function ra() {
  if (Pi) return Gt;
  Pi = 1;
  var t = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return t.NODE_ENV !== "production" && (function() {
    var e = Us, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, T = "@@iterator";
    function v(f) {
      if (f === null || typeof f != "object")
        return null;
      var m = y && f[y] || f[T];
      return typeof m == "function" ? m : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(f) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), A = 1; A < m; A++)
          x[A - 1] = arguments[A];
        D("error", f, x);
      }
    }
    function D(f, m, x) {
      {
        var A = P.ReactDebugCurrentFrame, V = A.getStackAddendum();
        V !== "" && (m += "%s", x = x.concat([V]));
        var _ = x.map(function(R) {
          return String(R);
        });
        _.unshift("Warning: " + m), Function.prototype.apply.call(console[f], console, _);
      }
    }
    var w = !1, M = !1, N = !1, E = !1, W = !1, Y;
    Y = Symbol.for("react.module.reference");
    function ct(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === s || f === r || W || f === o || f === c || f === h || E || f === g || w || M || N || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === a || f.$$typeof === l || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Y || f.getModuleId !== void 0));
    }
    function ue(f, m, x) {
      var A = f.displayName;
      if (A)
        return A;
      var V = m.displayName || m.name || "";
      return V !== "" ? x + "(" + V + ")" : x;
    }
    function ce(f) {
      return f.displayName || "Context";
    }
    function nt(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case r:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var m = f;
            return ce(m) + ".Consumer";
          case a:
            var x = f;
            return ce(x._context) + ".Provider";
          case u:
            return ue(f, f.render, "ForwardRef");
          case d:
            var A = f.displayName || null;
            return A !== null ? A : nt(f.type) || "Memo";
          case p: {
            var V = f, _ = V._payload, R = V._init;
            try {
              return nt(R(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ft = Object.assign, Et = 0, U, J, Ct, Rt, ni, ii, si;
    function ri() {
    }
    ri.__reactDisabledLog = !0;
    function Po() {
      {
        if (Et === 0) {
          U = console.log, J = console.info, Ct = console.warn, Rt = console.error, ni = console.group, ii = console.groupCollapsed, si = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: ri,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Et++;
      }
    }
    function So() {
      {
        if (Et--, Et === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, f, {
              value: U
            }),
            info: ft({}, f, {
              value: J
            }),
            warn: ft({}, f, {
              value: Ct
            }),
            error: ft({}, f, {
              value: Rt
            }),
            group: ft({}, f, {
              value: ni
            }),
            groupCollapsed: ft({}, f, {
              value: ii
            }),
            groupEnd: ft({}, f, {
              value: si
            })
          });
        }
        Et < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Be = P.ReactCurrentDispatcher, Ne;
    function fe(f, m, x) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (V) {
            var A = V.stack.trim().match(/\n( *(at )?)/);
            Ne = A && A[1] || "";
          }
        return `
` + Ne + f;
      }
    }
    var Ue = !1, he;
    {
      var wo = typeof WeakMap == "function" ? WeakMap : Map;
      he = new wo();
    }
    function oi(f, m) {
      if (!f || Ue)
        return "";
      {
        var x = he.get(f);
        if (x !== void 0)
          return x;
      }
      var A;
      Ue = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Be.current, Be.current = null, Po();
      try {
        if (m) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (q) {
              A = q;
            }
            Reflect.construct(f, [], R);
          } else {
            try {
              R.call();
            } catch (q) {
              A = q;
            }
            f.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            A = q;
          }
          f();
        }
      } catch (q) {
        if (q && A && typeof q.stack == "string") {
          for (var C = q.stack.split(`
`), z = A.stack.split(`
`), F = C.length - 1, B = z.length - 1; F >= 1 && B >= 0 && C[F] !== z[B]; )
            B--;
          for (; F >= 1 && B >= 0; F--, B--)
            if (C[F] !== z[B]) {
              if (F !== 1 || B !== 1)
                do
                  if (F--, B--, B < 0 || C[F] !== z[B]) {
                    var Q = `
` + C[F].replace(" at new ", " at ");
                    return f.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", f.displayName)), typeof f == "function" && he.set(f, Q), Q;
                  }
                while (F >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, Be.current = _, So(), Error.prepareStackTrace = V;
      }
      var Vt = f ? f.displayName || f.name : "", vt = Vt ? fe(Vt) : "";
      return typeof f == "function" && he.set(f, vt), vt;
    }
    function Ao(f, m, x) {
      return oi(f, !1);
    }
    function Eo(f) {
      var m = f.prototype;
      return !!(m && m.isReactComponent);
    }
    function de(f, m, x) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return oi(f, Eo(f));
      if (typeof f == "string")
        return fe(f);
      switch (f) {
        case c:
          return fe("Suspense");
        case h:
          return fe("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return Ao(f.render);
          case d:
            return de(f.type, m, x);
          case p: {
            var A = f, V = A._payload, _ = A._init;
            try {
              return de(_(V), m, x);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, ai = {}, li = P.ReactDebugCurrentFrame;
    function pe(f) {
      if (f) {
        var m = f._owner, x = de(f.type, f._source, m ? m.type : null);
        li.setExtraStackFrame(x);
      } else
        li.setExtraStackFrame(null);
    }
    function Co(f, m, x, A, V) {
      {
        var _ = Function.call.bind(Wt);
        for (var R in f)
          if (_(f, R)) {
            var C = void 0;
            try {
              if (typeof f[R] != "function") {
                var z = Error((A || "React class") + ": " + x + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              C = f[R](m, R, A, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              C = F;
            }
            C && !(C instanceof Error) && (pe(V), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", x, R, typeof C), pe(null)), C instanceof Error && !(C.message in ai) && (ai[C.message] = !0, pe(V), b("Failed %s type: %s", x, C.message), pe(null));
          }
      }
    }
    var Ro = Array.isArray;
    function $e(f) {
      return Ro(f);
    }
    function Do(f) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return x;
      }
    }
    function Vo(f) {
      try {
        return ui(f), !1;
      } catch {
        return !0;
      }
    }
    function ui(f) {
      return "" + f;
    }
    function ci(f) {
      if (Vo(f))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Do(f)), ui(f);
    }
    var fi = P.ReactCurrentOwner, Mo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hi, di;
    function _o(f) {
      if (Wt.call(f, "ref")) {
        var m = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Oo(f) {
      if (Wt.call(f, "key")) {
        var m = Object.getOwnPropertyDescriptor(f, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ko(f, m) {
      typeof f.ref == "string" && fi.current;
    }
    function Lo(f, m) {
      {
        var x = function() {
          hi || (hi = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function jo(f, m) {
      {
        var x = function() {
          di || (di = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Fo = function(f, m, x, A, V, _, R) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: f,
        key: m,
        ref: x,
        props: R,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function Io(f, m, x, A, V) {
      {
        var _, R = {}, C = null, z = null;
        x !== void 0 && (ci(x), C = "" + x), Oo(m) && (ci(m.key), C = "" + m.key), _o(m) && (z = m.ref, ko(m, V));
        for (_ in m)
          Wt.call(m, _) && !Mo.hasOwnProperty(_) && (R[_] = m[_]);
        if (f && f.defaultProps) {
          var F = f.defaultProps;
          for (_ in F)
            R[_] === void 0 && (R[_] = F[_]);
        }
        if (C || z) {
          var B = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          C && Lo(R, B), z && jo(R, B);
        }
        return Fo(f, C, z, V, A, fi.current, R);
      }
    }
    var We = P.ReactCurrentOwner, pi = P.ReactDebugCurrentFrame;
    function Dt(f) {
      if (f) {
        var m = f._owner, x = de(f.type, f._source, m ? m.type : null);
        pi.setExtraStackFrame(x);
      } else
        pi.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Ge(f) {
      return typeof f == "object" && f !== null && f.$$typeof === n;
    }
    function mi() {
      {
        if (We.current) {
          var f = nt(We.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Bo(f) {
      return "";
    }
    var gi = {};
    function No(f) {
      {
        var m = mi();
        if (!m) {
          var x = typeof f == "string" ? f : f.displayName || f.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function yi(f, m) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var x = No(m);
        if (gi[x])
          return;
        gi[x] = !0;
        var A = "";
        f && f._owner && f._owner !== We.current && (A = " It was passed a child from " + nt(f._owner.type) + "."), Dt(f), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, A), Dt(null);
      }
    }
    function vi(f, m) {
      {
        if (typeof f != "object")
          return;
        if ($e(f))
          for (var x = 0; x < f.length; x++) {
            var A = f[x];
            Ge(A) && yi(A, m);
          }
        else if (Ge(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var V = v(f);
          if (typeof V == "function" && V !== f.entries)
            for (var _ = V.call(f), R; !(R = _.next()).done; )
              Ge(R.value) && yi(R.value, m);
        }
      }
    }
    function Uo(f) {
      {
        var m = f.type;
        if (m == null || typeof m == "string")
          return;
        var x;
        if (typeof m == "function")
          x = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === d))
          x = m.propTypes;
        else
          return;
        if (x) {
          var A = nt(m);
          Co(x, f.props, "prop", A, f);
        } else if (m.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var V = nt(m);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $o(f) {
      {
        for (var m = Object.keys(f.props), x = 0; x < m.length; x++) {
          var A = m[x];
          if (A !== "children" && A !== "key") {
            Dt(f), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Dt(null);
            break;
          }
        }
        f.ref !== null && (Dt(f), b("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
      }
    }
    var xi = {};
    function Ti(f, m, x, A, V, _) {
      {
        var R = ct(f);
        if (!R) {
          var C = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Bo();
          z ? C += z : C += mi();
          var F;
          f === null ? F = "null" : $e(f) ? F = "array" : f !== void 0 && f.$$typeof === n ? (F = "<" + (nt(f.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : F = typeof f, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, C);
        }
        var B = Io(f, m, x, V, _);
        if (B == null)
          return B;
        if (R) {
          var Q = m.children;
          if (Q !== void 0)
            if (A)
              if ($e(Q)) {
                for (var Vt = 0; Vt < Q.length; Vt++)
                  vi(Q[Vt], f);
                Object.freeze && Object.freeze(Q);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vi(Q, f);
        }
        if (Wt.call(m, "key")) {
          var vt = nt(f), q = Object.keys(m).filter(function(Ho) {
            return Ho !== "key";
          }), Ye = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xi[vt + Ye]) {
            var zo = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, vt, zo, vt), xi[vt + Ye] = !0;
          }
        }
        return f === s ? $o(B) : Uo(B), B;
      }
    }
    function Wo(f, m, x) {
      return Ti(f, m, x, !0);
    }
    function Ko(f, m, x) {
      return Ti(f, m, x, !1);
    }
    var Go = Ko, Yo = Wo;
    Gt.Fragment = s, Gt.jsx = Go, Gt.jsxs = Yo;
  })(), Gt;
}
var Si;
function oa() {
  if (Si) return me.exports;
  Si = 1;
  var t = {};
  return t.NODE_ENV === "production" ? me.exports = sa() : me.exports = ra(), me.exports;
}
var j = oa(), Mt = {}, wi;
function aa() {
  if (wi) return Mt;
  wi = 1;
  var t = {}, e = na;
  if (t.NODE_ENV === "production")
    Mt.createRoot = e.createRoot, Mt.hydrateRoot = e.hydrateRoot;
  else {
    var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Mt.createRoot = function(i, s) {
      n.usingClientEntryPoint = !0;
      try {
        return e.createRoot(i, s);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    }, Mt.hydrateRoot = function(i, s, o) {
      n.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(i, s, o);
      } finally {
        n.usingClientEntryPoint = !1;
      }
    };
  }
  return Mt;
}
var la = aa();
const ua = /* @__PURE__ */ ia(la), Ks = wt(), ca = {
  messages: [],
  context: { trip: null, cabin: null, user: null }
};
function fa(t, e) {
  switch (e.type) {
    case "ADD_MESSAGE":
      return { ...t, messages: [...t.messages, e.payload] };
    case "SET_CONTEXT":
      return { ...t, context: { ...t.context, ...e.payload } };
    default:
      return t;
  }
}
function ha({ children: t }) {
  const [e, n] = qo(fa, ca);
  return /* @__PURE__ */ j.jsx(Ks.Provider, { value: { state: e, dispatch: n }, children: t });
}
const Gs = () => H(Ks);
let ht = {
  apiBaseUrl: "",
  merchantId: "",
  chatTheme: "light",
  env: "production",
  customCssUrl: null
};
function da(t = {}) {
  if (ht = { ...ht, ...t }, window.AgenticAIConfig && (ht = { ...ht, ...window.AgenticAIConfig }), ht.customCssUrl) {
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = ht.customCssUrl, document.head.appendChild(e);
  } else
    Promise.resolve({                     });
  return Promise.resolve({                }), ht;
}
function pa() {
  return ht;
}
const Ys = {
  searchResults: {
    description: "Fired when Agentic search returns product results.",
    required: ["results"],
    validate: (t) => t && Array.isArray(t.results),
    defaultHandler: (t) => console.log("[AgenticAI] Search Results:", t)
  },
  addToCart: {
    description: "Triggered when a product is added to the cart.",
    required: ["productId", "name"],
    validate: (t) => t && typeof t.productId == "string" && t.name,
    defaultHandler: (t) => console.log("[AgenticAI] Added to cart:", t)
  },
  checkout: {
    description: "User initiated checkout flow.",
    required: [],
    validate: () => !0,
    defaultHandler: () => console.log("[AgenticAI] Checkout initiated.")
  },
  chatMessage: {
    description: "Emitted on every chat message (bot or user).",
    required: ["text", "sender"],
    validate: (t) => !!t.text,
    defaultHandler: () => {
    }
  }
}, Te = {};
function ma(t, e) {
  if (!Ys[t]) {
    console.warn(`[AgenticAI] Unknown event type: ${t}`);
    return;
  }
  Te[t] || (Te[t] = []), Te[t].push(e);
}
function at(t, e) {
  const n = Ys[t];
  if (!n) {
    console.warn(`[AgenticAI] Unknown event emitted: ${t}`);
    return;
  }
  if (!n.validate(e)) {
    console.warn(`[AgenticAI] Invalid payload for "${t}"`, e);
    return;
  }
  const s = Te[t] || [];
  s.length === 0 ? n.defaultHandler(e) : s.forEach((o) => {
    try {
      o(e);
    } catch (r) {
      console.error(`[AgenticAI] Error in ${t} callback:`, r);
    }
  }), window.dispatchEvent(new CustomEvent(`agentic:${t}`, { detail: e }));
}
function ga() {
  const [t, e] = an(""), [n, i] = an(!1), { state: s, dispatch: o } = Gs(), { apiBaseUrl: r, merchantId: a } = pa(), l = async () => {
    if (t.trim()) {
      o({ type: "ADD_MESSAGE", payload: { type: "user", text: t } }), at("chatMessage", { text: t, sender: "user" }), i(!0);
      try {
        const c = await (await fetch(`${r}/agentic-search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: t,
            merchant_id: a,
            limit: 10,
            offset: 0
          })
        })).json();
        i(!1), at("searchResults", { results: c?.results || [], query: t });
        const h = `Found ${c?.results?.length || 0} matching products for “${t}”.`;
        o({ type: "ADD_MESSAGE", payload: { type: "bot", text: h } }), at("chatMessage", { text: h, sender: "bot" });
      } catch (u) {
        console.error("[AgenticAI] Search failed:", u), i(!1);
        const c = "Sorry, I couldn’t find products right now.";
        o({ type: "ADD_MESSAGE", payload: { type: "bot", text: c } }), at("chatMessage", { text: c, sender: "bot" });
      }
      e("");
    }
  };
  return /* @__PURE__ */ j.jsx("div", { className: "agentic-inline-chat", children: /* @__PURE__ */ j.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ j.jsx(
      "input",
      {
        className: "agentic-input",
        placeholder: "Ask for products (e.g. baby strollers)...",
        value: t,
        onChange: (u) => e(u.target.value),
        onKeyDown: (u) => u.key === "Enter" && l()
      }
    ),
    /* @__PURE__ */ j.jsx(
      "button",
      {
        onClick: l,
        className: "bg-[var(--agentic-primary)] text-white px-4 rounded-lg",
        disabled: n,
        children: n ? "Searching..." : "Ask"
      }
    )
  ] }) });
}
const zs = wt({});
function ya(t) {
  const e = xe(null);
  return e.current === null && (e.current = t()), e.current;
}
const wn = wt(null), Hs = wt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function va(t = !0) {
  const e = H(wn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = Xo();
  Me(() => {
    t && s(o);
  }, [t]);
  const r = $s(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const An = typeof window < "u", xa = An ? Zo : Me, X = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
var Ta = {};
let Nt = X, pt = X;
Ta.NODE_ENV !== "production" && (Nt = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, pt = (t, e) => {
  if (!t)
    throw new Error(e);
});
// @__NO_SIDE_EFFECTS__
function En(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Ft = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
}, st = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, lt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, ba = {
  useManualTiming: !1
};
function Pa(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), i = !1, s = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(u) {
    o.has(u) && (l.schedule(u), t()), u(r);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, h = !1) => {
      const p = h && i ? e : n;
      return c && o.add(u), p.has(u) || p.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (r = u, i) {
        s = !0;
        return;
      }
      i = !0, [e, n] = [n, e], e.forEach(a), e.clear(), i = !1, s && (s = !1, l.process(u));
    }
  };
  return l;
}
const ge = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Sa = 40;
function qs(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = ge.reduce((v, P) => (v[P] = Pa(o), v), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: d } = r, p = () => {
    const v = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, Sa), 1), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(p));
  }, g = () => {
    n = !0, i = !0, s.isProcessing || t(p);
  };
  return { schedule: ge.reduce((v, P) => {
    const b = r[P];
    return v[P] = (D, w = !1, M = !1) => (n || g(), b.schedule(D, w, M)), v;
  }, {}), cancel: (v) => {
    for (let P = 0; P < ge.length; P++)
      r[ge[P]].cancel(v);
  }, state: s, steps: r };
}
const { schedule: O, cancel: mt, state: $, steps: ze } = qs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0), Xs = wt({ strict: !1 }), Ai = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, It = {};
for (const t in Ai)
  It[t] = {
    isEnabled: (e) => Ai[t].some((n) => !!e[n])
  };
function wa(t) {
  for (const e in t)
    It[e] = {
      ...It[e],
      ...t[e]
    };
}
const Aa = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function we(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Aa.has(t);
}
let Zs = (t) => !we(t);
function Ea(t) {
  t && (Zs = (e) => e.startsWith("on") ? !we(e) : t(e));
}
try {
  Ea(require("@emotion/is-prop-valid").default);
} catch {
}
function Ca(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Zs(s) || n === !0 && we(s) || !e && !we(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Ei = /* @__PURE__ */ new Set();
function Oe(t, e, n) {
  t || Ei.has(e) || (console.warn(e), Ei.add(e));
}
var Ra = {};
function Da(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...i) => (Ra.NODE_ENV !== "production" && Oe(!1, "motion() is deprecated. Use motion.create() instead."), t(...i));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
  });
}
const ke = wt({});
function te(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Le(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const Cn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rn = ["initial", ...Cn];
function je(t) {
  return Le(t.animate) || Rn.some((e) => te(t[e]));
}
function Js(t) {
  return !!(je(t) || t.variants);
}
function Va(t, e) {
  if (je(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || te(n) ? n : void 0,
      animate: te(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Ma(t) {
  const { initial: e, animate: n } = Va(t, H(ke));
  return _e(() => ({ initial: e, animate: n }), [Ci(e), Ci(n)]);
}
function Ci(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const _a = Symbol.for("motionComponentSymbol");
function _t(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Oa(t, e, n) {
  return $s(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : _t(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Dn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ka = "framerAppearId", Qs = "data-" + Dn(ka), { schedule: Vn } = qs(queueMicrotask, !1), tr = wt({});
function La(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = H(ke), l = H(Xs), u = H(wn), c = H(Hs).reducedMotion, h = xe(null);
  i = i || l.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = h.current, p = H(tr);
  d && !d.projection && s && (d.type === "html" || d.type === "svg") && ja(h.current, n, s, p);
  const g = xe(!1);
  Jo(() => {
    d && g.current && d.update(n, u);
  });
  const y = n[Qs], T = xe(!!y && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, y)));
  return xa(() => {
    d && (g.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Vn.render(d.render), T.current && d.animationState && d.animationState.animateChanges());
  }), Me(() => {
    d && (!T.current && d.animationState && d.animationState.animateChanges(), T.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, y);
    }), T.current = !1));
  }), d;
}
function ja(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : er(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && _t(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: i,
    layoutScroll: l,
    layoutRoot: u
  });
}
function er(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : er(t.parent);
}
var Fa = {};
function Ia({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && wa(t);
  function a(u, c) {
    let h;
    const d = {
      ...H(Hs),
      ...u,
      layoutId: Ba(u)
    }, { isStatic: p } = d, g = Ma(u), y = i(u, p);
    if (!p && An) {
      Na(d, t);
      const T = Ua(d);
      h = T.MeasureLayout, g.visualElement = La(s, y, d, e, T.ProjectionNode);
    }
    return j.jsxs(ke.Provider, { value: g, children: [h && g.visualElement ? j.jsx(h, { visualElement: g.visualElement, ...d }) : null, n(s, u, Oa(y, g.visualElement, c), y, p, g.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = Qo(a);
  return l[_a] = s, l;
}
function Ba({ layoutId: t }) {
  const e = H(zs).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Na(t, e) {
  const n = H(Xs).strict;
  if (Fa.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Nt(!1, i) : pt(!1, i);
  }
}
function Ua(t) {
  const { drag: e, layout: n } = It;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const $a = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Mn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!($a.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ri(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function _n(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Ri(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Ri(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const ln = (t) => Array.isArray(t), Wa = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Ka = (t) => ln(t) ? t[t.length - 1] || 0 : t, G = (t) => !!(t && t.getVelocity);
function be(t) {
  const e = G(t) ? t.get() : t;
  return Wa(e) ? e.toValue() : e;
}
function Ga({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: Ya(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const nr = (t) => (e, n) => {
  const i = H(ke), s = H(wn), o = () => Ga(t, e, i, s);
  return n ? o() : ya(o);
};
function Ya(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const d in o)
    s[d] = be(o[d]);
  let { initial: r, animate: a } = t;
  const l = je(t), u = Js(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Le(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const g = _n(t, d[p]);
      if (g) {
        const { transitionEnd: y, transition: T, ...v } = g;
        for (const P in v) {
          let b = v[P];
          if (Array.isArray(b)) {
            const D = c ? b.length - 1 : 0;
            b = b[D];
          }
          b !== null && (s[P] = b);
        }
        for (const P in y)
          s[P] = y[P];
      }
    }
  }
  return s;
}
const Ut = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], At = new Set(Ut), ir = (t) => (e) => typeof e == "string" && e.startsWith(t), sr = /* @__PURE__ */ ir("--"), za = /* @__PURE__ */ ir("var(--"), On = (t) => za(t) ? Ha.test(t.split("/*")[0].trim()) : !1, Ha = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, rr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ut = (t, e, n) => n > e ? e : n < t ? t : n, $t = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ee = {
  ...$t,
  transform: (t) => ut(0, 1, t)
}, ye = {
  ...$t,
  default: 1
}, re = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), dt = /* @__PURE__ */ re("deg"), rt = /* @__PURE__ */ re("%"), S = /* @__PURE__ */ re("px"), qa = /* @__PURE__ */ re("vh"), Xa = /* @__PURE__ */ re("vw"), Di = {
  ...rt,
  parse: (t) => rt.parse(t) / 100,
  transform: (t) => rt.transform(t * 100)
}, Za = {
  // Border props
  borderWidth: S,
  borderTopWidth: S,
  borderRightWidth: S,
  borderBottomWidth: S,
  borderLeftWidth: S,
  borderRadius: S,
  radius: S,
  borderTopLeftRadius: S,
  borderTopRightRadius: S,
  borderBottomRightRadius: S,
  borderBottomLeftRadius: S,
  // Positioning props
  width: S,
  maxWidth: S,
  height: S,
  maxHeight: S,
  top: S,
  right: S,
  bottom: S,
  left: S,
  // Spacing props
  padding: S,
  paddingTop: S,
  paddingRight: S,
  paddingBottom: S,
  paddingLeft: S,
  margin: S,
  marginTop: S,
  marginRight: S,
  marginBottom: S,
  marginLeft: S,
  // Misc
  backgroundPositionX: S,
  backgroundPositionY: S
}, Ja = {
  rotate: dt,
  rotateX: dt,
  rotateY: dt,
  rotateZ: dt,
  scale: ye,
  scaleX: ye,
  scaleY: ye,
  scaleZ: ye,
  skew: dt,
  skewX: dt,
  skewY: dt,
  distance: S,
  translateX: S,
  translateY: S,
  translateZ: S,
  x: S,
  y: S,
  z: S,
  perspective: S,
  transformPerspective: S,
  opacity: ee,
  originX: Di,
  originY: Di,
  originZ: S
}, Vi = {
  ...$t,
  transform: Math.round
}, kn = {
  ...Za,
  ...Ja,
  zIndex: Vi,
  size: S,
  // SVG
  fillOpacity: ee,
  strokeOpacity: ee,
  numOctaves: Vi
}, Qa = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, tl = Ut.length;
function el(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < tl; o++) {
    const r = Ut[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = rr(a, kn[r]);
      if (!l) {
        s = !1;
        const c = Qa[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function Ln(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (At.has(l)) {
      r = !0;
      continue;
    } else if (sr(l)) {
      s[l] = u;
      continue;
    } else {
      const c = rr(u, kn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = el(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const nl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, il = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function sl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? nl : il;
  t[o.offset] = S.transform(-i);
  const r = S.transform(e), a = S.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Mi(t, e, n) {
  return typeof t == "string" ? t : S.transform(e + n * t);
}
function rl(t, e, n) {
  const i = Mi(e, t.x, t.width), s = Mi(n, t.y, t.height);
  return `${i} ${s}`;
}
function jn(t, {
  attrX: e,
  attrY: n,
  attrScale: i,
  originX: s,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, h) {
  if (Ln(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: p, dimensions: g } = t;
  d.transform && (g && (p.transform = d.transform), delete d.transform), g && (s !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = rl(g, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), r !== void 0 && sl(d, r, a, l, !1);
}
const Fn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), or = () => ({
  ...Fn(),
  attrs: {}
}), In = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ar(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const lr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function ur(t, e, n, i) {
  ar(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(lr.has(s) ? s : Dn(s), e.attrs[s]);
}
const Ae = {};
function ol(t) {
  Object.assign(Ae, t);
}
function cr(t, { layout: e, layoutId: n }) {
  return At.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ae[t] || t === "opacity");
}
function Bn(t, e, n) {
  var i;
  const { style: s } = t, o = {};
  for (const r in s)
    (G(s[r]) || e.style && G(e.style[r]) || cr(r, t) || ((i = n?.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
function fr(t, e, n) {
  const i = Bn(t, e, n);
  for (const s in t)
    if (G(t[s]) || G(e[s])) {
      const o = Ut.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
function al(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const _i = ["x", "y", "width", "height", "cx", "cy", "r"], ll = {
  useVisualState: nr({
    scrapeMotionValuesFromProps: fr,
    createRenderState: or,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: i, latestValues: s }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in s)
          if (At.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < _i.length; a++) {
          const l = _i[a];
          t[l] !== e[l] && (r = !0);
        }
      r && O.read(() => {
        al(n, i), O.render(() => {
          jn(i, s, In(n.tagName), t.transformTemplate), ur(n, i);
        });
      });
    }
  })
}, ul = {
  useVisualState: nr({
    scrapeMotionValuesFromProps: Bn,
    createRenderState: Fn
  })
};
function hr(t, e, n) {
  for (const i in e)
    !G(e[i]) && !cr(i, n) && (t[i] = e[i]);
}
function cl({ transformTemplate: t }, e) {
  return _e(() => {
    const n = Fn();
    return Ln(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function fl(t, e) {
  const n = t.style || {}, i = {};
  return hr(i, n, t), Object.assign(i, cl(t, e)), i;
}
function hl(t, e) {
  const n = {}, i = fl(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
function dl(t, e, n, i) {
  const s = _e(() => {
    const o = or();
    return jn(o, e, In(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    hr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function pl(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (Mn(n) ? dl : hl)(i, o, r, n), u = Ca(i, typeof n == "string", t), c = n !== Ws ? { ...u, ...l, ref: s } : {}, { children: h } = i, d = _e(() => G(h) ? h.get() : h, [h]);
    return ta(n, {
      ...c,
      children: d
    });
  };
}
function ml(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...Mn(i) ? ll : ul,
      preloadedFeatures: t,
      useRender: pl(s),
      createVisualElement: e,
      Component: i
    };
    return Ia(r);
  };
}
function dr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
function Fe(t, e, n) {
  const i = t.getProps();
  return _n(i, e, n !== void 0 ? n : i.custom, t);
}
const gl = /* @__PURE__ */ En(() => window.ScrollTimeline !== void 0);
class yl {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let i = 0; i < this.animations.length; i++)
      this.animations[i][e] = n;
  }
  attachTimeline(e, n) {
    const i = this.animations.map((s) => {
      if (gl() && s.attachTimeline)
        return s.attachTimeline(e);
      if (typeof n == "function")
        return n(s);
    });
    return () => {
      i.forEach((s, o) => {
        s && s(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class vl extends yl {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function Nn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const un = 2e4;
function pr(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < un; )
    e += n, i = t.next(e);
  return e >= un ? 1 / 0 : e;
}
function Un(t) {
  return typeof t == "function";
}
function Oi(t, e) {
  t.timeline = e, t.onfinish = null;
}
const $n = (t) => Array.isArray(t) && typeof t[0] == "number", xl = {
  linearEasing: void 0
};
function Tl(t, e) {
  const n = /* @__PURE__ */ En(t);
  return () => {
    var i;
    return (i = xl[e]) !== null && i !== void 0 ? i : n();
  };
}
const Ee = /* @__PURE__ */ Tl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), mr = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ Ft(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function gr(t) {
  return !!(typeof t == "function" && Ee() || !t || typeof t == "string" && (t in cn || Ee()) || $n(t) || Array.isArray(t) && t.every(gr));
}
const zt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, cn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ zt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ zt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ zt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ zt([0.33, 1.53, 0.69, 0.99])
};
function yr(t, e) {
  if (t)
    return typeof t == "function" && Ee() ? mr(t, e) : $n(t) ? zt(t) : Array.isArray(t) ? t.map((n) => yr(n, e) || cn.easeOut) : cn[t];
}
const it = {
  x: !1,
  y: !1
};
function vr() {
  return it.x || it.y;
}
function bl(t, e, n) {
  var i;
  if (t instanceof Element)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const o = (i = void 0) !== null && i !== void 0 ? i : s.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function xr(t, e) {
  const n = bl(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function ki(t) {
  return (e) => {
    e.pointerType === "touch" || vr() || t(e);
  };
}
function Pl(t, e, n = {}) {
  const [i, s, o] = xr(t, n), r = ki((a) => {
    const { target: l } = a, u = e(a);
    if (typeof u != "function" || !l)
      return;
    const c = ki((h) => {
      u(h), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, s);
  });
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
const Tr = (t, e) => e ? t === e ? !0 : Tr(t, e.parentElement) : !1, Wn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Sl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function wl(t) {
  return Sl.has(t.tagName) || t.tabIndex !== -1;
}
const Ht = /* @__PURE__ */ new WeakSet();
function Li(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function He(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const Al = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Li(() => {
    if (Ht.has(n))
      return;
    He(n, "down");
    const s = Li(() => {
      He(n, "up");
    }), o = () => He(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function ji(t) {
  return Wn(t) && !vr();
}
function El(t, e, n = {}) {
  const [i, s, o] = xr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!ji(a) || Ht.has(l))
      return;
    Ht.add(l);
    const u = e(a), c = (p, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!ji(p) || !Ht.has(l)) && (Ht.delete(l), typeof u == "function" && u(p, { success: g }));
    }, h = (p) => {
      c(p, n.useGlobalTarget || Tr(l, p.target));
    }, d = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    !wl(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), a.addEventListener("focus", (u) => Al(u, s), s);
  }), o;
}
function Cl(t) {
  return t === "x" || t === "y" ? it[t] ? null : (it[t] = !0, () => {
    it[t] = !1;
  }) : it.x || it.y ? null : (it.x = it.y = !0, () => {
    it.x = it.y = !1;
  });
}
const br = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ut
]);
let Pe;
function Rl() {
  Pe = void 0;
}
const ot = {
  now: () => (Pe === void 0 && ot.set($.isProcessing || ba.useManualTiming ? $.timestamp : performance.now()), Pe),
  set: (t) => {
    Pe = t, queueMicrotask(Rl);
  }
};
function Kn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Gn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Yn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Kn(this.subscriptions, e), () => Gn(this.subscriptions, e);
  }
  notify(e, n, i) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, n, i);
      else
        for (let o = 0; o < s; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, i);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Pr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
var Dl = {};
const Fi = 30, Vl = (t) => !isNaN(parseFloat(t));
class Ml {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, s = !0) => {
      const o = ot.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = ot.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Vl(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return Dl.NODE_ENV !== "production" && Oe(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Yn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), O.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : i;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, i) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = ot.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Fi)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fi);
    return Pr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ne(t, e) {
  return new Ml(t, e);
}
function _l(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ne(n));
}
function Ol(t, e) {
  const n = Fe(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = Ka(o[r]);
    _l(t, r, a);
  }
}
function kl(t) {
  return !!(G(t) && t.add);
}
function fn(t, e) {
  const n = t.getValue("willChange");
  if (kl(n))
    return n.add(e);
}
function Sr(t) {
  return t.props[Qs];
}
const wr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Ll = 1e-7, jl = 12;
function Fl(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = wr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Ll && ++a < jl);
  return r;
}
function oe(t, e, n, i) {
  if (t === e && n === i)
    return X;
  const s = (o) => Fl(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : wr(s(o), e, i);
}
const Ar = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Er = (t) => (e) => 1 - t(1 - e), Cr = /* @__PURE__ */ oe(0.33, 1.53, 0.69, 0.99), zn = /* @__PURE__ */ Er(Cr), Rr = /* @__PURE__ */ Ar(zn), Dr = (t) => (t *= 2) < 1 ? 0.5 * zn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Hn = (t) => 1 - Math.sin(Math.acos(t)), Vr = Er(Hn), Mr = Ar(Hn), _r = (t) => /^0[^.\s]+$/u.test(t);
function Il(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || _r(t) : !0;
}
const Xt = (t) => Math.round(t * 1e5) / 1e5, qn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Bl(t) {
  return t == null;
}
const Nl = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Xn = (t, e) => (n) => !!(typeof n == "string" && Nl.test(n) && n.startsWith(t) || e && !Bl(n) && Object.prototype.hasOwnProperty.call(n, e)), Or = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(qn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ul = (t) => ut(0, 255, t), qe = {
  ...$t,
  transform: (t) => Math.round(Ul(t))
}, Pt = {
  test: /* @__PURE__ */ Xn("rgb", "red"),
  parse: /* @__PURE__ */ Or("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + qe.transform(t) + ", " + qe.transform(e) + ", " + qe.transform(n) + ", " + Xt(ee.transform(i)) + ")"
};
function $l(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const hn = {
  test: /* @__PURE__ */ Xn("#"),
  parse: $l,
  transform: Pt.transform
}, Ot = {
  test: /* @__PURE__ */ Xn("hsl", "hue"),
  parse: /* @__PURE__ */ Or("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + rt.transform(Xt(e)) + ", " + rt.transform(Xt(n)) + ", " + Xt(ee.transform(i)) + ")"
}, K = {
  test: (t) => Pt.test(t) || hn.test(t) || Ot.test(t),
  parse: (t) => Pt.test(t) ? Pt.parse(t) : Ot.test(t) ? Ot.parse(t) : hn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Pt.transform(t) : Ot.transform(t)
}, Wl = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Kl(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(qn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Wl)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const kr = "number", Lr = "color", Gl = "var", Yl = "var(", Ii = "${}", zl = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ie(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(zl, (l) => (K.test(l) ? (i.color.push(o), s.push(Lr), n.push(K.parse(l))) : l.startsWith(Yl) ? (i.var.push(o), s.push(Gl), n.push(l)) : (i.number.push(o), s.push(kr), n.push(parseFloat(l))), ++o, Ii)).split(Ii);
  return { values: n, split: a, indexes: i, types: s };
}
function jr(t) {
  return ie(t).values;
}
function Fr(t) {
  const { split: e, types: n } = ie(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === kr ? o += Xt(s[r]) : a === Lr ? o += K.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Hl = (t) => typeof t == "number" ? 0 : t;
function ql(t) {
  const e = jr(t);
  return Fr(t)(e.map(Hl));
}
const gt = {
  test: Kl,
  parse: jr,
  createTransformer: Fr,
  getAnimatableNone: ql
}, Xl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Zl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(qn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Xl.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Jl = /\b([a-z-]*)\(.*?\)/gu, dn = {
  ...gt,
  getAnimatableNone: (t) => {
    const e = t.match(Jl);
    return e ? e.map(Zl).join(" ") : t;
  }
}, Ql = {
  ...kn,
  // Color props
  color: K,
  backgroundColor: K,
  outlineColor: K,
  fill: K,
  stroke: K,
  // Border props
  borderColor: K,
  borderTopColor: K,
  borderRightColor: K,
  borderBottomColor: K,
  borderLeftColor: K,
  filter: dn,
  WebkitFilter: dn
}, Zn = (t) => Ql[t];
function Ir(t, e) {
  let n = Zn(t);
  return n !== dn && (n = gt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const tu = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function eu(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !tu.has(o) && ie(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = Ir(n, s);
}
const Bi = (t) => t === $t || t === S, Ni = (t, e) => parseFloat(t.split(", ")[e]), Ui = (t, e) => (n, { transform: i }) => {
  if (i === "none" || !i)
    return 0;
  const s = i.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Ni(s[1], e);
  {
    const o = i.match(/^matrix\((.+)\)$/u);
    return o ? Ni(o[1], t) : 0;
  }
}, nu = /* @__PURE__ */ new Set(["x", "y", "z"]), iu = Ut.filter((t) => !nu.has(t));
function su(t) {
  const e = [];
  return iu.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Bt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: Ui(4, 13),
  y: Ui(5, 14)
};
Bt.translateX = Bt.x;
Bt.translateY = Bt.y;
const St = /* @__PURE__ */ new Set();
let pn = !1, mn = !1;
function Br() {
  if (mn) {
    const t = Array.from(St).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = su(i);
      s.length && (n.set(i, s), i.render());
    }), t.forEach((i) => i.measureInitialState()), e.forEach((i) => {
      i.render();
      const s = n.get(i);
      s && s.forEach(([o, r]) => {
        var a;
        (a = i.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), t.forEach((i) => i.measureEndState()), t.forEach((i) => {
      i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY);
    });
  }
  mn = !1, pn = !1, St.forEach((t) => t.complete()), St.clear();
}
function Nr() {
  St.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (mn = !0);
  });
}
function ru() {
  Nr(), Br();
}
class Jn {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (St.add(this), pn || (pn = !0, O.read(Nr), O.resolveKeyframes(Br))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = s?.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (i && n) {
            const l = i.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), s && r === void 0 && s.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), St.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, St.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ur = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), ou = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function au(t) {
  const e = ou.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const lu = 4;
function $r(t, e, n = 1) {
  pt(n <= lu, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [i, s] = au(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return Ur(r) ? parseFloat(r) : r;
  }
  return On(s) ? $r(s, e, n + 1) : s;
}
const Wr = (t) => (e) => e.test(t), uu = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Kr = [$t, S, rt, dt, Xa, qa, uu], $i = (t) => Kr.find(Wr(t));
class Gr extends Jn {
  constructor(e, n, i, s, o) {
    super(e, n, i, s, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: i } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), On(u))) {
        const c = $r(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !br.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = $i(s), a = $i(o);
    if (r !== a)
      if (Bi(r) && Bi(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, i = [];
    for (let s = 0; s < e.length; s++)
      Il(e[s]) && i.push(s);
    i.length && eu(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Bt[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && e.getValue(i, s).jump(s, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: i, unresolvedKeyframes: s } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(i);
    o && o.jump(this.measuredOrigin, !1);
    const r = s.length - 1, a = s[r];
    s[r] = Bt[i](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Wi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(gt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function cu(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function fu(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Wi(s, e), a = Wi(o, e);
  return Nt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : cu(t) || (n === "spring" || Un(n)) && i;
}
const hu = (t) => t !== null;
function Ie(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(hu), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const du = 40;
class Yr {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ot.now(), this.options = {
      autoplay: e,
      delay: n,
      type: i,
      repeat: s,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > du ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ru(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = ot.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !fu(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(Ie(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const L = (t, e, n) => t + (e - t) * n;
function Xe(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function pu({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = Xe(l, a, t + 1 / 3), o = Xe(l, a, t), r = Xe(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function Ce(t, e) {
  return (n) => n > 0 ? e : t;
}
const Ze = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, mu = [hn, Pt, Ot], gu = (t) => mu.find((e) => e.test(t));
function Ki(t) {
  const e = gu(t);
  if (Nt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Ot && (n = pu(n)), n;
}
const Gi = (t, e) => {
  const n = Ki(t), i = Ki(e);
  if (!n || !i)
    return Ce(t, e);
  const s = { ...n };
  return (o) => (s.red = Ze(n.red, i.red, o), s.green = Ze(n.green, i.green, o), s.blue = Ze(n.blue, i.blue, o), s.alpha = L(n.alpha, i.alpha, o), Pt.transform(s));
}, yu = (t, e) => (n) => e(t(n)), ae = (...t) => t.reduce(yu), gn = /* @__PURE__ */ new Set(["none", "hidden"]);
function vu(t, e) {
  return gn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function xu(t, e) {
  return (n) => L(t, e, n);
}
function Qn(t) {
  return typeof t == "number" ? xu : typeof t == "string" ? On(t) ? Ce : K.test(t) ? Gi : Pu : Array.isArray(t) ? zr : typeof t == "object" ? K.test(t) ? Gi : Tu : Ce;
}
function zr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => Qn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function Tu(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Qn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function bu(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const Pu = (t, e) => {
  const n = gt.createTransformer(e), i = ie(t), s = ie(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? gn.has(t) && !s.values.length || gn.has(e) && !i.values.length ? vu(t, e) : ae(zr(bu(i, s), s.values), n) : (Nt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ce(t, e));
};
function Hr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? L(t, e, n) : Qn(t)(t, e);
}
const Su = 5;
function qr(t, e, n) {
  const i = Math.max(e - Su, 0);
  return Pr(n - t(i), e - i);
}
const k = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Je = 1e-3;
function wu({ duration: t = k.duration, bounce: e = k.bounce, velocity: n = k.velocity, mass: i = k.mass }) {
  let s, o;
  Nt(t <= /* @__PURE__ */ st(k.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = ut(k.minDamping, k.maxDamping, r), t = ut(k.minDuration, k.maxDuration, /* @__PURE__ */ lt(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, d = c - n, p = yn(u, r), g = Math.exp(-h);
    return Je - d / p * g;
  }, o = (u) => {
    const h = u * r * t, d = h * n + n, p = Math.pow(r, 2) * Math.pow(u, 2) * t, g = Math.exp(-h), y = yn(Math.pow(u, 2), r);
    return (-s(u) + Je > 0 ? -1 : 1) * ((d - p) * g) / y;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Je + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Eu(s, o, a);
  if (t = /* @__PURE__ */ st(t), isNaN(l))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * i;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(i * u),
      duration: t
    };
  }
}
const Au = 12;
function Eu(t, e, n) {
  let i = n;
  for (let s = 1; s < Au; s++)
    i = i - t(i) / e(i);
  return i;
}
function yn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Cu = ["duration", "bounce"], Ru = ["stiffness", "damping", "mass"];
function Yi(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Du(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Yi(t, Ru) && Yi(t, Cu))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * ut(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: k.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = wu(t);
      e = {
        ...e,
        ...n,
        mass: k.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Xr(t = k.visualDuration, e = k.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: p } = Du({
    ...n,
    velocity: -/* @__PURE__ */ lt(n.velocity || 0)
  }), g = d || 0, y = u / (2 * Math.sqrt(l * c)), T = r - o, v = /* @__PURE__ */ lt(Math.sqrt(l / c)), P = Math.abs(T) < 5;
  i || (i = P ? k.restSpeed.granular : k.restSpeed.default), s || (s = P ? k.restDelta.granular : k.restDelta.default);
  let b;
  if (y < 1) {
    const w = yn(v, y);
    b = (M) => {
      const N = Math.exp(-y * v * M);
      return r - N * ((g + y * v * T) / w * Math.sin(w * M) + T * Math.cos(w * M));
    };
  } else if (y === 1)
    b = (w) => r - Math.exp(-v * w) * (T + (g + v * T) * w);
  else {
    const w = v * Math.sqrt(y * y - 1);
    b = (M) => {
      const N = Math.exp(-y * v * M), E = Math.min(w * M, 300);
      return r - N * ((g + y * v * T) * Math.sinh(E) + w * T * Math.cosh(E)) / w;
    };
  }
  const D = {
    calculatedDuration: p && h || null,
    next: (w) => {
      const M = b(w);
      if (p)
        a.done = w >= h;
      else {
        let N = 0;
        y < 1 && (N = w === 0 ? /* @__PURE__ */ st(g) : qr(b, w, M));
        const E = Math.abs(N) <= i, W = Math.abs(r - M) <= s;
        a.done = E && W;
      }
      return a.value = a.done ? r : M, a;
    },
    toString: () => {
      const w = Math.min(pr(D), un), M = mr((N) => D.next(w * N).value, w, 30);
      return w + "ms " + M;
    }
  };
  return D;
}
function zi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (E) => a !== void 0 && E < a || l !== void 0 && E > l, g = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * e;
  const T = h + y, v = r === void 0 ? T : r(T);
  v !== T && (y = v - h);
  const P = (E) => -y * Math.exp(-E / i), b = (E) => v + P(E), D = (E) => {
    const W = P(E), Y = b(E);
    d.done = Math.abs(W) <= u, d.value = d.done ? v : Y;
  };
  let w, M;
  const N = (E) => {
    p(d.value) && (w = E, M = Xr({
      keyframes: [d.value, g(d.value)],
      velocity: qr(b, E, d.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return N(0), {
    calculatedDuration: null,
    next: (E) => {
      let W = !1;
      return !M && w === void 0 && (W = !0, D(E), N(E)), w !== void 0 && E >= w ? M.next(E - w) : (!W && D(E), d);
    }
  };
}
const Vu = /* @__PURE__ */ oe(0.42, 0, 1, 1), Mu = /* @__PURE__ */ oe(0, 0, 0.58, 1), Zr = /* @__PURE__ */ oe(0.42, 0, 0.58, 1), _u = (t) => Array.isArray(t) && typeof t[0] != "number", Hi = {
  linear: X,
  easeIn: Vu,
  easeInOut: Zr,
  easeOut: Mu,
  circIn: Hn,
  circInOut: Mr,
  circOut: Vr,
  backIn: zn,
  backInOut: Rr,
  backOut: Cr,
  anticipate: Dr
}, qi = (t) => {
  if ($n(t)) {
    pt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, i, s] = t;
    return oe(e, n, i, s);
  } else if (typeof t == "string")
    return pt(Hi[t] !== void 0, `Invalid easing type '${t}'`), Hi[t];
  return t;
};
function Ou(t, e, n) {
  const i = [], s = n || Hr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || X : e;
      a = ae(l, a);
    }
    i.push(a);
  }
  return i;
}
function ku(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (pt(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Ou(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ Ft(t[h], t[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(ut(t[0], t[o - 1], c)) : u;
}
function Lu(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ Ft(0, e, i);
    t.push(L(n, 1, s));
  }
}
function ju(t) {
  const e = [0];
  return Lu(e, t.length - 1), e;
}
function Fu(t, e) {
  return t.map((n) => n * e);
}
function Iu(t, e) {
  return t.map(() => e || Zr).splice(0, t.length - 1);
}
function Re({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = _u(i) ? i.map(qi) : qi(i), o = {
    done: !1,
    value: e[0]
  }, r = Fu(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : ju(e),
    t
  ), a = ku(r, e, {
    ease: Array.isArray(s) ? s : Iu(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Bu = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => O.update(e, !0),
    stop: () => mt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => $.isProcessing ? $.timestamp : ot.now()
  };
};
var Nu = {};
const Uu = {
  decay: zi,
  inertia: zi,
  tween: Re,
  keyframes: Re,
  spring: Xr
}, $u = (t) => t / 100;
class ti extends Yr {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options, r = s?.KeyframeResolver || Jn, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, i, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = Un(n) ? n : Uu[n] || Re;
    let l, u;
    a !== Re && typeof e[0] != "number" && (Nu.NODE_ENV !== "production" && pt(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), l = ae($u, Hr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = pr(c));
    const { calculatedDuration: h } = c, d = h + s, p = d * (i + 1) - s;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: i } = this;
    if (!i) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = i;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: p, repeatType: g, repeatDelay: y, onUpdate: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const v = this.currentTime - d * (this.speed >= 0 ? 1 : -1), P = this.speed >= 0 ? v < 0 : v > c;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let b = this.currentTime, D = o;
    if (p) {
      const E = Math.min(this.currentTime, c) / h;
      let W = Math.floor(E), Y = E % 1;
      !Y && E >= 1 && (Y = 1), Y === 1 && W--, W = Math.min(W, p + 1), !!(W % 2) && (g === "reverse" ? (Y = 1 - Y, y && (Y -= y / h)) : g === "mirror" && (D = r)), b = ut(0, 1, Y) * h;
    }
    const w = P ? { done: !1, value: l[0] } : D.next(b);
    a && (w.value = a(w.value));
    let { done: M } = w;
    !P && u !== null && (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return N && s !== void 0 && (w.value = Ie(l, this.options, s)), T && T(w.value), N && this.finish(), w;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ lt(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ lt(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ st(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ lt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Bu, onPlay: n, startTime: i } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const s = this.driver.now();
    this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = i ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const Wu = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Ku(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = yr(a, s);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: i,
    duration: s,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Gu = /* @__PURE__ */ En(() => Object.hasOwnProperty.call(Element.prototype, "animate")), De = 10, Yu = 2e4;
function zu(t) {
  return Un(t.type) || t.type === "spring" || !gr(t.ease);
}
function Hu(t, e) {
  const n = new ti({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let o = 0;
  for (; !i.done && o < Yu; )
    i = n.sample(o), s.push(i.value), o += De;
  return {
    times: void 0,
    keyframes: s,
    duration: o - De,
    ease: "linear"
  };
}
const Jr = {
  anticipate: Dr,
  backInOut: Rr,
  circInOut: Mr
};
function qu(t) {
  return t in Jr;
}
class Xi extends Yr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new Gr(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Ee() && qu(o) && (o = Jr[o]), zu(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: p, element: g, ...y } = this.options, T = Hu(e, y);
      e = T.keyframes, e.length === 1 && (e[1] = e[0]), i = T.duration, s = T.times, o = T.ease, r = "keyframes";
    }
    const c = Ku(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Oi(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(Ie(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: i,
      times: s,
      type: r,
      ease: o,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return /* @__PURE__ */ lt(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ lt(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.currentTime = /* @__PURE__ */ st(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return X;
      const { animation: i } = n;
      Oi(i, e);
    }
    return X;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: i, duration: s, type: o, ease: r, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: h, element: d, ...p } = this.options, g = new ti({
        ...p,
        keyframes: i,
        duration: s,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ st(this.time);
      u.setWithVelocity(g.sample(y - De).value, g.sample(y).value, De);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: i, repeatDelay: s, repeatType: o, damping: r, type: a } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return Gu() && i && Wu.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Xu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Zu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ju = {
  type: "keyframes",
  duration: 0.8
}, Qu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tc = (t, { keyframes: e }) => e.length > 2 ? Ju : At.has(t) ? t.startsWith("scale") ? Zu(e[1]) : Xu : Qu;
function ec({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const ei = (t, e, n, i = {}, s, o) => (r) => {
  const a = Nn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ st(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : s
  };
  ec(a) || (c = {
    ...c,
    ...tc(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ st(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ st(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const d = Ie(c.keyframes, a);
    if (d !== void 0)
      return O.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new vl([]);
  }
  return !o && Xi.supports(c) ? new Xi(c) : new ti(c);
};
function nc({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Qr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const u = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const d = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), p = l[h];
    if (p === void 0 || c && nc(c, h))
      continue;
    const g = {
      delay: n,
      ...Nn(r || {}, h)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const v = Sr(t);
      if (v) {
        const P = window.MotionHandoffAnimation(v, h, O);
        P !== null && (g.startTime = P, y = !0);
      }
    }
    fn(t, h), d.start(ei(h, d, p, t.shouldReduceMotion && br.has(h) ? { type: !1 } : g, t, y));
    const T = d.animation;
    T && u.push(T);
  }
  return a && Promise.all(u).then(() => {
    O.update(() => {
      a && Ol(t, a);
    });
  }), u;
}
function vn(t, e, n = {}) {
  var i;
  const s = Fe(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(Qr(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: d } = o;
    return ic(t, e, c + u, h, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function ic(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
  return Array.from(t.variantChildren).sort(sc).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(vn(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function sc(t, e) {
  return t.sortNodePosition(e);
}
function rc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => vn(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = vn(t, e, n);
  else {
    const s = typeof e == "function" ? Fe(t, e, n.custom) : e;
    i = Promise.all(Qr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const oc = Rn.length;
function to(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? to(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < oc; n++) {
    const i = Rn[n], s = t.props[i];
    (te(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const ac = [...Cn].reverse(), lc = Cn.length;
function uc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => rc(t, n, i)));
}
function cc(t) {
  let e = uc(t), n = Zi(), i = !0;
  const s = (l) => (u, c) => {
    var h;
    const d = Fe(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: g, ...y } = d;
      u = { ...u, ...y, ...g };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = to(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let T = 0; T < lc; T++) {
      const v = ac[T], P = n[v], b = u[v] !== void 0 ? u[v] : c[v], D = te(b), w = v === l ? P.isActive : null;
      w === !1 && (g = T);
      let M = b === c[v] && b !== u[v] && D;
      if (M && i && t.manuallyAnimateOnMount && (M = !1), P.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !P.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !b && !P.prevProp || // Or if the prop doesn't define an animation
      Le(b) || typeof b == "boolean")
        continue;
      const N = fc(P.prevProp, b);
      let E = N || // If we're making this variant active, we want to always make it active
      v === l && P.isActive && !M && D || // If we removed a higher-priority variant (i is in reverse order)
      T > g && D, W = !1;
      const Y = Array.isArray(b) ? b : [b];
      let ct = Y.reduce(s(v), {});
      w === !1 && (ct = {});
      const { prevResolvedValues: ue = {} } = P, ce = {
        ...ue,
        ...ct
      }, nt = (U) => {
        E = !0, d.has(U) && (W = !0, d.delete(U)), P.needsAnimating[U] = !0;
        const J = t.getValue(U);
        J && (J.liveStyle = !1);
      };
      for (const U in ce) {
        const J = ct[U], Ct = ue[U];
        if (p.hasOwnProperty(U))
          continue;
        let Rt = !1;
        ln(J) && ln(Ct) ? Rt = !dr(J, Ct) : Rt = J !== Ct, Rt ? J != null ? nt(U) : d.add(U) : J !== void 0 && d.has(U) ? nt(U) : P.protectedKeys[U] = !0;
      }
      P.prevProp = b, P.prevResolvedValues = ct, P.isActive && (p = { ...p, ...ct }), i && t.blockInitialAnimation && (E = !1), E && (!(M && N) || W) && h.push(...Y.map((U) => ({
        animation: U,
        options: { type: v }
      })));
    }
    if (d.size) {
      const T = {};
      d.forEach((v) => {
        const P = t.getBaseTarget(v), b = t.getValue(v);
        b && (b.liveStyle = !0), T[v] = P ?? null;
      }), h.push({ animation: T });
    }
    let y = !!h.length;
    return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1), i = !1, y ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(l, u);
    }), n[l].isActive = u;
    const h = r(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Zi(), i = !0;
    }
  };
}
function fc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !dr(e, t) : !1;
}
function xt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Zi() {
  return {
    animate: xt(!0),
    whileInView: xt(),
    whileHover: xt(),
    whileTap: xt(),
    whileDrag: xt(),
    whileFocus: xt(),
    exit: xt()
  };
}
class yt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class hc extends yt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = cc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Le(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let dc = 0;
class pc extends yt {
  constructor() {
    super(...arguments), this.id = dc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const mc = {
  animation: {
    Feature: hc
  },
  exit: {
    Feature: pc
  }
};
function se(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function le(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const gc = (t) => (e) => Wn(e) && t(e, le(e));
function Zt(t, e, n, i) {
  return se(t, e, gc(n), i);
}
const Ji = (t, e) => Math.abs(t - e);
function yc(t, e) {
  const n = Ji(t.x, e.x), i = Ji(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class eo {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = tn(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = yc(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: g } = h, { timestamp: y } = $;
      this.history.push({ ...g, timestamp: y });
      const { onStart: T, onMove: v } = this.handlers;
      d || (T && T(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Qe(d, this.transformPagePoint), O.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = tn(h.type === "pointercancel" ? this.lastMoveEventInfo : Qe(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, T), g && g(h, T);
    }, !Wn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = le(e), a = Qe(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = $;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, tn(a, this.history)), this.removeListeners = ae(Zt(this.contextWindow, "pointermove", this.handlePointerMove), Zt(this.contextWindow, "pointerup", this.handlePointerUp), Zt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), mt(this.updatePoint);
  }
}
function Qe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Qi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function tn({ point: t }, e) {
  return {
    point: t,
    delta: Qi(t, no(e)),
    offset: Qi(t, vc(e)),
    velocity: xc(e, 0.1)
  };
}
function vc(t) {
  return t[0];
}
function no(t) {
  return t[t.length - 1];
}
function xc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = no(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ st(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ lt(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
const io = 1e-4, Tc = 1 - io, bc = 1 + io, so = 0.01, Pc = 0 - so, Sc = 0 + so;
function Z(t) {
  return t.max - t.min;
}
function wc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function ts(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = L(e.min, e.max, t.origin), t.scale = Z(n) / Z(e), t.translate = L(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Tc && t.scale <= bc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Pc && t.translate <= Sc || isNaN(t.translate)) && (t.translate = 0);
}
function Jt(t, e, n, i) {
  ts(t.x, e.x, n.x, i ? i.originX : void 0), ts(t.y, e.y, n.y, i ? i.originY : void 0);
}
function es(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Z(e);
}
function Ac(t, e, n) {
  es(t.x, e.x, n.x), es(t.y, e.y, n.y);
}
function ns(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Z(e);
}
function Qt(t, e, n) {
  ns(t.x, e.x, n.x), ns(t.y, e.y, n.y);
}
function Ec(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? L(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? L(n, t, i.max) : Math.min(t, n)), t;
}
function is(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Cc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: is(t.x, n, s),
    y: is(t.y, e, i)
  };
}
function ss(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Rc(t, e) {
  return {
    x: ss(t.x, e.x),
    y: ss(t.y, e.y)
  };
}
function Dc(t, e) {
  let n = 0.5;
  const i = Z(t), s = Z(e);
  return s > i ? n = /* @__PURE__ */ Ft(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ Ft(t.min, t.max - s, e.min)), ut(0, 1, n);
}
function Vc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const xn = 0.35;
function Mc(t = xn) {
  return t === !1 ? t = 0 : t === !0 && (t = xn), {
    x: rs(t, "left", "right"),
    y: rs(t, "top", "bottom")
  };
}
function rs(t, e, n) {
  return {
    min: os(t, e),
    max: os(t, n)
  };
}
function os(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const as = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), kt = () => ({
  x: as(),
  y: as()
}), ls = () => ({ min: 0, max: 0 }), I = () => ({
  x: ls(),
  y: ls()
});
function et(t) {
  return [t("x"), t("y")];
}
function ro({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function _c({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Oc(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), i = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function en(t) {
  return t === void 0 || t === 1;
}
function Tn({ scale: t, scaleX: e, scaleY: n }) {
  return !en(t) || !en(e) || !en(n);
}
function Tt(t) {
  return Tn(t) || oo(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function oo(t) {
  return us(t.x) || us(t.y);
}
function us(t) {
  return t && t !== "0%";
}
function Ve(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function cs(t, e, n, i, s) {
  return s !== void 0 && (t = Ve(t, s, i)), Ve(t, n, i) + e;
}
function bn(t, e = 0, n = 1, i, s) {
  t.min = cs(t.min, e, n, i, s), t.max = cs(t.max, e, n, i, s);
}
function ao(t, { x: e, y: n }) {
  bn(t.x, e.translate, e.scale, e.originPoint), bn(t.y, n.translate, n.scale, n.originPoint);
}
const fs = 0.999999999999, hs = 1.0000000000001;
function kc(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && jt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, ao(t, r)), i && Tt(o.latestValues) && jt(t, o.latestValues));
  }
  e.x < hs && e.x > fs && (e.x = 1), e.y < hs && e.y > fs && (e.y = 1);
}
function Lt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ds(t, e, n, i, s = 0.5) {
  const o = L(t.min, t.max, s);
  bn(t, e, n, o, i);
}
function jt(t, e) {
  ds(t.x, e.x, e.scaleX, e.scale, e.originX), ds(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function lo(t, e) {
  return ro(Oc(t.getBoundingClientRect(), e));
}
function Lc(t, e, n) {
  const i = lo(t, n), { scroll: s } = e;
  return s && (Lt(i.x, s.offset.x), Lt(i.y, s.offset.y)), i;
}
const uo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, jc = /* @__PURE__ */ new WeakMap();
class Fc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = I(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(le(c).point);
    }, o = (c, h) => {
      const { drag: d, dragPropagation: p, onDragStart: g } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Cl(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((T) => {
        let v = this.getAxisMotionValue(T).get() || 0;
        if (rt.test(v)) {
          const { projection: P } = this.visualElement;
          if (P && P.layout) {
            const b = P.layout.layoutBox[T];
            b && (v = Z(b) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[T] = v;
      }), g && O.postRender(() => g(c, h)), fn(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: T } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = Ic(T), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, T), this.updateAxis("y", h.point, T), this.visualElement.render(), y && y(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => et((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new eo(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: uo(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && O.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: i } = this.getProps();
    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, i) {
    const { drag: s } = this.getProps();
    if (!i || !ve(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = Ec(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && _t(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Cc(s.layoutBox, n) : this.constraints = !1, this.elastic = Mc(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && et((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Vc(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !_t(e))
      return !1;
    const i = e.current;
    pt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = Lc(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Rc(s.layout.layoutBox, o);
    if (n) {
      const a = n(_c(r));
      this.hasMutatedConstraints = !!a, a && (r = ro(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!ve(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const d = s ? 200 : 1e6, p = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: i ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const i = this.getAxisMotionValue(e);
    return fn(this.visualElement, e), i.start(ei(e, i, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    et((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    et((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, i = this.visualElement.getProps(), s = i[n];
    return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    et((n) => {
      const { drag: i } = this.getProps();
      if (!ve(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: i } = this.visualElement;
    if (!_t(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Dc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), et((r) => {
      if (!ve(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(L(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    jc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Zt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      _t(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), O.read(i);
    const r = se(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (et((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = xn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function ve(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Ic(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Bc extends yt {
  constructor(e) {
    super(e), this.removeGroupControls = X, this.removeListeners = X, this.controls = new Fc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ps = (t) => (e, n) => {
  t && O.postRender(() => t(e, n));
};
class Nc extends yt {
  constructor() {
    super(...arguments), this.removePointerDownListener = X;
  }
  onPointerDown(e) {
    this.session = new eo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: ps(e),
      onStart: ps(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && O.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Se = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function ms(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Yt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (S.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = ms(t, e.target.x), i = ms(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Uc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = gt.parse(t);
    if (s.length > 5)
      return i;
    const o = gt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = L(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
class $c extends ea {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    ol(Wc), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Se.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, r = i.projection;
    return r && (r.isPresent = o, s || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || O.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Vn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i } = this.props, { projection: s } = e;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function co(t) {
  const [e, n] = va(), i = H(zs);
  return j.jsx($c, { ...t, layoutGroup: i, switchLayoutGroup: H(tr), isPresent: e, safeToRemove: n });
}
const Wc = {
  borderRadius: {
    ...Yt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Yt,
  borderTopRightRadius: Yt,
  borderBottomLeftRadius: Yt,
  borderBottomRightRadius: Yt,
  boxShadow: Uc
};
function Kc(t, e, n) {
  const i = G(t) ? t : ne(t);
  return i.start(ei("", i, e, n)), i.animation;
}
function Gc(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Yc = (t, e) => t.depth - e.depth;
class zc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Kn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Gn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Yc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Hc(t, e) {
  const n = ot.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (mt(i), t(o - e));
  };
  return O.read(i, !0), () => mt(i);
}
const fo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], qc = fo.length, gs = (t) => typeof t == "string" ? parseFloat(t) : t, ys = (t) => typeof t == "number" || S.test(t);
function Xc(t, e, n, i, s, o) {
  s ? (t.opacity = L(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Zc(i)
  ), t.opacityExit = L(e.opacity !== void 0 ? e.opacity : 1, 0, Jc(i))) : o && (t.opacity = L(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < qc; r++) {
    const a = `border${fo[r]}Radius`;
    let l = vs(e, a), u = vs(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ys(l) === ys(u) ? (t[a] = Math.max(L(gs(l), gs(u), i), 0), (rt.test(u) || rt.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, i));
}
function vs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Zc = /* @__PURE__ */ ho(0, 0.5, Vr), Jc = /* @__PURE__ */ ho(0.5, 0.95, X);
function ho(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ Ft(t, e, i));
}
function xs(t, e) {
  t.min = e.min, t.max = e.max;
}
function tt(t, e) {
  xs(t.x, e.x), xs(t.y, e.y);
}
function Ts(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function bs(t, e, n, i, s) {
  return t -= e, t = Ve(t, 1 / n, i), s !== void 0 && (t = Ve(t, 1 / s, i)), t;
}
function Qc(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (rt.test(e) && (e = parseFloat(e), e = L(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = L(o.min, o.max, i);
  t === o && (a -= e), t.min = bs(t.min, e, n, a, s), t.max = bs(t.max, e, n, a, s);
}
function Ps(t, e, [n, i, s], o, r) {
  Qc(t, e[n], e[i], e[s], e.scale, o, r);
}
const tf = ["x", "scaleX", "originX"], ef = ["y", "scaleY", "originY"];
function Ss(t, e, n, i) {
  Ps(t.x, e, tf, n ? n.x : void 0, i ? i.x : void 0), Ps(t.y, e, ef, n ? n.y : void 0, i ? i.y : void 0);
}
function ws(t) {
  return t.translate === 0 && t.scale === 1;
}
function po(t) {
  return ws(t.x) && ws(t.y);
}
function As(t, e) {
  return t.min === e.min && t.max === e.max;
}
function nf(t, e) {
  return As(t.x, e.x) && As(t.y, e.y);
}
function Es(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function mo(t, e) {
  return Es(t.x, e.x) && Es(t.y, e.y);
}
function Cs(t) {
  return Z(t.x) / Z(t.y);
}
function Rs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class sf {
  constructor() {
    this.members = [];
  }
  add(e) {
    Kn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Gn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((s) => e === s);
    if (n === 0)
      return !1;
    let i;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        i = o;
        break;
      }
    }
    return i ? (this.promote(i), !0) : !1;
  }
  promote(e, n) {
    const i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: i } = e;
      n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rf(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: p, skewY: g } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), p && (i += `skewX(${p}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const bt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, qt = typeof window < "u" && window.MotionDebug !== void 0, nn = ["", "X", "Y", "Z"], of = { visibility: "hidden" }, Ds = 1e3;
let af = 0;
function sn(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function go(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Sr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", O, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && go(i);
}
function yo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = af++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, qt && (bt.totalNodes = bt.resolvedTargetDeltas = bt.recalculatedProjection = 0), this.nodes.forEach(cf), this.nodes.forEach(mf), this.nodes.forEach(gf), this.nodes.forEach(ff), qt && window.MotionDebug.record(bt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zc());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Yn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Gc(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Hc(d, 250), Se.hasAnimatedSinceResize && (Se.hasAnimatedSinceResize = !1, this.nodes.forEach(Ms));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || bf, { onLayoutAnimationStart: T, onLayoutAnimationComplete: v } = c.getProps(), P = !this.targetLayout || !mo(this.targetLayout, g) || p, b = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || d && (P || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, b);
          const D = {
            ...Nn(y, "layout"),
            onPlay: T,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (D.delay = 0, D.type = !1), this.startAnimation(D);
        } else
          d || Ms(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, mt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(yf), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && go(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vs);
        return;
      }
      this.isUpdating || this.nodes.forEach(df), this.isUpdating = !1, this.nodes.forEach(pf), this.nodes.forEach(lf), this.nodes.forEach(uf), this.clearAllSnapshots();
      const a = ot.now();
      $.delta = ut(0, 1e3 / 60, a - $.timestamp), $.timestamp = a, $.isProcessing = !0, ze.update.process($), ze.preRender.process($), ze.render.process($), $.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Vn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(hf), this.sharedNodes.forEach(vf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, O.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      O.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = I(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const l = i(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !po(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || Tt(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Pf(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return I();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(Sf))) {
        const { scroll: c } = this.root;
        c && (Lt(l.x, c.offset.x), Lt(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = I();
      if (tt(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: d } = c;
        c !== this.root && h && d.layoutScroll && (h.wasRoot && tt(l, r), Lt(l.x, h.offset.x), Lt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = I();
      tt(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && jt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Tt(c.latestValues) && jt(l, c.latestValues);
      }
      return Tt(this.latestValues) && jt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = I();
      tt(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Tt(u.latestValues))
          continue;
        Tn(u.latestValues) && u.updateSnapshot();
        const c = I(), h = u.measurePageBox();
        tt(c, h), Ss(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Tt(this.latestValues) && Ss(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== $.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = $.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), Qt(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = I(), this.targetWithTransforms = I()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ac(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), ao(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), Qt(this.relativeTargetOrigin, this.target, p.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          qt && bt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Tn(this.parent.latestValues) || oo(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === $.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      kc(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = I());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ts(this.prevProjectionDelta.x, this.projectionDelta.x), Ts(this.prevProjectionDelta.y, this.projectionDelta.y)), Jt(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !Rs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Rs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), qt && bt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = kt(), this.projectionDelta = kt(), this.projectionDeltaWithTransform = kt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = kt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = I(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, T = this.getStack(), v = !T || T.members.length <= 1, P = !!(y && !v && this.options.crossfade === !0 && !this.path.some(Tf));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (D) => {
        const w = D / 1e3;
        _s(h.x, r.x, w), _s(h.y, r.y, w), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Qt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), xf(this.relativeTarget, this.relativeTargetOrigin, d, w), b && nf(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = I()), tt(b, this.relativeTarget)), y && (this.animationValues = c, Xc(c, u, this.latestValues, w, P, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = O.update(() => {
        Se.hasAnimatedSinceResize = !0, this.currentAnimation = Kc(0, Ds, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ds), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && vo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || I();
          const h = Z(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = Z(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        tt(a, l), jt(a, c), Jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new sf()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && sn("z", r, u, this.animationValues);
      for (let c = 0; c < nn.length; c++)
        sn(`rotate${nn[c]}`, r, u, this.animationValues), sn(`skew${nn[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return of;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = be(r?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = be(r?.pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = rf(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in Ae) {
        if (d[y] === void 0)
          continue;
        const { correct: T, applyTo: v } = Ae[y], P = u.transform === "none" ? d[y] : T(d[y], h);
        if (v) {
          const b = v.length;
          for (let D = 0; D < b; D++)
            u[v[D]] = P;
        } else
          u[y] = P;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? be(r?.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Vs), this.root.sharedNodes.clear();
    }
  };
}
function lf(t) {
  t.updateLayout();
}
function uf(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(d);
      d.min = i[h].min, d.max = d.min + p;
    }) : vo(o, n.layoutBox, i) && et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(i[h]);
      d.max = d.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + p);
    });
    const a = kt();
    Jt(a, i, n.layoutBox);
    const l = kt();
    r ? Jt(l, t.applyTransform(s, !0), n.measuredBox) : Jt(l, i, n.layoutBox);
    const u = !po(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const g = I();
          Qt(g, n.layoutBox, d.layoutBox);
          const y = I();
          Qt(y, i, p.layoutBox), mo(g, y) || (c = !0), h.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = g, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function cf(t) {
  qt && bt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ff(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function hf(t) {
  t.clearSnapshot();
}
function Vs(t) {
  t.clearMeasurements();
}
function df(t) {
  t.isLayoutDirty = !1;
}
function pf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ms(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function mf(t) {
  t.resolveTargetDelta();
}
function gf(t) {
  t.calcProjection();
}
function yf(t) {
  t.resetSkewAndRotation();
}
function vf(t) {
  t.removeLeadSnapshot();
}
function _s(t, e, n) {
  t.translate = L(e.translate, 0, n), t.scale = L(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Os(t, e, n, i) {
  t.min = L(e.min, n.min, i), t.max = L(e.max, n.max, i);
}
function xf(t, e, n, i) {
  Os(t.x, e.x, n.x, i), Os(t.y, e.y, n.y, i);
}
function Tf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const bf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ks = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ls = ks("applewebkit/") && !ks("chrome/") ? Math.round : X;
function js(t) {
  t.min = Ls(t.min), t.max = Ls(t.max);
}
function Pf(t) {
  js(t.x), js(t.y);
}
function vo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !wc(Cs(e), Cs(n), 0.2);
}
function Sf(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const wf = yo({
  attachResizeListener: (t, e) => se(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), rn = {
  current: void 0
}, xo = yo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!rn.current) {
      const t = new wf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), rn.current = t;
    }
    return rn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Af = {
  pan: {
    Feature: Nc
  },
  drag: {
    Feature: Bc,
    ProjectionNode: xo,
    MeasureLayout: co
  }
};
function Fs(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && O.postRender(() => o(e, le(e)));
}
class Ef extends yt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Pl(e, (n) => (Fs(this.node, n, "Start"), (i) => Fs(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Cf extends yt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ae(se(this.node.current, "focus", () => this.onFocus()), se(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Is(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && O.postRender(() => o(e, le(e)));
}
class Rf extends yt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = El(e, (n) => (Is(this.node, n, "Start"), (i, { success: s }) => Is(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Pn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Df = (t) => {
  const e = Pn.get(t.target);
  e && e(t);
}, Vf = (t) => {
  t.forEach(Df);
};
function Mf({ root: t, ...e }) {
  const n = t || document;
  on.has(n) || on.set(n, {});
  const i = on.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(Vf, { root: t, ...e })), i[s];
}
function _f(t, e, n) {
  const i = Mf(e);
  return Pn.set(t, n), i.observe(t), () => {
    Pn.delete(t), i.unobserve(t);
  };
}
const Of = {
  some: 0,
  all: 1
};
class kf extends yt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Of[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return _f(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Lf(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Lf({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const jf = {
  inView: {
    Feature: kf
  },
  tap: {
    Feature: Rf
  },
  focus: {
    Feature: Cf
  },
  hover: {
    Feature: Ef
  }
}, Ff = {
  layout: {
    ProjectionNode: xo,
    MeasureLayout: co
  }
}, Sn = { current: null }, To = { current: !1 };
function If() {
  if (To.current = !0, !!An)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Sn.current = t.matches;
      t.addListener(e), e();
    } else
      Sn.current = !1;
}
const Bf = [...Kr, K, gt], Nf = (t) => Bf.find(Wr(t)), Bs = /* @__PURE__ */ new WeakMap();
var Uf = {};
function $f(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (G(s))
      t.addValue(i, s), Uf.NODE_ENV === "development" && Oe(s.version === "11.18.2", `Attempting to mix Motion versions ${s.version} with 11.18.2 may not work as expected.`);
    else if (G(o))
      t.addValue(i, ne(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, ne(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
var Wf = {};
const Ns = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Kf {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, i) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Jn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = ot.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, O.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = je(n), this.isVariantNode = Js(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in d) {
      const g = d[p];
      l[p] !== void 0 && G(g) && g.set(l[p], !1);
    }
  }
  mount(e) {
    this.current = e, Bs.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), To.current || If(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Sn.current, Wf.NODE_ENV !== "production" && Oe(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Bs.delete(this.current), this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const i = At.has(e), s = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && O.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      s(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in It) {
      const n = It[e];
      if (!n)
        continue;
      const { isEnabled: i, Feature: s } = n;
      if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : I();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let i = 0; i < Ns.length; i++) {
      const s = Ns[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = $f(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const i = this.values.get(e);
    n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let i = this.values.get(e);
    return i === void 0 && n !== void 0 && (i = ne(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Ur(s) || _r(s)) ? s = parseFloat(s) : !Nf(s) && gt.test(n) && (s = Ir(e, n)), this.setBaseTarget(e, G(s) ? s.get() : s)), G(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: i } = this.props;
    let s;
    if (typeof i == "string" || typeof i == "object") {
      const r = _n(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (s = r[e]);
    }
    if (i && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !G(o) ? o : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Yn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class bo extends Kf {
  constructor() {
    super(...arguments), this.KeyframeResolver = Gr;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: i }) {
    delete n[e], delete i[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    G(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Gf(t) {
  return window.getComputedStyle(t);
}
class Yf extends bo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ar;
  }
  readValueFromInstance(e, n) {
    if (At.has(n)) {
      const i = Zn(n);
      return i && i.default || 0;
    } else {
      const i = Gf(e), s = (sr(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return lo(e, n);
  }
  build(e, n, i) {
    Ln(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Bn(e, n, i);
  }
}
class zf extends bo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = I;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (At.has(n)) {
      const i = Zn(n);
      return i && i.default || 0;
    }
    return n = lr.has(n) ? n : Dn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return fr(e, n, i);
  }
  build(e, n, i) {
    jn(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    ur(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = In(e.tagName), super.mount(e);
  }
}
const Hf = (t, e) => Mn(t) ? new zf(e) : new Yf(e, {
  allowProjection: t !== Ws
}), qf = /* @__PURE__ */ ml({
  ...mc,
  ...jf,
  ...Af,
  ...Ff
}, Hf), Xf = /* @__PURE__ */ Da(qf);
function Zf({ message: t, type: e = "bot" }) {
  const n = e === "user";
  return /* @__PURE__ */ j.jsx(
    Xf.div,
    {
      className: `p-3 my-2 max-w-[80%] rounded-2xl ${n ? "bg-blue-600 text-white ml-auto" : "bg-gray-200 text-black"}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      children: t
    }
  );
}
function Jf() {
  const { state: t, dispatch: e } = Gs(), [n, i] = an(!1);
  Me(() => {
    const o = (r) => {
      const { productId: a, name: l, price: u } = r.detail || {}, c = `✅ Added ${l || "an item"} to your cart for ${u || ""}. Want to checkout?`;
      e({ type: "ADD_MESSAGE", payload: { type: "bot", text: c } }), at("chatMessage", { text: c, sender: "bot" }), at("addToCart", { productId: a, name: l, price: u }), i(!0);
    };
    return window.addEventListener("agentic:addToCart", o), () => window.removeEventListener("agentic:addToCart", o);
  }, [e]);
  const s = () => {
    const o = "Redirecting to checkout...";
    e({ type: "ADD_MESSAGE", payload: { type: "bot", text: o } }), at("chatMessage", { text: o, sender: "bot" }), at("checkout", { timestamp: Date.now() });
  };
  return /* @__PURE__ */ j.jsx("div", { className: "fixed bottom-5 right-5 z-50 agentic-chat-widget", children: n ? /* @__PURE__ */ j.jsxs("div", { className: "bg-white rounded-2xl shadow-xl w-80 h-96 flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ j.jsxs("div", { className: "agentic-chat-header flex justify-between items-center", children: [
      /* @__PURE__ */ j.jsx("span", { children: "Agentic Assistant" }),
      /* @__PURE__ */ j.jsx("button", { onClick: () => i(!1), children: "✕" })
    ] }),
    /* @__PURE__ */ j.jsx("div", { className: "flex-1 overflow-y-auto p-3", children: t.messages.map((o, r) => /* @__PURE__ */ j.jsx(Zf, { message: o.text, type: o.type }, r)) }),
    /* @__PURE__ */ j.jsx("div", { className: "border-t p-2 text-center", children: /* @__PURE__ */ j.jsx(
      "button",
      {
        className: "bg-[var(--agentic-primary)] text-white px-4 py-2 rounded-lg w-full",
        onClick: s,
        children: "Proceed to Checkout"
      }
    ) })
  ] }) : /* @__PURE__ */ j.jsx(
    "button",
    {
      className: "bg-[var(--agentic-primary)] text-white p-4 rounded-full shadow-lg",
      onClick: () => i(!0),
      children: "💬"
    }
  ) });
}
function Qf(t = {}) {
  console.log("[AgenticAI SDK] Initializing with config:", t), da(t);
  const e = document.getElementById("agentic-container");
  e && e.remove();
  const n = document.createElement("div");
  n.id = "agentic-container", document.body.appendChild(n), ua.createRoot(n).render(
    /* @__PURE__ */ j.jsxs(ha, { children: [
      /* @__PURE__ */ j.jsx(ga, {}),
      /* @__PURE__ */ j.jsx(Jf, {})
    ] })
  ), console.log("[AgenticAI SDK] Chat components mounted successfully.");
}
window.AgenticAI = {
  init: Qf,
  on: ma,
  emit: at
};
console.log("[AgenticAI SDK] Global object attached:", window.AgenticAI);
export {
  at as emit,
  Qf as init,
  ma as on
};
