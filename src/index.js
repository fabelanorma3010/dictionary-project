import { strictMode } from "react";
import { CreateRoot } from "react-dom/client";
import "./index.css";
import App from ". /App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
