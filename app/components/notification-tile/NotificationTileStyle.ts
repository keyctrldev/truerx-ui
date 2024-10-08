import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: moderateScale(16),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(12),
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8),
    elevation: moderateScale(3),
  },
  highlighted: {
    backgroundColor: Colors.cyan,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: horizontalScale(12),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
  },
  message: {
    fontSize: moderateScale(14),
    color: Colors.lightBlack,
  },
  time: {
    fontSize: moderateScale(12),
    color: Colors.gray,
    marginTop: verticalScale(4),
  },
  userImageStyle: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
});
