import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../theme';
import { moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  progressStepper: {
    flexDirection: 'row',
    marginTop: verticalScale(60),
    marginLeft: horizontalScale(20),
  },
  stepContainer: {
    alignItems: 'center',
  },
  circle: {
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    borderWidth: horizontalScale(3),
    borderColor: Colors.skyBlue,
  },
  completedCircle: {
    backgroundColor: Colors.skyBlue,
  },
  buttonContainer: {
    gap: moderateScale(20),
    alignItems: 'center',
  },
  stepButton: {
    backgroundColor: Colors.skyBlue,
    borderRadius: moderateScale(10),
    fontSize: moderateScale(18),
  },
  line: {
    width: moderateScale(3),
    height: moderateScale(40),
    backgroundColor: Colors.gray,
  },
  eventList: {
    height: moderateScale(60),
    marginRight: horizontalScale(10),
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  stepData: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },
});