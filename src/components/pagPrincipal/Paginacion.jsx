import { Pagination } from "antd";
import React, { useState } from "react";

const Paginacion = ({ pagina, setPagina }) => {
  return (
    <section id="paginacion">
      <Pagination
        total={200}
        current={pagina}
        showSizeChanger={false}
        onChange={(pag) => setPagina(pag)}
      />
    </section>
  );
};

export default Paginacion;
