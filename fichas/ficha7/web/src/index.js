import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Criar from "./views/Criar";
import { Editar } from "./views/Editar";
import { List } from "./views/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Criar} />
        <Route path="/List" Component={List} />
        <Route path="/Editar" Component={Editar} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
