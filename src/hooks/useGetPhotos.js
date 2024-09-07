import { useState } from "react";
import fetchPhotos from "../api/fetchPhotos";

export const useGetPhotos = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPhotos = async (query) => {
    setIsLoading(true);
    try {
      const photos = await fetchPhotos(query);
      setPhotosList(photos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    photosList,
    getPhotos,
  };
};
