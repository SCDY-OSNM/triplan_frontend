import axios from 'axios';
import { getDefaultStore } from 'jotai';
import { tokenAtom } from '@/atoms/auth.atom';

const jotaiStore = getDefaultStore();

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_HOST}`,
  timeout: 10000,
  // 쿠키에 포함
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = jotaiStore.get(tokenAtom);

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
