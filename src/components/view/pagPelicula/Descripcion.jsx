import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";

const Descripcion = (pelicula) => {
  const {
    title,
    tagline,
    overview,
    poster_path,
    genres,
    release_date,
    runtime,
    budget,
  } = { ...pelicula.pelicula };
  const imagen = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  // Convierte el presupuesto en un numero con comas y le agrega el simbolo $, ej: 100000 a $100,000
  const presupuesto =
    "$" + String(budget).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Convierte la duracion de minutos a un formato con horas y minutos, ej: 100 a 1h40m
  const duracionPorcentaje = String((runtime / 60).toFixed(2));
  const duracion =
    duracionPorcentaje.charAt(0) +
    "h:" +
    (((runtime / 60) % 1) * 60).toFixed(0) +
    "m";
  const [generos, setGeneros] = useState([]);

  
  useEffect(() => {
    if (genres !== undefined) {
      setGeneros(genres);
    }
  }, [pelicula]);

  return (
    <Row id="seccionDescripcion">
      <Col xs={24} sm={24} md={10} lg={6}>
        <img className="peliculasImg" src={imagen} alt={title}></img>
      </Col>
      <Col xs={24} sm={24} md={14} lg={18} id="seccionDescripcion__datos">
        <div className="seccionDescripcion__texto">
          <Title>{title}</Title>
          <p>{tagline}</p>
        </div>
        <div className="seccionDescripcion__texto">
          <p>{overview}</p>
        </div>
        <Row className="seccionDescripcion__texto">
          <Col xs={6} sm={5} md={5} lg={3}>
            <h3>Generos:</h3>
          </Col>
          <Col xs={18} sm={19} md={19} lg={21}>
            <Row justify="center">
              {generos.map((genero) => (
                <Col
                  xs={12}
                  sm={12}
                  md={7}
                  lg={4}
                  key={genero.id}
                  className="seccionDescripcion__genero"
                >
                  <p>{genero.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row id="seccionDescripcion__footer">
          <Col xs={8} sm={8} md={9} lg={9}>
            <p>Fecha de estreno: {release_date}</p>
          </Col>
          <Col xs={7} sm={7} md={6} lg={6}>
            <p>Duracion: {duracion}</p>
          </Col>
          <Col xs={9} sm={7} md={9} lg={9}>
            <p>Presupuesto: {presupuesto}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Descripcion;
