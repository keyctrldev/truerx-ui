// Define TypeScript interfaces for global types used throughout the application.

export interface UserFormType {
  email: string;
  password: string;
}
export interface ClaimsData {
  typeOfConsultance: string;
  Description: string;
  status: string;
  colorCode: string;
}

export type BiometricsData = {
  isUserLoggedIn: boolean;
  isBiometricsAuthEnabled: boolean;
  userName: string;
};

export type TokenData = {
  token: string;
};
export interface LoginResponse {
  access_token: string;
}
export interface ClaimsDataItem {
  id: number;
  name: string;
  userId: number;
  status: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface StepperData {
  date: string;
  event: string;
}

export interface NotificationItem {
  message: string;
  messageId: string;
  time: string;
  title: string;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}
export interface ProductsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  skip: number;
  limit: number;
  hasMore: boolean;
}
