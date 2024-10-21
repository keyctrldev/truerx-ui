import { Routes } from '../constants';
import { ClaimsData, StepperData } from '../types';

export const claimsData: ClaimsData[] = [
  {
    typeOfConsultance: 'PCP consultation',
    Description: 'Claim for a routine consultation with a primary care physician',
    status: 'Proceesing',
    colorCode: '#FFA500',
  },
  {
    typeOfConsultance: 'Specialist Consultation - Cardiologist',
    Description: 'Claim for a consultation with a cardiologist',
    status: 'Settled',
    colorCode: '#008000',
  },
  {
    typeOfConsultance: 'Specialist Consultation - Cardiologist',
    Description: 'Claim for a consultation with a cardiologist',
    status: 'Canceled',
    colorCode: '#8F3333',
  },
];

export const stepperData: StepperData[] = [
  {
    date: '14 Nov',
    event: 'Accept Offer',
  },
  {
    date: '18 Nov',
    event: 'Schedule Your Assesment',
  },
  {
    date: '23 Nov',
    event: 'Review Repairs',
  },
  {
    date: '30 Nov',
    event: 'Closing',
  },
];

export interface componentListProps {
  id: number;
  componentTitle: string;
  screenName: string;
}

export const componentListView: componentListProps[] = [
  {
    id: 1,
    componentTitle: 'ListViewCell',
    screenName: Routes.ListViewCellScreen,
  },
  {
    id: 2,
    componentTitle: 'BaseText',
    screenName: Routes.AppText,
  },
  {
    id: 3,
    componentTitle: 'CustomToast',
    screenName: Routes.CustomToast,
  },
  {
    id: 4,
    componentTitle: 'CustomButton',
    screenName: Routes.CustomButton,
  },
  {
    id: 5,
    componentTitle: 'CustomTextInput',
    screenName: Routes.CustomTextInput,
  },
  {
    id: 6,
    componentTitle: 'CustomSwitch',
    screenName: Routes.CustomSwitch,
  },
  {
    id: 7,
    componentTitle: 'SafeAreaContainer',
    screenName: Routes.SafeAreaContainer,
  },
  {
    id: 8,
    componentTitle: 'CustomTabIcon',
    screenName: Routes.CustomTabIcon,
  },
  {
    id: 9,
    componentTitle: 'ActivityLoader',
    screenName: Routes.ActivityLoader,
  },
  {
    id: 10,
    componentTitle: 'CustomProgressStepper',
    screenName: Routes.CustomProgressStepper,
  },
  {
    id: 11,
    componentTitle: 'CustomHeader',
    screenName: Routes.CustomHeader,
  },
  {
    id: 12,
    componentTitle: 'NotificationTile',
    screenName: Routes.NotificationTile,
  },
  {
    id: 13,
    componentTitle: 'Collapsible Component',
    screenName: Routes.AcceptTerms,
  },
  {
    id: 14,
    componentTitle: 'MedicationList',
    screenName: Routes.MedicationList,
  },
  {
    id: 15,
    componentTitle: 'Reset Password Method',
    screenName: Routes.resetPasswordMethod,
  },
];
