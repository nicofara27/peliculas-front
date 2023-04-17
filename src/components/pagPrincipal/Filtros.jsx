import { Col, Input, Row } from "antd";
import React from "react";

const Filtros = () => {
    const onSearch = (value) => console.log(value);
  return (
    <section>
      <Row justify={"space-between"}>
        <Col>
          <button className="filtrosBtn">Popular</button>
          <button className="filtrosBtn">Nuevas</button>
          <button className="filtrosBtn">Mejores votadas</button>
          <button className="filtrosBtn">Proximas</button>
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
