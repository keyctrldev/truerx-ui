import { StyleSheet } from 'react-native';

import { gilroy } from '../../assets';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(5),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: horizontalScale(20),
  },
  rightIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: verticalScale(20),
  },
  textContainer: {
    flex: 1,
  },
  drugName: {
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(18),
  },
  infoContent: {
    color: Colors.darkGrey,
  },
  infoInterface: {
    flex: 1,
    flexDirection: 'row',
  },
});
