import { customFilterModalComponent, Routes } from '../constants';
import {
  ClaimsData,
  StepperData,
  FilterDataListProps,
  prescriptionListDataProps,
  TrackerMedicationListDataProps,
  PlanDetailCardDataProps,
  chatDataProps,
  profileIconsDataProps,
} from '../types';

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
  {
    id: 26,
    componentTitle: 'Plan Detail Card',
    screenName: Routes.PlanDetailCard,
  },
  {
    id: 28,
    componentTitle: 'Date Range Filter Modal',
    screenName: Routes.filterModalScreen,
  },
  {
    id: 29,
    componentTitle: 'Claim History Item',
    screenName: Routes.ClaimHistoryItem,
  },
  {
    id: 30,
    componentTitle: 'Action List Item',
    screenName: Routes.ActionListItem,
  },
  {
    id: 31,
    componentTitle: 'Message Card Component',
    screenName: Routes.messageCardComponent,
  },
  {
    id: 32,
    componentTitle: 'Profile Icons Screen',
    screenName: Routes.profileIcons,
  },
  {
    id: 33,
    componentTitle: 'SaveMoneyView',
    screenName: Routes.saveMoneyView,
  },
  {
    id: 34,
    componentTitle: 'ChatDetail Component',
    screenName: Routes.chatDetail,
  },
  {
    id: 35,
    componentTitle: 'Chat Input Box',
    screenName: Routes.chatInputBox,
  },
  {
    id: 35,
    componentTitle: 'Deductibles Card',
    screenName: Routes.deducibleCard,
  },
  {
    id: 36,
    componentTitle: 'Membership Card',
    screenName: Routes.membershipCard,
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

export const planDesignData: PlanDetailCardDataProps[] = [
  {
    id: 1,
    memberName: 'Alex Johnson',
    acctNumber: 56342,
    groupNumber: 2145,
    bpdDate: '10/05/2024',
    erisa: 'No',
    tpaName: 'Blue Cross',
    posRebates: 'Yes',
    firmName: 'Hartford Inc.',
    formulary: 'Closed',
    thresholdAmt: 3000,
  },
  {
    id: 2,
    memberName: 'Sarah Lee',
    acctNumber: 34218,
    groupNumber: 1092,
    bpdDate: '08/20/2024',
    erisa: 'Yes',
    tpaName: 'Aetna',
    posRebates: 'No',
    firmName: 'Zenith Co.',
    formulary: 'Open',
    thresholdAmt: 2500,
  },
  {
    id: 3,
    memberName: 'Michael Brown',
    acctNumber: 47820,
    groupNumber: 3342,
    bpdDate: '12/15/2024',
    erisa: 'Yes',
    tpaName: 'UMR',
    posRebates: 'Yes',
    firmName: 'GlobalCorp',
    formulary: 'Open',
    thresholdAmt: 2750,
  },
  {
    id: 4,
    memberName: 'Emily Davis',
    acctNumber: 91234,
    groupNumber: 5671,
    bpdDate: '07/01/2024',
    erisa: 'No',
    tpaName: 'Cigna',
    posRebates: 'No',
    firmName: 'Omega Ltd.',
    formulary: 'Closed',
    thresholdAmt: 1500,
  },
  {
    id: 5,
    memberName: 'John Miller',
    acctNumber: 67391,
    groupNumber: 8902,
    bpdDate: '11/10/2024',
    erisa: 'Yes',
    tpaName: 'Anthem',
    posRebates: 'Yes',
    firmName: 'AlphaCo',
    formulary: 'Open',
    thresholdAmt: 3500,
  },
];

export const filterDataList: FilterDataListProps[] = [
  {
    id: 1,
    filterName: customFilterModalComponent.last30Days,
  },
  {
    id: 2,
    filterName: customFilterModalComponent.last60Days,
  },
  {
    id: 3,
    filterName: customFilterModalComponent.last90Days,
  },
];

export const chatData: chatDataProps[] = [
  {
    id: 1,
    isSender: false,
    chat: 'Hello Kris 👋 Thank you for for contacting trueRx Health Strategist. I would be happy to assist you. May I please start with your date of birth and mailing address?',
  },
  {
    id: 2,
    isSender: true,
    chat: 'My DOB is 1.1.1950 and my address is 1234 Lazy Lane Hyperville, Indiana 45285',
  },
  {
    id: 3,
    isSender: false,
    chat: 'Kris, thank you for this information. How may I assist you today?',
  },
  {
    id: 4,
    isSender: true,
    chat: 'I need to see if Wegovy is covered by my insurance.  ',
  },
  {
    id: 5,
    isSender: false,
    chat: 'I would be happy to see if Wegovy is covered. Please give me a few moments.',
  },
  {
    id: 6,
    isSender: true,
    chat: 'Yes, can you provide more information about this?',
  },
  {
    id: 7,
    isSender: false,
    chat: 'I would be happy to help. Please give me a few moments.',
  },
];
export const profileIconsData: profileIconsDataProps[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    profileIcon: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Reacher',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Brown',
    profileIcon: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
  },
];
