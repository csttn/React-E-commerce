import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorkerRegistration from "./serviceWorker/serviceWorkerRegistration";
import reportWebVitals from "./serviceWorker/reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
