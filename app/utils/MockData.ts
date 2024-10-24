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
  // {
  //   id: 1,
  //   componentTitle: 'ListViewCell',
  //   screenName: Routes.ListViewCellScreen,
  // },
  // {
  //   id: 2,
  //   componentTitle: 'BaseText',
  //   screenName: Routes.AppText,
  // },
  // {
  //   id: 3,
  //   componentTitle: 'CustomToast',
  //   screenName: Routes.CustomToast,
  // },
  // {
  //   id: 4,
  //   componentTitle: 'CustomButton',
  //   screenName: Routes.CustomButton,
  // },
  // {
  //   id: 5,
  //   componentTitle: 'CustomTextInput',
  //   screenName: Routes.CustomTextInput,
  // },
  // {
  //   id: 6,
  //   componentTitle: 'CustomSwitch',
  //   screenName: Routes.CustomSwitch,
  // },
  // {
  //   id: 7,
  //   componentTitle: 'SafeAreaContainer',
  //   screenName: Routes.SafeAreaContainer,
  // },
  // {
  //   id: 8,
  //   componentTitle: 'CustomTabIcon',
  //   screenName: Routes.CustomTabIcon,
  // },
  // {
  //   id: 9,
  //   componentTitle: 'ActivityLoader',
  //   screenName: Routes.ActivityLoader,
  // },
  // {
  //   id: 10,
  //   componentTitle: 'CustomProgressStepper',
  //   screenName: Routes.CustomProgressStepper,
  // },
  // {
  //   id: 11,
  //   componentTitle: 'CustomHeader',
  //   screenName: Routes.CustomHeader,
  // },
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
  {
    id: 16,
    componentTitle: 'Svg',
    screenName: Routes.svgScreen,
  },
  {
    id: 17,
    componentTitle: 'Input Text',
    screenName: Routes.inputText,
  },
  {
    id: 18,
    componentTitle: 'Otp Input',
    screenName: Routes.otpInput,
  },
  {
    id: 19,
    componentTitle: 'Text Button Component',
    screenName: Routes.textButton,
  },
  {
    id: 20,
    componentTitle: 'Linear Progress Bar',
    screenName: Routes.linearProgressBar,
  },
  {
    id: 21,
    componentTitle: 'Your Plan Benefit',
    screenName: Routes.yourPlanBenefit,
  },
  {
    id: 22,
    componentTitle: 'PharmacyPriceList',
    screenName: Routes.PharmacyPriceList,
  },
  {
    id: 23,
    componentTitle: 'CityZipCodeModal',
    screenName: Routes.cityZipCodeModalScreen,
  },
  {
    id: 24,
    componentTitle: 'Claim History Item',
    screenName: Routes.ClaimHistoryItem,
  },
];

export const claimsHistoryData = [
  {
    planPaid: 725,
    balancePaid: 25,
    medicationCost: 750,
    claimID: '#XX000000',
    status: 'Processed',
    date: 'August 19, 2024',
    medicationName: 'Humira',
  },
  {
    planPaid: 600,
    memberPaid: 40,
    claimID: '#XX000001',
    status: 'Processed',
    medicationCost: 640,
    medicationName: 'Enbrel',
    date: 'September 1, 2024',
  },
  {
    planPaid: 850,
    balancePaid: 70,
    status: 'Processed',
    claimID: '#XX000002',
    medicationCost: 920,
    date: 'September 10, 2024',
    medicationName: 'Remicade',
  },
  {
    balancePaid: 40,
    planPaid: 780,
    medicationCost: 820,
    claimID: '#XX000003',
    status: 'Processed',
    date: 'October 5, 2024',
    medicationName: 'Stelara',
  },
  {
    planPaid: 100,
    memberPaid: 500,
    status: 'Processed',
    medicationCost: 500,
    claimID: '#XX000004',
    date: 'October 15, 2024',
    medicationName: 'Xeljanz',
  },
  {
    planPaid: 680,
    memberPaid: 40,
    claimID: '#XX000005',
    status: 'Processed',
    medicationCost: 700,
    date: 'October 20, 2024',
    medicationName: 'Orencia',
  },
];
