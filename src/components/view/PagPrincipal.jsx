import React from "react";
import Filtros from "../pagPrincipal/Filtros";
import ListaPeliculas from "../pagPrincipal/ListaPeliculas";
import Paginacion from "../pagPrincipal/Paginacion";

const PagPrincipal = () => {
  return (
    <main id="pagPrincipal">
      <Filtros></Filtros>
      <ListaPeliculas></ListaPeliculas>
      <Paginacion></Paginacion>
    </main>
  );
};

export default PagPrincipal;
