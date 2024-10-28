import { Platform, StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { gilroy } from '../../assets';

export const styles = StyleSheet.create({
  slideParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(155),
  },
  slide: {
    resizeMode: 'contain',
    width: horizontalScale(345),
    height: verticalScale(250),
  },
  headerTxt: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(32),
    marginTop: Platform.OS === 'android' ? verticalScale(78) : verticalScale(50),
    lineHeight: verticalScale(41),
  },
  desTxt: {
    textAlign: 'center',
    color: Colors.white,
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(50),
  },
  buttonLabelStyle: {
    fontSize: moderateScale(18),
    color: Colors.primaryThemeColor,
  },
});
