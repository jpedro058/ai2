import React from "react";

class Movies2 extends React.Component {
  render() {
    const detalhe = "Esta é a minha primeira lista de filmes";
    return (
      <div>
        <h1>Lista de Filmes - Props</h1>
        <Detalhe titulo="lista de filmes" value={"ola"}>
          <p>{detalhe.descricao}</p>
        </Detalhe>
      </div>
    );
  }
}

function Detalhe(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>

      {props.children}
    </div>
  );
}

export default Movies2;
