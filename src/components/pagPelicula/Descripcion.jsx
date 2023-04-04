import { Col, Row, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React from "react";

const Descripcion = () => {
  const { Text } = Typography;
  return (
    <Row id="seccionDescripcion">
      <Col span={6}>
        <img
          className="peliculasImg"
          src="https://image.tmdb.org/t/p/w300/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg"
        ></img>
      </Col>
      <Col span={18} id="seccionDescripcion__datos">
        <div className="seccionDescripcion__texto">
          <Title>Cocaine Bear</Title>
          <p>Get in line.</p>
        </div>
        <div className="seccionDescripcion__texto">
          <p>
            Inspired by a true story, an oddball group of cops, criminals,
            tourists and teens converge in a Georgia forest where a 500-pound
            black bear goes on a murderous rampage after unintentionally
            ingesting cocaine.
          </p>
        </div>
          <Row className="seccionDescripcion__texto">
            <Col span={3}>
              <h3>Generos:</h3>
            </Col>
            <Col span={3} className="seccionDescripcion__genero">
              <p>Thriller</p>
            </Col>
            <Col span={3} className="seccionDescripcion__genero">
              <p>Thriller</p>
            </Col>
            <Col span={3} className="seccionDescripcion__genero">
              <p>Thriller</p>
            </Col>
            <Col span={3} className="seccionDescripcion__genero">
              <p>Thriller</p>
            </Col>
          </Row>
          <Row id="seccionDescripcion__footer">
            <Col span={8}>
              <p>Fecha de estreno</p>
            </Col>
            <Col span={8}>
              <p>Duracion</p>
            </Col>
            <Col span={8}>
              <p>Presupuesto</p>
            </Col>
          </Row>
      </Col>
    </Row>
  );
};

export default Descripcion;
