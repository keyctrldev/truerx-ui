import { ParamListBase, useNavigation } from '@react-navigation/native';
import AsyncStorageService from '../../utils/AsyncStorageService'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useClaimsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const handleLogOutPress = async (): Promise<void> => {
        try {
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

    return {
        handleLogOutPress
    }
}

export default useClaimsScreen