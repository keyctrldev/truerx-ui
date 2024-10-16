import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import fonts from '../../assets/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryThemeColor,
  },
  slideParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(80),
  },
  slide: {
    resizeMode: 'contain',
    width: horizontalScale(300),
    height: verticalScale(300),
  },
  headerTxt: {
    fontFamily: fonts.SemiBold,
    color: Colors.white,
    fontSize: moderateScale(30),
    textAlign: 'center',
  },
  DesTxt: {
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.white,
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(30),
  },
  buttonLabelStyle: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    color: Colors.primaryThemeColor,
  },
});
