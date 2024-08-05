import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";

// 개발 환경에서만 MSW를 시작합니다.
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

// rootElement를 정의하고 ReactDOM.createRoot를 사용하여 렌더링합니다.
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals를 설정합니다.
reportWebVitals();
