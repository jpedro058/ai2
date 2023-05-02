import { Link } from "react-router-dom";

function Admin() {
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
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Dashboard</span>
        </a>
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
          <div className="row">
            <div className="col-12">
              <form action="" method="post">
                <div className="mb-3">
                  <label
                    htmlFor="title"
                    className="form-label"
                    style={{ color: "white" }}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="director"
                    className="form-label"
                    style={{ color: "white" }}
                  >
                    Discricao
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="director"
                    name="director"
                    placeholder="Director"
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
                    id="director"
                    name="director"
                    placeholder="URL da foto"
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
                  <input
                    type="text"
                    className="form-control"
                    id="genre"
                    name="genre"
                    placeholder="Genre"
                  />
                </div>
                <button className="btn btn-primary" style={{ color: "white" }}>
                  Create
                </button>
              </form>
            </div>
          </div>

          <hr style={{ color: "white" }} />

          <table className="table" style={{ color: "white" }}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Year</th>
                <th scope="col">Genre</th>
                <th scope="col">Director</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Smile</td>
                <td>2010</td>
                <td>Horro</td>
                <td>Arlindo Calça Fina</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid green",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#editMovie"
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid red",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Avatar</td>
                <td>2000</td>
                <td>Action</td>
                <td>Arlindo Calça Fina</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid green",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#editMovie"
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid red",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Spider-Man</td>
                <td>2000</td>
                <td>Action</td>
                <td>Arlindo Calça Fina</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid green",
                      color: "white",
                      borderRadius: "5px",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#editMovie"
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid red",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div
            className="modal fade"
            id="editMovie"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <form action="admin.html">
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
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Genre"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
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

export default Admin;
