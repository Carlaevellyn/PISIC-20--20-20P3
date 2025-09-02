import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")!;

// In development, check if root already exists to prevent duplicate createRoot calls
if (import.meta.env.DEV) {
  // Use a custom property to track if root has been created
  if (!(container as any)._reactRoot) {
    (container as any)._reactRoot = createRoot(container);
  }
  (container as any)._reactRoot.render(<App />);
} else {
  // In production, just create the root normally
  createRoot(container).render(<App />);
}
