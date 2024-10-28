import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  stepButton: {
    fontSize: moderateScale(18),
    backgroundColor: Colors.skyBlue,
    borderRadius: moderateScale(10),
  },
  buttonContainer: {
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(20),
  },
  mainContainerStyles: {
    backgroundColor: Colors.white,
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
});
