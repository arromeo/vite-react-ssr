import { hydrateRoot } from "react-dom/client";
import App from "./App.js";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("Could not render application...");
}

hydrateRoot(appElement, <App />);
