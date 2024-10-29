import { StyleSheet } from 'react-native';

import { gilroy } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  actionName: {
    color: Colors.black,
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(18),
  },
  separator: {
    height: verticalScale(1),
    marginTop: verticalScale(12),
    backgroundColor: Colors.separatorColor,
  },
});
