import { useState, useEffect } from "react";
import youtube from "../config";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
      setErrors(true);
    }
  };

  return [videos, search, errors];
};

export default useVideos;
