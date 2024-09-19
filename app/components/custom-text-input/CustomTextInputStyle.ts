import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";

export const styles = StyleSheet.create({
  textInputViewStyle: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    width: "70%",
  },
  inputViewStyle: {
    borderWidth: moderateScale(1),
    borderColor: Colors.primary,
    borderRadius: moderateScale(5),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    color: Colors.black,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
  },
  eyeIconContainer: {
    height: verticalScale(16),
    width: horizontalScale(16),
    marginRight: horizontalScale(10),
  },
  eyeIcon: {
    width: "100%",
    height: "100%",
    tintColor: Colors.white,
  },
});