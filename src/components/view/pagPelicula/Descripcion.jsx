import { Button, Col, Modal, Rate, Row, message } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { agregarALista, listarPeliculas } from "../../helpers/helpers";

const Descripcion = ({ pelicula }) => {
  const nombreUsuario = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  const [peliculaEnLista, setPeliuclaEnLista] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  let [score, setScore] = useState(0);
  const {
    title,
    tagline,
    overview,
    poster_path,
    genres,
    release_date,
    runtime,
    budget,
    id,
  } = { ...pelicula };
  const img = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
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

  useEffect(() => {
    if(!nombreUsuario) {
      listarPeliculas(nombreUsuario).then((lista) => {
        if (lista.find((pelicula) => pelicula.nombrePelicula === title)) {
          setPeliuclaEnLista(true);
        } else {
          setPeliuclaEnLista(false);
        }
      });
    }
    }, [pelicula]);

  const showModal = () => {
    if (!nombreUsuario) {
      setIsModalOpen(true);
    } else {
      messageApi.open({
        type: "error",
        content: "Inicia sesion para poder agregar peliculas",
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const mensajePelicula = () => {
    messageApi.open({
      type: "success",
      content: "Se agrego correctamente a la lista",
    });
  };

  const agregarPelicula = () => {
    const pelicula = {
      key: id,
      imagen: img,
      nombrePelicula: title,
      puntuacion: score,
    };
    agregarALista(nombreUsuario, pelicula);
    setPeliuclaEnLista(true);
    setIsModalOpen(false);
    mensajePelicula();
  };

  const btnCondicional = peliculaEnLista ? (
    <Button id="seccionDescripcion__btn" disabled>
      Pelicula agregada
    </Button>
  ) : (
    <Button id="seccionDescripcion__btn" onClick={showModal}>
      Agregar a mi lista
    </Button>
  );

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
          {btnCondicional}
          <Modal
            title="Puntuacion"
            open={isModalOpen}
            onOk={agregarPelicula}
            onCancel={handleCancel}
            footer={[
              <Button key="cancelar" onClick={handleCancel}>
                Cancelar
              </Button>,
              <Button key="agregar" type="primary" onClick={agregarPelicula}>
                Agregar
              </Button>,
            ]}
          >
            <Rate
              allowHalf
              onChange={(value) => {
                setScore(value);
              }}
              value={score}
            />
          </Modal>
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
