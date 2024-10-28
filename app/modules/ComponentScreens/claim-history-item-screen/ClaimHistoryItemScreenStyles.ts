import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: horizontalScale(10),
  },
  heading: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    margin: moderateScale(8),
  },
});
