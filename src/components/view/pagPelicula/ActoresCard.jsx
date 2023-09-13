import { Col } from "antd";
import React from "react";

const ActoresCard = (actor) => {
  const {name, profile_path, character} = {...actor.actor}
  let img = `https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`
  
  // Si el actor no tiene imagen se le asigna una de un avatar
  if(profile_path === null) {
    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&usqp=CAU"
  }

  return (
    <Col className="actoresCard" xs={12} sm={12} md={6} lg={4}>
      <div className="actoresCard__imgContainer">
        <img
          className="actoresCard__img"
          src={img}
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
