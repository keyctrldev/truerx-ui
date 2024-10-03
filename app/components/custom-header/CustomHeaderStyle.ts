import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.white,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.lightSlateGray,
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    color: Colors.green,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: horizontalScale(34),
    height: verticalScale(32),
    marginLeft: horizontalScale(16),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
