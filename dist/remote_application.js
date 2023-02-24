function r1(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var Qo = {}, $D = {
  get exports() {
    return Qo;
  },
  set exports(P) {
    Qo = P;
  }
}, Tt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QT;
function QD() {
  if (QT)
    return Tt;
  QT = 1;
  var P = Symbol.for("react.element"), X = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), $t = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), S = Symbol.for("react.context"), vt = Symbol.for("react.forward_ref"), he = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function le(R) {
    return R === null || typeof R != "object" ? null : (R = Z && R[Z] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, Rt = {};
  function st(R, B, oe) {
    this.props = R, this.context = B, this.refs = Rt, this.updater = oe || ue;
  }
  st.prototype.isReactComponent = {}, st.prototype.setState = function(R, B) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, B, "setState");
  }, st.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function fn() {
  }
  fn.prototype = st.prototype;
  function at(R, B, oe) {
    this.props = R, this.context = B, this.refs = Rt, this.updater = oe || ue;
  }
  var We = at.prototype = new fn();
  We.constructor = at, Ve(We, st.prototype), We.isPureReactComponent = !0;
  var ct = Array.isArray, De = Object.prototype.hasOwnProperty, it = { current: null }, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nn(R, B, oe) {
    var Ye, Fe = {}, yt = null, tt = null;
    if (B != null)
      for (Ye in B.ref !== void 0 && (tt = B.ref), B.key !== void 0 && (yt = "" + B.key), B)
        De.call(B, Ye) && !Ie.hasOwnProperty(Ye) && (Fe[Ye] = B[Ye]);
    var ft = arguments.length - 2;
    if (ft === 1)
      Fe.children = oe;
    else if (1 < ft) {
      for (var nt = Array(ft), jt = 0; jt < ft; jt++)
        nt[jt] = arguments[jt + 2];
      Fe.children = nt;
    }
    if (R && R.defaultProps)
      for (Ye in ft = R.defaultProps, ft)
        Fe[Ye] === void 0 && (Fe[Ye] = ft[Ye]);
    return { $$typeof: P, type: R, key: yt, ref: tt, props: Fe, _owner: it.current };
  }
  function wn(R, B) {
    return { $$typeof: P, type: R.type, key: B, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Qt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === P;
  }
  function _t(R) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(oe) {
      return B[oe];
    });
  }
  var En = /\/+/g;
  function je(R, B) {
    return typeof R == "object" && R !== null && R.key != null ? _t("" + R.key) : B.toString(36);
  }
  function Ke(R, B, oe, Ye, Fe) {
    var yt = typeof R;
    (yt === "undefined" || yt === "boolean") && (R = null);
    var tt = !1;
    if (R === null)
      tt = !0;
    else
      switch (yt) {
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case P:
            case X:
              tt = !0;
          }
      }
    if (tt)
      return tt = R, Fe = Fe(tt), R = Ye === "" ? "." + je(tt, 0) : Ye, ct(Fe) ? (oe = "", R != null && (oe = R.replace(En, "$&/") + "/"), Ke(Fe, B, oe, "", function(jt) {
        return jt;
      })) : Fe != null && (Qt(Fe) && (Fe = wn(Fe, oe + (!Fe.key || tt && tt.key === Fe.key ? "" : ("" + Fe.key).replace(En, "$&/") + "/") + R)), B.push(Fe)), 1;
    if (tt = 0, Ye = Ye === "" ? "." : Ye + ":", ct(R))
      for (var ft = 0; ft < R.length; ft++) {
        yt = R[ft];
        var nt = Ye + je(yt, ft);
        tt += Ke(yt, B, oe, nt, Fe);
      }
    else if (nt = le(R), typeof nt == "function")
      for (R = nt.call(R), ft = 0; !(yt = R.next()).done; )
        yt = yt.value, nt = Ye + je(yt, ft++), tt += Ke(yt, B, oe, nt, Fe);
    else if (yt === "object")
      throw B = String(R), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return tt;
  }
  function At(R, B, oe) {
    if (R == null)
      return R;
    var Ye = [], Fe = 0;
    return Ke(R, Ye, "", "", function(yt) {
      return B.call(oe, yt, Fe++);
    }), Ye;
  }
  function Mt(R) {
    if (R._status === -1) {
      var B = R._result;
      B = B(), B.then(function(oe) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = oe);
      }, function(oe) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = oe);
      }), R._status === -1 && (R._status = 0, R._result = B);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var ye = { current: null }, J = { transition: null }, we = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: J, ReactCurrentOwner: it };
  return Tt.Children = { map: At, forEach: function(R, B, oe) {
    At(R, function() {
      B.apply(this, arguments);
    }, oe);
  }, count: function(R) {
    var B = 0;
    return At(R, function() {
      B++;
    }), B;
  }, toArray: function(R) {
    return At(R, function(B) {
      return B;
    }) || [];
  }, only: function(R) {
    if (!Qt(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, Tt.Component = st, Tt.Fragment = j, Tt.Profiler = $t, Tt.PureComponent = at, Tt.StrictMode = mt, Tt.Suspense = he, Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Tt.cloneElement = function(R, B, oe) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Ye = Ve({}, R.props), Fe = R.key, yt = R.ref, tt = R._owner;
    if (B != null) {
      if (B.ref !== void 0 && (yt = B.ref, tt = it.current), B.key !== void 0 && (Fe = "" + B.key), R.type && R.type.defaultProps)
        var ft = R.type.defaultProps;
      for (nt in B)
        De.call(B, nt) && !Ie.hasOwnProperty(nt) && (Ye[nt] = B[nt] === void 0 && ft !== void 0 ? ft[nt] : B[nt]);
    }
    var nt = arguments.length - 2;
    if (nt === 1)
      Ye.children = oe;
    else if (1 < nt) {
      ft = Array(nt);
      for (var jt = 0; jt < nt; jt++)
        ft[jt] = arguments[jt + 2];
      Ye.children = ft;
    }
    return { $$typeof: P, type: R.type, key: Fe, ref: yt, props: Ye, _owner: tt };
  }, Tt.createContext = function(R) {
    return R = { $$typeof: S, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: Xe, _context: R }, R.Consumer = R;
  }, Tt.createElement = nn, Tt.createFactory = function(R) {
    var B = nn.bind(null, R);
    return B.type = R, B;
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(R) {
    return { $$typeof: vt, render: R };
  }, Tt.isValidElement = Qt, Tt.lazy = function(R) {
    return { $$typeof: Me, _payload: { _status: -1, _result: R }, _init: Mt };
  }, Tt.memo = function(R, B) {
    return { $$typeof: ee, type: R, compare: B === void 0 ? null : B };
  }, Tt.startTransition = function(R) {
    var B = J.transition;
    J.transition = {};
    try {
      R();
    } finally {
      J.transition = B;
    }
  }, Tt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Tt.useCallback = function(R, B) {
    return ye.current.useCallback(R, B);
  }, Tt.useContext = function(R) {
    return ye.current.useContext(R);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(R) {
    return ye.current.useDeferredValue(R);
  }, Tt.useEffect = function(R, B) {
    return ye.current.useEffect(R, B);
  }, Tt.useId = function() {
    return ye.current.useId();
  }, Tt.useImperativeHandle = function(R, B, oe) {
    return ye.current.useImperativeHandle(R, B, oe);
  }, Tt.useInsertionEffect = function(R, B) {
    return ye.current.useInsertionEffect(R, B);
  }, Tt.useLayoutEffect = function(R, B) {
    return ye.current.useLayoutEffect(R, B);
  }, Tt.useMemo = function(R, B) {
    return ye.current.useMemo(R, B);
  }, Tt.useReducer = function(R, B, oe) {
    return ye.current.useReducer(R, B, oe);
  }, Tt.useRef = function(R) {
    return ye.current.useRef(R);
  }, Tt.useState = function(R) {
    return ye.current.useState(R);
  }, Tt.useSyncExternalStore = function(R, B, oe) {
    return ye.current.useSyncExternalStore(R, B, oe);
  }, Tt.useTransition = function() {
    return ye.current.useTransition();
  }, Tt.version = "18.2.0", Tt;
}
var qp = {}, WD = {
  get exports() {
    return qp;
  },
  set exports(P) {
    qp = P;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WT;
function GD() {
  return WT || (WT = 1, function(P, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var j = "18.2.0", mt = Symbol.for("react.element"), $t = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), ee = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Rt = Symbol.for("react.offscreen"), st = Symbol.iterator, fn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = st && h[st] || h[fn];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ct = {
        transition: null
      }, De = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, it = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ie = {}, nn = null;
      function wn(h) {
        nn = h;
      }
      Ie.setExtraStackFrame = function(h) {
        nn = h;
      }, Ie.getCurrentStack = null, Ie.getStackAddendum = function() {
        var h = "";
        nn && (h += nn);
        var C = Ie.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, _t = !1, En = !1, je = !1, Ke = !1, At = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: ct,
        ReactCurrentOwner: it
      };
      At.ReactDebugCurrentFrame = Ie, At.ReactCurrentActQueue = De;
      function Mt(h) {
        {
          for (var C = arguments.length, O = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            O[U - 1] = arguments[U];
          J("warn", h, O);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, O = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            O[U - 1] = arguments[U];
          J("error", h, O);
        }
      }
      function J(h, C, O) {
        {
          var U = At.ReactDebugCurrentFrame, q = U.getStackAddendum();
          q !== "" && (C += "%s", O = O.concat([q]));
          var ze = O.map(function(ie) {
            return String(ie);
          });
          ze.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ze);
        }
      }
      var we = {};
      function R(h, C) {
        {
          var O = h.constructor, U = O && (O.displayName || O.name) || "ReactClass", q = U + "." + C;
          if (we[q])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, U), we[q] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, O) {
          R(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, O, U) {
          R(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, O, U) {
          R(h, "setState");
        }
      }, oe = Object.assign, Ye = {};
      Object.freeze(Ye);
      function Fe(h, C, O) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = O || B;
      }
      Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Fe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var yt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, tt = function(h, C) {
          Object.defineProperty(Fe.prototype, h, {
            get: function() {
              Mt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ft in yt)
          yt.hasOwnProperty(ft) && tt(ft, yt[ft]);
      }
      function nt() {
      }
      nt.prototype = Fe.prototype;
      function jt(h, C, O) {
        this.props = h, this.context = C, this.refs = Ye, this.updater = O || B;
      }
      var Hr = jt.prototype = new nt();
      Hr.constructor = jt, oe(Hr, Fe.prototype), Hr.isPureReactComponent = !0;
      function pr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function dn(h) {
        return Vr(h);
      }
      function Yn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, O = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return O;
        }
      }
      function jn(h) {
        try {
          return Un(h), !1;
        } catch {
          return !0;
        }
      }
      function Un(h) {
        return "" + h;
      }
      function xn(h) {
        if (jn(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yn(h)), Un(h);
      }
      function Pr(h, C, O) {
        var U = h.displayName;
        if (U)
          return U;
        var q = C.displayName || C.name || "";
        return q !== "" ? O + "(" + q + ")" : O;
      }
      function Br(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Xe:
            return "Fragment";
          case $t:
            return "Portal";
          case vt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ee:
              var C = h;
              return Br(C) + ".Consumer";
            case he:
              var O = h;
              return Br(O._context) + ".Provider";
            case Me:
              return Pr(h, h.render, "ForwardRef");
            case ue:
              var U = h.displayName || null;
              return U !== null ? U : $n(h.type) || "Memo";
            case Ve: {
              var q = h, ze = q._payload, ie = q._init;
              try {
                return $n(ie(ze));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var vr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, sa, er;
      er = {};
      function $r(h) {
        if (vr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function pn(h) {
        if (vr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Mr(h, C) {
        var O = function() {
          hr || (hr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: O,
          configurable: !0
        });
      }
      function ui(h, C) {
        var O = function() {
          sa || (sa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        O.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: O,
          configurable: !0
        });
      }
      function ca(h) {
        if (typeof h.ref == "string" && it.current && h.__self && it.current.stateNode !== h.__self) {
          var C = $n(it.current.type);
          er[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), er[C] = !0);
        }
      }
      var te = function(h, C, O, U, q, ze, ie) {
        var Le = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: mt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: O,
          props: ie,
          // Record the component responsible for creating this element.
          _owner: ze
        };
        return Le._store = {}, Object.defineProperty(Le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.defineProperty(Le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
      };
      function xe(h, C, O) {
        var U, q = {}, ze = null, ie = null, Le = null, ut = null;
        if (C != null) {
          $r(C) && (ie = C.ref, ca(C)), pn(C) && (xn(C.key), ze = "" + C.key), Le = C.__self === void 0 ? null : C.__self, ut = C.__source === void 0 ? null : C.__source;
          for (U in C)
            vr.call(C, U) && !Yr.hasOwnProperty(U) && (q[U] = C[U]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          q.children = O;
        else if (Dt > 1) {
          for (var qt = Array(Dt), Yt = 0; Yt < Dt; Yt++)
            qt[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(qt), q.children = qt;
        }
        if (h && h.defaultProps) {
          var Xt = h.defaultProps;
          for (U in Xt)
            q[U] === void 0 && (q[U] = Xt[U]);
        }
        if (ze || ie) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ze && Mr(q, tn), ie && ui(q, tn);
        }
        return te(h, ze, ie, Le, ut, it.current, q);
      }
      function rt(h, C) {
        var O = te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return O;
      }
      function Ot(h, C, O) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var U, q = oe({}, h.props), ze = h.key, ie = h.ref, Le = h._self, ut = h._source, Dt = h._owner;
        if (C != null) {
          $r(C) && (ie = C.ref, Dt = it.current), pn(C) && (xn(C.key), ze = "" + C.key);
          var qt;
          h.type && h.type.defaultProps && (qt = h.type.defaultProps);
          for (U in C)
            vr.call(C, U) && !Yr.hasOwnProperty(U) && (C[U] === void 0 && qt !== void 0 ? q[U] = qt[U] : q[U] = C[U]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          q.children = O;
        else if (Yt > 1) {
          for (var Xt = Array(Yt), tn = 0; tn < Yt; tn++)
            Xt[tn] = arguments[tn + 2];
          q.children = Xt;
        }
        return te(h.type, ze, ie, Le, ut, Dt, q);
      }
      function Ut(h) {
        return typeof h == "object" && h !== null && h.$$typeof === mt;
      }
      var Dn = ".", vn = ":";
      function mr(h) {
        var C = /[=:]/g, O = {
          "=": "=0",
          ":": "=2"
        }, U = h.replace(C, function(q) {
          return O[q];
        });
        return "$" + U;
      }
      var Bt = !1, wr = /\/+/g;
      function Ft(h) {
        return h.replace(wr, "$&/");
      }
      function It(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (xn(h.key), mr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, O, U, q) {
        var ze = typeof h;
        (ze === "undefined" || ze === "boolean") && (h = null);
        var ie = !1;
        if (h === null)
          ie = !0;
        else
          switch (ze) {
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case mt:
                case $t:
                  ie = !0;
              }
          }
        if (ie) {
          var Le = h, ut = q(Le), Dt = U === "" ? Dn + It(Le, 0) : U;
          if (dn(ut)) {
            var qt = "";
            Dt != null && (qt = Ft(Dt) + "/"), Ga(ut, C, qt, "", function(Vf) {
              return Vf;
            });
          } else
            ut != null && (Ut(ut) && (ut.key && (!Le || Le.key !== ut.key) && xn(ut.key), ut = rt(
              ut,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              O + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ut.key && (!Le || Le.key !== ut.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ft("" + ut.key) + "/"
              ) : "") + Dt
            )), C.push(ut));
          return 1;
        }
        var Yt, Xt, tn = 0, ht = U === "" ? Dn : U + vn;
        if (dn(h))
          for (var Li = 0; Li < h.length; Li++)
            Yt = h[Li], Xt = ht + It(Yt, Li), tn += Ga(Yt, C, O, Xt, q);
        else {
          var Ku = at(h);
          if (typeof Ku == "function") {
            var Ko = h;
            Ku === Ko.entries && (Bt || Mt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var Hf = Ku.call(Ko), Za, Zo = 0; !(Za = Hf.next()).done; )
              Yt = Za.value, Xt = ht + It(Yt, Zo++), tn += Ga(Yt, C, O, Xt, q);
          } else if (ze === "object") {
            var Jo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Jo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Jo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function wa(h, C, O) {
        if (h == null)
          return h;
        var U = [], q = 0;
        return Ga(h, U, "", "", function(ze) {
          return C.call(O, ze, q++);
        }), U;
      }
      function il(h) {
        var C = 0;
        return wa(h, function() {
          C++;
        }), C;
      }
      function ql(h, C, O) {
        wa(h, function() {
          C.apply(this, arguments);
        }, O);
      }
      function Iu(h) {
        return wa(h, function(C) {
          return C;
        }) || [];
      }
      function _i(h) {
        if (!Ut(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ll(h) {
        var C = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: he,
          _context: C
        };
        var O = !1, U = !1, q = !1;
        {
          var ze = {
            $$typeof: ee,
            _context: C
          };
          Object.defineProperties(ze, {
            Provider: {
              get: function() {
                return U || (U = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ie) {
                C.Provider = ie;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ie) {
                C._currentValue = ie;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ie) {
                C._currentValue2 = ie;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ie) {
                C._threadCount = ie;
              }
            },
            Consumer: {
              get: function() {
                return O || (O = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ie) {
                q || (Mt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ie), q = !0);
              }
            }
          }), C.Consumer = ze;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, oi = 0, da = 1, si = 2;
      function xr(h) {
        if (h._status === fa) {
          var C = h._result, O = C();
          if (O.then(function(ze) {
            if (h._status === oi || h._status === fa) {
              var ie = h;
              ie._status = da, ie._result = ze;
            }
          }, function(ze) {
            if (h._status === oi || h._status === fa) {
              var ie = h;
              ie._status = si, ie._result = ze;
            }
          }), h._status === fa) {
            var U = h;
            U._status = oi, U._result = O;
          }
        }
        if (h._status === da) {
          var q = h._result;
          return q === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, q), "default" in q || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, q), q.default;
        } else
          throw h._result;
      }
      function pa(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, O = {
          $$typeof: Ve,
          _payload: C,
          _init: xr
        };
        {
          var U, q;
          Object.defineProperties(O, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return U;
              },
              set: function(ze) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = ze, Object.defineProperty(O, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(ze) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = ze, Object.defineProperty(O, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return O;
      }
      function ci(h) {
        h != null && h.$$typeof === ue ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Me,
          render: h
        };
        {
          var O;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return O;
            },
            set: function(U) {
              O = U, !h.name && !h.displayName && (h.displayName = U);
            }
          });
        }
        return C;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Xe || h === vt || Ke || h === S || h === Z || h === le || je || h === Rt || Qt || _t || En || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === ue || h.$$typeof === he || h.$$typeof === ee || h.$$typeof === Me || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Y(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var O = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var U;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(q) {
              U = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return O;
      }
      function de() {
        var h = We.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function qe(h) {
        var C = de();
        if (h._context !== void 0) {
          var O = h._context;
          O.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : O.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function gt(h) {
        var C = de();
        return C.useState(h);
      }
      function Ze(h, C, O) {
        var U = de();
        return U.useReducer(h, C, O);
      }
      function ke(h) {
        var C = de();
        return C.useRef(h);
      }
      function Nn(h, C) {
        var O = de();
        return O.useEffect(h, C);
      }
      function Jt(h, C) {
        var O = de();
        return O.useInsertionEffect(h, C);
      }
      function en(h, C) {
        var O = de();
        return O.useLayoutEffect(h, C);
      }
      function tr(h, C) {
        var O = de();
        return O.useCallback(h, C);
      }
      function fi(h, C) {
        var O = de();
        return O.useMemo(h, C);
      }
      function Hu(h, C, O) {
        var U = de();
        return U.useImperativeHandle(h, C, O);
      }
      function wt(h, C) {
        {
          var O = de();
          return O.useDebugValue(h, C);
        }
      }
      function Ff() {
        var h = de();
        return h.useTransition();
      }
      function qa(h) {
        var C = de();
        return C.useDeferredValue(h);
      }
      function lt() {
        var h = de();
        return h.useId();
      }
      function di(h, C, O) {
        var U = de();
        return U.useSyncExternalStore(h, C, O);
      }
      var ul = 0, Vu, ol, Qr, Wo, Dr, Go, qo;
      function Ks() {
      }
      Ks.__reactDisabledLog = !0;
      function Pu() {
        {
          if (ul === 0) {
            Vu = console.log, ol = console.info, Qr = console.warn, Wo = console.error, Dr = console.group, Go = console.groupCollapsed, qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ks,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          ul++;
        }
      }
      function sl() {
        {
          if (ul--, ul === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: oe({}, h, {
                value: Vu
              }),
              info: oe({}, h, {
                value: ol
              }),
              warn: oe({}, h, {
                value: Qr
              }),
              error: oe({}, h, {
                value: Wo
              }),
              group: oe({}, h, {
                value: Dr
              }),
              groupCollapsed: oe({}, h, {
                value: Go
              }),
              groupEnd: oe({}, h, {
                value: qo
              })
            });
          }
          ul < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Xa = At.ReactCurrentDispatcher, br;
      function cl(h, C, O) {
        {
          if (br === void 0)
            try {
              throw Error();
            } catch (q) {
              var U = q.stack.trim().match(/\n( *(at )?)/);
              br = U && U[1] || "";
            }
          return `
` + br + h;
        }
      }
      var fl = !1, dl;
      {
        var Bu = typeof WeakMap == "function" ? WeakMap : Map;
        dl = new Bu();
      }
      function Yu(h, C) {
        if (!h || fl)
          return "";
        {
          var O = dl.get(h);
          if (O !== void 0)
            return O;
        }
        var U;
        fl = !0;
        var q = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ze;
        ze = Xa.current, Xa.current = null, Pu();
        try {
          if (C) {
            var ie = function() {
              throw Error();
            };
            if (Object.defineProperty(ie.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ie, []);
              } catch (ht) {
                U = ht;
              }
              Reflect.construct(h, [], ie);
            } else {
              try {
                ie.call();
              } catch (ht) {
                U = ht;
              }
              h.call(ie.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ht) {
              U = ht;
            }
            h();
          }
        } catch (ht) {
          if (ht && U && typeof ht.stack == "string") {
            for (var Le = ht.stack.split(`
`), ut = U.stack.split(`
`), Dt = Le.length - 1, qt = ut.length - 1; Dt >= 1 && qt >= 0 && Le[Dt] !== ut[qt]; )
              qt--;
            for (; Dt >= 1 && qt >= 0; Dt--, qt--)
              if (Le[Dt] !== ut[qt]) {
                if (Dt !== 1 || qt !== 1)
                  do
                    if (Dt--, qt--, qt < 0 || Le[Dt] !== ut[qt]) {
                      var Yt = `
` + Le[Dt].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && dl.set(h, Yt), Yt;
                    }
                  while (Dt >= 1 && qt >= 0);
                break;
              }
          }
        } finally {
          fl = !1, Xa.current = ze, sl(), Error.prepareStackTrace = q;
        }
        var Xt = h ? h.displayName || h.name : "", tn = Xt ? cl(Xt) : "";
        return typeof h == "function" && dl.set(h, tn), tn;
      }
      function ki(h, C, O) {
        return Yu(h, !1);
      }
      function If(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function pi(h, C, O) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Yu(h, If(h));
        if (typeof h == "string")
          return cl(h);
        switch (h) {
          case Z:
            return cl("Suspense");
          case le:
            return cl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Me:
              return ki(h.render);
            case ue:
              return pi(h.type, C, O);
            case Ve: {
              var U = h, q = U._payload, ze = U._init;
              try {
                return pi(ze(q), C, O);
              } catch {
              }
            }
          }
        return "";
      }
      var kt = {}, $u = At.ReactDebugCurrentFrame;
      function Xl(h) {
        if (h) {
          var C = h._owner, O = pi(h.type, h._source, C ? C.type : null);
          $u.setExtraStackFrame(O);
        } else
          $u.setExtraStackFrame(null);
      }
      function Qu(h, C, O, U, q) {
        {
          var ze = Function.call.bind(vr);
          for (var ie in h)
            if (ze(h, ie)) {
              var Le = void 0;
              try {
                if (typeof h[ie] != "function") {
                  var ut = Error((U || "React class") + ": " + O + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                Le = h[ie](C, ie, U, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                Le = Dt;
              }
              Le && !(Le instanceof Error) && (Xl(q), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", O, ie, typeof Le), Xl(null)), Le instanceof Error && !(Le.message in kt) && (kt[Le.message] = !0, Xl(q), ye("Failed %s type: %s", O, Le.message), Xl(null));
            }
        }
      }
      function xt(h) {
        if (h) {
          var C = h._owner, O = pi(h.type, h._source, C ? C.type : null);
          wn(O);
        } else
          wn(null);
      }
      var Wu;
      Wu = !1;
      function Gu() {
        if (it.current) {
          var h = $n(it.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function $e(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), O = h.lineNumber;
          return `

Check your code at ` + C + ":" + O + ".";
        }
        return "";
      }
      function Kl(h) {
        return h != null ? $e(h.__source) : "";
      }
      var hn = {};
      function Wr(h) {
        var C = Gu();
        if (!C) {
          var O = typeof h == "string" ? h : h.displayName || h.name;
          O && (C = `

Check the top-level render call using <` + O + ">.");
        }
        return C;
      }
      function _r(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var O = Wr(C);
          if (!hn[O]) {
            hn[O] = !0;
            var U = "";
            h && h._owner && h._owner !== it.current && (U = " It was passed a child from " + $n(h._owner.type) + "."), xt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, U), xt(null);
          }
        }
      }
      function pl(h, C) {
        if (typeof h == "object") {
          if (dn(h))
            for (var O = 0; O < h.length; O++) {
              var U = h[O];
              Ut(U) && _r(U, C);
            }
          else if (Ut(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var q = at(h);
            if (typeof q == "function" && q !== h.entries)
              for (var ze = q.call(h), ie; !(ie = ze.next()).done; )
                Ut(ie.value) && _r(ie.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var O;
          if (typeof C == "function")
            O = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Me || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            O = C.propTypes;
          else
            return;
          if (O) {
            var U = $n(C);
            Qu(O, h.props, "prop", U, h);
          } else if (C.PropTypes !== void 0 && !Wu) {
            Wu = !0;
            var q = $n(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ht(h) {
        {
          for (var C = Object.keys(h.props), O = 0; O < C.length; O++) {
            var U = C[O];
            if (U !== "children" && U !== "key") {
              xt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), xt(null);
              break;
            }
          }
          h.ref !== null && (xt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
        }
      }
      function Zs(h, C, O) {
        var U = Y(h);
        if (!U) {
          var q = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = Kl(C);
          ze ? q += ze : q += Gu();
          var ie;
          h === null ? ie = "null" : dn(h) ? ie = "array" : h !== void 0 && h.$$typeof === mt ? (ie = "<" + ($n(h.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, q);
        }
        var Le = xe.apply(this, arguments);
        if (Le == null)
          return Le;
        if (U)
          for (var ut = 2; ut < arguments.length; ut++)
            pl(arguments[ut], h);
        return h === Xe ? Ht(Le) : Cn(Le), Le;
      }
      var Gr = !1;
      function Qn(h) {
        var C = Zs.bind(null, h);
        return C.type = h, Gr || (Gr = !0, Mt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Mt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function vi(h, C, O) {
        for (var U = Ot.apply(this, arguments), q = 2; q < arguments.length; q++)
          pl(arguments[q], U.type);
        return Cn(U), U;
      }
      function Js(h, C) {
        var O = ct.transition;
        ct.transition = {};
        var U = ct.transition;
        ct.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ct.transition = O, O === null && U._updatedFibers) {
            var q = U._updatedFibers.size;
            q > 10 && Mt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
          }
        }
      }
      var Ni = !1, vl = null;
      function ec(h) {
        if (vl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), O = P && P[C];
            vl = O.call(P, "timers").setImmediate;
          } catch {
            vl = function(q) {
              Ni === !1 && (Ni = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ze = new MessageChannel();
              ze.port1.onmessage = q, ze.port2.postMessage(void 0);
            };
          }
        return vl(h);
      }
      var xa = 0, hl = !1;
      function ml(h) {
        {
          var C = xa;
          xa++, De.current === null && (De.current = []);
          var O = De.isBatchingLegacy, U;
          try {
            if (De.isBatchingLegacy = !0, U = h(), !O && De.didScheduleLegacyUpdate) {
              var q = De.current;
              q !== null && (De.didScheduleLegacyUpdate = !1, gl(q));
            }
          } catch (Xt) {
            throw Da(C), Xt;
          } finally {
            De.isBatchingLegacy = O;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var ze = U, ie = !1, Le = {
              then: function(Xt, tn) {
                ie = !0, ze.then(function(ht) {
                  Da(C), xa === 0 ? qu(ht, Xt, tn) : Xt(ht);
                }, function(ht) {
                  Da(C), tn(ht);
                });
              }
            };
            return !hl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ie || (hl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Le;
          } else {
            var ut = U;
            if (Da(C), xa === 0) {
              var Dt = De.current;
              Dt !== null && (gl(Dt), De.current = null);
              var qt = {
                then: function(Xt, tn) {
                  De.current === null ? (De.current = [], qu(ut, Xt, tn)) : Xt(ut);
                }
              };
              return qt;
            } else {
              var Yt = {
                then: function(Xt, tn) {
                  Xt(ut);
                }
              };
              return Yt;
            }
          }
        }
      }
      function Da(h) {
        h !== xa - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xa = h;
      }
      function qu(h, C, O) {
        {
          var U = De.current;
          if (U !== null)
            try {
              gl(U), ec(function() {
                U.length === 0 ? (De.current = null, C(h)) : qu(h, C, O);
              });
            } catch (q) {
              O(q);
            }
          else
            C(h);
        }
      }
      var yl = !1;
      function gl(h) {
        if (!yl) {
          yl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var O = h[C];
              do
                O = O(!0);
              while (O !== null);
            }
            h.length = 0;
          } catch (U) {
            throw h = h.slice(C + 1), U;
          } finally {
            yl = !1;
          }
        }
      }
      var Zl = Zs, Xu = vi, Xo = Qn, Ka = {
        map: wa,
        forEach: ql,
        count: il,
        toArray: Iu,
        only: _i
      };
      X.Children = Ka, X.Component = Fe, X.Fragment = Xe, X.Profiler = vt, X.PureComponent = jt, X.StrictMode = S, X.Suspense = Z, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, X.cloneElement = Xu, X.createContext = ll, X.createElement = Zl, X.createFactory = Xo, X.createRef = pr, X.forwardRef = ci, X.isValidElement = Ut, X.lazy = pa, X.memo = ne, X.startTransition = Js, X.unstable_act = ml, X.useCallback = tr, X.useContext = qe, X.useDebugValue = wt, X.useDeferredValue = qa, X.useEffect = Nn, X.useId = lt, X.useImperativeHandle = Hu, X.useInsertionEffect = Jt, X.useLayoutEffect = en, X.useMemo = fi, X.useReducer = Ze, X.useRef = ke, X.useState = gt, X.useSyncExternalStore = di, X.useTransition = Ff, X.version = j, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(WD, qp)), qp;
}
(function(P) {
  process.env.NODE_ENV === "production" ? P.exports = QD() : P.exports = GD();
})($D);
const qD = /* @__PURE__ */ r1(Qo);
var f0 = {}, XD = {
  get exports() {
    return f0;
  },
  set exports(P) {
    f0 = P;
  }
}, $a = {}, jm = {}, KD = {
  get exports() {
    return jm;
  },
  set exports(P) {
    jm = P;
  }
}, s0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GT;
function ZD() {
  return GT || (GT = 1, function(P) {
    function X(J, we) {
      var R = J.length;
      J.push(we);
      e:
        for (; 0 < R; ) {
          var B = R - 1 >>> 1, oe = J[B];
          if (0 < $t(oe, we))
            J[B] = we, J[R] = oe, R = B;
          else
            break e;
        }
    }
    function j(J) {
      return J.length === 0 ? null : J[0];
    }
    function mt(J) {
      if (J.length === 0)
        return null;
      var we = J[0], R = J.pop();
      if (R !== we) {
        J[0] = R;
        e:
          for (var B = 0, oe = J.length, Ye = oe >>> 1; B < Ye; ) {
            var Fe = 2 * (B + 1) - 1, yt = J[Fe], tt = Fe + 1, ft = J[tt];
            if (0 > $t(yt, R))
              tt < oe && 0 > $t(ft, yt) ? (J[B] = ft, J[tt] = R, B = tt) : (J[B] = yt, J[Fe] = R, B = Fe);
            else if (tt < oe && 0 > $t(ft, R))
              J[B] = ft, J[tt] = R, B = tt;
            else
              break e;
          }
      }
      return we;
    }
    function $t(J, we) {
      var R = J.sortIndex - we.sortIndex;
      return R !== 0 ? R : J.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Xe = performance;
      P.unstable_now = function() {
        return Xe.now();
      };
    } else {
      var S = Date, vt = S.now();
      P.unstable_now = function() {
        return S.now() - vt;
      };
    }
    var he = [], ee = [], Me = 1, Z = null, le = 3, ue = !1, Ve = !1, Rt = !1, st = typeof setTimeout == "function" ? setTimeout : null, fn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(J) {
      for (var we = j(ee); we !== null; ) {
        if (we.callback === null)
          mt(ee);
        else if (we.startTime <= J)
          mt(ee), we.sortIndex = we.expirationTime, X(he, we);
        else
          break;
        we = j(ee);
      }
    }
    function ct(J) {
      if (Rt = !1, We(J), !Ve)
        if (j(he) !== null)
          Ve = !0, Mt(De);
        else {
          var we = j(ee);
          we !== null && ye(ct, we.startTime - J);
        }
    }
    function De(J, we) {
      Ve = !1, Rt && (Rt = !1, fn(nn), nn = -1), ue = !0;
      var R = le;
      try {
        for (We(we), Z = j(he); Z !== null && (!(Z.expirationTime > we) || J && !_t()); ) {
          var B = Z.callback;
          if (typeof B == "function") {
            Z.callback = null, le = Z.priorityLevel;
            var oe = B(Z.expirationTime <= we);
            we = P.unstable_now(), typeof oe == "function" ? Z.callback = oe : Z === j(he) && mt(he), We(we);
          } else
            mt(he);
          Z = j(he);
        }
        if (Z !== null)
          var Ye = !0;
        else {
          var Fe = j(ee);
          Fe !== null && ye(ct, Fe.startTime - we), Ye = !1;
        }
        return Ye;
      } finally {
        Z = null, le = R, ue = !1;
      }
    }
    var it = !1, Ie = null, nn = -1, wn = 5, Qt = -1;
    function _t() {
      return !(P.unstable_now() - Qt < wn);
    }
    function En() {
      if (Ie !== null) {
        var J = P.unstable_now();
        Qt = J;
        var we = !0;
        try {
          we = Ie(!0, J);
        } finally {
          we ? je() : (it = !1, Ie = null);
        }
      } else
        it = !1;
    }
    var je;
    if (typeof at == "function")
      je = function() {
        at(En);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), At = Ke.port2;
      Ke.port1.onmessage = En, je = function() {
        At.postMessage(null);
      };
    } else
      je = function() {
        st(En, 0);
      };
    function Mt(J) {
      Ie = J, it || (it = !0, je());
    }
    function ye(J, we) {
      nn = st(function() {
        J(P.unstable_now());
      }, we);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, P.unstable_continueExecution = function() {
      Ve || ue || (Ve = !0, Mt(De));
    }, P.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < J ? Math.floor(1e3 / J) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return le;
    }, P.unstable_getFirstCallbackNode = function() {
      return j(he);
    }, P.unstable_next = function(J) {
      switch (le) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = le;
      }
      var R = le;
      le = we;
      try {
        return J();
      } finally {
        le = R;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function(J, we) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var R = le;
      le = J;
      try {
        return we();
      } finally {
        le = R;
      }
    }, P.unstable_scheduleCallback = function(J, we, R) {
      var B = P.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? B + R : B) : R = B, J) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return oe = R + oe, J = { id: Me++, callback: we, priorityLevel: J, startTime: R, expirationTime: oe, sortIndex: -1 }, R > B ? (J.sortIndex = R, X(ee, J), j(he) === null && J === j(ee) && (Rt ? (fn(nn), nn = -1) : Rt = !0, ye(ct, R - B))) : (J.sortIndex = oe, X(he, J), Ve || ue || (Ve = !0, Mt(De))), J;
    }, P.unstable_shouldYield = _t, P.unstable_wrapCallback = function(J) {
      var we = le;
      return function() {
        var R = le;
        le = we;
        try {
          return J.apply(this, arguments);
        } finally {
          le = R;
        }
      };
    };
  }(s0)), s0;
}
var c0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qT;
function JD() {
  return qT || (qT = 1, function(P) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, j = !1, mt = 5;
      function $t(te, xe) {
        var rt = te.length;
        te.push(xe), vt(te, xe, rt);
      }
      function Xe(te) {
        return te.length === 0 ? null : te[0];
      }
      function S(te) {
        if (te.length === 0)
          return null;
        var xe = te[0], rt = te.pop();
        return rt !== xe && (te[0] = rt, he(te, rt, 0)), xe;
      }
      function vt(te, xe, rt) {
        for (var Ot = rt; Ot > 0; ) {
          var Ut = Ot - 1 >>> 1, Dn = te[Ut];
          if (ee(Dn, xe) > 0)
            te[Ut] = xe, te[Ot] = Dn, Ot = Ut;
          else
            return;
        }
      }
      function he(te, xe, rt) {
        for (var Ot = rt, Ut = te.length, Dn = Ut >>> 1; Ot < Dn; ) {
          var vn = (Ot + 1) * 2 - 1, mr = te[vn], Bt = vn + 1, wr = te[Bt];
          if (ee(mr, xe) < 0)
            Bt < Ut && ee(wr, mr) < 0 ? (te[Ot] = wr, te[Bt] = xe, Ot = Bt) : (te[Ot] = mr, te[vn] = xe, Ot = vn);
          else if (Bt < Ut && ee(wr, xe) < 0)
            te[Ot] = wr, te[Bt] = xe, Ot = Bt;
          else
            return;
        }
      }
      function ee(te, xe) {
        var rt = te.sortIndex - xe.sortIndex;
        return rt !== 0 ? rt : te.id - xe.id;
      }
      var Me = 1, Z = 2, le = 3, ue = 4, Ve = 5;
      function Rt(te, xe) {
      }
      var st = typeof performance == "object" && typeof performance.now == "function";
      if (st) {
        var fn = performance;
        P.unstable_now = function() {
          return fn.now();
        };
      } else {
        var at = Date, We = at.now();
        P.unstable_now = function() {
          return at.now() - We;
        };
      }
      var ct = 1073741823, De = -1, it = 250, Ie = 5e3, nn = 1e4, wn = ct, Qt = [], _t = [], En = 1, je = null, Ke = le, At = !1, Mt = !1, ye = !1, J = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(te) {
        for (var xe = Xe(_t); xe !== null; ) {
          if (xe.callback === null)
            S(_t);
          else if (xe.startTime <= te)
            S(_t), xe.sortIndex = xe.expirationTime, $t(Qt, xe);
          else
            return;
          xe = Xe(_t);
        }
      }
      function oe(te) {
        if (ye = !1, B(te), !Mt)
          if (Xe(Qt) !== null)
            Mt = !0, $r(Ye);
          else {
            var xe = Xe(_t);
            xe !== null && pn(oe, xe.startTime - te);
          }
      }
      function Ye(te, xe) {
        Mt = !1, ye && (ye = !1, Mr()), At = !0;
        var rt = Ke;
        try {
          var Ot;
          if (!j)
            return Fe(te, xe);
        } finally {
          je = null, Ke = rt, At = !1;
        }
      }
      function Fe(te, xe) {
        var rt = xe;
        for (B(rt), je = Xe(Qt); je !== null && !X && !(je.expirationTime > rt && (!te || Br())); ) {
          var Ot = je.callback;
          if (typeof Ot == "function") {
            je.callback = null, Ke = je.priorityLevel;
            var Ut = je.expirationTime <= rt, Dn = Ot(Ut);
            rt = P.unstable_now(), typeof Dn == "function" ? je.callback = Dn : je === Xe(Qt) && S(Qt), B(rt);
          } else
            S(Qt);
          je = Xe(Qt);
        }
        if (je !== null)
          return !0;
        var vn = Xe(_t);
        return vn !== null && pn(oe, vn.startTime - rt), !1;
      }
      function yt(te, xe) {
        switch (te) {
          case Me:
          case Z:
          case le:
          case ue:
          case Ve:
            break;
          default:
            te = le;
        }
        var rt = Ke;
        Ke = te;
        try {
          return xe();
        } finally {
          Ke = rt;
        }
      }
      function tt(te) {
        var xe;
        switch (Ke) {
          case Me:
          case Z:
          case le:
            xe = le;
            break;
          default:
            xe = Ke;
            break;
        }
        var rt = Ke;
        Ke = xe;
        try {
          return te();
        } finally {
          Ke = rt;
        }
      }
      function ft(te) {
        var xe = Ke;
        return function() {
          var rt = Ke;
          Ke = xe;
          try {
            return te.apply(this, arguments);
          } finally {
            Ke = rt;
          }
        };
      }
      function nt(te, xe, rt) {
        var Ot = P.unstable_now(), Ut;
        if (typeof rt == "object" && rt !== null) {
          var Dn = rt.delay;
          typeof Dn == "number" && Dn > 0 ? Ut = Ot + Dn : Ut = Ot;
        } else
          Ut = Ot;
        var vn;
        switch (te) {
          case Me:
            vn = De;
            break;
          case Z:
            vn = it;
            break;
          case Ve:
            vn = wn;
            break;
          case ue:
            vn = nn;
            break;
          case le:
          default:
            vn = Ie;
            break;
        }
        var mr = Ut + vn, Bt = {
          id: En++,
          callback: xe,
          priorityLevel: te,
          startTime: Ut,
          expirationTime: mr,
          sortIndex: -1
        };
        return Ut > Ot ? (Bt.sortIndex = Ut, $t(_t, Bt), Xe(Qt) === null && Bt === Xe(_t) && (ye ? Mr() : ye = !0, pn(oe, Ut - Ot))) : (Bt.sortIndex = mr, $t(Qt, Bt), !Mt && !At && (Mt = !0, $r(Ye))), Bt;
      }
      function jt() {
      }
      function Hr() {
        !Mt && !At && (Mt = !0, $r(Ye));
      }
      function pr() {
        return Xe(Qt);
      }
      function Vr(te) {
        te.callback = null;
      }
      function dn() {
        return Ke;
      }
      var Yn = !1, jn = null, Un = -1, xn = mt, Pr = -1;
      function Br() {
        var te = P.unstable_now() - Pr;
        return !(te < xn);
      }
      function $n() {
      }
      function vr(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? xn = Math.floor(1e3 / te) : xn = mt;
      }
      var Yr = function() {
        if (jn !== null) {
          var te = P.unstable_now();
          Pr = te;
          var xe = !0, rt = !0;
          try {
            rt = jn(xe, te);
          } finally {
            rt ? hr() : (Yn = !1, jn = null);
          }
        } else
          Yn = !1;
      }, hr;
      if (typeof R == "function")
        hr = function() {
          R(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var sa = new MessageChannel(), er = sa.port2;
        sa.port1.onmessage = Yr, hr = function() {
          er.postMessage(null);
        };
      } else
        hr = function() {
          J(Yr, 0);
        };
      function $r(te) {
        jn = te, Yn || (Yn = !0, hr());
      }
      function pn(te, xe) {
        Un = J(function() {
          te(P.unstable_now());
        }, xe);
      }
      function Mr() {
        we(Un), Un = -1;
      }
      var ui = $n, ca = null;
      P.unstable_IdlePriority = Ve, P.unstable_ImmediatePriority = Me, P.unstable_LowPriority = ue, P.unstable_NormalPriority = le, P.unstable_Profiling = ca, P.unstable_UserBlockingPriority = Z, P.unstable_cancelCallback = Vr, P.unstable_continueExecution = Hr, P.unstable_forceFrameRate = vr, P.unstable_getCurrentPriorityLevel = dn, P.unstable_getFirstCallbackNode = pr, P.unstable_next = tt, P.unstable_pauseExecution = jt, P.unstable_requestPaint = ui, P.unstable_runWithPriority = yt, P.unstable_scheduleCallback = nt, P.unstable_shouldYield = Br, P.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(c0)), c0;
}
var XT;
function a1() {
  return XT || (XT = 1, function(P) {
    process.env.NODE_ENV === "production" ? P.exports = ZD() : P.exports = JD();
  }(KD)), jm;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KT;
function eb() {
  if (KT)
    return $a;
  KT = 1;
  var P = Qo, X = a1();
  function j(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var mt = /* @__PURE__ */ new Set(), $t = {};
  function Xe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for ($t[n] = r, n = 0; n < r.length; n++)
      mt.add(r[n]);
  }
  var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), he = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Me = {}, Z = {};
  function le(n) {
    return he.call(Z, n) ? !0 : he.call(Me, n) ? !1 : ee.test(n) ? Z[n] = !0 : (Me[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Rt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var st = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    st[n] = new Rt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    st[r] = new Rt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    st[n] = new Rt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    st[n] = new Rt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    st[n] = new Rt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    st[n] = new Rt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    st[n] = new Rt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    st[n] = new Rt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    st[n] = new Rt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fn,
      at
    );
    st[r] = new Rt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Rt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fn, at);
    st[r] = new Rt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    st[n] = new Rt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), st.xlinkHref = new Rt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    st[n] = new Rt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = st.hasOwnProperty(r) ? st[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, l, c, o) && (l = null), o || c === null ? le(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ct = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = Symbol.for("react.element"), it = Symbol.for("react.portal"), Ie = Symbol.for("react.fragment"), nn = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), Qt = Symbol.for("react.provider"), _t = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), je = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, B;
  function oe(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Ye = !1;
  function Fe(n, r) {
    if (!n || Ye)
      return "";
    Ye = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var M = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", n.displayName)), M;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? oe(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return oe(n.type);
      case 16:
        return oe("Lazy");
      case 13:
        return oe("Suspense");
      case 19:
        return oe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Fe(n.type, !1), n;
      case 11:
        return n = Fe(n.type.render, !1), n;
      case 1:
        return n = Fe(n.type, !0), n;
      default:
        return "";
    }
  }
  function tt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ie:
        return "Fragment";
      case it:
        return "Portal";
      case wn:
        return "Profiler";
      case nn:
        return "StrictMode";
      case je:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case _t:
          return (n.displayName || "Context") + ".Consumer";
        case Qt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case At:
          return r = n.displayName || null, r !== null ? r : tt(n.type) || "Memo";
        case Mt:
          r = n._payload, n = n._init;
          try {
            return tt(n(r));
          } catch {
          }
      }
    return null;
  }
  function ft(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return tt(r);
      case 8:
        return r === nn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function nt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function jt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Hr(n) {
    var r = jt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function pr(n) {
    n._valueTracker || (n._valueTracker = Hr(n));
  }
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = jt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function dn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function jn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = nt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Un(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function xn(n, r) {
    Un(n, r);
    var l = nt(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Br(n, r.type, l) : r.hasOwnProperty("defaultValue") && Br(n, r.type, nt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Pr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Br(n, r, l) {
    (r !== "number" || dn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var $n = Array.isArray;
  function vr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + nt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(j(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(j(92));
        if ($n(l)) {
          if (1 < l.length)
            throw Error(j(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: nt(l) };
  }
  function sa(n, r) {
    var l = nt(r.value), o = nt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function er(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function $r(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function pn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? $r(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Mr, ui = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Mr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var te = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(te).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), te[r] = te[n];
    });
  });
  function rt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || te.hasOwnProperty(n) && te[n] ? ("" + r).trim() : r + "px";
  }
  function Ot(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = rt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ut = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(j(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(j(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(j(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(j(62));
    }
  }
  function vn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mr = null;
  function Bt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var wr = null, Ft = null, It = null;
  function Ga(n) {
    if (n = cs(n)) {
      if (typeof wr != "function")
        throw Error(j(280));
      var r = n.stateNode;
      r && (r = _e(r), wr(n.stateNode, n.type, r));
    }
  }
  function wa(n) {
    Ft ? It ? It.push(n) : It = [n] : Ft = n;
  }
  function il() {
    if (Ft) {
      var n = Ft, r = It;
      if (It = Ft = null, Ga(n), r)
        for (n = 0; n < r.length; n++)
          Ga(r[n]);
    }
  }
  function ql(n, r) {
    return n(r);
  }
  function Iu() {
  }
  var _i = !1;
  function ll(n, r, l) {
    if (_i)
      return n(r, l);
    _i = !0;
    try {
      return ql(n, r, l);
    } finally {
      _i = !1, (Ft !== null || It !== null) && (Iu(), il());
    }
  }
  function fa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = _e(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(j(231, r, typeof l));
    return l;
  }
  var oi = !1;
  if (vt)
    try {
      var da = {};
      Object.defineProperty(da, "passive", { get: function() {
        oi = !0;
      } }), window.addEventListener("test", da, da), window.removeEventListener("test", da, da);
    } catch {
      oi = !1;
    }
  function si(n, r, l, o, c, d, m, E, M) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var xr = !1, pa = null, ci = !1, T = null, Y = { onError: function(n) {
    xr = !0, pa = n;
  } };
  function ne(n, r, l, o, c, d, m, E, M) {
    xr = !1, pa = null, si.apply(Y, arguments);
  }
  function de(n, r, l, o, c, d, m, E, M) {
    if (ne.apply(this, arguments), xr) {
      if (xr) {
        var A = pa;
        xr = !1, pa = null;
      } else
        throw Error(j(198));
      ci || (ci = !0, T = A);
    }
  }
  function qe(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ze(n) {
    if (qe(n) !== n)
      throw Error(j(188));
  }
  function ke(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null)
        throw Error(j(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Ze(c), n;
          if (d === o)
            return Ze(c), r;
          d = d.sibling;
        }
        throw Error(j(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(j(189));
        }
      }
      if (l.alternate !== o)
        throw Error(j(190));
    }
    if (l.tag !== 3)
      throw Error(j(188));
    return l.stateNode.current === l ? n : r;
  }
  function Nn(n) {
    return n = ke(n), n !== null ? Jt(n) : null;
  }
  function Jt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Jt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var en = X.unstable_scheduleCallback, tr = X.unstable_cancelCallback, fi = X.unstable_shouldYield, Hu = X.unstable_requestPaint, wt = X.unstable_now, Ff = X.unstable_getCurrentPriorityLevel, qa = X.unstable_ImmediatePriority, lt = X.unstable_UserBlockingPriority, di = X.unstable_NormalPriority, ul = X.unstable_LowPriority, Vu = X.unstable_IdlePriority, ol = null, Qr = null;
  function Wo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Dr = Math.clz32 ? Math.clz32 : Ks, Go = Math.log, qo = Math.LN2;
  function Ks(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Go(n) / qo | 0) | 0;
  }
  var Pu = 64, sl = 4194304;
  function Xa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function br(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Xa(E) : (d &= m, d !== 0 && (o = Xa(d)));
    } else
      m = l & ~c, m !== 0 ? o = Xa(m) : d !== 0 && (o = Xa(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, M = c[m];
      M === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : M <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bu() {
    var n = Pu;
    return Pu <<= 1, !(Pu & 4194240) && (Pu = 64), n;
  }
  function Yu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function If(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function pi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var kt = 0;
  function $u(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Xl, Qu, xt, Wu, Gu, $e = !1, Kl = [], hn = null, Wr = null, _r = null, pl = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Ht = [], Zs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        _r = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && Qu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function vi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return hn = Qn(hn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = Qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return _r = Qn(_r, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return pl.set(d, Qn(pl.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Js(n) {
    var r = _a(n.target);
    if (r !== null) {
      var l = qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = gt(l), r !== null) {
            n.blockedOn = r, Gu(n.priority, function() {
              xt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ni(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        mr = o, l.target.dispatchEvent(o), mr = null;
      } else
        return r = cs(l), r !== null && Qu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function vl(n, r, l) {
    Ni(n) && l.delete(r);
  }
  function ec() {
    $e = !1, hn !== null && Ni(hn) && (hn = null), Wr !== null && Ni(Wr) && (Wr = null), _r !== null && Ni(_r) && (_r = null), pl.forEach(vl), Cn.forEach(vl);
  }
  function xa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, $e || ($e = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, ec)));
  }
  function hl(n) {
    function r(c) {
      return xa(c, n);
    }
    if (0 < Kl.length) {
      xa(Kl[0], n);
      for (var l = 1; l < Kl.length; l++) {
        var o = Kl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (hn !== null && xa(hn, n), Wr !== null && xa(Wr, n), _r !== null && xa(_r, n), pl.forEach(r), Cn.forEach(r), l = 0; l < Ht.length; l++)
      o = Ht[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ht.length && (l = Ht[0], l.blockedOn === null); )
      Js(l), l.blockedOn === null && Ht.shift();
  }
  var ml = ct.ReactCurrentBatchConfig, Da = !0;
  function qu(n, r, l, o) {
    var c = kt, d = ml.transition;
    ml.transition = null;
    try {
      kt = 1, gl(n, r, l, o);
    } finally {
      kt = c, ml.transition = d;
    }
  }
  function yl(n, r, l, o) {
    var c = kt, d = ml.transition;
    ml.transition = null;
    try {
      kt = 4, gl(n, r, l, o);
    } finally {
      kt = c, ml.transition = d;
    }
  }
  function gl(n, r, l, o) {
    if (Da) {
      var c = Xu(n, r, l, o);
      if (c === null)
        sc(n, r, o, Zl, l), Gr(n, o);
      else if (vi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Zs.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Xl(d), d = Xu(n, r, l, o), d === null && sc(n, r, o, Zl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        sc(n, r, o, null, l);
    }
  }
  var Zl = null;
  function Xu(n, r, l, o) {
    if (Zl = null, n = Bt(o), n = _a(n), n !== null)
      if (r = qe(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = gt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Zl = n, null;
  }
  function Xo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ff()) {
          case qa:
            return 1;
          case lt:
            return 4;
          case di:
          case ul:
            return 16;
          case Vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ka = null, h = null, C = null;
  function O() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Ka ? Ka.value : Ka.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function U(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function q() {
    return !0;
  }
  function ze() {
    return !1;
  }
  function ie(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? q : ze, this.isPropagationStopped = ze, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = q);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = q);
    }, persist: function() {
    }, isPersistent: q }), r;
  }
  var Le = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ut = ie(Le), Dt = R({}, Le, { view: 0, detail: 0 }), qt = ie(Dt), Yt, Xt, tn, ht = R({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tn && (tn && n.type === "mousemove" ? (Yt = n.screenX - tn.screenX, Xt = n.screenY - tn.screenY) : Xt = Yt = 0, tn = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xt;
  } }), Li = ie(ht), Ku = R({}, ht, { dataTransfer: 0 }), Ko = ie(Ku), Hf = R({}, Dt, { relatedTarget: 0 }), Za = ie(Hf), Zo = R({}, Le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Jo = ie(Zo), Vf = R({}, Le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fm = ie(Vf), Im = R({}, Le, { data: 0 }), Pf = ie(Im), Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Xp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function Yf() {
    return Zp;
  }
  var Oi = R({}, Dt, { key: function(n) {
    if (n.key) {
      var r = Bf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = U(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yf, charCode: function(n) {
    return n.type === "keypress" ? U(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? U(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hm = ie(Oi), $f = R({}, ht, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tc = ie($f), Qf = R({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yf }), Vm = ie(Qf), nc = R({}, Le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ie(nc), qr = R({}, ht, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zi = ie(qr), Ln = [9, 13, 27, 32], Ja = vt && "CompositionEvent" in window, Jl = null;
  vt && "documentMode" in document && (Jl = document.documentMode);
  var rc = vt && "TextEvent" in window && !Jl, ev = vt && (!Ja || Jl && 8 < Jl && 11 >= Jl), Zu = String.fromCharCode(32), tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return Ln.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ac(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Ju = !1;
  function Pm(n, r) {
    switch (n) {
      case "compositionend":
        return ac(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Zu);
      case "textInput":
        return n = r.data, n === Zu && tv ? null : n;
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if (Ju)
      return n === "compositionend" || !Ja && nv(n, r) ? (n = O(), C = h = Ka = null, Ju = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    wa(o), r = us(r, "onChange"), 0 < r.length && (l = new ut("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var es = null, eo = null;
  function to(n) {
    oc(n, 0);
  }
  function no(n) {
    var r = ao(n);
    if (Vr(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (vt) {
    var Gf;
    if (vt) {
      var qf = "oninput" in document;
      if (!qf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), qf = typeof uv.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    Wf = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    es && (es.detachEvent("onpropertychange", sv), eo = es = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && no(eo)) {
      var r = [];
      iv(r, eo, n, Bt(n)), ll(to, r);
    }
  }
  function Ym(n, r, l) {
    n === "focusin" ? (ov(), es = r, eo = l, es.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function $m(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return no(eo);
  }
  function Qm(n, r) {
    if (n === "click")
      return no(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return no(r);
  }
  function Wm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ba = typeof Object.is == "function" ? Object.is : Wm;
  function ts(n, r) {
    if (ba(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!he.call(r, c) || !ba(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ic() {
    for (var n = window, r = dn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = dn(n.document);
    }
    return r;
  }
  function Ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lc(n) {
    var r = ic(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ai(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = vt && "documentMode" in document && 11 >= document.documentMode, ei = null, Xf = null, ns = null, Kf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || ei == null || ei !== dn(o) || (o = ei, "selectionStart" in o && Ai(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && ts(ns, o) || (ns = o, o = us(Xf, "onSelect"), 0 < o.length && (r = new ut("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ei)));
  }
  function uc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var eu = { animationend: uc("Animation", "AnimationEnd"), animationiteration: uc("Animation", "AnimationIteration"), animationstart: uc("Animation", "AnimationStart"), transitionend: uc("Transition", "TransitionEnd") }, Zf = {}, Jf = {};
  vt && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete eu.animationend.animation, delete eu.animationiteration.animation, delete eu.animationstart.animation), "TransitionEvent" in window || delete eu.transitionend.transition);
  function Wn(n) {
    if (Zf[n])
      return Zf[n];
    if (!eu[n])
      return n;
    var r = eu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Jf)
        return Zf[n] = r[l];
    return n;
  }
  var ed = Wn("animationend"), mv = Wn("animationiteration"), yv = Wn("animationstart"), gv = Wn("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ji(n, r) {
    Sv.set(n, r), Xe(r, [n]);
  }
  for (var rs = 0; rs < Ev.length; rs++) {
    var tu = Ev[rs], Gm = tu.toLowerCase(), as = tu[0].toUpperCase() + tu.slice(1);
    ji(Gm, "on" + as);
  }
  ji(ed, "onAnimationEnd"), ji(mv, "onAnimationIteration"), ji(yv, "onAnimationStart"), ji("dblclick", "onDoubleClick"), ji("focusin", "onFocus"), ji("focusout", "onBlur"), ji(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Xe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Xe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Xe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Xe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Xe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Xe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, de(o, r, void 0, n), n.currentTarget = null;
  }
  function oc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], M = E.instance, A = E.currentTarget;
            if (E = E.listener, M !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = M;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], M = E.instance, A = E.currentTarget, E = E.listener, M !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, A), d = M;
          }
      }
    }
    if (ci)
      throw n = T, ci = !1, T = null, n;
  }
  function Kt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function Sl(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var Ui = "_reactListening" + Math.random().toString(36).slice(2);
  function ro(n) {
    if (!n[Ui]) {
      n[Ui] = !0, mt.forEach(function(l) {
        l !== "selectionchange" && (qm.has(l) || Sl(l, !1, n), Sl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ui] || (r[Ui] = !0, Sl("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (Xo(r)) {
      case 1:
        var c = qu;
        break;
      case 4:
        c = yl;
        break;
      default:
        c = gl;
    }
    l = c.bind(null, r, l, n), c = void 0, !oi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var M = m.tag;
                if ((M === 3 || M === 4) && (M = m.stateNode.containerInfo, M === c || M.nodeType === 8 && M.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = _a(E), m === null)
                return;
              if (M = m.tag, M === 5 || M === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    ll(function() {
      var A = d, Q = Bt(l), W = [];
      e: {
        var $ = Sv.get(n);
        if ($ !== void 0) {
          var ce = ut, ge = n;
          switch (n) {
            case "keypress":
              if (U(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ce = Hm;
              break;
            case "focusin":
              ge = "focus", ce = Za;
              break;
            case "focusout":
              ge = "blur", ce = Za;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Za;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = Li;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Ko;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Vm;
              break;
            case ed:
            case mv:
            case yv:
              ce = Jo;
              break;
            case gv:
              ce = Jp;
              break;
            case "scroll":
              ce = qt;
              break;
            case "wheel":
              ce = zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = tc;
          }
          var Ce = (r & 4) !== 0, _n = !Ce && n === "scroll", b = Ce ? $ !== null ? $ + "Capture" : null : $;
          Ce = [];
          for (var x = A, N; x !== null; ) {
            N = x;
            var K = N.stateNode;
            if (N.tag === 5 && K !== null && (N = K, b !== null && (K = fa(x, b), K != null && Ce.push(ls(x, K, N)))), _n)
              break;
            x = x.return;
          }
          0 < Ce.length && ($ = new ce($, ge, null, l, Q), W.push({ event: $, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", $ && l !== mr && (ge = l.relatedTarget || l.fromElement) && (_a(ge) || ge[Fi]))
            break e;
          if ((ce || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, ce ? (ge = l.relatedTarget || l.toElement, ce = A, ge = ge ? _a(ge) : null, ge !== null && (_n = qe(ge), ge !== _n || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (ce = null, ge = A), ce !== ge)) {
            if (Ce = Li, K = "onMouseLeave", b = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = tc, K = "onPointerLeave", b = "onPointerEnter", x = "pointer"), _n = ce == null ? $ : ao(ce), N = ge == null ? $ : ao(ge), $ = new Ce(K, x + "leave", ce, l, Q), $.target = _n, $.relatedTarget = N, K = null, _a(Q) === A && (Ce = new Ce(b, x + "enter", ge, l, Q), Ce.target = N, Ce.relatedTarget = _n, K = Ce), _n = K, ce && ge)
              t: {
                for (Ce = ce, b = ge, x = 0, N = Ce; N; N = nu(N))
                  x++;
                for (N = 0, K = b; K; K = nu(K))
                  N++;
                for (; 0 < x - N; )
                  Ce = nu(Ce), x--;
                for (; 0 < N - x; )
                  b = nu(b), N--;
                for (; x--; ) {
                  if (Ce === b || b !== null && Ce === b.alternate)
                    break t;
                  Ce = nu(Ce), b = nu(b);
                }
                Ce = null;
              }
            else
              Ce = null;
            ce !== null && td(W, $, ce, Ce, !1), ge !== null && _n !== null && td(W, _n, ge, Ce, !0);
          }
        }
        e: {
          if ($ = A ? ao(A) : window, ce = $.nodeName && $.nodeName.toLowerCase(), ce === "select" || ce === "input" && $.type === "file")
            var Te = lv;
          else if (av($))
            if (Wf)
              Te = cv;
            else {
              Te = $m;
              var Se = Ym;
            }
          else
            (ce = $.nodeName) && ce.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (Te = Qm);
          if (Te && (Te = Te(n, A))) {
            iv(W, Te, l, Q);
            break e;
          }
          Se && Se(n, $, A), n === "focusout" && (Se = $._wrapperState) && Se.controlled && $.type === "number" && Br($, "number", $.value);
        }
        switch (Se = A ? ao(A) : window, n) {
          case "focusin":
            (av(Se) || Se.contentEditable === "true") && (ei = Se, Xf = A, ns = null);
            break;
          case "focusout":
            ns = Xf = ei = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, hv(W, l, Q);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(W, l, Q);
        }
        var be;
        if (Ja)
          e: {
            switch (n) {
              case "compositionstart":
                var Be = "onCompositionStart";
                break e;
              case "compositionend":
                Be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Be = "onCompositionUpdate";
                break e;
            }
            Be = void 0;
          }
        else
          Ju ? nv(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && (ev && l.locale !== "ko" && (Ju || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && Ju && (be = O()) : (Ka = Q, h = "value" in Ka ? Ka.value : Ka.textContent, Ju = !0)), Se = us(A, Be), 0 < Se.length && (Be = new Pf(Be, n, null, l, Q), W.push({ event: Be, listeners: Se }), be ? Be.data = be : (be = ac(l), be !== null && (Be.data = be)))), (be = rc ? Pm(n, l) : Bm(n, l)) && (A = us(A, "onBeforeInput"), 0 < A.length && (Q = new Pf("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: A }), Q.data = be));
      }
      oc(W, r);
    });
  }
  function ls(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = fa(n, l), d != null && o.unshift(ls(n, d, c)), d = fa(n, r), d != null && o.push(ls(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function td(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, M = E.alternate, A = E.stateNode;
      if (M !== null && M === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (M = fa(l, d), M != null && m.unshift(ls(l, M, E))) : c || (M = fa(l, d), M != null && m.push(ls(l, M, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var nd = /\r\n?/g, Xm = /\u0000|\uFFFD/g;
  function rd(n) {
    return (typeof n == "string" ? n : "" + n).replace(nd, `
`).replace(Xm, "");
  }
  function cc(n, r, l) {
    if (r = rd(r), rd(n) !== r && l)
      throw Error(j(425));
  }
  function fc() {
  }
  var ad = null, ru = null;
  function os(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var au = typeof setTimeout == "function" ? setTimeout : void 0, Rv = typeof clearTimeout == "function" ? clearTimeout : void 0, id = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof id < "u" ? function(n) {
    return id.resolve(null).then(n).catch(Km);
  } : au;
  function Km(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function El(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), hl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    hl(r);
  }
  function ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ss(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Cl = Math.random().toString(36).slice(2), hi = "__reactFiber$" + Cl, iu = "__reactProps$" + Cl, Fi = "__reactContainer$" + Cl, ud = "__reactEvents$" + Cl, Zm = "__reactListeners$" + Cl, od = "__reactHandles$" + Cl;
  function _a(n) {
    var r = n[hi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fi] || l[hi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ss(n); n !== null; ) {
            if (l = n[hi])
              return l;
            n = ss(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[hi] || n[Fi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ao(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(j(33));
  }
  function _e(n) {
    return n[iu] || null;
  }
  var Tl = [], rn = -1;
  function Je(n) {
    return { current: n };
  }
  function zt(n) {
    0 > rn || (n.current = Tl[rn], Tl[rn] = null, rn--);
  }
  function Vt(n, r) {
    rn++, Tl[rn] = n.current, n.current = r;
  }
  var mi = {}, Pe = Je(mi), Tn = Je(!1), Xr = mi;
  function ka(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return mi;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Na() {
    zt(Tn), zt(Pe);
  }
  function Rl(n, r, l) {
    if (Pe.current !== mi)
      throw Error(j(168));
    Vt(Pe, r), Vt(Tn, l);
  }
  function fs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(j(108, ft(n) || "Unknown", c));
    return R({}, l, o);
  }
  function dc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mi, Xr = Pe.current, Vt(Pe, n), Vt(Tn, Tn.current), !0;
  }
  function Mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(j(169));
    l ? (n = fs(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, zt(Tn), zt(Pe), Vt(Pe, n)) : zt(Tn), Vt(Tn, l);
  }
  var va = null, Gn = !1, ds = !1;
  function sd(n) {
    va === null ? va = [n] : va.push(n);
  }
  function cd(n) {
    Gn = !0, sd(n);
  }
  function Kr() {
    if (!ds && va !== null) {
      ds = !0;
      var n = 0, r = kt;
      try {
        var l = va;
        for (kt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        va = null, Gn = !1;
      } catch (c) {
        throw va !== null && (va = va.slice(n + 1)), en(qa, Kr), c;
      } finally {
        kt = r, ds = !1;
      }
    }
    return null;
  }
  var Ml = [], Zr = 0, lu = null, io = 0, Jr = [], yr = 0, La = null, nr = 1, Ii = "";
  function ha(n, r) {
    Ml[Zr++] = io, Ml[Zr++] = lu, lu = n, io = r;
  }
  function fd(n, r, l) {
    Jr[yr++] = nr, Jr[yr++] = Ii, Jr[yr++] = La, La = n;
    var o = nr;
    n = Ii;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, nr = 1 << 32 - Dr(r) + c | l << c | o, Ii = d + n;
    } else
      nr = 1 << d | l << c | o, Ii = n;
  }
  function pc(n) {
    n.return !== null && (ha(n, 1), fd(n, 1, 0));
  }
  function dd(n) {
    for (; n === lu; )
      lu = Ml[--Zr], Ml[Zr] = null, io = Ml[--Zr], Ml[Zr] = null;
    for (; n === La; )
      La = Jr[--yr], Jr[yr] = null, Ii = Jr[--yr], Jr[yr] = null, nr = Jr[--yr], Jr[yr] = null;
  }
  var ma = null, ea = null, an = !1, Oa = null;
  function pd(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = La !== null ? { id: nr, overflow: Ii } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hc(n) {
    if (an) {
      var r = ea;
      if (r) {
        var l = r;
        if (!wv(n, r)) {
          if (vc(n))
            throw Error(j(418));
          r = ti(l.nextSibling);
          var o = ma;
          r && wv(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, ma = n);
        }
      } else {
        if (vc(n))
          throw Error(j(418));
        n.flags = n.flags & -4097 | 2, an = !1, ma = n;
      }
    }
  }
  function xv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function mc(n) {
    if (n !== ma)
      return !1;
    if (!an)
      return xv(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !os(n.type, n.memoizedProps)), r && (r = ea)) {
      if (vc(n))
        throw Dv(), Error(j(418));
      for (; r; )
        pd(n, r), r = ti(r.nextSibling);
    }
    if (xv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(j(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ti(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ma ? ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Dv() {
    for (var n = ea; n; )
      n = ti(n.nextSibling);
  }
  function mn() {
    ea = ma = null, an = !1;
  }
  function vd(n) {
    Oa === null ? Oa = [n] : Oa.push(n);
  }
  var yc = ct.ReactCurrentBatchConfig;
  function ya(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var yi = Je(null), gc = null, wl = null, hd = null;
  function md() {
    hd = wl = gc = null;
  }
  function xl(n) {
    var r = yi.current;
    zt(yi), n._currentValue = r;
  }
  function qn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function re(n, r) {
    gc = n, hd = wl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (On = !0), n.firstContext = null);
  }
  function bn(n) {
    var r = n._currentValue;
    if (hd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, wl === null) {
        if (gc === null)
          throw Error(j(308));
        wl = n, gc.dependencies = { lanes: 0, firstContext: n };
      } else
        wl = wl.next = n;
    return r;
  }
  var rr = null;
  function yd(n) {
    rr === null ? rr = [n] : rr.push(n);
  }
  function bv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, yd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Hi(n, o);
  }
  function Hi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Dl = !1;
  function gd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Vi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function bl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Hi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, yd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Hi(n, l);
  }
  function Sc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  function Sd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _l(n, r, l, o) {
    var c = n.updateQueue;
    Dl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var M = E, A = M.next;
      M.next = null, m === null ? d = A : m.next = A, m = M;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = A : E.next = A, Q.lastBaseUpdate = M));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = A = M = null, E = d;
      do {
        var $ = E.lane, ce = E.eventTime;
        if ((o & $) === $) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch ($ = r, ce = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  W = ge.call(ce, W, $);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, $ = typeof ge == "function" ? ge.call(ce, W, $) : ge, $ == null)
                  break e;
                W = R({}, W, $);
                break e;
              case 2:
                Dl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else
          ce = { eventTime: ce, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (A = Q = ce, M = W) : Q = Q.next = ce, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (1);
      if (Q === null && (M = W), c.baseState = M, c.firstBaseUpdate = A, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      $i |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function uu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(j(191, c));
          c.call(o);
        }
      }
  }
  var _v = new P.Component().refs;
  function Ed(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ec = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Tr(r, n, c, o), Sc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Cr(), c = zn(n), d = Vi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = bl(n, d, c), r !== null && (Tr(r, n, c, o), Sc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Cr(), o = zn(n), c = Vi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = bl(n, c, o), r !== null && (Tr(r, n, o, l), Sc(r, n, o));
  } };
  function kv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ts(l, o) || !ts(c, d) : !0;
  }
  function Nv(n, r, l) {
    var o = !1, c = mi, d = r.contextType;
    return typeof d == "object" && d !== null ? d = bn(d) : (c = sn(r) ? Xr : Pe.current, o = r.contextTypes, d = (o = o != null) ? ka(n, c) : mi), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ec, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Lv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ec.enqueueReplaceState(r, r.state, null);
  }
  function Cc(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = _v, gd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = bn(d) : (d = sn(r) ? Xr : Pe.current, c.context = ka(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ec.enqueueReplaceState(c, c.state, null), _l(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function lo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(j(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(j(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === _v && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(j(284));
      if (!l._owner)
        throw Error(j(290, n));
    }
    return n;
  }
  function Tc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(j(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ov(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(b, x) {
      if (n) {
        var N = b.deletions;
        N === null ? (b.deletions = [x], b.flags |= 16) : N.push(x);
      }
    }
    function l(b, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(b, x), x = x.sibling;
      return null;
    }
    function o(b, x) {
      for (b = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? b.set(x.key, x) : b.set(x.index, x), x = x.sibling;
      return b;
    }
    function c(b, x) {
      return b = Ul(b, x), b.index = 0, b.sibling = null, b;
    }
    function d(b, x, N) {
      return b.index = N, n ? (N = b.alternate, N !== null ? (N = N.index, N < x ? (b.flags |= 2, x) : N) : (b.flags |= 2, x)) : (b.flags |= 1048576, x);
    }
    function m(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function E(b, x, N, K) {
      return x === null || x.tag !== 6 ? (x = Ns(N, b.mode, K), x.return = b, x) : (x = c(x, N), x.return = b, x);
    }
    function M(b, x, N, K) {
      var Te = N.type;
      return Te === Ie ? Q(b, x, N.props.children, K, N.key) : x !== null && (x.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Mt && Ov(Te) === x.type) ? (K = c(x, N.props), K.ref = lo(b, x, N), K.return = b, K) : (K = ef(N.type, N.key, N.props, null, b.mode, K), K.ref = lo(b, x, N), K.return = b, K);
    }
    function A(b, x, N, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = xu(N, b.mode, K), x.return = b, x) : (x = c(x, N.children || []), x.return = b, x);
    }
    function Q(b, x, N, K, Te) {
      return x === null || x.tag !== 7 ? (x = wu(N, b.mode, K, Te), x.return = b, x) : (x = c(x, N), x.return = b, x);
    }
    function W(b, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ns("" + x, b.mode, N), x.return = b, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case De:
            return N = ef(x.type, x.key, x.props, null, b.mode, N), N.ref = lo(b, null, x), N.return = b, N;
          case it:
            return x = xu(x, b.mode, N), x.return = b, x;
          case Mt:
            var K = x._init;
            return W(b, K(x._payload), N);
        }
        if ($n(x) || we(x))
          return x = wu(x, b.mode, N, null), x.return = b, x;
        Tc(b, x);
      }
      return null;
    }
    function $(b, x, N, K) {
      var Te = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return Te !== null ? null : E(b, x, "" + N, K);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case De:
            return N.key === Te ? M(b, x, N, K) : null;
          case it:
            return N.key === Te ? A(b, x, N, K) : null;
          case Mt:
            return Te = N._init, $(
              b,
              x,
              Te(N._payload),
              K
            );
        }
        if ($n(N) || we(N))
          return Te !== null ? null : Q(b, x, N, K, null);
        Tc(b, N);
      }
      return null;
    }
    function ce(b, x, N, K, Te) {
      if (typeof K == "string" && K !== "" || typeof K == "number")
        return b = b.get(N) || null, E(x, b, "" + K, Te);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case De:
            return b = b.get(K.key === null ? N : K.key) || null, M(x, b, K, Te);
          case it:
            return b = b.get(K.key === null ? N : K.key) || null, A(x, b, K, Te);
          case Mt:
            var Se = K._init;
            return ce(b, x, N, Se(K._payload), Te);
        }
        if ($n(K) || we(K))
          return b = b.get(N) || null, Q(x, b, K, Te, null);
        Tc(x, K);
      }
      return null;
    }
    function ge(b, x, N, K) {
      for (var Te = null, Se = null, be = x, Be = x = 0, Zn = null; be !== null && Be < N.length; Be++) {
        be.index > Be ? (Zn = be, be = null) : Zn = be.sibling;
        var bt = $(b, be, N[Be], K);
        if (bt === null) {
          be === null && (be = Zn);
          break;
        }
        n && be && bt.alternate === null && r(b, be), x = d(bt, x, Be), Se === null ? Te = bt : Se.sibling = bt, Se = bt, be = Zn;
      }
      if (Be === N.length)
        return l(b, be), an && ha(b, Be), Te;
      if (be === null) {
        for (; Be < N.length; Be++)
          be = W(b, N[Be], K), be !== null && (x = d(be, x, Be), Se === null ? Te = be : Se.sibling = be, Se = be);
        return an && ha(b, Be), Te;
      }
      for (be = o(b, be); Be < N.length; Be++)
        Zn = ce(be, b, Be, N[Be], K), Zn !== null && (n && Zn.alternate !== null && be.delete(Zn.key === null ? Be : Zn.key), x = d(Zn, x, Be), Se === null ? Te = Zn : Se.sibling = Zn, Se = Zn);
      return n && be.forEach(function(Fl) {
        return r(b, Fl);
      }), an && ha(b, Be), Te;
    }
    function Ce(b, x, N, K) {
      var Te = we(N);
      if (typeof Te != "function")
        throw Error(j(150));
      if (N = Te.call(N), N == null)
        throw Error(j(151));
      for (var Se = Te = null, be = x, Be = x = 0, Zn = null, bt = N.next(); be !== null && !bt.done; Be++, bt = N.next()) {
        be.index > Be ? (Zn = be, be = null) : Zn = be.sibling;
        var Fl = $(b, be, bt.value, K);
        if (Fl === null) {
          be === null && (be = Zn);
          break;
        }
        n && be && Fl.alternate === null && r(b, be), x = d(Fl, x, Be), Se === null ? Te = Fl : Se.sibling = Fl, Se = Fl, be = Zn;
      }
      if (bt.done)
        return l(
          b,
          be
        ), an && ha(b, Be), Te;
      if (be === null) {
        for (; !bt.done; Be++, bt = N.next())
          bt = W(b, bt.value, K), bt !== null && (x = d(bt, x, Be), Se === null ? Te = bt : Se.sibling = bt, Se = bt);
        return an && ha(b, Be), Te;
      }
      for (be = o(b, be); !bt.done; Be++, bt = N.next())
        bt = ce(be, b, Be, bt.value, K), bt !== null && (n && bt.alternate !== null && be.delete(bt.key === null ? Be : bt.key), x = d(bt, x, Be), Se === null ? Te = bt : Se.sibling = bt, Se = bt);
      return n && be.forEach(function(gy) {
        return r(b, gy);
      }), an && ha(b, Be), Te;
    }
    function _n(b, x, N, K) {
      if (typeof N == "object" && N !== null && N.type === Ie && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case De:
            e: {
              for (var Te = N.key, Se = x; Se !== null; ) {
                if (Se.key === Te) {
                  if (Te = N.type, Te === Ie) {
                    if (Se.tag === 7) {
                      l(b, Se.sibling), x = c(Se, N.props.children), x.return = b, b = x;
                      break e;
                    }
                  } else if (Se.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Mt && Ov(Te) === Se.type) {
                    l(b, Se.sibling), x = c(Se, N.props), x.ref = lo(b, Se, N), x.return = b, b = x;
                    break e;
                  }
                  l(b, Se);
                  break;
                } else
                  r(b, Se);
                Se = Se.sibling;
              }
              N.type === Ie ? (x = wu(N.props.children, b.mode, K, N.key), x.return = b, b = x) : (K = ef(N.type, N.key, N.props, null, b.mode, K), K.ref = lo(b, x, N), K.return = b, b = K);
            }
            return m(b);
          case it:
            e: {
              for (Se = N.key; x !== null; ) {
                if (x.key === Se)
                  if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                    l(b, x.sibling), x = c(x, N.children || []), x.return = b, b = x;
                    break e;
                  } else {
                    l(b, x);
                    break;
                  }
                else
                  r(b, x);
                x = x.sibling;
              }
              x = xu(N, b.mode, K), x.return = b, b = x;
            }
            return m(b);
          case Mt:
            return Se = N._init, _n(b, x, Se(N._payload), K);
        }
        if ($n(N))
          return ge(b, x, N, K);
        if (we(N))
          return Ce(b, x, N, K);
        Tc(b, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(b, x.sibling), x = c(x, N), x.return = b, b = x) : (l(b, x), x = Ns(N, b.mode, K), x.return = b, b = x), m(b)) : l(b, x);
    }
    return _n;
  }
  var uo = zv(!0), Av = zv(!1), ps = {}, ni = Je(ps), vs = Je(ps), oo = Je(ps);
  function ou(n) {
    if (n === ps)
      throw Error(j(174));
    return n;
  }
  function Cd(n, r) {
    switch (Vt(oo, r), Vt(vs, n), Vt(ni, ps), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : pn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = pn(r, n);
    }
    zt(ni), Vt(ni, r);
  }
  function kl() {
    zt(ni), zt(vs), zt(oo);
  }
  function Oe(n) {
    ou(oo.current);
    var r = ou(ni.current), l = pn(r, n.type);
    r !== l && (Vt(vs, n), Vt(ni, l));
  }
  function ot(n) {
    vs.current === n && (zt(ni), zt(vs));
  }
  var Ae = Je(0);
  function yn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var za = [];
  function Rc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var Mc = ct.ReactCurrentDispatcher, Td = ct.ReactCurrentBatchConfig, su = 0, ln = null, H = null, St = null, Ue = !1, gi = !1, ga = 0, cu = 0;
  function un() {
    throw Error(j(321));
  }
  function fu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ba(n[l], r[l]))
        return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (su = d, ln = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Mc.current = n === null || n.memoizedState === null ? ey : ty, n = l(o, c), gi) {
      d = 0;
      do {
        if (gi = !1, ga = 0, 25 <= d)
          throw Error(j(301));
        d += 1, St = H = null, r.updateQueue = null, Mc.current = Md, n = l(o, c);
      } while (gi);
    }
    if (Mc.current = Hc, r = H !== null && H.next !== null, su = 0, St = H = ln = null, Ue = !1, r)
      throw Error(j(300));
    return n;
  }
  function du() {
    var n = ga !== 0;
    return ga = 0, n;
  }
  function Aa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return St === null ? ln.memoizedState = St = n : St = St.next = n, St;
  }
  function ta() {
    if (H === null) {
      var n = ln.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = H.next;
    var r = St === null ? ln.memoizedState : St.next;
    if (r !== null)
      St = r, H = n;
    else {
      if (n === null)
        throw Error(j(310));
      H = n, n = { memoizedState: H.memoizedState, baseState: H.baseState, baseQueue: H.baseQueue, queue: H.queue, next: null }, St === null ? ln.memoizedState = St = n : St = St.next = n;
    }
    return St;
  }
  function pu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function hs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(j(311));
    l.lastRenderedReducer = n;
    var o = H, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, M = null, A = d;
      do {
        var Q = A.lane;
        if ((su & Q) === Q)
          M !== null && (M = M.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var W = {
            lane: Q,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          M === null ? (E = M = W, m = o) : M = M.next = W, ln.lanes |= Q, $i |= Q;
        }
        A = A.next;
      } while (A !== null && A !== d);
      M === null ? m = o : M.next = E, ba(o, r.memoizedState) || (On = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = M, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ln.lanes |= d, $i |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ms(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(j(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ba(d, r.memoizedState) || (On = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function wc() {
  }
  function xc(n, r) {
    var l = ln, o = ta(), c = r(), d = !ba(o.memoizedState, c);
    if (d && (o.memoizedState = c, On = !0), o = o.queue, ys(_c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || St !== null && St.memoizedState.tag & 1) {
      if (l.flags |= 2048, vu(9, bc.bind(null, l, o, c, r), void 0, null), gn === null)
        throw Error(j(349));
      su & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ln.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ln.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, kc(r) && Nc(n);
  }
  function _c(n, r, l) {
    return l(function() {
      kc(r) && Nc(n);
    });
  }
  function kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ba(n, l);
    } catch {
      return !0;
    }
  }
  function Nc(n) {
    var r = Hi(n, 1);
    r !== null && Tr(r, n, 1, -1);
  }
  function Lc(n) {
    var r = Aa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ic.bind(null, ln, n), [r.memoizedState, n];
  }
  function vu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ln.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ln.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Oc() {
    return ta().memoizedState;
  }
  function hu(n, r, l, o) {
    var c = Aa();
    ln.flags |= n, c.memoizedState = vu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pi(n, r, l, o) {
    var c = ta();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (H !== null) {
      var m = H.memoizedState;
      if (d = m.destroy, o !== null && fu(o, m.deps)) {
        c.memoizedState = vu(r, l, d, o);
        return;
      }
    }
    ln.flags |= n, c.memoizedState = vu(1 | r, l, d, o);
  }
  function zc(n, r) {
    return hu(8390656, 8, n, r);
  }
  function ys(n, r) {
    return Pi(2048, 8, n, r);
  }
  function Ac(n, r) {
    return Pi(4, 2, n, r);
  }
  function jc(n, r) {
    return Pi(4, 4, n, r);
  }
  function Rd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function so(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pi(4, 4, Rd.bind(null, r, n), l);
  }
  function Uc() {
  }
  function co(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ll(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function na(n, r, l) {
    return su & 21 ? (ba(l, r) || (l = Bu(), ln.lanes |= l, $i |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, On = !0), n.memoizedState = l);
  }
  function Jm(n, r) {
    var l = kt;
    kt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      kt = l, Td.transition = o;
    }
  }
  function Zt() {
    return ta().memoizedState;
  }
  function Fc(n, r, l) {
    var o = zn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, fo(n))
      gs(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
      var c = Cr();
      Tr(l, n, o, c), jv(l, r, o);
    }
  }
  function Ic(n, r, l) {
    var o = zn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (fo(n))
      gs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ba(E, m)) {
            var M = r.interleaved;
            M === null ? (c.next = c, yd(r)) : (c.next = M.next, M.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = bv(n, r, c, o), l !== null && (c = Cr(), Tr(l, n, o, c), jv(l, r, o));
    }
  }
  function fo(n) {
    var r = n.alternate;
    return n === ln || r !== null && r === ln;
  }
  function gs(n, r) {
    gi = Ue = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function jv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, pi(n, l);
    }
  }
  var Hc = { readContext: bn, useCallback: un, useContext: un, useEffect: un, useImperativeHandle: un, useInsertionEffect: un, useLayoutEffect: un, useMemo: un, useReducer: un, useRef: un, useState: un, useDebugValue: un, useDeferredValue: un, useTransition: un, useMutableSource: un, useSyncExternalStore: un, useId: un, unstable_isNewReconciler: !1 }, ey = { readContext: bn, useCallback: function(n, r) {
    return Aa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: bn, useEffect: zc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(
      4194308,
      4,
      Rd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return hu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return hu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Aa();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Aa();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fc.bind(null, ln, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Aa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Lc, useDebugValue: Uc, useDeferredValue: function(n) {
    return Aa().memoizedState = n;
  }, useTransition: function() {
    var n = Lc(!1), r = n[0];
    return n = Jm.bind(null, n[1]), Aa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ln, c = Aa();
    if (an) {
      if (l === void 0)
        throw Error(j(407));
      l = l();
    } else {
      if (l = r(), gn === null)
        throw Error(j(349));
      su & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, zc(_c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vu(9, bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Aa(), r = gn.identifierPrefix;
    if (an) {
      var l = Ii, o = nr;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ga++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = cu++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ty = {
    readContext: bn,
    useCallback: co,
    useContext: bn,
    useEffect: ys,
    useImperativeHandle: so,
    useInsertionEffect: Ac,
    useLayoutEffect: jc,
    useMemo: Ll,
    useReducer: hs,
    useRef: Oc,
    useState: function() {
      return hs(pu);
    },
    useDebugValue: Uc,
    useDeferredValue: function(n) {
      var r = ta();
      return na(r, H.memoizedState, n);
    },
    useTransition: function() {
      var n = hs(pu)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: wc,
    useSyncExternalStore: xc,
    useId: Zt,
    unstable_isNewReconciler: !1
  }, Md = { readContext: bn, useCallback: co, useContext: bn, useEffect: ys, useImperativeHandle: so, useInsertionEffect: Ac, useLayoutEffect: jc, useMemo: Ll, useReducer: ms, useRef: Oc, useState: function() {
    return ms(pu);
  }, useDebugValue: Uc, useDeferredValue: function(n) {
    var r = ta();
    return H === null ? r.memoizedState = n : na(r, H.memoizedState, n);
  }, useTransition: function() {
    var n = ms(pu)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: wc, useSyncExternalStore: xc, useId: Zt, unstable_isNewReconciler: !1 };
  function po(n, r) {
    try {
      var l = "", o = r;
      do
        l += yt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ss(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ny = typeof WeakMap == "function" ? WeakMap : Map;
  function Uv(n, r, l) {
    l = Vi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Gc || (Gc = !0, Eu = o), Vc(n, r);
    }, l;
  }
  function Es(n, r, l) {
    l = Vi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Vc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vc(n, r), typeof o != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Fv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ny();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = sy.bind(null, n, r, l), r.then(n, n));
  }
  function wd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Vi(-1, 1), r.tag = 2, bl(l, r, 1))), l.lanes |= 1), n);
  }
  var ry = ct.ReactCurrentOwner, On = !1;
  function In(n, r, l, o) {
    r.child = n === null ? Av(r, null, l, o) : uo(r, n.child, l, o);
  }
  function Ol(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return re(r, c), o = Nl(n, r, l, o, d, c), l = du(), n !== null && !On ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (an && l && pc(r), r.flags |= 1, In(n, r, o, c), r.child);
  }
  function Pc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, ra(n, r, d, o, c)) : (n = ef(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ts, l(m, o) && n.ref === r.ref)
        return ar(n, r, c);
    }
    return r.flags |= 1, n = Ul(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ra(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ts(d, o) && n.ref === r.ref)
        if (On = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (On = !0);
        else
          return r.lanes = n.lanes, ar(n, r, c);
    }
    return vo(n, r, l, o, c);
  }
  function mu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Vt(Eo, Sa), Sa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Vt(Eo, Sa), Sa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Vt(Eo, Sa), Sa |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Vt(Eo, Sa), Sa |= o;
    return In(n, r, c, l), r.child;
  }
  function et(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function vo(n, r, l, o, c) {
    var d = sn(l) ? Xr : Pe.current;
    return d = ka(r, d), re(r, c), l = Nl(n, r, l, o, d, c), o = du(), n !== null && !On ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ar(n, r, c)) : (an && o && pc(r), r.flags |= 1, In(n, r, l, c), r.child);
  }
  function Dd(n, r, l, o, c) {
    if (sn(l)) {
      var d = !0;
      dc(r);
    } else
      d = !1;
    if (re(r, c), r.stateNode === null)
      gr(n, r), Nv(r, l, o), Cc(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var M = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = bn(A) : (A = sn(l) ? Xr : Pe.current, A = ka(r, A));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || M !== A) && Lv(r, m, o, A), Dl = !1;
      var $ = r.memoizedState;
      m.state = $, _l(r, o, m, c), M = r.memoizedState, E !== o || $ !== M || Tn.current || Dl ? (typeof Q == "function" && (Ed(r, l, Q, o), M = r.memoizedState), (E = Dl || kv(r, l, E, o, $, M, A)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = M), m.props = o, m.state = M, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fn(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ya(r.type, E), m.props = A, W = r.pendingProps, $ = m.context, M = l.contextType, typeof M == "object" && M !== null ? M = bn(M) : (M = sn(l) ? Xr : Pe.current, M = ka(r, M));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || $ !== M) && Lv(r, m, o, M), Dl = !1, $ = r.memoizedState, m.state = $, _l(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || $ !== ge || Tn.current || Dl ? (typeof ce == "function" && (Ed(r, l, ce, o), ge = r.memoizedState), (A = Dl || kv(r, l, A, o, $, ge, M) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, M), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, M)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = M, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Iv(n, r, l, o, d, c);
  }
  function Iv(n, r, l, o, c, d) {
    et(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Mv(r, l, !1), ar(n, r, d);
    o = r.stateNode, ry.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = uo(r, n.child, null, d), r.child = uo(r, null, E, d)) : In(n, r, E, d), r.memoizedState = o.state, c && Mv(r, l, !0), r.child;
  }
  function Hv(n) {
    var r = n.stateNode;
    r.pendingContext ? Rl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rl(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function Bc(n, r, l, o, c) {
    return mn(), vd(c), r.flags |= 256, In(n, r, l, o), r.child;
  }
  var yu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _d(n, r, l) {
    var o = r.pendingProps, c = Ae.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Vt(Ae, c & 1), n === null)
      return hc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = ks(m, o, 0, null), n = wu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = bd(l), r.memoizedState = yu, n) : kd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ay(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var M = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = M, r.deletions = null) : (o = Ul(c, M), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ul(E, d) : (d = wu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? bd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = yu, o;
    }
    return d = n.child, n = d.sibling, o = Ul(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function kd(n, r) {
    return r = ks({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ho(n, r, l, o) {
    return o !== null && vd(o), uo(r, n.child, null, l), n = kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ay(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ss(Error(j(422))), ho(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = ks({ mode: "visible", children: o.children }, c, 0, null), d = wu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && uo(r, n.child, null, m), r.child.memoizedState = bd(m), r.memoizedState = yu, d);
    if (!(r.mode & 1))
      return ho(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(j(419)), o = Ss(d, o, void 0), ho(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, On || E) {
      if (o = gn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Hi(n, c), Tr(o, n, c, -1));
      }
      return Pd(), o = Ss(Error(j(421))), ho(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ti(c.nextSibling), ma = r, an = !0, Oa = null, n !== null && (Jr[yr++] = nr, Jr[yr++] = Ii, Jr[yr++] = La, nr = n.id, Ii = n.overflow, La = r), r = kd(r, o.children), r.flags |= 4096, r);
  }
  function Nd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qn(n.return, r, l);
  }
  function Yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (In(n, r, o.children, l), o = Ae.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Nd(n, l, r);
            else if (n.tag === 19)
              Nd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Vt(Ae, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && yn(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Yc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && yn(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Yc(r, !0, l, null, d);
          break;
        case "together":
          Yc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function gr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ar(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), $i |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(j(153));
    if (r.child !== null) {
      for (n = r.child, l = Ul(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ul(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Bi(n, r, l) {
    switch (r.tag) {
      case 3:
        Hv(r), mn();
        break;
      case 5:
        Oe(r);
        break;
      case 1:
        sn(r.type) && dc(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Vt(yi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Vt(Ae, Ae.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _d(n, r, l) : (Vt(Ae, Ae.current & 1), n = ar(n, r, l), n !== null ? n.sibling : null);
        Vt(Ae, Ae.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Vt(Ae, Ae.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, mu(n, r, l);
    }
    return ar(n, r, l);
  }
  var Cs, gu, ja, Hn;
  Cs = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, gu = function() {
  }, ja = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(ni.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = fc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && ($t.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var M = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && M !== E && (M != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || M && M.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in M)
                M.hasOwnProperty(m) && E[m] !== M[m] && (l || (l = {}), l[m] = M[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = M;
          else
            A === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, E = E ? E.__html : void 0, M != null && E !== M && (d = d || []).push(A, M)) : A === "children" ? typeof M != "string" && typeof M != "number" || (d = d || []).push(A, "" + M) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && ($t.hasOwnProperty(A) ? (M != null && A === "onScroll" && Kt("scroll", n), d || E === M || (d = [])) : (d = d || []).push(A, M));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Hn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ts(n, r) {
    if (!an)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Sr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function iy(n, r, l) {
    var o = r.pendingProps;
    switch (dd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Sr(r), null;
      case 1:
        return sn(r.type) && Na(), Sr(r), null;
      case 3:
        return o = r.stateNode, kl(), zt(Tn), zt(Pe), Rc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Oa !== null && (_s(Oa), Oa = null))), gu(n, r), Sr(r), null;
      case 5:
        ot(r);
        var c = ou(oo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ja(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(j(166));
            return Sr(r), null;
          }
          if (n = ou(ni.current), mc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[hi] = r, o[iu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Kt("cancel", o), Kt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Kt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++)
                  Kt(is[c], o);
                break;
              case "source":
                Kt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Kt(
                  "error",
                  o
                ), Kt("load", o);
                break;
              case "details":
                Kt("toggle", o);
                break;
              case "input":
                jn(o, d), Kt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", o);
                break;
              case "textarea":
                hr(o, d), Kt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && cc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && cc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : $t.hasOwnProperty(m) && E != null && m === "onScroll" && Kt("scroll", o);
              }
            switch (l) {
              case "input":
                pr(o), Pr(o, d, !0);
                break;
              case "textarea":
                pr(o), er(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = fc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = $r(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[hi] = r, n[iu] = o, Cs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++)
                    Kt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Kt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = o;
                  break;
                case "details":
                  Kt("toggle", n), c = o;
                  break;
                case "input":
                  jn(n, o), c = Yn(n, o), Kt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  hr(n, o), c = Yr(n, o), Kt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var M = E[d];
                  d === "style" ? Ot(n, M) : d === "dangerouslySetInnerHTML" ? (M = M ? M.__html : void 0, M != null && ui(n, M)) : d === "children" ? typeof M == "string" ? (l !== "textarea" || M !== "") && ca(n, M) : typeof M == "number" && ca(n, "" + M) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && ($t.hasOwnProperty(d) ? M != null && d === "onScroll" && Kt("scroll", n) : M != null && We(n, d, M, m));
                }
              switch (l) {
                case "input":
                  pr(n), Pr(n, o, !1);
                  break;
                case "textarea":
                  pr(n), er(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + nt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? vr(n, !!o.multiple, d, !1) : o.defaultValue != null && vr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = fc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Sr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Hn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(j(166));
          if (l = ou(oo.current), ou(ni.current), mc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[hi] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  cc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && cc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[hi] = r, r.stateNode = o;
        }
        return Sr(r), null;
      case 13:
        if (zt(Ae), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && ea !== null && r.mode & 1 && !(r.flags & 128))
            Dv(), mn(), r.flags |= 98560, d = !1;
          else if (d = mc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(j(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(j(317));
              d[hi] = r;
            } else
              mn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Sr(r), d = !1;
          } else
            Oa !== null && (_s(Oa), Oa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ae.current & 1 ? Pn === 0 && (Pn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), Sr(r), null);
      case 4:
        return kl(), gu(n, r), n === null && ro(r.stateNode.containerInfo), Sr(r), null;
      case 10:
        return xl(r.type._context), Sr(r), null;
      case 17:
        return sn(r.type) && Na(), Sr(r), null;
      case 19:
        if (zt(Ae), d = r.memoizedState, d === null)
          return Sr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Ts(d, !1);
          else {
            if (Pn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = yn(n), m !== null) {
                  for (r.flags |= 128, Ts(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Vt(Ae, Ae.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && wt() > To && (r.flags |= 128, o = !0, Ts(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yn(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ts(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an)
                return Sr(r), null;
            } else
              2 * wt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Ts(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = wt(), r.sibling = null, l = Ae.current, Vt(Ae, o ? l & 1 | 2 : l & 1), r) : (Sr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (Sr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Sr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(j(156, r.tag));
  }
  function Od(n, r) {
    switch (dd(r), r.tag) {
      case 1:
        return sn(r.type) && Na(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return kl(), zt(Tn), zt(Pe), Rc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ot(r), null;
      case 13:
        if (zt(Ae), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(j(340));
          mn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return zt(Ae), null;
      case 4:
        return kl(), null;
      case 10:
        return xl(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Rs = !1, Vn = !1, Vv = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function mo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Mn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ms(n, r, l) {
    try {
      l();
    } catch (o) {
      Mn(n, r, o);
    }
  }
  var Pv = !1;
  function Bv(n, r) {
    if (ad = Da, n = ic(), Ai(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, M = -1, A = 0, Q = 0, W = n, $ = null;
            t:
              for (; ; ) {
                for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (M = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
                  $ = W, W = ce;
                for (; ; ) {
                  if (W === n)
                    break t;
                  if ($ === l && ++A === c && (E = m), $ === d && ++Q === o && (M = m), (ce = W.nextSibling) !== null)
                    break;
                  W = $, $ = W.parentNode;
                }
                W = ce;
              }
            l = E === -1 || M === -1 ? null : { start: E, end: M };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (ru = { focusedElem: n, selectionRange: l }, Da = !1, me = r; me !== null; )
      if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, me = n;
      else
        for (; me !== null; ) {
          r = me;
          try {
            var ge = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, _n = ge.memoizedState, b = r.stateNode, x = b.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : ya(r.type, Ce), _n);
                    b.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var N = r.stateNode.containerInfo;
                  N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(j(163));
              }
          } catch (K) {
            Mn(r, r.return, K);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, me = n;
            break;
          }
          me = r.return;
        }
    return ge = Pv, Pv = !1, ge;
  }
  function ws(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ms(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function xs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[hi], delete r[iu], delete r[ud], delete r[Zm], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function $c(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Yv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = fc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (yo(n, r, l), n = n.sibling; n !== null; )
        yo(n, r, l), n = n.sibling;
  }
  function Si(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Si(n, r, l), n = n.sibling; n !== null; )
        Si(n, r, l), n = n.sibling;
  }
  var cn = null, Xn = !1;
  function Ua(n, r, l) {
    for (l = l.child; l !== null; )
      go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(ol, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Vn || mo(l, r);
      case 6:
        var o = cn, c = Xn;
        cn = null, Ua(n, r, l), cn = o, Xn = c, cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : cn.removeChild(l.stateNode));
        break;
      case 18:
        cn !== null && (Xn ? (n = cn, l = l.stateNode, n.nodeType === 8 ? El(n.parentNode, l) : n.nodeType === 1 && El(n, l), hl(n)) : El(cn, l.stateNode));
        break;
      case 4:
        o = cn, c = Xn, cn = l.stateNode.containerInfo, Xn = !0, Ua(n, r, l), cn = o, Xn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Vn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ms(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ua(n, r, l);
        break;
      case 1:
        if (!Vn && (mo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            Mn(l, r, E);
          }
        Ua(n, r, l);
        break;
      case 21:
        Ua(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Vn = (o = Vn) || l.memoizedState !== null, Ua(n, r, l), Vn = o) : Ua(n, r, l);
        break;
      default:
        Ua(n, r, l);
    }
  }
  function Yi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Vv()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  cn = E.stateNode, Xn = !1;
                  break e;
                case 3:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
                case 4:
                  cn = E.stateNode.containerInfo, Xn = !0;
                  break e;
              }
              E = E.return;
            }
          if (cn === null)
            throw Error(j(160));
          go(d, m, c), cn = null, Xn = !1;
          var M = c.alternate;
          M !== null && (M.return = null), c.return = null;
        } catch (A) {
          Mn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        $v(r, n), r = r.sibling;
  }
  function $v(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), Ei(n), o & 4) {
          try {
            ws(3, n, n.return), xs(3, n);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
          try {
            ws(5, n, n.return);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ri(r, n), Ei(n), o & 512 && l !== null && mo(l, l.return);
        break;
      case 5:
        if (ri(r, n), Ei(n), o & 512 && l !== null && mo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, M = n.updateQueue;
          if (n.updateQueue = null, M !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Un(c, d), vn(E, m);
              var A = vn(E, d);
              for (m = 0; m < M.length; m += 2) {
                var Q = M[m], W = M[m + 1];
                Q === "style" ? Ot(c, W) : Q === "dangerouslySetInnerHTML" ? ui(c, W) : Q === "children" ? ca(c, W) : We(c, Q, W, A);
              }
              switch (E) {
                case "input":
                  xn(c, d);
                  break;
                case "textarea":
                  sa(c, d);
                  break;
                case "select":
                  var $ = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ce = d.value;
                  ce != null ? vr(c, !!d.multiple, ce, !1) : $ !== !!d.multiple && (d.defaultValue != null ? vr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : vr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[iu] = d;
            } catch (Ce) {
              Mn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (ri(r, n), Ei(n), o & 4) {
          if (n.stateNode === null)
            throw Error(j(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ri(r, n), Ei(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            hl(r.containerInfo);
          } catch (Ce) {
            Mn(n, n.return, Ce);
          }
        break;
      case 4:
        ri(r, n), Ei(n);
        break;
      case 13:
        ri(r, n), Ei(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Fd = wt())), o & 4 && Yi(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (Vn = (A = Vn) || Q, ri(r, n), Vn = A) : ri(r, n), Ei(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !Q && n.mode & 1)
            for (me = n, Q = n.child; Q !== null; ) {
              for (W = me = Q; me !== null; ) {
                switch ($ = me, ce = $.child, $.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ws(4, $, $.return);
                    break;
                  case 1:
                    mo($, $.return);
                    var ge = $.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = $, l = $.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        Mn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    mo($, $.return);
                    break;
                  case 22:
                    if ($.memoizedState !== null) {
                      jd(W);
                      continue;
                    }
                }
                ce !== null ? (ce.return = $, me = ce) : jd(W);
              }
              Q = Q.sibling;
            }
          e:
            for (Q = null, W = n; ; ) {
              if (W.tag === 5) {
                if (Q === null) {
                  Q = W;
                  try {
                    c = W.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, M = W.memoizedProps.style, m = M != null && M.hasOwnProperty("display") ? M.display : null, E.style.display = rt("display", m));
                  } catch (Ce) {
                    Mn(n, n.return, Ce);
                  }
                }
              } else if (W.tag === 6) {
                if (Q === null)
                  try {
                    W.stateNode.nodeValue = A ? "" : W.memoizedProps;
                  } catch (Ce) {
                    Mn(n, n.return, Ce);
                  }
              } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
                W.child.return = W, W = W.child;
                continue;
              }
              if (W === n)
                break e;
              for (; W.sibling === null; ) {
                if (W.return === null || W.return === n)
                  break e;
                Q === W && (Q = null), W = W.return;
              }
              Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
            }
        }
        break;
      case 19:
        ri(r, n), Ei(n), o & 4 && Yi(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), Ei(n);
    }
  }
  function Ei(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(j(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = $c(n);
            Si(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = $c(n);
            yo(n, E, m);
            break;
          default:
            throw Error(j(161));
        }
      } catch (M) {
        Mn(n, n.return, M);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qv(n, r, l) {
    me = n, So(n);
  }
  function So(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Rs;
        if (!m) {
          var E = c.alternate, M = E !== null && E.memoizedState !== null || Vn;
          E = Rs;
          var A = Vn;
          if (Rs = m, (Vn = M) && !A)
            for (me = c; me !== null; )
              m = me, M = m.child, m.tag === 22 && m.memoizedState !== null ? Gv(c) : M !== null ? (M.return = m, me = M) : Gv(c);
          for (; d !== null; )
            me = d, So(d), d = d.sibling;
          me = c, Rs = E, Vn = A;
        }
        Wv(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, me = d) : Wv(n);
    }
  }
  function Wv(n) {
    for (; me !== null; ) {
      var r = me;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Vn || xs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Vn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ya(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && uu(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  uu(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var M = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      M.autoFocus && l.focus();
                      break;
                    case "img":
                      M.src && (l.src = M.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var Q = A.memoizedState;
                    if (Q !== null) {
                      var W = Q.dehydrated;
                      W !== null && hl(W);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(j(163));
            }
          Vn || r.flags & 512 && zd(r);
        } catch ($) {
          Mn(r, r.return, $);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function jd(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Gv(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              xs(4, r);
            } catch (M) {
              Mn(r, l, M);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (M) {
                Mn(r, c, M);
              }
            }
            var d = r.return;
            try {
              zd(r);
            } catch (M) {
              Mn(r, d, M);
            }
            break;
          case 5:
            var m = r.return;
            try {
              zd(r);
            } catch (M) {
              Mn(r, m, M);
            }
        }
      } catch (M) {
        Mn(r, r.return, M);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var Qc = Math.ceil, Ds = ct.ReactCurrentDispatcher, Ud = ct.ReactCurrentOwner, Er = ct.ReactCurrentBatchConfig, dt = 0, gn = null, Rn = null, Kn = 0, Sa = 0, Eo = Je(0), Pn = 0, bs = null, $i = 0, Wc = 0, Co = 0, Su = null, kr = null, Fd = 0, To = 1 / 0, Qi = null, Gc = !1, Eu = null, Ci = null, zl = !1, Al = null, qc = 0, Ro = 0, Xc = null, Cu = -1, Tu = 0;
  function Cr() {
    return dt & 6 ? wt() : Cu !== -1 ? Cu : Cu = wt();
  }
  function zn(n) {
    return n.mode & 1 ? dt & 2 && Kn !== 0 ? Kn & -Kn : yc.transition !== null ? (Tu === 0 && (Tu = Bu()), Tu) : (n = kt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Xo(n.type)), n) : 1;
  }
  function Tr(n, r, l, o) {
    if (50 < Ro)
      throw Ro = 0, Xc = null, Error(j(185));
    ki(n, l, o), (!(dt & 2) || n !== gn) && (n === gn && (!(dt & 2) && (Wc |= l), Pn === 4 && Fa(n, Kn)), Rr(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (To = wt() + 500, Gn && Kr()));
  }
  function Rr(n, r) {
    var l = n.callbackNode;
    fl(n, r);
    var o = br(n, n === gn ? Kn : 0);
    if (o === 0)
      l !== null && tr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && tr(l), r === 1)
        n.tag === 0 ? cd(qv.bind(null, n)) : sd(qv.bind(null, n)), ld(function() {
          !(dt & 6) && Kr();
        }), l = null;
      else {
        switch ($u(o)) {
          case 1:
            l = qa;
            break;
          case 4:
            l = lt;
            break;
          case 16:
            l = di;
            break;
          case 536870912:
            l = Vu;
            break;
          default:
            l = di;
        }
        l = Yd(l, Mo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Mo(n, r) {
    if (Cu = -1, Tu = 0, dt & 6)
      throw Error(j(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l)
      return null;
    var o = br(n, n === gn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = Zc(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Kc();
      (gn !== n || Kn !== r) && (Qi = null, To = wt() + 500, Ru(n, r));
      do
        try {
          uy();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (1);
      md(), Ds.current = d, dt = c, Rn !== null ? r = 0 : (gn = null, Kn = 0, r = Pn);
    }
    if (r !== 0) {
      if (r === 2 && (c = dl(n), c !== 0 && (o = c, r = Id(n, c))), r === 1)
        throw l = bs, Ru(n, 0), Fa(n, o), Rr(n, wt()), l;
      if (r === 6)
        Fa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hd(c) && (r = Zc(n, o), r === 2 && (d = dl(n), d !== 0 && (o = d, r = Id(n, d))), r === 1))
          throw l = bs, Ru(n, 0), Fa(n, o), Rr(n, wt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(j(345));
          case 2:
            Mu(n, kr, Qi);
            break;
          case 3:
            if (Fa(n, o), (o & 130023424) === o && (r = Fd + 500 - wt(), 10 < r)) {
              if (br(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Cr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = au(Mu.bind(null, n, kr, Qi), r);
              break;
            }
            Mu(n, kr, Qi);
            break;
          case 4:
            if (Fa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = wt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Qc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = au(Mu.bind(null, n, kr, Qi), o);
              break;
            }
            Mu(n, kr, Qi);
            break;
          case 5:
            Mu(n, kr, Qi);
            break;
          default:
            throw Error(j(329));
        }
      }
    }
    return Rr(n, wt()), n.callbackNode === l ? Mo.bind(null, n) : null;
  }
  function Id(n, r) {
    var l = Su;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = Zc(n, r), n !== 2 && (r = kr, kr = l, r !== null && _s(r)), n;
  }
  function _s(n) {
    kr === null ? kr = n : kr.push.apply(kr, n);
  }
  function Hd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ba(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Fa(n, r) {
    for (r &= ~Co, r &= ~Wc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qv(n) {
    if (dt & 6)
      throw Error(j(327));
    xo();
    var r = br(n, 0);
    if (!(r & 1))
      return Rr(n, wt()), null;
    var l = Zc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = dl(n);
      o !== 0 && (r = o, l = Id(n, o));
    }
    if (l === 1)
      throw l = bs, Ru(n, 0), Fa(n, r), Rr(n, wt()), l;
    if (l === 6)
      throw Error(j(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Mu(n, kr, Qi), Rr(n, wt()), null;
  }
  function wo(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (To = wt() + 500, Gn && Kr());
    }
  }
  function jl(n) {
    Al !== null && Al.tag === 0 && !(dt & 6) && xo();
    var r = dt;
    dt |= 1;
    var l = Er.transition, o = kt;
    try {
      if (Er.transition = null, kt = 1, n)
        return n();
    } finally {
      kt = o, Er.transition = l, dt = r, !(dt & 6) && Kr();
    }
  }
  function Vd() {
    Sa = Eo.current, zt(Eo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Rv(l)), Rn !== null)
      for (l = Rn.return; l !== null; ) {
        var o = l;
        switch (dd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Na();
            break;
          case 3:
            kl(), zt(Tn), zt(Pe), Rc();
            break;
          case 5:
            ot(o);
            break;
          case 4:
            kl();
            break;
          case 13:
            zt(Ae);
            break;
          case 19:
            zt(Ae);
            break;
          case 10:
            xl(o.type._context);
            break;
          case 22:
          case 23:
            Vd();
        }
        l = l.return;
      }
    if (gn = n, Rn = n = Ul(n.current, null), Kn = Sa = r, Pn = 0, bs = null, Co = Wc = $i = 0, kr = Su = null, rr !== null) {
      for (r = 0; r < rr.length; r++)
        if (l = rr[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      rr = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = Rn;
      try {
        if (md(), Mc.current = Hc, Ue) {
          for (var o = ln.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ue = !1;
        }
        if (su = 0, St = H = ln = null, gi = !1, ga = 0, Ud.current = null, l === null || l.return === null) {
          Pn = 1, bs = r, Rn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, M = r;
          if (r = Kn, E.flags |= 32768, M !== null && typeof M == "object" && typeof M.then == "function") {
            var A = M, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = wd(m);
            if (ce !== null) {
              ce.flags &= -257, xd(ce, m, E, d, r), ce.mode & 1 && Fv(d, A, r), r = ce, M = A;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(M), r.updateQueue = Ce;
              } else
                ge.add(M);
              break e;
            } else {
              if (!(r & 1)) {
                Fv(d, A, r), Pd();
                break e;
              }
              M = Error(j(426));
            }
          } else if (an && E.mode & 1) {
            var _n = wd(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), xd(_n, m, E, d, r), vd(po(M, E));
              break e;
            }
          }
          d = M = po(M, E), Pn !== 4 && (Pn = 2), Su === null ? Su = [d] : Su.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = Uv(d, M, r);
                Sd(d, b);
                break e;
              case 1:
                E = M;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Ci === null || !Ci.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Es(d, E, r);
                  Sd(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Bd(l);
      } catch (Te) {
        r = Te, Rn === l && l !== null && (Rn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Kc() {
    var n = Ds.current;
    return Ds.current = Hc, n === null ? Hc : n;
  }
  function Pd() {
    (Pn === 0 || Pn === 3 || Pn === 2) && (Pn = 4), gn === null || !($i & 268435455) && !(Wc & 268435455) || Fa(gn, Kn);
  }
  function Zc(n, r) {
    var l = dt;
    dt |= 2;
    var o = Kc();
    (gn !== n || Kn !== r) && (Qi = null, Ru(n, r));
    do
      try {
        ly();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (1);
    if (md(), dt = l, Ds.current = o, Rn !== null)
      throw Error(j(261));
    return gn = null, Kn = 0, Pn;
  }
  function ly() {
    for (; Rn !== null; )
      Kv(Rn);
  }
  function uy() {
    for (; Rn !== null && !fi(); )
      Kv(Rn);
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? Bd(n) : Rn = r, Ud.current = null;
  }
  function Bd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Od(l, r), l !== null) {
          l.flags &= 32767, Rn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Pn = 6, Rn = null;
          return;
        }
      } else if (l = iy(l, r, Sa), l !== null) {
        Rn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Rn = r;
        return;
      }
      Rn = r = n;
    } while (r !== null);
    Pn === 0 && (Pn = 5);
  }
  function Mu(n, r, l) {
    var o = kt, c = Er.transition;
    try {
      Er.transition = null, kt = 1, oy(n, r, l, o);
    } finally {
      Er.transition = c, kt = o;
    }
    return null;
  }
  function oy(n, r, l, o) {
    do
      xo();
    while (Al !== null);
    if (dt & 6)
      throw Error(j(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(j(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (If(n, d), n === gn && (Rn = gn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zl || (zl = !0, Yd(di, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Er.transition, Er.transition = null;
      var m = kt;
      kt = 1;
      var E = dt;
      dt |= 4, Ud.current = null, Bv(n, l), $v(l, n), lc(ru), Da = !!ad, ru = ad = null, n.current = l, Qv(l), Hu(), dt = E, kt = m, Er.transition = d;
    } else
      n.current = l;
    if (zl && (zl = !1, Al = n, qc = c), d = n.pendingLanes, d === 0 && (Ci = null), Wo(l.stateNode), Rr(n, wt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Gc)
      throw Gc = !1, n = Eu, Eu = null, n;
    return qc & 1 && n.tag !== 0 && xo(), d = n.pendingLanes, d & 1 ? n === Xc ? Ro++ : (Ro = 0, Xc = n) : Ro = 0, Kr(), null;
  }
  function xo() {
    if (Al !== null) {
      var n = $u(qc), r = Er.transition, l = kt;
      try {
        if (Er.transition = null, kt = 16 > n ? 16 : n, Al === null)
          var o = !1;
        else {
          if (n = Al, Al = null, qc = 0, dt & 6)
            throw Error(j(331));
          var c = dt;
          for (dt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if (me.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var M = 0; M < E.length; M++) {
                  var A = E[M];
                  for (me = A; me !== null; ) {
                    var Q = me;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null)
                      W.return = Q, me = W;
                    else
                      for (; me !== null; ) {
                        Q = me;
                        var $ = Q.sibling, ce = Q.return;
                        if (Ad(Q), Q === A) {
                          me = null;
                          break;
                        }
                        if ($ !== null) {
                          $.return = ce, me = $;
                          break;
                        }
                        me = ce;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var _n = Ce.sibling;
                      Ce.sibling = null, Ce = _n;
                    } while (Ce !== null);
                  }
                }
                me = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, me = m;
            else
              e:
                for (; me !== null; ) {
                  if (d = me, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, d, d.return);
                    }
                  var b = d.sibling;
                  if (b !== null) {
                    b.return = d.return, me = b;
                    break e;
                  }
                  me = d.return;
                }
          }
          var x = n.current;
          for (me = x; me !== null; ) {
            m = me;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null)
              N.return = m, me = N;
            else
              e:
                for (m = x; me !== null; ) {
                  if (E = me, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          xs(9, E);
                      }
                    } catch (Te) {
                      Mn(E, E.return, Te);
                    }
                  if (E === m) {
                    me = null;
                    break e;
                  }
                  var K = E.sibling;
                  if (K !== null) {
                    K.return = E.return, me = K;
                    break e;
                  }
                  me = E.return;
                }
          }
          if (dt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(ol, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        kt = l, Er.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = po(l, r), r = Uv(n, r, 1), n = bl(n, r, 1), r = Cr(), n !== null && (ki(n, 1, r), Rr(n, r));
  }
  function Mn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ci === null || !Ci.has(o))) {
            n = po(l, n), n = Es(r, n, 1), r = bl(r, n, 1), n = Cr(), r !== null && (ki(r, 1, n), Rr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Cr(), n.pingedLanes |= n.suspendedLanes & l, gn === n && (Kn & l) === l && (Pn === 4 || Pn === 3 && (Kn & 130023424) === Kn && 500 > wt() - Fd ? Ru(n, 0) : Co |= l), Rr(n, r);
  }
  function Jc(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = Cr();
    n = Hi(n, r), n !== null && (ki(n, r, l), Rr(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Jc(n, l);
  }
  function fy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(j(314));
    }
    o !== null && o.delete(r), Jc(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Tn.current)
        On = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return On = !1, Bi(n, r, l);
        On = !!(n.flags & 131072);
      }
    else
      On = !1, an && r.flags & 1048576 && fd(r, io, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        gr(n, r), n = r.pendingProps;
        var c = ka(r, Pe.current);
        re(r, l), c = Nl(null, r, o, n, c, l);
        var d = du();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, sn(o) ? (d = !0, dc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, gd(r), c.updater = Ec, r.stateNode = c, c._reactInternals = r, Cc(r, o, n, l), r = Iv(null, r, o, !0, d, l)) : (r.tag = 0, an && d && pc(r), In(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (gr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ya(o, n), c) {
            case 0:
              r = vo(null, r, o, n, l);
              break e;
            case 1:
              r = Dd(null, r, o, n, l);
              break e;
            case 11:
              r = Ol(null, r, o, n, l);
              break e;
            case 14:
              r = Pc(null, r, o, ya(o.type, n), l);
              break e;
          }
          throw Error(j(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), vo(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Dd(n, r, o, c, l);
      case 3:
        e: {
          if (Hv(r), n === null)
            throw Error(j(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fn(n, r), _l(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = po(Error(j(423)), r), r = Bc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = po(Error(j(424)), r), r = Bc(n, r, o, l, c);
              break e;
            } else
              for (ea = ti(r.stateNode.containerInfo.firstChild), ma = r, an = !0, Oa = null, l = Av(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (mn(), o === c) {
              r = ar(n, r, l);
              break e;
            }
            In(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Oe(r), n === null && hc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, os(o, c) ? m = null : d !== null && os(o, d) && (r.flags |= 32), et(n, r), In(n, r, m, l), r.child;
      case 6:
        return n === null && hc(r), null;
      case 13:
        return _d(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = uo(r, null, o, l) : In(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), Ol(n, r, o, c, l);
      case 7:
        return In(n, r, r.pendingProps, l), r.child;
      case 8:
        return In(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return In(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Vt(yi, o._currentValue), o._currentValue = m, d !== null)
            if (ba(d.value, m)) {
              if (d.children === c.children && !Tn.current) {
                r = ar(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var M = E.firstContext; M !== null; ) {
                    if (M.context === o) {
                      if (d.tag === 1) {
                        M = Vi(-1, l & -l), M.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var Q = A.pending;
                          Q === null ? M.next = M : (M.next = Q.next, Q.next = M), A.pending = M;
                        }
                      }
                      d.lanes |= l, M = d.alternate, M !== null && (M.lanes |= l), qn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    M = M.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(j(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), qn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          In(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, re(r, l), c = bn(c), o = o(c), r.flags |= 1, In(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ya(o, r.pendingProps), c = ya(o.type, c), Pc(n, r, o, c, l);
      case 15:
        return ra(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ya(o, c), gr(n, r), r.tag = 1, sn(o) ? (n = !0, dc(r)) : n = !1, re(r, l), Nv(r, o, c), Cc(r, o, c, l), Iv(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return mu(n, r, l);
    }
    throw Error(j(156, r.tag));
  };
  function Yd(n, r) {
    return en(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function")
      return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === At)
        return 14;
    }
    return 2;
  }
  function Ul(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ef(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      $d(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ie:
            return wu(l.children, c, d, r);
          case nn:
            m = 8, c |= 8;
            break;
          case wn:
            return n = Ia(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
          case je:
            return n = Ia(13, l, r, c), n.elementType = je, n.lanes = d, n;
          case Ke:
            return n = Ia(19, l, r, c), n.elementType = Ke, n.lanes = d, n;
          case ye:
            return ks(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Qt:
                  m = 10;
                  break e;
                case _t:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case At:
                  m = 14;
                  break e;
                case Mt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(j(130, n == null ? n : typeof n, ""));
        }
    return r = Ia(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wu(n, r, l, o) {
    return n = Ia(7, n, o, r), n.lanes = l, n;
  }
  function ks(n, r, l, o) {
    return n = Ia(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ns(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function xu(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yu(0), this.expirationTimes = Yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function tf(n, r, l, o, c, d, m, E, M) {
    return n = new vy(n, r, l, E, M), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ia(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: it, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n)
      return mi;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1)
        throw Error(j(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(j(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (sn(l))
        return fs(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, m, E, M) {
    return n = tf(l, o, !0, n, c, d, m, E, M), n.context = Qd(null), l = n.current, o = Cr(), c = zn(l), d = Vi(o, c), d.callback = r ?? null, bl(l, d, c), n.current.lanes = c, ki(n, c, o), Rr(n, o), n;
  }
  function Ls(n, r, l, o) {
    var c = r.current, d = Cr(), m = zn(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Vi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = bl(c, r, m), n !== null && (Tr(n, c, m, d), Sc(n, c, m)), m;
  }
  function nf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function nh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r);
  }
  function rh() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function rf(n) {
    this._internalRoot = n;
  }
  Wi.prototype.render = rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(j(409));
    Ls(n, r, null, null);
  }, Wi.prototype.unmount = rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      jl(function() {
        Ls(null, n, null, null);
      }), r[Fi] = null;
    }
  };
  function Wi(n) {
    this._internalRoot = n;
  }
  Wi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Wu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ht.length && r !== 0 && r < Ht[l].priority; l++)
        ;
      Ht.splice(l, 0, n), l === 0 && Js(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function af(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = nf(m);
          d.call(A);
        };
      }
      var m = th(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = m, n[Fi] = m.current, ro(n.nodeType === 8 ? n.parentNode : n), jl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = nf(M);
        E.call(A);
      };
    }
    var M = tf(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = M, n[Fi] = M.current, ro(n.nodeType === 8 ? n.parentNode : n), jl(function() {
      Ls(r, M, l, o);
    }), M;
  }
  function lf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var M = nf(m);
          E.call(M);
        };
      }
      Ls(r, m, n, c);
    } else
      m = hy(l, r, n, c, o);
    return nf(m);
  }
  Xl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Xa(r.pendingLanes);
          l !== 0 && (pi(r, l | 1), Rr(r, wt()), !(dt & 6) && (To = wt() + 500, Kr()));
        }
        break;
      case 13:
        jl(function() {
          var o = Hi(n, 1);
          if (o !== null) {
            var c = Cr();
            Tr(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Qu = function(n) {
    if (n.tag === 13) {
      var r = Hi(n, 134217728);
      if (r !== null) {
        var l = Cr();
        Tr(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = zn(n), l = Hi(n, r);
      if (l !== null) {
        var o = Cr();
        Tr(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Wu = function() {
    return kt;
  }, Gu = function(n, r) {
    var l = kt;
    try {
      return kt = n, r();
    } finally {
      kt = l;
    }
  }, wr = function(n, r, l) {
    switch (r) {
      case "input":
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = _e(o);
              if (!c)
                throw Error(j(90));
              Vr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        sa(n, l);
        break;
      case "select":
        r = l.value, r != null && vr(n, !!l.multiple, r, !1);
    }
  }, ql = wo, Iu = jl;
  var my = { usingClientEntryPoint: !1, Events: [cs, ao, _e, wa, il, wo] }, Do = { findFiberByHostInstance: _a, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, yy = { bundleType: Do.bundleType, version: Do.version, rendererPackageName: Do.rendererPackageName, rendererConfig: Do.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Nn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Do.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uf.isDisabled && uf.supportsFiber)
      try {
        ol = uf.inject(yy), Qr = uf;
      } catch {
      }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r))
      throw Error(j(200));
    return eh(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!qd(n))
      throw Error(j(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = tf(n, 1, !1, null, null, l, !1, o, c), n[Fi] = r.current, ro(n.nodeType === 8 ? n.parentNode : n), new rf(r);
  }, $a.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(j(188)) : (n = Object.keys(n).join(","), Error(j(268, n)));
    return n = Nn(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return jl(n);
  }, $a.hydrate = function(n, r, l) {
    if (!af(r))
      throw Error(j(200));
    return lf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!qd(n))
      throw Error(j(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = th(r, null, n, 1, l ?? null, c, !1, d, m), n[Fi] = r.current, ro(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Wi(r);
  }, $a.render = function(n, r, l) {
    if (!af(r))
      throw Error(j(200));
    return lf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!af(n))
      throw Error(j(40));
    return n._reactRootContainer ? (jl(function() {
      lf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = wo, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!af(l))
      throw Error(j(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(j(38));
    return lf(n, r, l, !1, o);
  }, $a.version = "18.2.0-next-9e3b772b8-20220608", $a;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZT;
function tb() {
  return ZT || (ZT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var P = Qo, X = a1(), j = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mt = !1;
    function $t(e) {
      mt = e;
    }
    function Xe(e) {
      if (!mt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("warn", e, a);
      }
    }
    function S(e) {
      if (!mt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        vt("error", e, a);
      }
    }
    function vt(e, t, a) {
      {
        var i = j.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var he = 0, ee = 1, Me = 2, Z = 3, le = 4, ue = 5, Ve = 6, Rt = 7, st = 8, fn = 9, at = 10, We = 11, ct = 12, De = 13, it = 14, Ie = 15, nn = 16, wn = 17, Qt = 18, _t = 19, En = 21, je = 22, Ke = 23, At = 24, Mt = 25, ye = !0, J = !1, we = !1, R = !1, B = !1, oe = !0, Ye = !1, Fe = !1, yt = !0, tt = !0, ft = !0, nt = /* @__PURE__ */ new Set(), jt = {}, Hr = {};
    function pr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      jt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), jt[e] = t;
      {
        var a = e.toLowerCase();
        Hr[a] = e, e === "onDoubleClick" && (Hr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        nt.add(t[i]);
    }
    var dn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function jn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Un(e) {
      try {
        return xn(e), !1;
      } catch {
        return !0;
      }
    }
    function xn(e) {
      return "" + e;
    }
    function Pr(e, t) {
      if (Un(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), xn(e);
    }
    function Br(e) {
      if (Un(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), xn(e);
    }
    function $n(e, t) {
      if (Un(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), xn(e);
    }
    function vr(e, t) {
      if (Un(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), xn(e);
    }
    function Yr(e) {
      if (Un(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), xn(e);
    }
    function hr(e) {
      if (Un(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jn(e)), xn(e);
    }
    var sa = 0, er = 1, $r = 2, pn = 3, Mr = 4, ui = 5, ca = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + te + "][" + xe + "]*$"), Ot = {}, Ut = {};
    function Dn(e) {
      return Yn.call(Ut, e) ? !0 : Yn.call(Ot, e) ? !1 : rt.test(e) ? (Ut[e] = !0, !0) : (Ot[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === sa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mr(e, t, a, i) {
      if (a !== null && a.type === sa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Bt(e, t, a, i) {
      if (t === null || typeof t > "u" || mr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case pn:
            return !t;
          case Mr:
            return t === !1;
          case ui:
            return isNaN(t);
          case ca:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function wr(e) {
      return It.hasOwnProperty(e) ? It[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === $r || t === pn || t === Mr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var It = {}, Ga = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ga.forEach(function(e) {
      It[e] = new Ft(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      It[t] = new Ft(
        t,
        er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      It[e] = new Ft(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      It[e] = new Ft(
        e,
        $r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      It[e] = new Ft(
        e,
        pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Ft(
        e,
        pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Ft(
        e,
        Mr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      It[e] = new Ft(
        e,
        ca,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      It[e] = new Ft(
        e,
        ui,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var wa = /[\-\:]([a-z])/g, il = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wa, il);
      It[t] = new Ft(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wa, il);
      It[t] = new Ft(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(wa, il);
      It[t] = new Ft(
        t,
        er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      It[e] = new Ft(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ql = "xlinkHref";
    It[ql] = new Ft(
      "xlinkHref",
      er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      It[e] = new Ft(
        e,
        er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Iu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, _i = !1;
    function ll(e) {
      !_i && Iu.test(e) && (_i = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Pr(a, t), i.sanitizeURL && ll("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Mr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Bt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === pn)
            return a;
          f = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Pr(a, t), u === "" + a ? a : u;
      }
    }
    function da(e, t, a, i) {
      var u = wr(t);
      if (!vn(t, u, i)) {
        if (Bt(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Pr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === pn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var D = u.type, w;
          D === pn || D === Mr && a === !0 ? w = "" : (Pr(a, y), w = "" + a, u.sanitizeURL && ll(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var si = Symbol.for("react.element"), xr = Symbol.for("react.portal"), pa = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), ne = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), gt = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), Nn = Symbol.for("react.scope"), Jt = Symbol.for("react.debug_trace_mode"), en = Symbol.for("react.offscreen"), tr = Symbol.for("react.legacy_hidden"), fi = Symbol.for("react.cache"), Hu = Symbol.for("react.tracing_marker"), wt = Symbol.iterator, Ff = "@@iterator";
    function qa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = wt && e[wt] || e[Ff];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, di = 0, ul, Vu, ol, Qr, Wo, Dr, Go;
    function qo() {
    }
    qo.__reactDisabledLog = !0;
    function Ks() {
      {
        if (di === 0) {
          ul = console.log, Vu = console.info, ol = console.warn, Qr = console.error, Wo = console.group, Dr = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: qo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function Pu() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: ul
            }),
            info: lt({}, e, {
              value: Vu
            }),
            warn: lt({}, e, {
              value: ol
            }),
            error: lt({}, e, {
              value: Qr
            }),
            group: lt({}, e, {
              value: Wo
            }),
            groupCollapsed: lt({}, e, {
              value: Dr
            }),
            groupEnd: lt({}, e, {
              value: Go
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sl = j.ReactCurrentDispatcher, Xa;
    function br(e, t, a) {
      {
        if (Xa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xa = i && i[1] || "";
          }
        return `
` + Xa + e;
      }
    }
    var cl = !1, fl;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      fl = new dl();
    }
    function Bu(e, t) {
      if (!e || cl)
        return "";
      {
        var a = fl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      cl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = sl.current, sl.current = null, Ks();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var D = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && fl.set(e, D), D;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        cl = !1, sl.current = s, Pu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", L = w ? br(w) : "";
      return typeof e == "function" && fl.set(e, L), L;
    }
    function Yu(e, t, a) {
      return Bu(e, !0);
    }
    function ki(e, t, a) {
      return Bu(e, !1);
    }
    function If(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bu(e, If(e));
      if (typeof e == "string")
        return br(e);
      switch (e) {
        case qe:
          return br("Suspense");
        case gt:
          return br("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            return ki(e.render);
          case Ze:
            return pi(e.type, t, a);
          case ke: {
            var i = e, u = i._payload, s = i._init;
            try {
              return pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function kt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return br(e.type);
        case nn:
          return br("Lazy");
        case De:
          return br("Suspense");
        case _t:
          return br("SuspenseList");
        case he:
        case Me:
        case Ie:
          return ki(e.type);
        case We:
          return ki(e.type.render);
        case ee:
          return Yu(e.type);
        default:
          return "";
      }
    }
    function $u(e) {
      try {
        var t = "", a = e;
        do
          t += kt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Xl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Qu(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case pa:
          return "Fragment";
        case xr:
          return "Portal";
        case T:
          return "Profiler";
        case ci:
          return "StrictMode";
        case qe:
          return "Suspense";
        case gt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return Qu(t) + ".Consumer";
          case Y:
            var a = e;
            return Qu(a._context) + ".Provider";
          case de:
            return Xl(e, e.render, "ForwardRef");
          case Ze:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case ke: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Gu(e) {
      return e.displayName || "Context";
    }
    function $e(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case At:
          return "Cache";
        case fn:
          var i = a;
          return Gu(i) + ".Consumer";
        case at:
          var u = a;
          return Gu(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case We:
          return Wu(a, a.render, "ForwardRef");
        case Rt:
          return "Fragment";
        case ue:
          return a;
        case le:
          return "Portal";
        case Z:
          return "Root";
        case Ve:
          return "Text";
        case nn:
          return xt(a);
        case st:
          return a === ci ? "StrictMode" : "Mode";
        case je:
          return "Offscreen";
        case ct:
          return "Profiler";
        case En:
          return "Scope";
        case De:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case Mt:
          return "TracingMarker";
        case ee:
        case he:
        case wn:
        case Me:
        case it:
        case Ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = j.ReactDebugCurrentFrame, hn = null, Wr = !1;
    function _r() {
      {
        if (hn === null)
          return null;
        var e = hn._debugOwner;
        if (e !== null && typeof e < "u")
          return $e(e);
      }
      return null;
    }
    function pl() {
      return hn === null ? "" : $u(hn);
    }
    function Cn() {
      Kl.getCurrentStack = null, hn = null, Wr = !1;
    }
    function Ht(e) {
      Kl.getCurrentStack = e === null ? null : pl, hn = e, Wr = !1;
    }
    function Zs() {
      return hn;
    }
    function Gr(e) {
      Wr = e;
    }
    function Qn(e) {
      return "" + e;
    }
    function vi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return hr(e), e;
        default:
          return "";
      }
    }
    var Js = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ni(e, t) {
      Js[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function vl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ec(e) {
      return e._valueTracker;
    }
    function xa(e) {
      e._valueTracker = null;
    }
    function hl(e) {
      var t = "";
      return e && (vl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ml(e) {
      var t = vl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      hr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            hr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            hr(p), i = "" + p;
          },
          stopTracking: function() {
            xa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Da(e) {
      ec(e) || (e._valueTracker = ml(e));
    }
    function qu(e) {
      if (!e)
        return !1;
      var t = ec(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = hl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function yl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var gl = !1, Zl = !1, Xu = !1, Xo = !1;
    function Ka(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Ni("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Zl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), Zl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gl && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), gl = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: vi(t.value != null ? t.value : i),
        controlled: Ka(t)
      };
    }
    function O(e, t) {
      var a = e, i = t.checked;
      i != null && da(a, "checked", i, !1);
    }
    function U(e, t) {
      var a = e;
      {
        var i = Ka(t);
        !a._wrapperState.controlled && i && !Xo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xo = !0), a._wrapperState.controlled && !i && !Xu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xu = !0);
      }
      O(e, t);
      var u = vi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Qn(u)) : a.value !== Qn(u) && (a.value = Qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, vi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function q(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function ze(e, t) {
      var a = e;
      U(a, t), ie(a, t);
    }
    function ie(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Pr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qu(f), U(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || yl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qn(e._wrapperState.initialValue) : e.defaultValue !== Qn(a) && (e.defaultValue = Qn(a)));
    }
    var ut = !1, Dt = !1, qt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? P.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Dt || (Dt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (qt || (qt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ut && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ut = !0);
    }
    function Xt(e, t) {
      t.value != null && e.setAttribute("value", Qn(vi(t.value)));
    }
    var tn = Array.isArray;
    function ht(e) {
      return tn(e);
    }
    var Li;
    Li = !1;
    function Ku() {
      var e = _r();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ko = ["value", "defaultValue"];
    function Hf(e) {
      {
        Ni("select", e);
        for (var t = 0; t < Ko.length; t++) {
          var a = Ko[t];
          if (e[a] != null) {
            var i = ht(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ku()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ku());
          }
        }
      }
    }
    function Za(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Qn(vi(a)), D = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          D === null && !u[w].disabled && (D = u[w]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Zo(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function Jo(e, t) {
      var a = e;
      Hf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Li && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Li = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Za(a, !!t.multiple, i, !1) : t.defaultValue != null && Za(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Za(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Za(a, !!t.multiple, t.defaultValue, !0) : Za(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Im(e, t) {
      var a = e, i = t.value;
      i != null && Za(a, !!t.multiple, i, !1);
    }
    var Pf = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      Ni("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Pf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component"), Pf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ht(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: vi(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = vi(t.value), u = vi(t.defaultValue);
      if (i != null) {
        var s = Qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Qn(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Yf(e, t) {
      Kp(e, t);
    }
    var Oi = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", $f = "http://www.w3.org/2000/svg";
    function tc(e) {
      switch (e) {
        case "svg":
          return $f;
        case "math":
          return Hm;
        default:
          return Oi;
      }
    }
    function Qf(e, t) {
      return e == null || e === Oi ? tc(t) : e === $f && t === "foreignObject" ? Oi : e;
    }
    var Vm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, nc, Jp = Vm(function(e, t) {
      if (e.namespaceURI === $f && !("innerHTML" in e)) {
        nc = nc || document.createElement("div"), nc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = nc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, zi = 3, Ln = 8, Ja = 9, Jl = 11, rc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === zi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      nv.forEach(function(t) {
        Zu[tv(t, e)] = Zu[e];
      });
    });
    function ac(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (vr(t, e), ("" + t).trim());
    }
    var Ju = /([A-Z])/g, Pm = /^ms-/;
    function Bm(e) {
      return e.replace(Ju, "-$1").toLowerCase().replace(Pm, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, es = /-(.)/g, eo = /;\s*$/, to = {}, no = {}, lv = !1, Wf = !1, Gf = function(e) {
        return e.replace(es, function(t, a) {
          return a.toUpperCase();
        });
      }, qf = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Gf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        to.hasOwnProperty(e) && to[e] || (to[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        no.hasOwnProperty(t) && no[t] || (no[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eo, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ym = function(e, t) {
        Wf || (Wf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? qf(e) : av.test(e) ? uv(e) : eo.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || Ym(e, t));
      };
    }
    var $m = rv;
    function Qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += ac(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || $m(i, t[i]);
          var s = ac(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Wm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ba(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ts(e, t) {
      {
        if (!t)
          return;
        var a = ba(e), i = ba(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Wm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, dv = lt({
      menuitem: !0
    }, fv), pv = "__html";
    function ic(e, t) {
      if (t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var lc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ei = {}, Xf = new RegExp("^(aria)-[" + xe + "]*$"), ns = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function Kf(e, t) {
      {
        if (Yn.call(ei, t) && ei[t])
          return !0;
        if (ns.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ei[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ei[t] = !0, !0;
        }
        if (Xf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ei[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ei[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Kf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function uc(e, t) {
      Ai(e, t) || hv(e, t);
    }
    var eu = !1;
    function Zf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !eu && (eu = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Jf = function() {
    };
    {
      var Wn = {}, ed = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + xe + "]*$"), gv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      Jf = function(e, t, a, i) {
        if (Yn.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (ed.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (ed.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = wr(t), y = v !== null && v.type === sa;
        if (lc.hasOwnProperty(u)) {
          var g = lc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Wn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && mr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : y ? !0 : mr(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === pn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Jf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      Ai(e, t) || Sv(e, t, a);
    }
    var ji = 1, rs = 1 << 1, tu = 1 << 2, Gm = ji | rs | tu, as = null;
    function is(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function qm() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function Cv(e) {
      return e === as;
    }
    function oc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === zi ? t.parentNode : t;
    }
    var Kt = null, Sl = null, Ui = null;
    function ro(e) {
      var t = ko(e);
      if (t) {
        if (typeof Kt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ch(a);
          Kt(t.stateNode, t.type, i);
        }
      }
    }
    function Tv(e) {
      Kt = e;
    }
    function sc(e) {
      Sl ? Ui ? Ui.push(e) : Ui = [e] : Sl = e;
    }
    function ls() {
      return Sl !== null || Ui !== null;
    }
    function us() {
      if (Sl) {
        var e = Sl, t = Ui;
        if (Sl = null, Ui = null, ro(e), t)
          for (var a = 0; a < t.length; a++)
            ro(t[a]);
      }
    }
    var nu = function(e, t) {
      return e(t);
    }, td = function() {
    }, nd = !1;
    function Xm() {
      var e = ls();
      e && (td(), us());
    }
    function rd(e, t, a) {
      if (nd)
        return e(t, a);
      nd = !0;
      try {
        return nu(e, t, a);
      } finally {
        nd = !1, Xm();
      }
    }
    function cc(e, t, a) {
      nu = e, td = a;
    }
    function fc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ad(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && fc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ad(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (dn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        os = !1;
      }
    function Rv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var id = Rv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ld = document.createElement("react");
      id = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), D = !1, w = !0, L = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          ld.removeEventListener(I, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          D = !0, F(), a.apply(i, pe), w = !1;
        }
        var Re, Ct = !1, pt = !1;
        function _(k) {
          if (Re = k.error, Ct = !0, Re === null && k.colno === 0 && k.lineno === 0 && (pt = !0), k.defaultPrevented && Re != null && typeof Re == "object")
            try {
              Re._suppressLogging = !0;
            } catch {
            }
        }
        var I = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), ld.addEventListener(I, Ne, !1), g.initEvent(I, !1, !1), ld.dispatchEvent(g), z && Object.defineProperty(window, "event", z), D && w && (Ct ? pt && (Re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Re)), window.removeEventListener("error", _), !D)
          return F(), Rv.apply(this, arguments);
      };
    }
    var Km = id, El = !1, ti = null, ss = !1, Cl = null, hi = {
      onError: function(e) {
        El = !0, ti = e;
      }
    };
    function iu(e, t, a, i, u, s, f, p, v) {
      El = !1, ti = null, Km.apply(hi, arguments);
    }
    function Fi(e, t, a, i, u, s, f, p, v) {
      if (iu.apply(this, arguments), El) {
        var y = od();
        ss || (ss = !0, Cl = y);
      }
    }
    function ud() {
      if (ss) {
        var e = Cl;
        throw ss = !1, Cl = null, e;
      }
    }
    function Zm() {
      return El;
    }
    function od() {
      if (El) {
        var e = ti;
        return El = !1, ti = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _a(e) {
      return e._reactInternals;
    }
    function cs(e) {
      return e._reactInternals !== void 0;
    }
    function ao(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), Tl = (
      /*                */
      1
    ), rn = (
      /*                    */
      2
    ), Je = (
      /*                       */
      4
    ), zt = (
      /*                */
      16
    ), Vt = (
      /*                 */
      32
    ), mi = (
      /*                     */
      64
    ), Pe = (
      /*                   */
      128
    ), Tn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), ka = (
      /*                     */
      1024
    ), sn = (
      /*                      */
      2048
    ), Na = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), fs = (
      /*             */
      16384
    ), dc = sn | Je | mi | Xr | ka | fs, Mv = (
      /*               */
      32767
    ), va = (
      /*                   */
      32768
    ), Gn = (
      /*                */
      65536
    ), ds = (
      /* */
      131072
    ), sd = (
      /*                       */
      1048576
    ), cd = (
      /*                    */
      2097152
    ), Kr = (
      /*                 */
      4194304
    ), Ml = (
      /*                */
      8388608
    ), Zr = (
      /*               */
      16777216
    ), lu = (
      /*              */
      33554432
    ), io = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Je | ka | 0
    ), Jr = rn | Je | zt | Vt | Xr | Na | Rl, yr = Je | mi | Xr | Rl, La = sn | zt, nr = Kr | Ml | cd, Ii = j.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (rn | Na)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function fd(e) {
      if (e.tag === De) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function pc(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function dd(e) {
      return ha(e) === e;
    }
    function ma(e) {
      {
        var t = Ii.current;
        if (t !== null && t.tag === ee) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $e(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = _a(e);
      return u ? ha(u) === u : !1;
    }
    function ea(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function an(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Oa(e) {
      var t = an(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === ue || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function wv(e) {
      var t = an(e);
      return t !== null ? vc(t) : null;
    }
    function vc(e) {
      if (e.tag === ue || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== le) {
          var a = vc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hc = X.unstable_scheduleCallback, xv = X.unstable_cancelCallback, mc = X.unstable_shouldYield, Dv = X.unstable_requestPaint, mn = X.unstable_now, vd = X.unstable_getCurrentPriorityLevel, yc = X.unstable_ImmediatePriority, ya = X.unstable_UserBlockingPriority, yi = X.unstable_NormalPriority, gc = X.unstable_LowPriority, wl = X.unstable_IdlePriority, hd = X.unstable_yieldValue, md = X.unstable_setDisableYieldValue, xl = null, qn = null, re = null, bn = !1, rr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        yt && (e = lt({}, e, {
          getLaneLabelMap: bl,
          injectProfilingHooks: Vi
        })), xl = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function bv(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(xl, e, t);
        } catch (a) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Hi(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Pe) === Pe;
          if (tt) {
            var i;
            switch (t) {
              case gr:
                i = yc;
                break;
              case ar:
                i = ya;
                break;
              case Bi:
                i = yi;
                break;
              case Cs:
                i = wl;
                break;
              default:
                i = yi;
                break;
            }
            qn.onCommitFiberRoot(xl, e, i, a);
          }
        } catch (u) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Dl(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(xl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function gd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(xl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Fn(e) {
      if (typeof hd == "function" && (md(e), $t(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(xl, e);
        } catch (t) {
          bn || (bn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vi(e) {
      re = e;
    }
    function bl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < ln; a++) {
          var i = Jm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Sc(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function Sd() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function _l(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function uu() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function _v(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Ed() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Ec(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function kv() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function Nv(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function Lv() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function Cc(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Tc(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function Ov(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function zv(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function uo() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function Av(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function ps() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function ni(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function vs() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function oo() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function ou(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function Cd(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function kl(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var Oe = (
      /*                         */
      0
    ), ot = (
      /*                 */
      1
    ), Ae = (
      /*                    */
      2
    ), yn = (
      /*               */
      8
    ), za = (
      /*              */
      16
    ), Rc = Math.clz32 ? Math.clz32 : su, Mc = Math.log, Td = Math.LN2;
    function su(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Mc(t) / Td | 0) | 0;
    }
    var ln = 31, H = (
      /*                        */
      0
    ), St = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), gi = (
      /*    */
      2
    ), ga = (
      /*             */
      4
    ), cu = (
      /*            */
      8
    ), un = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), Nl = (
      /*                       */
      4194240
    ), du = (
      /*                        */
      64
    ), Aa = (
      /*                        */
      128
    ), ta = (
      /*                        */
      256
    ), pu = (
      /*                        */
      512
    ), hs = (
      /*                        */
      1024
    ), ms = (
      /*                        */
      2048
    ), wc = (
      /*                        */
      4096
    ), xc = (
      /*                        */
      8192
    ), Dc = (
      /*                        */
      16384
    ), bc = (
      /*                       */
      32768
    ), _c = (
      /*                       */
      65536
    ), kc = (
      /*                       */
      131072
    ), Nc = (
      /*                       */
      262144
    ), Lc = (
      /*                       */
      524288
    ), vu = (
      /*                       */
      1048576
    ), Oc = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), Pi = (
      /*                             */
      4194304
    ), zc = (
      /*                             */
      8388608
    ), ys = (
      /*                             */
      16777216
    ), Ac = (
      /*                             */
      33554432
    ), jc = (
      /*                             */
      67108864
    ), Rd = Pi, so = (
      /*          */
      134217728
    ), Uc = (
      /*                          */
      268435455
    ), co = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function Jm(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & gi)
          return "InputContinuousHydration";
        if (e & ga)
          return "InputContinuous";
        if (e & cu)
          return "DefaultHydration";
        if (e & un)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & Nl)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & so)
          return "SelectiveHydration";
        if (e & co)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var Zt = -1, Fc = du, Ic = Pi;
    function fo(e) {
      switch (On(e)) {
        case Ue:
          return Ue;
        case gi:
          return gi;
        case ga:
          return ga;
        case cu:
          return cu;
        case un:
          return un;
        case fu:
          return fu;
        case du:
        case Aa:
        case ta:
        case pu:
        case hs:
        case ms:
        case wc:
        case xc:
        case Dc:
        case bc:
        case _c:
        case kc:
        case Nc:
        case Lc:
        case vu:
        case Oc:
          return e & Nl;
        case Pi:
        case zc:
        case ys:
        case Ac:
        case jc:
          return e & hu;
        case so:
          return so;
        case co:
          return co;
        case Ll:
          return Ll;
        case na:
          return na;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function gs(e, t) {
      var a = e.pendingLanes;
      if (a === H)
        return H;
      var i = H, u = e.suspendedLanes, s = e.pingedLanes, f = a & Uc;
      if (f !== H) {
        var p = f & ~u;
        if (p !== H)
          i = fo(p);
        else {
          var v = f & s;
          v !== H && (i = fo(v));
        }
      } else {
        var y = a & ~u;
        y !== H ? i = fo(y) : s !== H && (i = fo(s));
      }
      if (i === H)
        return H;
      if (t !== H && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === H) {
        var g = On(i), D = On(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === un && (D & Nl) !== H
        )
          return t;
      }
      (i & ga) !== H && (i |= a & un);
      var w = e.entangledLanes;
      if (w !== H)
        for (var L = e.entanglements, z = i & w; z > 0; ) {
          var F = Ol(z), pe = 1 << F;
          i |= L[F], z &= ~pe;
        }
      return i;
    }
    function jv(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = Ol(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Hc(e, t) {
      switch (e) {
        case Ue:
        case gi:
        case ga:
          return t + 250;
        case cu:
        case un:
        case fu:
        case du:
        case Aa:
        case ta:
        case pu:
        case hs:
        case ms:
        case wc:
        case xc:
        case Dc:
        case bc:
        case _c:
        case kc:
        case Nc:
        case Lc:
        case vu:
        case Oc:
          return t + 5e3;
        case Pi:
        case zc:
        case ys:
        case Ac:
        case jc:
          return Zt;
        case so:
        case co:
        case Ll:
        case na:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function ey(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === H || (v & u) !== H) && (s[p] = Hc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ty(e) {
      return fo(e.pendingLanes);
    }
    function Md(e) {
      var t = e.pendingLanes & ~na;
      return t !== H ? t : t & na ? na : H;
    }
    function po(e) {
      return (e & Ue) !== H;
    }
    function Ss(e) {
      return (e & Uc) !== H;
    }
    function Vc(e) {
      return (e & hu) === e;
    }
    function ny(e) {
      var t = Ue | ga | un;
      return (e & t) === H;
    }
    function Uv(e) {
      return (e & Nl) === e;
    }
    function Es(e, t) {
      var a = gi | ga | cu | un;
      return (t & a) !== H;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== H;
    }
    function wd(e) {
      return (e & Nl) !== H;
    }
    function xd() {
      var e = Fc;
      return Fc <<= 1, (Fc & Nl) === H && (Fc = du), e;
    }
    function ry() {
      var e = Ic;
      return Ic <<= 1, (Ic & hu) === H && (Ic = Pi), e;
    }
    function On(e) {
      return e & -e;
    }
    function In(e) {
      return On(e);
    }
    function Ol(e) {
      return 31 - Rc(e);
    }
    function Pc(e) {
      return Ol(e);
    }
    function ra(e, t) {
      return (e & t) !== H;
    }
    function mu(e, t) {
      return (e & t) === t;
    }
    function et(e, t) {
      return e | t;
    }
    function vo(e, t) {
      return e & ~t;
    }
    function Dd(e, t) {
      return e & t;
    }
    function Iv(e) {
      return e;
    }
    function Hv(e, t) {
      return e !== St && e < t ? e : t;
    }
    function Bc(e) {
      for (var t = [], a = 0; a < ln; a++)
        t.push(e);
      return t;
    }
    function yu(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = H, e.pingedLanes = H);
      var i = e.eventTimes, u = Pc(t);
      i[u] = a;
    }
    function bd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ol(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function _d(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = H, e.pingedLanes = H, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p;
        i[p] = H, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function ho(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ol(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ay(e, t) {
      var a = On(t), i;
      switch (a) {
        case ga:
          i = gi;
          break;
        case un:
          i = cu;
          break;
        case du:
        case Aa:
        case ta:
        case pu:
        case hs:
        case ms:
        case wc:
        case xc:
        case Dc:
        case bc:
        case _c:
        case kc:
        case Nc:
        case Lc:
        case vu:
        case Oc:
        case Pi:
        case zc:
        case ys:
        case Ac:
        case jc:
          i = fu;
          break;
        case Ll:
          i = co;
          break;
        default:
          i = St;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== St ? St : i;
    }
    function Nd(e, t, a) {
      if (rr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Pc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yc(e, t) {
      if (rr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Pc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ld(e, t) {
      return null;
    }
    var gr = Ue, ar = ga, Bi = un, Cs = Ll, gu = St;
    function ja() {
      return gu;
    }
    function Hn(e) {
      gu = e;
    }
    function Ts(e, t) {
      var a = gu;
      try {
        return gu = e, t();
      } finally {
        gu = a;
      }
    }
    function Sr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function iy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Od(e, t) {
      return e !== 0 && e < t;
    }
    function Rs(e) {
      var t = On(e);
      return Od(gr, t) ? Od(ar, t) ? Ss(t) ? Bi : Cs : ar : gr;
    }
    function Vn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Vv;
    function me(e) {
      Vv = e;
    }
    function mo(e) {
      Vv(e);
    }
    var Ms;
    function Pv(e) {
      Ms = e;
    }
    var Bv;
    function ws(e) {
      Bv = e;
    }
    var xs;
    function zd(e) {
      xs = e;
    }
    var Ad;
    function Yv(e) {
      Ad = e;
    }
    var $c = !1, yo = [], Si = null, cn = null, Xn = null, Ua = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), Yi = [], ri = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function $v(e) {
      return ri.indexOf(e) > -1;
    }
    function Ei(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Si = null;
          break;
        case "dragenter":
        case "dragleave":
          cn = null;
          break;
        case "mouseover":
        case "mouseout":
          Xn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ua.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ei(t, a, i, u, s);
        if (t !== null) {
          var p = ko(t);
          p !== null && Ms(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Si = So(Si, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return cn = So(cn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xn = So(Xn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ua.set(y, So(Ua.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, D = g.pointerId;
          return go.set(D, So(go.get(D) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = As(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === De) {
            var u = fd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Bv(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (Vn(s)) {
              e.blockedOn = pc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gv(e) {
      for (var t = xs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Yi.length && Od(t, Yi[i].priority); i++)
        ;
      Yi.splice(i, 0, a), i === 0 && jd(a);
    }
    function Qc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Su(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          is(s), u.target.dispatchEvent(s), qm();
        } else {
          var f = ko(i);
          return f !== null && Ms(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ds(e, t, a) {
      Qc(e) && a.delete(t);
    }
    function Ud() {
      $c = !1, Si !== null && Qc(Si) && (Si = null), cn !== null && Qc(cn) && (cn = null), Xn !== null && Qc(Xn) && (Xn = null), Ua.forEach(Ds), go.forEach(Ds);
    }
    function Er(e, t) {
      e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Ud)));
    }
    function dt(e) {
      if (yo.length > 0) {
        Er(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Si !== null && Er(Si, e), cn !== null && Er(cn, e), Xn !== null && Er(Xn, e);
      var i = function(p) {
        return Er(p, e);
      };
      Ua.forEach(i), go.forEach(i);
      for (var u = 0; u < Yi.length; u++) {
        var s = Yi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Yi.length > 0; ) {
        var f = Yi[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && Yi.shift();
      }
    }
    var gn = j.ReactCurrentBatchConfig, Rn = !0;
    function Kn(e) {
      Rn = !!e;
    }
    function Sa() {
      return Rn;
    }
    function Eo(e, t, a) {
      var i = kr(t), u;
      switch (i) {
        case gr:
          u = Pn;
          break;
        case ar:
          u = bs;
          break;
        case Bi:
        default:
          u = $i;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Pn(e, t, a, i) {
      var u = ja(), s = gn.transition;
      gn.transition = null;
      try {
        Hn(gr), $i(e, t, a, i);
      } finally {
        Hn(u), gn.transition = s;
      }
    }
    function bs(e, t, a, i) {
      var u = ja(), s = gn.transition;
      gn.transition = null;
      try {
        Hn(ar), $i(e, t, a, i);
      } finally {
        Hn(u), gn.transition = s;
      }
    }
    function $i(e, t, a, i) {
      Rn && Wc(e, t, a, i);
    }
    function Wc(e, t, a, i) {
      var u = Su(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Co, a), Qv(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Qv(e, i), t & tu && $v(e)) {
        for (; u !== null; ) {
          var s = ko(u);
          s !== null && mo(s);
          var f = Su(e, t, a, i);
          if (f === null && wy(e, t, i, Co, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var Co = null;
    function Su(e, t, a, i) {
      Co = null;
      var u = oc(i), s = As(u);
      if (s !== null) {
        var f = ha(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === De) {
            var v = fd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (Vn(y))
              return pc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Co = s, null;
    }
    function kr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return gr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return ar;
        case "message": {
          var t = vd();
          switch (t) {
            case yc:
              return gr;
            case ya:
              return ar;
            case yi:
            case gc:
              return Bi;
            case wl:
              return Cs;
            default:
              return Bi;
          }
        }
        default:
          return Bi;
      }
    }
    function Fd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Eu = null, Ci = null, zl = null;
    function Al(e) {
      return Eu = e, Ci = Xc(), !0;
    }
    function qc() {
      Eu = null, Ci = null, zl = null;
    }
    function Ro() {
      if (zl)
        return zl;
      var e, t = Ci, a = t.length, i, u = Xc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return zl = u.slice(e, p), zl;
    }
    function Xc() {
      return "value" in Eu ? Eu.value : Eu.textContent;
    }
    function Cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Tu() {
      return !0;
    }
    function Cr() {
      return !1;
    }
    function zn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Tu : this.isDefaultPrevented = Cr, this.isPropagationStopped = Cr, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Tu
      }), t;
    }
    var Tr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Rr = zn(Tr), Mo = lt({}, Tr, {
      view: 0,
      detail: 0
    }), Id = zn(Mo), _s, Hd, Fa;
    function qv(e) {
      e !== Fa && (Fa && e.type === "mousemove" ? (_s = e.screenX - Fa.screenX, Hd = e.screenY - Fa.screenY) : (_s = 0, Hd = 0), Fa = e);
    }
    var wo = lt({}, Mo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Jc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qv(e), _s);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Hd;
      }
    }), jl = zn(wo), Vd = lt({}, wo, {
      dataTransfer: 0
    }), Ru = zn(Vd), Xv = lt({}, Mo, {
      relatedTarget: 0
    }), Kc = zn(Xv), Pd = lt({}, Tr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zc = zn(Pd), ly = lt({}, Tr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = zn(ly), Kv = lt({}, Tr, {
      data: 0
    }), Bd = zn(Kv), Mu = Bd, oy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, xo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Zv(e) {
      if (e.key) {
        var t = oy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? xo[e.keyCode] || "Unidentified" : "";
    }
    var Mn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Mn[e];
      return i ? !!a[i] : !1;
    }
    function Jc(e) {
      return sy;
    }
    var cy = lt({}, Mo, {
      key: Zv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Jc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), fy = zn(cy), Jv = lt({}, wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Yd = zn(Jv), dy = lt({}, Mo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Jc
    }), Ia = zn(dy), $d = lt({}, Tr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), py = zn($d), Ul = lt({}, wo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), ef = zn(Ul), wu = [9, 13, 27, 32], ks = 229, Ns = dn && "CompositionEvent" in window, xu = null;
    dn && "documentMode" in document && (xu = document.documentMode);
    var vy = dn && "TextEvent" in window && !xu, tf = dn && (!Ns || xu && xu > 8 && xu <= 11), eh = 32, Qd = String.fromCharCode(eh);
    function th() {
      pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ls = !1;
    function nf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function nh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === ks;
    }
    function rh(e, t) {
      switch (e) {
        case "keyup":
          return wu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ks;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function rf(e) {
      return e.locale === "ko";
    }
    var Wi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Ns ? s = nh(t) : Wi ? rh(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      tf && !rf(i) && (!Wi && s === "onCompositionStart" ? Wi = Al(u) : s === "onCompositionEnd" && Wi && (f = Ro()));
      var p = oh(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function af(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (Ls = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Ls ? null : i;
        default:
          return null;
      }
    }
    function ah(e, t) {
      if (Wi) {
        if (e === "compositionend" || !Ns && rh(e, t)) {
          var a = Ro();
          return qc(), Wi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!nf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return tf && !rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hy(e, t, a, i, u) {
      var s;
      if (vy ? s = af(t, i) : s = ah(t, i), !s)
        return null;
      var f = oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Mu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function lf(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), hy(e, t, a, i, u);
    }
    var my = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Do(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!my[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function yy(e) {
      if (!dn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function uf() {
      pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      sc(i);
      var u = oh(t, "onChange");
      if (u.length > 0) {
        var s = new Rr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, oc(e)), rd(d, t);
    }
    function d(e) {
      M0(e, 0);
    }
    function m(e) {
      var t = pf(e);
      if (qu(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var M = !1;
    dn && (M = yy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      r && (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function $(e, t, a) {
      e === "focusin" ? (Q(), A(t, a)) : e === "focusout" && Q();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ge(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ce(e, t) {
      if (e === "click")
        return m(t);
    }
    function _n(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function b(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window, v, y;
      if (o(p) ? v = E : Do(p) ? M ? v = _n : (v = ce, y = $) : ge(p) && (v = Ce), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && b(p);
    }
    function N() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function K(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (As(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var D = u.ownerDocument;
          D ? g = D.defaultView || D.parentWindow : g = window;
        }
        var w, L;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (w = a, L = z ? As(z) : null, L !== null) {
            var F = ha(L);
            (L !== F || L.tag !== ue && L.tag !== Ve) && (L = null);
          }
        } else
          w = null, L = a;
        if (w !== L) {
          var pe = jl, Ne = "onMouseLeave", Re = "onMouseEnter", Ct = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = Yd, Ne = "onPointerLeave", Re = "onPointerEnter", Ct = "pointer");
          var pt = w == null ? g : pf(w), _ = L == null ? g : pf(L), I = new pe(Ne, Ct + "leave", w, i, u);
          I.target = pt, I.relatedTarget = _;
          var k = null, G = As(u);
          if (G === a) {
            var ve = new pe(Re, Ct + "enter", L, i, u);
            ve.target = _, ve.relatedTarget = pt, k = ve;
          }
          M1(e, I, k, w, L);
        }
      }
    }
    function Te(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Te;
    function be(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Be(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Zn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function bt(e, t) {
      for (var a = Be(e), i = 0, u = 0; a; ) {
        if (a.nodeType === zi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Be(Zn(a));
      }
    }
    function Fl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return gy(e, u, s, f, p);
    }
    function gy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, D = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === zi) && (f = s + a), g === i && (u === 0 || g.nodeType === zi) && (p = s + u), g.nodeType === zi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            D = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (D === t && ++v === a && (f = s), D === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = D, D = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function i1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = bt(e, f), g = bt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var D = a.createRange();
          D.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(g.node, g.offset)) : (D.setEnd(g.node, g.offset), u.addRange(D));
        }
      }
    }
    function d0(e) {
      return e && e.nodeType === zi;
    }
    function p0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : d0(e) ? !1 : d0(t) ? p0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function l1(e) {
      return e && e.ownerDocument && p0(e.ownerDocument.documentElement, e);
    }
    function u1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v0() {
      for (var e = window, t = yl(); t instanceof e.HTMLIFrameElement; ) {
        if (u1(t))
          e = t.contentWindow;
        else
          return t;
        t = yl(e.document);
      }
      return t;
    }
    function Sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function o1() {
      var e = v0();
      return {
        focusedElem: e,
        selectionRange: Sy(e) ? c1(e) : null
      };
    }
    function s1(e) {
      var t = v0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && l1(a)) {
        i !== null && Sy(a) && f1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function c1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Fl(e), t || {
        start: 0,
        end: 0
      };
    }
    function f1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : i1(e, t);
    }
    var d1 = dn && "documentMode" in document && document.documentMode <= 11;
    function p1() {
      pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var of = null, Ey = null, Xd = null, Cy = !1;
    function v1(e) {
      if ("selectionStart" in e && Sy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function h1(e) {
      return e.window === e ? e.document : e.nodeType === Ja ? e : e.ownerDocument;
    }
    function h0(e, t, a) {
      var i = h1(a);
      if (!(Cy || of == null || of !== yl(i))) {
        var u = v1(of);
        if (!Xd || !be(Xd, u)) {
          Xd = u;
          var s = oh(Ey, "onSelect");
          if (s.length > 0) {
            var f = new Rr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = of;
          }
        }
      }
    }
    function m1(e, t, a, i, u, s, f) {
      var p = a ? pf(a) : window;
      switch (t) {
        case "focusin":
          (Do(p) || p.contentEditable === "true") && (of = p, Ey = a, Xd = null);
          break;
        case "focusout":
          of = null, Ey = null, Xd = null;
          break;
        case "mousedown":
          Cy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cy = !1, h0(e, i, u);
          break;
        case "selectionchange":
          if (d1)
            break;
        case "keydown":
        case "keyup":
          h0(e, i, u);
      }
    }
    function ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var sf = {
      animationend: ih("Animation", "AnimationEnd"),
      animationiteration: ih("Animation", "AnimationIteration"),
      animationstart: ih("Animation", "AnimationStart"),
      transitionend: ih("Transition", "TransitionEnd")
    }, Ty = {}, m0 = {};
    dn && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete sf.animationend.animation, delete sf.animationiteration.animation, delete sf.animationstart.animation), "TransitionEvent" in window || delete sf.transitionend.transition);
    function lh(e) {
      if (Ty[e])
        return Ty[e];
      if (!sf[e])
        return e;
      var t = sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m0)
          return Ty[e] = t[a];
      return e;
    }
    var y0 = lh("animationend"), g0 = lh("animationiteration"), S0 = lh("animationstart"), E0 = lh("transitionend"), C0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function bo(e, t) {
      C0.set(e, t), pr(t, [e]);
    }
    function y1() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        bo(a, "on" + i);
      }
      bo(y0, "onAnimationEnd"), bo(g0, "onAnimationIteration"), bo(S0, "onAnimationStart"), bo("dblclick", "onDoubleClick"), bo("focusin", "onFocus"), bo("focusout", "onBlur"), bo(E0, "onTransitionEnd");
    }
    function g1(e, t, a, i, u, s, f) {
      var p = C0.get(t);
      if (p !== void 0) {
        var v = Rr, y = t;
        switch (t) {
          case "keypress":
            if (Cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = fy;
            break;
          case "focusin":
            y = "focus", v = Kc;
            break;
          case "focusout":
            y = "blur", v = Kc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Kc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = jl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ru;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ia;
            break;
          case y0:
          case g0:
          case S0:
            v = Zc;
            break;
          case E0:
            v = py;
            break;
          case "scroll":
            v = Id;
            break;
          case "wheel":
            v = ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Yd;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var D = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = T1(a, p, i.type, g, D);
          if (w.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: w
            });
          }
        }
      }
    }
    y1(), N(), uf(), p1(), th();
    function S1(e, t, a, i, u, s, f) {
      g1(e, t, a, i, u, s);
      var p = (s & Gm) === 0;
      p && (K(e, t, a, i, u), x(e, t, a, i, u), m1(e, t, a, i, u), lf(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Fi(i, t, void 0, e), e.currentTarget = null;
    }
    function E1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], D = g.instance, w = g.currentTarget, L = g.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          R0(e, L, w), i = D;
        }
    }
    function M0(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        E1(s, f, a);
      }
      ud();
    }
    function C1(e, t, a, i, u) {
      var s = oc(a), f = [];
      S1(f, e, i, a, s, t), M0(f, t);
    }
    function Sn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = KR(t), u = w1(e, a);
      i.has(u) || (w0(t, e, rs, a), i.add(u));
    }
    function My(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), w0(a, e, i, t);
    }
    var uh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[uh]) {
        e[uh] = !0, nt.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === Ja ? e : e.ownerDocument;
        t !== null && (t[uh] || (t[uh] = !0, My("selectionchange", !1, t)));
      }
    }
    function w0(e, t, a, i, u) {
      var s = Eo(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qi(e, t, s, f) : To(e, t, s) : f !== void 0 ? Gc(e, t, s, f) : Fd(e, t, s);
    }
    function x0(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & ji) && !(t & rs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === Z || v === le) {
                var y = p.stateNode.containerInfo;
                if (x0(y, f))
                  break;
                if (v === le)
                  for (var g = p.return; g !== null; ) {
                    var D = g.tag;
                    if (D === Z || D === le) {
                      var w = g.stateNode.containerInfo;
                      if (x0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var L = As(y);
                  if (L === null)
                    return;
                  var z = L.tag;
                  if (z === ue || z === Ve) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      rd(function() {
        return C1(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function T1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var D = y, w = D.stateNode, L = D.tag;
        if (L === ue && w !== null && (g = w, p !== null)) {
          var z = ru(y, p);
          z != null && v.push(Jd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = ru(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function R1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = cf(s))
        u++;
      for (var f = 0, p = i; p; p = cf(p))
        f++;
      for (; u - f > 0; )
        a = cf(a), u--;
      for (; f - u > 0; )
        i = cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = cf(a), i = cf(i);
      }
      return null;
    }
    function D0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, D = v.tag;
        if (y !== null && y === i)
          break;
        if (D === ue && g !== null) {
          var w = g;
          if (u) {
            var L = ru(p, s);
            L != null && f.unshift(Jd(p, L, w));
          } else if (!u) {
            var z = ru(p, s);
            z != null && f.push(Jd(p, z, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function M1(e, t, a, i, u) {
      var s = i && u ? R1(i, u) : null;
      i !== null && D0(e, t, i, s, !1), u !== null && a !== null && D0(e, a, u, s, !0);
    }
    function w1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ha = !1, ep = "dangerouslySetInnerHTML", sh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", b0 = "autoFocus", Os = "children", zs = "style", ch = "__html", xy, fh, tp, _0, dh, k0, N0;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, fh = function(e, t) {
      uc(e, t), Zf(e, t), Ev(e, t, {
        registrationNameDependencies: jt,
        possibleRegistrationNames: Hr
      });
    }, k0 = dn && !document.documentMode, tp = function(e, t, a) {
      if (!Ha) {
        var i = ph(a), u = ph(t);
        u !== i && (Ha = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, _0 = function(e) {
      if (!Ha) {
        Ha = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, N0 = function(e, t) {
      var a = e.namespaceURI === Oi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var x1 = /\r\n?/g, D1 = /\u0000|\uFFFD/g;
    function ph(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(x1, `
`).replace(D1, "");
    }
    function vh(e, t, a, i) {
      var u = ph(t), s = ph(e);
      if (s !== u && (i && (Ha || (Ha = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === Ja ? e : e.ownerDocument;
    }
    function b1() {
    }
    function hh(e) {
      e.onclick = b1;
    }
    function _1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === zs)
            f && Object.freeze(f), cv(t, f);
          else if (s === ep) {
            var p = f ? f[ch] : void 0;
            p != null && Jp(t, p);
          } else if (s === Os)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && rc(t, f);
            } else
              typeof f == "number" && rc(t, "" + f);
          else
            s === sh || s === _o || s === b0 || (jt.hasOwnProperty(s) ? f != null && (typeof f != "function" && dh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && da(t, s, f, u));
        }
    }
    function k1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === zs ? cv(e, f) : s === ep ? Jp(e, f) : s === Os ? rc(e, f) : da(e, s, f, i);
      }
    }
    function N1(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === Oi && (p = tc(e)), p === Oi) {
        if (u = Ai(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Oi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function L1(e, t) {
      return L0(t).createTextNode(e);
    }
    function O1(e, t, a, i) {
      var u = Ai(t, a);
      fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            Sn(Kd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          Jo(e, a), s = Zo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = Bf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ic(t, s), _1(t, e, i, s, u), t) {
        case "input":
          Da(e), q(e, a, !1);
          break;
        case "textarea":
          Da(e), Zp(e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && hh(e);
          break;
      }
    }
    function z1(e, t, a, i, u) {
      fh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Zo(e, a), p = Zo(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && hh(e);
          break;
      }
      ic(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === zs) {
            var D = f[v];
            for (y in D)
              D.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === ep || v === Os || v === sh || v === _o || v === b0 || (jt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === L || w == null && L == null))
          if (v === zs)
            if (w && Object.freeze(w), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && L[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === ep) {
            var z = w ? w[ch] : void 0, F = L ? L[ch] : void 0;
            z != null && F !== z && (s = s || []).push(v, z);
          } else
            v === Os ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === sh || v === _o || (jt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && dh(v, w), v === "onScroll" && Sn("scroll", e)), !s && L !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (ts(g, p[zs]), (s = s || []).push(zs, g)), s;
    }
    function A1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && O(e, u);
      var s = Ai(a, i), f = Ai(a, u);
      switch (k1(e, t, s, f), a) {
        case "input":
          U(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Fm(e, u);
          break;
      }
    }
    function j1(e) {
      {
        var t = e.toLowerCase();
        return lc.hasOwnProperty(t) && lc[t] || null;
      }
    }
    function U1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ai(t, a), fh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            Sn(Kd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          Jo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), Sn("invalid", e);
          break;
      }
      ic(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, D = 0; D < g.length; D++) {
          var w = g[D].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[D].name);
          }
        }
      }
      var L = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var F = a[z];
          if (z === Os)
            typeof F == "string" ? e.textContent !== F && (a[_o] !== !0 && vh(e.textContent, F, s, f), L = [Os, F]) : typeof F == "number" && e.textContent !== "" + F && (a[_o] !== !0 && vh(e.textContent, F, s, f), L = [Os, "" + F]);
          else if (jt.hasOwnProperty(z))
            F != null && (typeof F != "function" && dh(z, F), z === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var pe = void 0, Ne = p && Ye ? null : wr(z);
            if (a[_o] !== !0) {
              if (!(z === sh || z === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === ep) {
                  var Re = e.innerHTML, Ct = F ? F[ch] : void 0;
                  if (Ct != null) {
                    var pt = N0(e, Ct);
                    pt !== Re && tp(z, Re, pt);
                  }
                } else if (z === zs) {
                  if (v.delete(z), k0) {
                    var _ = Qm(F);
                    pe = e.getAttribute("style"), _ !== pe && tp(z, pe, _);
                  }
                } else if (p && !Ye)
                  v.delete(z.toLowerCase()), pe = oi(e, z, F), F !== pe && tp(z, pe, F);
                else if (!vn(z, Ne, p) && !Bt(z, F, Ne, p)) {
                  var I = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), pe = fa(e, z, F, Ne);
                  else {
                    var k = i;
                    if (k === Oi && (k = tc(t)), k === Oi)
                      v.delete(z.toLowerCase());
                    else {
                      var G = j1(z);
                      G !== null && G !== z && (I = !0, v.delete(G)), v.delete(z);
                    }
                    pe = oi(e, z, F);
                  }
                  var ve = Ye;
                  !ve && F !== pe && !I && tp(z, pe, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && _0(v), t) {
        case "input":
          Da(e), q(e, a, !0);
          break;
        case "textarea":
          Da(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hh(e);
          break;
      }
      return L;
    }
    function F1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Dy(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function by(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function _y(e, t, a) {
      {
        if (Ha)
          return;
        Ha = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Ha)
          return;
        Ha = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function I1(e, t, a) {
      switch (t) {
        case "input":
          ze(e, a);
          return;
        case "textarea":
          Yf(e, a);
          return;
        case "select":
          Im(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var H1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], O0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], V1 = O0.concat(["button"]), P1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], z0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = lt({}, e || z0), i = {
          tag: t
        };
        return O0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), V1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), H1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var B1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return P1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Y1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, A0 = {};
      np = function(e, t, a) {
        a = a || z0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = B1(e, u) ? null : i, f = s ? null : Y1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!A0[y]) {
            A0[y] = !0;
            var g = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, D, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var mh = "suppressHydrationWarning", yh = "$", gh = "/$", ap = "$?", ip = "$!", $1 = "style", Ny = null, Ly = null;
    function Q1(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ja:
        case Jl: {
          t = i === Ja ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Qf(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function W1(e, t, a) {
      {
        var i = e, u = Qf(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function db(e) {
      return e;
    }
    function G1(e) {
      Ny = Sa(), Ly = o1();
      var t = null;
      return Kn(!1), t;
    }
    function q1(e) {
      s1(Ly), Kn(Ny), Ny = null, Ly = null;
    }
    function X1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = N1(e, t, a, s);
      return op(u, y), Hy(y, t), y;
    }
    function K1(e, t) {
      e.appendChild(t);
    }
    function Z1(e, t, a, i, u) {
      switch (O1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function J1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return z1(e, t, a, i);
    }
    function Oy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function eR(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = L1(e, t);
      return op(i, s), s;
    }
    function tR() {
      var e = window.event;
      return e === void 0 ? Bi : kr(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, nR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, j0 = typeof Promise == "function" ? Promise : void 0, rR = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function(e) {
      return j0.resolve(null).then(e).catch(aR);
    } : zy;
    function aR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function iR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function lR(e, t, a, i, u, s) {
      A1(e, t, a, i, u), Hy(e, u);
    }
    function U0(e) {
      rc(e, "");
    }
    function uR(e, t, a) {
      e.nodeValue = a;
    }
    function oR(e, t) {
      e.appendChild(t);
    }
    function sR(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hh(a);
    }
    function cR(e, t, a) {
      e.insertBefore(t, a);
    }
    function fR(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function dR(e, t) {
      e.removeChild(t);
    }
    function pR(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === gh)
            if (i === 0) {
              e.removeChild(u), dt(t);
              return;
            } else
              i--;
          else
            (s === yh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      dt(t);
    }
    function vR(e, t) {
      e.nodeType === Ln ? jy(e.parentNode, t) : e.nodeType === qr && jy(e, t), dt(e);
    }
    function hR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function mR(e) {
      e.nodeValue = "";
    }
    function yR(e, t) {
      e = e;
      var a = t[$1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ac("display", i);
    }
    function gR(e, t) {
      e.nodeValue = t;
    }
    function SR(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Ja && e.documentElement && e.removeChild(e.documentElement);
    }
    function ER(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function CR(e, t) {
      return t === "" || e.nodeType !== zi ? null : e;
    }
    function TR(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function F0(e) {
      return e.data === ap;
    }
    function Uy(e) {
      return e.data === ip;
    }
    function RR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function MR(e, t) {
      e._reactRetry = t;
    }
    function Sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === zi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === yh || a === ip || a === ap)
            break;
          if (a === gh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Sh(e.nextSibling);
    }
    function wR(e) {
      return Sh(e.firstChild);
    }
    function xR(e) {
      return Sh(e.firstChild);
    }
    function DR(e) {
      return Sh(e.nextSibling);
    }
    function bR(e, t, a, i, u, s, f) {
      op(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ot) !== Oe;
      return U1(e, t, a, p, i, y, f);
    }
    function _R(e, t, a, i) {
      return op(a, e), a.mode & ot, F1(e, t);
    }
    function kR(e, t) {
      op(t, e);
    }
    function NR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === gh) {
            if (a === 0)
              return lp(t);
            a--;
          } else
            (i === yh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function I0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === yh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else
            i === gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function LR(e) {
      dt(e);
    }
    function OR(e) {
      dt(e);
    }
    function zR(e) {
      return e !== "head" && e !== "body";
    }
    function AR(e, t, a, i) {
      var u = !0;
      vh(t.nodeValue, a, i, u);
    }
    function jR(e, t, a, i, u, s) {
      if (t[mh] !== !0) {
        var f = !0;
        vh(i.nodeValue, u, s, f);
      }
    }
    function UR(e, t) {
      t.nodeType === qr ? Dy(e, t) : t.nodeType === Ln || by(e, t);
    }
    function FR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? Dy(a, t) : t.nodeType === Ln || by(a, t));
      }
    }
    function IR(e, t, a, i, u) {
      (u || t[mh] !== !0) && (i.nodeType === qr ? Dy(a, i) : i.nodeType === Ln || by(a, i));
    }
    function HR(e, t, a) {
      _y(e, t);
    }
    function VR(e, t) {
      ky(e, t);
    }
    function PR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && _y(i, t);
      }
    }
    function BR(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function YR(e, t, a, i, u, s) {
      (s || t[mh] !== !0) && _y(a, i);
    }
    function $R(e, t, a, i, u) {
      (u || t[mh] !== !0) && ky(a, i);
    }
    function QR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function WR(e) {
      Zd(e);
    }
    var ff = Math.random().toString(36).slice(2), df = "__reactFiber$" + ff, Fy = "__reactProps$" + ff, up = "__reactContainer$" + ff, Iy = "__reactEvents$" + ff, GR = "__reactListeners$" + ff, qR = "__reactHandles$" + ff;
    function XR(e) {
      delete e[df], delete e[Fy], delete e[Iy], delete e[GR], delete e[qR];
    }
    function op(e, t) {
      t[df] = e;
    }
    function Eh(e, t) {
      t[up] = e;
    }
    function H0(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function As(e) {
      var t = e[df];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[df], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = I0(e); u !== null; ) {
              var s = u[df];
              if (s)
                return s;
              u = I0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ko(e) {
      var t = e[df] || e[up];
      return t && (t.tag === ue || t.tag === Ve || t.tag === De || t.tag === Z) ? t : null;
    }
    function pf(e) {
      if (e.tag === ue || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ch(e) {
      return e[Fy] || null;
    }
    function Hy(e, t) {
      e[Fy] = t;
    }
    function KR(e) {
      var t = e[Iy];
      return t === void 0 && (t = e[Iy] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, P0 = j.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = pi(e.type, e._source, t ? t.type : null);
        P0.setExtraStackFrame(a);
      } else
        P0.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var Vy = [], Rh;
    Rh = [];
    var Du = -1;
    function No(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Du < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Rh[Du] && S("Unexpected Fiber popped."), e.current = Vy[Du], Vy[Du] = null, Rh[Du] = null, Du--;
    }
    function ia(e, t, a) {
      Du++, Vy[Du] = e.current, Rh[Du] = a, e.current = t;
    }
    var Py;
    Py = {};
    var ai = {};
    Object.freeze(ai);
    var bu = No(ai), Il = No(!1), By = ai;
    function vf(e, t, a) {
      return a && Hl(t) ? By : bu.current;
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function hf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = $e(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return u && B0(e, t, s), s;
      }
    }
    function Mh() {
      return Il.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function wh(e) {
      aa(Il, e), aa(bu, e);
    }
    function Yy(e) {
      aa(Il, e), aa(bu, e);
    }
    function Y0(e, t, a) {
      {
        if (bu.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(bu, t, e), ia(Il, a, e);
      }
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = $e(e) || "Unknown";
            Py[s] || (Py[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error(($e(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = $e(e) || "Unknown";
          Gi(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return By = bu.current, ia(bu, a, e), ia(Il, Il.current, e), !0;
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = $0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Il, e), aa(bu, e), ia(bu, u, e), ia(Il, a, e);
        } else
          aa(Il, e), ia(Il, a, e);
      }
    }
    function ZR(e) {
      {
        if (!dd(e) || e.tag !== ee)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case ee: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Dh = 1, _u = null, $y = !1, Qy = !1;
    function W0(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    function JR(e) {
      $y = !0, W0(e);
    }
    function G0() {
      $y && Oo();
    }
    function Oo() {
      if (!Qy && _u !== null) {
        Qy = !0;
        var e = 0, t = ja();
        try {
          var a = !0, i = _u;
          for (Hn(gr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          _u = null, $y = !1;
        } catch (s) {
          throw _u !== null && (_u = _u.slice(e + 1)), hc(yc, Oo), s;
        } finally {
          Hn(t), Qy = !1;
        }
      }
      return null;
    }
    var mf = [], yf = 0, bh = null, _h = 0, Ti = [], Ri = 0, js = null, ku = 1, Nu = "";
    function eM(e) {
      return Fs(), (e.flags & sd) !== _e;
    }
    function tM(e) {
      return Fs(), _h;
    }
    function nM() {
      var e = Nu, t = ku, a = t & ~rM(t);
      return a.toString(32) + e;
    }
    function Us(e, t) {
      Fs(), mf[yf++] = _h, mf[yf++] = bh, bh = e, _h = t;
    }
    function q0(e, t, a) {
      Fs(), Ti[Ri++] = ku, Ti[Ri++] = Nu, Ti[Ri++] = js, js = e;
      var i = ku, u = Nu, s = kh(i) - 1, f = i & ~(1 << s), p = a + 1, v = kh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, D = (f & g).toString(32), w = f >> y, L = s - y, z = kh(t) + L, F = p << L, pe = F | w, Ne = D + u;
        ku = 1 << z | pe, Nu = Ne;
      } else {
        var Re = p << s, Ct = Re | f, pt = u;
        ku = 1 << v | Ct, Nu = pt;
      }
    }
    function Wy(e) {
      Fs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Us(e, a), q0(e, a, i);
      }
    }
    function kh(e) {
      return 32 - Rc(e);
    }
    function rM(e) {
      return 1 << kh(e) - 1;
    }
    function Gy(e) {
      for (; e === bh; )
        bh = mf[--yf], mf[yf] = null, _h = mf[--yf], mf[yf] = null;
      for (; e === js; )
        js = Ti[--Ri], Ti[Ri] = null, Nu = Ti[--Ri], Ti[Ri] = null, ku = Ti[--Ri], Ti[Ri] = null;
    }
    function aM() {
      return Fs(), js !== null ? {
        id: ku,
        overflow: Nu
      } : null;
    }
    function iM(e, t) {
      Fs(), Ti[Ri++] = ku, Ti[Ri++] = Nu, Ti[Ri++] = js, ku = t.id, Nu = t.overflow, js = e;
    }
    function Fs() {
      Lr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, Mi = null, qi = !1, Is = !1, zo = null;
    function lM() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function X0() {
      Is = !0;
    }
    function uM() {
      return Is;
    }
    function oM(e) {
      var t = e.stateNode.containerInfo;
      return Mi = xR(t), Nr = e, qi = !0, zo = null, Is = !1, !0;
    }
    function sM(e, t, a) {
      return Mi = DR(t), Nr = e, qi = !0, zo = null, Is = !1, a !== null && iM(e, a), !0;
    }
    function K0(e, t) {
      switch (e.tag) {
        case Z: {
          UR(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & ot) !== Oe;
          IR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case De: {
          var i = e.memoizedState;
          i.dehydrated !== null && FR(i.dehydrated, t);
          break;
        }
      }
    }
    function Z0(e, t) {
      K0(e, t);
      var a = dD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= zt) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Is)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, HR(a, i);
                break;
              case Ve:
                var u = t.pendingProps;
                VR(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ot) !== Oe;
                YR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ve: {
                var D = t.pendingProps, w = (e.mode & ot) !== Oe;
                $R(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case De: {
            var L = e.memoizedState, z = L.dehydrated;
            if (z !== null)
              switch (t.tag) {
                case ue:
                  var F = t.type;
                  t.pendingProps, PR(z, F);
                  break;
                case Ve:
                  var pe = t.pendingProps;
                  BR(z, pe);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function J0(e, t) {
      t.flags = t.flags & ~Na | rn, qy(e, t);
    }
    function eE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = ER(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, Mi = wR(i), !0) : !1;
        }
        case Ve: {
          var u = e.pendingProps, s = CR(t, u);
          return s !== null ? (e.stateNode = s, Nr = e, Mi = null, !0) : !1;
        }
        case De: {
          var f = TR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: aM(),
              retryLane: na
            };
            e.memoizedState = p;
            var v = pD(f);
            return v.return = e, e.child = v, Nr = e, Mi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & ot) !== Oe && (e.flags & Pe) === _e;
    }
    function Ky(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (qi) {
        var t = Mi;
        if (!t) {
          Xy(e) && (qy(Nr, e), Ky()), J0(Nr, e), qi = !1, Nr = e;
          return;
        }
        var a = t;
        if (!eE(e, t)) {
          Xy(e) && (qy(Nr, e), Ky()), t = lp(a);
          var i = Nr;
          if (!t || !eE(e, t)) {
            J0(Nr, e), qi = !1, Nr = e;
            return;
          }
          Z0(i, a);
        }
      }
    }
    function cM(e, t, a) {
      var i = e.stateNode, u = !Is, s = bR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function fM(e) {
      var t = e.stateNode, a = e.memoizedProps, i = _R(t, a, e);
      if (i) {
        var u = Nr;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & ot) !== Oe;
              AR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ot) !== Oe;
              jR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function dM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      kR(a, e);
    }
    function pM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return NR(a);
    }
    function tE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== Z && t.tag !== De; )
        t = t.return;
      Nr = t;
    }
    function Nh(e) {
      if (e !== Nr)
        return !1;
      if (!qi)
        return tE(e), qi = !0, !1;
      if (e.tag !== Z && (e.tag !== ue || zR(e.type) && !Oy(e.type, e.memoizedProps))) {
        var t = Mi;
        if (t)
          if (Xy(e))
            nE(e), Ky();
          else
            for (; t; )
              Z0(e, t), t = lp(t);
      }
      return tE(e), e.tag === De ? Mi = pM(e) : Mi = Nr ? lp(e.stateNode) : null, !0;
    }
    function vM() {
      return qi && Mi !== null;
    }
    function nE(e) {
      for (var t = Mi; t; )
        K0(e, t), t = lp(t);
    }
    function gf() {
      Nr = null, Mi = null, qi = !1, Is = !1;
    }
    function rE() {
      zo !== null && (KC(zo), zo = null);
    }
    function Lr() {
      return qi;
    }
    function Jy(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var hM = j.ReactCurrentBatchConfig, mM = null;
    function yM() {
      return hM.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var gM = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & yn && (t = a), a = a.return;
        return t;
      }, Hs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Vs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & yn && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          e.add($e(w) || "Component"), Vs.add(w.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          t.add($e(w) || "Component"), Vs.add(w.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          a.add($e(w) || "Component"), Vs.add(w.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          i.add($e(w) || "Component"), Vs.add(w.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          u.add($e(w) || "Component"), Vs.add(w.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(w) {
          s.add($e(w) || "Component"), Vs.add(w.type);
        }), hp = []), t.size > 0) {
          var f = Hs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Hs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Hs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Hs(e);
          Xe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Hs(a);
          Xe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var D = Hs(u);
          Xe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Lh = /* @__PURE__ */ new Map(), aE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = gM(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aE.has(e.type)) {
          var i = Lh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Lh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add($e(s) || "Component"), aE.add(s.type);
            });
            var u = Hs(i);
            try {
              Ht(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Lh = /* @__PURE__ */ new Map();
      };
    }
    function Ki(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var eg = No(null), tg;
    tg = {};
    var Oh = null, Sf = null, ng = null, zh = !1;
    function Ah() {
      Oh = null, Sf = null, ng = null, zh = !1;
    }
    function iE() {
      zh = !0;
    }
    function lE() {
      zh = !1;
    }
    function uE(e, t, a) {
      ia(eg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== tg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = tg;
    }
    function rg(e, t) {
      var a = eg.current;
      aa(eg, t), e._currentValue = a;
    }
    function ag(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (mu(i.childLanes, t) ? u !== null && !mu(u.childLanes, t) && (u.childLanes = et(u.childLanes, t)) : (i.childLanes = et(i.childLanes, t), u !== null && (u.childLanes = et(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function SM(e, t, a) {
      EM(e, t, a);
    }
    function EM(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ee) {
                var p = In(a), v = Lu(Zt, p);
                v.tag = Uh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, D = g.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), g.pending = v;
                }
              }
              i.lanes = et(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = et(w.lanes, a)), ag(i.return, a, e), s.lanes = et(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = et(L.lanes, a);
          var z = L.alternate;
          z !== null && (z.lanes = et(z.lanes, a)), ag(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Ef(e, t) {
      Oh = e, Sf = null, ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function Jn(e) {
      zh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ng !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Sf === null) {
          if (Oh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Sf = a, Oh.dependencies = {
            lanes: H,
            firstContext: a
          };
        } else
          Sf = Sf.next = a;
      }
      return t;
    }
    var Ps = null;
    function ig(e) {
      Ps === null ? Ps = [e] : Ps.push(e);
    }
    function CM() {
      if (Ps !== null) {
        for (var e = 0; e < Ps.length; e++) {
          var t = Ps[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ps = null;
      }
    }
    function oE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function TM(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function RM(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ig(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function Va(e, t) {
      return jh(e, t);
    }
    var MM = jh;
    function jh(e, t) {
      e.lanes = et(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = et(a.lanes, t)), a === null && (e.flags & (rn | Na)) !== _e && sT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = et(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = et(a.childLanes, t) : (u.flags & (rn | Na)) !== _e && sT(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var sE = 0, cE = 1, Uh = 2, lg = 3, Fh = !1, ug, Ih;
    ug = !1, Ih = null;
    function og(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: H
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function fE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: sE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ao(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !ug && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ug = !0), Mx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, MM(e, a);
      } else
        return RM(e, u, t, a);
    }
    function Hh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (wd(a)) {
          var s = u.lanes;
          s = Dd(s, e.pendingLanes);
          var f = et(s, a);
          u.lanes = f, ho(e, f);
        }
      }
    }
    function sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function wM(e, t, a, i, u, s) {
      switch (a.tag) {
        case cE: {
          var f = a.payload;
          if (typeof f == "function") {
            iE();
            var p = f.call(s, i, u);
            {
              if (e.mode & yn) {
                Fn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Fn(!1);
                }
              }
              lE();
            }
            return p;
          }
          return f;
        }
        case lg:
          e.flags = e.flags & ~Gn | Pe;
        case sE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            iE(), y = v.call(s, i, u);
            {
              if (e.mode & yn) {
                Fn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Fn(!1);
                }
              }
              lE();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Uh:
          return Fh = !0, i;
      }
      return i;
    }
    function Vh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var D = g.updateQueue, w = D.lastBaseUpdate;
          w !== f && (w === null ? D.firstBaseUpdate = y : w.next = y, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, z = H, F = null, pe = null, Ne = null, Re = s;
        do {
          var Ct = Re.lane, pt = Re.eventTime;
          if (mu(i, Ct)) {
            if (Ne !== null) {
              var I = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                tag: Re.tag,
                payload: Re.payload,
                callback: Re.callback,
                next: null
              };
              Ne = Ne.next = I;
            }
            L = wM(e, u, Re, L, t, a);
            var k = Re.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            Re.lane !== St) {
              e.flags |= mi;
              var G = u.effects;
              G === null ? u.effects = [Re] : G.push(Re);
            }
          } else {
            var _ = {
              eventTime: pt,
              lane: Ct,
              tag: Re.tag,
              payload: Re.payload,
              callback: Re.callback,
              next: null
            };
            Ne === null ? (pe = Ne = _, F = L) : Ne = Ne.next = _, z = et(z, Ct);
          }
          if (Re = Re.next, Re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, Re = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (F = L), u.baseState = F, u.firstBaseUpdate = pe, u.lastBaseUpdate = Ne;
        var He = u.shared.interleaved;
        if (He !== null) {
          var Ge = He;
          do
            z = et(z, Ge.lane), Ge = Ge.next;
          while (Ge !== He);
        } else
          s === null && (u.shared.lanes = H);
        Vp(z), e.lanes = z, e.memoizedState = L;
      }
      Ih = null;
    }
    function xM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function dE() {
      Fh = !1;
    }
    function Ph() {
      return Fh;
    }
    function pE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, xM(f, a));
        }
    }
    var cg = {}, vE = new P.Component().refs, fg, dg, pg, vg, hg, hE, Bh, mg, yg, gg;
    {
      fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set();
      var mE = /* @__PURE__ */ new Set();
      Bh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          mE.has(a) || (mE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, hE = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          hg.has(a) || (hg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(cg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(cg);
    }
    function Sg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & yn) {
          Fn(!0);
          try {
            s = a(i, u);
          } finally {
            Fn(!1);
          }
        }
        hE(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === H) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Eg = {
      isMounted: ma,
      enqueueSetState: function(e, t, a) {
        var i = _a(e), u = Ta(), s = Bo(i), f = Lu(u, s);
        f.payload = t, a != null && (Bh(a, "setState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Hh(p, i, s)), kl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _a(e), u = Ta(), s = Bo(i), f = Lu(u, s);
        f.tag = cE, f.payload = t, a != null && (Bh(a, "replaceState"), f.callback = a);
        var p = Ao(i, f, s);
        p !== null && (dr(p, i, s, u), Hh(p, i, s)), kl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _a(e), i = Ta(), u = Bo(a), s = Lu(i, u);
        s.tag = Uh, t != null && (Bh(t, "forceUpdate"), s.callback = t);
        var f = Ao(a, s, u);
        f !== null && (dr(f, a, u, i), Hh(f, a, u)), Cd(a, u);
      }
    };
    function yE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & yn) {
            Fn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Fn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !be(a, i) || !be(u, s) : !0;
    }
    function DM(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !yg.has(t) && (yg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !pg.has(t) && (pg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ht(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function gE(e, t) {
      t.updater = Eg, e.stateNode = t, ao(t, e), t._reactInternalInstance = cg;
    }
    function SE(e, t, a) {
      var i = !1, u = ai, s = ai, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ne && f._context === void 0
        );
        if (!p && !gg.has(t)) {
          gg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Y ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Jn(f);
      else {
        u = vf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? hf(e, u) : ai;
      }
      var g = new t(a, s);
      if (e.mode & yn) {
        Fn(!0);
        try {
          g = new t(a, s);
        } finally {
          Fn(!1);
        }
      }
      var D = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      gE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var w = xt(t) || "Component";
          dg.has(w) || (dg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var L = null, z = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), L !== null || z !== null || F !== null) {
            var pe = xt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vg.has(pe) || (vg.add(pe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, Ne, L !== null ? `
  ` + L : "", z !== null ? `
  ` + z : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && B0(e, u, s), g;
    }
    function bM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", $e(e) || "Component"), Eg.enqueueReplaceState(t, t.state, null));
    }
    function EE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = $e(e) || "Component";
          fg.has(s) || (fg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Eg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Cg(e, t, a, i) {
      DM(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = vE, og(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Jn(s);
      else {
        var f = vf(e, t, !0);
        u.context = hf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          mg.has(p) || (mg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & yn && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Sg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (bM(e, u), Vh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Je;
        y |= Kr, (e.mode & za) !== Oe && (y |= Zr), e.flags |= y;
      }
    }
    function _M(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ai;
      if (typeof p == "object" && p !== null)
        v = Jn(p);
      else {
        var y = vf(e, t, !0);
        v = hf(e, y);
      }
      var g = t.getDerivedStateFromProps, D = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && EE(e, u, a, v), dE();
      var w = e.memoizedState, L = u.state = w;
      if (Vh(e, a, u, i), L = e.memoizedState, s === a && w === L && !Mh() && !Ph()) {
        if (typeof u.componentDidMount == "function") {
          var z = Je;
          z |= Kr, (e.mode & za) !== Oe && (z |= Zr), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (Sg(e, t, g, a), L = e.memoizedState);
      var F = Ph() || yE(e, t, s, a, w, L, v);
      if (F) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var pe = Je;
          pe |= Kr, (e.mode & za) !== Oe && (pe |= Zr), e.flags |= pe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Je;
          Ne |= Kr, (e.mode & za) !== Oe && (Ne |= Zr), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, F;
    }
    function kM(e, t, a, i, u) {
      var s = t.stateNode;
      fE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ki(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, D = ai;
      if (typeof g == "object" && g !== null)
        D = Jn(g);
      else {
        var w = vf(t, a, !0);
        D = hf(t, w);
      }
      var L = a.getDerivedStateFromProps, z = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== D) && EE(t, s, i, D), dE();
      var F = t.memoizedState, pe = s.state = F;
      if (Vh(t, i, s, u), pe = t.memoizedState, f === v && F === pe && !Mh() && !Ph() && !we)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ka), !1;
      typeof L == "function" && (Sg(t, a, L, i), pe = t.memoizedState);
      var Ne = Ph() || yE(t, a, p, i, F, pe, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      we;
      return Ne ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ka)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= Je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= ka), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = D, Ne;
    }
    var Tg, Rg, Mg, wg, xg, CE = function(e, t) {
    };
    Tg = !1, Rg = !1, Mg = {}, wg = {}, xg = {}, CE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = $e(t) || "Component";
        wg[a] || (wg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & yn || Fe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = $e(e) || "Component";
          Mg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ee)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          $n(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(D) {
            var w = v.refs;
            w === vE && (w = v.refs = {}), D === null ? delete w[y] : w[y] = D;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = $e(e) || "Component";
        if (xg[t])
          return;
        xg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function TE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RE(e) {
      function t(_, I) {
        if (e) {
          var k = _.deletions;
          k === null ? (_.deletions = [I], _.flags |= zt) : k.push(I);
        }
      }
      function a(_, I) {
        if (!e)
          return null;
        for (var k = I; k !== null; )
          t(_, k), k = k.sibling;
        return null;
      }
      function i(_, I) {
        for (var k = /* @__PURE__ */ new Map(), G = I; G !== null; )
          G.key !== null ? k.set(G.key, G) : k.set(G.index, G), G = G.sibling;
        return k;
      }
      function u(_, I) {
        var k = Xs(_, I);
        return k.index = 0, k.sibling = null, k;
      }
      function s(_, I, k) {
        if (_.index = k, !e)
          return _.flags |= sd, I;
        var G = _.alternate;
        if (G !== null) {
          var ve = G.index;
          return ve < I ? (_.flags |= rn, I) : ve;
        } else
          return _.flags |= rn, I;
      }
      function f(_) {
        return e && _.alternate === null && (_.flags |= rn), _;
      }
      function p(_, I, k, G) {
        if (I === null || I.tag !== Ve) {
          var ve = JS(k, _.mode, G);
          return ve.return = _, ve;
        } else {
          var se = u(I, k);
          return se.return = _, se;
        }
      }
      function v(_, I, k, G) {
        var ve = k.type;
        if (ve === pa)
          return g(_, I, k.props.children, G, k.key);
        if (I !== null && (I.elementType === ve || // Keep this check inline so it only runs on the false path:
        pT(I, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === ke && TE(ve) === I.type)) {
          var se = u(I, k.props);
          return se.ref = mp(_, I, k), se.return = _, se._debugSource = k._source, se._debugOwner = k._owner, se;
        }
        var He = ZS(k, _.mode, G);
        return He.ref = mp(_, I, k), He.return = _, He;
      }
      function y(_, I, k, G) {
        if (I === null || I.tag !== le || I.stateNode.containerInfo !== k.containerInfo || I.stateNode.implementation !== k.implementation) {
          var ve = e0(k, _.mode, G);
          return ve.return = _, ve;
        } else {
          var se = u(I, k.children || []);
          return se.return = _, se;
        }
      }
      function g(_, I, k, G, ve) {
        if (I === null || I.tag !== Rt) {
          var se = $o(k, _.mode, G, ve);
          return se.return = _, se;
        } else {
          var He = u(I, k);
          return He.return = _, He;
        }
      }
      function D(_, I, k) {
        if (typeof I == "string" && I !== "" || typeof I == "number") {
          var G = JS("" + I, _.mode, k);
          return G.return = _, G;
        }
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case si: {
              var ve = ZS(I, _.mode, k);
              return ve.ref = mp(_, null, I), ve.return = _, ve;
            }
            case xr: {
              var se = e0(I, _.mode, k);
              return se.return = _, se;
            }
            case ke: {
              var He = I._payload, Ge = I._init;
              return D(_, Ge(He), k);
            }
          }
          if (ht(I) || qa(I)) {
            var Gt = $o(I, _.mode, k, null);
            return Gt.return = _, Gt;
          }
          Yh(_, I);
        }
        return typeof I == "function" && $h(_), null;
      }
      function w(_, I, k, G) {
        var ve = I !== null ? I.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return ve !== null ? null : p(_, I, "" + k, G);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case si:
              return k.key === ve ? v(_, I, k, G) : null;
            case xr:
              return k.key === ve ? y(_, I, k, G) : null;
            case ke: {
              var se = k._payload, He = k._init;
              return w(_, I, He(se), G);
            }
          }
          if (ht(k) || qa(k))
            return ve !== null ? null : g(_, I, k, G, null);
          Yh(_, k);
        }
        return typeof k == "function" && $h(_), null;
      }
      function L(_, I, k, G, ve) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var se = _.get(k) || null;
          return p(I, se, "" + G, ve);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case si: {
              var He = _.get(G.key === null ? k : G.key) || null;
              return v(I, He, G, ve);
            }
            case xr: {
              var Ge = _.get(G.key === null ? k : G.key) || null;
              return y(I, Ge, G, ve);
            }
            case ke:
              var Gt = G._payload, Nt = G._init;
              return L(_, I, k, Nt(Gt), ve);
          }
          if (ht(G) || qa(G)) {
            var Bn = _.get(k) || null;
            return g(I, Bn, G, ve, null);
          }
          Yh(I, G);
        }
        return typeof G == "function" && $h(I), null;
      }
      function z(_, I, k) {
        {
          if (typeof _ != "object" || _ === null)
            return I;
          switch (_.$$typeof) {
            case si:
            case xr:
              CE(_, k);
              var G = _.key;
              if (typeof G != "string")
                break;
              if (I === null) {
                I = /* @__PURE__ */ new Set(), I.add(G);
                break;
              }
              if (!I.has(G)) {
                I.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case ke:
              var ve = _._payload, se = _._init;
              z(se(ve), I, k);
              break;
          }
        }
        return I;
      }
      function F(_, I, k, G) {
        for (var ve = null, se = 0; se < k.length; se++) {
          var He = k[se];
          ve = z(He, ve, _);
        }
        for (var Ge = null, Gt = null, Nt = I, Bn = 0, Lt = 0, An = null; Nt !== null && Lt < k.length; Lt++) {
          Nt.index > Lt ? (An = Nt, Nt = null) : An = Nt.sibling;
          var ua = w(_, Nt, k[Lt], G);
          if (ua === null) {
            Nt === null && (Nt = An);
            break;
          }
          e && Nt && ua.alternate === null && t(_, Nt), Bn = s(ua, Bn, Lt), Gt === null ? Ge = ua : Gt.sibling = ua, Gt = ua, Nt = An;
        }
        if (Lt === k.length) {
          if (a(_, Nt), Lr()) {
            var Ir = Lt;
            Us(_, Ir);
          }
          return Ge;
        }
        if (Nt === null) {
          for (; Lt < k.length; Lt++) {
            var li = D(_, k[Lt], G);
            li !== null && (Bn = s(li, Bn, Lt), Gt === null ? Ge = li : Gt.sibling = li, Gt = li);
          }
          if (Lr()) {
            var Ra = Lt;
            Us(_, Ra);
          }
          return Ge;
        }
        for (var Ma = i(_, Nt); Lt < k.length; Lt++) {
          var oa = L(Ma, _, Lt, k[Lt], G);
          oa !== null && (e && oa.alternate !== null && Ma.delete(oa.key === null ? Lt : oa.key), Bn = s(oa, Bn, Lt), Gt === null ? Ge = oa : Gt.sibling = oa, Gt = oa);
        }
        if (e && Ma.forEach(function(Uf) {
          return t(_, Uf);
        }), Lr()) {
          var Fu = Lt;
          Us(_, Fu);
        }
        return Ge;
      }
      function pe(_, I, k, G) {
        var ve = qa(k);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (Rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), k.entries === ve && (Tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tg = !0);
          var se = ve.call(k);
          if (se)
            for (var He = null, Ge = se.next(); !Ge.done; Ge = se.next()) {
              var Gt = Ge.value;
              He = z(Gt, He, _);
            }
        }
        var Nt = ve.call(k);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Bn = null, Lt = null, An = I, ua = 0, Ir = 0, li = null, Ra = Nt.next(); An !== null && !Ra.done; Ir++, Ra = Nt.next()) {
          An.index > Ir ? (li = An, An = null) : li = An.sibling;
          var Ma = w(_, An, Ra.value, G);
          if (Ma === null) {
            An === null && (An = li);
            break;
          }
          e && An && Ma.alternate === null && t(_, An), ua = s(Ma, ua, Ir), Lt === null ? Bn = Ma : Lt.sibling = Ma, Lt = Ma, An = li;
        }
        if (Ra.done) {
          if (a(_, An), Lr()) {
            var oa = Ir;
            Us(_, oa);
          }
          return Bn;
        }
        if (An === null) {
          for (; !Ra.done; Ir++, Ra = Nt.next()) {
            var Fu = D(_, Ra.value, G);
            Fu !== null && (ua = s(Fu, ua, Ir), Lt === null ? Bn = Fu : Lt.sibling = Fu, Lt = Fu);
          }
          if (Lr()) {
            var Uf = Ir;
            Us(_, Uf);
          }
          return Bn;
        }
        for (var Qp = i(_, An); !Ra.done; Ir++, Ra = Nt.next()) {
          var Gl = L(Qp, _, Ir, Ra.value, G);
          Gl !== null && (e && Gl.alternate !== null && Qp.delete(Gl.key === null ? Ir : Gl.key), ua = s(Gl, ua, Ir), Lt === null ? Bn = Gl : Lt.sibling = Gl, Lt = Gl);
        }
        if (e && Qp.forEach(function(YD) {
          return t(_, YD);
        }), Lr()) {
          var BD = Ir;
          Us(_, BD);
        }
        return Bn;
      }
      function Ne(_, I, k, G) {
        if (I !== null && I.tag === Ve) {
          a(_, I.sibling);
          var ve = u(I, k);
          return ve.return = _, ve;
        }
        a(_, I);
        var se = JS(k, _.mode, G);
        return se.return = _, se;
      }
      function Re(_, I, k, G) {
        for (var ve = k.key, se = I; se !== null; ) {
          if (se.key === ve) {
            var He = k.type;
            if (He === pa) {
              if (se.tag === Rt) {
                a(_, se.sibling);
                var Ge = u(se, k.props.children);
                return Ge.return = _, Ge._debugSource = k._source, Ge._debugOwner = k._owner, Ge;
              }
            } else if (se.elementType === He || // Keep this check inline so it only runs on the false path:
            pT(se, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof He == "object" && He !== null && He.$$typeof === ke && TE(He) === se.type) {
              a(_, se.sibling);
              var Gt = u(se, k.props);
              return Gt.ref = mp(_, se, k), Gt.return = _, Gt._debugSource = k._source, Gt._debugOwner = k._owner, Gt;
            }
            a(_, se);
            break;
          } else
            t(_, se);
          se = se.sibling;
        }
        if (k.type === pa) {
          var Nt = $o(k.props.children, _.mode, G, k.key);
          return Nt.return = _, Nt;
        } else {
          var Bn = ZS(k, _.mode, G);
          return Bn.ref = mp(_, I, k), Bn.return = _, Bn;
        }
      }
      function Ct(_, I, k, G) {
        for (var ve = k.key, se = I; se !== null; ) {
          if (se.key === ve)
            if (se.tag === le && se.stateNode.containerInfo === k.containerInfo && se.stateNode.implementation === k.implementation) {
              a(_, se.sibling);
              var He = u(se, k.children || []);
              return He.return = _, He;
            } else {
              a(_, se);
              break;
            }
          else
            t(_, se);
          se = se.sibling;
        }
        var Ge = e0(k, _.mode, G);
        return Ge.return = _, Ge;
      }
      function pt(_, I, k, G) {
        var ve = typeof k == "object" && k !== null && k.type === pa && k.key === null;
        if (ve && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case si:
              return f(Re(_, I, k, G));
            case xr:
              return f(Ct(_, I, k, G));
            case ke:
              var se = k._payload, He = k._init;
              return pt(_, I, He(se), G);
          }
          if (ht(k))
            return F(_, I, k, G);
          if (qa(k))
            return pe(_, I, k, G);
          Yh(_, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(Ne(_, I, "" + k, G)) : (typeof k == "function" && $h(_), a(_, I));
      }
      return pt;
    }
    var Cf = RE(!0), ME = RE(!1);
    function NM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Xs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Xs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function LM(e, t) {
      for (var a = e.child; a !== null; )
        uD(a, t), a = a.sibling;
    }
    var yp = {}, jo = No(yp), gp = No(yp), Qh = No(yp);
    function Wh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Wh(Qh.current);
      return e;
    }
    function Dg(e, t) {
      ia(Qh, t, e), ia(gp, e, e), ia(jo, yp, e);
      var a = Q1(t);
      aa(jo, e), ia(jo, a, e);
    }
    function Tf(e) {
      aa(jo, e), aa(gp, e), aa(Qh, e);
    }
    function bg() {
      var e = Wh(jo.current);
      return e;
    }
    function xE(e) {
      Wh(Qh.current);
      var t = Wh(jo.current), a = W1(t, e.type);
      t !== a && (ia(gp, e, e), ia(jo, a, e));
    }
    function _g(e) {
      gp.current === e && (aa(jo, e), aa(gp, e));
    }
    var OM = 0, DE = 1, bE = 1, Sp = 2, Zi = No(OM);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Rf(e) {
      return e & DE;
    }
    function Ng(e, t) {
      return e & DE | t;
    }
    function zM(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      ia(Zi, t, e);
    }
    function Mf(e) {
      aa(Zi, e);
    }
    function AM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === De) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || F0(i) || Uy(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Pe) !== _e;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pa = (
      /*   */
      0
    ), ir = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), lr = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), Lg = [];
    function Og() {
      for (var e = 0; e < Lg.length; e++) {
        var t = Lg[e];
        t._workInProgressVersionPrimary = null;
      }
      Lg.length = 0;
    }
    function jM(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = j.ReactCurrentDispatcher, Ep = j.ReactCurrentBatchConfig, zg, wf;
    zg = /* @__PURE__ */ new Set();
    var Bs = H, Wt = null, ur = null, or = null, qh = !1, Cp = !1, Tp = 0, UM = 0, FM = 25, V = null, wi = null, Fo = -1, Ag = !1;
    function Pt() {
      {
        var e = V;
        wi === null ? wi = [e] : wi.push(e);
      }
    }
    function ae() {
      {
        var e = V;
        wi !== null && (Fo++, wi[Fo] !== e && IM(e));
      }
    }
    function xf(e) {
      e != null && !ht(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function IM(e) {
      {
        var t = $e(Wt);
        if (!zg.has(t) && (zg.add(t), wi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = wi[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function la() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jg(e, t) {
      if (Ag)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function Df(e, t, a, i, u, s) {
      Bs = s, Wt = t, wi = e !== null ? e._debugHookTypes : null, Fo = -1, Ag = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = H, e !== null && e.memoizedState !== null ? fe.current = XE : wi !== null ? fe.current = qE : fe.current = GE;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Tp = 0, p >= FM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Ag = !1, ur = null, or = null, t.updateQueue = null, Fo = -1, fe.current = KE, f = a(i, u);
        } while (Cp);
      }
      fe.current = om, t._debugHookTypes = wi;
      var v = ur !== null && ur.next !== null;
      if (Bs = H, Wt = null, ur = null, or = null, V = null, wi = null, Fo = -1, e !== null && (e.flags & nr) !== (t.flags & nr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ot) !== Oe && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function bf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function _E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== Oe ? t.flags &= ~(lu | Zr | sn | Je) : t.flags &= ~(sn | Je), e.lanes = vo(e.lanes, a);
    }
    function kE() {
      if (fe.current = om, qh) {
        for (var e = Wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      Bs = H, Wt = null, ur = null, or = null, wi = null, Fo = -1, V = null, BE = !1, Cp = !1, Tp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return or === null ? Wt.memoizedState = or = e : or = or.next = e, or;
    }
    function xi() {
      var e;
      if (ur === null) {
        var t = Wt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ur.next;
      var a;
      if (or === null ? a = Wt.memoizedState : a = or.next, a !== null)
        or = a, a = or.next, ur = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ur = e;
        var i = {
          memoizedState: ur.memoizedState,
          baseState: ur.baseState,
          baseQueue: ur.baseQueue,
          queue: ur.queue,
          next: null
        };
        or === null ? Wt.memoizedState = or = i : or = or.next = i;
      }
      return or;
    }
    function NE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ug(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Fg(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = BM.bind(null, Wt, s);
      return [i.memoizedState, f];
    }
    function Ig(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ur, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, D = s.baseState, w = null, L = null, z = null, F = g;
        do {
          var pe = F.lane;
          if (mu(Bs, pe)) {
            if (z !== null) {
              var Re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              z = z.next = Re;
            }
            if (F.hasEagerState)
              D = F.eagerState;
            else {
              var Ct = F.action;
              D = e(D, Ct);
            }
          } else {
            var Ne = {
              lane: pe,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            z === null ? (L = z = Ne, w = D) : z = z.next = Ne, Wt.lanes = et(Wt.lanes, pe), Vp(pe);
          }
          F = F.next;
        } while (F !== null && F !== g);
        z === null ? w = D : z.next = L, Se(D, i.memoizedState) || _p(), i.memoizedState = D, i.baseState = w, i.baseQueue = z, u.lastRenderedState = D;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var _ = pt;
        do {
          var I = _.lane;
          Wt.lanes = et(Wt.lanes, I), Vp(I), _ = _.next;
        } while (_ !== pt);
      } else
        f === null && (u.lanes = H);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function Hg(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function pb(e, t, a) {
    }
    function vb(e, t, a) {
    }
    function Vg(e, t, a) {
      var i = Wt, u = Pl(), s, f = Lr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), wf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), wf = !0);
      } else {
        if (s = t(), !wf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
        }
        var v = xm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(v, Bs) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, em(zE.bind(null, i, y, e), [e]), i.flags |= sn, Rp(ir | Or, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = Wt, u = xi(), s = t();
      if (!wf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (wp(zE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      or !== null && or.memoizedState.tag & ir) {
        i.flags |= sn, Rp(ir | Or, OE.bind(null, i, y, s, t), void 0, null);
        var g = xm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Es(g, Bs) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= fs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Wt.updateQueue;
      if (u === null)
        u = NE(), Wt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, AE(t) && jE(e);
    }
    function zE(e, t, a) {
      var i = function() {
        AE(t) && jE(e);
      };
      return a(i);
    }
    function AE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = Va(e, Ue);
      t !== null && dr(t, e, Ue, Zt);
    }
    function Kh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: Ug,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = YM.bind(null, Wt, a);
      return [t.memoizedState, i];
    }
    function Pg(e) {
      return Ig(Ug);
    }
    function Bg(e) {
      return Hg(Ug);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Wt.updateQueue;
      if (s === null)
        s = NE(), Wt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Yg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = xi();
      return t.memoizedState;
    }
    function Mp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      Wt.flags |= e, u.memoizedState = Rp(ir | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = xi(), s = i === void 0 ? null : i, f = void 0;
      if (ur !== null) {
        var p = ur.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      Wt.flags |= e, u.memoizedState = Rp(ir | t, a, f, s);
    }
    function em(e, t) {
      return (Wt.mode & za) !== Oe ? Mp(lu | sn | Ml, Or, e, t) : Mp(sn | Ml, Or, e, t);
    }
    function wp(e, t) {
      return Jh(sn, Or, e, t);
    }
    function $g(e, t) {
      return Mp(Je, Vl, e, t);
    }
    function tm(e, t) {
      return Jh(Je, Vl, e, t);
    }
    function Qg(e, t) {
      var a = Je;
      return a |= Kr, (Wt.mode & za) !== Oe && (a |= Zr), Mp(a, lr, e, t);
    }
    function nm(e, t) {
      return Jh(Je, lr, e, t);
    }
    function UE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Wg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Je;
      return u |= Kr, (Wt.mode & za) !== Oe && (u |= Zr), Mp(u, lr, UE.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(Je, lr, UE.bind(null, t, e), i);
    }
    function HM(e, t) {
    }
    var am = HM;
    function Gg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Xg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = xi(), a = ur, i = a.memoizedState;
      return HE(t, i, e);
    }
    function IE(e) {
      var t = xi();
      if (ur === null)
        return t.memoizedState = e, e;
      var a = ur.memoizedState;
      return HE(t, a, e);
    }
    function HE(e, t, a) {
      var i = !ny(Bs);
      if (i) {
        if (!Se(a, t)) {
          var u = xd();
          Wt.lanes = et(Wt.lanes, u), Vp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function VM(e, t, a) {
      var i = ja();
      Hn(Sr(i, ar)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Hn(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Kg() {
      var e = Kh(!1), t = e[0], a = e[1], i = VM.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Pg(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    function PE() {
      var e = Bg(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function PM() {
      return BE;
    }
    function Zg() {
      var e = Pl(), t = xm(), a = t.identifierPrefix, i;
      if (Lr()) {
        var u = nM();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = UM++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function BM(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        $E(t, u);
      else {
        var s = oE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          dr(s, e, i, f), QE(s, t, i);
        }
      }
      WE(e, i);
    }
    function YM(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        $E(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === H && (s === null || s.lanes === H)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = Ji;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                TM(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = oE(e, t, u, i);
        if (g !== null) {
          var D = Ta();
          dr(g, e, i, D), QE(g, t, i);
        }
      }
      WE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === Wt || t !== null && t === Wt;
    }
    function $E(e, t) {
      Cp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (wd(a)) {
        var i = t.lanes;
        i = Dd(i, e.pendingLanes);
        var u = et(i, a);
        t.lanes = u, ho(e, u);
      }
    }
    function WE(e, t, a) {
      kl(e, t);
    }
    var om = {
      readContext: Jn,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: J
    }, GE = null, qE = null, XE = null, KE = null, Bl = null, Ji = null, sm = null;
    {
      var Jg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Pt(), xf(t), Gg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Pt(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Pt(), xf(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Pt(), xf(a), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Pt(), xf(t), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Pt(), xf(t), Qg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Pt(), xf(t);
          var a = fe.current;
          fe.current = Bl;
          try {
            return qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Pt();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Fg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Pt(), Yg(e);
        },
        useState: function(e) {
          V = "useState", Pt();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Pt(), Xg(e);
        },
        useTransition: function() {
          return V = "useTransition", Pt(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Pt(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", Pt(), Zg();
        },
        unstable_isNewReconciler: J
      }, qE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), Gg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), Qg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = fe.current;
          fe.current = Bl;
          try {
            return qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Fg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), Yg(e);
        },
        useState: function(e) {
          V = "useState", ae();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), Xg(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", ae(), Zg();
        },
        unstable_isNewReconciler: J
      }, XE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = fe.current;
          fe.current = Ji;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = fe.current;
          fe.current = Ji;
          try {
            return Ig(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), Zh();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = fe.current;
          fe.current = Ji;
          try {
            return Pg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", ae(), um();
        },
        unstable_isNewReconciler: J
      }, KE = {
        readContext: function(e) {
          return Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ae(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ae(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ae(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ae(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ae(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ae(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ae();
          var a = fe.current;
          fe.current = sm;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ae();
          var i = fe.current;
          fe.current = sm;
          try {
            return Hg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ae(), Zh();
        },
        useState: function(e) {
          V = "useState", ae();
          var t = fe.current;
          fe.current = sm;
          try {
            return Bg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ae(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ae(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", ae(), PE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ae(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", ae(), um();
        },
        unstable_isNewReconciler: J
      }, Bl = {
        readContext: function(e) {
          return Jg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), Pt(), Gg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), Pt(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), Pt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), Pt(), Wg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), Pt(), $g(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), Pt(), Qg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), Pt();
          var a = fe.current;
          fe.current = Bl;
          try {
            return qg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), Pt();
          var i = fe.current;
          fe.current = Bl;
          try {
            return Fg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), Pt(), Yg(e);
        },
        useState: function(e) {
          V = "useState", Qe(), Pt();
          var t = fe.current;
          fe.current = Bl;
          try {
            return Kh(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), Pt(), Xg(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), Pt(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), Pt(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", Qe(), Pt(), Zg();
        },
        unstable_isNewReconciler: J
      }, Ji = {
        readContext: function(e) {
          return Jg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), ae(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), ae(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), ae(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), ae(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), ae(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), ae(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), ae();
          var a = fe.current;
          fe.current = Ji;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), ae();
          var i = fe.current;
          fe.current = Ji;
          try {
            return Ig(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), ae(), Zh();
        },
        useState: function(e) {
          V = "useState", Qe(), ae();
          var t = fe.current;
          fe.current = Ji;
          try {
            return Pg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), ae(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), ae(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), ae(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), ae(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), ae(), um();
        },
        unstable_isNewReconciler: J
      }, sm = {
        readContext: function(e) {
          return Jg(), Jn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Qe(), ae(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Qe(), ae(), Jn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Qe(), ae(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Qe(), ae(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Qe(), ae(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Qe(), ae(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Qe(), ae();
          var a = fe.current;
          fe.current = Ji;
          try {
            return lm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Qe(), ae();
          var i = fe.current;
          fe.current = Ji;
          try {
            return Hg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Qe(), ae(), Zh();
        },
        useState: function(e) {
          V = "useState", Qe(), ae();
          var t = fe.current;
          fe.current = Ji;
          try {
            return Bg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Qe(), ae(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Qe(), ae(), IE(e);
        },
        useTransition: function() {
          return V = "useTransition", Qe(), ae(), PE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Qe(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Qe(), ae(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", Qe(), ae(), um();
        },
        unstable_isNewReconciler: J
      };
    }
    var Io = X.unstable_now, ZE = 0, cm = -1, xp = -1, fm = -1, eS = !1, dm = !1;
    function JE() {
      return eS;
    }
    function $M() {
      dm = !0;
    }
    function QM() {
      eS = !1, dm = !1;
    }
    function WM() {
      eS = dm, dm = !1;
    }
    function eC() {
      return ZE;
    }
    function tC() {
      ZE = Io();
    }
    function tS(e) {
      xp = Io(), e.actualStartTime < 0 && (e.actualStartTime = Io());
    }
    function nC(e) {
      xp = -1;
    }
    function pm(e, t) {
      if (xp >= 0) {
        var a = Io() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function Yl(e) {
      if (cm >= 0) {
        var t = Io() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ct:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function nS(e) {
      if (fm >= 0) {
        var t = Io() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ct:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function $l() {
      cm = Io();
    }
    function rS() {
      fm = Io();
    }
    function aS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ys(e, t) {
      return {
        value: e,
        source: t,
        stack: $u(t),
        digest: null
      };
    }
    function iS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function GM(e, t) {
      return !0;
    }
    function lS(e, t) {
      try {
        var a = GM(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ee)
            return;
          console.error(i);
        }
        var p = u ? $e(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = $e(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var D = v + `
` + f + `

` + ("" + y);
        console.error(D);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var qM = typeof WeakMap == "function" ? WeakMap : Map;
    function rC(e, t, a) {
      var i = Lu(Zt, a);
      i.tag = lg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Vx(u), lS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = Lu(Zt, a);
      i.tag = lg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          vT(e), lS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        vT(e), lS(e, t), typeof u != "function" && Ix(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, Ue) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", $e(e) || "Unknown"));
      }), i;
    }
    function aC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new qM(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Px.bind(null, e, t, a);
        rr && Pp(e, a), t.then(s, s);
      }
    }
    function XM(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function KM(e, t) {
      var a = e.tag;
      if ((e.mode & ot) === Oe && (a === he || a === We || a === Ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function iC(e) {
      var t = e;
      do {
        if (t.tag === De && AM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function lC(e, t, a, i, u) {
      if ((e.mode & ot) === Oe) {
        if (e === t)
          e.flags |= Gn;
        else {
          if (e.flags |= Pe, a.flags |= ds, a.flags &= ~(dc | va), a.tag === ee) {
            var s = a.alternate;
            if (s === null)
              a.tag = wn;
            else {
              var f = Lu(Zt, Ue);
              f.tag = Uh, Ao(a, f, Ue);
            }
          }
          a.lanes = et(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= Gn, e.lanes = u, e;
    }
    function ZM(e, t, a, i, u) {
      if (a.flags |= va, rr && Pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        KM(a), Lr() && a.mode & ot && X0();
        var f = iC(t);
        if (f !== null) {
          f.flags &= ~Tn, lC(f, t, a, e, u), f.mode & ot && aC(e, s, u), XM(f, e, s);
          return;
        } else {
          if (!po(u)) {
            aC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Lr() && a.mode & ot) {
        X0();
        var v = iC(t);
        if (v !== null) {
          (v.flags & Gn) === _e && (v.flags |= Tn), lC(v, t, a, e, u), Jy(Ys(i, a));
          return;
        }
      }
      i = Ys(i, a), Nx(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= Gn;
            var D = In(u);
            y.lanes = et(y.lanes, D);
            var w = rC(y, g, D);
            sg(y, w);
            return;
          }
          case ee:
            var L = i, z = y.type, F = y.stateNode;
            if ((y.flags & Pe) === _e && (typeof z.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !iT(F))) {
              y.flags |= Gn;
              var pe = In(u);
              y.lanes = et(y.lanes, pe);
              var Ne = uS(y, L, pe);
              sg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function JM() {
      return null;
    }
    var Dp = j.ReactCurrentOwner, el = !1, oS, bp, sS, cS, fS, $s, dS, vm;
    oS = {}, bp = {}, sS = {}, cS = {}, fS = {}, $s = !1, dS = {}, vm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = ME(t, null, a, i) : t.child = Cf(t, e.child, a, i);
    }
    function ew(e, t, a, i) {
      t.child = Cf(t, e.child, null, i), t.child = Cf(t, null, a, i);
    }
    function uC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Ef(t, u), _l(t);
      {
        if (Dp.current = t, Gr(!0), v = Df(e, t, f, i, p, u), y = bf(), t.mode & yn) {
          Fn(!0);
          try {
            v = Df(e, t, f, i, p, u), y = bf();
          } finally {
            Fn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (_E(e, t, u), Ou(e, t, u)) : (Lr() && y && Wy(t), t.flags |= Tl, Ea(e, t, v, u), t.child);
    }
    function oC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (iD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = jf(s), t.tag = Ie, t.type = f, hS(t, s), sC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Gi(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          );
        }
        var v = KS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Gi(
          g,
          i,
          // Resolved props
          "prop",
          xt(y)
        );
      }
      var D = e.child, w = CS(e, u);
      if (!w) {
        var L = D.memoizedProps, z = a.compare;
        if (z = z !== null ? z : be, z(L, i) && e.ref === t.ref)
          return Ou(e, t, u);
      }
      t.flags |= Tl;
      var F = Xs(D, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function sC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Gi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (be(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (el = !1, t.pendingProps = i = g, CS(e, u))
            (e.flags & ds) !== _e && (el = !0);
          else
            return t.lanes = e.lanes, Ou(e, t, u);
      }
      return pS(e, t, a, i, u);
    }
    function cC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & ot) === Oe) {
          var f = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Dm(t, a);
        } else if (ra(a, na)) {
          var D = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var w = s !== null ? s.baseLanes : a;
          Dm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = et(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = na;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Dm(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = et(s.baseLanes, a), t.memoizedState = null) : L = a, Dm(t, L);
      }
      return Ea(e, t, u, a), t.child;
    }
    function tw(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function nw(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function rw(e, t, a) {
      {
        t.flags |= Je;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function fC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= cd);
    }
    function pS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = vf(t, a, !0);
        f = hf(t, p);
      }
      var v, y;
      Ef(t, u), _l(t);
      {
        if (Dp.current = t, Gr(!0), v = Df(e, t, a, i, f, u), y = bf(), t.mode & yn) {
          Fn(!0);
          try {
            v = Df(e, t, a, i, f, u), y = bf();
          } finally {
            Fn(!1);
          }
        }
        Gr(!1);
      }
      return uu(), e !== null && !el ? (_E(e, t, u), Ou(e, t, u)) : (Lr() && y && Wy(t), t.flags |= Tl, Ea(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      {
        switch (ED(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Pe, t.flags |= Gn;
            var y = new Error("Simulated error coming from DevTools"), g = In(u);
            t.lanes = et(t.lanes, g);
            var D = uS(t, Ys(y, t), g);
            sg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Gi(
            w,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var L;
      Hl(a) ? (L = !0, xh(t)) : L = !1, Ef(t, u);
      var z = t.stateNode, F;
      z === null ? (mm(e, t), SE(t, a, i), Cg(t, a, i, u), F = !0) : e === null ? F = _M(t, a, i, u) : F = kM(e, t, a, i, u);
      var pe = vS(e, t, a, F, L, u);
      {
        var Ne = t.stateNode;
        F && Ne.props !== i && ($s || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", $e(t) || "a component"), $s = !0);
      }
      return pe;
    }
    function vS(e, t, a, i, u, s) {
      fC(e, t);
      var f = (t.flags & Pe) !== _e;
      if (!i && !f)
        return u && Q0(t, a, !1), Ou(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nC();
      else {
        _l(t);
        {
          if (Gr(!0), v = p.render(), t.mode & yn) {
            Fn(!0);
            try {
              p.render();
            } finally {
              Fn(!1);
            }
          }
          Gr(!1);
        }
        uu();
      }
      return t.flags |= Tl, e !== null && f ? ew(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && Q0(t, a, !0), t.child;
    }
    function pC(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function aw(e, t, a) {
      if (pC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      fE(e, t), Vh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Tn) {
          var g = Ys(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return vC(e, t, p, a, g);
        } else if (p !== s) {
          var D = Ys(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return vC(e, t, p, a, D);
        } else {
          oM(t);
          var w = ME(t, null, p, a);
          t.child = w;
          for (var L = w; L; )
            L.flags = L.flags & ~rn | Na, L = L.sibling;
        }
      } else {
        if (gf(), p === s)
          return Ou(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function vC(e, t, a, i, u) {
      return gf(), Jy(u), t.flags |= Tn, Ea(e, t, a, i), t.child;
    }
    function iw(e, t, a) {
      xE(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Oy(i, u);
      return p ? f = null : s !== null && Oy(i, s) && (t.flags |= Vt), fC(e, t), Ea(e, t, f, a), t.child;
    }
    function lw(e, t) {
      return e === null && Zy(t), null;
    }
    function uw(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = lD(v), g = Ki(v, u), D;
      switch (y) {
        case he:
          return hS(t, v), t.type = v = jf(v), D = pS(null, t, v, g, i), D;
        case ee:
          return t.type = v = $S(v), D = dC(null, t, v, g, i), D;
        case We:
          return t.type = v = QS(v), D = uC(null, t, v, g, i), D;
        case it: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Gi(
              w,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return D = oC(
            null,
            t,
            v,
            Ki(v.type, g),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ke && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function ow(e, t, a, i, u) {
      mm(e, t), t.tag = ee;
      var s;
      return Hl(a) ? (s = !0, xh(t)) : s = !1, Ef(t, u), SE(t, a, i), Cg(t, a, i, u), vS(null, t, a, !0, s, u);
    }
    function sw(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = vf(t, a, !1);
        s = hf(t, f);
      }
      Ef(t, i);
      var p, v;
      _l(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          oS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), oS[y] = !0);
        }
        t.mode & yn && Xi.recordLegacyContextWarning(t, null), Gr(!0), Dp.current = t, p = Df(null, t, a, u, s, i), v = bf(), Gr(!1);
      }
      if (uu(), t.flags |= Tl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        bp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = xt(a) || "Unknown";
          bp[D] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), bp[D] = !0);
        }
        t.tag = ee, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Hl(a) ? (w = !0, xh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, og(t), gE(t, p), Cg(t, a, u, i), vS(null, t, a, !0, w, i);
      } else {
        if (t.tag = he, t.mode & yn) {
          Fn(!0);
          try {
            p = Df(null, t, a, u, s, i), v = bf();
          } finally {
            Fn(!1);
          }
        }
        return Lr() && v && Wy(t), Ea(null, t, p, i), hS(t, a), t.child;
      }
    }
    function hS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = _r();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), fS[u] || (fS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = xt(t) || "Unknown";
          cS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), cS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = xt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support contextType.", p), sS[p] = !0);
        }
      }
    }
    var mS = {
      dehydrated: null,
      treeContext: null,
      retryLane: St
    };
    function yS(e) {
      return {
        baseLanes: e,
        cachePool: JM(),
        transitions: null
      };
    }
    function cw(e, t) {
      var a = null;
      return {
        baseLanes: et(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function fw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return kg(e, Sp);
    }
    function dw(e, t) {
      return vo(e.childLanes, t);
    }
    function hC(e, t, a) {
      var i = t.pendingProps;
      CD(t) && (t.flags |= Pe);
      var u = Zi.current, s = !1, f = (t.flags & Pe) !== _e;
      if (f || fw(u, e) ? (s = !0, t.flags &= ~Pe) : (e === null || e.memoizedState !== null) && (u = zM(u, bE)), u = Rf(u), Uo(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return yw(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var D = pw(t, y, g, a), w = t.child;
          return w.memoizedState = yS(a), t.memoizedState = mS, D;
        } else
          return gS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var z = L.dehydrated;
          if (z !== null)
            return gw(e, t, f, i, z, L, a);
        }
        if (s) {
          var F = i.fallback, pe = i.children, Ne = hw(e, t, pe, F, a), Re = t.child, Ct = e.child.memoizedState;
          return Re.memoizedState = Ct === null ? yS(a) : cw(Ct, a), Re.childLanes = dw(e, a), t.memoizedState = mS, Ne;
        } else {
          var pt = i.children, _ = vw(e, t, pt, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = SS(u, i);
      return s.return = e, e.child = s, s;
    }
    function pw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ot) === Oe && s !== null ? (p = s, p.childLanes = H, p.pendingProps = f, e.mode & Ae && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = SS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function SS(e, t, a) {
      return mT(e, t, H, null);
    }
    function mC(e, t) {
      return Xs(e, t);
    }
    function vw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = mC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ot) === Oe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= zt) : p.push(s);
      }
      return t.child = f, f;
    }
    function hw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ot) === Oe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = H, y.pendingProps = v, t.mode & Ae && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = mC(f, v), y.subtreeFlags = f.subtreeFlags & nr;
      var D;
      return p !== null ? D = Xs(p, i) : (D = $o(i, s, u, null), D.flags |= rn), D.return = t, y.return = t, y.sibling = D, t.child = y, D;
    }
    function hm(e, t, a, i) {
      i !== null && Jy(i), Cf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = gS(t, s);
      return f.flags |= rn, t.memoizedState = null, f;
    }
    function mw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = SS(f, s), v = $o(i, s, u, null);
      return v.flags |= rn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ot) !== Oe && Cf(t, e.child, null, u), v;
    }
    function yw(e, t, a) {
      return (e.mode & ot) === Oe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : Uy(t) ? e.lanes = cu : e.lanes = na, null;
    }
    function gw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Tn) {
          t.flags &= ~Tn;
          var _ = iS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hm(e, t, f, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Pe, null;
          var I = i.children, k = i.fallback, G = mw(e, t, I, k, f), ve = t.child;
          return ve.memoizedState = yS(f), t.memoizedState = mS, G;
        }
      else {
        if (lM(), (t.mode & ot) === Oe)
          return hm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Uy(u)) {
          var p, v, y;
          {
            var g = RR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = iS(D, p, y);
          return hm(e, t, f, w);
        }
        var L = ra(f, e.childLanes);
        if (el || L) {
          var z = xm();
          if (z !== null) {
            var F = ay(z, f);
            if (F !== St && F !== s.retryLane) {
              s.retryLane = F;
              var pe = Zt;
              Va(e, F), dr(z, e, F, pe);
            }
          }
          HS();
          var Ne = iS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hm(e, t, f, Ne);
        } else if (F0(u)) {
          t.flags |= Pe, t.child = e.child;
          var Re = Bx.bind(null, e);
          return MR(u, Re), null;
        } else {
          sM(t, u, s.treeContext);
          var Ct = i.children, pt = gS(t, Ct);
          return pt.flags |= Na, pt;
        }
      }
    }
    function yC(e, t, a) {
      e.lanes = et(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = et(i.lanes, t)), ag(e.return, t, a);
    }
    function Sw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === De) {
          var u = i.memoizedState;
          u !== null && yC(i, a, e);
        } else if (i.tag === _t)
          yC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Ew(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Cw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !dS[e])
        if (dS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Tw(e, t) {
      e !== void 0 && !vm[e] && (e !== "collapsed" && e !== "hidden" ? (vm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function gC(e, t) {
      {
        var a = ht(e), i = !a && typeof qa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Rw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ht(e)) {
          for (var a = 0; a < e.length; a++)
            if (!gC(e[a], a))
              return;
        } else {
          var i = qa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!gC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ES(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function SC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Cw(u), Tw(s, u), Rw(f, u), Ea(e, t, f, a);
      var p = Zi.current, v = kg(p, Sp);
      if (v)
        p = Ng(p, Sp), t.flags |= Pe;
      else {
        var y = e !== null && (e.flags & Pe) !== _e;
        y && Sw(t, t.child, a), p = Rf(p);
      }
      if (Uo(t, p), (t.mode & ot) === Oe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Ew(t.child), D;
            g === null ? (D = t.child, t.child = null) : (D = g.sibling, g.sibling = null), ES(
              t,
              !1,
              // isBackwards
              D,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var z = L.alternate;
              if (z !== null && Gh(z) === null) {
                t.child = L;
                break;
              }
              var F = L.sibling;
              L.sibling = w, w = L, L = F;
            }
            ES(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            ES(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Mw(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var EC = !1;
    function ww(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || EC || (EC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (uE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !Mh())
            return Ou(e, t, a);
        } else
          SM(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var CC = !1;
    function xw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (CC || (CC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ef(t, a);
      var f = Jn(i);
      _l(t);
      var p;
      return Dp.current = t, Gr(!0), p = s(f), Gr(!1), uu(), t.flags |= Tl, Ea(e, t, p, a), t.child;
    }
    function _p() {
      el = !0;
    }
    function mm(e, t) {
      (t.mode & ot) === Oe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= rn);
    }
    function Ou(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nC(), Vp(t.lanes), ra(a, t.childLanes) ? (NM(e, t), t.child) : null;
    }
    function Dw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= zt) : s.push(e), a.flags |= rn, a;
      }
    }
    function CS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function bw(e, t, a) {
      switch (t.tag) {
        case Z:
          pC(t), t.stateNode, gf();
          break;
        case ue:
          xE(t);
          break;
        case ee: {
          var i = t.type;
          Hl(i) && xh(t);
          break;
        }
        case le:
          Dg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          uE(t, s, u);
          break;
        }
        case ct:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Je);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case De: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Rf(Zi.current)), t.flags |= Pe, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return hC(e, t, a);
            Uo(t, Rf(Zi.current));
            var D = Ou(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Uo(t, Rf(Zi.current));
          break;
        }
        case _t: {
          var w = (e.flags & Pe) !== _e, L = ra(a, t.childLanes);
          if (w) {
            if (L)
              return SC(e, t, a);
            t.flags |= Pe;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Uo(t, Zi.current), L)
            break;
          return null;
        }
        case je:
        case Ke:
          return t.lanes = H, cC(e, t, a);
      }
      return Ou(e, t, a);
    }
    function TC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dw(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Mh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          el = !0;
        else {
          var s = CS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Pe) === _e)
            return el = !1, bw(e, t, a);
          (e.flags & ds) !== _e ? el = !0 : el = !1;
        }
      } else if (el = !1, Lr() && eM(t)) {
        var f = t.index, p = tM();
        q0(t, p, f);
      }
      switch (t.lanes = H, t.tag) {
        case Me:
          return sw(e, t, t.type, a);
        case nn: {
          var v = t.elementType;
          return uw(e, t, v, a);
        }
        case he: {
          var y = t.type, g = t.pendingProps, D = t.elementType === y ? g : Ki(y, g);
          return pS(e, t, y, D, a);
        }
        case ee: {
          var w = t.type, L = t.pendingProps, z = t.elementType === w ? L : Ki(w, L);
          return dC(e, t, w, z, a);
        }
        case Z:
          return aw(e, t, a);
        case ue:
          return iw(e, t, a);
        case Ve:
          return lw(e, t);
        case De:
          return hC(e, t, a);
        case le:
          return Mw(e, t, a);
        case We: {
          var F = t.type, pe = t.pendingProps, Ne = t.elementType === F ? pe : Ki(F, pe);
          return uC(e, t, F, Ne, a);
        }
        case Rt:
          return tw(e, t, a);
        case st:
          return nw(e, t, a);
        case ct:
          return rw(e, t, a);
        case at:
          return ww(e, t, a);
        case fn:
          return xw(e, t, a);
        case it: {
          var Re = t.type, Ct = t.pendingProps, pt = Ki(Re, Ct);
          if (t.type !== t.elementType) {
            var _ = Re.propTypes;
            _ && Gi(
              _,
              pt,
              // Resolved for outer only
              "prop",
              xt(Re)
            );
          }
          return pt = Ki(Re.type, pt), oC(e, t, Re, pt, a);
        }
        case Ie:
          return sC(e, t, t.type, t.pendingProps, a);
        case wn: {
          var I = t.type, k = t.pendingProps, G = t.elementType === I ? k : Ki(I, k);
          return ow(e, t, I, G, a);
        }
        case _t:
          return SC(e, t, a);
        case En:
          break;
        case je:
          return cC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _f(e) {
      e.flags |= Je;
    }
    function RC(e) {
      e.flags |= Xr, e.flags |= cd;
    }
    var MC, TS, wC, xC;
    MC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Ve)
          K1(e, u.stateNode);
        else if (u.tag !== le) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TS = function(e, t) {
    }, wC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = bg(), v = J1(f, a, s, i, u, p);
        t.updateQueue = v, v && _f(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && _f(t);
    };
    function kp(e, t) {
      if (!Lr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = H, i = _e;
      if (t) {
        if ((e.mode & Ae) !== Oe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = et(a, et(y.lanes, y.childLanes)), i |= y.subtreeFlags & nr, i |= y.flags & nr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = et(a, et(g.lanes, g.childLanes)), i |= g.subtreeFlags & nr, i |= g.flags & nr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ae) !== Oe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = et(a, et(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = et(a, et(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function _w(e, t, a) {
      if (vM() && (t.mode & ot) !== Oe && (t.flags & Pe) === _e)
        return nE(t), gf(), t.flags |= Tn | va | Gn, !1;
      var i = Nh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (dM(t), zr(t), (t.mode & Ae) !== Oe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (gf(), (t.flags & Pe) === _e && (t.memoizedState = null), t.flags |= Je, zr(t), (t.mode & Ae) !== Oe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rE(), !0;
    }
    function DC(e, t, a) {
      var i = t.pendingProps;
      switch (Gy(t), t.tag) {
        case Me:
        case nn:
        case Ie:
        case he:
        case We:
        case Rt:
        case st:
        case ct:
        case fn:
        case it:
          return zr(t), null;
        case ee: {
          var u = t.type;
          return Hl(u) && wh(t), zr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Tf(t), Yy(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Nh(t);
            if (f)
              _f(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Tn) !== _e) && (t.flags |= ka, rE());
            }
          }
          return TS(e, t), zr(t), null;
        }
        case ue: {
          _g(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, y, i, v), e.ref !== t.ref && RC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var g = bg(), D = Nh(t);
            if (D)
              cM(t, v, g) && _f(t);
            else {
              var w = X1(y, i, v, g, t);
              MC(w, t, !1, !1), t.stateNode = w, Z1(w, y, i, v) && _f(t);
            }
            t.ref !== null && RC(t);
          }
          return zr(t), null;
        }
        case Ve: {
          var L = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            xC(e, t, z, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), pe = bg(), Ne = Nh(t);
            Ne ? fM(t) && _f(t) : t.stateNode = eR(L, F, pe, t);
          }
          return zr(t), null;
        }
        case De: {
          Mf(t);
          var Re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ct = _w(e, t, Re);
            if (!Ct)
              return t.flags & Gn ? t : null;
          }
          if ((t.flags & Pe) !== _e)
            return t.lanes = a, (t.mode & Ae) !== Oe && aS(t), t;
          var pt = Re !== null, _ = e !== null && e.memoizedState !== null;
          if (pt !== _ && pt) {
            var I = t.child;
            if (I.flags |= Rl, (t.mode & ot) !== Oe) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              k || kg(Zi.current, bE) ? kx() : HS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= Je), zr(t), (t.mode & Ae) !== Oe && pt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case le:
          return Tf(t), TS(e, t), e === null && WR(t.stateNode.containerInfo), zr(t), null;
        case at:
          var se = t.type._context;
          return rg(se, t), zr(t), null;
        case wn: {
          var He = t.type;
          return Hl(He) && wh(t), zr(t), null;
        }
        case _t: {
          Mf(t);
          var Ge = t.memoizedState;
          if (Ge === null)
            return zr(t), null;
          var Gt = (t.flags & Pe) !== _e, Nt = Ge.rendering;
          if (Nt === null)
            if (Gt)
              kp(Ge, !1);
            else {
              var Bn = Lx() && (e === null || (e.flags & Pe) === _e);
              if (!Bn)
                for (var Lt = t.child; Lt !== null; ) {
                  var An = Gh(Lt);
                  if (An !== null) {
                    Gt = !0, t.flags |= Pe, kp(Ge, !1);
                    var ua = An.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Je), t.subtreeFlags = _e, LM(t, a), Uo(t, Ng(Zi.current, Sp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              Ge.tail !== null && mn() > GC() && (t.flags |= Pe, Gt = !0, kp(Ge, !1), t.lanes = Rd);
            }
          else {
            if (!Gt) {
              var Ir = Gh(Nt);
              if (Ir !== null) {
                t.flags |= Pe, Gt = !0;
                var li = Ir.updateQueue;
                if (li !== null && (t.updateQueue = li, t.flags |= Je), kp(Ge, !0), Ge.tail === null && Ge.tailMode === "hidden" && !Nt.alternate && !Lr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mn() * 2 - Ge.renderingStartTime > GC() && a !== na && (t.flags |= Pe, Gt = !0, kp(Ge, !1), t.lanes = Rd);
            }
            if (Ge.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var Ra = Ge.last;
              Ra !== null ? Ra.sibling = Nt : t.child = Nt, Ge.last = Nt;
            }
          }
          if (Ge.tail !== null) {
            var Ma = Ge.tail;
            Ge.rendering = Ma, Ge.tail = Ma.sibling, Ge.renderingStartTime = mn(), Ma.sibling = null;
            var oa = Zi.current;
            return Gt ? oa = Ng(oa, Sp) : oa = Rf(oa), Uo(t, oa), Ma;
          }
          return zr(t), null;
        }
        case En:
          break;
        case je:
        case Ke: {
          IS(t);
          var Fu = t.memoizedState, Uf = Fu !== null;
          if (e !== null) {
            var Qp = e.memoizedState, Gl = Qp !== null;
            Gl !== Uf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !R && (t.flags |= Rl);
          }
          return !Uf || (t.mode & ot) === Oe ? zr(t) : ra(Wl, na) && (zr(t), t.subtreeFlags & (rn | Je) && (t.flags |= Rl)), null;
        }
        case At:
          return null;
        case Mt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      switch (Gy(t), t.tag) {
        case ee: {
          var i = t.type;
          Hl(i) && wh(t);
          var u = t.flags;
          return u & Gn ? (t.flags = u & ~Gn | Pe, (t.mode & Ae) !== Oe && aS(t), t) : null;
        }
        case Z: {
          t.stateNode, Tf(t), Yy(t), Og();
          var s = t.flags;
          return (s & Gn) !== _e && (s & Pe) === _e ? (t.flags = s & ~Gn | Pe, t) : null;
        }
        case ue:
          return _g(t), null;
        case De: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            gf();
          }
          var p = t.flags;
          return p & Gn ? (t.flags = p & ~Gn | Pe, (t.mode & Ae) !== Oe && aS(t), t) : null;
        }
        case _t:
          return Mf(t), null;
        case le:
          return Tf(t), null;
        case at:
          var v = t.type._context;
          return rg(v, t), null;
        case je:
        case Ke:
          return IS(t), null;
        case At:
          return null;
        default:
          return null;
      }
    }
    function bC(e, t, a) {
      switch (Gy(t), t.tag) {
        case ee: {
          var i = t.type.childContextTypes;
          i != null && wh(t);
          break;
        }
        case Z: {
          t.stateNode, Tf(t), Yy(t), Og();
          break;
        }
        case ue: {
          _g(t);
          break;
        }
        case le:
          Tf(t);
          break;
        case De:
          Mf(t);
          break;
        case _t:
          Mf(t);
          break;
        case at:
          var u = t.type._context;
          rg(u, t);
          break;
        case je:
        case Ke:
          IS(t);
          break;
      }
    }
    var _C = null;
    _C = /* @__PURE__ */ new Set();
    var ym = !1, Ar = !1, Nw = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, kf = null, Nf = null;
    function Lw(e) {
      iu(null, function() {
        throw e;
      }), od();
    }
    var Ow = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ae)
        try {
          $l(), t.componentWillUnmount();
        } finally {
          Yl(e);
        }
      else
        t.componentWillUnmount();
    };
    function kC(e, t) {
      try {
        Ho(lr, e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Ow(e, a);
      } catch (i) {
        on(e, t, i);
      }
    }
    function zw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        on(e, t, i);
      }
    }
    function NC(e, t) {
      try {
        OC(e);
      } catch (a) {
        on(e, t, a);
      }
    }
    function Lf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (tt && ft && e.mode & Ae)
              try {
                $l(), i = a(null);
              } finally {
                Yl(e);
              }
            else
              i = a(null);
          } catch (u) {
            on(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          a.current = null;
    }
    function gm(e, t, a) {
      try {
        a();
      } catch (i) {
        on(e, t, i);
      }
    }
    var LC = !1;
    function Aw(e, t) {
      G1(e.containerInfo), Ee = t, jw();
      var a = LC;
      return LC = !1, a;
    }
    function jw() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & io) !== _e && t !== null ? (t.return = e, Ee = t) : Uw();
      }
    }
    function Uw() {
      for (; Ee !== null; ) {
        var e = Ee;
        Ht(e);
        try {
          Fw(e);
        } catch (a) {
          on(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Fw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ka) !== _e) {
        switch (Ht(e), e.tag) {
          case he:
          case We:
          case Ie:
            break;
          case ee: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !$s && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ki(e.type, i), u);
              {
                var p = _C;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", $e(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              SR(v.containerInfo);
            }
            break;
          }
          case ue:
          case Ve:
          case le:
          case wn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function tl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Pa ? Ec(t) : (e & lr) !== Pa && Cc(t), (e & Vl) !== Pa && Bp(!0), gm(t, a, p), (e & Vl) !== Pa && Bp(!1), (e & Or) !== Pa ? kv() : (e & lr) !== Pa && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== Pa ? _v(t) : (e & lr) !== Pa && Nv(t);
            var f = s.create;
            (e & Vl) !== Pa && Bp(!0), s.destroy = f(), (e & Vl) !== Pa && Bp(!1), (e & Or) !== Pa ? Ed() : (e & lr) !== Pa && Lv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & lr) !== _e ? v = "useLayoutEffect" : (s.tag & Vl) !== _e ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Iw(e, t) {
      if ((t.flags & Je) !== _e)
        switch (t.tag) {
          case ct: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = eC(), p = t.alternate === null ? "mount" : "update";
            JE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case Z:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case ct:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Hw(e, t, a, i) {
      if ((a.flags & yr) !== _e)
        switch (a.tag) {
          case he:
          case We:
          case Ie: {
            if (!Ar)
              if (a.mode & Ae)
                try {
                  $l(), Ho(lr | ir, a);
                } finally {
                  Yl(a);
                }
              else
                Ho(lr | ir, a);
            break;
          }
          case ee: {
            var u = a.stateNode;
            if (a.flags & Je && !Ar)
              if (t === null)
                if (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Ae)
                  try {
                    $l(), u.componentDidMount();
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ki(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & Ae)
                  try {
                    $l(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Yl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !$s && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), pE(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ee:
                    y = a.child.stateNode;
                    break;
                }
              pE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Je) {
              var D = a.type, w = a.memoizedProps;
              iR(g, D, w);
            }
            break;
          }
          case Ve:
            break;
          case le:
            break;
          case ct: {
            {
              var L = a.memoizedProps, z = L.onCommit, F = L.onRender, pe = a.stateNode.effectDuration, Ne = eC(), Re = t === null ? "mount" : "update";
              JE() && (Re = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof z == "function" && z(a.memoizedProps.id, Re, pe, Ne), Ux(a);
                var Ct = a.return;
                e:
                  for (; Ct !== null; ) {
                    switch (Ct.tag) {
                      case Z:
                        var pt = Ct.stateNode;
                        pt.effectDuration += pe;
                        break e;
                      case ct:
                        var _ = Ct.stateNode;
                        _.effectDuration += pe;
                        break e;
                    }
                    Ct = Ct.return;
                  }
              }
            }
            break;
          }
          case De: {
            Gw(e, a);
            break;
          }
          case _t:
          case wn:
          case En:
          case je:
          case Ke:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && OC(a);
    }
    function Vw(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          if (e.mode & Ae)
            try {
              $l(), kC(e, e.return);
            } finally {
              Yl(e);
            }
          else
            kC(e, e.return);
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && zw(e, e.return, t), NC(e, e.return);
          break;
        }
        case ue: {
          NC(e, e.return);
          break;
        }
      }
    }
    function Pw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? hR(u) : yR(i.stateNode, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
          }
        } else if (i.tag === Ve) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? mR(s) : gR(s, i.memoizedProps);
            } catch (f) {
              on(e, e.return, f);
            }
        } else if (!((i.tag === je || i.tag === Ke) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function OC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ae)
            try {
              $l(), u = t(i);
            } finally {
              Yl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", $e(e)), t.current = i;
      }
    }
    function Bw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && XR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Yw(e) {
      for (var t = e.return; t !== null; ) {
        if (AC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AC(e) {
      return e.tag === ue || e.tag === Z || e.tag === le;
    }
    function jC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || AC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Ve && t.tag !== Qt; ) {
            if (t.flags & rn || t.child === null || t.tag === le)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & rn))
            return t.stateNode;
        }
    }
    function $w(e) {
      var t = Yw(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Vt && (U0(a), t.flags &= ~Vt);
          var i = jC(e);
          wS(e, i, a);
          break;
        }
        case Z:
        case le: {
          var u = t.stateNode.containerInfo, s = jC(e);
          MS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function MS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? fR(a, s, t) : sR(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          MS(f, t, a);
          for (var p = f.sibling; p !== null; )
            MS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? cR(a, s, t) : oR(a, s);
      } else if (i !== le) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var jr = null, nl = !1;
    function Qw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                jr = i.stateNode, nl = !1;
                break e;
              }
              case Z: {
                jr = i.stateNode.containerInfo, nl = !0;
                break e;
              }
              case le: {
                jr = i.stateNode.containerInfo, nl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        UC(e, t, a), jr = null, nl = !1;
      }
      Bw(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        UC(e, t, i), i = i.sibling;
    }
    function UC(e, t, a) {
      switch (gd(a), a.tag) {
        case ue:
          Ar || Lf(a, t);
        case Ve: {
          {
            var i = jr, u = nl;
            jr = null, Vo(e, t, a), jr = i, nl = u, jr !== null && (nl ? pR(jr, a.stateNode) : dR(jr, a.stateNode));
          }
          return;
        }
        case Qt: {
          jr !== null && (nl ? vR(jr, a.stateNode) : jy(jr, a.stateNode));
          return;
        }
        case le: {
          {
            var s = jr, f = nl;
            jr = a.stateNode.containerInfo, nl = !0, Vo(e, t, a), jr = s, nl = f;
          }
          return;
        }
        case he:
        case We:
        case it:
        case Ie: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var D = g, w = D.destroy, L = D.tag;
                  w !== void 0 && ((L & Vl) !== Pa ? gm(a, t, w) : (L & lr) !== Pa && (Cc(a), a.mode & Ae ? ($l(), gm(a, t, w), Yl(a)) : gm(a, t, w), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case ee: {
          if (!Ar) {
            Lf(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && RS(a, t, z);
          }
          Vo(e, t, a);
          return;
        }
        case En: {
          Vo(e, t, a);
          return;
        }
        case je: {
          if (
            // TODO: Remove this dead flag
            a.mode & ot
          ) {
            var F = Ar;
            Ar = F || a.memoizedState !== null, Vo(e, t, a), Ar = F;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function Ww(e) {
      e.memoizedState;
    }
    function Gw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && OR(s);
          }
        }
      }
    }
    function FC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Nw()), t.forEach(function(i) {
          var u = Yx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), rr)
              if (kf !== null && Nf !== null)
                Pp(Nf, kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function qw(e, t, a) {
      kf = a, Nf = e, Ht(t), IC(t, e), Ht(t), kf = null, Nf = null;
    }
    function rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Qw(e, t, s);
          } catch (v) {
            on(s, t, v);
          }
        }
      var f = Zs();
      if (t.subtreeFlags & Jr)
        for (var p = t.child; p !== null; )
          Ht(p), IC(p, e), p = p.sibling;
      Ht(f);
    }
    function IC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case he:
        case We:
        case it:
        case Ie: {
          if (rl(t, e), Ql(e), u & Je) {
            try {
              tl(Vl | ir, e, e.return), Ho(Vl | ir, e);
            } catch (He) {
              on(e, e.return, He);
            }
            if (e.mode & Ae) {
              try {
                $l(), tl(lr | ir, e, e.return);
              } catch (He) {
                on(e, e.return, He);
              }
              Yl(e);
            } else
              try {
                tl(lr | ir, e, e.return);
              } catch (He) {
                on(e, e.return, He);
              }
          }
          return;
        }
        case ee: {
          rl(t, e), Ql(e), u & Xr && i !== null && Lf(i, i.return);
          return;
        }
        case ue: {
          rl(t, e), Ql(e), u & Xr && i !== null && Lf(i, i.return);
          {
            if (e.flags & Vt) {
              var s = e.stateNode;
              try {
                U0(s);
              } catch (He) {
                on(e, e.return, He);
              }
            }
            if (u & Je) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    lR(f, g, y, v, p, e);
                  } catch (He) {
                    on(e, e.return, He);
                  }
              }
            }
          }
          return;
        }
        case Ve: {
          if (rl(t, e), Ql(e), u & Je) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, w = e.memoizedProps, L = i !== null ? i.memoizedProps : w;
            try {
              uR(D, L, w);
            } catch (He) {
              on(e, e.return, He);
            }
          }
          return;
        }
        case Z: {
          if (rl(t, e), Ql(e), u & Je && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                LR(t.containerInfo);
              } catch (He) {
                on(e, e.return, He);
              }
          }
          return;
        }
        case le: {
          rl(t, e), Ql(e);
          return;
        }
        case De: {
          rl(t, e), Ql(e);
          var F = e.child;
          if (F.flags & Rl) {
            var pe = F.stateNode, Ne = F.memoizedState, Re = Ne !== null;
            if (pe.isHidden = Re, Re) {
              var Ct = F.alternate !== null && F.alternate.memoizedState !== null;
              Ct || _x();
            }
          }
          if (u & Je) {
            try {
              Ww(e);
            } catch (He) {
              on(e, e.return, He);
            }
            FC(e);
          }
          return;
        }
        case je: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ot
          ) {
            var _ = Ar;
            Ar = _ || pt, rl(t, e), Ar = _;
          } else
            rl(t, e);
          if (Ql(e), u & Rl) {
            var I = e.stateNode, k = e.memoizedState, G = k !== null, ve = e;
            if (I.isHidden = G, G && !pt && (ve.mode & ot) !== Oe) {
              Ee = ve;
              for (var se = ve.child; se !== null; )
                Ee = se, Kw(se), se = se.sibling;
            }
            Pw(ve, G);
          }
          return;
        }
        case _t: {
          rl(t, e), Ql(e), u & Je && FC(e);
          return;
        }
        case En:
          return;
        default: {
          rl(t, e), Ql(e);
          return;
        }
      }
    }
    function Ql(e) {
      var t = e.flags;
      if (t & rn) {
        try {
          $w(e);
        } catch (a) {
          on(e, e.return, a);
        }
        e.flags &= ~rn;
      }
      t & Na && (e.flags &= ~Na);
    }
    function Xw(e, t, a) {
      kf = a, Nf = t, Ee = e, HC(e, t, a), kf = null, Nf = null;
    }
    function HC(e, t, a) {
      for (var i = (e.mode & ot) !== Oe; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === je && i) {
          var f = u.memoizedState !== null, p = f || ym;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, D = ym, w = Ar;
            ym = p, Ar = g, Ar && !w && (Ee = u, Zw(u));
            for (var L = s; L !== null; )
              Ee = L, HC(
                L,
                // New root; bubble back up to here and stop.
                t,
                a
              ), L = L.sibling;
            Ee = u, ym = D, Ar = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yr) !== _e && s !== null ? (s.return = u, Ee = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & yr) !== _e) {
          var u = i.alternate;
          Ht(i);
          try {
            Hw(t, u, i, a);
          } catch (f) {
            on(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function Kw(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case he:
          case We:
          case it:
          case Ie: {
            if (t.mode & Ae)
              try {
                $l(), tl(lr, t, t.return);
              } finally {
                Yl(t);
              }
            else
              tl(lr, t, t.return);
            break;
          }
          case ee: {
            Lf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case ue: {
            Lf(t, t.return);
            break;
          }
          case je: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : VC(e);
      }
    }
    function VC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Zw(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === je) {
          var i = t.memoizedState !== null;
          if (i) {
            PC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : PC(e);
      }
    }
    function PC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Ht(t);
        try {
          Vw(t);
        } catch (i) {
          on(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function Jw(e, t, a, i) {
      Ee = t, ex(t, e, a, i);
    }
    function ex(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & La) !== _e && s !== null ? (s.return = u, Ee = s) : tx(e, t, a, i);
      }
    }
    function tx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & sn) !== _e) {
          Ht(u);
          try {
            nx(t, u, a, i);
          } catch (f) {
            on(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function nx(e, t, a, i) {
      switch (t.tag) {
        case he:
        case We:
        case Ie: {
          if (t.mode & Ae) {
            rS();
            try {
              Ho(Or | ir, t);
            } finally {
              nS(t);
            }
          } else
            Ho(Or | ir, t);
          break;
        }
      }
    }
    function rx(e) {
      Ee = e, ax();
    }
    function ax() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & zt) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, ux(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & La) !== _e && t !== null ? (t.return = e, Ee = t) : ix();
      }
    }
    function ix() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & sn) !== _e && (Ht(e), lx(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function lx(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          e.mode & Ae ? (rS(), tl(Or | ir, e, e.return), nS(e)) : tl(Or | ir, e, e.return);
          break;
        }
      }
    }
    function ux(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Ht(a), sx(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : ox(e);
      }
    }
    function ox(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (zC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function sx(e, t) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          e.mode & Ae ? (rS(), tl(Or, e, t), nS(e)) : tl(Or, e, t);
          break;
        }
      }
    }
    function cx(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          try {
            Ho(lr | ir, e);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
      }
    }
    function fx(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          try {
            Ho(Or | ir, e);
          } catch (t) {
            on(e, e.return, t);
          }
          break;
        }
      }
    }
    function dx(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie: {
          try {
            tl(lr | ir, e, e.return);
          } catch (a) {
            on(e, e.return, a);
          }
          break;
        }
        case ee: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function px(e) {
      switch (e.tag) {
        case he:
        case We:
        case Ie:
          try {
            tl(Or | ir, e, e.return);
          } catch (t) {
            on(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var vx = [];
    function hx() {
      vx.forEach(function(e) {
        return e();
      });
    }
    var mx = j.ReactCurrentActQueue;
    function yx(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function BC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && mx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var gx = Math.ceil, DS = j.ReactCurrentDispatcher, bS = j.ReactCurrentOwner, Ur = j.ReactCurrentBatchConfig, al = j.ReactCurrentActQueue, sr = (
      /*             */
      0
    ), YC = (
      /*               */
      1
    ), Fr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), zu = 0, Lp = 1, Qs = 2, Sm = 3, Op = 4, $C = 5, _S = 6, Et = sr, Ca = null, kn = null, cr = H, Wl = H, kS = No(H), fr = zu, zp = null, Em = H, Ap = H, Cm = H, jp = null, Ba = null, NS = 0, QC = 500, WC = 1 / 0, Sx = 500, Au = null;
    function Up() {
      WC = mn() + Sx;
    }
    function GC() {
      return WC;
    }
    var Tm = !1, LS = null, Of = null, Ws = !1, Po = null, Fp = H, OS = [], zS = null, Ex = 50, Ip = 0, AS = null, jS = !1, Rm = !1, Cx = 50, zf = 0, Mm = null, Hp = Zt, wm = H, qC = !1;
    function xm() {
      return Ca;
    }
    function Ta() {
      return (Et & (Fr | Di)) !== sr ? mn() : (Hp !== Zt || (Hp = mn()), Hp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ot) === Oe)
        return Ue;
      if ((Et & Fr) !== sr && cr !== H)
        return In(cr);
      var a = yM() !== mM;
      if (a) {
        if (Ur.transition !== null) {
          var i = Ur.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return wm === St && (wm = xd()), wm;
      }
      var u = ja();
      if (u !== St)
        return u;
      var s = tR();
      return s;
    }
    function Tx(e) {
      var t = e.mode;
      return (t & ot) === Oe ? Ue : ry();
    }
    function dr(e, t, a, i) {
      Qx(), qC && S("useInsertionEffect must not schedule updates."), jS && (Rm = !0), yu(e, a, i), (Et & Fr) !== H && e === Ca ? qx(t) : (rr && Nd(e, t, a), Xx(t), e === Ca && ((Et & Fr) === sr && (Ap = et(Ap, a)), fr === Op && Yo(e, cr)), Ya(e, i), a === Ue && Et === sr && (t.mode & ot) === Oe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !al.isBatchingLegacy && (Up(), G0()));
    }
    function Rx(e, t, a) {
      var i = e.current;
      i.lanes = t, yu(e, t, a), Ya(e, a);
    }
    function Mx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & Fr) !== sr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      ey(e, t);
      var i = gs(e, e === Ca ? cr : H);
      if (i === H) {
        a !== null && fT(a), e.callbackNode = null, e.callbackPriority = St;
        return;
      }
      var u = On(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(al.current !== null && a !== BS)) {
        a == null && s !== Ue && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && fT(a);
      var f;
      if (u === Ue)
        e.tag === Lo ? (al.isBatchingLegacy !== null && (al.didScheduleLegacyUpdate = !0), JR(ZC.bind(null, e))) : W0(ZC.bind(null, e)), al.current !== null ? al.current.push(Oo) : rR(function() {
          (Et & (Fr | Di)) === sr && Oo();
        }), f = null;
      else {
        var p;
        switch (Rs(i)) {
          case gr:
            p = yc;
            break;
          case ar:
            p = ya;
            break;
          case Bi:
            p = yi;
            break;
          case Cs:
            p = wl;
            break;
          default:
            p = yi;
            break;
        }
        f = YS(p, XC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XC(e, t) {
      if (QM(), Hp = Zt, wm = H, (Et & (Fr | Di)) !== sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Uu();
      if (i && e.callbackNode !== a)
        return null;
      var u = gs(e, e === Ca ? cr : H);
      if (u === H)
        return null;
      var s = !Es(e, u) && !Fv(e, u) && !t, f = s ? zx(e, u) : bm(e, u);
      if (f !== zu) {
        if (f === Qs) {
          var p = Md(e);
          p !== H && (u = p, f = US(e, p));
        }
        if (f === Lp) {
          var v = zp;
          throw Gs(e, H), Yo(e, u), Ya(e, mn()), v;
        }
        if (f === _S)
          Yo(e, u);
        else {
          var y = !Es(e, u), g = e.current.alternate;
          if (y && !xx(g)) {
            if (f = bm(e, u), f === Qs) {
              var D = Md(e);
              D !== H && (u = D, f = US(e, D));
            }
            if (f === Lp) {
              var w = zp;
              throw Gs(e, H), Yo(e, u), Ya(e, mn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, wx(e, f, u);
        }
      }
      return Ya(e, mn()), e.callbackNode === a ? XC.bind(null, e) : null;
    }
    function US(e, t) {
      var a = jp;
      if (Vn(e)) {
        var i = Gs(e, t);
        i.flags |= Tn, QR(e.containerInfo);
      }
      var u = bm(e, t);
      if (u !== Qs) {
        var s = Ba;
        Ba = a, s !== null && KC(s);
      }
      return u;
    }
    function KC(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function wx(e, t, a) {
      switch (t) {
        case zu:
        case Lp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Qs: {
          qs(e, Ba, Au);
          break;
        }
        case Sm: {
          if (Yo(e, a), Vc(a) && // do not delay if we're inside an act() scope
          !dT()) {
            var i = NS + QC - mn();
            if (i > 10) {
              var u = gs(e, H);
              if (u !== H)
                break;
              var s = e.suspendedLanes;
              if (!mu(s, a)) {
                Ta(), _d(e, s);
                break;
              }
              e.timeoutHandle = zy(qs.bind(null, e, Ba, Au), i);
              break;
            }
          }
          qs(e, Ba, Au);
          break;
        }
        case Op: {
          if (Yo(e, a), Uv(a))
            break;
          if (!dT()) {
            var f = jv(e, a), p = f, v = mn() - p, y = $x(v) - v;
            if (y > 10) {
              e.timeoutHandle = zy(qs.bind(null, e, Ba, Au), y);
              break;
            }
          }
          qs(e, Ba, Au);
          break;
        }
        case $C: {
          qs(e, Ba, Au);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function xx(e) {
      for (var t = e; ; ) {
        if (t.flags & fs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & fs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = vo(t, Cm), t = vo(t, Ap), bd(e, t);
    }
    function ZC(e) {
      if (WM(), (Et & (Fr | Di)) !== sr)
        throw new Error("Should not already be working.");
      Uu();
      var t = gs(e, H);
      if (!ra(t, Ue))
        return Ya(e, mn()), null;
      var a = bm(e, t);
      if (e.tag !== Lo && a === Qs) {
        var i = Md(e);
        i !== H && (t = i, a = US(e, i));
      }
      if (a === Lp) {
        var u = zp;
        throw Gs(e, H), Yo(e, t), Ya(e, mn()), u;
      }
      if (a === _S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, qs(e, Ba, Au), Ya(e, mn()), null;
    }
    function Dx(e, t) {
      t !== H && (ho(e, et(t, Ue)), Ya(e, mn()), (Et & (Fr | Di)) === sr && (Up(), Oo()));
    }
    function FS(e, t) {
      var a = Et;
      Et |= YC;
      try {
        return e(t);
      } finally {
        Et = a, Et === sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !al.isBatchingLegacy && (Up(), G0());
      }
    }
    function bx(e, t, a, i, u) {
      var s = ja(), f = Ur.transition;
      try {
        return Ur.transition = null, Hn(gr), e(t, a, i, u);
      } finally {
        Hn(s), Ur.transition = f, Et === sr && Up();
      }
    }
    function ju(e) {
      Po !== null && Po.tag === Lo && (Et & (Fr | Di)) === sr && Uu();
      var t = Et;
      Et |= YC;
      var a = Ur.transition, i = ja();
      try {
        return Ur.transition = null, Hn(gr), e ? e() : void 0;
      } finally {
        Hn(i), Ur.transition = a, Et = t, (Et & (Fr | Di)) === sr && Oo();
      }
    }
    function JC() {
      return (Et & (Fr | Di)) !== sr;
    }
    function Dm(e, t) {
      ia(kS, Wl, e), Wl = et(Wl, t);
    }
    function IS(e) {
      Wl = kS.current, aa(kS, e);
    }
    function Gs(e, t) {
      e.finishedWork = null, e.finishedLanes = H;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, nR(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          bC(u, i), i = i.return;
        }
      Ca = e;
      var s = Xs(e.current, null);
      return kn = s, cr = Wl = t, fr = zu, zp = null, Em = H, Ap = H, Cm = H, jp = null, Ba = null, CM(), Xi.discardPendingWarnings(), s;
    }
    function eT(e, t) {
      do {
        var a = kn;
        try {
          if (Ah(), kE(), Cn(), bS.current = null, a === null || a.return === null) {
            fr = Lp, zp = t, kn = null;
            return;
          }
          if (tt && a.mode & Ae && pm(a, !0), yt)
            if (uu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ov(a, i, cr);
            } else
              Tc(a, t, cr);
          ZM(e, a.return, a, t, cr), aT(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function tT() {
      var e = DS.current;
      return DS.current = om, e === null ? om : e;
    }
    function nT(e) {
      DS.current = e;
    }
    function _x() {
      NS = mn();
    }
    function Vp(e) {
      Em = et(e, Em);
    }
    function kx() {
      fr === zu && (fr = Sm);
    }
    function HS() {
      (fr === zu || fr === Sm || fr === Qs) && (fr = Op), Ca !== null && (Ss(Em) || Ss(Ap)) && Yo(Ca, cr);
    }
    function Nx(e) {
      fr !== Op && (fr = Qs), jp === null ? jp = [e] : jp.push(e);
    }
    function Lx() {
      return fr === zu;
    }
    function bm(e, t) {
      var a = Et;
      Et |= Fr;
      var i = tT();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), Yc(e, t);
        }
        Au = Ld(), Gs(e, t);
      }
      ni(t);
      do
        try {
          Ox();
          break;
        } catch (s) {
          eT(e, s);
        }
      while (!0);
      if (Ah(), Et = a, nT(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oo(), Ca = null, cr = H, fr;
    }
    function Ox() {
      for (; kn !== null; )
        rT(kn);
    }
    function zx(e, t) {
      var a = Et;
      Et |= Fr;
      var i = tT();
      if (Ca !== e || cr !== t) {
        if (rr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, cr), u.clear()), Yc(e, t);
        }
        Au = Ld(), Up(), Gs(e, t);
      }
      ni(t);
      do
        try {
          Ax();
          break;
        } catch (s) {
          eT(e, s);
        }
      while (!0);
      return Ah(), nT(i), Et = a, kn !== null ? (vs(), zu) : (oo(), Ca = null, cr = H, fr);
    }
    function Ax() {
      for (; kn !== null && !mc(); )
        rT(kn);
    }
    function rT(e) {
      var t = e.alternate;
      Ht(e);
      var a;
      (e.mode & Ae) !== Oe ? (tS(e), a = VS(t, e, Wl), pm(e, !0)) : a = VS(t, e, Wl), Cn(), e.memoizedProps = e.pendingProps, a === null ? aT(e) : kn = a, bS.current = null;
    }
    function aT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & va) === _e) {
          Ht(t);
          var u = void 0;
          if ((t.mode & Ae) === Oe ? u = DC(a, t, Wl) : (tS(t), u = DC(a, t, Wl), pm(t, !1)), Cn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = kw(a, t);
          if (s !== null) {
            s.flags &= Mv, kn = s;
            return;
          }
          if ((t.mode & Ae) !== Oe) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= va, i.subtreeFlags = _e, i.deletions = null;
          else {
            fr = _S, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      fr === zu && (fr = $C);
    }
    function qs(e, t, a) {
      var i = ja(), u = Ur.transition;
      try {
        Ur.transition = null, Hn(gr), jx(e, t, a, i);
      } finally {
        Ur.transition = u, Hn(i);
      }
      return null;
    }
    function jx(e, t, a, i) {
      do
        Uu();
      while (Po !== null);
      if (Wx(), (Et & (Fr | Di)) !== sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Sc(s), u === null)
        return Sd(), null;
      if (s === H && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = H, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = St;
      var f = et(u.lanes, u.childLanes);
      kd(e, f), e === Ca && (Ca = null, kn = null, cr = H), ((u.subtreeFlags & La) !== _e || (u.flags & La) !== _e) && (Ws || (Ws = !0, zS = a, YS(yi, function() {
        return Uu(), null;
      })));
      var p = (u.subtreeFlags & (io | Jr | yr | La)) !== _e, v = (u.flags & (io | Jr | yr | La)) !== _e;
      if (p || v) {
        var y = Ur.transition;
        Ur.transition = null;
        var g = ja();
        Hn(gr);
        var D = Et;
        Et |= Di, bS.current = null, Aw(e, u), tC(), qw(e, u, s), q1(e.containerInfo), e.current = u, zv(s), Xw(u, e, s), uo(), Dv(), Et = D, Hn(g), Ur.transition = y;
      } else
        e.current = u, tC();
      var w = Ws;
      if (Ws ? (Ws = !1, Po = e, Fp = s) : (zf = 0, Mm = null), f = e.pendingLanes, f === H && (Of = null), w || oT(e.current, !1), Hi(u.stateNode, i), rr && e.memoizedUpdaters.clear(), hx(), Ya(e, mn()), t !== null)
        for (var L = e.onRecoverableError, z = 0; z < t.length; z++) {
          var F = t[z], pe = F.stack, Ne = F.digest;
          L(F.value, {
            componentStack: pe,
            digest: Ne
          });
        }
      if (Tm) {
        Tm = !1;
        var Re = LS;
        throw LS = null, Re;
      }
      return ra(Fp, Ue) && e.tag !== Lo && Uu(), f = e.pendingLanes, ra(f, Ue) ? ($M(), e === AS ? Ip++ : (Ip = 0, AS = e)) : Ip = 0, Oo(), Sd(), null;
    }
    function Uu() {
      if (Po !== null) {
        var e = Rs(Fp), t = iy(Bi, e), a = Ur.transition, i = ja();
        try {
          return Ur.transition = null, Hn(t), Fx();
        } finally {
          Hn(i), Ur.transition = a;
        }
      }
      return !1;
    }
    function Ux(e) {
      OS.push(e), Ws || (Ws = !0, YS(yi, function() {
        return Uu(), null;
      }));
    }
    function Fx() {
      if (Po === null)
        return !1;
      var e = zS;
      zS = null;
      var t = Po, a = Fp;
      if (Po = null, Fp = H, (Et & (Fr | Di)) !== sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Rm = !1, Av(a);
      var i = Et;
      Et |= Di, rx(t.current), Jw(t, t.current, a, e);
      {
        var u = OS;
        OS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Iw(t, f);
        }
      }
      ps(), oT(t.current, !0), Et = i, Oo(), Rm ? t === Mm ? zf++ : (zf = 0, Mm = t) : zf = 0, jS = !1, Rm = !1, Dl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function iT(e) {
      return Of !== null && Of.has(e);
    }
    function Ix(e) {
      Of === null ? Of = /* @__PURE__ */ new Set([e]) : Of.add(e);
    }
    function Hx(e) {
      Tm || (Tm = !0, LS = e);
    }
    var Vx = Hx;
    function lT(e, t, a) {
      var i = Ys(a, t), u = rC(e, i, Ue), s = Ao(e, u, Ue), f = Ta();
      s !== null && (yu(s, Ue, f), Ya(s, f));
    }
    function on(e, t, a) {
      if (Lw(a), Bp(!1), e.tag === Z) {
        lT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          lT(i, e, a);
          return;
        } else if (i.tag === ee) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !iT(s)) {
            var f = Ys(a, e), p = uS(i, f, Ue), v = Ao(i, p, Ue), y = Ta();
            v !== null && (yu(v, Ue, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Px(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      _d(e, a), Kx(e), Ca === e && mu(cr, a) && (fr === Op || fr === Sm && Vc(cr) && mn() - NS < QC ? Gs(e, H) : Cm = et(Cm, a)), Ya(e, u);
    }
    function uT(e, t) {
      t === St && (t = Tx(e));
      var a = Ta(), i = Va(e, t);
      i !== null && (yu(i, t, a), Ya(i, a));
    }
    function Bx(e) {
      var t = e.memoizedState, a = St;
      t !== null && (a = t.retryLane), uT(e, a);
    }
    function Yx(e, t) {
      var a = St, i;
      switch (e.tag) {
        case De:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), uT(e, a);
    }
    function $x(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : gx(e / 1960) * 1960;
    }
    function Qx() {
      if (Ip > Ex)
        throw Ip = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      zf > Cx && (zf = 0, Mm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Wx() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function oT(e, t) {
      Ht(e), _m(e, Zr, dx), t && _m(e, lu, px), _m(e, Zr, cx), t && _m(e, lu, fx), Cn();
    }
    function _m(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var km = null;
    function sT(e) {
      {
        if ((Et & Fr) !== sr || !(e.mode & ot))
          return;
        var t = e.tag;
        if (t !== Me && t !== Z && t !== ee && t !== he && t !== We && t !== it && t !== Ie)
          return;
        var a = $e(e) || "ReactComponent";
        if (km !== null) {
          if (km.has(a))
            return;
          km.add(a);
        } else
          km = /* @__PURE__ */ new Set([a]);
        var i = hn;
        try {
          Ht(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ht(e) : Cn();
        }
      }
    }
    var VS;
    {
      var Gx = null;
      VS = function(e, t, a) {
        var i = yT(Gx, t);
        try {
          return TC(e, t, a);
        } catch (s) {
          if (uM() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), kE(), bC(e, t), yT(t, i), t.mode & Ae && tS(t), iu(null, TC, null, e, t, a), Zm()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var cT = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function qx(e) {
      if (Wr && !PM())
        switch (e.tag) {
          case he:
          case We:
          case Ie: {
            var t = kn && $e(kn) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = $e(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ee: {
            cT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), cT = !0);
            break;
          }
        }
    }
    function Pp(e, t) {
      if (rr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Nd(e, i, t);
        });
      }
    }
    var BS = {};
    function YS(e, t) {
      {
        var a = al.current;
        return a !== null ? (a.push(t), BS) : hc(e, t);
      }
    }
    function fT(e) {
      if (e !== BS)
        return xv(e);
    }
    function dT() {
      return al.current !== null;
    }
    function Xx(e) {
      {
        if (e.mode & ot) {
          if (!BC())
            return;
        } else if (!yx() || Et !== sr || e.tag !== he && e.tag !== We && e.tag !== Ie)
          return;
        if (al.current === null) {
          var t = hn;
          try {
            Ht(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, $e(e));
          } finally {
            t ? Ht(e) : Cn();
          }
        }
      }
    }
    function Kx(e) {
      e.tag !== Lo && BC() && al.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Bp(e) {
      qC = e;
    }
    var bi = null, Af = null, Zx = function(e) {
      bi = e;
    };
    function jf(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return jf(e);
    }
    function QS(e) {
      {
        if (bi === null)
          return e;
        var t = bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = jf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: de,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function pT(e, t) {
      {
        if (bi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ee: {
            typeof i == "function" && (u = !0);
            break;
          }
          case he: {
            (typeof i == "function" || s === ke) && (u = !0);
            break;
          }
          case We: {
            (s === de || s === ke) && (u = !0);
            break;
          }
          case it:
          case Ie: {
            (s === Ze || s === ke) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = bi(a);
          if (f !== void 0 && f === bi(i))
            return !0;
        }
        return !1;
      }
    }
    function vT(e) {
      {
        if (bi === null || typeof WeakSet != "function")
          return;
        Af === null && (Af = /* @__PURE__ */ new WeakSet()), Af.add(e);
      }
    }
    var Jx = function(e, t) {
      {
        if (bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Uu(), ju(function() {
          WS(e.current, i, a);
        });
      }
    }, eD = function(e, t) {
      {
        if (e.context !== ai)
          return;
        Uu(), ju(function() {
          Yp(t, e, null, null);
        });
      }
    };
    function WS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case he:
          case Ie:
          case ee:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var D = bi(v);
          D !== void 0 && (a.has(D) ? g = !0 : t.has(D) && (f === ee ? g = !0 : y = !0));
        }
        if (Af !== null && (Af.has(e) || i !== null && Af.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, Ue);
          w !== null && dr(w, e, Ue, Zt);
        }
        u !== null && !g && WS(u, t, a), s !== null && WS(s, t, a);
      }
    }
    var tD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return GS(e.current, i, a), a;
      }
    };
    function GS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case he:
          case Ie:
          case ee:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? nD(e, a) : i !== null && GS(i, t, a), u !== null && GS(u, t, a);
      }
    }
    function nD(e, t) {
      {
        var a = rD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function rD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var qS;
    {
      qS = !1;
      try {
        var hT = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function aD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = H, this.childLanes = H, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new aD(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function iD(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function lD(e) {
      if (typeof e == "function")
        return XS(e) ? ee : he;
      if (e != null) {
        var t = e.$$typeof;
        if (t === de)
          return We;
        if (t === Ze)
          return it;
      }
      return Me;
    }
    function Xs(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & nr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Me:
        case he:
        case Ie:
          a.type = jf(e.type);
          break;
        case ee:
          a.type = $S(e.type);
          break;
        case We:
          a.type = QS(e.type);
          break;
      }
      return a;
    }
    function uD(e, t) {
      e.flags &= nr | rn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = H, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function oD(e, t, a) {
      var i;
      return e === Dh ? (i = ot, t === !0 && (i |= yn, i |= za)) : i = Oe, rr && (i |= Ae), ii(Z, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = Me, p = e;
      if (typeof e == "function")
        XS(e) ? (f = ee, p = $S(p)) : p = jf(p);
      else if (typeof e == "string")
        f = ue;
      else {
        e:
          switch (e) {
            case pa:
              return $o(a.children, u, s, t);
            case ci:
              f = st, u |= yn, (u & ot) !== Oe && (u |= za);
              break;
            case T:
              return sD(a, u, s, t);
            case qe:
              return cD(a, u, s, t);
            case gt:
              return fD(a, u, s, t);
            case en:
              return mT(a, u, s, t);
            case tr:
            case Nn:
            case fi:
            case Hu:
            case Jt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Y:
                    f = at;
                    break e;
                  case ne:
                    f = fn;
                    break e;
                  case de:
                    f = We, p = QS(p);
                    break e;
                  case Ze:
                    f = it;
                    break e;
                  case ke:
                    f = nn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? $e(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = ii(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = KS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = ii(Rt, e, i, t);
      return u.lanes = a, u;
    }
    function sD(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ii(ct, e, i, t | Ae);
      return u.elementType = T, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function cD(e, t, a, i) {
      var u = ii(De, e, i, t);
      return u.elementType = qe, u.lanes = a, u;
    }
    function fD(e, t, a, i) {
      var u = ii(_t, e, i, t);
      return u.elementType = gt, u.lanes = a, u;
    }
    function mT(e, t, a, i) {
      var u = ii(je, e, i, t);
      u.elementType = en, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ii(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function dD() {
      var e = ii(ue, null, null, Oe);
      return e.elementType = "DELETED", e;
    }
    function pD(e) {
      var t = ii(Qt, null, null, Oe);
      return t.stateNode = e, t;
    }
    function e0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ii(le, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function yT(e, t) {
      return e === null && (e = ii(Me, null, null, Oe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function vD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = St, this.eventTimes = Bc(H), this.expirationTimes = Bc(Zt), this.pendingLanes = H, this.suspendedLanes = H, this.pingedLanes = H, this.expiredLanes = H, this.mutableReadLanes = H, this.finishedLanes = H, this.entangledLanes = H, this.entanglements = Bc(H), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < ln; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Dh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function gT(e, t, a, i, u, s, f, p, v, y) {
      var g = new vD(e, t, a, p, v), D = oD(t, s);
      g.current = D, D.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = w;
      }
      return og(D), g;
    }
    var t0 = "18.2.0";
    function hD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Br(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var n0, r0;
    n0 = !1, r0 = {};
    function ST(e) {
      if (!e)
        return ai;
      var t = _a(e), a = ZR(t);
      if (t.tag === ee) {
        var i = t.type;
        if (Hl(i))
          return $0(t, i, a);
      }
      return a;
    }
    function mD(e, t) {
      {
        var a = _a(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Oa(a);
        if (u === null)
          return null;
        if (u.mode & yn) {
          var s = $e(a) || "Component";
          if (!r0[s]) {
            r0[s] = !0;
            var f = hn;
            try {
              Ht(u), a.mode & yn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ht(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function ET(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return gT(e, t, v, y, a, i, u, s, f);
    }
    function CT(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, D = gT(a, i, g, e, u, s, f, p, v);
      D.context = ST(null);
      var w = D.current, L = Ta(), z = Bo(w), F = Lu(L, z);
      return F.callback = t ?? null, Ao(w, F, z), Rx(D, z, L), D;
    }
    function Yp(e, t, a, i) {
      bv(t, e);
      var u = t.current, s = Ta(), f = Bo(u);
      ou(f);
      var p = ST(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && hn !== null && !n0 && (n0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, $e(hn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ao(u, v, f);
      return y !== null && (dr(y, u, f, s), Hh(y, u, f)), f;
    }
    function Nm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function yD(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (Vn(t)) {
            var a = ty(t);
            Dx(t, a);
          }
          break;
        }
        case De: {
          ju(function() {
            var u = Va(e, Ue);
            if (u !== null) {
              var s = Ta();
              dr(u, e, Ue, s);
            }
          });
          var i = Ue;
          a0(e, i);
          break;
        }
      }
    }
    function TT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hv(a.retryLane, t));
    }
    function a0(e, t) {
      TT(e, t);
      var a = e.alternate;
      a && TT(a, t);
    }
    function gD(e) {
      if (e.tag === De) {
        var t = so, a = Va(e, t);
        if (a !== null) {
          var i = Ta();
          dr(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function SD(e) {
      if (e.tag === De) {
        var t = Bo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ta();
          dr(a, e, t, i);
        }
        a0(e, t);
      }
    }
    function RT(e) {
      var t = wv(e);
      return t === null ? null : t.stateNode;
    }
    var MT = function(e) {
      return null;
    };
    function ED(e) {
      return MT(e);
    }
    var wT = function(e) {
      return !1;
    };
    function CD(e) {
      return wT(e);
    }
    var xT = null, DT = null, bT = null, _T = null, kT = null, NT = null, LT = null, OT = null, zT = null;
    {
      var AT = function(e, t, a) {
        var i = t[a], u = ht(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (ht(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AT(e[i], t, a + 1), u);
      }, jT = function(e, t) {
        return AT(e, t, 0);
      }, UT = function(e, t, a, i) {
        var u = t[i], s = ht(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ht(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = UT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, FT = function(e, t, a) {
        if (t.length !== a.length) {
          Xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UT(e, t, a, 0);
      }, IT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ht(e) ? e.slice() : lt({}, e);
        return s[u] = IT(e[u], t, a + 1, i), s;
      }, HT = function(e, t, a) {
        return IT(e, t, 0, a);
      }, i0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      xT = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = HT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Va(e, Ue);
          f !== null && dr(f, e, Ue, Zt);
        }
      }, DT = function(e, t, a) {
        var i = i0(e, t);
        if (i !== null) {
          var u = jT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = Va(e, Ue);
          s !== null && dr(s, e, Ue, Zt);
        }
      }, bT = function(e, t, a, i) {
        var u = i0(e, t);
        if (u !== null) {
          var s = FT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = Va(e, Ue);
          f !== null && dr(f, e, Ue, Zt);
        }
      }, _T = function(e, t, a) {
        e.pendingProps = HT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ue);
        i !== null && dr(i, e, Ue, Zt);
      }, kT = function(e, t) {
        e.pendingProps = jT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, Ue);
        a !== null && dr(a, e, Ue, Zt);
      }, NT = function(e, t, a) {
        e.pendingProps = FT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ue);
        i !== null && dr(i, e, Ue, Zt);
      }, LT = function(e) {
        var t = Va(e, Ue);
        t !== null && dr(t, e, Ue, Zt);
      }, OT = function(e) {
        MT = e;
      }, zT = function(e) {
        wT = e;
      };
    }
    function TD(e) {
      var t = Oa(e);
      return t === null ? null : t.stateNode;
    }
    function RD(e) {
      return null;
    }
    function MD() {
      return hn;
    }
    function wD(e) {
      var t = e.findFiberByHostInstance, a = j.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: xT,
        overrideHookStateDeletePath: DT,
        overrideHookStateRenamePath: bT,
        overrideProps: _T,
        overridePropsDeletePath: kT,
        overridePropsRenamePath: NT,
        setErrorHandler: OT,
        setSuspenseHandler: zT,
        scheduleUpdate: LT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: TD,
        findFiberByHostInstance: t || RD,
        // React Refresh
        findHostInstancesForRefresh: tD,
        scheduleRefresh: Jx,
        scheduleRoot: eD,
        setRefreshHandler: Zx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: MD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: t0
      });
    }
    var VT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function l0(e) {
      this._internalRoot = e;
    }
    Lm.prototype.render = l0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Om(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = RT(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yp(e, t, null, null);
    }, Lm.prototype.unmount = l0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        JC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ju(function() {
          Yp(null, e, null, null);
        }), H0(t);
      }
    };
    function xD(e, t) {
      if (!Om(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      PT(e);
      var a = !1, i = !1, u = "", s = VT;
      t != null && (t.hydrate ? Xe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === si && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = ET(e, Dh, null, a, i, u, s);
      Eh(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Zd(p), new l0(f);
    }
    function Lm(e) {
      this._internalRoot = e;
    }
    function DD(e) {
      e && Gv(e);
    }
    Lm.prototype.unstable_scheduleHydration = DD;
    function bD(e, t, a) {
      if (!Om(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      PT(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = VT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = CT(t, null, e, Dh, i, s, f, p, v);
      if (Eh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var D = u[g];
          jM(y, D);
        }
      return new Lm(y);
    }
    function Om(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ja || e.nodeType === Jl || !oe));
    }
    function $p(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Ja || e.nodeType === Jl || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function PT(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var _D = j.ReactCurrentOwner, BT;
    BT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = RT(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = u0(e), u = !!(i && ko(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function u0(e) {
      return e ? e.nodeType === Ja ? e.documentElement : e.firstChild : null;
    }
    function YT() {
    }
    function kD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Nm(f);
            s.call(w);
          };
        }
        var f = CT(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YT
        );
        e._reactRootContainer = f, Eh(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Zd(p), ju(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Nm(g);
            y.call(w);
          };
        }
        var g = ET(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YT
        );
        e._reactRootContainer = g, Eh(g.current, e);
        var D = e.nodeType === Ln ? e.parentNode : e;
        return Zd(D), ju(function() {
          Yp(t, g, a, i);
        }), g;
      }
    }
    function ND(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function zm(e, t, a, i, u) {
      BT(a), ND(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = kD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Nm(f);
            p.call(v);
          };
        }
        Yp(t, f, e, u);
      }
      return Nm(f);
    }
    function LD(e) {
      {
        var t = _D.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : mD(e, "findDOMNode");
    }
    function OD(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return zm(null, e, t, !0, a);
    }
    function zD(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return zm(null, e, t, !1, a);
    }
    function AD(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !cs(e))
        throw new Error("parentComponent must be a valid React Component");
      return zm(e, t, a, !1, i);
    }
    function jD(e) {
      if (!$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = u0(e), i = a && !ko(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ju(function() {
          zm(null, null, e, !1, function() {
            e._reactRootContainer = null, H0(e);
          });
        }), !0;
      } else {
        {
          var u = u0(e), s = !!(u && ko(u)), f = e.nodeType === qr && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    me(yD), Pv(gD), ws(SD), zd(ja), Yv(Ts), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tv(I1), cc(FS, bx, ju);
    function UD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Om(t))
        throw new Error("Target container is not a DOM element.");
      return hD(e, t, null, a);
    }
    function FD(e, t, a, i) {
      return AD(e, t, a, i);
    }
    var o0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ko, pf, Ch, sc, us, FS]
    };
    function ID(e, t) {
      return o0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), xD(e, t);
    }
    function HD(e, t, a) {
      return o0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bD(e, t, a);
    }
    function VD(e) {
      return JC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ju(e);
    }
    var PD = wD({
      findFiberByHostInstance: As,
      bundleType: 1,
      version: t0,
      rendererPackageName: "react-dom"
    });
    if (!PD && dn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var $T = window.location.protocol;
      /^(https?|file):$/.test($T) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + ($T === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0, Qa.createPortal = UD, Qa.createRoot = ID, Qa.findDOMNode = LD, Qa.flushSync = VD, Qa.hydrate = OD, Qa.hydrateRoot = HD, Qa.render = zD, Qa.unmountComponentAtNode = jD, Qa.unstable_batchedUpdates = FS, Qa.unstable_renderSubtreeIntoContainer = FD, Qa.version = t0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
(function(P) {
  function X() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X);
      } catch (j) {
        console.error(j);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (X(), P.exports = eb()) : P.exports = tb();
})(XD);
const nb = /* @__PURE__ */ r1(f0), Um = Symbol.for("r2wc.reactRender"), JT = Symbol.for("r2wc.shouldRender"), Am = Symbol.for("r2wc.root");
function rb(P = "") {
  return P.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ab(P = "") {
  return P.replace(/-([a-z0-9])/g, function(X) {
    return X[1].toUpperCase();
  });
}
var e1 = {
  expando: function(P, X, j) {
    Object.defineProperty(P, X, {
      enumerable: !0,
      get: function() {
        return j;
      },
      set: function(mt) {
        j = mt, this[Um]();
      }
    }), P[Um]();
  }
};
function ib(P, X, j, mt = {}) {
  var $t = {
    isConnected: "isConnected" in HTMLElement.prototype
  }, Xe = !1, S = function() {
    var ee = Reflect.construct(HTMLElement, arguments, this.constructor);
    return typeof mt.shadow == "string" ? ee.attachShadow({ mode: mt.shadow }) : mt.shadow && (console.warn(
      'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
    ), ee.attachShadow({ mode: "open" })), ee;
  }, vt = Object.create(HTMLElement.prototype);
  vt.constructor = S;
  var he = new Proxy(vt, {
    has: function(ee, Me) {
      return Me in P.propTypes || Me in vt;
    },
    set: function(ee, Me, Z, le) {
      return Xe && ($t[Me] = !0), typeof Me == "symbol" || $t[Me] || Me in ee ? (P.propTypes && Me in P.propTypes && e1.expando(le, Me, Z), Reflect.set(ee, Me, Z, le)) : (e1.expando(le, Me, Z), !0);
    },
    getOwnPropertyDescriptor: function(ee, Me) {
      var Z = Reflect.getOwnPropertyDescriptor(ee, Me);
      if (Z)
        return Z;
      if (Me in P.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0
        };
    }
  });
  return S.prototype = he, vt.connectedCallback = function() {
    this[JT] = !0, this[Um]();
  }, vt.disconnectedCallback = function() {
    typeof j.createRoot == "function" ? this[Am].unmount() : j.unmountComponentAtNode(this);
  }, vt[Um] = function() {
    if (this[JT] === !0) {
      var ee = {};
      Object.keys(this).forEach(function(le) {
        $t[le] !== !1 && (ee[le] = this[le]);
      }, this), Xe = !0;
      const Me = mt.shadow ? this.shadowRoot : this, Z = X.createElement(P, ee);
      typeof j.createRoot == "function" ? (this[Am] || (this[Am] = j.createRoot(Me)), this[Am].render(Z)) : j.render(Z, Me), Xe = !1;
    }
  }, P.propTypes && (S.observedAttributes = mt.dashStyleAttributes ? Object.keys(P.propTypes).map(function(ee) {
    return rb(ee);
  }) : Object.keys(P.propTypes), vt.attributeChangedCallback = function(ee, Me, Z) {
    var le = mt.dashStyleAttributes ? ab(ee) : ee;
    this[le] = Z;
  }), S;
}
var Wa = {}, lb = {
  get exports() {
    return Wa;
  },
  set exports(P) {
    Wa = P;
  }
}, Wp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function ub() {
  if (t1)
    return Wp;
  t1 = 1;
  var P = Qo, X = Symbol.for("react.element"), j = Symbol.for("react.fragment"), mt = Object.prototype.hasOwnProperty, $t = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(vt, he, ee) {
    var Me, Z = {}, le = null, ue = null;
    ee !== void 0 && (le = "" + ee), he.key !== void 0 && (le = "" + he.key), he.ref !== void 0 && (ue = he.ref);
    for (Me in he)
      mt.call(he, Me) && !Xe.hasOwnProperty(Me) && (Z[Me] = he[Me]);
    if (vt && vt.defaultProps)
      for (Me in he = vt.defaultProps, he)
        Z[Me] === void 0 && (Z[Me] = he[Me]);
    return { $$typeof: X, type: vt, key: le, ref: ue, props: Z, _owner: $t.current };
  }
  return Wp.Fragment = j, Wp.jsx = S, Wp.jsxs = S, Wp;
}
var Gp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function ob() {
  return n1 || (n1 = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Qo, X = Symbol.for("react.element"), j = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), $t = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), vt = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Ve = Symbol.iterator, Rt = "@@iterator";
    function st(T) {
      if (T === null || typeof T != "object")
        return null;
      var Y = Ve && T[Ve] || T[Rt];
      return typeof Y == "function" ? Y : null;
    }
    var fn = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(T) {
      {
        for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), de = 1; de < Y; de++)
          ne[de - 1] = arguments[de];
        We("error", T, ne);
      }
    }
    function We(T, Y, ne) {
      {
        var de = fn.ReactDebugCurrentFrame, qe = de.getStackAddendum();
        qe !== "" && (Y += "%s", ne = ne.concat([qe]));
        var gt = ne.map(function(Ze) {
          return String(Ze);
        });
        gt.unshift("Warning: " + Y), Function.prototype.apply.call(console[T], console, gt);
      }
    }
    var ct = !1, De = !1, it = !1, Ie = !1, nn = !1, wn;
    wn = Symbol.for("react.module.reference");
    function Qt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === mt || T === Xe || nn || T === $t || T === ee || T === Me || Ie || T === ue || ct || De || it || typeof T == "object" && T !== null && (T.$$typeof === le || T.$$typeof === Z || T.$$typeof === S || T.$$typeof === vt || T.$$typeof === he || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === wn || T.getModuleId !== void 0));
    }
    function _t(T, Y, ne) {
      var de = T.displayName;
      if (de)
        return de;
      var qe = Y.displayName || Y.name || "";
      return qe !== "" ? ne + "(" + qe + ")" : ne;
    }
    function En(T) {
      return T.displayName || "Context";
    }
    function je(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case mt:
          return "Fragment";
        case j:
          return "Portal";
        case Xe:
          return "Profiler";
        case $t:
          return "StrictMode";
        case ee:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case vt:
            var Y = T;
            return En(Y) + ".Consumer";
          case S:
            var ne = T;
            return En(ne._context) + ".Provider";
          case he:
            return _t(T, T.render, "ForwardRef");
          case Z:
            var de = T.displayName || null;
            return de !== null ? de : je(T.type) || "Memo";
          case le: {
            var qe = T, gt = qe._payload, Ze = qe._init;
            try {
              return je(Ze(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ke = Object.assign, At = 0, Mt, ye, J, we, R, B, oe;
    function Ye() {
    }
    Ye.__reactDisabledLog = !0;
    function Fe() {
      {
        if (At === 0) {
          Mt = console.log, ye = console.info, J = console.warn, we = console.error, R = console.group, B = console.groupCollapsed, oe = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        At++;
      }
    }
    function yt() {
      {
        if (At--, At === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, T, {
              value: Mt
            }),
            info: Ke({}, T, {
              value: ye
            }),
            warn: Ke({}, T, {
              value: J
            }),
            error: Ke({}, T, {
              value: we
            }),
            group: Ke({}, T, {
              value: R
            }),
            groupCollapsed: Ke({}, T, {
              value: B
            }),
            groupEnd: Ke({}, T, {
              value: oe
            })
          });
        }
        At < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var tt = fn.ReactCurrentDispatcher, ft;
    function nt(T, Y, ne) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (qe) {
            var de = qe.stack.trim().match(/\n( *(at )?)/);
            ft = de && de[1] || "";
          }
        return `
` + ft + T;
      }
    }
    var jt = !1, Hr;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      Hr = new pr();
    }
    function Vr(T, Y) {
      if (!T || jt)
        return "";
      {
        var ne = Hr.get(T);
        if (ne !== void 0)
          return ne;
      }
      var de;
      jt = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = tt.current, tt.current = null, Fe();
      try {
        if (Y) {
          var Ze = function() {
            throw Error();
          };
          if (Object.defineProperty(Ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ze, []);
            } catch (wt) {
              de = wt;
            }
            Reflect.construct(T, [], Ze);
          } else {
            try {
              Ze.call();
            } catch (wt) {
              de = wt;
            }
            T.call(Ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            de = wt;
          }
          T();
        }
      } catch (wt) {
        if (wt && de && typeof wt.stack == "string") {
          for (var ke = wt.stack.split(`
`), Nn = de.stack.split(`
`), Jt = ke.length - 1, en = Nn.length - 1; Jt >= 1 && en >= 0 && ke[Jt] !== Nn[en]; )
            en--;
          for (; Jt >= 1 && en >= 0; Jt--, en--)
            if (ke[Jt] !== Nn[en]) {
              if (Jt !== 1 || en !== 1)
                do
                  if (Jt--, en--, en < 0 || ke[Jt] !== Nn[en]) {
                    var tr = `
` + ke[Jt].replace(" at new ", " at ");
                    return T.displayName && tr.includes("<anonymous>") && (tr = tr.replace("<anonymous>", T.displayName)), typeof T == "function" && Hr.set(T, tr), tr;
                  }
                while (Jt >= 1 && en >= 0);
              break;
            }
        }
      } finally {
        jt = !1, tt.current = gt, yt(), Error.prepareStackTrace = qe;
      }
      var fi = T ? T.displayName || T.name : "", Hu = fi ? nt(fi) : "";
      return typeof T == "function" && Hr.set(T, Hu), Hu;
    }
    function dn(T, Y, ne) {
      return Vr(T, !1);
    }
    function Yn(T) {
      var Y = T.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function jn(T, Y, ne) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Vr(T, Yn(T));
      if (typeof T == "string")
        return nt(T);
      switch (T) {
        case ee:
          return nt("Suspense");
        case Me:
          return nt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case he:
            return dn(T.render);
          case Z:
            return jn(T.type, Y, ne);
          case le: {
            var de = T, qe = de._payload, gt = de._init;
            try {
              return jn(gt(qe), Y, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, xn = {}, Pr = fn.ReactDebugCurrentFrame;
    function Br(T) {
      if (T) {
        var Y = T._owner, ne = jn(T.type, T._source, Y ? Y.type : null);
        Pr.setExtraStackFrame(ne);
      } else
        Pr.setExtraStackFrame(null);
    }
    function $n(T, Y, ne, de, qe) {
      {
        var gt = Function.call.bind(Un);
        for (var Ze in T)
          if (gt(T, Ze)) {
            var ke = void 0;
            try {
              if (typeof T[Ze] != "function") {
                var Nn = Error((de || "React class") + ": " + ne + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              ke = T[Ze](Y, Ze, de, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Jt) {
              ke = Jt;
            }
            ke && !(ke instanceof Error) && (Br(qe), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", ne, Ze, typeof ke), Br(null)), ke instanceof Error && !(ke.message in xn) && (xn[ke.message] = !0, Br(qe), at("Failed %s type: %s", ne, ke.message), Br(null));
          }
      }
    }
    var vr = Array.isArray;
    function Yr(T) {
      return vr(T);
    }
    function hr(T) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ne = Y && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ne;
      }
    }
    function sa(T) {
      try {
        return er(T), !1;
      } catch {
        return !0;
      }
    }
    function er(T) {
      return "" + T;
    }
    function $r(T) {
      if (sa(T))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(T)), er(T);
    }
    var pn = fn.ReactCurrentOwner, Mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ui, ca, te;
    te = {};
    function xe(T) {
      if (Un.call(T, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function rt(T) {
      if (Un.call(T, "key")) {
        var Y = Object.getOwnPropertyDescriptor(T, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Ot(T, Y) {
      if (typeof T.ref == "string" && pn.current && Y && pn.current.stateNode !== Y) {
        var ne = je(pn.current.type);
        te[ne] || (at('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', je(pn.current.type), T.ref), te[ne] = !0);
      }
    }
    function Ut(T, Y) {
      {
        var ne = function() {
          ui || (ui = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Dn(T, Y) {
      {
        var ne = function() {
          ca || (ca = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var vn = function(T, Y, ne, de, qe, gt, Ze) {
      var ke = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: T,
        key: Y,
        ref: ne,
        props: Ze,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return ke._store = {}, Object.defineProperty(ke._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ke, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(ke, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(ke.props), Object.freeze(ke)), ke;
    };
    function mr(T, Y, ne, de, qe) {
      {
        var gt, Ze = {}, ke = null, Nn = null;
        ne !== void 0 && ($r(ne), ke = "" + ne), rt(Y) && ($r(Y.key), ke = "" + Y.key), xe(Y) && (Nn = Y.ref, Ot(Y, qe));
        for (gt in Y)
          Un.call(Y, gt) && !Mr.hasOwnProperty(gt) && (Ze[gt] = Y[gt]);
        if (T && T.defaultProps) {
          var Jt = T.defaultProps;
          for (gt in Jt)
            Ze[gt] === void 0 && (Ze[gt] = Jt[gt]);
        }
        if (ke || Nn) {
          var en = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          ke && Ut(Ze, en), Nn && Dn(Ze, en);
        }
        return vn(T, ke, Nn, qe, de, pn.current, Ze);
      }
    }
    var Bt = fn.ReactCurrentOwner, wr = fn.ReactDebugCurrentFrame;
    function Ft(T) {
      if (T) {
        var Y = T._owner, ne = jn(T.type, T._source, Y ? Y.type : null);
        wr.setExtraStackFrame(ne);
      } else
        wr.setExtraStackFrame(null);
    }
    var It;
    It = !1;
    function Ga(T) {
      return typeof T == "object" && T !== null && T.$$typeof === X;
    }
    function wa() {
      {
        if (Bt.current) {
          var T = je(Bt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function il(T) {
      {
        if (T !== void 0) {
          var Y = T.fileName.replace(/^.*[\\\/]/, ""), ne = T.lineNumber;
          return `

Check your code at ` + Y + ":" + ne + ".";
        }
        return "";
      }
    }
    var ql = {};
    function Iu(T) {
      {
        var Y = wa();
        if (!Y) {
          var ne = typeof T == "string" ? T : T.displayName || T.name;
          ne && (Y = `

Check the top-level render call using <` + ne + ">.");
        }
        return Y;
      }
    }
    function _i(T, Y) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ne = Iu(Y);
        if (ql[ne])
          return;
        ql[ne] = !0;
        var de = "";
        T && T._owner && T._owner !== Bt.current && (de = " It was passed a child from " + je(T._owner.type) + "."), Ft(T), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, de), Ft(null);
      }
    }
    function ll(T, Y) {
      {
        if (typeof T != "object")
          return;
        if (Yr(T))
          for (var ne = 0; ne < T.length; ne++) {
            var de = T[ne];
            Ga(de) && _i(de, Y);
          }
        else if (Ga(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var qe = st(T);
          if (typeof qe == "function" && qe !== T.entries)
            for (var gt = qe.call(T), Ze; !(Ze = gt.next()).done; )
              Ga(Ze.value) && _i(Ze.value, Y);
        }
      }
    }
    function fa(T) {
      {
        var Y = T.type;
        if (Y == null || typeof Y == "string")
          return;
        var ne;
        if (typeof Y == "function")
          ne = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === he || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === Z))
          ne = Y.propTypes;
        else
          return;
        if (ne) {
          var de = je(Y);
          $n(ne, T.props, "prop", de, T);
        } else if (Y.PropTypes !== void 0 && !It) {
          It = !0;
          var qe = je(Y);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oi(T) {
      {
        for (var Y = Object.keys(T.props), ne = 0; ne < Y.length; ne++) {
          var de = Y[ne];
          if (de !== "children" && de !== "key") {
            Ft(T), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Ft(null);
            break;
          }
        }
        T.ref !== null && (Ft(T), at("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    function da(T, Y, ne, de, qe, gt) {
      {
        var Ze = Qt(T);
        if (!Ze) {
          var ke = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (ke += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = il(qe);
          Nn ? ke += Nn : ke += wa();
          var Jt;
          T === null ? Jt = "null" : Yr(T) ? Jt = "array" : T !== void 0 && T.$$typeof === X ? (Jt = "<" + (je(T.type) || "Unknown") + " />", ke = " Did you accidentally export a JSX literal instead of a component?") : Jt = typeof T, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Jt, ke);
        }
        var en = mr(T, Y, ne, qe, gt);
        if (en == null)
          return en;
        if (Ze) {
          var tr = Y.children;
          if (tr !== void 0)
            if (de)
              if (Yr(tr)) {
                for (var fi = 0; fi < tr.length; fi++)
                  ll(tr[fi], T);
                Object.freeze && Object.freeze(tr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ll(tr, T);
        }
        return T === mt ? oi(en) : fa(en), en;
      }
    }
    function si(T, Y, ne) {
      return da(T, Y, ne, !0);
    }
    function xr(T, Y, ne) {
      return da(T, Y, ne, !1);
    }
    var pa = xr, ci = si;
    Gp.Fragment = mt, Gp.jsx = pa, Gp.jsxs = ci;
  }()), Gp;
}
(function(P) {
  process.env.NODE_ENV === "production" ? P.exports = ub() : P.exports = ob();
})(lb);
const sb = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjM1LjkzIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjU2IDIyOCI+PHBhdGggZmlsbD0iIzAwRDhGRiIgZD0iTTIxMC40ODMgNzMuODI0YTE3MS40OSAxNzEuNDkgMCAwIDAtOC4yNC0yLjU5N2MuNDY1LTEuOS44OTMtMy43NzcgMS4yNzMtNS42MjFjNi4yMzgtMzAuMjgxIDIuMTYtNTQuNjc2LTExLjc2OS02Mi43MDhjLTEzLjM1NS03LjctMzUuMTk2LjMyOS01Ny4yNTQgMTkuNTI2YTE3MS4yMyAxNzEuMjMgMCAwIDAtNi4zNzUgNS44NDhhMTU1Ljg2NiAxNTUuODY2IDAgMCAwLTQuMjQxLTMuOTE3QzEwMC43NTkgMy44MjkgNzcuNTg3LTQuODIyIDYzLjY3MyAzLjIzM0M1MC4zMyAxMC45NTcgNDYuMzc5IDMzLjg5IDUxLjk5NSA2Mi41ODhhMTcwLjk3NCAxNzAuOTc0IDAgMCAwIDEuODkyIDguNDhjLTMuMjguOTMyLTYuNDQ1IDEuOTI0LTkuNDc0IDIuOThDMTcuMzA5IDgzLjQ5OCAwIDk4LjMwNyAwIDExMy42NjhjMCAxNS44NjUgMTguNTgyIDMxLjc3OCA0Ni44MTIgNDEuNDI3YTE0NS41MiAxNDUuNTIgMCAwIDAgNi45MjEgMi4xNjVhMTY3LjQ2NyAxNjcuNDY3IDAgMCAwLTIuMDEgOS4xMzhjLTUuMzU0IDI4LjItMS4xNzMgNTAuNTkxIDEyLjEzNCA1OC4yNjZjMTMuNzQ0IDcuOTI2IDM2LjgxMi0uMjIgNTkuMjczLTE5Ljg1NWExNDUuNTY3IDE0NS41NjcgMCAwIDAgNS4zNDItNC45MjNhMTY4LjA2NCAxNjguMDY0IDAgMCAwIDYuOTIgNi4zMTRjMjEuNzU4IDE4LjcyMiA0My4yNDYgMjYuMjgyIDU2LjU0IDE4LjU4NmMxMy43MzEtNy45NDkgMTguMTk0LTMyLjAwMyAxMi40LTYxLjI2OGExNDUuMDE2IDE0NS4wMTYgMCAwIDAtMS41MzUtNi44NDJjMS42Mi0uNDggMy4yMS0uOTc0IDQuNzYtMS40ODhjMjkuMzQ4LTkuNzIzIDQ4LjQ0My0yNS40NDMgNDguNDQzLTQxLjUyYzAtMTUuNDE3LTE3Ljg2OC0zMC4zMjYtNDUuNTE3LTM5Ljg0NFptLTYuMzY1IDcwLjk4NGMtMS40LjQ2My0yLjgzNi45MS00LjMgMS4zNDVjLTMuMjQtMTAuMjU3LTcuNjEyLTIxLjE2My0xMi45NjMtMzIuNDMyYzUuMTA2LTExIDkuMzEtMjEuNzY3IDEyLjQ1OS0zMS45NTdjMi42MTkuNzU4IDUuMTYgMS41NTcgNy42MSAyLjRjMjMuNjkgOC4xNTYgMzguMTQgMjAuMjEzIDM4LjE0IDI5LjUwNGMwIDkuODk2LTE1LjYwNiAyMi43NDMtNDAuOTQ2IDMxLjE0Wm0tMTAuNTE0IDIwLjgzNGMyLjU2MiAxMi45NCAyLjkyNyAyNC42NCAxLjIzIDMzLjc4N2MtMS41MjQgOC4yMTktNC41OSAxMy42OTgtOC4zODIgMTUuODkzYy04LjA2NyA0LjY3LTI1LjMyLTEuNC00My45MjctMTcuNDEyYTE1Ni43MjYgMTU2LjcyNiAwIDAgMS02LjQzNy01Ljg3YzcuMjE0LTcuODg5IDE0LjQyMy0xNy4wNiAyMS40NTktMjcuMjQ2YzEyLjM3Ni0xLjA5OCAyNC4wNjgtMi44OTQgMzQuNjcxLTUuMzQ1YTEzNC4xNyAxMzQuMTcgMCAwIDEgMS4zODYgNi4xOTNaTTg3LjI3NiAyMTQuNTE1Yy03Ljg4MiAyLjc4My0xNC4xNiAyLjg2My0xNy45NTUuNjc1Yy04LjA3NS00LjY1Ny0xMS40MzItMjIuNjM2LTYuODUzLTQ2Ljc1MmExNTYuOTIzIDE1Ni45MjMgMCAwIDEgMS44NjktOC40OTljMTAuNDg2IDIuMzIgMjIuMDkzIDMuOTg4IDM0LjQ5OCA0Ljk5NGM3LjA4NCA5Ljk2NyAxNC41MDEgMTkuMTI4IDIxLjk3NiAyNy4xNWExMzQuNjY4IDEzNC42NjggMCAwIDEtNC44NzcgNC40OTJjLTkuOTMzIDguNjgyLTE5Ljg4NiAxNC44NDItMjguNjU4IDE3Ljk0Wk01MC4zNSAxNDQuNzQ3Yy0xMi40ODMtNC4yNjctMjIuNzkyLTkuODEyLTI5Ljg1OC0xNS44NjNjLTYuMzUtNS40MzctOS41NTUtMTAuODM2LTkuNTU1LTE1LjIxNmMwLTkuMzIyIDEzLjg5Ny0yMS4yMTIgMzcuMDc2LTI5LjI5M2MyLjgxMy0uOTggNS43NTctMS45MDUgOC44MTItMi43NzNjMy4yMDQgMTAuNDIgNy40MDYgMjEuMzE1IDEyLjQ3NyAzMi4zMzJjLTUuMTM3IDExLjE4LTkuMzk5IDIyLjI0OS0xMi42MzQgMzIuNzkyYTEzNC43MTggMTM0LjcxOCAwIDAgMS02LjMxOC0xLjk3OVptMTIuMzc4LTg0LjI2Yy00LjgxMS0yNC41ODctMS42MTYtNDMuMTM0IDYuNDI1LTQ3Ljc4OWM4LjU2NC00Ljk1OCAyNy41MDIgMi4xMTEgNDcuNDYzIDE5LjgzNWExNDQuMzE4IDE0NC4zMTggMCAwIDEgMy44NDEgMy41NDVjLTcuNDM4IDcuOTg3LTE0Ljc4NyAxNy4wOC0yMS44MDggMjYuOTg4Yy0xMi4wNCAxLjExNi0yMy41NjUgMi45MDgtMzQuMTYxIDUuMzA5YTE2MC4zNDIgMTYwLjM0MiAwIDAgMS0xLjc2LTcuODg3Wm0xMTAuNDI3IDI3LjI2OGEzNDcuOCAzNDcuOCAwIDAgMC03Ljc4NS0xMi44MDNjOC4xNjggMS4wMzMgMTUuOTk0IDIuNDA0IDIzLjM0MyA0LjA4Yy0yLjIwNiA3LjA3Mi00Ljk1NiAxNC40NjUtOC4xOTMgMjIuMDQ1YTM4MS4xNTEgMzgxLjE1MSAwIDAgMC03LjM2NS0xMy4zMjJabS00NS4wMzItNDMuODYxYzUuMDQ0IDUuNDY1IDEwLjA5NiAxMS41NjYgMTUuMDY1IDE4LjE4NmEzMjIuMDQgMzIyLjA0IDAgMCAwLTMwLjI1Ny0uMDA2YzQuOTc0LTYuNTU5IDEwLjA2OS0xMi42NTIgMTUuMTkyLTE4LjE4Wk04Mi44MDIgODcuODNhMzIzLjE2NyAzMjMuMTY3IDAgMCAwLTcuMjI3IDEzLjIzOGMtMy4xODQtNy41NTMtNS45MDktMTQuOTgtOC4xMzQtMjIuMTUyYzcuMzA0LTEuNjM0IDE1LjA5My0yLjk3IDIzLjIwOS0zLjk4NGEzMjEuNTI0IDMyMS41MjQgMCAwIDAtNy44NDggMTIuODk3Wm04LjA4MSA2NS4zNTJjLTguMzg1LS45MzYtMTYuMjkxLTIuMjAzLTIzLjU5My0zLjc5M2MyLjI2LTcuMyA1LjA0NS0xNC44ODUgOC4yOTgtMjIuNmEzMjEuMTg3IDMyMS4xODcgMCAwIDAgNy4yNTcgMTMuMjQ2YzIuNTk0IDQuNDggNS4yOCA4Ljg2OCA4LjAzOCAxMy4xNDdabTM3LjU0MiAzMS4wM2MtNS4xODQtNS41OTItMTAuMzU0LTExLjc3OS0xNS40MDMtMTguNDMzYzQuOTAyLjE5MiA5Ljg5OS4yOSAxNC45NzguMjljNS4yMTggMCAxMC4zNzYtLjExNyAxNS40NTMtLjM0M2MtNC45ODUgNi43NzQtMTAuMDE4IDEyLjk3LTE1LjAyOCAxOC40ODZabTUyLjE5OC01Ny44MTdjMy40MjIgNy44IDYuMzA2IDE1LjM0NSA4LjU5NiAyMi41MmMtNy40MjIgMS42OTQtMTUuNDM2IDMuMDU4LTIzLjg4IDQuMDcxYTM4Mi40MTcgMzgyLjQxNyAwIDAgMCA3Ljg1OS0xMy4wMjZhMzQ3LjQwMyAzNDcuNDAzIDAgMCAwIDcuNDI1LTEzLjU2NVptLTE2Ljg5OCA4LjEwMWEzNTguNTU3IDM1OC41NTcgMCAwIDEtMTIuMjgxIDE5LjgxNWEzMjkuNCAzMjkuNCAwIDAgMS0yMy40NDQuODIzYy03Ljk2NyAwLTE1LjcxNi0uMjQ4LTIzLjE3OC0uNzMyYTMxMC4yMDIgMzEwLjIwMiAwIDAgMS0xMi41MTMtMTkuODQ2aC4wMDFhMzA3LjQxIDMwNy40MSAwIDAgMS0xMC45MjMtMjAuNjI3YTMxMC4yNzggMzEwLjI3OCAwIDAgMSAxMC44OS0yMC42MzdsLS4wMDEuMDAxYTMwNy4zMTggMzA3LjMxOCAwIDAgMSAxMi40MTMtMTkuNzYxYzcuNjEzLS41NzYgMTUuNDItLjg3NiAyMy4zMS0uODc2SDEyOGM3LjkyNiAwIDE1Ljc0My4zMDMgMjMuMzU0Ljg4M2EzMjkuMzU3IDMyOS4zNTcgMCAwIDEgMTIuMzM1IDE5LjY5NWEzNTguNDg5IDM1OC40ODkgMCAwIDEgMTEuMDM2IDIwLjU0YTMyOS40NzIgMzI5LjQ3MiAwIDAgMS0xMSAyMC43MjJabTIyLjU2LTEyMi4xMjRjOC41NzIgNC45NDQgMTEuOTA2IDI0Ljg4MSA2LjUyIDUxLjAyNmMtLjM0NCAxLjY2OC0uNzMgMy4zNjctMS4xNSA1LjA5Yy0xMC42MjItMi40NTItMjIuMTU1LTQuMjc1LTM0LjIzLTUuNDA4Yy03LjAzNC0xMC4wMTctMTQuMzIzLTE5LjEyNC0yMS42NC0yNy4wMDhhMTYwLjc4OSAxNjAuNzg5IDAgMCAxIDUuODg4LTUuNGMxOC45LTE2LjQ0NyAzNi41NjQtMjIuOTQxIDQ0LjYxMi0xOC4zWk0xMjggOTAuODA4YzEyLjYyNSAwIDIyLjg2IDEwLjIzNSAyMi44NiAyMi44NnMtMTAuMjM1IDIyLjg2LTIyLjg2IDIyLjg2cy0yMi44Ni0xMC4yMzUtMjIuODYtMjIuODZzMTAuMjM1LTIyLjg2IDIyLjg2LTIyLjg2WiI+PC9wYXRoPjwvc3ZnPg==";
function cb() {
  const [P, X] = Qo.useState(0);
  return /* @__PURE__ */ Wa.jsxs("div", { className: "App", children: [
    /* @__PURE__ */ Wa.jsxs("div", { children: [
      /* @__PURE__ */ Wa.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ Wa.jsx("img", { src: "/vite.svg", className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ Wa.jsx("a", { href: "https://reactjs.org", target: "_blank", children: /* @__PURE__ */ Wa.jsx("img", { src: sb, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ Wa.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ Wa.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ Wa.jsxs("button", { onClick: () => X((j) => j + 1), children: [
        "count is ",
        P
      ] }),
      /* @__PURE__ */ Wa.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ Wa.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ Wa.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
const fb = ib(cb, qD, nb);
customElements.define("my-custom-element", fb);
