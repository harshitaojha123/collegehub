import axios from "axios";

 const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: `${API_URL}/api/saved`,
});

export const saveCollege = (data) =>
  API.post("/", data);

export const getSavedColleges = (userId) =>
  API.get(`/${userId}`);

export const removeSavedCollege = (id) =>
  API.delete(`/${id}`);