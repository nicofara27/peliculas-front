import { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "../../context/filtrosContext";
import Filtros from "./components/Filtros";
import ListaPeliculas from "./components/ListaPeliculas";
import Paginacion from "./components/Paginacion";
import { consultarPeliculas } from "../../helpers/helpers";
import { useParams } from "react-router-dom";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);

  const { pagina, filtro, buscar, categoria } = useContext(FiltrosContext);

  useEffect(() => {
    consultarPeliculas(buscar, categoria, pagina, setPeliculas, filtro);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [filtro, buscar, categoria, pagina]);

  return (
    <main id="pagPrincipal">
      <Filtros />
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion></Paginacion>
    </main>
  );
};

export default PagPrincipal;
