import axios, { AxiosInstance } from 'axios';
import { EndPoint } from '../constants';

export const truerxInstance: AxiosInstance = axios.create({
  baseURL: EndPoint.baseUrl,
  timeout: 10000, // timeout to avoid hanging requests
});

truerxInstance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);
