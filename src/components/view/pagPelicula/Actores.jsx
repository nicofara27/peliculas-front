import { Button, Row } from "antd";
import React, { useEffect, useState } from "react";
import ActoresCard from "./ActoresCard";

const Actores = (listaActores) => {
  const [actores, setActores] = useState([]);
  let [mostrarTodos, setMostrarTodos] = useState(false);

  // Actualiza la lista de actores acorde al state mostrarTodos, si es false muestra lista reducida
  useEffect(() => {
    if (listaActores !== undefined) {
      // Por defecto muestra 12
      if (!mostrarTodos) {
        setActores(listaActores.actores.slice(0, 12));
      } else {
        setActores(listaActores.actores);
      }
    }
  }, [listaActores, mostrarTodos]);

  // Funcion que cambia el state de mostrarTodos
   const mostrarMas = () => {
    setMostrarTodos(!mostrarTodos)
   }

  return (
    <section id="seccionActores">
      <h2>Actores</h2>
      <Row gutter={[16, 24]}>
        {actores.map((actor) => (
          <ActoresCard key={actor.id} actor={actor}></ActoresCard>
        ))}
      </Row>
      <div id="actoresBtnCont">
        <Button size="large" id="actoresBtn" onClick={mostrarMas}>
          Mostrar todos
        </Button>
      </div>
    </section>
  );
};

export default Actores;
