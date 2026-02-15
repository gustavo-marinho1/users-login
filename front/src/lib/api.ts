import axios from 'axios';

const api_url = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: api_url,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const mensagemDoBackend = error.response.data.error || error.response.data.message;
      if (mensagemDoBackend) {
        error.message = mensagemDoBackend;
      }
    }

    if (error.response && error.response.status === 401) {
      localStorage.removeItem("auth_token");
    }

    return Promise.reject(error);
  }
);

export default api;