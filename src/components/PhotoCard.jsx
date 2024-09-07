export default function PhotoCard({ photo }) {
  const smallPhoto = photo.urls.small;
  const bigPhoto = photo.urls.regular;
  const { id, alt_description } = photo;
  return (
    <div className="photoContainer">
      <img
        src={smallPhoto}
        alt={alt_description || "Photo without description"}
      />
    </div>
  );
}
