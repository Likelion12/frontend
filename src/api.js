import axios from 'axios';

const api = axios.create({
  baseURL: 'http://43.202.94.241:8080',
});

export default api;