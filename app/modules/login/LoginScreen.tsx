import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./LoginScreenStyle";
import {
  AppText,
  CustomButton,
  CustomSwitch,
  CustomTextInput,
} from "../../components";
import { loginScreenStrings } from "../../constants";
import useLoginScreen from "./useLoginScreen";
import { Colors } from "../../theme";

const LoginScreen = () => {
  const {
    passwordRef,
    secureTextEntry,
    setSecureTextEntry,
    isLoading,
    goToPassword,
    rememberUserName,
    setRememberUserName,
    enableFaceId,
    setEnableFaceId,
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
        <View style={styles.inputWrapper}>
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
        </View>

        <View style={styles.horizontalViewStyle}>
          <AppText style={styles.rememberUsrTextStyle}>
            {loginScreenStrings.rememberUserName}
          </AppText>
          <CustomSwitch
            value={rememberUserName}
            onValueChange={setRememberUserName}
            inActiveColor={Colors.lightSlateGray}
          />
        </View>
        <View style={styles.horizontalViewStyle}>
          <AppText style={styles.rememberUsrTextStyle}>
            {loginScreenStrings.enableFingerprint}
          </AppText>
          <CustomSwitch
            value={enableFaceId}
            onValueChange={setEnableFaceId}
            inActiveColor={Colors.lightSlateGray}
          />
        </View>
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
