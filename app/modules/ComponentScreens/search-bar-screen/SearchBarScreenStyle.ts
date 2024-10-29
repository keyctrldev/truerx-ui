import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(20),
    marginVertical: verticalScale(10),
    marginHorizontal: horizontalScale(15),
  },
});
