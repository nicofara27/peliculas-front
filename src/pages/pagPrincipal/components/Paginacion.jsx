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
