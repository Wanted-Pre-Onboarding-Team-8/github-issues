import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '@/consts';

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

const handleRequestConfig = (config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
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
