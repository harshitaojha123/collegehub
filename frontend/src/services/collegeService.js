import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: `${API_URL}/api`,
});

export const getColleges = async () => {
  const response = await API.get("/colleges");
  return response.data;
};

export const getCollegeById = async (id) => {
  const response = await API.get(`/colleges/${id}`);
  return response.data;
};