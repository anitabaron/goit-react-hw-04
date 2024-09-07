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

  useEffect(() => {
    getPhotos();
  }, []);

  const handleSubmit = (evt) => {
    setKeyWord(evt.target.value);

    // if (keyWordToSearch === "") {
    //   return <p>konieczność wprowadzenia tekstu w celu wyszukania obrazów</p>;
    // }
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
      <SearchBar
        handleSubmit={handleSubmit}
        getPhotos={getPhotos}
        keyWordToSearch={keyWordToSearch}
      />
      <PhotosGallery photos={photosList} />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <PhotoModal photos={photosList} getPhotos={getPhotos} />
      <ToggleModal />
      <p>App</p>
    </>
  );
}

export default App;
