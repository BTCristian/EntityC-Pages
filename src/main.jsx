import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesComponent from "./routes/routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesComponent />
  </StrictMode>
);
