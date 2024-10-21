import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  btnContainer: {
    padding: horizontalScale(20),
    backgroundColor: Colors.white,
    borderWidth: horizontalScale(2),
    borderColor: Colors.overlayDark,
    borderRadius: horizontalScale(8),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    resizeMode: 'contain',
  },
  titleTextStyle: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(20),
    flex: 1,
  },
  subTitleTextStyle: {
    paddingHorizontal: horizontalScale(45),
    paddingVertical: verticalScale(6),
    fontSize: moderateScale(14),
    color: Colors.lightBlack,
  },
  activeContainer: {
    borderColor: Colors.primary,
    borderWidth: horizontalScale(2),
  },
});
