import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://b851-2402-800-6311-8a88-90c2-4e12-e455-3e00.ngrok-free.app",
  timeout: 20000,
  headers: { Accept: "application/json" },
});
