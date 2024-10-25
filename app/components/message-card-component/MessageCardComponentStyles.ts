import { StyleSheet } from 'react-native';

import { fonts } from '../../assets';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  mainContainerStyle: {
    padding: verticalScale(14),
    backgroundColor: Colors.white,
    borderRadius: verticalScale(10),
  },
  titleTextStyle: {
    color: Colors.black,
    fontFamily: fonts.SemiBold,
    fontSize: moderateScale(15),
  },
  dotContainerStyle: {
    width: verticalScale(11),
    height: verticalScale(11),
    marginRight: verticalScale(5),
    borderRadius: verticalScale(50),
  },
  activeDotStyle: {
    backgroundColor: Colors.lightGreen,
  },
  inActiveDotStyle: {
    backgroundColor: Colors.yellow,
  },
  statusTextStyle: {
    color: Colors.lightBlack,
    fontFamily: fonts.Medium,
    fontSize: moderateScale(14),
  },
  statusContainer: {
    paddingTop: verticalScale(8),
  },
  contentContainerStyle: {
    maxWidth: '90%',
  },
});
