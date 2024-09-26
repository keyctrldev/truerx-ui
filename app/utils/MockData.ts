import { ClaimsData, StepperData } from "../types";

export const claimsData: ClaimsData[] = [
  {
    typeOfConsultance: "PCP consultation",
    Description:
      "Claim for a routine consultation with a primary care physician",
    status: "Proceesing",
    colorCode: "#FFA500",
  },
  {
    typeOfConsultance: "Specialist Consultation - Cardiologist",
    Description: "Claim for a consultation with a cardiologist",
    status: "Settled",
    colorCode: "#008000",
  },
  {
    typeOfConsultance: "Specialist Consultation - Cardiologist",
    Description: "Claim for a consultation with a cardiologist",
    status: "Canceled",
    colorCode: "#8F3333",
  },
];
export const stepperData: StepperData[] = [
  {
    date:'14 Nov',
    event: "Accept Offer",
  },
  {
    date:'18 Nov',
    event: "Schedule Your Assesment",
  },
  {
    date:'23 Nov',
    event: "Review Repairs",
  },
  {
    date:'30 Nov',
    event: "Closing",
  },
];
