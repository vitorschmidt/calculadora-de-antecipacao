import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CalculatorProvider } from "./providers/calculator";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </React.StrictMode>
  </BrowserRouter>
);
