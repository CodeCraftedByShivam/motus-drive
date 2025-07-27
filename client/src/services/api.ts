import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    role?: string;
  }) => api.post('/users/register', userData),
  
  login: (credentials: {
    email: string;
    password: string;
  }) => api.post('/users/login', credentials),
  
  getProfile: () => api.get('/users/profile'),
};

export default api;
