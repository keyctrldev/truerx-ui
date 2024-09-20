import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../theme";

export const styles = StyleSheet.create({
  image: { 
    width: moderateScale(20), 
    height: moderateScale(20)
 },
  activeColor: {
    color: Colors.black,
  },
  inActiveColor: {
    color: Colors.lightSlateGray,
  },
  tabBarLabel: {
    fontSize: moderateScale(14),
  },
  tabBarStyle: {
    height: moderateScale(60),
  },
});
