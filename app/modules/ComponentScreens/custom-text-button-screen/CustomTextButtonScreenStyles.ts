import { StyleSheet } from 'react-native';

import { Colors, horizontalScale, moderateScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  mainInterface: {
    gap: verticalScale(20),
    marginHorizontal: horizontalScale(30),
  },
  textStyle: {
    color: Colors.primaryThemeColor,
    fontSize: moderateScale(18),
  },
  containerStyle: {
    borderWidth: 1,
    backgroundColor: Colors.primaryLightTheme,
  },
  rightIconStyles: {
    padding: moderateScale(10),
    backgroundColor: Colors.gray,
    borderRadius: moderateScale(30),
    marginLeft: horizontalScale(10),
  },
  leftIconStyles: {
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
    marginRight: horizontalScale(10),
    backgroundColor: Colors.lightGray,
  },
});
