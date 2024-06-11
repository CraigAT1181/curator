import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
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

export const searchMetExhibits = async (keywords, pageNumber) => {
  const { data } = await api.get("/met_exhibits/search", {
    params: {
      keywords: keywords,
      page: pageNumber,
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

export const searchClevelandArtworks = async (keywords, pageNumber) => {
  const { data } = await api.get("/cleveland_artworks/search", {
    params: {
      keywords: keywords,
      page: pageNumber,
    },
  });

  return data;
};
