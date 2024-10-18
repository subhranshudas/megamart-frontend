import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Include cookies in requests if your backend uses them
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
