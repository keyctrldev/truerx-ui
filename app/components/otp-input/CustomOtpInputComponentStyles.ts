import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  otpContainerStyle: {
    paddingHorizontal: horizontalScale(8),
    justifyContent: 'space-evenly',
  },
  otpInputContainer: {
    backgroundColor: Colors.white,
    width: horizontalScale(50),
    height: horizontalScale(55),
    borderWidth: horizontalScale(1),
    borderColor: Colors.boxBorderColor,
    borderRadius: horizontalScale(10),
  },
  otpInputTextStyle: {
    fontFamily: fonts.SemiBold,
    color: Colors.black,
    fontSize: moderateScale(22),
  },
  focusedContainerStyle: {
    borderColor: Colors.primary,
    borderWidth: horizontalScale(1),
  },
  focusContainerCursorStyle: {
    backgroundColor: Colors.primary,
  },
});
