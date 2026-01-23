import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
});

export const authService = {
  login: (email, password) => api.post('/user/login', { email, password }),
  signup: (fullName, email, password) => api.post('/user/signup', { fullName, email, password }),
  logout: () => api.get('/user/logout'),
};

export const blogService = {
  getAll: () => api.get('/blog/read'),
  getOne: (id) => api.get(`/blog/read/${id}`),
  create: (data) => api.post('/blog/write', data),
  update: (id, data) => api.post(`/blog/update/${id}`, data), 
  delete: (id) => api.get(`/blog/delete/${id}`), 
};

export default api;