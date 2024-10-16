import { StyleSheet } from 'react-native';

import fonts from '../../assets/fonts';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  prelogin: {
    width: horizontalScale(85),
    height: verticalScale(50),
    resizeMode: 'contain',
    marginTop: verticalScale(24),
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontWeight: '500',
    fontSize: moderateScale(25),
    marginTop: verticalScale(16),
    color: Colors.black,
  },
  content: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: moderateScale(16),
    marginTop: verticalScale(16),
  },
  customButtonStyle: {
    width: '87%',
    alignSelf: 'center',
    marginTop: verticalScale(10),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.primaryThemeColor,
  },
  buttonLabelStyle: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: Colors.white,
  },
  terms: {
    color: Colors.black,
    paddingHorizontal: horizontalScale(21),
    textAlign: 'center',
    marginTop: verticalScale(15),
  },
  terms2: {
    color: Colors.primaryThemeColor,
    paddingHorizontal: horizontalScale(21),
  },
  vectorBG: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(300),
  },
  center: {
    alignItems: 'center',
  },
  bottomInterface: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
