import { Row } from "antd";
import React from "react";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = () => {
  return (
    <section id="peliculas">
      <Row justify="space-between" gutter={[8, 40]}>
        <CardPelicula></CardPelicula>
        <CardPelicula></CardPelicula>
        <CardPelicula></CardPelicula>
        <CardPelicula></CardPelicula>
        <CardPelicula></CardPelicula>
        <CardPelicula></CardPelicula>
      </Row>
    </section>
  );
};

export default ListaPeliculas;
