import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { eliminarDeLista, listarPeliculas } from "../../../helpers/helpers";

const Tabla = ({ usuario }) => {
  let [listaPeliculas, setListaPeliculas] = useState([]);

  const columns = [
    {
      title: "Imagen",
      width: "5%",
      dataIndex: "imagen",
      key: "imagen",
      render: (img, pelicula) => (
        <img className="tabla__img" alt={pelicula} src={img} />
      ),
    },
    {
      title: "Pelicula",
      width: "65%",
      dataIndex: "nombrePelicula",
      key: "nombrePelicula",
      render: (pelicula, link) => (
        <Link className="tabla__titulo" to={`/${link.key}`}>
          {pelicula}
        </Link>
      ),
    },
    {
      title: "Puntuacion",
      width: "20%",
      dataIndex: "puntuacion",
      key: "puntuacion",
    },
    {
      width: "10%",
      dataIndex: "key",
      render: (key) => (
        <Button onClick={() => elimiarPelicula(key)} danger>
          Borrar
        </Button>
      ),
    },
  ];

  const elimiarPelicula = async (key) => {
    const peliculaAEliminar = listaPeliculas.find(
      (pelicula) => pelicula.key === key
    );
    await eliminarDeLista(usuario, peliculaAEliminar).then(
      listarPeliculas(usuario).then((lista) => {
        setListaPeliculas(lista);
        window.location.reload();
      })
    );
  };

  useEffect(() => {
    if (usuario.length > 0) {
      listarPeliculas(usuario).then((lista) => {
        setListaPeliculas(lista);
      });
    }
  }, []);

  return <Table columns={columns} dataSource={listaPeliculas} />;
};

export default Tabla;
