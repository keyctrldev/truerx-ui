import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  actionListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionName: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    fontSize: moderateScale(18),
  },
  separator: {
    height: verticalScale(1),
    backgroundColor: Colors.separatorColor,
  },
});
