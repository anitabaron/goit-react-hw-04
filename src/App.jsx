import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import PhotoModal from "./components/PhotoModal";
import PhotosGallery from "./components/PhotosGallery";
import SearchBar from "./components/SearchBar";
import { useGetPhotos } from "./hooks/useGetPhotos";
import ToggleModal from "./components/ToggleModal";

function App() {
  const { isLoading, error, photosList, getPhotos } = useGetPhotos();
  const [keyWord, setKeyWord] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (keyWord) {
      getPhotos(keyWord);
    } else {
      getPhotos();
    }
  }, [keyWord]);

  const handleSearchSubmit = (query) => {
    console.log("Search query:", query);
    setKeyWord(query);
    // dalsze kroki z API ??
  };

  const keyWordToSearch = keyWord.toLowerCase();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <PhotosGallery photos={photosList} />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <PhotoModal photos={photosList} getPhotos={getPhotos} />
      <ToggleModal />
    </>
  );
}

export default App;
