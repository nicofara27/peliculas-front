import { Col } from "antd";
import { StarFilled } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const CardPelicula = (pelicula) => {
  const { title, vote_average, poster_path, genre_ids, id } = {
    ...pelicula.pelicula,
  };

  const imagen = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  let puntuacion = vote_average.toFixed(1);
  if (puntuacion.toString().split(".")[1] === "0") {
    puntuacion = puntuacion.toString().split(".")[0];
  }

  let generosPelicula = "";
  const listaGeneros = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
   genre_ids.forEach((idGenero) => {
    let generoEncontrado = listaGeneros.find(
      (genero) => genero.id === idGenero
    );
    if (generosPelicula === "") {
      generosPelicula += generoEncontrado.name;
    } else {
      generosPelicula += ", " + generoEncontrado.name;
    }
  });
  
  return (
    <Col span={5}>
      <Link to={`/${id}`}>
        <div>
          <img className="peliculasImg" src={imagen} alt={title} />
        </div>
        <div className="peliculasDesc">
          <div className="peliculasDesc__calificacion">
            <StarFilled className="peliculasDesc__icon" />
            <p>{puntuacion}</p>
          </div>
          <h2>{title}</h2>
          <p>{generosPelicula}</p>
        </div>
      </Link>
    </Col>
  );
};

export default CardPelicula;
