import React from "react";
import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import Card from "react-bootstrap/Card";

export function List() {
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
              Listar Filmes
            </h1>
          </div>
          <hr style={{ color: "white" }} />
        </div>

        <div
          className="container gap-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "1rem",
            marginBottom: "3rem",
          }}
        >
          {filmes.map((filme) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img src={filme.foto} style={{ maxHeight: "22rem" }} />
              <Card.Body>
                <Card.Title>
                  <h2>{filme.titulo}</h2>
                </Card.Title>
                <Card.Text>
                  <p> {filme.descricao}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
