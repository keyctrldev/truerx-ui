import { Routes } from '../constants';
import { ClaimsData, prescriptionListDataProps, StepperData, TrackerMedicationListDataProps } from '../types';

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
    date: 'Submitted by Dr. Smith on Aug 25 2024, 9:23am',
    event: 'Request Received',
  },
  {
    date: 'Aug 25 2024, 9:23am',
    event: 'Under Clinical Review',
  },
  {
    date: 'Aug 25 2024, 9:23am',
    event: 'Clinical Review',
  },
  {
    date: 'Aug 25 2024, 9:23am',
    event: 'Prior Authorization Status',
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
    componentTitle: 'CustomButton',
    screenName: Routes.CustomButton,
  },
  {
    id: 24,
    componentTitle: 'CityZipCodeModal',
    screenName: Routes.cityZipCodeModalScreen,
  },
  {
    id: 25,
    componentTitle: 'CustomProgressStepper',
    screenName: Routes.CustomProgressStepper,
  },
  {
    id: 26,
    componentTitle: 'PATrackerMedicationList',
    screenName: Routes.trackerMedicationList,
  },
  {
    id: 27,
    componentTitle: 'Prescription List',
    screenName: Routes.PrescriptionsList,
  },
];

export const PATrackerMedicationData: TrackerMedicationListDataProps[] = [
  {
    id: 1,
    dosage: 1000,
    date: '28Aug',
    type: 'Tablet',
    dosageType: 'mg',
    drugName: 'Mounjaro',
  },
  {
    id: 2,
    dosage: 12,
    date: '29Aug',
    type: 'Tablet',
    dosageType: 'mg',
    drugName: 'Ozempic',
  },
  {
    id: 3,
    dosage: 20,
    date: '29Aug',
    type: 'Tablet',
    dosageType: 'gm',
    drugName: 'Rybelsus',
  },
];

export const prescriptionListData: prescriptionListDataProps[] = [
  {
    id: 1,
    buyerName: 'Williams Brothers',
    buyerImage: '',
    deliveryType: 'Cash on delivery',
    totalPrice: '$5.00',
    drugName: 'Atorvastatin',
    dosage: '10 mg',
    count: 30,
  },
  {
    id: 2,
    buyerName: 'Health First Pharmacy',
    buyerImage: '',
    deliveryType: 'Insurance billed',
    totalPrice: '$25.00',
    drugName: 'Lisinopril',
    dosage: '20 mg',
    count: 90,
  },
  {
    id: 3,
    buyerName: 'Sunnydale Medical Center',
    buyerImage: '',
    deliveryType: 'Pickup',
    totalPrice: '$15.00',
    drugName: 'Metformin',
    dosage: '500 mg',
    count: 60,
  },
  {
    id: 4,
    buyerName: 'City Pharmacy',
    buyerImage: '',
    deliveryType: 'Home delivery',
    totalPrice: '$10.00',
    drugName: 'Amoxicillin',
    dosage: '250 mg',
    count: 21,
  },
  {
    id: 5,
    buyerName: 'Greenwood Clinic',
    buyerImage: '',
    deliveryType: 'Cash on delivery',
    totalPrice: '$12.00',
    drugName: 'Simvastatin',
    dosage: '5 mg',
    count: 30,
  },
  {
    id: 6,
    buyerName: 'Oakwood Family Health',
    buyerImage: '',
    deliveryType: 'Insurance billed',
    totalPrice: '$30.00',
    drugName: 'Omeprazole',
    dosage: '20 mg',
    count: 60,
  },
];
