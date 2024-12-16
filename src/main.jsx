import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { HistoryProvider } from "./context/HistoryContext.jsx";
createRoot(document.getElementById("root")).render(
  <HistoryProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HistoryProvider>
);
