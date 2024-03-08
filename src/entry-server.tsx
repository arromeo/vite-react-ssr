import { renderToPipeableStream } from "react-dom/server";
import App from "./App.js";

export function render() {
  return renderToPipeableStream(<App />);
}
