import { Button, Row } from "antd";
import React, { useEffect, useState } from "react";
import ActoresCard from "./ActoresCard";

const Actores = ({ actores }) => {
  const [listaActores, setListaActores] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  // Actualiza la lista de actores acorde al state mostrarTodos, si es false muestra lista reducida
  useEffect(() => {
    if (actores !== undefined) {
      // Por defecto muestra 12
      if (!mostrarTodos) {
        setListaActores(actores.slice(0, 12));
      } else {
        setListaActores(actores);
      }
    }
  }, [actores, mostrarTodos]);

  // Funcion que cambia el state de mostrarTodos
  const mostrarMas = () => {
    setMostrarTodos(!mostrarTodos);
  };

  return (
    <section id="seccionActores">
      <h2>Actores</h2>
      <Row gutter={[16, 24]}>
        {listaActores.map((actor) => (
          <ActoresCard key={actor.id} actor={actor}></ActoresCard>
        ))}
      </Row>
      <div id="actoresBtnCont">
        <Button size="large" id="actoresBtn" onClick={mostrarMas}>
          {mostrarTodos ? "Mostrar principales" : "Mostrar todos"}
        </Button>
      </div>
    </section>
  );
};

export default Actores;
