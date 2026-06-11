import axios from "axios";

const API = axios.create({
  baseURL: "https://collegehub-qcr1.onrender.com/api",
});

export const getColleges = async () => {
  const response = await API.get("/colleges");
  return response.data;
};

export const getCollegeById = async (id) => {
  const response = await API.get(`/colleges/${id}`);
  return response.data;
};