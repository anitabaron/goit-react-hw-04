import PhotoCard from "./PhotoCard";

export default function ImageGallery({ photos }) {
  console.log(photos); //pusta tablica, dlaczego?

  return (
    <div>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} src={photo.links} alt={photo.first_name} />
      ))}
    </div>
  );
}
