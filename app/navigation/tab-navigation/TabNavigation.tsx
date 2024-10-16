import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatFeed, ClaimsScreen, OverviewScreen, SettingsScreen } from '../../modules';
import { ImageSourcePropType } from 'react-native';
import { Routes } from '../../constants';
import { Icons } from '../../assets';
import { styles } from './TabNavigationStyle';
import { CustomTabIcon } from '../../components';

const TabNav = createBottomTabNavigator();

const getTabBarOptions = (
  icon: ImageSourcePropType,
  label: string,
  unmountOnBlur: boolean = false,
): BottomTabNavigationOptions => {
  const tabBarOptions: BottomTabNavigationOptions = {
    unmountOnBlur,
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({ focused }) => <CustomTabIcon focused={focused} label={label} icon={icon} />,
  };
  return tabBarOptions;
};

const TabNavigation = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBarBackgroundStyle,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <TabNav.Navigator screenOptions={screenOptions}>
      <TabNav.Screen
        name={Routes.overview}
        component={OverviewScreen}
        options={getTabBarOptions(Icons.overViewIcon, Routes.overview)}
      />
      <TabNav.Screen
        name={Routes.chatFeed}
        component={ChatFeed}
        options={getTabBarOptions(Icons.coverageIcon, Routes.chatFeed)}
      />
      <TabNav.Screen
        name={Routes.claims}
        component={ClaimsScreen}
        options={getTabBarOptions(Icons.claimsIcon, Routes.claims)}
      />
      <TabNav.Screen
        name={Routes.settings}
        component={SettingsScreen}
        options={getTabBarOptions(Icons.settingsIcon, Routes.settings)}
      />
    </TabNav.Navigator>
  );
};
export default TabNavigation;
