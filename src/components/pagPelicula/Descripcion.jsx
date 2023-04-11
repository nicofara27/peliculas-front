import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";

const Descripcion = (pelicula) => {
  const {title, tagline, overview, poster_path, genres, release_date, runtime, budget} = {...pelicula.pelicula}
  const imagen = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
  const presupuesto = "$" + String(budget).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const duracionPorcentaje = String((runtime/60).toFixed(2));
  const duracion = duracionPorcentaje.charAt(0) + "h:" + (((runtime/60)%1)*60).toFixed(0) + "m";
  const [generos, setGeneros] = useState([])


  useEffect(()=>{
    if(genres !== undefined) {
      setGeneros(genres)
    }
  },[pelicula])

  return (
    <Row id="seccionDescripcion">
      <Col span={6}>
        <img
          className="peliculasImg"
          src={imagen}
          alt={title}
        ></img>
      </Col>
      <Col span={18} id="seccionDescripcion__datos">
        <div className="seccionDescripcion__texto">
          <Title>{title}</Title>
          <p>{tagline}</p>
        </div>
        <div className="seccionDescripcion__texto">
          <p>
            {overview}
          </p>
        </div>
          <Row className="seccionDescripcion__texto">
            <Col span={3}>
              <h3>Generos:</h3>
            </Col>
            {generos.map((genero)=><Col span={3} key={genero.id} className="seccionDescripcion__genero">
              <p>{genero.name}</p>
            </Col>)}
            
          </Row>
          <Row id="seccionDescripcion__footer">
            <Col span={9}>
              <p>Fecha de estreno: {release_date}</p>
            </Col>
            <Col span={6}>
              <p>Duracion: {duracion}</p>
            </Col>
            <Col span={9}>
              <p>Presupuesto: {presupuesto}</p>
            </Col>
          </Row>
      </Col>
    </Row>
  );
};

export default Descripcion;
