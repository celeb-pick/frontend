import axios from 'axios';

const isDevMode = import.meta.env.DEV;

export const axiosInstance = axios.create({
  baseURL: isDevMode ? '/api/' : 'https://celebpick.site/api/',
  timeout: 5000,
  formSerializer: {
    indexes: null,
  },
});
