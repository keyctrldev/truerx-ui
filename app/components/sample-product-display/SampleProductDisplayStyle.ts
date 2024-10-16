import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: moderateScale(3),
    margin: moderateScale(8),
    padding: moderateScale(4),
    backgroundColor: Colors.gray,
  },
});
