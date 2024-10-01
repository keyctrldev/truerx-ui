import { ClaimsDataItem } from '../types';
import { truerxInstance } from './apiInstance';

export const getClaimsByUserId = async (userId: number): Promise<ClaimsDataItem> => {
  try {
    const response = await truerxInstance.get<ClaimsDataItem>(`/claims/${userId}`);
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getAllClaims = async (page: number, limit: number): Promise<ClaimsDataItem[]> => {
  const offset: number = page * limit;
  try {
    const response = await truerxInstance.get<ClaimsDataItem[]>(`/claims?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};
