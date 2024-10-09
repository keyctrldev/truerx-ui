import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useFormik } from 'formik';
import { AsyncStorageService, LogInSchema, setMixPanelDetails } from '../../utils';
import { TokenData, UserFormType } from '../../types';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants';
import { useToast } from '../../context';
import { loginWithEmailPassword } from '../../api/AuthApis';
import { StackNavigationProp } from '@react-navigation/stack';

const useLoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const passwordRef = useRef<TextInput>(null);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rememberUserName, setRememberUserName] = useState<boolean>(false);
  const [enableFaceId, setEnableFaceId] = useState<boolean>(false);
  const { showToast } = useToast();

  const { handleChange, setFieldTouched, setFieldValue, touched, errors, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LogInSchema,
    onSubmit: values => {
      console.log('values', values),
      onLoginPress(values)},
    }
  );

  const goToPassword = (nextRef: RefObject<TextInput>): void => {
    nextRef.current?.focus();
  };

  const resetTheStack = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: Routes.home,
        },
      ],
    });
  }, [navigation]);

  const authenticateTouchFaceId = useCallback(async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        showToast('Biometric authentication is not supported or not enrolled on this device.', 'ERROR');
        return;
      }
      const supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
      const promptMessage = supportedBiometrics.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)
        ? 'Authenticate with Face ID'
        : 'Authenticate with Fingerprint';

      const result = await LocalAuthentication.authenticateAsync({ promptMessage });

      if (result.success) {
        resetTheStack();
      }
    } catch (error: any) {
      showToast(error?.message, 'ERROR');
    }
  }, [resetTheStack, showToast]);

  const onLoginPress = async (values: UserFormType) => {
    console.log('Click on Login btn......');
    const randomId = Math.random().toString(36).substr(2, 9);
    const updatedValues = {
      ...values,
      randomId,
    };

    await setMixPanelDetails(updatedValues)
    navigation.reset({
      index: 0,
      routes: [
        {
          name: Routes.home,
        },
      ],
    });
    // if (values.email && values.password) {
    //   try {
    //     setIsLoading(true);
    //     await AsyncStorageService.storeBiometrics({
    //       isBiometricsAuthEnabled: enableFaceId,
    //       isUserLoggedIn: true,
    //       userName: rememberUserName ? values.email : '',
    //     });
    //     const response = await loginWithEmailPassword(values.email, values.password);
    //     const tokenData: TokenData = { token: response.access_token };
    //     await AsyncStorageService.storeAccessToken(tokenData);
    //     navigation.reset({
    //       index: 0,
    //       routes: [
    //         {
    //           name: Routes.home,
    //         },
    //       ],
    //     });
    //     await setMixPanelDetails(values)
    //   } catch (error: any) {
    //     showToast(error.response?.data?.message || 'Something went wrong!', 'ERROR');
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }
  };

  const getInitialUserData = useCallback(async () => {
    try {
      const token = await AsyncStorageService.loadAccessToken();
      if (token) {
        AsyncStorageService.loadBiometrics()
          .then(async biometricsFromStorage => {
            if (biometricsFromStorage?.isUserLoggedIn) {
              if (biometricsFromStorage?.userName !== '') {
                setRememberUserName(true);
                setFieldValue('email', biometricsFromStorage?.userName);
              }
              if (biometricsFromStorage?.isBiometricsAuthEnabled) {
                setEnableFaceId(true);
                await authenticateTouchFaceId();
              }
            }
          })
          .catch(error => {
            Alert.alert('Biometrics Error', error?.message);
          });
      }
    } catch (error) {
      showToast('Failed To Load Initial Data', 'ERROR');
    }
  }, [authenticateTouchFaceId, setFieldValue, showToast]);

  useEffect(() => {
    getInitialUserData();
  }, [getInitialUserData]);

  return {
    secureTextEntry,
    setSecureTextEntry,
    passwordRef,
    goToPassword,
    isLoading,
    setIsLoading,
    rememberUserName,
    setRememberUserName,
    enableFaceId,
    setEnableFaceId,
    authenticateTouchFaceId,
    onLoginPress,
    handleChange,
    setFieldTouched,
    errors,
    touched,
    handleSubmit,
    values,
  };
};

export default useLoginScreen;
