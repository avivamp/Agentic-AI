import Ns, { createContext as wt, useContext as z, useReducer as Ho, useState as an, useRef as ve, useId as qo, useEffect as De, useCallback as Us, useLayoutEffect as Xo, useMemo as Me, useInsertionEffect as Zo, forwardRef as Jo, Fragment as $s, createElement as Qo, Component as ta } from "react";
import ea from "react-dom";
function na(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var pe = { exports: {} }, Gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function ia() {
  if (Ti) return Gt;
  Ti = 1;
  var t = Ns, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, u) {
    var c, h = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) i.call(l, c) && !o.hasOwnProperty(c) && (h[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: p, props: h, _owner: s.current };
  }
  return Gt.Fragment = n, Gt.jsx = r, Gt.jsxs = r, Gt;
}
var Yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function sa() {
  return bi || (bi = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = Ns, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(f) {
      if (f === null || typeof f != "object")
        return null;
      var m = g && f[g] || f[y];
      return typeof m == "function" ? m : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(f) {
      {
        for (var m = arguments.length, T = new Array(m > 1 ? m - 1 : 0), A = 1; A < m; A++)
          T[A - 1] = arguments[A];
        P("error", f, T);
      }
    }
    function P(f, m, T) {
      {
        var A = v.ReactDebugCurrentFrame, D = A.getStackAddendum();
        D !== "" && (m += "%s", T = T.concat([D]));
        var O = T.map(function(R) {
          return String(R);
        });
        O.unshift("Warning: " + m), Function.prototype.apply.call(console[f], console, O);
      }
    }
    var V = !1, w = !1, M = !1, N = !1, E = !1, $;
    $ = Symbol.for("react.module.reference");
    function H(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === i || f === o || E || f === s || f === u || f === c || N || f === p || V || w || M || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === r || f.$$typeof === a || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === $ || f.getModuleId !== void 0));
    }
    function ft(f, m, T) {
      var A = f.displayName;
      if (A)
        return A;
      var D = m.displayName || m.name || "";
      return D !== "" ? T + "(" + D + ")" : T;
    }
    function Wt(f) {
      return f.displayName || "Context";
    }
    function it(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var m = f;
            return Wt(m) + ".Consumer";
          case r:
            var T = f;
            return Wt(T._context) + ".Provider";
          case l:
            return ft(f, f.render, "ForwardRef");
          case h:
            var A = f.displayName || null;
            return A !== null ? A : it(f.type) || "Memo";
          case d: {
            var D = f, O = D._payload, R = D._init;
            try {
              return it(R(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var st = Object.assign, Et = 0, Ie, U, J, Ct, Rt, ni, ii;
    function si() {
    }
    si.__reactDisabledLog = !0;
    function bo() {
      {
        if (Et === 0) {
          Ie = console.log, U = console.info, J = console.warn, Ct = console.error, Rt = console.group, ni = console.groupCollapsed, ii = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: si,
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
    function Po() {
      {
        if (Et--, Et === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, f, {
              value: Ie
            }),
            info: st({}, f, {
              value: U
            }),
            warn: st({}, f, {
              value: J
            }),
            error: st({}, f, {
              value: Ct
            }),
            group: st({}, f, {
              value: Rt
            }),
            groupCollapsed: st({}, f, {
              value: ni
            }),
            groupEnd: st({}, f, {
              value: ii
            })
          });
        }
        Et < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Be = v.ReactCurrentDispatcher, Ne;
    function ce(f, m, T) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (D) {
            var A = D.stack.trim().match(/\n( *(at )?)/);
            Ne = A && A[1] || "";
          }
        return `
` + Ne + f;
      }
    }
    var Ue = !1, fe;
    {
      var So = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new So();
    }
    function ri(f, m) {
      if (!f || Ue)
        return "";
      {
        var T = fe.get(f);
        if (T !== void 0)
          return T;
      }
      var A;
      Ue = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = Be.current, Be.current = null, bo();
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
`), Y = A.stack.split(`
`), _ = C.length - 1, B = Y.length - 1; _ >= 1 && B >= 0 && C[_] !== Y[B]; )
            B--;
          for (; _ >= 1 && B >= 0; _--, B--)
            if (C[_] !== Y[B]) {
              if (_ !== 1 || B !== 1)
                do
                  if (_--, B--, B < 0 || C[_] !== Y[B]) {
                    var Q = `
` + C[_].replace(" at new ", " at ");
                    return f.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", f.displayName)), typeof f == "function" && fe.set(f, Q), Q;
                  }
                while (_ >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, Be.current = O, Po(), Error.prepareStackTrace = D;
      }
      var Dt = f ? f.displayName || f.name : "", vt = Dt ? ce(Dt) : "";
      return typeof f == "function" && fe.set(f, vt), vt;
    }
    function wo(f, m, T) {
      return ri(f, !1);
    }
    function Ao(f) {
      var m = f.prototype;
      return !!(m && m.isReactComponent);
    }
    function he(f, m, T) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return ri(f, Ao(f));
      if (typeof f == "string")
        return ce(f);
      switch (f) {
        case u:
          return ce("Suspense");
        case c:
          return ce("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return wo(f.render);
          case h:
            return he(f.type, m, T);
          case d: {
            var A = f, D = A._payload, O = A._init;
            try {
              return he(O(D), m, T);
            } catch {
            }
          }
        }
      return "";
    }
    var Kt = Object.prototype.hasOwnProperty, oi = {}, ai = v.ReactDebugCurrentFrame;
    function de(f) {
      if (f) {
        var m = f._owner, T = he(f.type, f._source, m ? m.type : null);
        ai.setExtraStackFrame(T);
      } else
        ai.setExtraStackFrame(null);
    }
    function Eo(f, m, T, A, D) {
      {
        var O = Function.call.bind(Kt);
        for (var R in f)
          if (O(f, R)) {
            var C = void 0;
            try {
              if (typeof f[R] != "function") {
                var Y = Error((A || "React class") + ": " + T + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              C = f[R](m, R, A, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              C = _;
            }
            C && !(C instanceof Error) && (de(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", T, R, typeof C), de(null)), C instanceof Error && !(C.message in oi) && (oi[C.message] = !0, de(D), x("Failed %s type: %s", T, C.message), de(null));
          }
      }
    }
    var Co = Array.isArray;
    function $e(f) {
      return Co(f);
    }
    function Ro(f) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, T = m && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return T;
      }
    }
    function Vo(f) {
      try {
        return li(f), !1;
      } catch {
        return !0;
      }
    }
    function li(f) {
      return "" + f;
    }
    function ui(f) {
      if (Vo(f))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ro(f)), li(f);
    }
    var ci = v.ReactCurrentOwner, Do = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, hi;
    function Mo(f) {
      if (Kt.call(f, "ref")) {
        var m = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Oo(f) {
      if (Kt.call(f, "key")) {
        var m = Object.getOwnPropertyDescriptor(f, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function ko(f, m) {
      typeof f.ref == "string" && ci.current;
    }
    function Lo(f, m) {
      {
        var T = function() {
          fi || (fi = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        T.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function jo(f, m) {
      {
        var T = function() {
          hi || (hi = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        T.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var Fo = function(f, m, T, A, D, O, R) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: m,
        ref: T,
        props: R,
        // Record the component responsible for creating this element.
        _owner: O
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
        value: D
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function _o(f, m, T, A, D) {
      {
        var O, R = {}, C = null, Y = null;
        T !== void 0 && (ui(T), C = "" + T), Oo(m) && (ui(m.key), C = "" + m.key), Mo(m) && (Y = m.ref, ko(m, D));
        for (O in m)
          Kt.call(m, O) && !Do.hasOwnProperty(O) && (R[O] = m[O]);
        if (f && f.defaultProps) {
          var _ = f.defaultProps;
          for (O in _)
            R[O] === void 0 && (R[O] = _[O]);
        }
        if (C || Y) {
          var B = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          C && Lo(R, B), Y && jo(R, B);
        }
        return Fo(f, C, Y, D, A, ci.current, R);
      }
    }
    var We = v.ReactCurrentOwner, di = v.ReactDebugCurrentFrame;
    function Vt(f) {
      if (f) {
        var m = f._owner, T = he(f.type, f._source, m ? m.type : null);
        di.setExtraStackFrame(T);
      } else
        di.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Ge(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function pi() {
      {
        if (We.current) {
          var f = it(We.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Io(f) {
      return "";
    }
    var mi = {};
    function Bo(f) {
      {
        var m = pi();
        if (!m) {
          var T = typeof f == "string" ? f : f.displayName || f.name;
          T && (m = `

Check the top-level render call using <` + T + ">.");
        }
        return m;
      }
    }
    function gi(f, m) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var T = Bo(m);
        if (mi[T])
          return;
        mi[T] = !0;
        var A = "";
        f && f._owner && f._owner !== We.current && (A = " It was passed a child from " + it(f._owner.type) + "."), Vt(f), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, A), Vt(null);
      }
    }
    function yi(f, m) {
      {
        if (typeof f != "object")
          return;
        if ($e(f))
          for (var T = 0; T < f.length; T++) {
            var A = f[T];
            Ge(A) && gi(A, m);
          }
        else if (Ge(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var D = b(f);
          if (typeof D == "function" && D !== f.entries)
            for (var O = D.call(f), R; !(R = O.next()).done; )
              Ge(R.value) && gi(R.value, m);
        }
      }
    }
    function No(f) {
      {
        var m = f.type;
        if (m == null || typeof m == "string")
          return;
        var T;
        if (typeof m == "function")
          T = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          T = m.propTypes;
        else
          return;
        if (T) {
          var A = it(m);
          Eo(T, f.props, "prop", A, f);
        } else if (m.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var D = it(m);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Uo(f) {
      {
        for (var m = Object.keys(f.props), T = 0; T < m.length; T++) {
          var A = m[T];
          if (A !== "children" && A !== "key") {
            Vt(f), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Vt(null);
            break;
          }
        }
        f.ref !== null && (Vt(f), x("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    var vi = {};
    function xi(f, m, T, A, D, O) {
      {
        var R = H(f);
        if (!R) {
          var C = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = Io();
          Y ? C += Y : C += pi();
          var _;
          f === null ? _ = "null" : $e(f) ? _ = "array" : f !== void 0 && f.$$typeof === e ? (_ = "<" + (it(f.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof f, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, C);
        }
        var B = _o(f, m, T, D, O);
        if (B == null)
          return B;
        if (R) {
          var Q = m.children;
          if (Q !== void 0)
            if (A)
              if ($e(Q)) {
                for (var Dt = 0; Dt < Q.length; Dt++)
                  yi(Q[Dt], f);
                Object.freeze && Object.freeze(Q);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yi(Q, f);
        }
        if (Kt.call(m, "key")) {
          var vt = it(f), q = Object.keys(m).filter(function(zo) {
            return zo !== "key";
          }), Ye = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vi[vt + Ye]) {
            var Yo = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, vt, Yo, vt), vi[vt + Ye] = !0;
          }
        }
        return f === i ? Uo(B) : No(B), B;
      }
    }
    function $o(f, m, T) {
      return xi(f, m, T, !0);
    }
    function Wo(f, m, T) {
      return xi(f, m, T, !1);
    }
    var Ko = Wo, Go = $o;
    Yt.Fragment = i, Yt.jsx = Ko, Yt.jsxs = Go;
  })()), Yt;
}
var Pi;
function ra() {
  return Pi || (Pi = 1, process.env.NODE_ENV === "production" ? pe.exports = ia() : pe.exports = sa()), pe.exports;
}
var F = ra(), Mt = {}, Si;
function oa() {
  if (Si) return Mt;
  Si = 1;
  var t = ea;
  if (process.env.NODE_ENV === "production")
    Mt.createRoot = t.createRoot, Mt.hydrateRoot = t.hydrateRoot;
  else {
    var e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Mt.createRoot = function(n, i) {
      e.usingClientEntryPoint = !0;
      try {
        return t.createRoot(n, i);
      } finally {
        e.usingClientEntryPoint = !1;
      }
    }, Mt.hydrateRoot = function(n, i, s) {
      e.usingClientEntryPoint = !0;
      try {
        return t.hydrateRoot(n, i, s);
      } finally {
        e.usingClientEntryPoint = !1;
      }
    };
  }
  return Mt;
}
var aa = oa();
const la = /* @__PURE__ */ na(aa), Ws = wt(), ua = {
  messages: [],
  context: { trip: null, cabin: null, user: null }
};
function ca(t, e) {
  switch (e.type) {
    case "ADD_MESSAGE":
      return { ...t, messages: [...t.messages, e.payload] };
    case "SET_CONTEXT":
      return { ...t, context: { ...t.context, ...e.payload } };
    default:
      return t;
  }
}
function fa({ children: t }) {
  const [e, n] = Ho(ca, ua);
  return /* @__PURE__ */ F.jsx(Ws.Provider, { value: { state: e, dispatch: n }, children: t });
}
const Ks = () => z(Ws);
let ht = {
  apiBaseUrl: "",
  merchantId: "",
  chatTheme: "light",
  env: "production",
  customCssUrl: null
};
function ha(t = {}) {
  if (ht = { ...ht, ...t }, window.AgenticAIConfig && (ht = { ...ht, ...window.AgenticAIConfig }), ht.customCssUrl) {
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = ht.customCssUrl, document.head.appendChild(e);
  } else
    Promise.resolve({                     });
  return Promise.resolve({                }), ht;
}
function da() {
  return ht;
}
const Gs = {
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
}, xe = {};
function pa(t, e) {
  if (!Gs[t]) {
    console.warn(`[AgenticAI] Unknown event type: ${t}`);
    return;
  }
  xe[t] || (xe[t] = []), xe[t].push(e);
}
function lt(t, e) {
  const n = Gs[t];
  if (!n) {
    console.warn(`[AgenticAI] Unknown event emitted: ${t}`);
    return;
  }
  if (!n.validate(e)) {
    console.warn(`[AgenticAI] Invalid payload for "${t}"`, e);
    return;
  }
  const s = xe[t] || [];
  s.length === 0 ? n.defaultHandler(e) : s.forEach((o) => {
    try {
      o(e);
    } catch (r) {
      console.error(`[AgenticAI] Error in ${t} callback:`, r);
    }
  }), window.dispatchEvent(new CustomEvent(`agentic:${t}`, { detail: e }));
}
function ma() {
  const [t, e] = an(""), [n, i] = an(!1), { state: s, dispatch: o } = Ks(), { apiBaseUrl: r, merchantId: a } = da(), l = async () => {
    var u;
    if (t.trim()) {
      o({ type: "ADD_MESSAGE", payload: { type: "user", text: t } }), lt("chatMessage", { text: t, sender: "user" }), i(!0);
      try {
        const h = await (await fetch(`${r}/agentic-search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: t,
            merchant_id: a,
            limit: 10,
            offset: 0
          })
        })).json();
        i(!1), lt("searchResults", { results: (h == null ? void 0 : h.results) || [], query: t });
        const d = `Found ${((u = h == null ? void 0 : h.results) == null ? void 0 : u.length) || 0} matching products for “${t}”.`;
        o({ type: "ADD_MESSAGE", payload: { type: "bot", text: d } }), lt("chatMessage", { text: d, sender: "bot" });
      } catch (c) {
        console.error("[AgenticAI] Search failed:", c), i(!1);
        const h = "Sorry, I couldn’t find products right now.";
        o({ type: "ADD_MESSAGE", payload: { type: "bot", text: h } }), lt("chatMessage", { text: h, sender: "bot" });
      }
      e("");
    }
  };
  return /* @__PURE__ */ F.jsx("div", { className: "agentic-inline-chat", children: /* @__PURE__ */ F.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ F.jsx(
      "input",
      {
        className: "agentic-input",
        placeholder: "Ask for products (e.g. baby strollers)...",
        value: t,
        onChange: (u) => e(u.target.value),
        onKeyDown: (u) => u.key === "Enter" && l()
      }
    ),
    /* @__PURE__ */ F.jsx(
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
const Ys = wt({});
function ga(t) {
  const e = ve(null);
  return e.current === null && (e.current = t()), e.current;
}
const wn = wt(null), zs = wt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function ya(t = !0) {
  const e = z(wn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = qo();
  De(() => {
    t && s(o);
  }, [t]);
  const r = Us(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const An = typeof window < "u", va = An ? Xo : De, X = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let Nt = X, pt = X;
process.env.NODE_ENV !== "production" && (Nt = (t, e) => {
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
const _t = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
}, rt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ut = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, xa = {
  useManualTiming: !1
};
function Ta(t) {
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
const me = [
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
], ba = 40;
function Hs(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = me.reduce((v, x) => (v[x] = Ta(o), v), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: d } = r, p = () => {
    const v = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, ba), 1), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(p));
  }, g = () => {
    n = !0, i = !0, s.isProcessing || t(p);
  };
  return { schedule: me.reduce((v, x) => {
    const P = r[x];
    return v[x] = (V, w = !1, M = !1) => (n || g(), P.schedule(V, w, M)), v;
  }, {}), cancel: (v) => {
    for (let x = 0; x < me.length; x++)
      r[me[x]].cancel(v);
  }, state: s, steps: r };
}
const { schedule: k, cancel: mt, state: W, steps: ze } = Hs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0), qs = wt({ strict: !1 }), wi = {
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
for (const t in wi)
  It[t] = {
    isEnabled: (e) => wi[t].some((n) => !!e[n])
  };
function Pa(t) {
  for (const e in t)
    It[e] = {
      ...It[e],
      ...t[e]
    };
}
const Sa = /* @__PURE__ */ new Set([
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
function Se(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Sa.has(t);
}
let Xs = (t) => !Se(t);
function wa(t) {
  t && (Xs = (e) => e.startsWith("on") ? !Se(e) : t(e));
}
try {
  wa(require("@emotion/is-prop-valid").default);
} catch {
}
function Aa(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Xs(s) || n === !0 && Se(s) || !e && !Se(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Ai = /* @__PURE__ */ new Set();
function Oe(t, e, n) {
  t || Ai.has(e) || (console.warn(e), Ai.add(e));
}
function Ea(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...i) => (process.env.NODE_ENV !== "production" && Oe(!1, "motion() is deprecated. Use motion.create() instead."), t(...i));
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
function ee(t) {
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
  return Le(t.animate) || Rn.some((e) => ee(t[e]));
}
function Zs(t) {
  return !!(je(t) || t.variants);
}
function Ca(t, e) {
  if (je(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || ee(n) ? n : void 0,
      animate: ee(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Ra(t) {
  const { initial: e, animate: n } = Ca(t, z(ke));
  return Me(() => ({ initial: e, animate: n }), [Ei(e), Ei(n)]);
}
function Ei(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Va = Symbol.for("motionComponentSymbol");
function Ot(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Da(t, e, n) {
  return Us(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : Ot(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Vn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ma = "framerAppearId", Js = "data-" + Vn(Ma), { schedule: Dn } = Hs(queueMicrotask, !1), Qs = wt({});
function Oa(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = z(ke), l = z(qs), u = z(wn), c = z(zs).reducedMotion, h = ve(null);
  i = i || l.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = h.current, p = z(Qs);
  d && !d.projection && s && (d.type === "html" || d.type === "svg") && ka(h.current, n, s, p);
  const g = ve(!1);
  Zo(() => {
    d && g.current && d.update(n, u);
  });
  const y = n[Js], b = ve(!!y && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, y)));
  return va(() => {
    d && (g.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Dn.render(d.render), b.current && d.animationState && d.animationState.animateChanges());
  }), De(() => {
    d && (!b.current && d.animationState && d.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, y);
    }), b.current = !1));
  }), d;
}
function ka(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : tr(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && Ot(a),
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
function tr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : tr(t.parent);
}
function La({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && Pa(t);
  function a(u, c) {
    let h;
    const d = {
      ...z(zs),
      ...u,
      layoutId: ja(u)
    }, { isStatic: p } = d, g = Ra(u), y = i(u, p);
    if (!p && An) {
      Fa(d, t);
      const b = _a(d);
      h = b.MeasureLayout, g.visualElement = Oa(s, y, d, e, b.ProjectionNode);
    }
    return F.jsxs(ke.Provider, { value: g, children: [h && g.visualElement ? F.jsx(h, { visualElement: g.visualElement, ...d }) : null, n(s, u, Da(y, g.visualElement, c), y, p, g.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = Jo(a);
  return l[Va] = s, l;
}
function ja({ layoutId: t }) {
  const e = z(Ys).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Fa(t, e) {
  const n = z(qs).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Nt(!1, i) : pt(!1, i);
  }
}
function _a(t) {
  const { drag: e, layout: n } = It;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const Ia = [
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
      !!(Ia.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ci(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function On(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = Ci(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = Ci(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const ln = (t) => Array.isArray(t), Ba = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Na = (t) => ln(t) ? t[t.length - 1] || 0 : t, G = (t) => !!(t && t.getVelocity);
function Te(t) {
  const e = G(t) ? t.get() : t;
  return Ba(e) ? e.toValue() : e;
}
function Ua({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: $a(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const er = (t) => (e, n) => {
  const i = z(ke), s = z(wn), o = () => Ua(t, e, i, s);
  return n ? o() : ga(o);
};
function $a(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const d in o)
    s[d] = Te(o[d]);
  let { initial: r, animate: a } = t;
  const l = je(t), u = Zs(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Le(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const g = On(t, d[p]);
      if (g) {
        const { transitionEnd: y, transition: b, ...v } = g;
        for (const x in v) {
          let P = v[x];
          if (Array.isArray(P)) {
            const V = c ? P.length - 1 : 0;
            P = P[V];
          }
          P !== null && (s[x] = P);
        }
        for (const x in y)
          s[x] = y[x];
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
], At = new Set(Ut), nr = (t) => (e) => typeof e == "string" && e.startsWith(t), ir = /* @__PURE__ */ nr("--"), Wa = /* @__PURE__ */ nr("var(--"), kn = (t) => Wa(t) ? Ka.test(t.split("/*")[0].trim()) : !1, Ka = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, sr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ct = (t, e, n) => n > e ? e : n < t ? t : n, $t = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ne = {
  ...$t,
  transform: (t) => ct(0, 1, t)
}, ge = {
  ...$t,
  default: 1
}, oe = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), dt = /* @__PURE__ */ oe("deg"), ot = /* @__PURE__ */ oe("%"), S = /* @__PURE__ */ oe("px"), Ga = /* @__PURE__ */ oe("vh"), Ya = /* @__PURE__ */ oe("vw"), Ri = {
  ...ot,
  parse: (t) => ot.parse(t) / 100,
  transform: (t) => ot.transform(t * 100)
}, za = {
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
}, Ha = {
  rotate: dt,
  rotateX: dt,
  rotateY: dt,
  rotateZ: dt,
  scale: ge,
  scaleX: ge,
  scaleY: ge,
  scaleZ: ge,
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
  opacity: ne,
  originX: Ri,
  originY: Ri,
  originZ: S
}, Vi = {
  ...$t,
  transform: Math.round
}, Ln = {
  ...za,
  ...Ha,
  zIndex: Vi,
  size: S,
  // SVG
  fillOpacity: ne,
  strokeOpacity: ne,
  numOctaves: Vi
}, qa = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Xa = Ut.length;
function Za(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < Xa; o++) {
    const r = Ut[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = sr(a, Ln[r]);
      if (!l) {
        s = !1;
        const c = qa[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function jn(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (At.has(l)) {
      r = !0;
      continue;
    } else if (ir(l)) {
      s[l] = u;
      continue;
    } else {
      const c = sr(u, Ln[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = Za(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Ja = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Qa = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function tl(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? Ja : Qa;
  t[o.offset] = S.transform(-i);
  const r = S.transform(e), a = S.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Di(t, e, n) {
  return typeof t == "string" ? t : S.transform(e + n * t);
}
function el(t, e, n) {
  const i = Di(e, t.x, t.width), s = Di(n, t.y, t.height);
  return `${i} ${s}`;
}
function Fn(t, {
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
  if (jn(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: p, dimensions: g } = t;
  d.transform && (g && (p.transform = d.transform), delete d.transform), g && (s !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = el(g, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), r !== void 0 && tl(d, r, a, l, !1);
}
const _n = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), rr = () => ({
  ..._n(),
  attrs: {}
}), In = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function or(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const ar = /* @__PURE__ */ new Set([
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
function lr(t, e, n, i) {
  or(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(ar.has(s) ? s : Vn(s), e.attrs[s]);
}
const we = {};
function nl(t) {
  Object.assign(we, t);
}
function ur(t, { layout: e, layoutId: n }) {
  return At.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!we[t] || t === "opacity");
}
function Bn(t, e, n) {
  var i;
  const { style: s } = t, o = {};
  for (const r in s)
    (G(s[r]) || e.style && G(e.style[r]) || ur(r, t) || ((i = n == null ? void 0 : n.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
function cr(t, e, n) {
  const i = Bn(t, e, n);
  for (const s in t)
    if (G(t[s]) || G(e[s])) {
      const o = Ut.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
function il(t, e) {
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
const Mi = ["x", "y", "width", "height", "cx", "cy", "r"], sl = {
  useVisualState: er({
    scrapeMotionValuesFromProps: cr,
    createRenderState: rr,
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
        for (let a = 0; a < Mi.length; a++) {
          const l = Mi[a];
          t[l] !== e[l] && (r = !0);
        }
      r && k.read(() => {
        il(n, i), k.render(() => {
          Fn(i, s, In(n.tagName), t.transformTemplate), lr(n, i);
        });
      });
    }
  })
}, rl = {
  useVisualState: er({
    scrapeMotionValuesFromProps: Bn,
    createRenderState: _n
  })
};
function fr(t, e, n) {
  for (const i in e)
    !G(e[i]) && !ur(i, n) && (t[i] = e[i]);
}
function ol({ transformTemplate: t }, e) {
  return Me(() => {
    const n = _n();
    return jn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function al(t, e) {
  const n = t.style || {}, i = {};
  return fr(i, n, t), Object.assign(i, ol(t, e)), i;
}
function ll(t, e) {
  const n = {}, i = al(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
function ul(t, e, n, i) {
  const s = Me(() => {
    const o = rr();
    return Fn(o, e, In(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    fr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function cl(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (Mn(n) ? ul : ll)(i, o, r, n), u = Aa(i, typeof n == "string", t), c = n !== $s ? { ...u, ...l, ref: s } : {}, { children: h } = i, d = Me(() => G(h) ? h.get() : h, [h]);
    return Qo(n, {
      ...c,
      children: d
    });
  };
}
function fl(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...Mn(i) ? sl : rl,
      preloadedFeatures: t,
      useRender: cl(s),
      createVisualElement: e,
      Component: i
    };
    return La(r);
  };
}
function hr(t, e) {
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
  return On(i, e, n !== void 0 ? n : i.custom, t);
}
const hl = /* @__PURE__ */ En(() => window.ScrollTimeline !== void 0);
class dl {
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
      if (hl() && s.attachTimeline)
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
class pl extends dl {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function Nn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const un = 2e4;
function dr(t) {
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
const $n = (t) => Array.isArray(t) && typeof t[0] == "number", ml = {
  linearEasing: void 0
};
function gl(t, e) {
  const n = /* @__PURE__ */ En(t);
  return () => {
    var i;
    return (i = ml[e]) !== null && i !== void 0 ? i : n();
  };
}
const Ae = /* @__PURE__ */ gl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), pr = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ _t(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function mr(t) {
  return !!(typeof t == "function" && Ae() || !t || typeof t == "string" && (t in cn || Ae()) || $n(t) || Array.isArray(t) && t.every(mr));
}
const Ht = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, cn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ht([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ht([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ht([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ht([0.33, 1.53, 0.69, 0.99])
};
function gr(t, e) {
  if (t)
    return typeof t == "function" && Ae() ? pr(t, e) : $n(t) ? Ht(t) : Array.isArray(t) ? t.map((n) => gr(n, e) || cn.easeOut) : cn[t];
}
const nt = {
  x: !1,
  y: !1
};
function yr() {
  return nt.x || nt.y;
}
function yl(t, e, n) {
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
function vr(t, e) {
  const n = yl(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function ki(t) {
  return (e) => {
    e.pointerType === "touch" || yr() || t(e);
  };
}
function vl(t, e, n = {}) {
  const [i, s, o] = vr(t, n), r = ki((a) => {
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
const xr = (t, e) => e ? t === e ? !0 : xr(t, e.parentElement) : !1, Wn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, xl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Tl(t) {
  return xl.has(t.tagName) || t.tabIndex !== -1;
}
const qt = /* @__PURE__ */ new WeakSet();
function Li(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function He(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const bl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Li(() => {
    if (qt.has(n))
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
  return Wn(t) && !yr();
}
function Pl(t, e, n = {}) {
  const [i, s, o] = vr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!ji(a) || qt.has(l))
      return;
    qt.add(l);
    const u = e(a), c = (p, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!ji(p) || !qt.has(l)) && (qt.delete(l), typeof u == "function" && u(p, { success: g }));
    }, h = (p) => {
      c(p, n.useGlobalTarget || xr(l, p.target));
    }, d = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    !Tl(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), a.addEventListener("focus", (u) => bl(u, s), s);
  }), o;
}
function Sl(t) {
  return t === "x" || t === "y" ? nt[t] ? null : (nt[t] = !0, () => {
    nt[t] = !1;
  }) : nt.x || nt.y ? null : (nt.x = nt.y = !0, () => {
    nt.x = nt.y = !1;
  });
}
const Tr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ut
]);
let be;
function wl() {
  be = void 0;
}
const at = {
  now: () => (be === void 0 && at.set(W.isProcessing || xa.useManualTiming ? W.timestamp : performance.now()), be),
  set: (t) => {
    be = t, queueMicrotask(wl);
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
function br(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Fi = 30, Al = (t) => !isNaN(parseFloat(t));
class El {
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
      const o = at.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = at.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Al(this.current));
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
    return process.env.NODE_ENV !== "production" && Oe(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Yn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), k.read(() => {
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
    const e = at.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Fi)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fi);
    return br(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function ie(t, e) {
  return new El(t, e);
}
function Cl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ie(n));
}
function Rl(t, e) {
  const n = Fe(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = Na(o[r]);
    Cl(t, r, a);
  }
}
function Vl(t) {
  return !!(G(t) && t.add);
}
function fn(t, e) {
  const n = t.getValue("willChange");
  if (Vl(n))
    return n.add(e);
}
function Pr(t) {
  return t.props[Js];
}
const Sr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Dl = 1e-7, Ml = 12;
function Ol(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Sr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Dl && ++a < Ml);
  return r;
}
function ae(t, e, n, i) {
  if (t === e && n === i)
    return X;
  const s = (o) => Ol(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Sr(s(o), e, i);
}
const wr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ar = (t) => (e) => 1 - t(1 - e), Er = /* @__PURE__ */ ae(0.33, 1.53, 0.69, 0.99), zn = /* @__PURE__ */ Ar(Er), Cr = /* @__PURE__ */ wr(zn), Rr = (t) => (t *= 2) < 1 ? 0.5 * zn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Hn = (t) => 1 - Math.sin(Math.acos(t)), Vr = Ar(Hn), Dr = wr(Hn), Mr = (t) => /^0[^.\s]+$/u.test(t);
function kl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Mr(t) : !0;
}
const Zt = (t) => Math.round(t * 1e5) / 1e5, qn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ll(t) {
  return t == null;
}
const jl = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Xn = (t, e) => (n) => !!(typeof n == "string" && jl.test(n) && n.startsWith(t) || e && !Ll(n) && Object.prototype.hasOwnProperty.call(n, e)), Or = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(qn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Fl = (t) => ct(0, 255, t), qe = {
  ...$t,
  transform: (t) => Math.round(Fl(t))
}, Pt = {
  test: /* @__PURE__ */ Xn("rgb", "red"),
  parse: /* @__PURE__ */ Or("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + qe.transform(t) + ", " + qe.transform(e) + ", " + qe.transform(n) + ", " + Zt(ne.transform(i)) + ")"
};
function _l(t) {
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
  parse: _l,
  transform: Pt.transform
}, kt = {
  test: /* @__PURE__ */ Xn("hsl", "hue"),
  parse: /* @__PURE__ */ Or("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + ot.transform(Zt(e)) + ", " + ot.transform(Zt(n)) + ", " + Zt(ne.transform(i)) + ")"
}, K = {
  test: (t) => Pt.test(t) || hn.test(t) || kt.test(t),
  parse: (t) => Pt.test(t) ? Pt.parse(t) : kt.test(t) ? kt.parse(t) : hn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Pt.transform(t) : kt.transform(t)
}, Il = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Bl(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(qn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Il)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const kr = "number", Lr = "color", Nl = "var", Ul = "var(", _i = "${}", $l = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function se(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace($l, (l) => (K.test(l) ? (i.color.push(o), s.push(Lr), n.push(K.parse(l))) : l.startsWith(Ul) ? (i.var.push(o), s.push(Nl), n.push(l)) : (i.number.push(o), s.push(kr), n.push(parseFloat(l))), ++o, _i)).split(_i);
  return { values: n, split: a, indexes: i, types: s };
}
function jr(t) {
  return se(t).values;
}
function Fr(t) {
  const { split: e, types: n } = se(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === kr ? o += Zt(s[r]) : a === Lr ? o += K.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Wl = (t) => typeof t == "number" ? 0 : t;
function Kl(t) {
  const e = jr(t);
  return Fr(t)(e.map(Wl));
}
const gt = {
  test: Bl,
  parse: jr,
  createTransformer: Fr,
  getAnimatableNone: Kl
}, Gl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(qn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Gl.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const zl = /\b([a-z-]*)\(.*?\)/gu, dn = {
  ...gt,
  getAnimatableNone: (t) => {
    const e = t.match(zl);
    return e ? e.map(Yl).join(" ") : t;
  }
}, Hl = {
  ...Ln,
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
}, Zn = (t) => Hl[t];
function _r(t, e) {
  let n = Zn(t);
  return n !== dn && (n = gt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const ql = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Xl(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !ql.has(o) && se(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = _r(n, s);
}
const Ii = (t) => t === $t || t === S, Bi = (t, e) => parseFloat(t.split(", ")[e]), Ni = (t, e) => (n, { transform: i }) => {
  if (i === "none" || !i)
    return 0;
  const s = i.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Bi(s[1], e);
  {
    const o = i.match(/^matrix\((.+)\)$/u);
    return o ? Bi(o[1], t) : 0;
  }
}, Zl = /* @__PURE__ */ new Set(["x", "y", "z"]), Jl = Ut.filter((t) => !Zl.has(t));
function Ql(t) {
  const e = [];
  return Jl.forEach((n) => {
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
  x: Ni(4, 13),
  y: Ni(5, 14)
};
Bt.translateX = Bt.x;
Bt.translateY = Bt.y;
const St = /* @__PURE__ */ new Set();
let pn = !1, mn = !1;
function Ir() {
  if (mn) {
    const t = Array.from(St).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = Ql(i);
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
function Br() {
  St.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (mn = !0);
  });
}
function tu() {
  Br(), Ir();
}
class Jn {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (St.add(this), pn || (pn = !0, k.read(Br), k.resolveKeyframes(Ir))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: i, motionValue: s } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = s == null ? void 0 : s.get(), a = e[e.length - 1];
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
const Nr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), eu = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function nu(t) {
  const e = eu.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const iu = 4;
function Ur(t, e, n = 1) {
  pt(n <= iu, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [i, s] = nu(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return Nr(r) ? parseFloat(r) : r;
  }
  return kn(s) ? Ur(s, e, n + 1) : s;
}
const $r = (t) => (e) => e.test(t), su = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Wr = [$t, S, ot, dt, Ya, Ga, su], Ui = (t) => Wr.find($r(t));
class Kr extends Jn {
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
      if (typeof u == "string" && (u = u.trim(), kn(u))) {
        const c = Ur(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Tr.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = Ui(s), a = Ui(o);
    if (r !== a)
      if (Ii(r) && Ii(a))
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
      kl(e[s]) && i.push(s);
    i.length && Xl(e, i, n);
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
const $i = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(gt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function ru(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ou(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = $i(s, e), a = $i(o, e);
  return Nt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : ru(t) || (n === "spring" || Un(n)) && i;
}
const au = (t) => t !== null;
function _e(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(au), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const lu = 40;
class Gr {
  constructor({ autoplay: e = !0, delay: n = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = at.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > lu ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && tu(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = at.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !ou(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(_e(e, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const j = (t, e, n) => t + (e - t) * n;
function Xe(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function uu({ hue: t, saturation: e, lightness: n, alpha: i }) {
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
function Ee(t, e) {
  return (n) => n > 0 ? e : t;
}
const Ze = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, cu = [hn, Pt, kt], fu = (t) => cu.find((e) => e.test(t));
function Wi(t) {
  const e = fu(t);
  if (Nt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === kt && (n = uu(n)), n;
}
const Ki = (t, e) => {
  const n = Wi(t), i = Wi(e);
  if (!n || !i)
    return Ee(t, e);
  const s = { ...n };
  return (o) => (s.red = Ze(n.red, i.red, o), s.green = Ze(n.green, i.green, o), s.blue = Ze(n.blue, i.blue, o), s.alpha = j(n.alpha, i.alpha, o), Pt.transform(s));
}, hu = (t, e) => (n) => e(t(n)), le = (...t) => t.reduce(hu), gn = /* @__PURE__ */ new Set(["none", "hidden"]);
function du(t, e) {
  return gn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function pu(t, e) {
  return (n) => j(t, e, n);
}
function Qn(t) {
  return typeof t == "number" ? pu : typeof t == "string" ? kn(t) ? Ee : K.test(t) ? Ki : yu : Array.isArray(t) ? Yr : typeof t == "object" ? K.test(t) ? Ki : mu : Ee;
}
function Yr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => Qn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function mu(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Qn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function gu(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const yu = (t, e) => {
  const n = gt.createTransformer(e), i = se(t), s = se(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? gn.has(t) && !s.values.length || gn.has(e) && !i.values.length ? du(t, e) : le(Yr(gu(i, s), s.values), n) : (Nt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ee(t, e));
};
function zr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? j(t, e, n) : Qn(t)(t, e);
}
const vu = 5;
function Hr(t, e, n) {
  const i = Math.max(e - vu, 0);
  return br(n - t(i), e - i);
}
const L = {
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
function xu({ duration: t = L.duration, bounce: e = L.bounce, velocity: n = L.velocity, mass: i = L.mass }) {
  let s, o;
  Nt(t <= /* @__PURE__ */ rt(L.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = ct(L.minDamping, L.maxDamping, r), t = ct(L.minDuration, L.maxDuration, /* @__PURE__ */ ut(t)), r < 1 ? (s = (u) => {
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
  const a = 5 / t, l = bu(s, o, a);
  if (t = /* @__PURE__ */ rt(t), isNaN(l))
    return {
      stiffness: L.stiffness,
      damping: L.damping,
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
const Tu = 12;
function bu(t, e, n) {
  let i = n;
  for (let s = 1; s < Tu; s++)
    i = i - t(i) / e(i);
  return i;
}
function yn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Pu = ["duration", "bounce"], Su = ["stiffness", "damping", "mass"];
function Gi(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function wu(t) {
  let e = {
    velocity: L.velocity,
    stiffness: L.stiffness,
    damping: L.damping,
    mass: L.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Gi(t, Su) && Gi(t, Pu))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * ct(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: L.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = xu(t);
      e = {
        ...e,
        ...n,
        mass: L.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function qr(t = L.visualDuration, e = L.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: p } = wu({
    ...n,
    velocity: -/* @__PURE__ */ ut(n.velocity || 0)
  }), g = d || 0, y = u / (2 * Math.sqrt(l * c)), b = r - o, v = /* @__PURE__ */ ut(Math.sqrt(l / c)), x = Math.abs(b) < 5;
  i || (i = x ? L.restSpeed.granular : L.restSpeed.default), s || (s = x ? L.restDelta.granular : L.restDelta.default);
  let P;
  if (y < 1) {
    const w = yn(v, y);
    P = (M) => {
      const N = Math.exp(-y * v * M);
      return r - N * ((g + y * v * b) / w * Math.sin(w * M) + b * Math.cos(w * M));
    };
  } else if (y === 1)
    P = (w) => r - Math.exp(-v * w) * (b + (g + v * b) * w);
  else {
    const w = v * Math.sqrt(y * y - 1);
    P = (M) => {
      const N = Math.exp(-y * v * M), E = Math.min(w * M, 300);
      return r - N * ((g + y * v * b) * Math.sinh(E) + w * b * Math.cosh(E)) / w;
    };
  }
  const V = {
    calculatedDuration: p && h || null,
    next: (w) => {
      const M = P(w);
      if (p)
        a.done = w >= h;
      else {
        let N = 0;
        y < 1 && (N = w === 0 ? /* @__PURE__ */ rt(g) : Hr(P, w, M));
        const E = Math.abs(N) <= i, $ = Math.abs(r - M) <= s;
        a.done = E && $;
      }
      return a.value = a.done ? r : M, a;
    },
    toString: () => {
      const w = Math.min(dr(V), un), M = pr((N) => V.next(w * N).value, w, 30);
      return w + "ms " + M;
    }
  };
  return V;
}
function Yi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (E) => a !== void 0 && E < a || l !== void 0 && E > l, g = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * e;
  const b = h + y, v = r === void 0 ? b : r(b);
  v !== b && (y = v - h);
  const x = (E) => -y * Math.exp(-E / i), P = (E) => v + x(E), V = (E) => {
    const $ = x(E), H = P(E);
    d.done = Math.abs($) <= u, d.value = d.done ? v : H;
  };
  let w, M;
  const N = (E) => {
    p(d.value) && (w = E, M = qr({
      keyframes: [d.value, g(d.value)],
      velocity: Hr(P, E, d.value),
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
      let $ = !1;
      return !M && w === void 0 && ($ = !0, V(E), N(E)), w !== void 0 && E >= w ? M.next(E - w) : (!$ && V(E), d);
    }
  };
}
const Au = /* @__PURE__ */ ae(0.42, 0, 1, 1), Eu = /* @__PURE__ */ ae(0, 0, 0.58, 1), Xr = /* @__PURE__ */ ae(0.42, 0, 0.58, 1), Cu = (t) => Array.isArray(t) && typeof t[0] != "number", zi = {
  linear: X,
  easeIn: Au,
  easeInOut: Xr,
  easeOut: Eu,
  circIn: Hn,
  circInOut: Dr,
  circOut: Vr,
  backIn: zn,
  backInOut: Cr,
  backOut: Er,
  anticipate: Rr
}, Hi = (t) => {
  if ($n(t)) {
    pt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, i, s] = t;
    return ae(e, n, i, s);
  } else if (typeof t == "string")
    return pt(zi[t] !== void 0, `Invalid easing type '${t}'`), zi[t];
  return t;
};
function Ru(t, e, n) {
  const i = [], s = n || zr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = s(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || X : e;
      a = le(l, a);
    }
    i.push(a);
  }
  return i;
}
function Vu(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (pt(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Ru(e, i, s), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const d = /* @__PURE__ */ _t(t[h], t[h + 1], c);
    return a[h](d);
  };
  return n ? (c) => u(ct(t[0], t[o - 1], c)) : u;
}
function Du(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ _t(0, e, i);
    t.push(j(n, 1, s));
  }
}
function Mu(t) {
  const e = [0];
  return Du(e, t.length - 1), e;
}
function Ou(t, e) {
  return t.map((n) => n * e);
}
function ku(t, e) {
  return t.map(() => e || Xr).splice(0, t.length - 1);
}
function Ce({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = Cu(i) ? i.map(Hi) : Hi(i), o = {
    done: !1,
    value: e[0]
  }, r = Ou(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Mu(e),
    t
  ), a = Vu(r, e, {
    ease: Array.isArray(s) ? s : ku(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Lu = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => k.update(e, !0),
    stop: () => mt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => W.isProcessing ? W.timestamp : at.now()
  };
}, ju = {
  decay: Yi,
  inertia: Yi,
  tween: Ce,
  keyframes: Ce,
  spring: qr
}, Fu = (t) => t / 100;
class ti extends Gr {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options, r = (s == null ? void 0 : s.KeyframeResolver) || Jn, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, i, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = Un(n) ? n : ju[n] || Ce;
    let l, u;
    a !== Ce && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && pt(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), l = le(Fu, zr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = dr(c));
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
    const { delay: d, repeat: p, repeatType: g, repeatDelay: y, onUpdate: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const v = this.currentTime - d * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? v < 0 : v > c;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let P = this.currentTime, V = o;
    if (p) {
      const E = Math.min(this.currentTime, c) / h;
      let $ = Math.floor(E), H = E % 1;
      !H && E >= 1 && (H = 1), H === 1 && $--, $ = Math.min($, p + 1), !!($ % 2) && (g === "reverse" ? (H = 1 - H, y && (H -= y / h)) : g === "mirror" && (V = r)), P = ct(0, 1, H) * h;
    }
    const w = x ? { done: !1, value: l[0] } : V.next(P);
    a && (w.value = a(w.value));
    let { done: M } = w;
    !x && u !== null && (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return N && s !== void 0 && (w.value = _e(l, this.options, s)), b && b(w.value), N && this.finish(), w;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ ut(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ut(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ rt(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ ut(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Lu, onPlay: n, startTime: i } = this.options;
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
const _u = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Iu(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = gr(a, s);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: i,
    duration: s,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Bu = /* @__PURE__ */ En(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Re = 10, Nu = 2e4;
function Uu(t) {
  return Un(t.type) || t.type === "spring" || !mr(t.ease);
}
function $u(t, e) {
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
  for (; !i.done && o < Nu; )
    i = n.sample(o), s.push(i.value), o += Re;
  return {
    times: void 0,
    keyframes: s,
    duration: o - Re,
    ease: "linear"
  };
}
const Zr = {
  anticipate: Rr,
  backInOut: Cr,
  circInOut: Dr
};
function Wu(t) {
  return t in Zr;
}
class qi extends Gr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new Kr(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Ae() && Wu(o) && (o = Zr[o]), Uu(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: p, element: g, ...y } = this.options, b = $u(e, y);
      e = b.keyframes, e.length === 1 && (e[1] = e[0]), i = b.duration, s = b.times, o = b.ease, r = "keyframes";
    }
    const c = Iu(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Oi(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(_e(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ ut(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ ut(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: i } = n;
    i.currentTime = /* @__PURE__ */ rt(e);
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
      }), y = /* @__PURE__ */ rt(this.time);
      u.setWithVelocity(g.sample(y - Re).value, g.sample(y).value, Re);
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
    return Bu() && i && _u.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Ku = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Gu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Yu = {
  type: "keyframes",
  duration: 0.8
}, zu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Hu = (t, { keyframes: e }) => e.length > 2 ? Yu : At.has(t) ? t.startsWith("scale") ? Gu(e[1]) : Ku : zu;
function qu({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const ei = (t, e, n, i = {}, s, o) => (r) => {
  const a = Nn(i, t) || {}, l = a.delay || i.delay || 0;
  let { elapsed: u = 0 } = i;
  u = u - /* @__PURE__ */ rt(l);
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
  qu(a) || (c = {
    ...c,
    ...Hu(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ rt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ rt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const d = _e(c.keyframes, a);
    if (d !== void 0)
      return k.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new pl([]);
  }
  return !o && qi.supports(c) ? new qi(c) : new ti(c);
};
function Xu({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function Jr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const u = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const d = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), p = l[h];
    if (p === void 0 || c && Xu(c, h))
      continue;
    const g = {
      delay: n,
      ...Nn(r || {}, h)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const v = Pr(t);
      if (v) {
        const x = window.MotionHandoffAnimation(v, h, k);
        x !== null && (g.startTime = x, y = !0);
      }
    }
    fn(t, h), d.start(ei(h, d, p, t.shouldReduceMotion && Tr.has(h) ? { type: !1 } : g, t, y));
    const b = d.animation;
    b && u.push(b);
  }
  return a && Promise.all(u).then(() => {
    k.update(() => {
      a && Rl(t, a);
    });
  }), u;
}
function vn(t, e, n = {}) {
  var i;
  const s = Fe(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(Jr(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: d } = o;
    return Zu(t, e, c + u, h, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Zu(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
  return Array.from(t.variantChildren).sort(Ju).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(vn(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Ju(t, e) {
  return t.sortNodePosition(e);
}
function Qu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => vn(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = vn(t, e, n);
  else {
    const s = typeof e == "function" ? Fe(t, e, n.custom) : e;
    i = Promise.all(Jr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const tc = Rn.length;
function Qr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Qr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < tc; n++) {
    const i = Rn[n], s = t.props[i];
    (ee(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const ec = [...Cn].reverse(), nc = Cn.length;
function ic(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => Qu(t, n, i)));
}
function sc(t) {
  let e = ic(t), n = Xi(), i = !0;
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
    const { props: u } = t, c = Qr(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let b = 0; b < nc; b++) {
      const v = ec[b], x = n[v], P = u[v] !== void 0 ? u[v] : c[v], V = ee(P), w = v === l ? x.isActive : null;
      w === !1 && (g = b);
      let M = P === c[v] && P !== u[v] && V;
      if (M && i && t.manuallyAnimateOnMount && (M = !1), x.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !P && !x.prevProp || // Or if the prop doesn't define an animation
      Le(P) || typeof P == "boolean")
        continue;
      const N = rc(x.prevProp, P);
      let E = N || // If we're making this variant active, we want to always make it active
      v === l && x.isActive && !M && V || // If we removed a higher-priority variant (i is in reverse order)
      b > g && V, $ = !1;
      const H = Array.isArray(P) ? P : [P];
      let ft = H.reduce(s(v), {});
      w === !1 && (ft = {});
      const { prevResolvedValues: Wt = {} } = x, it = {
        ...Wt,
        ...ft
      }, st = (U) => {
        E = !0, d.has(U) && ($ = !0, d.delete(U)), x.needsAnimating[U] = !0;
        const J = t.getValue(U);
        J && (J.liveStyle = !1);
      };
      for (const U in it) {
        const J = ft[U], Ct = Wt[U];
        if (p.hasOwnProperty(U))
          continue;
        let Rt = !1;
        ln(J) && ln(Ct) ? Rt = !hr(J, Ct) : Rt = J !== Ct, Rt ? J != null ? st(U) : d.add(U) : J !== void 0 && d.has(U) ? st(U) : x.protectedKeys[U] = !0;
      }
      x.prevProp = P, x.prevResolvedValues = ft, x.isActive && (p = { ...p, ...ft }), i && t.blockInitialAnimation && (E = !1), E && (!(M && N) || $) && h.push(...H.map((U) => ({
        animation: U,
        options: { type: v }
      })));
    }
    if (d.size) {
      const b = {};
      d.forEach((v) => {
        const x = t.getBaseTarget(v), P = t.getValue(v);
        P && (P.liveStyle = !0), b[v] = x ?? null;
      }), h.push({ animation: b });
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
      n = Xi(), i = !0;
    }
  };
}
function rc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !hr(e, t) : !1;
}
function xt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Xi() {
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
class oc extends yt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = sc(e));
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
let ac = 0;
class lc extends yt {
  constructor() {
    super(...arguments), this.id = ac++;
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
const uc = {
  animation: {
    Feature: oc
  },
  exit: {
    Feature: lc
  }
};
function re(t, e, n, i = { passive: !0 }) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n);
}
function ue(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const cc = (t) => (e) => Wn(e) && t(e, ue(e));
function Jt(t, e, n, i) {
  return re(t, e, cc(n), i);
}
const Zi = (t, e) => Math.abs(t - e);
function fc(t, e) {
  const n = Zi(t.x, e.x), i = Zi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class to {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = tn(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = fc(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: g } = h, { timestamp: y } = W;
      this.history.push({ ...g, timestamp: y });
      const { onStart: b, onMove: v } = this.handlers;
      d || (b && b(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Qe(d, this.transformPagePoint), k.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = tn(h.type === "pointercancel" ? this.lastMoveEventInfo : Qe(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, b), g && g(h, b);
    }, !Wn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = ue(e), a = Qe(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = W;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, tn(a, this.history)), this.removeListeners = le(Jt(this.contextWindow, "pointermove", this.handlePointerMove), Jt(this.contextWindow, "pointerup", this.handlePointerUp), Jt(this.contextWindow, "pointercancel", this.handlePointerUp));
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
function Ji(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function tn({ point: t }, e) {
  return {
    point: t,
    delta: Ji(t, eo(e)),
    offset: Ji(t, hc(e)),
    velocity: dc(e, 0.1)
  };
}
function hc(t) {
  return t[0];
}
function eo(t) {
  return t[t.length - 1];
}
function dc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = eo(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ rt(e))); )
    n--;
  if (!i)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ ut(s.timestamp - i.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
const no = 1e-4, pc = 1 - no, mc = 1 + no, io = 0.01, gc = 0 - io, yc = 0 + io;
function Z(t) {
  return t.max - t.min;
}
function vc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Qi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = j(e.min, e.max, t.origin), t.scale = Z(n) / Z(e), t.translate = j(n.min, n.max, t.origin) - t.originPoint, (t.scale >= pc && t.scale <= mc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= gc && t.translate <= yc || isNaN(t.translate)) && (t.translate = 0);
}
function Qt(t, e, n, i) {
  Qi(t.x, e.x, n.x, i ? i.originX : void 0), Qi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function ts(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Z(e);
}
function xc(t, e, n) {
  ts(t.x, e.x, n.x), ts(t.y, e.y, n.y);
}
function es(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Z(e);
}
function te(t, e, n) {
  es(t.x, e.x, n.x), es(t.y, e.y, n.y);
}
function Tc(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? j(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? j(n, t, i.max) : Math.min(t, n)), t;
}
function ns(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function bc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: ns(t.x, n, s),
    y: ns(t.y, e, i)
  };
}
function is(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function Pc(t, e) {
  return {
    x: is(t.x, e.x),
    y: is(t.y, e.y)
  };
}
function Sc(t, e) {
  let n = 0.5;
  const i = Z(t), s = Z(e);
  return s > i ? n = /* @__PURE__ */ _t(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ _t(t.min, t.max - s, e.min)), ct(0, 1, n);
}
function wc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const xn = 0.35;
function Ac(t = xn) {
  return t === !1 ? t = 0 : t === !0 && (t = xn), {
    x: ss(t, "left", "right"),
    y: ss(t, "top", "bottom")
  };
}
function ss(t, e, n) {
  return {
    min: rs(t, e),
    max: rs(t, n)
  };
}
function rs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const os = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Lt = () => ({
  x: os(),
  y: os()
}), as = () => ({ min: 0, max: 0 }), I = () => ({
  x: as(),
  y: as()
});
function et(t) {
  return [t("x"), t("y")];
}
function so({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Ec({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Cc(t, e) {
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
  return Tn(t) || ro(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function ro(t) {
  return ls(t.x) || ls(t.y);
}
function ls(t) {
  return t && t !== "0%";
}
function Ve(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function us(t, e, n, i, s) {
  return s !== void 0 && (t = Ve(t, s, i)), Ve(t, n, i) + e;
}
function bn(t, e = 0, n = 1, i, s) {
  t.min = us(t.min, e, n, i, s), t.max = us(t.max, e, n, i, s);
}
function oo(t, { x: e, y: n }) {
  bn(t.x, e.translate, e.scale, e.originPoint), bn(t.y, n.translate, n.scale, n.originPoint);
}
const cs = 0.999999999999, fs = 1.0000000000001;
function Rc(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && Ft(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, oo(t, r)), i && Tt(o.latestValues) && Ft(t, o.latestValues));
  }
  e.x < fs && e.x > cs && (e.x = 1), e.y < fs && e.y > cs && (e.y = 1);
}
function jt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function hs(t, e, n, i, s = 0.5) {
  const o = j(t.min, t.max, s);
  bn(t, e, n, o, i);
}
function Ft(t, e) {
  hs(t.x, e.x, e.scaleX, e.scale, e.originX), hs(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function ao(t, e) {
  return so(Cc(t.getBoundingClientRect(), e));
}
function Vc(t, e, n) {
  const i = ao(t, n), { scroll: s } = e;
  return s && (jt(i.x, s.offset.x), jt(i.y, s.offset.y)), i;
}
const lo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Dc = /* @__PURE__ */ new WeakMap();
class Mc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = I(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ue(c).point);
    }, o = (c, h) => {
      const { drag: d, dragPropagation: p, onDragStart: g } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Sl(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((b) => {
        let v = this.getAxisMotionValue(b).get() || 0;
        if (ot.test(v)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const P = x.layout.layoutBox[b];
            P && (v = Z(P) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[b] = v;
      }), g && k.postRender(() => g(c, h)), fn(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: b } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = Oc(b), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, b), this.updateAxis("y", h.point, b), this.visualElement.render(), y && y(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => et((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new to(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: lo(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && k.postRender(() => o(e, n));
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
    if (!i || !ye(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = Tc(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && Ot(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = bc(s.layoutBox, n) : this.constraints = !1, this.elastic = Ac(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && et((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = wc(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Ot(e))
      return !1;
    const i = e.current;
    pt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = Vc(i, s.root, this.visualElement.getTransformPagePoint());
    let r = Pc(s.layout.layoutBox, o);
    if (n) {
      const a = n(Ec(r));
      this.hasMutatedConstraints = !!a, a && (r = so(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!ye(c, n, this.currentDirection))
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
      if (!ye(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - j(r, a, 0.5));
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
    if (!Ot(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Sc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), et((r) => {
      if (!ye(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(j(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Dc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Jt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      Ot(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), k.read(i);
    const r = re(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: u }) => {
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
function ye(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Oc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class kc extends yt {
  constructor(e) {
    super(e), this.removeGroupControls = X, this.removeListeners = X, this.controls = new Mc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ds = (t) => (e, n) => {
  t && k.postRender(() => t(e, n));
};
class Lc extends yt {
  constructor() {
    super(...arguments), this.removePointerDownListener = X;
  }
  onPointerDown(e) {
    this.session = new to(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: lo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: ds(e),
      onStart: ds(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && k.postRender(() => s(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Jt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Pe = {
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
function ps(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const zt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (S.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = ps(t, e.target.x), i = ps(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, jc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = gt.parse(t);
    if (s.length > 5)
      return i;
    const o = gt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = j(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
class Fc extends ta {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    nl(_c), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Pe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, r = i.projection;
    return r && (r.isPresent = o, s || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || k.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Dn.postRender(() => {
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
function uo(t) {
  const [e, n] = ya(), i = z(Ys);
  return F.jsx(Fc, { ...t, layoutGroup: i, switchLayoutGroup: z(Qs), isPresent: e, safeToRemove: n });
}
const _c = {
  borderRadius: {
    ...zt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: zt,
  borderTopRightRadius: zt,
  borderBottomLeftRadius: zt,
  borderBottomRightRadius: zt,
  boxShadow: jc
};
function Ic(t, e, n) {
  const i = G(t) ? t : ie(t);
  return i.start(ei("", i, e, n)), i.animation;
}
function Bc(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Nc = (t, e) => t.depth - e.depth;
class Uc {
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
    this.isDirty && this.children.sort(Nc), this.isDirty = !1, this.children.forEach(e);
  }
}
function $c(t, e) {
  const n = at.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (mt(i), t(o - e));
  };
  return k.read(i, !0), () => mt(i);
}
const co = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Wc = co.length, ms = (t) => typeof t == "string" ? parseFloat(t) : t, gs = (t) => typeof t == "number" || S.test(t);
function Kc(t, e, n, i, s, o) {
  s ? (t.opacity = j(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Gc(i)
  ), t.opacityExit = j(e.opacity !== void 0 ? e.opacity : 1, 0, Yc(i))) : o && (t.opacity = j(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < Wc; r++) {
    const a = `border${co[r]}Radius`;
    let l = ys(e, a), u = ys(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || gs(l) === gs(u) ? (t[a] = Math.max(j(ms(l), ms(u), i), 0), (ot.test(u) || ot.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = j(e.rotate || 0, n.rotate || 0, i));
}
function ys(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Gc = /* @__PURE__ */ fo(0, 0.5, Vr), Yc = /* @__PURE__ */ fo(0.5, 0.95, X);
function fo(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ _t(t, e, i));
}
function vs(t, e) {
  t.min = e.min, t.max = e.max;
}
function tt(t, e) {
  vs(t.x, e.x), vs(t.y, e.y);
}
function xs(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ts(t, e, n, i, s) {
  return t -= e, t = Ve(t, 1 / n, i), s !== void 0 && (t = Ve(t, 1 / s, i)), t;
}
function zc(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (ot.test(e) && (e = parseFloat(e), e = j(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = j(o.min, o.max, i);
  t === o && (a -= e), t.min = Ts(t.min, e, n, a, s), t.max = Ts(t.max, e, n, a, s);
}
function bs(t, e, [n, i, s], o, r) {
  zc(t, e[n], e[i], e[s], e.scale, o, r);
}
const Hc = ["x", "scaleX", "originX"], qc = ["y", "scaleY", "originY"];
function Ps(t, e, n, i) {
  bs(t.x, e, Hc, n ? n.x : void 0, i ? i.x : void 0), bs(t.y, e, qc, n ? n.y : void 0, i ? i.y : void 0);
}
function Ss(t) {
  return t.translate === 0 && t.scale === 1;
}
function ho(t) {
  return Ss(t.x) && Ss(t.y);
}
function ws(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Xc(t, e) {
  return ws(t.x, e.x) && ws(t.y, e.y);
}
function As(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function po(t, e) {
  return As(t.x, e.x) && As(t.y, e.y);
}
function Es(t) {
  return Z(t.x) / Z(t.y);
}
function Cs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Zc {
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
function Jc(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
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
}, Xt = typeof window < "u" && window.MotionDebug !== void 0, nn = ["", "X", "Y", "Z"], Qc = { visibility: "hidden" }, Rs = 1e3;
let tf = 0;
function sn(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function mo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Pr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", k, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && mo(i);
}
function go({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = tf++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Xt && (bt.totalNodes = bt.resolvedTargetDeltas = bt.recalculatedProjection = 0), this.nodes.forEach(sf), this.nodes.forEach(uf), this.nodes.forEach(cf), this.nodes.forEach(rf), Xt && window.MotionDebug.record(bt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Uc());
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
      this.isSVG = Bc(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = $c(d, 250), Pe.hasAnimatedSinceResize && (Pe.hasAnimatedSinceResize = !1, this.nodes.forEach(Ds));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || mf, { onLayoutAnimationStart: b, onLayoutAnimationComplete: v } = c.getProps(), x = !this.targetLayout || !po(this.targetLayout, g) || p, P = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || P || d && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, P);
          const V = {
            ...Nn(y, "layout"),
            onPlay: b,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          d || Ds(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ff), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && mo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
      this.isUpdating || this.nodes.forEach(af), this.isUpdating = !1, this.nodes.forEach(lf), this.nodes.forEach(ef), this.nodes.forEach(nf), this.clearAllSnapshots();
      const a = at.now();
      W.delta = ct(0, 1e3 / 60, a - W.timestamp), W.timestamp = a, W.isProcessing = !0, ze.update.process(W), ze.preRender.process(W), ze.render.process(W), W.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Dn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(of), this.sharedNodes.forEach(hf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, k.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      k.postRender(() => {
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !ho(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || Tt(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), gf(l), {
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
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(yf))) {
        const { scroll: c } = this.root;
        c && (jt(l.x, c.offset.x), jt(l.y, c.offset.y));
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
        c !== this.root && h && d.layoutScroll && (h.wasRoot && tt(l, r), jt(l.x, h.offset.x), jt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = I();
      tt(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Ft(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Tt(c.latestValues) && Ft(l, c.latestValues);
      }
      return Tt(this.latestValues) && Ft(l, this.latestValues), l;
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
        tt(c, h), Ps(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Tt(this.latestValues) && Ps(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== W.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = W.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), te(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = I(), this.targetWithTransforms = I()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), oo(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = I(), this.relativeTargetOrigin = I(), te(this.relativeTargetOrigin, this.target, p.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Xt && bt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Tn(this.parent.latestValues) || ro(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === W.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      Rc(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = I());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xs(this.prevProjectionDelta.x, this.projectionDelta.x), xs(this.prevProjectionDelta.y, this.projectionDelta.y)), Qt(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !Cs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Xt && bt.recalculatedProjection++;
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
      this.prevProjectionDelta = Lt(), this.projectionDelta = Lt(), this.projectionDeltaWithTransform = Lt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = Lt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = I(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, b = this.getStack(), v = !b || b.members.length <= 1, x = !!(y && !v && this.options.crossfade === !0 && !this.path.some(pf));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (V) => {
        const w = V / 1e3;
        Ms(h.x, r.x, w), Ms(h.y, r.y, w), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (te(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), df(this.relativeTarget, this.relativeTargetOrigin, d, w), P && Xc(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = I()), tt(P, this.relativeTarget)), y && (this.animationValues = c, Kc(c, u, this.latestValues, w, x, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = k.update(() => {
        Pe.hasAnimatedSinceResize = !0, this.currentAnimation = Ic(0, Rs, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && yo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || I();
          const h = Z(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = Z(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        tt(a, l), Ft(a, c), Qt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Zc()), this.sharedNodes.get(r).add(a);
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
        return Qc;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Te(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Te(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = Jc(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in we) {
        if (d[y] === void 0)
          continue;
        const { correct: b, applyTo: v } = we[y], x = u.transform === "none" ? d[y] : b(d[y], h);
        if (v) {
          const P = v.length;
          for (let V = 0; V < P; V++)
            u[v[V]] = x;
        } else
          u[y] = x;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? Te(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
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
function ef(t) {
  t.updateLayout();
}
function nf(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(d);
      d.min = i[h].min, d.max = d.min + p;
    }) : yo(o, n.layoutBox, i) && et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(i[h]);
      d.max = d.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + p);
    });
    const a = Lt();
    Qt(a, i, n.layoutBox);
    const l = Lt();
    r ? Qt(l, t.applyTransform(s, !0), n.measuredBox) : Qt(l, i, n.layoutBox);
    const u = !ho(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const g = I();
          te(g, n.layoutBox, d.layoutBox);
          const y = I();
          te(y, i, p.layoutBox), po(g, y) || (c = !0), h.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = g, t.relativeParent = h);
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
function sf(t) {
  Xt && bt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function rf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function of(t) {
  t.clearSnapshot();
}
function Vs(t) {
  t.clearMeasurements();
}
function af(t) {
  t.isLayoutDirty = !1;
}
function lf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ds(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function uf(t) {
  t.resolveTargetDelta();
}
function cf(t) {
  t.calcProjection();
}
function ff(t) {
  t.resetSkewAndRotation();
}
function hf(t) {
  t.removeLeadSnapshot();
}
function Ms(t, e, n) {
  t.translate = j(e.translate, 0, n), t.scale = j(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Os(t, e, n, i) {
  t.min = j(e.min, n.min, i), t.max = j(e.max, n.max, i);
}
function df(t, e, n, i) {
  Os(t.x, e.x, n.x, i), Os(t.y, e.y, n.y, i);
}
function pf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const mf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ks = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ls = ks("applewebkit/") && !ks("chrome/") ? Math.round : X;
function js(t) {
  t.min = Ls(t.min), t.max = Ls(t.max);
}
function gf(t) {
  js(t.x), js(t.y);
}
function yo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !vc(Es(e), Es(n), 0.2);
}
function yf(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const vf = go({
  attachResizeListener: (t, e) => re(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), rn = {
  current: void 0
}, vo = go({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!rn.current) {
      const t = new vf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), rn.current = t;
    }
    return rn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), xf = {
  pan: {
    Feature: Lc
  },
  drag: {
    Feature: kc,
    ProjectionNode: vo,
    MeasureLayout: uo
  }
};
function Fs(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && k.postRender(() => o(e, ue(e)));
}
class Tf extends yt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = vl(e, (n) => (Fs(this.node, n, "Start"), (i) => Fs(this.node, i, "End"))));
  }
  unmount() {
  }
}
class bf extends yt {
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
    this.unmount = le(re(this.node.current, "focus", () => this.onFocus()), re(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function _s(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && k.postRender(() => o(e, ue(e)));
}
class Pf extends yt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Pl(e, (n) => (_s(this.node, n, "Start"), (i, { success: s }) => _s(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Pn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Sf = (t) => {
  const e = Pn.get(t.target);
  e && e(t);
}, wf = (t) => {
  t.forEach(Sf);
};
function Af({ root: t, ...e }) {
  const n = t || document;
  on.has(n) || on.set(n, {});
  const i = on.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(wf, { root: t, ...e })), i[s];
}
function Ef(t, e, n) {
  const i = Af(e);
  return Pn.set(t, n), i.observe(t), () => {
    Pn.delete(t), i.unobserve(t);
  };
}
const Cf = {
  some: 0,
  all: 1
};
class Rf extends yt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Cf[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return Ef(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vf(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Vf({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Df = {
  inView: {
    Feature: Rf
  },
  tap: {
    Feature: Pf
  },
  focus: {
    Feature: bf
  },
  hover: {
    Feature: Tf
  }
}, Mf = {
  layout: {
    ProjectionNode: vo,
    MeasureLayout: uo
  }
}, Sn = { current: null }, xo = { current: !1 };
function Of() {
  if (xo.current = !0, !!An)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Sn.current = t.matches;
      t.addListener(e), e();
    } else
      Sn.current = !1;
}
const kf = [...Wr, K, gt], Lf = (t) => kf.find($r(t)), Is = /* @__PURE__ */ new WeakMap();
function jf(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (G(s))
      t.addValue(i, s), process.env.NODE_ENV === "development" && Oe(s.version === "11.18.2", `Attempting to mix Motion versions ${s.version} with 11.18.2 may not work as expected.`);
    else if (G(o))
      t.addValue(i, ie(s, { owner: t }));
    else if (o !== s)
      if (t.hasValue(i)) {
        const r = t.getValue(i);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = t.getStaticValue(i);
        t.addValue(i, ie(r !== void 0 ? r : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const Bs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ff {
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
      const p = at.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, k.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = je(n), this.isVariantNode = Zs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in d) {
      const g = d[p];
      l[p] !== void 0 && G(g) && g.set(l[p], !1);
    }
  }
  mount(e) {
    this.current = e, Is.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), xo.current || Of(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Sn.current, process.env.NODE_ENV !== "production" && Oe(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Is.delete(this.current), this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
      this.latestValues[e] = a, this.props.onUpdate && k.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let i = 0; i < Bs.length; i++) {
      const s = Bs[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = jf(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return i === void 0 && n !== void 0 && (i = ie(n === null ? void 0 : n, { owner: this }), this.addValue(e, i)), i;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var i;
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Nr(s) || Mr(s)) ? s = parseFloat(s) : !Lf(s) && gt.test(n) && (s = _r(e, n)), this.setBaseTarget(e, G(s) ? s.get() : s)), G(s) ? s.get() : s;
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
      const r = On(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
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
class To extends Ff {
  constructor() {
    super(...arguments), this.KeyframeResolver = Kr;
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
function _f(t) {
  return window.getComputedStyle(t);
}
class If extends To {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = or;
  }
  readValueFromInstance(e, n) {
    if (At.has(n)) {
      const i = Zn(n);
      return i && i.default || 0;
    } else {
      const i = _f(e), s = (ir(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return ao(e, n);
  }
  build(e, n, i) {
    jn(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Bn(e, n, i);
  }
}
class Bf extends To {
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
    return n = ar.has(n) ? n : Vn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return cr(e, n, i);
  }
  build(e, n, i) {
    Fn(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    lr(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = In(e.tagName), super.mount(e);
  }
}
const Nf = (t, e) => Mn(t) ? new Bf(e) : new If(e, {
  allowProjection: t !== $s
}), Uf = /* @__PURE__ */ fl({
  ...uc,
  ...Df,
  ...xf,
  ...Mf
}, Nf), $f = /* @__PURE__ */ Ea(Uf);
function Wf({ message: t, type: e = "bot" }) {
  const n = e === "user";
  return /* @__PURE__ */ F.jsx(
    $f.div,
    {
      className: `p-3 my-2 max-w-[80%] rounded-2xl ${n ? "bg-blue-600 text-white ml-auto" : "bg-gray-200 text-black"}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      children: t
    }
  );
}
function Kf() {
  const { state: t, dispatch: e } = Ks(), [n, i] = an(!1);
  De(() => {
    const o = (r) => {
      const { productId: a, name: l, price: u } = r.detail || {}, c = `✅ Added ${l || "an item"} to your cart for ${u || ""}. Want to checkout?`;
      e({ type: "ADD_MESSAGE", payload: { type: "bot", text: c } }), lt("chatMessage", { text: c, sender: "bot" }), lt("addToCart", { productId: a, name: l, price: u }), i(!0);
    };
    return window.addEventListener("agentic:addToCart", o), () => window.removeEventListener("agentic:addToCart", o);
  }, [e]);
  const s = () => {
    const o = "Redirecting to checkout...";
    e({ type: "ADD_MESSAGE", payload: { type: "bot", text: o } }), lt("chatMessage", { text: o, sender: "bot" }), lt("checkout", { timestamp: Date.now() });
  };
  return /* @__PURE__ */ F.jsx("div", { className: "fixed bottom-5 right-5 z-50 agentic-chat-widget", children: n ? /* @__PURE__ */ F.jsxs("div", { className: "bg-white rounded-2xl shadow-xl w-80 h-96 flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ F.jsxs("div", { className: "agentic-chat-header flex justify-between items-center", children: [
      /* @__PURE__ */ F.jsx("span", { children: "Agentic Assistant" }),
      /* @__PURE__ */ F.jsx("button", { onClick: () => i(!1), children: "✕" })
    ] }),
    /* @__PURE__ */ F.jsx("div", { className: "flex-1 overflow-y-auto p-3", children: t.messages.map((o, r) => /* @__PURE__ */ F.jsx(Wf, { message: o.text, type: o.type }, r)) }),
    /* @__PURE__ */ F.jsx("div", { className: "border-t p-2 text-center", children: /* @__PURE__ */ F.jsx(
      "button",
      {
        className: "bg-[var(--agentic-primary)] text-white px-4 py-2 rounded-lg w-full",
        onClick: s,
        children: "Proceed to Checkout"
      }
    ) })
  ] }) : /* @__PURE__ */ F.jsx(
    "button",
    {
      className: "bg-[var(--agentic-primary)] text-white p-4 rounded-full shadow-lg",
      onClick: () => i(!0),
      children: "💬"
    }
  ) });
}
function Gf(t = {}) {
  ha(t);
  const e = document.createElement("div");
  document.body.appendChild(e), la.createRoot(e).render(
    /* @__PURE__ */ F.jsxs(fa, { children: [
      /* @__PURE__ */ F.jsx(ma, {}),
      /* @__PURE__ */ F.jsx(Kf, {})
    ] })
  );
}
window.AgenticAI = { init: Gf, on: pa, emit: lt };
export {
  Gf as init
};
