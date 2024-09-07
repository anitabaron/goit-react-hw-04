export default function PhotoCard({ photo }) {
  const smallPhoto = photo.urls.small;
  console.log(smallPhoto);
  const bigPhoto = photo.urls.regular;
  const { id, alt_description } = photo;
  return (
    <li>
      <div>
        <img
          src={smallPhoto}
          alt={alt_description || "Photo without description"}
        />
      </div>
    </li>
  );
}
