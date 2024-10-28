import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';
import { gilroy } from '../../assets';

export const styles = StyleSheet.create({
  claimContainer: {
    borderColor: Colors.gray,
    padding: moderateScale(18),
    backgroundColor: Colors.white,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(10),
  },
  statusInterface: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  status: {
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: Colors.primaryThemeColor,
  },
  moreIconContainer: {
    borderColor: Colors.gray,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.lightGray,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
  },
  processedText: {
    color: Colors.white,
  },
  drugName: {
    color: Colors.black,
    fontFamily: gilroy.SemiBold,
    fontSize: moderateScale(18),
  },
  infoStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(2),
  },
  infoText: {
    color: Colors.black,
  },
  alignment: {
    marginTop: verticalScale(10),
  },
  middleAlignment: {
    marginTop: verticalScale(18),
  },
});
