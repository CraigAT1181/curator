import axios from "axios";

const api = axios.create({
  baseURL: "https://curator-be.onrender.com",
});

export default api;

export const getMetExhibits = async (pageNumber) => {
  const { data } = await api.get(`/met_exhibits?page=${pageNumber}`);

  return data;
};

export const getSingleObject = async (objectID) => {
  const { data } = await api.get(`/met_exhibits/${objectID}/objects`);

  return data;
};

export const searchMetExhibits = async (pageNumber, keywords) => {
  const { data } = await api.get(`/met_exhibits/search?page=${pageNumber}`, {
    params: {
      keywords: keywords,
    },
  });

  return data;
};

export const getClevelandArtworks = async (pageNumber) => {
  const { data } = await api.get(`/cleveland_artworks?page=${pageNumber}`);

  return data;
};

export const GetSingleClevelandArtwork = async (objectID) => {
  const { data } = await api.get(`/cleveland_artworks/${objectID}/artworks`);

  return data;
};

export const searchClevelandArtworks = async (pageNumber, keywords) => {
  const { data } = await api.get(
    `/cleveland_artworks/search?page=${pageNumber}`,
    {
      params: {
        keywords: keywords,
      },
    }
  );

  return data;
};
