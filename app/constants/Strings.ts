import { Images } from '../assets';
import { Icons } from '../assets';
import { ResetPasswordMethodProps } from '../types';

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
});

export const commonStrings = Object.freeze({
  NoDataFound: 'No Data Found',
});

export const notificationScreenStrings = Object.freeze({
  Notification: 'Notification',
  NoNotificationFound: 'No Notification Found',
});

export const onboardingData = Object.freeze([
  {
    index: 0,
    image: Images.slide1,
    header: 'Manage Your \n Prescriptions',
    description: 'Complete 360 view of your health data with control at your finger tips.',
  },
  {
    index: 1,
    image: Images.slide2,
    header: 'Find a Pharmacy',
    description: 'Easy to find a pharmacy neadrby and easy navigation.',
  },
  {
    index: 2,
    image: Images.slide3,
    header: 'Check your \n Medication history',
    description: 'Full view of your current Prescriptions and upcoming refills.',
  },
]);

export const loginScreenString = Object.freeze({
  onboarding: {
    next: 'Next',
    skip: 'Skip',
    getStarted: 'Get Started',
  },
  preLogin: {
    header: 'Your care is our Priority',
    content: 'Welcome to trueRX! We help make medications affordable, effective and accessible.',
    terms: 'By continuing to use the mobile app, you agree to TrueRx’s ',
    secondTerm: 'Terms, Privacy Policy and HIPAA Compliment.',
    createAccount: 'Create Your Account',
    signIn: 'Sign in',
  },
});

export const acceptTermsScreenStrings = Object.freeze({
  Back: 'Back',
  AgreementToTerms: 'Agreement to terms',
  TermsServices: 'Terms of service',
  PrivacyPolicy: 'Privacy Policy',
  HippaCompliance: 'HIPAA Compliance',
  Accept: 'Accept',
  Decline: 'Decline',
});

export const resetPasswordMethods: ResetPasswordMethodProps[] = [
  {
    id: 1,
    title: 'Email Address',
    subTitle: 'gerrywallace@mail.com',
    icon: Icons.emailIcon,
  },
  {
    id: 2,
    title: 'Text Message',
    subTitle: '910-512-9876',
    icon: Icons.messageIcon,
  },
  {
    id: 3,
    title: 'Voice Call',
    subTitle: '910-512-9876',
    icon: Icons.voiceCallIcon,
  },
];

export const agreementTermsList: { id: number; title: string; subText?: string }[] = [
  {
    id: 1,
    title: acceptTermsScreenStrings.TermsServices,
    subText:
      'Updated: September 1, 2022 The terms and conditions provide important information about consumer and individual use of our pharmacy benefit management (“PBM”) enterprise platform solutions and associated services. Please read these terms before using the website or member portal (the “Site”) through which you access information about the pharmacy benefits provided by your employer, health plan, or other pharmacy benefit provider (the “Provider”) or any another website made available to you through the Provider, or using any services, content, information, or goods provided through or in connection with the Site or by or on behalf of the Provider or one of its subsidiaries or affiliates (together with the Site, collectively, the “Service”). By clicking or tapping “I agree,” “I accept,” or any other similar button or box with respect to these terms, or by using the Service, you expressly agree to be bound by these terms, which constitutes an agreement between you and Provider (“us” or “we”), and which incorporates by this reference any additional terms and conditions posted by the Provider through the Site, or otherwise made available to you by Provider. Certain information and resources contained on and accessible through the Service may be made available by third party suppliers to Provider, in each case subject to your agreement to these terms. THESE TERMS CONTAIN A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS. By using the Service, you affirm that you are of legal age to agree to these terms. We may update these terms at any time and may notify you of such updates by any reasonable means, including by posting a notice of the updated terms to the Site. You agree that we may update these terms from time to time without notice, and you agree to review these terms concurrent with your use of the Services to identify any updates thereto. The last date of any updates will appear at the top of these terms. YOUR CONTINUED USE OF THE SERVICE FOLLOWING ANY UPDATES TO THESE TERMS SHALL CONSTITUTE NOTICE AND ACCEPTANCE OF THE UPDATED TERMS. In addition to these terms, the terms of our Privacy Policy, located here: Privacy Policy, and our HIPAA Policy, located here: Notice of HIPAA Privacy Practices, also apply to your use of the Services. Pharmacy Benefit Management Services You acknowledge and agree that, to be a registered user of the Service, you must be eligible to receive Provider online Services. You may be asked to supply a user ID and password and other information, whether provided to you by your Provider or otherwise, to register to use all or part of the Service. Your Plan Information about your pharmacy benefit is accessible through the Site, including the description of your pharmacy benefit plan. Your Provider is responsible for the design of your pharmacy benefit and the criteria for eligibility, co-payments, ingredient costs, network pharmacies, formulary, and other features of your Plan are the sole responsibility of your Provider. Health Information Any health information provided on the Site (including instructions for administration, therapeutically equivalent drugs, and similar information) is provided for informational purposes and is not a substitute for proper medical advice, diagnosis, or treatment. It is for reference only and should not be used to determine treatment for specific medical conditions. You should never disregard, avoid or delay obtaining medical advice from a licensed practitioner because of information made available through the Service. The Service and its health-related information and resources are not intended and must not be taken as the rendering of medical, nursing, or professional health care advice or services, or the practice of medicine, nursing, or professional health care in any jurisdiction. You should discuss the information provided with a physician, pharmacist, nurse, or other licensed health care professional. You should also check product information (including package inserts) regarding dosage, precautions, warnings, interactions, and contraindications before administering or using any device, drug, herb, vitamin, or supplement discussed on the Service. You understand and agree that neither the Provider nor its respective suppliers or vendors are responsible for any claim, loss, or damage directly or indirectly resulting from your use of the Service or the information resources contained on or accessible through the Service. Provider and its affiliates do not provide any form of insurance. The inclusion of information about any particular pharmaceutical or other product does not indicate anything about whether any insurance plan may or may not provide benefits with respect to that product. All such information is subject to the documentation provided to you about your Provider with respect to your Plan. Product Prices Price (including the validity of any coupon or discount), quantity, availability of any product or service, and shipping methods and shipping rates, and any other information, descriptions, or images available through the Service regarding any products or services, are subject to change without notice. Certain weights, measures, and similar descriptions are approximate and are for convenience only. It is your responsibility to ascertain and obey all applicable local, state, federal, and foreign laws (including minimum age requirements) regarding the possession, use, and sale of any products or services available through or in connection with the Service. Verification of information may be required prior to the acknowledgment or completion of any transaction. Further terms and conditions related to transactions in connection with the Service may apply. You agree to pay all charges incurred by you or on your behalf through the Service, at the prices in effect when such charges are incurred, including all shipping and handling charges.',
  },
  {
    id: 2,
    title: acceptTermsScreenStrings.PrivacyPolicy,
    subText:
      'Updated: September 1, 2022 The terms and conditions provide important information about consumer and individual use of our pharmacy benefit management (“PBM”) enterprise platform solutions and associated services. Please read these terms before using the website or member portal (the “Site”) through which you access information about the pharmacy benefits provided by your employer, health plan, or other pharmacy benefit provider (the “Provider”) or any another website made available to you through the Provider, or using any services, content, information, or goods provided through or in connection with the Site or by or on behalf of the Provider or one of its subsidiaries or affiliates (together with the Site, collectively, the “Service”). By clicking or tapping “I agree,” “I accept,” or any other similar button or box with respect to these terms, or by using the Service, you expressly agree to be bound by these terms, which constitutes an agreement between you and Provider (“us” or “we”), and which incorporates by this reference any additional terms and conditions posted by the Provider through the Site, or otherwise made available to you by Provider. Certain information and resources contained on and accessible through the Service may be made available by third party suppliers to Provider, in each case subject to your agreement to these terms. THESE TERMS CONTAIN A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS. By using the Service, you affirm that you are of legal age to agree to these terms. We may update these terms at any time and may notify you of such updates by any reasonable means, including by posting a notice of the updated terms to the Site. You agree that we may update these terms from time to time without notice, and you agree to review these terms concurrent with your use of the Services to identify any updates thereto. The last date of any updates will appear at the top of these terms. YOUR CONTINUED USE OF THE SERVICE FOLLOWING ANY UPDATES TO THESE TERMS SHALL CONSTITUTE NOTICE AND ACCEPTANCE OF THE UPDATED TERMS. In addition to these terms, the terms of our Privacy Policy, located here: Privacy Policy, and our HIPAA Policy, located here: Notice of HIPAA Privacy Practices, also apply to your use of the Services. Pharmacy Benefit Management Services You acknowledge and agree that, to be a registered user of the Service, you must be eligible to receive Provider online Services. You may be asked to supply a user ID and password and other information, whether provided to you by your Provider or otherwise, to register to use all or part of the Service. Your Plan Information about your pharmacy benefit is accessible through the Site, including the description of your pharmacy benefit plan. Your Provider is responsible for the design of your pharmacy benefit and the criteria for eligibility, co-payments, ingredient costs, network pharmacies, formulary, and other features of your Plan are the sole responsibility of your Provider. Health Information Any health information provided on the Site (including instructions for administration, therapeutically equivalent drugs, and similar information) is provided for informational purposes and is not a substitute for proper medical advice, diagnosis, or treatment. It is for reference only and should not be used to determine treatment for specific medical conditions. You should never disregard, avoid or delay obtaining medical advice from a licensed practitioner because of information made available through the Service. The Service and its health-related information and resources are not intended and must not be taken as the rendering of medical, nursing, or professional health care advice or services, or the practice of medicine, nursing, or professional health care in any jurisdiction. You should discuss the information provided with a physician, pharmacist, nurse, or other licensed health care professional. You should also check product information (including package inserts) regarding dosage, precautions, warnings, interactions, and contraindications before administering or using any device, drug, herb, vitamin, or supplement discussed on the Service. You understand and agree that neither the Provider nor its respective suppliers or vendors are responsible for any claim, loss, or damage directly or indirectly resulting from your use of the Service or the information resources contained on or accessible through the Service. Provider and its affiliates do not provide any form of insurance. The inclusion of information about any particular pharmaceutical or other product does not indicate anything about whether any insurance plan may or may not provide benefits with respect to that product. All such information is subject to the documentation provided to you about your Provider with respect to your Plan. Product Prices Price (including the validity of any coupon or discount), quantity, availability of any product or service, and shipping methods and shipping rates, and any other information, descriptions, or images available through the Service regarding any products or services, are subject to change without notice. Certain weights, measures, and similar descriptions are approximate and are for convenience only. It is your responsibility to ascertain and obey all applicable local, state, federal, and foreign laws (including minimum age requirements) regarding the possession, use, and sale of any products or services available through or in connection with the Service. Verification of information may be required prior to the acknowledgment or completion of any transaction. Further terms and conditions related to transactions in connection with the Service may apply. You agree to pay all charges incurred by you or on your behalf through the Service, at the prices in effect when such charges are incurred, including all shipping and handling charges.',
  },
  {
    id: 3,
    title: acceptTermsScreenStrings.HippaCompliance,
    subText:
      'Updated: September 1, 2022 The terms and conditions provide important information about consumer and individual use of our pharmacy benefit management (“PBM”) enterprise platform solutions and associated services. Please read these terms before using the website or member portal (the “Site”) through which you access information about the pharmacy benefits provided by your employer, health plan, or other pharmacy benefit provider (the “Provider”) or any another website made available to you through the Provider, or using any services, content, information, or goods provided through or in connection with the Site or by or on behalf of the Provider or one of its subsidiaries or affiliates (together with the Site, collectively, the “Service”). By clicking or tapping “I agree,” “I accept,” or any other similar button or box with respect to these terms, or by using the Service, you expressly agree to be bound by these terms, which constitutes an agreement between you and Provider (“us” or “we”), and which incorporates by this reference any additional terms and conditions posted by the Provider through the Site, or otherwise made available to you by Provider. Certain information and resources contained on and accessible through the Service may be made available by third party suppliers to Provider, in each case subject to your agreement to these terms. THESE TERMS CONTAIN A MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS. By using the Service, you affirm that you are of legal age to agree to these terms. We may update these terms at any time and may notify you of such updates by any reasonable means, including by posting a notice of the updated terms to the Site. You agree that we may update these terms from time to time without notice, and you agree to review these terms concurrent with your use of the Services to identify any updates thereto. The last date of any updates will appear at the top of these terms. YOUR CONTINUED USE OF THE SERVICE FOLLOWING ANY UPDATES TO THESE TERMS SHALL CONSTITUTE NOTICE AND ACCEPTANCE OF THE UPDATED TERMS. In addition to these terms, the terms of our Privacy Policy, located here: Privacy Policy, and our HIPAA Policy, located here: Notice of HIPAA Privacy Practices, also apply to your use of the Services. Pharmacy Benefit Management Services You acknowledge and agree that, to be a registered user of the Service, you must be eligible to receive Provider online Services. You may be asked to supply a user ID and password and other information, whether provided to you by your Provider or otherwise, to register to use all or part of the Service. Your Plan Information about your pharmacy benefit is accessible through the Site, including the description of your pharmacy benefit plan. Your Provider is responsible for the design of your pharmacy benefit and the criteria for eligibility, co-payments, ingredient costs, network pharmacies, formulary, and other features of your Plan are the sole responsibility of your Provider. Health Information Any health information provided on the Site (including instructions for administration, therapeutically equivalent drugs, and similar information) is provided for informational purposes and is not a substitute for proper medical advice, diagnosis, or treatment. It is for reference only and should not be used to determine treatment for specific medical conditions. You should never disregard, avoid or delay obtaining medical advice from a licensed practitioner because of information made available through the Service. The Service and its health-related information and resources are not intended and must not be taken as the rendering of medical, nursing, or professional health care advice or services, or the practice of medicine, nursing, or professional health care in any jurisdiction. You should discuss the information provided with a physician, pharmacist, nurse, or other licensed health care professional. You should also check product information (including package inserts) regarding dosage, precautions, warnings, interactions, and contraindications before administering or using any device, drug, herb, vitamin, or supplement discussed on the Service. You understand and agree that neither the Provider nor its respective suppliers or vendors are responsible for any claim, loss, or damage directly or indirectly resulting from your use of the Service or the information resources contained on or accessible through the Service. Provider and its affiliates do not provide any form of insurance. The inclusion of information about any particular pharmaceutical or other product does not indicate anything about whether any insurance plan may or may not provide benefits with respect to that product. All such information is subject to the documentation provided to you about your Provider with respect to your Plan. Product Prices Price (including the validity of any coupon or discount), quantity, availability of any product or service, and shipping methods and shipping rates, and any other information, descriptions, or images available through the Service regarding any products or services, are subject to change without notice. Certain weights, measures, and similar descriptions are approximate and are for convenience only. It is your responsibility to ascertain and obey all applicable local, state, federal, and foreign laws (including minimum age requirements) regarding the possession, use, and sale of any products or services available through or in connection with the Service. Verification of information may be required prior to the acknowledgment or completion of any transaction. Further terms and conditions related to transactions in connection with the Service may apply. You agree to pay all charges incurred by you or on your behalf through the Service, at the prices in effect when such charges are incurred, including all shipping and handling charges.',
  },
];

export const backBtnComponent = {
  back: 'Back',
};

export const planBenefitSummaryComponent = Object.freeze({
  remaining: 'Remaining',
  deductible: 'Deductible',
  outOfPocketMax: 'Out-of-pocket max',
});

export const cityZipCodeModalComponent = Object.freeze({
  enterCityZipCode: 'Enter a city or ZIP Code',
  placeHolderText: 'Ex. "West Lafayette" or "11106"',
  done: 'Done',
  cancel: 'Cancel',
});

export const messageCardComponentData = Object.freeze({
  chatWithHealthStrategist: 'Chat with a Health Strategist',
  availableOnline: 'Available online',
  weBeBackOnline: 'We’ll be back online at 8am EST',
});

export const customFilterModalComponent = Object.freeze({
  filterByDateRange: 'Filter by date range',
  last30Days: 'Last 30 days',
  last60Days: 'Last 60 days',
  last90Days: 'Last 90 days',
});
