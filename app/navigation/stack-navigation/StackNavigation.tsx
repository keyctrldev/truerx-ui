import React from "react";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Routes } from "../../constants";
import { ClaimsScreen, LoginScreen } from "../../modules";
import TabNavigation from "../tab-navigation/TabNavigation";

// Create a stack navigator using React Navigation.
// This will manage navigation between different screens in the app.

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const screenOption: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "slide_from_right",
  };

  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={Routes.login}
    >
      {/* Define the screens to be included in the stack navigator */}
      {/* <Stack.Screen name={Routes.login} component={LoginScreen} /> */}
      <Stack.Screen name={Routes.home} component={TabNavigation}/>
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
