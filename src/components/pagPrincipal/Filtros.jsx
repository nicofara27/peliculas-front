import { Col, Input, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Filtros = ({filtro, setFiltro, setBuscar, buscar, setPagina, pagina }) => {
  const navigate = useNavigate();

  // Funcion para cambiar los filtros de la lista de peliculas e ir a la primera pagina de la lista
  const cambiarFiltro = (e) => {
    let id = e.target.id;
    if(id!==filtro) {
      setFiltro(e.target.id);
      setPagina(1)
    }
  }

  //Funcion para buscar una pelicula en particular e ir a la primera pagina de la lista
  const buscarPelicula = (nombre) => {
    if(nombre!=="") {
      navigate(`/buscar/${nombre}/${pagina}`)
      setBuscar(nombre);
      setPagina(1)
    }
  }

  // Condicional que borra el state de la pelicula buscada cuando se redirige a la pagina principal
  if(window.location.href==="http://localhost:3000/") {
    setBuscar("")
  }

  const componenteCondicional =
    buscar === "" ? (
      <Col>
        <button id="popular" className="filtrosBtn" onClick={(e) => cambiarFiltro(e)}>
          Popular
        </button>
        <button id="now_playing" className="filtrosBtn" onClick={(e) => cambiarFiltro(e)}>
          Ahora en cines
        </button>
        <button id="top_rated" className="filtrosBtn" onClick={(e) => cambiarFiltro(e)}>
          Mejores votadas
        </button>
        <button id="upcoming" className="filtrosBtn" onClick={(e) => cambiarFiltro(e)}>
          Proximas
        </button>
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
        <Col>
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
