import { Col } from 'antd';
import { StarFilled } from "@ant-design/icons";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardPelicula = () => {
    let [nombrePelicula, setNombrePelicula] = useState("asd")

    return (
        <Col span={5}>
            <Link to={`/pelicula/${nombrePelicula}`}>
          <div>
            <img
              className="peliculasImg"
              src="https://image.tmdb.org/t/p/w300/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg"
              alt=""
              />
          </div>
          <div className="peliculasDesc">
            <div className="peliculasDesc__calificacion">
              <StarFilled className="peliculasDesc__icon" />
              <p>7,8</p>
            </div>
            <h2>Cocaine Bear</h2>
            <p>Thriller, Comedy, Horror, Crime</p>
          </div>
              </Link>
        </Col>
    );
};

export default CardPelicula;