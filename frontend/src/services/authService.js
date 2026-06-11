import axios from "axios";

const API = axios.create({
  baseURL:  "https://collegehub-qcr1.onrender.com/api/auth",
});

export const signupUser = (data) =>
  API.post("/signup", data);

export const loginUser = (data) =>
  API.post("/login", data);