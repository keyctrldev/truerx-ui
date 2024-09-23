import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { styles } from "./LoginScreenStyle";
import {
  ActivityLoader,
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
    handleChange,
    setFieldTouched,
    errors,
    touched,
    handleSubmit,
    values,
  } = useLoginScreen();
  return (
    <SafeAreaView style={styles.rootContainerStyle}>
      {isLoading && <ActivityLoader isVisible={isLoading} />}
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
            placeholder="Email"
            value={values.email}
            onSubmitEditing={() => goToPassword(passwordRef)}
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={handleChange("email")}
            onBlur={() => setFieldTouched("email")}
            error={errors?.email as string}
            touched={touched?.email as boolean}
            secureTextEntry={false}
          />
          <CustomTextInput
            placeholder="Password"
            ref={passwordRef}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={handleChange("password")}
            onBlur={() => setFieldTouched("password")}
            error={errors?.password as string}
            touched={touched?.password as boolean}
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
          onPress={handleSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
