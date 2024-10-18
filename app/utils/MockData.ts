import { Routes } from '../constants';
import { ClaimsData, ResetPasswordMethodProps, StepperData } from '../types';
import { acceptTermsScreenStrings } from '../constants';
import { Icons } from '../assets';

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
