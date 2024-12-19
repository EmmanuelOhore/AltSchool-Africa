import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import TodoProvider from "./utlis/context.jsx";
import ErrorBoundary from "./components/errorBoundary/errorBoundary.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </TodoProvider>
    </BrowserRouter>
  </StrictMode>
);
