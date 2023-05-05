import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

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
      .then((data) => console.log(data))
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
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ display: "flex", flex: "20%", minWidth: "20%" }}
      >
        <span className="fs-4">Dashboard</span>

        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/jpedro058.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>jpedro058</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link to="/" className="dropdown-item">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: "80%",
          minWidth: "80%",
          minHeight: "100vh",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="row">
            <div className="col-12">
              <h1
                className="text-center"
                style={{ color: "rgb(197, 197, 197)", marginTop: "1rem" }}
              >
                Admin Panel
              </h1>
            </div>
          </div>

          <div className="col-12">
            <form action="/filme/create" method="POST" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ color: "white" }}>
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  name="titulo"
                  placeholder="Title"
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
                  placeholder="descrição"
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

          <hr style={{ color: "white" }} />

          <table className="table" style={{ color: "white" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
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
                  <td>{filme.titulo}</td>
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
                        onChange={(event) =>
                          setDescricaoEdit(event.target.value)
                        }
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
                        defaultValue={
                          editingMovie ? editingMovie.Genero.id : ""
                        }
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
                      onClick={() => window.location.reload()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* function to list the movies */

export default Admin;
