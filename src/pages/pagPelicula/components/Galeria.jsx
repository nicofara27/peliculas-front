import ImageGallery from "react-image-gallery";
import React, { useEffect, useState } from "react";

const Galeria = ({imagenes}) => {
  const [listaImagenes, setListaImagenes] = useState([]);

  useEffect(() => {
    setListaImagenes(imagenes);
  }, [imagenes]);

  return (
    <section id="seccionGaleria">
      <h2>Galeria</h2>
      <ImageGallery
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        showIndex={true}
        slideInterval={2000}
        items={listaImagenes}
      />
    </section>
  );
};

export default Galeria;
