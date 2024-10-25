// Define TypeScript interfaces for global types used throughout the application.
import { ForwardedRef } from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

import { SvgProps } from 'react-native-svg';

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
export interface CustomTextButtonProps {
  leftIcon?: React.ReactElement<SvgProps>;
  rightIcon?: React.ReactElement<SvgProps>;
  onPress: () => void;
  textContent: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  leftIconStyles?: StyleProp<ViewStyle>;
  rightIconStyles?: StyleProp<ViewStyle>;
}

export interface CustomBackButtonProps {
  icon?: React.ReactElement<SvgProps>;
  title?: string;
  titleTextStyle?: TextStyle;
  btnContainerStyle?: ViewStyle;
  onBackPress: () => void;
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

export interface otpInputComponentProps {
  setOtp: (otp: string) => void;
  pinCount: number;
}

export interface PlanBenefitSummaryProps {
  title: string;
  titleTextStyle?: TextStyle;
  icon?: React.ReactElement<SvgProps>;
  deductibleAmount: string;
  outOfPocketAmount: string;
  deductiveProgressValue: number;
  outOfPocketMaxProgressValue: number;
}
export interface PharmacyDetails {
  pharmacyLogo: ImageSourcePropType;
  pharmacyName: string;
  pharmacyDistance: string;
  price: number;
  additionalPriceStyle?: TextStyle;
  onPress: () => void;
}

export interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  titleTextStyle?: StyleProp<TextStyle>;
  childViewContainer?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactElement<SvgProps>;
  rightIcon?: React.ReactElement<SvgProps>;
  isSecondaryButton?: boolean;
}
export interface CityZipModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDonePress: (text: string) => void;
}
export interface ProgressStepperComponentProps {
  progressCount: number;
  eventList: StepperData[];
  currentStep: number;
  status: 'Pending' | 'Denied' | 'Approved';
}
export interface TrackerMedicationItemProps {
  date: string;
  type: string;
  dosage: number;
  drugName: string;
  dosageType: string;
  onInfoIconPress: () => void;
}

export interface TrackerMedicationListDataProps {
  id: number;
  date: string;
  type: string;
  dosage: number;
  drugName: string;
  dosageType: string;
}
export interface prescriptionListDataProps {
  id: number;
  buyerName: string;
  buyerImage?: string;
  deliveryType: string;
  totalPrice: string;
  drugName: string;
  dosage: string;
  count: number;
}
export interface PrescriptionListProps {
  id?: number;
  count?: number;
  dosage?: string;
  drugName?: string;
  buyerName?: string;
  totalPrice?: string;
  deliveryType?: string;
  buyerImage?: string;
  firstButtonOnPress: () => void;
  secondButtonOnPress: () => void;
}

export interface FilterDataListProps {
  id: number;
  filterName: string;
}

export interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDonePress: (filterId: number) => void;
}
