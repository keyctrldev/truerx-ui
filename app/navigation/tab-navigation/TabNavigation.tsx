import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClaimsScreen } from "../../modules";
import { Image, ImageSourcePropType } from "react-native";
import { Routes } from "../../constants";
import { Icons } from "../../assets";
import { styles } from "./TabNavigationStyle";

const TabNav = createBottomTabNavigator();

const getTabBarIcon =(icon: ImageSourcePropType , outlineIcon: ImageSourcePropType) =>
  ({ focused }:{focused:boolean}) =>
    (
      <Image
        source={focused ? icon : outlineIcon}
        style={styles.image}
      />
    );

const TabNavigation = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor:styles.activeColor.color,
        tabBarInactiveTintColor: styles.inActiveColor.color,
        tabBarLabelStyle:styles.tabBarLabel,
        tabBarStyle: styles.tabBarStyle,
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
