import { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "../../context/filtrosContext";
import Filtros from "./components/Filtros";
import ListaPeliculas from "./components/ListaPeliculas";
import Paginacion from "./components/Paginacion";
import { consultarPeliculas } from "../../helpers/helpers";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);

  const { pagina, setPagina, filtro, buscar, categoria } =
    useContext(FiltrosContext);

  // Ejecuta la peticion para traer las peliculas
  useEffect(() => {
    consultarPeliculas(
      buscar,
      categoria,
      pagina,
      setPagina,
      setPeliculas,
      filtro
    );
  }, []);

  // Ejecuta consultarPeliculas cuando se cambia el state buscar, el de categoria o el de filtro
  useEffect(() => {
    consultarPeliculas(
      buscar,
      categoria,
      pagina,
      setPagina,
      setPeliculas,
      filtro
    );
  }, [buscar, categoria, filtro]);

  // Scrollea arriba de la pagina cada vez que se cambia de nro pagina
  useEffect(() => {
    consultarPeliculas(
      buscar,
      categoria,
      pagina,
      setPagina,
      setPeliculas,
      filtro
    );
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
