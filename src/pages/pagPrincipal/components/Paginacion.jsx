import { useContext } from "react";
import { FiltrosContext } from "../../../context/filtrosContext";
import { Pagination } from "antd";
import { useNavigate } from "react-router-dom";

const Paginacion = () => {
  const { pagina, setPagina, buscar, categoria, filtro } =
    useContext(FiltrosContext);
  const navigate = useNavigate();

  // Funcion para cambiar de pagina
  const cambiarPagina = (pag) => {
    if (buscar === "" && categoria === "") {
      setPagina(pag);
      navigate(`/${filtro}/${pag}`);
    } else if (categoria !== "" && buscar === "") {
      setPagina(pag);
      navigate(`/categoria/${categoria}/${pag}`);
    } else {
      setPagina(pag);
      navigate(`/buscar/${buscar}/${pag}`);
    }
  };

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
