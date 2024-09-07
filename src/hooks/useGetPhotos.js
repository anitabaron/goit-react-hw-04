import { useState } from "react";
import fetchPhotos from "../api/fetchPhotos";

export const useGetPhotos = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPhotos = async () => {
    try {
      const photos = await fetchPhotos();
      setPhotosList(photos);
      setIsLoading(true);
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
