import { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "../../context/filtrosContext";
import Filtros from "./components/Filtros";
import ListaPeliculas from "./components/ListaPeliculas";
import Paginacion from "./components/Paginacion";
import { consultarPeliculas } from "../../helpers/helpers";
import { useParams } from "react-router-dom";

const PagPrincipal = () => {
  const [peliculas, setPeliculas] = useState([]);

  const { pagina, setPagina, filtro, setFiltro, buscar, setBuscar, categoria, setCategoria } =
    useContext(FiltrosContext);

  const params = useParams();
    useEffect(() => {
      if(params.filtro){
        setBuscar("")
        setFiltro(params.filtro)
        setPagina(params.numero)
      }
      if(params.nombre && !parseInt(params.nombre)){
        setFiltro("")
        setBuscar(params.nombre)
        setPagina(params.numero)
      }else {
        setFiltro("")
        setBuscar("")
        setCategoria(params.nombre)
        setPagina(params.numero)
      }
    }, []);

  // Ejecuta consultarPeliculas cuando se cambia el state buscar, el de categoria o el de filtro
  useEffect(() => {
    consultarPeliculas(
      buscar,
      categoria,
      pagina,
      setPeliculas,
      filtro
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [filtro, buscar, categoria, pagina]);

  // Scrollea arriba de la pagina cada vez que se cambia de nro pagina
  // useEffect(() => {
  //   consultarPeliculas(
  //     buscar,
  //     categoria,
  //     pagina,
  //     setPagina,
  //     setPeliculas,
  //     filtro
  //   );
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, [pagina]);

  return (
    <main id="pagPrincipal">
      <Filtros />
      <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
      <Paginacion></Paginacion>
    </main>
  );
};

export default PagPrincipal;
