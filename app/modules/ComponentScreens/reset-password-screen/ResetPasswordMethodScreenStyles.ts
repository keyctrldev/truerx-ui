import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(10),
  },
  resetPasswordContainer: {
    marginVertical: verticalScale(8),
  },
});
