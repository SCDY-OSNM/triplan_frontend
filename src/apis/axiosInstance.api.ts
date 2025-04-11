import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_HOST}`,
  timeout: 10000,
  // 쿠키에 포함
  // withCredentials: true,
  // header에 포함
  // headers: { authorization: `Bearer` },
});

export default axiosInstance;
