import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  actionName: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    fontSize: moderateScale(18),
  },
  separator: {
    height: verticalScale(1),
    marginTop: verticalScale(12),
    backgroundColor: Colors.separatorColor,
  },
});
