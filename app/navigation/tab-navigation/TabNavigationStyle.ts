import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
  tabBarBackgroundStyle: {
    backgroundColor: Colors.white,
    borderTopWidth: verticalScale(1),
    borderColor: Colors.gray,
    height: verticalScale(70),
  },
  headerBackGroundStyle: {
    backgroundColor: Colors.red,
  },
  headerTextStyle: {
    color: Colors.white,
    fontSize: moderateScale(25),
    fontWeight: 'bold',
  },
});
