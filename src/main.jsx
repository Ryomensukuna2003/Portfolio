import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

if (!window.__greeted) {
  window.__greeted = true;
  const big = "color:#ff6a43;font:600 14px/1.4 ui-monospace,monospace;";
  const dim = "color:#a1a1aa;font:12px/1.5 ui-monospace,monospace;";
  console.log("%cHey, curious dev. 👋", big);
  console.log(
    "%cIf you found this, you probably like building things too.\nDrop me a line: mshivanshu1264@gmail.com",
    dim,
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
