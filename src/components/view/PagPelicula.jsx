import React from "react";
import Actores from "../pagPelicula/Actores";
import Descripcion from "../pagPelicula/Descripcion";
import Galeria from "../pagPelicula/Galeria";

const PagPelicula = () => {
  const fondo = {
    backgroundImage:
      'url("https://image.tmdb.org/t/p/w1280/a2tys4sD7xzVaogPntGsT1ypVoT.jpg")',
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    // animation: 'fade-in-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'

  };
  return (
    <main id="pagPelicula" style={fondo} >
      <Descripcion></Descripcion>
      <Actores></Actores>
      <Galeria></Galeria>
    </main>
  );
};

export default PagPelicula;
