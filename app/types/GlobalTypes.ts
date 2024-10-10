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

export interface AuthUser {
  photoURL: string;
  uid: string;
  email: string;
  name: string;
}

export interface ChatFeedParams {
  route: {
    params: {
      data: {
        uid: string;
        name: string;
      };
    };
  };
}
