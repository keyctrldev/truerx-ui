import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backIconStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
    tintColor: Colors.white,
  },
  headerContainer: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: Colors.skyBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: moderateScale(20),
    color: Colors.white,
    marginStart: horizontalScale(10),
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: horizontalScale(10),
  },

  tokenTextStyle: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },

  listContainer: {
    paddingTop: verticalScale(15),
  },
});
