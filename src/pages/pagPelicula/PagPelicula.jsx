import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actores from "./components/Actores";
import Descripcion from "./components/Descripcion";
import Galeria from "./components/Galeria";
import {
  consultarActores,
  consultarImagenes,
  consultarPelicula,
} from "../../helpers/helpers";

const PagPelicula = () => {
  const [pelicula, setPelicula] = useState([]);
  const [actores, setActores] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [imagenesUrl, setImagenesUrl] = useState([]);
  const [imagenFondo, setImagenFondo] = useState("");
  
  let id = useParams();
  // Estilo para la imagen de fondo
  const fondo = {
    backgroundImage: `url('${imagenFondo}')`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  // Ejecuta las solicitudes API cuando carga la pagina
  useEffect(() => {
    consultarPelicula(setPelicula, id);
    consultarActores(setActores, id);
    consultarImagenes(setImagenes, id);
  }, []);

  // Establece el link de la imagen de fondo cuando se actualiza el estado pelicula
  useEffect(() => {
    setImagenFondo(`https://image.tmdb.org/t/p/w1280${pelicula.backdrop_path}`);
  }, [pelicula]);

  // Establece el state con las imagenes para el carousel
  useEffect(() => {
    let listaImagenes = imagenes.map((imagen) => {
      return {
        original: `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${imagen.file_path}`,
        thumbnail: `https://www.themoviedb.org/t/p/w185${imagen.file_path}`,
      };
    });
    setImagenesUrl(listaImagenes);
  }, [imagenes]);

  return (
    <main id="pagPelicula" style={fondo}>
      <Descripcion pelicula={pelicula}></Descripcion>
      <Actores actores={actores}></Actores>
      <Galeria imagenes={imagenesUrl}></Galeria>
    </main>
  );
};

export default PagPelicula;
