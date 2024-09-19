import { ClaimsData } from "../types";

export const claimsData: ClaimsData[] = [
    {
        typeOfConsultance: "PCP consultation",
        Description:
            "Claim for a routine consultation with a primary care physician",
        status: "Proceesing",
        colorCode: '#FFA500'
    },
    {
        typeOfConsultance: "Specialist Consultation - Cardiologist",
        Description: "Claim for a consultation with a cardiologist",
        status: "Settled",
        colorCode: '#008000'
    },
    {
        typeOfConsultance: "Specialist Consultation - Cardiologist",
        Description: "Claim for a consultation with a cardiologist",
        status: "Canceled",
        colorCode: '#8F3333'
    },
];