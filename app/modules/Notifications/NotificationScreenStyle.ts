import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  backIconStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  headerContainer: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: horizontalScale(10),
  },
  tokenTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
});
