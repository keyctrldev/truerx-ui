import { StyleSheet } from 'react-native';

import { arial } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  validationText: {
    fontSize: moderateScale(14),
    fontFamily: arial.Regular,
  },
  inValidTextStyle: {
    color: Colors.red,
  },
  validTextStyle: {
    color: Colors.success,
  },
  titleTextStyle: {
    fontSize: moderateScale(16),
    fontFamily: arial.SemiBold,
    color: Colors.black,
    paddingVertical: verticalScale(10),
  },
  errorTextContainer: {
    paddingVertical: verticalScale(2),
  },
  iconStyle: {
    marginRight: verticalScale(5),
  },
});
