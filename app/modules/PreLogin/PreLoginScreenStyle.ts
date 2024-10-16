import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  preLogin: {
    width: horizontalScale(85),
    height: verticalScale(50),
    resizeMode: 'contain',
    marginTop: verticalScale(24),
  },
  headerTxt: {
    fontFamily: fonts.SemiBold,
    fontWeight: '500',
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
    borderRadius: moderateScale(20),
    backgroundColor: Colors.primaryThemeColor,
  },
  buttonLabelStyle: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: Colors.white,
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
