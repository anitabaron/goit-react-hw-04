import PhotoCard from "./PhotoCard";

export default function ImageGallery({ photos }) {
  return (
    <ul className="photoGallery">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard
            key={photo.id}
            photo={photo}
            src={photo.links}
            alt={photo.first_name}
          />
        </li>
      ))}
    </ul>
  );
}
