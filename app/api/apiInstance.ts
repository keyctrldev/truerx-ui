import axios, { AxiosInstance } from 'axios';
import { EndPoint } from '../constants';

// Create an Axios instance with default configurations
export const truerxInstance: AxiosInstance = axios.create({
    baseURL: EndPoint.baseUrl  // Set the base URL for all HTTP requests.
});


