import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(3),
    margin: moderateScale(3),
    padding: moderateScale(12),
    backgroundColor: Colors.gray,
  },
});
