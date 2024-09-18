/**
 In this loginscreen, we focus solely on rendering the UI for the login screen.
 
 The business logic, including state management and functions, will be handled separately.
 We'll create a `useLoginScreen.ts` file in the `login` folder to define and manage the necessary state
 and logic. This hook will then be imported into this screen to keep the UI code clean and maintainable.

 */

import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./LoginScreenStyle";
import { AppText, CustomButton, CustomTextInput } from "../../components";
import { loginScreenStrings } from "../../constants";
import useLoginScreen from "./useLoginScreen";

const LoginScreen = () => {
  const {
    passwordRef,
    secureTextEntry,
    setSecureTextEntry,
    isloading,
    goToPassword,
  } = useLoginScreen();
  return (
    <SafeAreaView style={styles.rootContainerStyle}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainerStyle}
        bounces={false}
      >
        <AppText style={styles.loginToExpStyle}>
          {loginScreenStrings.loginToExp}
        </AppText>
        <CustomTextInput
          placeholder="Username"
          keyboardType="email-address"
          returnKeyType="next"
          secureTextEntry={false}
          onSubmitEditing={() => goToPassword(passwordRef)}
        />
        <CustomTextInput
          placeholder="Password"
          ref={passwordRef}
          keyboardType="default"
          returnKeyType="done"
          secureTextEntry={secureTextEntry}
          setSecureEntryText={setSecureTextEntry}
        />

        <CustomButton
          title={loginScreenStrings.loginBtn}
          customStyle={styles.customButtonStyle}
          disabled={isloading}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
