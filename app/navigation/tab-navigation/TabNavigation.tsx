import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClaimsScreen, LoginScreen } from "../../modules";
import { Image } from "react-native";
const TabNav = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <TabNav.Screen
        name="Overview"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/Icons/overviewIcon.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/Icons/overviewOutline.png")}
              />
            ),
        }}
        component={ClaimsScreen}
      />
      <TabNav.Screen
        name="coverage"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/Icons/coverageIcon.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/Icons/coverageOutline.png")}
              />
            ),
        }}
        component={LoginScreen}
      />
      <TabNav.Screen
        name="Claims"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/Icons/claimsIcon.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/Icons/settingsOutlineIcon.png")}
              />
            ),
        }}
        component={ClaimsScreen}
      />
      <TabNav.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/Icons/settingsIcon.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/Icons/settingsOutlineIcon.png")}
              />
            ),
        }}
        component={LoginScreen}
      />
    </TabNav.Navigator>
  );
};
export default TabNavigation;
