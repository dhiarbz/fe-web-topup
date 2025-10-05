import { createRoot } from "react-dom/client";
import App from "./App";
// Import global CSS styles
import "@/globals.css";

createRoot(document.getElementById("root")!).render(<App />);