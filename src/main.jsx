import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/caveat-brush";
import "@fontsource-variable/merienda";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
