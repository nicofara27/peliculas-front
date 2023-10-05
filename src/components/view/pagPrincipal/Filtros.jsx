import { useContext } from "react";
import { FiltrosContext } from "../../../context/filtrosContext";
import { Col, Input, Radio, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Filtros = () => {
  const {
    filtro,
    setFiltro,
    setBuscar,
    buscar,
    setCategoria,
    setPagina,
    pagina,
  } = useContext(FiltrosContext);
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

  // Condicional que maqueta la lista de flitros o el nombre de la pelicula buscada
  const componenteCondicional =
    buscar === "" ? (
      <Col>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button
            value="a"
            id="popular"
            onClick={(e) => cambiarFiltro(e)}
          >
            Popular
          </Radio.Button>
          <Radio.Button
            value="b"
            id="now_playing"
            onClick={(e) => cambiarFiltro(e)}
          >
            Ahora en cines
          </Radio.Button>
          <Radio.Button
            value="c"
            id="top_rated"
            onClick={(e) => cambiarFiltro(e)}
          >
            Mejores votadas
          </Radio.Button>
          <Radio.Button
            value="d"
            id="upcoming"
            onClick={(e) => cambiarFiltro(e)}
          >
            Proximas
          </Radio.Button>
        </Radio.Group>
      </Col>
    ) : (
      <Col>
        <h1 id="filtrosTitulo">Resultados para: {buscar}</h1>
      </Col>
    );

  return (
    <section>
      <Row justify={"space-between"}>
        {componenteCondicional}
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
