import React from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ display: "flex", flex: "20%", maxWidth: "20%" }}
    >
      <span className="fs-4">
        <Link to="/" className="text-white text-decoration-none">
          Admin Panel
        </Link>
      </span>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Criar Filmes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/list">
            Listar Filmes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Editar">
            Editar Filmes
          </Link>
        </li>
      </ul>
    </div>
  );
}
