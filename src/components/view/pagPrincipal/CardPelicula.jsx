import { Col } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiltrosContext } from "../../../context/filtrosContext";

const CardPelicula = ({ pelicula }) => {
  const { setCategoria } = useContext(FiltrosContext);
  const { title, vote_average, poster_path, genre_ids, id } = {
    ...pelicula,
  };
  const navigate = useNavigate();

  const imagen = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  // Redondea el valor de la puntuacion
  let puntuacion = vote_average.toFixed(1);
  if (puntuacion.toString().split(".")[1] === "0") {
    puntuacion = puntuacion.toString().split(".")[0];
  }

  // Comprueba el codigo que viene de la api con la listaGeneros para definir a que generos pertenece la pelicula
  let generosPelicula = [];
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
    if (generosPelicula.length < 4) {
      generosPelicula.push({
        nombre: generoEncontrado.name,
        id: generoEncontrado.id,
      });
    }
  });

  const irACategoria = (cat) => {
    setCategoria(cat);
    navigate(`/categoria/${cat}/1`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Col sm={12} md={11} lg={5} className="cardPelicula">
      <Link to={`/${id}`}>
        <div>
          <img className="peliculasImg" src={imagen} alt={title} />
        </div>
      </Link>
      <div className="peliculasDesc">
        <div className="peliculasDesc__calificacion">
          <StarFilled className="peliculasDesc__icon" />
          <p>{puntuacion}</p>
        </div>
        <Link to={`/${id}`} className="peliculasDesc__titulo">
          {title.length > 32 ? title.slice(0, -15) + "..." : title}
        </Link>
        <ul className="peliculasDesc__categoria">
          {generosPelicula.map((genero) => (
            <li key={genero.id}>
              <button onClick={() => irACategoria(genero.id)}>
                {genero.nombre}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default CardPelicula;
