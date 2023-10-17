import { Col } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiltrosContext } from "../../../context/filtrosContext";
import { listaGeneros } from "../../../constants";

const CardPelicula = ({ pelicula }) => {
  const { title, vote_average, poster_path, genre_ids, id } = {
    ...pelicula,
  };
  const [puntuacion, setPuntuacion] = useState(vote_average.toFixed(1));
  const imagen = `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;

  const { setCategoria } = useContext(FiltrosContext);

  const navigate = useNavigate();

  // Redondea el valor de la puntuacion
  if (puntuacion.toString().split(".")[1] === "0") {
    setPuntuacion(puntuacion.toString().split(".")[0]);
  }

  // Comprueba el codigo que viene de la api con la listaGeneros para definir a que generos pertenece la pelicula
  let generosPelicula = [];
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
