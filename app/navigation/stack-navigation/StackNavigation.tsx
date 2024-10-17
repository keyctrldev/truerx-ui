import React, { useEffect } from 'react';
import { Routes } from '../../constants';
import { NotificationScreen } from '../../modules';
import TabNavigation from '../tab-navigation/TabNavigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useNotification } from '../../utils';
import ListViewCellScreen from '../../modules/ComponentScreens/ListViewCellScreen';
import AppTextScreen from '../../modules/ComponentScreens/AppTextScreen';
import CustomToastScreen from '../../modules/ComponentScreens/CustomToastScreen';
import CustomButtonScreen from '../../modules/ComponentScreens/CustomButtonScreen';
import CustomTextInputScreen from '../../modules/ComponentScreens/CustomTextInputScreen';
import CustomSwitchScreen from '../../modules/ComponentScreens/CustomSwitchScreen';
import SafeAreaContainerScreen from '../../modules/ComponentScreens/SafeAreaContainerScreen';
import CustomTabIconScreen from '../../modules/ComponentScreens/CustomTabIconScreen';
import ActivityLoaderScreen from '../../modules/ComponentScreens/ActivityLoaderScreen';
import CustomProgressBarScreen from '../../modules/ComponentScreens/CustomProgressBarScreen';
import NotificationTileScreen from '../../modules/ComponentScreens/NotificationTileScreen';
import CustomHeaderScreen from '../../modules/ComponentScreens/CustomHeaderScreen';

{
  //! Below Imports Are Visualization of Custom Components UI */
}

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
    <Stack.Navigator screenOptions={screenOption} initialRouteName={Routes.login}>
      {/* Define the screens to be included in the stack navigator */}
      {/* <Stack.Screen name={Routes.login} component={LoginScreen} /> */}
      <Stack.Screen name={Routes.home} component={TabNavigation} />
      <Stack.Screen name={Routes.notifications} component={NotificationScreen} />

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
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
