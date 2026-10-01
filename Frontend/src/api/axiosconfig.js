import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_API_URL || '';

const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for centralized error logging
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (import.meta.env.DEV) {
      console.error('[API Error]:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
