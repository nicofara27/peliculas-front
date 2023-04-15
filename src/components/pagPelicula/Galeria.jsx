import ImageGallery from "react-image-gallery";
import React, { useEffect, useState } from "react";

const Galeria = (imagenesUrl) => {
  const [listaImagenes, setListaImagenes] = useState(imagenesUrl.imagenes);

useEffect(() => {
  setListaImagenes(imagenesUrl.imagenes)
}, [imagenesUrl]);

  return (
    <section id="seccionGaleria">
      <h2>Galeria</h2>
      <ImageGallery showFullscreenButton={false} showIndex={true} slideInterval={2000} items={imagenesUrl.imagenes} />
    </section>
  );
};

export default Galeria;
