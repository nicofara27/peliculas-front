import React, { useEffect, useState } from "react";
import Filtros from "./pagPrincipal/Filtros";
import ListaPeliculas from "./pagPrincipal/ListaPeliculas";
import Paginacion from "./pagPrincipal/Paginacion";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [filtro, setFiltro] = useState("popular");
  const [buscar, setBuscar] = useState("");

  // Peticion que trae la lista de peliculas buscadas s el state buscar tiene algun valor, en cambio trae la lista de peliculas completa si esta vacio
  const consultarPeliculas = async () => {
    try {
      let respuesta = "";
      if (buscar === "") {
        respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/${filtro}?api_key=04a9c758263cb0d57addf6f08ffb1202&page=${pagina}`
        );
      } else {
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

  // Cuando se cambia el state filtro el state buscar(nombre de pelicula a buscar) se borra y se oculta el nombre del titulo de la pelicula y aparecen los filtros de nuevo
  useEffect(() => {
    setBuscar("");
    consultarPeliculas();
  }, [filtro]);
  // Ejecuta consultarPeliculas cuando se cambia el state buscar
  useEffect(() => {
    consultarPeliculas();
  }, [buscar]);

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
      <Filtros
        filtro={filtro}
        setFiltro={setFiltro}
        setBuscar={setBuscar}
        buscar={buscar}
        setPagina={setPagina}
        pagina={pagina}
      ></Filtros>
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        buscar={buscar}
      ></Paginacion>
    </main>
  );
};

export default PagPrincipal;
