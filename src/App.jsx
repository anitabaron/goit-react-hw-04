import { useEffect } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import PhotoModal from "./components/PhotoModal";
import PhotosGallery from "./components/PhotosGallery";
import SearchBar from "./components/SearchBar";
import fetchPhotos from "./api/fetchPhotos";
import { useGetPhotos } from "./hooks/useGetPhotos";

function App() {
  const { isLoading, error, photosList, getPhotos } = useGetPhotos();
  console.log(photosList); //pusta tablica, dlaczego?

  const handleSubmit = () => {};

  //to useEffect chyba tu wogóle nie działa
  useEffect(() => {
    fetchPhotos();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} getPhotos={getPhotos} />
      <PhotosGallery photos={photosList} />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <PhotoModal />
      <p>App</p>
    </>
  );
}

export default App;
