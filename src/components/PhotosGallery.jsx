import PhotoCard from "./PhotoCard";

export default function ImageGallery({ photos }) {
  console.log(photos);
  return (
    <ul className="photoGallery">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          src={photo.links}
          alt={photo.first_name}
        />
      ))}
    </ul>
  );
}
