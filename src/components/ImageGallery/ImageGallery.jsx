import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ photos, onClick }) {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={() => onClick(photo)}>
          <ImageCard item={photo} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
