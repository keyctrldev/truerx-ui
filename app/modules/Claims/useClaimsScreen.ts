import { useEffect, useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import AsyncStorageService from '../../utils/AsyncStorageService';
import { Routes } from '../../constants';
import { getAllClaims } from '../../api/ClaimsApis';
import { useToast } from '../../context';
import { ClaimsDataItem, TokenData } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

const useClaimsScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [claimsData, setClaimsData] = useState<ClaimsDataItem[]>([]);
  const { showToast } = useToast();
  const page: number = 0;
  const limit: number = 5;

  const handleLogOutPress = async (): Promise<void> => {
    try {
      await AsyncStorageService.removeAccessToken();
      await AsyncStorageService.storeBiometrics({
        isBiometricsAuthEnabled: false,
        isUserLoggedIn: false,
        userName: '',
      }).then(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: Routes.login,
            },
          ],
        });
      });
    } catch (e) {
      throw new Error('Failed to load biometrics from async storage.');
    }
  };

  const getClaimsData = async () => {
    try {
      setIsLoading(true);
      const accesssToken = await AsyncStorageService.loadAccessToken();
      if (accesssToken) {
        const parsedOuter = JSON.parse(accesssToken?.token);
        const token: string = parsedOuter.token;
        const response = await getAllClaims(token, page, limit);
        setClaimsData(response);
      }
    } catch (error: any) {
      showToast(error?.message, 'ERROR');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getClaimsData();
  }, []);
  return {
    handleLogOutPress,
    isLoading,
    claimsData,
  };
};

export default useClaimsScreen;
