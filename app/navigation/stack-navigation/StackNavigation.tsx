import React, { useEffect } from 'react';
import { Routes } from '../../constants';
import TabNavigation from '../tab-navigation/TabNavigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useNotification } from '../../utils';
import Onboarding from '../../modules/Onboarding/Onboarding';
import PreLoginScreen from '../../modules/PreLogin/PreLoginScreen';

//! Below Imports Are Visualization of Custom Components UI */
import {
  LoginScreen,
  AppTextScreen,
  InputTextScreen,
  AcceptTermsScreen,
  CustomToastScreen,
  ListViewCellScreen,
  CustomButtonScreen,
  CustomHeaderScreen,
  CustomSwitchScreen,
  NotificationScreen,
  CustomTabIconScreen,
  MedicationListScreen,
  ActivityLoaderScreen,
  CustomTextInputScreen,
  NotificationTileScreen,
  CustomProgressBarScreen,
  SafeAreaContainerScreen,
  ResetPasswordMethodScreen,
  OtpInputScreen,
} from '../../modules';
import SvgScreen from '../../modules/ComponentScreens/svg-screen/SvgScreen';

const Stack = createStackNavigator();
const RootStack = () => {
  const { notificationListener } = useNotification();
  const screenOption: StackNavigationOptions = {
    headerShown: false,
  };

  useEffect(() => {
    notificationListener();
  }, []);
  return (
    <Stack.Navigator screenOptions={screenOption} initialRouteName={Routes.home}>
      {/* Define the screens to be included in the stack navigator */}
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.home} component={TabNavigation} />
      <Stack.Screen name={Routes.notifications} component={NotificationScreen} />
      <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
      <Stack.Screen name={Routes.PreLogin} component={PreLoginScreen} />

      {/* //! Below Screens Are Visualization of Custom Components UI */}
      <Stack.Screen name={Routes.ListViewCellScreen} component={ListViewCellScreen} />
      <Stack.Screen name={Routes.AppText} component={AppTextScreen} />
      <Stack.Screen name={Routes.CustomToast} component={CustomToastScreen} />
      <Stack.Screen name={Routes.CustomButton} component={CustomButtonScreen} />
      <Stack.Screen name={Routes.CustomTextInput} component={CustomTextInputScreen} />
      <Stack.Screen name={Routes.CustomSwitch} component={CustomSwitchScreen} />
      <Stack.Screen name={Routes.SafeAreaContainer} component={SafeAreaContainerScreen} />
      <Stack.Screen name={Routes.CustomTabIcon} component={CustomTabIconScreen} />
      <Stack.Screen name={Routes.ActivityLoader} component={ActivityLoaderScreen} />
      <Stack.Screen name={Routes.CustomProgressStepper} component={CustomProgressBarScreen} />
      <Stack.Screen name={Routes.CustomHeader} component={CustomHeaderScreen} />
      <Stack.Screen name={Routes.NotificationTile} component={NotificationTileScreen} />
      <Stack.Screen name={Routes.AcceptTerms} component={AcceptTermsScreen} />
      <Stack.Screen name={Routes.MedicationList} component={MedicationListScreen} />
      <Stack.Screen name={Routes.resetPasswordMethod} component={ResetPasswordMethodScreen} />
      <Stack.Screen name={Routes.svgScreen} component={SvgScreen} />
      <Stack.Screen name={Routes.inputText} component={InputTextScreen} />
      <Stack.Screen name={Routes.otpInput} component={OtpInputScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
