// main.jsx is the entry point of react here 


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SocketProvider } from "./context/SocketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SocketProvider>
      <App />
    </SocketProvider>
  </BrowserRouter>
);
