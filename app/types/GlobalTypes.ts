// Define TypeScript interfaces for global types used throughout the application.
import { ImageSourcePropType } from 'react-native';

import { ImageSourcePropType, ImageStyle, TextStyle } from 'react-native';

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

export interface OnboardingProps {
  header: string;
  description: string;
  image: ImageSourcePropType;
}

export interface MedicationDetails {
  medicineName: string;
  count: number;
  dosage: number;
  supply: number;
  refill: number;
}

export interface ResetPasswordMethodProps {
  id: number;
  title: string;
  subTitle: string;
  icon: ImageSourcePropType;
}

export interface CustomResetPasswordMethodComponentProps {
  isSelected: boolean;
  onSelectMethod: () => void;
  icon: ImageSourcePropType;
  iconStyle?: ImageStyle;
  title: string;
  subTitle?: string;
  titleTextStyle?: TextStyle;
  subTitleTextStyle?: TextStyle;
}
