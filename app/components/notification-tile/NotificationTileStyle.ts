import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(25),
    paddingHorizontal: horizontalScale(20),
    shadowOpacity: 0.1,
    shadowColor: Colors.black,
    elevation: moderateScale(3),
    shadowOffset: { width: 0, height: verticalScale(2) },
  },
  highlighted: {
    backgroundColor: Colors.cyan,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: horizontalScale(20),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginBottom: verticalScale(4),
  },
  message: {
    color: Colors.darkGrey,
    fontSize: moderateScale(16),
  },
  time: {
    color: Colors.gray,
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
  iconStyle: {
    width: moderateScale(32),
    height: moderateScale(32),
    resizeMode: 'contain',
  },
  separator: {
    height: verticalScale(1),
    backgroundColor: Colors.gray,
  },
});
