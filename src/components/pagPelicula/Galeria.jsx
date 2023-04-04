import { Carousel } from "antd";
import React from "react";

const Galeria = () => {
  return (
    <section id="seccionGaleria">
        <h2>Galeria</h2>
      <Carousel autoplay>
        <div>
          <img width="100%" src="https://image.tmdb.org/t/p/original/wqXXoeRrsggMv7CP5kedqaWZDPt.jpg" alt=""></img>
        </div>
        <div>
          <img width="100%" src="https://image.tmdb.org/t/p/original/wqXXoeRrsggMv7CP5kedqaWZDPt.jpg" alt=""></img>
        </div>
        <div>
          <img width="100%" src="https://image.tmdb.org/t/p/original/wqXXoeRrsggMv7CP5kedqaWZDPt.jpg" alt=""></img>
        </div>
        <div>
          <img width="100%" src="https://image.tmdb.org/t/p/original/wqXXoeRrsggMv7CP5kedqaWZDPt.jpg" alt=""></img>
        </div>
      </Carousel>
    </section>
  );
};

export default Galeria;
