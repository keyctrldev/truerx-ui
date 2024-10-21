import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  preLogin: {
    width: horizontalScale(86),
    height: verticalScale(86),
    resizeMode: 'contain',
    marginTop: verticalScale(30),
  },
  headerTxt: {
    fontFamily: fonts.SemiBold,
    fontWeight: 700,
    fontSize: moderateScale(25),
    marginTop: verticalScale(16),
    color: Colors.black,
  },
  contentTxt: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: moderateScale(16),
    marginTop: verticalScale(16),
  },
  customButtonStyle: {
    width: '87%',
    alignSelf: 'center',
    marginTop: verticalScale(10),
    borderRadius: moderateScale(30),
    backgroundColor: Colors.primaryThemeColor,
  },
  signInCustomButtonStyle: {
    width: '87%',
    alignSelf: 'center',
    marginTop: verticalScale(10),
    borderRadius: moderateScale(30),
    backgroundColor: Colors.transparent,
    borderColor: Colors.primaryThemeColor,
    borderWidth: 2,
  },
  buttonLabelStyle: {
    fontSize: moderateScale(18),
    color: Colors.white,
  },
  signInButtonLabelStyle: {
    fontSize: moderateScale(18),
    color: Colors.primaryThemeColor,
  },
  terms: {
    textAlign: 'center',
    color: Colors.black,
    marginTop: verticalScale(15),
    paddingHorizontal: horizontalScale(21),
  },
  vectorImage: {
    justifyContent: 'center',
    height: verticalScale(300),
  },
  topInterface: {
    alignItems: 'center',
  },
  bottomInterface: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
