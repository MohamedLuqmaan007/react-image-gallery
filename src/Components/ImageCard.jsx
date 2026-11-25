// Reusable child component: receives one image's data through props.
function ImageCard({ url, title, description }) {
  return (
    <article className="image-card">
      <img src={url} alt={title} className="image-card__img" loading="lazy" />
      <div className="image-card__body">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__desc">{description}</p>
      </div>
    </article>
  );
}

export default ImageCard;