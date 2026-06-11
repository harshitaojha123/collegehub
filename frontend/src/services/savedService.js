import axios from "axios";

const API = axios.create({
  baseURL:  "https://collegehub-qcr1.onrender.com/api/saved",
});

export const saveCollege = (data) =>
  API.post("/", data);

export const getSavedColleges = (userId) =>
  API.get(`/${userId}`);

export const removeSavedCollege = (id) =>
  API.delete(`/${id}`);