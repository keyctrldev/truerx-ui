import { Images } from '../assets';

/**
  File for storing localized strings and text constants used in the application.
  Using `Object.freeze` to ensure that the object cannot be modified at runtime
 */
export const loginScreenStrings = Object.freeze({
  demoHeading: 'Demo App',
  loginToDemo: 'Login to Demo App',
  loginBtn: 'Login',
  rememberUserName: 'Remember Username',
  enableFingerprint: 'Enable Fingerprint/Face ID',
});

export const logInSchemaError = Object.freeze({
  email: {
    regExError: 'Email is not Valid.',
    requiredError: 'Email is Required.',
  },
  password: {
    regExError: 'Password must contain minimum 8 character, one upper,one lower and one special character.',
    requiredError: 'Password is required.',
    minimumCharacterError: 'Password must contain minimum 8 characters',
    maximumCharacterError: 'Password must not contain more than 12 characters',
  },
});

export const schemaRegEx = Object.freeze({
  emailRegEx:
    /^(([^<>()[\]\.,;:\s@\"!#]+(\.[^<>()[\]\.,;:\s@\"!#]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  passwordRegEx: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  characterOnlyRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  // digitsOnlyRegEx: /^[0-9]+$/,
});

export const claimsScreenStrings = Object.freeze({
  claimsDemoHeading: 'Demo',
  historyHeading: 'Claims History',
  claimSection: 'Claims',
  statusSection: 'Status',
});

export const stepperComponentStrings = Object.freeze({
  nextButton: 'Next',
  resetButton: 'Reset',
});

export const headerComponentStrings = Object.freeze({
  Overview: 'Overview',
  Coverage: 'Coverage',
  Claims: 'Claims',
  Settings: 'Settings',
  Notification: 'Notification',
  chat: 'Chat',
});

export const commonStrings = Object.freeze({
  NoDataFound: 'No Data Found',
});

export const notificationScreenStrings = Object.freeze({
  Notification: 'Notification',
  NoNotificationFound: 'No Notification Found',
});

export const soket_url = 'http://192.168.41.16:3000';
export const sendMessageApi = 'http://192.168.41.16:3000/getChats';

export const onboardingData = Object.freeze([
  {
    index: 0,
    image: Images.slide1,
    Header: 'Manage Your \n Prescriptions',
    Description: 'Complete 360 view of your health data with control at your finger tips.',
  },
  {
    index: 1,
    image: Images.slide2,
    Header: 'Find a Pharmacy',
    Description: 'Easy to find a pharmacy neadrby and easy navigation',
  },
  {
    index: 2,
    image: Images.slide3,
    Header: 'Check your \n Medication history',
    Description: 'Full view of your current Prescriptions and upcoming refills.',
  },
]);

export const loginScreenString = Object.freeze({
  onboarding: {
    next: 'Next',
    skip: 'Skip',
  },
  preLogin: {
    header: 'Your care is our Priority',
    content: 'Welcome to TrueRX! We help make madications affortable, effective and accessible.',
    terms: 'By Countining to use the mobile app, you agree to TrueRxs',
    terms2: 'Terms, Privacy Policy and HIPAA Compliment.',
    createAccount: 'Create Your Account',
    signin: 'Sign in',
  },
});
