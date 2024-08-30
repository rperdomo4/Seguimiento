
import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const Autenticacion = axios.create();

Autenticacion.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default Autenticacion;
