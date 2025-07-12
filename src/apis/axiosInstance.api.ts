import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_HOST}`,
  timeout: 10000,
  // 쿠키에 포함
  // withCredentials: true,
  // header에 포함
  // headers: { authorization: `Bearer` },
});

axiosInstance.interceptors.request.use(config => {
  const accessToken = sessionStorage.getItem('accessToken');
  if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

export default axiosInstance;
