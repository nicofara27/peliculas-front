import { useContext } from "react";
import { FiltrosContext } from "../../../context/filtrosContext";
import { Col, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import FiltrosOTitulo from "./FiltrosOTitulo";

const Filtros = () => {
  const { filtro, setFiltro, setBuscar, setCategoria, setPagina, pagina } =
    useContext(FiltrosContext);
  const navigate = useNavigate();

  // Funcion para cambiar los filtros de la lista de peliculas e ir a la primera pagina de la lista
  const cambiarFiltro = (e) => {
    setPagina(1);
    setCategoria("");
    setBuscar("");
    let id = e.target.id;
    if (id !== filtro) {
      setFiltro(e.target.id);
    }
    navigate(`/${e.target.id}/1`);
  };

  //Funcion para buscar una pelicula en particular e ir a la primera pagina de la lista
  const buscarPelicula = (nombre) => {
    if (nombre !== "") {
      navigate(`/buscar/${nombre}/${pagina}`);
      setBuscar(nombre);
      setPagina(1);
    }
  };

  return (
    <section>
      <Row justify={"space-between"}>
        <FiltrosOTitulo cambiarFiltro={cambiarFiltro} />
        <Col xs={24} lg={8} id="buscadorContainer">
          <Input.Search
            placeholder="Buscar por nombre de pelicula"
            onSearch={buscarPelicula}
            style={{
              width: 300,
              height: "100%",
            }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Filtros;
