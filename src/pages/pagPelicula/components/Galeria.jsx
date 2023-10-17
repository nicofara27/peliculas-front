import ImageGallery from "react-image-gallery";

const Galeria = ({ imagenes }) => {
  return (
    <section id="seccionGaleria">
      <h2>Galeria</h2>
      <ImageGallery
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        showIndex={true}
        slideInterval={2000}
        items={imagenes}
      />
    </section>
  );
};

export default Galeria;
