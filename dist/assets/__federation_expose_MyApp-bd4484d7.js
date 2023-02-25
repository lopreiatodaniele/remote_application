import { r as reactExports } from './index-6898aa5e.js';
import { importShared } from './__federation_fn_import.js';

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const {useState} = await importShared('react');

const Button = () => {
  const [state, setState] = useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "THIS IS A BUTTON IN THE REMOTE APPLICATION" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        id: "click-btn",
        className: "shared-btn",
        onClick: () => setState((s) => s + 1),
        children: [
          "CLICK ME: ",
          state
        ]
      }
    )
  ] });
};

const index = '';

function MyApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "remote_app", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "THIS IS THE REMOTE APPLICATION" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {})
  ] });
}

export { MyApp as default, jsxRuntimeExports as j };
