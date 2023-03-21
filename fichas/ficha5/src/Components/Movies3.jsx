import React from "react";
import MovieCard from "./MovieCard";

class Movies3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [
        {
          id: 1,

          url: "https://picsum.photos/200/300",
        },
        {
          id: 2,

          url: "https://picsum.photos/200/300",
        },
        {
          id: 3,

          url: "https://picsum.photos/200/300",
        },
      ],
    };
  }

  render() {
    const detalhe = "Esta é a minha primeira lista de filmes";
    return (
      <div>
        <h1>Lista de Filmes</h1>
        {this.state.pictures.map((pictures) => (
          <MovieCard key={pictures.id} src={pictures.url}>
            Titulo
          </MovieCard>
        ))}
      </div>
    );
  }
}
export default Movies3;
