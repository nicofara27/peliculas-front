import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Paginacion = ({ pagina, setPagina }) => {
  const navigate = useNavigate();

  // Funcion para cambiar de pagina
  const cambiarPagina = (pag) => {
    setPagina(pag);
    navigate(`/pagina/${pag}`);
  };

  // Condicional que cambia a la pagina numero 1 de la lista de peliculas cuando se navega hacia la pagina principal
  if (window.location.href === "http://localhost:3000/") {
    setPagina(1);
  }
  return (
    <section id="paginacion">
      <Pagination
        total={200}
        current={pagina}
        showSizeChanger={false}
        onChange={cambiarPagina}
      />
    </section>
  );
};

export default Paginacion;
