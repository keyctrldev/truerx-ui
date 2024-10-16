import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryThemeColor,
  },
  slideParent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(50),
    backgroundColor: Colors.white,
  },
  slide: {
    resizeMode: 'contain',
    height: verticalScale(300),
    width: horizontalScale(300),
  },
  headerTxt: {
    color: Colors.white,
    fontSize: moderateScale(16),
  },
  dotStyle: {
    height: verticalScale(10),
    width: horizontalScale(10),
    borderRadius: moderateScale(10),
  },
  activeDotStyle: {
    borderStyle: 'solid',
    height: verticalScale(10),
    width: horizontalScale(30),
  },
  dotPaginationStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: verticalScale(80),
  },
  customButtonStyle: {
    width: '87%',
    alignSelf: 'center',
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
  },
  buttonLabelStyle: {
    fontWeight: '400',
    fontSize: moderateScale(18),
    color: Colors.primaryThemeColor,
  },
  bottom: { bottom: verticalScale(40) },
});
