import _s, { createContext as St, useContext as z, useReducer as Go, useState as Is, useRef as ye, useId as Yo, useEffect as Re, useCallback as Bs, useLayoutEffect as zo, useMemo as Ve, useInsertionEffect as Ho, forwardRef as qo, Fragment as Ns, createElement as Xo, Component as Zo } from "react";
import Jo from "react-dom";
function Qo(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var de = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function ta() {
  if (yi) return Kt;
  yi = 1;
  var t = _s, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, u) {
    var c, h = {}, d = null, p = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l) i.call(l, c) && !o.hasOwnProperty(c) && (h[c] = l[c]);
    if (a && a.defaultProps) for (c in l = a.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: p, props: h, _owner: s.current };
  }
  return Kt.Fragment = n, Kt.jsx = r, Kt.jsxs = r, Kt;
}
var Gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi;
function ea() {
  return vi || (vi = 1, process.env.NODE_ENV !== "production" && (function() {
    var t = _s, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function b(f) {
      if (f === null || typeof f != "object")
        return null;
      var m = g && f[g] || f[y];
      return typeof m == "function" ? m : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), A = 1; A < m; A++)
          x[A - 1] = arguments[A];
        P("error", f, x);
      }
    }
    function P(f, m, x) {
      {
        var A = v.ReactDebugCurrentFrame, D = A.getStackAddendum();
        D !== "" && (m += "%s", x = x.concat([D]));
        var O = x.map(function(R) {
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
    function ct(f, m, x) {
      var A = f.displayName;
      if (A)
        return A;
      var D = m.displayName || m.name || "";
      return D !== "" ? x + "(" + D + ")" : x;
    }
    function $t(f) {
      return f.displayName || "Context";
    }
    function it(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
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
            return $t(m) + ".Consumer";
          case r:
            var x = f;
            return $t(x._context) + ".Provider";
          case l:
            return ct(f, f.render, "ForwardRef");
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
    var st = Object.assign, At = 0, Fe, U, J, Et, Ct, Qn, ti;
    function ei() {
    }
    ei.__reactDisabledLog = !0;
    function vo() {
      {
        if (At === 0) {
          Fe = console.log, U = console.info, J = console.warn, Et = console.error, Ct = console.group, Qn = console.groupCollapsed, ti = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: ei,
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
        At++;
      }
    }
    function To() {
      {
        if (At--, At === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: st({}, f, {
              value: Fe
            }),
            info: st({}, f, {
              value: U
            }),
            warn: st({}, f, {
              value: J
            }),
            error: st({}, f, {
              value: Et
            }),
            group: st({}, f, {
              value: Ct
            }),
            groupCollapsed: st({}, f, {
              value: Qn
            }),
            groupEnd: st({}, f, {
              value: ti
            })
          });
        }
        At < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = v.ReactCurrentDispatcher, Ie;
    function ue(f, m, x) {
      {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (D) {
            var A = D.stack.trim().match(/\n( *(at )?)/);
            Ie = A && A[1] || "";
          }
        return `
` + Ie + f;
      }
    }
    var Be = !1, ce;
    {
      var xo = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new xo();
    }
    function ni(f, m) {
      if (!f || Be)
        return "";
      {
        var x = ce.get(f);
        if (x !== void 0)
          return x;
      }
      var A;
      Be = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = _e.current, _e.current = null, vo();
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
`), F = C.length - 1, I = Y.length - 1; F >= 1 && I >= 0 && C[F] !== Y[I]; )
            I--;
          for (; F >= 1 && I >= 0; F--, I--)
            if (C[F] !== Y[I]) {
              if (F !== 1 || I !== 1)
                do
                  if (F--, I--, I < 0 || C[F] !== Y[I]) {
                    var Q = `
` + C[F].replace(" at new ", " at ");
                    return f.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", f.displayName)), typeof f == "function" && ce.set(f, Q), Q;
                  }
                while (F >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        Be = !1, _e.current = O, To(), Error.prepareStackTrace = D;
      }
      var Vt = f ? f.displayName || f.name : "", yt = Vt ? ue(Vt) : "";
      return typeof f == "function" && ce.set(f, yt), yt;
    }
    function bo(f, m, x) {
      return ni(f, !1);
    }
    function Po(f) {
      var m = f.prototype;
      return !!(m && m.isReactComponent);
    }
    function fe(f, m, x) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return ni(f, Po(f));
      if (typeof f == "string")
        return ue(f);
      switch (f) {
        case u:
          return ue("Suspense");
        case c:
          return ue("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return bo(f.render);
          case h:
            return fe(f.type, m, x);
          case d: {
            var A = f, D = A._payload, O = A._init;
            try {
              return fe(O(D), m, x);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, ii = {}, si = v.ReactDebugCurrentFrame;
    function he(f) {
      if (f) {
        var m = f._owner, x = fe(f.type, f._source, m ? m.type : null);
        si.setExtraStackFrame(x);
      } else
        si.setExtraStackFrame(null);
    }
    function So(f, m, x, A, D) {
      {
        var O = Function.call.bind(Wt);
        for (var R in f)
          if (O(f, R)) {
            var C = void 0;
            try {
              if (typeof f[R] != "function") {
                var Y = Error((A || "React class") + ": " + x + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              C = f[R](m, R, A, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              C = F;
            }
            C && !(C instanceof Error) && (he(D), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", x, R, typeof C), he(null)), C instanceof Error && !(C.message in ii) && (ii[C.message] = !0, he(D), T("Failed %s type: %s", x, C.message), he(null));
          }
      }
    }
    var wo = Array.isArray;
    function Ne(f) {
      return wo(f);
    }
    function Ao(f) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, x = m && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return x;
      }
    }
    function Eo(f) {
      try {
        return ri(f), !1;
      } catch {
        return !0;
      }
    }
    function ri(f) {
      return "" + f;
    }
    function oi(f) {
      if (Eo(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ao(f)), ri(f);
    }
    var ai = v.ReactCurrentOwner, Co = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, li, ui;
    function Ro(f) {
      if (Wt.call(f, "ref")) {
        var m = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Vo(f) {
      if (Wt.call(f, "key")) {
        var m = Object.getOwnPropertyDescriptor(f, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Do(f, m) {
      typeof f.ref == "string" && ai.current;
    }
    function Mo(f, m) {
      {
        var x = function() {
          li || (li = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Oo(f, m) {
      {
        var x = function() {
          ui || (ui = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        x.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Lo = function(f, m, x, A, D, O, R) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: m,
        ref: x,
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
    function jo(f, m, x, A, D) {
      {
        var O, R = {}, C = null, Y = null;
        x !== void 0 && (oi(x), C = "" + x), Vo(m) && (oi(m.key), C = "" + m.key), Ro(m) && (Y = m.ref, Do(m, D));
        for (O in m)
          Wt.call(m, O) && !Co.hasOwnProperty(O) && (R[O] = m[O]);
        if (f && f.defaultProps) {
          var F = f.defaultProps;
          for (O in F)
            R[O] === void 0 && (R[O] = F[O]);
        }
        if (C || Y) {
          var I = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          C && Mo(R, I), Y && Oo(R, I);
        }
        return Lo(f, C, Y, D, A, ai.current, R);
      }
    }
    var Ue = v.ReactCurrentOwner, ci = v.ReactDebugCurrentFrame;
    function Rt(f) {
      if (f) {
        var m = f._owner, x = fe(f.type, f._source, m ? m.type : null);
        ci.setExtraStackFrame(x);
      } else
        ci.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function We(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function fi() {
      {
        if (Ue.current) {
          var f = it(Ue.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function ko(f) {
      return "";
    }
    var hi = {};
    function Fo(f) {
      {
        var m = fi();
        if (!m) {
          var x = typeof f == "string" ? f : f.displayName || f.name;
          x && (m = `

Check the top-level render call using <` + x + ">.");
        }
        return m;
      }
    }
    function di(f, m) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var x = Fo(m);
        if (hi[x])
          return;
        hi[x] = !0;
        var A = "";
        f && f._owner && f._owner !== Ue.current && (A = " It was passed a child from " + it(f._owner.type) + "."), Rt(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, A), Rt(null);
      }
    }
    function pi(f, m) {
      {
        if (typeof f != "object")
          return;
        if (Ne(f))
          for (var x = 0; x < f.length; x++) {
            var A = f[x];
            We(A) && di(A, m);
          }
        else if (We(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var D = b(f);
          if (typeof D == "function" && D !== f.entries)
            for (var O = D.call(f), R; !(R = O.next()).done; )
              We(R.value) && di(R.value, m);
        }
      }
    }
    function _o(f) {
      {
        var m = f.type;
        if (m == null || typeof m == "string")
          return;
        var x;
        if (typeof m == "function")
          x = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          x = m.propTypes;
        else
          return;
        if (x) {
          var A = it(m);
          So(x, f.props, "prop", A, f);
        } else if (m.PropTypes !== void 0 && !$e) {
          $e = !0;
          var D = it(m);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Io(f) {
      {
        for (var m = Object.keys(f.props), x = 0; x < m.length; x++) {
          var A = m[x];
          if (A !== "children" && A !== "key") {
            Rt(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), Rt(null);
            break;
          }
        }
        f.ref !== null && (Rt(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
      }
    }
    var mi = {};
    function gi(f, m, x, A, D, O) {
      {
        var R = H(f);
        if (!R) {
          var C = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = ko();
          Y ? C += Y : C += fi();
          var F;
          f === null ? F = "null" : Ne(f) ? F = "array" : f !== void 0 && f.$$typeof === e ? (F = "<" + (it(f.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : F = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, C);
        }
        var I = jo(f, m, x, D, O);
        if (I == null)
          return I;
        if (R) {
          var Q = m.children;
          if (Q !== void 0)
            if (A)
              if (Ne(Q)) {
                for (var Vt = 0; Vt < Q.length; Vt++)
                  pi(Q[Vt], f);
                Object.freeze && Object.freeze(Q);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pi(Q, f);
        }
        if (Wt.call(m, "key")) {
          var yt = it(f), q = Object.keys(m).filter(function(Ko) {
            return Ko !== "key";
          }), Ke = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mi[yt + Ke]) {
            var Wo = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, yt, Wo, yt), mi[yt + Ke] = !0;
          }
        }
        return f === i ? Io(I) : _o(I), I;
      }
    }
    function Bo(f, m, x) {
      return gi(f, m, x, !0);
    }
    function No(f, m, x) {
      return gi(f, m, x, !1);
    }
    var Uo = No, $o = Bo;
    Gt.Fragment = i, Gt.jsx = Uo, Gt.jsxs = $o;
  })()), Gt;
}
var Ti;
function na() {
  return Ti || (Ti = 1, process.env.NODE_ENV === "production" ? de.exports = ta() : de.exports = ea()), de.exports;
}
var B = na(), Dt = {}, xi;
function ia() {
  if (xi) return Dt;
  xi = 1;
  var t = Jo;
  if (process.env.NODE_ENV === "production")
    Dt.createRoot = t.createRoot, Dt.hydrateRoot = t.hydrateRoot;
  else {
    var e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Dt.createRoot = function(n, i) {
      e.usingClientEntryPoint = !0;
      try {
        return t.createRoot(n, i);
      } finally {
        e.usingClientEntryPoint = !1;
      }
    }, Dt.hydrateRoot = function(n, i, s) {
      e.usingClientEntryPoint = !0;
      try {
        return t.hydrateRoot(n, i, s);
      } finally {
        e.usingClientEntryPoint = !1;
      }
    };
  }
  return Dt;
}
var sa = ia();
const ra = /* @__PURE__ */ Qo(sa), Us = St(), oa = {
  messages: [],
  context: { trip: null, cabin: null, user: null }
};
function aa(t, e) {
  switch (e.type) {
    case "ADD_MESSAGE":
      return { ...t, messages: [...t.messages, e.payload] };
    case "SET_CONTEXT":
      return { ...t, context: { ...t.context, ...e.payload } };
    default:
      return t;
  }
}
function la({ children: t }) {
  const [e, n] = Go(aa, oa);
  return /* @__PURE__ */ B.jsx(Us.Provider, { value: { state: e, dispatch: n }, children: t });
}
const $s = () => z(Us);
let ft = {
  apiBaseUrl: "",
  merchantId: "",
  chatTheme: "light",
  env: "production",
  customCssUrl: null
};
function ua(t = {}) {
  if (ft = { ...ft, ...t }, window.AgenticAIConfig && (ft = { ...ft, ...window.AgenticAIConfig }), ft.customCssUrl) {
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = ft.customCssUrl, document.head.appendChild(e);
  } else
    Promise.resolve({                     });
  return Promise.resolve({                }), ft;
}
function ca() {
  return ft;
}
function fa() {
  const { state: t, dispatch: e } = $s(), [n, i] = Is(""), { apiBaseUrl: s } = ca(), o = async () => {
    if (!n.trim()) return;
    e({ type: "ADD_MESSAGE", payload: { type: "user", text: n } }), i("");
    const a = await (await fetch(`${s}/agentic-chat/respond`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: n, context: t.context })
    })).json();
    e({ type: "ADD_MESSAGE", payload: { type: "bot", text: a.reply } });
  };
  return /* @__PURE__ */ B.jsx("div", { className: "agentic-inline-chat", children: /* @__PURE__ */ B.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ B.jsx(
      "input",
      {
        className: "agentic-input",
        placeholder: "Ask something...",
        value: n,
        onChange: (r) => i(r.target.value),
        onKeyDown: (r) => r.key === "Enter" && o()
      }
    ),
    /* @__PURE__ */ B.jsx("button", { onClick: o, className: "bg-[var(--agentic-primary)] text-white px-4 rounded-lg", children: "Ask" })
  ] }) });
}
const Ws = St({});
function ha(t) {
  const e = ye(null);
  return e.current === null && (e.current = t()), e.current;
}
const bn = St(null), Ks = St({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function da(t = !0) {
  const e = z(bn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: i, register: s } = e, o = Yo();
  Re(() => {
    t && s(o);
  }, [t]);
  const r = Bs(() => t && i && i(o), [o, i, t]);
  return !n && i ? [!1, r] : [!0];
}
const Pn = typeof window < "u", pa = Pn ? zo : Re, X = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let Bt = X, dt = X;
process.env.NODE_ENV !== "production" && (Bt = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, dt = (t, e) => {
  if (!t)
    throw new Error(e);
});
// @__NO_SIDE_EFFECTS__
function Sn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Ft = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const i = e - t;
  return i === 0 ? 1 : (n - t) / i;
}, rt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, lt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, ma = {
  useManualTiming: !1
};
function ga(t) {
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
const pe = [
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
], ya = 40;
function Gs(t, e) {
  let n = !1, i = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = pe.reduce((v, T) => (v[T] = ga(o), v), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: d } = r, p = () => {
    const v = performance.now();
    n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, ya), 1), s.timestamp = v, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), h.process(s), d.process(s), s.isProcessing = !1, n && e && (i = !1, t(p));
  }, g = () => {
    n = !0, i = !0, s.isProcessing || t(p);
  };
  return { schedule: pe.reduce((v, T) => {
    const P = r[T];
    return v[T] = (V, w = !1, M = !1) => (n || g(), P.schedule(V, w, M)), v;
  }, {}), cancel: (v) => {
    for (let T = 0; T < pe.length; T++)
      r[pe[T]].cancel(v);
  }, state: s, steps: r };
}
const { schedule: L, cancel: pt, state: W, steps: Ge } = Gs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0), Ys = St({ strict: !1 }), bi = {
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
}, _t = {};
for (const t in bi)
  _t[t] = {
    isEnabled: (e) => bi[t].some((n) => !!e[n])
  };
function va(t) {
  for (const e in t)
    _t[e] = {
      ..._t[e],
      ...t[e]
    };
}
const Ta = /* @__PURE__ */ new Set([
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
function be(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Ta.has(t);
}
let zs = (t) => !be(t);
function xa(t) {
  t && (zs = (e) => e.startsWith("on") ? !be(e) : t(e));
}
try {
  xa(require("@emotion/is-prop-valid").default);
} catch {
}
function ba(t, e, n) {
  const i = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (zs(s) || n === !0 && be(s) || !e && !be(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
  return i;
}
const Pi = /* @__PURE__ */ new Set();
function De(t, e, n) {
  t || Pi.has(e) || (console.warn(e), Pi.add(e));
}
function Pa(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...i) => (process.env.NODE_ENV !== "production" && De(!1, "motion() is deprecated. Use motion.create() instead."), t(...i));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
  });
}
const Me = St({});
function te(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Oe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const wn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], An = ["initial", ...wn];
function Le(t) {
  return Oe(t.animate) || An.some((e) => te(t[e]));
}
function Hs(t) {
  return !!(Le(t) || t.variants);
}
function Sa(t, e) {
  if (Le(t)) {
    const { initial: n, animate: i } = t;
    return {
      initial: n === !1 || te(n) ? n : void 0,
      animate: te(i) ? i : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function wa(t) {
  const { initial: e, animate: n } = Sa(t, z(Me));
  return Ve(() => ({ initial: e, animate: n }), [Si(e), Si(n)]);
}
function Si(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Aa = Symbol.for("motionComponentSymbol");
function Mt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Ea(t, e, n) {
  return Bs(
    (i) => {
      i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : Mt(n) && (n.current = i));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const En = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ca = "framerAppearId", qs = "data-" + En(Ca), { schedule: Cn } = Gs(queueMicrotask, !1), Xs = St({});
function Ra(t, e, n, i, s) {
  var o, r;
  const { visualElement: a } = z(Me), l = z(Ys), u = z(bn), c = z(Ks).reducedMotion, h = ye(null);
  i = i || l.renderer, !h.current && i && (h.current = i(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = h.current, p = z(Xs);
  d && !d.projection && s && (d.type === "html" || d.type === "svg") && Va(h.current, n, s, p);
  const g = ye(!1);
  Ho(() => {
    d && g.current && d.update(n, u);
  });
  const y = n[qs], b = ye(!!y && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, y)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, y)));
  return pa(() => {
    d && (g.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Cn.render(d.render), b.current && d.animationState && d.animationState.animateChanges());
  }), Re(() => {
    d && (!b.current && d.animationState && d.animationState.animateChanges(), b.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) === null || v === void 0 || v.call(window, y);
    }), b.current = !1));
  }), d;
}
function Va(t, e, n, i) {
  const { layoutId: s, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Zs(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!r || a && Mt(a),
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
function Zs(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Zs(t.parent);
}
function Da({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: s }) {
  var o, r;
  t && va(t);
  function a(u, c) {
    let h;
    const d = {
      ...z(Ks),
      ...u,
      layoutId: Ma(u)
    }, { isStatic: p } = d, g = wa(u), y = i(u, p);
    if (!p && Pn) {
      Oa(d, t);
      const b = La(d);
      h = b.MeasureLayout, g.visualElement = Ra(s, y, d, e, b.ProjectionNode);
    }
    return B.jsxs(Me.Provider, { value: g, children: [h && g.visualElement ? B.jsx(h, { visualElement: g.visualElement, ...d }) : null, n(s, u, Ea(y, g.visualElement, c), y, p, g.visualElement)] });
  }
  a.displayName = `motion.${typeof s == "string" ? s : `create(${(r = (o = s.displayName) !== null && o !== void 0 ? o : s.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = qo(a);
  return l[Aa] = s, l;
}
function Ma({ layoutId: t }) {
  const e = z(Ws).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Oa(t, e) {
  const n = z(Ys).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const i = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Bt(!1, i) : dt(!1, i);
  }
}
function La(t) {
  const { drag: e, layout: n } = _t;
  if (!e && !n)
    return {};
  const i = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
    ProjectionNode: i.ProjectionNode
  };
}
const ja = [
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
function Rn(t) {
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
      !!(ja.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function wi(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, i) => {
    e[0][i] = n.get(), e[1][i] = n.getVelocity();
  }), e;
}
function Vn(t, e, n, i) {
  if (typeof e == "function") {
    const [s, o] = wi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, o] = wi(i);
    e = e(n !== void 0 ? n : t.custom, s, o);
  }
  return e;
}
const rn = (t) => Array.isArray(t), ka = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Fa = (t) => rn(t) ? t[t.length - 1] || 0 : t, G = (t) => !!(t && t.getVelocity);
function ve(t) {
  const e = G(t) ? t.get() : t;
  return ka(e) ? e.toValue() : e;
}
function _a({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, i, s, o) {
  const r = {
    latestValues: Ia(i, s, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: i, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Js = (t) => (e, n) => {
  const i = z(Me), s = z(bn), o = () => _a(t, e, i, s);
  return n ? o() : ha(o);
};
function Ia(t, e, n, i) {
  const s = {}, o = i(t, {});
  for (const d in o)
    s[d] = ve(o[d]);
  let { initial: r, animate: a } = t;
  const l = Le(t), u = Hs(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Oe(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const g = Vn(t, d[p]);
      if (g) {
        const { transitionEnd: y, transition: b, ...v } = g;
        for (const T in v) {
          let P = v[T];
          if (Array.isArray(P)) {
            const V = c ? P.length - 1 : 0;
            P = P[V];
          }
          P !== null && (s[T] = P);
        }
        for (const T in y)
          s[T] = y[T];
      }
    }
  }
  return s;
}
const Nt = [
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
], wt = new Set(Nt), Qs = (t) => (e) => typeof e == "string" && e.startsWith(t), tr = /* @__PURE__ */ Qs("--"), Ba = /* @__PURE__ */ Qs("var(--"), Dn = (t) => Ba(t) ? Na.test(t.split("/*")[0].trim()) : !1, Na = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, er = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ut = (t, e, n) => n > e ? e : n < t ? t : n, Ut = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ee = {
  ...Ut,
  transform: (t) => ut(0, 1, t)
}, me = {
  ...Ut,
  default: 1
}, re = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ht = /* @__PURE__ */ re("deg"), ot = /* @__PURE__ */ re("%"), S = /* @__PURE__ */ re("px"), Ua = /* @__PURE__ */ re("vh"), $a = /* @__PURE__ */ re("vw"), Ai = {
  ...ot,
  parse: (t) => ot.parse(t) / 100,
  transform: (t) => ot.transform(t * 100)
}, Wa = {
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
}, Ka = {
  rotate: ht,
  rotateX: ht,
  rotateY: ht,
  rotateZ: ht,
  scale: me,
  scaleX: me,
  scaleY: me,
  scaleZ: me,
  skew: ht,
  skewX: ht,
  skewY: ht,
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
  originX: Ai,
  originY: Ai,
  originZ: S
}, Ei = {
  ...Ut,
  transform: Math.round
}, Mn = {
  ...Wa,
  ...Ka,
  zIndex: Ei,
  size: S,
  // SVG
  fillOpacity: ee,
  strokeOpacity: ee,
  numOctaves: Ei
}, Ga = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Ya = Nt.length;
function za(t, e, n) {
  let i = "", s = !0;
  for (let o = 0; o < Ya; o++) {
    const r = Nt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = er(a, Mn[r]);
      if (!l) {
        s = !1;
        const c = Ga[r] || r;
        i += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i;
}
function On(t, e, n) {
  const { style: i, vars: s, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (wt.has(l)) {
      r = !0;
      continue;
    } else if (tr(l)) {
      s[l] = u;
      continue;
    } else {
      const c = er(u, Mn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : i[l] = c;
    }
  }
  if (e.transform || (r || n ? i.transform = za(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    i.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Ha = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, qa = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Xa(t, e, n = 1, i = 0, s = !0) {
  t.pathLength = 1;
  const o = s ? Ha : qa;
  t[o.offset] = S.transform(-i);
  const r = S.transform(e), a = S.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Ci(t, e, n) {
  return typeof t == "string" ? t : S.transform(e + n * t);
}
function Za(t, e, n) {
  const i = Ci(e, t.x, t.width), s = Ci(n, t.y, t.height);
  return `${i} ${s}`;
}
function Ln(t, {
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
  if (On(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: p, dimensions: g } = t;
  d.transform && (g && (p.transform = d.transform), delete d.transform), g && (s !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = Za(g, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), i !== void 0 && (d.scale = i), r !== void 0 && Xa(d, r, a, l, !1);
}
const jn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), nr = () => ({
  ...jn(),
  attrs: {}
}), kn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ir(t, { style: e, vars: n }, i, s) {
  Object.assign(t.style, e, s && s.getProjectionStyles(i));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const sr = /* @__PURE__ */ new Set([
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
function rr(t, e, n, i) {
  ir(t, e, void 0, i);
  for (const s in e.attrs)
    t.setAttribute(sr.has(s) ? s : En(s), e.attrs[s]);
}
const Pe = {};
function Ja(t) {
  Object.assign(Pe, t);
}
function or(t, { layout: e, layoutId: n }) {
  return wt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Pe[t] || t === "opacity");
}
function Fn(t, e, n) {
  var i;
  const { style: s } = t, o = {};
  for (const r in s)
    (G(s[r]) || e.style && G(e.style[r]) || or(r, t) || ((i = n == null ? void 0 : n.getValue(r)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (o[r] = s[r]);
  return o;
}
function ar(t, e, n) {
  const i = Fn(t, e, n);
  for (const s in t)
    if (G(t[s]) || G(e[s])) {
      const o = Nt.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      i[o] = t[s];
    }
  return i;
}
function Qa(t, e) {
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
const Ri = ["x", "y", "width", "height", "cx", "cy", "r"], tl = {
  useVisualState: Js({
    scrapeMotionValuesFromProps: ar,
    createRenderState: nr,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: i, latestValues: s }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in s)
          if (wt.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < Ri.length; a++) {
          const l = Ri[a];
          t[l] !== e[l] && (r = !0);
        }
      r && L.read(() => {
        Qa(n, i), L.render(() => {
          Ln(i, s, kn(n.tagName), t.transformTemplate), rr(n, i);
        });
      });
    }
  })
}, el = {
  useVisualState: Js({
    scrapeMotionValuesFromProps: Fn,
    createRenderState: jn
  })
};
function lr(t, e, n) {
  for (const i in e)
    !G(e[i]) && !or(i, n) && (t[i] = e[i]);
}
function nl({ transformTemplate: t }, e) {
  return Ve(() => {
    const n = jn();
    return On(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function il(t, e) {
  const n = t.style || {}, i = {};
  return lr(i, n, t), Object.assign(i, nl(t, e)), i;
}
function sl(t, e) {
  const n = {}, i = il(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n;
}
function rl(t, e, n, i) {
  const s = Ve(() => {
    const o = nr();
    return Ln(o, e, kn(i), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    lr(o, t.style, t), s.style = { ...o, ...s.style };
  }
  return s;
}
function ol(t = !1) {
  return (n, i, s, { latestValues: o }, r) => {
    const l = (Rn(n) ? rl : sl)(i, o, r, n), u = ba(i, typeof n == "string", t), c = n !== Ns ? { ...u, ...l, ref: s } : {}, { children: h } = i, d = Ve(() => G(h) ? h.get() : h, [h]);
    return Xo(n, {
      ...c,
      children: d
    });
  };
}
function al(t, e) {
  return function(i, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const r = {
      ...Rn(i) ? tl : el,
      preloadedFeatures: t,
      useRender: ol(s),
      createVisualElement: e,
      Component: i
    };
    return Da(r);
  };
}
function ur(t, e) {
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
function je(t, e, n) {
  const i = t.getProps();
  return Vn(i, e, n !== void 0 ? n : i.custom, t);
}
const ll = /* @__PURE__ */ Sn(() => window.ScrollTimeline !== void 0);
class ul {
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
      if (ll() && s.attachTimeline)
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
class cl extends ul {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function _n(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const on = 2e4;
function cr(t) {
  let e = 0;
  const n = 50;
  let i = t.next(e);
  for (; !i.done && e < on; )
    e += n, i = t.next(e);
  return e >= on ? 1 / 0 : e;
}
function In(t) {
  return typeof t == "function";
}
function Vi(t, e) {
  t.timeline = e, t.onfinish = null;
}
const Bn = (t) => Array.isArray(t) && typeof t[0] == "number", fl = {
  linearEasing: void 0
};
function hl(t, e) {
  const n = /* @__PURE__ */ Sn(t);
  return () => {
    var i;
    return (i = fl[e]) !== null && i !== void 0 ? i : n();
  };
}
const Se = /* @__PURE__ */ hl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), fr = (t, e, n = 10) => {
  let i = "";
  const s = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < s; o++)
    i += t(/* @__PURE__ */ Ft(0, s - 1, o)) + ", ";
  return `linear(${i.substring(0, i.length - 2)})`;
};
function hr(t) {
  return !!(typeof t == "function" && Se() || !t || typeof t == "string" && (t in an || Se()) || Bn(t) || Array.isArray(t) && t.every(hr));
}
const zt = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`, an = {
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
function dr(t, e) {
  if (t)
    return typeof t == "function" && Se() ? fr(t, e) : Bn(t) ? zt(t) : Array.isArray(t) ? t.map((n) => dr(n, e) || an.easeOut) : an[t];
}
const nt = {
  x: !1,
  y: !1
};
function pr() {
  return nt.x || nt.y;
}
function dl(t, e, n) {
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
function mr(t, e) {
  const n = dl(t), i = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: i.signal
  };
  return [n, s, () => i.abort()];
}
function Di(t) {
  return (e) => {
    e.pointerType === "touch" || pr() || t(e);
  };
}
function pl(t, e, n = {}) {
  const [i, s, o] = mr(t, n), r = Di((a) => {
    const { target: l } = a, u = e(a);
    if (typeof u != "function" || !l)
      return;
    const c = Di((h) => {
      u(h), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, s);
  });
  return i.forEach((a) => {
    a.addEventListener("pointerenter", r, s);
  }), o;
}
const gr = (t, e) => e ? t === e ? !0 : gr(t, e.parentElement) : !1, Nn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, ml = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function gl(t) {
  return ml.has(t.tagName) || t.tabIndex !== -1;
}
const Ht = /* @__PURE__ */ new WeakSet();
function Mi(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Ye(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const yl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const i = Mi(() => {
    if (Ht.has(n))
      return;
    Ye(n, "down");
    const s = Mi(() => {
      Ye(n, "up");
    }), o = () => Ye(n, "cancel");
    n.addEventListener("keyup", s, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e);
};
function Oi(t) {
  return Nn(t) && !pr();
}
function vl(t, e, n = {}) {
  const [i, s, o] = mr(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!Oi(a) || Ht.has(l))
      return;
    Ht.add(l);
    const u = e(a), c = (p, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!Oi(p) || !Ht.has(l)) && (Ht.delete(l), typeof u == "function" && u(p, { success: g }));
    }, h = (p) => {
      c(p, n.useGlobalTarget || gr(l, p.target));
    }, d = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", d, s);
  };
  return i.forEach((a) => {
    !gl(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, s), a.addEventListener("focus", (u) => yl(u, s), s);
  }), o;
}
function Tl(t) {
  return t === "x" || t === "y" ? nt[t] ? null : (nt[t] = !0, () => {
    nt[t] = !1;
  }) : nt.x || nt.y ? null : (nt.x = nt.y = !0, () => {
    nt.x = nt.y = !1;
  });
}
const yr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Nt
]);
let Te;
function xl() {
  Te = void 0;
}
const at = {
  now: () => (Te === void 0 && at.set(W.isProcessing || ma.useManualTiming ? W.timestamp : performance.now()), Te),
  set: (t) => {
    Te = t, queueMicrotask(xl);
  }
};
function Un(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function $n(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Wn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Un(this.subscriptions, e), () => $n(this.subscriptions, e);
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
function vr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Li = 30, bl = (t) => !isNaN(parseFloat(t));
class Pl {
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
    this.current = e, this.updatedAt = at.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = bl(this.current));
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
    return process.env.NODE_ENV !== "production" && De(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Wn());
    const i = this.events[e].add(n);
    return e === "change" ? () => {
      i(), L.read(() => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Li)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Li);
    return vr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new Pl(t, e);
}
function Sl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ne(n));
}
function wl(t, e) {
  const n = je(t, e);
  let { transitionEnd: i = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...i };
  for (const r in o) {
    const a = Fa(o[r]);
    Sl(t, r, a);
  }
}
function Al(t) {
  return !!(G(t) && t.add);
}
function ln(t, e) {
  const n = t.getValue("willChange");
  if (Al(n))
    return n.add(e);
}
function Tr(t) {
  return t.props[qs];
}
const xr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, El = 1e-7, Cl = 12;
function Rl(t, e, n, i, s) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = xr(r, i, s) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > El && ++a < Cl);
  return r;
}
function oe(t, e, n, i) {
  if (t === e && n === i)
    return X;
  const s = (o) => Rl(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : xr(s(o), e, i);
}
const br = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Pr = (t) => (e) => 1 - t(1 - e), Sr = /* @__PURE__ */ oe(0.33, 1.53, 0.69, 0.99), Kn = /* @__PURE__ */ Pr(Sr), wr = /* @__PURE__ */ br(Kn), Ar = (t) => (t *= 2) < 1 ? 0.5 * Kn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Gn = (t) => 1 - Math.sin(Math.acos(t)), Er = Pr(Gn), Cr = br(Gn), Rr = (t) => /^0[^.\s]+$/u.test(t);
function Vl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Rr(t) : !0;
}
const Xt = (t) => Math.round(t * 1e5) / 1e5, Yn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Dl(t) {
  return t == null;
}
const Ml = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, zn = (t, e) => (n) => !!(typeof n == "string" && Ml.test(n) && n.startsWith(t) || e && !Dl(n) && Object.prototype.hasOwnProperty.call(n, e)), Vr = (t, e, n) => (i) => {
  if (typeof i != "string")
    return i;
  const [s, o, r, a] = i.match(Yn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ol = (t) => ut(0, 255, t), ze = {
  ...Ut,
  transform: (t) => Math.round(Ol(t))
}, bt = {
  test: /* @__PURE__ */ zn("rgb", "red"),
  parse: /* @__PURE__ */ Vr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: i = 1 }) => "rgba(" + ze.transform(t) + ", " + ze.transform(e) + ", " + ze.transform(n) + ", " + Xt(ee.transform(i)) + ")"
};
function Ll(t) {
  let e = "", n = "", i = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(i, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const un = {
  test: /* @__PURE__ */ zn("#"),
  parse: Ll,
  transform: bt.transform
}, Ot = {
  test: /* @__PURE__ */ zn("hsl", "hue"),
  parse: /* @__PURE__ */ Vr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + ot.transform(Xt(e)) + ", " + ot.transform(Xt(n)) + ", " + Xt(ee.transform(i)) + ")"
}, K = {
  test: (t) => bt.test(t) || un.test(t) || Ot.test(t),
  parse: (t) => bt.test(t) ? bt.parse(t) : Ot.test(t) ? Ot.parse(t) : un.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? bt.transform(t) : Ot.transform(t)
}, jl = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function kl(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Yn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(jl)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Dr = "number", Mr = "color", Fl = "var", _l = "var(", ji = "${}", Il = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ie(t) {
  const e = t.toString(), n = [], i = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const a = e.replace(Il, (l) => (K.test(l) ? (i.color.push(o), s.push(Mr), n.push(K.parse(l))) : l.startsWith(_l) ? (i.var.push(o), s.push(Fl), n.push(l)) : (i.number.push(o), s.push(Dr), n.push(parseFloat(l))), ++o, ji)).split(ji);
  return { values: n, split: a, indexes: i, types: s };
}
function Or(t) {
  return ie(t).values;
}
function Lr(t) {
  const { split: e, types: n } = ie(t), i = e.length;
  return (s) => {
    let o = "";
    for (let r = 0; r < i; r++)
      if (o += e[r], s[r] !== void 0) {
        const a = n[r];
        a === Dr ? o += Xt(s[r]) : a === Mr ? o += K.transform(s[r]) : o += s[r];
      }
    return o;
  };
}
const Bl = (t) => typeof t == "number" ? 0 : t;
function Nl(t) {
  const e = Or(t);
  return Lr(t)(e.map(Bl));
}
const mt = {
  test: kl,
  parse: Or,
  createTransformer: Lr,
  getAnimatableNone: Nl
}, Ul = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function $l(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [i] = n.match(Yn) || [];
  if (!i)
    return t;
  const s = n.replace(i, "");
  let o = Ul.has(e) ? 1 : 0;
  return i !== n && (o *= 100), e + "(" + o + s + ")";
}
const Wl = /\b([a-z-]*)\(.*?\)/gu, cn = {
  ...mt,
  getAnimatableNone: (t) => {
    const e = t.match(Wl);
    return e ? e.map($l).join(" ") : t;
  }
}, Kl = {
  ...Mn,
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
  filter: cn,
  WebkitFilter: cn
}, Hn = (t) => Kl[t];
function jr(t, e) {
  let n = Hn(t);
  return n !== cn && (n = mt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Gl = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Yl(t, e, n) {
  let i = 0, s;
  for (; i < t.length && !s; ) {
    const o = t[i];
    typeof o == "string" && !Gl.has(o) && ie(o).values.length && (s = t[i]), i++;
  }
  if (s && n)
    for (const o of e)
      t[o] = jr(n, s);
}
const ki = (t) => t === Ut || t === S, Fi = (t, e) => parseFloat(t.split(", ")[e]), _i = (t, e) => (n, { transform: i }) => {
  if (i === "none" || !i)
    return 0;
  const s = i.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Fi(s[1], e);
  {
    const o = i.match(/^matrix\((.+)\)$/u);
    return o ? Fi(o[1], t) : 0;
  }
}, zl = /* @__PURE__ */ new Set(["x", "y", "z"]), Hl = Nt.filter((t) => !zl.has(t));
function ql(t) {
  const e = [];
  return Hl.forEach((n) => {
    const i = t.getValue(n);
    i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const It = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: _i(4, 13),
  y: _i(5, 14)
};
It.translateX = It.x;
It.translateY = It.y;
const Pt = /* @__PURE__ */ new Set();
let fn = !1, hn = !1;
function kr() {
  if (hn) {
    const t = Array.from(Pt).filter((i) => i.needsMeasurement), e = new Set(t.map((i) => i.element)), n = /* @__PURE__ */ new Map();
    e.forEach((i) => {
      const s = ql(i);
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
  hn = !1, fn = !1, Pt.forEach((t) => t.complete()), Pt.clear();
}
function Fr() {
  Pt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (hn = !0);
  });
}
function Xl() {
  Fr(), kr();
}
class qn {
  constructor(e, n, i, s, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Pt.add(this), fn || (fn = !0, L.read(Fr), L.resolveKeyframes(kr))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Pt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Pt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const _r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Zl = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Jl(t) {
  const e = Zl.exec(t);
  if (!e)
    return [,];
  const [, n, i, s] = e;
  return [`--${n ?? i}`, s];
}
const Ql = 4;
function Ir(t, e, n = 1) {
  dt(n <= Ql, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [i, s] = Jl(t);
  if (!i)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(i);
  if (o) {
    const r = o.trim();
    return _r(r) ? parseFloat(r) : r;
  }
  return Dn(s) ? Ir(s, e, n + 1) : s;
}
const Br = (t) => (e) => e.test(t), tu = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Nr = [Ut, S, ot, ht, $a, Ua, tu], Ii = (t) => Nr.find(Br(t));
class Ur extends qn {
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
      if (typeof u == "string" && (u = u.trim(), Dn(u))) {
        const c = Ir(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !yr.has(i) || e.length !== 2)
      return;
    const [s, o] = e, r = Ii(s), a = Ii(o);
    if (r !== a)
      if (ki(r) && ki(a))
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
      Vl(e[s]) && i.push(s);
    i.length && Yl(e, i, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: i } = this;
    if (!e || !e.current)
      return;
    i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = It[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
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
    s[r] = It[i](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Bi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(mt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function eu(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function nu(t, e, n, i) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Bi(s, e), a = Bi(o, e);
  return Bt(r === a, `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : eu(t) || (n === "spring" || In(n)) && i;
}
const iu = (t) => t !== null;
function ke(t, { repeat: e, repeatType: n = "loop" }, i) {
  const s = t.filter(iu), o = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return !o || i === void 0 ? s[o] : i;
}
const su = 40;
class $r {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > su ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Xl(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = at.now(), this.hasAttemptedResolve = !0;
    const { name: i, type: s, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !nu(e, i, s, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(ke(e, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const k = (t, e, n) => t + (e - t) * n;
function He(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ru({ hue: t, saturation: e, lightness: n, alpha: i }) {
  t /= 360, e /= 100, n /= 100;
  let s = 0, o = 0, r = 0;
  if (!e)
    s = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    s = He(l, a, t + 1 / 3), o = He(l, a, t), r = He(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: i
  };
}
function we(t, e) {
  return (n) => n > 0 ? e : t;
}
const qe = (t, e, n) => {
  const i = t * t, s = n * (e * e - i) + i;
  return s < 0 ? 0 : Math.sqrt(s);
}, ou = [un, bt, Ot], au = (t) => ou.find((e) => e.test(t));
function Ni(t) {
  const e = au(t);
  if (Bt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Ot && (n = ru(n)), n;
}
const Ui = (t, e) => {
  const n = Ni(t), i = Ni(e);
  if (!n || !i)
    return we(t, e);
  const s = { ...n };
  return (o) => (s.red = qe(n.red, i.red, o), s.green = qe(n.green, i.green, o), s.blue = qe(n.blue, i.blue, o), s.alpha = k(n.alpha, i.alpha, o), bt.transform(s));
}, lu = (t, e) => (n) => e(t(n)), ae = (...t) => t.reduce(lu), dn = /* @__PURE__ */ new Set(["none", "hidden"]);
function uu(t, e) {
  return dn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function cu(t, e) {
  return (n) => k(t, e, n);
}
function Xn(t) {
  return typeof t == "number" ? cu : typeof t == "string" ? Dn(t) ? we : K.test(t) ? Ui : du : Array.isArray(t) ? Wr : typeof t == "object" ? K.test(t) ? Ui : fu : we;
}
function Wr(t, e) {
  const n = [...t], i = n.length, s = t.map((o, r) => Xn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < i; r++)
      n[r] = s[r](o);
    return n;
  };
}
function fu(t, e) {
  const n = { ...t, ...e }, i = {};
  for (const s in n)
    t[s] !== void 0 && e[s] !== void 0 && (i[s] = Xn(t[s])(t[s], e[s]));
  return (s) => {
    for (const o in i)
      n[o] = i[o](s);
    return n;
  };
}
function hu(t, e) {
  var n;
  const i = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][s[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    i[o] = l, s[r]++;
  }
  return i;
}
const du = (t, e) => {
  const n = mt.createTransformer(e), i = ie(t), s = ie(e);
  return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? dn.has(t) && !s.values.length || dn.has(e) && !i.values.length ? uu(t, e) : ae(Wr(hu(i, s), s.values), n) : (Bt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), we(t, e));
};
function Kr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? k(t, e, n) : Xn(t)(t, e);
}
const pu = 5;
function Gr(t, e, n) {
  const i = Math.max(e - pu, 0);
  return vr(n - t(i), e - i);
}
const j = {
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
}, Xe = 1e-3;
function mu({ duration: t = j.duration, bounce: e = j.bounce, velocity: n = j.velocity, mass: i = j.mass }) {
  let s, o;
  Bt(t <= /* @__PURE__ */ rt(j.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = ut(j.minDamping, j.maxDamping, r), t = ut(j.minDuration, j.maxDuration, /* @__PURE__ */ lt(t)), r < 1 ? (s = (u) => {
    const c = u * r, h = c * t, d = c - n, p = pn(u, r), g = Math.exp(-h);
    return Xe - d / p * g;
  }, o = (u) => {
    const h = u * r * t, d = h * n + n, p = Math.pow(r, 2) * Math.pow(u, 2) * t, g = Math.exp(-h), y = pn(Math.pow(u, 2), r);
    return (-s(u) + Xe > 0 ? -1 : 1) * ((d - p) * g) / y;
  }) : (s = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Xe + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = yu(s, o, a);
  if (t = /* @__PURE__ */ rt(t), isNaN(l))
    return {
      stiffness: j.stiffness,
      damping: j.damping,
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
const gu = 12;
function yu(t, e, n) {
  let i = n;
  for (let s = 1; s < gu; s++)
    i = i - t(i) / e(i);
  return i;
}
function pn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const vu = ["duration", "bounce"], Tu = ["stiffness", "damping", "mass"];
function $i(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function xu(t) {
  let e = {
    velocity: j.velocity,
    stiffness: j.stiffness,
    damping: j.damping,
    mass: j.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!$i(t, Tu) && $i(t, vu))
    if (t.visualDuration) {
      const n = t.visualDuration, i = 2 * Math.PI / (n * 1.2), s = i * i, o = 2 * ut(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: j.mass,
        stiffness: s,
        damping: o
      };
    } else {
      const n = mu(t);
      e = {
        ...e,
        ...n,
        mass: j.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Yr(t = j.visualDuration, e = j.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: i, restDelta: s } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: d, isResolvedFromDuration: p } = xu({
    ...n,
    velocity: -/* @__PURE__ */ lt(n.velocity || 0)
  }), g = d || 0, y = u / (2 * Math.sqrt(l * c)), b = r - o, v = /* @__PURE__ */ lt(Math.sqrt(l / c)), T = Math.abs(b) < 5;
  i || (i = T ? j.restSpeed.granular : j.restSpeed.default), s || (s = T ? j.restDelta.granular : j.restDelta.default);
  let P;
  if (y < 1) {
    const w = pn(v, y);
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
        y < 1 && (N = w === 0 ? /* @__PURE__ */ rt(g) : Gr(P, w, M));
        const E = Math.abs(N) <= i, $ = Math.abs(r - M) <= s;
        a.done = E && $;
      }
      return a.value = a.done ? r : M, a;
    },
    toString: () => {
      const w = Math.min(cr(V), on), M = fr((N) => V.next(w * N).value, w, 30);
      return w + "ms " + M;
    }
  };
  return V;
}
function Wi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: i = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (E) => a !== void 0 && E < a || l !== void 0 && E > l, g = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * e;
  const b = h + y, v = r === void 0 ? b : r(b);
  v !== b && (y = v - h);
  const T = (E) => -y * Math.exp(-E / i), P = (E) => v + T(E), V = (E) => {
    const $ = T(E), H = P(E);
    d.done = Math.abs($) <= u, d.value = d.done ? v : H;
  };
  let w, M;
  const N = (E) => {
    p(d.value) && (w = E, M = Yr({
      keyframes: [d.value, g(d.value)],
      velocity: Gr(P, E, d.value),
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
const bu = /* @__PURE__ */ oe(0.42, 0, 1, 1), Pu = /* @__PURE__ */ oe(0, 0, 0.58, 1), zr = /* @__PURE__ */ oe(0.42, 0, 0.58, 1), Su = (t) => Array.isArray(t) && typeof t[0] != "number", Ki = {
  linear: X,
  easeIn: bu,
  easeInOut: zr,
  easeOut: Pu,
  circIn: Gn,
  circInOut: Cr,
  circOut: Er,
  backIn: Kn,
  backInOut: wr,
  backOut: Sr,
  anticipate: Ar
}, Gi = (t) => {
  if (Bn(t)) {
    dt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, i, s] = t;
    return oe(e, n, i, s);
  } else if (typeof t == "string")
    return dt(Ki[t] !== void 0, `Invalid easing type '${t}'`), Ki[t];
  return t;
};
function wu(t, e, n) {
  const i = [], s = n || Kr, o = t.length - 1;
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
function Au(t, e, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const o = t.length;
  if (dt(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = wu(e, i, s), l = a.length, u = (c) => {
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
function Eu(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = /* @__PURE__ */ Ft(0, e, i);
    t.push(k(n, 1, s));
  }
}
function Cu(t) {
  const e = [0];
  return Eu(e, t.length - 1), e;
}
function Ru(t, e) {
  return t.map((n) => n * e);
}
function Vu(t, e) {
  return t.map(() => e || zr).splice(0, t.length - 1);
}
function Ae({ duration: t = 300, keyframes: e, times: n, ease: i = "easeInOut" }) {
  const s = Su(i) ? i.map(Gi) : Gi(i), o = {
    done: !1,
    value: e[0]
  }, r = Ru(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Cu(e),
    t
  ), a = Au(r, e, {
    ease: Array.isArray(s) ? s : Vu(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Du = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => L.update(e, !0),
    stop: () => pt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => W.isProcessing ? W.timestamp : at.now()
  };
}, Mu = {
  decay: Wi,
  inertia: Wi,
  tween: Ae,
  keyframes: Ae,
  spring: Yr
}, Ou = (t) => t / 100;
class Zn extends $r {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options, r = (s == null ? void 0 : s.KeyframeResolver) || qn, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, i, s), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o, velocity: r = 0 } = this.options, a = In(n) ? n : Mu[n] || Ae;
    let l, u;
    a !== Ae && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && dt(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), l = ae(Ou, Kr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = cr(c));
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
    const v = this.currentTime - d * (this.speed >= 0 ? 1 : -1), T = this.speed >= 0 ? v < 0 : v > c;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let P = this.currentTime, V = o;
    if (p) {
      const E = Math.min(this.currentTime, c) / h;
      let $ = Math.floor(E), H = E % 1;
      !H && E >= 1 && (H = 1), H === 1 && $--, $ = Math.min($, p + 1), !!($ % 2) && (g === "reverse" ? (H = 1 - H, y && (H -= y / h)) : g === "mirror" && (V = r)), P = ut(0, 1, H) * h;
    }
    const w = T ? { done: !1, value: l[0] } : V.next(P);
    a && (w.value = a(w.value));
    let { done: M } = w;
    !T && u !== null && (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return N && s !== void 0 && (w.value = ke(l, this.options, s)), b && b(w.value), N && this.finish(), w;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ lt(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ lt(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ rt(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
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
    const { driver: e = Du, onPlay: n, startTime: i } = this.options;
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
const Lu = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function ju(t, e, n, { delay: i = 0, duration: s = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = dr(a, s);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: i,
    duration: s,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const ku = /* @__PURE__ */ Sn(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Ee = 10, Fu = 2e4;
function _u(t) {
  return In(t.type) || t.type === "spring" || !hr(t.ease);
}
function Iu(t, e) {
  const n = new Zn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let i = { done: !1, value: t[0] };
  const s = [];
  let o = 0;
  for (; !i.done && o < Fu; )
    i = n.sample(o), s.push(i.value), o += Ee;
  return {
    times: void 0,
    keyframes: s,
    duration: o - Ee,
    ease: "linear"
  };
}
const Hr = {
  anticipate: Ar,
  backInOut: wr,
  circInOut: Cr
};
function Bu(t) {
  return t in Hr;
}
class Yi extends $r {
  constructor(e) {
    super(e);
    const { name: n, motionValue: i, element: s, keyframes: o } = this.options;
    this.resolver = new Ur(o, (r, a) => this.onKeyframesResolved(r, a), n, i, s), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: i = 300, times: s, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Se() && Bu(o) && (o = Hr[o]), _u(this.options)) {
      const { onComplete: h, onUpdate: d, motionValue: p, element: g, ...y } = this.options, b = Iu(e, y);
      e = b.keyframes, e.length === 1 && (e[1] = e[0]), i = b.duration, s = b.times, o = b.ease, r = "keyframes";
    }
    const c = ju(a.owner.current, l, e, { ...this.options, duration: i, times: s, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Vi(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(ke(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
      Vi(i, e);
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
      const { motionValue: u, onUpdate: c, onComplete: h, element: d, ...p } = this.options, g = new Zn({
        ...p,
        keyframes: i,
        duration: s,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ rt(this.time);
      u.setWithVelocity(g.sample(y - Ee).value, g.sample(y).value, Ee);
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
    return ku() && i && Lu.has(i) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !s && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Nu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Uu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), $u = {
  type: "keyframes",
  duration: 0.8
}, Wu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ku = (t, { keyframes: e }) => e.length > 2 ? $u : wt.has(t) ? t.startsWith("scale") ? Uu(e[1]) : Nu : Wu;
function Gu({ when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: s, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Jn = (t, e, n, i = {}, s, o) => (r) => {
  const a = _n(i, t) || {}, l = a.delay || i.delay || 0;
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
  Gu(a) || (c = {
    ...c,
    ...Ku(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ rt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ rt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const d = ke(c.keyframes, a);
    if (d !== void 0)
      return L.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new cl([]);
  }
  return !o && Yi.supports(c) ? new Yi(c) : new Zn(c);
};
function Yu({ protectedKeys: t, needsAnimating: e }, n) {
  const i = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, i;
}
function qr(t, e, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  i && (r = i);
  const u = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const h in l) {
    const d = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), p = l[h];
    if (p === void 0 || c && Yu(c, h))
      continue;
    const g = {
      delay: n,
      ..._n(r || {}, h)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const v = Tr(t);
      if (v) {
        const T = window.MotionHandoffAnimation(v, h, L);
        T !== null && (g.startTime = T, y = !0);
      }
    }
    ln(t, h), d.start(Jn(h, d, p, t.shouldReduceMotion && yr.has(h) ? { type: !1 } : g, t, y));
    const b = d.animation;
    b && u.push(b);
  }
  return a && Promise.all(u).then(() => {
    L.update(() => {
      a && wl(t, a);
    });
  }), u;
}
function mn(t, e, n = {}) {
  var i;
  const s = je(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = s ? () => Promise.all(qr(t, s, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: d } = o;
    return zu(t, e, c + u, h, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function zu(t, e, n = 0, i = 0, s = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * i, l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
  return Array.from(t.variantChildren).sort(Hu).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(mn(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Hu(t, e) {
  return t.sortNodePosition(e);
}
function qu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let i;
  if (Array.isArray(e)) {
    const s = e.map((o) => mn(t, o, n));
    i = Promise.all(s);
  } else if (typeof e == "string")
    i = mn(t, e, n);
  else {
    const s = typeof e == "function" ? je(t, e, n.custom) : e;
    i = Promise.all(qr(t, s, n));
  }
  return i.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const Xu = An.length;
function Xr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Xr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Xu; n++) {
    const i = An[n], s = t.props[i];
    (te(s) || s === !1) && (e[i] = s);
  }
  return e;
}
const Zu = [...wn].reverse(), Ju = wn.length;
function Qu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: i }) => qu(t, n, i)));
}
function tc(t) {
  let e = Qu(t), n = zi(), i = !0;
  const s = (l) => (u, c) => {
    var h;
    const d = je(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
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
    const { props: u } = t, c = Xr(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let b = 0; b < Ju; b++) {
      const v = Zu[b], T = n[v], P = u[v] !== void 0 ? u[v] : c[v], V = te(P), w = v === l ? T.isActive : null;
      w === !1 && (g = b);
      let M = P === c[v] && P !== u[v] && V;
      if (M && i && t.manuallyAnimateOnMount && (M = !1), T.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !P && !T.prevProp || // Or if the prop doesn't define an animation
      Oe(P) || typeof P == "boolean")
        continue;
      const N = ec(T.prevProp, P);
      let E = N || // If we're making this variant active, we want to always make it active
      v === l && T.isActive && !M && V || // If we removed a higher-priority variant (i is in reverse order)
      b > g && V, $ = !1;
      const H = Array.isArray(P) ? P : [P];
      let ct = H.reduce(s(v), {});
      w === !1 && (ct = {});
      const { prevResolvedValues: $t = {} } = T, it = {
        ...$t,
        ...ct
      }, st = (U) => {
        E = !0, d.has(U) && ($ = !0, d.delete(U)), T.needsAnimating[U] = !0;
        const J = t.getValue(U);
        J && (J.liveStyle = !1);
      };
      for (const U in it) {
        const J = ct[U], Et = $t[U];
        if (p.hasOwnProperty(U))
          continue;
        let Ct = !1;
        rn(J) && rn(Et) ? Ct = !ur(J, Et) : Ct = J !== Et, Ct ? J != null ? st(U) : d.add(U) : J !== void 0 && d.has(U) ? st(U) : T.protectedKeys[U] = !0;
      }
      T.prevProp = P, T.prevResolvedValues = ct, T.isActive && (p = { ...p, ...ct }), i && t.blockInitialAnimation && (E = !1), E && (!(M && N) || $) && h.push(...H.map((U) => ({
        animation: U,
        options: { type: v }
      })));
    }
    if (d.size) {
      const b = {};
      d.forEach((v) => {
        const T = t.getBaseTarget(v), P = t.getValue(v);
        P && (P.liveStyle = !0), b[v] = T ?? null;
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
      n = zi(), i = !0;
    }
  };
}
function ec(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !ur(e, t) : !1;
}
function vt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function zi() {
  return {
    animate: vt(!0),
    whileInView: vt(),
    whileHover: vt(),
    whileTap: vt(),
    whileDrag: vt(),
    whileFocus: vt(),
    exit: vt()
  };
}
class gt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class nc extends gt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = tc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Oe(e) && (this.unmountControls = e.subscribe(this.node));
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
let ic = 0;
class sc extends gt {
  constructor() {
    super(...arguments), this.id = ic++;
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
const rc = {
  animation: {
    Feature: nc
  },
  exit: {
    Feature: sc
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
const oc = (t) => (e) => Nn(e) && t(e, le(e));
function Zt(t, e, n, i) {
  return se(t, e, oc(n), i);
}
const Hi = (t, e) => Math.abs(t - e);
function ac(t, e) {
  const n = Hi(t.x, e.x), i = Hi(t.y, e.y);
  return Math.sqrt(n ** 2 + i ** 2);
}
class Zr {
  constructor(e, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Je(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = ac(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: g } = h, { timestamp: y } = W;
      this.history.push({ ...g, timestamp: y });
      const { onStart: b, onMove: v } = this.handlers;
      d || (b && b(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Ze(d, this.transformPagePoint), L.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Je(h.type === "pointercancel" ? this.lastMoveEventInfo : Ze(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, b), g && g(h, b);
    }, !Nn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
    const r = le(e), a = Ze(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = W;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Je(a, this.history)), this.removeListeners = ae(Zt(this.contextWindow, "pointermove", this.handlePointerMove), Zt(this.contextWindow, "pointerup", this.handlePointerUp), Zt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), pt(this.updatePoint);
  }
}
function Ze(t, e) {
  return e ? { point: e(t.point) } : t;
}
function qi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Je({ point: t }, e) {
  return {
    point: t,
    delta: qi(t, Jr(e)),
    offset: qi(t, lc(e)),
    velocity: uc(e, 0.1)
  };
}
function lc(t) {
  return t[0];
}
function Jr(t) {
  return t[t.length - 1];
}
function uc(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, i = null;
  const s = Jr(t);
  for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > /* @__PURE__ */ rt(e))); )
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
const Qr = 1e-4, cc = 1 - Qr, fc = 1 + Qr, to = 0.01, hc = 0 - to, dc = 0 + to;
function Z(t) {
  return t.max - t.min;
}
function pc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Xi(t, e, n, i = 0.5) {
  t.origin = i, t.originPoint = k(e.min, e.max, t.origin), t.scale = Z(n) / Z(e), t.translate = k(n.min, n.max, t.origin) - t.originPoint, (t.scale >= cc && t.scale <= fc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= hc && t.translate <= dc || isNaN(t.translate)) && (t.translate = 0);
}
function Jt(t, e, n, i) {
  Xi(t.x, e.x, n.x, i ? i.originX : void 0), Xi(t.y, e.y, n.y, i ? i.originY : void 0);
}
function Zi(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Z(e);
}
function mc(t, e, n) {
  Zi(t.x, e.x, n.x), Zi(t.y, e.y, n.y);
}
function Ji(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Z(e);
}
function Qt(t, e, n) {
  Ji(t.x, e.x, n.x), Ji(t.y, e.y, n.y);
}
function gc(t, { min: e, max: n }, i) {
  return e !== void 0 && t < e ? t = i ? k(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? k(n, t, i.max) : Math.min(t, n)), t;
}
function Qi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function yc(t, { top: e, left: n, bottom: i, right: s }) {
  return {
    x: Qi(t.x, n, s),
    y: Qi(t.y, e, i)
  };
}
function ts(t, e) {
  let n = e.min - t.min, i = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), { min: n, max: i };
}
function vc(t, e) {
  return {
    x: ts(t.x, e.x),
    y: ts(t.y, e.y)
  };
}
function Tc(t, e) {
  let n = 0.5;
  const i = Z(t), s = Z(e);
  return s > i ? n = /* @__PURE__ */ Ft(e.min, e.max - i, t.min) : i > s && (n = /* @__PURE__ */ Ft(t.min, t.max - s, e.min)), ut(0, 1, n);
}
function xc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const gn = 0.35;
function bc(t = gn) {
  return t === !1 ? t = 0 : t === !0 && (t = gn), {
    x: es(t, "left", "right"),
    y: es(t, "top", "bottom")
  };
}
function es(t, e, n) {
  return {
    min: ns(t, e),
    max: ns(t, n)
  };
}
function ns(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const is = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Lt = () => ({
  x: is(),
  y: is()
}), ss = () => ({ min: 0, max: 0 }), _ = () => ({
  x: ss(),
  y: ss()
});
function et(t) {
  return [t("x"), t("y")];
}
function eo({ top: t, left: e, right: n, bottom: i }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: i }
  };
}
function Pc({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Sc(t, e) {
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
function Qe(t) {
  return t === void 0 || t === 1;
}
function yn({ scale: t, scaleX: e, scaleY: n }) {
  return !Qe(t) || !Qe(e) || !Qe(n);
}
function Tt(t) {
  return yn(t) || no(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function no(t) {
  return rs(t.x) || rs(t.y);
}
function rs(t) {
  return t && t !== "0%";
}
function Ce(t, e, n) {
  const i = t - n, s = e * i;
  return n + s;
}
function os(t, e, n, i, s) {
  return s !== void 0 && (t = Ce(t, s, i)), Ce(t, n, i) + e;
}
function vn(t, e = 0, n = 1, i, s) {
  t.min = os(t.min, e, n, i, s), t.max = os(t.max, e, n, i, s);
}
function io(t, { x: e, y: n }) {
  vn(t.x, e.translate, e.scale, e.originPoint), vn(t.y, n.translate, n.scale, n.originPoint);
}
const as = 0.999999999999, ls = 1.0000000000001;
function wc(t, e, n, i = !1) {
  const s = n.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < s; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (i && o.options.layoutScroll && o.scroll && o !== o.root && kt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, io(t, r)), i && Tt(o.latestValues) && kt(t, o.latestValues));
  }
  e.x < ls && e.x > as && (e.x = 1), e.y < ls && e.y > as && (e.y = 1);
}
function jt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function us(t, e, n, i, s = 0.5) {
  const o = k(t.min, t.max, s);
  vn(t, e, n, o, i);
}
function kt(t, e) {
  us(t.x, e.x, e.scaleX, e.scale, e.originX), us(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function so(t, e) {
  return eo(Sc(t.getBoundingClientRect(), e));
}
function Ac(t, e, n) {
  const i = so(t, n), { scroll: s } = e;
  return s && (jt(i.x, s.offset.x), jt(i.y, s.offset.y)), i;
}
const ro = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ec = /* @__PURE__ */ new WeakMap();
class Cc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = _(), this.visualElement = e;
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
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Tl(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((b) => {
        let v = this.getAxisMotionValue(b).get() || 0;
        if (ot.test(v)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const P = T.layout.layoutBox[b];
            P && (v = Z(P) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[b] = v;
      }), g && L.postRender(() => g(c, h)), ln(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: b } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = Rc(b), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, b), this.updateAxis("y", h.point, b), this.visualElement.render(), y && y(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => et((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zr(e, {
      onSessionStart: s,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: ro(this.visualElement)
    });
  }
  stop(e, n) {
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && L.postRender(() => o(e, n));
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
    if (!i || !ge(e, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + i[e];
    this.constraints && this.constraints[e] && (r = gc(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: i } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && Mt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = yc(s.layoutBox, n) : this.constraints = !1, this.elastic = bc(i), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && et((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = xc(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Mt(e))
      return !1;
    const i = e.current;
    dt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = Ac(i, s.root, this.visualElement.getTransformPagePoint());
    let r = vc(s.layout.layoutBox, o);
    if (n) {
      const a = n(Pc(r));
      this.hasMutatedConstraints = !!a, a && (r = eo(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: i, dragElastic: s, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!ge(c, n, this.currentDirection))
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
    return ln(this.visualElement, e), i.start(Jn(e, i, 0, n, this.visualElement, !1));
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
      if (!ge(n, i, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: r, max: a } = s.layout.layoutBox[n];
        o.set(e[n] - k(r, a, 0.5));
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
    if (!Mt(n) || !i || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[r] = Tc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), et((r) => {
      if (!ge(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(k(l, u, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ec.set(this.visualElement, this);
    const e = this.visualElement.current, n = Zt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), i = () => {
      const { dragConstraints: l } = this.getProps();
      Mt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", i);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), L.read(i);
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
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: i = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: r = gn, dragMomentum: a = !0 } = e;
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
function ge(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Rc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Vc extends gt {
  constructor(e) {
    super(e), this.removeGroupControls = X, this.removeListeners = X, this.controls = new Cc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const cs = (t) => (e, n) => {
  t && L.postRender(() => t(e, n));
};
class Dc extends gt {
  constructor() {
    super(...arguments), this.removePointerDownListener = X;
  }
  onPointerDown(e) {
    this.session = new Zr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ro(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: cs(e),
      onStart: cs(n),
      onMove: i,
      onEnd: (o, r) => {
        delete this.session, s && L.postRender(() => s(o, r));
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
const xe = {
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
function fs(t, e) {
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
    const n = fs(t, e.target.x), i = fs(t, e.target.y);
    return `${n}% ${i}%`;
  }
}, Mc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const i = t, s = mt.parse(t);
    if (s.length > 5)
      return i;
    const o = mt.createTransformer(t), r = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    s[0 + r] /= a, s[1 + r] /= l;
    const u = k(a, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= u), typeof s[3 + r] == "number" && (s[3 + r] /= u), o(s);
  }
};
class Oc extends Zo {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props, { projection: o } = e;
    Ja(Lc), o && (n.group && n.group.add(o), i && i.register && s && i.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), xe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: o } = this.props, r = i.projection;
    return r && (r.isPresent = o, s || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || L.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Cn.postRender(() => {
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
function oo(t) {
  const [e, n] = da(), i = z(Ws);
  return B.jsx(Oc, { ...t, layoutGroup: i, switchLayoutGroup: z(Xs), isPresent: e, safeToRemove: n });
}
const Lc = {
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
  boxShadow: Mc
};
function jc(t, e, n) {
  const i = G(t) ? t : ne(t);
  return i.start(Jn("", i, e, n)), i.animation;
}
function kc(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Fc = (t, e) => t.depth - e.depth;
class _c {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Un(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    $n(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Fc), this.isDirty = !1, this.children.forEach(e);
  }
}
function Ic(t, e) {
  const n = at.now(), i = ({ timestamp: s }) => {
    const o = s - n;
    o >= e && (pt(i), t(o - e));
  };
  return L.read(i, !0), () => pt(i);
}
const ao = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Bc = ao.length, hs = (t) => typeof t == "string" ? parseFloat(t) : t, ds = (t) => typeof t == "number" || S.test(t);
function Nc(t, e, n, i, s, o) {
  s ? (t.opacity = k(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Uc(i)
  ), t.opacityExit = k(e.opacity !== void 0 ? e.opacity : 1, 0, $c(i))) : o && (t.opacity = k(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
  for (let r = 0; r < Bc; r++) {
    const a = `border${ao[r]}Radius`;
    let l = ps(e, a), u = ps(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ds(l) === ds(u) ? (t[a] = Math.max(k(hs(l), hs(u), i), 0), (ot.test(u) || ot.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = k(e.rotate || 0, n.rotate || 0, i));
}
function ps(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Uc = /* @__PURE__ */ lo(0, 0.5, Er), $c = /* @__PURE__ */ lo(0.5, 0.95, X);
function lo(t, e, n) {
  return (i) => i < t ? 0 : i > e ? 1 : n(/* @__PURE__ */ Ft(t, e, i));
}
function ms(t, e) {
  t.min = e.min, t.max = e.max;
}
function tt(t, e) {
  ms(t.x, e.x), ms(t.y, e.y);
}
function gs(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ys(t, e, n, i, s) {
  return t -= e, t = Ce(t, 1 / n, i), s !== void 0 && (t = Ce(t, 1 / s, i)), t;
}
function Wc(t, e = 0, n = 1, i = 0.5, s, o = t, r = t) {
  if (ot.test(e) && (e = parseFloat(e), e = k(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = k(o.min, o.max, i);
  t === o && (a -= e), t.min = ys(t.min, e, n, a, s), t.max = ys(t.max, e, n, a, s);
}
function vs(t, e, [n, i, s], o, r) {
  Wc(t, e[n], e[i], e[s], e.scale, o, r);
}
const Kc = ["x", "scaleX", "originX"], Gc = ["y", "scaleY", "originY"];
function Ts(t, e, n, i) {
  vs(t.x, e, Kc, n ? n.x : void 0, i ? i.x : void 0), vs(t.y, e, Gc, n ? n.y : void 0, i ? i.y : void 0);
}
function xs(t) {
  return t.translate === 0 && t.scale === 1;
}
function uo(t) {
  return xs(t.x) && xs(t.y);
}
function bs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Yc(t, e) {
  return bs(t.x, e.x) && bs(t.y, e.y);
}
function Ps(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function co(t, e) {
  return Ps(t.x, e.x) && Ps(t.y, e.y);
}
function Ss(t) {
  return Z(t.x) / Z(t.y);
}
function ws(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class zc {
  constructor() {
    this.members = [];
  }
  add(e) {
    Un(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if ($n(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function Hc(t, e, n) {
  let i = "";
  const s = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((s || o || r) && (i = `translate3d(${s}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: d, skewX: p, skewY: g } = n;
    u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), h && (i += `rotateX(${h}deg) `), d && (i += `rotateY(${d}deg) `), p && (i += `skewX(${p}deg) `), g && (i += `skewY(${g}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none";
}
const xt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, qt = typeof window < "u" && window.MotionDebug !== void 0, tn = ["", "X", "Y", "Z"], qc = { visibility: "hidden" }, As = 1e3;
let Xc = 0;
function en(t, e, n, i) {
  const { latestValues: s } = e;
  s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0));
}
function fo(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Tr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", L, !(s || o));
  }
  const { parent: i } = t;
  i && !i.hasCheckedOptimisedAppear && fo(i);
}
function ho({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: s }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Xc++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, qt && (xt.totalNodes = xt.resolvedTargetDeltas = xt.recalculatedProjection = 0), this.nodes.forEach(Qc), this.nodes.forEach(rf), this.nodes.forEach(of), this.nodes.forEach(tf), qt && window.MotionDebug.record(xt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _c());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Wn()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = kc(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Ic(d, 250), xe.hasAnimatedSinceResize && (xe.hasAnimatedSinceResize = !1, this.nodes.forEach(Cs));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || ff, { onLayoutAnimationStart: b, onLayoutAnimationComplete: v } = c.getProps(), T = !this.targetLayout || !co(this.targetLayout, g) || p, P = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || P || d && (T || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, P);
          const V = {
            ..._n(y, "layout"),
            onPlay: b,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (V.delay = 0, V.type = !1), this.startAnimation(V);
        } else
          d || Cs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, pt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(af), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Es);
        return;
      }
      this.isUpdating || this.nodes.forEach(nf), this.isUpdating = !1, this.nodes.forEach(sf), this.nodes.forEach(Zc), this.nodes.forEach(Jc), this.clearAllSnapshots();
      const a = at.now();
      W.delta = ut(0, 1e3 / 60, a - W.timestamp), W.timestamp = a, W.isProcessing = !0, Ge.update.process(W), Ge.preRender.process(W), Ge.render.process(W), W.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Cn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ef), this.sharedNodes.forEach(lf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, L.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      L.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = _(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !uo(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || Tt(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), hf(l), {
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
        return _();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(df))) {
        const { scroll: c } = this.root;
        c && (jt(l.x, c.offset.x), jt(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = _();
      if (tt(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: d } = c;
        c !== this.root && h && d.layoutScroll && (h.wasRoot && tt(l, r), jt(l.x, h.offset.x), jt(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = _();
      tt(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && kt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Tt(c.latestValues) && kt(l, c.latestValues);
      }
      return Tt(this.latestValues) && kt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = _();
      tt(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Tt(u.latestValues))
          continue;
        yn(u.latestValues) && u.updateSnapshot();
        const c = _(), h = u.measurePageBox();
        tt(c, h), Ts(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Tt(this.latestValues) && Ts(a, this.latestValues), a;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _(), this.relativeTargetOrigin = _(), Qt(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = _(), this.targetWithTransforms = _()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), mc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), io(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = _(), this.relativeTargetOrigin = _(), Qt(this.relativeTargetOrigin, this.target, p.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          qt && xt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || yn(this.parent.latestValues) || no(this.parent.latestValues)))
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
      wc(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = _());
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (gs(this.prevProjectionDelta.x, this.projectionDelta.x), gs(this.prevProjectionDelta.y, this.projectionDelta.y)), Jt(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !ws(this.projectionDelta.x, this.prevProjectionDelta.x) || !ws(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), qt && xt.recalculatedProjection++;
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
      const d = _(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, b = this.getStack(), v = !b || b.members.length <= 1, T = !!(y && !v && this.options.crossfade === !0 && !this.path.some(cf));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (V) => {
        const w = V / 1e3;
        Rs(h.x, r.x, w), Rs(h.y, r.y, w), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Qt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uf(this.relativeTarget, this.relativeTargetOrigin, d, w), P && Yc(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = _()), tt(P, this.relativeTarget)), y && (this.animationValues = c, Nc(c, u, this.latestValues, w, T, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (pt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = L.update(() => {
        xe.hasAnimatedSinceResize = !0, this.currentAnimation = jc(0, As, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(As), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && po(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || _();
          const h = Z(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const d = Z(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        tt(a, l), kt(a, c), Jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new zc()), this.sharedNodes.get(r).add(a);
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
      l.z && en("z", r, u, this.animationValues);
      for (let c = 0; c < tn.length; c++)
        en(`rotate${tn[c]}`, r, u, this.animationValues), en(`skew${tn[c]}`, r, u, this.animationValues);
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
        return qc;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = ve(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = ve(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = Hc(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in Pe) {
        if (d[y] === void 0)
          continue;
        const { correct: b, applyTo: v } = Pe[y], T = u.transform === "none" ? d[y] : b(d[y], h);
        if (v) {
          const P = v.length;
          for (let V = 0; V < P; V++)
            u[v[V]] = T;
        } else
          u[y] = T;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? ve(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Es), this.root.sharedNodes.clear();
    }
  };
}
function Zc(t) {
  t.updateLayout();
}
function Jc(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: s } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(d);
      d.min = i[h].min, d.max = d.min + p;
    }) : po(o, n.layoutBox, i) && et((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = Z(i[h]);
      d.max = d.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + p);
    });
    const a = Lt();
    Jt(a, i, n.layoutBox);
    const l = Lt();
    r ? Jt(l, t.applyTransform(s, !0), n.measuredBox) : Jt(l, i, n.layoutBox);
    const u = !uo(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const g = _();
          Qt(g, n.layoutBox, d.layoutBox);
          const y = _();
          Qt(y, i, p.layoutBox), co(g, y) || (c = !0), h.options.layoutRoot && (t.relativeTarget = y, t.relativeTargetOrigin = g, t.relativeParent = h);
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
function Qc(t) {
  qt && xt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function tf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ef(t) {
  t.clearSnapshot();
}
function Es(t) {
  t.clearMeasurements();
}
function nf(t) {
  t.isLayoutDirty = !1;
}
function sf(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Cs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function rf(t) {
  t.resolveTargetDelta();
}
function of(t) {
  t.calcProjection();
}
function af(t) {
  t.resetSkewAndRotation();
}
function lf(t) {
  t.removeLeadSnapshot();
}
function Rs(t, e, n) {
  t.translate = k(e.translate, 0, n), t.scale = k(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Vs(t, e, n, i) {
  t.min = k(e.min, n.min, i), t.max = k(e.max, n.max, i);
}
function uf(t, e, n, i) {
  Vs(t.x, e.x, n.x, i), Vs(t.y, e.y, n.y, i);
}
function cf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const ff = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ds = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ms = Ds("applewebkit/") && !Ds("chrome/") ? Math.round : X;
function Os(t) {
  t.min = Ms(t.min), t.max = Ms(t.max);
}
function hf(t) {
  Os(t.x), Os(t.y);
}
function po(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !pc(Ss(e), Ss(n), 0.2);
}
function df(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const pf = ho({
  attachResizeListener: (t, e) => se(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), nn = {
  current: void 0
}, mo = ho({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!nn.current) {
      const t = new pf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), nn.current = t;
    }
    return nn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), mf = {
  pan: {
    Feature: Dc
  },
  drag: {
    Feature: Vc,
    ProjectionNode: mo,
    MeasureLayout: oo
  }
};
function Ls(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, o = i[s];
  o && L.postRender(() => o(e, le(e)));
}
class gf extends gt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = pl(e, (n) => (Ls(this.node, n, "Start"), (i) => Ls(this.node, i, "End"))));
  }
  unmount() {
  }
}
class yf extends gt {
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
function js(t, e, n) {
  const { props: i } = t;
  t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), o = i[s];
  o && L.postRender(() => o(e, le(e)));
}
class vf extends gt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = vl(e, (n) => (js(this.node, n, "Start"), (i, { success: s }) => js(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), Tf = (t) => {
  const e = Tn.get(t.target);
  e && e(t);
}, xf = (t) => {
  t.forEach(Tf);
};
function bf({ root: t, ...e }) {
  const n = t || document;
  sn.has(n) || sn.set(n, {});
  const i = sn.get(n), s = JSON.stringify(e);
  return i[s] || (i[s] = new IntersectionObserver(xf, { root: t, ...e })), i[s];
}
function Pf(t, e, n) {
  const i = bf(e);
  return Tn.set(t, n), i.observe(t), () => {
    Tn.delete(t), i.unobserve(t);
  };
}
const Sf = {
  some: 0,
  all: 1
};
class wf extends gt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: i, amount: s = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: i,
      threshold: typeof s == "number" ? s : Sf[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = u ? c : h;
      d && d(l);
    };
    return Pf(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Af(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Af({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Ef = {
  inView: {
    Feature: wf
  },
  tap: {
    Feature: vf
  },
  focus: {
    Feature: yf
  },
  hover: {
    Feature: gf
  }
}, Cf = {
  layout: {
    ProjectionNode: mo,
    MeasureLayout: oo
  }
}, xn = { current: null }, go = { current: !1 };
function Rf() {
  if (go.current = !0, !!Pn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => xn.current = t.matches;
      t.addListener(e), e();
    } else
      xn.current = !1;
}
const Vf = [...Nr, K, mt], Df = (t) => Vf.find(Br(t)), ks = /* @__PURE__ */ new WeakMap();
function Mf(t, e, n) {
  for (const i in e) {
    const s = e[i], o = n[i];
    if (G(s))
      t.addValue(i, s), process.env.NODE_ENV === "development" && De(s.version === "11.18.2", `Attempting to mix Motion versions ${s.version} with 11.18.2 may not work as expected.`);
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
const Fs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Of {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = qn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const p = at.now();
      this.renderScheduledAt < p && (this.renderScheduledAt = p, L.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Le(n), this.isVariantNode = Hs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in d) {
      const g = d[p];
      l[p] !== void 0 && G(g) && g.set(l[p], !1);
    }
  }
  mount(e) {
    this.current = e, ks.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), go.current || Rf(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : xn.current, process.env.NODE_ENV !== "production" && De(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ks.delete(this.current), this.projection && this.projection.unmount(), pt(this.notifyUpdate), pt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const i = wt.has(e), s = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && L.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0);
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
    for (e in _t) {
      const n = _t[e];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : _();
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
    for (let i = 0; i < Fs.length; i++) {
      const s = Fs[i];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, r = e[o];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Mf(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return s != null && (typeof s == "string" && (_r(s) || Rr(s)) ? s = parseFloat(s) : !Df(s) && mt.test(n) && (s = jr(e, n)), this.setBaseTarget(e, G(s) ? s.get() : s)), G(s) ? s.get() : s;
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
      const r = Vn(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (s = r[e]);
    }
    if (i && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !G(o) ? o : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Wn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class yo extends Of {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ur;
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
function Lf(t) {
  return window.getComputedStyle(t);
}
class jf extends yo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ir;
  }
  readValueFromInstance(e, n) {
    if (wt.has(n)) {
      const i = Hn(n);
      return i && i.default || 0;
    } else {
      const i = Lf(e), s = (tr(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return so(e, n);
  }
  build(e, n, i) {
    On(e, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return Fn(e, n, i);
  }
}
class kf extends yo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = _;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (wt.has(n)) {
      const i = Hn(n);
      return i && i.default || 0;
    }
    return n = sr.has(n) ? n : En(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, i) {
    return ar(e, n, i);
  }
  build(e, n, i) {
    Ln(e, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, i, s) {
    rr(e, n, i, s);
  }
  mount(e) {
    this.isSVGTag = kn(e.tagName), super.mount(e);
  }
}
const Ff = (t, e) => Rn(t) ? new kf(e) : new jf(e, {
  allowProjection: t !== Ns
}), _f = /* @__PURE__ */ al({
  ...rc,
  ...Ef,
  ...mf,
  ...Cf
}, Ff), If = /* @__PURE__ */ Pa(_f);
function Bf({ message: t, type: e = "bot" }) {
  const n = e === "user";
  return /* @__PURE__ */ B.jsx(
    If.div,
    {
      className: `p-3 my-2 max-w-[80%] rounded-2xl ${n ? "bg-blue-600 text-white ml-auto" : "bg-gray-200 text-black"}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      children: t
    }
  );
}
function Nf() {
  const { state: t, dispatch: e } = $s(), [n, i] = Is(!1);
  return Re(() => {
    const s = (o) => {
      if (o.type === "agentic:addToCart") {
        const { product_name: r } = o.detail;
        e({
          type: "ADD_MESSAGE",
          payload: { type: "bot", text: `✅ Added ${r} to your cart! Want to checkout?` }
        }), i(!0);
      }
    };
    return window.addEventListener("agentic:addToCart", s), () => window.removeEventListener("agentic:addToCart", s);
  }, [e]), /* @__PURE__ */ B.jsx("div", { className: "fixed bottom-5 right-5 z-50 agentic-chat-widget", children: n ? /* @__PURE__ */ B.jsxs("div", { className: "bg-white rounded-2xl shadow-xl w-80 h-96 flex flex-col", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "agentic-chat-header flex justify-between items-center", children: [
      /* @__PURE__ */ B.jsx("span", { children: "Agentic Assistant" }),
      /* @__PURE__ */ B.jsx("button", { onClick: () => i(!1), children: "✕" })
    ] }),
    /* @__PURE__ */ B.jsx("div", { className: "flex-1 overflow-y-auto p-3", children: t.messages.map((s, o) => /* @__PURE__ */ B.jsx(Bf, { message: s.text, type: s.type }, o)) })
  ] }) : /* @__PURE__ */ B.jsx(
    "button",
    {
      className: "bg-[var(--agentic-primary)] text-white p-4 rounded-full shadow-lg",
      onClick: () => i(!0),
      children: "💬"
    }
  ) });
}
function Uf(t = {}) {
  ua(t);
  const e = document.createElement("div");
  document.body.appendChild(e), ra.createRoot(e).render(
    /* @__PURE__ */ B.jsxs(la, { children: [
      /* @__PURE__ */ B.jsx(fa, {}),
      /* @__PURE__ */ B.jsx(Nf, {})
    ] })
  );
}
window.AgenticAI = { init: Uf };
export {
  Uf as init
};
