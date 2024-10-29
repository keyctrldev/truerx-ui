import { StyleSheet } from 'react-native';
import { gilroy } from '../../assets';
import { Colors, verticalScale, moderateScale, horizontalScale } from '../../theme';

export const styles = StyleSheet.create({
  progressStepper: {
    flexDirection: 'row',
  },
  stepContainer: {
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: verticalScale(15),
    height: verticalScale(15),
    backgroundColor: Colors.primary,
    marginBottom: -verticalScale(0.3),
  },
  activeCircle: {
    width: verticalScale(15),
    height: verticalScale(15),
    backgroundColor: Colors.primary,
    borderBottomRightRadius: moderateScale(20),
    borderBottomLeftRadius: moderateScale(20),
  },
  line: {
    width: moderateScale(3),
    height: moderateScale(40),
    backgroundColor: Colors.red,
  },
  stepData: {
    flexDirection: 'row',
  },
  firstStepContainer: {
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
  lastStepContainer: {
    width: 'auto',
    height: 'auto',
    borderRadius: 50,
    backgroundColor: Colors.transparent,
  },
  pendingContainer: {
    borderRadius: verticalScale(20),
  },
  iconStyle: {
    width: verticalScale(18),
    height: verticalScale(18),
  },
  lastStepContainerStyle: {
    padding: verticalScale(5),
    marginTop: -moderateScale(2),
    borderRadius: moderateScale(50),
  },
  completedProgressView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: verticalScale(15),
    height: verticalScale(52),
    backgroundColor: Colors.primary,
  },
  dashLineContainer: {
    flexDirection: 'column',
    width: verticalScale(4),
    height: verticalScale(52),
  },
  dashLineStyle: {
    width: verticalScale(3.5),
    borderRadius: verticalScale(15),
  },
  completedProgressStep: {
    alignSelf: 'center',
    width: horizontalScale(9),
    height: horizontalScale(9),
    backgroundColor: Colors.white,
    borderRadius: verticalScale(50),
  },
  eventNameText: {
    color: Colors.black,
    fontSize: moderateScale(15),
    fontFamily: gilroy.SemiBold,
  },
  eventTimeTexT: {
    color: Colors.mediumGray,
    fontFamily: gilroy.Medium,
    fontSize: moderateScale(13),
  },
  approvedContainerStyle: {
    backgroundColor: Colors.primary,
  },
  declineContainerStyle: {
    backgroundColor: Colors.red,
  },
  eventTextContainer: {
    height: verticalScale(65),
  },
  deniedTextContainer: {
    fontSize: moderateScale(12),
    fontFamily: gilroy.SemiBold,
    color: Colors.white,
  },
  statusContainer: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: verticalScale(12),
    borderRadius: verticalScale(50),
    alignItems: 'center',
  },
});
