import AsyncStorage from "@react-native-async-storage/async-storage";
import { BiometricsData, TokenData } from "../types";

enum StorageKeys {
    biometrics = '@truerx_biometrics',
    accessToken = '@truerx_access_token',
}

const loadBiometrics = async (): Promise<BiometricsData> => {
    try {
        const biometrics = await AsyncStorage.getItem(StorageKeys.biometrics);
        return biometrics != null ? (JSON.parse(biometrics) as BiometricsData) : { isUserLoggedIn: false, isBiometricsAuthEnabled: false, userName: '' };
    } catch (e) {
        throw new Error('Failed to load biometrics from async storage.');
    }
};


const storeBiometrics = async (biometrics: BiometricsData): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(biometrics);
        await AsyncStorage.setItem(StorageKeys.biometrics, jsonValue);
    } catch (e) {
        return Promise.reject(new Error('Failed to save biometrics in async storage.'));
    }
};

const loadAccessToken = async (): Promise<TokenData | null> => {
    try {
        const token = await AsyncStorage.getItem(StorageKeys.accessToken);
        return token ? { token } : null;
    } catch (e) {
        throw new Error('Failed to load access token from async storage.');
    }
};

const storeAccessToken = async (tokenData: TokenData): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(tokenData);
        await AsyncStorage.setItem(StorageKeys.accessToken, jsonValue);
    } catch (e) {
        return Promise.reject(new Error('Failed to save access token in async storage.'));
    }
};

const removeAccessToken = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(StorageKeys.accessToken);
    } catch (e) {
        return Promise.reject(new Error('Failed to remove access token from async storage.'));
    }
};

export default {
    loadBiometrics,
    storeBiometrics,
    loadAccessToken,
    storeAccessToken,
    removeAccessToken
}