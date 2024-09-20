import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClaimsScreen } from "../../modules";
import { Image } from "react-native";
import { Colors, moderateScale } from "../../theme";
import { Routes } from "../../constants";
import { TabBarIconProps } from "../../types";
import { Icons } from "../../assets";

const TabNav = createBottomTabNavigator();

const getTabBarIcon =(icon: any, outlineIcon: any) =>
  ({ focused }: TabBarIconProps) =>
    (
      <Image
        source={focused ? icon : outlineIcon}
        style={{ width: moderateScale(20), height: moderateScale(20) }}
      />
    );

const TabNavigation = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.lightSlateGray,
        tabBarLabelStyle: {
          fontSize: moderateScale(14),
        },
        tabBarStyle: {
          height: moderateScale(60),
        },
      }}
    >
      <TabNav.Screen
        name={Routes.overview}
        options={{
          tabBarIcon: getTabBarIcon(Icons.overViewIcon, Icons.overViewOutline),
        }}
        component={ClaimsScreen}
      />
      <TabNav.Screen
        name={Routes.coverage}
        options={{
          tabBarIcon:getTabBarIcon(Icons.coverageIcon,Icons.coverageOutline)
        }}
        component={ClaimsScreen}
      />
      <TabNav.Screen
        name={Routes.claims}
        options={{
          tabBarIcon: getTabBarIcon(Icons.claimsIcon,Icons.claimsOutline)
        }}
        component={ClaimsScreen}
      />
      <TabNav.Screen
        name={Routes.settings}
        options={{
          tabBarIcon: getTabBarIcon(Icons.settingsIcon,Icons.settingsOutlineIcon)
        }}
        component={ClaimsScreen}
      />
    </TabNav.Navigator>
  );
};
export default TabNavigation;
