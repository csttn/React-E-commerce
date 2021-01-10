import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorker/serviceWorkerRegistration";
import reportWebVitals from "./serviceWorker/reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.unregister();

reportWebVitals();
