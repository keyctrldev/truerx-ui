import { StyleSheet } from "react-native";
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../theme";

export const styles = StyleSheet.create({
  textInputViewStyle: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    width: "87%",
  },
  inputViewStyle: {
    borderWidth: moderateScale(1),
    borderColor: Colors.white,
    borderRadius: moderateScale(5),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    color: Colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(12),
  },
  eyeIconContainer: {
    height: verticalScale(18),
    width: horizontalScale(18),
    marginRight: horizontalScale(10),
  },
  eyeIcon: {
    width: "100%",
    height: "100%",
    tintColor: Colors.white,
  },
});