import React from "react";
import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

export function Editar() {
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

  /* list movie */

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filme/list")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed: ${response.status}`);
        }
      })
      .then((data) => {
        setFilmes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [editingMovie, setEditingMovie] = useState(null);
  const [tituloEdit, setTituloEdit] = useState("");
  const [descricaoEdit, setDescricaoEdit] = useState("");
  const [fotoEdit, setFotoEdit] = useState("");
  const [generoEdit, setGeneroEdit] = useState("");
  const [movieIdEdit, setMovieIdEdit] = useState("");

  // Function to handle the edit button click
  const handleEditClick = (filme) => {
    setEditingMovie(filme);

    setMovieIdEdit(filme.id);
    setTituloEdit(filme.titulo);
    setDescricaoEdit(filme.descricao);
    setFotoEdit(filme.foto);
    setGeneroEdit(filme.genero);
  };

  // Function to handle the form submit event
  const handleEditSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/filme/update/${movieIdEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: tituloEdit,
        descricao: descricaoEdit,
        foto: fotoEdit,
        genero: generoEdit,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error(error));

    setEditingMovie(null);
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
          marginTop: "2rem",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h1
              className="text-center"
              style={{ color: "rgb(197, 197, 197)", marginTop: "0.8rem" }}
            >
              Listar Filmes
            </h1>
          </div>
          <hr style={{ color: "white" }} />
        </div>

        <table className="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Poster</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descricao</th>
              <th scope="col">Genero</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {filmes.map((filme) => (
              <tr key={filme.id}>
                <th scope="row">{filme.id}</th>
                <td>
                  <img
                    src={filme.foto}
                    alt="poster"
                    width="50"
                    height="70"
                    style={{ borderRadius: "8px" }}
                  />
                </td>
                <td style={{ minWidth: "10rem" }}>{filme.titulo}</td>
                <td>{filme.descricao}</td>
                <td>{filme.Genero.descricao}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editMovie"
                    onClick={() => handleEditClick(filme)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="editMovie"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form onSubmit={handleEditSubmit}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit movie
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Title"
                    defaultValue={editingMovie ? editingMovie.titulo : ""}
                    value={tituloEdit}
                    onChange={(event) => setTituloEdit(event.target.value)}
                    name="titulo"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="descricao"
                    value={descricaoEdit}
                    onChange={(event) => setDescricaoEdit(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="URL da foto"
                    name="foto"
                    defaultValue={editingMovie ? editingMovie.foto : ""}
                    value={fotoEdit}
                    onChange={(event) => setFotoEdit(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    id="genero"
                    name="genero"
                    defaultValue={editingMovie ? editingMovie.Genero.id : ""}
                    value={generoEdit}
                    onChange={(event) => setGeneroEdit(event.target.value)}
                  >
                    <option selected>Choose...</option>
                    {generos.map((genero) => (
                      <option key={genero.id} value={genero.id}>
                        {genero.descricao}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
