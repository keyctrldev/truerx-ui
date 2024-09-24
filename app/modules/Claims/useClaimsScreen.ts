import { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import AsyncStorageService from '../../utils/AsyncStorageService'
import { Routes } from '../../constants';
import { getAllClaims } from '../../api/ClaimsApis';
import { useToast } from '../../context';
import { ClaimsDataItem } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

const useClaimsScreen = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [claimsData, setClaimsData] = useState<ClaimsDataItem[]>([]);
    const { showToast } = useToast()

    const handleLogOutPress = async (): Promise<void> => {
        try {
            await AsyncStorageService.removeAccessToken()
            await AsyncStorageService.storeBiometrics({
                isBiometricsAuthEnabled: false,
                isUserLoggedIn: false,
                userName: ''
            }).then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{
                        name: Routes.login,
                    }]
                })
            })
        } catch (e) {
            throw new Error('Failed to load biometrics from async storage.');
        }
    };

    const getClaimsData = async () => {
        try {
            setIsLoading(true)
            const response = await getAllClaims()
            setClaimsData(response)
        } catch (error: any) {
            showToast(error?.message, 'ERROR');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getClaimsData()
    }, [])
    return {
        handleLogOutPress,
        isLoading,
        claimsData
    }
}

export default useClaimsScreen