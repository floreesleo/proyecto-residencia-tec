import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importación de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importación de react-router-dom
import { BrowserRouter } from "react-router-dom";

// Importaciones de Supabase
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./supabase/client.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
