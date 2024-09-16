/**
 In this loginscreen, we focus solely on rendering the UI for the login screen.
 
 The business logic, including state management and functions, will be handled separately.
 We'll create a `useLoginScreen.ts` file in the `login` folder to define and manage the necessary state
 and logic. This hook will then be imported into this screen to keep the UI code clean and maintainable.

 */

import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./LoginScreenStyle";
import { AppText } from "../../components";
import { loginScreenStrings } from "../../constants";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainerStyle}>
      <AppText>{loginScreenStrings.login}</AppText>
    </SafeAreaView>
  );
};

export default LoginScreen;
