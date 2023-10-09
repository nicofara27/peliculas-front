import { Button, Modal, Rate } from "antd";
import { useState } from "react";
import { agregarALista } from "../../../helpers/helpers";

const DescripcionBtn = ({
  messageApi,
  peliculaEnLista,
  setPeliculaEnLista,
  pelicula,
  nombreUsuario,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const showModal = () => {
    if (nombreUsuario.length > 0) {
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
    const peliculaASubir = {
      key: pelicula.id,
      imagen: `https://www.themoviedb.org/t/p/w440_and_h660_face${pelicula.poster_path}`,
      nombrePelicula: pelicula.title,
      puntuacion: score,
    };
    console.log(pelicula);
    agregarALista(nombreUsuario, peliculaASubir);
    setPeliculaEnLista(true);
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
    <div>
      {btnCondicional}
      <Modal
        title="Puntuacion"
        open={isModalOpen}
        onOk={agregarPelicula}
        onCancel={handleCancel}
        footer={[
          <Button key="cancelar" type="primary" danger onClick={handleCancel}>
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
  );
};

export default DescripcionBtn;
