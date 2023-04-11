import { Row } from "antd";
import React from "react";
import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({peliculas}) => {  
  return (
    <section id="peliculas">
      <Row justify="space-between"  gutter={[8, 40]}>
      {peliculas.map((pelicula)=><CardPelicula key={pelicula.id} pelicula={pelicula}></CardPelicula>)}    
      </Row>
    </section>
  );
};

export default ListaPeliculas;
