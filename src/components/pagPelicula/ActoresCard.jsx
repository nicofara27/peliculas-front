import { Col } from "antd";
import React, { useEffect } from "react";

const ActoresCard = (actor) => {
  const {name, profile_path, character} = {...actor.actor}

  return (
    <Col className="actoresCard" xs={12} sm={12} md={6} lg={4}>
      <div>
        <img
          className="actoresCard__img"
          src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
          alt={name}
        />
      </div>
      <div className="actorCard__descripcion">
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </Col>
  );
};

export default ActoresCard;
