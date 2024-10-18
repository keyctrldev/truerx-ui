// Define TypeScript interfaces for global types used throughout the application.

import { ForwardedRef } from 'react';
import {
  StyleProp,
  TextInput,
  ViewStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

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

export interface CustomInputTextPops {
  label: string;
  touched?: boolean;
  editable?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  multiline?: boolean;
  placeholder?: string;
  defaultValue?: string;
  secureTextEntry?: boolean;
  value?: string | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onSubmitEditing?: () => void;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  textInputStyle?: StyleProp<ViewStyle>;
  additionalContainerStyle?: StyleProp<ViewStyle>;
}

export type CustomInputType = (props: CustomInputTextPops, ref: ForwardedRef<TextInput>) => React.JSX.Element;
