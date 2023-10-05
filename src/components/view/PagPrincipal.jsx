import { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "../../context/filtrosContext";
import Filtros from "./pagPrincipal/Filtros";
import ListaPeliculas from "./pagPrincipal/ListaPeliculas";
import Paginacion from "./pagPrincipal/Paginacion";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);

  const { pagina, setPagina, filtro, buscar, setBuscar, categoria } =
    useContext(FiltrosContext);

  const consultarPeliculas = async () => {
    try {
      let respuesta = "";
      if (buscar === "" && categoria === "") {
        respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`
        );
      } else if (categoria !== "" && buscar === "") {
        setPagina(1);
        respuesta = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}&with_genres=${categoria}`
        );
      } else {
        setPagina(1);
        respuesta = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}&query=${buscar}`
        );
      }
      const lista = await respuesta.json();
      setPeliculas(lista.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Ejecuta la peticion para traer las peliculas
  useEffect(() => {
    consultarPeliculas();
  }, []);


  // Ejecuta consultarPeliculas cuando se cambia el state buscar, el de categoria o el de filtro
  useEffect(() => {
    consultarPeliculas();
  }, [buscar, categoria, filtro]);

  // Scrollea arriba de la pagina cada vez que se cambia de nro pagina
  useEffect(() => {
    consultarPeliculas();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pagina]);

  return (
    <main id="pagPrincipal">
      <Filtros />
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion></Paginacion>
    </main>
  );
};

export default PagPrincipal;
