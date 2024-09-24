// Define TypeScript interfaces for global types used throughout the application.

export interface UserFormType {
    email: string;
    password: string;
}
export interface ClaimsData {
    typeOfConsultance: string,
    Description: string,
    status: string,
    colorCode: string
}
export interface StepperData{
    date:string,
    event:string,
}
