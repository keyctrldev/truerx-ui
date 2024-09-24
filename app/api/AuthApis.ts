import { LoginResponse } from "../types";
import { truerxInstance } from "./apiInstance";

interface LoginRequest {
    email: string;
    password: string;
}

export const loginWithEmailPassword = async (email: string, password: string): Promise<LoginResponse> => {
    const requestBody: LoginRequest = { email, password };
    try {
        const { data } = await truerxInstance.post<LoginResponse>('/auth/login', requestBody);
        return data;
    } catch (error: any) {
        throw error;
    }
};