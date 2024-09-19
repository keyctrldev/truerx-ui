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
    isLoading,
    goToPassword,
  } = useLoginScreen();
  return (
    <SafeAreaView style={styles.rootContainerStyle}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainerStyle}
        bounces={false}
      >
        <AppText style={styles.demoHeadingStyle}>
          {loginScreenStrings.demoHeading?.toUpperCase()}
        </AppText>
        <AppText style={styles.loginToDemoTextStyle}>
          {loginScreenStrings.loginToDemo}
        </AppText>
        <CustomTextInput
          placeholder="Username"
          keyboardType="email-address"
          returnKeyType="next"
          secureTextEntry={false}
          onSubmitEditing={() => goToPassword(passwordRef)}
          containerStyle={styles.nameInputStyle}
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
          buttonLabelStyle={styles.buttonLabelStyle}
          disabled={isLoading}
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
