import MyApp, { j as jsxRuntimeExports } from './__federation_expose_MyApp-bd4484d7.js';
import { r as reactDomExports } from './index-938c67f9.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(MyApp, {})
);
