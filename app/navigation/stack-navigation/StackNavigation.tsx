import React, { useEffect } from 'react';
import { Routes } from '../../constants';
import { LoginScreen, NotificationScreen } from '../../modules';
import TabNavigation from '../tab-navigation/TabNavigation';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useNotification } from '../../utils';

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
      <Stack.Screen name={Routes.login} component={LoginScreen} />
      <Stack.Screen name={Routes.home} component={TabNavigation} />
      <Stack.Screen name={Routes.notifications} component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
