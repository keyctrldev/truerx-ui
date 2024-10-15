import React, { useEffect } from 'react';
import { Routes } from '../../constants';
import { ChatScreen, LoginScreen, NotificationScreen } from '../../modules';
import TabNavigation from '../tab-navigation/TabNavigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useNotification } from '../../utils';
import Onboarding from '../../modules/Onboarding/Onboarding';
import PreLoginScreen from '../../modules/PreLogin/PreLoginScreen';

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
    <Stack.Navigator screenOptions={screenOption} initialRouteName={Routes.Onboarding}>
      {/* Define the screens to be included in the stack navigator */}
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.home} component={TabNavigation} />
      <Stack.Screen name={Routes.notifications} component={NotificationScreen} />
      <Stack.Screen name={Routes.chat} component={ChatScreen} />
      <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
      <Stack.Screen name={Routes.PreLogin} component={PreLoginScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
