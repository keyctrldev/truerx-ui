import React, { RefObject, useRef, useState } from 'react'
import { TextInput } from 'react-native';

const useLoginScreen = () => {
    const passwordRef = useRef<TextInput>(null);
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rememberUserName, setRememberUserName] = useState<boolean>(false);
    const [enableFaceId, setEnableFaceId] = useState<boolean>(false);

    const goToPassword = (nextRef: RefObject<TextInput>): void => {
        nextRef.current?.focus();
    };

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
        setEnableFaceId
    }
}

export default useLoginScreen