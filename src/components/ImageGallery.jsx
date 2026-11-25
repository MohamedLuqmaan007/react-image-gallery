import ImageCard from "./ImageCard";

// Receives the array as a prop and renders one ImageCard per item.
function ImageGallery({ images }) {
  return (
    <section className="gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          url={image.url}
          title={image.title}
          description={image.description}
        />
      ))}
    </section>
  );
}

export default ImageGallery;