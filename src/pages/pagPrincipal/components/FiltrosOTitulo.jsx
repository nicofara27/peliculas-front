import React, { useContext } from "react";
import { FiltrosContext } from "../../../context/filtrosContext";
import { Col, Radio } from "antd";

const FiltrosOTitulo = ({ cambiarFiltro }) => {
  const { buscar, categoria } = useContext(FiltrosContext);

  // Condicional que maqueta la lista de flitros o el nombre de la pelicula buscada
  const condicionalFiltroOBuscar =
    buscar === "" ? (
      <Col>
        <h1 id="filtrosTitulo">Resultados para: {categoria}</h1>
      </Col>
    ) : (
      <Col>
        <h1 id="filtrosTitulo">Resultados para: {buscar}</h1>
      </Col>
    );

  return (
    <>
      {buscar === "" && categoria === "" ? (
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
        condicionalFiltroOBuscar
      )}
    </>
  );
};

export default FiltrosOTitulo;
