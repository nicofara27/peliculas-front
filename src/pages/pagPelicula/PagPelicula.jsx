import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Actores from "./components/Actores";
import Descripcion from "./components/Descripcion";
import Galeria from "./components/Galeria";

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

  // Funcion para traer los datos de cada peliculas
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

  // Funcion para traer la lista de actores de cada pelicula
  const consultarActores = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=04a9c758263cb0d57addf6f08ffb1202`
      );
      const actores = await respuesta.json();
      setActores(actores.cast);
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para traer la lista de imagenes para cada pelicula
  const consultarImagenes = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/images?api_key=04a9c758263cb0d57addf6f08ffb1202`
      );
      const imagenes = await respuesta.json();
      setImagenes(imagenes.backdrops);
    } catch (error) {
      console.log(error);
    }
  };

  // Ejecuta las solicitudes API cuando carga la pagina
  useEffect(() => {
    consultarPelicula();
    consultarActores();
    consultarImagenes();
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
