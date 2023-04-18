import { Col, Input, Row } from "antd";
import React from "react";

const Filtros = ({setFiltro}) => {
    const onSearch = (value) => console.log(value);
  return (
    <section>
      <Row justify={"space-between"}>
        <Col>
          <button className="filtrosBtn" onClick={()=>setFiltro("popular")}>Popular</button>
          <button className="filtrosBtn" onClick={()=>setFiltro("now_playing")}>Ahora en cines</button>
          <button className="filtrosBtn" onClick={()=>setFiltro("top_rated")}>Mejores votadas</button>
          <button className="filtrosBtn" onClick={()=>setFiltro("upcoming")}>Proximas</button>
        </Col>
        <Col>
          <Input.Search
            placeholder="Buscar por nombre de pelicula"
            allowClear
            onSearch={onSearch}
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
