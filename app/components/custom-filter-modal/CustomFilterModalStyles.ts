import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: verticalScale(8),
    paddingHorizontal: horizontalScale(20),
  },
  titleTextStyle: {
    color: Colors.black,
    fontSize: moderateScale(18),
    fontFamily: fonts.SemiBold,
    paddingTop: verticalScale(20),
  },
  itemSeparatorContainer: {
    marginVertical: verticalScale(15),
  },
  filerNameStyle: {
    color: Colors.black,
    fontFamily: fonts.Regular,
    fontSize: moderateScale(16),
  },
  radioBtnContainer: {
    marginVertical: verticalScale(15),
  },
});
