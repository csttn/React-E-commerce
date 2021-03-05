import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

import { BrowserRouter } from "react-router-dom";

import * as serviceWorkerRegistration from "./serviceWorker/serviceWorkerRegistration";
import reportWebVitals from "./serviceWorker/reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorkerRegistration.unregister();

reportWebVitals();
