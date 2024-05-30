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
