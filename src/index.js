import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";

import { useTranslation } from "react-i18next";
//import { Suspense } from "react";
import "./i18n";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
