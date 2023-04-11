import React, { useEffect, useState } from "react";
import Actores from "../pagPelicula/Actores";
import Descripcion from "../pagPelicula/Descripcion";
import Galeria from "../pagPelicula/Galeria";
import { useParams } from "react-router-dom";

const PagPelicula = () => {
  const [pelicula, setPelicula] = useState([]);
  const [imagenFondo, setImagenFondo] = useState("");

  let id = useParams();
  const fondo = {
    backgroundImage: `url('${imagenFondo}')`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  let consultarPelicula = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}?api_key=04a9c758263cb0d57addf6f08ffb1202`
      );
      const datos = await respuesta.json();
      setPelicula(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarPelicula();
  }, []);

  useEffect(() => {
    setImagenFondo(
      `https://image.tmdb.org/t/p/w1280${pelicula.backdrop_path}`
      );
  }, [pelicula]);

  return (
    <main id="pagPelicula" style={fondo}>
      <Descripcion pelicula={pelicula}></Descripcion>
      <Actores pelicula={pelicula}></Actores>
      <Galeria pelicula={pelicula}></Galeria>
    </main>
  );
};

export default PagPelicula;
