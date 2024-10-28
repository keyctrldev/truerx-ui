import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.indigo,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(20),
    marginVertical: verticalScale(10),
  },
});
