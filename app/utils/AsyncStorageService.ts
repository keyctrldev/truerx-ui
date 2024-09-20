import AsyncStorage from "@react-native-async-storage/async-storage";

enum StorageKeys {
    biometrics = '@truerx_biometrics',
}

export type BiometricsData = {
    isUserLoggedIn: boolean;
    isBiometricsAuthEnabled: boolean;
    userName: string
};

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

export default {
    loadBiometrics,
    storeBiometrics
}