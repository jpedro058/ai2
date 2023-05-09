import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

function Admin() {
  /* set generos */
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/genero/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed: ${response.status}`);
        }
      })
      .then((data) => {
        setGeneros(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /* create movie */
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/filme/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo,
        descricao,
        foto,
        genero,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(39, 39, 39)",
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h1
              className="text-center"
              style={{ color: "rgb(197, 197, 197)", marginTop: "0.8rem" }}
            >
              Admin Panel
            </h1>
          </div>
          <hr style={{ color: "white" }} />
        </div>

        <div className="col-12">
          <form action="/filme/create" method="POST" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ color: "white" }}>
                Titulo
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                name="titulo"
                placeholder="Titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="director"
                className="form-label"
                style={{ color: "white" }}
              >
                Descricao
              </label>
              <input
                type="text"
                className="form-control"
                id="descricao"
                name="descricao"
                placeholder="Descrição"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="director"
                className="form-label"
                style={{ color: "white" }}
              >
                Foto
              </label>
              <input
                type="text"
                className="form-control"
                id="foto"
                name="foto"
                placeholder="URL da foto"
                value={foto}
                onChange={(event) => setFoto(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="genre"
                className="form-label"
                style={{ color: "white" }}
              >
                Genre
              </label>
              <select
                className="form-select"
                id="genero"
                name="genero"
                value={genero}
                onChange={(event) => setGenero(event.target.value)}
              >
                <option selected>Choose...</option>
                {generos.map((genero) => (
                  <option key={genero.id} value={genero.id}>
                    {genero.descricao}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ color: "white" }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* function to list the movies */

export default Admin;
