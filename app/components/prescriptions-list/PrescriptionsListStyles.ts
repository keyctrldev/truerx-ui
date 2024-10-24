import { Platform, StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  prescriptionContainer: {
    gap: verticalScale(15),
    padding: moderateScale(20),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  topInterface: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  darkContent: {
    color: Colors.black,
    fontWeight: 600,
  },
  lightContent: {
    color: Colors.mediumGray,
    fontSize: moderateScale(12),
  },
  separator: {
    borderColor: Colors.separatorColor,
    borderBottomWidth: moderateScale(1),
  },
  middleInterface: {
    flexDirection: 'row',
  },
  priceText: {
    fontSize: moderateScale(24),
    fontFamily: fonts.SemiBold,
  },
  labelStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(5),
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(3),
    backgroundColor: Colors.lightGray,
    paddingHorizontal: horizontalScale(5),
  },
  labelText: {
    fontSize: moderateScale(8),
  },
  bottomInterface: {
    gap: verticalScale(10),
  },
  firstBtnCustomStyle: {
    width: '100%',
    borderRadius: moderateScale(30),
    backgroundColor: Colors.primaryThemeColor,
    paddingVertical: moderateScale(10),
  },
  note: {
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(18),
  },
  secondBtnCustomStyle: {
    width: '100%',
    fontSize: moderateScale(18),
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(10),
    backgroundColor: Colors.lightGray,
    borderWidth: 0,
  },
  secondBtnLabelStyle: {
    color: Colors.mediumGray,
    fontSize: moderateScale(12),
  },
  staticBuyerName: {
    resizeMode: 'contain',
    height: verticalScale(48),
    width: horizontalScale(48),
  },
  labelView: {
    justifyContent: 'space-between',
  },
  buttonLabelStyle: {
    fontSize: moderateScale(12),
  },
});
