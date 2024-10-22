import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  otpContainerStyle: {
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-evenly',
  },
  otpInputContainer: {
    backgroundColor: Colors.white,
    width: horizontalScale(52),
    height: horizontalScale(58),
    borderWidth: horizontalScale(1),
    borderColor: Colors.boxBorderColor,
    borderRadius: horizontalScale(8),
    fontFamily: fonts.SemiBold,
    color: Colors.black,
    fontSize: moderateScale(22),
  },
  focusedContainerStyle: {
    borderColor: Colors.primary,
    borderWidth: horizontalScale(1),
  },
});
