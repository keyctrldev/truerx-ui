import { RefObject, useEffect, useRef, useState } from 'react'
import { TextInput, Alert } from 'react-native';
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorageService from '../../utils/AsyncStorageService';
import { useFormik } from 'formik';
import { LogInSchema } from '../../utils';
import { UserFormType } from '../../types';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useLoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const passwordRef = useRef<TextInput>(null);
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rememberUserName, setRememberUserName] = useState<boolean>(false);
    const [enableFaceId, setEnableFaceId] = useState<boolean>(false);

    const { handleChange, setFieldTouched, setFieldValue, touched, errors, handleSubmit, values } =
        useFormik({
            initialValues: {
                email: '',
                password: '',
            },
            validationSchema: LogInSchema,
            onSubmit: values => onLoginPress(values),
        });

    const goToPassword = (nextRef: RefObject<TextInput>): void => {
        nextRef.current?.focus();
    };

    const resetTheStack = (userName: string) => {
        navigation.reset({
            index: 0,
            routes: [{
                name: Routes.claims,
                params: { email: userName }
            }]
        })
    }

    const authenticateTouchFaceId = async (userName: string) => {
        try {
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();

            if (!hasHardware || !isEnrolled) {
                Alert.alert("Biometric authentication is not supported or not enrolled on this device.");
                return;
            }

            const supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
            const promptMessage = supportedBiometrics.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)
                ? "Authenticate with Face ID"
                : "Authenticate with Fingerprint";

            const result = await LocalAuthentication.authenticateAsync({ promptMessage });

            if (result.success) {
                resetTheStack(userName);
            }
        } catch (error: any) {
            Alert.alert("Authentication error: " + error?.message);
        }
    };

    const onLoginPress = async (values: UserFormType) => {
        if (values.email && values.password) {
            AsyncStorageService.storeBiometrics({
                isBiometricsAuthEnabled: enableFaceId,
                isUserLoggedIn: true,
                userName: rememberUserName ? values.email : ''
            }).then(() => {
                resetTheStack(values.email)
            })
        }
    }

    useEffect(() => {
        AsyncStorageService.loadBiometrics().then(async (biometricsFromStorage) => {
            if (biometricsFromStorage?.isUserLoggedIn) {
                if (biometricsFromStorage.userName !== "") {
                    setRememberUserName(!rememberUserName)
                    setFieldValue('email', biometricsFromStorage.userName);
                }
                if (biometricsFromStorage?.isBiometricsAuthEnabled) {
                    setEnableFaceId(!enableFaceId)
                    await authenticateTouchFaceId(biometricsFromStorage.userName)
                }
            }
        }).catch((error) => {
            Alert.alert('Biometrics Error', error?.message)
        })
    }, [])

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
        values
    }
}

export default useLoginScreen