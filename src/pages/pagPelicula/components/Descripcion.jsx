import { Col, Row, message } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { listarPeliculas } from "../../../helpers/helpers";
import DescripcionModal from "./DescripcionBtn";

const Descripcion = ({ pelicula }) => {
  const nombreUsuario = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  const [peliculaEnLista, setPeliculaEnLista] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [generos, setGeneros] = useState([]);
  const {
    title,
    tagline,
    overview,
    poster_path,
    genres,
    release_date,
    runtime,
    budget,
  } = { ...pelicula };
  const img = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;

  // Convierte la duracion de minutos a un formato con horas y minutos, ej: 100 a 1h40m
  const duracionPorcentaje = String((runtime / 60).toFixed(2));
  const duracion =
    duracionPorcentaje.charAt(0) +
    "h:" +
    (((runtime / 60) % 1) * 60).toFixed(0) +
    "m";

  useEffect(() => {
    if (genres !== undefined) {
      setGeneros(genres);
    }

    if (nombreUsuario.length > 0) {
      listarPeliculas(nombreUsuario).then((lista) => {
        if (lista.find((pelicula) => pelicula.nombrePelicula === title)) {
          setPeliculaEnLista(true);
        } else {
          setPeliculaEnLista(false);
        }
      });
    }
  }, [pelicula]);

  return (
    <Row id="seccionDescripcion">
      {contextHolder}
      <Col xs={24} sm={24} md={10} lg={6}>
        <img className="peliculasImg" src={img} alt={title}></img>
      </Col>
      <Col xs={24} sm={24} md={14} lg={18} id="seccionDescripcion__datos">
        <div className="seccionDescripcion__texto">
          <Title>{title}</Title>
          <p>{tagline}</p>
        </div>
        <div className="seccionDescripcion__texto">
          <DescripcionModal
            messageApi={messageApi}
            peliculaEnLista={peliculaEnLista}
            pelicula={pelicula}
            nombreUsuario={nombreUsuario}
            setPeliculaEnLista={setPeliculaEnLista}
          />
        </div>
        <div className="seccionDescripcion__texto">
          <p>{overview}</p>
        </div>
        <Row className="seccionDescripcion__texto">
          <Col xs={6} sm={5} md={5} lg={3}>
            <h3>Generos:</h3>
          </Col>
          <Col xs={18} sm={19} md={19} lg={21}>
            <Row justify="start" gutter={[0, 12]}>
              {generos.map((genero) => (
                <Col
                  xs={12}
                  md={8}
                  lg={5}
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
            <p>
              Presupuesto:{" "}
              {"$" + String(budget).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Descripcion;
