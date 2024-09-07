import { useState } from "react";
import fetchPhotos from "../api/fetchPhotos";

export const useGetPhotos = () => {
  const [photosList, setPhotosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPhotos = async () => {
    try {
      setIsLoading(true);
      const photos = await fetchPhotos();
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
