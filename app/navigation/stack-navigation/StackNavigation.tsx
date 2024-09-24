import React from "react";
import { Routes } from "../../constants";
import { LoginScreen } from "../../modules";
import TabNavigation from "../tab-navigation/TabNavigation";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

// Create a stack navigator using React Navigation.
// This will manage navigation between different screens in the app.

const Stack = createStackNavigator();

const RootStack = () => {
  const screenOption: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={screenOption}
      initialRouteName={Routes.login}
    >
      {/* Define the screens to be included in the stack navigator */}
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.home} component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
