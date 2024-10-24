import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryThemeColor,
  },
  dotStyle: {
    height: verticalScale(10),
    width: horizontalScale(10),
    borderRadius: moderateScale(10),
  },
  activeDotStyle: {
    borderStyle: 'solid',
    height: verticalScale(10),
    width: horizontalScale(22),
  },
  dotPaginationStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: verticalScale(50),
  },
  customButtonStyle: {
    marginHorizontal: verticalScale(15),
    marginTop: verticalScale(10),
    backgroundColor: Colors.white,
  },
  buttonLabelStyle: {
    color: Colors.primaryThemeColor,
  },
  bottom: {
    bottom: verticalScale(10),
  },
  skipBtnContainer: {
    backgroundColor: 'transparent',
  },
  skipBtnTextStyle: {
    color: Colors.white,
  },
});
