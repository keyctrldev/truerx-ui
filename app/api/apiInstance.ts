import axios, { AxiosInstance } from 'axios';
import { EndPoint } from '../constants';
import { AsyncStorageService } from '../utils';

export const truerxInstance: AxiosInstance = axios.create({
  baseURL: EndPoint.baseUrl,
  timeout: 10000, // timeout to avoid hanging requests
});

truerxInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);
truerxInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorageService.loadAccessToken();
    if (token) {
      const parsedOuter = JSON.parse(token?.token);
      const authorizationToken = parsedOuter.token;
      config.headers.Authorization = `Bearer ${authorizationToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
