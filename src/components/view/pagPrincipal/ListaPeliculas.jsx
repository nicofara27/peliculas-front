import { Row } from "antd";
import React from "react";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ peliculas }) => {
  return (
    <section id="listaPeliculas">
      <Row justify="space-between" gutter={[0, 32]}>
        {peliculas.map((pelicula) => (
          <CardPelicula key={pelicula.id} pelicula={pelicula}></CardPelicula>
        ))}
      </Row>
    </section>
  );
};

export default ListaPeliculas;
