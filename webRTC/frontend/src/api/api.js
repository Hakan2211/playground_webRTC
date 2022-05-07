import axios from "axios";

const api = axios.create({
  baseAPI: "https://localhost:5000",
});

export const login = async (data) => {
  try {
    return await api.post("/auth/login", data);
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const register = async (data) => {
  try {
    return await api.post("/auth/register", data);
  } catch (error) {
    return {
      error: true,
    };
  }
};
