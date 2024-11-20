import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // id si root olan elemanı al ve onun içerisine App yaz demek bu
  <StrictMode>
    <App />
  </StrictMode>
);
