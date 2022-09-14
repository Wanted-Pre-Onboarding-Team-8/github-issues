import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '@/consts';

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

const handleRequestConfig = (config) => {
  return {
    ...config,
    headers: {
      ...config.headers
      // Authorization: `Bearer ${process.env.REACT_APP_GIT_ACCESS_TOKEN}`,
    },
  };
};

const createApi = (axiosInstance, methodType) => (config) => {
  return axiosInstance({
    ...handleRequestConfig(config),
    method: methodType,
  });
};

export default {
  get: createApi(baseAxios, HTTP_METHODS.GET),
};
