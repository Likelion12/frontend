import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
