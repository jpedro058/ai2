import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <style>
        {`
      body {
        background-color: rgb(23, 23, 23) !important;
      }

      ::placeholder {
        color: white !important;
      }

      li a:hover {
        background-color: rgb(54, 54, 54) !important;
      }
      `}
      </style>

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light text-white"
        style={{ backgroundColor: "rgb(23, 23, 23)" }}
      >
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(23, 23, 23)" }}
        >
          <a className="navbar-brand text-white" href="#">
            MOVIES COOL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ backgroundColor: "rgb(23, 23, 23)" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Popular
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul
                  className="dropdown-menu text-white"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "rgb(23, 23, 23)" }}
                >
                  <li>
                    <a className="dropdown-item text-white" href="#ACTION">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#HORROR">
                      Horror
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider text-white bg-white" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Everything
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <Link
                to="/admin"
                style={{
                  textDecoration: "none",
                  border: "1px solid blue",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingInline: "1rem",
                  borderRadius: "5px",
                  marginleft: "0.5rem",
                }}
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form action="/admin">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login Form
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
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item active ratio ratio-16x9 text-white"
            data-bs-interval="10000"
            style={{ height: "75vh", minWidth: "100%" }}
          >
            <img
              src="https://cdn.maioresemelhores.com/imagens/melhores-filmes-atuais-og.jpg"
              className="d-block text-white"
              alt="..."
              style={{ maxHeight: "75vh", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block text-white"
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <h5
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "5rem",
                  fontWeight: "bold",
                  marginTop: "-2rem",
                  backgroundColor: "rgba(61, 61, 61, 0.813)",
                  width: "35rem",
                  top: "0",
                  marginLeft: "-7rem",
                  paddingRight: " 1rem",
                  borderRadius: "20px",
                }}
              >
                Spider-Man
              </h5>
            </div>
          </div>
          <div
            className="carousel-item active ratio ratio-16x9 text-white"
            data-bs-interval="10000"
            style={{ height: "75vh", minWidth: "100%" }}
          >
            <img
              src="https://tm.ibxk.com.br/2021/12/30/30155501249046.jpg?ims=1120x420"
              className="d-block"
              alt="..."
              style={{ maxHeight: "75vh", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                color: "white",
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <h5
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "5rem",
                  fontWeight: "bold",
                  marginTop: "-2rem",
                  backgroundColor: " rgba(61, 61, 61, 0.813)",
                  width: "25rem",
                  top: "0",
                  marginLeft: "-2rem",
                  paddingRight: "1rem",
                  borderRadius: "20px",
                }}
              >
                Scream 5
              </h5>
            </div>
          </div>
          <div
            className="carousel-item active ratio ratio-16x9"
            data-bs-interval="10000"
            style={{ height: "75vh", minWidth: "100%" }}
          >
            <img
              src="https://www.nit.pt/wp-content/uploads/2022/09/c3c5d6b552348ef1cea46a8281fbe702-754x394.jpg"
              className="d-block"
              alt="..."
              style={{ maxHeight: "75vh", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                color: "white",
                position: "absolute",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <h5
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "5rem",
                  fontWeight: "bold",
                  marginTop: "-2rem",
                  backgroundColor: "rgba(61, 61, 61, 0.813)",
                  width: "25rem",
                  top: "0",
                  marginLeft: "-11rem",
                  paddingRight: "1rem",
                  borderRadius: "20px",
                }}
              >
                Smile
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev text-white"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-white"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-white">Previous</span>
        </button>
        <button
          className="carousel-control-next text-white"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon text-white"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden text-white">Next</span>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBlock: "1rem 3rem",
          marginTop: "3rem",
        }}
        id="ACTION"
      >
        <h4 style={{ marginLeft: "3rem", color: "white" }}>Action</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBlock: "1rem 3rem",
            marginInline: "3rem",
          }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top ratio ratio-1x1"
              src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
              alt="Card image cap"
              style={{ maxHeight: "30vh", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Lucifer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top ratio ratio-1x1"
              src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
              alt="Card image cap"
              style={{ maxHeight: "30v", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Lucifer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top ratio ratio-1x1"
              src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
              alt="Card image cap"
              style={{ maxHeight: "30vh", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Lucifer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top ratio ratio-1x1"
              src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
              alt="Card image cap"
              style={{ maxHeight: "30vh", objecFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Lucifer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "5rem" }} id="HORROR">
        <hr style={{ width: "97%", color: "white", marginLeft: "1rem" }} />
        <h4 style={{ marginLeft: "3rem", color: "white" }}>Horror</h4>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <div
          id="carouselExampleControls"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card-wrapper container-sm d-flex justify-content-around">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card-wrapper container-sm d-flex justify-content-around">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objecFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card-wrapper container-sm d-flex justify-content-around">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top ratio ratio-1x1"
                    src="https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw"
                    alt="Card image cap"
                    style={{ maxHeight: "30vh", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lucifer</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      ></script>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted" style={{ color: "white" }}>
            © 2021 Company, Inc
          </p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></a>

          <ul className="nav col-md-4 justify-content-end text-white">
            <li className="nav-item text-white">
              <a href="#" className="nav-link px-2 text-muted text-white">
                <p style={{ color: "white" }}>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted text-white">
                <p style={{ color: "white" }}>Features</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                <p style={{ color: "white" }}>Pricing</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                <p style={{ color: "white" }}>FAQs</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                <p style={{ color: "white" }}>About</p>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
